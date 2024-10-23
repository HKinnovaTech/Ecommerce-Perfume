import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="gap-40 flex">
        <div className="flex items-center font-semibold gap-2">
      <span className="text-white text-xl font-thin">Qty</span>
      <div className="flex items-center justify-between bg-inherit border-2 border-white rounded-lg px-3 py-1">
        <button
          onClick={decrement}
          className="text-white text-2xl px-2 focus:outline-none"
        >
          -
        </button>
        <span className="text-[#AB572D] px-4 text-xl">{quantity}</span>
        <button
          onClick={increment}
          className="text-[#AB572D] text-2xl px-2 focus:outline-none"
        >
          +
        </button>
      </div>
    </div>
        <div className='flex items-center gap-2'>
        <span className='text-[20px] text-white font-light'>Whish List </span>
        <HeartIcon className="h-7 w-7 text-white hover:text-[#ff9900] cursor-pointer" />
        </div>
    </div>
  );
};

export default QuantitySelector;
