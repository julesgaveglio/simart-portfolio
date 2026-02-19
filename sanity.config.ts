/**
 * Configuration pour Sanity Studio
 */
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'SiemArt Portfolio',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3do82whm',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/admin', // Studio accessible via /admin
});
