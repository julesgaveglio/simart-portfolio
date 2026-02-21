import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './sanity';

// Version simplifiée du client Sanity sans abonnements en temps réel
// pour éviter le problème de chargement infini
export const liveClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Fonction simulée pour s'abonner aux changements d'un document
export function subscribeToDocument(id: string, callback: (update: any) => void) {
  // Détecter si c'est une série pour inclure les œuvres associées
  liveClient.fetch(`*[_id == $id][0]._type`, { id }).then(docType => {
    if (docType === 'series') {
      // Pour les séries, utiliser la requête complète qui inclut les œuvres
      liveClient.fetch(`*[_id == $id][0] {
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
          descriptionNL,
          "series": series->{
            _id,
            title,
            "slug": slug.current
          }
        }[0...100]
      }`, { id }).then(result => {
        if (result) {
          callback(result);
        }
      });
    } else {
      // Pour les autres types de documents, utiliser la requête simple
      liveClient.fetch(`*[_id == $id][0]`, { id }).then(result => {
        if (result) {
          callback(result);
        }
      });
    }
  });
  
  // Retourner un objet avec une méthode unsubscribe simulée
  return {
    unsubscribe: () => {
      // Ne rien faire
    }
  };
}

// Fonction simulée pour s'abonner aux changements d'un type de document
export function subscribeToType(type: string, callback: (updates: any[]) => void) {
  // Utiliser des requêtes spécifiques selon le type de document
  if (type === 'series') {
    // Pour les séries, inclure les œuvres associées
    liveClient.fetch(`*[_type == "series"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      descriptionEN,
      descriptionNL,
      order,
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
        descriptionNL,
        "series": series->{
          _id,
          title,
          "slug": slug.current
        }
      }[0...100]
    }`).then(result => {
      if (result && Array.isArray(result)) {
        callback(result);
      }
    });
  } else {
    // Pour les autres types de documents, utiliser la requête simple
    liveClient.fetch(`*[_type == $type]`, { type }).then(result => {
      if (result && Array.isArray(result)) {
        callback(result);
      }
    });
  }
  
  // Retourner un objet avec une méthode unsubscribe simulée
  return {
    unsubscribe: () => {
      // Ne rien faire
    }
  };
}
