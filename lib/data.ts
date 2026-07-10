export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#top" },
  { label: "Find Loads", href: "#marketplace" },
  { label: "Find Trucks", href: "#marketplace" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

// Approximate node positions on a stylized 420x460 continent illustration.
// Not surveyed geographic data — designed for the hero / coverage graphic only.
export const mapNodes = {
  dakar: { x: 48, y: 132, label: "Dakar" },
  lagos: { x: 92, y: 202, label: "Lagos" },
  accra: { x: 68, y: 224, label: "Accra" },
  kano: { x: 132, y: 158, label: "Kano" },
  abuja: { x: 112, y: 190, label: "Abuja" },
  casablanca: { x: 104, y: 58, label: "Casablanca" },
  cairo: { x: 298, y: 58, label: "Cairo" },
  addisAbaba: { x: 338, y: 152, label: "Addis Ababa" },
  nairobi: { x: 308, y: 232, label: "Nairobi" },
  kampala: { x: 286, y: 212, label: "Kampala" },
  kinshasa: { x: 202, y: 282, label: "Kinshasa" },
  darEsSalaam: { x: 322, y: 272, label: "Dar es Salaam" },
  lusaka: { x: 258, y: 330, label: "Lusaka" },
  johannesburg: { x: 238, y: 388, label: "Johannesburg" },
  durban: { x: 268, y: 410, label: "Durban" },
} as const;

export type MapNodeKey = keyof typeof mapNodes;

export type Corridor = {
  from: MapNodeKey;
  to: MapNodeKey;
  label: string;
};

export const heroCorridors: Corridor[] = [
  { from: "lagos", to: "accra", label: "Lagos \u2192 Accra" },
  { from: "kano", to: "abuja", label: "Kano \u2192 Abuja" },
  { from: "durban", to: "lusaka", label: "Durban \u2192 Lusaka" },
  { from: "nairobi", to: "kampala", label: "Nairobi \u2192 Kampala" },
  { from: "dakar", to: "lagos", label: "Dakar \u2192 Lagos" },
  { from: "kinshasa", to: "johannesburg", label: "Kinshasa \u2192 Johannesburg" },
];

export type ListingType = "truck" | "cargo" | "container" | "agriculture";

export type MarketplaceListing = {
  id: string;
  type: ListingType;
  title: string;
  route: string;
  detailLines: string[];
  tags: string[];
  status: "Available Tomorrow" | "Available Now" | "Urgent Delivery" | "Booking Open";
  ctaLabel: string;
};

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: "truck-01",
    type: "truck",
    title: "Flatbed \u00b7 30 Ton",
    route: "Lagos \u2192 Accra",
    detailLines: ["30 Ton Capacity", "Cross Border", "Verified Driver"],
    tags: ["Flatbed", "Cross-Border"],
    status: "Available Tomorrow",
    ctaLabel: "Contact Driver",
  },
  {
    id: "cargo-01",
    type: "cargo",
    title: "Cement \u00b7 28 Tons",
    route: "Kano \u2192 Abuja",
    detailLines: ["28 Tons", "Requires Flatbed", "Urgent Delivery"],
    tags: ["Flatbed", "Urgent"],
    status: "Urgent Delivery",
    ctaLabel: "Offer Truck",
  },
  {
    id: "container-01",
    type: "container",
    title: "40ft Container",
    route: "Durban \u2192 Lusaka",
    detailLines: ["40ft Standard", "Cross Border", "Booking Open"],
    tags: ["Container", "SADC"],
    status: "Booking Open",
    ctaLabel: "Book Transport",
  },
  {
    id: "agriculture-01",
    type: "agriculture",
    title: "Fresh Produce",
    route: "Nairobi \u2192 Kampala",
    detailLines: ["18 Tons", "Refrigerated Preferred", "Available Now"],
    tags: ["Reefer", "Cross-Border"],
    status: "Available Now",
    ctaLabel: "Offer Truck",
  },
  {
    id: "truck-02",
    type: "truck",
    title: "Tautliner \u00b7 22 Ton",
    route: "Johannesburg \u2192 Durban",
    detailLines: ["22 Ton Capacity", "Domestic Route", "Verified Fleet"],
    tags: ["Tautliner", "Domestic"],
    status: "Available Tomorrow",
    ctaLabel: "Contact Driver",
  },
  {
    id: "cargo-02",
    type: "cargo",
    title: "Machinery Parts",
    route: "Casablanca \u2192 Dakar",
    detailLines: ["12 Tons", "Requires Enclosed Truck", "Booking Open"],
    tags: ["Enclosed", "North-West Corridor"],
    status: "Booking Open",
    ctaLabel: "Offer Truck",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const transporterSteps: ProcessStep[] = [
  { title: "Post Available Truck", description: "Publish your route, capacity, and departure window in minutes." },
  { title: "Receive Load Requests", description: "Get matched with cargo owners along your route or backhaul." },
  { title: "Accept Jobs", description: "Review details and confirm the loads that fit your truck." },
  { title: "Move Freight", description: "Pick up, transport, and complete the job with full visibility." },
];

export const businessSteps: ProcessStep[] = [
  { title: "Post Cargo", description: "Share pickup, delivery, cargo type, and deadline." },
  { title: "Receive Transport Matches", description: "See available trucks and transporters that fit your load." },
  { title: "Compare Options", description: "Review capacity, truck type, and verified transporter details." },
  { title: "Book Transport", description: "Confirm the match and get your cargo moving." },
];

export type Region = {
  name: string;
  code: string;
  description: string;
};

export const regions: Region[] = [
  { name: "West Africa", code: "ECOWAS", description: "Nigeria, Ghana, Senegal, C\u00f4te d\u2019Ivoire and the wider coastal corridor." },
  { name: "Southern Africa", code: "SADC", description: "South Africa, Zambia, Zimbabwe, Namibia and cross-border freight lanes." },
  { name: "Eastern Africa", code: "COMESA", description: "Kenya, Uganda, Tanzania, Ethiopia and regional trade corridors." },
  { name: "Northern Africa", code: "Maghreb", description: "Morocco, Egypt, Algeria and Mediterranean-facing trade routes." },
  { name: "Central Africa", code: "CEMAC", description: "DR Congo, Cameroon, Gabon and emerging freight infrastructure." },
];

export type Benefit = {
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  { title: "Reduce Empty Trips", description: "Fill backhauls and idle capacity with matched loads along your route." },
  { title: "Faster Truck Discovery", description: "Find available trucks near your pickup point without manual sourcing." },
  { title: "Verified Listings", description: "Transact with drivers and businesses that go through verification." },
  { title: "Cross-Border Freight", description: "Coordinate multi-country moves across major African trade corridors." },
  { title: "Save Time", description: "Skip the calls and middlemen with a live, searchable marketplace." },
  { title: "Expand Business", description: "Reach new routes, regions, and freight opportunities as you grow." },
  { title: "Pan-African Network", description: "One platform spanning West, East, Southern, and North Africa." },
  { title: "Real-Time Opportunities", description: "See new loads and available capacity as they're posted." },
];

export type Persona = {
  title: string;
};

export const personas: Persona[] = [
  { title: "Truck Drivers" },
  { title: "Fleet Owners" },
  { title: "Logistics Companies" },
  { title: "Manufacturers" },
  { title: "Farmers" },
  { title: "Exporters" },
  { title: "Importers" },
  { title: "Freight Forwarders" },
  { title: "Retailers" },
  { title: "Construction Companies" },
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "How do I post an available truck?",
    answer:
      "Create a free account, then publish your current location, destination, truck type, trailer type, available capacity, and departure date. Your listing appears in the marketplace immediately.",
  },
  {
    question: "How do I post a load?",
    answer:
      "Businesses can publish pickup and delivery locations, cargo type, weight, volume, preferred truck type, and delivery deadline. Matching transporters can then respond directly.",
  },
  {
    question: "Does Freight Africa support cross-border transport?",
    answer:
      "Yes. The marketplace is built for regional trade corridors across ECOWAS, SADC, COMESA, and beyond, so you can find and offer transport across borders.",
  },
  {
    question: "How are drivers and businesses verified?",
    answer:
      "Freight Africa reviews identity and business documentation during onboarding, and listings from verified accounts are marked accordingly across the marketplace.",
  },
  {
    question: "What does it cost to join?",
    answer:
      "Freight Africa is currently in early access. Waitlist members will be the first to hear about pricing and onboarding as the platform opens up by region.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "Freight Africa is launching across major freight corridors in West, East, Southern, and North Africa, with continent-wide coverage as the network grows.",
  },
  {
    question: "Can I manage a whole fleet on the platform?",
    answer:
      "Yes. Fleet owners can list multiple trucks, track available capacity, and manage incoming load requests from a single account.",
  },
  {
    question: "How does Freight Africa think about safety?",
    answer:
      "Verified listings, transporter details, and route information are visible before you commit, so both sides can make an informed decision before booking.",
  },

];
