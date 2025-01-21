
'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import QuantitySelector from '../../components/QuantitySelector'
import ProductForm from '../../components/ProductReviewForm';

const ProductDetails = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "shop" && slug.current == $slug][0]{
        name,
        "imageUrl": image.asset->url,
        rating,
        price,
        quantity,
        description,
        productId
      }`;

      const params = { slug };
      const data = await client.fetch(query, params);
      setProduct(data);
      setLoading(false);
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div> 
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  return(
    <>
    <div className="p-32 flex flex-col md:flex-row items-start justify-start">
      <div>
      <Image
      className="max-h-[780px]"
      src={product.imageUrl}
      alt={product.name}
      width={600}
      height={800}
      />
      </div>
      <div className="flex flex-col m-16 w-[600px] gap-8">
        <h1 className="text-5xl text-white font-semibold">{product.name}</h1>
        <p className="text-white font-semibold">{product.description}</p>
        <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${index < product.rating ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
          </svg>
        ))}
        <span className="ml-2 text-white text-lg font-semibold">({product.rating})</span>
        <a href="" className='ml-2 text-[#ff9900] font-extralight'>Reviews and Ratings</a>
        </div>
        <div className='flex flex-col max-w-[110px] hover:border border-[#ff9900] rounded-2xl'>
          <Image
          src={product.imageUrl}
          alt={product.name}
          width={110}
          height={100}
          className=''
          />
          <p className='text-center mt-1 font-semibold text-white'>{product.quantity} ml</p>
        </div>
        <p className='text-[#AB572D] text-3xl font-semibold mt-[-6px]'>$ {product.price}.00</p>
        <QuantitySelector/>
        <button className='bg-gray-300 text-[#AB572D] w-[500px] p-3 rounded-xl text-2xl font-bold'>Add to Bag</button>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
