import { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import Cookies from "js-cookie";
function TransaksiAdmin() {
  const [transactions, setTransaction] = useState([]);
  const token = Cookies.get("token");
const fetchData = async () => {
  
  try{
    const response = await axios.get('https://backend-production-4c5b.up.railway.app/transaksi',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setTransaction (response.data.data);
  }
  catch(error){
    console.error('Error fetching data:', error);
  }
};
useEffect(() => {
  fetchData();
},[]);

  return (
    <Layout>
      <div className="flex flex-col py-5">
        {/* <SideBarAdmin /> */}

        <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary">Laporan Transaksi</h1>
        <table className="table-auto m-4 border-collapse ">
          <thead className="">
            <tr className=" text-left font-bold  ring-offset-neutral-400 bg-secondary text-white">
              <th>Id_Kelas</th>
              <th>Id_User</th>
           
              <th>Tanggal Transaksi</th>
              <th>Total</th>
              </tr>
          </thead>

          <tbody className="min-h-screen">
            {Array.isArray(transactions) && transactions.length > 0 ? (
              transactions.map((transaction) => (
                <tr key={transaction.id} className="w-24">
                  <td className="text-left align-top">{transaction.id_kelas}</td>
                  <td className="text-left align-top">{transaction.id_user}</td>
                  <td className="text-left align top">{transaction.createdAt}</td>
                  <td className="text-left align top">{transaction.total}</td>
                  {/* <td className="text-left align-top">
                    <a href="formaddclass">
                      <div className="edit-delete flex  ">
                        <a href="#" className="bg-red-500 hover:bg-red-700 text-white p-2 rounded" onClick={() => deleteData(user.id)}>
                          Hapus
                        </a>
                      </div>
                    </a>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No users found.</td>
              </tr>
            )}
          </tbody>
          
          {/* <tbody className="min-h-screen">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="w-24">
                <td className="text-left align-top">{transaction.id_kelas}</td>
                <td className="text-left align-top">{transaction.id_user}</td>
                <td className="text-left align top">{transaction.tanggal_transaksi}</td>
                <td className="text-left align top">{transaction.total}</td>


              </tr>
            ))}
          </tbody> */}
        </table>
        {/* Konten utama */}
        {/* <Outlet /> */}
      </div>
    </Layout>
  );
}

export default TransaksiAdmin;
