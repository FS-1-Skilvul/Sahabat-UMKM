import aboutimage from "../assets/images/about-1.png";
import aboutimage2 from "../assets/images/candidate_1283936.png";
import aboutimage3 from "../assets/images/about3.png";
function Tentang() {
  return (

    
    <div className="padding-x " id="tentang-section animate-fade-down animate-once animate-delay-200">
      <h1 className="font-poppins text-3xl text-primary font-bold  text-center">Mengapa Sahabat UMKM?</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3  items-center justify-items-center gap-16 mt-10 ">
        <div className="flex flex-col justify-center items-center mt-5 w-80">
          <img src={aboutimage} className="w-20" alt="tes" />
          <h1 className="font-bold text-2xl font-poppins text-center text-primary mt-3"> Pelatihan Berkualitas</h1>
          <p className="leading-[25px] text-center font-poppins text-sm mt-2 text-gray-500">Sahabat UMKM memberi kesempatan untuk terus meningkatkan keterampilan, pengetahuan, dan kemampuan dalam mengelola bisnis </p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 w-80">
          <img src={aboutimage3} className="w-20" alt="tes" />
          <h1 className="font-bold text-2xl font-poppins text-center text-primary mt-3">Dukungan UMKM</h1>
          <p className="leading-[25px] text-center font-poppins text-sm mt-2 text-gray-500">Dengan memilih kami, Anda turut berperan dalam pertumbuhan ekonomi lokal, membantu UMKM berkembang, dan menciptakan lapangan pekerjaan.</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-5 w-80">
          <img src={aboutimage2} className="w-20" alt="tes" />
          <h1 className="font-bold text-2xl font-poppins text-center text-primary mt-3"> Jaringan & Kolaborasi</h1>
          <p className="leading-[25px] text-center font-poppins text-sm mt-2 text-gray-500">Anda dapat bergabung dengan komunitas ini memungkinkan Anda untuk berbagi pengalaman, bertukar ide, dan membangun jaringan yang berharga</p>
        </div>
      </div>
    </div>
  );
}

export default Tentang;
