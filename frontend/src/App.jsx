import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import LandingPage from "./pages/LandingPage";
import CariKelasPage from "./pages/CariKelasPage";
import Footer from "./sections/Footer";
import KelasPopuler from "./sections/kelasPopuler";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="CariKelasPage" element={<CariKelasPage />} />
        <Route path="#mentor" element={<Kategori />} />
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
