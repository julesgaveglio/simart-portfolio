'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import { Series } from '@/lib/types';
import { useSanityLiveQuery } from '@/hooks/useSanityLiveQuery';

export default function SeriesListClient({ seriesData }: { seriesData: Series[] }) {
  const { t } = useLanguage();
  const [series, setSeries] = useState<Series[]>(seriesData);
  
  // Utiliser le hook de synchronisation en temps réel pour les séries
  const { data: liveSeries, isLoading } = useSanityLiveQuery<Series>('series', seriesData);
  
  // Mettre à jour les données lorsque des changements sont détectés
  useEffect(() => {
    if (liveSeries && liveSeries.length > 0) {
      setSeries(liveSeries);
    }
  }, [liveSeries]);

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-12">WORKS</h1>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-pulse text-gray-500">Chargement...</div>
        </div>
      ) : series.length === 0 ? (
        <div className="text-center py-12">
          <p>Aucune série disponible</p>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {series.map((series) => (
            <Link 
              key={series._id} 
              href={`/works/${series.slug.current}`}
              className="block w-full"
            >
              <div className="group relative w-full h-[220px] overflow-hidden bg-gray-300">
                {/* Image de fond */}
                <div className="absolute inset-0 w-full h-full">
                  {series.coverImage ? (
                    <Image 
                      src={getSanityImageUrl(series.coverImage)}
                      alt={series.title}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300"></div>
                  )}
                  {/* Overlay semi-transparent pour améliorer la lisibilité du texte */}
                  <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-700 ease-in-out"></div>
                </div>
                
                {/* Texte superposé */}
                <div className="absolute inset-0 flex flex-col justify-center p-8">
                  <h2 className="text-2xl font-medium text-white">{series.title}</h2>
                  <p className="text-sm text-gray-100">
                    {series.descriptionEN ? series.descriptionEN : ''}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
