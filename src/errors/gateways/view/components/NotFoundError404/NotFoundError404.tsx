import { Link } from "react-router-dom";

const NotFoundError404 = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost...</h1>
      <p>Redirect to home page</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundError404;
