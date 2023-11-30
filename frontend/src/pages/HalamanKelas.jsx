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
          <iframe
            className="w-[640px] h-[390px] max-sm:w-full max-sm:h-full"
            src="https://www.youtube.com/embed/evyIJL8_1XE?si=6Mox_SPixG2Hsm_p"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
