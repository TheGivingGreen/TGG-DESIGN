const { SectionHead, CourseStack, Button } = window.TheGivingGreenDesignSystem_038bf7;

function CourseSection({ data, onTickets }) {
  return (
    <section id="course" style={{ background: 'var(--forest)', color: 'var(--cream)', padding: 'var(--section-y) var(--section-x)' }}>
      <div style={{ maxWidth: 'var(--w-content)', margin: '0 auto' }}>
        <SectionHead onDark eyebrow="01 &middot; The Course &middot; Soulard"
          title="9 Holes. 9 Drinks. 9 Charities."
          subline="We turn 9 of our favorite local bars into 9 holes of pub golf." />
        <CourseStack holes={data.holes} />
        <div style={{ marginTop: '52px' }}>
          <Button variant="primary" onClick={onTickets}>Get on the Tee Sheet</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { CourseSection });
