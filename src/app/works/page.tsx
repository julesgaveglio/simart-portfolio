import { getAllSeries } from '@/lib/sanityActions';
import SeriesListClient from './series-list-client';

export default async function Works() {
  // Récupérer toutes les séries depuis Sanity
  const seriesData = await getAllSeries();

  return <SeriesListClient seriesData={seriesData} />;
}
