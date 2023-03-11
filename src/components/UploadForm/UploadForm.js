import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadForm.scss";
import UploadDetails from "../UploadDetails/UploadDetails";
import UploadBanner from "../UploadBanner/UploadBanner";
import UploadButtons from "../UploadButtons/UploadButtons";

const UploadForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");

    modal.classList.toggle("hidden");
    overlay.classList.toggle("hidden");

    setTimeout(() => {
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
    </form>
  );
};

export default UploadForm;
