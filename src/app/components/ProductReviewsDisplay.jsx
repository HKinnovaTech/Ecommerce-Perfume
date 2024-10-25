import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchReviews } from '../../utils/fetchReviews'; 

const DisplayReviews = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [visibleReviews, setVisibleReviews] = useState(3); 

    useEffect(() => {
        const getReviews = async () => {
            const reviewsData = await fetchReviews(productId);
            setReviews(reviewsData);
        };

        getReviews();
    }, [productId]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const handleViewMore = () => {
        setVisibleReviews((prev) => prev + 2); 
    };

    return (
        <div className='flex items-center justify-center text-white'>
            {reviews.length > 0 ? (
                <div className="flex flex-col">
                    {reviews.slice(0, visibleReviews).map((review) => ( 
                        <div key={review.id} className='flex mb-12 p-4 w-[1400px] gap-4'>
                            <Image
                                src={''} // Replace with actual image URL
                                alt='User'
                                className="w-10 h-10 rounded-full mb-2" 
                            />
                            <div className='flex flex-col'>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            className={`h-5 w-5 ${index < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2">{review.rating}/5</span>
                                </div>
                                <p className='my-1'>{review.product_review}</p>
                                <div className='flex gap-24 mt-2'>
                                    <p>User Name</p>
                                    <p>{formatDate(review.created_at)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    {visibleReviews < reviews.length && (
                        <button
                            onClick={handleViewMore}
                            className="m-auto border border-gray-400 text-white font-bold py-2 px-4 rounded"
                        >
                            View More
                        </button>
                    )}
                </div>
            ) : (
                <p className=''>No reviews available for this product.</p>
            )}
        </div>
    );
};

export default DisplayReviews;
