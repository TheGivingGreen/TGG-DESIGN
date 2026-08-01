const { Button, Mark, Ceremonial, Badge } = window.TheGivingGreenDesignSystem_038bf7;

/** Fake checkout drawer so the kit clicks through from CTA to charity choice. */
function TicketDrawer({ open, onClose, base, data, joined, onJoin }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(20,40,34,.6)', display: 'flex', justifyContent: 'flex-end' }}>
      <aside onClick={(e) => e.stopPropagation()} style={{ width: 'min(440px,100%)', height: '100%', background: 'var(--cream)', borderLeft: '2px solid var(--forest)', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Mark size={40} base={base} />
          <button onClick={onClose} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-impact)', fontSize: '24px', color: 'var(--forest)', lineHeight: 1 }}>&times;</button>
        </div>
        <h2 style={{ fontFamily: 'var(--font-impact)', fontWeight: 400, textTransform: 'uppercase', fontSize: '34px', lineHeight: .95, margin: 0, color: 'var(--forest)' }}>The Shirt Is<br />the Ticket.</h2>
        <Ceremonial tone="fairway" size="sm">Pick your team. The color decides the charity.</Ceremonial>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid var(--forest)', borderBottom: '2px solid var(--forest)', padding: '14px 0' }}>
          <span style={{ fontWeight: 700 }}>Team shirt entry</span>
          <span style={{ fontFamily: 'var(--font-impact)', fontSize: '30px', color: 'var(--flag)', lineHeight: 1 }}>{data.event.price}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {data.teams.map((t) => {
            const on = joined === t.charity;
            return (
              <button key={t.charity} onClick={() => onJoin(t.charity)} style={{
                display: 'flex', alignItems: 'center', gap: '12px', textAlign: 'left', cursor: 'pointer',
                background: on ? 'var(--forest)' : 'transparent', color: on ? 'var(--cream)' : 'var(--forest)',
                border: 'none', borderBottom: '1px solid var(--line)', padding: '10px 8px', fontFamily: 'var(--font-body)'
              }}>
                <img src={base + '/assets/images/shirts/' + t.shirt} alt="" style={{ width: '44px', height: 'auto', flex: 'none' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.3 }}>{t.charity}</span>
                {on ? <Badge tone="flag" style={{ marginLeft: 'auto' }}>Selected</Badge> : null}
              </button>
            );
          })}
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontSize: 'var(--fs-caption)', color: 'var(--fairway)' }}>
            {joined ? data.event.give + ' of your ticket goes to ' + joined + '.' : 'Choose a team to see where your ' + data.event.give + ' goes.'}
          </span>
          <Button variant="primary" size="lg" disabled={!joined} href={joined ? data.event.store : undefined} target="_blank" rel="noopener">
            {joined ? 'Check Out' : 'Pick a Team First'}
          </Button>
        </div>
      </aside>
    </div>
  );
}
Object.assign(window, { TicketDrawer });
