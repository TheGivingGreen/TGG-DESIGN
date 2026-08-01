const { Button, Input, Mark, Ceremonial } = window.TheGivingGreenDesignSystem_038bf7;

/** The partners-only passcode gate. Any entry unlocks in this kit. */
function Gate({ onUnlock, base }) {
  const [val, setVal] = React.useState('');
  const [err, setErr] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (val.trim()) onUnlock(); else setErr(true);
  };
  return (
    <section style={{ minHeight: 'calc(100vh - 84px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <form onSubmit={submit} style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        <Mark variant="cream" size={56} base={base} style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }} />
        <span style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: 'var(--ls-kicker)', textTransform: 'uppercase', color: 'var(--bunker)' }}>
          &middot;&middot; Partners Only &middot; Soulard, St. Louis &middot;&middot;
        </span>
        <h1 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', fontSize: 'clamp(2.6rem,7vw,4.2rem)', lineHeight: .96, margin: '10px 0 0', color: 'var(--cream)' }}>Sponsor Us.</h1>
        <Ceremonial tone="bunker" style={{ margin: '14px 0 6px', fontSize: '1.05rem' }}>The Party Fore Good.</Ceremonial>
        <p style={{ color: 'var(--fairway)', fontSize: '.92rem', marginTop: '10px', lineHeight: 1.55 }}>
          This section is reserved for our sponsorship partners.<br />Enter the passcode from your Giving Green contact.
        </p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '28px', flexWrap: 'wrap' }}>
          <div style={{ width: 'min(300px,70vw)' }}>
            <Input onDark align="center" type="password" placeholder="PASSCODE" value={val}
              onChange={(e) => { setVal(e.target.value); setErr(false); }} />
          </div>
          <Button variant="primary" size="lg" as="button" type="submit">Tee Off</Button>
        </div>
        <div style={{ color: 'var(--flag)', fontSize: '.85rem', fontWeight: 700, letterSpacing: '.06em', marginTop: '14px', minHeight: '1.2em', visibility: err ? 'visible' : 'hidden' }}>
          That's a stroke. Try again.
        </div>
        <div style={{ marginTop: '34px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--fairway)' }}>
          Saturday, October 3, 2026 &middot; 1 to 6 PM &middot; Soulard
        </div>
      </form>
    </section>
  );
}
Object.assign(window, { Gate });
