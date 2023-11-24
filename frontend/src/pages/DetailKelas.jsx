import { useEffect, useState } from "react";

export default function DetailKelas() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://65280fcd931d71583df1d176.mockapi.io/course/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="font-poppins">
      <header className="py-20">
        <div id="title" className="bg-gray-300">
          <h1 className="text-3xl text-primary py-5 px-12 font-semibold">
            Strategi Pemasaran Digital
          </h1>
        </div>
        <div id="class-data" className="flex items-center mt-10 px-12 gap-10">
          <img src={data.image} alt="" className="max-w-xs" />
          <div>
            <span
              id="price"
              className="text-xl bg-blue-keuangan text-primary px-7 py-[2px] rounded-2xl"
            >
              Rp50.000
            </span>
            <p id="duration" className="mt-2 text-gray-600">
              1jam 25mnt
            </p>
            <p id="rating" className="text-sm">
              (36 Review)
            </p>
            <p id="registerCount" className="text-sm">
              53 Orang Telah Mendaftar Kelas Ini
            </p>
            <button className="border-[1.5px] border-primary bg-primary text-white px-5 py-1 rounded-lg mt-3 duration-300 hover:bg-white hover:text-primary">
              Beli Kelas
            </button>
          </div>
        </div>
      </header>
      <section id="deskripsi-kelas" className="px-12">
        <h2 className="mb-3 text-[28px] font-semibold text-gray-900">
          Deskripsi Kelas
        </h2>
        <div className="border-2 border-primary rounded-bl-lg rounded-tr-lg p-5 w-fit">
          <p>
            Pelajari prinsip-prinsip dasar manajemen keuangan. Dari perencanaan
            anggaran hingga analisis laporan keuangan
          </p>
        </div>
      </section>
      <section id="modul-kelas" className="px-12 mt-10">
        <h2 className="mb-3 text-[28px] font-semibold text-gray-900">
          Apa yang akan dipelajari?
        </h2>
        <div className="p-2 flex gap-3 mb-3 border-2 border-primary rounded-bl-lg rounded-tr-lg w-fit">
          <span className="w-6 bg-yellow-600 rounded-full text-center">1</span>
          <p>Pengenalan Manajemen Keuangan</p>
        </div>
        <div className="p-2 flex gap-3 mb-3 border-2 border-primary rounded-bl-lg rounded-tr-lg w-fit">
          <span className="w-6 bg-yellow-600 rounded-full text-center">2</span>
          <p>Pengenalan Manajemen Keuangan</p>
        </div>
        <div className="p-2 flex gap-3 mb-3 border-2 border-primary rounded-bl-lg rounded-tr-lg w-fit">
          <span className="w-6 bg-yellow-600 rounded-full text-center">3</span>
          <p>Pengenalan Manajemen Keuangan</p>
        </div>
        <div className="p-2 flex gap-3 mb-3 border-2 border-primary rounded-bl-lg rounded-tr-lg w-fit">
          <span className="w-6 bg-yellow-600 rounded-full text-center">4</span>
          <p>Pengenalan Manajemen Keuangan</p>
        </div>
      </section>
      <section id="detail-mentor" className="px-12 mt-10 max-w-3xl">
        <h2 className="mb-3 text-[28px] font-semibold text-gray-900">
          Pengajar Kelas
        </h2>
        <div className="border-2 border-primary rounded-bl-lg rounded-tr-lg p-5 w-fit">
          <div className="flex gap-10 mb-10">
            <div className="rounded-full overflow-hidden h-14 w-14 border-[1.5px] border-primary">
              <img
                src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-primary text-[20px] font-semibold">
                Joko Anwar
              </h3>
              <span className="text-primary font-semibold">
                Ahli Manajemen Keuangan dan Konsultan Keuangan
              </span>
            </div>
          </div>
          <p>
            Joko Anwar adalah seorang profesional berpengalaman dalam bidang
            manajemen keuangan. Dengan latar belakang yang kaya dalam industri
            keuangan, ia telah memimpin banyak perusahaan dalam mengelola
            keuangan mereka dengan efisien.
          </p>
        </div>
      </section>
    </div>
  );
}
