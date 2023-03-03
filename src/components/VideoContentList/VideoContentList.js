import "./VideoContentList.scss";

const VideoContentList = ({
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
      <div
        className="videoListContent-mainContainer"
        onClick={() => handleClick(videoContentId)}
      >
        <img
          src={videoContentImage}
          alt="bike trick s thumbnail"
          className="videoListContent__image"
        ></img>
        <div className="videoListContent-textContainer">
          <h4 className="videoListContent__title">{videoContentTitle}</h4>
          <p className="videoListContent__channel">{videoContentChannel}</p>
        </div>
      </div>
    </>
  );
};

export default VideoContentList;
