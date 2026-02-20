/**
 * Script pour initialiser les données Contact complètes dans Sanity
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: SANITY_TOKEN=votre_token node scripts/init-contact-data-complete.js
 */

import { createClient } from '@sanity/client';

// Token API fourni directement
const SANITY_API_TOKEN = process.env.SANITY_TOKEN || 'skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip';

// Configuration du client Sanity
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: SANITY_API_TOKEN,
  useCdn: false,
});

// Contenu de contact complet à initialiser
const contactContent = {
  _type: 'contact',
  title: 'Contact',
  
  // Description de la page
  pageDescriptionEN: 'Get in touch with SiemArt for inquiries about available works, commissions, or exhibitions.',
  pageDescriptionNL: 'Neem contact op met SiemArt voor vragen over beschikbare werken, opdrachten of tentoonstellingen.',
  
  // Coordonnées
  contactInfoTitle: 'Contact Information',
  email: 'info@simoneroodeselaar.com',
  phone: '+31 20 123 4567',
  studioAddress: 'Amsterdam, The Netherlands',
  openingHours: 'By appointment only',
  
  // Réseaux sociaux
  socialMediaTitle: 'Social Media',
  instagram: 'https://www.instagram.com/siemart',
  instagramLabel: 'Follow on Instagram',
  
  // Formulaire
  formTitle: 'Send a Message',
  nameFieldLabel: 'Your Name',
  emailFieldLabel: 'Your Email',
  messageFieldLabel: 'Your Message',
  submitButtonTextEN: 'Send Message',
  submitButtonTextNL: 'Bericht Verzenden',
  submittingButtonTextEN: 'Sending...',
  submittingButtonTextNL: 'Verzenden...',
  thankYouMessageEN: 'Thank you for your message. We will get back to you as soon as possible.',
  thankYouMessageNL: 'Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.',
  errorMessageEN: 'There was an error sending your message. Please try again later or contact us directly via email.',
  errorMessageNL: 'Er is een fout opgetreden bij het verzenden van je bericht. Probeer het later opnieuw of neem direct contact met ons op via e-mail.',
  
  // Texte d'acquisition
  acquisitionText: 'For acquisition inquiries and available works, please get in touch by email or Instagram.',
  
  // Configuration pour les tests
  testingEmail: 'your-test-email@example.com',
  useTestingEmail: false,
  emailjsServiceId: 'service_913ggoi',
  emailjsTemplateId: 'template_kvxi77m',
  emailjsPublicKey: 'eYa8kth0QRmbd_-zL'
};

// Fonction pour vérifier si un document existe
async function documentExists(type, id = null) {
  try {
    let query = `*[_type == "${type}"]`;
    if (id) {
      query += `[_id == "${id}"]`;
    }
    query += '[0]';
    
    const doc = await client.fetch(query);
    return doc || null;
  } catch (error) {
    console.error(`Erreur lors de la vérification du document ${type}:`, error);
    return null;
  }
}

// Fonction pour créer ou mettre à jour un document
async function createOrUpdateDocument(content, existingDoc = null) {
  try {
    if (existingDoc) {
      console.log(`\x1b[33m%s\x1b[0m`, `Mise à jour du document ${content._type}...`);
      
      const result = await client
        .patch(existingDoc._id)
        .set(content)
        .commit();
      
      console.log(`\x1b[32m%s\x1b[0m`, `Document ${content._type} mis à jour avec succès!`);
      return result;
    } else {
      console.log(`\x1b[33m%s\x1b[0m`, `Création du document ${content._type}...`);
      
      // Utiliser un ID spécifique pour faciliter les références
      const documentId = content._type;
      const result = await client.create({
        ...content,
        _id: documentId
      });
      
      console.log(`\x1b[32m%s\x1b[0m`, `Document ${content._type} créé avec succès!`);
      return result;
    }
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `Erreur lors de la création/mise à jour du document ${content._type}:`, error);
    throw error;
  }
}

// Fonction principale
async function initContactData() {
  console.log('\x1b[36m%s\x1b[0m', '=== Initialisation des données Contact complètes dans Sanity ===');
  
  try {
    // Vérifier et créer/mettre à jour le document Contact
    console.log('\x1b[36m%s\x1b[0m', '\n1. Vérification du document Contact...');
    const existingContact = await documentExists('contact');
    const contactResult = await createOrUpdateDocument(contactContent, existingContact);
    
    console.log('\n\x1b[32m%s\x1b[0m', '✓ Initialisation des données Contact terminée avec succès!');
    console.log('\n\x1b[36m%s\x1b[0m', 'Étapes suivantes:');
    console.log('1. Connectez-vous à Sanity Studio');
    console.log('2. Vérifiez et personnalisez les informations de contact');
    console.log('3. Pour tester le formulaire avec votre propre email:');
    console.log('   - Modifiez le champ "Testing Email" avec votre adresse email');
    console.log('   - Activez l\'option "Use Testing Email"');
    
    return {
      success: true,
      contact: contactResult
    };
  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de l\'initialisation des données Contact:');
    console.error(error);
    return {
      success: false,
      error
    };
  }
}

// Exécuter la fonction principale
initContactData().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});
