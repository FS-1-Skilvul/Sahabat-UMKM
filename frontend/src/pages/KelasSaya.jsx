import { useState } from "react";

export default function KelasSaya() {
  const [activeFilter, setActiveFilter] = useState("semua");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
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
    </div>
  );
}
