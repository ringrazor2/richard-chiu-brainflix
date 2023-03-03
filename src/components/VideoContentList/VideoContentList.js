import "./VideoContentList.scss";

const VideoContentList = (props) => {
  const handleClick = (video) => {
    props.updateVideo(video);
  };
  return (
    <>
      <div
        className="videoListContent-mainContainer"
        onClick={() => handleClick(props.videoContentId)}
      >
        <img
          src={props.videoContentImage}
          alt="bike tricks thumbnail"
          className="videoListContent__image"
        ></img>
        <div className="videoListContent-textContainer">
          <h4 className="videoListContent__title">{props.videoContentTitle}</h4>
          <p className="videoListContent__channel">
            {props.videoContentChannel}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoContentList;
