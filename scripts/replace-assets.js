
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = process.cwd();

const replacements = [
    {
        file: 'src/app/components/Footer.tsx',
        ops: [
            { search: "import image_15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2 from 'figma:asset/15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2.png';", replace: "import logoSmall from '/images/logo-small.png';" },
            { search: 'import logo from "figma:asset/f557800f8e71a5600c5dd5cd87664ab41b63bb3b.png";', replace: 'import logo from "/images/logo.png";' },
            { search: 'import qrCode from "figma:asset/f51cb1fb6d7095292d42570c07132c7c49274bc8.png";', replace: 'import qrCode from "/images/qr-code.png";' },
            { search: 'image_15a0b97d3b799201ac71a1cd9112c7a96d7b8eb2', replace: 'logoSmall' }
        ]
    },
    {
        file: 'src/app/components/Navigation.tsx',
        ops: [
            { search: "import logoImage from 'figma:asset/0a9f32dbab35fc116d2a43f1411e6cebd03565f9.png';", replace: "import logoImage from '/images/logo-nav.png';" }
        ]
    },
    {
        file: 'src/app/components/AgentSection.tsx',
        ops: [
            { search: "import bgImage from 'figma:asset/5e107f4695c8fa6ef7864c26b157c84d26257f67.png';", replace: "import bgImage from '/images/bg-agent.png';" }
        ]
    },
    {
        file: 'src/app/components/BackgroundSection.tsx',
        ops: [
            { search: "import bgImage from 'figma:asset/b67e9e3a1c2ae4be1c2cf4fbb43e8dba52c55d23.png';", replace: "import bgImage from '/images/bg-background.png';" }
        ]
    },
    {
        file: 'src/app/components/PracticesSection.tsx',
        ops: [
            { search: "import bgImage from 'figma:asset/52f071b6e7277d79f139dda8b5a9faa0684f73eb.png';", replace: "import bgImage from '/images/bg-practices.png';" }
        ]
    },
    {
        file: 'src/app/components/ScenariosSection.tsx',
        ops: [
            { search: "import chat3dIcon from 'figma:asset/29213d90f9b28c32819613725640b5066474d7c7.png';", replace: "import chat3dIcon from '/images/icon-chat-3d.png';" },
            { search: "import cluster3dIcon from 'figma:asset/8a2879ca0406a3bacc0a52bd4eda23f4057222cf.png';", replace: "import cluster3dIcon from '/images/icon-cluster-3d.png';" },
            { search: "import report3dIcon from 'figma:asset/10e9c29274419f3d17978cf9abb75d74a8418c69.png';", replace: "import report3dIcon from '/images/icon-report-3d.png';" },
            { search: "import knowledge3dIcon from 'figma:asset/b8b52ed3bdd24b962e48ba58b8f415024b825144.png';", replace: "import knowledge3dIcon from '/images/icon-knowledge-3d.png';" },
            { search: "import doc3dIcon from 'figma:asset/bb5f866e01fef18353c24d08f4fae9a738e3231b.png';", replace: "import doc3dIcon from '/images/icon-doc-3d.png';" },
            { search: "import flow3dIcon from 'figma:asset/0c3ed5875f0d988d82ff5cb29b8db4c36bd8a90c.png';", replace: "import flow3dIcon from '/images/icon-flow-3d.png';" },
            { search: "import analysis3dIcon from 'figma:asset/5bc1a7333e872c31eb1aeae4e80a96038c07b028.png';", replace: "import analysis3dIcon from '/images/icon-analysis-3d.png';" },
            { search: "import workflow3dIcon from 'figma:asset/15897357259f6c152d834f6d3f49477e8351ca35.png';", replace: "import workflow3dIcon from '/images/icon-workflow-3d.png';" }
        ]
    },
    {
        file: 'src/app/pages/ScenariosPage.tsx',
        ops: [
            { search: "import decorativeImage from 'figma:asset/5fd875f703a4875f3991e32576e76f4cd7c2b025.png';", replace: "import decorativeImage from '/images/decorative-scenarios.png';" }
        ]
    },
    {
        file: 'src/app/pages/CapabilitiesPage.tsx',
        ops: [
            { search: "import heroBg from 'figma:asset/b479f0b3778b1072dcc5de20bf6c8460a428c03b.png';", replace: "import heroBg from '/images/hero-bg-capabilities.png';" },
            { search: "import summaryBg from 'figma:asset/5553cc60abf95ad8720ee2f005b36240a5c93733.png';", replace: "import summaryBg from '/images/summary-bg.png';" },
            { search: "import agentManagementImg from 'figma:asset/c2addee7bf0fee5ab337b8e85c755a13bc6ff4d9.png';", replace: "import agentManagementImg from '/images/agent-management.png';" },
            { search: "import knowledgeGovernanceImg from 'figma:asset/302872f05e8e7e061e1bc9daf68d93bc10abf26a.png';", replace: "import knowledgeGovernanceImg from '/images/knowledge-governance.png';" },
            { search: "import modelEvolutionImg from 'figma:asset/47a1a49fdaf2e2f5bc932d8e330afe47ea2cb671.png';", replace: "import modelEvolutionImg from '/images/model-evolution.png';" },
            { search: "import processPermissionImg from 'figma:asset/375fa7fc8f7d2c05667df72e654693d4e8296332.png';", replace: "import processPermissionImg from '/images/process-permission.png';" },
            { search: "import evaluationSecurityImg from 'figma:asset/e7ef6ec6a6676a934fe90308d31e3fa54b78c15b.png';", replace: "import evaluationSecurityImg from '/images/evaluation-security.png';" },
            { search: "import runtimeIntegrationImg from 'figma:asset/60ea2206938a772183ecea516783adebb451607a.png';", replace: "import runtimeIntegrationImg from '/images/runtime-integration.png';" }
        ]
    },
    {
        file: 'src/app/pages/AgentPage.tsx',
        ops: [
            { search: 'import heroImage from "figma:asset/1a995f3278ccd270275956a6f9d824b60364254e.png";', replace: 'import heroImage from "/images/hero-visual.png";' },
            { search: 'import bgPattern from "figma:asset/5fd875f703a4875f3991e32576e76f4cd7c2b025.png";', replace: 'import bgPattern from "/images/decorative-pattern.png";' }
        ]
    },
    {
        file: 'src/imports/智能体.tsx',
        ops: [
            { search: 'import imgImage from "figma:asset/f51cb1fb6d7095292d42570c07132c7c49274bc8.png";', replace: 'import imgImage from "/images/qr-code.png";' },
            { search: 'import imgImageAiAgent from "figma:asset/1a995f3278ccd270275956a6f9d824b60364254e.png";', replace: 'import imgImageAiAgent from "/images/hero-visual.png";' }
        ]
    }
];

async function main() {
    console.log('🚀 Starting extended asset replacement...');

    for (const task of replacements) {
        const filePath = path.join(rootDir, task.file);
        if (!fs.existsSync(filePath)) {
            console.log(`⚠️  File not found: ${task.file}`);
            continue;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        for (const op of task.ops) {
            if (content.includes(op.search)) {
                content = content.replace(op.search, op.replace);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Updated: ${task.file}`);
        } else {
            console.log(`ℹ️  No changes needed: ${task.file}`);
        }
    }

    console.log('Done.');
}

main();
