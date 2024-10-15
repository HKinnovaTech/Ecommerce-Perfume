
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetails from './ProductDetails';

const ProductPage = () => {
  const { slug } = useParams(); // Get the slug from the URL

  return <ProductDetails slug={slug} />;
};

export default ProductPage;
