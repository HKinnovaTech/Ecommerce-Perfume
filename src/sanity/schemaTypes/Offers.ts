export default {
  name: 'productOffer',
  title: 'Product Offer',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
        },
      ],
    },
    {
      name: 'offer',
      title: 'Offer',
      type: 'string',
      description: 'Special offer or discount (e.g., "20% off").',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading for the offer or product.',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the product or service.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the offer or product.',
    },
    {
      name: 'bgColor', // Name of the field
      title: 'Background Color', // Title displayed in the Sanity Studio
      type: 'string', // Type of the field
      description: 'Background color for the offer (e.g., #FFFFFF).', // Description for the field
    },
  ],
};
