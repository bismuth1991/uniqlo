import React from 'react';
import styled from 'styled-components';

import { alto } from '../styled/base/_colors';

import { Container, FiveCol, SixCol, OneCol } from '../styled/base/_grid';
import { Text } from '../styled/base/_typography';
import Image from '../styled/Image';

import adImage from '../../assets/images/comming-soon.png';

const AdWrapper = styled(Container)`
  background-color: ${alto};
  height: 60px;
  cursor: pointer;
  position: relative;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;

const AdDescription = styled(Text)`
  font-size: 1.2rem;
  padding: 0 0 0 15px;
  margin: 0;
`;

const AdIcon = styled(OneCol)`
  position: absolute;
  right: 15px;
  font-size: 1.8rem;
`;

const CommingSoon = () => {
  const handleClick = () => {
    window.location.hash = '/comming-soon';
  };

  return (
    <AdWrapper onClick={handleClick}>
      <FiveCol>
        <Image
          src={adImage}
          alt="Comming Soon"
        />
      </FiveCol>

      <SixCol>
        <AdDescription>
          The New Collection Arriving Online 3/7 10AM ET
        </AdDescription>
      </SixCol>

      <AdIcon>&gt;</AdIcon>
    </AdWrapper>
  );
};


export default CommingSoon;
