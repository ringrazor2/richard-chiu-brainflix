import "./CommentsList.scss";
import Comments from "../Comments/Comments";

const CommentsList = ({ comments }) => {
  return (
    <section className="commentsList">
      {comments &&
        comments.map((comment) => (
          <Comments
            {...comment}
            key={comment.id}
            date={stringDate(comment.timestamp)}
          />
        ))}
    </section>
  );
};

function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}

export default CommentsList;
