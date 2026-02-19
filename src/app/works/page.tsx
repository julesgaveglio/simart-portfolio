'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getAllSeries } from '@/data/works';

export default function Works() {
  const { t } = useLanguage();
  const allSeries = getAllSeries();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-12">{t('works.pageTitle')}</h1>
      
      <div className="space-y-16">
        {allSeries.map((series) => (
          <div key={series.id} className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-gray-200 aspect-[4/3] relative overflow-hidden">
              <Image 
                src={series.coverImage} 
                alt={t(series.title)}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="text-xl mb-2">{t(series.title)}</h2>
              <p className="text-sm mb-1">{series.works[0].year}</p>
              <p className="mb-6">{t(series.description)}</p>
              <Link 
                href={`/works/${series.id}`}
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
