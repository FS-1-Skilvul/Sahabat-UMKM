import React from "react";
import SideBarAdmin from "../components/SideBarAdmin";
import Layout from "./Layout";

function TransaksiAdmin() {
  return (
    <Layout>
      <div className="flex flex-col py-5">
        {/* <SideBarAdmin /> */}

        <h1 className="flex justify-center font-bold pb-7 text-2xl">Laporan Transaksi</h1>
        <table className="table-auto m-4 border-collapse ">
          <thead className="">
            <tr className=" text-left font-bold  ring-offset-neutral-400">
              <th>Id_Kelas</th>
              <th>Id_User</th>
           
              <th>Tanggal Transaksi</th>
              <th>Total</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
             
              <td>23-10-2003</td>
              <td>50.000</td>
             
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
             
              <td>23-10-2003</td>
              <td>50.000</td>
             
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
             
              <td>23-10-2003</td>
              <td>50.000</td>
             
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
             
              <td>23-10-2003</td>
              <td>50.000</td>
             
            </tr>
          </tbody>
        </table>
        {/* Konten utama */}
        {/* <Outlet /> */}
      </div>
    </Layout>
  );
}

export default TransaksiAdmin;
