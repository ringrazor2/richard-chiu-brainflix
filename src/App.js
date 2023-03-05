import "./App.scss";
import { useState } from "react";
import videosData from "./data/videos.json";
import dData from "./data/video-details.json";
import Header from "./components/Header/Header";
import VideoPost from "./components/VideoPost/VideoPost";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import CommentsList from "./components/CommentsList/CommentsList";
import VideoList from "./components/VideoList/VideoList";

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
      <main className="main">
        <div className="videoInformation">
          <VideoDetails selectedVideo={selectedVideo} />
          <CommentsForm />
          <CommentsList selectedVideo={selectedVideo} />
        </div>
        <VideoList
          selectedVideo={selectedVideo}
          videoData={vData}
          updateVideo={updateVideo}
          detailsData={detailsData}
        />
      </main>
    </>
  );
}

export default App;
