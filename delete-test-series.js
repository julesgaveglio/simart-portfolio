import { createClient } from '@sanity/client';

// Configuration du client Sanity
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN, // Vous devrez définir ce token
  useCdn: false,
});

async function deleteOkSeries() {
  // 1. Trouver la série 'ok'
  const series = await client.fetch('*[_type == "series" && slug.current == "ok"][0]');
  
  if (series) {
    console.log(`Série trouvée: ${series.title} (ID: ${series._id})`);
    
    // 2. Trouver toutes les œuvres qui font référence à cette série
    const works = await client.fetch('*[_type == "work" && references($seriesId)]', {
      seriesId: series._id
    });
    
    console.log(`Nombre d'œuvres liées à cette série: ${works.length}`);
    
    // 3. Supprimer toutes ces œuvres
    for (const work of works) {
      console.log(`Suppression de l'œuvre: ${work.title} (ID: ${work._id})`);
      await client.delete(work._id);
    }
    
    // 4. Maintenant que toutes les références sont supprimées, supprimer la série
    console.log(`Suppression de la série: ${series.title} (ID: ${series._id})`);
    await client.delete(series._id);
    
    console.log('Suppression terminée avec succès');
  } else {
    console.log('Série "ok" non trouvée');
  }
}

deleteOkSeries().catch(console.error);
