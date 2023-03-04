import "./Comments.scss";

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

function stringDateFull(dateCode) {
  const date = new Date(dateCode);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateString = `${month}/${day}/${year}`;
  return dateString;
}

export default Comments;
