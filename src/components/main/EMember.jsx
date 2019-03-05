import React from 'react';
import styled from 'styled-components';

import { PrimaryTitle, SubTitle } from '../styled/Titles';

const Input = styled.input`
  border: 1px solid #b1b1b1;
  box-shadow: none;
  display: inline-block;
  height: 44px;
  font-size: 1.5rem;
  max-width: 660px;
  padding: 0 1.5rem;
  margin: 1.5rem 0.75rem 1.5rem 1.5rem;
  transition: 150ms ease-in-out;
  width: 60%;
`;

const Button = styled.button`
  border-color: transparent;
  cursor: pointer;
  color: #fff;
  background-color: #1b1b1b;
  border-radius: 0;
  font-size: 16px;
  height: 44px;
  line-height: 35px;
  min-height: 44px;
  padding: 0;
  margin: 1.5rem 1.5rem 1.5rem 0.75rem;
  text-transform: uppercase;
  top: -1px;
  width: 40%;
`;

const Form = styled.form`
  display: flex;
`;

const EMember = () => (
  <>
    <PrimaryTitle>
      Uniqlo E-Member
    </PrimaryTitle>

    <SubTitle>
      Sign-up now, get $10 off your next order. Enjoy exclusive access to special offers and news.
    </SubTitle>

    <Form>
      <Input
        type="email"
        placeholder="Enter your email"
        required
      />

      <Button type="button">Sign Up</Button>
    </Form>
  </>
);

export default EMember;
