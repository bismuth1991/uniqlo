import React from 'react';
import styled from 'styled-components';

import { PrimaryTitle } from '../styled/Titles';
import Image from '../styled/Image';

import shirts from '../../assets/images/shirts.jpg';
import outerwear from '../../assets/images/outerwear.jpg';
import sweatshirtsSweatpants from '../../assets/images/sweatshirts-sweatpants.jpg';
import innerwear from '../../assets/images/innerwear.jpg';
import socks from '../../assets/images/socks.jpg';
import underwear from '../../assets/images/underwear.jpg';
import tShirts from '../../assets/images/t-shirts.jpg';
import loungewear from '../../assets/images/loungewear.jpg';
import pants from '../../assets/images/pants.jpg';

const CategoryWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Category = styled.li`
  position: relative;
  img {
    filter: brightness(0.8);
  }

  &:hover {
    img {
      filter: brightness(0.6);
      transition: all 0.5s;
    }
  }

  p {
    font-family: 'Ariake';
    text-align: center;
    position: absolute;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 1.3rem;
    line-height: 1.5em;
    font-weight: bold;
  }
`;

const categories = [
  {
    title: 'Shirts',
    url: shirts,
  },
  {
    title: 'Sweatshirts & SweatPants',
    url: sweatshirtsSweatpants,
  },
  {
    title: 'Outerwear',
    url: outerwear,
  },
  {
    title: 'T-shirts',
    url: tShirts,
  },
  {
    title: 'Pants',
    url: pants,
  },
  {
    title: 'Loungewear',
    url: loungewear,
  },
  {
    title: 'Innerwear',
    url: innerwear,
  },
  {
    title: 'Socks',
    url: socks,
  },
  {
    title: 'Underwear',
    url: underwear,
  },
];

const Categories = () => (
  <>
    <PrimaryTitle>Categories</PrimaryTitle>
    <CategoryWrapper>
      {categories.map(category => (
        <Category>
          <Image src={category.url} />
          <p>{category.title}</p>
        </Category>
      ))}
    </CategoryWrapper>
  </>
);

export default Categories;
