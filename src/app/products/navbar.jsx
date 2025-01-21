'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon, HeartIcon, UserIcon, ShoppingCartIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[24px] md:text-[36px] bg-gradient-to-b from-[#000000] via-[#ff9900] to-[#0c0901] bg-clip-text text-transparent">
          Fragrance Fusion
          </span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-600" /> : <Bars3Icon className="h-6 w-6 text-gray-600" />}
          </button>
        </div>
        
        {/* Pages Section */}
        <ul className="hidden md:flex gap-x-10 lg:gap-x-16 text-lg text-gray-200">
          <li><Link href="/" className=" hover:text-[#ff9900]">Home</Link></li>
          <li><Link href="/Shop" className=" hover:text-[#ff9900]">Shop</Link></li>
          <li><Link href="/services" className=" hover:text-[#ff9900]">Services</Link></li>
          <li><Link href="/blog" className=" hover:text-[#ff9900]">Blog</Link></li>
          <li><Link href="/contact" className=" hover:text-[#ff9900]">Contact</Link></li>
        </ul>

        
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full text-white bg-black shadow-lg text-center md:hidden">
            <li className="p-4 border-b border-gray-700"><Link href="/" className="hover:text-[#ff9900] transition duration-300">Home</Link></li>
            <li className="p-4 border-b border-gray-700"><Link href="/Shop" className="hover:text-[#ff9900] transition duration-300">Shop</Link></li>
            <li className="p-4 border-b border-gray-700"><Link href="/services" className="hover:text-[#ff9900] transition duration-300">Services</Link></li>
            <li className="p-4 border-b border-gray-700"><Link href="/blog" className="hover:text-[#ff9900] transition duration-300">Blog</Link></li>
            <li className="p-4"><Link href="/contact" className="hover:text-[#ff9900] transition duration-300">Contact</Link></li>
          </ul>
        )}
        <div className="hidden md:flex space-x-6 text-white">
          <MagnifyingGlassIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
          <HeartIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
          <UserIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
          <ShoppingCartIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
