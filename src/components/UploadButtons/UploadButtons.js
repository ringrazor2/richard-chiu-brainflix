import "./UploadButtons.scss";
import { Link } from "react-router-dom";
const UploadButtons = () => {
  return (
    <div className="upload-buttons">
      <button className="upload-buttons__publish">
        <p className="upload-buttons__publish-text">PUBLISH</p>
      </button>
      <Link to="/">
        <button className="upload-buttons__cancel">
          <p className="upload-buttons__cancel-text">CANCEL</p>
        </button>
      </Link>
    </div>
  );
};

export default UploadButtons;
