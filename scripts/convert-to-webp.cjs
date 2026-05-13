const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

/**
 * Recursively get all files in a directory
 */
function getFiles(dir, allFiles = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, allFiles);
    } else {
      allFiles.push(name);
    }
  }
  return allFiles;
}

async function convert() {
  console.log('Scanning public directory for images...');
  const files = getFiles(publicDir);
  const targetExts = ['.png', '.jpg', '.jpeg'];
  
  let count = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (targetExts.includes(ext)) {
      const output = file.substring(0, file.lastIndexOf('.')) + '.webp';
      
      // Skip if it would overwrite an existing webp (optional, but safer)
      // Actually, user wants to replace them.
      
      console.log(`Converting: ${path.relative(publicDir, file)} -> ${path.relative(publicDir, output)}`);
      
      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(output);
          
        fs.unlinkSync(file);
        count++;
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
  
  console.log(`\nDone! Converted ${count} images to WebP.`);
}

convert().catch(console.error);
