import "./VideoPost.scss";

const VideoPost = (props) => {
  return (
    <div className="videoPost-container">
      <video
        className="videoPost"
        controls
        poster={props.selectedVideo.image}
      ></video>
    </div>
  );
};

export default VideoPost;
