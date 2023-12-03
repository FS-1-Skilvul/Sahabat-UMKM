import { useState, useEffect } from "react";
import Layout from "./Layout";

function KategoriAdmin() {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    // Fetch data from the "/kelas" endpoint
    fetch("https://backend-production-4c5b.up.railway.app/kategori")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Assuming data is in the format you provided
        setCategory(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Layout>
      <div className="flex flex-col py-5">
        {/* <SideBarAdmin /> */}
        
        <a href="/tambah-kategori">Tambah Kategori</a>
        <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary"> Kategori Kelas</h1>
        <table className="table-auto m-4 border-collapse ">
          <thead className="">
            <tr className=" text-left font-bold  ring-offset-neutral-400">
              <th>ID</th>
              <th>Nama Kategori</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody className="min-h-screen">
            {categories.map((category) => (
              <tr key={category.id} className="w-24">
                <td className="text-center align-top">{category.id}</td>
                <td className="text-center align-top">{category.nama_kategori}</td>
                <td className="text-center align top">{category.deskripsi}</td>
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

export default KategoriAdmin;
