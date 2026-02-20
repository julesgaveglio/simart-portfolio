import { notFound } from 'next/navigation';
import { getContactInfo } from '@/lib/sanityActions';
import ContactClient from './contact-client';

export default async function Contact() {
  // Récupérer les informations de contact depuis Sanity
  const contactInfo = await getContactInfo();
  
  // Si les informations n'existent pas, afficher une page 404
  if (!contactInfo) {
    notFound();
  }
  
  return <ContactClient contactInfo={contactInfo} />;
}
