import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardFilter({ course }) {
  let { id, coursename, category, price, image } = course;
  return (
    <div className="flex flex-col justify-center p-5 mt-7 outline outline-gray-100 cursor-pointer  transition ease-in-out duration-300 hover:translate-y-[-10px] rounded-md shadow-md">
      <div className="">
        <img
          className="   rounded-md"
          src={image}
          style={{ width: "250px", height: "150px" }}
          alt=""
        />
      </div>

      {/* <p>{course.description}</p> */}
      <div className="flex flex-col ">
        <h1 className="  font-poppins py-1 text-sm font-semibold text-black">
          {coursename}
        </h1>
        <p className="   pb-2 rounded-md font-monserrat  text-sm  text-gray-600">
          {category}
        </p>
        <div className="flex py-3 px-2   justify-between items-center">
          <p className="font-monserrat  text-md font-semibold text-black  ">
            {" "}
            {price}
          </p>
          <Link to={`:${id}`}>
            <p className="py-1 px-3 cursor-pointer rounded-md font-monserrat  text-sm  bg-secondary text-white">
              {" "}
              Ikuti Kelas
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
CardFilter.propTypes = {
  course: PropTypes.object,
  // atk: PropTypes.number
};
export default CardFilter;
