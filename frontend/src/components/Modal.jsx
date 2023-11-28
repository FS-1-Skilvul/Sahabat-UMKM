import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Modal({ showModal, setShowModal }) {
  // menghilangkan scrolling ketika modal ditampilkan
  useEffect(() => {
    if (showModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  return (
    <div className="w-screen h-screen fixed bg-[rgba(0,0,0,0.5)] z-50 top-0 left-0 flex justify-center items-center overflow-hidden">
      <div className="font-poppins bg-primary text-white w-[30rem] mt-10 p-5 rounded-lg flex flex-col items-center">
        <div className="rounded-full p-5 bg-green-600 w-fit mb-5">
          <FaCheck className="text-4xl text-green-900" />
        </div>
        <h1 className="text-xl font-medium mb-3">Pembayaran Berhasil</h1>
        <p className="text-xl mb-7">Manajemen Keuangan Bisnis</p>
        <div className="flex justify-center mt-8 gap-6">
          <button
            onClick={() => setShowModal(false)}
            className="rounded-lg bg-slate-300 border-[1.5px] border-slate-300 px-10 py-1 text-primary hover:bg-white font-medium duration-300"
          >
            Kembali
          </button>
          <Link to="/kelas">
            <button className="rounded-lg bg-blue-keuangan border-[1.5px] border-blue-keuangan px-10 py-1 text-primary hover:bg-white font-medium duration-300">
              Buka Kelas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
