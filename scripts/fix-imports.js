
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.join(path.dirname(__filename), '..');

const filesToFix = [
    'src/app/components/Footer.tsx',
    'src/app/components/Navigation.tsx',
    'src/app/components/AgentSection.tsx',
    'src/app/components/BackgroundSection.tsx',
    'src/app/components/PracticesSection.tsx',
    'src/app/components/ScenariosSection.tsx',
    'src/app/pages/ScenariosPage.tsx',
    'src/app/pages/CapabilitiesPage.tsx',
    'src/app/pages/AgentPage.tsx',
    'src/imports/智能体.tsx'
];

async function main() {
    console.log('🚀 Starting import fix...');

    for (const file of filesToFix) {
        const filePath = path.join(rootDir, file);
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${file}`);
            continue;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Regex to match: import VariableName from '/images/FileName.ext'; (handling quotes and spaces)
        const regex = /import\s+(\w+)\s+from\s+['"]\/images\/([^'"]+)['"];?/g;

        const newContent = content.replace(regex, (match, varName, fileName) => {
            modified = true;
            return `const ${varName} = '/images/${fileName}';`;
        });

        if (modified) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Fixed imports in: ${file}`);
        } else {
            console.log(`ℹ️  No changes needed: ${file}`);
        }
    }

    console.log('Done.');
}

main();
