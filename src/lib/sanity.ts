import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
// Définition simplifiée du type SanityImageSource
type SanityImageSource = {
  asset?: {
    _ref: string;
  };
  [key: string]: any;
};

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yjqruava';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Configuration pour l'optimisation des images
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
