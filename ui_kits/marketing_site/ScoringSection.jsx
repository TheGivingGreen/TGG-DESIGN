const { SectionHead, Scorecard, DuotoneImage } = window.TheGivingGreenDesignSystem_038bf7;

function ScoringSection({ base, data }) {
  return (
    <section id="how" style={{ padding: 'var(--section-y) var(--section-x)' }}>
      <div style={{ maxWidth: 'var(--w-narrow)', margin: '0 auto' }}>
        <SectionHead eyebrow="02 &middot; How to Play"
          title={<>Compete Against<br />Your Friends.</>}
          subline="Just like real golf, the lowest score wins." />
        <Scorecard rows={data.scoring} />
        <DuotoneImage src={base + '/assets/images/photos/game.webp'} alt="Attendee playing a golf mini-game at a hole"
          style={{ marginTop: '32px', border: '2px solid var(--forest)', maxHeight: '360px' }} ratio="16/7" />
      </div>
    </section>
  );
}
Object.assign(window, { ScoringSection });
