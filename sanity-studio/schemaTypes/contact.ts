export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  groups: [
    { name: 'general', title: 'General Information' },
    { name: 'form', title: 'Contact Form' },
    { name: 'social', title: 'Social Media' },
    { name: 'testing', title: 'Testing Configuration' },
  ],
  fields: [
    // Informations générales
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      group: 'general'
    },
    {
      name: 'pageDescriptionEN',
      title: 'Page Description (English)',
      type: 'text',
      description: 'Brief description for the Contact page (English)',
      group: 'general'
    },
    {
      name: 'pageDescriptionNL',
      title: 'Page Description (Dutch)',
      type: 'text',
      description: 'Brief description for the Contact page (Dutch)',
      group: 'general'
    },
    
    // Coordonnées
    {
      name: 'contactInfoTitle',
      title: 'Contact Info Section Title',
      type: 'string',
      description: 'Title for the contact information section',
      group: 'general'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Public email address displayed on the contact page',
      validation: (Rule: any) => Rule.required().email(),
      group: 'general'
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      group: 'general'
    },
    {
      name: 'studioAddress',
      title: 'Studio Address',
      type: 'text',
      group: 'general'
    },
    {
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'string',
      group: 'general'
    },
    
    // Réseaux sociaux
    {
      name: 'socialMediaTitle',
      title: 'Social Media Section Title',
      type: 'string',
      group: 'social'
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Full Instagram URL (e.g., https://www.instagram.com/siemart)',
      group: 'social'
    },
    {
      name: 'instagramLabel',
      title: 'Instagram Label',
      type: 'string',
      description: 'Text displayed for the Instagram link',
      group: 'social'
    },
    
    // Formulaire de contact
    {
      name: 'formTitle',
      title: 'Form Title',
      type: 'string',
      group: 'form'
    },
    {
      name: 'nameFieldLabel',
      title: 'Name Field Label',
      type: 'string',
      group: 'form'
    },
    {
      name: 'emailFieldLabel',
      title: 'Email Field Label',
      type: 'string',
      group: 'form'
    },
    {
      name: 'messageFieldLabel',
      title: 'Message Field Label',
      type: 'string',
      group: 'form'
    },
    {
      name: 'submitButtonTextEN',
      title: 'Submit Button Text (English)',
      type: 'string',
      group: 'form'
    },
    {
      name: 'submitButtonTextNL',
      title: 'Submit Button Text (Dutch)',
      type: 'string',
      group: 'form'
    },
    {
      name: 'submittingButtonTextEN',
      title: 'Submitting Button Text (English)',
      type: 'string',
      description: 'Text shown while the form is being submitted',
      group: 'form'
    },
    {
      name: 'submittingButtonTextNL',
      title: 'Submitting Button Text (Dutch)',
      type: 'string',
      description: 'Text shown while the form is being submitted',
      group: 'form'
    },
    {
      name: 'thankYouMessageEN',
      title: 'Thank You Message (English)',
      type: 'text',
      group: 'form'
    },
    {
      name: 'thankYouMessageNL',
      title: 'Thank You Message (Dutch)',
      type: 'text',
      group: 'form'
    },
    {
      name: 'errorMessageEN',
      title: 'Error Message (English)',
      type: 'text',
      description: 'Message shown when form submission fails',
      group: 'form'
    },
    {
      name: 'errorMessageNL',
      title: 'Error Message (Dutch)',
      description: 'Message shown when form submission fails',
      type: 'text',
      group: 'form'
    },
    
    // Texte d'acquisition
    {
      name: 'acquisitionText',
      title: 'Acquisition Text',
      type: 'text',
      description: 'Text about acquisition inquiries',
      group: 'general'
    },
    
    // Configuration pour les tests
    {
      name: 'testingEmail',
      title: 'Testing Email',
      type: 'string',
      description: 'Email address for testing the contact form (this will override the destination email)',
      validation: (Rule: any) => Rule.email(),
      group: 'testing'
    },
    {
      name: 'useTestingEmail',
      title: 'Use Testing Email',
      type: 'boolean',
      description: 'Enable to use the testing email instead of the public email for form submissions',
      initialValue: false,
      group: 'testing'
    },
    {
      name: 'emailjsServiceId',
      title: 'EmailJS Service ID',
      type: 'string',
      description: 'Service ID from EmailJS',
      group: 'testing'
    },
    {
      name: 'emailjsTemplateId',
      title: 'EmailJS Template ID',
      type: 'string',
      description: 'Template ID from EmailJS',
      group: 'testing'
    },
    {
      name: 'emailjsPublicKey',
      title: 'EmailJS Public Key',
      type: 'string',
      description: 'Public Key from EmailJS',
      group: 'testing'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'email',
    },
  },
}
