import "./VideoPost.scss";

const VideoPost = ({ selectedVideo }) => {
  return (
    <div className="videoPost-container" id="videoPost">
      <video
        className="videoPost"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
};

export default VideoPost;
