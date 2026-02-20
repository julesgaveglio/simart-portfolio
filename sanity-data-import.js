// Script pour importer les données dans Sanity
const { createClient } = require('@sanity/client');

// Configuration du client Sanity
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN, // Vous devrez définir ce token
  useCdn: false,
});

// Données des séries
const series = [
  {
    _type: 'series',
    title: 'Field of Becoming',
    slug: { _type: 'slug', current: 'field-of-becoming' },
    descriptionEN: 'Field of Becoming series explores transformation through abstract forms.',
    descriptionNL: 'Field of Becoming serie onderzoekt transformatie door abstracte vormen.',
    order: 1,
  },
  {
    _type: 'series',
    title: 'Inner Expectation',
    slug: { _type: 'slug', current: 'inner-expectation' },
    descriptionEN: 'Inner Expectation explores how inner expectations shape reality through abstract painting.',
    descriptionNL: 'Inner Expectation onderzoekt hoe innerlijke verwachtingen de werkelijkheid vormgeven door middel van abstracte schilderkunst.',
    order: 2,
  },
  {
    _type: 'series',
    title: 'States of Connection',
    slug: { _type: 'slug', current: 'states-of-connection' },
    descriptionEN: 'States of Connection explores the various ways we connect with ourselves and others.',
    descriptionNL: 'States of Connection verkent de verschillende manieren waarop we verbinding maken met onszelf en anderen.',
    order: 3,
  },
];

// Données des œuvres pour Field of Becoming
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
  },
];

// Données des œuvres pour Inner Expectation
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
  },
];

// Données des œuvres pour States of Connection
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
  },
];

// Données pour la page About
const aboutData = {
  _type: 'about',
  name: 'Simone Roodselaar',
  biographyEN: 'Simone Roodselaar (SiemArt) explores how inner expectation shapes reality through abstract painting. Her monumental, layered works exist as visual fields in which transformation and awareness can emerge.\n\nBorn in The Netherlands\nWorks available internationally',
  biographyNL: 'Simone Roodselaar (SiemArt) onderzoekt hoe innerlijke verwachting de realiteit vormt door middel van abstracte schilderkunst. Haar monumentale, gelaagde werken bestaan als visuele velden waarin transformatie en bewustzijn kunnen ontstaan.\n\nGeboren in Nederland\nWerken internationaal beschikbaar',
  email: 'info@siemart.com',
  instagram: 'https://www.instagram.com/siemart',
};

// Fonction pour créer les séries
async function createSeries() {
  console.log('Création des séries...');
  const seriesIds = {};
  
  for (const seriesItem of series) {
    try {
      const result = await client.create(seriesItem);
      console.log(`Série créée: ${result.title} (ID: ${result._id})`);
      seriesIds[seriesItem.slug.current] = result._id;
    } catch (error) {
      console.error(`Erreur lors de la création de la série ${seriesItem.title}:`, error);
    }
  }
  
  return seriesIds;
}

// Fonction pour créer les œuvres
async function createWorks(seriesIds) {
  console.log('Création des œuvres...');
  
  // Ajouter les références de série aux œuvres
  const addSeriesRef = (works, seriesId) => {
    return works.map(work => ({
      ...work,
      series: {
        _type: 'reference',
        _ref: seriesId
      }
    }));
  };
  
  // Créer les œuvres pour chaque série
  const createWorksForSeries = async (works, seriesName) => {
    for (const work of works) {
      try {
        const result = await client.create(work);
        console.log(`Œuvre créée: ${work.title} (ID: ${result._id})`);
      } catch (error) {
        console.error(`Erreur lors de la création de l'œuvre ${work.title}:`, error);
      }
    }
  };
  
  // Créer les œuvres pour chaque série
  await createWorksForSeries(addSeriesRef(fieldOfBecomingWorks, seriesIds['field-of-becoming']), 'Field of Becoming');
  await createWorksForSeries(addSeriesRef(innerExpectationWorks, seriesIds['inner-expectation']), 'Inner Expectation');
  await createWorksForSeries(addSeriesRef(statesOfConnectionWorks, seriesIds['states-of-connection']), 'States of Connection');
}

// Fonction pour créer la page About
async function createAbout() {
  console.log('Création de la page About...');
  try {
    const result = await client.create(aboutData);
    console.log(`Page About créée (ID: ${result._id})`);
  } catch (error) {
    console.error('Erreur lors de la création de la page About:', error);
  }
}

// Fonction principale
async function importData() {
  try {
    // Créer les séries
    const seriesIds = await createSeries();
    
    // Créer les œuvres
    await createWorks(seriesIds);
    
    // Créer la page About
    await createAbout();
    
    console.log('Importation terminée avec succès!');
  } catch (error) {
    console.error('Erreur lors de l\'importation des données:', error);
  }
}

// Exécuter l'importation
importData();
