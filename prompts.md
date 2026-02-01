# CONTEXTE

Tu es un expert Python/Colab spécialisé en traitement de documents PDF à grande échelle.
Tu vas améliorer un notebook Jupyter existant qui implémente un pipeline de conversion
PDF → Markdown + PDF Searchable utilisant Marker-PDF et OCRmyPDF.

## NOTEBOOK ACTUEL

Le notebook traite des documents académiques en français/anglais/arabe sur Google Colab
avec les étapes suivantes :

1. Installation dépendances (marker-pdf, ocrmypdf, langextract)
2. Montage Google Drive + configuration cache
3. Configuration dossiers (copie locale depuis Drive)
4. Installation Ollama (optionnel)
5. Configuration Marker (workers=1, batch_size=1, force_ocr=True)
6. Fonctions utilitaires (extraction références, figures, conversion)
7. LangExtract (optionnel)
8. Test sur 1 PDF
9. Pipeline batch avec reprise automatique
10. Lancement traitement
11. Synchronisation Drive

## OBJECTIFS DE L'AMÉLIORATION

### 🎯 OBJECTIF PRINCIPAL : Gestion intelligente des gros PDFs

Implémenter un système de **division/fusion automatique** pour les PDFs volumineux :

**Logique attendue :**

1. **Détection** : Identifier PDFs >50 pages OU >50 MB
2. **Division** : Découper en chunks de 25-30 pages
3. **Traitement** : Convertir chaque chunk indépendamment (Marker + OCRmyPDF)
4. **Fusion** : Recombiner les résultats :
   - Markdown : Concaténation intelligente avec séparateurs
   - Figures : Renommage unique (chunk_1_fig_01.png, chunk_2_fig_01.png)
   - PDF Searchable : Fusion via PyPDF2.PdfMerger
   - Références : Déduplication des entrées bibliographiques
5. **Nettoyage** : Supprimer chunks temporaires après fusion réussie

**Contraintes critiques :**

- Ne pas diviser au milieu d'une section si possible (détection heuristique optionnelle)
- Conserver métadonnées PDF originales dans le fichier fusionné
- Tracer chaque étape (logs détaillés)
- Gérer les erreurs de fusion avec fallback (garder chunks si fusion échoue)

### 🛠️ OBJECTIFS SECONDAIRES : Intégrer recommandations techniques

#### A. Gestion mémoire renforcée (PRIORITÉ HAUTE)

- Ajouter fonction `clear_memory()` avec gc + torch.cuda.empty_cache()
- Ajouter fonction `get_memory_stats()` retournant RAM% + VRAM
- Intégrer monitoring avant/après chaque PDF
- Appeler clear_memory() après chaque traitement

#### B. Tri intelligent des PDFs (PRIORITÉ HAUTE)

- Fonction `get_pdf_complexity(pdf_path)` → score = taille_MB × nb_pages
- Trier pdf_files par complexité croissante
- Afficher top 3 et bottom 3 avec leurs scores

#### C. Détection précoce problèmes (PRIORITÉ MOYENNE)

- Fonction `check_pdf_health(pdf_path, max_size_mb=50, max_pages=100)`
- Scanner tous les PDFs avant traitement
- Afficher warnings pour PDFs problématiques (volumineux, nombreuses pages, chiffrés)

#### D. Configuration adaptative (PRIORITÉ MOYENNE)

- Détecter RAM/VRAM disponibles
- Adapter marker_config selon ressources :
  * RAM ≥25GB + VRAM ≥15GB : workers=2, batch_size=4
  * RAM ≥12GB + VRAM ≥15GB : workers=2, batch_size=2  ⚠️ IMPORTANT : workers=2 (pas 1)
  * Sinon : workers=1, batch_size=1

#### E. Robustesse OCRmyPDF (PRIORITÉ HAUTE)

- Modifier `make_searchable_pdf()` :
  * Ajouter max_retries=2
  * Ajouter timeout=300s
  * Ajouter --language fra+eng+ara
  * Ajouter --skip-big 10
  * Gérer TimeoutExpired + retry sur OOM

#### F. Backup incrémental optimisé (PRIORITÉ HAUTE)

- Créer fonction `sync_to_drive(local_dir, drive_dir, rsync=True)`
- Essayer rsync avec --update (incrémental)
- Fallback sur shutil.copy2 si rsync échoue
- Appeler tous les CHECKPOINT_INTERVAL=10 PDFs

#### G. Dashboard temps réel (PRIORITÉ BASSE)

- Fonction `display_progress_dashboard(results, errors, start_time)`
- Afficher HTML avec barre de progression
- Métriques : avancement %, réussis, erreurs, temps écoulé, ETA, taux réussite, vitesse

## STRUCTURE ATTENDUE DU CODE AJOUTÉ

### 📦 Nouvelle section : Gestion des gros PDFs

Ajouter **AVANT l'Étape 9** (process_all_documents) :

```python
## Étape 8b — Gestion intelligente des gros PDFs

### Division et fusion automatiques pour optimiser mémoire
```
