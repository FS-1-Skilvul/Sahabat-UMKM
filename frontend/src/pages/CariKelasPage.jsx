import React from "react";
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import CariKelas from "../components/CariKelas";
import Kategori from "../sections/Kategori";
import Hero from "../sections/hero";
import Footer from "../sections/Footer";
import { category } from "../constants";
const CariKelasPage = () => {
  const  category  = useParams();

  // const kelasKategori = category.filter(kelas => kelas.title === "Manajemen");
  return (
    <>
    <Navbar/>
      <CariKelas  />
     <Footer/>
    </>
  );
};

export default CariKelasPage;
