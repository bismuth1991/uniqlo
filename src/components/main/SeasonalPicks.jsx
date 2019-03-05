import React from 'react';
import styled from 'styled-components';

import { HorizontalCard, CardInfo } from '../styled/Cards';
import { SecondaryTitle, SubTitle } from '../styled/Titles';

import blocktechParkas from '../../assets/images/blocktech-parkas.jpg';
import essentialTees from '../../assets/images/essential-tees.jpg';
import discoveryChannel from '../../assets/images/discovery-channel.jpg';
import dryStretchSweats from '../../assets/images/dry-stretch-sweats.jpg';
import ultraStretchPants from '../../assets/images/ultra-stretch-pants.jpg';
import underwear from '../../assets/images/undies.jpg';
import ultraStretchLoungewear from '../../assets/images/ultra-stretch-loungewear.jpg';
import heatech from '../../assets/images/heatech.jpg';

const seasonalPicks = [
  {
    title: 'Blocktech parkas',
    description: 'Windproof, water-repellent outerwear for kids.',
    imageUrl: blocktechParkas,
  },
  {
    title: 'Essentials tees',
    description: 'They\' top it off in style with the latest T-shirts and tops.',
    imageUrl: essentialTees,
  },
  {
    title: 'Discovery channel ut graphic tees',
    description: 'Discover your world with Discovery.',
    imageUrl: discoveryChannel,
  },
  {
    title: 'Dry stretch sweats',
    description: 'From the gym to the street.',
    imageUrl: dryStretchSweats,
  },
  {
    title: 'Ultra stretch pants',
    description: 'Stretchy, slim-fitting pants for everyday.',
    imageUrl: ultraStretchPants,
  },
  {
    title: 'Underwear',
    description: 'Soft, comfortable essentials in a variety of colors and patterns.',
    imageUrl: underwear,
  },
  {
    title: 'Ultra stretch loungewear',
    description: 'Soft, stretchy loungewear that\'s made for streaming, napping, or hanging out.',
    imageUrl: ultraStretchLoungewear,
  },
  {
    title: 'Heatech collection',
    description: 'Stay warm in heat-producing layers.',
    imageUrl: heatech,
  },
];

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  vertical-align: baseline;
`;

const SeasonalPicks = () => (
  seasonalPicks.map(item => (
    <HorizontalCard>
      <Image
        src={item.imageUrl}
        alt={item.title}
      />

      <CardInfo>
        <SecondaryTitle>{item.title}</SecondaryTitle>
        <SubTitle>{item.description}</SubTitle>
      </CardInfo>
    </HorizontalCard>

  ))
);

export default SeasonalPicks;
