/* ============================================================
   CONNEXXION GROUP — Content layer
   Sourced & adapted from connexxiongroup.com
   ============================================================ */

const U = "https://images.unsplash.com/";
export function img(id: string, w = 1100, q = 68) {
  return `${U}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

// Pexels hot-link — used for authentic Nigeria / Abuja photography.
export function px(id: number, w = 1100) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}`;
}

export const company = {
  name: "Connexxion Group",
  tagline: "Recreating Tomorrow Today",
  promise:
    "We assist progressive companies embrace technology to streamline their processes and secure the future of their business.",
  diversified: "We are as diversified as our numerous interests.",
  mission:
    "To be a role model for innovative technology for African businesses, by providing superior infrastructural capabilities for all our stakeholders.",
  vision:
    "To provide an unparalleled experience as the most trusted leaders in Technology, Engineering, Oil & Gas, and Energy-related services.",
  founded: 2010,
  hq: "2A Iller Crescent, Maitama, Abuja, Nigeria",
  phone: "09161240000",
  email: "info@connexxiongroup.com",
  hours: "Mon – Sat: 8am – 5pm · Sunday: Closed",
  countries: ["Nigeria", "South Africa", "Niger"],
  socials: {
    linkedin: "https://www.linkedin.com/in/maxwell-esan/",
    facebook: "https://www.facebook.com/esanmaxwell",
    instagram: "https://www.instagram.com/esanmaxwell/",
  },
};

export const stats = [
  { value: 2010, label: "Founded in Abuja", suffix: "" },
  { value: 1000, label: "Projects delivered", suffix: "+" },
  { value: 15, label: "Operating companies", suffix: "+" },
  { value: 3, label: "Countries of presence", suffix: "" },
];

export type NavLink = { label: string; href: string };
export const nav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Subsidiaries", href: "/subsidiaries" },
  { label: "Products", href: "/products" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* ----------------------------- Sectors ----------------------------- */
export type Sector = {
  name: string;
  blurb: string;
  image: string;
};

export const sectors: Sector[] = [
  {
    name: "Energy & Resources",
    blurb:
      "Power, mining and natural-resource extraction engineered for a continent on the move.",
    image: px(9893729),
  },
  {
    name: "Engineering & Construction",
    blurb:
      "Mechanical, technical and civil engineering for modern infrastructure technology.",
    image: px(5298215),
  },
  {
    name: "Telecom & IT",
    blurb:
      "Core networking, communications, cloud and bespoke software for public and private sectors.",
    image: px(5480781),
  },
  {
    name: "Fintech",
    blurb:
      "An inclusive, technologically advanced and agile financial ecosystem.",
    image: px(6612717),
  },
  {
    name: "Agriculture",
    blurb:
      "Harnessing youth and women potential across the agricultural value chain.",
    image: px(14314165),
  },
  {
    name: "Maritime & Oil/Gas",
    blurb:
      "Exploration, production, offshore fabrication, trading and consultancy.",
    image: px(12485409),
  },
  {
    name: "Security",
    blurb:
      "Surveillance and protective technology, monitored 24/7 by certified technicians.",
    image: px(8984723),
  },
  {
    name: "Human Capital",
    blurb:
      "Recruitment, outsourcing and HR systems for private and public organisations.",
    image: px(30688596),
  },
];

/* ----------------------------- Subsidiaries ----------------------------- */
export type Subsidiary = {
  slug: string;
  name: string;
  sector: string;
  tagline: string;
  description: string;
  long: string;
  highlights: string[];
  url: string;
  image: string;
  established?: string;
  clients?: string[];
  /** Names of products (from the `products` array) built by this subsidiary */
  products?: string[];
};

export const subsidiaries: Subsidiary[] = [
  {
    slug: "connexxion-telecom",
    name: "Connexxion Telecom & Solutions",
    sector: "Telecom & IT",
    tagline: "Core IT networking, communication and software.",
    description:
      "A provider of core IT networking, communication and consulting services, and software solutions for public and private sector clients.",
    long: "Connexxion Telecom delivers radio infrastructure, communication platforms, network support and server administration alongside remote support systems and custom software applications. Its capabilities span the transmission of voice, data and multimedia over networks — mobile and fixed-line telephony, internet and broadband — extended by cloud computing, cybersecurity, data analytics and digital transformation.",
    highlights: [
      "Core IT & networking infrastructure",
      "Communications: voice, data & multimedia",
      "Security & surveillance systems",
      "Bespoke & bouquet software development",
    ],
    url: "https://connexxiontelecom.com/",
    image: px(17323801),
    established: "August 2010",
    clients: ["NNPC", "IRC", "IPC", "NSITF", "Nigerian Police"],
    products: ["CNX SchoolPro", "CNX247", "iCoop", "WeMoove"],
  },
  {
    slug: "connexxion-energy",
    name: "Connexxion Energy",
    sector: "Energy & Resources",
    tagline: "Decision-grade expertise across the energy value chain.",
    description:
      "We have the experience and the know-how to help ensure effective decision-making across the energy value chain.",
    long: "Connexxion Energy partners with stakeholders to plan, develop and optimise power and resource assets — bringing technical rigour and on-the-ground know-how to projects that keep industry and communities powered.",
    highlights: [
      "Power generation & distribution advisory",
      "Resource extraction & utilities",
      "Sustainability & transition planning",
      "Infrastructure project delivery",
    ],
    url: "https://connexxiongroup.com/portfolio-category/energy/",
    image: px(9800092),
  },
  {
    slug: "cswitch-imaginova",
    name: "C-Switch Imaginova",
    sector: "Fintech",
    tagline: "A more inclusive, agile financial ecosystem.",
    description:
      "Revolutionary change in global fintech — a shift towards a more inclusive, technologically advanced and agile financial ecosystem.",
    long: "C-Switch Imaginova builds the rails and products that widen access to financial services across Africa, combining payments infrastructure, switching and digital products to make money movement faster, safer and fairer.",
    highlights: [
      "Payments & switching infrastructure",
      "Digital financial products",
      "Inclusion-first design",
      "Secure, agile architecture",
    ],
    url: "https://connexxiongroup.com/portfolio/cswitch/",
    image: px(5239822),
  },
  {
    slug: "connexxion-agro",
    name: "Connexxion Agro Allied & Farms",
    sector: "Agriculture",
    tagline: "Growing people and produce across the value chain.",
    description:
      "Harnessing youth and women potential through education, research and capacity building across the agricultural value chain.",
    long: "Connexxion Agro Allied & Farms invests in the full agricultural value chain — from primary production to processing — while building human capacity through education and research, with deliberate focus on youth and women participation.",
    highlights: [
      "Primary production & farming",
      "Processing & allied services",
      "Education, research & capacity building",
      "Youth & women empowerment",
    ],
    url: "https://agro.connexxiongroup.com",
    image: px(33993456),
  },
  {
    slug: "laukamz",
    name: "Laukamz & Co Ltd",
    sector: "Human Capital",
    tagline: "Human resource solutions for serious organisations.",
    description:
      "We cater for businesses like yours in both private and public sector organisations in Nigeria and beyond.",
    long: "Laukamz & Co provides end-to-end human capital services — recruitment, outsourcing, training and HR advisory — helping private and public sector organisations build and manage high-performing teams.",
    highlights: [
      "Recruitment & talent acquisition",
      "Outsourcing & managed teams",
      "Training & development",
      "HR advisory & compliance",
    ],
    url: "https://laukamz.com/",
    image: px(3860937),
  },
  {
    slug: "connexxion-engineering",
    name: "Connexxion Engineering",
    sector: "Engineering & Construction",
    tagline: "Engineering modern infrastructure technology.",
    description:
      "Mechanical, technical and civil engineering experience to handle the challenges posed by modern infrastructure technology.",
    long: "Connexxion Engineering brings multidisciplinary engineering capability — mechanical, technical and civil — to infrastructure projects, combining design, build and maintenance under one accountable team.",
    highlights: [
      "Mechanical & technical engineering",
      "Civil works & infrastructure",
      "Design, build & maintenance",
      "Project & facilities management",
    ],
    url: "https://connexxionengineering.com.ng",
    image: px(8293699),
  },
  {
    slug: "cyrustic-security",
    name: "Cyrustic Security",
    sector: "Security",
    tagline: "Protective technology, monitored 24/7.",
    description:
      "Our technicians are equipped with the latest modern technology and are available 24/7 at your request.",
    long: "Cyrustic Security designs, installs and monitors protective and surveillance systems — from access control to integrated command centres — backed by certified technicians and round-the-clock response.",
    highlights: [
      "CCTV & surveillance systems",
      "Access control & monitoring",
      "Integrated command centres",
      "24/7 technical response",
    ],
    url: "https://www.cyrusticsecurity.com/",
    image: px(10143239),
  },
  {
    slug: "cyrustic-marine",
    name: "Cyrustic Marine Services",
    sector: "Maritime & Oil/Gas",
    tagline: "Offshore & onshore energy services.",
    description:
      "Exploration and production, offshore/onshore rehabilitation, upgrade and fabrication, trading, delivery and consultancy services.",
    long: "Cyrustic Marine Services supports the oil & gas sector across exploration and production, offshore and onshore rehabilitation, fabrication and upgrade, trading and delivery, and specialist consultancy.",
    highlights: [
      "Exploration & production",
      "Offshore / onshore rehabilitation",
      "Fabrication & upgrade",
      "Trading, delivery & consultancy",
    ],
    url: "https://www.cyrusticmarines.com/",
    image: px(7548828),
  },
  {
    slug: "helium-power",
    name: "Helium Power",
    sector: "Energy & Resources",
    tagline: "Clean, reliable power generation engineered for Africa.",
    description: "Helium Power is an energy infrastructure provider focusing on clean, efficient, and scalable power generation and distribution solutions.",
    long: "Helium Power specializes in modern power generation, resource management, and utility infrastructure delivery. We develop clean energy solutions, thermal power systems, and smart grid distribution networks to meet the growing energy demands of industries and municipalities across the continent.",
    highlights: [
      "Clean & sustainable power generation",
      "Smart grid power distribution",
      "Infrastructure asset development",
      "Renewable energy transition planning",
    ],
    url: "https://connexxiongroup.com/portfolio-category/energy/",
    image: px(9800092),
  },
  {
    slug: "cyrustic-consult",
    name: "Cyrustic Consult",
    sector: "Human Capital",
    tagline: "Strategic business consulting and advisory services.",
    description: "Cyrustic Consult offers decision-grade management consulting, corporate strategy advisory, and human capital solutions.",
    long: "Cyrustic Consult works with public and private sector organizations to deliver strategic business advisory, policy development, project management, and operational consulting. We help enterprises optimize processes, align resources, and manage corporate risk to drive long-term institutional growth.",
    highlights: [
      "Management & corporate strategy consulting",
      "Enterprise risk & policy advisory",
      "Project management & governance support",
      "Operational optimization solutions",
    ],
    url: "https://laukamz.com/",
    image: px(3860937),
  },
];

/* ----------------------------- Products (software) ----------------------------- */
export type Product = {
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "SmartRent Plus",
    category: "PropTech",
    description:
      "Your ultimate destination for finding your dream property — search, list and rent with confidence.",
    url: "https://app.smartrentplus.com/",
    image: px(16237804, 1200),
  },
  {
    name: "iHumane",
    category: "HR Software",
    description:
      "A web-based application enabling centralised access to the full range of human-resource data, functions and processes.",
    url: "https://ihumane.net/",
    image: px(9301291, 1200),
  },
  {
    name: "WeMoove",
    category: "Mobility",
    description:
      "A foremost ride-sharing and ride-hailing software solution, moving people across Nigeria.",
    url: "https://wemooveinc.com/",
    image: px(31775644, 1200),
  },
  {
    name: "CNX Retail",
    category: "Retail",
    description:
      "World-class retail technology to propel your business forward — from point of sale to inventory.",
    url: "https://cnxretail.com/",
    image: px(3735216, 1200),
  },
  {
    name: "iCoop",
    category: "Cooperatives",
    description:
      "Automates every process of a cooperative society — bringing accountability while saving time and energy.",
    url: "https://slbcoop.com/auth/login",
    image: px(17931802, 1200),
  },
  {
    name: "CNX SchoolPro",
    category: "EdTech",
    description:
      "An integrated, comprehensive management solution for universities, colleges and polytechnics.",
    url: "https://cnxschoolpro.com/",
    image: px(34162714, 1200),
  },
  {
    name: "National Dashboard System",
    category: "GovTech",
    description:
      "A bespoke correctional-management platform engineered to modernise the operations of correctional centres.",
    url: "https://amp.connexxiontelecom.com/",
    image: px(20453360, 1200),
  },
  {
    name: "CNX247",
    category: "Business Suite",
    description:
      "An A–Z business management system for small, medium and large-scale enterprises.",
    url: "https://cnx247.com/",
    image: px(5203849, 1200),
  },
  {
    name: "CNXIGOV",
    category: "GovTech",
    description:
      "A comprehensive digital governance and public services platform designed for modern government administration.",
    url: "https://www.cnxigov.com/",
    image: px(3183150, 1200),
  },
  {
    name: "Prisons NCS",
    category: "GovTech",
    description:
      "A secure correctional-management system built in partnership with the Nigerian Correctional Service to digitalize operations and records.",
    url: "https://amp.connexxiontelecom.com/",
    image: px(20453360, 1200),
  },
  {
    name: "Video Conferencing Application",
    category: "Business Suite",
    description:
      "High-fidelity real-time video communication, screen-sharing, and collaboration tool designed for secure remote teamwork.",
    url: "https://video-conferencing-api-1.onrender.com/login",
    image: px(3182811, 1200),
  },
  {
    name: "Agro-herders tracking system",
    category: "Agriculture",
    description:
      "A real-time tracking and mapping application designed to monitor agro-pastoral movements and prevent herder-farmer conflicts.",
    url: "https://agro-herders.vercel.app/",
    image: px(14314165, 1200),
  },
];

/* ----------------------------- Why Connexxion ----------------------------- */
export const pillars = [
  {
    no: "01",
    title: "A dedicated Virtual CIO",
    body: "Every client is paired with a dedicated strategist who provides personalised, forward-looking technology guidance — not a ticket queue.",
  },
  {
    no: "02",
    title: "Always-on assurance",
    body: "24/7 monitoring and support keep your operations secure and observed around the clock, across every time zone we serve.",
  },
  {
    no: "03",
    title: "Held to account",
    body: "Compliance-grade standards including SSAE 18 Type II and PCI. Our people are held to the highest level of accountability for your results.",
  },
];

/* ----------------------------- Leadership ----------------------------- */
export type Leader = {
  name: string;
  role: string;
  bio: string;
  image: string;
  level: number;
  linkedin?: string;
};

export const leadership: Leader[] = [
  // Row 1 / Level 1: GCEO
  {
    name: "Engr. Maxwell Esan",
    role: "Group Chief Executive Officer",
    bio: "Leads a team of passionate developers, designers and strategists in recreating tomorrow, today.",
    image: "/team/maxwell.jpeg",
    level: 1,
    linkedin: "https://www.linkedin.com/in/maxwell-esan/",
  },

  // Row 2 / Level 2: Executive Officers
  {
    name: "Lauretta Chinenye",
    role: "Chief Business Development Officer",
    bio: "Drives growth and partnerships across the group's diverse portfolio of companies.",
    image: "/team/lauretta.jpeg",
    level: 2,
    linkedin: "https://www.instagram.com/laurettachinenye/",
  },
  {
    name: "Rotimi E. Akinniyi",
    role: "Chief Financial Officer",
    bio: "Stewards the group's financial health and disciplined capital allocation.",
    image: "/team/rotimi.jpeg",
    level: 2,
    linkedin: "https://www.linkedin.com/in/akinniyi-rotimi-112098207/",
  },
  {
    name: "Barr. Chidiebere Romanus Odo",
    role: "Group Legal Advisor",
    bio: "Oversees legal affairs, compliance, and corporate governance for all group subsidiaries.",
    image: "/team/chidi.jpeg",
    level: 2,
  },
  {
    name: "Philip Jegede",
    role: "Chief Operating Officer",
    bio: "Directs the daily operations and business strategies across the group's entities.",
    image: "/team/philip-jegede.jpeg",
    level: 2,
  },

  // Row 3 / Level 3: Functional Leads & Directors
  {
    name: "Fatima Yarima",
    role: "Group HR",
    bio: "Manages human resource systems, talent development, and organizational culture.",
    image: "/team/fatima.jpeg",
    level: 3,
  },
  {
    name: "Azahemen Gudu",
    role: "Secretary to the GMD",
    bio: "Coordinates executive communications, support, and scheduling for the GMD.",
    image: "/team/azahemen.jpeg",
    level: 3,
  },
  {
    name: "Pius Ekeh",
    role: "Director of Technology",
    bio: "Drives technological innovation, product engineering, and digital infrastructure.",
    image: "/team/pius.jpeg",
    level: 3,
  },
  {
    name: "Folashade Olugboye",
    role: "Chief Marketing Officer",
    bio: "Steers brand strategy, communications, and campaigns across all subsidiaries.",
    image: "/team/Folashade.png",
    level: 3,
  },

  // Row 4 / Level 4: Operations Managers
  {
    name: "Abimbola Ogunmola",
    role: "IT Manager",
    bio: "Oversees IT operations, network security, and user support systems across the group.",
    image: "/team/abimbola.jpeg",
    level: 4,
  },
  {
    name: "Amos Auta",
    role: "Facility Manager",
    bio: "Coordinates building services, maintenance, and facility operations.",
    image: "/team/amos.jpeg",
    level: 4,
  },
];


/* ----------------------------- Timeline ----------------------------- */
export const timeline = [
  { year: "2010", title: "The beginning", body: "Connexxion is founded in Abuja, establishing its telecom and IT roots." },
  { year: "2012", title: "Resilience", body: "The young firm weathers a turbulent market and emerges focused." },
  { year: "2016", title: "Crisis & opportunity", body: "A pivotal phase that sharpens the group's appetite for diversification." },
  { year: "2017", title: "Expansion", body: "Operations scale to 50+ engagements across new sectors." },
  { year: "2019", title: "Scale", body: "The footprint passes 100+ engagements and new subsidiaries take shape." },
  { year: "2021", title: "Recognition", body: "The group is recognised for excellence across its industries." },
  { year: "2023", title: "One Group", body: "The companies consolidate under the Connexxion Group identity." },
  { year: "Today", title: "Recreating tomorrow", body: "A diversified group operating across three countries and a dozen sectors." },
];

/* ----------------------------- Testimonials ----------------------------- */
export const testimonials = [
  {
    quote:
      "Their procurement and project delivery turned a complex rollout into something that simply worked. Connexxion behaves like a partner, not a vendor.",
    name: "Procurement Director",
    org: "Public Sector Agency",
  },
  {
    quote:
      "From scoping to handover, the outcomes spoke for themselves. The team's command of both engineering and technology is rare.",
    name: "Operations Lead",
    org: "Industrial Client",
  },
  {
    quote:
      "Their IT support is the quiet kind — you stop thinking about infrastructure because it never lets you down.",
    name: "Head of IT",
    org: "Enterprise Partner",
  },
];

/* ----------------------------- Careers ----------------------------- */
export const careers = {
  intro:
    "Build your career across a dozen industries. Here are the roles we're hiring for right now.",

  values: [
    { no: "01", title: "Real ownership", body: "Own outcomes end-to-end — not tickets in a queue." },
    { no: "02", title: "Cross-sector scope", body: "Work across fintech, energy, maritime and more." },
    { no: "03", title: "A high bar", body: "Serious work, real accountability, fast growth." },
  ],

  benefits: [
    { title: "Competitive pay", body: "Benchmarked to the top of the market." },
    { title: "Health cover", body: "Medical cover for you and your family." },
    { title: "Learning budget", body: "Annual stipend for courses and conferences." },
    { title: "Hybrid & flexible", body: "Outcome-driven, flexible hours." },
    { title: "Real mentorship", body: "Senior pairing and a clear growth path." },
    { title: "Modern tooling", body: "The kit to do your best work." },
  ],

  process: [
    { step: "01", title: "Apply", body: "Send your CV and a short note." },
    { step: "02", title: "Intro call", body: "A 30-minute conversation." },
    { step: "03", title: "Deep dive", body: "A practical, role-specific session." },
    { step: "04", title: "Offer", body: "Meet the team and join us." },
  ],
};

export type Opening = {
  title: string;
  team: string;
  type: string;
  location: string;
  description: string;
};

export const openings: Opening[] = [
  {
    title: "Senior Software Engineer",
    team: "Connexxion Telecom",
    type: "Full-time",
    location: "Abuja · Hybrid",
    description:
      "Design and ship resilient backend services and bespoke software for public and private sector clients across the group.",
  },
  {
    title: "Product Designer",
    team: "CNX Products",
    type: "Full-time",
    location: "Abuja · Hybrid",
    description:
      "Own the end-to-end experience of our business management platforms — from research to polished, shipped interfaces.",
  },
  {
    title: "Fintech Product Manager",
    team: "C-Switch Imaginova",
    type: "Full-time",
    location: "Lagos · On-site",
    description:
      "Drive the roadmap for payments and switching products that widen access to financial services across Africa.",
  },
  {
    title: "Field Engineer",
    team: "Connexxion Engineering",
    type: "Full-time",
    location: "Abuja · On-site",
    description:
      "Deliver mechanical, technical and civil engineering on modern infrastructure projects, from design through handover.",
  },
  {
    title: "Security Systems Technician",
    team: "Cyrustic Security",
    type: "Full-time",
    location: "Abuja · On-site",
    description:
      "Install, configure and monitor CCTV, access control and integrated command-centre systems with 24/7 response.",
  },
  {
    title: "Talent Acquisition Lead",
    team: "Laukamz & Co",
    type: "Full-time",
    location: "Abuja · Hybrid",
    description:
      "Build and run recruitment across the group — sourcing, assessing and hiring the people who recreate tomorrow.",
  },
];

/* ----------------------------- Partners ----------------------------- */
export const partners = ["IBM", "Oracle", "Hikvision", "Lifesize", "Hyper", "Cisco", "Microsoft"];

/* ----------------------------- Insights ----------------------------- */
export const insights = [
  {
    title: "Fintech integration and the future of inclusive finance in Africa",
    category: "Fintech",
    date: "2024",
    image: px(6612717, 1000),
  },
  {
    title: "Digital transformation in healthcare: seven keys for the decade",
    category: "Digital",
    date: "2024",
    image: px(4597280, 1000),
  },
  {
    title: "Smarter agriculture: technology across the value chain",
    category: "Agriculture",
    date: "2023",
    image: px(31562315, 1000),
  },
];
