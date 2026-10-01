# Chheangly Hok – UX UI Designer Portfolio

Portfolio website built with HTML, CSS and Bootstrap 5.
Every file lives at the repo root (flat structure) on purpose —
it is simpler to pull/push with Git and it avoids broken relative
paths after deploying to GitHub Pages.

## Files
- `index.html` – the page
- `style.css` – design tokens (color system + typography system) and all styles
- `main.js` – small interactive behaviors (mobile nav close, "Show all" accordion)
- `bootstrap.min.css` / `bootstrap.bundle.min.js` – self-hosted Bootstrap 5.3 (no CDN dependency)
- `manrope-400/500/600/700.woff2` – self-hosted Manrope font weights
- `galaxy.jpg`, `portrait.webp`, `tosexplore.jpg`, `telecom-*.jpg` – images

## Design system
Colors and type sizes are defined as CSS custom properties at the
top of `style.css` ("01. COLOR THEORY" and "02. TYPOGRAPHY SYSTEM").
Change a value there and it updates everywhere it's used.

- Primary button hover = Primary 800 (`--color-primary-hover`)
- Section titles ("Selected Work", "About Me", "My Design Process",
  "Let's Connect") all use the H1 scale, which resizes automatically
  at each breakpoint: 40px desktop / 32px tablet / 24px mobile.
- Cards (`project-card`, `step-card`, `connect-card`) share the
  `.glass-card` utility for the frosted-glass look.

## Breakpoints
- Desktop: 1200px+
- Tablet: 768–1199px (hamburger nav, single-column footer)
- Mobile: <768px

## Deploying
No build step. Push these files to a GitHub repo, then turn on
GitHub Pages (Settings → Pages → Deploy from branch → main → / root).
