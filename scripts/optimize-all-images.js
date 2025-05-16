import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for different image types
const imageConfigs = {
  skills: {
    width: 150,
    height: 150,
    quality: 80,
    background: { r: 10, g: 0, b: 37, alpha: 1 } // #0a0025
  },
  profile: {
    width: 400,
    height: 400,
    quality: 85,
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  },
  default: {
    width: 800,
    height: 800,
    quality: 80,
    background: { r: 255, g: 255, b: 255, alpha: 0 }
  }
};

// Image directories to process
const directories = [
  {
    source: '../src/assets',
    target: '../public/assets',
    config: 'default'
  },
  {
    source: '../src/assets/languagess',
    target: '../public/assets/languagess',
    config: 'skills'
  }
];

async function optimizeImage(inputPath, outputPath, config) {
  try {
    const stats = fs.statSync(inputPath);
    const fileSizeInMB = stats.size / (1024 * 1024);
    console.log(`Processing ${path.basename(inputPath)} (${fileSizeInMB.toFixed(2)} MB)`);

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Optimize the image
    await sharp(inputPath)
      .resize(config.width, config.height, {
        fit: 'contain',
        background: config.background,
        withoutEnlargement: true
      })
      .toFile(outputPath);

    // Convert to WebP
    await imagemin([outputPath], {
      destination: path.dirname(outputPath),
      plugins: [
        imageminWebp({
          quality: config.quality,
          method: 6,
        })
      ]
    });

    const optimizedStats = fs.statSync(outputPath);
    const optimizedSizeInMB = optimizedStats.size / (1024 * 1024);
    const reduction = ((fileSizeInMB - optimizedSizeInMB) / fileSizeInMB * 100).toFixed(2);
    
    console.log(`✓ Optimized: ${path.basename(inputPath)}`);
    console.log(`  Size reduced by ${reduction}% (${fileSizeInMB.toFixed(2)}MB → ${optimizedSizeInMB.toFixed(2)}MB)`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error);
  }
}

async function processDirectory(sourceDir, targetDir, config) {
  try {
    const files = fs.readdirSync(sourceDir);
    
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const stats = fs.statSync(sourcePath);
      
      if (stats.isDirectory()) {
        // Process subdirectories recursively
        const newTargetDir = path.join(targetDir, file);
        await processDirectory(sourcePath, newTargetDir, config);
      } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const targetPath = path.join(targetDir, file.toLowerCase());
        await optimizeImage(sourcePath, targetPath, imageConfigs[config]);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${sourceDir}:`, error);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  for (const dir of directories) {
    const sourceDir = path.join(__dirname, dir.source);
    const targetDir = path.join(__dirname, dir.target);
    
    console.log(`\n📁 Processing directory: ${dir.source}`);
    await processDirectory(sourceDir, targetDir, dir.config);
  }
  
  console.log('\n✨ Image optimization complete!');
}

main(); 