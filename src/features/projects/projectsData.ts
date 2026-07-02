export type Project = {
  slug: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  year: string;
  owner: string;
  budget: string;
  services: string;
  surface: string;
  address: string;
  description: string;
  tallCenter?: boolean;
};

export const projects: Project[] = [
  {
    slug: "harmony-living-space",
    title: "Harmony Living Space",
    category: "Residential",
    location: "Abu Dhabi",
    year: "2025",
    owner: "Al Marzooqi Family",
    budget: "€2.4 million",
    services: "Residential Architecture, Interior Design",
    surface: "520 m²",
    address: "Abu Dhabi, 2025",
    description:
      "A serene family residence balancing warm materiality with quiet restraint — sculpted volumes, natural stone, and layered light.",
  },
  {
    slug: "executive-office-interior",
    title: "Executive Office Interior",
    category: "Commercial",
    location: "Dubai",
    year: "2025",
    owner: "North Ridge Capital",
    budget: "€1.8 million",
    services: "Commercial Interior Design",
    surface: "410 m²",
    address: "DIFC, Dubai, 2025",
    description:
      "A refined executive floor built around choreography of light, timber, and hand-finished plaster surfaces.",
    tallCenter: true,
  },
  {
    slug: "modern-co-working-space",
    title: "Modern Co-working Space",
    category: "Commercial",
    location: "Dubai",
    year: "2026",
    owner: "Omar & Layla Hassan",
    budget: "€3.1 million",
    services: "Commercial Architecture",
    surface: "650 m²",
    address: "Dubai, 2026",
    description:
      "A dynamic commercial environment that encourages collaboration and flexibility — designed to foster creativity through open, adaptable spaces.",
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    category: "Residential",
    location: "Dubai",
    year: "2024",
    owner: "Private Client",
    budget: "€5.6 million",
    services: "Full Architecture & Interior",
    surface: "980 m²",
    address: "Emirates Hills, Dubai, 2024",
    description:
      "A quietly monumental villa organised around a stone courtyard, layered water, and framed desert horizons.",
  },
  {
    slug: "retail-experience-center",
    title: "Retail Experience Center",
    category: "Commercial",
    location: "Doha",
    year: "2025",
    owner: "Vera Retail Group",
    budget: "€2.9 million",
    services: "Retail Architecture",
    surface: "740 m²",
    address: "West Bay, Doha, 2025",
    description:
      "A retail stage set — brushed metal, veined marble, and warm oak arranged around a central sculptural staircase.",
  },
  {
    slug: "serenity-villa",
    title: "Serenity Villa",
    category: "Residential",
    location: "Ras Al Khaimah",
    year: "2024",
    owner: "Al Nuaimi Family",
    budget: "€3.4 million",
    services: "Residential Architecture",
    surface: "720 m²",
    address: "Al Hamra, RAK, 2024",
    description:
      "A low-slung coastal home threaded with reflecting pools, deep terraces, and a soft palette of lime and travertine.",
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
