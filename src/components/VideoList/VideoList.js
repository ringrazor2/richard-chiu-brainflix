import "./VideoList.scss";
import VideoContent from "../VideoContent/VideoContent";

const VideoList = ({ videoData, selectedVideo, updateVideo, detailsData }) => {
  const inactiveVideos = videoData.filter((vids) => {
    return vids.id !== selectedVideo.id;
  });
  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => {
        return (
          <VideoContent
            key={videoObj.id}
            videoContentTitle={videoObj.title}
            videoContentChannel={videoObj.channel}
            videoContentImage={videoObj.image}
            videoContentId={videoObj.id}
            updateVideo={updateVideo}
            detailsData={detailsData}
          />
        );
      })}
    </section>
  );
};

export default VideoList;
