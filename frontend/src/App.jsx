import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailKelas from "./pages/DetailKelas";
import LandingPage from "./pages/LandingPage";
import CariKelasPage from "./pages/CariKelasPage";
import Pembayaran from "./pages/Pembayaran";
import HalamanKelas from "./pages/HalamanKelas";

function App() {
  return (
    <>
      {/* // <Router> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          {/* <Route path="/home" element={<Home />}></Route> */}
          <Route path="/search" element={<CariKelasPage />}></Route>
          <Route path="/search/detail-kelas" element={<DetailKelas />}></Route>
          <Route path="/payment" element={<Pembayaran />}></Route>
          <Route path="/kelas" element={<HalamanKelas />}></Route>
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
