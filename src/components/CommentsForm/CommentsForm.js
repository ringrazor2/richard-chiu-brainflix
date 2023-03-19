import "./CommentsForm.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";

const CommentsForm = ({ selectedVideoComments }) => {
  return (
    <section className="commentsForm-container">
      <h4 className="commentsForm__amount">
        {selectedVideoComments ? selectedVideoComments.length : 0} Comments
      </h4>
      <form className="commentsForm">
        <div className="avatarImage-container">
          <img
            className="defaultAvatar commentsForm__avatar"
            src={mohan}
            alt="default avatar for comments"
          ></img>
        </div>
        <div className="commentsForm__main-container">
          <div className="commentsForm__input-container">
            <label className="commentsForm__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <input
              className="commentsForm__input"
              type="text"
              placeholder="Add a new comment"
            ></input>
          </div>
          <button className="commentsForm__button" disabled>
            <p className="commentsForm__button-text">COMMENT</p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default CommentsForm;
