import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import CariKelasPage from "./pages/CariKelasPage";
import DashboardUser from "./pages/DashboardUser";
import Pembayaran from "./pages/Pembayaran";
import HalamanKelas from "./pages/HalamanKelas";
import KelasSaya from "./pages/KelasSaya";
import Navbar from "./components/Navbar";

function User() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const userRole = useSelector(state => state.auth.userRole);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardUser />} />
        <Route path="/search" element={<CariKelasPage />} />
        <Route path="/dashboard" element={<DashboardUser />} />
        <Route path="/search/:id" element={<DetailKelas />} />
        <Route path="/payment" element={<Pembayaran />} />
        <Route path="/kelas/:id" element={<HalamanKelas />} />
        <Route path="/myclass" element={<KelasSaya />} />
      </Routes>
    </>
  );
}
export default User;
