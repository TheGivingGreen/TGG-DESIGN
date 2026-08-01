---
name: the-giving-green-design
description: Use this skill to generate well-branded interfaces and assets for The Giving Green, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Fast orientation

- `readme.md` is the design guide: sources, content fundamentals, visual foundations, iconography.
- `styles.css` is the only stylesheet to link. It imports everything in `tokens/`.
- `components/*/` holds React primitives. Each has a `.d.ts` props contract and a `.prompt.md` telling you when to use it.
- `ui_kits/` holds full-page recreations. `slides/` holds eight 1280x720 deck layouts.
- `guidelines/*.html` are small specimen cards you can open to see the foundations rendered.

## Five rules that matter most

1. Flag red `#FC5656` is one accent moment per viewport. Spend it once.
2. Square corners everywhere except buttons, badges and dots.
3. Three fonts, three fixed jobs: Anton headlines all caps, Playfair Display 600 italic for ceremonial lines only, DM Sans for everything else.
4. No em dashes or en dashes, ever. The location is always "Soulard." The shirt is the ticket. The primary CTA always buys a ticket.
5. Marketing photography is duotone forest-over-sand. Product photography in the Pro Shop stays full color.
