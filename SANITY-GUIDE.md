# Guide d'utilisation de Sanity avec SiemArt Portfolio

Ce guide explique comment configurer et utiliser Sanity CMS avec le portfolio SiemArt.

## Configuration initiale

1. **Initialiser un projet Sanity**

   ```bash
   npm run sanity:init
   ```

   Suivez les instructions pour:
   - Vous connecter à votre compte Sanity (ou en créer un)
   - Nommer votre projet (ex: "SiemArt-portfolio")
   - Utiliser le dataset "production" par défaut
   - Sélectionner le dossier "sanity" comme emplacement du projet

2. **Copier les schémas dans le projet Sanity**

   Copiez les schémas de données que nous avons créés:

   ```bash
   cp -r schemas/* sanity/schemas/
   ```

3. **Configurer les variables d'environnement**

   Créez un fichier `.env.local` à la racine du projet avec:

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   ```

   Remplacez `votre-project-id` par l'ID du projet Sanity que vous avez créé.

## Utilisation quotidienne

1. **Démarrer l'application Next.js**

   ```bash
   npm run dev
   ```

2. **Démarrer Sanity Studio (dans un autre terminal)**

   ```bash
   npm run sanity:start
   ```

   Sanity Studio sera accessible à l'adresse: http://localhost:3333

## Création de contenu

1. **Créer des séries d'œuvres**
   - Cliquez sur "Series" dans le menu
   - Créez au moins 3 séries (ex: "Field of Becoming", "Inner Expectation", "Threshold")
   - Pour chaque série, remplissez:
     - Titre
     - Slug (généré automatiquement)
     - Image de couverture
     - Descriptions (EN et NL)

2. **Créer des œuvres individuelles**
   - Cliquez sur "Work" dans le menu
   - Pour chaque œuvre, remplissez:
     - Titre
     - Image
     - Série (référence à une série créée précédemment)
     - Dimensions
     - Medium (sélectionnez dans la liste)
     - Année
     - Statut (Available/Sold)
     - Descriptions (EN et NL)

3. **Créer la page About**
   - Cliquez sur "About" dans le menu
   - Remplissez:
     - Nom
     - Photo de profil
     - Biographie (EN et NL)
     - Email et Instagram

## Déploiement

Lorsque vous déployez votre application sur Vercel, assurez-vous de configurer les variables d'environnement Sanity dans les paramètres du projet:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`

## Ressources

- [Documentation Sanity](https://www.sanity.io/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation GROQ](https://www.sanity.io/docs/groq)
