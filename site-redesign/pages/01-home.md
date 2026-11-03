# Home (`/`)

The page has three stacked sections, in this order.

## 1. Spotlight: latest release
- Grid with columns `auto minmax(0,1fr)`, vertically centred, gap `clamp(32px, 5vw, 72px)`. Max-width 1280px, centred.
- Padding: 16px top, 80px bottom, gutter on the sides. The section is about 360px tall on desktop.
- On mobile (under about 640px), stack the columns: cover first, then text.

**Cover (left column)**
- Size `clamp(200px, 24vw, 300px)` square, `object-fit: cover`, with the cover glow shadow.

**Text column (right)**
- Flex column with a 20px gap and max-width 480px. Top to bottom:
  1. Eyebrow: "New single · Out now" in `#9b9797`.
  2. "MEDUSA" in the Display style, colour `#f3f2f2`.
  3. Intro line: "Downtempo transmissions and IDM explorations from deep orbit." Archivo 16px, line-height 1.7, `#bab6b6`, max 36ch.
  4. Mini player row, with an 18px gap:
     - A 48px circular play button: background `#f3f2f2`, icon `#000` at 14px. It scales to 1.06 on hover.
     - Beside it: a flex column (10px gap) with a label row ("Play Medusa" on the left, the elapsed / total time on the right in tabular numbers, 12px, `#bab6b6`).
     - Under the label row: a 1px progress track in `rgba(243,242,242,0.15)` with a `#f3f2f2` fill.
  5. Streaming links: Spotify, Apple Music, Bandcamp, SoundCloud. Text links (Jost 11px / 0.3em / uppercase, `#bab6b6`, hover `#fff`), with gaps of 12px vertical and 28px horizontal.

**Production behaviour**
- Swap the mock player for real audio: either a Bandcamp embed or a custom `<audio>` player with this styling.
- The play button toggles between play and pause icons, and the progress bar tracks the playhead.

## 2. News grid
- Min-height 480px. A 1px top hairline in `rgba(243,242,242,0.1)`. Padding 96px plus the gutter. Max-width 1280px.
- Flex column with a 48px gap: the page title "NEWS", then the grid.
- Grid: `repeat(auto-fit, minmax(min(100%,260px), 1fr))`, with gaps of 48px between rows and 40px between columns. Shows 3 items; in production, show the latest 3 posts.
- **Card:** a flex column with a 16px gap. The whole card is clickable (opens News detail) and fades to opacity 0.75 on hover (0.3s). Contents:
  - A 3:2 image, background-size cover (use the placeholder tile when there's no image).
  - Date: small label, `#7d7979`.
  - Title: card-title style, `#f3f2f2`.
  - Excerpt: Archivo 14px, line-height 1.7, `#9b9797`.
- **Placeholder content:**
  - (1) "Nov 2026" / "Medusa is out now" / "The new single is streaming everywhere and available on Bandcamp." with the Medusa cover.
  - (2) and (3): "Date" / "News headline" / placeholder text.

## 3. Newsletter signup
- Min-height 400px, with a 1px top hairline. The background is a very faint top-down gradient: `linear-gradient(rgba(243,242,242,0.025), transparent)`.
- Centred column with a 24px gap and 80px vertical padding. Contents:
  1. The page title "TRANSMISSIONS".
  2. Copy: "New releases, live dates and studio notes, sent rarely. No noise." Archivo 15px, line-height 1.7, `#9b9797`, max 44ch.
  3. A form, 16px below the copy and up to 480px wide: a row of the underline email input (placeholder "Email address", flex 1) and a "Subscribe" outline pill, with a 20px gap.

**States**
- Default: the form.
- Success: the form is replaced by "Signal received — you're on the list" (Jost 12px, 0.3em tracking, uppercase, `#f3f2f2`).
- Validation: the email field is required and must be a valid email. Show errors as one line of 12px `#bab6b6` text under the input.
- Loading: disable the button and show "Sending…" in its label.
- Wire the form to the artist's mailing-list provider (Mailchimp, Buttondown, Bandcamp mailing list, etc.).
