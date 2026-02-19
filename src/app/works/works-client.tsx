'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import { Series } from '@/lib/types';

export default function WorksClient({ seriesData }: { seriesData: Series[] }) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-12">{t('works.pageTitle')}</h1>
      
      <div className="space-y-16">
        {seriesData.map((series) => (
          <div key={series._id} className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-gray-200 aspect-[4/3] relative overflow-hidden">
              {series.coverImage ? (
                <Image 
                  src={getSanityImageUrl(series.coverImage)}
                  alt={series.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  No Image Available
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl mb-2">{t(series.title)}</h2>
              {/* Afficher l'année du premier travail si disponible */}
              {series.works && series.works.length > 0 && (
                <p className="text-sm mb-1">{series.works[0].year}</p>
              )}
              <p className="mb-6">{series.descriptionEN ? t(series.descriptionEN) : ''}</p>
              <Link 
                href={`/works/${series.slug}`}
                className="text-sm underline"
              >
                {t('works.viewSeries')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
