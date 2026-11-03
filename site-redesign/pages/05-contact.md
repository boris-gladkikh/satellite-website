# Contact (`/contact`)

## Layout
- Two-column grid: `repeat(auto-fit, minmax(min(100%,340px), 1fr))`, gap `clamp(48px, 7vw, 120px)`.
- Padding: 80px top, 120px bottom, gutter on the sides. Max-width 1280px.

## Left column
- A flex column with a 48px gap.
- The page title "CONTACT".
- Email list: a flex column with a 32px gap. Each entry is a small label (`#7d7979`) over a mailto link (Archivo 18px, `#f3f2f2`, opacity 0.7 on hover):
  - Booking: booking@satelliterespond.com (placeholder)
  - Press & management: press@satelliterespond.com (placeholder)

## Right column: form
- A flex column with a 32px gap and max-width 520px. Top to bottom:
  1. **Topic selector:** three text toggles (Booking, Press, Other) in a row with a 28px gap.
     - Text style: Jost 11px / 0.3em / uppercase, 6px bottom padding.
     - Selected: `#f3f2f2` with a 1px `#f3f2f2` underline. Unselected: `#7d7979` with no underline.
     - Booking is selected by default. It's a single-select radio group, so use proper radio semantics.
  2. **Name:** underline input, required.
  3. **Email:** underline input, type email, required.
  4. **Message:** underline textarea, 4 rows, required.
  5. **"Send":** outline pill button, left-aligned.

## States
- **Success:** the form is replaced by:
  - The eyebrow "Received".
  - The heading "Transmission logged." (Jost 300, 32px, 0.04em tracking).
  - "Thanks for reaching out. Expect a reply within a few days." (`#bab6b6`, line-height 1.7).
  - A "Send another" underline link, which restores the form.
- **Validation:** the HTML5 required and email checks. Show inline errors under the field (12px, `#bab6b6`).
- **Submitting:** disable the button and show "Sending…" in its label.

## Production
- Post to a form backend (Formspree, Netlify Forms or a serverless function).
- Route messages by topic: Booking goes to the booking address; Press and Other go to the press/management address.
- Add a honeypot field for spam.
