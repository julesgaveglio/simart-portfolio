/**
 * Script pour initialiser les données de contact dans Sanity
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: SANITY_TOKEN=votre_token node scripts/init-contact-data.js
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

// Contenu de contact à initialiser
const contactContent = {
  _type: 'contact',
  title: 'Contact',
  email: 'info@simoneroodeselaar.com', // Email de la cliente
  phone: '+31 20 123 4567',
  studioAddress: 'Amsterdam, The Netherlands',
  openingHours: 'By appointment only',
  instagram: 'https://www.instagram.com/siemart',
  formTitle: 'Get in Touch',
  acquisitionText: 'For acquisition inquiries and available works, please get in touch by email or Instagram',
  thankYouMessageEN: 'Thank you for your message. We will get back to you as soon as possible.',
  thankYouMessageNL: 'Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.'
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
  console.log('\x1b[36m%s\x1b[0m', '=== Initialisation des données de contact dans Sanity ===');
  
  try {
    // Vérifier et créer/mettre à jour le document Contact
    console.log('\x1b[36m%s\x1b[0m', '\n1. Vérification du document Contact...');
    const existingContact = await documentExists('contact');
    const contactResult = await createOrUpdateDocument(contactContent, existingContact);
    
    console.log('\n\x1b[32m%s\x1b[0m', '✓ Initialisation des données de contact terminée avec succès!');
    console.log('\n\x1b[36m%s\x1b[0m', 'Étapes suivantes:');
    console.log('1. Configurez EmailJS pour l\'envoi d\'emails (voir le guide)');
    console.log('2. Mettez à jour les identifiants EmailJS dans le fichier contact-client.tsx');
    console.log('3. Testez le formulaire de contact');
    
    return {
      success: true,
      contact: contactResult
    };
  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de l\'initialisation des données de contact:');
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
