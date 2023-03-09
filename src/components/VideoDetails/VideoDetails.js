import "./VideoDetails.scss";
import stringDateFull from "../../utilities/scripts/stringToDate";
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const VideoDetails = ({ selectedVideo }) => {
  const { title, channel, timestamp, views, likes, description } =
    selectedVideo;
  return (
    <section className="videoDetails">
      <h1 className="videoDetails__title">{title}</h1>
      <div className="videoDetails__stats-container">
        <div className="videoDetails__stats-left">
          <p className="videoDetails__author">By {channel}</p>
          <p className="videoDetails__date">{stringDateFull(timestamp)}</p>
        </div>
        <div className="videoDetails__stats-right">
          <div className="videoDetails__views-container">
            <img src={viewsIcon} className="viewsIcon" alt="views icon"></img>
            <p className="videoDetails__views">{views}</p>
          </div>
          <div className="videoDetails__likes-container">
            <img src={likesIcon} className="likesIcon" alt="likes icon"></img>
            <p className="videoDetails__likes">{likes}</p>
          </div>
        </div>
      </div>
      <p className="videoDetails__description">{description}</p>
    </section>
  );
};

export default VideoDetails;
