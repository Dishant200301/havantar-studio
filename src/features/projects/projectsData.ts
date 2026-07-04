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
  image: string;
  tallCenter?: boolean;
  subtitle?: string;
  subdescription?: string;
  detailImages?: string[];
};

export const projects: Project[] = [
  {
    slug: "harmony-living-space",
    title: "Harmony Living Space",
    category: "Residential",
    location: "Sydney",
    year: "2026",
    owner: "Erik and Lena Nordvik",
    budget: "€2.5 million",
    services: "Residential Architecture",
    surface: "350 m²",
    address: "Sydney, 2026",
    description:
      "Harmony Living Space, completed in 2026 in Sydney, is a refined residential project that emphasizes natural light, open layouts, and modern simplicity — thoughtfully designed to reflect a calm and comfortable living experience.",
    image: "/images/project/project-1.webp",
    subtitle: "A serene residential retreat, blending modern elegance with cozy comfort.",
    subdescription: "Our Harmony Living Space in Sydney is designed to maximize natural light and open-plan living, creating a home that feels spacious yet inviting. The interiors combine warm textures with minimalist sophistication.",
    detailImages: [
      "/images/project_details/project_details-image-1(1).webp",
      "/images/project_details/project_details-image-1(2).webp",
      "/images/project_details/project_details-image-1(3).webp",
      "/images/project_details/project_details-image-1(4).webp",
      "/images/project_details/project_details-image-1(5).webp",
    ],
  },
  {
    slug: "executive-office-interior",
    title: "Executive Office Interior",
    category: "Commercial",
    location: "Toronto",
    year: "2025",
    owner: "North Ridge Capital",
    budget: "€1.8 million",
    services: "Commercial Interior Design",
    surface: "410 m²",
    address: "Toronto, 2025",
    description:
      "A refined executive floor built around choreography of light, timber, and hand-finished plaster surfaces.",
    image: "/images/project/project-2.webp",
    tallCenter: true,
    subtitle: "A refined executive floor built around choreography of light, timber, and hand-finished surfaces.",
    subdescription: "The Executive Office Interior project in Toronto focuses on rich timber, soft acoustics, and dynamic layouts to create a workspace that inspires leadership and collaboration. The design emphasizes subtle transitions between private offices and shared workspaces.",
    detailImages: [
      "/images/project/project-2.webp",
      "/images/project/hero.webp",
      "/images/project_details/project_details-image-1(2).webp",
      "/images/project_details/project_details-image-1(3).webp",
      "/images/project_details/project_details-image-1(4).webp",
    ],
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
      "A dynamic commercial environment that encourages collaboration and flexibility.",
    image: "/images/project/project-2.webp",
    subtitle: "A dynamic commercial environment that encourages collaboration and flexibility.",
    subdescription: "Located in the vibrant business center of Dubai, this co-working space merges social hubs and quiet zones with sustainable materials, providing a flexible, high-performance environment for remote teams and creative thinkers.",
    detailImages: [
      "/images/project/project-2.webp",
      "/images/home/about/about_image-1.webp",
      "/images/home/about/about_image-2.webp",
      "/images/project_details/project_details-image-1(1).webp",
      "/images/project_details/project_details-image-1(5).webp",
    ],
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
    image: "/images/project/project-1.webp",
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
    image: "/images/project/project-2.webp",
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
    image: "/images/project/project-1.webp",
  },
];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
