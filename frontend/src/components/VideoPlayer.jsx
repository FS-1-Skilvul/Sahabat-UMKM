export default function VideoPlayer({ videoLink }) {
  return (
    <iframe
      className="w-[640px] h-[390px] max-sm:w-full max-sm:h-full"
      src="https://www.youtube.com/embed/evyIJL8_1XE?si=6Mox_SPixG2Hsm_p"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}
