
import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="my-20 md:my-0 py-10">
      <section className="flex flex-col md:flex-row items-center justify-center xl:gap-[400px] gap-[00px] mt-[-25px]">
        <div className="title max-w-[700px] z-10 md:text-left text-center font-semibold m-10">
          <h1 className="text-[54px] mb-4 text-white">Elevate Your Spirit with Victory Scented Fragrances!</h1>
          <p className="text-lg mb-6 text-gray-400">Shop now and embrace the sweet smell of victory with Local Face.</p>
          <Link href="/Shop" >
          <button className="text-white px-4 py-2 rounded-lg w-32 h-12" style={{ backgroundColor: '#AB572D' }}>Shop Now</button>
          </Link>
        </div>
        <Image
          src="/images/perfumebottlehome.png" // Correct path after moving to public
          alt="Victory Fragrance"
          width={500} // Set a suitable width
          height={500} // Set a suitable height
          className="md:relative md:opacity-100 md:blur-none my-t-10 absolute opacity-35 blur-sm" // Note: Remove w-full as Image takes care of sizing
        />
      </section>
    </div>
  );
}

export default HomePage;
