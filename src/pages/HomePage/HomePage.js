import "./HomePage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoPost from "../../components/VideoPost/VideoPost";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";
import LoadingPage from "../LoadingPage/LoadingPage";

const HomePage = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoList, setVideoList] = useState(null);

  const apiKey = "84782a7a-00f9-4ef6-95f6-c179b567af2c";

  async function getVideoListData() {
    try {
      const videoUrl = `https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`;
      const response = await axios.get(videoUrl + apiKey);
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function getVideoDetailsData(id) {
    try {
      const response = await axios.get(
        `https://project-2-api.herokuapp.com/videos/${id}/?api_key=` + apiKey
      );
      const data = response.data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

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
  }, [id]);

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
          getVideoListData={getVideoListData}
          id={id}
        />
      </main>
    </>
  );
};

export default HomePage;
