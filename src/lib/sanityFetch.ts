import { client } from './sanity';

// Configuration pour l'environnement de développement vs production
const isDevelopment = process.env.NODE_ENV === 'development';

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      tags,
      // En développement, revalider toutes les 3 secondes pour une expérience proche du temps réel
      // En production, utiliser un cache plus long (1 heure)
      revalidate: isDevelopment ? 0 : 3600,
    },
  });
}
