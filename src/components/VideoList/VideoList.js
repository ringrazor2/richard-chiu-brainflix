import "./VideoList.scss";

const VideoList = (props) => {
  return (
    <section className="videoList">
      <h3 className="videoList__title">Next Videos</h3>
      {props.selectedVideo.map((videoObj) => {
        return (
          <VideoListContent
            videoContentTitle={videoObj.title}
            videoContentChannel={videoObj.channel}
            videoContentImage={videoObj.image}
            videoContentKey={videoObj.id}
            videoContentId={videoObj.id}
          />
        );
      })}
    </section>
  );
};

export default VideoList;
