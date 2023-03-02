import "./VideoMain.scss";
import video from "../../data/video-details.json";

const VideoMain = () => {
  const mainVideo = video[0];
  return (
    <div className="mainVideo-container">
      <video controls poster={mainVideo.image} className="mainVideo">
        <source src={mainVideo.video} type="video/mp4"></source>
      </video>
    </div>
  );
};
export default VideoMain;
