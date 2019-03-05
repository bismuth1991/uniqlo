import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  text-transform: uppercase;
  
  a {
    font-size: 1.6rem;
    font-weight: 100;
    color: white;
    text-decoration: none;
  }
`;
const NavWomen = styled(NavItem)`
  background-color: #fc0d1b;
`;
const NavMen = styled(NavItem)`
  background-color: #020d80;
`;
const NavGirls = styled(NavItem)`
  background-color: #eb64a5;
`;
const NavBoys = styled(NavItem)`
  background-color: #1792d4;
`;
const NavBaby = styled(NavItem)`
  background-color: #97c626;
`;

const PrimaryNavBar = () => (
  <Nav>
    <NavWomen>
      <Link to="/women">Women</Link>
    </NavWomen>

    <NavMen>
      <Link to="/men">Men</Link>
    </NavMen>

    <NavGirls>
      <Link to="/girls">Girls</Link>
    </NavGirls>

    <NavBoys>
      <Link to="/boys">Boys</Link>
    </NavBoys>

    <NavBaby>
      <Link to="/baby">Baby</Link>
    </NavBaby>
  </Nav>
);

export default PrimaryNavBar;
