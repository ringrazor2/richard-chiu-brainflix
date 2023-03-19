import "./UploadDetails.scss";

const UploadDetails = ({ handleInputChange }) => {
  return (
    <div class="uploadDetails">
      <label className="uploadDetails__title" htmlFor="title">
        TITLE YOUR VIDEO
      </label>
      <input
        className="uploadDetails__title-input"
        type="text"
        placeholder="Add a title to your video"
        name="title"
        onChange={handleInputChange}
      ></input>
      <label className="uploadDetails__description" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>
      <input
        className="uploadDetails__description-input"
        type="textarea"
        placeholder="Add a description to your video"
        name="description"
        onChange={handleInputChange}
      ></input>
    </div>
  );
};

export default UploadDetails;
