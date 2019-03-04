import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/images/logo.jpg';

const Logo = styled.figure`
  grid-column-end: span 6;
  padding: 20px 10px 10px 10px;
  margin: 0;
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
    <Logo>
      <Link to="/">
        <img src={logo} alt="logo" width="95px" />
      </Link>
    </Logo>

    <LogInLink>
      <Link to="login">LOG IN</Link>
    </LogInLink>
  </>
);

export default Header;
