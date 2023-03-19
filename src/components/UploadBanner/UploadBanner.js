import "./UploadBanner.scss";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
const UploadBanner = () => {
  return (
    <div className="upload-banner">
      <h4 className="upload-banner__title">VIDEO THUMBNAIL</h4>
      <img
        className="upload-banner__thumbnail"
        src={uploadThumbnail}
        alt="upload thumbnail"
      ></img>
    </div>
  );
};

export default UploadBanner;
