# MEGA PROMPT — Recherche Iconographique & Téléchargement
## Session Copilot One-Shot — Présentation "Les Fondations de la Diplomatie Alaouite"

> **Date :** 2026-02-06
> **Fichier cible :** `ALL/Deliverables/moroccan-diplomatic-history/2026-02-05_PRESENTATION_FONDATIONS_ENRICHIE.md`
> **Dossier images :** `ALL/Deliverables/images/`

---

## RÔLE & CONTEXTE

Tu es un **chercheur iconographique spécialisé en histoire diplomatique du Maroc (période Alaouite, 1666-1912)**. Tu travailles pour un étudiant en Master Sciences Politiques qui prépare une présentation académique bipartite.

**Workspace :** `/workspaces/PHDM/`
**Dossier de sortie des images :** `ALL/Deliverables/images/`

### État actuel des images (audit du 2026-02-06)

Les images suivantes **existent déjà** mais certaines nécessitent un remplacement haute résolution :

| Fichier | Taille | Résolution | Qualité | Action |
|---|---|---|---|---|
| `carte_empire_cherifien_xviiie.jpg` | 232 KB | 1200×1086 | ✅ OK | Vérifier si meilleure version disponible |
| `portrait_moulay_ismail.jpg` | 87 KB | 404×495 | ⚠️ Petit | **REMPLACER** par version haute résolution |
| `port_mogador_xviiie.jpg` | 1.7 MB | 2021×2567 | ✅ Bon | Conserver |
| `traite_usa_maroc_1786.jpg` | **9 KB** | 230×346 | ❌ Inutilisable | **REMPLACER IMPÉRATIVEMENT** |
| `ambassadeur_marocain_versailles.jpg` | 935 KB | 1017×1003 | ✅ Bon | Conserver |
| `bataille_isly_vernet_1844.jpg` | 438 KB | 1959×941 | ✅ Bon | Conserver |
| `conference_algeciras_1906.jpg` | 72 KB | 640×461 | ⚠️ Petit | **REMPLACER** si meilleure version trouvée |
| `traite_fes_1912_signatures.png` | 92 KB | 706×460 | ⚠️ Acceptable | Tenter meilleure version |
| `carte_frontieres_maroc_algerie.jpg` | 364 KB | 1200×1610 | ✅ Bon | Conserver |
| `portrait_mohammed_iii.png` | 311 KB | 489×712 | ✅ OK | Conserver |

---

## TÂCHE PRINCIPALE

Pour chaque image de la **LISTE DES 10 IMAGES** ci-dessous, exécute le protocole suivant **dans l'ordre strict** :

### Protocole par image :

**Étape 1 — `websearch`** : Chercher l'image avec les mots-clés fournis. Privilégier **dans cet ordre** :
1. **Wikimedia Commons** (licence CC / domaine public) — `site:commons.wikimedia.org`
2. **Gallica BnF** (domaine public) — `site:gallica.bnf.fr`
3. **Archive.org** — `site:archive.org`
4. **Wikipedia** (images des articles liés)
5. **US National Archives** (pour le traité USA)

**Étape 2 — `playwright` (browser)** :
- a. Naviguer vers la page trouvée (Wikimedia file page, Gallica viewer, etc.)
- b. Identifier l'URL directe de l'image en **haute résolution** (min. 1000px de large)
  - Sur Wikimedia : cliquer "Original file" ou utiliser `Special:FilePath/[filename]`
  - Sur Gallica : utiliser l'API IIIF `https://gallica.bnf.fr/iiif/ark:/12148/[ID]/f1/full/full/0/default.jpg`
- c. Confirmer que l'image est bien en **domaine public** ou licence CC

**Étape 3 — Terminal (`curl` ou `wget`)** : Télécharger dans `ALL/Deliverables/images/`
```bash
curl -L -o "ALL/Deliverables/images/[FILENAME]" "[URL_DIRECTE]"
```

**Étape 4 — Vérification** :
```bash
file ALL/Deliverables/images/[FILENAME]  # Vérifier que c'est bien une image
ls -la ALL/Deliverables/images/[FILENAME]  # Vérifier taille (> 50KB minimum)
```

Si l'image téléchargée fait moins de 50 KB ou n'est pas un format image valide, **recommencer l'étape 1** avec des mots-clés alternatifs.

---

## LISTE DES 10 IMAGES

### IMAGE 1 — Carte Empire Chérifien XVIIIe siècle
- **Fichier :** `carte_empire_cherifien_xviiie.jpg`
- **Usage :** Slide 3 (Introduction géographique)
- **État actuel :** Existe (232 KB, 1200×1086) — Vérifier si une meilleure version est disponible
- **Contexte historique :** Carte « Estats du roy de Fez » composée par Germain Mouette (1683), captif au Maroc pendant 11 ans. Montre les royaumes de Fez, Meknes, Souss, Dra, Tafilalet. TAZI T.6 contient la page de titre avec référence « Carte du Païs, à laquelle on a joint les Plans des principales Villes & Forteresses du Royaume de Fez, dessinées sur les lieux par le Sieur [Mouette] qui y a demeuré Captif pendant onze années » (Paris, Edme Couterot, 1683).
- **Mots-clés primaires :**
  ```
  "Carte Maroc XVIIIe" OR "Empire chérifien carte" site:gallica.bnf.fr OR site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "carte empire maroc" "royaume de Fez" Mouette 1683 site:gallica.bnf.fr
  ```
  ```
  "Carte générale des Estats du roy de Fez" Mouette
  ```
  ```
  gallica.bnf.fr ark 12148 btv1b8490821g
  ```
- **URL Gallica connue (manifest actuel) :** `https://gallica.bnf.fr/ark:/12148/btv1b8490821g`
- **URL IIIF haute résolution :** `https://gallica.bnf.fr/iiif/ark:/12148/btv1b8490821g/f1/full/full/0/default.jpg`
- **Licence :** Domaine public (BnF)
- **Attribution :** « Carte de l'Empire de Maroc, comprenant les royaumes de Fez, Mequenez et autres — Gallica BnF »

---

### IMAGE 2 — Portrait Moulay Ismaïl (gravure XVIIIe)
- **Fichier :** `portrait_moulay_ismail.jpg`
- **Usage :** Slide 5 (Fondements théologico-politiques)
- **État actuel :** Existe mais **trop petit** (87 KB, 404×495). REMPLACER.
- **Contexte historique :** Sultan du Maroc (r. 1672-1727). Gravure extraite du récit de Germain Mouette « Histoire des Conquestes de Mouley Archy... et de Mouley Himaël » (1683). TAZI T.9 p.79 contient une « صورة استقبال المولى اسماعيل للسفير الفرنسي » (image de la réception du sultan Moulay Ismaïl pour l'ambassadeur français). Portrait canonique : costume guerrier, barbe, insignes du pouvoir.
- **Mots-clés primaires :**
  ```
  "Moulay Ismail" portrait gravure Mouette site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Mulay Ismail" OR "Moulay Ismael" sultan Morocco portrait engraving
  ```
  ```
  "Moulay Ismaïl" gravure XVIIIe siècle sultan Maroc site:gallica.bnf.fr
  ```
  ```
  "Ismail Ibn Sharif" portrait painting wikimedia
  ```
- **URL Wikimedia connue (manifest actuel) :** `https://commons.wikimedia.org/wiki/File:Mulay_Ismail.jpg`
- **Action :** Naviguer vers la page Wikimedia, cliquer sur le lien "Original file" pour obtenir la résolution maximale. Si <800px, chercher une version alternative (ex: Gallica, BnF Département des Estampes, Fonds Thoisy).
- **Licence :** Domaine public (gravure XVIIIe s.)
- **Attribution :** « Gravure anonyme du XVIIIe siècle — Wikimedia Commons / Domaine public »

---

### IMAGE 3 — Port d'Essaouira/Mogador XVIIIe siècle
- **Fichier :** `port_mogador_xviiie.jpg`
- **Usage :** Slide 6 (Apogée diplomatique)
- **État actuel :** ✅ Bon (1.7 MB, 2021×2567). **Conserver sauf si meilleure gravure d'époque trouvée.**
- **Contexte historique :** Port fondé par Sidi Mohammed ben Abdallah (Mohammed III) vers 1765, construit par l'ingénieur français Théodore Cornut. Plateforme commerciale stratégique, siège des Tujjar as-Sultan (marchands royaux). G. Salmon dans Archives Marocaines Vol.1 p.287-290 fournit un plan de la Casbah.
- **Mots-clés primaires :**
  ```
  "Mogador" OR "Essaouira" gravure XVIIIe port site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Isle de Mogador" engraving 18th century
  ```
  ```
  "Essaouira" "plan XVIIIe" Cornut OR "Théodore Cornut" site:gallica.bnf.fr
  ```
- **Licence :** Domaine public
- **Attribution :** « Gravure XVIIIe siècle, Isle de Mogador — Wikimedia Commons »

---

### IMAGE 4 — Fac-similé Traité Maroc-USA 1786
- **Fichier :** `traite_usa_maroc_1786.jpg`
- **Usage :** Slide 6 (Apogée diplomatique — Reconnaissance des États-Unis)
- **État actuel :** ❌ **INUTILISABLE** (9 KB, 230×346). REMPLACEMENT IMPÉRATIF.
- **Contexte historique :** Traité de Paix et d'Amitié signé à Marrakech le 25 Chaabane 1200 (23 juin 1786). Plus ancien traité d'amitié ininterrompu des États-Unis. TAZI T.9 p.299 contient « صورة لأول معاهدة مع الولايات المتحدة الأمريكية » (image du premier traité avec les USA). L'original est aux National Archives (Washington), RG 59. La lettre de Mohammed III à George Washington est à la p.298.
- **Mots-clés primaires :**
  ```
  "Morocco United States treaty 1786" facsimile site:commons.wikimedia.org OR site:archives.gov
  ```
- **Mots-clés alternatifs :**
  ```
  "Moroccan-American Treaty of Friendship" 1786 document image
  ```
  ```
  "Treaty of Marrakesh" 1786 Morocco USA original document
  ```
  ```
  "treaty of peace and friendship" Morocco 1786 National Archives
  ```
  ```
  site:catalog.archives.gov "Morocco" treaty 1786
  ```
- **Sources prioritaires :**
  1. US National Archives (catalog.archives.gov) — RG 59, Diplomatic Posts Morocco
  2. Wikimedia Commons — File:Moroccan-American_Treaty_of_Friendship
  3. Library of Congress (loc.gov) — Treaty collection
  4. Avalon Project Yale — Treaty texts avec images
- **Résolution minimale requise :** 800×1200 (document portrait)
- **Licence :** Domaine public (document gouvernemental US / acte diplomatique XIXe s.)
- **Attribution :** « Traité de paix et d'amitié Maroc–États-Unis, 1786 — National Archives / Domaine public »

---

### IMAGE 5 — Réception ambassadeur marocain à Versailles
- **Fichier :** `ambassadeur_marocain_versailles.jpg`
- **Usage :** Slide 7 (Diplomatie de prestige)
- **État actuel :** ✅ Bon (935 KB, 1017×1003). **Conserver.**
- **Contexte historique :** Abdallah Ben Aicha (بن عائشة), ambassadeur marocain envoyé par Moulay Ismaïl auprès de Louis XIV en 1699. TAZI T.9 p.81 : « رسم لعبد الله بن عائشة سفير المغرب بفرنسا سنة 1699 » (Dessin de Ben Aicha, ambassadeur du Maroc en France en 1699). Sa signature est à la p.82. Avant lui, Mohammed Temim avait été envoyé en 1682 (portrait TAZI T.9 p.73).
- **Mots-clés primaires :**
  ```
  "ambassadeur marocain Versailles" OR "Ben Aicha Louis XIV" site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Abdallah Ben Aicha" ambassador Morocco France 1699 portrait
  ```
  ```
  "Mohammed Temim" ambassador Morocco 1682 portrait
  ```
  ```
  "ambassadeur du Maroc" gravure XVIIe Louis XIV Versailles
  ```
- **Si image actuelle déjà satisfaisante :** Vérifier juste que l'URL source Wikimedia est valide. Si oui, passer à l'image suivante.
- **Licence :** Domaine public (gravure XVIIIe s.)
- **Attribution :** « Gravure XVIIe-XVIIIe s. — Ambassadeur du Maroc reçu à la Cour de France — Wikimedia Commons »

---

### IMAGE 6 — Bataille d'Isly 1844 (Horace Vernet)
- **Fichier :** `bataille_isly_vernet_1844.jpg`
- **Usage :** Slide 8 (Choc colonial — Partie II)
- **État actuel :** ✅ Bon (438 KB, 1959×941). **Conserver**, mais vérifier si version encore plus haute résolution disponible.
- **Contexte historique :** Tableau d'Horace Vernet (1846) représentant la Bataille d'Isly du 14 août 1844 (Maréchal Bugeaud vs armée marocaine de Moulay Abderrahmane). NB : Les sources NotebookLM attestent que TAZI/BRIGNON ne contiennent PAS ce tableau spécifique de Vernet, mais le décrivent contextuellement. Le tableau est au Château de Versailles.
- **Mots-clés primaires :**
  ```
  "Battle of Isly" Vernet 1844 painting site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Bataille d'Isly" Horace Vernet 1846 huile toile
  ```
  ```
  "Vernet" "Isly" painting Versailles museum
  ```
- **URL Wikimedia connue :** `https://commons.wikimedia.org/wiki/File:Vernet_-_Bataille_d%27Isly_-_1846.jpg`
- **Licence :** Domaine public (Horace Vernet, m. 1863)
- **Attribution :** « Horace Vernet, *Bataille d'Isly*, 1846, Château de Versailles — Domaine public »

---

### IMAGE 7 — Conférence d'Algésiras 1906
- **Fichier :** `conference_algeciras_1906.jpg`
- **Usage :** Slide 10 (Internationalisation et résistance)
- **État actuel :** ⚠️ Petit (72 KB, 640×461). **REMPLACER** par version haute résolution.
- **Contexte historique :** Photographie historique de la Conférence d'Algésiras (janvier-avril 1906). El-Hadj el-Mokri, ambassadeur marocain en Espagne, signe l'Acte final le 7 avril 1906. 14 puissances présentes. L'Acte consacre formellement « souveraineté et indépendance du Sultan » mais instaure la police franco-espagnole des ports et la Banque d'État du Maroc. TAZI T.9 contient des portraits des délégués.
- **Mots-clés primaires :**
  ```
  "Conference Algeciras 1906" OR "Madrid conference 1880 Morocco" site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Algeciras Conference 1906" photograph delegates signing
  ```
  ```
  "Conférence d'Algésiras" 1906 photographie signature acte
  ```
  ```
  "AlgecirasConference" 1906 wikimedia
  ```
  ```
  "Convention de Madrid 1880" Maroc conférence
  ```
- **URL Wikimedia connue :** `https://commons.wikimedia.org/wiki/File:AlgecirasConference1906.jpg`
- **Action :** Naviguer vers la page Wikimedia, vérifier si une version haute résolution existe. Si non, chercher des alternatives sur Archive.org ou British Library digital.
- **Licence :** Domaine public (photographie 1906)
- **Attribution :** « Conférence d'Algésiras, 7 avril 1906 — Domaine public »

---

### IMAGE 8 — Signature Traité de Fès 1912
- **Fichier :** `traite_fes_1912_signatures.png`
- **Usage :** Slide 11 (Protectorat — Conclusion)
- **État actuel :** ⚠️ Acceptable (92 KB, 706×460). Tenter version meilleure.
- **Contexte historique :** Page des signatures du Traité de Fès (30 mars 1912), signé par le Sultan Moulay Hafid et le diplomate français Eugène Regnault. Instaure le Protectorat français au Maroc. TAZI T.9 contient le texte intégral avec signatures. Les Documents Diplomatiques - Affaires du Maroc (p.498-510) reproduisent l'intégralité.
- **Mots-clés primaires :**
  ```
  "Treaty of Fez 1912" OR "Traité de Fès signature" Moulay Hafid site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "traité protectorat Maroc 1912" signature document
  ```
  ```
  "Portion of signatures page Treaty of Fes" wikimedia
  ```
  ```
  "Moulay Hafid" "Regnault" treaty 1912 protectorate Morocco
  ```
- **URL Wikimedia connue :** `https://commons.wikimedia.org/wiki/File:Portion_of_signatures_page_of_the_Treaty_of_Fes.png`
- **Licence :** Domaine public (document diplomatique 1912)
- **Attribution :** « Page de signatures du Traité de Fès, 30 mars 1912 — Domaine public »

---

### IMAGE 9 — Carte frontières Maroc-Algérie (Oued Tafna)
- **Fichier :** `carte_frontieres_maroc_algerie.jpg`
- **Usage :** Slide 5 (Frontière orientale et rivalité ottomane)
- **État actuel :** ✅ Bon (364 KB, 1200×1610). **Conserver.**
- **Contexte historique :** Carte de la frontière entre l'Algérie et le Maroc. Moulay Ismaïl fixe la frontière à l'Oued Tafna vers 1678. Le Traité de Lalla Maghnia (18 mars 1845) imposera une frontière linéaire « étrangère à la conception marocaine des confins ». TAZI T.7 contient des cartes de la région frontalière.
- **Mots-clés primaires :**
  ```
  "frontière Maroc Algérie" carte ancienne Tafna site:gallica.bnf.fr
  ```
- **Mots-clés alternatifs :**
  ```
  "carte frontière Algérie Maroc" XIXe siècle Lalla Maghnia Tafna
  ```
  ```
  gallica.bnf.fr ark 12148 btv1b53021162x
  ```
- **URL Gallica connue :** `https://gallica.bnf.fr/ark:/12148/btv1b53021162x`
- **URL IIIF haute résolution :** `https://gallica.bnf.fr/iiif/ark:/12148/btv1b53021162x/f1/full/full/0/default.jpg`
- **Si image actuelle déjà satisfaisante :** Vérifier juste que l'URL Gallica est valide. Si oui, passer.
- **Licence :** Domaine public (BnF)
- **Attribution :** « Carte de la frontière entre l'Algérie et le Maroc — Gallica BnF »

---

### IMAGE 10 — Portrait Sidi Mohammed ben Abdallah (Mohammed III)
- **Fichier :** `portrait_mohammed_iii.png`
- **Usage :** Slide 6 (Apogée diplomatique)
- **État actuel :** ✅ OK (311 KB, 489×712). Conserver, chercher si meilleure version disponible.
- **Contexte historique :** Sultan du Maroc (r. 1757-1790), fondateur d'Essaouira, premier chef d'État à reconnaître l'indépendance américaine (1777). TAZI T.9 p.248 : « رسم للسلطان سيدي محمد بن عبد الله يستقبل بعثة دانماركية » (Dessin du Sultan recevant une mission danoise). L'image actuelle du manifest montre la négociation avec le capitaine Kinsbergen (hollandais).
- **Mots-clés primaires :**
  ```
  "Mohammed III" OR "Sidi Mohammed ben Abdallah" sultan Morocco portrait site:commons.wikimedia.org
  ```
- **Mots-clés alternatifs :**
  ```
  "Mohammed ben Abdallah" Morocco XVIII portrait engraving
  ```
  ```
  "Kinsbergen" "empereur Maroc" OR "Kaiser von Marokko" negotiation
  ```
  ```
  "Onderhandeling" "Kinsbergen" "Marokko" wikimedia
  ```
- **URL Wikimedia connue :** `https://commons.wikimedia.org/wiki/File:Onderhandeling_van_kapitein_JH_van_Kinsbergen_met_den_keizer_van_Marokko.png`
- **Licence :** Domaine public (illustration XIXe s.)
- **Attribution :** « Kinsbergen négociant avec Mohammed III du Maroc — Wikimedia Commons »

---

## CONTRAINTES TECHNIQUES

### Résolution minimale
- **Cartes et documents :** minimum 1000×1000 px
- **Portraits et gravures :** minimum 600×800 px
- **Photographies historiques :** minimum 800×600 px

### Formats acceptés
- JPEG (`.jpg`) pour photos et gravures
- PNG (`.png`) pour documents avec texte ou illustrations à fort contraste

### Nommage
- **Ne pas changer les noms de fichiers** déjà définis dans le manifest actuel
- Le remplacement se fait en écrasant le fichier existant

### Licences acceptées
- ✅ Domaine public (Public Domain)
- ✅ CC0 (Creative Commons Zero)
- ✅ CC BY (Creative Commons Attribution)
- ✅ CC BY-SA (Creative Commons Attribution-ShareAlike)
- ❌ Droits réservés (copyright)
- ❌ Usage éditorial uniquement (editorial use only)

---

## OUTPUT ATTENDU

### 1. Fichier manifest mis à jour

Générer/mettre à jour `ALL/Deliverables/images/manifest.json` avec le format suivant :

```json
{
  "generated": "2026-02-06",
  "project": "Diplomatie Alaouite - Fondations",
  "audit_note": "Images vérifiées et téléchargées via websearch + playwright + curl. Résolutions minimales respectées.",
  "images": [
    {
      "id": 1,
      "filename": "carte_empire_cherifien_xviiie.jpg",
      "title": "Carte de l'Empire de Maroc (XVIIIe siècle)",
      "source_url": "[URL de la page source]",
      "download_url": "[URL directe de l'image téléchargée]",
      "license": "Public Domain",
      "attribution": "[Attribution complète avec source]",
      "target_slide": 3,
      "description": "[Description de l'image]",
      "resolution": "[largeur]x[hauteur]",
      "file_size_bytes": 0,
      "download_status": "success|replaced|kept|failed",
      "download_date": "2026-02-06",
      "quality_note": "[Note sur la qualité : conservé / remplacé / nouveau]"
    }
  ]
}
```

### 2. Rapport de téléchargement

Après traitement des 10 images, afficher un tableau récapitulatif :

| # | Image | Status | Résolution | Taille | Source | Licence |
|---|---|---|---|---|---|---|
| 1 | carte_empire_cherifien... | ✅ Conservé | 1200×1086 | 232 KB | Gallica | PD |
| 2 | portrait_moulay_ismail | 🔄 Remplacé | ?×? | ? KB | ? | PD |
| ... | ... | ... | ... | ... | ... | ... |

### 3. Vérification finale

Exécuter :
```bash
echo "=== AUDIT FINAL DES IMAGES ===" && \
for f in ALL/Deliverables/images/*.jpg ALL/Deliverables/images/*.png; do \
  if [ -f "$f" ]; then \
    size=$(stat -c%s "$f") && \
    dims=$(file "$f" | grep -oP '\d+\s*x\s*\d+' | head -1) && \
    echo "$(basename $f): ${size} bytes, ${dims}"; \
  fi \
done
```

---

## PRIORITÉS DE REMPLACEMENT (ordre d'urgence)

1. 🔴 **IMAGE 4** — `traite_usa_maroc_1786.jpg` (9 KB = thumbnail inutilisable)
2. 🟠 **IMAGE 2** — `portrait_moulay_ismail.jpg` (87 KB, 404×495 = trop petit pour projection)
3. 🟠 **IMAGE 7** — `conference_algeciras_1906.jpg` (72 KB, 640×461 = acceptable mais améliorable)
4. 🟡 **IMAGE 8** — `traite_fes_1912_signatures.png` (92 KB, 706×460 = tenter meilleure version)
5. 🟢 **IMAGE 1** — Vérifier, conserver si OK
6. 🟢 **IMAGES 3, 5, 6, 9, 10** — Vérifier URLs, conserver si résolution suffisante

---

## STRATÉGIE DE FALLBACK

Si une image ne peut être trouvée en haute résolution sur les sources numériques :

1. **Fallback Wikimedia :** Chercher sur `https://commons.wikimedia.org/w/index.php?search=[termes]&title=Special:MediaSearch&type=image`
2. **Fallback Gallica IIIF :** Essayer des variations de l'identifiant ARK dans `https://gallica.bnf.fr/iiif/ark:/12148/[ID]/f1/full/full/0/default.jpg`
3. **Fallback Google Images :** Chercher `[termes] filetype:jpg -pinterest -shutterstock -alamy -gettyimages` et vérifier la licence
4. **Fallback thématique :** Si l'image exacte est introuvable, chercher une image alternative du même événement/personnage et mettre à jour le manifest en conséquence

---

## NOTES IMPORTANTES

- **Ne JAMAIS** télécharger d'images sous copyright ou avec watermark
- **Toujours** vérifier sur la page Wikimedia que la licence est bien indiquée
- **Préférer** les sources institutionnelles (BnF, Archives nationales, musées)
- Les images sont destinées à un **usage académique** (présentation universitaire)
- Après chaque téléchargement, exécuter `file` et `ls -la` pour confirmer l'intégrité

---

*Mega prompt généré le 2026-02-06 — Projet PHDM : Les Fondations de la Diplomatie Alaouite*
