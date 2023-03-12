import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import UploadDetails from "../UploadDetails/UploadDetails";
import UploadBanner from "../UploadBanner/UploadBanner";
import UploadButtons from "../UploadButtons/UploadButtons";
import Overlay from "../../components/Overlay/Overlay";
import Modal from "../../components/Modal/Modal";

const UploadForm = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
      navigate("/");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="uploadForm"
      method="POST"
      name="uploadForm"
    >
      <div className="uploadForm-mainContainer">
        <UploadBanner />
        <UploadDetails />
      </div>
      <UploadButtons />
      {isModalVisible && (
        <>
          <Modal />
          <Overlay />
        </>
      )}
    </form>
  );
};

export default UploadForm;
