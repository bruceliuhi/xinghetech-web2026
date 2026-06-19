---
name: xinghe-ui
description: Build or redesign reusable Xinghe-style Chinese product marketing websites, official sites, landing pages, launch pages, and visual-polish passes for B2B, AI, SaaS, ERP, WMS, OA, CRM, MES, BI, and enterprise software products. Use when the user asks for XingheUI, Xinghe-style websites, product marketing sites, official websites, reference-image-driven web design, premium light-blue technology aesthetics, generated website visuals, mobile and desktop QA, or deploy-ready static/Vite/React marketing pages.
---

# Xinghe UI

## Purpose

Use this skill to ship polished, responsive product marketing websites that feel consistent with Xinghe's preferred light technology language: clear blue-white atmosphere, strong typography, product screenshots, generated hero/section visuals, and real desktop/mobile verification.

The goal is not a generic template. Preserve the user's product truth, copy intent, and reference direction, then turn it into a launchable website.

## Core Workflow

1. **Ground the brief**
   - Identify the product, audience, business goal, deployment target, and reference assets.
   - Read the existing repo before designing. Use `rg`, `rg --files`, `ls`, and targeted file reads.
   - Keep marketing sites separate from product/admin apps when the user asks for a standalone site.
   - If the user provides reference URLs, screenshots, or folders, inspect them before coding. Extract design mechanics, not copied brand content.

2. **Declare the design read**
   - State one short line: page type, audience, visual language, and implementation direction.
   - For Xinghe-style enterprise sites, default to:
     - light theme
     - high-contrast deep navy text
     - electric blue/cyan accents
     - airy launch-event hero energy
     - real product screenshots
     - mobile-first text containment

3. **Create visual direction before implementation**
   - For visually important work, use image generation when available before large UI changes.
   - Generate section-specific references for hero or key modules when the page needs a quality jump.
   - Analyze typography, spacing, motion, palette, buttons, and media treatment before coding.
   - If generated visuals are not refined enough, regenerate instead of forcing weak assets into code.

4. **Implement within the existing stack**
   - Prefer the repo's stack and patterns. Do not introduce a new framework unless required.
   - Use real screenshots from the product where possible.
   - Use generated bitmap visuals for hero/key visuals when real imagery is unavailable.
   - Keep copy clear for Chinese enterprise buyers: business value first, AI second, proof and implementation next.

5. **Verify like a shipped site**
   - Build the project.
   - Capture desktop and mobile screenshots.
   - Check text wrapping, button contrast, broken images, mobile navigation, and first viewport composition.
   - Iterate until the screenshot matches the user's reference direction closely enough to be credible.

6. **Deploy only after verification**
   - If deployment is requested, inspect the actual server and existing Nginx/site layout first.
   - Use versioned release directories or backups before switching live content.
   - Verify HTTP/HTTPS, static assets, DNS, and certificate status after release.

## Reference Files

Load only what is needed:

- Read `references/design-language.md` when designing or visually upgrading a site.
- Read `references/implementation-workflow.md` when coding a Xinghe-style site.
- Read `references/qa-and-deploy.md` before final delivery, release, or server deployment.

## Hard Rules

- Do not use dark theme unless the user explicitly asks for it.
- Do not mix unrelated project aesthetics. If the user says to avoid a reference folder or palette, obey it literally.
- Do not ship a landing-page-only shell when the user asked for a usable product/site experience.
- Do not use placeholder screenshots when current product screenshots are available.
- Do not rely on build success alone. Visual QA is required for design work.
- Do not let mobile text or cards overflow the viewport.
- Do not leave dev/helper processes running.
