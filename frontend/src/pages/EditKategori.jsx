import Layout from "../pages/Layout";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

function EditKategori() {
    const [namaKategori, setNamaKategori] = useState("");
    const [deskripsiKategori, setDeskripsiKategori] = useState("");
    const navigate = useNavigate();
    const token = Cookies.get("token");
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://backend-production-4c5b.up.railway.app/kategori/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setNamaKategori(response.data.data.nama_kategori);
                setDeskripsiKategori(response.data.data.deskripsi);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [token]);

    const updateData = async (e) => {
        e.preventDefault();

        if (!namaKategori.trim() || !deskripsiKategori.trim()) {
            console.error("Nama Kategori and Deskripsi Kelas are required");
            return;
        }

        const formData = {
            nama_kategori: namaKategori,
            deskripsi: deskripsiKategori,
        };

        try {
            const response = await axios.put(`https://backend-production-4c5b.up.railway.app/kategori/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            console.log(response);
            navigate("/kategori");
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };

    return (
        <Layout>
            <div className="padding-x">
                <div className="flex flex-col w-1/2">
                    <h1 className="font-bold mb-5 text-2xl">Tambah Kategori</h1>
                    <form onSubmit={updateData} className="flex flex-col justify-center">
                        <label htmlFor="nama-kategori" className="font-semibold mb-5">
                            Nama Kategori
                        </label>
                        <input type="text" id="nama-kategori" className="input-field outline rounded-md h-10" value={namaKategori} onChange={(e) => setNamaKategori(e.target.value)} />
                        <label htmlFor="deskripsi-kelas" className="font-semibold my-5">
                            Deskripsi Kelas
                        </label>
                        <textarea id="deskripsi-kelas" className="input-field outline" value={deskripsiKategori} onChange={(e) => setDeskripsiKategori(e.target.value)} />
                        <button type="submit" className="bg-green-600 hover:bg-green-700 w-[100px] p-2 text-white font-semibold rounded-lg  mt-5">
                            Save Edit
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default EditKategori;
