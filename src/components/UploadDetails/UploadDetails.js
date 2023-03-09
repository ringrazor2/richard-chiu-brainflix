import "./UploadDetails.scss";

const UploadDetails = () => {
  return (
    <div class="uploadDetails">
      <label className="uploadDetails__title" htmlFor="title">
        TITLE YOUR VIDEO
      </label>
      <input
        className="uploadDetails__title-input"
        type="text"
        placeholder="Add a title to your video"
      ></input>
      <label className="uploadDetails__description" htmlFor="description">
        ADD A VIDEO DESCRIPTION
      </label>
      <input
        className="uploadDetails__description-input"
        type="textarea"
        placeholder="Add a description to your video"
      ></input>
    </div>
  );
};

export default UploadDetails;
