# About (`/about`)

## Layout
- Two-column grid: `repeat(auto-fit, minmax(min(100%,360px), 1fr))`, gap `clamp(40px, 7vw, 120px)`.
- Padding: 80px top, 120px bottom, gutter on the sides. Max-width 1280px. Stacks to one column on mobile.

## Left column
- The page title "ABOUT".

## Right column
- A flex column with a 24px gap and max-width 58ch.
- Body text: Archivo 16px, line-height 1.8, `#bab6b6`.

**Copy (placeholder, to be replaced by the artist)**
1. "Satellite Respond is the downtempo and IDM project of Boris Gladkill. The music drifts between slow-motion soundscapes and intricate, glitching rhythm work, built from processed field recordings, analog synthesis and patient, unresolved melodies."
2. "Each release is framed as a transmission: a fragment picked up from somewhere far away, cold at the edges and warm at the core. The project takes its cues from science fiction, orbital mechanics and the long silences between stations."
3. "[Placeholder bio — replace with final copy.]" (13px, `#7d7979`). Remove this line in production.

**Facts row**
- A wrapping flex row with gaps of 24px vertical and 56px horizontal, and 32px of padding above it.
- Each fact is a small label (`#7d7979`) over a value (Archivo 15px, `#f3f2f2`):
  - Project of: Boris Gladkill
  - Genre: Downtempo / IDM
  - Latest: Medusa

**Optional**
- A press photo could go here later, in a square-cornered image block above the facts.
