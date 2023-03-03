import { useState } from "react";
import videosData from "./data/videos.json";
import dData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoPost from "./components/VideoPost/VideoPost";
import VideoList from "./components/VideoList/VideoList";
function App() {
  const vData = videosData;
  const detailsData = dData;
  const [selectedVideo, setSelectedVideo] = useState(videosData[0]);

  return (
    <>
      <Header />
      <main className="main">
        <VideoPost selectedVideo={selectedVideo} />
        <VideoList selectedVideo={selectedVideo} videoData={vData} />
      </main>
    </>
  );
}

export default App;
