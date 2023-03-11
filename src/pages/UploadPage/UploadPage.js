import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import Overlay from "../../components/Overlay/Overlay";
import Modal from "../../components/Modal/Modal";
const UploadPage = () => {
  return (
    <>
      <h1 className="upload-title">Upload Video</h1>
      <UploadForm />
      <Modal />
      <Overlay />
    </>
  );
};

export default UploadPage;
