'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState(0);
  
  // Valeurs de transformation basées sur le scroll
  const imageScale = useTransform(scrollY, [0, scrollRange * 0.5], [1, 0.95]);
  const imageOpacity = useTransform(scrollY, [0, scrollRange * 0.6], [1, 0.2]);
  const textOpacity = useTransform(scrollY, [0, scrollRange * 0.3], [1, 0]);
  const textY = useTransform(scrollY, [0, scrollRange * 0.3], [0, -50]);
  const arrowOpacity = useTransform(scrollY, [0, scrollRange * 0.2], [1, 0]);
  
  useEffect(() => {
    // Calculer la plage de défilement basée sur la hauteur de l'écran
    if (containerRef.current) {
      setScrollRange(window.innerHeight * 0.8);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setScrollRange(window.innerHeight * 0.8);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Redirection automatique vers /works après un certain défilement
  useEffect(() => {
    const unsubscribe = scrollY.onChange(latest => {
      if (latest > scrollRange * 0.7 && scrollRange > 0) {
        router.push('/works');
      }
    });
    
    return () => unsubscribe();
  }, [scrollRange, scrollY, router]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Image plein écran avec animation */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          scale: imageScale,
          opacity: imageOpacity
        }}
      >
        <div className="relative w-full h-full bg-gray-200">
          {/* Placeholder pour l'image - à remplacer par une vraie image */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Placeholder Image
          </div>
        </div>
      </motion.div>

      {/* Texte centré en bas avec animation */}
      <motion.div 
        className="absolute bottom-20 left-0 w-full text-center"
        style={{ 
          opacity: textOpacity,
          y: textY
        }}
      >
        <h1 className="text-2xl md:text-3xl font-normal mb-2 px-4 whitespace-nowrap overflow-hidden text-ellipsis">SIMONE ROODSELAAR | SIEMART</h1>
        <p className="text-base md:text-lg">{t('home.subtitle')}</p>
      </motion.div>

      {/* Flèche de défilement avec animation de respiration subtile */}
      <motion.div 
        className="absolute bottom-8 left-0 w-full flex justify-center"
        style={{ opacity: arrowOpacity }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-xs md:text-sm font-light tracking-wide">{t('home.scrollDown')}</span>
          <motion.svg 
            className="w-4 h-4 md:w-5 md:h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ 
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={0.8} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
}
