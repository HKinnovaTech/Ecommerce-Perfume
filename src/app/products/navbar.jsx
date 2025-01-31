"use client";
import React, { useState, useRef } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Searchbar from "../components/Searchbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 0);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-[24px] md:text-[36px] bg-gradient-to-b from-[#000000] via-[#ff9900] to-[#0c0901] bg-clip-text text-transparent">
            Fragrance Fusion
          </span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-600" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        <ul className="hidden md:flex gap-x-10 lg:gap-x-16 text-lg text-gray-200 absolute top-8 left-1/2 transform -translate-x-1/2">
          <li>
            <Link href="/" className="hover:text-[#ff9900]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-[#ff9900]">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-[#ff9900]">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#ff9900]">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:flex space-x-6 text-white items-center">
          {isSearchVisible ? (
            <div onBlur={() => setIsSearchVisible(false)} className="relative">
              <Searchbar
                searchQuery={searchQuery}
                handleSearchChange={handleSearchChange}
                inputRef={searchInputRef}
              />
            </div>
          ) : (
            <button onClick={handleSearchIconClick}>
              <MagnifyingGlassIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
            </button>
          )}
          <Link href="/Users">
            <UserIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
          </Link>

          <Link href="/Cart">
          <ShoppingCartIcon className="h-6 w-6 hover:text-[#ff9900] cursor-pointer transition duration-300" />
          </Link>
        </div>

        {isOpen && (
          <ul className="absolute top-16 left-0 w-full text-white bg-black shadow-lg text-center md:hidden">
            <li className="p-4 border-b border-gray-700">
              <Link
                href="/"
                className="hover:text-[#ff9900] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-gray-700">
              <Link
                href="/Shop"
                className="hover:text-[#ff9900] transition duration-300"
              >
                Shop
              </Link>
            </li>
            <li className="p-4 border-b border-gray-700">
              <Link
                href="/Blog"
                className="hover:text-[#ff9900] transition duration-300"
              >
                Blog
              </Link>
            </li>
            <li className="p-4">
              <Link
                href="/contact"
                className="hover:text-[#ff9900] transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
