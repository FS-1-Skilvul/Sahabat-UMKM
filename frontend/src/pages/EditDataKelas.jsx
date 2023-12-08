import Layout from "../pages/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditDataKelas() {
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

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backend-production-4c5b.up.railway.app/kelas/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNamaKelas(response.data.data.nama_kelas);
        setIdKategori(response.data.data.id_kategori);
        setDeskripsiKelas(response.data.data.deskripsi);
        setHargaKelas(response.data.data.harga);
        setGambarKelas(response.data.data.gambar);
        setVideoKelas(response.data.data.video);
        setPengajarKelas(response.data.data.nama_pengajar);
        setDetailPengajar(response.data.data.detail_pengajar);
        setDurasi(response.data.data.durasi);
        setRating(response.data.data.rating);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [token]);

  const updateData = async (e) => {
    e.preventDefault();
    
    if (
      idKategori === undefined ||
      idKategori === null ||
      idKategori === "" ||
      !namaKelas.trim() ||
      !deskripsiKelas.trim() ||
      hargaKelas === undefined ||
      hargaKelas === null ||
      hargaKelas === "" ||
      !gambarKelas.trim() ||
      !videoKelas.trim() ||
      !pengajarKelas.trim() ||
      !detailPengajar.trim() ||
      !durasi.trim() ||
      rating === undefined ||
      rating === null ||
      rating === ""
    ) {
      console.error("All fields are required");
      return;
    }

    const formData = {
      nama_kelas: namaKelas,
      id_kategori: idKategori,
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
      const response = await axios.put(`https://backend-production-4c5b.up.railway.app/kelas/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      navigate("/admin-dashboard");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const kategoriOptions = [
    { value: 1, label: "1. Keuangan" },
    { value: 2, label: "2. Manajemen" },
    { value: 3, label: "3. Kewirausahaan" },
    { value: 4, label: "4. Pengembangan Diri" },
    { value: 5, label: "5. Desain Produk" },
    { value: 6, label: "6. Pemasaran" },
  ];
  return (
    <Layout>
          <div className="padding-x">
        <div className="flex flex-col">
          <h1 className="font-bold text-center  text-3xl text-primary">Tambah Data Kelas</h1>

          <form action="" onSubmit={updateData} className="flex flex-col gap-6">
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

                  <div className="mb-4 sm:mb-8">
                    <label htmlFor="dropdownInput" className="block mb-2 text-sm font-medium dark:text-white">
                      Id kategori
                    </label>
                    <div className="relative inline-block w-full">
                      <button
                        id="dropdownInput"
                        type="button"
                        onClick={handleButtonClick}
                        className="py-3 px-4 w-40 border-gray-200 rounded-lg text-sm bg-white focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-black-600"
                      >
                        {kategoriOptions.find((option) => option.value === idKategori)?.label || "Pilih Kategori"}
                      </button>
                      <div className={`absolute p-auto w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownOpen ? "block" : "hidden"}`}>
                        <div className="px-auto">
                          {kategoriOptions.map((option) => (
                            <button key={option.value} onClick={() => handleOptionClick(option.value)} className=" w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                              {option.label}
                            </button>
                          ))}
                        </div>
                      </div>
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
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700  disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="padding-x">
        <div className="flex flex-col w-1/2">
          <h1 className="font-bold mb-5 text-2xl">Edit Data Kelas</h1>

          <form action="" onSubmit={updateData} className="flex flex-col gap-6">
            <label htmlFor="">Nama Kelas</label>
            <input type="text" name="username" value={namaKelas} onChange={(e) => setNamaKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <div className=" sm:mb-8">
              <label htmlFor="" className="font-semibold">
                Kategori Kelas
              </label>
              <div className="relative inline-block w-full">
                <button
                  id="dropdownInput"
                  type="button"
                  onClick={handleButtonClick}
                  className="py-3 px-4 w-30 border-gray-200 rounded-lg text-sm bg-secondary focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-white-900 dark:border-gray-700 dark:text-black dark:focus:ring-black-600"
                >
                  {kategoriOptions.find((option) => option.value === idKategori)?.label || "Pilih Kategori"}
                </button>
                <div className={`absolute p-auto w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownOpen ? "block" : "hidden"}`}>
                  <div className="px-auto">
                    {kategoriOptions.map((option) => (
                      <button key={option.value} onClick={() => handleOptionClick(option.value)} className=" w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <label htmlFor="" className="font-semibold">
              Deskripsi Kelas
            </label>
            <textarea type="text" name="deskripsi" value={deskripsiKelas} onChange={(e) => setDeskripsiKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />

            <label htmlFor="" className="nama-kelas">
              Harga
            </label>
            <input type="text" name="harga" value={hargaKelas} onChange={(e) => setHargaKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />

            <label htmlFor="" className="nama-kelas">
              Gambar
            </label>
            <input type="text" name="gambar" value={gambarKelas} onChange={(e) => setGambarKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />

            <label htmlFor="" className="nama-kelas">
              Video
            </label>
            <input type="text" name="video" value={videoKelas} onChange={(e) => setVideoKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <label htmlFor="" className="nama-kelas">
              Nama Pengajar
            </label>
            <input type="text" name="pengajar" value={pengajarKelas} onChange={(e) => setPengajarKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <label htmlFor="" className="nama-kelas">
              Detail Pengajar
            </label>
            <input type="text" name="detail_pengajar" value={detailPengajar} onChange={(e) => setDetailPengajar(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <label htmlFor="" className="nama-kelas">
              Durasi
            </label>
            <input type="text" name="durasi" value={durasi} onChange={(e) => setDurasi(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <label htmlFor="" className="nama-kelas">
              Rating
            </label>
            <input type="text" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <button type="submit" className="bg-green-800 hover:bg-green-700 w-[100px] p-2 text-white font-semibold rounded-lg  mt-5">
              Save Edit
            </button>
          </form>
        </div>
      </div> */}
    </Layout>
  );
}

export default EditDataKelas;
