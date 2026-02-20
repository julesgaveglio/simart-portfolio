'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import { Series } from '@/lib/types';

export default function SeriesListClient({ seriesData }: { seriesData: Series[] }) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-12">WORKS</h1>
      
      <div className="flex flex-col gap-8">
        {seriesData.map((series) => (
          <Link 
            key={series._id} 
            href={`/works/${series.slug}`}
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
    </div>
  );
}
