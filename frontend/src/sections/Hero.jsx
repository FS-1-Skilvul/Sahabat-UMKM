import Button from "../components/Button";
import HeroImage from "../assets/images/hero-image.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section >
      <div className="flex flex-wrap padding-y items-center  padding-x ">
        <div className="w-full xl:w-1/2 content-center py-10">
          <h1 className="py-5 max-sm:py-5 font-poppins text-5xl font-semibold leading-[84px]">
            <span className="text-primary">Panduan Bisnis Terbaik Bagi</span>
            {/* <br /> */}
            <span className="text-secondary inline-block  max-sm:text-[52px] ">UMKM</span>
            <span className="text-primary "> Anda</span>{" "}
          </h1>
          <p className="font-poppins text-sm text-gray-600">Kami mendukung pemilik UMKM dalam mengatasi tantangan dan mencapai tujuan bisnis mereka. Temukan sumber daya dan panduan untuk mengoptimalkan potensi bisnis Anda</p>
          <Link to="CariKelasPage">
          <Button label="Mulai Sekarang" />
          </Link>
        </div>
        <div className="w-full xl:w-1/2 content-center shadow-2xl ">
          <img src={HeroImage} alt="hero" className="object-contain shadow-xl rounded-lg" />
        </div>
      </div>
    </section>

  );
};

export default Hero;
