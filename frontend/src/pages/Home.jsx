import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Kategori from "../sections/Kategori";
import KelasPopuler from "../sections/KelasPopuler";
import Footer from "../sections/Footer";
import Tentang from "../sections/Tentang";
// import AuthUser from '../components/AuthUser'

function Home() {
  // const {isAuth} = useContext(AuthUser)
  return (
    <div>
      <Navbar />
      <Hero />
      <Tentang />
      <Kategori />
     <KelasPopuler />
      <Footer />
    </div>
  );
}

export default Home;
