/**
 * Script pour initialiser les données Series et Works dans Sanity
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: SANITY_TOKEN=votre_token node scripts/init-works-data.js
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

// Contenu des séries à initialiser
const seriesData = [
  {
    _type: 'series',
    title: 'Monumental Works',
    slug: { _type: 'slug', current: 'monumental-works' },
    descriptionEN: 'Large-scale sculptures and installations for public spaces',
    descriptionNL: 'Grootschalige sculpturen en installaties voor openbare ruimtes',
    order: 1
  },
  {
    _type: 'series',
    title: 'Abstract Expressions',
    slug: { _type: 'slug', current: 'abstract-expressions' },
    descriptionEN: 'Exploring form and emotion through abstract sculpture',
    descriptionNL: 'Het verkennen van vorm en emotie door abstracte sculptuur',
    order: 2
  },
  {
    _type: 'series',
    title: 'Material Studies',
    slug: { _type: 'slug', current: 'material-studies' },
    descriptionEN: 'Experimental works exploring various materials and techniques',
    descriptionNL: 'Experimentele werken die verschillende materialen en technieken verkennen',
    order: 3
  }
];

// Contenu des œuvres à initialiser (après avoir créé les séries)
const createWorksData = (seriesRefs) => {
  return [
    {
      _type: 'work',
      title: 'Harmony in Bronze',
      slug: { _type: 'slug', current: 'harmony-in-bronze' },
      series: { _type: 'reference', _ref: seriesRefs['Monumental Works'] },
      dimensions: '180 x 120 x 90 cm',
      medium: 'Bronze',
      year: '2023',
      status: 'available',
      descriptionEN: 'A monumental bronze sculpture exploring themes of balance and harmony.',
      descriptionNL: 'Een monumentale bronzen sculptuur die thema\'s van evenwicht en harmonie verkent.'
    },
    {
      _type: 'work',
      title: 'Fluid Forms',
      slug: { _type: 'slug', current: 'fluid-forms' },
      series: { _type: 'reference', _ref: seriesRefs['Abstract Expressions'] },
      dimensions: '60 x 45 x 30 cm',
      medium: 'Marble',
      year: '2022',
      status: 'available',
      descriptionEN: 'An abstract marble sculpture inspired by the fluidity of water.',
      descriptionNL: 'Een abstracte marmeren sculptuur geïnspireerd door de vloeibaarheid van water.'
    },
    {
      _type: 'work',
      title: 'Texture Study I',
      slug: { _type: 'slug', current: 'texture-study-i' },
      series: { _type: 'reference', _ref: seriesRefs['Material Studies'] },
      dimensions: '40 x 40 x 15 cm',
      medium: 'Mixed Media',
      year: '2021',
      status: 'sold',
      descriptionEN: 'An experimental piece exploring various textures and materials.',
      descriptionNL: 'Een experimenteel stuk dat verschillende texturen en materialen verkent.'
    },
    {
      _type: 'work',
      title: 'Urban Reflection',
      slug: { _type: 'slug', current: 'urban-reflection' },
      series: { _type: 'reference', _ref: seriesRefs['Monumental Works'] },
      dimensions: '220 x 150 x 120 cm',
      medium: 'Steel and Glass',
      year: '2022',
      status: 'available',
      descriptionEN: 'A large-scale installation reflecting urban environments.',
      descriptionNL: 'Een grootschalige installatie die stedelijke omgevingen weerspiegelt.'
    },
    {
      _type: 'work',
      title: 'Emotional Landscape',
      slug: { _type: 'slug', current: 'emotional-landscape' },
      series: { _type: 'reference', _ref: seriesRefs['Abstract Expressions'] },
      dimensions: '75 x 50 x 40 cm',
      medium: 'Bronze and Wood',
      year: '2023',
      status: 'available',
      descriptionEN: 'An abstract representation of emotional states through form and material.',
      descriptionNL: 'Een abstracte weergave van emotionele toestanden door vorm en materiaal.'
    },
    {
      _type: 'work',
      title: 'Material Dialogue',
      slug: { _type: 'slug', current: 'material-dialogue' },
      series: { _type: 'reference', _ref: seriesRefs['Material Studies'] },
      dimensions: '50 x 35 x 25 cm',
      medium: 'Clay and Metal',
      year: '2021',
      status: 'sold',
      descriptionEN: 'A study in contrasts between organic and industrial materials.',
      descriptionNL: 'Een studie in contrasten tussen organische en industriële materialen.'
    }
  ];
};

// Fonction pour vérifier si un document existe
async function documentExists(type, slug = null) {
  try {
    let query = `*[_type == "${type}"`;
    if (slug) {
      query += ` && slug.current == "${slug}"`;
    }
    query += '][0]';
    
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
      console.log(`\x1b[33m%s\x1b[0m`, `Mise à jour du document ${content._type} "${content.title}"...`);
      
      const result = await client
        .patch(existingDoc._id)
        .set(content)
        .commit();
      
      console.log(`\x1b[32m%s\x1b[0m`, `Document ${content._type} "${content.title}" mis à jour avec succès!`);
      return result;
    } else {
      console.log(`\x1b[33m%s\x1b[0m`, `Création du document ${content._type} "${content.title}"...`);
      
      const result = await client.create(content);
      
      console.log(`\x1b[32m%s\x1b[0m`, `Document ${content._type} "${content.title}" créé avec succès!`);
      return result;
    }
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `Erreur lors de la création/mise à jour du document ${content._type} "${content.title}":`, error);
    throw error;
  }
}

// Fonction principale
async function initWorksData() {
  console.log('\x1b[36m%s\x1b[0m', '=== Initialisation des données Series et Works dans Sanity ===');
  
  try {
    // Créer ou mettre à jour les séries
    console.log('\x1b[36m%s\x1b[0m', '\n1. Initialisation des séries...');
    const seriesRefs = {};
    
    for (const series of seriesData) {
      const existingSeries = await documentExists('series', series.slug.current);
      const result = await createOrUpdateDocument(series, existingSeries);
      seriesRefs[series.title] = result._id;
    }
    
    // Créer ou mettre à jour les œuvres
    console.log('\x1b[36m%s\x1b[0m', '\n2. Initialisation des œuvres...');
    const worksData = createWorksData(seriesRefs);
    
    for (const work of worksData) {
      const existingWork = await documentExists('work', work.slug.current);
      await createOrUpdateDocument(work, existingWork);
    }
    
    console.log('\n\x1b[32m%s\x1b[0m', '✓ Initialisation des données Series et Works terminée avec succès!');
    console.log('\n\x1b[36m%s\x1b[0m', 'Étapes suivantes:');
    console.log('1. Connectez-vous à Sanity Studio');
    console.log('2. Ajoutez les images pour les séries et les œuvres');
    console.log('3. Vérifiez et ajustez le contenu si nécessaire');
    
    return {
      success: true,
      seriesRefs
    };
  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de l\'initialisation des données:');
    console.error(error);
    return {
      success: false,
      error
    };
  }
}

// Exécuter la fonction principale
initWorksData().catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});
