import React from "react";
import { 
  SLIDES_METADATA, 
  PART_LABELS, 
  PresentationPart 
} from "@/lib/index";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  History, 
  ChevronRight, 
  Compass, 
  ShieldAlert, 
  Library 
} from "lucide-react";

interface SlideNavigationProps {
  currentSlide: number;
  onSlideChange: (slide: number) => void;
  totalSlides: number;
}

export function SlideNavigation({ 
  currentSlide, 
  onSlideChange, 
  totalSlides 
}: SlideNavigationProps) {
  const progress = (currentSlide / totalSlides) * 100;

  const parts: PresentationPart[] = ["I", "II", "III", "IV"];

  const getPartIcon = (part: PresentationPart) => {
    switch (part) {
      case "I": return <History className="w-4 h-4" />;
      case "II": return <Compass className="w-4 h-4" />;
      case "III": return <ShieldAlert className="w-4 h-4" />;
      case "IV": return <Library className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <aside className="flex flex-col h-full bg-sidebar border-r border-sidebar-border w-80">
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">DA</span>
          </div>
          <div>
            <h2 className="text-sm font-bold leading-tight tracking-tight uppercase">
              Diplomatie Alaouite
            </h2>
            <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">
              Fondations (1666-1912)
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <span className="text-[10px] font-mono font-bold text-primary">
              PROGRESSION
            </span>
            <span className="text-[10px] font-mono text-muted-foreground">
              {currentSlide} / {totalSlides}
            </span>
          </div>
          <Progress value={progress} className="h-1 bg-muted" />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="px-4 pb-8 space-y-6">
          {parts.map((part) => (
            <div key={part} className="space-y-2">
              <div className="flex items-center gap-2 px-2 py-1 sticky top-0 bg-sidebar/95 backdrop-blur-sm z-10">
                <span className="text-primary">{getPartIcon(part)}</span>
                <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {PART_LABELS[part]}
                </h3>
              </div>

              <div className="space-y-1">
                {SLIDES_METADATA.filter((s) => s.part === part).map((slide) => (
                  <button
                    key={slide.id}
                    onClick={() => onSlideChange(slide.id)}
                    className={cn(
                      "w-full flex items-start gap-3 px-3 py-2 rounded-md text-left transition-all duration-200 group",
                      currentSlide === slide.id
                        ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-sm ring-1 ring-ring/20"
                        : "hover:bg-sidebar-accent/50 text-sidebar-foreground/70 hover:text-sidebar-foreground"
                    )}
                  >
                    <span className={cn(
                      "mt-0.5 font-mono text-[10px] w-5",
                      currentSlide === slide.id ? "text-primary" : "text-muted-foreground"
                    )}>
                      {slide.id.toString().padStart(2, '0')}
                    </span>
                    <span className="text-xs font-medium leading-tight">
                      {slide.title}
                    </span>
                    {currentSlide === slide.id && (
                      <ChevronRight className="ml-auto w-3 h-3 text-primary animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-sidebar-border bg-sidebar-accent/30">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-background/50 border-primary/20 text-[9px] font-mono">
            © 2026 ACADEMIA
          </Badge>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          </div>
        </div>
      </div>
    </aside>
  );
}
