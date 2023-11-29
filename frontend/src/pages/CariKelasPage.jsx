import React from "react";
import Navbar from "../components/navbar";
import CariKelas from "../components/CariKelas";
import Kategori from "../sections/Kategori";
import Hero from "../sections/hero";
import Footer from "../sections/Footer";

const CariKelasPage = () => {
  return (
    <>
    <Navbar/>
      <CariKelas />
     <Footer/>
    </>
  );
};

export default CariKelasPage;
