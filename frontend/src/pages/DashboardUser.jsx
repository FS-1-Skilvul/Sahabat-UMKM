import { PiHandWavingBold } from "react-icons/pi";
import { FaRegSave } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardUser() {
  // Sample data
  const data = {
    labels: ["Sedang Berlangsung", "Diselesaikan"],
    datasets: [
      {
        data: [5, 5],
        backgroundColor: ["rgba(234, 179, 8, 0.5)", "rgba(34, 197, 94, 0.5)"],
        borderColor: ["rgba(234, 179, 8, 1)", "rgba(34, 197, 94, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    aspectRatio: 1,
  };

  return (
    <div className="pt-12 px-12 font-poppins">
      <h1 className="text-3xl text-primary font-semibold">Dashboard</h1>
      <span className="text-primary text-xl">Halo User </span>
      <PiHandWavingBold className="inline-block text-2xl" />

      <div id="dashboard-data" className="flex gap-10 mt-10 max-sm:flex-col">
        <div className="bg-blue-500 w-72 max-[400px]:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <FaRegSave className="inline-block" />
          </div>
          <p>Total Kelas Diikuti</p>
        </div>
        <div className="bg-green-500 w-72 max-sm:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <FaCheck className="inline-block" />
          </div>
          <p>Kelas Diselesaikan</p>
        </div>
        <div className="bg-yellow-500 w-72 max-sm:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>5</span>
            <GrCycle className="inline-block" />
          </div>
          <p>Kelas Sedang Berlangsung</p>
        </div>
      </div>
      <div className="h-[350px] w-[350px] mt-16">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
