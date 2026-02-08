import React, { ElementType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BookOpen, 
  Quote, 
  Lightbulb, 
  FileText, 
  ChevronRight, 
  Image as ImageIcon,
  History
} from "lucide-react";
import { Slide, PART_LABELS } from "@/lib/index";
import { IMAGES } from "@/assets/images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { springPresets } from "@/lib/motion";

interface SlideContentProps {
  slide?: Slide;
  isEditing: boolean;
  onSlideUpdate: (slideId: number, updates: Partial<Slide>) => void;
}

interface EditableTextProps {
  value?: string;
  onChange?: (nextValue: string) => void;
  isEditing: boolean;
  as?: ElementType;
  className?: string;
  placeholder?: string;
  multiline?: boolean;
}

function EditableText({
  value = "",
  onChange,
  isEditing,
  as: Tag = "span",
  className,
  placeholder,
  multiline = false,
}: EditableTextProps) {
  if (!isEditing) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag
      className={`${className ?? ""} editable-text`}
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onBlur={(event: React.FocusEvent<HTMLElement>) =>
        onChange?.(event.currentTarget.textContent ?? "")
      }
      onKeyDown={(event: React.KeyboardEvent<HTMLElement>) => {
        if (!multiline && event.key === "Enter") {
          event.preventDefault();
          (event.currentTarget as HTMLElement).blur();
        }
      }}
    >
      {value}
    </Tag>
  );
}

export function SlideContent({ slide, isEditing, onSlideUpdate }: SlideContentProps) {

  if (!slide) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Diapositive non trouvée.
      </div>
    );
  }

  const resolveImageSrc = (imgKey: string) =>
    imgKey in IMAGES ? IMAGES[imgKey as keyof typeof IMAGES] : imgKey;

  const contextDefault =
    "Les relations extérieures de la dynastie alaouite entre 1666 et 1912 témoignent d'une remarquable continuité institutionnelle malgré les pressions asymétriques du XIXe siècle.";

  const handleImageUpdate = (index: number, nextValue: string) => {
    const nextImages = [...(slide.images ?? [])];
    nextImages[index] = nextValue;
    onSlideUpdate(slide.id, { images: nextImages });
  };

  const handleImageInfoUpdate = (index: number, updates: { source?: string; caption?: string }) => {
    const nextInfo = [...(slide.imageInfo ?? [])];
    nextInfo[index] = { ...nextInfo[index], ...updates };
    onSlideUpdate(slide.id, { imageInfo: nextInfo });
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={springPresets.smooth}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full max-h-[85vh] overflow-y-auto pr-4"
      >
        {/* Main Content Area */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <header className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground font-medium">
                {PART_LABELS[slide.part]}
              </Badge>
              {slide.category && (
                <Badge className="bg-primary/10 text-primary border-none">
                  {slide.category}
                </Badge>
              )}
            </div>
            <EditableText
              as="h1"
              value={slide.title}
              isEditing={isEditing}
              placeholder="Titre de la diapositive"
              className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight"
              onChange={(nextTitle) => onSlideUpdate(slide.id, { title: nextTitle })}
            />
            {(slide.subtitle || isEditing) && (
              <EditableText
                as="p"
                value={slide.subtitle ?? ""}
                isEditing={isEditing}
                placeholder="Sous-titre"
                className="text-xl font-medium text-muted-foreground italic"
                onChange={(nextSubtitle) => onSlideUpdate(slide.id, { subtitle: nextSubtitle })}
              />
            )}
          </header>

          <Separator className="bg-border/50" />

          <section className="space-y-6 text-lg leading-relaxed">
            {(slide.content.narrative || isEditing) && (
              <EditableText
                as="p"
                value={slide.content.narrative ?? ""}
                isEditing={isEditing}
                placeholder="Texte narratif"
                className="text-foreground/90 font-sans"
                multiline
                onChange={(nextNarrative) =>
                  onSlideUpdate(slide.id, {
                    content: { ...slide.content, narrative: nextNarrative },
                  })
                }
              />
            )}

            {slide.content.bullets && (
              <ul className="space-y-3">
                {slide.content.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 mt-1 text-primary shrink-0" />
                    <EditableText
                      as="span"
                      value={bullet}
                      isEditing={isEditing}
                      placeholder="Point de liste"
                      onChange={(nextBullet) => {
                        const nextBullets = [...slide.content.bullets!];
                        nextBullets[idx] = nextBullet;
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, bullets: nextBullets },
                        });
                      }}
                    />
                  </li>
                ))}
              </ul>
            )}

            {slide.content.citations && (
              <div className="space-y-4">
                {slide.content.citations.map((cite, idx) => (
                  <blockquote 
                    key={idx} 
                    className="relative pl-8 pr-4 py-4 bg-primary/5 border-l-4 border-primary rounded-r-lg italic"
                  >
                    <Quote className="absolute top-2 left-2 w-5 h-5 text-primary/30" />
                    <EditableText
                      as="p"
                      value={`"${cite.text}"`}
                      isEditing={isEditing}
                      placeholder="Citation"
                      className="text-foreground"
                      multiline
                      onChange={(nextText) => {
                        const cleaned = nextText.replace(/^"|"$/g, "");
                        const nextCitations = [...slide.content.citations!];
                        nextCitations[idx] = { ...cite, text: cleaned };
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, citations: nextCitations },
                        });
                      }}
                    />
                    <footer className="mt-2 text-sm font-semibold text-primary">
                      <EditableText
                        as="span"
                        value={`— ${cite.author}`}
                        isEditing={isEditing}
                        placeholder="Auteur"
                        onChange={(nextAuthor) => {
                          const cleaned = nextAuthor.replace(/^—\s*/, "");
                          const nextCitations = [...slide.content.citations!];
                          nextCitations[idx] = { ...cite, author: cleaned };
                          onSlideUpdate(slide.id, {
                            content: { ...slide.content, citations: nextCitations },
                          });
                        }}
                      />
                      {cite.context && (
                        <EditableText
                          as="span"
                          value={`, ${cite.context}`}
                          isEditing={isEditing}
                          placeholder="Contexte"
                          onChange={(nextContext) => {
                            const cleaned = nextContext.replace(/^,\s*/, "");
                            const nextCitations = [...slide.content.citations!];
                            nextCitations[idx] = { ...cite, context: cleaned };
                            onSlideUpdate(slide.id, {
                              content: { ...slide.content, citations: nextCitations },
                            });
                          }}
                        />
                      )}
                    </footer>
                  </blockquote>
                ))}
              </div>
            )}

            {slide.content.table && (
              <div className="rounded-md border border-border bg-card">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      {slide.content.table.headers.map((header, idx) => (
                        <TableHead key={idx} className="font-bold text-primary">
                          <EditableText
                            as="span"
                            value={header}
                            isEditing={isEditing}
                            placeholder="En-tete"
                            onChange={(nextHeader) => {
                              const nextHeaders = [...slide.content.table!.headers];
                              nextHeaders[idx] = nextHeader;
                              onSlideUpdate(slide.id, {
                                content: {
                                  ...slide.content,
                                  table: {
                                    ...slide.content.table!,
                                    headers: nextHeaders,
                                  },
                                },
                              });
                            }}
                          />
                        </TableHead>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {slide.content.table.rows.map((row, rowIdx) => (
                      <TableRow key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <TableCell key={cellIdx} className="font-medium">
                            <EditableText
                              as="span"
                              value={cell}
                              isEditing={isEditing}
                              placeholder="Cellule"
                              onChange={(nextCell) => {
                                const nextRows = slide.content.table!.rows.map((existingRow) => [...existingRow]);
                                nextRows[rowIdx][cellIdx] = nextCell;
                                onSlideUpdate(slide.id, {
                                  content: {
                                    ...slide.content,
                                    table: {
                                      ...slide.content.table!,
                                      rows: nextRows,
                                    },
                                  },
                                });
                              }}
                            />
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {slide.content.concepts?.map((concept, idx) => (
                <Card key={idx} className="border-accent/30 bg-accent/5 overflow-hidden group hover:border-accent transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-accent-foreground">
                      <Lightbulb className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">Concept</span>
                    </div>
                    <EditableText
                      as="h4"
                      value={concept.term}
                      isEditing={isEditing}
                      placeholder="Terme"
                      className="font-bold text-lg mb-1"
                      onChange={(nextTerm) => {
                        const nextConcepts = [...slide.content.concepts!];
                        nextConcepts[idx] = { ...concept, term: nextTerm };
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, concepts: nextConcepts },
                        });
                      }}
                    />
                    <EditableText
                      as="p"
                      value={concept.definition}
                      isEditing={isEditing}
                      placeholder="Definition"
                      className="text-sm text-muted-foreground"
                      multiline
                      onChange={(nextDefinition) => {
                        const nextConcepts = [...slide.content.concepts!];
                        nextConcepts[idx] = { ...concept, definition: nextDefinition };
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, concepts: nextConcepts },
                        });
                      }}
                    />
                  </CardContent>
                </Card>
              ))}

              {slide.content.references?.map((ref, idx) => (
                <Card key={idx} className="border-primary/20 bg-primary/5 overflow-hidden group hover:border-primary transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-bold uppercase tracking-wider">Référence</span>
                    </div>
                    <EditableText
                      as="h4"
                      value={ref.label}
                      isEditing={isEditing}
                      placeholder="Reference"
                      className="font-bold text-lg mb-1"
                      onChange={(nextLabel) => {
                        const nextRefs = [...slide.content.references!];
                        nextRefs[idx] = { ...ref, label: nextLabel };
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, references: nextRefs },
                        });
                      }}
                    />
                    <EditableText
                      as="p"
                      value={ref.source}
                      isEditing={isEditing}
                      placeholder="Source"
                      className="text-sm text-muted-foreground"
                      multiline
                      onChange={(nextSource) => {
                        const nextRefs = [...slide.content.references!];
                        nextRefs[idx] = { ...ref, source: nextSource };
                        onSlideUpdate(slide.id, {
                          content: { ...slide.content, references: nextRefs },
                        });
                      }}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar Area: Visuals and Data */}
        <div className="lg:col-span-5 space-y-6">
          {slide.images && slide.images.length > 0 && (
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-card">
              <Carousel className="w-full">
                <CarouselContent>
                  {slide.images.map((imgKey, idx) => (
                    <CarouselItem key={idx}>
                      {(() => {
                        const imageMeta = slide.imageInfo?.[idx];
                        const sourceLabel = imageMeta?.source || "Source d'epoque / Archives";
                        const captionValue = imageMeta?.caption ?? "";

                        return (
                      <div className="aspect-[4/3] relative">
                        <img 
                          src={resolveImageSrc(imgKey)} 
                          alt={slide.title} 
                          className="object-cover w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90 text-sm">
                          <ImageIcon className="w-4 h-4" />
                          <EditableText
                            as="span"
                            value={sourceLabel}
                            isEditing={isEditing}
                            placeholder="Source"
                            onChange={(nextSource) => handleImageInfoUpdate(idx, { source: nextSource })}
                          />
                        </div>
                        {isEditing && (
                          <div className="absolute top-3 right-3 rounded-md border border-white/40 bg-black/60 p-3 text-xs text-white backdrop-blur-sm">
                            <div className="text-[10px] uppercase tracking-widest text-white/70">Image</div>
                            <EditableText
                              as="div"
                              value={imgKey}
                              isEditing={isEditing}
                              placeholder="Cle ou URL"
                              className="mt-1 text-white"
                              onChange={(nextValue) => handleImageUpdate(idx, nextValue)}
                            />
                          </div>
                        )}
                      </div>
                        );
                      })()}
                      {(isEditing || (slide.imageInfo?.[idx]?.caption ?? "")) && (
                        <div className="px-4 pb-4 pt-3 text-xs text-muted-foreground italic">
                          <EditableText
                            as="p"
                            value={slide.imageInfo?.[idx]?.caption ?? ""}
                            isEditing={isEditing}
                            placeholder="Legende de l'image"
                            className="text-muted-foreground"
                            multiline
                            onChange={(nextCaption) => handleImageInfoUpdate(idx, { caption: nextCaption })}
                          />
                        </div>
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {slide.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2 bg-white/20 hover:bg-white/40 border-none text-white" />
                    <CarouselNext className="right-2 bg-white/20 hover:bg-white/40 border-none text-white" />
                  </>
                )}
              </Carousel>
            </div>
          )}

          <Card className="border-dashed border-2 border-muted bg-muted/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <History className="w-6 h-6" />
                <h3 className="text-xl font-bold tracking-tight">Contexte Diplomatique</h3>
              </div>
              <EditableText
                as="p"
                value={slide.content.contextNote ?? contextDefault}
                isEditing={isEditing}
                placeholder="Note de contexte diplomatique"
                className="text-sm text-muted-foreground leading-relaxed italic"
                multiline
                onChange={(nextNote) =>
                  onSlideUpdate(slide.id, {
                    content: { ...slide.content, contextNote: nextNote },
                  })
                }
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="outline" className="font-mono text-[10px]">DOC_REF_{slide.id.toString().padStart(3, '0')}</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">© 2026 PROF_HIST</Badge>
                <Badge variant="outline" className="font-mono text-[10px]">ARCH_CHERIF</Badge>
              </div>
            </CardContent>
          </Card>

          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10 flex items-center gap-4">
            <FileText className="w-8 h-8 text-primary shrink-0" />
            <div>
              <h5 className="text-sm font-bold">Note Académique</h5>
              <p className="text-xs text-muted-foreground">
                Contenu extrait des archives diplomatiques et validé par le conseil académique.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
