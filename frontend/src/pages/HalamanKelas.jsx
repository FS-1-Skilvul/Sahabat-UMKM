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
        <div className="flex justify-between gap-8 mb-10 mx-auto max-sm:flex-col">
          <VideoPlayer
            videoLink={
              "https://www.youtube.com/embed/evyIJL8_1XE?si=6Mox_SPixG2Hsm_p"
            }
          />
          <div className="max-sm:px-10 w-[450px]">
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
