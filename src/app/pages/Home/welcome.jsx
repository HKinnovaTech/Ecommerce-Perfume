'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Welcome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="relative mt-16 flex flex-col items-center justify-center min-h-[700px] max-h-[700px] overflow-hidden">
        <div
          className="absolute w-full h-full"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <Image
            src="/images/wel-bg.png"
            alt="Victory Fragrance"
            layout="fill"
            objectFit="cover"
            className="opacity-50 blur-[10px] rounded-lg"
          />
        </div>

        <div className="relative z-10 text-center">
          <h2 className="text-[64px] text-[#AB572D] mb-24 md:mb-4">Welcome to Local Face</h2>
          <p className="text-lg mb-4 text-white max-w-[800px]">
            Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named "Victory Scented," is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
