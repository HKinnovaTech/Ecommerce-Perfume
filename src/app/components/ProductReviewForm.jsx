import { useState } from 'react';

const ProductReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (rating < 1 || rating > 5) {
      setErrorMessage('Rating must be between 1 and 5');
      return;
    }

    const reviewData = {
      rating: parseInt(rating),
      product_review: reviewText, 
      product_id: productId,
    };

    try {
      setIsSubmitting(true);
      
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit review');
      }

      setSuccessMessage('Review submitted successfully!');
      setRating('');
      setReviewText('');

      setTimeout(() => setSuccessMessage(null), 3000);

    } catch (error) {
      console.error('Error submitting review', error);
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center pb-64 '>
      <div>
      <div>
        <div className="flex gap-1 my-2 items-center text-white">
        <p className='font-semibold'>Your Rating: </p>
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              onClick={() => setRating(index + 1)}
              onMouseEnter={() => setHoverRating(index + 1)}
              onMouseLeave={() => setHoverRating(0)}
              className={`h-5 w-5 cursor-pointer ${
                index < (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-400'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.31 4.034a1 1 0 00.95.691h4.216c.969 0 1.371 1.24.588 1.81l-3.41 2.473a1 1 0 00-.364 1.118l1.31 4.034c.3.921-.755 1.688-1.538 1.118l-3.41-2.474a1 1 0 00-1.175 0l-3.41 2.474c-.783.57-1.838-.197-1.538-1.118l1.31-4.034a1 1 0 00-.364-1.118L2.4 9.463c-.783-.57-.381-1.81.588-1.81h4.216a1 1 0 00.95-.691l1.31-4.034z" />
            </svg>
          ))}
        </div>
      </div>
      <div>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          required
          className='w-[1400px] text-white bg-[#3030308f] rounded-md border-none p-2 focus:outline-none focus:ring-2 focus:ring-[#AB572D]'
        />
      </div>
      <button type="submit" disabled={isSubmitting} className='m-auto border border-gray-400 hover:border-[#AB572D] text-white font-bold py-2 px-4 rounded'>
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
      </div>
    </form>
  );
};

export default ProductReviewForm;
