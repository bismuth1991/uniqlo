import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SecondaryNav = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const SecondaryNavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  text-transform: uppercase;
  background-color: white;
  border: 1px solid #e6e6e6;

  a {
    font-size: 1.6rem;
    font-weight: 100;
    color: black;
    text-decoration: none;
  }
`;

const SecondaryNavBar = () => (
  <SecondaryNav>
    <SecondaryNavItem>
      <Link to="/new-arrivals">New Arrivals</Link>
    </SecondaryNavItem>

    <SecondaryNavItem>
      <Link to="/sales">Sales</Link>
    </SecondaryNavItem>
  </SecondaryNav>
);

export default SecondaryNavBar;
