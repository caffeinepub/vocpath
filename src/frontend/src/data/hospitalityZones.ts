import type { BuildingZone } from "./buildingZones";

export const hospitalityZones: BuildingZone[] = [
  {
    id: "commercial-cookery",
    tradeName: "Commercial Cookery",
    shortName: "Cookery",
    description:
      "Knife skills, cooking methods, stock and sauce preparation, menu planning, and kitchen organisation for commercial kitchens.",
    color: "oklch(60% 0.16 45)",
    svgX: 50,
    svgY: 50,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "commercial-cookery-l1",
        level: 1,
        name: "Knife Skills & Mise en Place",
        description:
          "Correct grip, blade care, cutting techniques, and station preparation before service.",
      },
      {
        id: "commercial-cookery-l2",
        level: 2,
        name: "Cooking Methods",
        description:
          "Moist and dry heat methods including boiling, steaming, roasting, frying, and braising.",
      },
      {
        id: "commercial-cookery-l3",
        level: 3,
        name: "Stocks & Sauces",
        description:
          "Five mother sauces, stock types, reduction techniques, and seasoning principles.",
      },
      {
        id: "commercial-cookery-l4",
        level: 4,
        name: "Menu Planning",
        description:
          "Yield testing, portion control, food cost percentage, and seasonal menu development.",
      },
      {
        id: "commercial-cookery-l5",
        level: 5,
        name: "Kitchen Management",
        description:
          "Brigade system, service communication, cleaning schedules, and shift leadership.",
      },
    ],
  },
  {
    id: "food-safety",
    tradeName: "Food Safety & Hygiene",
    shortName: "Food Safety",
    description:
      "Food handling, temperature control, contamination prevention, HACCP principles, and regulatory compliance for food service.",
    color: "oklch(55% 0.14 160)",
    svgX: 250,
    svgY: 50,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "food-safety-l1",
        level: 1,
        name: "Personal Hygiene",
        description:
          "Handwashing technique, uniform standards, illness reporting, and jewellery restrictions.",
      },
      {
        id: "food-safety-l2",
        level: 2,
        name: "Temperature Control",
        description:
          "The 5-60 degree danger zone, correct storage temperatures, and thermometer calibration.",
      },
      {
        id: "food-safety-l3",
        level: 3,
        name: "Cross-Contamination",
        description:
          "Colour-coded equipment, allergen management, and effective surface sanitisation.",
      },
      {
        id: "food-safety-l4",
        level: 4,
        name: "HACCP Principles",
        description:
          "Seven HACCP principles, identifying critical control points, and monitoring procedures.",
      },
      {
        id: "food-safety-l5",
        level: 5,
        name: "Food Safety Legislation",
        description:
          "Food Standards Code compliance, council inspection preparation, and record keeping.",
      },
    ],
  },
  {
    id: "barista",
    tradeName: "Barista & Café Service",
    shortName: "Barista",
    description:
      "Coffee science, espresso technique, milk texturing, café workflow, and customer service in a café environment.",
    color: "oklch(65% 0.14 35)",
    svgX: 50,
    svgY: 210,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "barista-l1",
        level: 1,
        name: "Coffee Origins & Roasting",
        description:
          "Bean varieties, growing regions, processing methods, and how roast profiles affect flavour.",
      },
      {
        id: "barista-l2",
        level: 2,
        name: "Espresso Fundamentals",
        description:
          "Grind calibration, dose, tamp, extraction time, and how to diagnose over/under extraction.",
      },
      {
        id: "barista-l3",
        level: 3,
        name: "Milk Texturing & Latte Art",
        description:
          "Steaming technique, microfoam, temperature targets, and pouring basic latte art patterns.",
      },
      {
        id: "barista-l4",
        level: 4,
        name: "Café Workflow & Equipment",
        description:
          "Bar layout, equipment cleaning schedules, rush service workflow, and equipment troubleshooting.",
      },
      {
        id: "barista-l5",
        level: 5,
        name: "Specialty Coffee & Customer Service",
        description:
          "Specialty grading, sensory evaluation, menu knowledge, and handling customer complaints.",
      },
    ],
  },
  {
    id: "hotel-operations",
    tradeName: "Hotel & Front Office Operations",
    shortName: "Hotel Ops",
    description:
      "Check-in and check-out procedures, reservations, guest services, complaint handling, and housekeeping coordination.",
    color: "oklch(58% 0.12 270)",
    svgX: 250,
    svgY: 210,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "hotel-operations-l1",
        level: 1,
        name: "Front Desk Fundamentals",
        description:
          "Check-in and check-out procedures, key systems, room types, and guest communication standards.",
      },
      {
        id: "hotel-operations-l2",
        level: 2,
        name: "Reservations & Room Management",
        description:
          "Booking systems, occupancy management, upselling techniques, and cancellation policies.",
      },
      {
        id: "hotel-operations-l3",
        level: 3,
        name: "Guest Services",
        description:
          "Concierge services, special requests, accessibility needs, and local knowledge for guests.",
      },
      {
        id: "hotel-operations-l4",
        level: 4,
        name: "Complaints & Service Recovery",
        description:
          "De-escalation techniques, compensation guidelines, follow-up procedures, and feedback recording.",
      },
      {
        id: "hotel-operations-l5",
        level: 5,
        name: "Housekeeping Coordination",
        description:
          "Room status systems, cleaning standards, linen management, and interdepartmental communication.",
      },
    ],
  },
  {
    id: "event-management",
    tradeName: "Event Management",
    shortName: "Events",
    description:
      "Event planning process, supplier coordination, budgeting, on-site management, and post-event review for professional events.",
    color: "oklch(62% 0.15 320)",
    svgX: 50,
    svgY: 370,
    svgWidth: 380,
    svgHeight: 130,
    capabilities: [
      {
        id: "event-management-l1",
        level: 1,
        name: "Event Planning Fundamentals",
        description:
          "Event types, brief development, timeline creation, and stakeholder communication basics.",
      },
      {
        id: "event-management-l2",
        level: 2,
        name: "Budgeting & Finance",
        description:
          "Event budgets, cost tracking, contingency planning, and invoicing suppliers and clients.",
      },
      {
        id: "event-management-l3",
        level: 3,
        name: "Supplier & Venue Coordination",
        description:
          "Venue selection, supplier briefing, contracts, run-of-show documents, and WHS on site.",
      },
      {
        id: "event-management-l4",
        level: 4,
        name: "On-Site Event Management",
        description:
          "Bump-in procedures, team briefing, managing incidents, and real-time problem solving.",
      },
      {
        id: "event-management-l5",
        level: 5,
        name: "Post-Event Review",
        description:
          "Debrief reports, attendee feedback analysis, financial reconciliation, and continuous improvement.",
      },
    ],
  },
];
