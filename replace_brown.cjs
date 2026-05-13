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

  // Replace text-brown-warm with text-muted-foreground
  newContent = newContent.replace(/text-brown-warm/g, 'text-muted-foreground');
  newContent = newContent.replace(/to-brown-warm/g, 'to-muted-foreground');
  newContent = newContent.replace(/via-brown-warm/g, 'via-muted-foreground');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.json')) {
    processFile(filePath);
  }
});
