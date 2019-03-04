import styled from 'styled-components';

const Section = styled.section`
  grid-column-end: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  * {
    align-self: center;
    padding: 1em;
  }
`;

export default Section;
