import "./Main.scss";
import { useState } from "react";
import videosData from "../data/videos.json";
import VideoDetails from "../data/video-details.json";
import CommentsForm from "../components/CommentsForm/CommentsForm";
import CommentsList from "../components/CommentsList/CommentsList";
import VideoList from "../components/VideoList/VideoList";

const Main = () => {
  const detailsData = dData;
  const vData = videosData;
  const [selectedVideo, setSelectedVideo] = useState(detailsData[0]);
  const updateVideo = (id) => {
    const clickedVideo = detailsData.find((vid) => {
      return vid.id === id;
    });
    setSelectedVideo(clickedVideo);
  };
  return (
    <>
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
    </>
  );
};

export default Main;
