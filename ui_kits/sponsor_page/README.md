# UI Kit: Sponsor Us

Recreation of `sponsor.html` in `TheGivingGreen/tgg-website`. A gated partner page that presents the 2026 sponsorship deck as one scrolling document.

## Screens

| File | Recreates |
| --- | --- |
| `index.html` | The page, gate first |
| `Gate.jsx` | Partners-only passcode gate. Any non-empty entry unlocks in this kit. |
| `Deck.jsx` | Sections 01 through 08: concept, proof, course, scoring, brand in play, tiers, scorecard inventory, why |
| `sponsorData.js` | Real tier pricing, benefits and Year One numbers from the source |

## Notes

The whole page sits on shadow-ink, and sections alternate forest, ink, sand and sand-deep. Section numbering (01 through 08) is part of the layout language, not decoration. Photography is duotone throughout; the scorecard scans and product renders stay full colour because they are documents, not photography.

The live page's real passcode is a SHA-256 hash check in the source; this kit does not reproduce it.
