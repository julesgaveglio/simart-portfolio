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
  slug: string;
  coverImage?: SanityImage;
  descriptionEN?: string;
  descriptionNL?: string;
  order?: number;
  works?: Work[];
}

export interface Work {
  _id: string;
  title: string;
  slug: string;
  image: SanityImage;
  series: {
    _id: string;
    title: string;
    slug: string;
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
  biographyEN: any[]; // Pour les champs Portable Text de Sanity
  biographyNL: any[];
  email?: string;
  instagram?: string;
}
