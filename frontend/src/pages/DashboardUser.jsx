import { PiHandWavingBold } from "react-icons/pi";
import { FaRegSave } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";

export default function DashboardUser() {
  return (
    <div className="pt-32 px-12 font-poppins">
      <h1 className="text-3xl text-primary font-semibold">Dashboard</h1>
      <span className="text-primary text-xl">Halo User </span>
      <PiHandWavingBold className="inline-block text-2xl" />

      <div id="dashboard-data" className="flex gap-10 mt-10">
        <div className="bg-blue-500 w-72 p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <FaRegSave className="inline-block" />
          </div>
          <p>Total Kelas Diikuti</p>
        </div>
        <div className="bg-green-500 w-72 p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <FaCheck className="inline-block" />
          </div>
          <p>Kelas Diselesaikan</p>
        </div>
        <div className="bg-yellow-500 w-72 p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <GrCycle className="inline-block" />
          </div>
          <p>Kelas Sedang Berlangsung</p>
        </div>
      </div>
    </div>
  );
}
