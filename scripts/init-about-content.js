/**
 * Script pour initialiser ou mettre à jour le contenu de la page About dans Sanity
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: node scripts/init-about-content.js
 */

const { createClient } = require('@sanity/client');

// Configuration Sanity - à ajuster selon votre projet
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3do82whm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // Nécessite un token avec droits d'écriture
  useCdn: false,
});

// Contenu par défaut pour la page About
const aboutContent = {
  _type: 'about',
  name: 'Simone Roodselaar',
  biographyEN: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Simone Roodselaar (SiemArt) explores how inner expectation shapes reality through abstract painting. Her monumental, layered works exist as visual fields in which transformation and awareness can emerge.'
        }
      ]
    }
  ],
  biographyNL: [
    {
      _type: 'block',
      children: [
        {
          _type: 'span',
          text: 'Simone Roodselaar (SiemArt) onderzoekt hoe innerlijke verwachting de realiteit vormt door middel van abstracte schilderkunst. Haar monumentale, gelaagde werken bestaan als visuele velden waarin transformatie en bewustwording kunnen ontstaan.'
        }
      ]
    }
  ],
  birthPlace: 'Born in The Netherlands',
  availability: 'Works available internationally',
  acquisitionNote: 'For acquisition inquiries and available works, please get in touch.',
  email: 'info@siemart.com',
  instagram: 'https://www.instagram.com/siemart'
};

// Fonction pour vérifier si le document About existe déjà
async function checkAboutExists() {
  try {
    const existingDoc = await client.fetch('*[_type == "about"][0]');
    return existingDoc;
  } catch (error) {
    console.error('Erreur lors de la vérification du document About:', error);
    return null;
  }
}

// Fonction principale
async function initAboutContent() {
  try {
    console.log('Vérification du document About...');
    const existingDoc = await checkAboutExists();

    if (existingDoc) {
      console.log('Document About trouvé, mise à jour...');
      
      // Conserver l'ID existant et fusionner avec le nouveau contenu
      const updatedDoc = {
        ...aboutContent,
        _id: existingDoc._id,
        // Conserver les images si elles existent déjà
        ...(existingDoc.profileImage && { profileImage: existingDoc.profileImage }),
        ...(existingDoc.monumentalWorkImage && { monumentalWorkImage: existingDoc.monumentalWorkImage }),
      };
      
      const result = await client
        .patch(existingDoc._id)
        .set(updatedDoc)
        .commit();
      
      console.log('Document About mis à jour avec succès:', result);
    } else {
      console.log('Document About non trouvé, création...');
      
      // Créer un nouveau document avec un ID spécifique
      const result = await client.create({
        ...aboutContent,
        _id: 'about' // ID personnalisé pour faciliter les références
      });
      
      console.log('Document About créé avec succès:', result);
    }
    
    console.log('\nÉtapes suivantes:');
    console.log('1. Connectez-vous à Sanity Studio');
    console.log('2. Ajoutez les images (photo de profil et œuvre monumentale)');
    console.log('3. Complétez ou modifiez le contenu selon vos besoins');
    console.log('4. Publiez les modifications');
    
  } catch (error) {
    console.error('Erreur lors de l\'initialisation du contenu About:', error);
  }
}

// Exécuter la fonction principale
initAboutContent();
