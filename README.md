# PHDM: Assistant de Recherche Augmenté

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tokyollover/PHDM/blob/PHDMWNB/Colab.ipynb)

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/tokyollover/PHDM/blob/PHDMWNB/ColabV1.ipynb)

Ce projet est conçu pour transformer votre environnement de développement en un outil avancé d'analyse de contenu pour les Sciences Politiques et la Data Science. Il combine l'intelligence de GitHub Copilot avec la base de connaissances vérifiée de Google NotebookLM via le protocole MCP (Model Context Protocol).

## 🎯 Objectif

Produire des analyses de contenu pertinentes, sourcées et méthodologiquement rigoureuses. En couplant la capacité de raisonnement de Copilot avec la précision documentaire de NotebookLM, ce projet permet de réaliser des synthèses complexes sans hallucinations.

Pour aider aux traitements de corpus ce projet permet de tirer profit de la puissance de calcule de google colab via Colab.ipynb pour réaliser ce qui suit : l'utilisateur configure le chemin vers les pdf dans drive sur le code et ces derniers sont copiés dans l'environnement drive et dans le repository determiné (utilisation du Personal Access Token) ; le traitement des documents se fait en réspectant les parametres définies.

Exportation via plugin NotebooKLM Ultra Exporter en respectant la **Structure des Données du Projet** : Ajout des sous-dossiers `notebooklm-sources-[YYYY-MM-DD]/` (pour les fichiers .md) et `notebooklm-sources-[YYYY-MM-DD]_txt/` (pour les fichiers .txt) sous  `ALL/ALLNBLM/[NomNotebook]/`, avec une note explicative sur leur contenu.

## 🛠️ Composants Clés

- **GitHub Copilot** : Configuré via `.github/copilot-instructions.md` pour agir comme un Assistant de Recherche Senior (méthodologie hypothético-déductive).
- **NotebookLM MCP (Docker)** : Connecte VS Code directement à vos carnets de notes NotebookLM pour interroger vos sources (PDF, Docs) en temps réel.
- **Environnement Isolé** : Le serveur MCP tourne dans un conteneur Docker pour une stabilité et une sécurité maximales.

## 🚀 Démarrage

### 1. Installation du Serveur MCP

Suivez le script automatisé pour configurer l'environnement Docker :

```bash
./setup_mcp.sh
```

Pour les détails techniques et l'authentification, voir [MCP_SETUP.md](./MCP_SETUP.md) et la documentation des outils [NOTEBOOKLM_TOOLS_GUIDE.md](./NOTEBOOKLM_TOOLS_GUIDE.md).

### 2. ⚡ Quick Start : Démarrer une Session de Recherche

Voici comment cibler un notebook spécifique pour vos analyses :

1. **Choisir le Notebook** :

   * Connecte-moi à NotebookLM utilisez l'outil `setup_auth`
     http://localhost:6080/vnc.html
   * auto_discover_notebook URL([https://notebooklm.google.com/notebook/488d3adb-93d4-4550-bc94-f30b678fea3c])
   * *"Quels sont mes notebooks ?"* (pour voir la liste locale)
   * *Utilise le notebook 'histoire-diplomatie-maroc' pour cette session Quelles sont les thèses principales sur la diplomatie alaouite dans ce corpus ?* (pour charger le contexte avec `select_notebook`)
   * Récupère la liste des sources via list_content → Pour chaque source → get_source_text et Sauvegarder dans ALL/ALLNBLM/[Notebook]/
2. **Mener l'Enquête** :

   * Posez votre question théorique : *"Analyse l'évolution du concept de souveraineté dans ce corpus."*
   * Copilot interrogera NotebookLM et vous répondra avec le format **Thèse / Antithèse / Preuves**.
3. **Approfondir** :

   * Continuez la discussion, Copilot garde le contexte de la session active.
4. **Archivage Automatique (Nouveau)** :

   Pour chaque session de travail sur un notebook, Copilot suivra ce protocole rigoureux :

   * **Création automatique** d'un sous-dossier au nom du notebook (ex: `Deliverables/histoire-diplomatie-maroc/`).
   * **Inventaire des sources** : Il exécutera `list_content` et sauvegardera le résultat dans un fichier `sources_context.md` dans ce dossier.
   * **Archivage des analyses** : Chaque réponse structurée (Thèse/Antithèse...) sera automatiquement sauvegardée dans un fichier Markdown daté (ex: `2026-01-28_Souverainete.md`) pour faciliter vos futures rédactions.

---

## 📂 Structure du Projet

- `.github/copilot-instructions.md` : Le "cerveau" méthodologique de l'assistant.
- `ALL/` : Stockage organisé de toutes les données du projet (voir détail ci-dessous).
- `servers/` : Le code source et la configuration du serveur MCP (version Docker).
- `Colab.ipynb` : Notebook Jupyter pour le traitement des PDFs (OCR, conversion MD) - à exécuter sur Google Colab.

## 📂 Structure des Données (ALL/)

Organisation hiérarchique des fichiers par le pipeline d'analyse :

```
ALL/
├── ALLPDF/           # PDFs originaux collectés (chargés depuis Drive via Colab)
├── ALLPDF_OCR/       # PDFs après traitement OCR (généré par Colab.ipynb)
├── ALLMD/            # Fichiers Markdown convertis (généré par Colab.ipynb)
├── ALLNBLM/          # Données NotebookLM MCP (library.json, browser_state, chrome_profile)
└── Deliverables/     # Contenus produits lors de la Recherche (.md, .html, .csv...)
```

### 📁 Détail des Dossiers

| Dossier           | Source                 | Contenu                                         |
| ----------------- | ---------------------- | ----------------------------------------------- |
| `ALLPDF/`       | Google Drive via Colab | PDFs originaux collectés                       |
| `ALLPDF_OCR/`   | `Colab.ipynb`        | PDFs avec texte OCR intégré                   |
| `ALLMD/`        | `Colab.ipynb`        | Fichiers Markdown convertis                     |
| `ALLNBLM/`      | Serveur MCP Docker     | Données de session NotebookLM (auth, library)  |
| `Deliverables/` | Sessions Copilot       | Analyses produites, synthèses, sources_context |

### 📁 Structure par Fichier Analysé (dans ALLMD/)

Chaque document traité génère un sous-dossier dédié avec la structure suivante :

```
<nom_fichier>/
├── _ANALYSES/        # Résultats d'analyse (thèse, antithèse, preuves)
├── _FIGURES/         # Graphiques, tableaux et visualisations extraits
├── _LOGS/            # Journaux de traitement et métadonnées
└── _REFERENCES/      # Citations et références bibliographiques extraites
```
