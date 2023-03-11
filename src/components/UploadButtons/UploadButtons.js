import "./UploadButtons.scss";
import { Link } from "react-router-dom";
const UploadButtons = () => {
  return (
    <div className="uploadButtons">
      <button className="uploadButtons__publish">
        <p className="uploadButtons__publish-text">PUBLISH</p>
      </button>
      <Link to="/">
        <button className="uploadButtons__cancel">
          <p className="uploadButtons__cancel-text">CANCEL</p>
        </button>
      </Link>
    </div>
  );
};

export default UploadButtons;
