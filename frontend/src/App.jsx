import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import LandingPage from "./pages/LandingPage";
import CariKelasPage from "./pages/CariKelasPage";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import TransaksiAdmin from "./pages/TransaksiAdmin";
import FormAddClass from "./components/FormAddClass";
import Tentang from "./sections/Tentang";
import KategoriAdmin from "./pages/KategoriAdmin";
import UserAdmin from "./pages/UserAdmin";
import Kategori from "./sections/Kategori";
import DashboardUser from "./pages/DashboardUser";
import Pembayaran from "./pages/Pembayaran";
import HalamanKelas from "./pages/HalamanKelas";
import KelasSaya from "./pages/KelasSaya";
import RegistrationPage from "./pages/RegistrationPage";
import Login from "./pages/LoginPage";
import DataKelas from "./components/DataKelas";
import ListKelas from "./pages/ListKelas";
import Navbar from "./components/Navbar";
import User from "./RoutesUser";
import Admin from "./RoutesAdmin";

function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/*" element={<User />} /> // * untuk nested route user
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
