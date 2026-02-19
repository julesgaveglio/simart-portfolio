import { getAllSeries } from '@/lib/sanityActions';
import WorksClient from './works-client';

export default async function Works() {
  // Récupérer les séries depuis Sanity
  const seriesData = await getAllSeries();

  return <WorksClient seriesData={seriesData} />;
}
