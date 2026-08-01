# UI Kit: Marketing Site

Recreation of `thegivinggreen.org` (index.html in `TheGivingGreen/tgg-website`), built from the repository source rather than screenshots.

## Screens

| File | Recreates |
| --- | --- |
| `index.html` | The home page, top to bottom, click-through |
| `HeroSection.jsx` | Duotone photo hero, heart-flag zero in "2026", stamp, stats bar |
| `CourseSection.jsx` | Section 01, the nine-hole stack on forest |
| `ScoringSection.jsx` | Section 02, the scorecard plus a bordered duotone photo |
| `TeamsSection.jsx` | Section 03, countdown and the nine charity team cards |
| `ProofSection.jsx` | Section 04, Year One numbers and the full-bleed photo strip |
| `ClosingSections.jsx` | FAQ accordion and the Flag red email capture band |
| `TicketDrawer.jsx` | Fake charity-selection checkout, so the CTA leads somewhere |

## Interactions

- Nav is transparent over the hero and turns sand with a 2px forest rule past 80px of scroll.
- Any "Get on the Tee Sheet" or "Join This Team" opens the ticket drawer; picking a team updates the give line and enables checkout.
- FAQ opens one answer at a time. Email capture confirms in place.

## Not recreated

The animated intro splash (`#putt`, a five second save-the-date sequence) and the mobile hamburger sheet exist in the source but are omitted here so the kit reads as a page rather than a demo. The floating Flag red CTA pill is also omitted; the fixed nav CTA covers it.
