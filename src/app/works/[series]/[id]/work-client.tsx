'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Work } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';

export default function WorkClient({ work, seriesSlug }: { work: Work; seriesSlug: string }) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm text-gray-500">
        <Link href="/works" className="hover:underline">WORKS</Link>
        <span className="mx-2">/</span>
        <Link href={`/works/${seriesSlug}`} className="hover:underline">{work.series.title.toUpperCase()}</Link>
        <span className="mx-2">/</span>
        <span>{work.title.toUpperCase()}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Image de l'œuvre (côté gauche) */}
        <div className="w-full md:w-3/5 bg-gray-100 relative">
          {work.image ? (
            <Image 
              src={getSanityImageUrl(work.image)}
              alt={work.title}
              width={600}
              height={450}
              className="w-full h-auto"
              priority
            />
          ) : (
            <div className="aspect-[4/3] flex items-center justify-center text-gray-400">
              No Image Available
            </div>
          )}
        </div>

        {/* Détails de l'œuvre (côté droit) */}
        <div className="w-full md:w-2/5">
          <h1 className="text-3xl mb-6">{work.title}</h1>
          
          <div className="mb-6 space-y-1 text-gray-600">
            <p>{work.dimensions}</p>
            <p>{work.year}</p>
            <p>Acrylic and mixed media on canvas</p>
            <p>Available</p>
          </div>
          
          <p className="mb-8 text-gray-600">{work.descriptionEN}</p>
          
          <Link href={`/works/${seriesSlug}`} className="text-sm flex items-center">
            <span className="mr-2">←</span> {work.series.title}
          </Link>
        </div>
      </div>
    </div>
  );
}
