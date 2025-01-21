import React, { useEffect, useState } from 'react';

const Reviewbar = ({ rating, progress }) => {
  const [width, setWidth] = useState(0); // Initialize width at 0 for animation

  useEffect(() => {
    // Delay to trigger animation after component mounts
    const timer = setTimeout(() => {
      setWidth(progress);
    }, 100);

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [progress]);

  return (
    <div className="flex gap-4 min-w-[300px] text-white">
      <span>{rating} Stars</span>
      <div className="w-full bg-gray-700 rounded-sm h-4 max-w-[150px] my-auto">
        <div
          className="bg-[#AB572D] h-4 rounded-sm transition-all duration-700 ease-out" // Smooth transition
          style={{ width: `${width}%` }}
        ></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
};

export default Reviewbar;
