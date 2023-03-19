import "./UploadDetails.scss";

const UploadDetails = ({ handleInputChange }) => {
  return (
    <div className="upload-details">
      <label className="upload-details__title" htmlFor="title">
        TITLE YOUR VIDEO
      </label>
      <input
        className="upload-details__title-input"
        type="text"
        placeholder="Add a title to your video"
        name="title"
        onChange={handleInputChange}
      ></input>
      <label className="upload-details__description" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>
      <input
        className="upload-details__description-input"
        type="textarea"
        placeholder="Add a description to your video"
        name="description"
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default UploadDetails;
