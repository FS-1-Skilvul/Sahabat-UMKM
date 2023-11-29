import { useEffect, useState } from "react";
import DeskripsiKelas from "../sections/DeskripsiKelas";
import ModulKelas from "../sections/ModulKelas";
import DetailMentor from "../sections/DetailMentor";
import KelasTitle from "../components/KelasTitle";
import DataKelas from "../components/DataKelas";

export default function DetailKelas() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://65280fcd931d71583df1d176.mockapi.io/course/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="font-poppins">
      <header className="py-20">
        <KelasTitle />
        <DataKelas data={data} />
      </header>

      <main className="px-12 mt-10">
        <DeskripsiKelas />
        <ModulKelas />
        <DetailMentor />
      </main>
    </div>
  );
}
