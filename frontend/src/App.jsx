import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./sections/hero";
import Kategori from "./sections/Kategori";
import CardClass from "./components/CardClass";
import CariKelasPage from "./pages/CariKelasPage";
import Footer from "./sections/Footer";
import KelasPopuler from "./sections/kelasPopuler";
import DashboardUser from "./pages/DashboardUser";

function App() {
  return (
    <>
      {/* // <Router> */}
      <Navbar />
      {/* <Hero />

      <Kategori />
      <KelasPopuler />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<LandingPage />}></Route> */}
          {/* <Route path="/home" element={<Home />}></Route> */}
          <Route path="/dashboard" element={<DashboardUser />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/CariKelasPage" element={<CariKelasPage />} />
        </Routes>
        </Router>
      */}
    </>
  );
}

export default App;
