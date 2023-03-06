import "./VideoList.scss";
import VideoContent from "../VideoContent/VideoContent";

function VideoList({ videoData, selectedVideo, updateVideo, detailsData }) {
  const inactiveVideos = videoData.filter(
    (vids) => vids.id !== selectedVideo.id
  );

  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => (
        <VideoContent
          key={videoObj.id}
          {...videoObj}
          updateVideo={updateVideo}
          detailsData={detailsData}
        />
      ))}
    </section>
  );
}

export default VideoList;
