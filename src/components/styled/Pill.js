import styled from 'styled-components';

export const Pill = styled.p`
  color: white;
  background: #1792d4;
  padding: 0.3rem 2%;
  width: 5rem;
  text-align: center;
  font-size: 1rem;
  line-height: 1.125em;
  letter-spacing: 0.13em;
  vertical-align: text-top;
  margin-bottom: 0.3rem;
  font-family: 'Uniqlo';
  font-weight: bold;
`;

export const InlinePill = styled(Pill)`
  display: inline-block;
  margin-right: 2%;
`;
