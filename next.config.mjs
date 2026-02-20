/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sanity/ui', '@sanity/icons', '@sanity/image-url', '@sanity/types', '@sanity/vision', 'sanity'],
  // Configuration pour webpack
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
  // Configuration pour les images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Nécessaire pour l'export statique
  },
  // Configuration pour GitHub Pages
  output: 'export', // Génère des fichiers HTML statiques pour chaque route
  // Ajustez le basePath si vous déployez dans un sous-dossier
  // basePath: '/simart-portfolio',
  // trailingSlash: true, // Ajoute un slash à la fin des URLs pour la compatibilité avec GitHub Pages
}

export default nextConfig
