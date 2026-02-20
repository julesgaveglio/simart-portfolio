// Types pour les données Sanity

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Series {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: SanityImage;
  descriptionEN?: string;
  descriptionNL?: string;
  order?: number;
  works?: Work[];
}

export interface Work {
  _id: string;
  title: string;
  slug: { current: string };
  image: SanityImage;
  series: {
    _id: string;
    title: string;
    slug: { current: string };
  };
  dimensions: string;
  medium: string;
  year: string;
  status: 'available' | 'sold';
  descriptionEN?: string;
  descriptionNL?: string;
}

export interface About {
  name: string;
  profileImage?: SanityImage;
  monumentalWorkImage?: SanityImage;
  biographyEN: any[]; // Pour les champs Portable Text de Sanity
  biographyNL: any[];
  birthPlace?: string;
  availability?: string;
  acquisitionNote?: string;
  email?: string;
  instagram?: string;
}

export interface Contact {
  _id: string;
  title: string;
  pageDescriptionEN?: string;
  pageDescriptionNL?: string;
  
  // Coordonnées
  contactInfoTitle?: string;
  email: string;
  phone?: string;
  studioAddress?: string;
  openingHours?: string;
  
  // Réseaux sociaux
  socialMediaTitle?: string;
  instagram?: string;
  instagramLabel?: string;
  
  // Formulaire
  formTitle?: string;
  nameFieldLabel?: string;
  emailFieldLabel?: string;
  messageFieldLabel?: string;
  submitButtonTextEN?: string;
  submitButtonTextNL?: string;
  submittingButtonTextEN?: string;
  submittingButtonTextNL?: string;
  thankYouMessageEN?: string;
  thankYouMessageNL?: string;
  errorMessageEN?: string;
  errorMessageNL?: string;
  
  // Texte d'acquisition
  acquisitionText?: string;
  
  // Configuration pour les tests
  testingEmail?: string;
  useTestingEmail?: boolean;
  emailjsServiceId?: string;
  emailjsTemplateId?: string;
  emailjsPublicKey?: string;
}
