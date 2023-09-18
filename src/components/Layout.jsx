import { Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </div>
    </div>
  );
};
