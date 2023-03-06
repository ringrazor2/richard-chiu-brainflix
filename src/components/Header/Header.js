import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="../../index.js">
          <img className="header__logo" src={logo} alt="Branflix Logo"></img>
        </a>
        <form className="header__form">
          <div className="header__form-container">
            <input
              className="header__form-search"
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
              <p className="header__button-text">UPLOAD</p>
            </button>
          </div>
        </form>
      </header>
    </>
  );
};

export default Header;
