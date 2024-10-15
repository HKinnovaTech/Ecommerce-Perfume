'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';

const LeftArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute left-0 transform -translate-x-8 top-1/2 -translate-y-1/2 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
};

const RightArrow = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute right-0 transform translate-x-8 top-1/2 -translate-y-1/2 z-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
};

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "article"]{
        title,
        description,
        "imageUrl": image.asset->url
      }`;
      const data = await client.fetch(query);
      setArticles(data);
    };

    fetchData();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, // Keep arrows visible by default
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false, // Disable arrows at 480px breakpoint
        },
      },
    ],
  };

  return (
    <div className="py-32 bg-black overflow-hidden">
      <h2 className="md:text-[52px] text-[46px] text-[#db6e3b] font-semibold mb-16 text-center">Latest Articles</h2>
      <div className="relative max-w-6xl mx-auto">
        <Slider {...settings} className="flex relative items-center justify-center pl-1">
          {articles.map((article, idx) => (
            <div key={idx}>
              <div className="w-[375px] h-[375px] relative mb-4 ">
                <Image className="rounded-xl" src={article.imageUrl} alt={article.title} layout="fill" objectFit="cover" />
              </div>
              <div className="h-[260px] w-[375px] flex flex-col items-start">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-sm text-gray-700 overflow-hidden text-ellipsis">
                  {article.description.slice(0, 200)}...
                </p>
                <button className=" mt-auto border border-white text-gray-700 font-bold py-2 px-4 rounded">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Articles;
