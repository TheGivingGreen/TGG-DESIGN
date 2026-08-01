/* @ds-bundle: {"format":4,"namespace":"TheGivingGreenDesignSystem_038bf7","components":[{"name":"AccentBand","sourcePath":"components/brand/AccentBand.jsx"},{"name":"DuotoneImage","sourcePath":"components/brand/DuotoneImage.jsx"},{"name":"DuotoneDefs","sourcePath":"components/brand/DuotoneImage.jsx"},{"name":"Mark","sourcePath":"components/brand/Mark.jsx"},{"name":"PhotoStrip","sourcePath":"components/brand/PhotoStrip.jsx"},{"name":"Stamp","sourcePath":"components/brand/Stamp.jsx"},{"name":"StampDot","sourcePath":"components/brand/Stamp.jsx"},{"name":"Ticker","sourcePath":"components/brand/Ticker.jsx"},{"name":"ProductBand","sourcePath":"components/cards/ProductBand.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"StatGrid","sourcePath":"components/cards/StatCard.jsx"},{"name":"TeamCard","sourcePath":"components/cards/TeamCard.jsx"},{"name":"TicketCard","sourcePath":"components/cards/TicketCard.jsx"},{"name":"TierCard","sourcePath":"components/cards/TierCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Ceremonial","sourcePath":"components/core/Ceremonial.jsx"},{"name":"EmailForm","sourcePath":"components/core/EmailForm.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHead","sourcePath":"components/core/SectionHead.jsx"},{"name":"FaqList","sourcePath":"components/disclosure/FaqList.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"Countdown","sourcePath":"components/scorecard/Countdown.jsx"},{"name":"CourseStack","sourcePath":"components/scorecard/CourseStack.jsx"},{"name":"Scorecard","sourcePath":"components/scorecard/Scorecard.jsx"}],"sourceHashes":{"components/brand/AccentBand.jsx":"469112d6600d","components/brand/DuotoneImage.jsx":"c2c524e72fb7","components/brand/Mark.jsx":"49d6b307ae32","components/brand/PhotoStrip.jsx":"ddf9ccb13937","components/brand/Stamp.jsx":"eab10b8aa2de","components/brand/Ticker.jsx":"4ac72488c9cb","components/cards/ProductBand.jsx":"c7dcef0ea75a","components/cards/StatCard.jsx":"ebc7de179d28","components/cards/TeamCard.jsx":"140589049f9e","components/cards/TicketCard.jsx":"d42fbda06c6e","components/cards/TierCard.jsx":"cac5fe77d7d9","components/core/Badge.jsx":"7429076e06e1","components/core/Button.jsx":"4207b43ebda9","components/core/Ceremonial.jsx":"a60c77f80858","components/core/EmailForm.jsx":"f25c5467d88d","components/core/Eyebrow.jsx":"cbcb07f6bc39","components/core/Input.jsx":"a5ccdfa79a0b","components/core/SectionHead.jsx":"53a7eebf2a19","components/disclosure/FaqList.jsx":"87c11f049c9b","components/navigation/NavBar.jsx":"6ef14f74323e","components/navigation/SiteFooter.jsx":"8da720a3cb21","components/scorecard/Countdown.jsx":"7b62b36ca307","components/scorecard/CourseStack.jsx":"c2b78ad830a1","components/scorecard/Scorecard.jsx":"2818c6ad0682","slides/Slides.jsx":"5dbf92868c9f","ui_kits/marketing_site/ClosingSections.jsx":"8adb04dde18c","ui_kits/marketing_site/CourseSection.jsx":"24064179b81a","ui_kits/marketing_site/HeroSection.jsx":"058a5610962a","ui_kits/marketing_site/Home.jsx":"83ac10b59760","ui_kits/marketing_site/ProofSection.jsx":"7465cfad1749","ui_kits/marketing_site/ScoringSection.jsx":"336f35daf2f9","ui_kits/marketing_site/TeamsSection.jsx":"aca4c25ff8b9","ui_kits/marketing_site/TicketDrawer.jsx":"a86195c8b0d2","ui_kits/marketing_site/data.js":"9b392ea529c7","ui_kits/pro_shop/ProShop.jsx":"35da452b5f88","ui_kits/pro_shop/hats.js":"bf4414480a16","ui_kits/sponsor_page/App.jsx":"bd51c1cea9c0","ui_kits/sponsor_page/Deck.jsx":"6ee1c6ae6904","ui_kits/sponsor_page/Gate.jsx":"eab237b750ba","ui_kits/sponsor_page/sponsorData.js":"61be244cd9a2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheGivingGreenDesignSystem_038bf7 = window.TheGivingGreenDesignSystem_038bf7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/AccentBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-width Flag red statement band. Anton, centered. One per page, maximum. */
function AccentBand({
  children,
  tone = 'flag',
  align = 'center',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tone === 'flag' ? 'var(--flag)' : 'var(--forest)',
      color: 'var(--cream)',
      textAlign: align,
      padding: '30px 20px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: 'clamp(18px,3vw,26px)',
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      lineHeight: 1.2
    }
  }, children));
}
Object.assign(__ds_scope, { AccentBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/AccentBand.jsx", error: String((e && e.message) || e) }); }

// components/brand/DuotoneImage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * All marketing photography runs through this: desaturated, then mapped
 * forest-to-sand. Renders the filter defs once per page automatically.
 */
function DuotoneImage({
  src,
  alt = '',
  ratio,
  scrim = false,
  opacity = 1,
  style,
  imgStyle,
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      overflow: 'hidden',
      aspectRatio: ratio,
      background: 'var(--shadow-ink)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(DuotoneDefs, null), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'url(#tgg-duotone)',
      opacity,
      ...imgStyle
    }
  }), scrim ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom,rgba(20,40,34,.45) 0%,rgba(20,40,34,.10) 35%,rgba(20,40,34,.75) 100%)'
    }
  }) : null, children);
}

/** The SVG filter itself. DuotoneImage mounts it for you; mount it directly for CSS-background photos. */
function DuotoneDefs() {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: 0,
      height: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("filter", {
    id: "tgg-duotone",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "saturate",
    values: "0"
  }), /*#__PURE__*/React.createElement("feComponentTransfer", null, /*#__PURE__*/React.createElement("feFuncR", {
    type: "table",
    tableValues: "0.118 0.961"
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "table",
    tableValues: "0.227 0.941"
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "table",
    tableValues: "0.196 0.910"
  })))));
}
Object.assign(__ds_scope, { DuotoneImage, DuotoneDefs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/DuotoneImage.jsx", error: String((e && e.message) || e) }); }

// components/brand/Mark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MARK_SRC = {
  full: 'assets/images/logos/logo-heart-flag.svg',
  cream: 'assets/images/logos/logo-heart-flag-cream.svg',
  mono: 'assets/images/logos/logo-heart-flag-mono-forest.svg',
  lockup: 'assets/images/logos/logo-heart-flag-fore-good.png'
};

/** The heart-flag mark. Four supplied files, never redrawn. */
function Mark({
  variant = 'full',
  size = 46,
  base = '',
  withWordmark = false,
  onDark = false,
  style,
  ...rest
}) {
  const img = /*#__PURE__*/React.createElement("img", {
    src: (base ? base.replace(/\/$/, '') + '/' : '') + MARK_SRC[variant],
    alt: "The Giving Green",
    style: {
      width: size + 'px',
      height: 'auto',
      display: 'block',
      flex: 'none'
    }
  });
  if (!withWordmark) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), img);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }, rest), img, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ceremonial)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.5) + 'px',
      color: onDark ? 'var(--cream)' : 'var(--forest)'
    }
  }, "The Giving Green"));
}
Object.assign(__ds_scope, { Mark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Mark.jsx", error: String((e && e.message) || e) }); }

// components/brand/PhotoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Edge-to-edge duotone photo grid, 3px shadow-ink gutters. Photos scale 1.04 on hover. */
function PhotoStrip({
  photos = [],
  columns = '1.1fr 1fr 1.1fr',
  height = 'clamp(400px,55vw,700px)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: 'var(--shadow-ink)',
      display: 'grid',
      gridTemplateColumns: columns,
      gap: '3px',
      height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.DuotoneDefs, null), photos.map((p, i) => /*#__PURE__*/React.createElement(StripFigure, _extends({
    key: i
  }, p))));
}
function StripFigure({
  src,
  alt
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      position: 'relative',
      overflow: 'hidden',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'url(#tgg-duotone)',
      transition: 'transform .4s ease',
      transform: hover ? 'scale(1.04)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { PhotoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PhotoStrip.jsx", error: String((e && e.message) || e) }); }

// components/brand/Stamp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Hard-bordered uppercase box. Dates, locations, credentials. No radius, no fill. */
function Stamp({
  children,
  onDark = false,
  size = 'md',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '4px',
      border: '1.5px solid ' + (onDark ? 'rgba(255,252,245,.3)' : 'var(--forest)'),
      color: onDark ? 'var(--cream)' : 'var(--forest)',
      padding: size === 'sm' ? '9px 18px' : '11px 22px',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: size === 'sm' ? 'var(--fs-fine)' : 'clamp(13px,1.6vw,16px)',
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), children);
}

/** The gold interpunct that separates stamp segments. */
function StampDot() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bunker)',
      margin: '0 10px'
    }
  }, "\xB7");
}
Object.assign(__ds_scope, { Stamp, StampDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Stamp.jsx", error: String((e && e.message) || e) }); }

// components/brand/Ticker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flag red marquee. Anton, uppercase, gold dots between phrases. Pauses on hover. */
function Ticker({
  items = [],
  speed = 32,
  style,
  ...rest
}) {
  const run = items.flatMap((t, i) => [/*#__PURE__*/React.createElement("span", {
    key: 't' + i
  }, t), /*#__PURE__*/React.createElement("span", {
    key: 'd' + i,
    style: {
      width: '5px',
      height: '5px',
      background: 'rgba(255,252,245,.5)',
      borderRadius: '50%',
      flex: 'none'
    }
  })]);
  const track = /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '28px',
      padding: '0 28px',
      fontFamily: 'var(--font-impact)',
      fontSize: '14px',
      textTransform: 'uppercase',
      color: 'var(--cream)',
      letterSpacing: '.08em',
      whiteSpace: 'nowrap'
    }
  }, run);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--flag)',
      overflow: 'hidden',
      padding: '11px 0',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, '@keyframes tgg-ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      animation: 'tgg-ticker ' + speed + 's linear infinite'
    }
  }, track, track));
}
Object.assign(__ds_scope, { Ticker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Ticker.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Proof-point tile. Anton figure in Bunker gold on a barely-there cream wash. */
function StatCard({
  value,
  label,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'rgba(255,252,245,.05)',
      padding: '24px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("b", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-impact)',
      fontSize: '2rem',
      fontWeight: 400,
      color: 'var(--bunker)',
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.85rem',
      lineHeight: 1.4,
      display: 'block',
      marginTop: '8px',
      color: 'var(--cream)'
    }
  }, label));
}

/** Auto-fit grid of StatCards. 200px minimum column. */
function StatGrid({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
      gap: '14px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StatCard, StatGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TierCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sponsorship tier card: coloured accent rail, gold label, Anton price, availability, benefits. */
function TierCard({
  accent = 'flag',
  label,
  price,
  availability,
  benefits = [],
  style,
  ...rest
}) {
  const accentColor = {
    flag: 'var(--flag)',
    bunker: 'var(--bunker)',
    fairway: 'var(--fairway)'
  }[accent];
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      background: 'var(--forest)',
      padding: '0 0 28px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      background: accentColor
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 26px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-fine)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--bunker)',
      margin: 0
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '2.3rem',
      color: 'var(--cream)',
      marginTop: '8px',
      lineHeight: 1
    }
  }, price), availability ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      color: accentColor,
      marginTop: '4px',
      textTransform: 'uppercase'
    }
  }, availability) : null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: '20px',
      padding: 0
    }
  }, benefits.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: '.9rem',
      lineHeight: 1.5,
      color: 'var(--sand)',
      padding: '7px 0 7px 18px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      color: 'var(--bunker)',
      fontWeight: 700
    }
  }, "\xB7"), b)))));
}
Object.assign(__ds_scope, { TierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TierCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_TONES = {
  flag: {
    background: 'var(--flag)',
    color: 'var(--cream)'
  },
  forest: {
    background: 'var(--forest)',
    color: 'var(--cream)'
  },
  sand: {
    background: 'var(--sand-deep)',
    color: 'var(--bunker)'
  },
  bunker: {
    background: 'var(--bunker)',
    color: 'var(--forest)'
  }
};

/** Small uppercase label chip. Square by default, pill when it sits in running text. */
function Badge({
  tone = 'flag',
  shape = 'square',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-body)',
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: shape === 'pill' ? '5px 12px' : '4px 10px',
      borderRadius: shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-none)',
      ...BADGE_TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '10px 18px',
    fontSize: '12px'
  },
  md: {
    padding: '12px 26px',
    fontSize: '13px'
  },
  lg: {
    padding: '15px 34px',
    fontSize: '14px'
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--flag)',
    color: 'var(--cream)',
    borderColor: 'var(--flag)'
  },
  forest: {
    background: 'var(--forest)',
    color: 'var(--cream)',
    borderColor: 'var(--forest)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--forest)',
    borderColor: 'var(--forest)'
  },
  ghostOnDark: {
    background: 'transparent',
    color: 'var(--cream)',
    borderColor: 'var(--cream)'
  }
};
const HOVERS = {
  primary: {
    background: 'var(--flag-deep)',
    borderColor: 'var(--flag-deep)'
  },
  forest: {
    background: 'var(--fairway)',
    borderColor: 'var(--fairway)'
  },
  ghost: {
    background: 'var(--forest)',
    color: 'var(--cream)'
  },
  ghostOnDark: {
    background: 'var(--cream)',
    color: 'var(--forest)'
  }
};

/** The one round thing in the system. Pill radius, uppercase, 700, .1em tracking. */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  as,
  children,
  style,
  onClick,
  disabled,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as || (href ? 'a' : 'button');
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    justifyContent: 'center',
    borderRadius: 'var(--radius-pill)',
    border: '2px solid transparent',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: 'var(--ls-button)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    transition: 'background var(--dur-fast), color var(--dur-fast), transform .15s, border-color var(--dur-fast)',
    opacity: disabled ? 0.4 : 1,
    ...SIZES[size],
    ...VARIANTS[variant],
    ...(hover && !disabled ? {
      ...HOVERS[variant],
      transform: 'translateY(var(--hover-lift))'
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/TeamCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Charity team card: full-colour shirt, charity logo, mission line, two actions. */
function TeamCard({
  shirt,
  shirtAlt,
  logo,
  charity,
  mission,
  learnHref,
  joinHref,
  joinLabel = 'Join This Team',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: '1.5px solid ' + (hover ? 'var(--forest)' : 'var(--line)'),
      background: 'var(--cream)',
      display: 'flex',
      gap: '16px',
      padding: '18px 16px',
      transition: 'border-color var(--dur-fast)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '50%',
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: shirt,
    alt: shirtAlt || charity + ' team shirt',
    style: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '104px',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: charity,
    style: {
      maxHeight: '104px',
      maxWidth: 'min(240px,100%)',
      objectFit: 'contain',
      objectPosition: 'left center'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(17px,1.5vw,20px)',
      lineHeight: 1.15,
      letterSpacing: '.01em',
      color: 'var(--forest)'
    }
  }, charity), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      flex: 1,
      margin: 0
    }
  }, mission), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      marginTop: '12px',
      flexWrap: 'wrap',
      rowGap: '10px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: learnHref,
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: '10.5px',
      fontWeight: 700,
      letterSpacing: '.13em',
      textTransform: 'uppercase',
      color: 'var(--bunker)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, "Learn More"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "forest",
    size: "sm",
    href: joinHref,
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: '11.5px',
      padding: '12px 20px'
    }
  }, joinLabel, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      lineHeight: 1
    }
  }, "\u2192")))));
}
Object.assign(__ds_scope, { TeamCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TeamCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TicketCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Ticket tier card: badge, Anton name, Flag red price, bulleted includes, CTA at the bottom. */
function TicketCard({
  badge,
  badgeTone = 'sand',
  name,
  price,
  priceNote,
  includes = [],
  cta,
  ctaHref,
  ctaVariant = 'ghost',
  featured = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      border: featured ? '2px solid var(--forest)' : '1.5px solid var(--line)',
      padding: '28px 22px',
      background: 'var(--cream)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      ...style
    }
  }, rest), badge ? /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badgeTone,
    style: {
      alignSelf: 'flex-start'
    }
  }, badge) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(20px,2.5vw,28px)',
      lineHeight: 1.05,
      color: 'var(--forest)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: 'clamp(28px,3.5vw,44px)',
      color: 'var(--flag)',
      lineHeight: 1
    }
  }, price, priceNote ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      color: 'var(--bunker)',
      fontWeight: 400
    }
  }, " ", priceNote) : null), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      margin: '4px 0 0',
      padding: 0
    }
  }, includes.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-body)',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '5px',
      height: '5px',
      background: 'var(--bunker)',
      borderRadius: '50%',
      flex: 'none',
      marginTop: '7px'
    }
  }), it))), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: ctaVariant,
    href: ctaHref,
    style: {
      marginTop: 'auto',
      width: '100%'
    }
  }, cta) : null);
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TicketCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Ceremonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CEREMONIAL_TONES = {
  fairway: 'var(--fairway)',
  bunker: 'var(--bunker)',
  forest: 'var(--forest)',
  cream: 'var(--sand)'
};

/** Playfair Display 600 italic. Ceremonial taglines only, never body copy. */
function Ceremonial({
  tone = 'bunker',
  size = 'md',
  as = 'span',
  children,
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'block',
      fontFamily: 'var(--font-ceremonial)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: size === 'lg' ? 'var(--fs-ceremonial-lg)' : size === 'sm' ? 'var(--fs-ceremonial-sm)' : 'var(--fs-ceremonial)',
      lineHeight: 1.4,
      color: CEREMONIAL_TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Ceremonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ceremonial.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductBand.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Full-bleed 50/50 product band. Pro Shop layout: full-colour product art, copy beside it. */
function ProductBand({
  image,
  imageAlt,
  name,
  blurb,
  spec,
  price,
  sku,
  cta = 'Shop Now',
  ctaHref,
  onDark = false,
  reverse = false,
  style,
  ...rest
}) {
  const label = {
    fontSize: 'var(--fs-label)',
    fontWeight: 700,
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    color: onDark ? 'var(--bunker)' : 'var(--fairway)'
  };
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'stretch',
      background: onDark ? 'var(--forest)' : 'var(--sand)',
      borderTop: '1px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(16px,2.5vw,32px)',
      background: onDark ? '#16302A' : 'var(--sand-deep)',
      order: reverse ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt || name,
    style: {
      width: '92%',
      maxWidth: '560px',
      height: 'auto',
      display: 'block',
      filter: 'drop-shadow(0 14px 22px rgba(20,40,34,.18))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--band-pad)',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      justifyContent: 'center',
      order: reverse ? 1 : 2
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(32px,4.4vw,56px)',
      lineHeight: .92,
      margin: 0,
      color: onDark ? 'var(--cream)' : 'var(--forest)'
    }
  }, name), blurb ? /*#__PURE__*/React.createElement(__ds_scope.Ceremonial, {
    as: "p",
    tone: onDark ? 'cream' : 'forest',
    style: {
      fontSize: 'clamp(16px,1.7vw,19px)',
      lineHeight: 1.55,
      maxWidth: '42ch'
    }
  }, blurb) : null, spec ? /*#__PURE__*/React.createElement("span", {
    style: label
  }, spec) : null, price ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: onDark ? 'var(--cream)' : 'var(--forest)'
    }
  }, price) : null, sku ? /*#__PURE__*/React.createElement("span", {
    style: label
  }, sku) : null, ctaHref ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: onDark ? 'ghostOnDark' : 'ghost',
    href: ctaHref,
    target: "_blank",
    rel: "noopener",
    style: {
      alignSelf: 'flex-start',
      marginTop: '6px'
    }
  }, cta) : null));
}
Object.assign(__ds_scope, { ProductBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductBand.jsx", error: String((e && e.message) || e) }); }

// components/core/EmailForm.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The capture field: input and submit fused inside one pill, on a Flag red band. */
function EmailForm({
  placeholder = 'your@email.com',
  cta = 'Notify Me',
  onSubmit,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: onSubmit,
    style: {
      display: 'flex',
      gap: 0,
      maxWidth: '440px',
      margin: '0 auto',
      border: '2px solid rgba(255,252,245,.4)',
      background: 'rgba(255,252,245,.1)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      padding: '4px 4px 4px 18px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "email",
    required: true,
    placeholder: placeholder,
    style: {
      flex: 1,
      background: 'transparent',
      border: 'none',
      outline: 'none',
      color: 'var(--cream)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 500,
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: 'var(--cream)',
      color: 'var(--flag)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 18px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-fine)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-button)',
      textTransform: 'uppercase',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, cta));
}
Object.assign(__ds_scope, { EmailForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EmailForm.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered section eyebrow: "01 · The Course · Soulard". Bunker gold on both surfaces. */
function Eyebrow({
  children,
  rule = false,
  tone = 'bunker',
  style,
  ...rest
}) {
  const color = tone === 'bunker' ? 'var(--bunker)' : tone === 'fairway' ? 'var(--fairway)' : 'var(--cream-60)';
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      margin: 0,
      ...style
    }
  }, rest), rule ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      width: '28px',
      height: '2px',
      background: 'currentColor',
      flex: 'none'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Pill text field. Two skins: on sand (forest hairline) and on forest (fairway hairline). */
function Input({
  onDark = false,
  align = 'left',
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: onDark ? 'var(--forest)' : 'var(--cream)',
      border: '1px solid ' + (focus ? 'var(--bunker)' : onDark ? 'var(--fairway)' : 'var(--line)'),
      color: onDark ? 'var(--cream)' : 'var(--forest)',
      borderRadius: 'var(--radius-pill)',
      padding: '14px 22px',
      textAlign: align,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body-sm)',
      letterSpacing: '.06em',
      outline: 'none',
      width: '100%',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHead.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Eyebrow + Anton headline + optional Playfair subline. The standard section opener. */
function SectionHead({
  eyebrow,
  title,
  subline,
  align = 'left',
  onDark = false,
  size = 'display',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      marginBottom: 'var(--space-9)',
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: onDark ? 'bunker' : 'bunker',
    style: {
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginBottom: '10px'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: size === 'display' ? 'var(--fs-display)' : 'var(--fs-h2)',
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--type-impact-tracking)',
      color: onDark ? 'var(--cream)' : 'var(--forest)',
      margin: '0 0 8px'
    }
  }, title), subline ? /*#__PURE__*/React.createElement(__ds_scope.Ceremonial, {
    tone: onDark ? 'bunker' : 'fairway',
    style: {
      marginTop: '12px'
    }
  }, subline) : null);
}
Object.assign(__ds_scope, { SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHead.jsx", error: String((e && e.message) || e) }); }

// components/disclosure/FaqList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '2px solid var(--forest)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-expanded": open,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 4px',
      textAlign: 'left',
      gap: '16px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(15px,1.8vw,18px)',
      fontWeight: 700,
      color: 'var(--forest)',
      lineHeight: 1.4
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '22px',
      color: 'var(--flag)',
      flex: 'none',
      lineHeight: 1,
      transform: open ? 'rotate(45deg)' : 'none',
      transition: 'transform var(--dur-base)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: open ? '400px' : 0,
      overflow: 'hidden',
      transition: 'max-height .35s ease, padding var(--dur-base)',
      paddingBottom: open ? '20px' : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      padding: '0 4px',
      maxWidth: '66ch',
      margin: 0
    }
  }, a)));
}

/** Accordion with 2px forest rules. The + rotates 45 degrees, it does not swap glyphs. */
function FaqList({
  items = [],
  allowMultiple = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = i => setOpen(cur => cur.includes(i) ? cur.filter(x => x !== i) : allowMultiple ? [...cur, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '2px solid var(--forest)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(FaqItem, _extends({
    key: i
  }, it, {
    open: open.includes(i),
    onToggle: () => toggle(i)
  }))));
}
Object.assign(__ds_scope, { FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/disclosure/FaqList.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fixed site nav. Transparent over the hero, sand with a 2px forest rule once scrolled. */
function NavBar({
  links = [],
  cta = 'Get Tickets',
  ctaHref,
  scrolled = false,
  base = '',
  activeHref,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 150,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px clamp(20px,4vw,48px)',
      background: scrolled ? 'var(--sand)' : 'transparent',
      borderBottom: scrolled ? '2px solid var(--forest)' : '2px solid transparent',
      boxShadow: scrolled ? 'var(--shadow-nav)' : 'none',
      transition: 'background var(--dur-base), border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    variant: scrolled ? 'full' : 'cream',
    size: 44,
    base: base,
    withWordmark: true,
    onDark: !scrolled
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'center'
    }
  }, links.map(l => /*#__PURE__*/React.createElement(NavLink, _extends({
    key: l.href
  }, l, {
    scrolled: scrolled,
    active: l.href === activeHref
  }))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: scrolled ? 'ghost' : 'ghostOnDark',
    href: ctaHref,
    target: "_blank",
    rel: "noopener"
  }, cta)));
}
function NavLink({
  label,
  href,
  soon,
  scrolled,
  active
}) {
  const [hover, setHover] = React.useState(false);
  const color = scrolled ? 'var(--forest)' : 'var(--cream)';
  if (soon) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color,
        opacity: .62,
        cursor: 'default',
        fontSize: 'var(--fs-label)',
        fontWeight: 700,
        letterSpacing: '.12em',
        textTransform: 'uppercase'
      }
    }, label, /*#__PURE__*/React.createElement("em", {
      style: {
        fontStyle: 'normal',
        fontSize: '8px',
        fontWeight: 700,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        background: 'var(--bunker)',
        color: 'var(--forest)',
        padding: '2px 6px',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1
      }
    }, "Soon"));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color,
      textDecoration: 'none',
      fontSize: 'var(--fs-label)',
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      position: 'relative',
      paddingBottom: '3px',
      display: 'inline-block'
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: '2px',
      background: 'var(--flag)',
      width: hover || active ? '100%' : 0,
      transition: 'width var(--dur-fast)'
    }
  }));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shadow-ink footer: Anton creed, ceremonial line, three columns, fine print. */
function SiteFooter({
  creed = 'The Giving Green',
  ceremonial = 'Party Fore a Great Cause.',
  columns = [],
  fineLeft,
  tagline = 'Fore Good.',
  base = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--shadow-ink)',
      color: 'var(--cream)',
      padding: 'clamp(44px,7vh,72px) clamp(20px,4vw,48px) 32px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: '52px',
      paddingBottom: '48px',
      borderBottom: '1px solid var(--line-on-dark-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(44px,9vw,110px)',
      lineHeight: .88,
      color: 'var(--cream)'
    }
  }, creed), /*#__PURE__*/React.createElement(__ds_scope.Ceremonial, {
    tone: "bunker",
    style: {
      fontSize: 'clamp(18px,2.5vw,28px)',
      marginTop: '10px'
    }
  }, ceremonial)), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-content)',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      maxWidth: '260px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Mark, {
    variant: "cream",
    size: 38,
    base: base
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ceremonial)',
      fontSize: '18px',
      fontWeight: 700
    }
  }, "The Giving Green"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--cream-35)',
      lineHeight: 1.6
    }
  }, "The Second Annual Charity Pub Golf Crawl. October 3, 2026. Soulard, St. Louis.")), columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, col.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      color: 'var(--cream-60)',
      textDecoration: 'none',
      fontSize: 'var(--fs-caption)',
      fontWeight: 600,
      letterSpacing: '.06em'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-content)',
      margin: '40px auto 0',
      borderTop: '1px solid var(--line-on-dark-soft)',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px',
      fontSize: 'var(--fs-fine)',
      color: 'var(--cream-28)',
      letterSpacing: '.05em'
    }
  }, /*#__PURE__*/React.createElement("span", null, fineLeft || '\u00A9 2026 The Giving Green \u00B7 St. Louis, MO'), /*#__PURE__*/React.createElement(__ds_scope.Ceremonial, {
    tone: "bunker",
    size: "sm",
    style: {
      fontSize: 'var(--fs-caption)'
    }
  }, tagline)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/scorecard/Countdown.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function pad(n) {
  return String(n).padStart(2, '0');
}

/** Bordered countdown to tee time. Anton numerals, tabular, gold labels. */
function Countdown({
  target,
  label = 'The Main Event Starts In',
  liveMessage = 'The Main Event is live. See you in Soulard.',
  style,
  ...rest
}) {
  const [now, setNow] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = new Date(target).getTime() - now;
  const live = diff <= 0;
  const s = Math.max(0, Math.floor(diff / 1000));
  const units = [[Math.floor(s / 86400), 'Days'], [Math.floor(s % 86400 / 3600), 'Hours'], [Math.floor(s % 3600 / 60), 'Minutes'], [s % 60, 'Seconds']];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "timer",
    style: {
      border: '2px solid var(--forest)',
      background: 'var(--sand)',
      padding: '22px clamp(16px,3vw,32px)',
      textAlign: 'center',
      maxWidth: '720px',
      margin: '0 auto',
      ...style
    }
  }, rest), live ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ceremonial)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 'var(--fs-ceremonial)',
      color: 'var(--forest)',
      margin: 0
    }
  }, liveMessage) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-fine)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--fairway)',
      margin: '0 0 12px'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(14px,4vw,40px)'
    }
  }, units.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minWidth: '52px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: 'clamp(32px,6vw,56px)',
      lineHeight: 1,
      color: 'var(--forest)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, pad(n)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label-sm)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--bunker)',
      marginTop: '6px'
    }
  }, l))))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scorecard/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/scorecard/CourseStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function HoleRow({
  hole,
  venue,
  par,
  href,
  onDark
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      textDecoration: 'none',
      color: onDark ? 'var(--cream)' : 'var(--forest)',
      borderBottom: '2px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'),
      padding: '16px 6px',
      transition: 'transform var(--dur-stack) var(--ease-standard), background var(--dur-base)',
      transform: hover ? 'translateX(var(--stack-slide))' : 'none',
      background: hover ? onDark ? 'rgba(255,252,245,.04)' : 'rgba(30,58,50,.03)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-label)',
      fontWeight: 700,
      width: '32px',
      flex: 'none',
      color: hover ? 'var(--flag)' : 'var(--bunker)',
      transition: 'color var(--dur-fast)'
    }
  }, hole), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-venue)',
      lineHeight: 1.04,
      letterSpacing: '.01em'
    }
  }, venue), par ? /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-fine)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--bunker)',
      flex: 'none'
    }
  }, par) : null);
}

/** The nine holes as a rule-separated stack. Rows slide right on hover, hole number turns Flag red. */
function CourseStack({
  holes = [],
  onDark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '2px solid ' + (onDark ? 'var(--line-on-dark)' : 'var(--line)'),
      ...style
    }
  }, rest), holes.map((h, i) => /*#__PURE__*/React.createElement(HoleRow, _extends({
    key: i,
    onDark: onDark
  }, h))));
}
Object.assign(__ds_scope, { CourseStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scorecard/CourseStack.jsx", error: String((e && e.message) || e) }); }

// components/scorecard/Scorecard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SCORE_COLOR = {
  good: 'var(--fairway)',
  best: 'var(--flag)',
  penalty: 'var(--bunker)',
  neutral: 'var(--forest)'
};

/**
 * The signature component. A cream card with a 2px forest border, a forest
 * header rail, hairline rows and Anton stroke figures on the right.
 */
function Scorecard({
  rows = [],
  header = ['Activity', 'Strokes'],
  footer,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--cream)',
      border: '2px solid var(--forest)',
      width: '100%',
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--forest)',
      color: 'var(--cream)',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '13px 20px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-fine)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", null, header[0]), /*#__PURE__*/React.createElement("span", null, header[1])) : null, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
      padding: '14px 20px',
      fontSize: '16px',
      color: 'var(--text-body)',
      borderBottom: i === rows.length - 1 && !footer ? 'none' : '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", null, r.label, r.note ? /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--fairway)'
    }
  }, " (", r.note, ")") : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '26px',
      minWidth: '60px',
      textAlign: 'right',
      color: SCORE_COLOR[r.tone || 'neutral'],
      lineHeight: 1
    }
  }, r.strokes))), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 20px',
      background: 'var(--forest)',
      color: 'var(--cream)',
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", null, footer.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '26px',
      color: 'var(--flag)',
      lineHeight: 1
    }
  }, footer.strokes)) : null);
}
Object.assign(__ds_scope, { Scorecard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/scorecard/Scorecard.jsx", error: String((e && e.message) || e) }); }

// slides/Slides.jsx
try { (() => {
const {
  Mark,
  Eyebrow,
  Ceremonial,
  Stamp,
  StampDot,
  Scorecard,
  CourseStack,
  StatCard,
  StatGrid,
  TierCard,
  Button,
  DuotoneDefs,
  AccentBand
} = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '..';

/* Every slide is 1280x720. Sections are numbered, exactly as the sponsor deck numbers them. */
function Slide({
  tone = 'forest',
  children,
  pad = 72,
  style
}) {
  const bg = {
    forest: 'var(--forest)',
    ink: 'var(--shadow-ink)',
    sand: 'var(--sand)',
    sandDeep: 'var(--sand-deep)',
    flag: 'var(--flag)'
  }[tone];
  const dark = tone === 'forest' || tone === 'ink' || tone === 'flag';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '1280px',
      height: '720px',
      background: bg,
      color: dark ? 'var(--cream)' : 'var(--forest)',
      padding: pad + 'px',
      boxSizing: 'border-box',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement(DuotoneDefs, null), children);
}
function SlideTitle({
  children,
  size = 84,
  color
}) {
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: size + 'px',
      lineHeight: .92,
      letterSpacing: '.01em',
      margin: 0,
      color
    }
  }, children);
}
function SlideFoot({
  onDark = true,
  left,
  right = 'Fore Good.'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: '28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid ' + (onDark ? 'var(--line-on-dark-soft)' : 'var(--line)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--bunker)'
    }
  }, left), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    size: "sm"
  }, right));
}

/* ---------- 1. Title ---------- */
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "ink",
    pad: 0,
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + '/assets/images/photos/hero.webp',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'url(#tgg-duotone)',
      opacity: .42
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(20,40,34,.55),rgba(20,40,34,.78))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '0 80px'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: "cream",
    size: 72,
    base: BASE,
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '26px'
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: 'center',
      letterSpacing: 'var(--ls-kicker)'
    }
  }, "\xB7\xB7 Sponsorship \xB7 2026 \xB7\xB7"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 104,
    color: "var(--cream)"
  }, "Sponsor the 2026", /*#__PURE__*/React.createElement("br", null), "Main Event."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    size: "lg",
    style: {
      marginTop: '18px'
    }
  }, "The Party Fore Good."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    onDark: true
  }, /*#__PURE__*/React.createElement("span", null, "Saturday, October 3, 2026"), /*#__PURE__*/React.createElement(StampDot, null), /*#__PURE__*/React.createElement("span", null, "1 to 6 PM"), /*#__PURE__*/React.createElement(StampDot, null), /*#__PURE__*/React.createElement("span", null, "Soulard")))));
}

/* ---------- 2. Statement ---------- */
function StatementSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "forest"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "01 \xB7 The Concept \xB7 Soulard"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SlideTitle, {
    size: 120,
    color: "var(--cream)"
  }, "9 Holes.", /*#__PURE__*/React.createElement("br", null), "9 Drinks.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--flag)'
    }
  }, "9 Charities.")), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    size: "lg",
    style: {
      marginTop: '22px'
    }
  }, "We turn 9 of our favorite local bars into 9 holes of pub golf.")), /*#__PURE__*/React.createElement(SlideFoot, {
    left: "The Giving Green \xB7 2026"
  }));
}

/* ---------- 3. Proof / stats ---------- */
function ProofSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "02 \xB7 The Proof"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 76,
    color: "var(--cream)"
  }, "Year One,", /*#__PURE__*/React.createElement("br", null), "In the Books."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '68ch',
      fontSize: '18px',
      lineHeight: 1.7,
      color: 'var(--cream-90)',
      marginTop: '20px'
    }
  }, "Thousands of St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied, the numbers spoke for themselves."), /*#__PURE__*/React.createElement(StatGrid, {
    style: {
      marginTop: '32px'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "$20,634",
    label: "raised for our nine charity partners"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "1.5M+",
    label: "social impressions"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "100%",
    label: "beverage sell-through at every hole"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "5+ HRS",
    label: "sustained brand exposure on the scorecard"
  })), /*#__PURE__*/React.createElement(SlideFoot, {
    left: "02 \xB7 The Proof"
  }));
}

/* ---------- 4. Course, two column ---------- */
function CourseSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "fairway"
  }, "03 \xB7 The Course \xB7 Soulard"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 72
  }, "The Course."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '44px',
      marginTop: '28px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(CourseStack, {
    onDark: false,
    holes: [{
      hole: '01',
      venue: 'Social Bar & Grill'
    }, {
      hole: '02',
      venue: "Ray's Sportshouse"
    }, {
      hole: '03',
      venue: "Duke's"
    }, {
      hole: '04',
      venue: 'The Great Grizzly Bear'
    }, {
      hole: '05',
      venue: "Molly's in Soulard"
    }, {
      hole: '06',
      venue: "Jack Nolen's"
    }],
    style: {
      fontSize: '0'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: BASE + '/assets/images/photos/strip3.webp',
    alt: "The course through Soulard",
    style: {
      width: '100%',
      height: '240px',
      objectFit: 'cover',
      filter: 'url(#tgg-duotone)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--flag)',
      color: 'var(--cream)',
      padding: '22px 24px',
      fontWeight: 700,
      fontSize: '15px',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      lineHeight: 1.5,
      marginTop: '14px'
    }
  }, "Every hole is a sponsored hole. Nine bars, nine signature drinks, nine brands in play."))), /*#__PURE__*/React.createElement(SlideFoot, {
    onDark: false,
    left: "03 \xB7 The Course"
  }));
}

/* ---------- 5. Scorecard ---------- */
function ScorecardSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "sandDeep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "fairway",
    style: {
      justifyContent: 'center'
    }
  }, "04 \xB7 How to Play"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 80
  }, "Lowest Score ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--flag)'
    }
  }, "Wins.")), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "forest",
    style: {
      marginTop: '14px'
    }
  }, "Every stop gives attendees a chance to take strokes off their score.")), /*#__PURE__*/React.createElement(Scorecard, {
    style: {
      maxWidth: '760px',
      margin: '30px auto 0'
    },
    rows: [{
      label: 'Skip a bar entirely',
      strokes: '+2',
      tone: 'penalty'
    }, {
      label: 'Visit a bar',
      strokes: '+0'
    }, {
      label: 'Order any drink',
      note: 'mocktails count too',
      strokes: '\u22121',
      tone: 'good'
    }, {
      label: 'Play a sponsored mini-game or challenge',
      strokes: '\u22121',
      tone: 'good'
    }, {
      label: "Order the hole's official sponsored drink",
      strokes: '\u22122',
      tone: 'best'
    }]
  }), /*#__PURE__*/React.createElement(SlideFoot, {
    onDark: false,
    left: "100% sell-through in Year One"
  }));
}

/* ---------- 6. Tiers ---------- */
function TiersSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "06 \xB7 Sponsorship Tiers"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 72,
    color: "var(--cream)"
  }, "Six Holes for Sale."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      marginTop: '12px'
    }
  }, "Nine holes on the course. The Title Partner's three brands take three. The rest is yours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '16px',
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(TierCard, {
    accent: "flag",
    label: "Official Category Partner",
    price: "$10,000",
    availability: "2 Available",
    benefits: ['Exclusive category naming rights', 'Two sponsored holes', 'Back-of-scorecard logo', '10 team tickets']
  }), /*#__PURE__*/React.createElement(TierCard, {
    accent: "bunker",
    label: "Signature Hole Sponsor",
    price: "$7,500",
    availability: "2 Available",
    benefits: ['One sponsored hole', 'Mini-game named after your brand', 'Scorecard hole line', '6 team tickets']
  }), /*#__PURE__*/React.createElement(TierCard, {
    accent: "fairway",
    label: "Hole Sponsor",
    price: "$5,000",
    availability: "2 Available",
    benefits: ['One sponsored hole', 'Hole banner on premise', 'Scorecard hole line', '4 team tickets']
  })), /*#__PURE__*/React.createElement(SlideFoot, {
    left: "Title Partnership \xB7 $15,000 \xB7 by private conversation"
  }));
}

/* ---------- 7. Photo statement ---------- */
function PhotoSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "ink",
    pad: 0,
    style: {
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + '/assets/images/photos/strip2.webp',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'url(#tgg-duotone)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom,rgba(20,40,34,.15) 40%,rgba(20,40,34,.86) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '72px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "05 \xB7 Your Brand In Play"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 80,
    color: "var(--cream)"
  }, "Your Product Becomes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--flag)'
    }
  }, "Part of the Game.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '56ch',
      fontSize: '18px',
      lineHeight: 1.65,
      color: 'var(--cream-90)',
      marginTop: '18px'
    }
  }, "Not a logo on a banner nobody reads. A mechanic attendees actively play through, nine times in five hours.")));
}

/* ---------- 8. Close ---------- */
function CloseSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    tone: "forest",
    style: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: 'center',
      letterSpacing: 'var(--ls-kicker)'
    }
  }, "\xB7\xB7 Sponsorship \xB7 2026 \xB7\xB7"), /*#__PURE__*/React.createElement(SlideTitle, {
    size: 110,
    color: "var(--cream)"
  }, "Let's Build", /*#__PURE__*/React.createElement("br", null), "Your Hole."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    size: "lg",
    style: {
      marginTop: '18px'
    }
  }, "Party Fore a Great Cause."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '32px',
      display: 'flex',
      gap: '14px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "mailto:ozzie@thegivinggreen.org"
  }, "ozzie@thegivinggreen.org"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    size: "lg",
    href: "#"
  }, "Download the Deck")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '26px',
      color: 'var(--cream-60)',
      fontSize: '15px',
      lineHeight: 1.7
    }
  }, "Ozzie Salcedo, Co-Founder & Marketing Director \xB7 thegivinggreen.org", /*#__PURE__*/React.createElement("br", null), "Saturday, October 3, 2026 \xB7 1 to 6 PM \xB7 Soulard"));
}
Object.assign(window, {
  Slide,
  SlideTitle,
  SlideFoot,
  TitleSlide,
  StatementSlide,
  ProofSlide,
  CourseSlide,
  ScorecardSlide,
  TiersSlide,
  PhotoSlide,
  CloseSlide
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/Slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ClosingSections.jsx
try { (() => {
const {
  SectionHead,
  FaqList,
  EmailForm
} = window.TheGivingGreenDesignSystem_038bf7;
function FaqSection({
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    style: {
      padding: 'var(--section-y) var(--section-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Got Questions",
    title: "FAQs",
    subline: "Everything you need to know before you tee off."
  }), /*#__PURE__*/React.createElement(FaqList, {
    items: data.faqs
  })));
}
function CaptureSection({
  onSubmit,
  sent
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "notify",
    style: {
      background: 'var(--flag)',
      color: 'var(--cream)',
      padding: 'clamp(72px,10vh,110px) var(--section-x)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(40px,7vw,88px)',
      lineHeight: .92,
      margin: '0 0 16px'
    }
  }, "Get On", /*#__PURE__*/React.createElement("br", null), "the Card"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.8vw,18px)',
      opacity: .9,
      marginBottom: '32px',
      lineHeight: 1.6,
      maxWidth: '46ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Be first on the tee sheet. Early access, course updates, and everything you need before October 3."), /*#__PURE__*/React.createElement(EmailForm, {
    onSubmit: onSubmit
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      minHeight: '20px',
      marginTop: '12px',
      fontSize: 'var(--fs-caption)',
      fontWeight: 600
    }
  }, sent ? "You're on the card. Watch your inbox." : ''), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '12px',
      fontSize: 'var(--fs-fine)',
      opacity: .5,
      letterSpacing: '.05em'
    }
  }, "No spam. One email when tickets drop."));
}
Object.assign(window, {
  FaqSection,
  CaptureSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ClosingSections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/CourseSection.jsx
try { (() => {
const {
  SectionHead,
  CourseStack,
  Button
} = window.TheGivingGreenDesignSystem_038bf7;
function CourseSection({
  data,
  onTickets
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "course",
    style: {
      background: 'var(--forest)',
      color: 'var(--cream)',
      padding: 'var(--section-y) var(--section-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-content)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "01 \xB7 The Course \xB7 Soulard",
    title: "9 Holes. 9 Drinks. 9 Charities.",
    subline: "We turn 9 of our favorite local bars into 9 holes of pub golf."
  }), /*#__PURE__*/React.createElement(CourseStack, {
    holes: data.holes
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '52px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onTickets
  }, "Get on the Tee Sheet"))));
}
Object.assign(window, {
  CourseSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/CourseSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/HeroSection.jsx
try { (() => {
const {
  Mark,
  Button,
  Stamp,
  StampDot,
  Ceremonial,
  DuotoneDefs
} = window.TheGivingGreenDesignSystem_038bf7;
function HeroSection({
  base,
  data,
  onTickets
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      background: 'var(--forest)',
      color: 'var(--cream)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(DuotoneDefs, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/photos/hero.webp',
    alt: "The Giving Green Year One crowd in Soulard",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center 40%',
      filter: 'url(#tgg-duotone)',
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom,rgba(20,40,34,.45) 0%,rgba(20,40,34,.10) 35%,rgba(20,40,34,.75) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '130px clamp(20px,4vw,48px) 0',
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--bunker)',
      fontSize: 'var(--fs-label)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      marginBottom: '18px'
    }
  }, "Second Annual \xB7 Soulard, St. Louis"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: .88,
      letterSpacing: '.01em',
      fontSize: 'clamp(44px,9.5vw,148px)',
      margin: '0 0 18px',
      color: 'var(--cream)'
    }
  }, "The 2", /*#__PURE__*/React.createElement(HeartZero, {
    base: base
  }), "26 Main Event"), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "cream",
    size: "lg",
    style: {
      marginBottom: '18px'
    }
  }, "The Party Fore Good."), /*#__PURE__*/React.createElement(Stamp, {
    onDark: true,
    style: {
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", null, data.event.date), /*#__PURE__*/React.createElement(StampDot, null), /*#__PURE__*/React.createElement("span", null, data.event.time), /*#__PURE__*/React.createElement(StampDot, null), /*#__PURE__*/React.createElement("span", null, data.event.place)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'clamp(15px,1.8vw,18px)',
      color: 'var(--cream-82)',
      maxWidth: '58ch',
      lineHeight: 1.65,
      marginBottom: '32px',
      fontWeight: 300
    }
  }, "Nine bars become nine holes. Last year, you turned Soulard into a golf course and raised ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--cream)',
      fontWeight: 600
    }
  }, "$20,634"), " for nine local charities. That's the number on the leaderboard. This October, we're smashing it. Together."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingBottom: '56px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onTickets
  }, "Get on the Tee Sheet"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    href: "#good"
  }, "Meet the Charities"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      width: '100%',
      background: 'var(--scrim-forest-85)',
      backdropFilter: 'blur(8px)',
      borderTop: '1px solid var(--line-on-dark)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      padding: '0 clamp(20px,4vw,48px)'
    }
  }, [['Holes', 'Nine Bars'], ['Charities', 'Nine Teams'], ['Ticket', data.event.price], ['To the Cause', data.event.give + ' of every ticket']].map(([lab, val], i) => /*#__PURE__*/React.createElement("div", {
    key: lab,
    style: {
      padding: '20px 0',
      borderRight: i === 3 ? 'none' : '1px solid var(--line-on-dark-soft)',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-label-sm)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--bunker)'
    }
  }, lab), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      textTransform: 'uppercase',
      fontSize: 'clamp(18px,2.5vw,28px)',
      color: 'var(--cream)'
    }
  }, val)))));
}

/** The mark standing in for the zero in 2026, exactly as the live site sets it. */
function HeartZero({
  base
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/logos/logo-heart-flag.svg',
    alt: "0",
    style: {
      height: '1em',
      width: 'auto',
      display: 'inline-block',
      verticalAlign: 'baseline',
      transform: 'translateY(.037em)',
      margin: '0 .015em'
    }
  });
}
Object.assign(window, {
  HeroSection,
  HeartZero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/HeroSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/Home.jsx
try { (() => {
const {
  NavBar,
  SiteFooter,
  Ticker
} = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';
function Home() {
  const data = window.TGG_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [joined, setJoined] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const join = c => {
    setJoined(c);
    setDrawer(true);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    links: data.nav,
    scrolled: scrolled,
    base: BASE,
    cta: "Get Tickets",
    ctaHref: "#",
    activeHref: null,
    style: {
      position: 'fixed'
    }
  }), /*#__PURE__*/React.createElement(HeroSection, {
    base: BASE,
    data: data,
    onTickets: () => setDrawer(true)
  }), /*#__PURE__*/React.createElement(Ticker, {
    items: ['Charity Pub Golf Crawl', 'Nine Bars', 'Nine Charities', 'Nine Holes', 'October 3', 'Soulard', 'St. Louis', 'The Party Fore Good']
  }), /*#__PURE__*/React.createElement(CourseSection, {
    data: data,
    onTickets: () => setDrawer(true)
  }), /*#__PURE__*/React.createElement(PhotoStripBreak, {
    base: BASE
  }), /*#__PURE__*/React.createElement(ScoringSection, {
    base: BASE,
    data: data
  }), /*#__PURE__*/React.createElement(TeamsSection, {
    base: BASE,
    data: data,
    onJoin: join,
    joined: joined
  }), /*#__PURE__*/React.createElement(ProofSection, {
    base: BASE
  }), /*#__PURE__*/React.createElement(FaqSection, {
    data: data
  }), /*#__PURE__*/React.createElement(CaptureSection, {
    sent: sent,
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }), /*#__PURE__*/React.createElement(SiteFooter, {
    base: BASE,
    columns: [[{
      label: 'The Crawl',
      href: '#course'
    }, {
      label: 'Charities',
      href: '#good'
    }, {
      label: 'Get Tickets',
      href: '#'
    }, {
      label: 'FAQs',
      href: '#faq'
    }], [{
      label: '@thegivinggreen',
      href: 'https://instagram.com/thegivinggreen'
    }, {
      label: 'admin@thegivinggreen.org',
      href: 'mailto:admin@thegivinggreen.org'
    }]]
  }), /*#__PURE__*/React.createElement(TicketDrawer, {
    open: drawer,
    onClose: () => setDrawer(false),
    base: BASE,
    data: data,
    joined: joined,
    onJoin: setJoined
  }));
}
function PhotoStripBreak({
  base
}) {
  const {
    PhotoStrip
  } = window.TheGivingGreenDesignSystem_038bf7;
  return /*#__PURE__*/React.createElement(PhotoStrip, {
    photos: [{
      src: base + '/assets/images/photos/twoup1.webp',
      alt: 'Attendees showing wristbands'
    }, {
      src: base + '/assets/images/photos/strip2.webp',
      alt: 'Attendees in matching team shirts'
    }, {
      src: base + '/assets/images/photos/twoup2.webp',
      alt: 'Attendees at an outdoor Soulard bar'
    }]
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ProofSection.jsx
try { (() => {
const {
  SectionHead,
  PhotoStrip
} = window.TheGivingGreenDesignSystem_038bf7;
function ProofSection({
  base
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "proof",
    style: {
      background: 'var(--forest)',
      color: 'var(--cream)',
      padding: 'var(--section-y) var(--section-x) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-wide)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "04 \xB7 The Proof",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Year One,", /*#__PURE__*/React.createElement("br", null), "In the Books."),
    style: {
      marginBottom: '24px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '62ch',
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.75,
      color: 'var(--cream-82)',
      margin: '0 0 48px'
    }
  }, "Last year, St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--bunker)'
    }
  }, "$20,634 raised"), " for our nine charity partners, ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--bunker)'
    }
  }, "1.5M+ social impressions"), ", ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--bunker)'
    }
  }, "100% sell-through"), " on every sponsored drink. Not bad for year one. See you October 3.")), /*#__PURE__*/React.createElement(PhotoStrip, {
    height: "clamp(220px,26vw,340px)",
    style: {
      marginLeft: 'calc(var(--section-x) * -1)',
      marginRight: 'calc(var(--section-x) * -1)'
    },
    photos: [{
      src: base + '/assets/images/photos/strip1.webp',
      alt: 'Year One crowd at a Soulard bar'
    }, {
      src: base + '/assets/images/photos/strip2.webp',
      alt: 'Attendees in matching team shirts'
    }, {
      src: base + '/assets/images/photos/strip3.webp',
      alt: "Group outside Ray's Sportshouse"
    }]
  }));
}
Object.assign(window, {
  ProofSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ProofSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/ScoringSection.jsx
try { (() => {
const {
  SectionHead,
  Scorecard,
  DuotoneImage
} = window.TheGivingGreenDesignSystem_038bf7;
function ScoringSection({
  base,
  data
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      padding: 'var(--section-y) var(--section-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--w-narrow)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "02 \xB7 How to Play",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Compete Against", /*#__PURE__*/React.createElement("br", null), "Your Friends."),
    subline: "Just like real golf, the lowest score wins."
  }), /*#__PURE__*/React.createElement(Scorecard, {
    rows: data.scoring
  }), /*#__PURE__*/React.createElement(DuotoneImage, {
    src: base + '/assets/images/photos/game.webp',
    alt: "Attendee playing a golf mini-game at a hole",
    style: {
      marginTop: '32px',
      border: '2px solid var(--forest)',
      maxHeight: '360px'
    },
    ratio: "16/7"
  })));
}
Object.assign(window, {
  ScoringSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/ScoringSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/TeamsSection.jsx
try { (() => {
const {
  SectionHead,
  TeamCard,
  Countdown,
  Ceremonial
} = window.TheGivingGreenDesignSystem_038bf7;
function TeamsSection({
  base,
  data,
  onJoin,
  joined
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "good",
    style: {
      padding: 'var(--section-y) var(--section-x)',
      maxWidth: 'var(--w-wide)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "03 \xB7 Choose Your Team",
    title: "Choose Your Team.",
    subline: 'Pick which charity you want to support. ' + data.event.give + ' of every ticket goes directly to your charity of choice.'
  }), /*#__PURE__*/React.createElement(Countdown, {
    target: data.event.iso,
    style: {
      marginBottom: '44px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '16px',
      textAlign: 'left'
    }
  }, data.teams.map(t => /*#__PURE__*/React.createElement(TeamCard, {
    key: t.charity,
    shirt: base + '/assets/images/shirts/' + t.shirt,
    logo: base + '/assets/images/logos/' + t.logo,
    charity: t.charity,
    mission: t.mission,
    learnHref: t.learnHref,
    joinLabel: joined === t.charity ? 'On the Tee Sheet' : 'Join This Team',
    joinHref: undefined,
    onClick: () => onJoin(t.charity),
    style: {
      cursor: 'pointer',
      borderColor: joined === t.charity ? 'var(--flag)' : undefined
    }
  }))), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "forest",
    style: {
      marginTop: '36px',
      fontWeight: 700,
      fontSize: 'clamp(18px,2vw,24px)'
    }
  }, "Your shirt color is your team. Your shirt is your ticket."));
}
Object.assign(window, {
  TeamsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/TeamsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/TicketDrawer.jsx
try { (() => {
const {
  Button,
  Mark,
  Ceremonial,
  Badge
} = window.TheGivingGreenDesignSystem_038bf7;

/** Fake checkout drawer so the kit clicks through from CTA to charity choice. */
function TicketDrawer({
  open,
  onClose,
  base,
  data,
  joined,
  onJoin
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      background: 'rgba(20,40,34,.6)',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(440px,100%)',
      height: '100%',
      background: 'var(--cream)',
      borderLeft: '2px solid var(--forest)',
      padding: '24px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 40,
    base: base
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-impact)',
      fontSize: '24px',
      color: 'var(--forest)',
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '34px',
      lineHeight: .95,
      margin: 0,
      color: 'var(--forest)'
    }
  }, "The Shirt Is", /*#__PURE__*/React.createElement("br", null), "the Ticket."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "fairway",
    size: "sm"
  }, "Pick your team. The color decides the charity."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '2px solid var(--forest)',
      borderBottom: '2px solid var(--forest)',
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Team shirt entry"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '30px',
      color: 'var(--flag)',
      lineHeight: 1
    }
  }, data.event.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, data.teams.map(t => {
    const on = joined === t.charity;
    return /*#__PURE__*/React.createElement("button", {
      key: t.charity,
      onClick: () => onJoin(t.charity),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        textAlign: 'left',
        cursor: 'pointer',
        background: on ? 'var(--forest)' : 'transparent',
        color: on ? 'var(--cream)' : 'var(--forest)',
        border: 'none',
        borderBottom: '1px solid var(--line)',
        padding: '10px 8px',
        fontFamily: 'var(--font-body)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: base + '/assets/images/shirts/' + t.shirt,
      alt: "",
      style: {
        width: '44px',
        height: 'auto',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '13px',
        fontWeight: 700,
        lineHeight: 1.3
      }
    }, t.charity), on ? /*#__PURE__*/React.createElement(Badge, {
      tone: "flag",
      style: {
        marginLeft: 'auto'
      }
    }, "Selected") : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--fairway)'
    }
  }, joined ? data.event.give + ' of your ticket goes to ' + joined + '.' : 'Choose a team to see where your ' + data.event.give + ' goes.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !joined,
    href: joined ? data.event.store : undefined,
    target: "_blank",
    rel: "noopener"
  }, joined ? 'Check Out' : 'Pick a Team First'))));
}
Object.assign(window, {
  TicketDrawer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/TicketDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing_site/data.js
try { (() => {
window.TGG_DATA = {
  event: {
    date: 'Saturday, October 3, 2026',
    time: '1 to 6 PM',
    place: 'Soulard',
    iso: '2026-10-03T13:00:00-05:00',
    price: '$45',
    give: '$15',
    store: 'https://thegivinggreen.store'
  },
  holes: [{
    hole: '01',
    venue: 'Social Bar & Grill'
  }, {
    hole: '02',
    venue: "Ray's Sportshouse"
  }, {
    hole: '03',
    venue: "Duke's"
  }, {
    hole: '04',
    venue: 'The Great Grizzly Bear'
  }, {
    hole: '05',
    venue: "Molly's in Soulard"
  }, {
    hole: '06',
    venue: "Jack Nolen's"
  }, {
    hole: '07',
    venue: "Big Daddy's"
  }, {
    hole: '08',
    venue: "D's Place"
  }, {
    hole: '09',
    venue: "Hammerstone's"
  }],
  scoring: [{
    label: 'Skip a bar entirely',
    strokes: '+2',
    tone: 'penalty'
  }, {
    label: 'Visit a bar',
    strokes: '+0'
  }, {
    label: 'Order any drink',
    note: 'mocktails count too',
    strokes: '\u22121',
    tone: 'good'
  }, {
    label: 'Play a sponsored mini-game or challenge',
    strokes: '\u22121',
    tone: 'good'
  }, {
    label: "Order the hole's official sponsored drink",
    strokes: '\u22122',
    tone: 'best'
  }],
  teams: [{
    charity: 'St. Louis Hero Network',
    shirt: 'heroshirt.png',
    logo: 'logo-hero-network.png',
    mission: 'Empowering veterans and first responders to thrive in their next mission.',
    learnHref: 'https://stlheronetwork.com/'
  }, {
    charity: 'Folds of Honor',
    shirt: 'honorshirt.png',
    logo: 'logo-folds-of-honor.png',
    mission: 'Honoring the sacrifice of our military families through education.',
    learnHref: 'https://foldsofhonor.org/'
  }, {
    charity: "St. Louis Children's Hospital",
    shirt: 'children_sshirt.png',
    logo: 'logo-st-louis-childrens.png',
    mission: 'Providing world-class care and advancing cures for kids.',
    learnHref: 'https://www.stlouischildrens.org/'
  }, {
    charity: 'Make-A-Wish Missouri & Kansas',
    shirt: 'wishshirt.png',
    logo: 'logo-make-a-wish.png',
    mission: 'Creating life-changing wishes for children with critical illnesses.',
    learnHref: 'https://wish.org/mokan'
  }, {
    charity: 'STL Impact Baseball',
    shirt: 'impactshirt.png',
    logo: 'logo-stl-impact.png',
    mission: 'Using baseball to build better youth, stronger families, and stronger communities.',
    learnHref: 'https://www.stlimpact.com/'
  }, {
    charity: 'Young Friends of Kids with Cancer',
    shirt: 'friendsshirt.png',
    logo: 'logo-young-friends-kids-cancer.png',
    mission: 'Supporting kids with cancer and their families through every step of the journey.',
    learnHref: 'https://www.friendsofkids.com/young-friends-of-kids.html'
  }, {
    charity: "St. Jude Children's Research Hospital",
    shirt: 'judeshirt.png',
    logo: 'logo-st-jude.png',
    mission: 'Leading the way the world understands, treats and defeats childhood cancer.',
    learnHref: 'https://www.stjude.org/'
  }, {
    charity: 'Stray Rescue of St. Louis',
    shirt: 'strayshirt.png',
    logo: 'logo-stray-rescue.png',
    mission: 'Saving the lives of dogs and cats and finding them loving forever homes.',
    learnHref: 'https://www.strayrescue.org/'
  }, {
    charity: "Gene Slay's Girls & Boys Club",
    shirt: 'slayshirt.png',
    logo: 'logo-gene-slay.png',
    mission: 'Giving St. Louis kids a safe place to learn, grow, and believe in a limitless tomorrow.',
    learnHref: 'https://www.gsgbcstl.org/'
  }],
  faqs: [{
    q: 'What is The Giving Green?',
    a: "TGG is St. Louis's charity pub golf crawl. Nine bars in Soulard become nine holes on a golf course for one Saturday. You carry a physical scorecard, play games at each hole, compete for the lowest score, and raise money for nine local charities at the same time."
  }, {
    q: 'What is included in my ticket?',
    a: 'Every ticket is $45. Your team shirt is your event pass and your souvenir. $15 of that goes directly to the charity you choose at checkout. Your shirt color is your team.'
  }, {
    q: 'How does scoring work?',
    a: "Each hole has a featured sponsored drink and a mini-game or challenge. Order the featured drink and earn minus two strokes. Order any other drink and earn minus one. Play the mini-game for minus one. Skip a bar entirely and take plus two."
  }, {
    q: 'Do I need to know anything about golf?',
    a: 'Not even a little bit. In Year One we had everyone from actual golfers to people who have never picked up a club having the same amount of fun. If you can carry a scorecard and order a drink you are qualified to play.'
  }, {
    q: 'Is there an age requirement?',
    a: 'Yes. You must be 21 or older to attend. Valid ID is required at all venues. No exceptions.'
  }],
  nav: [{
    label: 'The Crawl',
    href: '#course'
  }, {
    label: 'Charities',
    href: '#good'
  }, {
    label: 'Year One',
    href: '#proof'
  }, {
    label: 'Pro Shop',
    href: '../pro_shop/index.html'
  }, {
    label: 'Sponsor Us',
    href: '../sponsor_page/index.html'
  }, {
    label: 'FAQ',
    href: '#faq'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing_site/data.js", error: String((e && e.message) || e) }); }

// ui_kits/pro_shop/ProShop.jsx
try { (() => {
const {
  NavBar,
  SiteFooter,
  ProductBand,
  Badge,
  Ceremonial,
  Mark
} = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';
const PRO_SHOP_NAV = [{
  label: 'The Crawl',
  href: '../marketing_site/index.html#course'
}, {
  label: 'Charities',
  href: '../marketing_site/index.html#good'
}, {
  label: 'Year One',
  href: '../marketing_site/index.html#proof'
}, {
  label: 'Pro Shop',
  href: '#'
}, {
  label: 'Sponsor Us',
  href: '../sponsor_page/index.html'
}, {
  label: 'FAQ',
  href: '../marketing_site/index.html#faq'
}];
function ProShop() {
  const hats = window.TGG_HATS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(NavBar, {
    links: PRO_SHOP_NAV,
    activeHref: "#",
    scrolled: scrolled,
    base: BASE,
    cta: "Get Tickets",
    ctaHref: "../marketing_site/index.html",
    style: {
      position: 'fixed'
    }
  }), /*#__PURE__*/React.createElement(ProShopHero, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '14px',
      background: 'var(--sand-deep)',
      borderBottom: '1px solid var(--line)',
      padding: '16px 24px',
      textAlign: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "flag",
    shape: "pill"
  }, "Merch \xB7 Fore Good"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: '#3A4A40'
    }
  }, "Your team shirt is the ticket. These caps are Pro Shop retail, with a per-cap donation split evenly across all nine charity partners.")), hats.map((h, i) => /*#__PURE__*/React.createElement(ProductBand, {
    key: h.sku,
    image: BASE + '/assets/images/hats/' + h.image,
    name: h.name,
    blurb: h.blurb,
    spec: h.spec,
    price: h.price,
    sku: h.sku,
    cta: "Shop Now",
    ctaHref: h.href,
    onDark: i % 2 === 1,
    reverse: i % 2 === 1
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--shadow-ink)',
      color: 'var(--cream)',
      textAlign: 'center',
      padding: 'clamp(50px,7vw,86px) clamp(24px,4vw,48px)'
    }
  }, /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "cream",
    size: "lg",
    style: {
      maxWidth: '24ch',
      margin: '0 auto'
    }
  }, "Nine bars. Nine charities. One cap that keeps telling the story."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--bunker)',
      marginTop: '20px',
      fontSize: 'var(--fs-label)',
      fontWeight: 700,
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase'
    }
  }, "Limited Edition \xB7 Event Exclusive")), /*#__PURE__*/React.createElement(SiteFooter, {
    base: BASE,
    creed: "The Giving Green",
    ceremonial: "Party Fore a Great Cause.",
    columns: [[{
      label: 'Back to the Crawl',
      href: '../marketing_site/index.html'
    }, {
      label: 'admin@thegivinggreen.org',
      href: 'mailto:admin@thegivinggreen.org'
    }]]
  }));
}
function ProShopHero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--forest)',
      color: 'var(--cream)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(110px,16vh,170px) clamp(24px,4vw,64px) clamp(48px,8vh,90px)',
      maxWidth: '1400px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '20px',
      fontWeight: 700,
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--bunker)',
      marginBottom: '18px'
    }
  }, "The Pro Shop \xB7 Headwear \xB7 Limited"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-impact)',
      textTransform: 'uppercase',
      lineHeight: .94,
      letterSpacing: '.01em',
      fontSize: 'clamp(52px,11vw,148px)',
      fontWeight: 400,
      margin: 0
    }
  }, "The 2", /*#__PURE__*/React.createElement(HeartZero, null), "26", /*#__PURE__*/React.createElement("br", null), "Main Event", /*#__PURE__*/React.createElement("br", null), "Hat Collection"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-impact)',
      textTransform: 'uppercase',
      letterSpacing: '.02em',
      fontSize: 'clamp(14px,2.2vw,32px)',
      marginTop: '22px',
      color: 'var(--bunker)',
      lineHeight: 1.15
    }
  }, "Limited Edition \xB7 Event Exclusive \xB7 October 3, Soulard")));
}
function HeartZero() {
  return /*#__PURE__*/React.createElement("img", {
    src: BASE + '/assets/images/logos/logo-heart-flag.svg',
    alt: "0",
    style: {
      height: '1em',
      width: 'auto',
      display: 'inline-block',
      verticalAlign: 'baseline',
      transform: 'translateY(.037em)',
      margin: '0 .015em'
    }
  });
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ProShop, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro_shop/ProShop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pro_shop/hats.js
try { (() => {
window.TGG_HATS = [{
  name: 'The Founders Cap',
  image: 'hat-founders-white.jpg',
  price: '$30.00',
  sku: 'SKU TGG-HAT-FOUNDERS-WHT',
  spec: 'Performance fabric, laser-perforated sides, adjustable snap closure.',
  blurb: 'The one that started it all. Clean white canvas, a solid green rope, and the mark that gave The Giving Green its name. This is the anchor piece of the lineup, the cap you reach for when you want the whole story in one hat.',
  href: 'https://thegivinggreen.store/products/the-founders-cap'
}, {
  name: 'The Stateside Rope Cap',
  image: 'hat-stateside-navy.jpg',
  price: '$30.00',
  sku: 'SKU TGG-HAT-STATESIDE-NVY',
  spec: 'Performance fabric, laser-perforated sides, adjustable snap closure.',
  blurb: 'Great golf, better company, homegrown. Navy canvas with a red and white rope trim carries the same heart-flag mark in stars and stripes. Built for the same rounds, the same causes, just with a little more red, white, and blue in the mix.',
  href: 'https://thegivinggreen.store/products/the-stateside-rope-cap'
}, {
  name: 'The Missouri Chapter Cap',
  image: 'hat-missouri-green.jpg',
  price: '$30.00',
  sku: 'SKU TGG-HAT-MISSOURI-GRN',
  spec: 'Performance fabric, laser-perforated sides, adjustable snap closure.',
  blurb: "Where it all comes together. Forest green canvas, a gold rope, and the Show-Me State carried right on the front. The first in what we're calling our Chapter series, caps that mark the ground where this community actually plays.",
  href: 'https://thegivinggreen.store/products/the-missouri-chapter-cap'
}, {
  name: 'The FORE Cap',
  image: 'hat-fore-white.jpg',
  price: '$30.00',
  sku: 'SKU TGG-HAT-FORE-WHT',
  spec: 'Structured 7-panel construction, 3D puff embroidery, laser-perforated sides, adjustable snap closure.',
  blurb: "Simple. Structured. Ours. A clean wordmark front and center, no patch, no rope, just raised embroidery and a heart where the O should be. The most premium build in the lineup, and the one that says exactly what we're about without saying much at all.",
  href: 'https://thegivinggreen.store/products/the-fore-cap'
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pro_shop/hats.js", error: String((e && e.message) || e) }); }

// ui_kits/sponsor_page/App.jsx
try { (() => {
const {
  Mark
} = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';
window.TGG_DATA_HOLES = [{
  hole: '01',
  venue: 'Social Bar & Grill'
}, {
  hole: '02',
  venue: "Ray's Sportshouse"
}, {
  hole: '03',
  venue: "Duke's"
}, {
  hole: '04',
  venue: 'The Great Grizzly Bear'
}, {
  hole: '05',
  venue: "Molly's in Soulard"
}, {
  hole: '06',
  venue: "Jack Nolen's"
}, {
  hole: '07',
  venue: "Big Daddy's"
}, {
  hole: '08',
  venue: "D's Place"
}, {
  hole: '09',
  venue: "Hammerstone's"
}];
window.TGG_DATA_SCORING = [{
  label: 'Skip a bar entirely',
  strokes: '+2',
  tone: 'penalty'
}, {
  label: 'Visit a bar',
  strokes: '+0'
}, {
  label: 'Order any drink (mocktails count too)',
  strokes: '\u22121',
  tone: 'good'
}, {
  label: 'Play a sponsored mini-game or challenge',
  strokes: '\u22121',
  tone: 'good'
}];
function SponsorApp() {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 40px',
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: "cream",
    size: 40,
    base: BASE,
    withWordmark: true,
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '26px',
      alignItems: 'center'
    }
  }, ['The Crawl', 'Charities', 'Year One', 'Pro Shop'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "../marketing_site/index.html",
    style: {
      fontSize: '.78rem',
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--cream)',
      opacity: .9,
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "../marketing_site/index.html",
    style: {
      border: '1.5px solid var(--cream)',
      borderRadius: '999px',
      padding: '10px 20px',
      fontSize: '.78rem',
      fontWeight: 700,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--cream)',
      textDecoration: 'none'
    }
  }, "Get Tickets"))), open ? /*#__PURE__*/React.createElement(Deck, {
    base: BASE
  }) : /*#__PURE__*/React.createElement(Gate, {
    base: BASE,
    onUnlock: () => {
      setOpen(true);
      window.scrollTo(0, 0);
    }
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(SponsorApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sponsor_page/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sponsor_page/Deck.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHead,
  Eyebrow,
  Ceremonial,
  Button,
  Stamp,
  Scorecard,
  CourseStack,
  StatCard,
  StatGrid,
  TierCard,
  PhotoStrip,
  DuotoneImage,
  DuotoneDefs,
  AccentBand,
  Mark
} = window.TheGivingGreenDesignSystem_038bf7;
function Deck({
  base
}) {
  const d = window.TGG_SPONSOR;
  const holes = window.TGG_DATA_HOLES;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DuotoneDefs, null), /*#__PURE__*/React.createElement(DeckHero, {
    base: base
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "forest"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "01 \xB7 The Concept \xB7 Soulard",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "9 Holes. 9 Drinks.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--flag)'
      }
    }, "9 Charities.")),
    subline: "We turn 9 of our favorite local bars into 9 holes of pub golf."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr',
      gap: '44px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--cream-90)',
      margin: 0
    }
  }, "Attendees crawl hole to hole with a scorecard in hand. Visit a hole, participate in a branded minigame and order a sponsored drink, knock strokes off your score. Last year that formula sold through 100% of every sponsored drink on the course."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      marginTop: '26px',
      fontSize: '1.15rem',
      lineHeight: 1.5
    }
  }, "\"It was like clockwork. They got off the shuttle, ordered the drink, played the minigame, and took off.\" Donald Keener, D's Place")), /*#__PURE__*/React.createElement(DuotoneImage, {
    src: base + '/assets/images/photos/strip2.webp',
    alt: "Attendees at a Giving Green bar",
    ratio: "4/5"
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "02 \xB7 The Proof",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Year One,", /*#__PURE__*/React.createElement("br", null), "In the Books."),
    style: {
      marginBottom: '24px'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '720px',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--cream-90)'
    }
  }, "Thousands of St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bunker)'
    }
  }, "$20,634 raised"), " for our nine charity partners, ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bunker)'
    }
  }, "1.5M+ social impressions"), ", ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bunker)'
    }
  }, "100% sell-through"), " on every sponsored drink. Not bad for year one. See you October 3."), /*#__PURE__*/React.createElement(StatGrid, {
    style: {
      marginTop: '38px'
    }
  }, d.stats.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s.value,
    value: s.value,
    label: s.label
  }))), /*#__PURE__*/React.createElement(PhotoStrip, {
    height: "220px",
    style: {
      marginTop: '44px'
    },
    photos: [{
      src: base + '/assets/images/photos/strip1.webp',
      alt: 'Year One crowd'
    }, {
      src: base + '/assets/images/photos/strip3.webp',
      alt: 'Year One in Soulard'
    }, {
      src: base + '/assets/images/photos/game.webp',
      alt: 'Year One mini-game'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "03 \xB7 The Course \xB7 Soulard",
    title: "The Course."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '44px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CourseStack, {
    onDark: false,
    holes: holes
  }), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "forest",
    size: "sm",
    style: {
      marginTop: '18px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "2026 course in final review."), " Full lineup ships with ticket launch.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DuotoneImage, {
    src: base + '/assets/images/photos/strip3.webp',
    alt: "The course through Soulard",
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--flag)',
      color: 'var(--cream)',
      padding: '24px 26px',
      fontWeight: 700,
      fontSize: '.92rem',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      lineHeight: 1.5,
      marginTop: '14px'
    }
  }, "Every hole is a sponsored hole. Nine bars, nine signature drinks, nine brands in play.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "sandDeep"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "04 \xB7 How to Play",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Lowest Score", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--flag)'
      }
    }, "Wins.")),
    subline: "Every stop gives attendees a chance to take strokes off their score."
  }), /*#__PURE__*/React.createElement(Scorecard, {
    header: null,
    style: {
      maxWidth: '720px',
      margin: '0 auto'
    },
    rows: window.TGG_DATA_SCORING,
    footer: {
      label: "Order the hole's official sponsored drink",
      strokes: '\u22122'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '720px',
      margin: '26px auto 0',
      textAlign: 'center',
      fontSize: '1rem',
      lineHeight: 1.65,
      color: 'var(--text-body)'
    }
  }, "Ordering the hole's official sponsored drink is worth minus two strokes, making it the best move on the card at every hole. ", /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      fontSize: '1.15rem',
      letterSpacing: '.02em'
    }
  }, "100% sell-through in Year One."))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "05 \xB7 Your Brand In Play",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Your Product Becomes", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--flag)'
      }
    }, "Part of the Game.")),
    subline: "Not a logo on a banner nobody reads. A mechanic attendees actively play through."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 0
    }
  }, d.inPlay.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.title,
    style: {
      display: 'flex',
      gap: '22px',
      alignItems: 'center',
      padding: '34px 26px',
      borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
      borderLeft: i % 2 === 1 ? '1px solid var(--line)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/' + v.image,
    alt: "",
    style: {
      width: '38%',
      maxHeight: '200px',
      objectFit: 'contain',
      filter: v.duo ? 'url(#tgg-duotone)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      fontSize: '1.05rem',
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      margin: 0,
      color: 'var(--forest)'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.9rem',
      lineHeight: 1.55,
      marginTop: '8px',
      color: 'var(--text-body)'
    }
  }, v.copy)))))), /*#__PURE__*/React.createElement(Section, {
    tone: "ink"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    onDark: true,
    eyebrow: "06 \xB7 Sponsorship Tiers",
    title: "Six Holes for Sale.",
    subline: "Nine holes on the course. The Title Partner's three brands take three. The rest is yours."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: '16px'
    }
  }, d.tiers.map(t => /*#__PURE__*/React.createElement(TierCard, _extends({
    key: t.label
  }, t)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '30px',
      fontSize: '.9rem',
      lineHeight: 1.6,
      color: 'var(--sand)'
    }
  }, "One category per partner, confirmed against the Title Partner's brand portfolio at signing. ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bunker)'
    }
  }, "Title Partnership ($15,000, one available) is offered by private conversation."))), /*#__PURE__*/React.createElement(Section, {
    tone: "sand"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    align: "center",
    eyebrow: "07 \xB7 Scorecard Features",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "The Scorecard,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--flag)'
      }
    }, "Sponsor's View."))
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '680px',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: '1rem',
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "Every attendee carries a physical and digital scorecard for the full five hours. It is the single most-handled object at the event: checked at every hole, photographed for the leaderboard, kept as the souvenir."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: '34px',
      maxWidth: '760px',
      margin: '44px auto 0',
      alignItems: 'start'
    }
  }, [['scorecard-front.png', 'FRONT \u00B7 nine sponsor lines, one per hole'], ['scorecard-back.png', "BACK \u00B7 the Title Partner's real estate"]].map(([img, cap]) => /*#__PURE__*/React.createElement("figure", {
    key: img,
    style: {
      textAlign: 'center',
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/product/' + img,
    alt: cap,
    style: {
      border: '1px solid var(--line)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement(Ceremonial, {
    as: "figcaption",
    tone: "forest",
    size: "sm",
    style: {
      marginTop: '14px'
    }
  }, cap)))), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '640px',
      margin: '44px auto 0',
      textAlign: 'center',
      fontFamily: 'var(--font-impact)',
      fontSize: '1.4rem',
      letterSpacing: '.02em',
      textTransform: 'uppercase',
      color: 'var(--forest)'
    }
  }, "Nine hole lines. One back panel. That's the inventory.")), /*#__PURE__*/React.createElement(Section, {
    tone: "sandDeep"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "08 \xB7 Why The Giving Green",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Your Brand Isn't Just on a Banner.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--flag)'
      }
    }, "It Becomes Part of the Event.")),
    size: "h2"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '34px 44px'
    }
  }, d.why.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.title
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      fontSize: '1.1rem',
      letterSpacing: '.03em',
      textTransform: 'uppercase',
      margin: 0,
      color: 'var(--forest)'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '.95rem',
      lineHeight: 1.6,
      marginTop: '10px',
      color: 'var(--text-body)'
    }
  }, w.copy))))), /*#__PURE__*/React.createElement(AccentBand, null, "Help Us Raise More. We'll Help You Sell More."), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      padding: '110px 20px',
      background: 'var(--shadow-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/photos/strip1.webp',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'url(#tgg-duotone)',
      opacity: .38
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(20,40,34,.6),rgba(20,40,34,.78))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: 'center'
    }
  }, "\xB7\xB7 Sponsorship \xB7 2026 \xB7\xB7"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(2.4rem,7vw,4.4rem)',
      lineHeight: .96,
      margin: '14px 0 0',
      color: 'var(--cream)'
    }
  }, "Let's Build Your Hole."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      marginTop: '14px',
      fontSize: '1.15rem'
    }
  }, "Party Fore a Great Cause."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px',
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "mailto:ozzie@thegivinggreen.org"
  }, "ozzie@thegivinggreen.org"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    size: "lg",
    href: "#"
  }, "Download the Deck")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '26px',
      color: 'var(--fairway)',
      fontSize: '.95rem',
      lineHeight: 1.7
    }
  }, "Ozzie Salcedo, Co-Founder & Marketing Director \xB7 646-533-2144 \xB7 thegivinggreen.org", /*#__PURE__*/React.createElement("br", null), "Saturday, October 3, 2026 \xB7 1 to 6 PM \xB7 Soulard"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--forest)',
      textAlign: 'center',
      padding: '36px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontSize: '1.5rem',
      letterSpacing: '.04em',
      color: 'var(--cream)',
      textTransform: 'uppercase'
    }
  }, "The Giving Green 2026"), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      marginTop: '8px',
      fontSize: '.95rem'
    }
  }, "Party Fore a Great Cause.")));
}
const SECTION_BG = {
  forest: 'var(--forest)',
  ink: 'var(--shadow-ink)',
  sand: 'var(--sand)',
  sandDeep: 'var(--sand-deep)'
};
function Section({
  tone,
  children
}) {
  const dark = tone === 'forest' || tone === 'ink';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: SECTION_BG[tone],
      color: dark ? 'var(--cream)' : 'var(--forest)',
      padding: '84px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '1080px',
      margin: '0 auto',
      padding: '0 24px'
    }
  }, children));
}
function DeckHero({
  base
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: '110px 20px 96px',
      overflow: 'hidden',
      background: 'var(--shadow-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: base + '/assets/images/photos/hero.webp',
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'url(#tgg-duotone)',
      opacity: .42
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg,rgba(20,40,34,.55),rgba(20,40,34,.75))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: 'center'
    }
  }, "\xB7\xB7 Sponsorship \xB7 2026 \xB7\xB7"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(2.7rem,7.6vw,5.2rem)',
      marginTop: '18px',
      lineHeight: .92,
      color: 'var(--cream)'
    }
  }, "Sponsor the 2026", /*#__PURE__*/React.createElement("br", null), "Main Event."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      fontSize: '1.25rem',
      marginTop: '16px'
    }
  }, "The Party Fore Good."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '26px'
    }
  }, /*#__PURE__*/React.createElement(Stamp, {
    onDark: true,
    size: "sm"
  }, "Saturday, October 3, 2026 \xA0|\xA0 1 to 6 PM \xA0|\xA0 Soulard")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '30px',
      display: 'flex',
      gap: '14px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#"
  }, "Download the Deck"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    size: "lg",
    href: "mailto:ozzie@thegivinggreen.org"
  }, "Talk to Ozzie"))));
}
Object.assign(window, {
  Deck
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sponsor_page/Deck.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sponsor_page/Gate.jsx
try { (() => {
const {
  Button,
  Input,
  Mark,
  Ceremonial
} = window.TheGivingGreenDesignSystem_038bf7;

/** The partners-only passcode gate. Any entry unlocks in this kit. */
function Gate({
  onUnlock,
  base
}) {
  const [val, setVal] = React.useState('');
  const [err, setErr] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (val.trim()) onUnlock();else setErr(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: 'calc(100vh - 84px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      maxWidth: '560px',
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: "cream",
    size: 56,
    base: base,
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '.72rem',
      fontWeight: 700,
      letterSpacing: 'var(--ls-kicker)',
      textTransform: 'uppercase',
      color: 'var(--bunker)'
    }
  }, "\xB7\xB7 Partners Only \xB7 Soulard, St. Louis \xB7\xB7"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-impact)',
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: 'clamp(2.6rem,7vw,4.2rem)',
      lineHeight: .96,
      margin: '10px 0 0',
      color: 'var(--cream)'
    }
  }, "Sponsor Us."), /*#__PURE__*/React.createElement(Ceremonial, {
    tone: "bunker",
    style: {
      margin: '14px 0 6px',
      fontSize: '1.05rem'
    }
  }, "The Party Fore Good."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--fairway)',
      fontSize: '.92rem',
      marginTop: '10px',
      lineHeight: 1.55
    }
  }, "This section is reserved for our sponsorship partners.", /*#__PURE__*/React.createElement("br", null), "Enter the passcode from your Giving Green contact."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'center',
      marginTop: '28px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(300px,70vw)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    align: "center",
    type: "password",
    placeholder: "PASSCODE",
    value: val,
    onChange: e => {
      setVal(e.target.value);
      setErr(false);
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    as: "button",
    type: "submit"
  }, "Tee Off")), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--flag)',
      fontSize: '.85rem',
      fontWeight: 700,
      letterSpacing: '.06em',
      marginTop: '14px',
      minHeight: '1.2em',
      visibility: err ? 'visible' : 'hidden'
    }
  }, "That's a stroke. Try again."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '34px',
      fontSize: '.72rem',
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: 'var(--fairway)'
    }
  }, "Saturday, October 3, 2026 \xB7 1 to 6 PM \xB7 Soulard")));
}
Object.assign(window, {
  Gate
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sponsor_page/Gate.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sponsor_page/sponsorData.js
try { (() => {
window.TGG_SPONSOR = {
  tiers: [{
    accent: 'flag',
    label: 'Official Category Partner',
    price: '$10,000',
    availability: '2 Available',
    benefits: ['Exclusive naming rights: "The Official [Category] of The Giving Green"', 'Two sponsored holes, your signature drink at each', 'Back-of-scorecard logo beside the Title Partner', 'Incorporation into the official drink menu', 'Activation space at both holes', '10 complimentary team tickets']
  }, {
    accent: 'bunker',
    label: 'Signature Hole Sponsor',
    price: '$7,500',
    availability: '2 Available',
    benefits: ['One sponsored hole, your product as the signature drink', "The hole's mini-game named after your brand", 'Scorecard hole line plus back-of-card logo', 'On-premise activation at your hole', '6 complimentary team tickets']
  }, {
    accent: 'fairway',
    label: 'Hole Sponsor',
    price: '$5,000',
    availability: '2 Available',
    benefits: ['One sponsored hole, your product as the signature drink', 'Hole banner on premise', 'Scorecard hole line, in hand for 5+ hours', '4 complimentary team tickets']
  }],
  stats: [{
    value: '$20,634',
    label: 'raised for our nine charity partners'
  }, {
    value: '1.5M+',
    label: 'social impressions'
  }, {
    value: '100%',
    label: 'beverage sell-through at every hole'
  }, {
    value: '5+ HRS',
    label: 'sustained brand exposure on the scorecard'
  }],
  inPlay: [{
    image: 'product/drink.png',
    title: 'Your Signature Drink',
    copy: "The hole's official drink, worth minus two strokes. Attendees seek it out because the game rewards it."
  }, {
    image: 'product/scorecard-front.png',
    title: 'Your Brand on the Scorecard',
    copy: 'Held in hand for 5+ hours. The longest sustained brand exposure of the day.'
  }, {
    image: 'photos/game.webp',
    title: 'Your Activation, On Premise',
    copy: 'Banners and a themed hole challenge at your bar, built around your product.',
    duo: true
  }, {
    image: 'product/shirts.png',
    title: 'Your Logo in Market',
    copy: 'Placement across shirts and TGG merchandise, worn well past October 3.'
  }],
  why: [{
    title: 'Built Into the Game',
    copy: "Attendees lower their score by ordering the hole's official drink. Your product isn't sitting on a sampling table waiting to be noticed. It gives them a reason to order it."
  }, {
    title: 'Five Hours in Their Hands',
    copy: 'The scorecard stays with every attendee throughout the event, keeping your brand in front of them from the first hole to the final score.'
  }, {
    title: 'Year One Proved It',
    copy: "Every sponsored beverage sold through in Year One. We're not guessing whether the concept works. We've already seen it work."
  }, {
    title: 'Real Money for Local Charities',
    copy: 'Nine local charities. Every ticket supports the charity selected at checkout, and turnout determines how the money is divided.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sponsor_page/sponsorData.js", error: String((e && e.message) || e) }); }

__ds_ns.AccentBand = __ds_scope.AccentBand;

__ds_ns.DuotoneImage = __ds_scope.DuotoneImage;

__ds_ns.DuotoneDefs = __ds_scope.DuotoneDefs;

__ds_ns.Mark = __ds_scope.Mark;

__ds_ns.PhotoStrip = __ds_scope.PhotoStrip;

__ds_ns.Stamp = __ds_scope.Stamp;

__ds_ns.StampDot = __ds_scope.StampDot;

__ds_ns.Ticker = __ds_scope.Ticker;

__ds_ns.ProductBand = __ds_scope.ProductBand;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.TeamCard = __ds_scope.TeamCard;

__ds_ns.TicketCard = __ds_scope.TicketCard;

__ds_ns.TierCard = __ds_scope.TierCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Ceremonial = __ds_scope.Ceremonial;

__ds_ns.EmailForm = __ds_scope.EmailForm;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHead = __ds_scope.SectionHead;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.CourseStack = __ds_scope.CourseStack;

__ds_ns.Scorecard = __ds_scope.Scorecard;

})();
