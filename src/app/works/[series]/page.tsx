import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSeriesBySlug, getSanityImageUrl } from '@/lib/sanityActions';
import { Series, Work } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';

type Props = {
  params: { series: string }
};

export default async function SeriesPage({ params }: Props) {
  const slug = params.series;
  
  // Récupérer la série depuis Sanity
  const series = await getSeriesBySlug(slug);
  
  // Si la série n'existe pas, afficher une page 404
  if (!series) {
    notFound();
  }
  
  return (
    <SeriesClient series={series} />
  );
}

// Client component pour gérer le contexte de langue
'use client';

function SeriesClient({ series }: { series: Series }) {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm">
        <Link href="/works" className="hover:underline">{t('works.pageTitle')}</Link>
        <span className="mx-2">/</span>
        <span>{t(series.title)}</span>
      </div>

      <h1 className="text-2xl mb-4">{t(series.title)}</h1>
      <p className="mb-8">{series.descriptionEN ? t(series.descriptionEN) : ''}</p>

      {/* Grille d'œuvres */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {series.works && series.works.map((work) => (
          <Link key={work._id} href={`/works/${series.slug}/${work.slug}`}>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
