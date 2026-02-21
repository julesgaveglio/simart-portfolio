import { createClient } from '@sanity/client';
import { projectId, dataset, apiVersion } from './sanity';

// Client Sanity avec support des abonnements en temps réel
export const liveClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  token: process.env.SANITY_API_TOKEN,
  // Activer les abonnements en temps réel
  stega: {
    enabled: false,
    studioUrl: '/studio',
  },
});

// Fonction pour s'abonner aux changements d'un document
export function subscribeToDocument(id: string, callback: (update: any) => void) {
  return liveClient
    .listen(`*[_id == $id]`, { id })
    .subscribe((update) => {
      // Vérifier si le document a été supprimé
      if (update.type === 'mutation' && update.transition === 'disappear') {
        callback({ deleted: true, id });
      } else if (update.result) {
        // Document mis à jour ou créé
        callback(update.result);
      }
    });
}

// Fonction pour s'abonner aux changements d'un type de document
export function subscribeToType(type: string, callback: (updates: any[]) => void) {
  return liveClient
    .listen(`*[_type == $type]`, { type })
    .subscribe((update) => {
      if (update.type === 'mutation') {
        // Récupérer tous les documents du type après une mutation
        liveClient.fetch(`*[_type == $type]`, { type }).then(callback);
      }
    });
}
