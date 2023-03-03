import "./CommentsForm.scss";
import mohan from "../../assets/images/Mohan-muruge.jpg";

const CommentsForm = () => {
  return (
    <section className="commentsForm-container">
      <h4 className="commentsForm__amount">3 Comments</h4>
      <form className="commentsForm">
        <div className="avatarImage-container">
          <img
            className="defaultAvatar commentsForm__avatar"
            src={mohan}
            alt="default avatar for comments"
          ></img>
        </div>
        <div className="commentsForm__main-container">
          <label className="commentsForm__label" for="comment">
            JOIN THE CONVERSATION
          </label>
          <input
            className="commentsForm__input"
            type="text"
            placeholder="Add a new comment"
          ></input>
          <button className="commentsForm__button">
            <p className="commentsForm_button-text">COMMENT</p>
          </button>
        </div>
      </form>
    </section>
  );
};

export default CommentsForm;
