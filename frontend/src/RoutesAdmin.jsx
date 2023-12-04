import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import FormAddClass from "./components/FormAddClass";
import KategoriAdmin from "./pages/KategoriAdmin";
import UserAdmin from "./pages/UserAdmin";

function Admin() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        
        <Route path="/search" element={<CariKelasPage />} />
        <Route path="/user-dashboard" element={<DashboardUser />} />
        <Route path="/search/:id" element={<DetailKelas />} />
        <Route path="/payment" element={<Pembayaran />} />
        <Route path="/kelas/:id" element={<HalamanKelas />} />
        <Route path="/kelasku" element={<KelasSaya />} />

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} /> */}

        {/* Rute untuk admin */}
        {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
        <Route path="/transaksi" element={<TransaksiAdmin />} />
        <Route path="/datakelas" element={<AdminDashboard />} />
        <Route path="/kategori" element={<KategoriAdmin />} />
        <Route path="/userAdmin" element={<UserAdmin />} />
        <Route path="/dashboard/FormAddClass" element={<FormAddClass />} />
        <Route path="/FormAddClass" element={<FormAddClass />} />
      </Routes>
    </>
  );
}
export default Admin;
