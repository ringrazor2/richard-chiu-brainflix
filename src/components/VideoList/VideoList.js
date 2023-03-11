import "./VideoList.scss";
import VideoContent from "../VideoContent/VideoContent";
import { Link } from "react-router-dom";
function VideoList({ videoList, selectedVideo, handleClick }) {
  const inactiveVideos = videoList.filter(
    (vids) => vids.id !== selectedVideo.id
  );

  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => (
        <Link to={`/video/${videoObj.id}`} key={videoObj.id}>
          <VideoContent key={videoObj.id} {...videoObj} />
        </Link>
      ))}
    </section>
  );
}

export default VideoList;
