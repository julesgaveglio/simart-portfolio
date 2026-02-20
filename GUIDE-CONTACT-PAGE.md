# Guide d'utilisation de la page Contact

Ce guide explique comment configurer et personnaliser la page Contact du site SiemArt, ainsi que comment tester le formulaire de contact avec votre propre adresse email.

## Table des matières

1. [Initialisation des données](#initialisation-des-données)
2. [Configuration dans Sanity Studio](#configuration-dans-sanity-studio)
3. [Personnalisation du formulaire](#personnalisation-du-formulaire)
4. [Configuration d'EmailJS](#configuration-demailjs)
5. [Test du formulaire](#test-du-formulaire)
6. [Résolution des problèmes](#résolution-des-problèmes)

## Initialisation des données

Pour initialiser les données de contact avec toutes les options configurables :

```bash
npm run sanity:contact:setup:complete
```

Ce script crée ou met à jour un document `contact` dans Sanity avec des valeurs par défaut pour tous les champs.

## Configuration dans Sanity Studio

Après l'initialisation, connectez-vous à Sanity Studio pour personnaliser les informations de contact :

1. Accédez à Sanity Studio : http://localhost:3333 (en local) ou https://yjqruava.sanity.studio (en ligne)
2. Naviguez vers le document "Contact"
3. Les champs sont organisés en 4 groupes :
   - **General Information** : Informations générales (titre, description, coordonnées)
   - **Contact Form** : Configuration du formulaire de contact
   - **Social Media** : Liens vers les réseaux sociaux
   - **Testing Configuration** : Configuration pour les tests d'envoi d'emails

## Personnalisation du formulaire

Vous pouvez personnaliser tous les aspects du formulaire de contact :

- **Textes des champs** : Étiquettes pour les champs nom, email, message
- **Textes des boutons** : Texte du bouton d'envoi et pendant l'envoi (en anglais et néerlandais)
- **Messages de confirmation** : Message affiché après l'envoi réussi (en anglais et néerlandais)
- **Messages d'erreur** : Message affiché en cas d'échec de l'envoi (en anglais et néerlandais)

## Configuration d'EmailJS

Le formulaire utilise EmailJS pour envoyer des emails sans serveur backend. Les identifiants sont configurables dans Sanity :

1. **Service ID** : Identifiant du service EmailJS
2. **Template ID** : Identifiant du modèle d'email
3. **Public Key** : Clé publique de votre compte EmailJS

Par défaut, les identifiants suivants sont utilisés :
- Service ID : `service_913ggoi`
- Template ID : `template_kvxi77m`
- Public Key : `eYa8kth0QRmbd_-zL`

Si vous souhaitez utiliser votre propre compte EmailJS, consultez le guide [EMAILJS-GUIDE.md](./EMAILJS-GUIDE.md).

## Test du formulaire

Pour tester le formulaire avec votre propre adresse email :

1. Dans Sanity Studio, accédez au document "Contact"
2. Allez dans l'onglet "Testing Configuration"
3. Modifiez le champ "Testing Email" avec votre adresse email
4. Activez l'option "Use Testing Email"
5. Publiez les modifications

Désormais, tous les messages du formulaire seront envoyés à votre adresse email de test au lieu de l'adresse email publique. Un message s'affichera sur le formulaire pour indiquer que le mode test est actif.

## Résolution des problèmes

### Les emails ne sont pas envoyés

1. Vérifiez que les identifiants EmailJS sont corrects
2. Assurez-vous que votre compte EmailJS est actif
3. Vérifiez les quotas d'envoi (200 emails/mois sur le plan gratuit)
4. Consultez la console du navigateur pour voir les erreurs éventuelles

### Emails reçus dans les spams

Si les emails sont reçus dans les spams, vous pouvez :
1. Utiliser votre propre domaine pour l'envoi d'emails (nécessite un plan payant)
2. Demander aux destinataires d'ajouter votre adresse email à leurs contacts

### Modification des données non visible sur le site

1. Assurez-vous d'avoir publié les modifications dans Sanity Studio
2. Vérifiez que le site a été rechargé après les modifications

---

Pour toute assistance supplémentaire, consultez la documentation EmailJS ou contactez l'équipe de développement.
