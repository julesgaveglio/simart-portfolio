/**
 * Script d'automatisation directe pour l'initialisation du contenu Sanity
 * Utilise directement le token API fourni
 */

import { createClient } from '@sanity/client';

// Token API fourni directement
const SANITY_API_TOKEN = 'skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip';

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
  
  return paragraphs.map((paragraph, index) => ({
    _key: `paragraph${index}`,
    _type: 'block',
    children: [
      {
        _key: `text${index}`,
        _type: 'span',
        marks: [],
        text: paragraph.trim()
      }
    ],
    markDefs: [],
    style: 'normal'
  }));
}

// Contenu de la biographie en anglais
const biographyEN = `Simone Roodselaar (SiemArt) explores how inner expectation shapes reality through abstract painting. Her monumental, layered works exist as visual fields in which transformation and awareness can emerge.

Through her distinctive approach to color, texture, and composition, Roodselaar creates immersive experiences that invite viewers to engage with their own perceptions and emotions. Each piece serves as a meditation on the relationship between internal landscapes and external expression.

Her work has been exhibited internationally and is held in private collections across Europe, North America, and Asia.`;

// Contenu de la biographie en néerlandais
const biographyNL = `Simone Roodselaar (SiemArt) onderzoekt hoe innerlijke verwachting de realiteit vormt door middel van abstracte schilderkunst. Haar monumentale, gelaagde werken bestaan als visuele velden waarin transformatie en bewustwording kunnen ontstaan.

Door haar kenmerkende benadering van kleur, textuur en compositie creëert Roodselaar meeslepende ervaringen die kijkers uitnodigen om zich bezig te houden met hun eigen percepties en emoties. Elk stuk dient als een meditatie over de relatie tussen interne landschappen en externe expressie.

Haar werk is internationaal geëxposeerd en bevindt zich in privécollecties in Europa, Noord-Amerika en Azië.`;

// Contenu About à créer/mettre à jour
const aboutContent = {
  _type: 'about',
  name: 'Simone Roodselaar',
  biographyEN: createPortableText(biographyEN),
  biographyNL: createPortableText(biographyNL),
  birthPlace: 'Born in The Netherlands',
  availability: 'Works available internationally',
  acquisitionNote: 'For acquisition inquiries and available works, please get in touch.',
  email: 'info@siemart.com',
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
      
      // Préserver les images existantes si elles sont présentes
      const updatedContent = {
        ...content,
        _id: existingDoc._id,
        ...(existingDoc.profileImage && { profileImage: existingDoc.profileImage }),
        ...(existingDoc.monumentalWorkImage && { monumentalWorkImage: existingDoc.monumentalWorkImage }),
      };
      
      const result = await client
        .patch(existingDoc._id)
        .set(updatedContent)
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
async function setupSanityContent() {
  console.log('\x1b[36m%s\x1b[0m', '=== Initialisation automatique du contenu Sanity ===');
  
  try {
    // Vérification du token
    console.log('\x1b[36m%s\x1b[0m', '\nUtilisation du token API fourni...');
    
    // Vérifier et créer/mettre à jour le document About
    console.log('\x1b[36m%s\x1b[0m', '\n1. Vérification du document About...');
    const existingAbout = await documentExists('about');
    const aboutResult = await createOrUpdateDocument(aboutContent, existingAbout);
    
    console.log('\n\x1b[32m%s\x1b[0m', '✓ Initialisation du contenu terminée avec succès!');
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
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de l\'initialisation du contenu:');
    console.error(error);
    return {
      success: false,
      error
    };
  }
}

// Exécuter la fonction principale
setupSanityContent().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});
