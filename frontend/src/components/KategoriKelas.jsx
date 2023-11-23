import { category } from "../constants";
import { Link } from 'react-router-dom';
const Kategori_Kelas = () => {
  return (
    <div className="">
      <div className="mt-10  grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {category.map((link) => (
          
          <div key={link.title} to={link.href} className="flex gap-4 rounded-xl shadow-md py-5 px-3 cursor-pointer transition ease-in-out duration-300 hover:translate-y-[-10px]">
            <img className={`w-14  p-1 rounded-md  ${link.bg}`} src={link.image} alt="" />
            <div className="kategori-name flex flex-col gap-3">
              <h1 className="font-poppins text-lg font-semibold text-secondary">{link.title}</h1>
              <p className="flex flex-col text-xs text-gray-600 font-poppins">{link.jumlahKelas} kelas tersedia</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Kategori_Kelas;
