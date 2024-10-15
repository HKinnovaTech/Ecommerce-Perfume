import React from 'react';
import Image from "next/image";

const Values = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-0 bg-black text-white">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2">
        <Image
          src="/images/values-image.png"
          alt="Our Values"
          layout="responsive" 
          width={1200} // Adjust width as needed
          height={900} // Adjust height as needed
          className="object-cover" // Ensures the image covers the div
        />
        {/* Fade Effect on Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      </div>
      {/* Text Section */}
      <div className="flex flex-col text-center justify-center md:pl-8 md:w-1/2">
        <h2 className="text-5xl mb-4">Our Values</h2>
        <p className="text-lg max-w-[700px] mx-auto">
          At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives. Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.
        </p>
      </div>
    </div>
  );
};

export default Values;
