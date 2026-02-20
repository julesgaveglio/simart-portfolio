# SiemArt Portfolio - About Page Implementation

Ce document explique l'implémentation de la page About pour le portfolio SiemArt, incluant l'intégration avec Sanity CMS et le design responsive.

## Fonctionnalités

- **Design épuré et luxueux** adapté à la direction artistique
- **Intégration complète avec Sanity CMS** pour une gestion de contenu facile
- **Support multilingue** (anglais et néerlandais)
- **Design responsive** optimisé pour tous les appareils
- **Typographie Calibri** sur fond blanc pour une esthétique minimaliste

## Structure technique

### Composants React

- `page.tsx` - Composant serveur qui récupère les données depuis Sanity
- `about-client.tsx` - Composant client qui affiche les données avec un design luxueux

### Intégration Sanity

Le schéma Sanity a été étendu pour inclure tous les champs nécessaires:
- Photo de profil
- Photo avec œuvre monumentale
- Biographie (EN/NL)
- Lieu de naissance
- Disponibilité des œuvres
- Note d'acquisition
- Coordonnées de contact

## Mise en page

La page About suit une structure en trois sections:

1. **Hero Section** - Grande image de l'artiste avec une œuvre monumentale
2. **Biographie** - Texte principal avec lieu de naissance et disponibilité
3. **Contact** - Photo de profil et informations de contact

## Guides et ressources

Plusieurs documents ont été créés pour faciliter la gestion du contenu:

- `SANITY-ABOUT-SYNC-GUIDE.md` - Guide détaillé pour la synchronisation du contenu
- `sanity-about-example.json` - Exemple de document Sanity pour référence
- `scripts/init-about-content.js` - Script pour initialiser le contenu dans Sanity

## Comment mettre à jour le contenu

1. Accédez à Sanity Studio
2. Naviguez vers le document "About"
3. Modifiez les champs selon vos besoins
4. Publiez les modifications

Pour une initialisation rapide du contenu, vous pouvez utiliser le script fourni:
```bash
# Assurez-vous d'avoir un token API Sanity avec droits d'écriture
export SANITY_API_TOKEN=votre_token_ici
node scripts/init-about-content.js
```

## Design responsive

Le design s'adapte automatiquement à différentes tailles d'écran:

- **Mobile** - Affichage en colonne unique avec images pleine largeur
- **Tablette** - Mise en page optimisée avec marges ajustées
- **Desktop** - Mise en page en colonnes avec ratio 2:1 pour le contenu principal

## Personnalisation future

Pour modifier l'apparence de la page:

1. Ajustez les classes Tailwind dans `about-client.tsx`
2. Modifiez les composants de mise en page selon vos besoins
3. Personnalisez les styles dans `globals.css` si nécessaire

---

Pour toute question ou assistance supplémentaire concernant cette implémentation, consultez la documentation ou contactez l'équipe de développement.
