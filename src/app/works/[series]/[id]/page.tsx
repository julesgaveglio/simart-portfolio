import { notFound } from 'next/navigation';
import { getWorkBySlug } from '@/lib/sanityActions';
import WorkClient from './work-client';

type Props = {
  params: { series: string; id: string }
};

export default async function WorkPage({ params }: Props) {
  const seriesSlug = params.series;
  const workSlug = params.id;
  
  // Récupérer l'œuvre depuis Sanity
  const work = await getWorkBySlug(workSlug);
  
  // Si l'œuvre n'existe pas, afficher une page 404
  if (!work) {
    notFound();
  }
  
  return <WorkClient work={work} seriesSlug={seriesSlug} />;
}
