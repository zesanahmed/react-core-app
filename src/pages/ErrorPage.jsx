import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const {error,status}=useRouteError();
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Error {status || 404}</h1>
      <p className="py-6">{error?.message}</p>
      <button className="btn btn-primary">
        <Link to={"/"}>Home Page</Link>
      </button>
    </div>
  </div>
</div>
    );
};

export default ErrorPage;