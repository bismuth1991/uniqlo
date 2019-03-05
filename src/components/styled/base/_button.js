import styled from 'styled-components';
import { codGray, almostBlack, torchRed, red } from './_colors';

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
  margin-bottom: 1rem;

  &:hover,
  &:focus {
    color: #333;
    border-color: #888;
    outline: 0;
  }
`;

export const RedButton = styled(Button)`
  color: white;
  background-color: ${torchRed};
  border-color: ${red};

  &:hover,
  &:focus {
    color: white;
    background-color: ${red};
    border-color: ${red};
  }
`;

export const GrayButton = styled(Button)`
  color: white;
  background-color: ${codGray};
  border-color: ${almostBlack};

  &:hover,
  &:focus {
    color: white;
    background-color: ${almostBlack};
    border-color: ${almostBlack};
  }
`;
