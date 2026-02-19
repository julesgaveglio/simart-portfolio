/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@sanity/ui', '@sanity/icons', '@sanity/image-url', '@sanity/types', '@sanity/vision', 'sanity'],
  // Configuration pour Turbopack
  turbopack: {},
  // Configuration pour webpack (utilisée si Turbopack est désactivé)
  webpack: (config) => {
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    return config;
  },
}

export default nextConfig
