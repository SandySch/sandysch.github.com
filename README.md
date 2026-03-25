# Praxis Berührt im Sein — Nuxt 3

A faithful clone of [beruehrtimsein.wordpress.com](https://beruehrtimsein.wordpress.com/) built with Nuxt 3.

## Design

- **Typography**: Cormorant Garamond (display) + Jost (body) — elegant, organic
- **Palette**: Warm whites, sage greens, sand, bark — calm & natural
- **Animations**: Hero zoom, scroll-triggered fade-ups, image hover zooms

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run generate   # static site output
# or
npm run build      # SSR
```

## Structure

```
beruehrtimsein/
├── app.vue              # Main single-page layout & all content
├── assets/css/
│   └── main.css         # Global styles & design system
├── nuxt.config.ts       # Nuxt configuration, fonts, meta
└── package.json
```

## Sections

1. **Fixed navigation** — logo + anchor links
2. **Hero** — full-screen image with zoom animation & CTA
3. **Intro band** — sage green tagline strip
4. **Craniosacral therapy** — text + image grid with scroll reveal
5. **Conditions list** — grid of supported conditions
6. **Full-width divider images**
7. **Rhythmische Einreibungen** — second therapy section
8. **Offer band** — CTA with reduced introductory rate notice
9. **Contact** — address, hours, email & phone
10. **Footer**
