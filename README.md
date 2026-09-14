# Dr. Maya Reynolds, PsyD — Santa Monica Therapy Practice

Clone and creative redesign of [conejovalleycounseling.com](https://www.conejovalleycounseling.com/home), rebuilt for a fictional therapist profile.

**Live:** https://maya-reynolds-counseling.vercel.app

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4

## Theme system

All colours and typography are defined as design tokens in a single `@theme` block in `src/app/globals.css`. No component hardcodes a hex value, so the entire site can be re-themed by editing nine lines.

- **Primary — Sage `#7C8B7A`** — buttons, eyebrows, section anchors
- **Secondary — Warm Sand `#E6DDD0`** — alternating section backgrounds
- **Accent — Clay `#C67B5C`** — links, hover states, focal points

The palette is derived from the therapist's actual office: sage for the calm she describes in her profile, clay from the exposed brick in her photographs.

## Content architecture

All copy lives in `src/lib/content.ts`, separated from layout. Every line traces back to the provided profile — specialties, modalities, client populations, location, and session formats.

## Structure

src/
├─ app/ layout, page, global theme
├─ components/
│ ├─ sections/ one file per homepage section
│ └─ ui/ Container, Section, Button, Eyebrow, Em, Navbar
└─ lib/ content.ts, utils.ts

## Notes on the redesign

- The source template's "Who we help" section targets adults, couples, and children. Dr. Reynolds works exclusively with adults, so the layout was preserved and the content rewritten to her three client populations.
- "Our Office" is the required new section, built from her office photography and her own description of the space.
- An FAQ section was added to satisfy the submission form's content requirements.

## Image credits

Office photography and headshot from the provided profile.
Supporting photography from Unsplash.
