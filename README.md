# SiemArt Portfolio

Portfolio artistique pour Simone Roodselaar, développé avec Next.js et intégré avec Sanity CMS.

## Technologies

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 3
- **CMS**: Sanity.io
- **Animations**: Framer Motion
- **Internationalisation**: Système i18n personnalisé (EN/NL)

## Fonctionnalités

- Site web bilingue (anglais/néerlandais)
- Galerie d'œuvres organisée par séries
- Page détaillée pour chaque œuvre
- Page À propos avec biographie
- Formulaire de contact
- Animation de scroll dynamique sur la page d'accueil
- Design responsive
- Intégration CMS pour une gestion de contenu facile

## Démarrage rapide

1. **Installation des dépendances**

   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**

   ```bash
   npm run dev
   ```

   Le site sera accessible à l'adresse: http://localhost:3000

3. **Configuration de Sanity CMS**

   Consultez le fichier [SANITY-GUIDE.md](./SANITY-GUIDE.md) pour les instructions détaillées sur la configuration et l'utilisation de Sanity avec ce projet.

## Structure du projet

- `/src/app`: Pages et composants de l'application Next.js
- `/src/components`: Composants React réutilisables
- `/src/lib`: Utilitaires et configurations
  - `/src/lib/i18n`: Système d'internationalisation
  - `/src/lib/sanityActions.ts`: Fonctions pour interagir avec Sanity
- `/public`: Fichiers statiques (images, etc.)
- `/schemas`: Schémas de données pour Sanity CMS

## Déploiement

Le projet est configuré pour être déployé sur Vercel. Assurez-vous de configurer les variables d'environnement Sanity dans les paramètres du projet:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## Licence

ISC
