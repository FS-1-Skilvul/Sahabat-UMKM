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
      <main className="px-12 max-sm:px-0 mt-20">
        <div className="flex gap-10 mb-10 mx-auto max-sm:flex-col">
          <VideoPlayer />
          <div className="max-sm:px-10">
            <DetailMentor />
          </div>
        </div>
        <div className="max-sm:px-10">
          <DeskripsiKelas />
        </div>
      </main>
    </div>
  );
}
