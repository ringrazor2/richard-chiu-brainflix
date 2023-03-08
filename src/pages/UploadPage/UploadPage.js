import "./UploadPage.scss";
import Header from "../../components/Header/Header";
import UploadBanner from "../../components/UploadBanner/UploadBanner";
import UploadDetails from "../../components/UploadDetails/UploadDetails";
const UploadPage = () => {
  return (
    <>
      <Header />
      <h1>Upload Video</h1>
      <UploadForm>
        <div className="UploadForm-mainContainer">
          <UploadBanner />
          <UploadDetails />
        </div>
        <UploadButtons />
      </UploadForm>
    </>
  );
};

export default UploadPage;
