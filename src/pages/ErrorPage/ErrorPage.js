import "./ErrorPage.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1 className="error-page__title">404</h1>
      <p className="error-page__message">Oops! Something is wrong.</p>
      <Link to="/" className="error-page__anchor">
        You should go back home, it's better.
      </Link>
    </div>
  );
};

export default ErrorPage;
