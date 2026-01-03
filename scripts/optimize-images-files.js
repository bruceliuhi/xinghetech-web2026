
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const imagesDir = path.join(projectRoot, 'public', 'images');

const MAX_WIDTH = 2560; // Max width for background images
const QUALITY = 80;     // WebP quality

async function optimizeImages() {
    console.log('🚀 Starting image optimization...');

    if (!fs.existsSync(imagesDir)) {
        console.error(`❌ Directory not found: ${imagesDir}`);
        return;
    }

    const files = fs.readdirSync(imagesDir);
    let savedBytes = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) continue;

        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(imagesDir, path.basename(file, ext) + '.webp');

        try {
            const metadata = await sharp(inputPath).metadata();
            const originalSize = fs.statSync(inputPath).size;

            let pipeline = sharp(inputPath);

            // Resize if too large
            if (metadata.width && metadata.width > MAX_WIDTH) {
                console.log(`   📏 Resizing ${file} (${metadata.width}px -> ${MAX_WIDTH}px)`);
                pipeline = pipeline.resize(MAX_WIDTH);
            }

            // Convert to WebP
            await pipeline
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            const newSize = fs.statSync(outputPath).size;
            const saving = originalSize - newSize;
            savedBytes += saving;

            console.log(`   ✅ Optimized: ${file} -> ${path.basename(outputPath)}`);
            console.log(`      ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (Saved ${(saving / 1024 / 1024).toFixed(2)}MB)`);

        } catch (err) {
            console.error(`   ❌ Error processing ${file}:`, err);
        }
    }

    console.log('--------------------------------------------------');
    console.log(`🎉 Optimization Complete! Total Space Saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
    console.log('👉 Note: You should update your code to reference the new .webp files.');
}

optimizeImages();
