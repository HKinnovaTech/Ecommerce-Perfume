// In your Sanity schema
import { Rule } from '@sanity/types';

export default {
  name: 'productReview',
  title: 'Product Review',
  type: 'document',
  fields: [
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: Rule) => Rule.min(1).max(5),
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'shop' }], // Ensure this matches your product type
    },
  ],
};
