import "./Comments.scss";

const Comments = () => {
  return (
    <div className="comments">
      <div className="comments__avatar-container">
        <div className="comments__avatar-placeHolder"></div>
      </div>
      <div className="comments__main">
        <div class="comments__nameDate-container">
          <p className="comments__name">Micheal Lyons</p>
          <p className="comments__date">08/09/2021</p>
        </div>
        <div className="comments__content-container">
          <p className="comments__content">
            testing cpjjlkdjsflkhjklsdhhfds; hfdkl f;lkjdf
            kldklsjuheiuhdiushldaj
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
