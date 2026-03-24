export interface ZoneCapability {
  id: string;
  level: 1 | 2 | 3 | 4 | 5;
  name: string;
  description: string;
}

export interface BuildingZone {
  id: string;
  tradeName: string;
  shortName: string;
  description: string;
  color: string; // oklch color string
  svgX: number;
  svgY: number;
  svgWidth: number;
  svgHeight: number;
  capabilities: ZoneCapability[];
}

export const buildingZones: BuildingZone[] = [
  {
    id: "carpentry",
    tradeName: "Carpentry & Joinery",
    shortName: "Carpentry",
    description:
      "Framing, cabinetry, and finish carpentry across residential and commercial builds.",
    color: "oklch(72% 0.12 55)",
    svgX: 200,
    svgY: 200,
    svgWidth: 180,
    svgHeight: 140,
    capabilities: [
      {
        id: "carpentry-l1",
        level: 1,
        name: "Hand Tool Fundamentals",
        description:
          "Safe use of saws, chisels, planes, and measuring tools for basic timber work.",
      },
      {
        id: "carpentry-l2",
        level: 2,
        name: "Timber Framing",
        description:
          "Wall, floor, and roof framing including load-bearing structures and bracing.",
      },
      {
        id: "carpentry-l3",
        level: 3,
        name: "Cabinet & Door Making",
        description:
          "Joinery, cabinetry construction, door hanging, and hardware fitting.",
      },
      {
        id: "carpentry-l4",
        level: 4,
        name: "Finish Carpentry",
        description:
          "Skirting, architraves, staircase construction, and decorative timber features.",
      },
      {
        id: "carpentry-l5",
        level: 5,
        name: "Complex Structural Joinery",
        description:
          "Engineered timber connections, heritage restoration joinery, and custom architectural elements.",
      },
    ],
  },
  {
    id: "electrical",
    tradeName: "Electrical",
    shortName: "Electrical",
    description:
      "Residential and commercial wiring, switchboard installation, and electrical systems commissioning.",
    color: "oklch(78% 0.14 90)",
    svgX: 400,
    svgY: 200,
    svgWidth: 160,
    svgHeight: 120,
    capabilities: [
      {
        id: "electrical-l1",
        level: 1,
        name: "Electrical Safety & Theory",
        description:
          "Ohm's law, circuit theory, safe working procedures, and PPE requirements.",
      },
      {
        id: "electrical-l2",
        level: 2,
        name: "Domestic Wiring",
        description:
          "Power circuits, lighting circuits, socket outlet installation, and cable routing.",
      },
      {
        id: "electrical-l3",
        level: 3,
        name: "Switchboard & Protection",
        description:
          "Switchboard construction, circuit breaker sizing, RCD installation, and metering.",
      },
      {
        id: "electrical-l4",
        level: 4,
        name: "Commercial & Industrial",
        description:
          "3-phase systems, motor control circuits, cable management systems, and data cabling.",
      },
      {
        id: "electrical-l5",
        level: 5,
        name: "Building Automation & EV",
        description:
          "Building management systems, EV charging infrastructure, solar grid connection, and smart controls.",
      },
    ],
  },
  {
    id: "plumbing",
    tradeName: "Plumbing",
    shortName: "Plumbing",
    description:
      "Pipe fitting, drainage systems, sanitary fixtures, and water supply installations.",
    color: "oklch(65% 0.14 220)",
    svgX: 580,
    svgY: 200,
    svgWidth: 160,
    svgHeight: 120,
    capabilities: [
      {
        id: "plumbing-l1",
        level: 1,
        name: "Pipework Basics",
        description:
          "Pipe materials, jointing methods, cutting tools, and basic fitting techniques.",
      },
      {
        id: "plumbing-l2",
        level: 2,
        name: "Cold & Hot Water Systems",
        description:
          "Water supply pipework, hot water units, pressure regulation, and tempering valves.",
      },
      {
        id: "plumbing-l3",
        level: 3,
        name: "Sanitary Drainage",
        description:
          "Drain-waste-vent systems, trap installation, grading, and inspection openings.",
      },
      {
        id: "plumbing-l4",
        level: 4,
        name: "Gas Fitting",
        description:
          "Natural gas and LPG installations, appliance connection, leak testing, and commissioning.",
      },
      {
        id: "plumbing-l5",
        level: 5,
        name: "Hydraulic Design",
        description:
          "Hydraulic services design, backflow prevention, water efficiency systems, and stormwater management.",
      },
    ],
  },
  {
    id: "masonry",
    tradeName: "Bricklaying & Masonry",
    shortName: "Masonry",
    description:
      "Brickwork, blockwork, stonework, and decorative masonry for structural and aesthetic applications.",
    color: "oklch(60% 0.1 35)",
    svgX: 20,
    svgY: 20,
    svgWidth: 160,
    svgHeight: 160,
    capabilities: [
      {
        id: "masonry-l1",
        level: 1,
        name: "Mortar & Material Prep",
        description:
          "Mortar mixing ratios, material identification, and basic bricklaying tools and safety.",
      },
      {
        id: "masonry-l2",
        level: 2,
        name: "Brick Bonding Patterns",
        description:
          "Stretcher, header, and Flemish bonds; corners, reveals, and plumb work.",
      },
      {
        id: "masonry-l3",
        level: 3,
        name: "Block & Cavity Work",
        description:
          "Concrete blockwork, cavity wall construction, wall ties, and insulation installation.",
      },
      {
        id: "masonry-l4",
        level: 4,
        name: "Arches & Feature Work",
        description:
          "Arch construction, soldier courses, corbelling, and decorative stonework.",
      },
      {
        id: "masonry-l5",
        level: 5,
        name: "Heritage & Restoration",
        description:
          "Lime mortar repointing, heritage brick matching, structural repair, and conservation masonry.",
      },
    ],
  },
  {
    id: "concreting",
    tradeName: "Concreting",
    shortName: "Concreting",
    description:
      "Formwork design, concrete pours, finishing, and post-tensioned slab construction.",
    color: "oklch(68% 0.04 255)",
    svgX: 20,
    svgY: 600,
    svgWidth: 180,
    svgHeight: 160,
    capabilities: [
      {
        id: "concreting-l1",
        level: 1,
        name: "Concrete Properties",
        description:
          "Mix design, slump testing, curing requirements, and concrete placement basics.",
      },
      {
        id: "concreting-l2",
        level: 2,
        name: "Formwork Construction",
        description:
          "Timber formwork, form oil, stripping procedures, and basic falsework.",
      },
      {
        id: "concreting-l3",
        level: 3,
        name: "Slab & Footing Works",
        description:
          "Reinforced slab on ground, strip footings, starter bars, and surface finishing.",
      },
      {
        id: "concreting-l4",
        level: 4,
        name: "Elevated Slabs",
        description:
          "Suspended slab formwork, propping systems, pour sequencing, and load calculations.",
      },
      {
        id: "concreting-l5",
        level: 5,
        name: "Specialist Concrete",
        description:
          "Post-tensioned slabs, shotcrete, decorative polished concrete, and industrial flooring.",
      },
    ],
  },
  {
    id: "painting",
    tradeName: "Painting & Decorating",
    shortName: "Painting",
    description:
      "Surface preparation, coating application, and decorative finishing for all building types.",
    color: "oklch(82% 0.08 300)",
    svgX: 400,
    svgY: 380,
    svgWidth: 160,
    svgHeight: 100,
    capabilities: [
      {
        id: "painting-l1",
        level: 1,
        name: "Paint Systems & Tools",
        description:
          "Paint types, brush and roller technique, and safe handling of coatings and solvents.",
      },
      {
        id: "painting-l2",
        level: 2,
        name: "Surface Preparation",
        description:
          "Filling, sanding, priming, and surface treatment for plasterboard, timber, and metal.",
      },
      {
        id: "painting-l3",
        level: 3,
        name: "Spray Application",
        description:
          "Airless and HVLP spray equipment setup, technique, and protective masking.",
      },
      {
        id: "painting-l4",
        level: 4,
        name: "Decorative Finishes",
        description:
          "Venetian plaster, feature walls, faux finishes, and colour consultation techniques.",
      },
      {
        id: "painting-l5",
        level: 5,
        name: "Commercial & Industrial Coatings",
        description:
          "Protective coatings, epoxy systems, anti-corrosion treatments, and fire-retardant paints.",
      },
    ],
  },
  {
    id: "tiling",
    tradeName: "Tiling",
    shortName: "Tiling",
    description:
      "Floor, wall, and wet area tiling including waterproofing and large-format stone installation.",
    color: "oklch(75% 0.1 175)",
    svgX: 580,
    svgY: 380,
    svgWidth: 160,
    svgHeight: 100,
    capabilities: [
      {
        id: "tiling-l1",
        level: 1,
        name: "Tile Materials & Adhesives",
        description:
          "Tile types, adhesive selection, grout mixing, and basic cutting techniques.",
      },
      {
        id: "tiling-l2",
        level: 2,
        name: "Floor Tiling",
        description:
          "Setting out, level floors, straight and diagonal patterns, and expansion joints.",
      },
      {
        id: "tiling-l3",
        level: 3,
        name: "Wall & Wet Areas",
        description:
          "Waterproofing membranes, shower recesses, wall tile alignment, and silicone sealing.",
      },
      {
        id: "tiling-l4",
        level: 4,
        name: "Large Format & Stone",
        description:
          "Large-format rectified tiles, natural stone laying, lippage control, and epoxy grout.",
      },
      {
        id: "tiling-l5",
        level: 5,
        name: "Heritage & Mosaic",
        description:
          "Heritage tile restoration, mosaic installation, complex pattern layouts, and bespoke designs.",
      },
    ],
  },
  {
    id: "roofing",
    tradeName: "Roofing",
    shortName: "Roofing",
    description:
      "Metal roofing, tile installation, guttering, and waterproofing membrane systems.",
    color: "oklch(45% 0.08 260)",
    svgX: 200,
    svgY: 20,
    svgWidth: 560,
    svgHeight: 80,
    capabilities: [
      {
        id: "roofing-l1",
        level: 1,
        name: "Roofing Safety",
        description:
          "Working at heights legislation, fall arrest systems, ladder safety, and personal protective equipment.",
      },
      {
        id: "roofing-l2",
        level: 2,
        name: "Roof Tiling",
        description:
          "Concrete and terracotta tile fixing, ridge capping, hip and valley cutting, and lead flashing.",
      },
      {
        id: "roofing-l3",
        level: 3,
        name: "Metal Roofing",
        description:
          "Corrugated, standing seam, and box profile metal roofing installation and fastening systems.",
      },
      {
        id: "roofing-l4",
        level: 4,
        name: "Guttering & Stormwater",
        description:
          "Gutter sizing, downpipe installation, valley gutters, and stormwater system design.",
      },
      {
        id: "roofing-l5",
        level: 5,
        name: "Waterproofing & Green Roofs",
        description:
          "Liquid applied membranes, TPO/PVC roofing, inverted roofs, and landscaped roof systems.",
      },
    ],
  },
  {
    id: "hvac",
    tradeName: "HVAC",
    shortName: "HVAC",
    description:
      "Heating, ventilation, and air conditioning system design, installation, and commissioning.",
    color: "oklch(70% 0.1 195)",
    svgX: 760,
    svgY: 200,
    svgWidth: 180,
    svgHeight: 280,
    capabilities: [
      {
        id: "hvac-l1",
        level: 1,
        name: "Refrigeration Fundamentals",
        description:
          "Refrigeration cycle theory, refrigerant handling, and basic electrical for HVAC systems.",
      },
      {
        id: "hvac-l2",
        level: 2,
        name: "Ductwork & Air Distribution",
        description:
          "Duct sizing, fabrication, insulation, diffuser selection, and balancing.",
      },
      {
        id: "hvac-l3",
        level: 3,
        name: "Split & Package Systems",
        description:
          "Split system installation, commissioning, gas charging, and fault diagnosis.",
      },
      {
        id: "hvac-l4",
        level: 4,
        name: "Commercial Chillers & AHUs",
        description:
          "Chilled water systems, air handling unit setup, variable air volume systems, and BMS integration.",
      },
      {
        id: "hvac-l5",
        level: 5,
        name: "Energy Optimisation",
        description:
          "Building energy modelling, heat recovery systems, mechanical services design, and compliance reporting.",
      },
    ],
  },
  {
    id: "steel",
    tradeName: "Steel Fabrication",
    shortName: "Steel Fab",
    description:
      "Structural steel fabrication, welding, and installation for commercial and industrial construction.",
    color: "oklch(50% 0.06 250)",
    svgX: 200,
    svgY: 360,
    svgWidth: 180,
    svgHeight: 140,
    capabilities: [
      {
        id: "steel-l1",
        level: 1,
        name: "Welding Fundamentals",
        description:
          "MIG, TIG, and stick welding basics, joint preparation, and weld quality assessment.",
      },
      {
        id: "steel-l2",
        level: 2,
        name: "Steel Cutting & Forming",
        description:
          "Oxy-fuel and plasma cutting, bending, rolling, and basic fabrication drawings.",
      },
      {
        id: "steel-l3",
        level: 3,
        name: "Structural Connections",
        description:
          "Bolted connections, weld detail design, gusset plates, and splice joints.",
      },
      {
        id: "steel-l4",
        level: 4,
        name: "Structural Erection",
        description:
          "Column and beam erection, crane signals, plumb and level, and temporary bracing.",
      },
      {
        id: "steel-l5",
        level: 5,
        name: "Advanced Welding & NDT",
        description:
          "Certified welding procedures, non-destructive testing, complex fabrication, and quality documentation.",
      },
    ],
  },
  {
    id: "landscaping",
    tradeName: "Landscaping",
    shortName: "Landscaping",
    description:
      "Earthworks, hard landscaping, irrigation, and planting design for residential and commercial sites.",
    color: "oklch(62% 0.14 145)",
    svgX: 20,
    svgY: 200,
    svgWidth: 160,
    svgHeight: 380,
    capabilities: [
      {
        id: "landscaping-l1",
        level: 1,
        name: "Horticulture Basics",
        description:
          "Plant identification, soil science, irrigation principles, and safe chemical handling.",
      },
      {
        id: "landscaping-l2",
        level: 2,
        name: "Earthworks & Drainage",
        description:
          "Site levelling, cut and fill, subsoil drainage installation, and compaction testing.",
      },
      {
        id: "landscaping-l3",
        level: 3,
        name: "Hard Landscaping",
        description:
          "Paving, retaining walls, edging, concrete kerbs, and outdoor structures.",
      },
      {
        id: "landscaping-l4",
        level: 4,
        name: "Irrigation Systems",
        description:
          "Drip and spray irrigation design, controller programming, and water-efficient planting schemes.",
      },
      {
        id: "landscaping-l5",
        level: 5,
        name: "Landscape Design",
        description:
          "Landscape design documentation, master planning, WSUD principles, and project management.",
      },
    ],
  },
  {
    id: "safety",
    tradeName: "Safety & Site Management",
    shortName: "Safety",
    description:
      "Work health and safety, site coordination, risk management, and construction project supervision.",
    color: "oklch(68% 0.18 25)",
    svgX: 760,
    svgY: 600,
    svgWidth: 380,
    svgHeight: 160,
    capabilities: [
      {
        id: "safety-l1",
        level: 1,
        name: "WHS Fundamentals",
        description:
          "WHS Act obligations, hazard identification, incident reporting, and induction procedures.",
      },
      {
        id: "safety-l2",
        level: 2,
        name: "Risk Management",
        description:
          "Risk assessment matrices, SWMS preparation, permit-to-work systems, and emergency procedures.",
      },
      {
        id: "safety-l3",
        level: 3,
        name: "Site Supervision",
        description:
          "Trade coordination, subcontractor management, quality holdpoints, and programme monitoring.",
      },
      {
        id: "safety-l4",
        level: 4,
        name: "Construction Management",
        description:
          "Contract administration, variation management, cost control, and dispute resolution.",
      },
      {
        id: "safety-l5",
        level: 5,
        name: "Project Delivery",
        description:
          "Programme development, resource planning, stakeholder management, and project handover.",
      },
    ],
  },
  {
    id: "metalworking",
    tradeName: "Metalworking",
    shortName: "Metalwork",
    description:
      "Metal properties, cutting, grinding, welding, sheet metal fabrication, and heat treatment.",
    color: "oklch(55% 0.08 260)",
    svgX: 200,
    svgY: 520,
    svgWidth: 180,
    svgHeight: 60,
    capabilities: [
      {
        id: "metalworking-l1",
        level: 1 as const,
        name: "Metal Properties & Safety",
        description:
          "Ferrous vs non-ferrous metals, mechanical properties, PPE, and grinder safety.",
      },
      {
        id: "metalworking-l2",
        level: 2 as const,
        name: "Cutting & Grinding",
        description:
          "Hacksaw, angle grinder, plasma cutter, bench grinder, and cutting fluids.",
      },
      {
        id: "metalworking-l3",
        level: 3 as const,
        name: "Welding Fundamentals",
        description:
          "MIG, TIG, and stick welding processes, joint preparation, and weld quality.",
      },
      {
        id: "metalworking-l4",
        level: 4 as const,
        name: "Sheet Metal Fabrication",
        description:
          "Flat pattern development, bending, rolling, and fastening sheet metal.",
      },
      {
        id: "metalworking-l5",
        level: 5 as const,
        name: "Heat Treatment & Finishing",
        description:
          "Hardening, tempering, annealing, case hardening, and protective coatings.",
      },
    ],
  },
  {
    id: "machining",
    tradeName: "Machining",
    shortName: "Machining",
    description:
      "Precision machining using lathes, milling machines, drilling, boring, and CNC programming.",
    color: "oklch(48% 0.07 230)",
    svgX: 400,
    svgY: 520,
    svgWidth: 180,
    svgHeight: 60,
    capabilities: [
      {
        id: "machining-l1",
        level: 1 as const,
        name: "Safety & Measurement",
        description:
          "Machine shop safety, vernier calipers, micrometers, and tolerance concepts.",
      },
      {
        id: "machining-l2",
        level: 2 as const,
        name: "Lathe Operations",
        description:
          "Workholding, facing, parallel turning, step turning, and parting off.",
      },
      {
        id: "machining-l3",
        level: 3 as const,
        name: "Milling Fundamentals",
        description:
          "Milling vise setup, face milling, end milling, and climb vs conventional milling.",
      },
      {
        id: "machining-l4",
        level: 4 as const,
        name: "Drilling & Boring",
        description:
          "Centre drilling, twist drilling, reaming, and single-point boring for precision holes.",
      },
      {
        id: "machining-l5",
        level: 5 as const,
        name: "CNC Programming",
        description:
          "G-code structure, coordinate systems, tool offsets, canned cycles, and program verification.",
      },
    ],
  },
];
