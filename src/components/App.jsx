import React from 'react';
import styled from 'styled-components';

import Header from './main/Header';
import CommingSoon from './main/CommingSoon';
import FeaturedProduct from './main/FeaturedProduct';

import productImage from '../assets/images/featured-product.jpg';
import PrimaryNavBar from './main/PrimaryNavBar';
import SecondaryNavBar from './main/SecondaryNavBar';
import Spacer18 from './styled/Spacers';
import SuggestedSearch from './main/SuggestedSearch';

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
      productImage={productImage}
      price="$9.90"
    />

    <PrimaryNavBar />
    <SecondaryNavBar />

    <Spacer18 />

    <SuggestedSearch />
  </Main>
);

export default App;
