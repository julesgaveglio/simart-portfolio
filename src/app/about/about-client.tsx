'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import type { About as AboutType } from '@/lib/types';
import { PortableText } from '@portabletext/react';

export default function AboutClient({ aboutInfo }: { aboutInfo: AboutType }) {
  const { t, language } = useLanguage();
  
  // Sélectionner la biographie en fonction de la langue
  const biography = language === 'en' ? aboutInfo.biographyEN : aboutInfo.biographyNL;

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image de l'artiste (côté gauche) */}
        <div className="w-full md:w-1/2 aspect-[3/4] relative mb-8 md:mb-0">
          {aboutInfo.profileImage ? (
            <Image 
              src={getSanityImageUrl(aboutInfo.profileImage)}
              alt={aboutInfo.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Artist Portrait Placeholder</span>
            </div>
          )}
        </div>

        {/* Biographie et informations (côté droit) */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl mb-6">{t('about.pageTitle')}</h1>
          
          <div className="space-y-4 mb-8 prose prose-sm max-w-none">
            {biography && (
              <PortableText 
                value={biography}
                components={{
                  block: {
                    normal: ({children}: any) => <p className="text-base">{children}</p>,
                  }
                }}
              />
            )}
          </div>
          
          {/* Informations de contact */}
          {(aboutInfo.email || aboutInfo.instagram) && (
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">{t('about.contact')}</h2>
              <div className="space-y-1">
                {aboutInfo.email && (
                  <p className="text-sm">
                    <span className="font-medium">Email:</span> {aboutInfo.email}
                  </p>
                )}
                {aboutInfo.instagram && (
                  <p className="text-sm">
                    <span className="font-medium">Instagram:</span> <a href={aboutInfo.instagram} target="_blank" rel="noopener noreferrer" className="underline">{aboutInfo.instagram.replace('https://www.instagram.com/', '@')}</a>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
