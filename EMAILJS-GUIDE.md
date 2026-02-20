# Guide d'utilisation d'EmailJS pour SiemArt

Ce guide explique comment configurer EmailJS pour permettre l'envoi d'emails depuis le formulaire de contact du site SiemArt.

## Qu'est-ce qu'EmailJS ?

EmailJS est un service qui permet d'envoyer des emails directement depuis le frontend JavaScript sans avoir besoin d'un serveur backend. C'est une solution idéale pour les formulaires de contact sur les sites statiques.

## Étapes de configuration

### 1. Créer un compte EmailJS

1. Rendez-vous sur [EmailJS.com](https://www.emailjs.com/) et créez un compte gratuit
2. Le plan gratuit permet d'envoyer 200 emails par mois, ce qui est généralement suffisant pour un site portfolio

### 2. Créer un service Email

1. Dans votre tableau de bord EmailJS, cliquez sur "Email Services" puis "Add New Service"
2. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
3. Suivez les instructions pour connecter votre compte email
4. Donnez un nom à votre service (par exemple "siemart-contact")
5. Notez l'ID de service qui sera utilisé dans le code (par exemple "service_xxxxxxx")

### 3. Créer un modèle d'email

1. Dans votre tableau de bord EmailJS, cliquez sur "Email Templates" puis "Create New Template"
2. Donnez un nom à votre modèle (par exemple "contact-form")
3. Configurez le modèle avec les champs suivants :
   - To Email: {{to_email}} (sera remplacé par l'email configuré dans Sanity)
   - From Name: {{from_name}} (sera remplacé par le nom de l'expéditeur)
   - From Email: {{from_email}} (sera remplacé par l'email de l'expéditeur)
   - Subject: Nouveau message de contact de {{from_name}}
   - Message: {{message}}
4. Notez l'ID du modèle qui sera utilisé dans le code (par exemple "template_xxxxxxx")

### 4. Obtenir votre clé publique

1. Dans votre tableau de bord EmailJS, cliquez sur "Account" puis "API Keys"
2. Copiez votre clé publique (Public Key)

### 5. Mettre à jour le code

Ouvrez le fichier `src/app/contact/contact-client.tsx` et remplacez les identifiants EmailJS par les vôtres :

```typescript
// Remplacez ces valeurs par vos propres identifiants EmailJS
const EMAILJS_SERVICE_ID = 'votre_service_id'; // par exemple 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'votre_template_id'; // par exemple 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'votre_public_key'; // par exemple 'user_abcdefg123456'
```

## Test du formulaire

1. Assurez-vous que les données de contact sont initialisées dans Sanity en exécutant :
   ```bash
   SANITY_TOKEN=votre_token node scripts/init-contact-data.js
   ```

2. Lancez votre site en mode développement :
   ```bash
   npm run dev
   ```

3. Accédez à la page de contact et testez le formulaire en envoyant un message

4. Vérifiez que l'email est bien reçu à l'adresse configurée dans Sanity

## Personnalisation avancée

### Modifier le modèle d'email

Vous pouvez personnaliser davantage le modèle d'email dans EmailJS pour inclure :
- Le logo de SiemArt
- Une mise en page HTML plus élaborée
- Des informations supplémentaires du formulaire

### Ajouter des champs au formulaire

Si vous souhaitez ajouter des champs au formulaire (téléphone, sujet, etc.), vous devrez :
1. Mettre à jour le composant `contact-client.tsx`
2. Ajouter les nouveaux champs au modèle EmailJS
3. Mettre à jour les paramètres envoyés à EmailJS

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

---

Pour plus d'informations, consultez la [documentation officielle d'EmailJS](https://www.emailjs.com/docs/).
