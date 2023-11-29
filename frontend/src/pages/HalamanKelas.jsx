import KelasTitle from "../components/KelasTitle";
import VideoPlayer from "../components/VideoPlayer";
import DeskripsiKelas from "../sections/DeskripsiKelas";
import DetailMentor from "../sections/DetailMentor";

export default function HalamanKelas() {
  return (
    <div>
      <header className="pt-20">
        <KelasTitle />
      </header>
      <main className="px-12 mt-20">
        <div className="flex gap-10 mb-10">
          <VideoPlayer videoId={"evyIJL8_1XE"} />
          <DetailMentor />
        </div>
        <DeskripsiKelas />
      </main>
    </div>
  );
}
