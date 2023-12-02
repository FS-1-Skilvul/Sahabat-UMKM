import { useState, useEffect } from "react";
import Layout from "./Layout";

function ListKelas() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Fetch data from the "/kelas" endpoint
    fetch("https://backend-production-4c5b.up.railway.app/kelas")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data is in the format you provided
        setCourses(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col py-5">
        {/* <SideBarAdmin /> */}

        <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary">Daftar Kelas</h1>
        <table className="table-auto m-4 border-collapse ">
          <thead className="">
            <tr className=" text-left font-bold  ring-offset-neutral-400">
              <th>Id_Kategori</th>
              <th>Id_User</th>
           
              <th>Tanggal Transaksi</th>
              <th>Total</th>
              </tr>
          </thead>
          <tbody className="min-h-screen">
            {courses.map((transaction) => (
              <tr key={transaction.id} className="w-24">
                <td className="text-left align-top">{transaction.id_kelas}</td>
                <td className="text-left align-top">{transaction.id_user}</td>
                <td className="text-left align top">{transaction.tanggal_transaksi}</td>
                <td className="text-left align top">{transaction.total}</td>


              </tr>
            ))}
          </tbody>
        </table>
        {/* Konten utama */}
        {/* <Outlet /> */}
      </div>
    </Layout>
  );
}

export default ListKelas;
