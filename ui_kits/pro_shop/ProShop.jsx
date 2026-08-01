const { NavBar, SiteFooter, ProductBand, Badge, Ceremonial, Mark } = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';

const PRO_SHOP_NAV = [
  { label: 'The Crawl', href: '../marketing_site/index.html#course' },
  { label: 'Charities', href: '../marketing_site/index.html#good' },
  { label: 'Year One', href: '../marketing_site/index.html#proof' },
  { label: 'Pro Shop', href: '#' },
  { label: 'Sponsor Us', href: '../sponsor_page/index.html' },
  { label: 'FAQ', href: '../marketing_site/index.html#faq' }
];

function ProShop() {
  const hats = window.TGG_HATS;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <NavBar links={PRO_SHOP_NAV} activeHref="#" scrolled={scrolled} base={BASE} cta="Get Tickets"
        ctaHref="../marketing_site/index.html" style={{ position: 'fixed' }} />
      <ProShopHero />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', background: 'var(--sand-deep)', borderBottom: '1px solid var(--line)', padding: '16px 24px', textAlign: 'center', flexWrap: 'wrap' }}>
        <Badge tone="flag" shape="pill">Merch &middot; Fore Good</Badge>
        <span style={{ fontSize: 'var(--fs-caption)', color: '#3A4A40' }}>
          Your team shirt is the ticket. These caps are Pro Shop retail, with a per-cap donation split evenly across all nine charity partners.
        </span>
      </div>
      {hats.map((h, i) => (
        <ProductBand key={h.sku} image={BASE + '/assets/images/hats/' + h.image} name={h.name} blurb={h.blurb}
          spec={h.spec} price={h.price} sku={h.sku} cta="Shop Now" ctaHref={h.href}
          onDark={i % 2 === 1} reverse={i % 2 === 1} />
      ))}
      <section style={{ background: 'var(--shadow-ink)', color: 'var(--cream)', textAlign: 'center', padding: 'clamp(50px,7vw,86px) clamp(24px,4vw,48px)' }}>
        <Ceremonial tone="cream" size="lg" style={{ maxWidth: '24ch', margin: '0 auto' }}>
          Nine bars. Nine charities. One cap that keeps telling the story.
        </Ceremonial>
        <p style={{ color: 'var(--bunker)', marginTop: '20px', fontSize: 'var(--fs-label)', fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase' }}>
          Limited Edition &middot; Event Exclusive
        </p>
      </section>
      <SiteFooter base={BASE} creed="The Giving Green" ceremonial="Party Fore a Great Cause."
        columns={[[{ label: 'Back to the Crawl', href: '../marketing_site/index.html' }, { label: 'admin@thegivinggreen.org', href: 'mailto:admin@thegivinggreen.org' }]]} />
    </>
  );
}

function ProShopHero() {
  return (
    <header style={{ background: 'var(--forest)', color: 'var(--cream)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '92vh' }}>
      <div style={{ padding: 'clamp(110px,16vh,170px) clamp(24px,4vw,64px) clamp(48px,8vh,90px)', maxWidth: '1400px', width: '100%' }}>
        <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'var(--bunker)', marginBottom: '18px' }}>
          The Pro Shop &middot; Headwear &middot; Limited
        </div>
        <h1 style={{ fontFamily: 'var(--font-impact)', textTransform: 'uppercase', lineHeight: .94, letterSpacing: '.01em', fontSize: 'clamp(52px,11vw,148px)', fontWeight: 400, margin: 0 }}>
          The 2<HeartZero />26<br />Main Event<br />Hat Collection
        </h1>
        <p style={{ fontFamily: 'var(--font-impact)', textTransform: 'uppercase', letterSpacing: '.02em', fontSize: 'clamp(14px,2.2vw,32px)', marginTop: '22px', color: 'var(--bunker)', lineHeight: 1.15 }}>
          Limited Edition &middot; Event Exclusive &middot; October 3, Soulard
        </p>
      </div>
    </header>
  );
}

function HeartZero() {
  return <img src={BASE + '/assets/images/logos/logo-heart-flag.svg'} alt="0"
    style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'baseline', transform: 'translateY(.037em)', margin: '0 .015em' }} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<ProShop />);
