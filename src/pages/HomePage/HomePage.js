import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage";
import VideoPost from "../../components/VideoPost/VideoPost";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";
import "./HomePage.scss";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const HomePage = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);

  useEffect(() => {
    async function fetchVideoList() {
      try {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/videos`);
        setVideoList(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideoList();
  }, []);

  useEffect(() => {
    async function fetchVideoDetails() {
      try {
        const response = await axios.get(
          `http://localhost:8000/videos/${id || videoList[0].id}`
        );
        setSelectedVideo(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    if (videoList) {
      fetchVideoDetails();
    }
  }, [id, videoList]);

  if (!selectedVideo || !videoList) {
    return <LoadingPage />;
  }

  return (
    <>
      <VideoPost selectedVideo={selectedVideo} />
      <main className="main">
        <div className="videoInformation">
          <VideoDetails selectedVideo={selectedVideo} />
          <CommentsForm
            selectedVideo={selectedVideo}
            selectedVideoComments={selectedVideo.comments}
          />
          <CommentsList comments={selectedVideo.comments} />
        </div>
        <VideoList
          selectedVideo={selectedVideo}
          setSelectedVide={setSelectedVideo}
          videoList={videoList}
          setVideoList={setVideoList}
          id={id}
        />
      </main>
    </>
  );
};

export default HomePage;
