# Xinghe UI Implementation Workflow

Use this reference when implementing or revising a site.

## Project Setup

1. Inspect project shape:
   - `rg --files`
   - `package.json`
   - existing `src/`, `public/`, `assets/`, `styles`
2. Keep the marketing site in its own directory when requested.
3. Preserve existing route anchors and navigation labels unless the user asks to change them.
4. Use the existing framework. For small standalone sites, Vite + React + CSS is sufficient.

## Asset Workflow

Recommended folders for static sites:

```text
public/
  references/
  product-screenshots/
  visual-assets/
qa/
release/
src/
```

Rules:

- Put user-provided references in `public/references/`.
- Put real product screenshots in `public/product-screenshots/`.
- Put generated decorative/section visuals in `public/visual-assets/`.
- Version generated image URLs with query strings when browser caching is likely.

## Hero Structure

Use layered DOM instead of one flat background:

```jsx
<section className="hero-section">
  <div className="hero-motion-layer" aria-hidden="true">
    <span className="hero-speed-line line-a" />
    <span className="hero-speed-line line-b" />
    <span className="hero-ridge ridge-a" />
  </div>
  <img className="hero-generated-bg" src="/visual-assets/hero.png" alt="" />
  <div className="hero-copy">...</div>
  <div className="hero-visual">...</div>
</section>
```

This keeps motion, generated artwork, copy, and product proof independently tunable.

## CSS Tokens

Start with explicit tokens:

```css
:root {
  color-scheme: light;
  --font-display: "Aptos Display", "Alibaba PuHuiTi 3.0", "HarmonyOS Sans SC", "Microsoft YaHei UI", "PingFang SC", sans-serif;
  --font-body: "Aptos", "Alibaba PuHuiTi 3.0", "HarmonyOS Sans SC", "Microsoft YaHei UI", "PingFang SC", "Segoe UI", sans-serif;
  --blue: #1668ff;
  --blue-strong: #0f58f5;
  --cyan: #52d9ff;
  --text: #07142f;
  --muted: #5f6f8f;
  --line: #dbe7ff;
  --radius: 20px;
}
```

## Responsive Rules

Desktop:

- Header stays one line.
- Hero title stays 1 to 2 lines.
- Main hero CTA is visible without scrolling.
- Cards have stable dimensions.

Mobile:

- Header height around 64 to 72px.
- Navigation collapses into a menu.
- Hero copy width is capped.
- Buttons become full width.
- Floating panels must use viewport-safe width such as `min(306px, calc(100vw - 44px))`.
- Use `overflow-wrap`, `word-break`, or tighter copy when Chinese text clips.

## Implementation Priorities

1. Typography and first viewport.
2. Real screenshot placement.
3. Section-specific visuals.
4. Mobile text fit.
5. Build and screenshot QA.

Do not polish lower sections while the hero still looks generic.

## Copy Pattern

For enterprise AI sites, explain value in this order:

1. Business foundation or system category.
2. Concrete modules and workflows.
3. AI's role in understanding, decomposing, executing, and feeding back.
4. Proof through screenshots, cases, or phased delivery.

Avoid making AI the only product when the buyer also needs ERP, WMS, OA, CRM, MES, BI, or other operational basics.
