import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #555;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: .1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #bbb;
  cursor: pointer;
  box-sizing: border-box;

  &:hover,
  &:focus {
    color: #333;
    border-color: #888;
    outline: 0;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #FFF;
  background-color: #33C3F0;
  border-color: #33C3F0;

  &:hover,
  &:focus {
    color: #FFF;
    background-color: #1EAEDB;
    border-color: #1EAEDB;
  }
`;
