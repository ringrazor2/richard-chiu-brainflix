import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal hidden">
      <h1 className="modal__message">
        Video has been successfully uploaded! Redirecting...
      </h1>
    </div>
  );
};

export default Modal;
