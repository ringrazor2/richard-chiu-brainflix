import "./VideoList.scss";
import VideoContent from "../VideoContent/VideoContent";
import { Link } from "react-router-dom";
function VideoList({ videoList, selectedVideo, setSelectedVideo, id }) {
  const inactiveVideos = videoList.filter(
    (vids) => vids.id !== selectedVideo.id
  );

  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => (
        <Link to={`/${videoObj.id}`} key={videoObj.id}>
          <VideoContent key={videoObj.id} {...videoObj} />
        </Link>
      ))}
    </section>
  );
}

export default VideoList;
