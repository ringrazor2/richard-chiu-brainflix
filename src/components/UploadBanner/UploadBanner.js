import "./UploadBanner.scss";
import uploadThumbnail from "../../assets/images/Upload-video-preview.jpg";
const UploadBanner = () => {
  return (
    <>
      <h4>VIDEO THUMBNAIL</h4>
      <img src={uploadThumbnail}></img>
    </>
  );
};

export default UploadBanner;
