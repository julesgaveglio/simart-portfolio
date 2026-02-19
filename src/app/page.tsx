'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative h-screen w-full">
      {/* Image plein écran */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full bg-gray-200">
          {/* Placeholder pour l'image - à remplacer par une vraie image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Placeholder Image
          </div>
        </div>
      </div>

      {/* Texte centré en bas */}
      <div className="absolute bottom-20 left-0 w-full text-center">
        <h1 className="text-3xl font-normal mb-2">SIMONE ROODSELAAR | SIEMART</h1>
        <p className="text-lg">{t('home.subtitle')}</p>
      </div>

      {/* Flèche de défilement */}
      <div className="absolute bottom-8 left-0 w-full flex justify-center">
        <Link href="/works" className="flex flex-col items-center">
          <span className="mb-2 text-sm">{t('home.scrollDown')}</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
