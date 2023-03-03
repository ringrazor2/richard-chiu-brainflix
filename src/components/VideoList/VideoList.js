import "./VideoList.scss";
import VideoContentList from "../VideoContentList/VideoContentList";

const VideoList = (props) => {
  const inactiveVideos = props.videoData.filter((vids) => {
    return vids.id !== props.selectedVideo.id;
  });
  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {inactiveVideos.map((videoObj) => {
        return (
          <VideoContentList
            videoContentTitle={videoObj.title}
            videoContentChannel={videoObj.channel}
            videoContentImage={videoObj.image}
            key={videoObj.id}
            videoContentId={videoObj.id}
          />
        );
      })}
    </section>
  );
};

export default VideoList;
