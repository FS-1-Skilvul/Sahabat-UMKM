import { useEffect, useState } from "react";
import DeskripsiKelas from "../sections/DeskripsiKelas";
import ModulKelas from "../sections/ModulKelas";
import DetailMentor from "../sections/DetailMentor";
import KelasTitle from "../components/KelasTitle";
import DataKelas from "../components/DataKelas";
import { useParams } from "react-router";

export default function DetailKelas() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://65280fcd931d71583df1d176.mockapi.io/course/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="font-poppins">
      <header className="py-20">
        <KelasTitle title={data.coursename} />
        <DataKelas data={data} />
      </header>

      <main className="px-12 mt-10">
        <DeskripsiKelas desc={data.description} />
        <ModulKelas />
        <DetailMentor />
      </main>
    </div>
  );
}
