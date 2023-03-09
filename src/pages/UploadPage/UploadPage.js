import "./UploadPage.scss";
import UploadForm from "../../components/UploadForm/UploadForm";
import Header from "../../components/Header/Header";

const UploadPage = () => {
  return (
    <>
      <Header />
      <h1 className="upload-title">Upload Video</h1>
      <UploadForm />
    </>
  );
};

export default UploadPage;
