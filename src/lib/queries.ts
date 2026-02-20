// Requêtes GROQ pour Sanity

// Récupérer toutes les séries
export const allSeriesQuery = `
  *[_type == "series"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    descriptionEN,
    descriptionNL,
    order
  }
`;

// Récupérer une série spécifique par slug
export const seriesBySlugQuery = `
  *[_type == "series" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    coverImage,
    descriptionEN,
    descriptionNL,
    "works": *[_type == "work" && references(^._id)] | order(year desc) {
      _id,
      title,
      "slug": slug.current,
      image,
      dimensions,
      medium,
      year,
      status,
      descriptionEN,
      descriptionNL
    }[0...100]
  }
`;

// Récupérer une œuvre spécifique par slug
export const workBySlugQuery = `
  *[_type == "work" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    image,
    "series": series->{
      _id,
      title,
      "slug": slug.current
    },
    dimensions,
    medium,
    year,
    status,
    descriptionEN,
    descriptionNL
  }
`;

// Récupérer les informations de la page About
export const aboutQuery = `
  *[_type == "about"][0] {
    name,
    profileImage,
    monumentalWorkImage,
    biographyEN,
    biographyNL,
    birthPlace,
    availability,
    acquisitionNote,
    email,
    instagram
  }
`;

// Récupérer tous les travaux
export const allWorksQuery = `
  *[_type == "work"] | order(year desc) {
    _id,
    title,
    "slug": slug.current,
    image,
    "series": series->{
      _id,
      title,
      "slug": slug.current
    },
    dimensions,
    medium,
    year,
    status,
    descriptionEN,
    descriptionNL
  }[0...100]
`;

// Récupérer les informations de contact
export const contactQuery = `
  *[_type == "contact"][0] {
    _id,
    title,
    pageDescriptionEN,
    pageDescriptionNL,
    
    // Coordonnées
    contactInfoTitle,
    email,
    phone,
    studioAddress,
    openingHours,
    
    // Réseaux sociaux
    socialMediaTitle,
    instagram,
    instagramLabel,
    
    // Formulaire
    formTitle,
    nameFieldLabel,
    emailFieldLabel,
    messageFieldLabel,
    submitButtonTextEN,
    submitButtonTextNL,
    submittingButtonTextEN,
    submittingButtonTextNL,
    thankYouMessageEN,
    thankYouMessageNL,
    errorMessageEN,
    errorMessageNL,
    
    // Texte d'acquisition
    acquisitionText,
    
    // Configuration pour les tests
    testingEmail,
    useTestingEmail,
    emailjsServiceId,
    emailjsTemplateId,
    emailjsPublicKey
  }
`;
