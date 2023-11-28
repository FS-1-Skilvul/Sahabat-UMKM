import YouTube from "react-youtube";

export default function VideoPlayer({ videoId }) {
  const options = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };

  function onReady(e) {
    e.target.pauseVideo();
  }
  return (
    <YouTube videoId={videoId} options={options} onReady={onReady} id="video" />
  );
}
