import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Info } from "lucide-react";
import { SlideNavigation } from "@/components/SlideNavigation";
import { SlideContent } from "@/components/SlideContent";
import { PresentationControls } from "@/components/PresentationControls";
import { SLIDES_METADATA, PART_LABELS, Slide } from "@/lib/index";
import { springPresets } from "@/lib/motion";
import { exportPresentationPptx } from "@/lib/pptx-export";
import { slidesContent } from "@/data/slides";

/**
 * Page principale de la présentation magistrale sur la Diplomatie Alaouite.
 * Gère l'état global de la navigation, le mode plein écran et les notes du présentateur.
 */
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showNotes, setShowNotes] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isExporting, setIsExporting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [slides, setSlides] = useState<Slide[]>(slidesContent);
  const totalSlides = SLIDES_METADATA.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  }, []);

  const handleSlideChange = (slide: number) => {
    setCurrentSlide(slide);
    if (window.innerWidth < 1024) setIsSidebarOpen(false);
  };

  const toggleNotes = () => setShowNotes((prev) => !prev);
  const toggleEdit = () => setIsEditing((prev) => !prev);

  const handleExport = async () => {
    if (isExporting) return;
    setIsExporting(true);
    try {
      await exportPresentationPptx(slides);
    } finally {
      setIsExporting(false);
    }
  };

  const handleSave = async () => {
    if (isSaving) return;
    setIsSaving(true);

    try {
      const payloadSlides = slides.map((slide) => ({
        ...slide,
        partLabel: PART_LABELS[slide.part],
      }));

      const response = await fetch("/__save_slides", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slides: payloadSlides }),
      });

      if (!response.ok) {
        throw new Error("Enregistrement impossible");
      }

      window.alert("Modifications enregistrees dans src/data/slides.ts");
    } catch (error) {
      console.error(error);
      window.alert("Erreur lors de l'enregistrement. Consultez la console.");
    } finally {
      setIsSaving(false);
    }
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tagName = target?.tagName?.toLowerCase();
      const isEditableTarget =
        target?.isContentEditable ||
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select";

      if (isEditableTarget) return;

      if (e.key === "ArrowRight" || e.key === " ") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "n") toggleNotes();
      if (e.key === "e") toggleEdit();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const currentMetadata = SLIDES_METADATA.find((s) => s.id === currentSlide);
  const currentPartLabel = currentMetadata ? PART_LABELS[currentMetadata.part] : "";
  const currentSlideData = useMemo(
    () => slides.find((slide) => slide.id === currentSlide),
    [slides, currentSlide]
  );
  const presenterNotes = currentSlideData?.presenterNotes ?? "";

  const handleSlideUpdate = (slideId: number, updates: Partial<Slide>) => {
    setSlides((prev) =>
      prev.map((slide) => (slide.id === slideId ? { ...slide, ...updates } : slide))
    );
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background">
      {/* Sidebar de Navigation */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? "320px" : "0px" }}
        transition={springPresets.gentle}
        className="relative z-40 h-full border-r border-border bg-sidebar flex-shrink-0 overflow-hidden lg:block"
      >
        <div className="w-[320px] h-full flex flex-col">
          <div className="p-6 border-b border-sidebar-border">
            <h1 className="text-lg font-bold text-primary leading-tight uppercase tracking-widest">
              Diplomatie Alaouite
            </h1>
            <p className="text-xs text-muted-foreground mt-1 font-mono">
              FONDATIONS (1666-1912)
            </p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <SlideNavigation
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
              totalSlides={totalSlides}
            />
          </div>
        </div>
      </motion.aside>

      {/* Zone Principale de Présentation */}
      <main className="relative flex flex-1 flex-col h-full min-w-0">
        {/* Header de la Slide */}
        <header className="flex items-center justify-between px-8 py-4 border-b border-border bg-card/50 backdrop-blur-sm z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-accent rounded-md transition-colors text-muted-foreground"
              aria-label="Toggle Sidebar"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div>
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-tighter">
                {currentPartLabel}
              </span>
              <h2 className="text-sm font-semibold text-foreground truncate max-w-[300px] lg:max-w-md">
                {currentSlideData?.title ?? currentMetadata?.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isEditing && (
              <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                  Mode Edition
                </span>
              </div>
            )}
            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs font-mono font-bold text-primary">
                {currentSlide.toString().padStart(2, "0")} / {totalSlides}
              </span>
            </div>
          </div>
        </header>

        {/* Contenu de la Slide */}
        <div className="flex-1 relative overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={springPresets.smooth}
              className="h-full"
            >
              <SlideContent
                slide={currentSlideData}
                isEditing={isEditing}
                onSlideUpdate={handleSlideUpdate}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contrôles Inférieurs */}
        <div className="z-30">
          <PresentationControls
            currentSlide={currentSlide}
            totalSlides={totalSlides}
            onPrevious={handlePrev}
            onNext={handleNext}
            onToggleNotes={toggleNotes}
            showNotes={showNotes}
            isEditing={isEditing}
            onToggleEdit={toggleEdit}
            onSave={handleSave}
            isSaving={isSaving}
            onExport={handleExport}
            isExporting={isExporting}
          />
        </div>

        {/* Overlay des Notes du Présentateur */}
        <AnimatePresence>
          {showNotes && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50"
            >
              <div className="bg-card/95 backdrop-blur-md border border-accent shadow-2xl rounded-xl p-6 ring-1 ring-primary/20">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Info size={18} />
                  <h3 className="text-sm font-bold uppercase tracking-wider">Notes Magistrales</h3>
                </div>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-foreground/90 italic leading-relaxed">
                    Cette section contient les détails académiques approfondis pour l'étayage du discours oral.
                  </p>
                  {/* Les notes spécifiques sont injectées par SlideContent ou via une autre prop si nécessaire */}
                  {isEditing ? (
                    <div
                      id="presenter-notes-container"
                      className="mt-2 font-serif text-base leading-relaxed editable-text"
                      contentEditable
                      suppressContentEditableWarning
                      data-placeholder="Notes du presentateur"
                      onBlur={(event) =>
                        handleSlideUpdate(currentSlide, {
                          presenterNotes: event.currentTarget.textContent ?? "",
                        })
                      }
                    >
                      {presenterNotes}
                    </div>
                  ) : (
                    <div id="presenter-notes-container" className="mt-2 font-serif text-base leading-relaxed">
                      {presenterNotes || `Les notes detaillees pour la slide ${currentSlide} sont disponibles dans le document source.`}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Filigrane Institutionnel */}
      <div className="fixed bottom-4 right-4 pointer-events-none opacity-10 select-none z-0">
        <p className="text-[60px] font-bold text-primary whitespace-nowrap leading-none">
          Histoire des pratiques diplomatiques Alaouites
        </p>
      </div>
    </div>
  );
}
