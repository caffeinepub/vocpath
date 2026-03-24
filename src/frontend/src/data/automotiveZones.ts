import type { BuildingZone } from "./buildingZones";

export const automotiveZones: BuildingZone[] = [
  {
    id: "auto-mechanics",
    tradeName: "Auto Mechanics",
    shortName: "Auto Mechanics",
    description:
      "Engine systems, brakes, suspension, electrical, and diagnostic techniques for light vehicles.",
    color: "oklch(58% 0.14 30)",
    svgX: 100,
    svgY: 100,
    svgWidth: 200,
    svgHeight: 150,
    capabilities: [
      {
        id: "auto-mechanics-l1",
        level: 1,
        name: "Engine Fundamentals",
        description:
          "Four-stroke cycle, engine components, compression ratio, and specifications.",
      },
      {
        id: "auto-mechanics-l2",
        level: 2,
        name: "Lubrication & Cooling",
        description:
          "Oil circulation, viscosity grades, service intervals, and cooling system operation.",
      },
      {
        id: "auto-mechanics-l3",
        level: 3,
        name: "Brakes & Suspension",
        description:
          "Disc and drum brakes, brake fluid, suspension types, and inspection procedures.",
      },
      {
        id: "auto-mechanics-l4",
        level: 4,
        name: "Automotive Electrical",
        description:
          "12V system, battery and alternator testing, fuses, relays, and multimeter diagnostics.",
      },
      {
        id: "auto-mechanics-l5",
        level: 5,
        name: "Diagnostics",
        description:
          "OBD-II fault codes, live data, freeze frame, and the six-step diagnostic process.",
      },
    ],
  },
  {
    id: "diesel-engines",
    tradeName: "Diesel Engines",
    shortName: "Diesel",
    description:
      "Compression ignition principles, fuel injection systems, turbocharging, emissions, and service.",
    color: "oklch(45% 0.1 250)",
    svgX: 320,
    svgY: 100,
    svgWidth: 200,
    svgHeight: 150,
    capabilities: [
      {
        id: "diesel-engines-l1",
        level: 1,
        name: "Combustion Cycle",
        description:
          "Compression ignition, cetane rating, glow plugs, and diesel vs petrol comparison.",
      },
      {
        id: "diesel-engines-l2",
        level: 2,
        name: "Fuel Injection Systems",
        description:
          "Inline pump, distributor pump, common rail injection, and injector testing.",
      },
      {
        id: "diesel-engines-l3",
        level: 3,
        name: "Turbocharging",
        description:
          "Turbocharger operation, boost pressure, wastegate, VGT, and intercooler.",
      },
      {
        id: "diesel-engines-l4",
        level: 4,
        name: "Emissions & Aftertreatment",
        description:
          "DPF, DPF regeneration, SCR/AdBlue, and EGR system operation.",
      },
      {
        id: "diesel-engines-l5",
        level: 5,
        name: "Diesel Maintenance",
        description:
          "Service schedule, fuel and air filtration, coolant, and timing components.",
      },
    ],
  },
  {
    id: "auto-electrical",
    tradeName: "Auto Electrical",
    shortName: "Auto Electrical",
    description:
      "Vehicle electrical systems, sensors, CAN bus diagnostics, and scan tool techniques for modern vehicles.",
    color: "oklch(60% 0.16 200)",
    svgX: 540,
    svgY: 100,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "auto-electrical-l1",
        level: 1,
        name: "12V Systems",
        description: "Battery, alternator, earth paths, fuses, and relays.",
      },
      {
        id: "auto-electrical-l2",
        level: 2,
        name: "Lighting & Accessories",
        description:
          "Headlight circuits, accessory wiring, cable sizing, and connectors.",
      },
      {
        id: "auto-electrical-l3",
        level: 3,
        name: "Starting & Charging",
        description:
          "Battery load testing, alternator diagnosis, and parasitic drain.",
      },
      {
        id: "auto-electrical-l4",
        level: 4,
        name: "Sensors & Actuators",
        description:
          "5V reference circuits, NTC thermistors, Hall effect sensors, and actuator testing.",
      },
      {
        id: "auto-electrical-l5",
        level: 5,
        name: "CAN Bus & Scan Tools",
        description:
          "CAN bus architecture, OBD-II, fault codes, live data, and bi-directional testing.",
      },
    ],
  },
  {
    id: "brakes-suspension",
    tradeName: "Brakes & Suspension",
    shortName: "Brakes",
    description:
      "Hydraulic brake systems, suspension geometry, wheel alignment, ABS, ESC, and roadworthiness inspection.",
    color: "oklch(52% 0.18 15)",
    svgX: 100,
    svgY: 270,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "brakes-suspension-l1",
        level: 1,
        name: "Brake Fundamentals",
        description:
          "Hydraulic principles, disc and drum brakes, brake fluid, and fade.",
      },
      {
        id: "brakes-suspension-l2",
        level: 2,
        name: "Suspension & Geometry",
        description:
          "Suspension types, camber, caster, toe, and tyre wear patterns.",
      },
      {
        id: "brakes-suspension-l3",
        level: 3,
        name: "Inspection & Service",
        description:
          "Pad and disc measurement, wheel bearing, ball joints, and tie rods.",
      },
      {
        id: "brakes-suspension-l4",
        level: 4,
        name: "ABS & ESC",
        description:
          "Anti-lock braking, stability control, modulator service, and fault diagnosis.",
      },
      {
        id: "brakes-suspension-l5",
        level: 5,
        name: "Advanced Alignment",
        description:
          "4-wheel alignment, thrust angle, ride height, handling diagnosis, and modifications.",
      },
    ],
  },
  {
    id: "heavy-vehicle",
    tradeName: "Heavy Vehicle Operations",
    shortName: "Heavy Vehicle",
    description:
      "Class 11/12 vehicle operation, pre-start inspections, load management, and fatigue management for road transport.",
    color: "oklch(52% 0.09 220)",
    svgX: 500,
    svgY: 20,
    svgWidth: 220,
    svgHeight: 100,
    capabilities: [
      {
        id: "heavy-vehicle-l1",
        level: 1,
        name: "Vehicle Pre-Start & Safety",
        description:
          "Daily pre-start inspection checklist, defect reporting, and roadworthiness requirements for Class 11/12 vehicles.",
      },
      {
        id: "heavy-vehicle-l2",
        level: 2,
        name: "Road Transport Law",
        description:
          "Heavy vehicle licensing, mass and dimension limits, speed management, and national transport regulations.",
      },
      {
        id: "heavy-vehicle-l3",
        level: 3,
        name: "Load Restraint & Mass Management",
        description:
          "Load restraint methods, centre of gravity, axle mass limits, PBS schemes, and consignment documentation.",
      },
      {
        id: "heavy-vehicle-l4",
        level: 4,
        name: "Advanced Driving Techniques",
        description:
          "Hill starts, reversing, low-range driving, trailer coupling, and hazard awareness at highway speeds.",
      },
      {
        id: "heavy-vehicle-l5",
        level: 5,
        name: "Fatigue & Chain of Responsibility",
        description:
          "Work and rest rules, BFM/AFM accreditation, telematics, and CoR obligations for drivers, schedulers, and operators.",
      },
    ],
  },
  {
    id: "logistics",
    tradeName: "Logistics & Warehousing",
    shortName: "Logistics",
    description:
      "Warehouse operations, inventory management, forklift operations, supply chain basics, and dangerous goods handling.",
    color: "oklch(60% 0.1 175)",
    svgX: 740,
    svgY: 20,
    svgWidth: 220,
    svgHeight: 100,
    capabilities: [
      {
        id: "logistics-l1",
        level: 1,
        name: "Warehousing Fundamentals",
        description:
          "Warehouse layout, receiving, put-away, pick-and-pack, and despatch processes.",
      },
      {
        id: "logistics-l2",
        level: 2,
        name: "Forklift Operations",
        description:
          "LO licence requirements, pre-operational checks, load capacity, racking systems, and pedestrian safety.",
      },
      {
        id: "logistics-l3",
        level: 3,
        name: "Inventory & Stock Control",
        description:
          "Inventory systems, cycle counting, FIFO/FEFO, shrinkage, and barcode/RFID scanning.",
      },
      {
        id: "logistics-l4",
        level: 4,
        name: "Supply Chain Basics",
        description:
          "Supply chain structure, procurement, lead times, 3PL relationships, and KPI measurement.",
      },
      {
        id: "logistics-l5",
        level: 5,
        name: "Dangerous Goods & Compliance",
        description:
          "DG classifications, packaging, labelling, storage segregation, and ADG Code documentation.",
      },
    ],
  },
];
