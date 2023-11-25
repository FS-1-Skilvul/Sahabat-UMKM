import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SideBarAdmin from "../components/SideBarAdmin";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="flex">
      {/* <SideBarAdmin /> */}

      <table className="table-auto bg-gray-200 ">
        <thead className="">
          <tr className="px-4">
            <th>Judul Kelas</th>
            <th>Kategori</th>
            <th>Deskripsi</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
        
        </tbody>
      </table>
      {/* Konten utama */}
      {/* <Outlet /> */}
    </div>
  );
};
export default App;
