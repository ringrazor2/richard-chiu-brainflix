import "./VideoContent.scss";

function VideoContent({ channel, image, title, handleClick }) {
  return (
    <div className="videoContent-mainContainer" onClick={handleClick}>
      <img
        src={image}
        alt={`${title} thumbnail`}
        className="videoContent__image"
      />
      <div className="videoContent-textContainer">
        <h4 className="videoContent__title">{title}</h4>
        <p className="videoContent__channel">{channel}</p>
      </div>
    </div>
  );
}

export default VideoContent;
