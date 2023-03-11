import "./ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <h1 className="errorPage__title">404</h1>
      <p className="errorPage__message">Oops! Something is wrong.</p>
      <a className="errorPage__anchor" href="#">
        <i className="icon-home"></i> Go back in initial page, is better.
      </a>
    </div>
  );
};

export default ErrorPage;
