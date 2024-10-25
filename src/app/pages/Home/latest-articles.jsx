'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { client } from '../../../sanity/lib/client';
import Readmore from '../../components/Cbutton';

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
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
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
    <div className="py-16 md:py-32 bg-black overflow-hidden">
      <h2 className="md:text-[52px] text-[46px] text-[#db6e3b] font-semibold mb-16 text-center">Latest Articles</h2>
      <div className="">
        <Slider {...settings} className="relative w-[900px] xl:w-[1200px] lg:w-[800px] md:w-[700px] flex justify-center items-center mx-auto">
          {articles.map((article, idx) => (
            <div key={idx} className="p-4"> 
              <div className="w-[370px] xl:w-[375px] lg:w-[370px] md:w-[320px] max-sm:w-[340px] ">
              <div className="h-[375px] relative mb-4 ">
                <Image className="rounded-xl" src={article.imageUrl} alt={article.title} layout="fill" objectFit="cover" />
              </div>
              <div className="h-[260px] flex flex-col items-start text-white">
                <h3 className="text-xl font-bold">{article.title}</h3>
                <p className="text-sm overflow-hidden text-ellipsis">
                  {article.description.slice(0, 200)}...
                </p>
                <Readmore/>
              </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Articles;
