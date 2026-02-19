export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'biographyEN',
      title: 'Biography (English)',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'biographyNL',
      title: 'Biography (Dutch)',
      type: 'array',
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profileImage',
    },
  },
}
