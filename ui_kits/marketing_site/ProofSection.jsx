const { SectionHead, PhotoStrip } = window.TheGivingGreenDesignSystem_038bf7;

function ProofSection({ base }) {
  return (
    <section id="proof" style={{ background: 'var(--forest)', color: 'var(--cream)', padding: 'var(--section-y) var(--section-x) 0' }}>
      <div style={{ maxWidth: 'var(--w-wide)', margin: '0 auto' }}>
        <SectionHead onDark eyebrow="04 &middot; The Proof" title={<>Year One,<br />In the Books.</>} style={{ marginBottom: '24px' }} />
        <p style={{ maxWidth: '62ch', fontSize: 'var(--fs-lead)', lineHeight: 1.75, color: 'var(--cream-82)', margin: '0 0 48px' }}>
          Last year, St. Louisans packed nine bars in Soulard for our first Charity Pub Golf Crawl. When the scorecards were tallied: <strong style={{ color: 'var(--bunker)' }}>$20,634 raised</strong> for our nine charity partners, <strong style={{ color: 'var(--bunker)' }}>1.5M+ social impressions</strong>, <strong style={{ color: 'var(--bunker)' }}>100% sell-through</strong> on every sponsored drink. Not bad for year one. See you October 3.
        </p>
      </div>
      <PhotoStrip height="clamp(220px,26vw,340px)" style={{ marginLeft: 'calc(var(--section-x) * -1)', marginRight: 'calc(var(--section-x) * -1)' }}
        photos={[
          { src: base + '/assets/images/photos/strip1.webp', alt: 'Year One crowd at a Soulard bar' },
          { src: base + '/assets/images/photos/strip2.webp', alt: 'Attendees in matching team shirts' },
          { src: base + '/assets/images/photos/strip3.webp', alt: "Group outside Ray's Sportshouse" }
        ]} />
    </section>
  );
}
Object.assign(window, { ProofSection });
