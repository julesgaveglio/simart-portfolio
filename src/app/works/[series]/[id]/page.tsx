'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSeriesById, getWorkById } from '@/data/works';

export default function WorkPage() {
  const params = useParams();
  const seriesId = params.series as string;
  const workId = params.id as string;
  const { t } = useLanguage();

  // Vérifier si la série existe
  const series = getSeriesById(seriesId);
  if (!series) {
    return <div className="pt-24 px-8">Series not found</div>;
  }

  // Trouver l'œuvre spécifique
  const work = getWorkById(seriesId, workId);
  if (!work) {
    return <div className="pt-24 px-8">Work not found</div>;
  }

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm">
        <Link href="/works" className="hover:underline">{t('works.pageTitle')}</Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${seriesId}`} className="hover:underline">{t(series.title)}</Link>
        <span className="mx-2">/</span>
        <span>{work.title}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Image de l'œuvre (côté gauche) */}
        <div className="w-full md:w-2/3 bg-gray-200 aspect-[4/3] relative">
          <Image 
            src={work.imagePath} 
            alt={work.title}
            fill
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-contain"
            priority
          />
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
          
          <p className="mb-8">{work.description && t(work.description)}</p>
          
          <Link href={`/works/${seriesId}`} className="text-sm underline">
            {t('works.backToWorks')}
          </Link>
        </div>
      </div>
    </div>
  );
}
