export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
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
      name: 'monumentalWorkImage',
      title: 'Monumental Work Image',
      description: 'Image of the artist with monumental work',
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
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'biographyNL',
      title: 'Biography (Dutch)',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'birthPlace',
      title: 'Birth Place',
      type: 'string',
      description: 'e.g. "Born in The Netherlands"'
    },
    {
      name: 'availability',
      title: 'Availability',
      type: 'string',
      description: 'e.g. "Works available internationally"'
    },
    {
      name: 'acquisitionNote',
      title: 'Acquisition Note',
      type: 'string',
      description: 'Optional note for acquisition inquiries'
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
