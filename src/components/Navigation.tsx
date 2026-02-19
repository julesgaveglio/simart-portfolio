'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'nl' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-6">
      <div className="flex justify-end items-center">
        <nav className="flex items-center space-x-8">
          <Link 
            href="/works" 
            className={`text-sm ${pathname.startsWith('/works') ? 'font-bold' : ''}`}
          >
            {t('navigation.works')}
          </Link>
          <Link 
            href="/about" 
            className={`text-sm ${pathname === '/about' ? 'font-bold' : ''}`}
          >
            {t('navigation.about')}
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm ${pathname === '/contact' ? 'font-bold' : ''}`}
          >
            {t('navigation.contact')}
          </Link>
          <button 
            onClick={toggleLanguage} 
            className="text-sm ml-4"
          >
            {language === 'en' ? 'EN | NL' : 'NL | EN'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
