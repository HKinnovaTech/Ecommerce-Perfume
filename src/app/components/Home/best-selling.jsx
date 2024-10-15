'use client'; 

import React from 'react';
import Cards from './Cards';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom Left Arrow Component
const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick} 
      className="absolute left-0 transform -translate-x-8 top-1/2 -translate-y-1/2 z-10">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

// Custom Right Arrow Component
const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      onClick={onClick} 
      className="absolute right-0 transform translate-x-8 top-1/2 -translate-y-1/2 z-10">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
};

const BestSelling = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    arrows: true, 
    prevArrow: <LeftArrow />, 
    nextArrow: <RightArrow />, 
    responsive: [
      {
        breakpoint: 1280, // Laptop screens
        settings: {
          slidesToShow: 3, 
        },
      },
      {
        breakpoint: 1024, // Medium tablets and smaller laptops
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768, // Small tablets
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 640, // Mobile screens
        settings: {
          slidesToShow: 1, 
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="py-20 bg-black justify-center items-center"> {/* Adjusted padding for better spacing */}
      <h2 className="text-4xl lg:text-[52px] text-[#db6e3b] font-bold mb-16 text-center">Best Selling Products</h2>
      <div className="relative max-w-7xl mx-auto items-center justify-center"> 
        <Slider {...settings} className="flex items-center justify-center mb-10"> 
          <div><Cards modelName="perfume4.gltf" scale={1.1} /></div>
          <div><Cards modelName="perfume2.gltf" /></div>
          <div><Cards modelName="perfume1.gltf" scale={1.1} /></div>
          <div><Cards modelName="perfume5.gltf" scale={1.5} /></div>
          <div><Cards modelName="perfume3.gltf" scale={2} /></div>
        </Slider>
      </div>
    </div>
  );
}

export default BestSelling;
