import Footer from "../sections/Footer";
import Kategori from "../sections/Kategori";
import Hero from "../sections/hero";
import KelasPopuler from "../sections/kelasPopuler";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Kategori />
      <KelasPopuler />
      <Footer />
    </div>
  );
}
