import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function CardFilter({ course }) {
  const userData = JSON.parse(Cookies.get("userData"));
  const token = Cookies.get("token");
  const [hasBought, setHasBought] = useState(false);

  const kategoriOptions = [
    { value: 1, label: " Keuangan" },
    { value: 2, label: " Manajemen" },
    { value: 3, label: " Kewirausahaan" },
    { value: 4, label: " Pengembangan Diri" },
    { value: 5, label: " Desain Produk" },
  ];
  useEffect(() => {
    const checkUserHasBought = async () => {
      const response = await fetch(`https://backend-production-4c5b.up.railway.app/transaksi/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();

      const boughtClass = data.data.filter(
        (item) => item.id_kelas === course.id && item.id_user === userData.id // cek apakah kelas telah dibeli
      );
      setHasBought(boughtClass.length > 0); // hasBought set to true jika kelas telah dibeli
    };

    if (token) {
      checkUserHasBought(); // jalankan checkUserHasBought ketika token ada (user login)
    }
  }, [course.id, token]);

  let { id, nama_kelas, id_kategori, harga, gambar } = course;
  return (
    <div className="flex flex-col justify-center p-5 mt-7 outline outline-gray-100 cursor-pointer  transition ease-in-out duration-300 hover:translate-y-[-10px] rounded-md shadow-md">
      <div className="">
        <img className="   rounded-md" src={gambar} style={{ width: "250px", height: "150px" }} alt="" />
      </div>

      {/* <p>{course.description}</p> */}
      <div className="flex flex-col ">
        <h1 className="  font-poppins py-1 text-sm font-semibold text-black">{nama_kelas}</h1>
        <p className="   pb-2 rounded-md font-monserrat  text-sm  text-gray-600">
          {/* {id_kategori.label} */} {kategoriOptions.find((option) => option.value === id_kategori)?.label}
        </p>
        <div className="flex py-3 px-2   justify-between items-center">
          <p className="font-monserrat  text-md font-semibold text-black  ">{`Rp.${harga}`}</p>
          {hasBought ? (
            <p className="py-1 px-3 cursor-pointer rounded-md font-monserrat  text-sm border border-primary bg-white text-primary">Telah Diikuti</p>
          ) : (
            <Link to={`${id}`}>
              <p className="py-1 px-3 cursor-pointer rounded-md font-monserrat  text-sm  bg-secondary text-white">Ikuti Kelas</p>
            </Link>
          )}
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
