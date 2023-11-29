import Navbar from "./components/navbar";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./sections/hero";
import Kategori from "./sections/Kategori";
import CardClass from "./components/CardClass";
import CariKelasPage from "./pages/CariKelasPage";
import Footer from "./sections/Footer";
import KelasPopuler from "./sections/kelasPopuler";
import Home from "./pages/Home";
import DashboardUser from "./pages/DashboardUser";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CariKelasPage" element={<CariKelasPage />} />
        <Route path="#mentor" element={<Kategori />} />
        <Route path="/dashboard" element={<DashboardUser />}></Route>
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
