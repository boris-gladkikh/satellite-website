# Music (`/music`)

## Layout
- A centred column, max-width 1120px. Padding: 80px top, 120px bottom, gutter on the sides.
- Flex column with a 72px gap.

## Header row
- Space-between, aligned to the bottom, wrapping.
- **Left:** the page title "MUSIC".
- **Right:** the underline-style text link "Full discography on Bandcamp", pointing to https://satelliterespond.bandcamp.com/ and opening in a new tab.

## Release list
- A flex column with a 72px gap between releases. Releases are ordered newest first.
- Each release is a grid: `repeat(auto-fit, minmax(min(100%,260px), 1fr))`, gap `clamp(28px, 4vw, 56px)`, vertically centred.

**Cover (left)**
- Square, max-width 360px, background-size cover. Use the placeholder tile ("Cover art") when there's no artwork.

**Info (right)**
- A flex column with a 20px gap. Top to bottom:
  - Meta: small label in `#7d7979`, formatted as Type · Year (e.g. "Single · 2026").
  - Title in the Release-title style, colour `#f3f2f2`.
  - Player panel: background `rgba(243,242,242,0.04)`, padding 18×20px, no border.
    - The prototype shows a 40px circular outline play button and a 1px track.
    - **In production, replace the panel with the release's Bandcamp embedded player.** Use the slim/standard embed with a dark background, white text and white link colour so it sits in the panel.

## Data
- The prototype has "Medusa" (Single · 2026) and two "Release title" placeholders.
- Fill the list from the Bandcamp discography (https://satelliterespond.bandcamp.com/).
- Each release needs: `{ title, type, year, cover, bandcampAlbumId or trackId }`.
