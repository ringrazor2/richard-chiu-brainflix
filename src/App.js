import { useState } from "react";
import videosData from "./data/videos.json";
import dData from "./data/video-details.json";
import "./Main.scss";
import "./VideoInformation.scss";
import Header from "./components/Header/Header";
import VideoPost from "./components/VideoPost/VideoPost";

function App() {
  const vData = videosData;
  const detailsData = dData;
  const [selectedVideo, setSelectedVideo] = useState(detailsData[0]);

  const updateVideo = (id) => {
    const clickedVideo = detailsData.find((vid) => {
      return vid.id === id;
    });
    setSelectedVideo(clickedVideo);
  };

  return (
    <>
      <Header />
      <VideoPost selectedVideo={selectedVideo} />
      <Main />
    </>
  );
}

export default App;
