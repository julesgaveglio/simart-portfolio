import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getWorkBySlug, getSanityImageUrl } from '@/lib/sanityActions';
import { Work } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

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
  
  return (
    <WorkClient work={work} seriesSlug={seriesSlug} />
  );
}

// Client component pour gérer le contexte de langue
'use client';

function WorkClient({ work, seriesSlug }: { work: Work; seriesSlug: string }) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm">
        <Link href="/works" className="hover:underline">{t('works.pageTitle')}</Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${seriesSlug}`} className="hover:underline">{t(work.series.title)}</Link>
        <span className="mx-2">/</span>
        <span>{work.title}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Image de l'œuvre (côté gauche) */}
        <div className="w-full md:w-2/3 bg-gray-200 aspect-[4/3] relative">
          {work.image ? (
            <Image 
              src={getSanityImageUrl(work.image)}
              alt={work.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>

        {/* Détails de l'œuvre (côté droit) */}
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl mb-4">{work.title}</h1>
          
          <div className="mb-6 space-y-2">
            <p><span className="font-medium">{t('works.year')}:</span> {work.year}</p>
            <p><span className="font-medium">{t('works.dimensions')}:</span> {work.dimensions}</p>
            <p><span className="font-medium">{t('works.medium')}:</span> {t(work.medium)}</p>
            <p><span className="font-medium">{t('works.status')}:</span> {t(`works.${work.status}`)}</p>
          </div>
          
          <p className="mb-8">{work.descriptionEN && t(work.descriptionEN)}</p>
          
          <Link href={`/works/${seriesSlug}`} className="text-sm underline">
            {t('works.backToWorks')}
          </Link>
        </div>
      </div>
    </div>
  );
}
