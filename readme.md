# The Giving Green Design System

The Giving Green (TGG) is a charity pub golf crawl in Soulard, St. Louis. Nine Soulard bars become nine holes of pub golf for one Saturday. Attendees carry a physical scorecard, play a game at each hole, compete for the lowest score, and raise money for nine local charities at the same time. **The shirt is the ticket.** Shirt color designates the charity team.

The brand runs Masters manners with Nike volume: restrained palette, ceremonial serif, hard rules and square corners, and then a headline in all-caps Anton at 148px.

**The 2026 main event:** Saturday, October 3, 2026, 1 to 6 PM Central, Soulard, St. Louis. $45 tickets, $15 of every ticket to the charity the buyer picks at checkout. 21 and over. Year One (2025) raised $20,634 across nine charity partners, drew 1.5M+ social impressions and sold through 100% of every sponsored drink.

---

## Sources

Everything here was built by reading real source, not by recreating screenshots.

| Source | What it gave us |
| --- | --- |
| `github.com/TheGivingGreen/tgg-website` (branch `main`) | The entire visual system. `index.html` holds the token block, the full CSS, and the marketing copy. `pro-shop.html` and `sponsor.html` gave the retail and partner surfaces. `llms.txt` and `project-brief.md` gave the brand facts and voice rules. |
| `thegivinggreen.org` | Live marketing site (built from the repo above, GitHub Pages) |
| `thegivinggreen.store` | Shopify storefront. **Not** among the supplied sources; no store screens are recreated here. |
| Uploaded `GivingGreen_HeartFlag_HiRes` artwork | The "Fore Good." heart-flag lockup, saved to `assets/images/logos/` |
| Uploaded `tgg-share-card.jpg` | Social share card, saved to `assets/images/Social/` |

The website repository is worth reading directly if you are building anything substantial for this brand. It is a single-file static site, so the CSS, the copy and the markup all sit together and are easy to lift from: <https://github.com/TheGivingGreen/tgg-website>.

Related repositories the team maintains, not read for this system: `TheGivingGreen/Ozzie-AI-Framework` (agent operating framework), `TheGivingGreen/brand-voice`.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The one stylesheet consumers link. Imports only. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `motion.css`, `semantic.css`, `fonts.css`, `base.css` |
| `components/` | React primitives, grouped by concern (see below) |
| `ui_kits/marketing_site/` | Recreation of `thegivinggreen.org`, click-through |
| `ui_kits/pro_shop/` | Recreation of the Pro Shop headwear page |
| `ui_kits/sponsor_page/` | Recreation of the gated sponsor page and its deck-as-page |
| `slides/` | Eight 1280x720 slide layouts for sponsorship decks |
| `guidelines/` | Foundation specimen cards (colors, type, spacing, brand) |
| `assets/` | Logos, charity marks, shirts, hats, photography, topo texture |
| `SKILL.md` | Agent Skills entry point |
| `github.md` | Upstream source association and sync record |

## Components

Grouped by concern. Every component has a sibling `.d.ts` (props contract) and `.prompt.md` (when and how to use it).

**`components/core/`** — `Button`, `Badge`, `Eyebrow`, `SectionHead`, `Ceremonial`, `Input`, `EmailForm`

**`components/brand/`** — `Mark`, `DuotoneImage` (plus `DuotoneDefs`), `PhotoStrip`, `Stamp` (plus `StampDot`), `Ticker`, `AccentBand`

**`components/scorecard/`** — `Scorecard`, `CourseStack`, `Countdown`

**`components/cards/`** — `TeamCard`, `TicketCard`, `TierCard`, `StatCard` (plus `StatGrid`), `ProductBand`

**`components/navigation/`** — `NavBar`, `SiteFooter`

**`components/disclosure/`** — `FaqList`

### Intentional additions

The source is a hand-written static site with CSS classes rather than a component library, so the inventory above is a faithful factoring of what the CSS actually defines (`.btn`, `.t-badge`, `.section-eyebrow`, `.section-h2` + `.section-serif`, `.hero-stamp`/`.datebar`, `.ticker-wrap`, `.stack`, `.score-table`/`.scoretable`, `.team-card`/`.tcard`, `.t-card`, `.tier`, `.stat`, `.band`, `.faq-item`, `.drop-count`, `.redband`/`.redcard`, `nav`, `footer`). Three additions worth naming:

- **`Mark`** wraps the heart-flag artwork so nobody hand-rolls it. In the source it is inline SVG pasted into every page.
- **`DuotoneDefs`** exposes the `#duotone` SVG filter that the source declares once per page.
- **`StatGrid`** is the auto-fit wrapper the source writes as `.statgrid`.

Nothing else was invented. There is no Toast, Avatar, Tabs, Tooltip, Switch or Select in this system because the source defines none.

---

## CONTENT FUNDAMENTALS

### Voice

Warm community builder. Party and purpose are **equal** and the copy never picks a side: not party-first, not preachy about charity. It talks to attendees like friends who are already in on the joke, and to sponsors like a business partner with receipts.

### The hard rules

1. **No em dashes or en dashes. Ever.** Not in copy, not in headings, not in alt text. Use a comma, a period, or a colon. Interpuncts (`·`) are used freely as separators; dashes are not.
2. **The location is always "Soulard."** Never "Historic Soulard."
3. **"Fore Good." closes marketing copy only.** Never in personal outreach, never in a one-to-one email, never on a document addressed to a single named person.
4. **The shirt is the ticket.** Not "buy a shirt and a ticket." One purchase, one object, two jobs.
5. **The primary CTA is always buy a ticket.** "Get on the Tee Sheet", "Get Tickets", "Join This Team". Never "Learn more" as the primary action.
6. **Never name exact attendance figures publicly**, and never break out per-charity fundraising.

### Casing and person

- Section headlines are set in Anton and therefore all caps by rendering; write them in sentence or title case in source and let the font do the shouting.
- Labels, eyebrows and buttons are uppercase with wide tracking.
- Body copy is sentence case. Title case is for proper nouns and product names ("The Founders Cap", "Signature Hole Sponsor").
- **You** for attendees: "Last year, *you* turned Soulard into a golf course." **We** for the organization: "*We* turn 9 of our favorite local bars into 9 holes." Never "I".
- Numerals over words for counts of holes, charities and dollars: "9 Holes. 9 Drinks. 9 Charities." "$20,634 raised."

### Emoji

None. There is no emoji anywhere in the source and none should be added. Golf and heart iconography is carried by the mark, not by glyphs.

### The golf conceit

Golf language is used constantly and always straight-faced. "Tee sheet", "the course", "strokes", "hole", "Pro Shop", "lowest score wins", "That's a stroke. Try again." (the passcode error), "Party Fore a Great Cause." The joke is the mapping; the delivery is deadpan. Never explain the pun, never add an exclamation mark to sell it.

### Examples worth copying

> Nine bars become nine holes. Last year, you turned Soulard into a golf course and raised $20,634 for nine local charities. That's the number on the leaderboard. This October, we're smashing it. Together.

> Not a logo on a banner nobody reads. A mechanic attendees actively play through.

> Not even a little bit. In Year One we had everyone from actual golfers to people who have never picked up a club having the same amount of fun. If you can carry a scorecard and order a drink you are qualified to play.

> The one that started it all. Clean white canvas, a solid green rope, and the mark that gave The Giving Green its name.

Notice the rhythm: a short fragment, then a longer sentence that earns it. Proof points are exact numbers, never adjectives.

---

## VISUAL FOUNDATIONS

### Color hierarchy

The hierarchy matters more than the palette. Five colors with fixed jobs:

| Token | Hex | Job |
| --- | --- | --- |
| `--forest` | `#1E3A32` | Primary ink and every dark surface |
| `--sand` | `#F5F0E8` | Canvas |
| `--fairway` | `#718D58` | Secondary green, muted copy on sand |
| `--bunker` | `#ADA366` | Gold detail: eyebrows, labels, ceremonial lines on dark |
| `--flag` | `#FC5656` | **One accent moment per viewport.** Spend it once, spend it well. |

Extensions: `--shadow-ink #142822` (footers, full-bleed dark), `--sand-deep #EDE6D8` (alternating bands), `--cream #FFFCF5` (card fills, text on forest), `--flag-deep #E04444` (Flag hover only), `--line #D8CFBC` (hairline on sand).

`--forest-logo #324E35` is the heart-flag mark's outline. It is a **logo-only** green and never a text or UI color.

Flag red is the discipline test. It gets the ticket CTA, or the ticker band, or one clause of a headline, or the score figure for the sponsored drink. Not all four on one screen. If a page already spends it above the fold, the closing band goes forest instead.

Text on forest uses a cream opacity ladder rather than new colors: 100% for headlines, 90% for long-form, 82% for secondary paragraphs, 60% for footer links, 35% and 28% for fine print.

### Type

Three fonts, three fixed roles, never mixed:

- **Anton** — impact headlines, all caps, `.92` leading, `.01em` tracking. Hero at `clamp(44px, 9.5vw, 148px)`, section headlines at `clamp(40px, 7vw, 92px)`, venue names at `clamp(20px, 4vw, 44px)`. Also used for stroke figures, prices and stat values. Never body, never buttons.
- **Playfair Display 600 italic** — ceremonial taglines only. "The Party Fore Good.", "Party Fore a Great Cause.", "Fore Good.", figure captions, pull quotes. One line at a time. The wordmark uses Playfair 700 upright.
- **DM Sans** — all body and all UI. 17px base, 1.6 leading, 58ch measure. Labels are 13px / 700 / uppercase with four fixed tracking steps: `.24em` kicker, `.16em` eyebrow, `.14em` label, `.10em` button.

Headlines are composed, not wrapped. Break them yourself with `<br>`.

All three are Google Fonts, loaded from the same CDN URL the live site uses, so weights are exact. There are no local font binaries and no substitutions.

### Background and texture

The page background is cream (`#FFFCF5`) carrying a **topographic contour-line texture** at a 600px tile (`assets/textures/topo.svg`, `--texture-topo`). It reads as a golf course survey map and is the only pattern in the system. Dark surfaces get no texture: forest and shadow-ink are flat.

Sections alternate: sand, forest, sand-deep, forest, shadow-ink. **At most two background colors per composition** beyond the canvas.

### Gradients

None by default. Two exceptions, both functional rather than decorative: the scrim over hero photography (`linear-gradient(to bottom, rgba(20,40,34,.45), rgba(20,40,34,.10) 35%, rgba(20,40,34,.75))`) and the bottom-anchored scrim on photo statement slides. No color-to-color gradients, no gradient fills on type or cards.

### Photography

Marketing photography runs **duotone, forest over sand**, via an SVG filter: `feColorMatrix saturate 0`, then a component transfer with `feFuncR 0.118 0.961`, `feFuncG 0.227 0.941`, `feFuncB 0.196 0.910`. Warm and dry, not cool. Grain is whatever the source photo has; none is added.

- Editorial strips: full opacity, no scrim, 3px shadow-ink gutters, uneven columns (`1.1fr 1fr 1.1fr`).
- Behind headline type: 40% to 55% opacity plus the standard scrim.
- Hover: `scale(1.04)` over `.4s ease`. Nothing else.

**Full color is reserved for the Pro Shop**, where color identifies the charity or the product. Team shirts, hats, drink renders and scorecard scans are always full color, on every surface. Do not duotone a product.

### Corners, borders, shadows

Square corners. `--radius-none: 0` is the default for cards, bands, tables, images, stamps and inputs-that-are-not-pills. `--radius-pill: 999px` is for buttons, badges and dots. There is no middle radius.

Forest rules and hard borders do the work shadows would do elsewhere:

- `1px var(--line)` hairline for table rows
- `1.5px var(--line)` for a standard card
- `2px var(--forest)` for featured cards, the scorecard, section rules, the scrolled nav's bottom edge, the FAQ list

Shadows exist in exactly three places and nowhere else: the scrolled nav (`0 2px 12px rgba(20,40,34,.08)`), the floating Flag CTA (`0 4px 24px rgba(252,86,86,.4)`), and product art in the Pro Shop (`drop-shadow(0 14px 22px rgba(20,40,34,.18))`). No inner shadows. No card elevation system. A card is a border, not a float.

### Cards

Cream fill, square corners, hairline or 2px border, no shadow. Hover changes the **border color** from Line to Forest. Featured state is border weight, not color or elevation. The Pro Shop's product bands are not cards at all: they are full-bleed 50/50 splits with a 1px top rule.

### Transparency and blur

Used once: the hero stats bar, `rgba(20,40,34,.85)` with `backdrop-filter: blur(8px)` and a 1px cream-15% top rule. That is the only blur in the system. Everywhere else, transparency is a flat cream or forest alpha with no blur (`rgba(255,252,245,.05)` for stat tiles, `.04` for row hover).

### Motion

Short and close to linear. No bounce, with one exception.

- **Reveal on scroll:** opacity 0 to 1 plus a 20px rise, `.55s ease`, `.1s` stagger steps (`rd1`, `rd2`, `rd3`).
- **Hover, buttons:** color swap plus `translateY(-1px)`, `.2s`.
- **Hover, course rows:** `translateX` up to 80px over `.42s cubic-bezier(.3,.7,.2,1)`, and the hole number flips from Bunker to Flag. This is the site's signature interaction.
- **Hover, nav links:** a 2px Flag red underline grows from 0 to 100% width over `.22s`.
- **Hover, photos:** `scale(1.04)`, `.4s ease`.
- **Ticker:** 32s linear infinite, pauses on hover.
- **The flag plant** in the intro animation uses `cubic-bezier(.34,1.7,.5,1)`, the only overshoot anywhere. Reserve it for the mark.
- **Press:** color darkens (Flag to Flag Deep, Forest to Shadow Ink). Nothing shrinks.
- `prefers-reduced-motion: reduce` disables reveals and the intro entirely.

### Layout rules

- Section padding: `clamp(72px, 12vh, 140px)` vertical, `clamp(20px, 4vw, 48px)` horizontal.
- Container widths in use: 820px prose, 860px narrow, 1080px deck, 1100px content, 1360px wide.
- The nav is fixed, transparent over the hero, and becomes sand with a 2px forest bottom rule past 80px of scroll. A floating Flag red pill CTA appears past 500px.
- Photo grids are edge to edge with 3px gutters. Never inset a photo strip.
- Content measures: 58ch body, 46ch narrow, 24ch for ceremonial lines.

### Links

Forest by default, Flag red on hover. On dark surfaces, Bunker gold by default, cream on hover. Nav links use a growing 2px Flag underline rather than a color change.

---

## ICONOGRAPHY

**There is almost no iconography, and that is the point.** The system carries meaning with typography, rules and the one brand mark. Do not add an icon set.

What actually exists in the source:

- **The heart-flag mark.** A golf green shaped like a heart with a Flag red pin, drawn in four color layers: outline `#324E35`, fairway `#718D58`, bunker `#ADA366`, flag `#FC5656`. Delivered in the source as inline SVG pasted into each page and defined once as an SVG `<symbol id="ggmark">`. Extracted here to `assets/images/logos/logo-heart-flag.svg`, plus a cream variant for forest backgrounds. **No single-colour version exists**, and none should be made: the four layers are the mark, and flattening them loses the pin, the flag and the bunker. Where one colour is the only option, set the brand name in Playfair Display 700 instead. The uploaded high-res "Fore Good." arc lockup is at `logo-heart-flag-fore-good.png`. Use the `Mark` component; never redraw or recolor it.
- **The heart-flag as a numeral.** The mark substitutes for the zero in "2026" in every hero, the footer creed and the Pro Shop headline, sized at `1em` with a `translateY(.037em)` optical correction and a screen-reader `0` beside it. This is the brand's one typographic trick and it is used constantly.
- **Charity partner logos.** Nine PNGs in `assets/images/logos/`, used exactly as supplied and never recolored: Folds of Honor, Gene Slay's, St. Louis Hero Network, Make-A-Wish, St. Jude, St. Louis Children's, STL Impact, Stray Rescue, Young Friends of Kids with Cancer.
- **Two social glyphs.** Inline 24x24 `currentColor` SVG paths for Instagram and Facebook in the footer. These are the only UI icons in the entire codebase, and they are hand-inlined, not from a library.
- **Unicode as punctuation, not decoration.** `&middot;` separates every stamp, eyebrow and fine-print segment. `&rarr;` follows "Join This Team". `&minus;` sets negative stroke figures. `+` in the FAQ rotates 45 degrees to close. A 5px round dot bullets every list. `&#10084;` (a heart) stands in for the zero in plain-text contexts.
- **No icon font. No sprite sheet. No SVG icon library. No emoji.**

If a new interface genuinely needs a glyph that does not exist here, use **Lucide** at 1.5px stroke from CDN (`https://unpkg.com/lucide@latest`), in Forest or Bunker, at 20px or smaller, and flag the addition. This is a substitution, not part of the brand: nothing in the source uses Lucide.

### Imagery inventory

`assets/images/photos/` — event photography, duotone-ready: `hero.webp` (crowd, hero), `strip1-3.webp` (crowd, venue, group), `twoup1-2.webp`, `game.webp` (mini-game), `story.jpg`.

`assets/images/product/` — full color: `drink.png` (signature drink with golf-ball pick), `shirts.png` (shirt lineup), `scorecard-front.png` and `scorecard-back.png` (the actual scorecard).

`assets/images/shirts/` — nine branded team shirts plus eight blank colorways.

`assets/images/hats/` — the four Pro Shop caps.

`assets/textures/topo.svg` — the contour-line page texture.

---

## Substitutions and gaps

- **Fonts:** no substitution. Anton, DM Sans and Playfair Display are all Google Fonts and load from the same URL the live site uses. If you want them self-hosted, send the WOFF2 files and this system will add `@font-face` rules.
- **Icons:** no icon system exists upstream, so none is bundled. Lucide is named above as a fallback only.
- **No single-colour mark was supplied.** Only the four-colour artwork exists, so `Mark` offers `full`, `cream` and `lockup` and nothing else. Send a one-colour lockup if you need one for embroidery, stamps or fax-grade print.
- **Shopify:** `thegivinggreen.store` was not supplied. No cart, product-detail or checkout screens are recreated. `Shop Now` and `Join This Team` link to the real store URLs.
- **Sponsorship deck PDF:** `TGG_2026_Sponsorship_Deck.pdf` is referenced by `sponsor.html` but is not in the repository. The slide layouts in `slides/` are derived from that page's own numbered sections.
- **One broken reference upstream:** `sponsor.html` points at `assets/images/shirts/shirt-forest-green.png`, which does not exist in the repository. Worth fixing on the site.
