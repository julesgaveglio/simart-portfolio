import { getAllSeries, getAllWorks } from '@/lib/sanityActions';
import WorksClientRouter from './works-client-router';

export default async function Works() {
  // Récupérer toutes les séries et toutes les œuvres pour le routage côté client
  const seriesData = await getAllSeries();
  const worksData = await getAllWorks();
  
  // Utiliser le routeur client pour gérer les routes dynamiques
  return <WorksClientRouter allSeries={seriesData} allWorks={worksData} />;
}
