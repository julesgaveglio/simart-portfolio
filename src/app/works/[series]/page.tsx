import { notFound } from 'next/navigation';
import { getSeriesBySlug } from '@/lib/sanityActions';
import SeriesClient from './series-client';

type Props = {
  params: { series: string }
};

export default async function SeriesPage({ params }: Props) {
  const slug = params.series;
  
  // Récupérer la série depuis Sanity
  const series = await getSeriesBySlug(slug);
  
  // Si la série n'existe pas, afficher une page 404
  if (!series) {
    notFound();
  }
  
  return <SeriesClient series={series} />;
}
