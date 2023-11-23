import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Hero from "./sections/hero";
import Kategori from "./sections/Kategori";
 import CardClass from "./components/CardClass";
 import CariKelasPage from "./pages/CariKelasPage";
import Footer from "./sections/Footer";
import KelasPopuler from "./sections/kelasPopuler";

function App() {
  return (
    <>
    {/* // <Router> */}
      <Navbar />
        <Hero />
    
        <Kategori />
        <KelasPopuler />
        <Footer /> 
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
