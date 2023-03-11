import "./UploadButtons.scss";

const UploadButtons = () => {
  return (
    <div className="uploadButtons">
      <button className="uploadButtons__publish">
        <p className="uploadButtons__publish-text">PUBLISH</p>
      </button>
      <button className="uploadButtons__cancel" disabled>
        <p className="uploadButtons__cancel-text">CANCEL</p>
      </button>
    </div>
  );
};

export default UploadButtons;
