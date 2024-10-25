import { Rule } from '@sanity/types';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'productId',
      title: 'Product ID',
      type: 'string',
      initialValue: () => uuidv4(), 
    },
    {
      name: 'name',
      title: 'Perfume Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().error('Perfume name is required'),
    },
    {
      name: 'image',
      title: 'Perfume Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required().error('Perfume image is required'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96, // Optional: Limit the length of the slug
      },
      validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: Rule) => Rule.required().error('Description is required'),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating of the perfume (out of 5)',
      validation: (Rule: Rule) => Rule.required().min(0).max(5).precision(1).error('Rating must be between 0 and 5'),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the perfume',
      validation: (Rule: Rule) => Rule.required().min(0).error('Price must be greater than or equal to 0'),
    },
    {
      name: 'quantity',
      title: 'Quantity (ml)',
      type: 'number',
      description: 'Quantity in milliliters (ml)',
      validation: (Rule: Rule) => Rule.required().min(0).error('Quantity must be greater than or equal to 0 ml'),
    },
    {
      name: 'stockStatus',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
          { title: 'Limited Stock', value: 'limitedStock' },
        ],
        layout: 'radio', // Display options as radio buttons
      },
      validation: (Rule: Rule) => Rule.required().error('Stock status is required'),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'price',
    },
  },
};
