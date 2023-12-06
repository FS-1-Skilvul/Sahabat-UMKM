import Layout from "../pages/Layout";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function FormAddClass() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [idKategori, setIdKategori] = useState("");
  const [namaKelas, setNamaKelas] = useState("");
  const [deskripsiKelas, setDeskripsiKelas] = useState("");
  const [hargaKelas, setHargaKelas] = useState("");
  const [gambarKelas, setGambarKelas] = useState("");
  const [videoKelas, setVideoKelas] = useState("");
  const [pengajarKelas, setPengajarKelas] = useState("");
  const [detailPengajar, setDetailPengajar] = useState("");
  const [durasi, setDurasi] = useState("");
  const [rating, setRating] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (value) => {
    setIdKategori(value);
    setDropdownOpen(false);
  };
  const saveData = async (e) => {
    e.preventDefault();
    if (
      !idKategori ||
      idKategori === null ||
      idKategori === undefined ||
      !namaKelas.trim() ||
      !deskripsiKelas.trim() ||
      !hargaKelas.trim() ||
      !gambarKelas.trim() ||
      !videoKelas.trim() ||
      !pengajarKelas.trim() ||
      !detailPengajar.trim() ||
      !durasi.trim() ||
      !rating.trim()
    ) {
      console.error("All fields are required");
      return;
    }
    const formData = {
      id_kategori: idKategori,
      nama_kelas: namaKelas,
      deskripsi: deskripsiKelas,
      harga: hargaKelas,
      gambar: gambarKelas,
      video: videoKelas,
      nama_pengajar: pengajarKelas,
      detail_pengajar: detailPengajar,
      durasi: durasi,
      rating: rating,
    };

    try {
      const response = await axios.post("https://backend-production-4c5b.up.railway.app/kelas", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);

      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  const kategoriOptions = [
    { value: 1, label: "1. Keuangan" },
    { value: 2, label: "2. Manajemen" },
    { value: 3, label: "3. Kewirausahaan" },
    { value: 4, label: "4. Pengembangan Diri" },
    { value: 5, label: "5. Desain Produk" },
  ];

  return (
    <Layout>
      <div className="padding-x">
        <div className="flex flex-col">
          <h1 className="font-bold text-center  text-3xl text-primary">Tambah Data Kelas</h1>

          <form action="" onSubmit={saveData} className="flex flex-col gap-6">
            <div className="w-full px-4 sm:px-6 lg:px-8  mx-auto">
              <div className="mx-auto max-w-2xl">
                <div className="text-center"></div>

                <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-primary dark:border-gray-700">
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-name-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Nama Kelas
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={namaKelas}
                      onChange={(e) => setNamaKelas(e.target.value)}
                      id="hs-feedback-post-comment-name-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-black-600"
                      placeholder=""
                    ></input>
                  </div>

                  <div className="hs-dropdown relative inline-flex mb-4 sm:mb-8">
                    <button
                      id="hs-dropdown-default"
                      onClick={handleButtonClick}
                      type="button"
                      className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-white-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-white-700 dark:text-primary  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-white-600"
                    >
                      {kategoriOptions.find((option) => option.value === idKategori)?.label || "Pilih Kategori"}

                      <svg
                        className="hs-dropdown-open:rotate-180 w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {/* <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
                      aria-labelledby="hs-dropdown-default"
                    > */}

                    <div
                      className={`hs-dropdown-menu transition-[opacity,margin] duration ${
                        dropdownOpen ? "opacity-100" : "opacity-0"
                      } hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
                      aria-labelledby="hs-dropdown-default"
                    >
                      {kategoriOptions.map((option) => (
                        <a
                          key={option.value}
                          // value={idKategori}
                          onClick={() => handleOptionClick(option.value)}
                          // onClick={() => handleClick(option.value)},

                          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
                          href="#"
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-textarea-1 " className="block mb-2 text-sm font-medium dark:text-white">
                      Deskripsi
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="hs-feedback-post-comment-textarea-1"
                        name="hs-feedback-post-comment-textarea-1"
                        value={deskripsiKelas}
                        onChange={(e) => setDeskripsiKelas(e.target.value)}
                        rows="3"
                        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                        placeholder="Deskripsi.."
                      ></textarea>
                    </div>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Harga
                    </label>
                    <input
                      type="text"
                      id="hs-feedback-post-comment-email-1"
                      value={hargaKelas}
                      onChange={(e) => setHargaKelas(e.target.value)}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Gambar
                    </label>
                    <input
                      type="text"
                      id="hs-feedback-post-comment-email-1"
                      value={gambarKelas}
                      onChange={(e) => setGambarKelas(e.target.value)}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Video
                    </label>
                    <input
                      type="text"
                      id="hs-feedback-post-comment-email-1"
                      value={videoKelas}
                      onChange={(e) => setVideoKelas(e.target.value)}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Nama Pengajar
                    </label>
                    <input
                      type="text"
                      value={pengajarKelas}
                      onChange={(e) => setPengajarKelas(e.target.value)}
                      id="hs-feedback-post-comment-email-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Detail Pengajar
                    </label>
                    <textarea
                      id="hs-feedback-post-comment-textarea-1"
                      name="hs-feedback-post-comment-textarea-1"
                      value={detailPengajar}
                      onChange={(e) => setDetailPengajar(e.target.value)}
                      rows="3"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></textarea>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Durasi
                    </label>
                    <input
                      type="text"
                      id="hs-feedback-post-comment-email-1"
                      value={durasi}
                      onChange={(e) => setDurasi(e.target.value)}
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>
                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="hs-feedback-post-comment-email-1" className="block mb-2 text-sm font-medium dark:text-white">
                      Rating
                    </label>
                    <input
                      type="text"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      id="hs-feedback-post-comment-email-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600"
                      placeholder=""
                    ></input>
                  </div>

                  <div className="mt-6 grid">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>

          {/* <input type="text" name="idKategori" value={idKategori} onChange={(e) => setIdKategori(e.target.value)} className="border border-gray-500 rounded-lg p-2" /> */}
        </div>
      </div>
    </Layout>
  );
}

export default FormAddClass;
