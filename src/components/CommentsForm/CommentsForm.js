import "./CommentsForm.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";

const CommentsForm = () => {
  return (
    <>
      <h4 className="commentsAmount">3 Comments</h4>
      <form className="commentsForm">
        <div className="avatarImage-container">
          <img
            className="defaultAvatar"
            src={mohan}
            alt="default avatar for comments"
          ></img>
        </div>
        <div className="commentsFormMain-container">
          <label className="commentsForm__label" for="comment">
            JOIN THE CONVERSATION
          </label>
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Add a new comment"
          ></input>
          <button className="commentsForm__button">COMMENT</button>
        </div>
      </form>
    </>
  );
};

export default CommentsForm;
