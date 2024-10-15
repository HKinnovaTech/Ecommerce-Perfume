'use client';

import React, { useState, useEffect } from 'react'; 
import Image from 'next/image';
import { client } from '../../../sanity/lib/client';
import Readmore from '../../components/readmore-button';


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
    <div>
  <div className="">
    {offers.map((productOffer, idx) => (
      <div 
        key={idx} 
        className={`flex ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} h-[800px] bg-gradient-to-t from-black to-black`} 
        style={{
          background: `linear-gradient(to top, black, ${productOffer.bgColor}, black)`, // Using inline styles for dynamic gradient
        }}
      >
        <Image
          className=" m-16 border border-none rounded-xl shadow-2xl"
          src={productOffer.image.asset.url}
          alt={productOffer.image.alt}
          width={700}
          height={700}
          layout="fit"
          objectFit="cover" 
        />
        <div className="max-w-[700px] ml-20 pt-16 space-y-36 ">
          <h2 className="text-white text-[52px]">
            {productOffer.offer}
          </h2>
          <div>
            <h3 className="text-inherit text-5xl font-semibold text-white">{productOffer.heading}</h3>
            <h4 className="text-inherit text-4xl font-semibold mt-4 text-[#0febff]">{productOffer.title}</h4>
            <p className="mt-6 text-white">{productOffer.description}</p>
            <Readmore className="mt-8" />
          </div>
        </div>
      </div>            
    ))}
  </div>
</div>

  )
}

export default Offers

