/**
 * Types et constantes pour la présentation magistrale sur la Diplomatie Alaouite (1666-1912).
 * © 2026 Professeur Agrégé en Histoire des Relations Internationales.
 */


export type PresentationPart = "I" | "II" | "III" | "IV";

export interface SlideCitation {
  text: string;
  author: string;
  context?: string;
}

export interface SlideConcept {
  term: string;
  definition: string;
}

export interface SlideReference {
  label: string;
  source: string;
}

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  part: PresentationPart;
  partLabel: string;
  category?: string;
  content: {
    narrative?: string;
    bullets?: string[];
    citations?: SlideCitation[];
    concepts?: SlideConcept[];
    references?: SlideReference[];
    contextNote?: string;
    table?: {
      headers: string[];
      rows: string[][];
    };
  };
  images?: string[];
  imageInfo?: {
    source?: string;
    caption?: string;
  }[];
  presenterNotes?: string;
}

export const ROUTE_PATHS = {
  HOME: "/",
} as const;

export const SLIDES_METADATA = [
  { id: 1, title: "Titre & Problématique", part: "I" },
  { id: 2, title: "Plan de la présentation", part: "I" },
  { id: 3, title: "L'Accroche Narrative", part: "I" },
  { id: 4, title: "Fondements Théologico-Politiques", part: "I" },
  { id: 5, title: "La Genèse Alaouite", part: "II" },
  { id: 6, title: "Le Rejet de la Suzeraineté Ottomane", part: "II" },
  { id: 7, title: "La Diplomatie du Pair à Pair", part: "II" },
  { id: 8, title: "La Diplomatie Corsaire", part: "II" },
  { id: 9, title: "La Parenthèse de l'Anomie", part: "II" },
  { id: 10, title: "Sidi Mohammed ben Abdallah", part: "II" },
  { id: 11, title: "Essaouira - Le Laboratoire", part: "II" },
  { id: 12, title: "L'Appareil Diplomatique", part: "II" },
  { id: 13, title: "Les Acteurs Intermédiaires", part: "II" },
  { id: 14, title: "Moulay Slimane - Le Repli", part: "II" },
  { id: 15, title: "Bilan Partie I", part: "II" },
  { id: 16, title: "Transition", part: "II" },
  { id: 17, title: "Le Choc d'Isly (1844)", part: "III" },
  { id: 18, title: "Le Tournant de 1856", part: "III" },
  { id: 19, title: "La Guerre de Tétouan & La Dette", part: "III" },
  { id: 20, title: "La Conventions Béclard (1863)", part: "III" },
  { id: 21, title: "Conférence de Madrid (1880)", part: "III" },
  { id: 22, title: "La Stratégie du Tadmin", part: "III" },
  { id: 23, title: "Moulay Hassan Ier - Le Résistant", part: "III" },
  { id: 24, title: "Le Verrouillage (1900-1904)", part: "III" },
  { id: 25, title: "Le Coup de Tanger (1905)", part: "III" },
  { id: 26, title: "Conférence d'Algésiras (1906)", part: "III" },
  { id: 27, title: "L'Échec des Réformes Internes", part: "III" },
  { id: 28, title: "La Crise Finale (1907-1911)", part: "III" },
  { id: 29, title: "Le Traité de Fès (1912)", part: "III" },
  { id: 30, title: "Analyse Juridique Souveraineté Amputée", part: "III" },
  { id: 31, title: "Tableau Comparatif", part: "IV" },
  { id: 32, title: "Frise Chronologique Synthétique", part: "IV" },
  { id: 33, title: "Synthèse Finale", part: "IV" },
  { id: 34, title: "Bibliographie Académique", part: "IV" },
] as const;

export const PART_LABELS: Record<PresentationPart, string> = {
  I: "Introduction & Cadrage",
  II: "Partie I : Architecture et Projection (1666-1844)",
  III: "Partie II : Résistance et Protectorat (1844-1912)",
  IV: "Conclusion & Annexes",
};
