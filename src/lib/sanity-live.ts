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
  // Récupérer le document une seule fois au lieu de s'abonner
  liveClient.fetch(`*[_id == $id][0]`, { id }).then(result => {
    if (result) {
      callback(result);
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
  // Récupérer les documents une seule fois au lieu de s'abonner
  liveClient.fetch(`*[_type == $type]`, { type }).then(result => {
    if (result && Array.isArray(result)) {
      callback(result);
    }
  });
  
  // Retourner un objet avec une méthode unsubscribe simulée
  return {
    unsubscribe: () => {
      // Ne rien faire
    }
  };
}
