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
