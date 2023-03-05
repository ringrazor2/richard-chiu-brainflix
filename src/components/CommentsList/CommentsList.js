import "./CommentsList.scss";
import Comments from "../Comments/Comments";

const CommentsList = ({ selectedVideo }) => {
  let selectedVideoComments = selectedVideo.comments;
  return (
    <section className="commentsList">
      {selectedVideoComments.map((comment) => {
        return (
          <Comments
            id={comment.id}
            name={comment.name}
            comment={comment.comment}
            date={comment.timestamp}
            key={comment.id}
          />
        );
      })}
    </section>
  );
};

function stringDate(dateCode) {
  const date = new Date(dateCode);
  const dateString = date.toLocaleDateString();
  return dateString;
}

export default CommentsList;
