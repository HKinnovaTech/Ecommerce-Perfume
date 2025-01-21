import React from 'react';

const Readmore = ({ className }) => {
  return (
    <div>
      <button
        className={`${className} relative overflow-hidden border border-white text-white font-bold py-2 px-4 rounded group`}
      >
        <span className="absolute inset-0 bg-[#cc5e27] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
        <span className="relative z-10">Read More</span>
      </button>
    </div>
  );
};

export default Readmore;
