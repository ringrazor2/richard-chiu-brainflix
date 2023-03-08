import "./UploadForm.scss";
import UploadDetails from "../UploadDetails/UploadDetails";
import UploadBanner from "../UploadBanner/UploadBanner";

const UploadForm = () => {
  return (
    <>
      <div className="uploadForm-mainContainer">
        <UploadBanner className="uploadBanner" />
        <UploadDetails className="uploadDetails" />
      </div>
      <UploadButtons />
    </>
  );
};

export default UploadForm;
