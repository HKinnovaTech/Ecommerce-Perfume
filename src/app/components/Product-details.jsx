// src/app/products/[slug]/ProductDetailView.jsx
import React from 'react';

const ProductDetailView = ({ product }) => {
  return (
    <div className="product-details">
      <h1 className="text-4xl font-semibold text-center">{product.name}</h1>
      <div className="flex flex-col items-center mt-8">
        <img src={product.imageUrl} alt={product.name} className="w-96 h-96 object-cover" />
        <p className="mt-4 text-xl">Price: ${product.price}</p>
        <p className="mt-2">Rating: {product.rating}</p>
        <p className="mt-2">Quantity: {product.quantity}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailView;
