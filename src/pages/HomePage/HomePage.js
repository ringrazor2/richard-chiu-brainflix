import "./HomePage.scss";
import { useParams } from "react-router-dom";
import VideoPost from "../../components/VideoPost/VideoPost";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import CommentsList from "../../components/CommentsList/CommentsList";
import VideoList from "../../components/VideoList/VideoList";

const HomePage = ({
  selectedVideo,
  updateVideo,
  videosData,
  detailsData,
  id,
}) => {
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
          videoData={videosData}
          updateVideo={updateVideo}
          detailsData={detailsData}
        />
      </main>
    </>
  );
};

export default HomePage;
