import "./VideoPost.scss";

const VideoPost = ({ selectedVideo }) => {
  return (
    <div className="videoPost-container">
      <video
        className="videoPost"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
};

export default VideoPost;
