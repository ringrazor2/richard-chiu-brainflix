import "./HomePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPost from "../../components/VideoPost/VideoPost";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = ({ getVideoListData, getVideoDetailsData }) => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    getVideoListData()
      .then((response) => {
        setVideoList(response);
        return response;
      })
      .then((response) => {
        return getVideoDetailsData(id || response[0].id).then((detailsData) => {
          setSelectedVideo(detailsData);
        });
      });
  }, [id, getVideoDetailsData, getVideoListData]);

  if (!selectedVideo || !videoList) {
    return <span>Loading....</span>;
  }

  return (
    <>
      <VideoPost selectedVideo={selectedVideo} />
      <main className="main">
        <div className="videoInformation">
          <VideoDetails selectedVideo={selectedVideo} />
          <CommentsForm />
          <CommentsList selectedVideo={selectedVideo} />
        </div>
        <VideoList
          selectedVideo={selectedVideo}
          setSelectedVide={setSelectedVideo}
          videoList={videoList}
          setVideoList={setVideoList}
          getVideoListData={getVideoListData}
        />
      </main>
    </>
  );
};

export default HomePage;
