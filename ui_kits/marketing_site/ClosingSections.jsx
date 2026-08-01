const { SectionHead, FaqList, EmailForm } = window.TheGivingGreenDesignSystem_038bf7;

function FaqSection({ data }) {
  return (
    <section id="faq" style={{ padding: 'var(--section-y) var(--section-x)' }}>
      <div style={{ maxWidth: 'var(--w-prose)', margin: '0 auto' }}>
        <SectionHead eyebrow="Got Questions" title="FAQs" subline="Everything you need to know before you tee off." />
        <FaqList items={data.faqs} />
      </div>
    </section>
  );
}

function CaptureSection({ onSubmit, sent }) {
  return (
    <section id="notify" style={{ background: 'var(--flag)', color: 'var(--cream)', padding: 'clamp(72px,10vh,110px) var(--section-x)', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(40px,7vw,88px)', lineHeight: .92, margin: '0 0 16px' }}>Get On<br />the Card</h2>
      <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', opacity: .9, marginBottom: '32px', lineHeight: 1.6, maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto' }}>
        Be first on the tee sheet. Early access, course updates, and everything you need before October 3.
      </p>
      <EmailForm onSubmit={onSubmit} />
      <p style={{ minHeight: '20px', marginTop: '12px', fontSize: 'var(--fs-caption)', fontWeight: 600 }}>{sent ? "You're on the card. Watch your inbox." : ''}</p>
      <p style={{ marginTop: '12px', fontSize: 'var(--fs-fine)', opacity: .5, letterSpacing: '.05em' }}>No spam. One email when tickets drop.</p>
    </section>
  );
}

Object.assign(window, { FaqSection, CaptureSection });
