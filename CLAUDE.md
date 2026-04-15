# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PulseDev landing page — a single-page marketing site for an engineering operations advisory service. Not SaaS, not coaching, not an agency.

## Tech Stack

- **Vue 3** via CDN (unpkg) — reactive components for FAQ, data-driven sections
- **Tailwind CSS** via CDN — with inline custom config (brand colors, accent, surface tokens)
- **Google Fonts** — Inter typeface
- **No build system** — single `index.html` file, no package.json, no bundler

## Development

Serve with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

No build, lint, or test commands exist.

## Architecture

Everything lives in `index.html`:

- **`<head>`** — meta tags, favicon, font imports, Tailwind CDN + inline config
- **`<style>`** — ~300 lines of custom CSS (animations, glassmorphism, gradients, reveal-on-scroll)
- **`<div id="app">`** — Vue 3 app with sections: Hero, Pain Points, Solution, Process, Deliverables, Differentials, FAQ, CTA, Footer
- **`<script>`** — Vue 3 app definition with reactive data arrays (pain points, steps, deliverables, differentials, FAQ items) and scroll/animation logic

## Key Directories

- `images/` — static assets (logo, favicon, section illustrations)
- `dist/` — old build output (not actively used)

## Brand & Content Reference

- `SDD_SPEC.md` — full specification (sections, copy, visual direction, acceptance criteria)
- `UPDATE_POSICAO_IDENTIDADE.md` — brand positioning, tone of voice, differentiation
- `IMAGE_PROMPTS.md` — prompts used to generate visual assets

## Style Notes

- Language: Brazilian Portuguese (pt-BR)
- Tailwind custom palette: `brand-*` (blues), `accent` (emerald), `surface-*`, `text-*`
- Animations: CSS reveal-on-scroll with IntersectionObserver, parallax via mousemove
- WhatsApp CTA links are generated dynamically via Vue computed property
