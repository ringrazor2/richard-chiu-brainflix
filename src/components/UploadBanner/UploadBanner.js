import "./UploadBanner.scss";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
const UploadBanner = () => {
  return (
    <div className="uploadBanner">
      <h4 className="uploadBanner__title">VIDEO THUMBNAIL</h4>
      <img
        className="uploadBanner__thumbnail"
        src={uploadThumbnail}
        alt="upload thumbnail"
      ></img>
    </div>
  );
};

export default UploadBanner;
