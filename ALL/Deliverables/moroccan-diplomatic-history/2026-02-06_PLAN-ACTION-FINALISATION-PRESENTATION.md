# PLAN D'ACTION — Finalisation de la Présentation HTML

## « Les Fondations de la Diplomatie Alaouite »

**Date :** 6 février 2026
**Fichier cible :** `ALL/Deliverables/Diplomatie Alaouite - Fondations.html`
**Sources de référence :** Version enrichie MD (`2026-02-05_PRESENTATION_FONDATIONS_ENRICHIE.md`), Inventaire des illustrations (`inventaire-illustrations-sources.md`), Corpus NotebookLM (38 sources)

---

## I. ÉVALUATION CRITIQUE DE LA PRÉSENTATION ACTUELLE

### A. Diagnostic Général

| Critère                       | Note | Commentaire                                                                                                                                |
| ------------------------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Structure bipartite**  | 6/10 | Le plan existe mais la césure 1844 n'apparaît pas clairement ; les titres sont vagues                                                    |
| **Contenu factuel**      | 3/10 | Aucune date précise, aucun traité nommé, aucun ambassadeur cité ; contenu entièrement générique                                     |
| **Problématique**       | 2/10 | Absente — la question centrale (*comment le DI passe d'outil de projection à rempart contre l'annexion*) n'est ni posée ni esquissée |
| **Appareil critique**    | 1/10 | Aucune citation de source, aucune référence précise au corpus (Rivet, Abitbol, Tazi, En-Naciri)                                         |
| **Iconographie**         | 0/10 | Zéro image, zéro carte, zéro fac-similé — les slides sont du texte pur sur fond sombre                                                |
| **Références biblio**  | 4/10 | Slide 16 cite 5 ouvrages génériques (Balzacq, Morin) mais omet les sources primaires du corpus                                           |
| **Design/Impact visuel** | 5/10 | Thème dark cohérent, CSS propre, mais monotonie des slides « liste à puces »                                                          |
| **Chronologie**          | 3/10 | Erreur factuelle : Slide 14 indique « 1728-1757 Moulay Ismail diplomatie agressive » alors que Moulay Ismaïl règne de 1672 à 1727     |

### B. Écarts Majeurs avec la Version Enrichie (MD)

1. **L'introduction narrative** (reconnaissance US 1777, Traité de 1786, citation En-Naciri) — absente du HTML
2. **Les fondements théologico-politiques** (Bay'a, rejet Ottoman, Nasab, tableau Westphalien vs Chérifien) — absents
3. **Les figures diplomatiques nommées** (Temim 1682, Ben Aïcha 1699, Ghazal 1766, Fennich 1778, Saffar 1845) — aucune
4. **Les traités datés avec contenu** (1767 France, 1786 USA, 1856 GB, 1880 Madrid, 1906 Algésiras) — aucun
5. **Les 8 emplacements d'illustrations** identifiés dans le MD (cartes, portraits, fac-similés) — non réalisés
6. **Le contraste Ottoman/Chérifien** (Paul Dumont, Küçük Kaynarca) — absent
7. **L'avis CIJ 1975** (Sahara Occidental, *terra nullius*) — absent

### C. Verdict

> **La présentation HTML actuelle est un squelette vide.** Elle a la structure CSS d'une bonne présentation mais le contenu d'un brouillon de premier jet. Elle nécessite une refonte complète du texte de chaque slide ET l'ajout d'au moins 8-10 images historiques pour atteindre le niveau Sciences Po.**

---

## II. PLAN D'ACTION EN 6 PHASES

### PHASE 1 — Restructurer le Contenu Textuel (Priorité : CRITIQUE)

**Objectif :** Injecter le contenu factuel de la version enrichie dans les 16 slides HTML.

#### Prompt pour Agent Copilot (MCP NotebookLM) :

```
Tu es un Professeur Agrégé en Histoire des Relations Internationales et un Expert Senior en Développement Web (HMTL5/CSS3). Tu possèdes une maîtrise encyclopédique de l'histoire diplomatique du Maroc (Dynastie Alaouite, 1666-1912) et des subtilités du Droit International Public.

**OBJECTIF :**
écrire une nouvelle version étendue du code source du fichier `ALL/Deliverables/Diplomatie Alaouite - Fondations.html`. Tu dois transformer la présentation actuelle (16 slides) en une présentation magistrale de **34 slides**, dense, précise et académique réspectant le plan bipartite ci-aprés.

**INPUTS (SOURCES OBLIGATOIRES) :**
Tu dois extraire les faits, dates, citations et concepts exclusivement des fichiers suivants (fournis en contexte) :
1.  2026-02-05_PRESENTATION_FONDATIONS_ENRICHIE.md (Source primaire)
2.  2026-02-05_fondations-diplomatie-alaouite.md (Source secondaire)

**CONTRAINTES TECHNIQUES :**
*   **Format :** Fichier HTML unique.
*   **CSS :** Conserver le CSS existant (thème dark, slides 960x540px). Aucun changement de style majeur, uniquement du contenu et de la structure interne des slides.
*   **Structure :** Utiliser des `<section class="slide p-12 col ...">` pour chaque diapositive.
*   **Langue :** Français académique (niveau Master/Doctorat).

---

## PLAN DÉTAILLÉ DU CONTENU (34 SLIDES) À GÉNÉRER :

### I. INTRODUCTION & CADRAGE (Slides 1-4)

*   **Slide 1 : Titre & Problématique**
    *   Titre : Les Fondations de la Diplomatie Alaouite.
    *   Sous-titre : Histoire des pratiques diplomatiques (1666-1912).
    *   *Problématique centrale :* "Comment le droit international est-il passé d'un outil de projection souveraine à un ultime rempart contre l'annexion ?"
*   **Slide 2 : Plan de la présentation (Bipartite)**
    *   Partie I : Le Dispositif Diplomatique Chérifien — Architecture et Projection (1666-1844).
    *   Partie II : La Diplomatie de Résistance — Encerclement Colonial et Protectorat (1844-1912).
*   **Slide 3 : L'Accroche Narrative (Le Paradoxe)**
    *   Fait : Reconnaissance des USA (1777) et Traité de 1786 (plus long traité US ininterrompu).
    *   Citation : En-Naciri comparant le Maroc post-1860 à un "oiseau sans ailes".
    *   Concept : Basculement de la puissance à la survie.
*   **Slide 4 : Fondements Théologico-Politiques**
    *   Concepts : *Bay'a* (Allégeance contractuelle) vs Souveraineté territoriale.
    *   Distinction : *Dar al-Islam* vs *Dar al-Harb*.
    *   Réf : Avis CIJ 1975 (Liens d'allégeance vs Souveraineté territoriale).

### II. PARTIE I : ARCHITECTURE ET PROJECTION (1666-1844) (Slides 5-16)

*   **Slide 5 : La Genèse Alaouite**
    *   Moulay Chérif (Tafilalet) et Moulay Rachid (Fondation de l'État).
    *   Contrôle des axes commerciaux (Sijilmassa) comme prélude diplomatique.
*   **Slide 6 : Moulay Ismaïl (1672-1727) - Le Rejet de la Suzeraineté Ottomane**
    *   Argument du *Nasab* (Généalogie prophétique) vs Califat Ottoman.
    *   Fixation frontière : Oued Tafna (1678).
    *   Réf : Correspondances avec les Turcs d'Alger.
*   **Slide 7 : La Diplomatie du "Pair à Pair" (M. Ismaïl)**
    *   Récupération des présides : Tanger (1684), Larache (1689).
    *   Ambassades : Mohammed Temim (Paris, 1682) pour alliance contre l'Espagne.
    *   Réussite : Traité anglais de 1721 (Juridiction du Sultan).
*   **Slide 8 : La Diplomatie Corsaire (Jihad Maritime)**
    *   Fonction : "Diplomatie de la contrainte" (forcer la négociation).
    *   Levier : La question des captifs et des fournitures militaires.
    *   Nationalisation de la course par Salé.
*   **Slide 9 : La Parenthèse de l'Anomie (1727-1757)**
    *   Crise des *Abid al-Bukhari*.
    *   Paralysie de l'État et traités locaux informels.
*   **Slide 10 : Sidi Mohammed ben Abdallah (1757-1790) - L'Architecte**
    *   Rupture épistémologique : Du corsaire au traité.
    *   Systématisation : Danemark, Suède, France (1767).
*   **Slide 11 : Essaouira (Mogador) - Le Laboratoire**
    *   Mogador comme "Port franc diplomatique".
    *   Concentration des douanes et ouverture aux consuls.
*   **Slide 12 : L'Appareil Diplomatique - Gestion de la Distance**
    *   Le *Naib* à Tanger : Tampon entre le Sultan et les Légations.
    *   Ambassadeurs extraordinaires (Vizirs et Lettrés) vs Résidents permanents.
*   **Slide 13 : Les Acteurs Intermédiaires**
    *   *Tujjar as-Sultan* (Familles juives : Guedalla, Corcos, Pallache).
    *   Rôle : Intelligence économique et intermédiation.
*   **Slide 14 : Moulay Slimane (1792-1822) - Le Repli**
    *   Politique de *Précaution* (*Ihtiyat*) face à l'Europe napoléonienne.
    *   Influence wahhabite et arrêt officiel de la course (1817).
    *   Conséquence : Désarmement naval.
*   **Slide 15 : Bilan Partie I**
    *   Une souveraineté projetée mais une base technologique fragile.
*   **Slide 16 : Transition**
    *   Le monde change (Révolution industrielle), le Maroc stagne.

### III. PARTIE II : RÉSISTANCE ET PROTECTORAT (1844-1912) (Slides 17-30)

*   **Slide 17 : Le Choc d'Isly (1844)**
    *   Fin du mythe de l'invincibilité.
    *   Traité de Lalla Maghnia (1845) : Frontière linéaire imposée.
*   **Slide 18 : Le Tournant de 1856 (L'Empire Informel)**
    *   Traité Anglo-Marocain (Drummond Hay).
    *   Fin des monopoles royaux (*Kuntradat*), douane bloquée à 10%.
    *   Analyse Ben-Srhir : "OPA hostile" économique.
*   **Slide 19 : La Guerre de Tétouan (1860) & La Dette**
    *   Défaite face à l'Espagne (O'Donnell).
    *   Indemnité : 20 millions de douros = Mise sous tutelle des douanes.
*   **Slide 20 : La Conventions Béclard (1863)**
    *   Institutionnalisation de la protection consulaire ("La gangrène").
    *   Création d'un "État dans l'État" (citoyens soustraits à la justice/impôt).
*   **Slide 21 : Conférence de Madrid (1880)**
    *   Tentative de régulation par Hassan Ier.
    *   Résultat : "Internationalisation" du problème et légalisation des protections.
*   **Slide 22 : La Stratégie du *Tadmin* (Garantie)**
    *   Concept : Jouer les puissances les unes contre les autres (Diplomatie pendulaire).
    *   "Neutralisation par la rivalité".
*   **Slide 23 : Moulay Hassan Ier - Le Résistant**
    *   Mouvements incessants (*Harka*) pour unifier le front intérieur.
    *   Refus de la modernisation sous tutelle.
*   **Slide 24 : Le Verrouillage (1900-1904)**
    *   Entente Cordiale (1904) : France "mains libres" au Maroc.
    *   Accords secrets franco-espagnols (Partition préventive).
*   **Slide 25 : Le Coup de Tanger (1905)**
    *   Guillaume II à Tanger.
    *   Internationalisation de la crise (Appel à conférence).
*   **Slide 26 : Conférence d'Algésiras (1906)**
    *   Victoire formelle : "Souveraineté et indépendance du Sultan" affirmées.
    *   Défaite réelle : Police et Banque d'État sous tutelle fr/esp.
*   **Slide 27 : L'Échec des Réformes Internes**
    *   Le *Tertib* (Impôt universel) : Echec fiscal.
    *   Le cercle vicieux de l'endettement (Emprunts 1904, 1910).
*   **Slide 28 : La Crise Finale (1907-1911)**
    *   Occupation de Casablanca (1907) et Oujda.
    *   Coup d'Agadir (1911) : Le troc Cameroun/Maroc.
*   **Slide 29 : Le Traité de Fès (30 mars 1912)**
    *   Signataires : Moulay Hafid / Eugène Regnault.
    *   Teneur juridique : Le Maroc garde sa personnalité internationale mais délègue ses pouvoirs régaliens.
*   **Slide 30 : Analyse Juridique "Souveraineté Amputée"**
    *   Citation CIJ 1952 (Affaire ressortissants US) : L'État marocain n'a jamais cessé d'exister.

### IV. CONCLUSION & ANNEXES (Slides 31-34)

*   **Slide 31 : Tableau Comparatif (Ottoman vs Alaouite)**
    *   Ottoman : Dissociation Spirituel/Territorial (Stratégie du recul).
    *   Maroc : Fusion Identité/Territoire (*Bay'a* empêche la cession).
*   **Slide 32 : Frise Chronologique Synthétique (6 colonnes)**
    *   1666-1727 (Fondation) / 1727-1757 (Anomie) / 1757-1822 (Contrats) / 1822-1860 (Choc) / 1860-1906 (Encerclement) / 1906-1912 (Chute).
*   **Slide 33 : Synthèse Finale et Réponse Problématique**
    *   Le Droit International : D'un bouclier contre la *terra nullius* à un instrument de domination ("Lawfare").
*   **Slide 34 : Bibliographie Académique**
    *   Sources : D. Rivet, M. Abitbol, A. Tazi, K. Ben-Srhir, G. En-Naciri, Documents Diplomatiques.

---
**INSTRUCTION DE GÉNÉRATION DE CODE :**
Génère le code HTML complet partie par partie completant les 34 slides. Sois exhaustif dans le contenu textuel (utilise des listes `<ul>`, des citations `<blockquote>`, et des encadrés `<div>` pour structurer l'information et prévoie des carroussels pour montrer les figures/images liées à chauqe fait marquant).

```

---

### PHASE 2 — Recherche et Collecte d'Images (Priorité : HAUTE)

**Objectif :** Collecter 8-12 images historiques libres de droits pour les slides.

#### Liste des Images Prioritaires

| #  | Image                                         | Usage (Slide)   | Source de recherche             | Mots-clés Web                                                                                          |
| -- | --------------------------------------------- | --------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 1  | Carte Empire Chérifien XVIIIe                | Slide 3 (Intro) | Gallica BnF, Wikimedia          | `"Carte Maroc XVIIIe" OR "Empire chérifien carte" site:gallica.bnf.fr OR site:commons.wikimedia.org` |
| 2  | Portrait Moulay Ismaïl (gravure Mouette)     | Slide 5         | Gallica, Wikipedia              | `"Moulay Ismail" portrait gravure Mouette`                                                            |
| 3  | Port d'Essaouira/Mogador XVIIIe               | Slide 6         | Wikimedia, Archive.org          | `"Mogador" OR "Essaouira" gravure XVIIIe port`                                                        |
| 4  | Fac-similé Traité USA 1786                  | Slide 6         | US National Archives, Wikimedia | `"Morocco United States treaty 1786" facsimile`                                                       |
| 5  | Réception ambassadeur marocain à Versailles | Slide 7         | Gallica, RMN                    | `"ambassadeur marocain Versailles" OR "Ben Aicha Louis XIV"`                                          |
| 6  | Bataille d'Isly 1844 (Horace Vernet)          | Slide 8         | Wikimedia (domaine public)      | `"Battle of Isly" Vernet 1844 painting`                                                               |
| 7  | Conférence de Madrid 1880 / Algésiras 1906  | Slide 10        | Wikimedia, Archive.org          | `"Conference Algeciras 1906" OR "Madrid conference 1880 Morocco"`                                     |
| 8  | Signature Traité de Fès 1912                | Slide 11        | Wikimedia, Archives du Maroc    | `"Treaty of Fez 1912" OR "Traité de Fès signature" Moulay Hafid`                                    |
| 9  | Carte frontières Maroc-Algérie (Oued Tafna) | Slide 5         | Gallica, TAZI T.7               | `"frontière Maroc Algérie" carte ancienne Tafna`                                                    |
| 10 | Portrait Sidi Mohammed ben Abdallah           | Slide 6         | Wikimedia, Gallica              | `"Mohammed III Morocco" OR "Sidi Mohammed ben Abdallah" portrait`                                     |

#### Prompt pour Agent Copilot (MCP Playwright + Web Search) :

```
RÔLE : Tu es un chercheur iconographique.

TÂCHE : Pour chaque image de la liste ci-dessous, utilise les outils suivants dans l'ordre :

1. `websearch` : Chercher l'image avec les mots-clés fournis. Privilégier :
   - Wikimedia Commons (licence CC / domaine public)
   - Gallica BnF (domaine public)
   - Archive.org
   - Wikipedia (images des articles liés)

2. `playwright` (browser) : 
   a. Naviguer vers la page trouvée
   b. Identifier l'URL directe de l'image en haute résolution
   c. Vérifier la licence (domaine public préféré, CC-BY-SA accepté)
   d. Prendre un screenshot pour validation

3. Terminal (curl/wget) : Télécharger l'image dans :
   ALL/Deliverables/images/

LISTE DES 10 IMAGES :
[Reprendre le tableau ci-dessus]

OUTPUT ATTENDU : Un fichier JSON dans ALL/Deliverables/images/manifest.json avec :
{
  "images": [
    {
      "id": 1,
      "filename": "carte_empire_cherifien_xviiie.jpg",
      "source_url": "...",
      "license": "Public Domain",
      "attribution": "Gallica BnF / Germain Mouette 1683",
      "target_slide": 3
    }
  ]
}
```

---

### PHASE 3 — Extraction d'Images depuis les PDFs (Priorité : MOYENNE)

**Objectif :** Extraire les illustrations directement contenues dans les PDFs du corpus (si disponibles dans ALLPDF_OCR).

> **Note :** Actuellement `ALLPDF/` et `ALLPDF_OCR/` sont vides localement (`.gitkeep` seulement).
> Si les PDFs sont disponibles via Google Drive ou un autre stockage, les charger d'abord.

#### Prompt pour Agent Copilot (Terminal + Python) :

```
RÔLE : Tu es un ingénieur data.

PRÉREQUIS : Vérifier si les PDFs sont disponibles. Si non, proposer 
de les charger depuis Google Drive via le Colab notebook existant.

TÂCHE : Pour chaque PDF disponible contenant des illustrations identifiées 
dans ALL/ALLNBLM/moroccan-diplomatic-history/inventaire-illustrations-sources.md :

1. Installer pymupdf (fitz) : pip install pymupdf
2. Script Python pour extraire les images :

```python
import fitz  # PyMuPDF
import os

pdf_dir = "ALL/ALLPDF_OCR/"
output_dir = "ALL/Deliverables/images/pdf_extracts/"
os.makedirs(output_dir, exist_ok=True)

# PDFs prioritaires pour l'extraction d'images :
priority_pdfs = [
    "Histoire_du_Maroc*.pdf",           # BRIGNON - cartes et gravures
    "histoire_diplomatique_du_maroc*.pdf", # TAZI T.7-T.9 - fac-similés
    "Michel_ABITBOL*.pdf",               # Portraits et illustrations
    "Archives_marocaines*.pdf",          # Plans et cartes
]

for pdf_file in os.listdir(pdf_dir):
    if pdf_file.endswith('.pdf'):
        doc = fitz.open(os.path.join(pdf_dir, pdf_file))
        for page_num in range(len(doc)):
            page = doc[page_num]
            images = page.get_images(full=True)
            for img_idx, img in enumerate(images):
                xref = img[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                ext = base_image["ext"]
                filename = f"{pdf_file}_p{page_num+1}_img{img_idx+1}.{ext}"
                with open(os.path.join(output_dir, filename), "wb") as f:
                    f.write(image_bytes)
```

3. Trier manuellement les images extraites et les renommer selon le manifest.

```

---

### PHASE 4 — Intégration des Images dans le HTML (Priorité : HAUTE)

**Objectif :** Insérer les images collectées dans les slides HTML.

#### Prompt pour Agent Copilot :

```

RÔLE : Tu es un intégrateur front-end.

TÂCHE : Éditer ALL/Deliverables/Diplomatie Alaouite - Fondations.html pour :

1. Ajouter les styles CSS pour les images :

   - .slide-img { max-height: 60%; object-fit: contain; border-radius: 8px; }
   - .slide-bg-img { position: absolute; opacity: 0.15; width: 100%; height: 100%; }
   - .img-caption { font-size: 0.75rem; color: #94a3b8; font-style: italic; }
   - .split-layout { display: flex; gap: 1.5rem; }
   - .split-layout .text-col { flex: 1; }
   - .split-layout .img-col { flex: 1; display: flex; align-items: center; }
2. Pour chaque slide ayant une image dans manifest.json, adopter un layout split :

   - Colonne gauche : texte existant (réduit si nécessaire)
   - Colonne droite : image avec caption et attribution
3. Pour les slides de transition (3, 8) : utiliser l'image en fond semi-transparent
   (.slide-bg-img) avec le texte en overlay.
4. Ajouter un slide optionnel "Galerie des fac-similés" regroupant 4 images
   de traités en grille 2x2.
5. Chemins relatifs : images/[filename] (le HTML et le dossier images/ sont
   dans ALL/Deliverables/).

CONTRAINTES :

- Ne pas modifier le thème dark existant
- Conserver le ratio 960x540 des slides
- Images lazy-loaded (loading="lazy")
- Alt text descriptif en français pour chaque image

```

---

### PHASE 5 — Enrichissement de la Bibliographie (Priorité : MOYENNE)

#### Prompt pour Agent Copilot (MCP NotebookLM) :

```

RÔLE : Bibliographe académique.

TÂCHE : Remplacer le slide 16 (Références) par une bibliographie complète
aux normes Sciences Po, structurée en :

A. Sources Primaires :

- Archives Marocaines (Mission Scientifique du Maroc, 1904-1905)
- Documents Diplomatiques — Affaires du Maroc (1901-1912)
- FUMEY, Choix de correspondances marocaines, Archives Marocaines Vol. 9
- TAZI (Abdelhadie), Histoire diplomatique du Maroc, T.6-T.9

B. Historiographie Générale :

- ABITBOL (Michel), Histoire du Maroc, Paris, Perrin, 2009
- BRIGNON et al., Histoire du Maroc, Hatier, 1967
- LUGAN (Bernard), Histoire de l'Afrique du Nord, Éditions du Rocher, 2016
- RIVET (Daniel), Histoire du Maroc, Fayard, 2012

C. Études Spécialisées :

- BEN-SRHIR (Khalid), Britain and Morocco during the Embassy of J. Drummond Hay
- KENBIB (Mohammed), Juifs et Musulmans au Maroc
- EL OUFIR (Saloua), Article sur les ambassades marocaines (Rihla)
- DUMONT (Paul), L'instrumentalisation du Califat ottoman

D. Ouvrages Théoriques :

- BALZACQ (Thierry), Manuel de Diplomatie
- MORIN (Jean-Frédéric), La politique étrangère

Utilise list_content sur le notebook actif pour compléter cette liste si nécessaire.
Formater en HTML dans le style existant (2 colonnes, texte petit).

```

---

### PHASE 6 — Vérification Finale et Export (Priorité : BASSE)

#### Prompt pour Agent Copilot :

```

RÔLE : Contrôleur qualité.

TÂCHE :

1. Ouvrir ALL/Deliverables/Diplomatie Alaouite - Fondations.html dans le navigateur
   (playwright) et vérifier chaque slide visuellement.
2. Checklist de validation :
   [ ] 16-18 slides au total
   [ ] Problématique visible sur slide titre
   [ ] Plan bipartite avec césure 1844 explicite
   [ ] Au moins 3 dates par slide de contenu
   [ ] Au moins 8 images intégrées et visibles
   [ ] Frise chronologique corrigée (6 périodes)
   [ ] Tableau des traités (au moins 8 traités)
   [ ] Bibliographie complète (15+ références)
   [ ] Aucune erreur factuelle (vérifier : Moulay Ismaïl = 1672-1727, pas 1728-1757)
   [ ] Alt text sur toutes les images
   [ ] Pas de texte tronqué (overflow) dans les slides 960x540
3. Exporter en PDF (playwright pdf_save) pour impression.
4. Sauvegarder le chat NotebookLM via save_chat_to_note.

```

---

## III. MATRICE DE PRIORITÉS

```

    URGENCE
              Haute          Basse
         ┌─────────────┬─────────────┐
  Haute  │ PHASE 1     │ PHASE 5     │
IMPACT   │ Contenu     │ Bibliograph │
         │ textuel     │             │
         ├─────────────┼─────────────┤
  Moyen  │ PHASE 2+4   │ PHASE 3     │
         │ Images web  │ Extract PDF │
         │ + Intégr.   │             │
         ├─────────────┼─────────────┤
  Bas    │             │ PHASE 6     │
         │             │ QA + Export │
         └─────────────┴─────────────┘

```

**Ordre d'exécution recommandé :**
1. **PHASE 1** (contenu textuel) — 45 min
2. **PHASE 2** (recherche images web) — 30 min  
3. **PHASE 4** (intégration images) — 20 min
4. **PHASE 5** (bibliographie) — 15 min
5. **PHASE 3** (extraction PDF, si PDFs disponibles) — 20 min
6. **PHASE 6** (QA finale) — 15 min

**Temps total estimé : ~2h30**

---

## IV. ERREURS FACTUELLES À CORRIGER IMMÉDIATEMENT

| Slide | Erreur | Correction |
|-------|--------|------------|
| 14 | « 1728-1757 Moulay Ismail diplomatie agressive » | Moulay Ismaïl règne de **1672 à 1727**. 1727-1757 = période d'anarchie/anomie |
| 8 | « Traités internationaux : première reconnaissance formelle (1856, 1860) » | Les premiers traités formels remontent au XVIIe s. (1682, 1721). 1856/1860 = traités **inégaux** |
| 2 | « XVI-XVIIe siècles » pour Partie I | La dynastie Alaouite commence en **1666**. Corriger en « 1666-1844 » |
| 16 | Sources incomplètes | Ajouter Rivet, Abitbol, Tazi, Kenbib, Lugan, En-Naciri, Documents Diplomatiques |

---

*Document produit le 6 février 2026 — Analyse croisée NotebookLM (session 0aca8278) + corpus local (38 sources)*
```
