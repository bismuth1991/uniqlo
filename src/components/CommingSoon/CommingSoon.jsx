import React from 'react';
import styled from 'styled-components';

import Section from '../styled/Section';
import image from '../../assets/images/comming-soon.png';

const GreySection = styled(Section)`
  background-color: #dddddd;
  cursor: pointer;
`;
const Image = styled.img`
  grid-column-end: span 5;
  max-width: 100%;
  height: auto;
  }
`;

const Description = styled.p`
  grid-column-end: span 6;
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0;
`;

const LinkIcon = styled.span`
  justify-self: end;
  font-size: 1.5em;
`;

const CommingSoon = () => {
  const handleClick = () => {
    window.location.hash = '/comming-soon';
  };

  return (
    <GreySection onClick={handleClick}>
      <Image
        src={image}
        alt="comming soon"
      />

      <Description>
        The New Collection Arriving Online 3/7 10AM ET
      </Description>

      <LinkIcon>&gt;</LinkIcon>
    </GreySection>
  );
};


export default CommingSoon;
