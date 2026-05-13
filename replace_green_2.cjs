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
  { regex: /\b(from|via|to|shadow)-green-dark\b/g, replacement: "$1-primary" },
  
  // Medium Green -> Accent
  { regex: /\b(from|via|to|shadow)-green-medium\b/g, replacement: "$1-accent" },

  // Light Green -> Muted/Border
  { regex: /\b(from|via|to)-green-light\b/g, replacement: "$1-muted" },
  { regex: /\bshadow-green-light\b/g, replacement: "shadow-muted" },

  // Tailwind generic greens
  { regex: /\b(from|via|to|shadow)-green-(900|800)\b/g, replacement: "$1-primary" },
  { regex: /\b(from|via|to|shadow)-green-(700|600)\b/g, replacement: "$1-accent" },
  { regex: /\b(from|via|to|shadow)-green-(500|400)\b/g, replacement: "$1-primary/80" },
  { regex: /\b(from|via|to|shadow)-green-(300|200)\b/g, replacement: "$1-muted" },
  { regex: /\b(from|via|to|shadow)-green-(100|50)\b/g, replacement: "$1-muted" },

  // Data mapping updates
  { regex: /accent:\s*"green"/g, replacement: 'accent: "primary"' },
  { regex: /accent:\s*"green"\s*\|\s*/g, replacement: 'accent: "primary" | ' },
  { regex: /green:\s*"bg-accent"/g, replacement: 'primary: "bg-accent"' }, // In Proker.tsx
  
  // Custom manual fixes based on grep
  { regex: /var\(--green-medium\)/g, replacement: 'var(--accent)' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  for (const rule of replacements) {
    newContent = newContent.replace(rule.regex, rule.replacement);
  }

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    processFile(filePath);
  }
});
