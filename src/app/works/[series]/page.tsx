'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import works, { getSeriesById } from '@/data/works';

export default function SeriesPage() {
  const params = useParams();
  const seriesId = params.series as string;
  const { t } = useLanguage();

  // Vérifier si la série existe
  const series = getSeriesById(seriesId);
  if (!series) {
    return <div className="pt-24 px-8">Series not found</div>;
  }

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm">
        <Link href="/works" className="hover:underline">{t('works.pageTitle')}</Link>
        <span className="mx-2">/</span>
        <span>{t(series.title)}</span>
      </div>

      <h1 className="text-2xl mb-4">{t(series.title)}</h1>
      <p className="mb-8">{t(series.description)}</p>

      {/* Grille d'œuvres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {series.works.map((work) => (
          <Link key={work.id} href={`/works/${seriesId}/${work.id}`}>
            <div className="group">
              <div className="bg-gray-200 aspect-square relative overflow-hidden mb-2">
                <Image 
                  src={work.imagePath} 
                  alt={work.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base group-hover:underline">{work.title}</h3>
              <p className="text-sm">{work.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
