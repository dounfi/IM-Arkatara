const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      walk(p, callback);
    } else {
      callback(p);
    }
  }
}

const tailwindReplacements = [
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-dark\b/g, replacement: "$1-primary" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-medium\b/g, replacement: "$1-accent" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-light\b/g, replacement: "$1-muted" },
  
  // Generic greens
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-(900|800)\b/g, replacement: "$1-primary" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-(700|600)\b/g, replacement: "$1-accent" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-(500|400)\b/g, replacement: "$1-primary/80" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-(300|200)\b/g, replacement: "$1-muted" },
  { regex: /\b(bg|text|border|ring|from|via|to|shadow)-green-(100|50)\b/g, replacement: "$1-background" },

  // Hex colors
  { regex: /#3b5e07/gi, replacement: "#1f3658" },
  { regex: /#1e3a5f/gi, replacement: "#1f3658" },
  { regex: /#fad90e/gi, replacement: "#ffc603" },
  { regex: /#729c22/gi, replacement: "#78064c" },
  { regex: /#96bf3f/gi, replacement: "#9bb1fc" },

  // Leaf to lightbulb
  { regex: /type="leaf"/g, replacement: 'type="lightbulb"' },
  { regex: /type: "leaf"/g, replacement: 'type: "lightbulb"' },
  { regex: /type StickerType = "leaf"/g, replacement: 'type StickerType = "lightbulb"' },
  { regex: /type = "leaf"/g, replacement: 'type = "lightbulb"' },

  // Data updates
  { regex: /accent:\s*"green"/g, replacement: 'accent: "primary"' },
  { regex: /accent:\s*"green"\s*\|\s*/g, replacement: 'accent: "primary" | ' },
  { regex: /green:\s*"bg-green-dark"/g, replacement: 'primary: "bg-primary"' },
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rule of tailwindReplacements) {
    newContent = newContent.replace(rule.regex, rule.replacement);
  }

  // Update SVG path in Sticker.tsx
  if (filePath.endsWith('Sticker.tsx') && newContent.includes('leaf: (')) {
    newContent = newContent.replace(/leaf: \([\s\S]*?\)\s*,/, `lightbulb: (
    <g transform="translate(12, 8)">
      <circle cx="20" cy="18" r="13" fill="currentColor" fillOpacity="0.2" />
      <path d="M13 18C13 14 16 11 20 11C24 11 27 14 27 18C27 21 25 24 23 26V29C23 30 22 31 20 31C18 31 17 30 17 29V26C15 24 13 21 13 18Z" fill="currentColor" />
      <rect x="17" y="29" width="6" height="3" rx="1" fill="currentColor" opacity="0.6" />
      <path d="M16 18H24 M18 22H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),`);
  }

  // index.css specific logic
  if (filePath.endsWith('index.css')) {
    newContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

/* IPB Mengajar — Scrapbook Design System (NEW PALETTE) */
@layer base {
  :root {
    /* Brand palette (HSL Converted) */
    --navy: 216 48% 23%;           /* #1f3658 */
    --magenta-dark: 323 90% 25%;   /* #78064c */
    --magenta-bright: 323 88% 44%; /* #d50d88 */
    --yellow-primary: 46 100% 51%; /* #ffc603 */
    --yellow-soft: 46 100% 83%;    /* #ffeba7 */
    --red-dark: 352 80% 29%;       /* #870f19 */
    --blue-soft: 226 94% 80%;      /* #9bb1fc */
    --blue-very-soft: 223 93% 89%; /* #c9d8fd */
    --blue-ice: 203 76% 97%;       /* #f0f8fd */
    --cream-warm: 42 100% 94%;     /* #fff6e1 */
    --coral: 13 100% 71%;          /* #ff8a69 */

    /* Semantic tokens */
    --background: 203 76% 97%; /* blue-ice sebagai background utama */
    --foreground: 216 48% 23%; /* navy sebagai teks utama */

    --card: 0 0% 100%;
    --card-foreground: 216 48% 23%;

    --popover: 0 0% 100%;
    --popover-foreground: 216 48% 23%;

    --primary: 216 48% 23%; /* navy menggantikan green-dark */
    --primary-foreground: 203 76% 97%;

    --secondary: 46 100% 51%; /* kuning */
    --secondary-foreground: 216 48% 23%;

    --muted: 42 100% 94%; /* cream-warm */
    --muted-foreground: 216 20% 45%;

    --accent: 323 90% 25%; /* magenta-dark */
    --accent-foreground: 203 76% 97%;

    --destructive: 352 80% 29%; /* red-dark */
    --destructive-foreground: 0 0% 100%;

    --border: 223 93% 89%; /* blue-very-soft */
    --input: 223 93% 89%;
    --ring: 216 48% 23%;

    --radius: 0.85rem;

    --sidebar-background: 203 76% 97%;
    --sidebar-foreground: 216 48% 23%;
    --sidebar-primary: 216 48% 23%;
    --sidebar-primary-foreground: 203 76% 97%;
    --sidebar-accent: 223 93% 89%;
    --sidebar-accent-foreground: 216 48% 23%;
    --sidebar-border: 226 94% 80%;
    --sidebar-ring: 216 48% 23%;
  }
}

@layer base {
  * { @apply border-border; }
  html { scroll-behavior: smooth; background-color: hsl(var(--navy)); }
  body {
    @apply bg-background text-foreground;
    font-family: 'DM Sans', system-ui, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 { @apply font-jakarta; }
}

@layer utilities {
  .noise-overlay {
    position: relative;
    isolation: isolate;
  }
  .noise-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }

  .dot-pattern {
    background-image: radial-gradient(hsl(var(--blue-soft) / 0.4) 1.2px, transparent 1.2px);
    background-size: 18px 18px;
  }

  .scrapbook-shadow {
    box-shadow: 0 8px 24px -8px hsl(var(--navy) / 0.25), 0 2px 6px -2px hsl(var(--magenta-dark) / 0.15);
  }

  .polaroid-shadow {
    box-shadow: 0 12px 30px -10px hsl(var(--navy) / 0.35), 0 4px 8px -2px hsl(var(--magenta-dark) / 0.2);
  }

  .yellow-underline {
    background-image: linear-gradient(120deg, hsl(var(--yellow-primary)) 0%, hsl(var(--yellow-soft)) 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.4em;
    background-position: 0 88%;
  }

  .text-balance { text-wrap: balance; }

  .leaflet-container { font-family: inherit; border-radius: inherit; }
}
`;
  }

  if (filePath.endsWith('tailwind.config.ts')) {
    newContent = newContent.replace(/green:\s*{\s*light:.*?\s*medium:.*?\s*dark:.*?\s*},/, '');
    newContent = newContent.replace(/yellow:\s*{\s*primary:.*?\s*secondary:.*?\s*amber:.*?\s*},/, `yellow: {
          primary: "hsl(var(--yellow-primary))",
          secondary: "hsl(var(--yellow-soft))",
          amber: "hsl(var(--coral))",
        },`);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    processFile(filePath);
  }
});
processFile(path.join(__dirname, 'tailwind.config.ts'));

// data json
const jsonPath = path.join(srcDir, 'data/proker.json');
if (fs.existsSync(jsonPath)) {
  let content = fs.readFileSync(jsonPath, 'utf8');
  content = content.replace(/accent": "green"/g, 'accent": "primary"');
  content = content.replace(/-green-dark/g, '-primary');
  content = content.replace(/-green-medium/g, '-accent');
  content = content.replace(/-green-light/g, '-muted');
  fs.writeFileSync(jsonPath, content, 'utf8');
}
