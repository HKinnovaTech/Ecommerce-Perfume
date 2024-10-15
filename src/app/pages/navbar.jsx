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

        {/* Mobile menu (only visible when open) */}
        {isOpen && (
          <ul className="absolute z-50 top-16 left-0 w-full text-gray-200 bg-white shadow-md md:hidden text-center opacity-90">
            <li className="p-4 border-b"><Link href="/" className=" hover:text-[#ff9900]">Home</Link></li>
            <li className="p-4 border-b"><Link href="/Shop" className=" hover:text-[#ff9900]">Shop</Link></li>
            <li className="p-4 border-b"><Link href="/services" className=" hover:text-[#ff9900]">Services</Link></li>
            <li className="p-4 border-b"><Link href="/blog" className=" hover:text-[#ff9900]">Blog</Link></li>
            <li className="p-4"><Link href="/contact" className=" hover:text-[#ff9900]">Contact</Link></li>
          </ul>
        )}

        {/* Icons Section */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-gray-200">
          <MagnifyingGlassIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer" />
          <HeartIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer" />
          <UserIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer" />
          <ShoppingCartIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
