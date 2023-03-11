import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">404</h1>
      <p className="errorPage__message">Oops! Something is wrong.</p>
      <Link to="/" className="errorPage__anchor">
        You should go back home, it's better.
      </Link>
    </div>
  );
};

export default ErrorPage;
