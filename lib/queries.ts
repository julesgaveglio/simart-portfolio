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
    }
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
    biographyEN,
    biographyNL,
    email,
    instagram
  }
`;
