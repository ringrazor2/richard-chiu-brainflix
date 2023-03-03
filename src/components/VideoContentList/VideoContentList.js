import "./VideoContentList.scss";

const VideoListContent = (props) => {
  return (
    <>
      <img
        src={props.videoContentImage}
        alt="bike tricks thumbnail"
        className="videoListContent__image"
      ></img>
      <div className="videoListContent-textContainer">
        <h4 className="videoListContent__title">{props.videoContentTitle}</h4>
        <p className="videoListContent__channel">{props.videoContentChannel}</p>
      </div>
    </>
  );
};

export default VideoListContent;
