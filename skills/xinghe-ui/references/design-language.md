# Xinghe UI Design Language

Use this reference when choosing the visual direction for a Xinghe-style website.

## Visual Positioning

Xinghe UI should feel like a polished Chinese enterprise technology launch site:

- credible enough for business buyers
- brighter and more energetic than a normal SaaS template
- grounded in real business systems, not only AI slogans
- light, spacious, and premium
- strong on both PC and phone

## Palette

Default palette:

- deep text: `#06142f`, `#07142f`, `#0b1b3f`
- primary blue: `#1668ff`, `#0f58f5`
- sky blue: `#1d86ee`, `#73d1ff`
- cyan highlight: `#52d9ff`
- pale surfaces: `#f6fbff`, `#edf8ff`, `#ffffff`
- border: `#dbe7ff`, `#cfe0ff`

Use blue/cyan/white as the core system. Avoid brown, beige, dark navy, purple-heavy, orange-heavy, and AIVideo-like palettes unless explicitly requested.

## Typography

Use a strong sans display stack for headlines:

```css
--font-display:
  "Aptos Display",
  "Alibaba PuHuiTi 3.0",
  "HarmonyOS Sans SC",
  "Microsoft YaHei UI",
  "PingFang SC",
  sans-serif;
```

Body stack:

```css
--font-body:
  "Aptos",
  "Alibaba PuHuiTi 3.0",
  "HarmonyOS Sans SC",
  "Microsoft YaHei UI",
  "PingFang SC",
  "Segoe UI",
  sans-serif;
```

Headline behavior:

- Use `font-weight: 900` for hero and major section headings.
- Keep letter spacing at `0`.
- Prefer 1 to 2 hero headline lines on desktop.
- Avoid tiny body copy under huge headings.
- On mobile, cap headline and paragraph width explicitly.

## Hero Mechanics

The preferred hero is not a generic dashboard-in-a-card. It should have launch-event energy:

- transparent or very light top navigation
- large bold headline
- pale sky-blue atmosphere
- diagonal speed lines or flowing ribbons
- abstract glass/mountain/terrain depth
- refined floating product or metric panel
- mist or wave transition into the next section

Keep the first viewport clean. Do not expose every module in the hero.

## Section System

Recommended section rhythm:

1. Hero with strong motion and core promise.
2. Business foundation modules such as ERP, WMS, OA, CRM, MES, BI.
3. Why this is a system, not only tools.
4. Product capability showcase using real screenshots.
5. Solutions or pain points.
6. AI agents and knowledge assets.
7. Cases and phased delivery.
8. Demo/contact CTA.

Vary the layout. Do not repeat the same equal-card grid for every section.

## Image System

Use three image classes:

- **Real product screenshots** for capability proof.
- **Generated hero visuals** for atmosphere and first impression.
- **Generated card assets** for module-specific illustration.

Every repeated card should have a function-specific visual. Do not reuse one small image across unrelated cards.

## Motion

Use CSS motion first:

- speed-line sweeps
- subtle background drift
- floating dashboard panels
- glint sweeps
- staggered card entrance where useful

Always include `prefers-reduced-motion: reduce` fallback.

## Avoid

- dark hero unless explicitly requested
- generic purple AI glow
- nested cards inside cards
- huge decorative blobs
- stock-looking blurred imagery
- fake English jargon
- section headings that wrap awkwardly on desktop
- mobile text clipping or horizontal overflow
