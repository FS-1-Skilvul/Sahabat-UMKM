
import Footer from "../sections/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { TbMailFilled } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import Navbar from "../components/Navbar";

function TentangPage() {

    // const handleAuth = () => {
        
    // }
  return (
    <>
      <Navbar />
      <div className="flex mt-20 padding-x items-center gap-20 w-auto ">
        <img src="https://attendify.id/assets/img/landingpage/tentangkami2.png" className="object-contain  h-screen p-12   " alt="" />

        <div className="tentang-isi">
          <h1 className="font-poppins text-3xl font-bold text-gray-800">Tentang Kami</h1>
          <p className="text-justify text-gray-900 mt-4 font-poppins">
            <span className="text-primary font-bold font-poppins text-lg">Sahabat Umkm </span>
            merupakan sebuah platform yang yang berkomitmen untuk meningkatkan pertumbuhan dan keberlanjutan UMKM. Dukungan ini berbentuk akses pembelajaran yang dapat membantu usaha menengah kecil berkembang.
          </p>

          <h2 className="mt-4 font-semibold text-gray-800 text-lg font-poppins">Selengkapnya tentang sahabat umkm</h2>
          <div className="flex mt-5 gap-5 justify-center flex-col ">
            <div className=" flex gap-5">
              <IoLocationSharp size={20} />
              <p className="font-poppins text-gray-800"> Jakarta Pusat</p>
            </div>
            <div className="flex  gap-5">
              <IoCallSharp size={20} />
              <p className="font-poppins text-gray-800"> 081385935012</p>
            </div>
            <div className="flex  gap-5">
              <TbMailFilled size={20} />
              <p className="font-poppins text-gray-800"> mail@sahabatumkm</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TentangPage;
