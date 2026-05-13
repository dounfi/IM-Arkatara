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

const replacements = [
  // Dark Green -> Primary
  { regex: /\bbg-green-dark\b/g, replacement: "bg-primary" },
  { regex: /\btext-green-dark\b/g, replacement: "text-primary" },
  { regex: /\bborder-green-dark\b/g, replacement: "border-primary" },
  { regex: /\bring-green-dark\b/g, replacement: "ring-primary" },
  
  // Medium Green -> Accent
  { regex: /\bbg-green-medium\b/g, replacement: "bg-accent" },
  { regex: /\btext-green-medium\b/g, replacement: "text-accent" },
  { regex: /\bborder-green-medium\b/g, replacement: "border-accent" },

  // Light Green -> Muted Foreground (for text) or Border (for border)
  { regex: /\bbg-green-light\b/g, replacement: "bg-muted" },
  { regex: /\btext-green-light\b/g, replacement: "text-muted-foreground" },
  { regex: /\bborder-green-light\b/g, replacement: "border-border" },

  // Tailwind generic greens
  { regex: /\bbg-green-(900|800)\b/g, replacement: "bg-primary" },
  { regex: /\btext-green-(900|800)\b/g, replacement: "text-primary" },
  { regex: /\bbg-green-(700|600)\b/g, replacement: "bg-accent" },
  { regex: /\btext-green-(700|600)\b/g, replacement: "text-accent" },
  { regex: /\bbg-green-(500|400)\b/g, replacement: "bg-primary/80" },
  { regex: /\btext-green-(500|400)\b/g, replacement: "text-primary/80" },
  { regex: /\bbg-green-(300|200)\b/g, replacement: "bg-muted-foreground/30" },
  { regex: /\bbg-green-(100|50)\b/g, replacement: "bg-muted" },
  { regex: /\btext-green-(100|50)\b/g, replacement: "text-primary-foreground" },

  // Any remaining generic border/ring
  { regex: /\bborder-green-[a-zA-Z0-9]+\b/g, replacement: "border-primary" },
  { regex: /\bring-green-[a-zA-Z0-9]+\b/g, replacement: "ring-primary" }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rule of replacements) {
    newContent = newContent.replace(rule.regex, rule.replacement);
  }

  // Also fix any leftover `text-green-dark/something` because opacity modifier works on primary too!
  // Wait, `text-primary/10` works fine in Tailwind.

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    processFile(filePath);
  }
});
