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

  // Replace green rgba with navy rgba
  // rgba(30, 80, 20
  newContent = newContent.replace(/rgba\(30,\s*80,\s*20,/g, 'rgba(31, 54, 88,');
  // rgba(35,85,25
  newContent = newContent.replace(/rgba\(35,85,25,/g, 'rgba(31,54,88,');
  // rgba(10,40,5
  newContent = newContent.replace(/rgba\(10,40,5,/g, 'rgba(10,20,40,');
  // rgba(59,94,7
  newContent = newContent.replace(/rgba\(59,94,7,/g, 'rgba(31,54,88,');
  // rgba(150,191,63
  newContent = newContent.replace(/rgba\(150,191,63,/g, 'rgba(155,177,252,');

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
  }
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    processFile(filePath);
  }
});
