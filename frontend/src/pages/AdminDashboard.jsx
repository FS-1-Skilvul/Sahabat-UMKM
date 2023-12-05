import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";
import Layout from "./Layout";
import Cookies from "js-cookie";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";
function AdminDashboard() {
  const [courses, setCourses] = useState([]);
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get("https://backend-production-4c5b.up.railway.app/kelas", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(response.data.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

 

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = async (id) => {
    await axios.delete(`https://backend-production-4c5b.up.railway.app/kelas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    fetchData();
  };

  return (
    <>
      <Layout>
        <div className="flex items-center justify-between ">

        <h1 className="font-bold text-2xl font-montserrat  text-primary">Data Kelas</h1>
        </div>
        <div className="flex flex-col mt-5 max-h-screen">
          <Link to="/dashboard/FormAddClass" className="button is-primary mb-4 text-sm font-semibold font-montserrat w-32  text-center text-white p-3 rounded-lg bg-primary">
            Tambah Kelas
          </Link>
          <div className="md:overflow-x-auto max-h-96 ">
            <table className="md:overflow-x-auto overflow-y-auto table-fixed">
              <thead className="">
                <tr className=" text-center ring-offset-neutral-400 bg-secondary text-white text-sm ">
                  <th>ID</th>
                  <th>Id Kategori</th>
                  <th>Nama Kelas</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Gambar</th>
                  <th>Video</th>
                  <th>Nama Pengajar</th>
                  <th>Detail Pengajar</th>
                  <th>Durasi</th>
                  <th>Rating</th>

                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="min-h-screen">
                {courses.map((course) => (
                  <tr key={course.id} className="">
                    <td className="text-center align-top">{course.id}</td>
                    <td className="text-center align-top">{course.id_kategori}</td>
                    <td className="text-left align-top">{course.nama_kelas}</td>
                    <td className="text-left align-top">{course.deskripsi}</td>
                    <td className="text-left align-top">{course.harga}</td>
                    <td className="text-left align-top max-w-24 break-all">{course.gambar}</td>
                    <td className="text-left align-top max-w-24 break-all">{course.video}</td>
                    <td className="text-left align-top">{course.nama_pengajar}</td>
                    <td className="text-left align-top">{course.detail_pengajar}</td>
                    <td className="text-left align-top">{course.durasi}</td>
                    <td className="text-left align-top">{course.rating}</td>
                    <td className="text-left align-top">
                      <a href="formaddclass">
                        <div className="edit-delete flex items-center">
                          <a href={`/edit-kelas/${course.id}`} className="font-regular rounded-md bg-blue-500 mr-2 hover:bg-blue-700 text-white p-2 ">
                            Edit
                          </a>
                          <a href="#" className="bg-red-500 hover:bg-red-700 text-white p-2 rounded" onClick={() => deleteData(course.id)}>
                            Hapus
                          </a>
                        </div>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default AdminDashboard;
