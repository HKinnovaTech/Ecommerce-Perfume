
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import ProductDetails from '../../pages/Product-Details/ProductDetails';
import Reviews from '../../pages/Product-Details/Reviews';

const ProductPage = () => {
  const { slug } = useParams(); // Get the slug from the URL

  return (
    <div className='bg-black'>
    <ProductDetails slug={slug} />
    <Reviews slug={slug}/>
    </div>
  );
  
};

export default ProductPage;
