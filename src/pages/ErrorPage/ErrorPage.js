import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">404</h1>
      <p className="errorPage__message">Oops! Something is wrong.</p>
      <Link to="/" className="errorPage__anchor">
        <i className="icon-home"></i> Go back in initial page, is better.
      </Link>
    </div>
  );
};

export default ErrorPage;
