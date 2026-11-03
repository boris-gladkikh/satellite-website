# Global: header, footer, background

## Starfield background
- A full-viewport `<canvas>`, `position: fixed; inset: 0; z-index: 0; pointer-events: none`. All content sits above it at z-index 1.
- 240 stars. Each star has random x and y (0–1, normalised), a depth `z = random()^2.2` and a phase `p = random()·2π`.
- Drift per second: `x -= v·(0.15+z)` and `y += v·0.3·(0.15+z)`, with `v = 0.005 × speed` (default speed 1). Stars wrap at the edges. Nearer stars move faster, which gives parallax.
- Radius: `0.35 + z·1.3` px. Alpha: `(0.15 + z·0.7) × (0.65 + 0.35·sin(t/1600ms + p))`, a slow twinkle. Fill `#f3f2f2`.
- Render with devicePixelRatio scaling and resize on window resize. Respect `prefers-reduced-motion` by freezing the drift (keep the stars static).

## Header
- Flex row, space-between, wraps on narrow screens. Padding: 40px top/bottom, gutter on the sides. No border.
- **Left:** the logo image at height `clamp(11px, 1.1vw, 16px)`. It links to Home.
- **Right:** nav items HOME · ABOUT · MUSIC · CONTACT, with a gap of `clamp(20px, 3vw, 44px)`.
  - Each item is a column: the label (Jost 12px / 400 / 0.32em / uppercase), then 8px of space, then a 4×4px white dot.
  - Inactive: colour `#7d7979`, dot opacity 0. Hover: `#ffffff`.
  - Active: colour `#f3f2f2`, dot opacity 1. Colour and opacity fade over 0.4s.
  - No nav item is active on News detail.

## Footer
- Centred column with a 20px gap. Padding: 48px top, 40px bottom.
- A row of social links with gaps of 12px vertical and 32px horizontal:
  - Spotify, Apple Music, Bandcamp (https://satelliterespond.bandcamp.com/), SoundCloud, Instagram, Facebook, X.
  - Jost 10px / 0.32em / uppercase, colour `#7d7979`, hover `#fff`. They open in a new tab.
  - Every URL except Bandcamp is a placeholder.
- Below the links: "© 2026 Satellite Respond" at 11px, tracking 0.1em, colour `#444141`.

## Shared patterns
- **Page title:** see the token table (Jost 300, 0.5em tracking, uppercase).
- **Text link (underline style):** Jost 11px uppercase, 0.3em tracking, colour `#bab6b6`, 6px bottom padding, 1px underline in `rgba(243,242,242,0.3)`. On hover both the text and the underline turn `#fff`.
- **Outline pill button:**
  - Padding 14–16px vertical and 28–36px horizontal, 1px border in `rgba(243,242,242,0.5)`, radius 999px.
  - Text: Jost 11px / 0.32em / uppercase.
  - Hover: background `#f3f2f2`, text `#000`.
- **Underline input:**
  - No box: 14px vertical padding, 1px bottom border in `rgba(243,242,242,0.2–0.25)`, 15–16px text in `#f3f2f2`.
  - The placeholder is at 35% opacity. On focus the underline turns `#f3f2f2`.
- **Image placeholder tile:** fill `rgba(243,242,242,0.04)` with a centred label (Jost 10px / 0.36em / uppercase / `#605d5d`).
- **Focus:** give every interactive element a visible `:focus-visible` outline, 1–2px solid `#f3f2f2` with a 3px offset.
