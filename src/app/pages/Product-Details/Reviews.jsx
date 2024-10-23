import React from 'react';
import Reviewbar from '../../components/review-bar';
import '../../globals.css';

const Reviews = () => {
  return (
    <>
      <h2 className="h2">Reviews</h2> {/* Applying the .h2 class */}
      <div className="flex justify-center pb-20">
      <div className='flex flex-col items-center'>
        <Reviewbar rating={5} progress={70} />
        <Reviewbar rating={4} progress={20} />
        <Reviewbar rating={3} progress={10} />
        <Reviewbar rating={2} progress={0} />
        <Reviewbar rating={1} progress={0} />
      </div>
      <div>
      <div className="flex flex-col items-left gap-5 ">
        <div className="flex my-auto">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-7 w-7 ${index < 5 ? 'text-yellow-500' : 'text-gray-400'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
          </svg>
        ))}
        <span className=" text-white text-lg font-semibold">({5})</span>
        </div>
        <a className=' text-white font-extralight'>70% OF REVIEWERS RECOMMEND THIS PRODUCT</a>
        <div className="flex gap-12 font-bold text-lg">
        <a href="">90 reviews</a>
        <a href="">+ Add a Review</a>
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Reviews;
