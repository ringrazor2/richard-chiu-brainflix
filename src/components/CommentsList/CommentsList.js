import "./CommentsList.scss";
import Comments from "../Comments/Comments";

const CommentsList = ({ selectedVideo }) => {
  const { comments } = selectedVideo;

  return (
    <section className="commentsList">
      {comments.map((comment) => (
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
