import "./UploadDetails.scss";

const UploadDetails = () => {
  <div class="uploadForm__input-container">
    <label className="uploadForm__title" htmlFor="title">
      TITLE YOUR VIDEO
    </label>
    <input
      className="uploadForm__title-input"
      type="text"
      placeholder="Add a title to your video"
    ></input>
    <label className="uploadForm__description" htmlFor="description">
      ADD A VIDEO DESCRIPTION
    </label>
    <input
      className="uploadForm__description-input"
      type="textarea"
      placeholder="Add a description to your video"
    ></input>
  </div>;
};

export default UploadDetails;
