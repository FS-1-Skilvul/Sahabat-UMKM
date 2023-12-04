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

  const saveData = async (e) => {
    e.preventDefault();
    if (!idKategori.trim() || !namaKelas.trim() || !deskripsiKelas.trim() || !hargaKelas.trim() || !gambarKelas.trim() || !videoKelas.trim() || !pengajarKelas.trim() || !detailPengajar.trim() || !durasi.trim() || !rating.trim()) {
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

  return (
    <Layout>
      <div className="padding-x">
        <div className="flex flex-col w-1/2">
          <h1 className="font-bold mb-5 text-3xl text-primary">Tambah Data Kelas</h1>

          <form action="" onSubmit={saveData} className="flex flex-col gap-6">
            <label htmlFor="">Nama Kelas</label>
            <input type="text" name="username" value={namaKelas} onChange={(e) => setNamaKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            {/* <label htmlFor="">Id Kategori</label>
            <input type="text" name="idKategori" value={idKategori} onChange={(e) => setIdKategori(e.target.value)} className="border border-gray-500 rounded-lg p-2" /> */}

            <button
              id="dropdownRadioBgHoverButton"
              data-dropdown-toggle="dropdownRadioBgHover"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Dropdown radio
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {/* 
<!-- Dropdown menu --> */}
            <div id="dropdownRadioBgHover" className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioBgHoverButton">
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      id="default-radio-4"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    ></input>
                    <label htmlFor="default-radio-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                      Default radio
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      checked
                      id="default-radio-5"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    ></input>
                    <label htmlFor="default-radio-5" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                      Checked state
                    </label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input
                      checked
                      id="default-radio-6"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    ></input>

                    <label htmlFor="default-radio-6" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                      Default radio
                    </label>
                  </div>
                </li>
              </ul>
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
              Save
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default FormAddClass;
