import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="relative flex flex-col lg:flex-row text-white h-auto">
      <Image
        src="/images/footer-bg.png"
        alt="Victory Fragrance"
        layout="fill"
        objectFit="cover"
        className="z-[-1] bg-stone-950"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80 z-[-1]" />

      <div className="z-10 p-8 lg:p-24 grid gap-8 lg:gap-16 lg:grid-cols-5 mx-auto">
        <div className="flex flex-col gap-6">
          <span className="font-bold text-[24px] md:text-[40px] bg-gradient-to-b from-[#000000] via-[#ff9900] to-[#0c0901] bg-clip-text text-transparent">
            Fragrance Fusion
          </span>
          <h3 className="text-[20px] font-semibold">Subscribe to Our Newsletter:</h3>
          <p className="w-full max-w-[300px]">
            Receive Updates on News Arrivals and Special Promotions!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Your email here"
              className="w-[70%] bg-[#1D1D1D] p-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-[#AB572D]"
            />
            <button
              type="submit"
              className="w-[30%] py-2 px-4 bg-[#AB572D] rounded-r-lg font-semibold"
            >
              Submit
            </button>
          </div>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1DA1F2]"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#4267B2]"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0077B5]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E1306C]"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Categories:</h4>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-[#AB572D]">Luxury</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Elite</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Opulent</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Elixir</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Velvety</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Shopping:</h4>
          <ul className="space-y-2">
            <li>
              <a href="" className="hover:text-[#AB572D]">Payments</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Delivery options</a>
            </li>
            <li>
              <a href="" className="hover:text-[#AB572D]">Buyer protection</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Customer care:</h4>
          <ul className="space-y-2">
            <li>
              <a href="/categories/luxury" className="hover:text-[#AB572D]">Help Center</a>
            </li>
            <li>
              <a href="/categories/elite" className="hover:text-[#AB572D]">Terms & Conditions</a>
            </li>
            <li>
              <a href="/categories/opulent" className="hover:text-[#AB572D]">Privacy policy</a>
            </li>
            <li>
              <a href="/categories/elixir" className="hover:text-[#AB572D]">Returns & refund</a>
            </li>
            <li>
              <a href="/categories/velvety" className="hover:text-[#AB572D]">Survey & feedback</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Pages:</h4>
          <ul className="space-y-2">
            <li>
              <a href="/categories/luxury" className="hover:text-[#AB572D]">About Us</a>
            </li>
            <li>
              <a href="/categories/elite" className="hover:text-[#AB572D]">Shop</a>
            </li>
            <li>
              <a href="/categories/opulent" className="hover:text-[#AB572D]">Contact Us</a>
            </li>
            <li>
              <a href="/categories/elixir" className="hover:text-[#AB572D]">Services</a>
            </li>
            <li>
              <a href="/categories/velvety" className="hover:text-[#AB572D]">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
