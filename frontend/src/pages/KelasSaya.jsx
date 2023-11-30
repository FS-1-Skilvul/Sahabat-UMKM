import { useEffect, useState } from "react";
import KelasSayaCard from "../components/KelasSayaCard";

export default function KelasSaya() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [kelas, setKelas] = useState([]);
  useEffect(() => {
    fetch(`https://65280fcd931d71583df1d176.mockapi.io/course`)
      .then((response) => response.json())
      .then((data) => {
        setKelas(data);
      });
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="px-10">
      <div className="flex gap-4">
        <div
          className={`px-5 py-1 rounded-3xl border ${
            activeFilter == "semua" ? "border-gray-800" : "border-transparent"
          }  w-fit cursor-pointer`}
          onClick={() => handleFilterClick("semua")}
        >
          <span>Semua</span>
        </div>
        <div
          className={`px-5 py-1 rounded-3xl border ${
            activeFilter == "berlangsung"
              ? "border-gray-800"
              : "border-transparent"
          }  w-fit cursor-pointer`}
          onClick={() => handleFilterClick("berlangsung")}
        >
          <span>Sedang Berlangsung</span>
        </div>
        <div
          className={`px-5 py-1 rounded-3xl border ${
            activeFilter == "selesai" ? "border-gray-800" : "border-transparent"
          }  w-fit cursor-pointer`}
          onClick={() => handleFilterClick("selesai")}
        >
          <span>Diselesaikan</span>
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center mt-24">
        {kelas.map((item) => (
          <KelasSayaCard key={item.id} kelas={item} />
        ))}
      </div>
      \
    </div>
  );
}
