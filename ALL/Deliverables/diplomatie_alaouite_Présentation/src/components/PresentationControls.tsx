import React, { useState, useEffect } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  StickyNote, 
  Info,
  Download,
  Pencil,
  Save
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onToggleNotes: () => void;
  showNotes: boolean;
  isEditing: boolean;
  onToggleEdit: () => void;
  onSave: () => void;
  isSaving: boolean;
  onExport: () => void;
  isExporting: boolean;
}

export function PresentationControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onToggleNotes,
  showNotes,
  isEditing,
  onToggleEdit,
  onSave,
  isSaving,
  onExport,
  isExporting,
}: PresentationControlsProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const progressValue = (currentSlide / totalSlides) * 100;

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <TooltipProvider>
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative bg-card/80 backdrop-blur-md border border-border/50 rounded-2xl p-4 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full">
            <Progress value={progressValue} className="h-1 rounded-none bg-transparent" />
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onPrevious}
                    disabled={currentSlide <= 1}
                    className="rounded-full border-border/40 hover:bg-accent/10 transition-all"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Précédent</TooltipContent>
              </Tooltip>

              <div className="flex flex-col items-center min-w-[80px]">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                  Diapositive
                </span>
                <span className="text-lg font-bold font-mono text-primary">
                  {currentSlide.toString().padStart(2, "0")} 
                  <span className="text-muted-foreground/50 mx-1">/</span>
                  {totalSlides}
                </span>
              </div>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onNext}
                    disabled={currentSlide >= totalSlides}
                    className="rounded-full border-border/40 hover:bg-accent/10 transition-all"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Suivant</TooltipContent>
              </Tooltip>
            </div>

            <div className="h-8 w-[1px] bg-border/40 hidden sm:block" />

            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onSave}
                    disabled={isSaving}
                    className="rounded-full border-border/40 hover:bg-accent/10 transition-all"
                  >
                    <Save className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isSaving ? "Enregistrement" : "Enregistrer"}</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={onExport}
                    disabled={isExporting}
                    className="rounded-full border-border/40 hover:bg-accent/10 transition-all"
                  >
                    <Download className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {isExporting ? "Export en cours" : "Exporter en PowerPoint"}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={isEditing ? "default" : "outline"}
                    size="icon"
                    onClick={onToggleEdit}
                    className={cn(
                      "rounded-full transition-all",
                      isEditing ? "bg-primary shadow-lg shadow-primary/20" : "border-border/40"
                    )}
                  >
                    <Pencil className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isEditing ? "Quitter le mode édition" : "Mode édition"}</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={showNotes ? "default" : "outline"}
                    size="icon"
                    onClick={onToggleNotes}
                    className={cn(
                      "rounded-full transition-all",
                      showNotes ? "bg-primary shadow-lg shadow-primary/20" : "border-border/40"
                    )}
                  >
                    <StickyNote className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notes du présentateur</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleFullscreen}
                    className="rounded-full border-border/40 hover:bg-accent/10 transition-all"
                  >
                    {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isFullscreen ? "Quitter le plein écran" : "Plein écran"}</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Info className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs text-xs">
                  © 2026 - Diplomatie Alaouite : Fondations. 
                  Utilisez les flèches du clavier pour naviguer.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </motion.div>
      </div>
    </TooltipProvider>
  );
}
