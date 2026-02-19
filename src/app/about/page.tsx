import { notFound } from 'next/navigation';
import { getAboutInfo } from '@/lib/sanityActions';
import AboutClient from './about-client';

export default async function About() {
  // Récupérer les informations de la page About depuis Sanity
  const aboutInfo = await getAboutInfo();
  
  // Si les informations n'existent pas, afficher une page 404
  if (!aboutInfo) {
    notFound();
  }
  
  return <AboutClient aboutInfo={aboutInfo} />;
}
