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
    const{id} =useParams()
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
      idKategori === '' ||
      !namaKelas.trim() ||
      !deskripsiKelas.trim() ||
      hargaKelas === undefined ||
      hargaKelas === null ||
      hargaKelas === '' ||
      !gambarKelas.trim() ||
      !videoKelas.trim() ||
      !pengajarKelas.trim() ||
      !detailPengajar.trim() ||
      !durasi.trim() ||
      rating === undefined ||
      rating === null ||
      rating === ''
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
  return (
    <Layout>
      <div className="padding-x">
        <div className="flex flex-col w-1/2">
          <h1 className="font-bold mb-5 text-2xl">Edit Data Kelas</h1>

          <form action="" onSubmit={updateData} className="flex flex-col gap-6">
            <label htmlFor="">Nama Kelas</label>
            <input type="text" name="username" value={namaKelas} onChange={(e) => setNamaKelas(e.target.value)} className="border border-gray-500 rounded-lg p-2" />
            <label htmlFor="">Id Kategori</label>
            <input type="text" name="idKategori" value={idKategori} onChange={(e) => setIdKategori(e.target.value)} className="border border-gray-500 rounded-lg p-2" />

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
      </div>
    </Layout>
  );
}

export default EditDataKelas;
