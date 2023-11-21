import Button from "../components/Button";

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1>
          <span>Panduan Bisnis Terbaik Bagi UMKM </span>
          <br />
          <span>UMKM</span>
          Anda
        </h1>
        <p>Kami mendukung pemilik UMKM dalam mengatasi tantangan dan mencapai tujuan bisnis mereka. Temukan sumber daya dan panduan untuk mengoptimalkan potensi bisnis Anda</p>
        <Button label="Mulai Sekarang" />
        <div className="flex justify-start items-start "></div>
      </div>
    </section>
  );
};

export default Hero;
