import Layout from "../pages/Layout";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function TambahKategori() {
    const [namaKategori, setNamaKategori] = useState("");
    // const [deskripsiKelas, setDeskripsiKelas] = useState("");
    const navigate = useNavigate();
    const token = Cookies.get("token");

    const saveData = async (e) => {
        e.preventDefault();

        if (!namaKategori.trim() ) {
            console.error("Nama Kategori and Deskripsi Kelas are required");
            return;
        }

        const formData = {
            nama_kategori: namaKategori,
           
        };

        try {
            const response = await axios.post("https://backend-production-4c5b.up.railway.app/kategori", formData, {
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
                    <h1 className="font-bold mb-5 text-2x text-primary font-montserrat mt-5 text-2xl">Tambah Kategori</h1>
                    <form onSubmit={saveData} className="flex  flex-col">
                        <label htmlFor="nama-kategori" className="font-semibold mb-5 ">
                            Nama Kategori
                        </label>
                        <input type="text" id="nama-kategori" className="input-field outline rounded-sm h-11 w-72" value={namaKategori} onChange={(e) => setNamaKategori(e.target.value)} />
                        <button type="submit" className="button is-primary bg-primary mt-5 w-20 p-2 rounded-lg text-white">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default TambahKategori;
