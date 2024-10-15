export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule: any) => Rule.required().max(100),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: any) => Rule.required().max(400),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows for custom cropping
        },
        validation: (Rule: any) => Rule.required(),
      },
      {
        name: 'readMoreLink',
        title: 'Read More Link',
        type: 'url',
        description: 'URL to the full article',
      },
    ],
  };
  