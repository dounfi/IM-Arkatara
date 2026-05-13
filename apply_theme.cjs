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

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Hex colors
  newContent = newContent.replace(/#3b5e07/gi, "#1f3658"); // Dark Green to Navy
  newContent = newContent.replace(/#1e3a5f/gi, "#1f3658"); // Old Navy to Navy
  newContent = newContent.replace(/#fad90e/gi, "#ffc603"); // Old Yellow to New Yellow
  newContent = newContent.replace(/#729c22/gi, "#78064c"); // Medium Green to Magenta Dark
  newContent = newContent.replace(/#96bf3f/gi, "#9bb1fc"); // Light Green to Blue Soft

  // Replace type="leaf" with type="lightbulb"
  newContent = newContent.replace(/type="leaf"/g, 'type="lightbulb"');
  newContent = newContent.replace(/type: "leaf"/g, 'type: "lightbulb"');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    processFile(filePath);
  }
});

// Update Sticker.tsx specifically for lightbulb SVG
const stickerPath = path.join(srcDir, 'components/decor/Sticker.tsx');
if (fs.existsSync(stickerPath)) {
  let st = fs.readFileSync(stickerPath, 'utf8');
  
  // Replace type leaf with lightbulb
  st = st.replace(/type StickerType = "leaf"/g, 'type StickerType = "lightbulb"');
  st = st.replace(/type = "leaf"/g, 'type = "lightbulb"');
  
  // Replace the leaf SVG path with the lightbulb path
  st = st.replace(/leaf: \([\s\S]*?\)\s*,/, `lightbulb: (
    <g transform="translate(12, 8)">
      <circle cx="20" cy="18" r="13" fill="currentColor" fillOpacity="0.2" />
      <path d="M13 18C13 14 16 11 20 11C24 11 27 14 27 18C27 21 25 24 23 26V29C23 30 22 31 20 31C18 31 17 30 17 29V26C15 24 13 21 13 18Z" fill="currentColor" />
      <rect x="17" y="29" width="6" height="3" rx="1" fill="currentColor" opacity="0.6" />
      <path d="M16 18H24 M18 22H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),`);
  
  fs.writeFileSync(stickerPath, st, 'utf8');
}
