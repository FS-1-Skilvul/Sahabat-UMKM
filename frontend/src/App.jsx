import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import LandingPage from "./pages/LandingPage";
import CariKelasPage from "./pages/CariKelasPage";
import Footer from "./sections/Footer";
import KelasPopuler from "./sections/kelasPopuler";
import Home from "./pages/Home";
import Kategori from "./sections/Kategori";
import DashboardUser from "./pages/DashboardUser";
import Pembayaran from "./pages/Pembayaran";
import HalamanKelas from "./pages/HalamanKelas";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<CariKelasPage />} />
        <Route path="#mentor" element={<Kategori />} />
        <Route path="dashboard" element={<DashboardUser />} />
        <Route path=":id" element={<DetailKelas />} />
        <Route path="payment" element={<Pembayaran />} />
        <Route path="kelas" element={<HalamanKelas />} />
        {/* <Route path="/admin">
         {userRole === 'admin' ? <AdminPage /> : <Redirect to="/login" />}
       </Route>
       <Route path="/client">
         {userRole === 'client' ? <ClientPage /> : <Redirect to="/login" />}
       </Route> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
