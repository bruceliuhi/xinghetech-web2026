
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, '../dist');
const PORT = 4173;

// Routes to pre-render
const routes = [
    '/',
    '/home',
    '/capabilities',
    '/agent',
    '/scenarios',
    '/practices',
    '/about'
];

async function prerender() {
    console.log('🚀 Starting pre-rendering...');

    // 1. Start a simple static server for the dist folder
    const app = express();
    app.use(express.static(DIST_DIR));
    // Fallback to index.html for SPA routing
    app.get('*', (req, res) => {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    });

    const server = app.listen(PORT, async () => {
        console.log(`📡 Static server running on port ${PORT}`);

        try {
            // 2. Launch Puppeteer
            const browser = await puppeteer.launch({
                headless: "new"
            });
            const page = await browser.newPage();

            // 3. Iterate over routes
            for (const route of routes) {
                const url = `http://localhost:${PORT}${route}`;
                console.log(`📄 Prerendering: ${route}`);

                await page.goto(url, { waitUntil: 'networkidle0' });

                // Wait for specific elements to ensure content is loaded (optional but recommended)
                // await page.waitForSelector('#root'); 

                const content = await page.content();

                // Determine output path
                let outputPath = path.join(DIST_DIR, route === '/' ? 'index.html' : `${route.replace('/', '')}/index.html`);

                // Ensure directory exists
                const outputDir = path.dirname(outputPath);
                if (!fs.existsSync(outputDir)) {
                    fs.mkdirSync(outputDir, { recursive: true });
                }

                // Write the pre-rendered HTML
                fs.writeFileSync(outputPath, content);
                console.log(`✅ Saved: ${outputPath}`);
            }

            await browser.close();
            console.log('🎉 Pre-rendering complete!');

        } catch (error) {
            console.error('❌ Pre-rendering failed:', error);
            process.exit(1);
        } finally {
            server.close();
            process.exit(0);
        }
    });
}

prerender();
