import { FaRegClock } from "react-icons/fa";
export default function KelasSayaCard({ kelas }) {
  console.log(kelas);
  return (
    <div className="relative w-[300px] shadow-xl shadow-gray-400 p-4 rounded-xl">
      <div className="absolute top-0 right-0 p-2 bg-orange-400 text-white w-fit rounded-bl-lg">
        <FaRegClock />
      </div>
      <img src={kelas.image} alt="" />
      <p className="font-semibold mt-5">{kelas.coursename}</p>
    </div>
  );
}
