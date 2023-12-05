import KelasTitle from "../components/KelasTitle";
import VideoPlayer from "../components/VideoPlayer";
import DeskripsiKelas from "../sections/DeskripsiKelas";
import DetailMentor from "../sections/DetailMentor";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function HalamanKelas() {
  const token = Cookies.get("token");
  const { id } = useParams();
  const [kelas, setKelas] = useState({});

  useEffect(() => {
    fetch(`https://backend-production-4c5b.up.railway.app/kelas/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setKelas(data.data);
      });
  }, []);
  return (
    <div>
      <header className="pt-20">
        <KelasTitle title={kelas.nama_kelas} />
      </header>
      <main className="px-12 max-sm:px-0 mt-20">
        <div className="flex justify-between gap-8 mb-10 mx-auto max-sm:flex-col">
          <VideoPlayer videoLink={kelas.video} />
          <div className="max-sm:px-10 w-[450px]">
            <DetailMentor data={kelas} />
          </div>
        </div>
        <div className="max-sm:px-10">
          <DeskripsiKelas desc={kelas.deskripsi} />
        </div>
      </main>
    </div>
  );
}
