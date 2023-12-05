import { useEffect, useState } from "react";
import DeskripsiKelas from "../sections/DeskripsiKelas";
import ModulKelas from "../sections/ModulKelas";
import DetailMentor from "../sections/DetailMentor";
import KelasTitle from "../components/KelasTitle";
import DataKelas from "../components/DataKelas";
import { useParams } from "react-router";

import Cookies from "js-cookie";

export default function DetailKelas() {
  const token = Cookies.get("token");
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/kelas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  return (
    <div className="font-poppins">
      <header className="py-20">
        <KelasTitle title={data.nama_kelas} />
        <DataKelas data={data} />
      </header>

      <main className="px-12 mt-10">
        <DeskripsiKelas desc={data.deskripsi} />
        <DetailMentor data={data} />
      </main>
    </div>
  );
}
