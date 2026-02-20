// Script pour créer les données dans Sanity
import { createClient } from '@sanity/client';

// Configuration du client Sanity
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN, // Vous devrez définir ce token
  useCdn: false,
});

// Fonction pour créer une série
async function createSeries(series) {
  try {
    const result = await client.create(series);
    console.log(`Série créée: ${series.title} (ID: ${result._id})`);
    return result._id;
  } catch (error) {
    console.error(`Erreur lors de la création de la série ${series.title}:`, error.message);
    return null;
  }
}

// Fonction pour créer une œuvre
async function createWork(work) {
  try {
    const result = await client.create(work);
    console.log(`Œuvre créée: ${work.title} (ID: ${result._id})`);
    return result._id;
  } catch (error) {
    console.error(`Erreur lors de la création de l'œuvre ${work.title}:`, error.message);
    return null;
  }
}

// Fonction pour créer la page About
async function createAbout(about) {
  try {
    const result = await client.create(about);
    console.log(`Page About créée (ID: ${result._id})`);
    return result._id;
  } catch (error) {
    console.error('Erreur lors de la création de la page About:', error.message);
    return null;
  }
}

// Fonction principale
async function createAllData() {
  // 1. Créer les séries
  console.log('Création des séries...');
  
  const fieldOfBecomingId = await createSeries({
    _type: 'series',
    title: 'Field of Becoming',
    slug: { _type: 'slug', current: 'field-of-becoming' },
    descriptionEN: 'Field of Becoming series explores transformation through abstract forms.',
    descriptionNL: 'Field of Becoming serie onderzoekt transformatie door abstracte vormen.',
    order: 1,
  });
  
  const innerExpectationId = await createSeries({
    _type: 'series',
    title: 'Inner Expectation',
    slug: { _type: 'slug', current: 'inner-expectation' },
    descriptionEN: 'Inner Expectation explores how inner expectations shape reality through abstract painting.',
    descriptionNL: 'Inner Expectation onderzoekt hoe innerlijke verwachtingen de werkelijkheid vormgeven door middel van abstracte schilderkunst.',
    order: 2,
  });
  
  const statesOfConnectionId = await createSeries({
    _type: 'series',
    title: 'States of Connection',
    slug: { _type: 'slug', current: 'states-of-connection' },
    descriptionEN: 'States of Connection explores the various ways we connect with ourselves and others.',
    descriptionNL: 'States of Connection verkent de verschillende manieren waarop we verbinding maken met onszelf en anderen.',
    order: 3,
  });
  
  // 2. Créer les œuvres pour Field of Becoming
  if (fieldOfBecomingId) {
    console.log('Création des œuvres pour Field of Becoming...');
    
    const fieldOfBecomingWorks = [
      {
        _type: 'work',
        title: 'ENERGY',
        slug: { _type: 'slug', current: 'energy' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'Abstract representation of energy flows.',
        descriptionNL: 'Abstracte weergave van energiestromen.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'Universe',
        slug: { _type: 'slug', current: 'universe' },
        dimensions: '120 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'Exploring the vastness of the universe through abstract forms.',
        descriptionNL: 'De uitgestrektheid van het universum verkennen door abstracte vormen.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'Limitless',
        slug: { _type: 'slug', current: 'limitless' },
        dimensions: '100 x 150 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'A representation of limitless possibilities.',
        descriptionNL: 'Een weergave van grenzeloze mogelijkheden.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'The Gap',
        slug: { _type: 'slug', current: 'the-gap' },
        dimensions: '80 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'Exploring the space between reality and perception.',
        descriptionNL: 'De ruimte tussen realiteit en perceptie verkennen.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'State of Trance',
        slug: { _type: 'slug', current: 'state-of-trance' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'Abstract representation of a trance-like state.',
        descriptionNL: 'Abstracte weergave van een trance-achtige staat.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'Deep Forest',
        slug: { _type: 'slug', current: 'deep-forest' },
        dimensions: '120 x 80 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'Inspired by the depth and mystery of forests.',
        descriptionNL: 'Geïnspireerd door de diepte en het mysterie van bossen.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'Keep the Fire Burning',
        slug: { _type: 'slug', current: 'keep-the-fire-burning' },
        dimensions: '100 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'A vibrant representation of inner passion and drive.',
        descriptionNL: 'Een levendige weergave van innerlijke passie en drive.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
      {
        _type: 'work',
        title: 'Italian Feeling',
        slug: { _type: 'slug', current: 'italian-feeling' },
        dimensions: '90 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'Inspired by the colors and atmosphere of Italy.',
        descriptionNL: 'Geïnspireerd door de kleuren en sfeer van Italië.',
        series: { _type: 'reference', _ref: fieldOfBecomingId },
      },
    ];
    
    for (const work of fieldOfBecomingWorks) {
      await createWork(work);
    }
  }
  
  // 3. Créer les œuvres pour Inner Expectation
  if (innerExpectationId) {
    console.log('Création des œuvres pour Inner Expectation...');
    
    const innerExpectationWorks = [
      {
        _type: 'work',
        title: 'Inner Expectation',
        slug: { _type: 'slug', current: 'inner-expectation-work' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'The title piece exploring how inner expectations shape our reality.',
        descriptionNL: 'Het titelstuk dat onderzoekt hoe innerlijke verwachtingen onze realiteit vormgeven.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Expecting',
        slug: { _type: 'slug', current: 'expecting' },
        dimensions: '120 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'A visual representation of anticipation and expectation.',
        descriptionNL: 'Een visuele weergave van anticipatie en verwachting.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'So Many Versions',
        slug: { _type: 'slug', current: 'so-many-versions' },
        dimensions: '100 x 150 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'Exploring the multiple versions of reality we create in our minds.',
        descriptionNL: 'De meerdere versies van de werkelijkheid verkennen die we in onze geest creëren.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Trust',
        slug: { _type: 'slug', current: 'trust' },
        dimensions: '80 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'An exploration of trust as a foundation for inner peace.',
        descriptionNL: 'Een verkenning van vertrouwen als basis voor innerlijke vrede.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Beautiful Life',
        slug: { _type: 'slug', current: 'beautiful-life' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'A celebration of life in all its beauty and complexity.',
        descriptionNL: 'Een viering van het leven in al zijn schoonheid en complexiteit.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Mind Sex',
        slug: { _type: 'slug', current: 'mind-sex' },
        dimensions: '120 x 80 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'Exploring the intimate connection between minds.',
        descriptionNL: 'De intieme verbinding tussen geesten verkennen.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Bliss',
        slug: { _type: 'slug', current: 'bliss' },
        dimensions: '100 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'A representation of pure joy and contentment.',
        descriptionNL: 'Een weergave van pure vreugde en tevredenheid.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Miss You',
        slug: { _type: 'slug', current: 'miss-you' },
        dimensions: '90 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2023',
        status: 'available',
        descriptionEN: 'Exploring the emotion of longing and absence.',
        descriptionNL: 'De emotie van verlangen en afwezigheid verkennen.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
      {
        _type: 'work',
        title: 'Joyful',
        slug: { _type: 'slug', current: 'joyful' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2023',
        status: 'available',
        descriptionEN: 'A vibrant celebration of joy and happiness.',
        descriptionNL: 'Een levendige viering van vreugde en geluk.',
        series: { _type: 'reference', _ref: innerExpectationId },
      },
    ];
    
    for (const work of innerExpectationWorks) {
      await createWork(work);
    }
  }
  
  // 4. Créer les œuvres pour States of Connection
  if (statesOfConnectionId) {
    console.log('Création des œuvres pour States of Connection...');
    
    const statesOfConnectionWorks = [
      {
        _type: 'work',
        title: 'States of Connection',
        slug: { _type: 'slug', current: 'states-of-connection-work' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'The title piece exploring various states of human connection.',
        descriptionNL: 'Het titelstuk dat verschillende staten van menselijke verbinding verkent.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
      {
        _type: 'work',
        title: 'Positivity',
        slug: { _type: 'slug', current: 'positivity' },
        dimensions: '120 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2025',
        status: 'available',
        descriptionEN: 'A celebration of positive energy and its impact on connections.',
        descriptionNL: 'Een viering van positieve energie en de impact ervan op verbindingen.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
      {
        _type: 'work',
        title: 'The Power of Love',
        slug: { _type: 'slug', current: 'the-power-of-love' },
        dimensions: '100 x 150 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'Exploring the transformative power of love in human connections.',
        descriptionNL: 'De transformerende kracht van liefde in menselijke verbindingen verkennen.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
      {
        _type: 'work',
        title: 'Tolerance',
        slug: { _type: 'slug', current: 'tolerance' },
        dimensions: '80 x 120 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2024',
        status: 'available',
        descriptionEN: 'A visual exploration of tolerance as a foundation for meaningful connections.',
        descriptionNL: 'Een visuele verkenning van tolerantie als basis voor betekenisvolle verbindingen.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
      {
        _type: 'work',
        title: 'Open Your Heart',
        slug: { _type: 'slug', current: 'open-your-heart' },
        dimensions: '100 x 100 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2023',
        status: 'available',
        descriptionEN: 'Encouraging vulnerability and openness in connections.',
        descriptionNL: 'Het aanmoedigen van kwetsbaarheid en openheid in verbindingen.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
      {
        _type: 'work',
        title: "Let's Get Together",
        slug: { _type: 'slug', current: 'lets-get-together' },
        dimensions: '120 x 80 cm',
        medium: 'works.medium.acrylicOnCanvas',
        year: '2023',
        status: 'available',
        descriptionEN: 'A celebration of community and togetherness.',
        descriptionNL: 'Een viering van gemeenschap en saamhorigheid.',
        series: { _type: 'reference', _ref: statesOfConnectionId },
      },
    ];
    
    for (const work of statesOfConnectionWorks) {
      await createWork(work);
    }
  }
  
  // 5. Créer la page About
  console.log('Création de la page About...');
  
  await createAbout({
    _type: 'about',
    name: 'Simone Roodselaar',
    biographyEN: 'Simone Roodselaar (SiemArt) explores how inner expectation shapes reality through abstract painting. Her monumental, layered works exist as visual fields in which transformation and awareness can emerge.\n\nBorn in The Netherlands\nWorks available internationally',
    biographyNL: 'Simone Roodselaar (SiemArt) onderzoekt hoe innerlijke verwachting de realiteit vormt door middel van abstracte schilderkunst. Haar monumentale, gelaagde werken bestaan als visuele velden waarin transformatie en bewustzijn kunnen ontstaan.\n\nGeboren in Nederland\nWerken internationaal beschikbaar',
    email: 'info@siemart.com',
    instagram: 'https://www.instagram.com/siemart',
  });
  
  console.log('Création des données terminée !');
}

// Exécuter la fonction principale
createAllData().catch(console.error);
