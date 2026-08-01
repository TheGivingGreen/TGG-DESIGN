repo: TheGivingGreen/tgg-website
branch: main

## Last sync

date: 2026-08-01T18:06:29Z

### Updated in this project

- Built the full token layer from the site's `:root` block: colors, type roles, spacing, edges, motion, semantic aliases.
- Factored the site CSS into 24 React components across core, brand, scorecard, cards, navigation and disclosure.
- Recreated three surfaces as UI kits: the marketing home page, the Pro Shop, and the gated sponsor page.
- Extracted the heart-flag mark to reusable SVG and copied in charity logos, shirts, hats, photography and the topo texture.

## Screen map

| Screen | Built from |
| --- | --- |
| `ui_kits/marketing_site/index.html` | `index.html` |
| `ui_kits/pro_shop/index.html` | `pro-shop.html` |
| `ui_kits/sponsor_page/index.html` | `sponsor.html` |
| `slides/*.html` | `sponsor.html` (numbered deck sections) |
| `tokens/*.css` | `index.html` `:root` block, `pro-shop.html`, `sponsor.html` |
| `components/**` | `index.html`, `pro-shop.html`, `sponsor.html` CSS classes |
| `guidelines/*.html` | `index.html`, `llms.txt`, `project-brief.md` |
| `assets/**` | `assets/images/**`, `topo.svg`, root photography, uploaded logo artwork |
