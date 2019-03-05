import React from 'react';
import { string } from 'prop-types';

import { PrimaryTitle, SecondaryTitle, SubTitle } from '../styled/Titles';
import Image from '../styled/Image';
import { Pill } from '../styled/Pill';


const FeaturedProduct = ({
  collectionTitle,
  productTitle,
  subTitle,
  productImage,
}) => (
  <>
    <PrimaryTitle>{collectionTitle}</PrimaryTitle>
    <Image src={productImage} alt={productTitle} />
    <SecondaryTitle>
      <Pill>KIDS</Pill>
      {productTitle}
    </SecondaryTitle>
    <SubTitle>{subTitle}</SubTitle>
  </>
);

FeaturedProduct.propTypes = {
  collectionTitle: string.isRequired,
  productTitle: string.isRequired,
  subTitle: string.isRequired,
};

export default FeaturedProduct;
