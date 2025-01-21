'use client';

import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import Readmore from '../../components/Cbutton';

const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "productOffer"] {
        image{
          asset->{
            _id,
            url
          },
          alt
        },
        offer,
        heading,
        title,
        description,
        bgColor
      }`;
      const data = await client.fetch(query);
      setOffers(data);
    };

    fetchData();
  }, []);

  return (
    <div className="text-white">
      {offers.map((productOffer, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} h-auto md:h-[800px] bg-gradient-to-t from-black to-black`} 
          style={{
            background: `linear-gradient(to top, black, ${productOffer.bgColor}, black)`, // Using inline styles for dynamic gradient
          }}
        >
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <Image
              className="m-8 md:m-16 border-none rounded-xl shadow-2xl"
              src={productOffer.image.asset.url}
              alt={productOffer.image.alt}
              width={700}
              height={700}
              layout="intrinsic"
              objectFit="cover" 
            />
          </div>
          <div className="max-w-[700px] mx-4 md:mx-20 pt-16 space-y-8 md:space-y-12">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px]">
              {productOffer.offer}
            </h2>
            <div>
              <h3 className="text-inherit text-2xl sm:text-3xl md:text-4xl font-semibold text-white">{productOffer.heading}</h3>
              <h4 className="text-inherit text-3xl sm:text-4xl font-semibold mt-4 text-[#0febff]">{productOffer.title}</h4>
              <p className="mt-6 text-white text-base sm:text-lg md:text-xl">{productOffer.description}</p>
              <Readmore className="mt-8" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offers;
