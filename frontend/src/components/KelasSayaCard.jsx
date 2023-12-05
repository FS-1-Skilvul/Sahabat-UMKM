import { FaRegClock } from "react-icons/fa";
export default function KelasSayaCard({ kelas }) {
  return (
    <div className="relative w-[330px] shadow-xl shadow-gray-400 p-4 rounded-xl cursor-pointer transition ease-in-out duration-300 hover:translate-y-[-10px]">
      <img src={kelas.gambar} alt="" />
      <p className="font-semibold mt-5 text-lg">{kelas.nama_kelas}</p>
      <p className="mt-5">Durasi Kelas: {kelas.durasi}</p>
    </div>
  );
}
