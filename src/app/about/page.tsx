'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 px-8 pb-16 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Image de l'artiste (côté gauche) */}
        <div className="w-full md:w-1/2 bg-gray-200 aspect-[3/4] flex items-center justify-center mb-8 md:mb-0">
          <span className="text-gray-400">Artist Portrait Placeholder</span>
        </div>

        {/* Biographie et informations (côté droit) */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl mb-6">{t('about.pageTitle')}</h1>
          
          <div className="space-y-4 mb-8">
            {t('about.biography').map((paragraph: string, index: number) => (
              <p key={index} className="text-base">{paragraph}</p>
            ))}
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">{t('about.education')}</h2>
            <ul className="list-none space-y-1">
              {t('about.educationList').map((item: string, index: number) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-lg font-medium mb-2">{t('about.exhibitions')}</h2>
            <ul className="list-none space-y-1">
              {t('about.exhibitionsList').map((item: string, index: number) => (
                <li key={index} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
