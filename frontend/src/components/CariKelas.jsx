import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import CardFilter from "./CardFilter";
import Cookies from "js-cookie";

const CariKelas = () => {
  const token = Cookies.get("token");
  const [filterCourses, setFilterCourses] = useState([]);
  const [input, setInput] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://backend-production-4c5b.up.railway.app/kelas", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setCourses(data.data);
      });
  }, []);

  useEffect(() => {
    if (input.trim() === "") {
      // If the input is empty, show all courses
      setFilterCourses(courses);
    } else {
      // If there's input, filter the courses based on the input
      let filter = courses.filter((item) =>
        item.nama_kelas.toLowerCase().includes(input)
      );
      setFilterCourses(filter);
    }
  }, [input, courses]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="padding-x padding-y">
        <div className="flex justify-center list-none gap-4 font-montserrat font-semibold pt-5">
          <h1 className="font-poppins text-3xl text-primary font-bold">
            Eksplor Kelas
          </h1>
        </div>

        <input
          type="text"
          name="input"
          placeholder="Cari Kelas"
          value={input}
          className="py-2 px-4 border-2   border-gray-300 rounded-md"
          onChange={handleInput}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterCourses.length === 0 ? (
            <div>
              {input.trim() === "" ? "Loading..." : "Data tidak ditemukan"}
            </div>
          ) : (
            filterCourses.map((item) => (
              <CardFilter key={item.id} course={item} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default CariKelas;
