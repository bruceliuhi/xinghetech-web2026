# Xinghe UI QA and Deploy

Use this reference before final delivery or deployment.

## Local QA Checklist

Run:

```powershell
cmd /c pnpm build
```

Then verify:

- desktop screenshot around `1440x900` or wider
- small laptop screenshot around `1366x768`
- mobile screenshot around `390x844`
- hero headline line count
- CTA contrast and no button wrapping
- no horizontal scroll on mobile
- all screenshots and generated assets load
- section anchors work
- mobile menu opens and closes
- reduced motion fallback exists when animations are present

Use Chrome or Playwright screenshots where possible. Keep QA screenshots under `qa/` and remove temporary browser profile directories afterward.

## Visual Acceptance

A Xinghe UI site is not done when it merely builds. It is done when:

- the first viewport looks premium and intentional
- the product category is obvious
- PC and mobile both look designed
- reference-page mechanics are visible without copying another brand
- the user can open the site locally or online

## Common Fixes

- If desktop headings wrap badly, add section-specific width or `white-space: nowrap`, then override to normal on mobile.
- If mobile text clips, cap text width and use `word-break: break-all` only where needed.
- If a floating panel drifts off mobile, avoid hard-coded transforms; use CSS variables for animated `translate`.
- If images look repetitive, generate function-specific card assets.
- If the hero feels static, add subtle speed lines, background drift, and panel float.

## Static Deployment Pattern

Use a versioned release directory:

```text
/www/wwwroot/site-domain/
  releases/YYYYMMDD-HHMMSS/
  current -> releases/YYYYMMDD-HHMMSS
```

Deployment steps:

1. Build locally.
2. Archive `dist/`.
3. Upload archive to the server.
4. Extract into a new release directory.
5. Update `current` symlink.
6. Run `nginx -t`.
7. Reload Nginx only after the test passes.
8. Verify HTML, CSS, JS, images, and route fallback.

## Nginx Notes

For static SPA sites:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

For ACME:

```nginx
location ^~ /.well-known/acme-challenge/ {
    root /www/wwwroot/site-domain;
    allow all;
    default_type text/plain;
}
```

When enabling HTTPS:

- wait until DNS points to the target server
- request the certificate
- switch HTTP to HTTPS redirect
- verify `https://domain/`, CSS, JS, and HSTS

## Final Report

Report only the important facts:

- files changed
- build result
- QA screenshot paths
- deployment URL if deployed
- any unresolved DNS, certificate, or browser-cache caveats
