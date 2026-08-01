const { SectionHead, TeamCard, Countdown, Ceremonial } = window.TheGivingGreenDesignSystem_038bf7;

function TeamsSection({ base, data, onJoin, joined }) {
  return (
    <section id="good" style={{ padding: 'var(--section-y) var(--section-x)', maxWidth: 'var(--w-wide)', margin: '0 auto', textAlign: 'center' }}>
      <SectionHead align="center" eyebrow="03 &middot; Choose Your Team" title="Choose Your Team."
        subline={'Pick which charity you want to support. ' + data.event.give + ' of every ticket goes directly to your charity of choice.'} />
      <Countdown target={data.event.iso} style={{ marginBottom: '44px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', textAlign: 'left' }}>
        {data.teams.map((t) => (
          <TeamCard key={t.charity}
            shirt={base + '/assets/images/shirts/' + t.shirt}
            logo={base + '/assets/images/logos/' + t.logo}
            charity={t.charity} mission={t.mission} learnHref={t.learnHref}
            joinLabel={joined === t.charity ? 'On the Tee Sheet' : 'Join This Team'}
            joinHref={undefined}
            onClick={() => onJoin(t.charity)}
            style={{ cursor: 'pointer', borderColor: joined === t.charity ? 'var(--flag)' : undefined }} />
        ))}
      </div>
      <Ceremonial tone="forest" style={{ marginTop: '36px', fontWeight: 700, fontSize: 'clamp(18px,2vw,24px)' }}>
        Your shirt color is your team. Your shirt is your ticket.
      </Ceremonial>
    </section>
  );
}
Object.assign(window, { TeamsSection });
