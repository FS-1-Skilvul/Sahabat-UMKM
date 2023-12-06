

import CariKelas from "../components/CariKelas";

import Footer from "../sections/Footer";

import Navbar from "../components/Navbar";
const CariKelasPage = () => {
  

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
