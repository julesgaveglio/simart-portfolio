import { sanityFetch } from './sanityFetch';
import { allSeriesQuery, seriesBySlugQuery, workBySlugQuery, aboutQuery, allWorksQuery, contactQuery } from './queries';
import { Series, Work, About, Contact } from './types';
import { urlFor } from './sanity';

// Récupérer toutes les séries
export async function getAllSeries(): Promise<Series[]> {
  const series = await sanityFetch<Series[]>({
    query: allSeriesQuery,
    tags: ['series']
  });
  
  return series.map(s => ({
    ...s,
    // Convertir l'URL de l'image Sanity en URL utilisable
    coverImage: s.coverImage ? s.coverImage : undefined
  }));
}

// Récupérer une série par son slug
export async function getSeriesBySlug(slug: string): Promise<Series | null> {
  try {
    const series = await sanityFetch<Series>({
      query: seriesBySlugQuery,
      params: { slug },
      tags: [`series:${slug}`, 'series']
    });
    
    return series;
  } catch (error) {
    console.error('Error fetching series by slug:', error);
    return null;
  }
}

// Récupérer une œuvre par son slug
export async function getWorkBySlug(slug: string): Promise<Work | null> {
  try {
    const work = await sanityFetch<Work>({
      query: workBySlugQuery,
      params: { slug },
      tags: [`work:${slug}`, 'work']
    });
    
    return work;
  } catch (error) {
    console.error('Error fetching work by slug:', error);
    return null;
  }
}

// Récupérer les informations de la page About
export async function getAboutInfo(): Promise<About | null> {
  try {
    const about = await sanityFetch<About>({
      query: aboutQuery,
      tags: ['about']
    });
    
    return about;
  } catch (error) {
    console.error('Error fetching about info:', error);
    return null;
  }
}

// Récupérer tous les travaux
export async function getAllWorks(): Promise<Work[]> {
  try {
    const works = await sanityFetch<Work[]>({
      query: allWorksQuery,
      tags: ['work']
    });
    
    return works;
  } catch (error) {
    console.error('Error fetching all works:', error);
    return [];
  }
}

// Récupérer les informations de la page Contact
export async function getContactInfo(): Promise<Contact | null> {
  try {
    const contact = await sanityFetch<Contact>({
      query: contactQuery,
      tags: ['contact']
    });
    
    return contact;
  } catch (error) {
    console.error('Error fetching contact info:', error);
    return null;
  }
}

// Fonction utilitaire pour convertir les URLs d'images Sanity
export function getSanityImageUrl(image: any) {
  return urlFor(image).url();
}
