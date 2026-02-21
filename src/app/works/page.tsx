import { getAllSeries } from '@/lib/sanityActions';
import SeriesListClient from './series-list-client';

export default async function Works() {
  const seriesData = await getAllSeries();
  
  return <SeriesListClient seriesData={seriesData} />;
}
