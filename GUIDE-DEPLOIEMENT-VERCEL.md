# Guide de déploiement sur Vercel

Ce guide vous explique comment déployer automatiquement votre site SiemArt Portfolio sur Vercel sans avoir à utiliser de commandes dans le terminal.

## Table des matières

1. [Configuration initiale](#configuration-initiale)
2. [Déploiement automatique](#déploiement-automatique)
3. [Variables d'environnement](#variables-denvironnement)
4. [Domaine personnalisé](#domaine-personnalisé)
5. [Résolution des problèmes](#résolution-des-problèmes)

## Configuration initiale

Pour configurer votre projet sur Vercel pour la première fois :

1. Créez un compte sur [Vercel](https://vercel.com) si vous n'en avez pas déjà un
2. Connectez votre compte GitHub à Vercel
3. Dans le tableau de bord Vercel, cliquez sur "Add New..." puis "Project"
4. Sélectionnez le dépôt GitHub "simart-portfolio"
5. Dans les paramètres de configuration :
   - Framework Preset : Next.js
   - Root Directory : ./
   - Build Command : npm run build
   - Output Directory : .next
   - Install Command : npm install

6. Dans la section "Environment Variables", ajoutez toutes les variables d'environnement listées dans le fichier `.env.example` :
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=yjqruava
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
   SANITY_API_TOKEN=skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_913ggoi
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_kvxi77m
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=eYa8kth0QRmbd_-zL
   NEXT_PUBLIC_SITE_URL=https://simart-portfolio.vercel.app
   ```

7. Cliquez sur "Deploy" pour lancer le premier déploiement

## Déploiement automatique

Une fois la configuration initiale terminée, Vercel déploiera automatiquement votre site à chaque fois que vous pousserez des modifications sur la branche principale de votre dépôt GitHub. Vous n'aurez pas besoin d'exécuter de commandes dans le terminal.

### Processus de déploiement automatique

1. Faites vos modifications localement
2. Committez vos changements : `git add . && git commit -m "Votre message"`
3. Poussez sur GitHub : `git push origin main`
4. Vercel détectera automatiquement les changements et déploiera votre site
5. Vous recevrez une notification par email une fois le déploiement terminé

## Variables d'environnement

Les variables d'environnement sont déjà configurées lors de la configuration initiale. Si vous devez les modifier :

1. Accédez au tableau de bord de votre projet sur Vercel
2. Cliquez sur "Settings" puis "Environment Variables"
3. Modifiez ou ajoutez les variables selon vos besoins
4. Cliquez sur "Save" pour enregistrer les modifications
5. Redéployez votre site pour appliquer les changements

## Domaine personnalisé

Pour configurer un domaine personnalisé pour votre site :

1. Accédez au tableau de bord de votre projet sur Vercel
2. Cliquez sur "Settings" puis "Domains"
3. Entrez votre domaine et suivez les instructions pour configurer les enregistrements DNS
4. Une fois la vérification terminée, votre site sera accessible via votre domaine personnalisé

## Résolution des problèmes

### Échec du déploiement

Si votre déploiement échoue :

1. Vérifiez les logs de build sur Vercel pour identifier l'erreur
2. Assurez-vous que toutes les variables d'environnement sont correctement configurées
3. Vérifiez que votre projet fonctionne localement avec `npm run build`

### Problèmes avec Sanity

Si les données de Sanity ne s'affichent pas :

1. Vérifiez que le projet ID et le dataset sont corrects
2. Assurez-vous que le token API Sanity est valide
3. Vérifiez que le CORS est correctement configuré dans les paramètres de votre projet Sanity

### Problèmes avec EmailJS

Si le formulaire de contact ne fonctionne pas :

1. Vérifiez que les identifiants EmailJS sont corrects
2. Assurez-vous que le service et le template sont actifs sur EmailJS
3. Testez le formulaire en mode développement pour voir les erreurs dans la console

---

Pour toute assistance supplémentaire, consultez la [documentation Vercel](https://vercel.com/docs) ou contactez l'équipe de développement.
