# Guide d'initialisation des données Sanity pour SiemArt

Ce guide explique comment initialiser les différentes données dans Sanity pour le site SiemArt.

## Prérequis

- Node.js installé
- Accès au token API Sanity : `skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip`

## Configuration Sanity

Les paramètres de configuration utilisés pour ce projet sont :

```javascript
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});
```

## Scripts d'initialisation disponibles

Tous les scripts d'initialisation sont disponibles dans le dossier `scripts/` et peuvent être exécutés via npm.

### 1. Initialisation des données About

Pour initialiser ou mettre à jour les informations de la page About :

```bash
npm run sanity:about:init
```

Ce script crée/met à jour :
- Nom de l'artiste
- Biographie (en anglais et néerlandais)
- Lieu de naissance
- Disponibilité
- Note d'acquisition
- Email et Instagram

### 2. Initialisation des données Contact

Pour initialiser ou mettre à jour les informations de contact :

```bash
npm run sanity:contact:setup
```

Ce script crée/met à jour :
- Email de contact
- Téléphone
- Adresse du studio
- Horaires d'ouverture
- Instagram
- Texte d'acquisition
- Messages de remerciement (en anglais et néerlandais)

### 3. Initialisation des séries et œuvres

Pour initialiser ou mettre à jour les séries et œuvres :

```bash
npm run sanity:works:init
```

Ce script crée/met à jour :
- 3 séries : "Monumental Works", "Abstract Expressions", "Material Studies"
- 6 œuvres réparties dans ces séries

## Après l'initialisation

Après avoir exécuté les scripts d'initialisation, vous devez :

1. Vous connecter à Sanity Studio : http://localhost:3333 (en local) ou https://yjqruava.sanity.studio (en ligne)
2. Ajouter les images manquantes pour :
   - Page About : photo de profil et photo avec œuvre monumentale
   - Séries : images de couverture
   - Œuvres : images des œuvres

## Résolution des problèmes

### Pages affichant une erreur 404

Si une page affiche une erreur 404, cela signifie généralement que les données correspondantes n'existent pas dans Sanity. Exécutez le script d'initialisation approprié :

- Page About : `npm run sanity:about:init`
- Page Contact : `npm run sanity:contact:setup`
- Page Works : `npm run sanity:works:init`

### Sanity Studio inaccessible en local

Si Sanity Studio n'est pas accessible en local, vérifiez que :

1. Vous avez lancé le serveur Sanity : `npm run sanity:start`
2. Vous accédez à la bonne URL : http://localhost:3333

## Configuration d'EmailJS

Pour que le formulaire de contact fonctionne, assurez-vous que les identifiants EmailJS sont correctement configurés dans `src/app/contact/contact-client.tsx` :

```javascript
const EMAILJS_SERVICE_ID = 'service_913ggoi';
const EMAILJS_TEMPLATE_ID = 'template_kvxi77m';
const EMAILJS_PUBLIC_KEY = 'eYa8kth0QRmbd_-zL';
```

Pour plus d'informations sur la configuration d'EmailJS, consultez le guide `EMAILJS-GUIDE.md`.

---

Pour toute assistance supplémentaire, consultez la documentation Sanity ou contactez l'équipe de développement.
