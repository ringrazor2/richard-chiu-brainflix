import { useState } from "react";
import Header from "./components/Header/Header";
import VideoMain from "./components/VideoMain/VideoMain";
import videoDetails from "./data/video-details.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  return (
    <>
      <Header />
      <main className="main">
        <VideoList selectedVideo={selectedVideo} />
      </main>
    </>
  );
}

export default App;
