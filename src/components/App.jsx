import React from 'react';
import styled from 'styled-components';

import Header from './main/Header';
import CommingSoon from './main/CommingSoon';
import FeaturedProduct from './main/FeaturedProduct';

import featuredProduct from '../assets/images/featured-product.jpg';
import seasonalPick from '../assets/images/seasonal-pick.jpg';

import PrimaryNavBar from './main/PrimaryNavBar';
import SecondaryNavBar from './main/SecondaryNavBar';
import Spacer18 from './styled/Spacers';
import SuggestedSearch from './main/SuggestedSearch';
import Categories from './main/Categories';
import SeasonalPicks from './main/SeasonalPicks';
import EMember from './main/EMember';


const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
`;

const App = () => (
  <Main>
    <Header />

    <CommingSoon />

    <FeaturedProduct
      collectionTitle="Boy's collection"
      productTitle="Minions everyday graphic T-shirt"
      subTitle="Get graphic tees with everyone's favorite party animals, The Minions!"
      productImage={featuredProduct}
      price="$9.90"
      tag="kids"
    />

    <PrimaryNavBar />
    <SecondaryNavBar />
    <Spacer18 />

    <SuggestedSearch />
    <Spacer18 />

    <Categories />
    <Spacer18 />

    <FeaturedProduct
      collectionTitle="Seasonal Picks"
      productTitle="Light warm padded parkas"
      productImage={seasonalPick}
      price="$39.90"
      tag="boys"
    />

    <SeasonalPicks />
    <Spacer18 />

    <EMember />
  </Main>
);

export default App;
