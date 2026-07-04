export type Service = {
  title: string;
  modalTitle: string;
  desc: string;
  hours: string;
  location: string;
  full: string;
  features: string[];
  price: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Architectural",
    modalTitle: "ARCHITECTURAL DESIGN",
    desc: "Designing modern buildings that combine aesthetics, efficiency, and long-term value.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "Dubai, UAE",
    full: "Full architectural design service from initial concept through detailed drawings and construction supervision — with a focus on light, proportion, and material honesty.",
    features: [
      "Comprehensive site analysis and zoning compliance.",
      "Innovative conceptual design and detailed floor plans.",
      "Structural coordination and sustainable material selection.",
      "Detailed construction documentation and blueprint generation.",
      "Permit-ready architectural drawings and engineering alignment.",
      "Homes, offices, and commercial structures."
    ],
    price: "250 AED / Hour",
    image: "/images/home/service/service-1.webp",
  },
  {
    title: "Interior Design",
    modalTitle: "INTERIOR DESIGN",
    desc: "Creating refined interiors through thoughtful materials, lighting, and spatial composition.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "Dubai, UAE",
    full: "End-to-end interior design tailored to your daily rituals — space planning, palette, joinery, lighting, and styling.",
    features: [
      "Space planning and furniture layout optimization.",
      "Material selection, color palettes, and texture coordination.",
      "Custom joinery and detailed cabinetry drawings.",
      "Lighting plans, fixture selection, and ambient design.",
      "Final styling, decor sourcing, and site art curation."
    ],
    price: "180 AED / Hour",
    image: "/images/home/service/service-2.webp",
  },
  {
    title: "Renovation & Remodeling",
    modalTitle: "RENOVATION & REMODELING",
    desc: "Transforming outdated spaces into modern and carefully designed environments.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "Dubai, UAE",
    full: "Full renovation, remodeling, and adaptive re-use of homes and workspaces to give them a modern lease of life.",
    features: [
      "Structural feasibility assessment and survey.",
      "Adaptive reuse and layout reconfiguration designs.",
      "Material specification and contractor coordination.",
      "Phased construction planning and on-site oversight.",
      "Turnkey handover and styling refinement."
    ],
    price: "300 AED / Hour",
    image: "/images/home/service/service-3.webp",
  },
  {
    title: "3D Visualization",
    modalTitle: "3D VISUALIZATION",
    desc: "High-quality visualizations that help clients clearly understand the design before construction begins.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "Remote / Online",
    full: "Hyper-realistic 3D visualization and animated walkthroughs so you can experience the design before it is built.",
    features: [
      "Hyper-realistic 3D rendering of interior and exterior views.",
      "Cinematic animated walkthrough videos.",
      "Virtual reality (VR) ready scene exports.",
      "Daylight simulation and material texture studies.",
      "High-resolution print-ready image packages."
    ],
    price: "120 AED / Hour",
    image: "/images/home/service/service-4.webp",
  },
  {
    title: "Space Planning",
    modalTitle: "SPACE PLANNING",
    desc: "Optimizing layouts to improve functionality, circulation, and spatial flow.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "Dubai, UAE",
    full: "Bespoke space-planning studies that unlock the full potential of any interior — for homes, offices, and retail.",
    features: [
      "Zoning plans and functional area definition.",
      "Circulation and foot-traffic flow diagrams.",
      "Ergonomic furniture arrangement studies.",
      "Expansion and flexibility planning audits.",
      "Detailed space utilization reports."
    ],
    price: "150 AED / Hour",
    image: "/images/home/service/service-5.webp",
  },
  {
    title: "Construction Consultation",
    modalTitle: "CONSTRUCTION CONSULTATION",
    desc: "Professional guidance during construction to ensure the design vision is executed correctly.",
    hours: "Sun - Fri (9:30 am - 11 pm)",
    location: "On-site",
    full: "Independent on-site advisory covering quality assurance, contractor coordination, and technical review.",
    features: [
      "Routine site visits and quality assurance inspections.",
      "Detailed technical review of contractor shop drawings.",
      "Direct coordination with structural and MEP engineers.",
      "Material sample approvals and mockup evaluations.",
      "Handover snagging list preparation and resolution."
    ],
    price: "350 AED / Hour",
    image: "/images/home/service/service-6.webp",
  },
];
