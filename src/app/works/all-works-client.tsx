'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import { Work } from '@/lib/types';

export default function AllWorksClient({ works }: { works: Work[] }) {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <h1 className="text-2xl mb-12">{t('works.pageTitle')}</h1>
      
      {/* Grille d'œuvres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((work) => (
          <Link 
            key={work._id} 
            href={`/works/${work.series?.slug}/${work.slug}`}
          >
            <div className="group">
              <div className="bg-gray-200 aspect-square relative overflow-hidden mb-2">
                {work.image ? (
                  <Image 
                    src={getSanityImageUrl(work.image)}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    No Image Available
                  </div>
                )}
              </div>
              <h3 className="text-base group-hover:underline">{work.title}</h3>
              <p className="text-sm">{work.year}</p>
              {work.series && (
                <p className="text-xs text-gray-500">{work.series.title}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
