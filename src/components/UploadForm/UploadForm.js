import "./UploadForm.scss";
import UploadDetails from "../UploadDetails/UploadDetails";
import UploadBanner from "../UploadBanner/UploadBanner";
import UploadButtons from "../UploadButtons/UploadButtons";
const UploadForm = () => {
  return (
    <div className="uploadForm">
      <div className="uploadForm-mainContainer">
        <UploadBanner className="uploadBanner" />
        <UploadDetails className="uploadDetails" />
      </div>
      <UploadButtons />
    </div>
  );
};

export default UploadForm;
