# PLAN D'ACTION — Finalisation de la Présentation HTML
## « Les Fondations de la Diplomatie Alaouite »

**Date :** 6 février 2026  
**Fichier cible :** `ALL/Deliverables/Diplomatie Alaouite - Fondations.html`  
**Sources de référence :** Version enrichie MD (`2026-02-05_PRESENTATION_FONDATIONS_ENRICHIE.md`), Inventaire des illustrations (`inventaire-illustrations-sources.md`), Corpus NotebookLM (38 sources)

---

## I. ÉVALUATION CRITIQUE DE LA PRÉSENTATION ACTUELLE

### A. Diagnostic Général

| Critère | Note | Commentaire |
|---------|------|-------------|
| **Structure bipartite** | 6/10 | Le plan existe mais la césure 1844 n'apparaît pas clairement ; les titres sont vagues |
| **Contenu factuel** | 3/10 | Aucune date précise, aucun traité nommé, aucun ambassadeur cité ; contenu entièrement générique |
| **Problématique** | 2/10 | Absente — la question centrale (*comment le DI passe d'outil de projection à rempart contre l'annexion*) n'est ni posée ni esquissée |
| **Appareil critique** | 1/10 | Aucune citation de source, aucune référence précise au corpus (Rivet, Abitbol, Tazi, En-Naciri) |
| **Iconographie** | 0/10 | Zéro image, zéro carte, zéro fac-similé — les slides sont du texte pur sur fond sombre |
| **Références biblio** | 4/10 | Slide 16 cite 5 ouvrages génériques (Balzacq, Morin) mais omet les sources primaires du corpus |
| **Design/Impact visuel** | 5/10 | Thème dark cohérent, CSS propre, mais monotonie des slides « liste à puces » |
| **Chronologie** | 3/10 | Erreur factuelle : Slide 14 indique « 1728-1757 Moulay Ismail diplomatie agressive » alors que Moulay Ismaïl règne de 1672 à 1727 |

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
RÔLE : Tu es un éditeur académique. 

TÂCHE : Réécrire le contenu textuel de chacun des 16 slides du fichier 
ALL/Deliverables/Diplomatie Alaouite - Fondations.html en t'appuyant sur :
1. Le fichier ALL/Deliverables/moroccan-diplomatic-history/2026-02-05_PRESENTATION_FONDATIONS_ENRICHIE.md (contenu de référence)
2. Le fichier ALL/Deliverables/moroccan-diplomatic-history/2026-02-05_fondations-diplomatie-alaouite.md (rapport de recherche)
3. Le corpus NotebookLM (notebook moroccan-diplomatic-history)

CONSIGNES DE RÉÉCRITURE :

Slide 1 (Titre) : Ajouter la problématique sous le sous-titre :
  "Comment le droit international passe-t-il d'un outil de projection souveraine 
   à un ultime rempart contre l'annexion ? (1666-1912)"

Slide 2 (Plan) : Reformuler les deux parties :
  - Partie I : "Le Dispositif Diplomatique Chérifien — Architecture et Projection (1666-1844)"
  - Partie II : "La Diplomatie de Résistance — Encerclement Colonial et Protectorat (1844-1912)"
  Ajouter les sous-sections dans chaque carte.

Slide 3 : Remplacer par "Introduction narrative" : 
  Accroche = reconnaissance US 1777, Traité de 1786, citation En-Naciri.

Slide 4 : "Fondements théologico-politiques" : Bay'a, légitimité prophétique, 
  rejet Ottoman, tableau comparatif Westphalien vs Chérifien.

Slide 5 : "Moulay Ismaïl et la diplomatie du Pair à Pair (1672-1727)" :
  Récupération Tanger 1684, Larache 1689, ambassades Temim 1682 et Ben Aïcha 1699.

Slide 6 : "Sidi Mohammed ben Abdallah — L'Architecte (1757-1790)" :
  Fondation Essaouira, Traité France 1767, reconnaissance USA 1786, Tujjar as-Sultan.

Slide 7 : "L'appareil diplomatique : Naib, Ambassadeurs, Tujjar" :
  3 cartes avec les 3 types d'acteurs (militaires/corsaires, marchands du Roi, lettrés/vizirs).

Slide 8 : Transition - "Le basculement : d'Isly au Traité de Fès" :
  Isly 1844, Guerre Tétouan 1860, indemnité 20M douros.

Slide 9 : "L'encerclement juridique (1856-1880)" :
  Traité anglo-marocain 1856 (Drummond Hay), Convention Béclard 1863, Madrid 1880.

Slide 10 : "La stratégie d'internationalisation (Tadmin)" :
  Moulay Hassan Ier diplomatie pendulaire, Algésiras 1906, Acte final.

Slide 11 : "Le Traité de Fès (1912) — Paradoxe juridique" :
  Souveraineté maintenue en droit, amputée en fait. Citation Brignon.

Slide 12 : "Tableau comparatif : Modèle Chérifien vs Ottoman" :
  Reprendre le tableau du MD enrichi (Küçük Kaynarca, dissociation spirituel/territorial).

Slide 13 : "Frise chronologique enrichie" :
  6 colonnes : 1666-1727 / 1727-1757 / 1757-1822 / 1822-1860 / 1860-1906 / 1906-1912

Slide 14 : "Tableau synthétique des Traités" :
  Table HTML : Traité | Date | Partenaire | Contenu | Impact

Slide 15 : Conclusion revisitée avec la problématique.

Slide 16 : Bibliographie complète du corpus (Rivet, Abitbol, Tazi, Kenbib, Lugan, 
  En-Naciri, Documents Diplomatiques, Archives Marocaines).

FORMAT : Éditer directement le HTML. Conserver le CSS existant (thème dark, 960x540).
Chaque slide doit contenir des FAITS PRÉCIS avec dates.
```

---

### PHASE 2 — Recherche et Collecte d'Images (Priorité : HAUTE)

**Objectif :** Collecter 8-12 images historiques libres de droits pour les slides.

#### Liste des Images Prioritaires

| # | Image | Usage (Slide) | Source de recherche | Mots-clés Web |
|---|-------|---------------|---------------------|---------------|
| 1 | Carte Empire Chérifien XVIIIe | Slide 3 (Intro) | Gallica BnF, Wikimedia | `"Carte Maroc XVIIIe" OR "Empire chérifien carte" site:gallica.bnf.fr OR site:commons.wikimedia.org` |
| 2 | Portrait Moulay Ismaïl (gravure Mouette) | Slide 5 | Gallica, Wikipedia | `"Moulay Ismail" portrait gravure Mouette` |
| 3 | Port d'Essaouira/Mogador XVIIIe | Slide 6 | Wikimedia, Archive.org | `"Mogador" OR "Essaouira" gravure XVIIIe port` |
| 4 | Fac-similé Traité USA 1786 | Slide 6 | US National Archives, Wikimedia | `"Morocco United States treaty 1786" facsimile` |
| 5 | Réception ambassadeur marocain à Versailles | Slide 7 | Gallica, RMN | `"ambassadeur marocain Versailles" OR "Ben Aicha Louis XIV"` |
| 6 | Bataille d'Isly 1844 (Horace Vernet) | Slide 8 | Wikimedia (domaine public) | `"Battle of Isly" Vernet 1844 painting` |
| 7 | Conférence de Madrid 1880 / Algésiras 1906 | Slide 10 | Wikimedia, Archive.org | `"Conference Algeciras 1906" OR "Madrid conference 1880 Morocco"` |
| 8 | Signature Traité de Fès 1912 | Slide 11 | Wikimedia, Archives du Maroc | `"Treaty of Fez 1912" OR "Traité de Fès signature" Moulay Hafid` |
| 9 | Carte frontières Maroc-Algérie (Oued Tafna) | Slide 5 | Gallica, TAZI T.7 | `"frontière Maroc Algérie" carte ancienne Tafna` |
| 10 | Portrait Sidi Mohammed ben Abdallah | Slide 6 | Wikimedia, Gallica | `"Mohammed III Morocco" OR "Sidi Mohammed ben Abdallah" portrait` |

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
