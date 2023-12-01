import { Link } from "react-router-dom";

export default function DataKelas({ data }) {
  return (
    <div
      id="class-data"
      className="flex max-sm:flex-col items-center mt-10 px-12 max-sm:px-0 gap-10"
    >
      <img src={data.image} alt="" className="max-w-xs max-sm:w-full" />
      <div>
        <span
          id="price"
          className="text-xl bg-blue-keuangan text-primary px-7 py-[2px] rounded-2xl"
        >
          {data.price}
        </span>
        <p id="duration" className="mt-2 text-gray-600">
          1jam 25mnt
        </p>
        <p id="rating" className="text-sm">
          (36 Review)
        </p>
        <p id="registerCount" className="text-sm">
          53 Orang Telah Mendaftar Kelas Ini
        </p>
        <Link to="/payment">
          <button className="border-[1.5px] border-primary bg-primary text-white px-5 py-1 rounded-lg mt-3 duration-300 hover:bg-white hover:text-primary">
            Beli Kelas
          </button>
        </Link>
      </div>
    </div>
  );
}
