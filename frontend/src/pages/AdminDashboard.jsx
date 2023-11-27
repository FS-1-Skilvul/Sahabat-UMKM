import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../App.css";
import Layout from "./Layout";
const App = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://65280fcd931d71583df1d176.mockapi.io/course")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
      <Layout>
        <h1 className="flex justify-left font-bold text-2xl font-montserrat mt-5 text-primary">Data Kelas</h1>
        <div className="flex flex-col mt-5 max-h-screen">
          <Link to="/dashboard/FormAddClass" className="button is-primary mb-4 text-sm font-semibold font-montserrat w-32  text-center text-white p-3 rounded-lg bg-green-800">
            Tambah Kelas
          </Link>
          <div className="md:overflow-x-auto max-h-96 ">
            <table className="md:overflow-x-auto overflow-y-auto table-fixed " >
              <thead className="">
                <tr className=" text-center font-bold  ring-offset-neutral-400">
                  <th>ID</th>
                  <th>Nama Kelas</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Gambar</th>
                  <th>Video</th>
                  <th>Nama Pengajar</th>
                  <th>Detail Pengajar</th>
                  <th>Durasi</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody className="min-h-screen">
                {courses.map((course) => (
                  <tr key={course.id} className="w-24" >
                    <td  className="text-center align-top">{course.id}</td>
                    <td className="text-left align-top">{course.coursename}</td>
                    <td className="text-left align-top">{course.description}</td>
                    <td className="text-left align-top">{course.price}</td>
                    <td className="text-left  align-top max-w-24 break-all">{course.image}</td>
                    <td className="text-left  align-top max-w-24 break-all">{course.image}</td>
                    {/* <td className="text-left  align-top max-w-24 break-all">{course.image}</td> */}
                    </tr>
                     ))}
                </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default App;
