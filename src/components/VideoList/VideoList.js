import "./VideoList.scss";
import VideoContent from "../VideoContent/VideoContent";

function VideoList({ videoList, selectedVideo, setSelectedVideo }) {
  const inactiveVideos = videoList.filter(
    (vids) => vids.id !== selectedVideo.id
  );

  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => (
        <VideoContent
          key={videoObj.id}
          {...videoObj}
          setSelectedVideo={setSelectedVideo}
          selectedVideo={selectedVideo}
        />
      ))}
    </section>
  );
}

export default VideoList;
