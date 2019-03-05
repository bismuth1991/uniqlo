import styled from 'styled-components';
import { tundora, codGray } from './_colors';

export const Input = styled.input`
  height: 38px;
  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: white;
  border: 1px solid ${tundora};
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  appearance: none;
  margin-bottom: 1.5rem;
  
  &:focus {
    border: 1px solid ${codGray};
    outline: 0;
  }
`;

export const Textarea = styled.textarea`
  padding: 6px 10px; 
  background-color: #fff;
  border: 1px solid ${tundora};
  border-radius: 4px;
  box-shadow: none;
  box-sizing: border-box;
  appearance: none;
  min-height: 65px;
  margin-bottom: 1.5rem;
  /* padding-top: 6px; */
  /* padding-bottom: 6px; */
  
  &:focus {
    border: 1px solid ${codGray};
    outline: 0;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: .5rem;
  font-weight: 600;
`;

export const Form = styled.form`
  margin-bottom: 2.5rem;
  padding: 0 15px;
`;
