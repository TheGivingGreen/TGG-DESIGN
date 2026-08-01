const { Mark } = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';

window.TGG_DATA_HOLES = [
  { hole: '01', venue: 'Social Bar & Grill' }, { hole: '02', venue: "Ray's Sportshouse" },
  { hole: '03', venue: "Duke's" }, { hole: '04', venue: 'The Great Grizzly Bear' },
  { hole: '05', venue: "Molly's in Soulard" }, { hole: '06', venue: "Jack Nolen's" },
  { hole: '07', venue: "Big Daddy's" }, { hole: '08', venue: "D's Place" }, { hole: '09', venue: "Hammerstone's" }
];
window.TGG_DATA_SCORING = [
  { label: 'Skip a bar entirely', strokes: '+2', tone: 'penalty' },
  { label: 'Visit a bar', strokes: '+0' },
  { label: 'Order any drink (mocktails count too)', strokes: '\u22121', tone: 'good' },
  { label: 'Play a sponsored mini-game or challenge', strokes: '\u22121', tone: 'good' }
];

function SponsorApp() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 40px', position: 'relative', zIndex: 5 }}>
        <Mark variant="cream" size={40} base={BASE} withWordmark onDark />
        <div style={{ display: 'flex', gap: '26px', alignItems: 'center' }}>
          {['The Crawl', 'Charities', 'Year One', 'Pro Shop'].map((l) => (
            <a key={l} href="../marketing_site/index.html" style={{ fontSize: '.78rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--cream)', opacity: .9, textDecoration: 'none' }}>{l}</a>
          ))}
          <a href="../marketing_site/index.html" style={{ border: '1.5px solid var(--cream)', borderRadius: '999px', padding: '10px 20px', fontSize: '.78rem', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--cream)', textDecoration: 'none' }}>Get Tickets</a>
        </div>
      </nav>
      {open ? <Deck base={BASE} /> : <Gate base={BASE} onUnlock={() => { setOpen(true); window.scrollTo(0, 0); }} />}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SponsorApp />);
