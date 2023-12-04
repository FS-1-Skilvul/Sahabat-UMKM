import { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Modal({ showModal, setShowModal, paymentStatus }) {
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
      {paymentStatus === "inProgress" ? (
        <div className="font-poppins bg-primary text-white w-[30rem] mt-10 p-5 rounded-lg flex flex-col items-center">
          <div className="rounded-full p-5 bg-yellow-600 w-fit mb-5">
            <svg
              class="h-12 w-12 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <h1 className="text-xl font-medium mb-5">
            Transaksi Sedang Diproses
          </h1>
          <p className="text-xl mb-5 text-center">
            Mohon tunggu hingga kami menerima pembayaranmu
          </p>
          <div className="flex justify-center mt-8 gap-6">
            <button
              onClick={() => setShowModal(false)}
              className="rounded-lg bg-slate-300 border-[1.5px] border-slate-300 px-10 py-1 text-primary hover:bg-white font-medium duration-300"
            >
              Kembali
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
