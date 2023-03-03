import { useState } from "react";
import Header from "./components/Header/Header";
// import VideoMain from "./components/VideoMain/VideoMain";
import videosData from "./data/video-details.json";
import VideoList from "./components/VideoList/VideoList";
function App() {
  const vData = videosData;
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

  return (
    <>
      <Header />
      <main className="main">
        <VideoList selectedVideo={selectedVideo} videoData={vData} />
      </main>
    </>
  );
}

export default App;
