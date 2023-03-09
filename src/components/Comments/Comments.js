import "./Comments.scss";
import stringDateFull from "../../utilities/scripts/stringToDate";
const Comments = ({ name, comment, date }) => {
  return (
    <div className="comments">
      <div className="comments__avatar-container">
        <div className="comments__avatar-placeHolder"></div>
      </div>
      <div className="comments__main">
        <div className="comments__nameDate-container">
          <p className="comments__name">{name}</p>
          <p className="comments__date">{stringDateFull(date)}</p>
        </div>
        <div className="comments__content-container">
          <p className="comments__content">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
