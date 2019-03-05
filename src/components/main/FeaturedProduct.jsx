import React from 'react';
import { string } from 'prop-types';

import { PrimaryTitle, SecondaryTitle, SubTitle, Price } from '../styled/Titles';
import Image from '../styled/Image';
import { Pill } from '../styled/Pill';


const FeaturedProduct = ({
  collectionTitle,
  productTitle,
  subTitle,
  productImage,
  price,
}) => (
  <>
    <PrimaryTitle>{collectionTitle}</PrimaryTitle>

    <Image src={productImage} alt={productTitle} />

    <SecondaryTitle>
      <Pill>KIDS</Pill>
      {productTitle}
    </SecondaryTitle>

    <SubTitle>{subTitle}</SubTitle>

    <Price>{price}</Price>
  </>
);

FeaturedProduct.propTypes = {
  collectionTitle: string.isRequired,
  productTitle: string.isRequired,
  subTitle: string.isRequired,
  productImage: string.isRequired,
  price: string.isRequired,
};

export default FeaturedProduct;
