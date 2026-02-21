'use client';

import { useState, useEffect } from 'react';
import { subscribeToDocument, subscribeToType } from '@/lib/sanity-live';

// Hook pour s'abonner aux changements d'un document spécifique
export function useSanityLiveDocument<T>(id: string, initialData: T | null = null) {
  const [data, setData] = useState<T | null>(initialData);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isLoading, setIsLoading] = useState(!initialData);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    
    // S'abonner aux changements du document
    const subscription = subscribeToDocument(id, (update) => {
      setIsLoading(false);
      
      if (update.deleted) {
        setIsDeleted(true);
        setData(null);
      } else {
        setData(update as T);
        setIsDeleted(false);
      }
    });

    // Nettoyer l'abonnement lors du démontage du composant
    return () => {
      subscription.unsubscribe();
    };
  }, [id]);

  return { data, isLoading, isDeleted };
}

// Hook pour s'abonner aux changements d'un type de document
export function useSanityLiveQuery<T>(type: string, initialData: T[] = []) {
  const [data, setData] = useState<T[]>(initialData);
  const [isLoading, setIsLoading] = useState(!initialData.length);

  useEffect(() => {
    if (!type) return;

    setIsLoading(true);
    
    // S'abonner aux changements du type de document
    const subscription = subscribeToType(type, (updates) => {
      setIsLoading(false);
      setData(updates as T[]);
    });

    // Nettoyer l'abonnement lors du démontage du composant
    return () => {
      subscription.unsubscribe();
    };
  }, [type]);

  return { data, isLoading };
}
