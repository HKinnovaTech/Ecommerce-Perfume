// utils/fetchReviews.js
export const fetchReviews = async (productId) => {
    try {
      const response = await fetch(`/api/read-reviews?product_id=${productId}`);
      const data = await response.json();
      if (response.ok) {
        return data.data || [];
      } else {
        console.error(data.error);
        return [];
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  };
  