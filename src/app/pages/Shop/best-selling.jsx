'use client';

import React, { useState, useEffect } from 'react'; 
import SortDropdown from '../../components/dropdown';
import Searchbar from '../../components/Searchbar';
import { client } from '../../../sanity/lib/client';
import ProductCard from '../../components/product-card';
import PerfumeLoader from '../../components/PerfumeLoader';
import './styles.css'
import Link from 'next/link';

const BestSelling = () => {
  const [shop, setShops] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      const query = `*[_type == "shop"]{
        name,
        "imageUrl": image.asset->url,
        rating,
        price,
        quantity,
        slug
      }`;
      const data = await client.fetch(query);
      setShops(data);
      setLoading(false); 
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
    <div className="pt-64 bg-gradient-to-r from-black via-stone-900 to-black">
      <div className="flex flex-col m-auto items-center ">
        <h2 className="text-4xl lg:text-[52px] text-[#db6e3b] font-semibold mb-8 text-center">Best Selling Products</h2>

        <section className="w-[350px] lg:w-[900px] xl:w-[1300px] md:w-[600px] flex-col relative">
         
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
               <Searchbar searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
            </div>
            <div className="flex justify-end relative">
              <SortDropdown />
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <PerfumeLoader/>
            </div>
          ) : (
            <div 
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 transition-opacity duration-300 ease-in-out ${
                transitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {currentProducts.map((product, idx) => (
                <Link href={`/products/${product.slug?.current}`}>
                <ProductCard
                key={idx}
                imageUrl={product.imageUrl}
                name={product.name}
                rating={product.rating}
                price={product.price}
                quantity={product.quantity}
                slug={product.slug?.current} // Make sure you're passing slug.current
              />
                </Link>
              ))}
            </div>
          )}

          <div className="flex justify-between my-8 ">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-[#AB572D] hover:bg-[#cc5e27] text-white rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-white">Page {currentPage} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-[#AB572D] hover:bg-[#cc5e27] text-white rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>
      </div>
      <div className=" min-h-14 bg-gradient-to-t from-black to-transparent">
      </div>
    </div>
  );
};

export default BestSelling;
