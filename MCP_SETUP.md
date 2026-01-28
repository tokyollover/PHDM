# NotebookLM MCP Server - Configuration et Utilisation

## 📋 Table des Matières

- [Introduction](#introduction)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Dépannage](#dépannage)
- [Fonctionnalités Avancées](#fonctionnalités-avancées)

---

## 🎯 Introduction

Le serveur MCP NotebookLM permet à vos agents IA locaux (comme Claude, Cursor, etc.) de communiquer directement avec NotebookLM de Google pour obtenir des réponses basées sur vos propres documents, **sans hallucinations**.

### Pourquoi NotebookLM ?

- **Zéro hallucinations** : Refuse de répondre si l'information n'est pas dans vos documents
- **Recherche autonome** : L'agent pose des questions de suivi automatiquement
- **Synthèse intelligente** : Corrèle les informations de 50+ documents
- **Références citées** : Chaque réponse inclut les sources
- **Pas d'infrastructure** : Pas besoin de bases de données vectorielles ou d'embeddings

---

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir :

- **Node.js** version 16 ou supérieure
- **npm** (inclus avec Node.js)
- **Git** pour cloner les dépôts
- Un compte **Google** pour accéder à NotebookLM
- **VS Code** ou un autre IDE compatible MCP

### Vérifier les versions

```bash
node --version  # Doit afficher v16.x ou supérieur
npm --version   # Doit afficher 8.x ou supérieur
git --version   # N'importe quelle version récente
```

---

## 📥 Installation

### Étape 1 : Exécuter le script d'installation

Le projet inclut un script automatisé qui :
1. Clone le dépôt notebooklm-mcp dans `servers/notebooklm-mcp`
2. Installe toutes les dépendances npm
3. Compile le projet TypeScript

```bash
# Depuis la racine du projet PHDM
chmod +x setup_mcp.sh
./setup_mcp.sh
```

### Étape 2 : Vérifier l'installation

Après l'exécution du script, vérifiez que le serveur est installé :

```bash
ls -la servers/notebooklm-mcp/
# Vous devriez voir un dossier 'dist' avec les fichiers compilés
```

---

## ⚙️ Configuration

### Configuration VS Code

Le fichier `.vscode/mcp.json` a été créé automatiquement avec la configuration suivante :

```json
{
  "mcpServers": {
    "notebooklm": {
      "command": "node",
      "args": [
        "${workspaceFolder}/servers/notebooklm-mcp/dist/index.js"
      ],
      "env": {
        "NOTEBOOKLM_COOKIE": "${env:NOTEBOOKLM_COOKIE}"
      },
      "description": "NotebookLM MCP Server - Zero-hallucination answers from your NotebookLM notebooks"
    }
  }
}
```

### Configuration de la Variable d'Environnement

Le serveur NotebookLM nécessite un cookie d'authentification pour accéder à vos notebooks.

#### Option 1 : Variable d'environnement système (Recommandé)

**Linux/macOS** : Ajoutez à votre `~/.bashrc`, `~/.zshrc`, ou `~/.profile` :

```bash
export NOTEBOOKLM_COOKIE="votre_cookie_ici"
```

Puis rechargez :

```bash
source ~/.bashrc  # ou ~/.zshrc selon votre shell
```

**Windows (PowerShell)** :

```powershell
[System.Environment]::SetEnvironmentVariable('NOTEBOOKLM_COOKIE', 'votre_cookie_ici', 'User')
```

**Windows (Command Prompt)** :

```cmd
setx NOTEBOOKLM_COOKIE "votre_cookie_ici"
```

#### Option 2 : Fichier .env local (Pour le développement)

Créez un fichier `.env` à la racine du projet :

```bash
NOTEBOOKLM_COOKIE=votre_cookie_ici
```

⚠️ **Important** : Ajoutez `.env` à votre `.gitignore` pour ne pas committer vos cookies !

### Comment Obtenir votre Cookie NotebookLM

1. **Ouvrez Chrome** et allez sur https://notebooklm.google.com
2. **Connectez-vous** avec votre compte Google
3. **Ouvrez les DevTools** (F12 ou Cmd+Option+I sur Mac)
4. **Allez dans l'onglet "Application"** ou "Stockage"
5. **Cliquez sur "Cookies"** → `https://notebooklm.google.com`
6. **Cherchez le cookie** (généralement nommé `__Secure-1PSID` ou similaire)
7. **Copiez sa valeur**

**Alternative** : Le serveur peut aussi s'authentifier automatiquement via navigateur :

```bash
# Dans votre IDE, demandez à l'agent :
"Log me in to NotebookLM"
```

---

## 🚀 Utilisation

### Démarrage

1. **Redémarrez VS Code** après avoir configuré la variable d'environnement
2. Le serveur MCP NotebookLM démarrera automatiquement
3. Vérifiez les logs dans le panneau de sortie VS Code

### Créer votre Base de Connaissances

1. **Allez sur** https://notebooklm.google.com
2. **Créez un notebook** et uploadez vos documents :
   - 📄 PDFs, Google Docs, fichiers markdown
   - 🔗 Sites web, dépôts GitHub
   - 🎥 Vidéos YouTube
   - 📚 Plusieurs sources par notebook

3. **Partagez le notebook** :
   - Cliquez sur ⚙️ **Share** → **Anyone with link** → **Copy**

### Utiliser avec votre Agent IA

Une fois le notebook créé, dans votre IDE :

```
"Je développe avec [bibliothèque]. Voici mon NotebookLM : [lien]"
```

L'agent posera automatiquement des questions à NotebookLM avant d'écrire du code.

### Exemple d'Utilisation

**Vous** :
```
"Crée un workflow n8n pour filtrer les spams Gmail. 
Voici la doc dans NotebookLM : https://notebooklm.google.com/notebook/abc123"
```

**L'Agent** :
- Demande à NotebookLM comment fonctionne l'intégration Gmail
- Pose des questions de suivi sur le décodage base64
- Vérifie la gestion des erreurs
- Écrit le code complet sans hallucinations

---

## 🛠️ Dépannage

### Le serveur ne démarre pas

**Problème** : VS Code ne trouve pas le serveur

**Solutions** :
1. Vérifiez que le build existe : `ls servers/notebooklm-mcp/dist/index.js`
2. Si absent, relancez le build : `cd servers/notebooklm-mcp && npm run build`
3. Vérifiez les permissions : `chmod +x servers/notebooklm-mcp/dist/index.js`

### Erreur d'authentification

**Problème** : `Authentication failed` ou `Invalid cookie`

**Solutions** :
1. Vérifiez que la variable `NOTEBOOKLM_COOKIE` est définie :
   ```bash
   echo $NOTEBOOKLM_COOKIE  # Linux/macOS
   echo %NOTEBOOKLM_COOKIE%  # Windows CMD
   $env:NOTEBOOKLM_COOKIE    # Windows PowerShell
   ```
2. Obtenez un nouveau cookie (ils expirent)
3. Utilisez l'authentification par navigateur : `"Log me in to NotebookLM"`

### Pas de réponse de NotebookLM

**Problème** : L'agent ne reçoit pas de réponses

**Solutions** :
1. Vérifiez que le lien NotebookLM est public
2. Assurez-vous que le notebook contient des sources
3. Redémarrez le serveur MCP (redémarrez VS Code)

### Conflit de dépendances npm

**Problème** : Erreurs lors de `npm install`

**Solutions** :
```bash
cd servers/notebooklm-mcp
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run build
```

---

## 🎓 Fonctionnalités Avancées

### Gestion de Bibliothèque

Sauvegardez vos liens NotebookLM avec tags et descriptions :

```
"Ajoute [lien] à la bibliothèque avec les tags 'frontend, react, components'"
```

L'agent sélectionnera automatiquement le bon notebook pour votre tâche.

### Profils d'Outils

Réduisez l'utilisation de tokens en chargeant uniquement les outils nécessaires :

```bash
cd servers/notebooklm-mcp

# Voir la configuration actuelle
npx notebooklm-mcp config get

# Définir un profil
npx notebooklm-mcp config set profile minimal   # Query-only
npx notebooklm-mcp config set profile standard  # + Library management
npx notebooklm-mcp config set profile full      # Tous les outils

# Désactiver des outils spécifiques
npx notebooklm-mcp config set disabled-tools "cleanup_data,re_auth"
```

### Recherche Itérative Profonde

Claude pose automatiquement des questions de suivi pour construire une compréhension complète :

1. Question initiale sur l'API
2. Détails d'implémentation
3. Gestion des erreurs
4. Cas limites
5. Meilleures pratiques

### Nettoyage des Données

Pour un redémarrage complet :

```bash
cd servers/notebooklm-mcp
npx notebooklm-mcp cleanup
```

Ceci supprime toutes les sessions et données NotebookLM du système.

---

## 📚 Ressources

- **Dépôt GitHub** : https://github.com/PleasePrompto/notebooklm-mcp
- **Documentation complète** : https://github.com/PleasePrompto/notebooklm-mcp/tree/main/docs
- **NotebookLM** : https://notebooklm.google.com
- **MCP Protocol** : https://modelcontextprotocol.io/

---

## 🤝 Support

Pour les problèmes spécifiques au serveur NotebookLM MCP, consultez :
- Issues GitHub : https://github.com/PleasePrompto/notebooklm-mcp/issues

Pour les questions sur ce projet PHDM :
- Créez une issue dans ce dépôt

---

## 📝 Notes de Sécurité

⚠️ **Important** :

1. **Ne commitez JAMAIS** votre cookie `NOTEBOOKLM_COOKIE` dans Git
2. Ajoutez `.env` à votre `.gitignore`
3. Les cookies expirent - vous devrez les renouveler périodiquement
4. N'utilisez que des notebooks contenant des informations non sensibles

---

## 🔄 Mise à Jour

Pour mettre à jour le serveur NotebookLM MCP :

```bash
cd servers/notebooklm-mcp
git pull origin main
npm install
npm run build
```

Puis redémarrez VS Code.
