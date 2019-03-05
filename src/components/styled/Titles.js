import styled from 'styled-components';

export const Text = styled.h1`
  padding: 0 1.5rem;
`;

const Title = styled(Text)`
  font-family: 'Uniqlo';
  font-weight: bold;
  letter-spacing: 0.055em;
  text-transform: uppercase;
`;

export const PrimaryTitle = styled(Title)`
  font-size: 2.2rem;
  line-height: 2.6rem;
  margin: 2rem 0;
`;

export const SecondaryTitle = styled(Title)`
  font-size: 1.5rem;
  line-height: 1.8rem;
  margin: 1rem 0;
`;

export const SubTitle = styled(Text)`
  font-family: 'Ariake';
  font-size: 1.4rem;
  margin: 0.5rem 0;
`;

export const Price = styled(Text)`
  font-family: 'Uniqlo';
  font-size: 3.3rem;
  line-height: 1em;
  margin: 0.5rem 0 3rem 0;
`;
