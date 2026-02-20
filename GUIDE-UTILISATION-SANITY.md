# Guide d'utilisation Sanity pour SiemArt

Ce guide explique comment gérer le contenu de la page About dans Sanity Studio après l'initialisation automatique.

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

## Contenu initialisé

Le script d'automatisation a déjà initialisé les éléments suivants dans Sanity :

- **Nom de l'artiste** : Simone Roodselaar
- **Biographie** (en anglais et néerlandais)
- **Lieu de naissance** : Born in The Netherlands
- **Disponibilité** : Works available internationally
- **Note d'acquisition** : For acquisition inquiries and available works, please get in touch.
- **Coordonnées** : Email et Instagram

## Étapes restantes

### 1. Ajouter les images

Connectez-vous à Sanity Studio et ajoutez :

- **Photo de profil** : Portrait de l'artiste
- **Photo avec œuvre monumentale** : Image de l'artiste avec une œuvre monumentale

Pour ajouter ces images :
1. Accédez à Sanity Studio (`https://yjqruava.sanity.studio/`)
2. Naviguez vers le document "About"
3. Cliquez sur les champs d'image pour télécharger les fichiers
4. Utilisez l'outil de recadrage pour définir les points focaux si nécessaire

### 2. Vérifier le contenu

Assurez-vous que tout le contenu est correctement affiché et formaté :

1. Vérifiez que les textes sont bien formatés
2. Confirmez que les liens (email, Instagram) fonctionnent correctement
3. Vérifiez que les traductions sont cohérentes entre l'anglais et le néerlandais

## Mise à jour future du contenu

Pour mettre à jour le contenu à l'avenir :

1. Connectez-vous à Sanity Studio
2. Naviguez vers le document "About"
3. Modifiez les champs souhaités
4. Cliquez sur "Publish" pour rendre les modifications visibles sur le site

## Utilisation du script d'automatisation

Si vous souhaitez réinitialiser le contenu ou l'appliquer à un autre environnement, vous pouvez utiliser le script d'automatisation :

```bash
node scripts/sanity-direct-setup.js
```

Le script utilise directement le token API configuré et ne nécessite pas de fichier .env.

## Résolution des problèmes

Si vous rencontrez des problèmes avec Sanity :

1. **Erreurs d'authentification** : Vérifiez que le token API est toujours valide
2. **Contenu non visible sur le site** : Assurez-vous que les modifications ont été publiées
3. **Problèmes d'image** : Vérifiez les formats d'image supportés (JPG, PNG, WebP)

---

Pour toute assistance supplémentaire, consultez la documentation Sanity ou contactez l'équipe de développement.
