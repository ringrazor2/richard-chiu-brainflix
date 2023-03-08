import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import UploadForm from "../../components/UploadForm/UploadForm";

const UploadPage = () => {
  return (
    <>
      <Header />
      <h1>Upload Video</h1>
      <UploadForm />
    </>
  );
};

export default UploadPage;
