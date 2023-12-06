import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import FormAddClass from "./components/FormAddClass";
import KategoriAdmin from "./pages/KategoriAdmin";
import UserAdmin from "./pages/UserAdmin";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/LoginPage";
import TambahKategori from "./pages/TambahKategori";
import EditKategori from "./pages/EditKategori";
import EditDataKelas from "./pages/EditDataKelas";
import TentangPage from "./pages/TentangPage";
import User from "./RoutesUser";
import CariKelasPage from "./pages/CariKelasPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/tentang" element={<TentangPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/search" element={<CariKelasPage />} />
      <Route path="/user/*" element={<User />} />
      <Route path="/login" element={<Login />} />
      
      {/* Rute untuk admin */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/transaksi" element={<TransaksiAdmin />} />
      <Route path="/datakelas" element={<AdminDashboard />} />
      <Route path="/edit-kategori/:id" element={<EditKategori />} />
      <Route path="/kategori" element={<KategoriAdmin />} />
      <Route path="/tambah-kategori" element={<TambahKategori />} />
      <Route path="/userAdmin" element={<UserAdmin />} />
      <Route path="/dashboard/FormAddClass" element={<FormAddClass />} />
      <Route path="/FormAddClass" element={<FormAddClass />} />
      <Route path="/edit-kelas/:id" element={<EditDataKelas />} />
    </Routes>
  );
}
export default App;
