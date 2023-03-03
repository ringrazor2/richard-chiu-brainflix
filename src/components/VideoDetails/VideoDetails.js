import "./VideoDetails.scss";

import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";

const VideoDetails = (props) => {
  return (
    <section className="videoDetails">
      <h1 className="videoDetails__title">{props.selectedVideo.title}</h1>
      <div className="videoDetails__stats-container">
        <div className="videoDetails__stats-left">
          <p className="videoDetails__author">
            By {props.selectedVideo.channel}
          </p>
          <p className="videoDetails__date">
            {stringDate(props.selectedVideo.timestamp)}
          </p>
        </div>
        <div className="videoDetails__stats-right">
          <div className="videoDetails__views-container">
            <img src={viewsIcon} className="viewsIcon" alt="views icon"></img>
            <p className="videoDetails__views">{props.selectedVideo.views}</p>
          </div>
          <div className="videoDetails__likes-container">
            <img src={likesIcon} className="likesIcon" alt="likes icon"></img>
            <p className="videoDetails__likes">{props.selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="videoDetails__description">
        {props.selectedVideo.description}
      </p>
    </section>
  );
};

function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}
export default VideoDetails;
