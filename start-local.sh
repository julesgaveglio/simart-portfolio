#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Obtenir l'adresse IP locale
IP=$(ifconfig | grep "inet " | grep -v 127.0.0.1 | awk '{print $2}' | head -n 1)

echo -e "${BLUE}=== Démarrage de SiemArt Portfolio en mode local ===${NC}"
echo -e "${GREEN}Adresse IP locale:${NC} http://$IP:3000"
echo -e "${GREEN}Sanity Studio:${NC} http://$IP:3333"
echo -e "${BLUE}=== Appuyez sur Ctrl+C pour arrêter les serveurs ===${NC}"
echo ""

# Démarrer les deux serveurs
npm run local
