# Freight Africa

A premium, mobile-responsive marketing site for **Freight Africa** \u2014 a digital
freight marketplace connecting available trucks with cargo across Africa's
major trade corridors.

Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and
Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Landing page (assembles all sections)
  globals.css         Tailwind base + global styles
components/
  Navbar.tsx
  Hero.tsx
  ProblemSection.tsx
  PlatformSection.tsx
  HowItWorks.tsx
  MarketplacePreview.tsx
  AfricaCoverage.tsx
  WhyFreightAfrica.tsx
  WhoIsItFor.tsx
  WaitlistSection.tsx
  FAQSection.tsx
  Footer.tsx
  ui/
    Button.tsx
    SectionHeading.tsx
    RouteMap.tsx       Signature animated corridor map (hero + coverage)
    ListingCard.tsx     Truck / cargo / container / agriculture cards
lib/
  data.ts              All placeholder content: nav links, listings,
                        corridors, regions, personas, FAQ
  utils.ts             cn() class-merging helper
```

## Connecting the waitlist form

The waitlist form in `components/WaitlistSection.tsx` posts to Formspree.
Replace the placeholder endpoint near the top of the file:

```ts
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

with your real Formspree form endpoint (create one at
[formspree.io](https://formspree.io)). The form already sends `name`,
`company`, `email`, `phone`, `country`, and `userType` fields, and shows a
success state on a `200` response.

## Design notes

- **Palette**: Deep Navy `#0F172A`, Freight Blue `#2563EB`, Emerald Green
  `#16A34A`, Accent Orange `#F97316`, plus slate/white neutrals \u2014 defined in
  `tailwind.config.ts`.
- **Type**: Inter, loaded via `next/font/google` in `app/layout.tsx`.
- **Signature element**: `components/ui/RouteMap.tsx` is a stylized,
  low-poly Africa silhouette with animated freight corridor lines and pulsing
  city nodes. It anchors the hero and reappears in the coverage section to
  tie the story together.
- Motion respects `prefers-reduced-motion`; interactive elements have visible
  focus states (see `app/globals.css`).

## Notes

- All marketplace listings, FAQ copy, and stats are realistic placeholder
  content \u2014 swap in real data as the platform develops.
- The "Find Loads" / "Find Trucks" nav links scroll to the marketplace
  section. Point them at dedicated routes once those pages exist.
# Freight-Africa
