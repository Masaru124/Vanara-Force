---
name: VANARA force
description: Elite Athletic Strength Sanctuary and Advanced Bio-Recovery
colors:
  primary: "#FF5500"
  primary-hover: "#FF6A1A"
  primary-dark: "#D94400"
  neutral-bg: "#050507"
  surface-card: "#0D0E12"
  surface-card-hover: "#13151B"
  surface-elevated: "#181A22"
  text-primary: "#FFFFFF"
  text-secondary: "#ECE9E1"
  text-muted: "#9599A6"
  text-dim: "#606472"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-strong: "rgba(255, 255, 255, 0.16)"
  border-accent: "rgba(255, 85, 0, 0.4)"
typography:
  display:
    fontFamily: "'Syne', -apple-system, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Syne', -apple-system, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Archivo', -apple-system, sans-serif"
    fontSize: "24px"
    fontWeight: 700
  body:
    fontFamily: "'Archivo', -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "'Archivo', -apple-system, sans-serif"
    fontSize: "12px"
    fontWeight: 500
rounded:
  xs: "4px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
---

## Overview

VANARA force is a high-performance strength sanctuary designed with an uncompromising, athletic, and architectural visual language. The interface reflects the raw discipline of heavy iron and Olympic lifting combined with the clinical precision of cold plunge and infrared bio-recovery.

The visual direction rejects generic fitness templates, cartoonish gym tropes, soft pastel wellness cliches, and AI-slop artifacts (gradient text, blurred neon blobs, thick card side-tabs).

## Colors

- **Primary Brand Orange (`#FF5500`):** Used with intention on focal calls to action, active indicators, and high-impact accents.
- **Deep Sanctuary Dark (`#050507`):** The foundational obsidian background establishing authority, focus, and depth.
- **Surface Dark Charcoal (`#0D0E12`, `#13151B`):** Structural layers providing contrast without harsh borders.
- **Crisp Text (`#FFFFFF`):** High contrast primary headings and crucial copy (exceeds WCAG AAA 12:1).
- **Secondary Text (`#A1A7B5`):** Subheaders, descriptive paragraphs, and metadata (exceeds WCAG AA 6.5:1).
- **Muted Text (`#666E7D`):** Footers, captions, and secondary tags (exceeds 4.5:1).

## Typography

- **Display & Section Titles:** Bold, architectural uppercase grotesque with tight tracking (`-0.02em` to `-0.03em`). Solid white or solid high-contrast orange. Never gradient text.
- **Body & Editorial:** Highly legible clean sans-serif with natural line heights (1.5 - 1.6) and comfortable reading measure (55 - 72ch).
- **Numerals & Metrics:** Rendered with `font-variant-numeric: tabular-nums` to guarantee steady alignment across pricing, timers, and statistics.

## Layout

- **Asymmetric Editorial Structure:** Content is structured with intentional rhythm, breaking monotonic 3-card grids with focal highlights, split hero framing, and rich media callouts.
- **Generous Vertical Breathing Room:** Section padding scales responsively (`padding-block: clamp(4rem, 8vw, 8rem)`).
- **Zero Horizontal Overflow:** All viewports strictly clamp boundaries with `overflow-x: clip` and responsive grid auto-fit limits.

## Elevation & Depth

- **Tonal Layering:** Elevation is achieved through subtle luminance steps (`#050507` -> `#0D0E12` -> `#181A22`) paired with refined `1px solid rgba(255, 255, 255, 0.08)` borders.
- **Directional Soft Shadows:** Elevated cards use realistic offsets: `0 16px 32px -8px rgba(0, 0, 0, 0.6)`.
- **Absolute Ban on Halos:** No zero-offset radial glow or blurred neon outlines.

## Shapes

- **Base Cards & Modules:** Consistent `border-radius: 12px` to `16px`.
- **Action Pills & Badges:** `border-radius: 9999px` reserved for buttons, status tags, and chips.
- **No Heavy Skew or Chamfers:** Geometric integrity without retro gimmickry.

## Components

- **Navbar:** Sticky, compact, translucent dark obsidian with crisp border-bottom and direct WhatsApp concierge CTA.
- **Hero:** Impactful split architecture with bold solid typography, authentic training atmosphere, and clear dual CTAs.
- **Interactive Matrix & Cards:** Subtle hardware-accelerated `:hover` lift (`transform: translateY(-2px)`) with crisp border illumination.
- **Plan Assessment Quiz:** Progressive, interactive 4-step selector that guides athletes to their exact tier recommendation.

## Do's and Don'ts

### Do:
- Use solid colors for all headings, labels, and accents.
- Use tabular figures (`tabular-nums`) for prices, stats, and phone numbers.
- Maintain WCAG AA contrast (minimum 4.5:1 for body, 3:1 for large text).
- Use authentic Bangalore Prestige Falcon City information.
- Use hyphens (`-`) or pipes (`|`) for clean separation.

### Don't:
- Never use gradient text (`background-clip: text`).
- Never use thick colored side-tab borders on cards.
- Never use em-dashes (`—`).
- Never reintroduce day passes (no 1-day pass, no 3-day pass).
- Never use fuzzy colored glow or radial neon blur blobs.
