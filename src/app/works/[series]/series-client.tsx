'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Series, Work } from '@/lib/types';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import { useSanityLiveDocument } from '@/hooks/useSanityLiveQuery';
import { useRouter } from 'next/navigation';

export default function SeriesClient({ series: initialSeries }: { series: Series }) {
  const { t } = useLanguage();
  const router = useRouter();
  const [series, setSeries] = useState<Series>(initialSeries);
  
  // Utiliser le hook de synchronisation en temps réel pour la série
  const { data: liveSeries, isDeleted, isLoading } = useSanityLiveDocument<Series>(initialSeries._id, initialSeries);
  
  // Mettre à jour les données lorsque des changements sont détectés
  useEffect(() => {
    if (liveSeries) {
      setSeries(liveSeries);
    }
    
    // Rediriger vers la page des works si la série est supprimée
    if (isDeleted) {
      router.push('/works');
    }
  }, [liveSeries, isDeleted, router]);
  
  // Filtrer les œuvres supprimées (celles qui n'ont pas d'ID)
  const availableWorks = series.works?.filter(work => work._id) || [];
  
  if (isLoading) {
    return (
      <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto flex justify-center items-center">
        <div className="animate-pulse text-gray-500">Chargement...</div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      {/* Fil d'Ariane */}
      <div className="mb-8 text-sm text-gray-500">
        <Link href="/works" className="hover:underline">WORKS</Link>
        <span className="mx-2">/</span>
        <span>{series.title.toUpperCase()}</span>
      </div>

      <h1 className="text-3xl mb-4">{series.title}</h1>
      <p className="mb-12 text-gray-600">{series.descriptionEN}</p>

      {/* Grille d'œuvres */}
      {availableWorks.length === 0 ? (
        <div className="text-center py-12">
          <p>Aucune œuvre disponible dans cette série</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {availableWorks.map((work) => (
            <Link key={work._id} href={`/works/${series.slug.current}/${work.slug.current}`}>
              <div className="group">
                <div className="bg-gray-100 aspect-square relative overflow-hidden mb-3">
                  {work.image ? (
                    <Image 
                      src={getSanityImageUrl(work.image)}
                      alt={work.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No Image Available
                    </div>
                  )}
                </div>
                <h3 className="text-base font-medium">{work.title}</h3>
                <p className="text-sm text-gray-500">{work.dimensions}</p>
                <p className="text-sm text-gray-500">{work.status === 'available' ? 'Available' : 'Sold'}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      
      {availableWorks.length > 0 && (
        <div className="mt-8 text-sm">
          <p className="text-gray-500">
            {`1 / ${Math.ceil(availableWorks.length / 4)}`}
            <span className="ml-2">→</span>
          </p>
        </div>
      )}
    </div>
  );
}
