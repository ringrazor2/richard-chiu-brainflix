import { useState } from "react";
import Header from "./components/Header/Header";
import VideoMain from "./components/VideoMain/VideoMain";
import videoDetails from "./data/video-details.json";

function App() {
  const [mainVideo, setMainVideo] = useState(videoDetails);

  const updateVideo = () => {
    setMainVideo(
      mainVideo.filter((video) => {
        if (video.id !== "84e96018-4022-434e-80bf-000ce4cd12b8") {
          return true;
        }
        return false;
      })
    );
  };

  return (
    <>
      <Header />
      <main>
        <VideoMain index={mainVideo} onClick={updateVideo} />
        <VideoList index={setMainVideo} />
      </main>
    </>
  );
}

export default App;
