# Guide Complet des Outils NotebookLM MCP (29 Outils)

Ce guide détaille l'utilisation de chacun des 29 outils disponibles dans le serveur MCP NotebookLM (version Docker).

## Table des Matières avec les 29 Outils

### 🔹 Recherche & Interaction (1)
1. **[ask_question](#1-ask_question)** — Poser des questions à vos notebooks (RAG)

### 🔹 Gestion de la Bibliothèque (8)
2. **[auto_discover_notebook](#2-auto_discover_notebook)** — Ajout automatique via URL (Recommandé)
3. **[add_notebook](#3-add_notebook)** — Ajout manuel (Fallback)
4. **[list_notebooks](#4-list_notebooks)** — Lister vos notebooks locaux
5. **[get_notebook](#5-get_notebook)** — Détails d'un notebook
6. **[select_notebook](#6-select_notebook)** — Activer un notebook par défaut
7. **[update_notebook](#7-update_notebook)** — Mettre à jour les métadonnées
8. **[remove_notebook](#8-remove_notebook)** — Supprimer de la bibliothèque locale
9. **[search_notebooks](#9-search_notebooks)** — Rechercher dans la bibliothèque
10. **[list_notebooks_from_nblm](#10-list_notebooks_from_nblm)** — Scraper la liste réelle depuis Google

### 🔹 Statistiques & Sessions (5)
11. **[get_library_stats](#11-get_library_stats)** — Statistiques d'utilisation
12. **[list_sessions](#12-list_sessions)** — Voir les sessions actives
13. **[close_session](#13-close_session)** — Fermer une session
14. **[reset_session](#14-reset_session)** — Effacer l'historique d'une session
15. **[get_health](#15-get_health)** — État du serveur et diagnostic

### 🔹 Authentification & Système (3)
16. **[setup_auth](#16-setup_auth)** — Première connexion (via VNC)
17. **[re_auth](#17-re_auth)** — Reconnexion / Changement de compte
18. **[de_auth](#18-de_auth)** — Déconnexion sécurisée
19. **[cleanup_data](#19-cleanup_data)** — Nettoyage complet des données

### 🔹 Gestion de Contenu & Sources (6)
20. **[add_source](#20-add_source)** — Ajouter des fichiers/URLs/Vidéos
21. **[delete_source](#21-delete_source)** — Supprimer une source
22. **[list_content](#22-list_content)** — Voir le contenu d'un notebook
23. **[generate_content](#23-generate_content)** — Créer Podcats, PDFs, Vidéos...
24. **[download_content](#24-download_content)** — Télécharger les fichiers générés
25. **[get_source_text](#25-get_source_text)** — Extraire le texte complet d'une source
26. **[export_all_sources](#26-export_all_sources)** — Exporter toutes les sources en fichiers locaux

### 🔹 Notes & Annotations (3)
27. **[create_note](#27-create_note)** — Créer une note markdown
28. **[save_chat_to_note](#28-save_chat_to_note)** — Sauvegarder la conversation en note
29. **[convert_note_to_source](#29-convert_note_to_source)** — Transformer une note en source RAG

---

## 🔍 Recherche & Interaction

### 1. `ask_question`
Le cœur du système. Permet de discuter avec vos documents via Gemini 2.5 Pro.

- **Usage** : "Quels sont les points clés du document sur React ?"
- **Paramètres importants** :
  - `question` : Votre question.
  - `session_id` : Pour garder le contexte d'une conversation.
  - `source_format` : "inline" pour avoir les citations dans le texte.
- **Astuce** : Commencez large, puis posez des questions de suivi dans la même session pour creuser.

---

## 📚 Gestion de la Bibliothèque

### 2. `auto_discover_notebook`
La méthode la plus simple pour ajouter un notebook.

- **Usage** : "Ajoute ce notebook : https://notebooklm.google.com/..."
- **Fonctionnement** : Le serveur visite l'URL, lit le titre et les sources, et génère automatiquement la description et les tags.
- **Requis** : Une URL valide de NotebookLM.

### 3. `add_notebook`
Méthode manuelle si l'auto-découverte échoue.

- **Usage** : "Ajoute manuellement le notebook React Documentation"
- **Détails** : Vous devrez fournir titre, description, et topics manuellement.

### 4. `list_notebooks`
Affiche tous les notebooks connus de votre bibliothèque locale (fichier `library.json`).

- **Usage** : "Montre-moi mes notebooks disponibles"

### 5. `get_notebook`
Affiche toutes les métadonnées (ID, URL, Description) d'un notebook spécifique.

- **Usage** : "Donne-moi les détails du notebook 3"

### 6. `select_notebook`
Définit le notebook actif pour toutes les futures questions qui ne spécifient pas d'ID.

- **Usage** : "Utilise le notebook React pour nos prochaines questions"

### 7. `update_notebook`
Modifie les tags, la description ou le titre d'un notebook existant.

- **Usage** : "Ajoute le tag 'Frontend' au notebook React"

### 8. `remove_notebook`
Supprime un notebook de votre liste LOCALE (ne le supprime pas de votre compte Google).

- **Usage** : "Retire le vieux notebook de la liste"

### 9. `search_notebooks`
Recherche sémantique ou par mot-clé dans votre bibliothèque.

- **Usage** : "Trouve un notebook qui parle d'API REST"

### 10. `list_notebooks_from_nblm`
Va voir directement sur `notebooklm.google.com` pour lister vos VRAIS notebooks.

- **Usage** : "Scrape mes notebooks depuis Google pour voir ce que j'ai"
- **Note** : Utile pour récupérer les IDs réels si votre bibliothèque locale est désynchronisée.

---

## 📊 Statistiques & Sessions

### 11. `get_library_stats`
Affiche le nombre de notebooks, le nombre de sessions ouvertes, etc.

### 12. `list_sessions`
Liste les conversations actives avec leur ID et la date de dernière activité.

- **Usage** : "Quelles sessions sont ouvertes ?"

### 13. `close_session`
Ferme une session spécifique pour libérer des ressources (max 10 sessions simultanées).

- **Usage** : "Ferme la session abc-123"

### 14. `reset_session`
Efface la mémoire d'une conversation tout en gardant le même ID de session (navigateur).

- **Usage** : "Oublie ce qu'on vient de dire, repartons de zéro"

### 15. `get_health`
Vérifie si vous êtes authentifié et si le navigateur répond.

- **Usage** : "Le serveur va bien ?"
- **Réponse type** : Authenticated: true/false, Active Sessions: 2, etc.

---

## 🔐 Authentification & Système

### 16. `setup_auth`
Lance la procédure de première connexion.

- **Usage (Docker)** :
  1. Lancez l'outil.
  2. Ouvrez http://localhost:6080/vnc.html
  3. Connectez-vous manuellement.

### 17. `re_auth`
Force une déconnexion/reconnexion complète. Utile si vos cookies ont expiré.

### 18. `de_auth`
Supprime toutes les traces de connexion (cookies, cache) pour la sécurité.

### 19. `cleanup_data`
Outil de maintenance "Deep Clean" pour supprimer les fichiers temporaires, caches, et logs qui pourraient s'accumuler.

---

## 📝 Gestion de Contenu & Sources

### 20. `add_source`
Ajoute un document à votre notebook.

- **Types supportés** : PDF, texte brut, URL web, YouTube, Google Drive.
- **Usage** : "Ajoute ce PDF à mon notebook" ou "Ajoute cette vidéo YouTube comme source"

### 21. `delete_source`
Supprime une source du notebook.

- **Usage** : "Supprime le document 'Old Specs.pdf'"

### 22. `list_content`
Liste toutes les sources (PDFs, sites web) présentes dans le notebook actif.

- **Usage** : "Quelles sont les sources de ce notebook ?"

### 23. `generate_content`
Fonctionnalité puissante pour créer du contenu dérivé.

- **Types** :
  - `audio_overview` : Podcast généré par IA (Deep Dive)
  - `report` : Briefing écrit
  - `video` : Vidéo explicative (via Nano Banana AI)
  - `presentation` : Slides
- **Usage** : "Génère un podcast audio sur ce sujet" ou "Crée un guide d'étude vidéo"

### 24. `download_content`
Récupère le fichier généré (ex: le MP3 du podcast ou le MP4 de la vidéo) sur votre machine locale.

- **Usage** : "Télécharge le podcast que tu viens de créer"

### 25. `get_source_text`
Extrait le texte complet d'une source individuelle du notebook.

- **Usage** : "Extrais le texte du document 'Traité de Fès'"
- **Paramètres** :
  - `source_name` : Nom de la source à extraire
  - `source_id` : Ou ID de la source (alternatif)
- **Retour** : Texte complet, nombre de caractères, titre de la source
- **Astuce** : Utile pour un accès ciblé sans exporter tout le notebook

### 26. `export_all_sources`
Exporte le texte de TOUTES les sources d'un notebook vers des fichiers locaux.

- **Usage** : "Exporte toutes les sources vers ALL/ALLNBLM/mon-notebook"
- **Paramètres** :
  - `output_dir` : Répertoire de destination (obligatoire)
  - `notebook_url` ou `notebook_id` : Notebook cible (ou utilise l'actif)
  - `format` : "markdown" (défaut) ou "text"
- **Retour** : Liste des fichiers créés, résumé de l'export, erreurs éventuelles
- **Fichiers générés** :
  - Un fichier `.md` par source avec le texte complet
  - Un fichier `_sources_export_summary.md` avec le résumé de l'opération
- **Astuce** : Permet de figer le périmètre documentaire pour des recherches locales

---

## 🗒️ Notes & Annotations

### 27. `create_note`
Ajoute une note textuelle dans le panneau "Notes" de NotebookLM.

- **Usage** : "Crée une note appelée 'Idées Clés' avec ce résumé..."

### 28. `save_chat_to_note`
Sauvegarde toute votre conversation actuelle dans une note pour ne pas la perdre.

- **Usage** : "Sauvegarde notre discussion dans une note"

### 29. `convert_note_to_source`
Magique : transforme une note (vos idées) en une SOURCE officielle du notebook.
Cela permet à l'IA de répondre en utilisant VOS notes comme base de connaissance.

- **Usage** : "Transforme ma note 'Idées de projet' en source pour que je puisse t'interroger dessus"
