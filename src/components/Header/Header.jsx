import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Section from '../styled/Section';
import logo from '../../assets/images/logo.jpg';

const Logo = styled.figure`
  grid-column-end: span 6;
  margin: 0;
`;

const LogInLink = styled.div`
  grid-column-end: span 6;
  justify-self: end;
  a {
    font-size: 1.7em;
  }
`;

const Header = () => (
  <Section>
    <Logo>
      <Link to="/">
        <img src={logo} alt="logo" width="95px" />
      </Link>
    </Logo>

    <LogInLink>
      <Link to="login">LOG IN</Link>
    </LogInLink>
  </Section>
);

export default Header;
