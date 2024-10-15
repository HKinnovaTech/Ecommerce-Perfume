import { Rule } from '@sanity/types';

export default {
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Perfume Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Perfume name is required')
    },
    {
      name: 'image',
      title: 'Perfume Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: Rule) => Rule.required().error('Perfume image is required')
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating of the perfume (out of 5)',
      validation: (Rule: Rule) => Rule.required().min(0).max(5).precision(1).error('Rating must be between 0 and 5')
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the perfume',
      validation: (Rule: Rule) => Rule.required().min(0).error('Price must be greater than or equal to 0')
    },
    {
      name: 'quantity',
      title: 'Quantity (ml)',
      type: 'number',
      description: 'Quantity in milliliters (ml)',
      validation: (Rule: Rule) => Rule.required().min(0).error('Quantity must be greater than or equal to 0 ml')
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price'
    }
  }
};
