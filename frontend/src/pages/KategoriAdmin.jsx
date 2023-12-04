import { useState, useEffect } from "react";
import Layout from "./Layout";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function KategoriAdmin() {
    const [categories, setCategories] = useState([]);
    const token = Cookies.get("token");
    const fetchData = async () => {
        try {
            const response = await axios.get("https://backend-production-4c5b.up.railway.app/kategori", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setCategories(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (id) => {
        await axios.delete(`https://backend-production-4c5b.up.railway.app/kategori/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        fetchData();
    };

    return (
        <Layout>
            <div className="flex flex-col py-5">
            <Link to="/tambah-kategori" className="button is-primary mb-4 text-sm font-semibold font-montserrat w-40 text-center text-white p-3 rounded-lg bg-primary">
            Tambah Kategori
          </Link>
               <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary"> Kategori Kelas</h1>
                <table className="table-auto m-4 border-collapse ">
                    <thead className="">
                        <tr className=" text-center font-bold  ring-offset-neutral-400 bg-secondary text-white">
                            <th>ID</th>
                            <th>Nama Kategori</th>
                            {/* <th>Deskripsi</th> */}
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="min-h-screen">
                        {categories.map((category, index) => (
                            <tr key={index + 1} className="w-24">
                                <td className="text-center align-top">{index + 1}</td>
                                <td className="text-center align-top">{category.nama_kategori}</td>
                                {/* <td className="text-center align-top">{category.deskripsi}</td> */}
                                <td className="text-center align-top ">
                                    <a href={`/edit-kategori/${category.id}`} className="bg-blue-500 mr-2 hover:bg-blue-700 text-white p-2 rounded">Edit</a>
                                    <button onClick={() => deleteData(category.id)} className="bg-red-500 hover:bg-red-700 text-white p-2 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
}

export default KategoriAdmin;
