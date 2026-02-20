/**
 * Script pour initialiser les données About dans Sanity
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: SANITY_TOKEN=votre_token node scripts/init-about-data.js
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

// Fonction pour créer un champ Portable Text à partir d'un texte simple
function createPortableText(text) {
  // Diviser le texte en paragraphes
  const paragraphs = text.split('\n\n').filter(p => p.trim() !== '');
  
  return paragraphs.map(paragraph => ({
    _type: 'block',
    style: 'normal',
    _key: Math.random().toString(36).substring(2, 15),
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(2, 15),
        text: paragraph.trim(),
        marks: []
      }
    ]
  }));
}

// Contenu About à initialiser
const aboutContent = {
  _type: 'about',
  name: 'Simone Roodselaar',
  biographyEN: createPortableText(`Simone Roodselaar is a contemporary Dutch artist known for her evocative sculptures and installations that explore the relationship between form, space, and emotion.

Born and raised in the Netherlands, Roodselaar's artistic journey began at the Royal Academy of Art in The Hague, where she developed her distinctive approach to sculptural work. Her practice is characterized by a meticulous attention to material properties and a deep interest in how physical forms can embody emotional and philosophical concepts.

Roodselaar's work has been exhibited internationally, including solo shows in Amsterdam, Berlin, and New York. Her monumental installations have been commissioned for public spaces across Europe, creating contemplative environments that invite viewers to reconsider their relationship with the physical world.

Through her art, Roodselaar continues to investigate the boundaries between the tangible and the intangible, creating works that resonate with both sensory immediacy and conceptual depth.`),
  
  biographyNL: createPortableText(`Simone Roodselaar is een hedendaagse Nederlandse kunstenaar, bekend om haar evocatieve sculpturen en installaties die de relatie tussen vorm, ruimte en emotie onderzoeken.

Geboren en getogen in Nederland, begon Roodselaar's artistieke reis aan de Koninklijke Academie van Beeldende Kunsten in Den Haag, waar ze haar onderscheidende benadering van sculpturaal werk ontwikkelde. Haar praktijk wordt gekenmerkt door een nauwgezette aandacht voor materiaaleigenschappen en een diepe interesse in hoe fysieke vormen emotionele en filosofische concepten kunnen belichamen.

Roodselaar's werk is internationaal tentoongesteld, waaronder solotentoonstellingen in Amsterdam, Berlijn en New York. Haar monumentale installaties zijn in opdracht gemaakt voor openbare ruimtes in heel Europa, waarbij ze contemplatieve omgevingen creëert die de kijker uitnodigen om hun relatie met de fysieke wereld te heroverwegen.

Door haar kunst blijft Roodselaar de grenzen tussen het tastbare en het ontastbare onderzoeken, waarbij ze werken creëert die resoneren met zowel zintuiglijke directheid als conceptuele diepgang.`),
  
  birthPlace: 'Born in The Netherlands',
  availability: 'Works available internationally',
  acquisitionNote: 'For acquisition inquiries and available works, please get in touch.',
  email: 'info@simoneroodeselaar.com',
  instagram: 'https://www.instagram.com/siemart'
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
async function initAboutData() {
  console.log('\x1b[36m%s\x1b[0m', '=== Initialisation des données About dans Sanity ===');
  
  try {
    // Vérifier et créer/mettre à jour le document About
    console.log('\x1b[36m%s\x1b[0m', '\n1. Vérification du document About...');
    const existingAbout = await documentExists('about');
    const aboutResult = await createOrUpdateDocument(aboutContent, existingAbout);
    
    console.log('\n\x1b[32m%s\x1b[0m', '✓ Initialisation des données About terminée avec succès!');
    console.log('\n\x1b[36m%s\x1b[0m', 'Étapes suivantes:');
    console.log('1. Connectez-vous à Sanity Studio');
    console.log('2. Ajoutez les images manquantes:');
    console.log('   - Photo de profil');
    console.log('   - Photo avec œuvre monumentale');
    console.log('3. Vérifiez et ajustez le contenu si nécessaire');
    
    return {
      success: true,
      about: aboutResult
    };
  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de l\'initialisation des données About:');
    console.error(error);
    return {
      success: false,
      error
    };
  }
}

// Exécuter la fonction principale
initAboutData().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});
