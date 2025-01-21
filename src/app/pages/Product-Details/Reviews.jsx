import React, { useEffect, useState, useRef } from 'react';
import { client } from '../../../sanity/lib/client';
import Reviewbar from '../../components/review-bar';
import '../../globals.css';
import ProductReviewForm from '../../components/ProductReviewForm';
import DisplayReviews from '../../components/ProductReviewsDisplay';
import PerfumeLoader from '../../components/PerfumeLoader';
import { fetchReviews } from '../../../utils/fetchReviews'; 

const Reviews = ({ slug }) => {
  const [product, setProduct] = useState(null);
  const [productReviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const reviewFormRef = useRef(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "shop" && slug.current == $slug][0]{
        name,
        rating,
        productId
      }`;
      const params = { slug };
      try {
        const data = await client.fetch(query, params);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [slug]);

  useEffect(() => {
    const getReviews = async () => {
      if (product) {
        const reviewsData = await fetchReviews(product.productId);
        setReviews(reviewsData);
      }
    };

    getReviews();
  }, [product]);
  
  if (loading) {
    return <PerfumeLoader />;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  const reviewsCount = Array.isArray(productReviews) ? productReviews.length : 0;
  const averageRating = reviewsCount > 0 
    ? (productReviews.reduce((acc, review) => acc + review.rating, 0) / reviewsCount).toFixed(1) 
    : 0;

  const handleAddReviewClick = () => {
    if (reviewFormRef.current) {
      reviewFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  const ratingsPercentage = [5, 4, 3, 2, 1].map(star => {
    const count = productReviews.filter(review => review.rating === star).length;
    return reviewsCount > 0 ? Math.round((count / reviewsCount) * 100) : 0;
  });
  

  return (
    <>
      <h2 className="h2">Reviews</h2>
      <div className="flex justify-center pb-20">
        <div className="flex flex-col items-center">
        <Reviewbar rating={5} progress={ratingsPercentage[0]} />
          <Reviewbar rating={4} progress={ratingsPercentage[1]} />
          <Reviewbar rating={3} progress={ratingsPercentage[2]} />
          <Reviewbar rating={2} progress={ratingsPercentage[3]} />
          <Reviewbar rating={1} progress={ratingsPercentage[4]} />
        </div>
        <div>
          <div className="flex flex-col items-left gap-5 text-white">
            <div className="flex my-auto">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className={`h-7 w-7 ${index < Math.round(averageRating) ? 'text-yellow-500' : 'text-gray-400'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
                </svg>
              ))}
              <span className="text-white text-lg font-semibold">({averageRating})</span>
            </div>
            <span className="text-white font-extralight">70% OF REVIEWERS RECOMMEND THIS PRODUCT</span>
            <div className="flex gap-12 font-bold text-lg">
              <button className="text-white hover:text-[#AB572D]">{reviewsCount} reviews</button>
              <button onClick={handleAddReviewClick} className="text-white hover:text-[#AB572D]">+ Add a Review</button>
            </div>
          </div>
        </div>
      </div>
      <DisplayReviews productId={product.productId} />
      <div ref={reviewFormRef}>
        <ProductReviewForm productId={product.productId} />
      </div>
    </>
  );
};

export default Reviews;
