// Menu structure, used by the desktop header, the mobile menu and the footer.

export const solutionLinks = [
  { href: '/solution', label: 'Interactive 3D masterplan', note: 'Explore the whole compound', mobile: 'Real Estate Interactive Solution' },
  { href: '/solution#journey', label: 'Unit finder & live availability', note: 'Real-time, per building' },
  { href: '/solution#features', label: '360° unit walkthroughs', note: 'Rendered interiors' },
  { href: '/solution#screens', label: 'Sales-centre touch screens', note: 'On-site displays' },
  { href: '/solution#dash', label: 'Developer Dashboard', note: 'Units, phases, payments, leads' },
];

export const serviceGroups = [
  { title: '3D Visualization', audience: 'For developers', links: [
    { href: '/services/cgi', label: 'CGI Renders', note: 'Exterior and interior, 4K' },
    { href: '/services/plans', label: '3D Plans', note: 'Floor plans and master plans' },
    { href: '/services/reels', label: '3D Reels & Animation', note: 'Launch and social films' },
    { href: '/services/tours', label: '360° Virtual Tours', note: 'Mobile-ready' },
  ] },
  { title: 'Creative & AI Studio', audience: 'For any brand', links: [
    { href: '/services/ai', label: 'AI Photo & Video', note: 'Campaign visuals' },
    { href: '/services/printing', label: '3D Printing & Scale Models', note: 'Any size' },
  ] },
  { title: 'Marketing', audience: 'For any brand', links: [
    { href: '/services/social', label: 'Social Media & Ads', note: 'Content and campaigns' },
    { href: '/services/callcenter', label: 'Contact Center & Telesales', note: 'Inbound and outbound' },
  ] },
];

export const projectLinks = [
  { href: '/projects/etala', label: 'Etala by El Manara', note: 'Egypt · 77 units' },
  { href: '/projects/tilal', label: 'Tilal, Jeddah Heights', note: '  · 4 villa models' },
  { href: '/projects', label: 'All projects', note: 'Renders, plans and platforms' },
];

export const footerColumns = [
  { title: 'Solution', links: [
    { href: '/solution', label: 'Real Estate Interactive Solution' },
    { href: '/solution#dash', label: 'Developer Dashboard' },
    { href: '/solution#screens', label: 'Sales-centre screens' },
  ] },
  { title: 'Services', links: [
    { href: '/services/cgi', label: '3D Visualization' },
    { href: '/services/ai', label: 'Creative & AI Studio' },
    { href: '/services/social', label: 'Marketing' },
  ] },
  { title: 'Company', links: [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/book-a-demo', label: 'Book a demo' },
  ] },
];
