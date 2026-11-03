# News detail (`/news/[slug]`)

Opened by clicking a card in the Home news grid.

## Layout
- A centred column, max-width 880px. Padding: 48px top, 120px bottom, gutter on the sides.
- Flex column with a 48px gap between blocks.

## Blocks, top to bottom
1. **Back link:** "← All news", Jost 11px / 0.3em / uppercase, `#7d7979`, hover `#fff`. It goes to Home, or to a `/news` index if one is added later.
2. **Header:** a flex column with a 20px gap.
   - Date as an eyebrow (`#9b9797`).
   - H1 in the Article H1 style, colour `#f3f2f2`, `text-wrap: balance`.
   - Standfirst: Archivo 18px, line-height 1.7, `#bab6b6`, max 52ch.
3. **Hero image:** 16:9, full column width, background-size cover. Use the placeholder tile when there's no image.
4. **Body:** a flex column with a 24px gap and max-width 62ch.
   - Paragraphs: Archivo 16px, line-height 1.85, `#bab6b6`. Lorem ipsum for now.
   - Pull quote (`<blockquote>`): Jost 300, `clamp(20px, 2vw, 26px)`, line-height 1.5, 0.02em tracking, `#f3f2f2`. No border or indent; 16px vertical margin.
5. **Previous / next:**
   - A row with space-between, wrapping. 40px top padding and a 1px top hairline in `rgba(243,242,242,0.1)`.
   - Left: "← Previous" (small label, `#7d7979`) over the previous title (Jost 300, 17px, `#f3f2f2`).
   - Right: the same, right-aligned, with "Next →". Each side is at most 45% wide and fades to opacity 0.7 on hover.
   - The prototype wraps around the ends of the list. In production, hide a side when there's no neighbour.

## Data model
`{ slug, date, title, excerpt (used as the standfirst), heroImage, body (rich text / MDX) }`. Markdown or a headless CMS both work.

## Behaviour
- Scroll to the top on navigation.
- No nav item is active on this page.
