'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import SeriesListClient from './series-list-client';
import { Series, Work } from '@/lib/types';

interface WorksClientRouterProps {
  allSeries: Series[];
  allWorks: Work[];
}

export default function WorksClientRouter({ allSeries, allWorks }: WorksClientRouterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [currentView, setCurrentView] = useState<'list' | 'series' | 'work'>('list');
  const [currentSeries, setCurrentSeries] = useState<Series | null>(null);
  const [currentWork, setCurrentWork] = useState<Work | null>(null);
  
  useEffect(() => {
    // Analyser le chemin pour déterminer ce qu'il faut afficher
    const path = pathname.replace('/simart-portfolio/works', '').split('/').filter(Boolean);
    
    if (path.length === 0) {
      // Page principale des works
      setCurrentView('list');
      setCurrentSeries(null);
      setCurrentWork(null);
    } else if (path.length === 1) {
      // Page d'une série
      const seriesSlug = path[0];
      const series = allSeries.find(s => s.slug.current === seriesSlug);
      
      if (series) {
        setCurrentView('series');
        setCurrentSeries(series);
        setCurrentWork(null);
      } else {
        // Série non trouvée, rediriger vers la liste
        router.push('/works');
      }
    } else if (path.length === 2) {
      // Page d'une œuvre
      const seriesSlug = path[0];
      const workSlug = path[1];
      
      const work = allWorks.find(w => 
        w.slug.current === workSlug && 
        w.series.slug.current === seriesSlug
      );
      
      if (work) {
        setCurrentView('work');
        setCurrentSeries(allSeries.find(s => s.slug.current === seriesSlug) || null);
        setCurrentWork(work);
      } else {
        // Œuvre non trouvée, rediriger vers la liste
        router.push('/works');
      }
    }
  }, [pathname, allSeries, allWorks, router]);

  // Rendu conditionnel en fonction de la vue actuelle
  if (currentView === 'list') {
    return <SeriesListClient seriesData={allSeries} />;
  } else if (currentView === 'series') {
    // Importer dynamiquement le composant de série
    const SeriesClient = require('./[series]/series-client').default;
    return currentSeries ? <SeriesClient series={currentSeries} /> : null;
  } else if (currentView === 'work') {
    // Importer dynamiquement le composant d'œuvre
    const WorkClient = require('./[series]/[id]/work-client').default;
    return currentWork ? <WorkClient work={currentWork} seriesSlug={currentSeries?.slug.current || ''} /> : null;
  }
  
  // Fallback
  return <SeriesListClient seriesData={allSeries} />;
}
