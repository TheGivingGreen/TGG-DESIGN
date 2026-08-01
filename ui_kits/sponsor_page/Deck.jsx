const { SectionHead, Eyebrow, Ceremonial, Button, Stamp, Scorecard, CourseStack, StatCard, StatGrid,
        TierCard, PhotoStrip, DuotoneImage, DuotoneDefs, AccentBand, Mark } = window.TheGivingGreenDesignSystem_038bf7;

function Deck({ base }) {
  const d = window.TGG_SPONSOR;
  const holes = window.TGG_DATA_HOLES;
  return (
    <div>
      <DuotoneDefs />
      <DeckHero base={base} />

      <Section tone="forest">
        <SectionHead onDark eyebrow="01 &middot; The Concept &middot; Soulard"
          title={<>9 Holes. 9 Drinks.<br /><span style={{ color: 'var(--flag)' }}>9 Charities.</span></>}
          subline="We turn 9 of our favorite local bars into 9 holes of pub golf." />
        <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: '44px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--cream-90)', margin: 0 }}>
              Attendees crawl hole to hole with a scorecard in hand. Visit a hole, participate in a branded minigame and order a sponsored drink, knock strokes off your score. Last year that formula sold through 100% of every sponsored drink on the course.
            </p>
            <Ceremonial tone="bunker" style={{ marginTop: '26px', fontSize: '1.15rem', lineHeight: 1.5 }}>
              "It was like clockwork. They got off the shuttle, ordered the drink, played the minigame, and took off." Donald Keener, D's Place
            </Ceremonial>
          </div>
          <DuotoneImage src={base + '/assets/images/photos/strip2.webp'} alt="Attendees at a Giving Green bar" ratio="4/5" />
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead onDark eyebrow="02 &middot; The Proof" title={<>Year One,<br />In the Books.</>} style={{ marginBottom: '24px' }} />
        <p style={{ maxWidth: '720px', fontSize: '1rem', lineHeight: 1.7, color: 'var(--cream-90)' }}>
          Thousands of St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied: <b style={{ color: 'var(--bunker)' }}>$20,634 raised</b> for our nine charity partners, <b style={{ color: 'var(--bunker)' }}>1.5M+ social impressions</b>, <b style={{ color: 'var(--bunker)' }}>100% sell-through</b> on every sponsored drink. Not bad for year one. See you October 3.
        </p>
        <StatGrid style={{ marginTop: '38px' }}>
          {d.stats.map((s) => <StatCard key={s.value} value={s.value} label={s.label} />)}
        </StatGrid>
        <PhotoStrip height="220px" style={{ marginTop: '44px' }} photos={[
          { src: base + '/assets/images/photos/strip1.webp', alt: 'Year One crowd' },
          { src: base + '/assets/images/photos/strip3.webp', alt: 'Year One in Soulard' },
          { src: base + '/assets/images/photos/game.webp', alt: 'Year One mini-game' }]} />
      </Section>

      <Section tone="sand">
        <SectionHead eyebrow="03 &middot; The Course &middot; Soulard" title="The Course." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', alignItems: 'start' }}>
          <div>
            <CourseStack onDark={false} holes={holes} />
            <Ceremonial tone="forest" size="sm" style={{ marginTop: '18px' }}>
              <b>2026 course in final review.</b> Full lineup ships with ticket launch.
            </Ceremonial>
          </div>
          <div>
            <DuotoneImage src={base + '/assets/images/photos/strip3.webp'} alt="The course through Soulard" ratio="4/3" />
            <div style={{ background: 'var(--flag)', color: 'var(--cream)', padding: '24px 26px', fontWeight: 700, fontSize: '.92rem', letterSpacing: '.05em', textTransform: 'uppercase', lineHeight: 1.5, marginTop: '14px' }}>
              Every hole is a sponsored hole. Nine bars, nine signature drinks, nine brands in play.
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sandDeep">
        <SectionHead align="center" eyebrow="04 &middot; How to Play"
          title={<>Lowest Score<br /><span style={{ color: 'var(--flag)' }}>Wins.</span></>}
          subline="Every stop gives attendees a chance to take strokes off their score." />
        <Scorecard header={null} style={{ maxWidth: '720px', margin: '0 auto' }}
          rows={window.TGG_DATA_SCORING}
          footer={{ label: "Order the hole's official sponsored drink", strokes: '\u22122' }} />
        <p style={{ maxWidth: '720px', margin: '26px auto 0', textAlign: 'center', fontSize: '1rem', lineHeight: 1.65, color: 'var(--text-body)' }}>
          Ordering the hole's official sponsored drink is worth minus two strokes, making it the best move on the card at every hole. <b style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, fontSize: '1.15rem', letterSpacing: '.02em' }}>100% sell-through in Year One.</b>
        </p>
      </Section>

      <Section tone="sand">
        <SectionHead eyebrow="05 &middot; Your Brand In Play"
          title={<>Your Product Becomes<br /><span style={{ color: 'var(--flag)' }}>Part of the Game.</span></>}
          subline="Not a logo on a banner nobody reads. A mechanic attendees actively play through." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {d.inPlay.map((v, i) => (
            <div key={v.title} style={{
              display: 'flex', gap: '22px', alignItems: 'center', padding: '34px 26px',
              borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
              borderLeft: i % 2 === 1 ? '1px solid var(--line)' : 'none'
            }}>
              <img src={base + '/assets/images/' + v.image} alt="" style={{ width: '38%', maxHeight: '200px', objectFit: 'contain', filter: v.duo ? 'url(#tgg-duotone)' : 'none' }} />
              <div>
                <h3 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, fontSize: '1.05rem', letterSpacing: '.03em', textTransform: 'uppercase', margin: 0, color: 'var(--forest)' }}>{v.title}</h3>
                <p style={{ fontSize: '.9rem', lineHeight: 1.55, marginTop: '8px', color: 'var(--text-body)' }}>{v.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHead onDark eyebrow="06 &middot; Sponsorship Tiers" title="Six Holes for Sale."
          subline="Nine holes on the course. The Title Partner's three brands take three. The rest is yours." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '16px' }}>
          {d.tiers.map((t) => <TierCard key={t.label} {...t} />)}
        </div>
        <p style={{ marginTop: '30px', fontSize: '.9rem', lineHeight: 1.6, color: 'var(--sand)' }}>
          One category per partner, confirmed against the Title Partner's brand portfolio at signing. <b style={{ color: 'var(--bunker)' }}>Title Partnership ($15,000, one available) is offered by private conversation.</b>
        </p>
      </Section>

      <Section tone="sand">
        <SectionHead align="center" eyebrow="07 &middot; Scorecard Features"
          title={<>The Scorecard,<br /><span style={{ color: 'var(--flag)' }}>Sponsor's View.</span></>} />
        <p style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-body)' }}>
          Every attendee carries a physical and digital scorecard for the full five hours. It is the single most-handled object at the event: checked at every hole, photographed for the leaderboard, kept as the souvenir.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '34px', maxWidth: '760px', margin: '44px auto 0', alignItems: 'start' }}>
          {[['scorecard-front.png', 'FRONT \u00B7 nine sponsor lines, one per hole'], ['scorecard-back.png', "BACK \u00B7 the Title Partner's real estate"]].map(([img, cap]) => (
            <figure key={img} style={{ textAlign: 'center', margin: 0 }}>
              <img src={base + '/assets/images/product/' + img} alt={cap} style={{ border: '1px solid var(--line)', margin: '0 auto' }} />
              <Ceremonial as="figcaption" tone="forest" size="sm" style={{ marginTop: '14px' }}>{cap}</Ceremonial>
            </figure>
          ))}
        </div>
        <p style={{ maxWidth: '640px', margin: '44px auto 0', textAlign: 'center', fontFamily: 'var(--font-impact)', fontSize: '1.4rem', letterSpacing: '.02em', textTransform: 'uppercase', color: 'var(--forest)' }}>
          Nine hole lines. One back panel. That's the inventory.
        </p>
      </Section>

      <Section tone="sandDeep">
        <SectionHead eyebrow="08 &middot; Why The Giving Green"
          title={<>Your Brand Isn't Just on a Banner.<br /><span style={{ color: 'var(--flag)' }}>It Becomes Part of the Event.</span></>} size="h2" />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '34px 44px' }}>
          {d.why.map((w) => (
            <div key={w.title}>
              <h3 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, fontSize: '1.1rem', letterSpacing: '.03em', textTransform: 'uppercase', margin: 0, color: 'var(--forest)' }}>{w.title}</h3>
              <p style={{ fontSize: '.95rem', lineHeight: 1.6, marginTop: '10px', color: 'var(--text-body)' }}>{w.copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <AccentBand>Help Us Raise More. We'll Help You Sell More.</AccentBand>

      <section style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '110px 20px', background: 'var(--shadow-ink)' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src={base + '/assets/images/photos/strip1.webp'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#tgg-duotone)', opacity: .38 }} />
          <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(20,40,34,.6),rgba(20,40,34,.78))' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Eyebrow style={{ justifyContent: 'center' }}>&middot;&middot; Sponsorship &middot; 2026 &middot;&middot;</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(2.4rem,7vw,4.4rem)', lineHeight: .96, margin: '14px 0 0', color: 'var(--cream)' }}>Let's Build Your Hole.</h2>
          <Ceremonial tone="bunker" style={{ marginTop: '14px', fontSize: '1.15rem' }}>Party Fore a Great Cause.</Ceremonial>
          <div style={{ marginTop: '34px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="mailto:ozzie@thegivinggreen.org">ozzie@thegivinggreen.org</Button>
            <Button variant="ghostOnDark" size="lg" href="#">Download the Deck</Button>
          </div>
          <p style={{ marginTop: '26px', color: 'var(--fairway)', fontSize: '.95rem', lineHeight: 1.7 }}>
            Ozzie Salcedo, Co-Founder &amp; Marketing Director &middot; 646-533-2144 &middot; thegivinggreen.org<br />
            Saturday, October 3, 2026 &middot; 1 to 6 PM &middot; Soulard
          </p>
        </div>
      </section>

      <footer style={{ background: 'var(--forest)', textAlign: 'center', padding: '36px 20px' }}>
        <div style={{ fontFamily: 'var(--font-impact)', fontSize: '1.5rem', letterSpacing: '.04em', color: 'var(--cream)', textTransform: 'uppercase' }}>The Giving Green 2026</div>
        <Ceremonial tone="bunker" style={{ marginTop: '8px', fontSize: '.95rem' }}>Party Fore a Great Cause.</Ceremonial>
      </footer>
    </div>
  );
}

const SECTION_BG = { forest: 'var(--forest)', ink: 'var(--shadow-ink)', sand: 'var(--sand)', sandDeep: 'var(--sand-deep)' };

function Section({ tone, children }) {
  const dark = tone === 'forest' || tone === 'ink';
  return (
    <section style={{ background: SECTION_BG[tone], color: dark ? 'var(--cream)' : 'var(--forest)', padding: '84px 0' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '0 24px' }}>{children}</div>
    </section>
  );
}

function DeckHero({ base }) {
  return (
    <header style={{ position: 'relative', textAlign: 'center', padding: '110px 20px 96px', overflow: 'hidden', background: 'var(--shadow-ink)' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={base + '/assets/images/photos/hero.webp'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#tgg-duotone)', opacity: .42 }} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(20,40,34,.55),rgba(20,40,34,.75))' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Eyebrow style={{ justifyContent: 'center' }}>&middot;&middot; Sponsorship &middot; 2026 &middot;&middot;</Eyebrow>
        <h1 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(2.7rem,7.6vw,5.2rem)', marginTop: '18px', lineHeight: .92, color: 'var(--cream)' }}>
          Sponsor the 2026<br />Main Event.
        </h1>
        <Ceremonial tone="bunker" style={{ fontSize: '1.25rem', marginTop: '16px' }}>The Party Fore Good.</Ceremonial>
        <div style={{ marginTop: '26px' }}><Stamp onDark size="sm">Saturday, October 3, 2026 &nbsp;|&nbsp; 1 to 6 PM &nbsp;|&nbsp; Soulard</Stamp></div>
        <div style={{ marginTop: '30px', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" href="#">Download the Deck</Button>
          <Button variant="ghostOnDark" size="lg" href="mailto:ozzie@thegivinggreen.org">Talk to Ozzie</Button>
        </div>
      </div>
    </header>
  );
}

Object.assign(window, { Deck });
