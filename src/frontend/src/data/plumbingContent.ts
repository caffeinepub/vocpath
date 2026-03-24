import type { TradeModule } from "./woodworkingContent";

export const plumbingModules: TradeModule[] = [
  {
    id: "plumbing-fundamentals",
    tradeId: "plumbing",
    title: "Plumbing Fundamentals & Regulations",
    level: 1,
    durationMinutes: 20,
    summary:
      "Build a solid foundation in plumbing materials, essential hand tools, AS/NZS standards compliance, and the safe working practices that underpin every plumbing installation.",
    keyConcepts: [
      "Pipe Materials Comparison",
      "Plumbing Tools",
      "AS/NZS 3500 Standards",
      "Safe Work Practices",
      "Water Regulations",
    ],
    steps: [
      {
        id: "pf1",
        title: "Pipe Materials: Copper, PEX, CPVC & PVC",
        body: "Choosing the right pipe for the application is your first decision on any plumbing project. Copper (AS/NZS 1432) has been the gold standard for hot and cold water services for decades: it is durable, bacteriostatic, and can be soldered or press-fitted. Its weakness is cost and susceptibility to corrosion in aggressive soils or waters with low pH. PEX (cross-linked polyethylene) is flexible, freeze-resistant, and faster to install with push-fit or crimp fittings — but cannot be soldered and must be sleeved where exposed to UV. CPVC handles temperatures up to 93°C (versus PEX's 95°C) and is solvent-welded. Unplasticised PVC (uPVC) is used exclusively for cold-water and drainage applications — it softens above 60°C and is therefore unsuitable for hot water. Always confirm the pressure and temperature rating of any pipe against the system's maximum working conditions before installation.",
        visualCue:
          "Visualise four pipe samples side by side: a shiny copper tube, a red flexible PEX coil, a cream CPVC length, and a white uPVC drainage pipe — each labelled with its temperature limit and typical application.",
      },
      {
        id: "pf2",
        title: "Essential Plumbing Tools & Their Use",
        body: "A plumber's toolkit centres on cutting, joining, and pressure testing. The pipe cutter (wheeled type) creates a square, burr-free cut on copper and steel — never use a hacksaw where a clean, perpendicular end is required because a canted cut prevents a watertight joint. A tube reamer removes the internal burr left by the cutter; omit this step and the burr restricts flow and can cause a future failure. Press-fit tools (hydraulic or battery-operated) crimp a stainless-steel ring around an O-ring fitting in seconds — check the manufacturer's jaw colour matches the pipe diameter. Pipe benders avoid kinking: a spring bender suits small-bore copper; a lever or hydraulic bender suits larger diameters. A digital pressure gauge and hand pump are essential for the 1.5× working-pressure test required after every installation.",
        visualCue:
          "Picture a plumber's toolbag laid open: copper cutter top-left, reamer attached, press-fit tool centre, digital pressure gauge with hose to the right, spring benders coiled at the bottom — each item positioned with purpose, not thrown in randomly.",
      },
      {
        id: "pf3",
        title: "AS/NZS 3500: The Plumbing Code",
        body: "AS/NZS 3500 is the governing standard for plumbing and drainage installations in Australia and New Zealand. It is divided into four parts: Part 1 — Water services; Part 2 — Sanitary plumbing and drainage; Part 3 — Stormwater drainage; Part 4 — Heated water services. The standard specifies minimum pipe sizes, maximum hot water delivery temperatures (50°C at the outlet of fixtures accessible to children and the elderly), backflow prevention requirements, and trench depths for buried pipes. All plumbing work must comply with the Building Code of Australia (BCA) / National Construction Code (NCC) and local state regulations, which adopt AS/NZS 3500 as a deemed-to-comply pathway. A Certificate of Compliance for plumbing work must be provided to the building owner and submitted to the relevant authority.",
        visualCue:
          "Imagine a bookshelf with four volumes labelled AS/NZS 3500.1 through 3500.4: Part 1 (blue cover, water droplet), Part 2 (brown cover, drain icon), Part 3 (grey cover, roof), Part 4 (orange cover, hot water cylinder) — each representing a distinct installation domain.",
      },
      {
        id: "pf4",
        title: "Safe Working Practices in Plumbing",
        body: "Plumbing exposes tradespeople to hot water scalds, chemical drain cleaners, asbestos in older pipes and fittings, and confined space hazards in pits and tanks. Before opening any hot water pipe, ensure the system is isolated and depressurised — flashing steam from a pressurised copper line has caused severe burns. Soldering with an open flame requires a flame mat behind fittings and a fire blanket on standby; never solder near combustible insulation. Chemical drain cleaners (caustic soda, sulphuric acid) require full face shields, chemical-resistant gloves, and neutralisation materials on hand. Any work that disturbs suspected asbestos-containing materials must stop immediately — engage a licensed asbestos removalist. Under confined space regulations (AS 2865), a confined space entry permit and an external standby person are mandatory.",
        visualCue:
          "Visualise a plumber soldering a joint behind a kitchen cabinet: a ceramic fibre flame mat is propped against the timber carcass, a wet rag is clamped over the adjacent timber, and a fire extinguisher sits within arm's reach — three lines of fire defence in one image.",
      },
    ],
    quiz: [
      {
        id: "pfq1",
        question:
          "Which pipe material is suitable for a hot water supply at 70°C?",
        options: ["Standard uPVC", "Copper", "Stormwater PVC", "LDPE"],
        correctIndex: 1,
        explanation:
          "Copper is rated for continuous hot water service. uPVC softens above 60°C and is unsuitable for hot water; LDPE is a low-density polyethylene used in irrigation, not hot water.",
      },
      {
        id: "pfq2",
        question: "Why must a copper pipe end be reamed after cutting?",
        options: [
          "To increase the pipe's internal diameter",
          "To remove the internal burr that restricts flow and can cause joint failure",
          "Reaming is optional — it only improves appearance",
          "To create a larger surface area for soldering",
        ],
        correctIndex: 1,
        explanation:
          "The cutting wheel leaves a burr on the inside of the pipe. If not removed it restricts flow, creates turbulence, and can dislodge into fittings, causing leaks.",
      },
      {
        id: "pfq3",
        question:
          "What is the maximum permissible hot water temperature at fixtures accessible to young children under AS/NZS 3500.4?",
        options: ["60°C", "55°C", "50°C", "45°C"],
        correctIndex: 2,
        explanation:
          "AS/NZS 3500.4 requires a tempering or thermostatic mixing valve to limit the water temperature to 50°C at sanitary fixtures accessible to young children and the elderly.",
      },
      {
        id: "pfq4",
        question:
          "What is required before entering a confined space such as a sump pit to carry out plumbing work?",
        options: [
          "A hard hat and steel-capped boots only",
          "A confined space entry permit and an external standby person",
          "A gas detector but no other precautions",
          "Supervisor verbal approval",
        ],
        correctIndex: 1,
        explanation:
          "AS 2865 requires a confined space entry permit, atmospheric testing, and an external standby person who can summon rescue without entering the space.",
      },
    ],
  },
  {
    id: "water-supply-systems",
    tradeId: "plumbing",
    title: "Water Supply Systems",
    level: 2,
    durationMinutes: 25,
    summary:
      "Design and install cold and hot water supply pipework from the water main to fixtures, covering pressure regulation, copper and PEX installation, and hydraulic pressure testing.",
    keyConcepts: [
      "Mains Pressure & PRVs",
      "Pipe Sizing",
      "Copper Soldering Technique",
      "PEX Crimp Installation",
      "Hydraulic Pressure Testing",
    ],
    steps: [
      {
        id: "ws1",
        title: "Mains Pressure & Pressure Reducing Valves",
        body: "Mains water pressure varies widely — from 150 kPa in low-pressure rural areas to over 1 000 kPa in some urban zones. AS/NZS 3500.1 requires water services within a building to operate at a maximum of 500 kPa static pressure. Where the incoming pressure exceeds this, a pressure reducing valve (PRV) must be installed on the cold main upstream of any branch to the hot water system. A PRV reduces pressure to a preset value (typically 350–500 kPa) and maintains it regardless of flow fluctuations. Crucially, a PRV is not a backflow preventer — a separate backflow prevention device (check valve or RPZ) must be installed where there is risk of contamination of the mains supply.",
        visualCue:
          "Picture a cross-section of a house entry: the water main enters at 700 kPa; immediately after the stop cock sits a brass PRV, its spring and seat clearly visible; the pipe continues into the house at 400 kPa — a pressure gauge on each side of the PRV shows the difference.",
      },
      {
        id: "ws2",
        title: "Pipe Sizing for Adequate Flow",
        body: "Pipes must be sized to deliver adequate flow to all simultaneously operating fixtures without excessive pressure loss. The process begins with a loading unit (LU) count — each fixture type is assigned a loading unit value (WC = 1.8 LU, basin = 0.5 LU, shower = 0.7 LU, bath = 1.0 LU) from AS/NZS 3500.1 Table B1. Total LUs are converted to design flow rate using the probability conversion graph. The design flow rate, combined with the available pressure, pipe material, and run length, determines the minimum pipe diameter using the Hazen-Williams or Darcy-Weisbach flow charts. Under-sized pipes result in low flow at distant fixtures, especially during simultaneous use; over-sized pipes waste material and increase thermal capacity in hot water services.",
        visualCue:
          "Imagine a house plan with fixture counts annotated: 2 WCs (3.6 LU), 2 basins (1.0 LU), 2 showers (1.4 LU), 1 bath (1.0 LU) = 7.0 LU total. A conversion graph translates this to a design flow rate; pipe sizing tables then yield the required pipe diameters for each branch.",
      },
      {
        id: "ws3",
        title: "Soldering Copper: The Capillary Joint",
        body: "A soldered (capillary) joint relies on surface tension drawing molten solder into the narrow gap between the pipe and fitting. For it to work: clean both surfaces with emery cloth until bright and shiny — any oxidation prevents adhesion; apply a thin, even coat of flux to both surfaces immediately after cleaning to prevent re-oxidation; assemble the joint; heat the fitting body (not the solder wire) with a propane or MAPP torch until the flux bubbles, then touch the solder to the joint at the mouth — if the temperature is right it will be drawn in by capillary action. Do not over-heat; burnt flux causes a porous joint. Allow the joint to cool undisturbed for at least 30 seconds before applying water pressure. A correctly soldered joint requires only 2–3 mm of solder insertion per mm of pipe diameter.",
        visualCue:
          "Picture a sequence of three images: (1) the pipe end and fitting socket both cleaned to a bright shine; (2) flux applied, joint assembled, torch heating the fitting body; (3) solder wire touched to the joint mouth — a silver ring of solder wicks instantly into the gap and solidifies to a smooth, uniform fillet.",
      },
      {
        id: "ws4",
        title: "Hydraulic Pressure Testing",
        body: "Every new water supply installation must be pressure-tested before concealment and before connection to fixtures. AS/NZS 3500.1 requires the system to be filled with water, all air expelled, and pressure applied to 1.5 times the maximum working pressure (MWP). For a 500 kPa MWP system the test pressure is 750 kPa. Hold the test pressure for a minimum of 30 minutes with no pressure drop. Connect a calibrated pressure gauge at the lowest point of the system and a means of pressurising it (a hand pump or a test pump). Even a tiny leak will show as a pressure drop over 30 minutes — locate leaks by visual inspection (watching for drips) or by applying soapy water to joints. Document the test pressure, gauge reading at start and end, and duration on the compliance certificate.",
        visualCue:
          "Visualise a completed rough-in with capped pipe ends: a hand pump is connected at the base, a digital gauge reads 750 kPa, and a plumber notes the start time on a clipboard — knowing that a 750 kPa reading in 30 minutes means no hidden leaks.",
      },
    ],
    quiz: [
      {
        id: "wsq1",
        question:
          "What is the maximum permitted static water pressure inside a building under AS/NZS 3500.1?",
        options: ["250 kPa", "750 kPa", "500 kPa", "1 000 kPa"],
        correctIndex: 2,
        explanation:
          "AS/NZS 3500.1 limits maximum static pressure to 500 kPa inside the building. A PRV is required when mains pressure exceeds this.",
      },
      {
        id: "wsq2",
        question:
          "When soldering a copper joint, where should the solder wire be applied?",
        options: [
          "Directly to the torch flame",
          "To the pipe body, away from the fitting",
          "To the joint mouth, letting capillary action draw it in",
          "Solder should be pre-applied to the fitting socket",
        ],
        correctIndex: 2,
        explanation:
          "Solder is applied at the joint mouth when the fitting reaches correct temperature; capillary action draws it into the annular gap, creating a fully-filled joint.",
      },
      {
        id: "wsq3",
        question:
          "A system has a maximum working pressure of 600 kPa. What is the required hydraulic test pressure?",
        options: ["600 kPa", "750 kPa", "900 kPa", "1 200 kPa"],
        correctIndex: 2,
        explanation: "Test pressure = 1.5 × MWP = 1.5 × 600 = 900 kPa.",
      },
      {
        id: "wsq4",
        question: "What does a PRV NOT protect against?",
        options: [
          "Excess pressure from the mains",
          "Pressure fluctuations affecting fixtures",
          "Backflow and contamination of the mains supply",
          "Water hammer from sudden valve closure",
        ],
        correctIndex: 2,
        explanation:
          "A PRV reduces and regulates pressure only. Backflow prevention requires a separate check valve or reduced pressure zone (RPZ) device.",
      },
    ],
  },
  {
    id: "drainage-waste-vent",
    tradeId: "plumbing",
    title: "Drainage, Waste & Vent Systems",
    level: 3,
    durationMinutes: 25,
    summary:
      "Understand trap principles, correct fall gradients, venting requirements, and how to systematically diagnose and clear drainage blockages.",
    keyConcepts: [
      "Trap Seal Principles",
      "Drainage Falls & Gradients",
      "Venting Methods",
      "Blockage Diagnosis",
      "uPVC Solvent Welding",
    ],
    steps: [
      {
        id: "dv1",
        title: "Trap Seal Principles",
        body: "Every sanitary fixture must discharge through a trap — a section of pipe that retains a water seal, preventing foul sewer gases (hydrogen sulphide, methane) from entering the building. The minimum trap seal depth is 50 mm under AS/NZS 3500.2. Traps lose their seal through four mechanisms: evaporation (rarely used floor wastes in dry climates), self-siphonage (a fast-flowing discharge creates a partial vacuum that sucks the seal out behind it), induced siphonage (discharge from an adjacent fixture creates negative pressure in the shared branch), and back-pressure (positive pressure from a blocked or restricted vent pushes gas through the seal). Understanding the failure mechanism guides the fix: a siphoning trap needs venting or a deeper seal; an evaporating trap needs a trapped floor waste with a priming mechanism.",
        visualCue:
          "Picture a P-trap under a basin: the curved section holds 60 mm of water (the seal). An arrow above the drain shows the direction of discharge; a dotted line shows where the seal level sits; a cross-section cuts through the trap to show the water body inside.",
      },
      {
        id: "dv2",
        title: "Drainage Gradients & Self-Cleansing Velocity",
        body: "Drainage pipes must flow at a gradient that achieves self-cleansing velocity — fast enough to carry solids without depositing them, but not so fast that liquid outruns solid waste, leaving solids to build up. AS/NZS 3500.2 specifies a minimum grade of 1:60 (16.7 mm per metre) for DN100 pipes in most applications; up to 1:40 for smaller branches. The self-cleansing velocity is approximately 0.75 m/s for waste pipes. Too little fall (1:200 or flatter) causes sediment build-up and blockages. Too much fall (steeper than 1:12 for DN100 in many applications) can cause hydraulic jump — the pipe flows full and creates siphonic action that empties traps. Mark and check grades with a spirit level and measuring tape at every connection point.",
        visualCue:
          "Visualise a cut-away drainage pipe running from a basin to the stack: a spirit level shows 16 mm of fall over 1 m of run — exactly 1:60. Arrows inside the pipe show liquid and solid waste travelling together at consistent velocity to the drain stack.",
      },
      {
        id: "dv3",
        title: "Venting Methods: Individual, Common & Air Admittance",
        body: "Venting provides an air path above the trap seal to equalise pressure during discharge, preventing siphonage. Individual venting runs a vent pipe from each trap arm to open air — the most reliable method but requires the most pipework. Common venting groups several fixture vents into a shared vent pipe, reducing the number of roof penetrations. A revent (circuit vent) loops a branch vent pipe back to the main vent stack above the flood level of the highest fixture — effective for back-of-wall bathroom groups. Air admittance valves (AAVs, or Durgo valves) are spring-loaded valves that open under negative pressure to admit air and close under positive pressure or atmospheric conditions — they eliminate roof penetrations but cannot be used as the sole means of venting a sanitary drainage system; at least one stack vent to atmosphere is always required.",
        visualCue:
          "Imagine a three-bathroom house plan: individual vent pipes from WC, basin, and shower connect to a common vent riser that exits through the roof. In the ensuite a single AAV is mounted above the cistern — supplementing (not replacing) the main vent stack.",
      },
      {
        id: "dv4",
        title: "Diagnosing & Clearing Blockages",
        body: "Systematic diagnosis prevents hours of wasted effort. Start at the symptom: is it a single fixture (local blockage) or multiple fixtures (shared drain or stack blockage)? A basin that gurgles when the WC flushes indicates a shared branch with venting issues. Check cleanout access points for the level at which drains flow freely. A CCTV inspection camera (electric eel probe with camera attachment) confirms the blockage type before choosing a remedy. A hand auger suits branch-line hair-and-soap blockages. An electric drain machine (25–50 mm drum cable) suits kitchen grease build-up in 100 mm branches. High-pressure water jetting (3 000 psi) clears root intrusion, scale, and compacted grease in larger drains — but should not be used on push-fit PVC joints as the force can dislodge them.",
        visualCue:
          "Picture a plumber with a tablet showing a CCTV camera image inside a 100 mm drain: a cluster of tree roots fills the pipe. The image timestamp and pipe run details are overlaid. The plumber selects a jetter nozzle from a case — the diagnosis dictates the tool.",
      },
    ],
    quiz: [
      {
        id: "dvq1",
        question:
          "What is the minimum trap seal depth required by AS/NZS 3500.2?",
        options: ["25 mm", "38 mm", "50 mm", "75 mm"],
        correctIndex: 2,
        explanation:
          "AS/NZS 3500.2 requires a minimum 50 mm water seal depth in all traps to prevent foul gas entry under normal operating conditions.",
      },
      {
        id: "dvq2",
        question:
          "What drainage gradient does AS/NZS 3500.2 specify as a minimum for DN100 waste pipes?",
        options: ["1:100", "1:80", "1:60", "1:40"],
        correctIndex: 2,
        explanation:
          "1:60 is the standard minimum fall for DN100 drainage, achieving a self-cleansing velocity without causing hydraulic jump.",
      },
      {
        id: "dvq3",
        question:
          "An air admittance valve (AAV) opens under which pressure condition?",
        options: [
          "Positive pressure (back-pressure from the drain)",
          "Atmospheric pressure",
          "Negative pressure (siphonic draw during discharge)",
          "AAVs are always open",
        ],
        correctIndex: 2,
        explanation:
          "AAVs open under negative pressure to admit air (preventing siphonage) and close under positive pressure to keep foul gas inside the drain.",
      },
      {
        id: "dvq4",
        question:
          "Multiple fixtures in a bathroom are all draining slowly. What does this most likely indicate?",
        options: [
          "Every fixture has its own individual blockage",
          "A shared drain branch or main stack blockage downstream of all the fixtures",
          "The hot water system has failed",
          "All the trap seals have evaporated",
        ],
        correctIndex: 1,
        explanation:
          "Multiple fixtures affected simultaneously points to a blockage in the common drain serving those fixtures — not individual trap or branch issues.",
      },
    ],
  },
  {
    id: "hot-water-systems",
    tradeId: "plumbing",
    title: "Hot Water Systems",
    level: 4,
    durationMinutes: 30,
    summary:
      "Compare storage and instantaneous water heaters, solar and heat-pump systems, tempering valve requirements, and Legionella risk management in heated water services.",
    keyConcepts: [
      "Storage vs Instantaneous",
      "Solar & Heat Pump HWS",
      "Tempering Valves",
      "Expansion & Relief Valves",
      "Legionella Management",
    ],
    steps: [
      {
        id: "hw1",
        title: "Storage vs Instantaneous Hot Water Systems",
        body: "Storage water heaters heat a large volume (50–400 L) to the thermostat setpoint and maintain it, using energy continuously to offset standing losses (typically 1–3 kWh/day for an uninsulated unit). They deliver high flow rates for simultaneous use — ideal for households with multiple bathrooms. Instantaneous (continuous flow) heaters heat water on demand, using a large heat exchanger and a high-capacity gas burner or electric element. They consume energy only when flow is detected, eliminating standing losses — but they require significant gas capacity (typically 200 MJ/h for a whole-house unit) and may struggle to supply multiple showers simultaneously at high flow rates. The right choice depends on household size, tariff structure, and whether gas infrastructure exists.",
        visualCue:
          "Imagine two appliances side by side: on the left a 250 L storage tank with its electric element at the base, temperature-pressure relief valve on the side, and standing losses radiating from the jacket; on the right a slim instantaneous gas unit with a heat exchanger core, flow sensor, and modulating burner — zero standing losses.",
      },
      {
        id: "hw2",
        title: "Solar & Heat Pump Hot Water Systems",
        body: "Solar hot water systems use roof-mounted collectors (flat plate or evacuated tube) to transfer heat from sunlight into a storage tank. Thermosiphon systems rely on natural convection — the tank must be above the collectors (roof-mounted tank); split systems use a pump and controller to circulate fluid between ground-level or indoor tanks and roof collectors. A gas or electric booster ensures supply on overcast days. Heat pump water heaters extract latent heat from ambient air (like a reverse refrigerator), delivering 3–4 units of heat energy per unit of electrical energy consumed (COP 3–4). They are significantly more efficient than resistive electric elements but require adequate ambient air volume and generate noise — avoid installing adjacent to bedrooms. Both system types qualify for STCs (Small-scale Technology Certificates) under Australia's Renewable Energy Target, substantially reducing purchase cost.",
        visualCue:
          "Visualise a house cross-section: on the roof, evacuated tube collectors absorbing sunlight; a pipe runs down to a ground-level storage tank; a small circulation pump and differential controller are mounted on the tank — and a gas booster at the tank's base provides backup on cloudy days.",
      },
      {
        id: "hw3",
        title: "Tempering Valves & Expansion Management",
        body: "Hot water storage tanks are set at a minimum of 60°C to kill Legionella bacteria, but water at 60°C causes third-degree burns in less than five seconds. AS/NZS 3500.4 requires a tempering valve (thermostatic mixing valve set to ≤ 50°C) to be installed on the outlet of all storage water heaters serving fixtures accessible to children and the elderly. The tempering valve blends stored hot water with cold to deliver a safe temperature. Separately, all storage water heaters require a temperature and pressure relief (TPR) valve rated to open before the tank reaches 210°C or 1 000 kPa. The TPR valve discharge pipe must run to a safe tundish or external drain — never upwards or to a closed container. A check valve (non-return valve) on the cold supply and an expansion control valve together manage the pressure rise as water heats and expands in a closed system.",
        visualCue:
          "Picture a hot water cylinder schematic: cold in at the base through a check valve and expansion valve; hot out at the top through a tempering valve (set to 50°C); a TPR valve midway on the side with a drain pipe running to the floor and out; temperature probe arrows showing 65°C inside the tank and 48°C at the outlet.",
      },
      {
        id: "hw4",
        title: "Legionella Risk in Heated Water Services",
        body: "Legionella pneumophila bacteria proliferate between 25°C and 45°C and are killed within minutes at 60°C. Building water systems that maintain stagnant warm water at 30–40°C — particularly dead legs, infrequently used branches, and cooling towers — are high-risk environments. AS/NZS 3666 governs Legionella risk management in large building water systems. For domestic systems, the practical controls are: store water at ≥ 60°C; ensure all remote outlets can achieve 60°C within 60 seconds (no dead legs longer than 3 m of ≤ 25 mm pipe); flush infrequently used outlets weekly; and maintain a tempering valve to protect users from scalding. In healthcare and aged-care settings, a full written Water Safety Plan is mandatory and must include regular bacteriological sampling of water.",
        visualCue:
          "Visualise a graph showing Legionella growth rate on the Y-axis and temperature on the X-axis: near-zero growth below 20°C, rapid proliferation from 25–45°C (highlighted in red), then a steep decline above 50°C, with a 'kill zone' marked clearly above 60°C.",
      },
    ],
    quiz: [
      {
        id: "hwq1",
        question:
          "What is the minimum storage temperature for a hot water service to control Legionella risk?",
        options: ["50°C", "55°C", "60°C", "70°C"],
        correctIndex: 2,
        explanation:
          "Legionella bacteria are killed within minutes at 60°C. AS/NZS 3500.4 requires storage at ≥ 60°C.",
      },
      {
        id: "hwq2",
        question:
          "Why must the discharge pipe from a TPR valve not terminate upwards or in a closed space?",
        options: [
          "Upward termination reduces flow efficiency",
          "The valve would be unable to reset after activation",
          "Scalding water and steam must discharge safely to a drain — blocking the discharge traps dangerous pressure",
          "This is only a cosmetic requirement",
        ],
        correctIndex: 2,
        explanation:
          "If the TPR discharge is restricted, the over-pressure it is designed to relieve cannot escape, defeating the safety device and risking a catastrophic tank failure.",
      },
      {
        id: "hwq3",
        question:
          "What coefficient of performance (COP) does a heat pump water heater typically achieve?",
        options: ["0.5–1.0", "1.0–1.5", "2.0–2.5", "3.0–4.0"],
        correctIndex: 3,
        explanation:
          "Heat pump water heaters deliver 3–4 units of thermal energy per unit of electrical energy consumed by moving (not generating) heat from ambient air.",
      },
      {
        id: "hwq4",
        question:
          "A tempering valve is set to 50°C. What does this protect against?",
        options: [
          "Legionella growth in the storage tank",
          "Scalding injury at sanitary fixtures from 60°C stored water",
          "Pipe freezing in cold climates",
          "Excessive pressure in the cold water supply",
        ],
        correctIndex: 1,
        explanation:
          "The tempering valve blends hot storage water with cold to deliver a safe temperature at fixtures, preventing scalding. Legionella control is handled by the storage temperature, not the tempering valve.",
      },
    ],
  },
  {
    id: "fixtures-fittings",
    tradeId: "plumbing",
    title: "Fixtures & Fittings Installation",
    level: 5,
    durationMinutes: 30,
    summary:
      "Install and commission WCs, basins, showers, baths, and isolation valves to professional standards with correct sealing, levelling, and final commissioning.",
    keyConcepts: [
      "WC Suite Installation",
      "Basin & Tapware",
      "Shower Membrane & Waterproofing",
      "Bath Installation",
      "Isolation Valves & Commissioning",
    ],
    steps: [
      {
        id: "ff1",
        title: "WC Suite Installation",
        body: "A close-coupled WC suite consists of the pan, cistern, and connecting hardware. Anchor the pan to the floor with screws through the fixing holes into a timber noggin or concrete expansion anchors — never over-tighten, as vitreous china cracks under uneven load. The pan outlet (P-trap or S-trap) must connect to the floor or wall waste collar with a rubber push-fit spigot, sealed with a silicone bead at the finished floor. Use a long-life braided flexible hose (not plastic push-fit) to connect the cistern fill valve to the stop cock — braided hoses fail without warning and have caused extensive water damage. Adjust the cistern fill valve to the correct water level mark and test the flush mechanism for a clean, single-flush clearance without siphon noise.",
        visualCue:
          "Visualise an exploded view of a close-coupled WC: floor bolts through the pan base, rubber collar on the waste outlet, cistern seated on the pan with rubber cushion, braided supply hose connecting cistern inlet to wall stop cock — each connection labelled with its key requirement.",
      },
      {
        id: "ff2",
        title: "Basin Tapware & Waste Connections",
        body: "Wall-hung and vanity basins require the tapware to be installed before the basin is fixed — it is nearly impossible to reach fixing nuts once the basin is in place. A basin mixer body is inserted through the tap hole from above; the mounting nut, metal washer, and rubber gasket are tightened from below. Connecting water supply tails use flexible braided hoses (cold right, hot left — the universal plumbing convention in the Southern Hemisphere). The click-clack pop-up waste connects to the drain with a flat rubber washer above the basin and a nylon nut below; apply a thin smear of plumber's silicone above the basket, not below. Set the basin level with packers if needed before siliconing the back edge to the wall — a 6 mm round bead at the wall joint allows for thermal movement without cracking.",
        visualCue:
          "Picture a vanity basin being installed: a hand reaches under the unit to tighten a mixer mounting nut with a basin wrench; braided hoses are connected (cold right, hot left); a pop-up waste clicks into place from above — the basin edge shows a neat 6 mm silicone bead against the tile.",
      },
      {
        id: "ff3",
        title: "Shower Waterproofing & Screen Installation",
        body: "A shower enclosure is a wet area under AS 3740 (Waterproofing of wet areas in residential buildings). The waterproofing membrane (sheet or liquid-applied) must extend 150 mm above the shower floor on all walls, 50 mm over the hob, and over the full shower floor and 25 mm down inside the waste collar. The membrane must cure fully before tiling — typically 24–48 hours for liquid membranes. The shower waste must be flush with the finished tile surface and sloped toward it — a 1:60 fall on the shower floor is the minimum. The chrome waste collar is bedded in neutral-cure silicone (never acetic-cure silicone near zinc or brass, as the acetic acid causes dezincification). Frame-less shower screens require a structural fixing into a solid substrate — stud walls must have a full-height noggin behind the glass clamp location.",
        visualCue:
          "Visualise a shower alcove at the waterproofing stage: a grey liquid membrane has been rolled up 150 mm on all three walls and across the full floor, with the waste collar taped and sealed; the hob shows the membrane folding over the top edge — all junctions reinforced with fibreglass bandage tape embedded in the wet membrane.",
      },
      {
        id: "ff4",
        title: "Commissioning & Final Sign-Off",
        body: "Commissioning is the systematic process of confirming every installed component works correctly before handover. The sequence: (1) Open isolation valves one at a time and check for leaks at every connection. (2) Check cold and hot supply to each fixture — correct pressure and temperature. (3) Verify tempering valve outlet temperature at each fixture with a thermometer (must read ≤ 50°C for child-accessible fixtures). (4) Check all wastes and drains flow freely — pour a bucket of water into every floor waste to confirm it drains. (5) Flush each WC three times and confirm no leaks at the supply hose, cistern, or pan connections. (6) Test all stop cocks and isolating valves for full open/close operation — a valve that cannot be closed fully renders the entire system non-compliant. Document all results on the Certificate of Compliance and hand it to the building owner.",
        visualCue:
          "Picture a plumber with a commissioning checklist on a tablet: each row has a fixture name, supply pressure, hot/cold temperature readings, drain test result, and a green tick or red cross. The bottom row shows the tempering valve outlet measured at 47°C — within the 50°C maximum — with a green tick.",
      },
    ],
    quiz: [
      {
        id: "ffq1",
        question:
          "Why should over-tightening be avoided when fixing a vitreous china WC pan to the floor?",
        options: [
          "It prevents future removal",
          "Vitreous china cracks under uneven clamping force",
          "It corrodes the floor fixing bolts",
          "Over-tightening is only a problem with plastic pans",
        ],
        correctIndex: 1,
        explanation:
          "Vitreous china is brittle ceramic — it cracks when subjected to concentrated point loads or torque, typically around fixing holes.",
      },
      {
        id: "ffq2",
        question:
          "Under AS 3740, how high must a shower waterproofing membrane extend up the walls?",
        options: ["50 mm", "100 mm", "150 mm", "200 mm"],
        correctIndex: 2,
        explanation:
          "AS 3740 requires the membrane to extend a minimum of 150 mm above the shower floor on all internal shower walls.",
      },
      {
        id: "ffq3",
        question:
          "When connecting tapware supply hoses, which side is the cold water supply by convention in Australia?",
        options: [
          "Left side",
          "Right side",
          "Either — there is no convention",
          "Cold is always at the top",
        ],
        correctIndex: 1,
        explanation:
          "Australian plumbing convention is cold right, hot left — consistent with most tapware markings and AS/NZS 3500.1.",
      },
      {
        id: "ffq4",
        question:
          "What is the final document that must be provided to the building owner after completing a plumbing installation?",
        options: [
          "A material safety data sheet",
          "A Certificate of Compliance for the plumbing work",
          "The installer's personal licence card",
          "The brand warranty cards for each fixture",
        ],
        correctIndex: 1,
        explanation:
          "A Certificate of Compliance (or equivalent regulatory document) is a legal requirement in all Australian and NZ jurisdictions and must be provided to the owner and submitted to the relevant authority.",
      },
    ],
  },
];
