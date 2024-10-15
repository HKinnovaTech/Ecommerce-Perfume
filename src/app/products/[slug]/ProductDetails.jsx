
'use client';

import React, { useEffect, useState } from 'react';
import { client } from '../../../sanity/lib/client';
import ProductDetailView from '../../components/Product-details';

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
        description
      }`;

      const params = { slug }; // Set the slug as a query parameter
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
        <div className="loader"></div> {/* Your loader component */}
      </div>
    );
  }

  if (!product) {
    return <div className="text-center text-red-500">Product not found.</div>;
  }

  return(
    <>
    <div className="product-details">
      
    </div>
    </>
  );
};

export default ProductDetails;
