import styled from 'styled-components';

const Section = styled.section`
  grid-column-end: span 12;
  grid-gap: 1.5rem;
  display: grid;
  font-size: 10px;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 1.5rem;
  margin: 1.5rem 0;

  & > * {
    align-self: center;
  }
`;

export default Section;
