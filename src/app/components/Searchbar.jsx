import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Searchbar = ({ searchQuery, handleSearchChange, inputRef }) => {
  return (
    <div>
      <div className="relative">
        <input
          ref={inputRef} // Attach the ref here
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="rounded-full text-white border border-[#AB572D] bg-inherit py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
        />
        <BiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#AB572D]" />
      </div>
    </div>
  );
};

export default Searchbar;
