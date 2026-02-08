import pptxgen from "pptxgenjs";
import { slidesContent } from "@/data/slides";
import { IMAGES } from "@/assets/images";
import { PART_LABELS } from "@/lib/index";

const SLIDE_WIDTH = 13.333;
const SLIDE_HEIGHT = 7.5;

const THEME = {
  background: "FDF7EF",
  foreground: "2B1F1A",
  muted: "6F5A4C",
  primary: "8A2C1F",
  accent: "D6B25A",
  border: "E3D7C6",
};

const FONT = {
  sans: "Plus Jakarta Sans",
  serif: "Crimson Pro",
  mono: "JetBrains Mono",
};

const imageCache = new Map<string, string>();

const toDataUrl = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });

const fetchImageDataUrl = async (src: string) => {
  if (imageCache.has(src)) {
    return imageCache.get(src) as string;
  }
  const response = await fetch(src);
  const blob = await response.blob();
  const dataUrl = await toDataUrl(blob);
  imageCache.set(src, dataUrl);
  return dataUrl;
};

const resolveImageSrc = (imgKey: string) =>
  imgKey in IMAGES ? IMAGES[imgKey as keyof typeof IMAGES] : imgKey;

const buildBodyText = (slide: (typeof slidesContent)[number]) => {
  const lines: string[] = [];

  if (slide.content.narrative) {
    lines.push(slide.content.narrative);
    lines.push("");
  }

  if (slide.content.contextNote) {
    lines.push(`Contexte: ${slide.content.contextNote}`);
    lines.push("");
  }

  if (slide.content.bullets?.length) {
    slide.content.bullets.forEach((bullet) => {
      lines.push(`- ${bullet}`);
    });
    lines.push("");
  }

  if (slide.content.citations?.length) {
    slide.content.citations.forEach((citation) => {
      const context = citation.context ? `, ${citation.context}` : "";
      lines.push(`"${citation.text}" — ${citation.author}${context}`);
    });
    lines.push("");
  }

  if (slide.content.concepts?.length) {
    lines.push("Concepts:");
    slide.content.concepts.forEach((concept) => {
      lines.push(`- ${concept.term}: ${concept.definition}`);
    });
    lines.push("");
  }

  if (slide.content.references?.length) {
    lines.push("References:");
    slide.content.references.forEach((ref) => {
      lines.push(`- ${ref.label}: ${ref.source}`);
    });
  }

  return lines.join("\n").trim();
};

export const exportPresentationPptx = async (slides = slidesContent) => {
  const pptx = new pptxgen();
  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Diplomatie Alaouite";
  pptx.company = "Makhzen Diplomacy";
  pptx.subject = "Fondations de la diplomatie alaouite";
  pptx.title = "Diplomatie Alaouite (1666-1912)";

  const leftX = 0.6;
  const rightX = 7.5;
  const columnTop = 1.35;
  const leftWidth = 6.6;
  const rightWidth = SLIDE_WIDTH - rightX - 0.6;
  const contentHeight = SLIDE_HEIGHT - columnTop - 0.8;

  for (const slide of slides) {
    const pptSlide = pptx.addSlide();
    pptSlide.background = { color: THEME.background };

    pptSlide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: SLIDE_WIDTH,
      h: 0.55,
      fill: { color: THEME.primary },
      line: { color: THEME.primary },
    });

    pptSlide.addText(`${PART_LABELS[slide.part]}`, {
      x: 0.6,
      y: 0.1,
      w: 8,
      h: 0.3,
      fontFace: FONT.mono,
      fontSize: 12,
      color: "FFFFFF",
    });

    if (slide.category) {
      pptSlide.addText(slide.category, {
        x: 9.1,
        y: 0.1,
        w: 4,
        h: 0.3,
        fontFace: FONT.mono,
        fontSize: 12,
        color: "FFFFFF",
        align: "right",
      });
    }

    pptSlide.addText(slide.title, {
      x: leftX,
      y: 0.8,
      w: leftWidth,
      h: 0.5,
      fontFace: FONT.sans,
      fontSize: 30,
      color: THEME.foreground,
      bold: true,
    });

    if (slide.subtitle) {
      pptSlide.addText(slide.subtitle, {
        x: leftX,
        y: 1.15,
        w: leftWidth,
        h: 0.3,
        fontFace: FONT.serif,
        fontSize: 18,
        color: THEME.muted,
        italic: true,
      });
    }

    if (slide.content.table) {
      const tableRows = [
        slide.content.table.headers,
        ...slide.content.table.rows,
      ].map((row) => row.map((cell) => ({ text: cell })));

      pptSlide.addTable(tableRows, {
        x: leftX,
        y: columnTop,
        w: leftWidth,
        h: contentHeight,
        fontFace: FONT.sans,
        fontSize: 12,
        color: THEME.foreground,
        border: { color: THEME.border, pt: 1 },
        fill: { color: "FFFFFF" },
        rowH: 0.35,
      });
    } else {
      const bodyText = buildBodyText(slide);
      if (bodyText) {
        pptSlide.addText(bodyText, {
          x: leftX,
          y: columnTop,
          w: leftWidth,
          h: contentHeight,
          fontFace: FONT.sans,
          fontSize: 15,
          color: THEME.foreground,
          valign: "top",
        });
      }
    }

    if (slide.images?.length) {
      const imageKey = slide.images[0];
      const imagePath = resolveImageSrc(imageKey);
      const imageData = await fetchImageDataUrl(imagePath);
      const imageSource = slide.imageInfo?.[0]?.source ?? "Source d'archive";
      const imageCaption = slide.imageInfo?.[0]?.caption ?? "";

      pptSlide.addShape(pptx.ShapeType.rect, {
        x: rightX,
        y: columnTop,
        w: rightWidth,
        h: contentHeight,
        fill: { color: "FFFFFF" },
        line: { color: THEME.border, pt: 1 },
      });

      pptSlide.addImage({
        data: imageData,
        x: rightX + 0.15,
        y: columnTop + 0.15,
        w: rightWidth - 0.3,
        h: contentHeight - 0.7,
      });

      pptSlide.addText(imageSource, {
        x: rightX + 0.15,
        y: columnTop + contentHeight - 0.45,
        w: rightWidth - 0.3,
        h: 0.25,
        fontFace: FONT.mono,
        fontSize: 10,
        color: THEME.muted,
        align: "right",
      });

      if (imageCaption) {
        pptSlide.addText(imageCaption, {
          x: rightX + 0.15,
          y: columnTop + contentHeight - 0.7,
          w: rightWidth - 0.3,
          h: 0.3,
          fontFace: FONT.serif,
          fontSize: 12,
          color: THEME.muted,
          italic: true,
        });
      }
    } else {
      pptSlide.addShape(pptx.ShapeType.rect, {
        x: rightX,
        y: columnTop,
        w: rightWidth,
        h: contentHeight,
        fill: { color: "F5EFE6" },
        line: { color: THEME.border, pt: 1 },
      });

      pptSlide.addText("Sans visuel", {
        x: rightX,
        y: columnTop + contentHeight / 2 - 0.2,
        w: rightWidth,
        h: 0.4,
        fontFace: FONT.mono,
        fontSize: 14,
        color: THEME.muted,
        align: "center",
      });
    }

    if (slide.presenterNotes) {
      (pptSlide as { addNotes?: (notes: string) => void }).addNotes?.(
        slide.presenterNotes
      );
    }
  }

  await pptx.writeFile({ fileName: "Diplomatie_Alaouite.pptx" });
};
