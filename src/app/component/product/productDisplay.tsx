import React from 'react';
import type { ProductDisplayType } from './productDisplay.type';
import { Button } from '../reusable/button';
import Image from 'next/image';

const ProductDisplay: React.FC<ProductDisplayType> = ({ image, ctaButton, title, description, price, currency }) => {
  return (
    <div className="product-display">
      <Image src={image} alt={title} className="product-image" />
      <Button currency={currency} price={price}>{ctaButton}</Button>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDisplay;