import type { TradeModule } from "./woodworkingContent";

export const steelModules: TradeModule[] = [
  {
    id: "steel-welding-fundamentals",
    tradeId: "steel",
    title: "Welding Fundamentals",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn MIG, TIG, and stick welding processes, joint preparation, weld quality assessment, and workshop safety for structural steel fabrication.",
    keyConcepts: [
      "MIG Welding",
      "TIG Welding",
      "Stick Welding",
      "Joint Preparation",
      "Weld Quality",
    ],
    steps: [
      {
        id: "s1",
        title: "Welding Processes Overview",
        body: "Three processes dominate structural steel fabrication. MIG (Metal Inert Gas / GMAW): a continuously fed wire electrode melts into the joint while shielding gas (CO₂ or Ar/CO₂ mix) protects the weld pool from oxidation. MIG is fast, versatile, and suitable for most structural work. TIG (Tungsten Inert Gas / GTAW): a non-consumable tungsten electrode creates an arc; filler rod is fed manually. TIG produces the highest quality welds and is used for root passes and critical joints. Stick (SMAW): a consumable coated electrode creates both filler and its own shielding flux. Stick works outdoors in wind and on contaminated surfaces — the most robust field welding process.",
        visualCue:
          "Picture three welding setups side by side: left shows a MIG torch with wire feed, gas hose, and shielding gas cloud over the weld pool. Centre shows TIG torch with tungsten electrode and a separate filler rod held in the other hand. Right shows a stick welder with coated electrode, flux cloud, and slag layer over the finished bead.",
      },
      {
        id: "s2",
        title: "Joint Preparation",
        body: "Weld quality begins before the arc is struck. Joint faces must be cleaned of mill scale, rust, oil, paint, and moisture — contaminants cause porosity, lack of fusion, and hydrogen cracking in the weld. Use an angle grinder with a flap disc to clean 25 mm back from each weld face. For thicker plates (above 8–10 mm), joint edges are bevelled to allow full penetration welding — a single-V or double-V groove is prepared to specified root gap and included angle. Root gaps of 2–3 mm ensure the weld fuses to the full joint depth. Tack welds hold components in position during assembly and must be of equal quality to the final weld.",
        visualCue:
          "Imagine a plate edge being prepared: left shows the raw plate with mill scale and rust. Centre shows a worker grinding the face clean. Right shows the bevelled edge with a 60° included angle, 2 mm root gap, and 1 mm root face marked with dimension lines.",
      },
      {
        id: "s3",
        title: "Weld Positions and Technique",
        body: "Welds are classified by position: flat (1G/1F), horizontal (2G/2F), vertical (3G/3F), and overhead (4G/4F). Flat position is easiest — gravity assists the weld pool. Vertical welding requires a fast-freezing technique: either uphill progression for full penetration or downhill for thin plate. Overhead is the most demanding — the weld pool tries to fall away from the joint. Each position requires adjusting travel speed, arc length, and torch angle. Qualified welders hold a position-specific certificate; structural applications specify which positions are qualified for each weld procedure.",
        visualCue:
          "Visualise four identical T-joint configurations each oriented differently: flat (joint horizontal, welding downward), horizontal (joint vertical, welding sideways), vertical (joint horizontal, welding upward), and overhead (joint horizontal, welding upward from below). Torch angle and direction arrows on each.",
      },
      {
        id: "s4",
        title: "Weld Quality and Defects",
        body: "Common weld defects: porosity (gas bubbles trapped in the weld from contamination or incorrect shielding); undercut (groove melted into the base metal at the weld toe, reducing the section); lack of fusion (weld metal not fused to the base plate, usually from too fast travel speed or incorrect angle); and cracking (hydrogen-induced cold cracking from inadequate preheat on high-carbon steel). Visual inspection detects surface defects; non-destructive testing (ultrasonic, radiographic, dye penetrant) detects internal defects. All structural welds must meet the acceptance criteria of AS/NZS 1554 or the specified welding standard.",
        visualCue:
          "Picture a cross-section of a fillet weld with four defect zones labelled: top shows surface porosity (small round pits). Left side shows undercut (groove at the weld toe). The weld body shows a vertical crack. The fusion line shows a thin grey line indicating lack of fusion between weld and base metal.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which welding process is most suitable for outdoor structural welding in windy conditions?",
        options: [
          "TIG (GTAW)",
          "MIG (GMAW)",
          "Stick (SMAW)",
          "Submerged arc welding",
        ],
        correctIndex: 2,
        explanation:
          "Stick welding uses a flux-coated electrode that creates its own shielding. Wind cannot blow away the shielding flux the way it disperses MIG or TIG shielding gas.",
      },
      {
        id: "q2",
        question:
          "What is the purpose of bevelling plate edges before welding thick sections?",
        options: [
          "To reduce the weight of the plate",
          "To allow the weld to penetrate to the full joint depth and achieve complete fusion",
          "To make the joint easier to align",
          "To reduce the amount of filler metal required",
        ],
        correctIndex: 1,
        explanation:
          "Thick plates cannot be fusion-welded from the surface only — the heat cannot penetrate deeply enough. Bevelling opens a groove that allows the welder to deposit weld metal all the way to the root, achieving full penetration.",
      },
      {
        id: "q3",
        question: "What causes porosity in a MIG weld?",
        options: [
          "Excessive travel speed",
          "Contamination on the joint surface or loss of shielding gas coverage",
          "Too large a root gap",
          "Insufficient preheat",
        ],
        correctIndex: 1,
        explanation:
          "Porosity forms when gases (from contamination or atmospheric oxygen and nitrogen) are trapped in the solidifying weld pool. Proper surface cleaning and shielding gas coverage prevents this.",
      },
      {
        id: "q4",
        question: "What is undercut in a weld, and why is it a defect?",
        options: [
          "Weld metal that extends beyond the intended joint area",
          "A groove melted into the base metal at the weld toe that reduces the cross-sectional area and creates a stress raiser",
          "A gap at the weld root caused by insufficient penetration",
          "The visible dip in the centre of a multi-pass weld",
        ],
        correctIndex: 1,
        explanation:
          "Undercut removes base metal at the weld toe, thinning the section and creating a notch. This notch acts as a stress concentration point under cyclic loading, initiating fatigue cracking.",
      },
    ],
  },
  {
    id: "steel-cutting-forming",
    tradeId: "steel",
    title: "Steel Cutting & Forming",
    level: 2,
    durationMinutes: 25,
    summary:
      "Master oxy-fuel and plasma cutting, cold sawing, bending, and rolling operations used in a structural steel fabrication shop.",
    keyConcepts: [
      "Oxy-Fuel Cutting",
      "Plasma Cutting",
      "Cold Saw",
      "Press Brake",
      "Section Rolling",
    ],
    steps: [
      {
        id: "s1",
        title: "Oxy-Fuel Cutting",
        body: "Oxy-fuel cutting uses a preheat flame to raise steel to ignition temperature (approximately 900°C), then a jet of pure oxygen oxidises (burns) the steel at that point, with the combustion products blown through the cut. The process works only on carbon steel — the iron oxide melting point is lower than the steel. Stainless steel and aluminium do not oxy-cut cleanly. Cut quality depends on gas pressure, cutting speed, and nozzle condition. Correct speed produces a clean kerf with thin drag lines. Too fast leaves an uncut root; too slow causes excessive melting and an irregular cut face. A drag of 0–5 mm in a 12 mm plate indicates correct speed.",
        visualCue:
          "Picture an oxy-fuel torch cutting a 20 mm steel plate: the preheat flames (blue) surround the central cutting oxygen nozzle. A narrow kerf forms as the torch moves right — clean straight drag lines on the cut face, a small bead of hardened slag at the bottom edge of the cut.",
      },
      {
        id: "s2",
        title: "Plasma Cutting",
        body: "Plasma cutting uses a high-temperature plasma jet (15,000–25,000°C) to melt and blow through virtually any electrically conductive metal — carbon steel, stainless steel, aluminium, and copper. A CNC plasma table positions the torch automatically from a DXF drawing file, cutting complex profiles accurately to within ±0.5 mm. Air plasma is the most common: compressed air ionised by an electric arc creates the plasma. Plasma cut faces are slightly bevelled (typically 3–5°); the top edge is sharp and the bottom edge may have a slight bevel that must be dressed if a square edge is required.",
        visualCue:
          "Visualise a CNC plasma table: a gantry-mounted plasma torch follows a curved cutting path over a steel plate, leaving a glowing orange kerf behind. The control screen shows the DXF profile being cut. A cross-section of the kerf at the bottom shows the slight bevel angle on the cut face.",
      },
      {
        id: "s3",
        title: "Cold Sawing and Abrasive Cutting",
        body: "Cold saws use a circular blade of tool steel or carbide-tipped teeth to cut steel sections cleanly at low speed. The blade shears (rather than abrades) — producing accurate, burr-free cuts with minimal heat. Cold saws are ideal for cutting structural sections (RHS, SHS, channel, angle) to precise lengths. Abrasive cut-off wheels cut by grinding — they are faster to set up but produce a rough face, heat, and sparks. The heat-affected zone from abrasive cutting may need to be removed by grinding if the cut face will be welded. All cutting operations require full face shield, hearing protection, and hot steel awareness — freshly cut steel is invisible at room temperature but can cause serious burns.",
        visualCue:
          "Picture two machines side by side: left shows a cold saw with a slow-turning toothed blade cleanly cutting through an RHS section, producing tight steel curls. Right shows an abrasive cut-off machine with a thin grinding disc cutting the same section in a shower of sparks.",
      },
      {
        id: "s4",
        title: "Press Brake Bending and Section Rolling",
        body: "A press brake bends sheet and plate by pressing a punch into the material over a V-die. Bend angle, material thickness, and V-die opening width determine the bending force required and the degree of spring-back — steel springs back 2–5° after the punch is removed, so the die must over-bend to compensate. Minimum bend radius is typically 1× material thickness for mild steel; exceeding this cracks the outer fibres. A section roller (three-roll bending) curves structural sections into arcs and circles by passing the section repeatedly between three rolls that can be adjusted to change the curve radius — used for curved beams, frames, and circular handrails.",
        visualCue:
          "Imagine a press brake forming a 90° bend in a 5 mm steel plate: the upper punch descends into the plate centre while the lower V-die supports both sides, bending the plate to 87° (allowing for 3° spring-back to reach 90°). A second diagram shows a section roller curving an RHS into a circular arc.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why does oxy-fuel cutting not work cleanly on stainless steel?",
        options: [
          "Stainless steel melts at too low a temperature for oxy-fuel",
          "Chromium oxide in stainless steel has a higher melting point than the steel, preventing the cutting oxygen from blowing through",
          "Stainless steel is non-conductive",
          "Stainless steel requires a different gas mixture than carbon steel",
        ],
        correctIndex: 1,
        explanation:
          "Oxy-fuel cutting relies on iron oxide (slag) having a lower melting point than steel so it flows out of the kerf. Chromium oxide in stainless steel has a much higher melting point, blocking the cut and preventing clean separation.",
      },
      {
        id: "q2",
        question:
          "What is the advantage of a cold saw over an abrasive cut-off wheel?",
        options: [
          "Cold saws are less expensive to operate",
          "Cold saws produce accurate, burr-free cuts with minimal heat and a small heat-affected zone",
          "Cold saws can cut all metals including stainless and aluminium",
          "Cold saws are faster for all section sizes",
        ],
        correctIndex: 1,
        explanation:
          "Cold saws shear the material rather than abrade it. The result is a square, accurate cut with minimal heat — important when the cut face will be welded, as a large heat-affected zone from abrasive cutting may contain hardened metal.",
      },
      {
        id: "q3",
        question:
          "What is spring-back in press brake bending, and how is it compensated?",
        options: [
          "Steel expands when heated by the bending force; it is compensated by pre-cooling",
          "Steel elastically recovers after the punch is removed; it is compensated by overbending to a slightly greater angle",
          "Steel shrinks along the bend radius; it is compensated by adding filler material",
          "Spring-back is eliminated by bending slowly",
        ],
        correctIndex: 1,
        explanation:
          "Steel behaves elastically up to its yield point. After the punch is removed, the elastic portion of the bend recovers. The press brake operator overbends by the expected spring-back amount (typically 2–5°) to achieve the target angle.",
      },
      {
        id: "q4",
        question:
          "What is the typical accuracy of CNC plasma cutting from a DXF file?",
        options: ["±0.1 mm", "±0.5 mm", "±2.0 mm", "±5.0 mm"],
        correctIndex: 1,
        explanation:
          "CNC plasma tables achieve approximately ±0.5 mm positional accuracy for most structural steel applications. This is sufficient for connection plate holes and profile cutting, though it does not match laser cutting accuracy.",
      },
    ],
  },
  {
    id: "steel-structural-connections",
    tradeId: "steel",
    title: "Structural Connections",
    level: 3,
    durationMinutes: 30,
    summary:
      "Understand bolted and welded structural connections, connection design principles, high-strength bolting, and the documentation required for fabrication and inspection.",
    keyConcepts: [
      "Bolted Connections",
      "Weld Connection Design",
      "High-Strength Bolts",
      "Gusset Plates",
      "Fabrication Drawings",
    ],
    steps: [
      {
        id: "s1",
        title: "Types of Structural Connections",
        body: "Structural connections transfer loads between members. A simple (pin) connection transfers shear only and allows rotation — used at beam ends. A moment connection is rigid and transfers both shear and bending moment, used in portal frames and moment-resisting structures. Splice connections join two lengths of the same section, with the connection designed to match the full member capacity. Connections are either bolted (allowing on-site assembly and disassembly) or welded (permanent, requiring qualified welders and inspection). Most structural connections use a combination: shop-welded plates and components, site-bolted connections for assembly.",
        visualCue:
          "Picture three connection types: left shows a simple end plate with two bolts transferring shear only, rotation arrow indicating it is a pin. Centre shows a full moment end plate with 8 bolts in two rows above and below the beam flanges, stiffeners welded top and bottom. Right shows a flange splice with bolted cover plates on both flanges and web.",
      },
      {
        id: "s2",
        title: "High-Strength Bolting",
        body: "Structural bolts are Grade 4.6 (mild steel, used in bearing-type connections) or Grade 8.8 (high-strength, used in friction-type and bearing connections). In a friction-type connection (also called slip-critical), bolts are tensioned to a specified proof load — the clamped friction between plate surfaces carries the shear before any bolt bearing occurs. Proof load tensioning is achieved by the turn-of-nut method (rotating the nut a specified amount past snug-tight) or by a direct tension indicator washer. High-strength bolting requires inspection and documentation — bolt tensioning records are part of the quality system for structural steelwork.",
        visualCue:
          "Imagine a bolted connection cross-section: two overlapping steel plates connected by a Grade 8.8 bolt. A direct tension indicator washer shows compressed bumps indicating correct tension has been reached. An inset shows the friction plane between the plates with arrows indicating shear force transfer through friction, not bearing.",
      },
      {
        id: "s3",
        title: "Gusset Plates and Fillet Welds",
        body: "Gusset plates are flat steel plates that connect two or more structural members meeting at a joint. In a truss, gussets connect diagonal and vertical members to the chord. The gusset size and thickness is engineered to transfer the design forces. Fillet welds are the most common weld type in connections — a triangular cross-section weld in the corner formed by two surfaces meeting at approximately 90°. Fillet weld capacity is proportional to throat thickness (0.707 × leg size) and weld length. For a 6 mm fillet weld in Grade 350 steel, capacity is approximately 1.0 kN/mm of weld length.",
        visualCue:
          "Visualise a truss node: a gusset plate connects three angles — the bottom chord, a diagonal, and a vertical. Fillet welds run along each angle leg on both sides of the gusset. An inset cross-section of the fillet weld shows the leg size (6 mm), the throat (4.2 mm = 0.707 × 6), and the fusion faces.",
      },
      {
        id: "s4",
        title: "Fabrication Drawings and Marking",
        body: "Fabrication drawings show every member to be made, with all dimensions, material grades, hole locations, weld symbols, and surface treatment requirements. Each component receives a mark number that links it to the drawing, the erection drawing, and the delivery dossier. Mark numbers are painted or punched onto each component before it leaves the shop. Weld symbols on drawings use a standardised notation: the reference line indicates the joint, the symbol above or below indicates the weld type and size, and supplementary symbols indicate complete joint penetration, backing bars, and weld-all-round. Fabricators must hold a certified welding quality system (ISO 3834 or AS/NZS 1665) for structural work.",
        visualCue:
          "Picture a fabrication drawing extract showing a column base plate: plan view with bolt hole layout (4 × 24 mm holes at 200 × 300 mm PCD), a weld symbol on the column stub indicating a 10 mm fillet weld, the plate thickness 20 mm, and a mark number 'CP-01' stamped in the corner.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the difference between a simple and a moment connection in structural steelwork?",
        options: [
          "Simple connections use bolts; moment connections use welds",
          "Simple connections transfer shear only and allow rotation; moment connections are rigid and transfer both shear and bending moment",
          "Simple connections are used in columns; moment connections in beams",
          "Simple connections are shop-fabricated; moment connections are site-assembled",
        ],
        correctIndex: 1,
        explanation:
          "A simple connection acts as a pin — it transfers shear but is free to rotate, so no moment is transferred. A moment connection is rigid, preventing rotation and transferring full bending moment between members.",
      },
      {
        id: "q2",
        question:
          "In a friction-type bolted connection, what carries the shear force?",
        options: [
          "The bolts bearing against the hole edges",
          "Friction between the clamped plate surfaces, generated by high bolt tension",
          "Weld seams between the plates and bolts",
          "The filler plate between the connection surfaces",
        ],
        correctIndex: 1,
        explanation:
          "In a slip-critical (friction) connection, bolts are tensioned to a high proof load, clamping the surfaces together. The friction generated between the surfaces carries the shear force before any bolt-to-hole bearing occurs.",
      },
      {
        id: "q3",
        question: "What is the throat of a 6 mm fillet weld?",
        options: ["6.0 mm", "4.2 mm", "3.0 mm", "8.5 mm"],
        correctIndex: 1,
        explanation:
          "The throat of a fillet weld is measured from the root to the face at 45°. For a 6 mm leg fillet weld: throat = 0.707 × 6 = 4.2 mm. Weld capacity is based on the throat dimension.",
      },
      {
        id: "q4",
        question:
          "What is the purpose of a mark number on a fabricated steel component?",
        options: [
          "To indicate the steel grade and yield strength",
          "To uniquely identify each component, linking it to fabrication drawings, the erection plan, and quality records",
          "To show the weight of the component for crane lift planning",
          "To identify which welder made each weld",
        ],
        correctIndex: 1,
        explanation:
          "Mark numbers provide traceability from the fabrication drawing to the finished component to its installed position. This is essential for quality control, inspection, and any future investigations.",
      },
    ],
  },
  {
    id: "steel-structural-erection",
    tradeId: "steel",
    title: "Structural Steel Erection",
    level: 4,
    durationMinutes: 30,
    summary:
      "Learn safe procedures for lifting, plumbing, and levelling structural steelwork on site including crane signals, temporary bracing, and steelwork tolerances.",
    keyConcepts: [
      "Crane Signals",
      "Rigger Roles",
      "Plumbing and Levelling",
      "Temporary Bracing",
      "Steelwork Tolerances",
    ],
    steps: [
      {
        id: "s1",
        title: "Crane Signals and Rigger Responsibilities",
        body: "Structural steel erection requires a licensed rigger and a crane operator working as a team. Only the rigger communicates with the crane operator during a lift — no other site personnel give signals. Standard hand signals are defined by legislation: finger pointing up (hoist), down (lower), circling above head (slew), both fists together (stop). Loads must never be lifted over workers or the public. Before each lift, the rigger checks: sling angles and WLL, lifting lugs or shackle ratings, balance point of the load, and the designated landing zone is clear. A dog licence (intermediate rigger) is the minimum qualification for guiding structural steel lifts.",
        visualCue:
          "Visualise a column being lifted: a rigger in orange hi-vis stands clear of the load with one arm raised, index finger pointing up (hoist signal). The crane hook is directly above the lifting lug on the column top. A red exclusion zone circle on the ground shows the area cleared of all workers.",
      },
      {
        id: "s2",
        title: "Column Base Plates and Grouting",
        body: "Columns sit on concrete base plates cast into the footing, aligned by holding-down (HD) bolts. The base plate is levelled on shim packs or adjustable levelling bolts to within ±3 mm of the design level, then the column is plumbed using two theodolites at 90° to each other. Once the column is correctly positioned and the bolts are fully tensioned, the void under the base plate is filled with non-shrink cementitious grout. Grout is packed under the plate using a rubber-headed hammer and packed in from one side so air is not trapped. The grout makes full bearing contact under the base plate and locks the column position permanently.",
        visualCue:
          "Picture a column base plate viewed from the side: the plate is elevated 40–50 mm above the footing surface on steel shim packs. HD bolt nuts are just hand-tight. A theodolite in the background sights the plumb mark on the column face. A grout tube is shown pushing non-shrink grout under the plate from one side.",
      },
      {
        id: "s3",
        title: "Temporary Bracing During Erection",
        body: "Structural steelwork is unstable until all members are connected and permanent bracing or moment connections are complete. During erection, temporary bracing (cable bracing or temporary steel kickers) must be installed as each bay of columns and beams is erected, before cranes and riggers move on to the next bay. The erection sequence must be planned so that at no point is a partially erected frame relying on as-yet-unstressed connections or unbraced columns for stability. The erection engineer specifies temporary bracing requirements and the erector must not deviate from the plan without engineering approval.",
        visualCue:
          "Imagine a partially erected two-bay steel portal frame: left bay is complete with permanent knee braces. Right bay has columns and rafters connected but not yet stable — diagonal wire bracing runs from the column top to a ground anchor stake, preventing racking of the incomplete frame.",
      },
      {
        id: "s4",
        title: "Steelwork Tolerances",
        body: "AS 4100 (Steel Structures) sets erection tolerances for structural steelwork. Column plumb tolerance is ±H/500 or ±5 mm (whichever is less) over any 10 m height — for a 5 m column this is ±10 mm; the code limit is ±5 mm. Beam level tolerance is ±L/1000 or ±10 mm for beams under 10 m. Overall column position (relative to grid line) is ±10 mm. Exceeding tolerances may compromise facade clearances, floor levelness, and the performance of secondary components like wall framing. Tolerances are checked with a total station (surveying instrument) after the steelwork is complete and before the structure is released for next trades.",
        visualCue:
          "Visualise a column plumb check: a total station on a tripod sights the column face at two heights. The column is 4.8 m tall; the maximum plumb tolerance is ±5 mm. A digital level display shows the tilt is 3.2 mm — within tolerance. A pass/fail table beside it shows the code limit.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Who is the only person authorised to give signals to a crane operator during a structural steel lift?",
        options: [
          "The site foreman",
          "The licensed rigger in charge of the lift",
          "The crane owner's representative",
          "Any worker on the ground near the load",
        ],
        correctIndex: 1,
        explanation:
          "A single point of communication between rigger and crane operator is a fundamental safety requirement. Multiple people signalling simultaneously creates confusion and is a major cause of crane accidents.",
      },
      {
        id: "q2",
        question:
          "What is the purpose of non-shrink grout under a column base plate?",
        options: [
          "To prevent the base plate from rusting",
          "To fill the void under the base plate, creating full bearing contact and locking the column in its plumbed position",
          "To insulate the column from the footing",
          "To allow minor column position adjustments after grouting",
        ],
        correctIndex: 1,
        explanation:
          "The gap between the base plate and footing (needed for levelling) must be completely filled to create full bearing contact. Non-shrink grout expands slightly as it sets, ensuring it fills the void without leaving air pockets.",
      },
      {
        id: "q3",
        question:
          "Why is temporary bracing required during structural steel erection?",
        options: [
          "To carry the weight of the steel before bolts are tensioned",
          "Partially erected steelwork is unstable — temporary bracing prevents racking and collapse before permanent bracing or connections are complete",
          "To protect the steelwork from wind damage after erection",
          "To provide fall protection for workers on the structure",
        ],
        correctIndex: 1,
        explanation:
          "Until permanent connections and bracing are complete, a steel frame can rack and collapse under even small lateral loads. Temporary bracing stabilises each bay as it is erected.",
      },
      {
        id: "q4",
        question:
          "Under AS 4100, what is the plumb tolerance for a 5 m tall steel column?",
        options: ["±10 mm", "±5 mm", "±3 mm", "±15 mm"],
        correctIndex: 1,
        explanation:
          "AS 4100 limits column plumb deviation to ±H/500 or ±5 mm, whichever is less. For a 5 m column: H/500 = 10 mm, but the code limit applies at ±5 mm.",
      },
    ],
  },
  {
    id: "steel-advanced-welding-ndt",
    tradeId: "steel",
    title: "Advanced Welding & NDT",
    level: 5,
    durationMinutes: 35,
    summary:
      "Explore certified welding procedures, preheating, post-weld heat treatment, non-destructive testing methods, and the quality documentation required for structural and pressure welding.",
    keyConcepts: [
      "Welding Procedure Specification",
      "Preheat",
      "Post-Weld Heat Treatment",
      "Ultrasonic Testing",
      "Welder Qualification",
    ],
    steps: [
      {
        id: "s1",
        title: "Welding Procedure Specifications",
        body: "A Welding Procedure Specification (WPS) is a documented set of variables that defines exactly how a weld is to be made: base material, filler material, welding process, joint design, preheat temperature, interpass temperature, welding position, and post-weld heat treatment. The WPS is qualified by testing (destructive and non-destructive) a procedure qualification record (PQR) weld — if the test weld passes, the WPS is approved for production use. Certified welders are then qualified to that WPS. Changes outside the specified essential variables require a new PQR. For structural steel, AS/NZS 1554 defines the qualification requirements; for pressure equipment, AS 4458 applies.",
        visualCue:
          "Picture a WPS document page: a table of essential variables listing base material (Grade 350 plate), filler material (ER70S-6 wire), process (GMAW), preheat minimum 75°C, interpass maximum 250°C, position (1G and 2G). A stamp shows 'Qualified per AS/NZS 1554.1 — PQR 2024-07'.",
      },
      {
        id: "s2",
        title: "Preheat and Interpass Temperature",
        body: "Preheating the base metal before welding reduces the cooling rate after welding, lowering the risk of hydrogen-induced cold cracking (HICC) in the heat-affected zone (HAZ). HICC occurs when three conditions are present simultaneously: a hard microstructure in the HAZ (high carbon equivalent steel), hydrogen in the weld deposit (from moisture), and residual tensile stress. Preheat above 100°C breaks this triangle by reducing hardness in the HAZ and allowing hydrogen to diffuse out. Interpass temperature is the maximum temperature allowed between passes — exceeding it can overage the HAZ microstructure, reducing toughness. Temperatures are measured with a contact thermometer or temperature-indicating crayon.",
        visualCue:
          "Imagine a heavy-section T-joint being prepared for welding: a propane torch preheat flame heats the plate within 75 mm of the joint. A contact pyrometer reads 120°C at the joint face — above the 75°C minimum. A Tempilstik (temperature crayon) mark on the steel shows the melt line at exactly 100°C, confirming preheat is met.",
      },
      {
        id: "s3",
        title: "Non-Destructive Testing Methods",
        body: "Visual inspection (VT) is the first and most important NDT — most surface defects are detected by a thorough VT before any other method. Dye penetrant testing (PT) reveals surface-breaking defects by applying a low-viscosity dye that enters cracks by capillary action, then drawing it back to the surface with a developer. Magnetic particle testing (MT) uses a magnetic field to detect surface and near-surface cracks in ferromagnetic materials. Ultrasonic testing (UT) uses high-frequency sound waves to detect internal defects including lack of fusion, porosity, and cracks. Radiographic testing (RT) uses X-rays or gamma rays to produce an image of internal weld quality — required for pressure welds.",
        visualCue:
          "Picture four NDT methods applied to the same weld: top-left shows visual inspection with a weld gauge measuring the fillet leg. Top-right shows dye penetrant — red dye applied then white developer revealing a hairline crack in red. Bottom-left shows magnetic particle test — iron filings aligned along a subsurface crack line. Bottom-right shows ultrasonic test — a probe on the plate surface with a display showing a defect echo at 25 mm depth.",
      },
      {
        id: "s4",
        title: "Post-Weld Heat Treatment and Quality Records",
        body: "Post-weld heat treatment (PWHT) heats the completed weldment to a temperature of 550–650°C and holds it for a specified time, then cools it slowly. PWHT relieves residual welding stresses and reduces HAZ hardness — required for high-carbon or alloy steel, and for pressure vessels and pipework. Temperature must be uniform across the weld zone — local hot spots from flame heating are not acceptable; electric resistance or induction heating blankets are used. Quality records for structural welding must include: WPS and PQR references, welder qualification certificates, preheat records, inspection reports, and NDT results — forming the quality dossier that is handed over to the client.",
        visualCue:
          "Visualise a weld seam being PWHT with electric resistance heating blankets clamped around the pipe. A multi-channel thermocouple recorder traces the temperature of six points around the joint through the heat cycle — soak at 620°C for 1 hour, then gradual controlled cool-down. A completed quality dossier folder is shown beside the recorder.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What must happen before a Welding Procedure Specification (WPS) can be used for production welding?",
        options: [
          "The WPS must be reviewed by the site foreman",
          "The WPS must be qualified by testing a procedure qualification record (PQR) weld that passes destructive and non-destructive testing",
          "The WPS must be submitted to the client for approval",
          "The WPS must be signed by a certified welding inspector",
        ],
        correctIndex: 1,
        explanation:
          "A WPS is only as good as the evidence that the procedure produces sound welds. Qualification testing (PQR) proves the procedure under controlled conditions before it is approved for production use.",
      },
      {
        id: "q2",
        question:
          "What three conditions must be present simultaneously for hydrogen-induced cold cracking to occur?",
        options: [
          "High heat input, low travel speed, and contaminated filler",
          "Susceptible microstructure, hydrogen in the weld, and residual tensile stress",
          "High carbon steel, low preheat, and excessive interpass temperature",
          "Wet electrode, high amperage, and rapid cooling",
        ],
        correctIndex: 1,
        explanation:
          "HICC requires all three simultaneously: a hard, susceptible HAZ microstructure (high carbon equivalent); hydrogen (from moisture in electrode coatings or the base metal surface); and residual tensile stress from welding restraint. Remove any one element and cracking cannot occur.",
      },
      {
        id: "q3",
        question:
          "Which NDT method can detect internal weld defects without cutting the weld open?",
        options: [
          "Visual inspection",
          "Dye penetrant testing",
          "Ultrasonic testing",
          "Magnetic particle testing",
        ],
        correctIndex: 2,
        explanation:
          "Ultrasonic testing transmits high-frequency sound waves into the weld and detects echoes from internal discontinuities. Visual, dye penetrant, and magnetic particle testing detect surface or near-surface defects only.",
      },
      {
        id: "q4",
        question:
          "What is the primary purpose of post-weld heat treatment (PWHT)?",
        options: [
          "To increase the hardness of the weld metal for wear resistance",
          "To relieve residual welding stresses and reduce HAZ hardness, improving toughness and crack resistance",
          "To sterilise the weld surface for food-grade applications",
          "To accelerate grain growth for improved corrosion resistance",
        ],
        correctIndex: 1,
        explanation:
          "Welding introduces residual stresses from thermal expansion and contraction. PWHT heats the structure uniformly to allow the stressed regions to relax plastically, reducing residual stress and softening the hardened HAZ.",
      },
    ],
  },
];
