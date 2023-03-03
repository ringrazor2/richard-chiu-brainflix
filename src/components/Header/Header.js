import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/images/upload.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="Branflix Logo"></img>
        <form className="header__form">
          <div className="header__form-container">
            <input
              className="form__search"
              type="search"
              name="search"
              placeholder="Search"
            ></input>
            <img
              src={mohan}
              className="defaultAvatar"
              alt="Default avatar"
            ></img>
            <button className="header__button">
              {/* <img
                className="header__button-icon"
                src={uploadIcon}
                alt="upload icon"
              /> */}
              <p className="header__button-text">UPLOAD</p>
            </button>
          </div>
        </form>
      </header>
    </>
  );
};

export default Header;
