import React, { useState, useEffect } from "react";
function CardClass() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://65280fcd931d71583df1d176.mockapi.io/course")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <>
    <div className="padding-x card-class">
      <div className="  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col justify-center p-5 mt-7 outline outline-gray-100 cursor-pointer  transition ease-in-out duration-300 hover:translate-y-[-10px] rounded-md shadow-md">
             <div  className="">
            <img className="   rounded-md" src={course.image}  style={{width: '250px', height: '150px'}} alt="" />
            </div>
            <div className="flex flex-col ">
            <h1 className="  font-poppins py-1 text-sm font-semibold text-black">{course.coursename}</h1>
            <p className="   pb-2 rounded-md font-monserrat  text-sm  text-gray-600">{course.category}</p>
            <div className="flex py-3 px-2   justify-between items-center">
            <p className="font-monserrat  text-md font-semibold text-black  "> {course.price}</p>
            <p className="py-1 px-3 cursor-pointer rounded-md font-monserrat  text-sm  bg-secondary text-white "> Ikuti Kelas</p>
            </div>
            </div>
          </div>
        ))}
      </div>
        </div>
    </>
  );
}

export default CardClass;