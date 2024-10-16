'use client';

import React, { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import { fill } from 'three/src/extras/TextureUtils.js';

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "collection"]{
        title,
        images[]{
          asset->{
            _id,
            url
          },
          size
        }
      }`;
      const data = await client.fetch(query);
      setCollections(data);
    };

    fetchData();
  }, []);

  const boxStyle = 'p-2 flex flex-col items-center justify-center';
  const body = 'h-[460px] overflow-hidden';

  return (
    <div className="bg-black mt-10">
      <div className="w-auto lg:w-[900px] xl:w-[1300px] md:w-[700px] justify-center items-center m-auto relative">
      <h2 className="text-[52px] font-semibold text-[#db6e3b] mb-12 text-center">Our Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10 mx-auto rounded-lg">
        {collections.map((collection, idx) => (
          <div key={idx} className={`${boxStyle} ${idx === 1 ? 'lg:col-span-2 md:col-span-1 ' : ''}`}>
            <div className="">
            {collection.images.map((image, i) => (
              <div key={i} className={"h-[400px] overflow-hidden rounded-t-lg"}>
                <Image
                  className={`${body}`}
                  src={image.asset.url}
                  alt={collection.title}
                  width={image.size === 'large' ? 920 : 460}
                  height={460} 
                  layout={fill} 
                  objectFit="cover"
                />
              </div>
            ))}
            <h2 className="w-full text-[16px] rounded-b-lg md:text-[18px] font-semibold bg-stone-700 text-white text-center p-2 z-20">
                  {collection.title}
                </h2>
          </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Collections;
