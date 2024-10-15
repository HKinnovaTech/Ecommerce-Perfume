export default {
    name: 'collection',
    title: 'Collection',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [
          {
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
              },
              {
                name: 'size',
                title: 'Size',
                type: 'string',
                options: {
                  list: [
                    { title: 'Small', value: 'small' },
                    { title: 'Medium', value: 'medium' },
                    { title: 'Large', value: 'large' },
                  ],
                  layout: 'radio', // This creates a radio button UI
                },
              },
            ],
          },
        ],
      },
    ],
  };
  