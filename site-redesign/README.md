# Handoff: Satellite Respond website

## Overview
A 5-view website for Satellite Respond, the downtempo / IDM project of Boris Gladkill, with a sci-fi / space theme. The views are Home, News detail, About, Music and Contact. Every page sits on a black ground over a slowly drifting animated starfield.

## About the design files
The files in `prototype/` are **design references built in HTML**. They show the intended look and behaviour; they are not production code. Recreate them in the target codebase's stack. If there is no codebase yet, a small static site works well: Astro, Next.js (static export) or plain HTML/CSS/JS. Give each page its own route:
- `/` Home
- `/news/[slug]` News detail
- `/about`
- `/music`
- `/contact`

To view the prototype, serve the `prototype/` folder locally (e.g. `npx serve prototype`) and open `Satellite Respond.dc.html`. The nav switches views in place. Note that the prototype links a design-system stylesheet (`_ds/.../styles.css`) for base resets only. The final look does **not** use that system: ignore its red accent and Archivo-heavy styles. The tokens below are the source of truth.

## Fidelity
**High-fidelity.** Colours, type, spacing and interactions are final. The copy, release list, news items, emails and social URLs are placeholders unless noted.

## Page specs
- [pages/00-global.md](pages/00-global.md): header, footer, starfield, tokens and shared patterns
- [pages/01-home.md](pages/01-home.md)
- [pages/02-news-detail.md](pages/02-news-detail.md)
- [pages/03-about.md](pages/03-about.md)
- [pages/04-music.md](pages/04-music.md)
- [pages/05-contact.md](pages/05-contact.md)

## Design tokens
### Colour (black and white only; no accent colour)
| Role | Value |
|---|---|
| Page background | `#000000` |
| Primary text / white UI | `#f3f2f2` |
| Hover text | `#ffffff` |
| Secondary text | `#bab6b6` |
| Muted text / labels | `#9b9797` |
| Tertiary labels | `#7d7979` |
| Placeholder-tile text | `#605d5d` |
| Copyright | `#444141` |
| Hairline | `rgba(243,242,242,0.10)` section dividers; `0.15` progress tracks; `0.20–0.25` input underlines |
| Subtle fill | `rgba(243,242,242,0.04)` image placeholders and player panels |
| Outline button border | `rgba(243,242,242,0.5)` |
| Text selection | `rgba(255,255,255,0.25)` |

### Typography
- **Jost** (Google Fonts, weights 200/300/400) for display, titles, labels, nav and buttons. It echoes the geometric logo.
- **Archivo** (weights 300/400) for body text. The body default is weight 300.

| Style | Font | Size | Weight | Tracking | Case |
|---|---|---|---|---|---|
| Display (MEDUSA) | Jost | clamp(32px, 4vw, 56px) | 200 | 0.22em | upper |
| Article H1 | Jost | clamp(32px, 4vw, 52px), lh 1.2 | 200 | 0.04em | as written |
| Page title (ABOUT / MUSIC / CONTACT / NEWS / TRANSMISSIONS) | Jost | clamp(18px, 1.6vw, 22px), lh 1.4 | 300 | 0.5em | upper |
| Release title | Jost | clamp(28px, 3vw, 40px) | 300 | 0.12em | upper |
| Card title | Jost | 20px, lh 1.35 | 300 | 0.04em | as written |
| Eyebrow label | Jost | 11px | 400 | 0.4em | upper |
| Small label / meta | Jost | 10px | 400 | 0.36em | upper |
| Nav item / link / button | Jost | 11–12px | 400 | 0.3–0.32em | upper |
| Body large | Archivo | 16–18px, lh 1.7–1.85 | 300 | — | — |
| Body small | Archivo | 14–15px, lh 1.7 | 300 | — | — |

### Spacing and layout
- Horizontal page gutter: `clamp(24px, 5vw, 80px)`
- Content max-width: 1280px (pages), 1120px (Music), 880px (article)
- Vertical section padding: 80–96px. Bottom padding on page ends: 120px.
- Grids use `repeat(auto-fit, minmax(min(100%, Npx), 1fr))` so they collapse to one column on mobile.

### Shape and elevation
- Image corners are square (radius 0).
- Circular play buttons and pill-shaped outline buttons (radius 999px).
- Cover-art glow: `box-shadow: 0 40px 140px rgba(255,255,255,0.07)`.
- No borders around content blocks. Separation comes only from whitespace and 1px hairlines.

### Motion
- Hover colour and opacity transitions: 0.3s ease. Nav colour change: 0.4s.
- Primary play button scales to 1.06 on hover.

## Assets
- `prototype/assets/sr-logo.png`: white wordmark on a transparent background, trimmed to 1857×93. Ask the artist for an SVG for production.
- `prototype/assets/medusa.png`: Medusa cover art, cropped from a screenshot at low resolution. **Replace it with the original artwork.**
- Icons: inline SVG play (triangle) and pause (two bars). Any icon set works (Lucide suggested).

## Files
- `prototype/Satellite Respond.dc.html`: the full prototype, with markup and logic in one file
- `prototype/support.js`: the prototype runtime (needed only to view the reference)
