import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import CariKelasPage from "./pages/CariKelasPage";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import FormAddClass from "./components/FormAddClass";
import KategoriAdmin from "./pages/KategoriAdmin";
import UserAdmin from "./pages/UserAdmin";
import DashboardUser from "./pages/DashboardUser";
import Pembayaran from "./pages/Pembayaran";
import HalamanKelas from "./pages/HalamanKelas";
import KelasSaya from "./pages/KelasSaya";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/LoginPage";
import TambahKategori from "./pages/TambahKategori";
import EditKategori from "./pages/EditKategori";
import EditDataKelas from "./pages/EditDataKelas";

function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/search" element={<CariKelasPage />} />
     <Route path="/user-dashboard" element={<DashboardUser />} />
     <Route path="/search/:id" element={<DetailKelas />} />
     <Route path="/payment" element={<Pembayaran />} />
     <Route path="/kelas/:id" element={<HalamanKelas />} />
     <Route path="/kelas-saya" element={<KelasSaya />} />


     <Route path="/register" element={<RegistrationPage />} />
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
