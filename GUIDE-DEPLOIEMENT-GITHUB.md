# Guide de déploiement sur GitHub Pages

Ce guide vous explique comment déployer automatiquement votre site SiemArt Portfolio sur GitHub Pages sans avoir à utiliser de commandes dans le terminal.

## Table des matières

1. [Configuration initiale](#configuration-initiale)
2. [Déploiement automatique](#déploiement-automatique)
3. [Variables d'environnement](#variables-denvironnement)
4. [Domaine personnalisé](#domaine-personnalisé)
5. [Résolution des problèmes](#résolution-des-problèmes)

## Configuration initiale

Pour configurer votre projet sur GitHub Pages pour la première fois :

1. Assurez-vous que votre code est déjà sur GitHub dans un dépôt public ou privé

2. Activez GitHub Pages dans les paramètres du dépôt :
   - Accédez à votre dépôt sur GitHub
   - Cliquez sur "Settings" (Paramètres)
   - Faites défiler jusqu'à la section "Pages"
   - Dans "Source", sélectionnez "GitHub Actions"

3. Configurez les secrets GitHub pour les variables d'environnement :
   - Dans votre dépôt, allez dans "Settings" > "Secrets and variables" > "Actions"
   - Cliquez sur "New repository secret"
   - Ajoutez chacune des variables suivantes :
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=yjqruava
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
     SANITY_API_TOKEN=skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_913ggoi
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_kvxi77m
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=eYa8kth0QRmbd_-zL
     NEXT_PUBLIC_SITE_URL=https://[votre-nom-utilisateur].github.io/simart-portfolio
     ```

4. Poussez vos modifications sur GitHub :
   - Le workflow GitHub Actions que nous avons créé (`.github/workflows/deploy.yml`) sera automatiquement détecté
   - GitHub lancera automatiquement le processus de déploiement

## Déploiement automatique

Une fois la configuration initiale terminée, GitHub déploiera automatiquement votre site à chaque fois que vous pousserez des modifications sur la branche principale de votre dépôt. Vous n'aurez pas besoin d'exécuter de commandes dans le terminal.

### Processus de déploiement automatique

1. Faites vos modifications localement
2. Committez vos changements : `git add . && git commit -m "Votre message"`
3. Poussez sur GitHub : `git push origin main`
4. GitHub Actions détectera automatiquement les changements et déploiera votre site
5. Vous pouvez suivre l'avancement dans l'onglet "Actions" de votre dépôt GitHub

## Variables d'environnement

Les variables d'environnement sont configurées comme des secrets GitHub. Si vous devez les modifier :

1. Accédez à votre dépôt sur GitHub
2. Cliquez sur "Settings" > "Secrets and variables" > "Actions"
3. Modifiez ou ajoutez les secrets selon vos besoins

## Domaine personnalisé

Pour configurer un domaine personnalisé pour votre site GitHub Pages :

1. Accédez à votre dépôt sur GitHub
2. Cliquez sur "Settings" > "Pages"
3. Dans la section "Custom domain", entrez votre domaine
4. Suivez les instructions pour configurer les enregistrements DNS
5. Cochez la case "Enforce HTTPS" pour activer HTTPS sur votre domaine

## Résolution des problèmes

### Échec du déploiement

Si votre déploiement échoue :

1. Vérifiez les logs dans l'onglet "Actions" de votre dépôt GitHub
2. Assurez-vous que toutes les variables d'environnement (secrets) sont correctement configurées
3. Vérifiez que votre projet fonctionne localement avec `npm run build && npm run export`

### Problèmes avec Next.js

Si vous rencontrez des erreurs liées à Next.js et GitHub Pages :

1. Assurez-vous que votre fichier `next.config.js` est correctement configuré pour l'export statique
2. Vérifiez que vous n'utilisez pas de fonctionnalités Next.js qui ne sont pas compatibles avec l'export statique

### Problèmes avec les images ou les assets

Si les images ou autres assets ne s'affichent pas correctement :

1. Vérifiez que les chemins sont relatifs et non absolus
2. Assurez-vous que le `basePath` dans `next.config.js` est correctement configuré

---

Pour toute assistance supplémentaire, consultez la [documentation GitHub Pages](https://docs.github.com/en/pages) ou contactez l'équipe de développement.
