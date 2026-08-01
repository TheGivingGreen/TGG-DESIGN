const { Mark, Button, Stamp, StampDot, Ceremonial, DuotoneDefs } = window.TheGivingGreenDesignSystem_038bf7;

function HeroSection({ base, data, onTickets }) {
  return (
    <header style={{ position: 'relative', background: 'var(--forest)', color: 'var(--cream)', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DuotoneDefs />
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img src={base + '/assets/images/photos/hero.webp'} alt="The Giving Green Year One crowd in Soulard"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', filter: 'url(#tgg-duotone)', opacity: .55 }} />
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(20,40,34,.45) 0%,rgba(20,40,34,.10) 35%,rgba(20,40,34,.75) 100%)' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, padding: '130px clamp(20px,4vw,48px) 0', maxWidth: '900px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <p style={{ color: 'var(--bunker)', fontSize: 'var(--fs-label)', fontWeight: 700, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', marginBottom: '18px' }}>Second Annual &middot; Soulard, St. Louis</p>
        <h1 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', lineHeight: .88, letterSpacing: '.01em', fontSize: 'clamp(44px,9.5vw,148px)', margin: '0 0 18px', color: 'var(--cream)' }}>
          The 2<HeartZero base={base} />26 Main Event
        </h1>
        <Ceremonial tone="cream" size="lg" style={{ marginBottom: '18px' }}>The Party Fore Good.</Ceremonial>
        <Stamp onDark style={{ marginBottom: '24px' }}>
          <span>{data.event.date}</span><StampDot /><span>{data.event.time}</span><StampDot /><span>{data.event.place}</span>
        </Stamp>
        <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', color: 'var(--cream-82)', maxWidth: '58ch', lineHeight: 1.65, marginBottom: '32px', fontWeight: 300 }}>
          Nine bars become nine holes. Last year, you turned Soulard into a golf course and raised <strong style={{ color: 'var(--cream)', fontWeight: 600 }}>$20,634</strong> for nine local charities. That's the number on the leaderboard. This October, we're smashing it. Together.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: '56px' }}>
          <Button variant="primary" onClick={onTickets}>Get on the Tee Sheet</Button>
          <Button variant="ghostOnDark" href="#good">Meet the Charities</Button>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, width: '100%', background: 'var(--scrim-forest-85)', backdropFilter: 'blur(8px)', borderTop: '1px solid var(--line-on-dark)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '0 clamp(20px,4vw,48px)' }}>
        {[['Holes', 'Nine Bars'], ['Charities', 'Nine Teams'], ['Ticket', data.event.price], ['To the Cause', data.event.give + ' of every ticket']].map(([lab, val], i) => (
          <div key={lab} style={{ padding: '20px 0', borderRight: i === 3 ? 'none' : '1px solid var(--line-on-dark-soft)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: 'var(--fs-label-sm)', fontWeight: 700, letterSpacing: 'var(--ls-label)', textTransform: 'uppercase', color: 'var(--bunker)' }}>{lab}</span>
            <span style={{ fontFamily: 'var(--font-impact)', textTransform: 'uppercase', fontSize: 'clamp(18px,2.5vw,28px)', color: 'var(--cream)' }}>{val}</span>
          </div>
        ))}
      </div>
    </header>
  );
}

/** The mark standing in for the zero in 2026, exactly as the live site sets it. */
function HeartZero({ base }) {
  return <img src={base + '/assets/images/logos/logo-heart-flag.svg'} alt="0" style={{ height: '1em', width: 'auto', display: 'inline-block', verticalAlign: 'baseline', transform: 'translateY(.037em)', margin: '0 .015em' }} />;
}

Object.assign(window, { HeroSection, HeartZero });
