const { Mark, Eyebrow, Ceremonial, Stamp, StampDot, Scorecard, CourseStack, StatCard, StatGrid,
        TierCard, Button, DuotoneDefs, AccentBand } = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '..';

/* Every slide is 1280x720. Sections are numbered, exactly as the sponsor deck numbers them. */
function Slide({ tone = 'forest', children, pad = 72, style }) {
  const bg = { forest: 'var(--forest)', ink: 'var(--shadow-ink)', sand: 'var(--sand)', sandDeep: 'var(--sand-deep)', flag: 'var(--flag)' }[tone];
  const dark = tone === 'forest' || tone === 'ink' || tone === 'flag';
  return (
    <div style={{
      width: '1280px', height: '720px', background: bg, color: dark ? 'var(--cream)' : 'var(--forest)',
      padding: pad + 'px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden',
      fontFamily: 'var(--font-body)', display: 'flex', flexDirection: 'column', ...style
    }}>
      <DuotoneDefs />
      {children}
    </div>
  );
}

function SlideTitle({ children, size = 84, color }) {
  return <h1 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase',
    fontSize: size + 'px', lineHeight: .92, letterSpacing: '.01em', margin: 0, color }}>{children}</h1>;
}

function SlideFoot({ onDark = true, left, right = 'Fore Good.' }) {
  return (
    <div style={{ marginTop: 'auto', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid ' + (onDark ? 'var(--line-on-dark-soft)' : 'var(--line)') }}>
      <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--bunker)' }}>{left}</span>
      <Ceremonial tone="bunker" size="sm">{right}</Ceremonial>
    </div>
  );
}

/* ---------- 1. Title ---------- */
function TitleSlide() {
  return (
    <Slide tone="ink" pad={0} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={BASE + '/assets/images/photos/hero.webp'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#tgg-duotone)', opacity: .42 }} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(20,40,34,.55),rgba(20,40,34,.78))' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '0 80px' }}>
        <Mark variant="cream" size={72} base={BASE} style={{ display: 'flex', justifyContent: 'center', marginBottom: '26px' }} />
        <Eyebrow style={{ justifyContent: 'center', letterSpacing: 'var(--ls-kicker)' }}>&middot;&middot; Sponsorship &middot; 2026 &middot;&middot;</Eyebrow>
        <SlideTitle size={104} color="var(--cream)">Sponsor the 2026<br />Main Event.</SlideTitle>
        <Ceremonial tone="bunker" size="lg" style={{ marginTop: '18px' }}>The Party Fore Good.</Ceremonial>
        <div style={{ marginTop: '30px' }}>
          <Stamp onDark><span>Saturday, October 3, 2026</span><StampDot /><span>1 to 6 PM</span><StampDot /><span>Soulard</span></Stamp>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 2. Statement ---------- */
function StatementSlide() {
  return (
    <Slide tone="forest">
      <Eyebrow>01 &middot; The Concept &middot; Soulard</Eyebrow>
      <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>
        <SlideTitle size={120} color="var(--cream)">9 Holes.<br />9 Drinks.<br /><span style={{ color: 'var(--flag)' }}>9 Charities.</span></SlideTitle>
        <Ceremonial tone="bunker" size="lg" style={{ marginTop: '22px' }}>We turn 9 of our favorite local bars into 9 holes of pub golf.</Ceremonial>
      </div>
      <SlideFoot left="The Giving Green &middot; 2026" />
    </Slide>
  );
}

/* ---------- 3. Proof / stats ---------- */
function ProofSlide() {
  return (
    <Slide tone="ink">
      <Eyebrow>02 &middot; The Proof</Eyebrow>
      <SlideTitle size={76} color="var(--cream)" >Year One,<br />In the Books.</SlideTitle>
      <p style={{ maxWidth: '68ch', fontSize: '18px', lineHeight: 1.7, color: 'var(--cream-90)', marginTop: '20px' }}>
        Thousands of St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied, the numbers spoke for themselves.
      </p>
      <StatGrid style={{ marginTop: '32px' }}>
        <StatCard value="$20,634" label="raised for our nine charity partners" />
        <StatCard value="1.5M+" label="social impressions" />
        <StatCard value="100%" label="beverage sell-through at every hole" />
        <StatCard value="5+ HRS" label="sustained brand exposure on the scorecard" />
      </StatGrid>
      <SlideFoot left="02 &middot; The Proof" />
    </Slide>
  );
}

/* ---------- 4. Course, two column ---------- */
function CourseSlide() {
  return (
    <Slide tone="sand">
      <Eyebrow tone="fairway">03 &middot; The Course &middot; Soulard</Eyebrow>
      <SlideTitle size={72}>The Course.</SlideTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '44px', marginTop: '28px', alignItems: 'start' }}>
        <CourseStack onDark={false} holes={[
          { hole: '01', venue: 'Social Bar & Grill' }, { hole: '02', venue: "Ray's Sportshouse" },
          { hole: '03', venue: "Duke's" }, { hole: '04', venue: 'The Great Grizzly Bear' },
          { hole: '05', venue: "Molly's in Soulard" }, { hole: '06', venue: "Jack Nolen's" }]} />
        <div>
          <img src={BASE + '/assets/images/photos/strip3.webp'} alt="The course through Soulard"
            style={{ width: '100%', height: '240px', objectFit: 'cover', filter: 'url(#tgg-duotone)' }} />
          <div style={{ background: 'var(--flag)', color: 'var(--cream)', padding: '22px 24px', fontWeight: 700,
            fontSize: '15px', letterSpacing: '.05em', textTransform: 'uppercase', lineHeight: 1.5, marginTop: '14px' }}>
            Every hole is a sponsored hole. Nine bars, nine signature drinks, nine brands in play.
          </div>
        </div>
      </div>
      <SlideFoot onDark={false} left="03 &middot; The Course" />
    </Slide>
  );
}

/* ---------- 5. Scorecard ---------- */
function ScorecardSlide() {
  return (
    <Slide tone="sandDeep">
      <div style={{ textAlign: 'center' }}>
        <Eyebrow tone="fairway" style={{ justifyContent: 'center' }}>04 &middot; How to Play</Eyebrow>
        <SlideTitle size={80}>Lowest Score <span style={{ color: 'var(--flag)' }}>Wins.</span></SlideTitle>
        <Ceremonial tone="forest" style={{ marginTop: '14px' }}>Every stop gives attendees a chance to take strokes off their score.</Ceremonial>
      </div>
      <Scorecard style={{ maxWidth: '760px', margin: '30px auto 0' }} rows={[
        { label: 'Skip a bar entirely', strokes: '+2', tone: 'penalty' },
        { label: 'Visit a bar', strokes: '+0' },
        { label: 'Order any drink', note: 'mocktails count too', strokes: '\u22121', tone: 'good' },
        { label: 'Play a sponsored mini-game or challenge', strokes: '\u22121', tone: 'good' },
        { label: "Order the hole's official sponsored drink", strokes: '\u22122', tone: 'best' }]} />
      <SlideFoot onDark={false} left="100% sell-through in Year One" />
    </Slide>
  );
}

/* ---------- 6. Tiers ---------- */
function TiersSlide() {
  return (
    <Slide tone="ink">
      <Eyebrow>06 &middot; Sponsorship Tiers</Eyebrow>
      <SlideTitle size={72} color="var(--cream)">Six Holes for Sale.</SlideTitle>
      <Ceremonial tone="bunker" style={{ marginTop: '12px' }}>Nine holes on the course. The Title Partner's three brands take three. The rest is yours.</Ceremonial>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginTop: '26px' }}>
        <TierCard accent="flag" label="Official Category Partner" price="$10,000" availability="2 Available"
          benefits={['Exclusive category naming rights', 'Two sponsored holes', 'Back-of-scorecard logo', '10 team tickets']} />
        <TierCard accent="bunker" label="Signature Hole Sponsor" price="$7,500" availability="2 Available"
          benefits={['One sponsored hole', 'Mini-game named after your brand', 'Scorecard hole line', '6 team tickets']} />
        <TierCard accent="fairway" label="Hole Sponsor" price="$5,000" availability="2 Available"
          benefits={['One sponsored hole', 'Hole banner on premise', 'Scorecard hole line', '4 team tickets']} />
      </div>
      <SlideFoot left="Title Partnership &middot; $15,000 &middot; by private conversation" />
    </Slide>
  );
}

/* ---------- 7. Photo statement ---------- */
function PhotoSlide() {
  return (
    <Slide tone="ink" pad={0} style={{ justifyContent: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={BASE + '/assets/images/photos/strip2.webp'} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'url(#tgg-duotone)' }} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(20,40,34,.15) 40%,rgba(20,40,34,.86) 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '72px' }}>
        <Eyebrow rule>05 &middot; Your Brand In Play</Eyebrow>
        <SlideTitle size={80} color="var(--cream)">Your Product Becomes<br /><span style={{ color: 'var(--flag)' }}>Part of the Game.</span></SlideTitle>
        <p style={{ maxWidth: '56ch', fontSize: '18px', lineHeight: 1.65, color: 'var(--cream-90)', marginTop: '18px' }}>
          Not a logo on a banner nobody reads. A mechanic attendees actively play through, nine times in five hours.
        </p>
      </div>
    </Slide>
  );
}

/* ---------- 8. Close ---------- */
function CloseSlide() {
  return (
    <Slide tone="forest" style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Eyebrow style={{ justifyContent: 'center', letterSpacing: 'var(--ls-kicker)' }}>&middot;&middot; Sponsorship &middot; 2026 &middot;&middot;</Eyebrow>
      <SlideTitle size={110} color="var(--cream)">Let's Build<br />Your Hole.</SlideTitle>
      <Ceremonial tone="bunker" size="lg" style={{ marginTop: '18px' }}>Party Fore a Great Cause.</Ceremonial>
      <div style={{ marginTop: '32px', display: 'flex', gap: '14px', justifyContent: 'center' }}>
        <Button variant="primary" size="lg" href="mailto:ozzie@thegivinggreen.org">ozzie@thegivinggreen.org</Button>
        <Button variant="ghostOnDark" size="lg" href="#">Download the Deck</Button>
      </div>
      <p style={{ marginTop: '26px', color: 'var(--cream-60)', fontSize: '15px', lineHeight: 1.7 }}>
        Ozzie Salcedo, Co-Founder &amp; Marketing Director &middot; thegivinggreen.org<br />
        Saturday, October 3, 2026 &middot; 1 to 6 PM &middot; Soulard
      </p>
    </Slide>
  );
}

Object.assign(window, { Slide, SlideTitle, SlideFoot, TitleSlide, StatementSlide, ProofSlide, CourseSlide, ScorecardSlide, TiersSlide, PhotoSlide, CloseSlide });
