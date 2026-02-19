export default {
  name: 'work',
  title: 'Work',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{type: 'series'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      options: {
        list: [
          {title: 'Oil on Canvas', value: 'works.medium.oilOnCanvas'},
          {title: 'Acrylic on Canvas', value: 'works.medium.acrylicOnCanvas'},
          {title: 'Mixed Media', value: 'works.medium.mixedMedia'},
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Available', value: 'available'},
          {title: 'Sold', value: 'sold'},
        ]
      },
      validation: Rule => Rule.required()
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
  ],
  preview: {
    select: {
      title: 'title',
      series: 'series.title',
      media: 'image',
    },
    prepare(selection) {
      const {title, series, media} = selection;
      return {
        title,
        subtitle: series ? `Series: ${series}` : '',
        media,
      };
    },
  },
}
