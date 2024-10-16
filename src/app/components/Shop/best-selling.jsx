'use client';

import React, { useState, useEffect } from 'react'; 
import SortDropdown from './dropdown';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import './styles.css'

const BestSelling = () => {
  const [shop, setShops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true before fetching data
      const query = `*[_type == "shop"]{
        name,
        "imageUrl": image.asset->url,
        rating,
        price,
        quantity
      }`;
      const data = await client.fetch(query);
      setShops(data);
      setLoading(false); // Set loading to false after data is fetched
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const filteredProducts = shop.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      triggerTransition();
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
      }, 300);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      triggerTransition();
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
      }, 300);
    }
  };

  const triggerTransition = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 300);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="flex flex-col m-auto items-center">
        <h2 className="text-4xl lg:text-[52px] text-[#db6e3b] font-semibold mb-8 text-center">Best Selling Products</h2>

        <section className="w-[350px] lg:w-[900px] xl:w-[1300px] md:w-[600px] flex-col relative">
          <div className="flex justify-between items-center mb-2">
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="rounded-full border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-end relative">
              <SortDropdown />
            </div>
          </div>

          {/* Loading Animation */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="loader"></div> {/* You can replace this with your loader component */}
            </div>
          ) : (
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 transition-opacity duration-300 ease-in-out ${
                transitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {currentProducts.map((collection, idx) => (
                <div
                  key={idx}
                  className="p-4 flex flex-col items-center justify-center bg-gradient-to-tr from-black to-gray-50 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                >
                  <div className="h-[320px] overflow-hidden rounded-t-lg">
                    <Image
                      className="h-[400px] overflow-hidden"
                      src={collection.imageUrl}
                      alt={collection.name}
                      width={460}
                      height={460}
                      layout="responsive"
                      objectFit="cover"
                    />
                  </div>

                  <h2 className="w-full text-[20px] font-semibold text-white text-center mt-4">
                    {collection.name}
                  </h2>

                  <div className="flex justify-center items-center my-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className={`h-5 w-5 ${index < collection.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-white text-lg">({collection.rating})</span>
                  </div>

                  <div className="text-center text-white text-lg">
                    <p>${collection.price} - {collection.quantity}ml</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BestSelling;
