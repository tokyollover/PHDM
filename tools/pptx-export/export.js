const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");
const pptxgen = require("pptxgenjs");

const htmlPath = process.argv[2] || "/workspaces/PHDM/ALL/Deliverables/Diplomatie Alaouite - Fondations.html";
const outputPath = process.argv[3] || "/workspaces/PHDM/ALL/Deliverables/Diplomatie Alaouite - Fondations.pptx";

if (!fs.existsSync(htmlPath)) {
  console.error(`HTML not found: ${htmlPath}`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, "utf8");
const dom = new JSDOM(html);
const doc = dom.window.document;

const imageIndexPath = "/workspaces/PHDM/ALL/Deliverables/images/index.json";
let imageIndex = { images: [] };
if (fs.existsSync(imageIndexPath)) {
  imageIndex = JSON.parse(fs.readFileSync(imageIndexPath, "utf8"));
}
const imageMetaByName = new Map(
  (imageIndex.images || []).map((entry) => [entry.filename, entry])
);

const pptx = new pptxgen();

pptx.layout = "LAYOUT_WIDE";

const theme = {
  headFontFace: "Cormorant Garamond",
  bodyFontFace: "Calibri",
  lang: "fr-FR"
};

pptx.theme = theme;

const slides = Array.from(doc.querySelectorAll(".slides section"));
const baseDir = path.dirname(htmlPath);

const colors = {
  bg: "0B0F14",
  text: "EFE7D6",
  soft: "D7C9AF",
  accent: "C2A46D"
};

const cleanText = (value) => value.replace(/\s+/g, " ").trim();

const extractFirstParagraph = (section) => {
  const paragraphs = Array.from(section.querySelectorAll("p"))
    .filter((p) => !p.closest("aside") && !p.closest("figure"));
  if (!paragraphs.length) {
    return "";
  }
  return cleanText(paragraphs[0].textContent || "");
};

const extractBullets = (section) => {
  const items = Array.from(section.querySelectorAll("li"))
    .filter((li) => !li.closest("aside") && !li.closest("figure"));
  return items.map((li) => cleanText(li.textContent || "")).filter(Boolean);
};

const extractQuote = (section) => {
  const quote = section.querySelector("blockquote");
  if (!quote) {
    return "";
  }
  return cleanText(quote.textContent || "");
};

const extractNotes = (section) => {
  const notes = section.querySelector("aside.notes");
  if (!notes) {
    return "";
  }
  return cleanText(notes.textContent || "");
};

const extractTitle = (section) => {
  const heading = section.querySelector("h1, h2, h3, h4");
  if (!heading) {
    return "";
  }
  return cleanText(heading.textContent || "");
};

const extractImages = (section) => {
  const imgs = Array.from(section.querySelectorAll("img"));
  return imgs
    .map((img) => img.getAttribute("src"))
    .filter(Boolean)
    .map((src) => path.resolve(baseDir, src))
    .filter((fullPath) => {
      if (!fs.existsSync(fullPath)) {
        console.warn(`Missing image: ${fullPath}`);
        return false;
      }
      return true;
    });
};

const buildCaption = (imagePath) => {
  const filename = path.basename(imagePath);
  const meta = imageMetaByName.get(filename);
  if (!meta) {
    return `Source: ${filename}`;
  }
  const title = meta.title || filename;
  const context = meta.context_note || "";
  const attribution = meta.attribution || meta.document_ref || "";
  const lines = [title];
  if (context) {
    lines.push(context);
  }
  if (attribution) {
    lines.push(`Source: ${attribution}`);
  }
  return lines.join("\n");
};

slides.forEach((section, index) => {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  const title = extractTitle(section) || `Slide ${index + 1}`;
  const subtitle = extractFirstParagraph(section);
  const bullets = extractBullets(section);
  const quote = extractQuote(section);
  const notesText = extractNotes(section);
  const images = extractImages(section);
  const imagePath = images.length ? images[0] : null;

  slide.addText(title, {
    x: 0.6,
    y: 0.4,
    w: 12.1,
    h: 0.6,
    fontSize: 34,
    bold: true,
    color: colors.text,
    fontFace: "Cormorant Garamond"
  });

  if (subtitle && subtitle !== title) {
    slide.addText(subtitle, {
      x: 0.6,
      y: 1.15,
      w: 12.1,
      h: 0.5,
      fontSize: 18,
      color: colors.soft,
      fontFace: "Calibri"
    });
  }

  const textBox = {
    x: 0.8,
    y: 1.8,
    w: imagePath ? 7.2 : 11.8,
    h: 4.6
  };

  if (bullets.length) {
    slide.addText(bullets.join("\n"), {
      ...textBox,
      fontSize: 18,
      color: colors.text,
      fontFace: "Calibri",
      bullet: { indent: 20 }
    });
  }

  if (!bullets.length && subtitle) {
    slide.addText(subtitle, {
      ...textBox,
      fontSize: 20,
      color: colors.text,
      fontFace: "Calibri"
    });
  }

  if (imagePath) {
    slide.addImage({
      path: imagePath,
      x: 8.0,
      y: 2.0,
      w: 4.9,
      h: 3.1
    });

    slide.addText(buildCaption(imagePath), {
      x: 8.0,
      y: 5.2,
      w: 4.9,
      h: 1.3,
      fontSize: 10,
      color: colors.soft,
      fontFace: "Calibri"
    });
  }

  if (quote) {
    slide.addText(quote, {
      x: 0.8,
      y: 6.3,
      w: 12,
      h: 0.7,
      fontSize: 16,
      color: colors.accent,
      italic: true,
      fontFace: "Calibri"
    });
  }

  if (notesText) {
    slide.addNotes(notesText);
  }
});

pptx.writeFile({ fileName: outputPath }).then(() => {
  console.log(`PPTX exported to ${outputPath}`);
}).catch((error) => {
  console.error("Failed to export PPTX", error);
  process.exit(1);
});
