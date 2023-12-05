import { PiHandWavingBold } from "react-icons/pi";
import { FaRegSave } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GrCycle } from "react-icons/gr";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardUser() {
  const userData = JSON.parse(Cookies.get("userData"));
  const token = Cookies.get("token");
  const [transaksi, setTransaksi] = useState([]);
  const [kelas, setKelas] = useState([]);
  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/transaksi/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataTransaksi = data.data.filter(
          (item) => item.id_user === userData.id
        );
        console.log(dataTransaksi);
        setTransaksi(dataTransaksi);
      });
  }, [userData.id, token]);

  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/kelas/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const dataKelas = data.data.filter((item) =>
          transaksi.some((trans) => trans.id_kelas === item.id)
        );
        console.log(dataKelas);
        setKelas(dataKelas);
      });
  }, [transaksi, token]);

  // Sample data
  const data = {
    labels: ["Sedang Berlangsung", "Diselesaikan"],
    datasets: [
      {
        data: [kelas.length, 0],
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
    <div className="pt-28 px-12 font-poppins">
      <span className="text-primary text-2xl font-semibold">
        Halo {userData.nama}{" "}
        <PiHandWavingBold className="inline-block text-2xl" />
      </span>

      <div id="dashboard-data" className="flex gap-10 mt-10 max-sm:flex-col">
        <div className="bg-blue-500 w-72 max-[400px]:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>{kelas.length}</span>
            <FaRegSave className="inline-block" />
          </div>
          <p>Total Kelas Diikuti</p>
        </div>
        <div className="bg-green-500 w-72 max-sm:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>0</span>
            <FaCheck className="inline-block" />
          </div>
          <p>Kelas Diselesaikan</p>
        </div>
        <div className="bg-yellow-500 w-72 max-sm:max-w-[18rem] p-5 rounded-2xl">
          <div className="mb-3 text-2xl flex justify-between">
            <span>{kelas.length}</span>
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
