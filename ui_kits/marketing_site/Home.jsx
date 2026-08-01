const { NavBar, SiteFooter, Ticker } = window.TheGivingGreenDesignSystem_038bf7;
const BASE = '../..';

function Home() {
  const data = window.TGG_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [drawer, setDrawer] = React.useState(false);
  const [joined, setJoined] = React.useState(null);
  const [sent, setSent] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const join = (c) => { setJoined(c); setDrawer(true); };
  return (
    <>
      <NavBar links={data.nav} scrolled={scrolled} base={BASE} cta="Get Tickets" ctaHref="#" activeHref={null}
        style={{ position: 'fixed' }} />
      <HeroSection base={BASE} data={data} onTickets={() => setDrawer(true)} />
      <Ticker items={['Charity Pub Golf Crawl', 'Nine Bars', 'Nine Charities', 'Nine Holes', 'October 3', 'Soulard', 'St. Louis', 'The Party Fore Good']} />
      <CourseSection data={data} onTickets={() => setDrawer(true)} />
      <PhotoStripBreak base={BASE} />
      <ScoringSection base={BASE} data={data} />
      <TeamsSection base={BASE} data={data} onJoin={join} joined={joined} />
      <ProofSection base={BASE} />
      <FaqSection data={data} />
      <CaptureSection sent={sent} onSubmit={(e) => { e.preventDefault(); setSent(true); }} />
      <SiteFooter base={BASE} columns={[
        [{ label: 'The Crawl', href: '#course' }, { label: 'Charities', href: '#good' }, { label: 'Get Tickets', href: '#' }, { label: 'FAQs', href: '#faq' }],
        [{ label: '@thegivinggreen', href: 'https://instagram.com/thegivinggreen' }, { label: 'admin@thegivinggreen.org', href: 'mailto:admin@thegivinggreen.org' }]
      ]} />
      <TicketDrawer open={drawer} onClose={() => setDrawer(false)} base={BASE} data={data} joined={joined} onJoin={setJoined} />
    </>
  );
}

function PhotoStripBreak({ base }) {
  const { PhotoStrip } = window.TheGivingGreenDesignSystem_038bf7;
  return <PhotoStrip photos={[
    { src: base + '/assets/images/photos/twoup1.webp', alt: 'Attendees showing wristbands' },
    { src: base + '/assets/images/photos/strip2.webp', alt: 'Attendees in matching team shirts' },
    { src: base + '/assets/images/photos/twoup2.webp', alt: 'Attendees at an outdoor Soulard bar' }
  ]} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
