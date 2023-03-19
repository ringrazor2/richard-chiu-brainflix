import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UploadForm.scss";
import UploadDetails from "../UploadDetails/UploadDetails";
import UploadBanner from "../UploadBanner/UploadBanner";
import UploadButtons from "../UploadButtons/UploadButtons";
import Overlay from "../../components/Overlay/Overlay";
import Modal from "../../components/Modal/Modal";

const UploadForm = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalVisible(true);
    axios.post(`http://localhost:8000/videos`, formData);
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
        <UploadDetails handleInputChange={handleInputChange} />
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
