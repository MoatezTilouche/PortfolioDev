import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '../src/assets/languagess');
const targetDir = path.join(__dirname, '../public/assets/languagess');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    // Resize and optimize the image
    await sharp(inputPath)
      .resize(150, 150, {
        fit: 'contain',
        background: { r: 10, g: 0, b: 37, alpha: 1 } // #0a0025 background
      })
      .toFile(outputPath);

    // Convert to WebP with additional compression
    await imagemin([outputPath], {
      destination: path.dirname(outputPath),
      plugins: [
        imageminWebp({
          quality: 80,
          method: 6,
        })
      ]
    });

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(targetDir, file.toLowerCase()); // Convert to lowercase
        await optimizeImage(inputPath, outputPath);
      }
    }
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages(); 