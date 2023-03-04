import "./VideoContent.scss";

const VideoContent = ({
  videoContentTitle,
  videoContentChannel,
  videoContentImage,
  videoContentId,
  updateVideo,
}) => {
  const handleClick = (video) => {
    updateVideo(video);
  };
  return (
    <>
      <a href="#videoPost">
        <div
          className="videoContent-mainContainer"
          onClick={() => handleClick(videoContentId)}
        >
          <img
            src={videoContentImage}
            alt="bike trick s thumbnail"
            className="videoContent__image"
          ></img>
          <div className="videoContent-textContainer">
            <h4 className="videoContent__title">{videoContentTitle}</h4>
            <p className="videoContent__channel">{videoContentChannel}</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default VideoContent;
