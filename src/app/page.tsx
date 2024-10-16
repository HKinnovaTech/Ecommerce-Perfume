import React from 'react';
import Image from "next/image"; // Only if you're using Image component elsewhere
import HomePage from './products/Home/home';
import Welcome from './products/Home/welcome'
import Values from './products/Home/values'
import BestSelling from './products/Home/best-selling'
import  Collection  from './products/Home/collections';
import Articles from './products/Home/latest-articles'

const Home = () => {
  return (
    <div className="bg-black">
       <Image
          src="/images/bg-image.png" // Correct path after moving to public
          alt="Victory Fragrance"
          width={1920} // Set a suitable width
          height={900} // Set a suitable height
          className="absolute align-center bg-black md:h-[1200px]" // Note: Remove w-full as Image takes care of sizing
        />
      <div className="relative z-10">
        <HomePage />
        <Welcome/>
        <Values/>
        <BestSelling/>
        <Collection/>
        <Articles/>
      </div>
    </div>
  )
}

export default Home