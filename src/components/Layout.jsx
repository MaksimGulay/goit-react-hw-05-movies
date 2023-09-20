import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Layout = () => {
  return (
    <div>
      <div>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </div>
    </div>
  );
};
export default Layout;
