import * as React from 'react';
import { Link } from 'react-router-dom';

interface INotFoundProps {}

const NotFound: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <>
      <h1>Page not found</h1>

      <Link to="/">Back to Home</Link>
    </>
  );
};

export default NotFound;
