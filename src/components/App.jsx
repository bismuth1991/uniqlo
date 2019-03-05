import React from 'react';
import styled from 'styled-components';

import Header from './Header/Header';
import CommingSoon from './CommingSoon/CommingSoon';
import FeaturedProduct from './FeaturedProduct/FeaturedProduct';

import productImage from '../assets/images/featured-product.jpg';
import PrimaryNavBar from './Nav/PrimaryNavBar';

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
  </Main>
);

export default App;
