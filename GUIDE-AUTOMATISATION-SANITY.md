# Guide d'Automatisation Sanity pour SiemArt

Ce guide explique comment utiliser le script d'automatisation pour initialiser automatiquement le contenu de la page About dans Sanity.

## Prérequis

1. Un token API Sanity avec droits d'écriture
2. Node.js installé sur votre machine

## Étapes pour obtenir un token API Sanity

1. Connectez-vous à [Sanity.io](https://www.sanity.io/manage)
2. Sélectionnez votre projet
3. Allez dans "API" > "Tokens"
4. Cliquez sur "Add API token"
5. Donnez un nom à votre token (ex: "SiemArt Content Automation")
6. Sélectionnez les permissions "Editor" pour permettre l'écriture
7. Cliquez sur "Create token"
8. Copiez le token généré (vous ne pourrez plus le voir après avoir quitté cette page)

## Configuration rapide

```bash
# Installer les dépendances nécessaires et exécuter le script
npm run sanity:setup:install
```

Cette commande va:
1. Installer la dépendance dotenv si elle n'est pas déjà installée
2. Créer un fichier .env s'il n'existe pas
3. Vous demander d'ajouter votre token API Sanity dans le fichier .env
4. Exécuter le script d'automatisation

## Configuration manuelle

1. Créez un fichier `.env` à la racine du projet avec le contenu suivant:
   ```
   SANITY_API_TOKEN=votre_token_ici
   NEXT_PUBLIC_SANITY_PROJECT_ID=3do82whm
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Installez la dépendance dotenv:
   ```bash
   npm install dotenv
   ```

3. Exécutez le script d'automatisation:
   ```bash
   npm run sanity:setup
   ```

## Ce que fait le script

Le script effectue automatiquement les actions suivantes:

1. Vérifie si le document About existe déjà dans Sanity
2. Crée ou met à jour le document avec:
   - Le nom de l'artiste
   - La biographie en anglais et néerlandais (format Portable Text)
   - Le lieu de naissance
   - Les informations de disponibilité
   - La note d'acquisition
   - Les coordonnées de contact

## Après l'exécution du script

Une fois le script exécuté avec succès, vous devrez:

1. Vous connecter à Sanity Studio
2. Ajouter manuellement les images:
   - Photo de profil
   - Photo avec œuvre monumentale
3. Vérifier que le contenu correspond à vos attentes
4. Publier les modifications

## Résolution des problèmes

### Erreur: "SANITY_API_TOKEN non défini"

Assurez-vous d'avoir créé le fichier `.env` avec votre token API Sanity.

### Erreur: "Permission denied"

Vérifiez que votre token API a les droits d'écriture (Editor).

### Erreur: "Failed to connect to Sanity API"

Vérifiez votre connexion internet et que les identifiants du projet sont corrects.

## Personnalisation du contenu

Si vous souhaitez modifier le contenu par défaut, vous pouvez éditer les variables `biographyEN`, `biographyNL` et autres champs dans le fichier `scripts/sanity-auto-setup.js`.

---

Pour toute question ou assistance supplémentaire, n'hésitez pas à contacter l'équipe de développement.
