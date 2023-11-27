import { useState } from "react";
import Dana from "../assets/images/dana.png";
import GoPay from "../assets/images/gopay.png";
import Ovo from "../assets/images/ovo.png";
import Modal from "../components/Modal";

export default function Pembayaran() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 flex justify-center">
      <div className="font-poppins bg-primary text-white w-96 mt-10 p-5 rounded-lg">
        <h1 className="text-xl font-medium text-center mb-3">
          Detail Pembayaran
        </h1>
        <p className="text-center text-xl mb-7">Manajemen Keuangan Bisnis</p>
        <div className="flex justify-between pb-2">
          <span>Harga Kelas</span>
          <span>Rp60.000</span>
        </div>
        <div className="flex justify-between pb-4 border-b-2 border-white">
          <span>Diskon</span>
          <span>Rp0</span>
        </div>
        <div className="flex justify-between pt-4">
          <span>Total</span>
          <span>Rp60.000</span>
        </div>

        <div className="mt-10">
          <span>Pilih metode pembayaran</span>
          <div className="flex flex-col gap-3 px-3 mt-5">
            <div className="flex justify-between items-center rounded-lg bg-gray-100 py-1 px-2">
              <img src={Dana} alt="" className="h-16" />
              <input
                type="radio"
                name="metodePembayaran"
                className="cursor-pointer w-4 h-4 bg-white border border-gray-300"
              />
            </div>
            <div className="flex justify-between items-center rounded-lg bg-gray-100 py-1 px-2">
              <img src={GoPay} alt="" className="h-16" />
              <input
                type="radio"
                name="metodePembayaran"
                className="cursor-pointer w-4 h-4 bg-white border border-gray-300"
              />
            </div>
            <div className="flex justify-between items-center rounded-lg bg-gray-100 py-1 px-2">
              <img src={Ovo} alt="" className="h-16" />
              <input
                type="radio"
                name="metodePembayaran"
                className="cursor-pointer w-4 h-4 bg-white border border-gray-300"
              />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-lg bg-blue-keuangan border-[1.5px] border-blue-keuangan px-10 py-1 text-primary hover:bg-white font-medium duration-300"
            >
              Beli Kelas
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </section>
  );
}
