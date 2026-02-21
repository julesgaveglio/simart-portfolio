'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { getSanityImageUrl } from '@/lib/sanityActions';
import type { About as AboutType } from '@/lib/types';
import { PortableText } from '@portabletext/react';

export default function AboutClient({ aboutInfo }: { aboutInfo: AboutType }) {
  const { language } = useLanguage();
  
  // Select biography based on language
  const biography = language === 'en' ? aboutInfo.biographyEN : aboutInfo.biographyNL;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-[Calibri,sans-serif] pt-24 pb-24">
      {/* Hero section with monumental work image */}
      <div className="w-full relative h-[70vh] mb-16">
        {aboutInfo.monumentalWorkImage ? (
          <Image 
            src={getSanityImageUrl(aboutInfo.monumentalWorkImage)}
            alt={`${aboutInfo.name} with monumental work`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
            <span className="text-zinc-400">Monumental Work Image</span>
          </div>
        )}
      </div>
      
      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left column - Artist info */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-light mb-12 tracking-wide">{aboutInfo.name}</h1>
            
            {/* Artist statement */}
            <div className="mb-16 text-lg leading-relaxed tracking-wide">
              {biography && (
                <PortableText 
                  value={biography}
                  components={{
                    block: {
                      normal: ({children}: any) => <p className="mb-6">{children}</p>,
                    }
                  }}
                />
              )}
            </div>
            
            {/* Artist details */}
            <div className="space-y-2 mb-16">
              {aboutInfo.birthPlace && (
                <p className="text-lg">{aboutInfo.birthPlace}</p>
              )}
              {aboutInfo.availability && (
                <p className="text-lg">{aboutInfo.availability}</p>
              )}
            </div>
          </div>
          
          {/* Right column - Contact info and profile image */}
          <div className="lg:col-span-1">
            {/* Profile image */}
            <div className="aspect-[3/4] relative mb-8 overflow-hidden">
              {aboutInfo.profileImage ? (
                <Image 
                  src={getSanityImageUrl(aboutInfo.profileImage)}
                  alt={aboutInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-zinc-100 flex items-center justify-center">
                  <span className="text-zinc-400">Artist Portrait</span>
                </div>
              )}
            </div>
            
            {/* Contact information */}
            <div className="mt-8">
              <h2 className="text-xl font-light mb-4 tracking-wide">Contact</h2>
              <div className="space-y-3">
                <p className="text-lg">{aboutInfo.name} | SiemArt</p>
                
                {aboutInfo.email && (
                  <p className="text-lg">
                    <a href={`mailto:${aboutInfo.email}`} className="hover:underline transition-all">
                      {aboutInfo.email}
                    </a>
                  </p>
                )}
                
                {aboutInfo.instagram && (
                  <p className="text-lg">
                    <a 
                      href={aboutInfo.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:underline transition-all"
                    >
                      Instagram
                    </a>
                  </p>
                )}
                
                {aboutInfo.acquisitionNote && (
                  <p className="text-lg mt-6 italic">{aboutInfo.acquisitionNote}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
