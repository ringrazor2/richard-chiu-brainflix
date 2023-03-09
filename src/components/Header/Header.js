import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink className="header__logo-link" to="/">
          <img className="header__logo" src={logo} alt="Branflix Logo"></img>
        </NavLink>
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
            <NavLink to="/upload">
              <button className="header__button">
                <p className="header__button-text">UPLOAD</p>
              </button>
            </NavLink>
          </div>
        </form>
      </header>
    </>
  );
};

export default Header;
