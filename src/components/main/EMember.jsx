import React from 'react';
import styled from 'styled-components';

import { PrimaryTitle, SubTitle } from '../styled/Titles';
import { GrayButton } from '../styled/base/_button';
import { Form, Input } from '../styled/base/_form';

const EMemberForm = styled(Form)`
  display: flex;
  input {
    width: 60%;
    margin-right: 15px;
  }
  button {
    width: 40%;
  }
`;

const EMember = () => (
  <>
    <PrimaryTitle>
      Uniqlo E-Member
    </PrimaryTitle>

    <SubTitle>
      Sign-up now, get $10 off your next order. Enjoy exclusive access to special offers and news.
    </SubTitle>

    <EMemberForm>
      <Input
        type="email"
        placeholder="Enter your email"
        required
      />

      <GrayButton type="submit">Sign Up</GrayButton>
    </EMemberForm>
  </>
);

export default EMember;
