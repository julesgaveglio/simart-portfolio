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
  },
  // Configuration pour le développement local
  async rewrites() {
    return {
      beforeFiles: [
        // Ces règles aident à gérer les routes dynamiques
        {
          source: '/works/:series',
          destination: '/works/[series]',
        },
        {
          source: '/works/:series/:id',
          destination: '/works/[series]/[id]',
        },
      ],
    };
  },
}

export default nextConfig
