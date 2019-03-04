import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/images/logo.jpg';

const Logo = styled.img`
  grid-column-end: span 6;
  padding: 10px;
`;

const LogInLink = styled.div`
  grid-column-end: span 6;
  padding: 10px;
  justify-self: end;
  align-self: center;
  a {
    font-size: 1.7em;
  }
`;

const Header = () => (
  <>
    <Logo
      src={logo}
      width="110px"
    />

    <LogInLink>
      <Link to="login">LOG IN</Link>
    </LogInLink>
  </>
);

export default Header;
