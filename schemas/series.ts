export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'descriptionEN',
      title: 'Description (English)',
      type: 'text',
    },
    {
      name: 'descriptionNL',
      title: 'Description (Dutch)',
      type: 'text',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order to display the series in (lower numbers appear first)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
  },
}
