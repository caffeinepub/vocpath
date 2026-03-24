import type { TradeModule } from "./woodworkingContent";

export const automotiveModules: TradeModule[] = [
  // ---- AUTO MECHANICS ----
  {
    id: "auto-engine-fundamentals",
    tradeId: "auto-mechanics",
    title: "Engine Fundamentals",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand how a four-stroke petrol engine converts fuel into motion. Learn the components, the combustion cycle, and how engine specifications affect performance.",
    keyConcepts: [
      "Four-Stroke Cycle",
      "Engine Components",
      "Compression Ratio",
      "Valve Timing",
      "Engine Specifications",
    ],
    steps: [
      {
        id: "s1",
        title: "The Four-Stroke Cycle",
        body: "Every petrol engine repeats four strokes per cylinder per power event: Intake (piston moves down, inlet valve opens, air-fuel mixture enters), Compression (both valves closed, piston moves up, mixture compressed to about 1/10th volume), Power (spark fires, expanding gases drive piston down), Exhaust (exhaust valve opens, piston rises, spent gases expelled). This cycle repeats hundreds of times per minute per cylinder, converting chemical energy in fuel into rotational force at the crankshaft.",
        visualCue:
          "Four side-by-side cylinder cutaways show each stroke with piston position, valve states (open/closed), and fuel or exhaust gas colour.",
      },
      {
        id: "s2",
        title: "Key Engine Components",
        body: "The block houses the cylinders and coolant passages. Pistons slide within cylinder bores and connect via connecting rods to the crankshaft. The crankshaft converts reciprocating piston movement into rotation. The camshaft controls valve timing via lobes that push on valves (or rocker arms). The cylinder head sits on top of the block and contains the combustion chambers, valves, and spark plug threads. A head gasket seals between block and head, handling extreme pressure and temperature differentials.",
        visualCue:
          "An exploded engine diagram highlights each component as it is named, with arrows showing the direction of movement for pistons and crankshaft.",
      },
      {
        id: "s3",
        title: "Compression Ratio and Its Effects",
        body: "Compression ratio is the ratio of total cylinder volume at BDC (bottom dead centre) to the volume remaining at TDC (top dead centre). A ratio of 10:1 means the mixture is compressed to one-tenth its original volume. Higher compression produces more power and better efficiency but requires higher-octane fuel to prevent pre-ignition (knock). Modern direct-injection engines run compression ratios of 12:1 or higher; older carburetted engines typically ran 8:1 to 9:1.",
        visualCue:
          "Two side-by-side cylinders show low and high compression: the high-compression cylinder has a smaller combustion chamber above the piston at TDC.",
      },
      {
        id: "s4",
        title: "Valve Timing and the Camshaft",
        body: "Valve timing determines exactly when each valve opens and closes relative to piston position. The camshaft is driven at half crankshaft speed (one cam rotation per two crank rotations) via a timing chain or belt. Variable valve timing (VVT) systems, now common on modern engines, adjust the timing of the inlet and/or exhaust camshaft while the engine runs to optimise performance and economy at different RPM. A snapped timing belt causes catastrophic engine failure in interference engines where pistons and valves share the same space.",
        visualCue:
          "A timing diagram shows the crankshaft degrees at which each valve opens and closes, illustrated as an oval with shaded regions for each phase.",
      },
      {
        id: "s5",
        title: "Reading Engine Specifications",
        body: "Engine specs are expressed in displacement (total swept volume of all cylinders in litres or cc), power output (kilowatts or horsepower at a specific RPM), torque (Newton-metres at a specific RPM), and bore × stroke dimensions. A long-stroke engine (stroke > bore) produces high torque at low RPM — suited to towing. A short-stroke (oversquare) engine revs higher and produces peak power at higher RPM — suited to performance. Understanding these specs helps you diagnose symptoms: a loss of power at high RPM points to different causes than a loss of torque at low RPM.",
        visualCue:
          "A spec sheet for a four-cylinder 2.0L engine shows the numbers in context: displacement calculation, peak power and torque curves on a graph, and bore/stroke illustrated in a cylinder cross-section.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "In what order do the four strokes occur in a petrol engine?",
        options: [
          "Intake, Power, Compression, Exhaust",
          "Compression, Intake, Power, Exhaust",
          "Intake, Compression, Power, Exhaust",
          "Power, Intake, Compression, Exhaust",
        ],
        correctIndex: 2,
        explanation:
          "The correct sequence is Intake → Compression → Power → Exhaust. Each stroke moves the piston either down or up once, completing a full cycle.",
      },
      {
        id: "q2",
        question: "What is the function of the crankshaft?",
        options: [
          "Open and close the intake and exhaust valves",
          "Convert reciprocating piston motion into rotational force",
          "Seal the combustion chamber from coolant",
          "Meter fuel delivery to each cylinder",
        ],
        correctIndex: 1,
        explanation:
          "The crankshaft converts the up-and-down motion of the pistons into the rotational motion that drives the transmission and wheels.",
      },
      {
        id: "q3",
        question:
          "Why does a high compression ratio require higher-octane fuel?",
        options: [
          "High octane fuel burns slower, preventing pre-ignition (knock)",
          "High octane fuel contains more energy per litre",
          "Low octane fuel is too thick for high-pressure injectors",
          "High compression reduces fuel atomisation",
        ],
        correctIndex: 0,
        explanation:
          "Higher octane fuel resists self-ignition under high pressure and temperature, preventing knock (pre-ignition) which can cause severe engine damage in high-compression engines.",
      },
      {
        id: "q4",
        question:
          "At what speed does the camshaft rotate relative to the crankshaft?",
        options: [
          "Same speed",
          "Twice the speed",
          "Half the speed",
          "One-quarter the speed",
        ],
        correctIndex: 2,
        explanation:
          "The camshaft rotates at half crankshaft speed because each valve only needs to open once per complete four-stroke cycle (two crankshaft rotations).",
      },
      {
        id: "q5",
        question: "What engine type produces the highest torque at low RPM?",
        options: [
          "Short-stroke (oversquare) engine",
          "Long-stroke (undersquare) engine",
          "Equal bore and stroke engine",
          "High-compression engine",
        ],
        correctIndex: 1,
        explanation:
          "Long-stroke engines have a longer piston travel which gives the connecting rod more leverage on the crankshaft, generating higher torque at lower RPM — ideal for towing and hauling.",
      },
    ],
  },
  {
    id: "auto-lubrication-cooling",
    tradeId: "auto-mechanics",
    title: "Lubrication & Cooling Systems",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn how engine oil circulates to reduce friction, and how coolant removes heat from the engine. Understand oil grades, service intervals, and cooling system maintenance.",
    keyConcepts: [
      "Oil Circulation Circuit",
      "Viscosity Grades",
      "Oil Service Intervals",
      "Coolant System",
      "Thermostat Function",
    ],
    steps: [
      {
        id: "s1",
        title: "The Oil Circulation Circuit",
        body: "Engine oil serves four roles: lubrication (reducing metal-to-metal friction), cooling (carrying heat away from bearings and pistons), cleaning (suspending combustion byproducts until the oil is drained), and sealing (filling micro-gaps between pistons and cylinder walls). The oil pump draws oil from the sump, pressurises it, and sends it through drillings in the block and head to main bearings, big-end bearings, camshaft bearings, and valve train components. Oil drains back to the sump by gravity continuously.",
        visualCue:
          "An engine cutaway shows the oil circuit as a blue flow path: from sump, through oil pump, through filter, along main gallery, up through block drillings to head, and draining back down.",
      },
      {
        id: "s2",
        title: "Understanding Viscosity Grades",
        body: "Oil viscosity (resistance to flow) is rated using the SAE scale. A multi-grade oil like 5W-30 has two ratings: the W (winter) number indicates cold-start flow at low temperatures, and the second number indicates viscosity at 100°C operating temperature. Lower W numbers mean better cold-start protection. Modern engines use 0W-20 or 5W-30 for fuel economy and cold-start protection; older or high-mileage engines may benefit from 10W-40. Always use the manufacturer-specified grade — using too thick an oil in a modern engine starves small oil galleries.",
        visualCue:
          "A table shows common oil grades with their cold-start and operating viscosity ranges, and a car silhouette highlights which grade suits each climate.",
      },
      {
        id: "s3",
        title: "Oil Service Intervals and Inspection",
        body: "Engine oil degrades through heat, oxidation, and contamination from combustion byproducts. Conventional oil should be changed every 5,000–7,500 km; full synthetic every 10,000–15,000 km or per the manufacturer's service interval. Check oil level weekly on a hot engine (wait 5 minutes after shutdown): pull the dipstick, wipe it clean, reinsert fully, and read the level between MIN and MAX marks. Black oil is normal; milky or foamy oil indicates coolant contamination (likely blown head gasket). A gritty texture indicates abrasive contamination — change the oil immediately.",
        visualCue:
          "A dipstick shows three scenarios: normal dark oil at the correct level, oil with a milky emulsion layer (coolant contamination), and oil with a clear gritty sparkle (abrasive contamination).",
      },
      {
        id: "s4",
        title: "How the Cooling System Works",
        body: "The cooling system removes approximately 30% of the heat generated by combustion. The water pump circulates coolant (a mix of water and ethylene glycol antifreeze) through channels in the block and head, where it absorbs heat, then through the radiator, where it is cooled by airflow before returning to the engine. The radiator cap pressurises the system to raise the boiling point above 100°C. An overflow or expansion tank captures coolant that expands as the engine heats up and returns it when the engine cools.",
        visualCue:
          "A cooling system diagram traces the coolant path: from the water pump outlet, through the engine block and head, out to the top of the radiator, down through the radiator core, back to the water pump inlet.",
      },
      {
        id: "s5",
        title: "The Thermostat and Its Role",
        body: "The thermostat is a temperature-sensitive valve that blocks coolant flow to the radiator until the engine reaches its designed operating temperature (typically 85–95°C). This allows the engine to warm up quickly, reducing wear and emissions during cold operation. A stuck-open thermostat causes the engine to run chronically cold (poor economy, increased wear). A stuck-closed thermostat causes the engine to overheat rapidly. Thermostats are inexpensive to replace and should be renewed at every major cooling system service.",
        visualCue:
          "Two side-by-side diagrams show a thermostat: closed (wax pellet contracted, valve shut, coolant bypasses radiator) and open (wax expanded by heat, valve open, full radiator flow).",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What does the 'W' in a multi-grade oil rating like 5W-30 indicate?",
        options: [
          "Weight of the oil",
          "Winter rating — the oil's flow characteristics at low temperature",
          "Water content percentage",
          "Wear protection rating",
        ],
        correctIndex: 1,
        explanation:
          "The W stands for Winter and indicates how the oil flows at low temperatures during cold starts. A lower W number means better flow at cold temperatures.",
      },
      {
        id: "q2",
        question: "What does milky or foamy engine oil indicate?",
        options: [
          "The oil is overdue for a change",
          "The oil is a synthetic grade",
          "Coolant contamination, likely a blown head gasket",
          "Normal appearance after a short trip",
        ],
        correctIndex: 2,
        explanation:
          "Milky or foamy oil means coolant has mixed with the oil, which destroys its lubricating ability. A blown head gasket is the most common cause.",
      },
      {
        id: "q3",
        question: "Why does the radiator cap pressurise the cooling system?",
        options: [
          "To force coolant through narrow galleries faster",
          "To raise the coolant's boiling point above 100°C",
          "To prevent the water pump from cavitating",
          "To keep the thermostat closed during warm-up",
        ],
        correctIndex: 1,
        explanation:
          "Increasing system pressure raises the boiling point of coolant, allowing the engine to run at higher safe temperatures without the coolant boiling and forming steam pockets.",
      },
      {
        id: "q4",
        question:
          "What happens if the thermostat is stuck in the closed position?",
        options: [
          "The engine runs too cold and uses more fuel",
          "The engine overheats rapidly",
          "The cooling fan stops working",
          "The oil pressure drops",
        ],
        correctIndex: 1,
        explanation:
          "A closed thermostat prevents coolant from reaching the radiator, so heat builds up in the engine rapidly, leading to overheating and potential engine damage.",
      },
      {
        id: "q5",
        question: "What are the four roles of engine oil?",
        options: [
          "Lubrication, sealing, fuelling, and cleaning",
          "Lubrication, cooling, cleaning, and sealing",
          "Pressure, flow, filtration, and viscosity",
          "Cooling, combustion, sealing, and pressure",
        ],
        correctIndex: 1,
        explanation:
          "Engine oil lubricates moving parts, carries away heat from bearings and pistons, suspends combustion contaminants for removal at service, and seals micro-gaps between pistons and bores.",
      },
    ],
  },
  {
    id: "auto-brakes-suspension",
    tradeId: "auto-mechanics",
    title: "Brakes & Suspension",
    level: 2,
    durationMinutes: 25,
    summary:
      "Understand disc and drum brake operation, brake fluid hydraulics, and how suspension systems control ride and handling. Learn to inspect, measure, and replace brake components.",
    keyConcepts: [
      "Disc Brake Operation",
      "Drum Brakes",
      "Brake Fluid",
      "Suspension Types",
      "Brake Inspection",
    ],
    steps: [
      {
        id: "s1",
        title: "Disc Brake Operation",
        body: "A disc brake system consists of a cast-iron rotor (disc) attached to the wheel hub and a caliper that spans the rotor. When the brake pedal is pressed, hydraulic pressure from the master cylinder forces the caliper pistons outward, clamping brake pads against both sides of the rotating disc. Friction converts kinetic energy into heat. Ventilated discs have internal vanes between the two faces to increase surface area and cooling. The minimum rotor thickness is stamped on the rotor hat — a rotor worn below this dimension must be replaced, not turned.",
        visualCue:
          "A caliper cutaway shows two pistons pushing brake pads onto a ventilated rotor, with arrows indicating clamping force and the direction of rotor rotation.",
      },
      {
        id: "s2",
        title: "Drum Brake Operation",
        body: "Drum brakes use curved brake shoes lined with friction material that press outward against the inside of a rotating drum. A wheel cylinder mounted at the top of the backing plate contains two pistons that push the shoes apart when hydraulic pressure is applied. A self-adjusting mechanism (ratchet and strut) keeps the shoes correctly adjusted as the lining wears. Drum brakes generate more heat than discs in equivalent use, which is why discs are used on front axles and on the rear of higher-performance vehicles.",
        visualCue:
          "A drum removed from the backing plate shows the curved shoes, spring arrangement, wheel cylinder, and adjuster mechanism in their installed positions.",
      },
      {
        id: "s3",
        title: "Brake Fluid and Hydraulics",
        body: "Brake fluid transmits pedal force through the hydraulic circuit. It must have a high boiling point to resist vaporisation during heavy brake use (vapour is compressible and causes a spongy pedal). DOT 3 and DOT 4 are glycol-based and are hygroscopic (absorb moisture from the air), which lowers their boiling point over time — they should be replaced every two years. DOT 5 is silicone-based, non-hygroscopic, but is not compatible with ABS systems. Always bleed brakes (remove air from the circuit) after opening the hydraulic system.",
        visualCue:
          "A brake fluid boiling point chart shows DOT 3, 4, and 5.1 dry and wet boiling points, with a callout explaining why moisture absorption degrades performance over time.",
      },
      {
        id: "s4",
        title: "Suspension Systems",
        body: "A vehicle's suspension isolates the body from road impacts and keeps the tyres in contact with the road surface. MacPherson strut suspension (most common on front-wheel-drive cars) combines the shock absorber and steering pivot in a single unit. Double wishbone suspension provides superior geometry control and is used on sports and performance vehicles. Coil springs support vehicle weight; shock absorbers (dampers) control the rate of spring compression and rebound. Worn shock absorbers allow the vehicle to bounce excessively and increase braking distance.",
        visualCue:
          "Side-by-side diagrams compare MacPherson strut and double wishbone layouts, labelling the strut/shock absorber, spring, upper control arm, lower control arm, and steering knuckle.",
      },
      {
        id: "s5",
        title: "Brake Pad Inspection and Replacement",
        body: "Inspect brake pad thickness through the caliper inspection window or by removing the wheel. The minimum safe pad thickness is typically 2–3 mm of friction material — below this, the metal backing plate will contact the rotor, causing grooved rotors and sudden brake failure. When replacing pads, measure rotor thickness with a micrometer at several points to check for excessive wear and thickness variation (runout). Clean the caliper slide pins, apply brake caliper grease to the pin bores, and compress the caliper pistons using a C-clamp or piston tool before fitting new pads.",
        visualCue:
          "A disc caliper shown from the front reveals the brake pad: a thickness ruler overlay shows new pad (12 mm), service minimum (3 mm), and a worn-out pad at 1 mm with the metal backing visible.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What converts kinetic energy to heat in a disc brake system?",
        options: [
          "The brake fluid",
          "Friction between brake pads and rotor",
          "The caliper pistons",
          "The master cylinder",
        ],
        correctIndex: 1,
        explanation:
          "When brake pads clamp against the spinning rotor, friction between the pad material and rotor surface converts the vehicle's kinetic energy into heat.",
      },
      {
        id: "q2",
        question:
          "Why must DOT 3 and DOT 4 brake fluid be replaced every two years?",
        options: [
          "They degrade from exposure to UV light",
          "They are hygroscopic and absorb moisture, lowering their boiling point",
          "They solidify at low temperatures over time",
          "They corrode rubber seals after two years",
        ],
        correctIndex: 1,
        explanation:
          "Glycol-based brake fluids absorb moisture from the air over time. Water lowers the fluid's boiling point, causing vapour lock (spongy pedal) under heavy braking.",
      },
      {
        id: "q3",
        question:
          "What is the function of shock absorbers in a suspension system?",
        options: [
          "Support the vehicle's weight",
          "Steer the front wheels",
          "Control the rate of spring compression and rebound",
          "Align the camber and toe angles",
        ],
        correctIndex: 2,
        explanation:
          "Shock absorbers (dampers) don't support weight — springs do that. Dampers control how quickly the spring compresses and rebounds, preventing the vehicle from bouncing continuously.",
      },
      {
        id: "q4",
        question:
          "What is the minimum safe brake pad thickness before replacement?",
        options: ["6 mm", "4 mm", "2–3 mm", "1 mm"],
        correctIndex: 2,
        explanation:
          "Most manufacturers specify 2–3 mm as the minimum safe friction material thickness. Below this, the metal backing contacts the rotor, causing damage and significantly reduced braking performance.",
      },
      {
        id: "q5",
        question:
          "What must always be done after opening the brake hydraulic circuit?",
        options: [
          "Replace the master cylinder",
          "Bleed the brakes to remove air from the system",
          "Replace all brake fluid",
          "Resurface the rotors",
        ],
        correctIndex: 1,
        explanation:
          "Air is compressible, unlike brake fluid. Any air introduced into the system creates a spongy, ineffective pedal. Bleeding forces new fluid through the circuit to purge all air.",
      },
    ],
  },
  {
    id: "auto-electrical-basics",
    tradeId: "auto-mechanics",
    title: "Automotive Electrical Basics",
    level: 3,
    durationMinutes: 25,
    summary:
      "Learn how a vehicle's 12V electrical system works: battery, alternator, starter motor, fuses, and relays. Use a multimeter to test circuits and diagnose common faults.",
    keyConcepts: [
      "12V System",
      "Battery Testing",
      "Alternator",
      "Fuses & Relays",
      "Multimeter Use",
    ],
    steps: [
      {
        id: "s1",
        title: "The 12V Electrical System",
        body: "A vehicle's electrical system uses 12V DC (actually 12.6V at rest, 13.8–14.4V when charging). The battery stores energy and provides starting current. The alternator generates electricity while the engine runs, recharging the battery and powering all loads. The earthing (ground) system returns current to the battery through the vehicle chassis — a poor earth connection causes more mysterious electrical faults than almost any other single cause. All current flows in a circuit: from the positive battery terminal, through the load (bulb, motor, module), to earth, and back to the battery negative.",
        visualCue:
          "A simplified vehicle wiring diagram traces a complete circuit: battery positive → fuse box → headlight → earth strap → battery negative, with the alternator connected across the battery.",
      },
      {
        id: "s2",
        title: "Battery Testing and Maintenance",
        body: "A fully charged 12V lead-acid battery reads 12.6V at rest (no load). Below 12.4V the battery is partially discharged; below 12.0V it is deeply discharged and may not start the vehicle. Use a digital multimeter or battery load tester to assess battery health. A battery that reads 12.6V at rest but drops below 9.6V under cranking load is failing internally. Clean corroded terminals with a wire brush and baking soda solution; coat with petroleum jelly or terminal protector spray after cleaning. Most batteries have a lifespan of 3–5 years.",
        visualCue:
          "A battery voltage chart shows the state-of-charge percentages at different resting voltages, from 12.6V (100%) to 11.9V (0%), with a callout at 12.2V indicating “needs charging.”",
      },
      {
        id: "s3",
        title: "The Alternator",
        body: "The alternator is belt-driven from the crankshaft and generates alternating current (AC) which internal diodes convert to DC. It produces 13.8–14.4V to charge the battery and power the vehicle's electrical loads while the engine runs. A worn alternator belt causes charging failure. A failing diode pack causes the alternator to output AC ripple into the electrical system, which can destroy sensitive electronics including the ECU. Check alternator output by measuring battery voltage with the engine running — it should be 13.8–14.4V. Below 13V indicates an alternator or belt problem.",
        visualCue:
          "A diagram shows the alternator belt-driven from the crankshaft, with internal stator windings, rotor, and diode bridge highlighted, and an arrow showing AC-to-DC conversion.",
      },
      {
        id: "s4",
        title: "Fuses and Relays",
        body: "Fuses protect circuits from overcurrent damage. When current exceeds the fuse rating, the fuse wire melts, breaking the circuit. Always replace with the same amperage — fitting a higher-rated fuse allows wiring to overheat before the fuse blows. Relays are electrically controlled switches that allow a small-current control circuit (switch or ECU output) to switch a high-current load circuit (fuel pump, horn, cooling fan). The fuse box/relay centre is typically in the engine bay and under the dashboard — the cover lid usually shows a fuse and relay layout diagram.",
        visualCue:
          "A relay diagram shows four terminals: 85 and 86 are the control coil terminals, 30 is the common (battery), and 87 is the normally-open output to the load. An arrow shows the magnetic coil closing the contact.",
      },
      {
        id: "s5",
        title: "Using a Multimeter for Diagnostics",
        body: "A digital multimeter (DMM) measures voltage, current (amps), and resistance (ohms). For voltage: set to DC volts, connect red probe to positive and black to negative, never reverse polarity. For resistance: isolate the component from the circuit first (power off), then measure across the component terminals. Voltage drop testing is the most useful technique for finding poor connections: connect the multimeter across a connector or earth point while the circuit is operating — more than 0.2V drop across a connection indicates excessive resistance.",
        visualCue:
          "A multimeter display reads 0.45V in the DC volts setting, with probes connected across a battery earth strap clamp during engine cranking, and a callout explaining this is above the 0.2V acceptable limit.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What voltage should a healthy alternator maintain at the battery while the engine runs?",
        options: ["12.0–12.6V", "13.8–14.4V", "15.0–16.0V", "11.5–12.0V"],
        correctIndex: 1,
        explanation:
          "A healthy alternator charges at 13.8–14.4V, which is above the battery's resting voltage (12.6V) to ensure the battery is kept charged while powering all electrical loads.",
      },
      {
        id: "q2",
        question:
          "What is the maximum acceptable voltage drop across a connector or earth connection?",
        options: ["0.2V", "1.0V", "2.0V", "0.5V"],
        correctIndex: 0,
        explanation:
          "A voltage drop greater than 0.2V across a single connection indicates excessive resistance, which reduces current flow and can cause components to operate intermittently or fail.",
      },
      {
        id: "q3",
        question:
          "Why should you never replace a blown fuse with a higher-rated fuse?",
        options: [
          "Higher-rated fuses are more expensive",
          "The circuit wiring can overheat and cause a fire before the higher-rated fuse blows",
          "Higher-rated fuses reduce battery voltage",
          "The fuse box terminals are not rated for higher current",
        ],
        correctIndex: 1,
        explanation:
          "A fuse is sized to protect the wiring. A higher-rated fuse lets more current flow than the wiring can safely handle, allowing wires to overheat and potentially catch fire before the fuse blows.",
      },
      {
        id: "q4",
        question: "What does a relay allow a small control signal to do?",
        options: [
          "Measure circuit resistance",
          "Switch a high-current load circuit on or off",
          "Convert AC to DC voltage",
          "Store electrical charge",
        ],
        correctIndex: 1,
        explanation:
          "A relay uses a small control current through its coil to magnetically close contacts that switch a high-current circuit. This protects the control switch (or ECU) from handling heavy current directly.",
      },
      {
        id: "q5",
        question:
          "What is the most common cause of mysterious electrical faults in a vehicle?",
        options: [
          "Flat battery",
          "Failed alternator",
          "Poor earth (ground) connection",
          "Blown main fuse",
        ],
        correctIndex: 2,
        explanation:
          "A poor earth connection increases resistance in the return path of every circuit that uses that earth point, causing a wide range of intermittent and apparently unrelated faults.",
      },
    ],
  },
  {
    id: "auto-diagnostics",
    tradeId: "auto-mechanics",
    title: "Diagnostic Techniques",
    level: 4,
    durationMinutes: 30,
    summary:
      "Use OBD-II scanners, live data, and systematic fault-finding to diagnose engine management faults. Understand fault codes, freeze frame data, and the six-step diagnostic process.",
    keyConcepts: [
      "OBD-II System",
      "Fault Codes",
      "Live Data",
      "Freeze Frame",
      "Diagnostic Process",
    ],
    steps: [
      {
        id: "s1",
        title: "The OBD-II System",
        body: "On-Board Diagnostics generation 2 (OBD-II) is mandatory on all petrol vehicles sold in Australia from 2003 and diesel from 2005. The ECU (Engine Control Unit) monitors hundreds of sensors and actuators and stores Diagnostic Trouble Codes (DTCs) when a parameter falls outside its expected range. The OBD-II connector (DLC — Data Link Connector) is a 16-pin trapezoid-shaped port typically located under the dashboard on the driver's side. Any compliant scan tool can connect to this port and communicate with the ECU using standardised protocols.",
        visualCue:
          "A dashboard view shows the OBD-II port location under the steering column, with a scan tool cable connected to it and a code displayed on the scan tool screen.",
      },
      {
        id: "s2",
        title: "Reading and Interpreting Fault Codes",
        body: "Fault codes follow a standard format: a letter (P=Powertrain, B=Body, C=Chassis, U=Network), followed by four digits. The second digit indicates manufacturer-specific (1) or generic (0). For example, P0300 is a generic random misfire code. P0171 indicates the engine is running lean on bank 1. The code itself only tells you which circuit or parameter is out of range — it does not tell you which component has failed. A P0335 crankshaft position sensor circuit fault could be caused by a failed sensor, damaged reluctor ring, broken wire, or poor ECU earth.",
        visualCue:
          "A scan tool screen shows three stored codes with their descriptions, and a table decodes the five-character structure with an arrow pointing to each section.",
      },
      {
        id: "s3",
        title: "Live Data and Sensor Readings",
        body: "Live data streams real-time sensor values from the ECU while the engine runs. Key parameters to monitor: engine coolant temperature (ECT), manifold absolute pressure (MAP) or mass airflow (MAF), throttle position, short-term and long-term fuel trims (STFT/LTFT), oxygen sensor voltage (pre- and post-cat), and ignition timing advance. Fuel trims above +10% indicate the engine is correcting a lean condition (possible vacuum leak, low fuel pressure, faulty MAF). Fuel trims below -10% indicate a rich condition (leaky injector, high fuel pressure).",
        visualCue:
          "A scan tool live data screen shows a list of PIDs (parameter IDs) with their current values, with LTFT at +14% highlighted in yellow as an out-of-range reading.",
      },
      {
        id: "s4",
        title: "Freeze Frame Data",
        body: "When a fault code is stored, the ECU simultaneously records a snapshot of all sensor values at that moment — this is called freeze frame data. Freeze frame is invaluable for intermittent faults: it captures engine load, RPM, vehicle speed, coolant temp, and fuel trims at the exact moment the fault occurred. An intermittent misfire code accompanied by freeze frame data showing high engine load at 3,200 RPM and a coolant temperature of 95°C gives you the conditions to reproduce and test the fault — far more useful than an engine that appears to run normally at idle on the workshop lift.",
        visualCue:
          "A freeze frame data table shows the conditions captured when a P0301 misfire code was stored: 3,100 RPM, 78% engine load, 92°C coolant temp, STFT +4%.",
      },
      {
        id: "s5",
        title: "The Six-Step Diagnostic Process",
        body: "Professional diagnosis follows a systematic process: 1) Verify the complaint — reproduce the symptom. 2) Retrieve all stored DTCs and freeze frame data. 3) Research the fault code — check manufacturer service information for the diagnostic procedure. 4) Inspect the circuit — check for wiring damage, connector corrosion, and vacuum leaks before replacing parts. 5) Test the suspect component with a multimeter or oscilloscope. 6) Repair and verify — clear codes, road test under the freeze frame conditions, confirm no return. Replacing parts without testing is expensive and frequently fails to resolve the root cause.",
        visualCue:
          "A flowchart shows the six diagnostic steps as connected boxes, with the 'research' and 'inspect/test' steps emphasised as the most often skipped by inexperienced technicians.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What does the second digit in an OBD-II fault code indicate?",
        options: [
          "The vehicle's model year",
          "Whether the code is generic (0) or manufacturer-specific (1)",
          "The severity level of the fault",
          "The sensor circuit affected",
        ],
        correctIndex: 1,
        explanation:
          "The second digit distinguishes generic (0) codes that are standardised across all manufacturers from manufacturer-specific (1) codes that relate to proprietary systems.",
      },
      {
        id: "q2",
        question:
          "A long-term fuel trim (LTFT) of +14% on a petrol engine indicates:",
        options: [
          "The engine is running rich and adding fuel",
          "The engine is running lean and the ECU is adding extra fuel to compensate",
          "The EGR valve is stuck open",
          "The catalytic converter is failing",
        ],
        correctIndex: 1,
        explanation:
          "A positive fuel trim means the ECU is adding fuel above the base map to maintain the correct air-fuel ratio, indicating the engine is seeing more air than expected (vacuum leak, weak injectors, low fuel pressure).",
      },
      {
        id: "q3",
        question:
          "What is the primary value of freeze frame data for an intermittent fault?",
        options: [
          "It shows which component has failed",
          "It records the engine conditions at the moment the fault was stored, allowing the fault to be reproduced",
          "It automatically diagnoses the root cause",
          "It stores a video of the fault event",
        ],
        correctIndex: 1,
        explanation:
          "Freeze frame captures the exact operating conditions (RPM, load, temperature) when the fault occurred, giving the technician the information needed to reproduce and test the fault.",
      },
      {
        id: "q4",
        question: "A fault code alone tells you:",
        options: [
          "Exactly which component has failed",
          "Which circuit or parameter is out of range, not which component has failed",
          "The cost of repair",
          "The age of the fault",
        ],
        correctIndex: 1,
        explanation:
          "A DTC indicates a circuit or parameter fault. The same code can be caused by multiple components or wiring issues. Testing is required to identify the actual failed component.",
      },
      {
        id: "q5",
        question:
          "In the six-step diagnostic process, what should you do before replacing a suspected component?",
        options: [
          "Clear all fault codes and road test",
          "Inspect wiring and test the component with a meter or scope",
          "Replace related components at the same time for efficiency",
          "Check online forums for common failures",
        ],
        correctIndex: 1,
        explanation:
          "Step 4 and 5 require inspecting the circuit and testing the component before replacement. Skipping this leads to unnecessary parts replacement and often fails to resolve the root cause.",
      },
    ],
  },
  // ---- DIESEL ENGINES ----
  {
    id: "diesel-combustion-cycle",
    tradeId: "diesel-engines",
    title: "Diesel Combustion Cycle",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand how diesel engines differ from petrol engines, how compression ignition works, and why diesel is more efficient at producing torque for heavy-duty applications.",
    keyConcepts: [
      "Compression Ignition",
      "Cetane Rating",
      "Diesel vs Petrol",
      "Glow Plugs",
      "Diesel Knock",
    ],
    steps: [
      {
        id: "s1",
        title: "Compression Ignition vs Spark Ignition",
        body: "The fundamental difference between diesel and petrol engines is how the fuel-air mixture is ignited. Petrol engines use a spark plug to ignite a pre-mixed air-fuel charge. Diesel engines have no spark plugs — instead, air is compressed to very high ratios (16:1 to 23:1), raising its temperature to 700–900°C. Diesel fuel is then injected directly into this superheated compressed air, where it self-ignites instantly. This is called compression ignition. The high compression ratio is why diesel engines produce more torque but are heavier and more expensive to manufacture.",
        visualCue:
          "Two cylinders side by side: the petrol cylinder shows a spark plug firing at TDC with pre-mixed mixture; the diesel cylinder shows a high-pressure injector spraying fuel into pure compressed hot air.",
      },
      {
        id: "s2",
        title: "The Diesel Four-Stroke Cycle",
        body: "Like petrol engines, diesels use a four-stroke cycle, but with key differences: Intake stroke draws in pure air only (no fuel). Compression stroke compresses the air to 1/18th–1/23rd of its volume, heating it to ignition temperature. Power stroke: fuel is injected at or just before TDC; it ignites immediately from the heat of compression, and expanding gases drive the piston down. Exhaust stroke expels burnt gases. Because diesel injects fuel at a controlled rate throughout the power stroke, combustion is more gradual than in a petrol engine, contributing to the characteristic clatter sound.",
        visualCue:
          "A diesel four-stroke cycle diagram shows clean air on the intake stroke, pure air being compressed on compression, fuel spray igniting on power, and exhaust gases exiting.",
      },
      {
        id: "s3",
        title: "Cetane Rating and Fuel Quality",
        body: "Cetane number is diesel's equivalent of octane rating for petrol, but the relationship is inverted: high cetane (above 51) means the fuel ignites more readily under compression, producing smooth, quiet combustion. Low cetane fuel delays ignition, causing the pressure to build too rapidly and producing harsh diesel knock. Australian diesel is specified at a minimum cetane of 51. Premium diesel typically has a cetane of 55–58. Cold weather reduces the cetane effect — diesel can also gel (wax) at low temperatures, which is why alpine-rated diesel blends are available in cold climates.",
        visualCue:
          "A cetane scale from 40 to 60 shows low cetane (harsh knock, slow ignition) at the low end and high cetane (smooth quick ignition) at the high end, with Australian minimum and premium grades marked.",
      },
      {
        id: "s4",
        title: "Glow Plugs and Cold Starting",
        body: "At cold ambient temperatures (below 5°C), the compressed air in the cylinder may not reach sufficient temperature for self-ignition, because the cold metal of the cylinder absorbs heat from the compressed air. Glow plugs are electrical heating elements threaded into the prechamber or directly into the combustion chamber (direct injection). They preheat the air in the chamber before cranking begins. The instrument panel 'wait to start' light indicates the glow plug preheat cycle is in progress — attempting to start before this light extinguishes increases wear and causes hard starting or white smoke.",
        visualCue:
          "A glow plug diagram shows the heating coil at the tip of the plug glowing orange-red, positioned in the combustion chamber with the fuel injector directly above.",
      },
      {
        id: "s5",
        title: "Why Diesel Dominates Heavy-Duty Applications",
        body: "Diesel engines produce more torque per litre than equivalent petrol engines because: (1) the higher compression ratio extracts more work from each combustion event, (2) diesel fuel has ~15% more energy per litre than petrol, and (3) the gradual injection and combustion process allows higher peak cylinder pressure to be sustained longer. This torque advantage at low RPM is exactly what towing, earthmoving, freight, and agricultural equipment require. The trade-off is higher initial cost, greater engine weight, and higher NOx and particulate emissions, which require DPF (diesel particulate filters) and AdBlue (SCR) systems on modern engines.",
        visualCue:
          "A torque curve comparison graph shows a diesel engine's torque peaking at 1,800 RPM and sustaining it broadly to 3,000 RPM, versus a petrol engine's narrower torque peak at 4,000 RPM.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "How is the air-fuel mixture ignited in a diesel engine?",
        options: [
          "By a spark plug at TDC",
          "By the heat of highly compressed air (compression ignition)",
          "By a glow plug during all operating conditions",
          "By a pre-ignition pilot flame",
        ],
        correctIndex: 1,
        explanation:
          "Diesel engines compress air to 16:1–23:1 ratios, raising its temperature to 700–900°C. Fuel injected into this hot air self-ignites without needing a spark.",
      },
      {
        id: "q2",
        question: "What does a high cetane number indicate about diesel fuel?",
        options: [
          "It has more energy per litre",
          "It resists ignition under compression (like high-octane petrol)",
          "It ignites more readily, producing smoother combustion",
          "It contains more lubricity additives",
        ],
        correctIndex: 2,
        explanation:
          "High cetane fuel ignites more readily under compression, allowing combustion to begin quickly and burn smoothly. Low cetane causes delayed ignition and harsh diesel knock.",
      },
      {
        id: "q3",
        question: "What do glow plugs do in a diesel engine?",
        options: [
          "Ignite the fuel during normal operation",
          "Preheat the combustion chamber before cold starting",
          "Regulate fuel injection timing",
          "Clean combustion deposits from the chamber",
        ],
        correctIndex: 1,
        explanation:
          "Glow plugs electrically preheat the combustion chamber so that cold metal doesn't absorb enough heat from the compressed air to prevent ignition during cold-weather starting.",
      },
      {
        id: "q4",
        question:
          "What is the typical compression ratio range for a diesel engine?",
        options: [
          "8:1 to 10:1",
          "10:1 to 12:1",
          "16:1 to 23:1",
          "25:1 to 30:1",
        ],
        correctIndex: 2,
        explanation:
          "Diesel engines require compression ratios of 16:1 to 23:1 to raise the air temperature sufficiently for compression ignition. This is far higher than petrol engines (8:1–12:1).",
      },
      {
        id: "q5",
        question:
          "Why do diesel engines produce more low-RPM torque than equivalent petrol engines?",
        options: [
          "They use larger displacement",
          "Higher compression ratio, more energy-dense fuel, and sustained high cylinder pressure during combustion",
          "They have more cylinders",
          "They use forced induction exclusively",
        ],
        correctIndex: 1,
        explanation:
          "The combination of higher compression ratio, ~15% more energy per litre in diesel fuel, and the gradual injection process that sustains peak cylinder pressure longer all contribute to diesel's high low-RPM torque output.",
      },
    ],
  },
  {
    id: "diesel-fuel-injection",
    tradeId: "diesel-engines",
    title: "Diesel Fuel Injection Systems",
    level: 2,
    durationMinutes: 25,
    summary:
      "Understand the evolution from mechanical injection to common rail direct injection. Learn how injection pressure, timing, and quantity are controlled to optimise performance and emissions.",
    keyConcepts: [
      "Inline Pump",
      "Distributor Pump",
      "Common Rail",
      "Injector Operation",
      "Injection Timing",
    ],
    steps: [
      {
        id: "s1",
        title: "Mechanical Injection — Inline Pump",
        body: "Early diesel engines used an inline injection pump with a separate plunger and barrel for each cylinder, driven mechanically at half crankshaft speed. Each plunger's stroke pushes fuel to its injector at high pressure (150–300 bar). A governor regulates fuel delivery based on load and RPM to prevent over-speed and stalling. These systems are durable and serviceable in the field, which is why they remain common on older trucks, tractors, and industrial equipment. The timing of injection is fixed mechanically and adjusted via the pump drive coupling.",
        visualCue:
          "An inline pump cutaway shows four individual plunger-and-barrel assemblies aligned in a row, each with its own high-pressure outlet pipe running to an injector.",
      },
      {
        id: "s2",
        title: "Distributor (Rotary) Pump",
        body: "The distributor pump (VP and VE types) uses a single plunger that distributes high-pressure fuel to each cylinder in turn via a rotating distributor head. This makes it more compact than an inline pump, which led to its widespread use in passenger car diesels from the 1980s through to the early 2000s. Electronic distributor pumps (VP44) added solenoid-controlled injection timing and quantity, improving emissions and performance over purely mechanical designs. They are more sensitive to poor fuel quality and low fuel pressure than inline pumps.",
        visualCue:
          "A distributor pump cutaway shows the single central plunger, the rotating distributor head with outlet ports, and the solenoid valve on an electronic variant.",
      },
      {
        id: "s3",
        title: "Common Rail Direct Injection",
        body: "Common rail systems use a high-pressure pump to maintain fuel at constant pressure (1,600–2,500 bar) in a shared rail (accumulator). Each injector is individually controlled by the ECU via a solenoid or piezoelectric actuator and can open multiple times per combustion event. A typical common rail injection event includes: pre-injection (reduces noise), main injection (power), and post-injection (after-treatment and temperature management). This flexibility allows the ECU to optimise fuel delivery for economy, power, noise, and emissions across all operating conditions.",
        visualCue:
          "A common rail system diagram shows the high-pressure pump feeding a central rail, with six individual injectors branching off it, each with an ECU solenoid control signal line.",
      },
      {
        id: "s4",
        title: "Injector Operation and Condition",
        body: "Diesel injectors must deliver a precise atomised spray at enormous pressure. A worn or dirty injector delivers too much fuel (smoky exhaust, high fuel consumption) or too little (misfires, rough running). Injectors can be tested on a pop tester (mechanical) or on a specialist injector test bench. Common rail injectors are return-flow tested — excessive return flow indicates internal wear. Injector spray pattern on a pop tester should be a fine, even cone with no dribbling; a solid stream or dribble indicates a faulty nozzle. Contaminated fuel is the primary cause of premature injector failure.",
        visualCue:
          "A pop tester setup shows an injector mounted to the tester, and two spray patterns: a correct fine-cone atomised pattern versus a distorted stream from a worn nozzle.",
      },
      {
        id: "s5",
        title: "Injection Timing and Its Effects",
        body: "Injection timing determines at what crank angle fuel is delivered to the cylinder. Advanced timing (fuel injected earlier, before TDC) increases power and fuel economy but raises combustion temperature and NOx emissions. Retarded timing (fuel injected later) reduces NOx and combustion noise but increases smoke, fuel consumption, and exhaust temperature. Modern common rail systems vary timing dynamically across the entire operating map. Incorrect timing is a common cause of excessive smoke on startup, hard starting, and poor economy. On mechanical pumps, timing is set by measuring the pump's static timing mark against the engine's timing marks.",
        visualCue:
          "A timing diagram shows TDC at the top, with advanced injection marked 5° before TDC and retarded injection 5° after TDC, and arrows indicating the effects of each on NOx, smoke, and power.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the key advantage of common rail over distributor pump injection?",
        options: [
          "Lower manufacturing cost",
          "ECU-controlled multiple injections per cycle for optimised performance and emissions",
          "Greater tolerance of contaminated fuel",
          "No return fuel circuit required",
        ],
        correctIndex: 1,
        explanation:
          "Common rail allows the ECU to deliver multiple precisely timed injection events (pre, main, post) per cycle at any pressure up to 2,500 bar, providing far greater control over combustion than mechanical systems.",
      },
      {
        id: "q2",
        question:
          "What does excessive injector return flow on a common rail injector indicate?",
        options: [
          "Correct injector operation",
          "Blocked injector nozzle",
          "Internal wear in the injector control valve",
          "High fuel rail pressure",
        ],
        correctIndex: 2,
        explanation:
          "Excess return flow means fuel is leaking past worn internal control valve surfaces instead of being delivered to the cylinder, reducing injection pressure and quantity.",
      },
      {
        id: "q3",
        question:
          "What is the typical rail pressure range for a modern common rail diesel system?",
        options: [
          "150–300 bar",
          "500–1,000 bar",
          "1,600–2,500 bar",
          "50–100 bar",
        ],
        correctIndex: 2,
        explanation:
          "Common rail systems operate at 1,600–2,500 bar, which is high enough to atomise diesel fuel into an extremely fine mist for efficient combustion at all load conditions.",
      },
      {
        id: "q4",
        question:
          "Advanced injection timing (injecting fuel earlier) primarily increases:",
        options: [
          "Smoke output",
          "Power and economy, but also NOx emissions",
          "Exhaust temperature and fuel consumption",
          "Glow plug heat-up time",
        ],
        correctIndex: 1,
        explanation:
          "Earlier injection gives more time for combustion pressure to build, increasing power and efficiency. The higher peak combustion temperatures also increase NOx formation.",
      },
      {
        id: "q5",
        question:
          "What is the primary cause of premature diesel injector failure?",
        options: [
          "High injection pressure",
          "Contaminated or low-quality fuel",
          "Over-advanced injection timing",
          "Incorrect glow plug heat range",
        ],
        correctIndex: 1,
        explanation:
          "Diesel injectors operate at extremely tight tolerances. Abrasive particles, water, and microbial contamination in fuel rapidly wear precision surfaces, causing leakage and poor spray pattern.",
      },
    ],
  },
  {
    id: "diesel-turbocharging",
    tradeId: "diesel-engines",
    title: "Turbocharging & Intercooling",
    level: 3,
    durationMinutes: 25,
    summary:
      "Learn how turbochargers boost diesel engine power and efficiency by compressing inlet air. Understand the compressor, turbine, wastegate, variable geometry systems, and intercooler function.",
    keyConcepts: [
      "Turbocharger Operation",
      "Boost Pressure",
      "Wastegate",
      "Variable Geometry",
      "Intercooler",
    ],
    steps: [
      {
        id: "s1",
        title: "How a Turbocharger Works",
        body: "A turbocharger uses exhaust gas energy that would otherwise be wasted to drive a turbine wheel. The turbine wheel is shaft-connected to a compressor wheel on the intake side. As exhaust gas spins the turbine, the compressor draws in fresh air and compresses it before it enters the engine. Compressed (denser) air contains more oxygen molecules per volume, allowing more fuel to be injected and combusted, producing more power from the same displacement. Turbochargers operate at 100,000–250,000 RPM and rely on engine oil for both lubrication and cooling of the central bearing housing.",
        visualCue:
          "A turbocharger cutaway shows exhaust gas entering the hot turbine side, the connecting shaft, and compressed air exiting the cold compressor side toward the intercooler.",
      },
      {
        id: "s2",
        title: "Boost Pressure and its Limits",
        body: "Boost pressure is the amount of pressure above atmospheric that the turbocharger delivers to the engine intake. Typical diesel boost pressures range from 1.0 to 2.5 bar absolute (0 to 1.5 bar above atmospheric). Excessive boost increases combustion temperature and cylinder pressure beyond what the engine block, head gasket, and pistons can handle. Turbo lag is the delay between throttle input and boost building, caused by the time required to spin the turbocharger up to speed from low RPM.",
        visualCue:
          "A boost gauge shows atmospheric (0 bar gauge) at the left, normal boost range (0.5–1.5 bar) in green, and over-boost (above 2.0 bar) in red, with a caution icon.",
      },
      {
        id: "s3",
        title: "Wastegate and Boost Control",
        body: "A wastegate is a valve that diverts exhaust gas away from the turbine when boost pressure reaches the target level. This limits maximum boost and prevents over-boost damage. The wastegate is controlled either pneumatically (by a spring-loaded actuator connected to intake pressure) or electronically by the ECU via a boost control solenoid. A stuck-closed wastegate causes over-boost and potential engine damage. A stuck-open wastegate causes low boost, poor performance, and excessive smoke under load.",
        visualCue:
          "A wastegate diagram shows the actuator rod connected to a flap valve in the exhaust housing: at target boost, the actuator rod extends to open the flap, bypassing exhaust gas around the turbine.",
      },
      {
        id: "s4",
        title: "Variable Geometry Turbochargers (VGT)",
        body: "Variable geometry turbochargers (also called variable vane or VNT) use a ring of moveable vanes in the turbine housing to change the angle and velocity of exhaust gas hitting the turbine wheel. At low RPM (low exhaust flow), the vanes close to direct gas at a higher velocity, maintaining boost pressure and eliminating turbo lag. At high RPM, the vanes open to reduce restriction and allow maximum flow. VGT systems are controlled by the ECU and are common on modern passenger car and light commercial diesels. Carbon buildup on the vanes is a common fault causing sticking and lost boost response.",
        visualCue:
          "Two VGT cross-sections show vane positions: closed (angled to accelerate low exhaust flow onto the turbine wheel) and open (wide to reduce backpressure at high flow).",
      },
      {
        id: "s5",
        title: "Intercooler Function and Maintenance",
        body: "Compressing air raises its temperature significantly — turbocharger outlet temperatures can reach 150–200°C. Hot air is less dense than cool air, partially defeating the purpose of the turbocharger. An intercooler (also called a charge air cooler) is a heat exchanger mounted between the turbocharger outlet and the engine intake. Ambient air or coolant flows through the intercooler, dropping the charge temperature by 50–80°C. Cooler, denser air enters the engine, increasing the benefit of turbocharging. Inspect intercooler hoses for cracks and the core for oil contamination (indicating turbocharger seal failure).",
        visualCue:
          "A charge air path diagram shows: turbo compressor outlet (150°C) → intercooler (ambient air flowing through fins) → engine intake (70°C), with density arrows showing denser air after cooling.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What energy source drives the turbocharger turbine?",
        options: [
          "A belt driven from the crankshaft",
          "Exhaust gas energy that would otherwise be wasted",
          "Compressed air from the inlet manifold",
          "An electric motor",
        ],
        correctIndex: 1,
        explanation:
          "Turbochargers are driven by the kinetic and thermal energy of exhaust gases, converting what would be wasted energy into useful intake air compression.",
      },
      {
        id: "q2",
        question:
          "What happens if the wastegate is stuck in the closed position?",
        options: [
          "Low boost pressure and poor performance",
          "Over-boost, potentially damaging the engine",
          "Turbocharger bearing failure",
          "Reduced exhaust backpressure",
        ],
        correctIndex: 1,
        explanation:
          "A stuck-closed wastegate prevents the bypass of exhaust gas around the turbine, causing boost to build beyond the target pressure and potentially damaging the engine.",
      },
      {
        id: "q3",
        question:
          "How do variable geometry vanes improve low-RPM turbo response?",
        options: [
          "They increase exhaust backpressure",
          "They close to direct low exhaust flow at higher velocity onto the turbine wheel",
          "They open to allow more exhaust gas through at low RPM",
          "They reduce compressor outlet temperature",
        ],
        correctIndex: 1,
        explanation:
          "At low RPM, closing the vanes directs the limited exhaust flow at a higher velocity onto the turbine, spinning it faster to build boost pressure sooner and reduce lag.",
      },
      {
        id: "q4",
        question: "Why is an intercooler used after the turbocharger?",
        options: [
          "To add humidity to the compressed air",
          "To cool the compressed air, increasing its density for more oxygen per volume",
          "To reduce exhaust backpressure",
          "To lower fuel temperature before injection",
        ],
        correctIndex: 1,
        explanation:
          "Compressing air raises its temperature and reduces its density. Cooling the compressed air in the intercooler restores density, allowing more oxygen into the cylinder for greater power output.",
      },
      {
        id: "q5",
        question:
          "What does oil contamination in the intercooler typically indicate?",
        options: [
          "Excessive engine oil level",
          "Turbocharger seal failure allowing oil to pass into the intake",
          "Incorrect intercooler mounting position",
          "Leaking rocker cover gasket",
        ],
        correctIndex: 1,
        explanation:
          "Oil in the intercooler means oil is passing the turbocharger shaft seals and entering the intake air path. This indicates the turbocharger seals are worn and the unit likely needs replacement.",
      },
    ],
  },
  {
    id: "diesel-emissions-aftertreatment",
    tradeId: "diesel-engines",
    title: "Emissions & Aftertreatment",
    level: 4,
    durationMinutes: 30,
    summary:
      "Understand modern diesel emissions standards, the diesel particulate filter (DPF), selective catalytic reduction (SCR/AdBlue), and EGR systems. Learn to diagnose and service these systems.",
    keyConcepts: [
      "Diesel Emissions",
      "DPF Operation",
      "DPF Regeneration",
      "SCR and AdBlue",
      "EGR System",
    ],
    steps: [
      {
        id: "s1",
        title: "Diesel Emissions and Regulations",
        body: "Diesel combustion produces four main pollutants regulated by law: Particulate matter (PM — soot), Nitrogen oxides (NOx), Hydrocarbons (HC), and Carbon monoxide (CO). Euro 5 and Euro 6 standards (applicable to vehicles sold in Australia from 2013 onwards) set strict limits particularly for PM and NOx. These are in fundamental tension: combustion changes that reduce NOx (lower temperature, retarded timing) tend to increase PM, and vice versa. Modern diesels use a combination of EGR, DPF, and SCR to satisfy both NOx and PM limits simultaneously.",
        visualCue:
          "A regulatory chart shows Euro 5 and Euro 6 NOx and PM limits, with arrows showing the trade-off between NOx and PM based on combustion temperature.",
      },
      {
        id: "s2",
        title: "Diesel Particulate Filter (DPF)",
        body: "The DPF is a ceramic honeycomb filter in the exhaust system that traps soot particles from the exhaust gas. Alternate channels are blocked at opposite ends, forcing exhaust gas through the porous ceramic walls, which capture particulates. As the filter loads with soot, backpressure increases. A differential pressure sensor across the DPF monitors the pressure drop and the ECU uses this to determine when regeneration is needed. A clogged DPF increases fuel consumption, reduces power, and if neglected, can reach temperatures that destroy the ceramic substrate.",
        visualCue:
          "A DPF cutaway shows alternating blocked channels forcing exhaust gas through porous walls, with soot particles shown accumulating on the inlet wall surfaces.",
      },
      {
        id: "s3",
        title: "DPF Regeneration",
        body: "Soot trapped in the DPF is periodically burned off in a process called regeneration. Passive regeneration occurs naturally at sustained highway speeds where exhaust temperatures (above 550°C) are sufficient to oxidise soot continuously. Active regeneration is initiated by the ECU when the DPF reaches a set loading level: late post-injection adds unburnt fuel to the exhaust stream, which oxidises over the diesel oxidation catalyst (DOC) upstream of the DPF, raising DPF temperature above 600°C to burn off the soot. Vehicles used exclusively for short trips (never reaching passive regen temperatures) suffer chronic DPF blockage.",
        visualCue:
          "A timeline shows a vehicle's DPF soot load building over 400 km of city driving, triggering active regeneration during a motorway phase, with the soot level dropping back to near-zero.",
      },
      {
        id: "s4",
        title: "Selective Catalytic Reduction (SCR) and AdBlue",
        body: "SCR is used to reduce NOx emissions by injecting a urea-water solution (AdBlue, DEF) into the hot exhaust upstream of the SCR catalyst. The heat decomposes AdBlue into ammonia (NH3), which reacts with NOx in the catalyst to produce harmless nitrogen (N2) and water (H2O). AdBlue consumption is approximately 3–5% of diesel consumption. Allowing the AdBlue tank to run empty triggers warning systems and eventually limits engine power or prevents starting. AdBlue must be stored below 30°C and cannot be mixed with diesel or other fluids — contamination destroys the SCR catalyst.",
        visualCue:
          "An SCR system diagram shows the exhaust path: from the engine through the DOC, past the AdBlue injector nozzle, through the SCR catalyst, with NOx entering and N2+H2O exiting.",
      },
      {
        id: "s5",
        title: "EGR System Operation and Faults",
        body: "Exhaust Gas Recirculation (EGR) reduces NOx by recirculating a portion of exhaust gas back into the intake manifold. The inert exhaust gas dilutes the fresh air charge, lowering peak combustion temperature and thus NOx formation. The EGR valve is controlled by the ECU via a solenoid and varies the percentage of recirculated gas based on load and temperature. Carbon deposits accumulate inside the EGR valve, EGR cooler, and intake manifold over time, causing the valve to stick and reducing airflow. Symptoms of a blocked EGR valve include rough idle, increased smoke, and NOx-related fault codes.",
        visualCue:
          "An EGR system diagram shows the exhaust manifold takeoff point, the EGR cooler, the EGR valve, and the path into the intake manifold, with the ECU control signal to the EGR valve solenoid.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What are the two main diesel pollutants that Euro 5/6 regulations specifically target?",
        options: [
          "CO and HC",
          "NOx and Particulate Matter (PM)",
          "CO2 and SO2",
          "HC and CO",
        ],
        correctIndex: 1,
        explanation:
          "Modern diesel emissions regulations primarily target NOx (responsible for smog and respiratory disease) and PM/soot particles (lung and cardiovascular health impacts).",
      },
      {
        id: "q2",
        question: "What triggers active DPF regeneration?",
        options: [
          "Vehicle speed exceeding 100 km/h",
          "ECU detecting the DPF soot load has reached a set limit via differential pressure sensor",
          "Engine coolant temperature reaching 100°C",
          "AdBlue tank level dropping below 20%",
        ],
        correctIndex: 1,
        explanation:
          "The ECU monitors differential pressure across the DPF. When the pressure drop indicates sufficient soot loading, it initiates active regeneration by raising exhaust temperature above 600°C.",
      },
      {
        id: "q3",
        question:
          "What happens to AdBlue (urea solution) in the hot exhaust upstream of the SCR catalyst?",
        options: [
          "It burns as an additional fuel",
          "It decomposes into ammonia, which reacts with NOx to produce nitrogen and water",
          "It coats the catalyst to prevent PM buildup",
          "It lowers exhaust temperature to reduce PM oxidation",
        ],
        correctIndex: 1,
        explanation:
          "Heat decomposes AdBlue into ammonia (NH3). In the SCR catalyst, ammonia reacts with NOx in the exhaust to form harmless diatomic nitrogen and water vapour.",
      },
      {
        id: "q4",
        question: "Why do city-only vehicles suffer chronic DPF blockage?",
        options: [
          "City fuel has lower cetane than highway fuel",
          "Short trips prevent exhaust temperatures from reaching passive regeneration temperatures (550+°C)",
          "Stop-start driving increases soot production tenfold",
          "City speed limits prevent active regeneration from completing",
        ],
        correctIndex: 1,
        explanation:
          "Passive regeneration requires sustained exhaust temperatures above 550°C, which only occur at prolonged highway driving. Short urban trips keep exhaust temperatures too low to burn off accumulated soot.",
      },
      {
        id: "q5",
        question: "What is the primary function of the EGR system?",
        options: [
          "Reduce particulate matter by filtering exhaust",
          "Lower peak combustion temperature to reduce NOx formation",
          "Recover exhaust heat to warm the engine faster",
          "Increase fuel efficiency by reburning exhaust hydrocarbons",
        ],
        correctIndex: 1,
        explanation:
          "EGR dilutes the fresh air charge with inert exhaust gas, reducing the oxygen concentration and lowering peak combustion temperatures, which is the primary mechanism for reducing NOx formation.",
      },
    ],
  },
  {
    id: "diesel-maintenance",
    tradeId: "diesel-engines",
    title: "Diesel Engine Maintenance",
    level: 2,
    durationMinutes: 25,
    summary:
      "Understand the full service schedule for a modern diesel: oil and filter changes, fuel filter servicing, air filter inspection, coolant maintenance, and timing belt/chain service intervals.",
    keyConcepts: [
      "Service Schedule",
      "Fuel Filter",
      "Air Filtration",
      "Coolant Service",
      "Timing Component",
    ],
    steps: [
      {
        id: "s1",
        title: "The Diesel Service Schedule",
        body: "Modern diesels have longer service intervals than petrol engines when using full synthetic oil: typically 15,000–20,000 km or 12 months. However, diesel operating conditions vary enormously — a vehicle doing frequent short trips (DPF-heavy use, incomplete warm-ups) should be serviced more frequently. A typical minor service includes: engine oil and filter, cabin air filter inspection, all fluid level checks, and visual inspection. A major service (every 40,000–60,000 km) adds: fuel filter, air filter, brake fluid, coolant condition check, and DPF inspection. Always record service history as diesel engine warranties often require documented servicing.",
        visualCue:
          "A service schedule table shows minor and major service items at each interval, colour-coded by whether they are checked, replaced, or inspected.",
      },
      {
        id: "s2",
        title: "Fuel Filter Servicing",
        body: "The fuel filter is arguably the most critical service item on a diesel. It removes water (which corrodes and causes injector failure), abrasive particles, and microbial contamination before fuel reaches the injection pump and injectors. Most diesels have a water-in-fuel (WIF) sensor in the filter housing that illuminates a warning light when water accumulates. The filter must be bled (air purged) after replacement using the priming pump or by cranking the engine until it starts. On some models with a lift pump, the filter housing must be filled with clean diesel before installation to avoid extended cranking.",
        visualCue:
          "A fuel filter housing cutaway shows the filter element, water trap bowl at the bottom with the WIF sensor, and the priming pump or bleed screw at the top.",
      },
      {
        id: "s3",
        title: "Air Filter Inspection and Replacement",
        body: "The air filter protects the turbocharger and engine from abrasive particles. A restricted air filter causes reduced airflow, lower boost, increased smoke, and higher exhaust temperatures that accelerate DPF loading. Inspect the filter element visually under a bright light held behind the element — if light is clearly blocked, replace it. In dusty environments (construction sites, rural roads), inspect every 10,000 km. Never clean an air filter with compressed air — this forces particles into the filter medium fibres without removing them, and can displace trapped particles into the intake. Always replace.",
        visualCue:
          "Two air filter elements side by side: the new element shows clean white pleated paper; the used element shows grey-brown clogging of the pleats, with a light source behind each to illustrate the difference.",
      },
      {
        id: "s4",
        title: "Coolant Maintenance",
        body: "Diesel engines run hotter and with higher combustion pressures than petrol engines, placing greater demands on the cooling system. Coolant (ethylene glycol and water, typically 50:50 mix) protects against freezing, boiling, corrosion, and cavitation. Corrosion inhibitors in coolant deplete over time — most manufacturers specify a full coolant flush every 3–5 years or 150,000 km. Test coolant condition with a refractometer (checks freeze protection) and test strips (check inhibitor condition and pH). Diesel engines with wet-liner cylinder designs require specific coolant containing cavitation inhibitors (SCA) to prevent liner pitting.",
        visualCue:
          "A refractometer reading shows the coolant concentration scale, with a pointer at 50% glycol indicating protection to -37°C and safe operation to +108°C at 1 bar pressure.",
      },
      {
        id: "s5",
        title: "Timing Belt and Chain Service",
        body: "The timing belt (or chain) drives the camshaft(s) and in some diesels also drives the injection pump. Timing belt intervals on diesels are typically 100,000–150,000 km or 5 years (whichever comes first) and are non-negotiable — belt failure causes catastrophic engine damage in interference engines (most diesels). The belt service should always include the idler pulley, tensioner pulley, and water pump (if driven by the same belt), as replacing only the belt and having a pulley fail shortly after doubles the labour cost. Timing chains are theoretically lifetime components but can stretch on high-mileage or poorly maintained engines, causing timing retard and rattling on cold start.",
        visualCue:
          "A timing belt layout diagram shows the crankshaft sprocket, camshaft sprocket(s), injection pump sprocket, tensioner, and idler pulleys, with arrows showing belt travel direction and a service interval callout.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why is the fuel filter the most critical service item on a diesel engine?",
        options: [
          "It affects engine power more than any other filter",
          "It removes water and abrasive particles that cause injection pump and injector failure",
          "It is the most expensive component to replace",
          "It must be replaced more frequently than any other filter",
        ],
        correctIndex: 1,
        explanation:
          "Water and abrasive particles in diesel fuel are the primary causes of premature injection pump and injector failure. The fuel filter is the only protection between contaminated fuel and precision injection components.",
      },
      {
        id: "q2",
        question:
          "Why should an air filter never be cleaned with compressed air?",
        options: [
          "Compressed air can damage the filter housing",
          "It forces particles into the filter medium and can displace trapped particles into the intake",
          "It removes the anti-static coating from the filter element",
          "Compressed air is too wet and damages the paper element",
        ],
        correctIndex: 1,
        explanation:
          "Compressed air drives particles deeper into the filter fibres rather than removing them, and can displace trapped abrasive particles through the filter into the intake where they damage turbocharger and engine components.",
      },
      {
        id: "q3",
        question:
          "What tool measures diesel coolant freeze protection concentration?",
        options: [
          "Hydrometer",
          "Test strips only",
          "Refractometer",
          "Multimeter",
        ],
        correctIndex: 2,
        explanation:
          "A refractometer measures the refractive index of the coolant, which changes with glycol concentration, giving a direct reading of freeze protection temperature.",
      },
      {
        id: "q4",
        question:
          "When replacing a timing belt on a diesel, what other components should always be replaced at the same time?",
        options: [
          "Oil filter and air filter",
          "Idler pulley, tensioner, and water pump (if driven by the same belt)",
          "Fuel filter and injectors",
          "Crankshaft and camshaft seals only",
        ],
        correctIndex: 1,
        explanation:
          "Idler pulleys, tensioners, and the water pump (if belt-driven) experience similar wear as the belt. Replacing only the belt leaves old components that can fail shortly after, requiring the expensive labour to be repeated.",
      },
      {
        id: "q5",
        question: "What does a stretched timing chain cause on cold start?",
        options: [
          "High idle speed",
          "Rattling noise and timing retard",
          "Coolant temperature sensor fault",
          "Increased turbo boost",
        ],
        correctIndex: 1,
        explanation:
          "A stretched chain has slack that slaps the chain guide, causing a characteristic rattle on cold start before oil pressure builds. The slack also retards cam timing, affecting performance and fuel economy.",
      },
    ],
  },
];

// ---- AUTO ELECTRICAL ----
export const autoElectricalModules: TradeModule[] = [
  {
    id: "ae-12v-systems",
    tradeId: "auto-electrical",
    title: "12V Automotive Electrical Systems",
    level: 1,
    durationMinutes: 20,
    summary:
      "Master the fundamentals of vehicle 12V electrical architecture — battery, alternator, earth paths, and how current flows through a vehicle.",
    keyConcepts: [
      "Battery chemistry",
      "Alternator charging",
      "Earth paths",
      "Circuit polarity",
      "Voltage drop",
    ],
    steps: [
      {
        id: "ae1s1",
        title: "How a Lead-Acid Battery Works",
        body: "A 12V lead-acid battery contains six cells, each producing approximately 2.1V when fully charged — giving 12.6V open-circuit. Each cell holds lead dioxide (positive plate) and sponge lead (negative plate) submerged in dilute sulphuric acid electrolyte. During discharge, both plates convert to lead sulphate and the electrolyte weakens. During charging the process reverses. A battery at 12.4V is 50% discharged; below 11.8V under load it can no longer start an engine. Modern AGM (Absorbent Glass Mat) batteries seal the electrolyte in fibreglass mat, are spill-proof, and tolerate deep cycling better than flooded batteries — making them the choice for stop-start vehicles.",
        visualCue:
          "Imagine six small cells inside a black plastic case, each connected in series. The positive terminal post is slightly larger than the negative — a deliberate sizing difference to prevent reverse connection.",
      },
      {
        id: "ae1s2",
        title: "The Alternator & Charging Circuit",
        body: "The alternator generates AC electricity via a spinning rotor electromagnet inside a stator winding. An internal rectifier converts AC to DC. The voltage regulator — now usually integrated into the ECU — maintains output between 13.8V and 14.7V. Below 13.8V the battery discharges; above 14.7V electrolyte boils off and battery life shortens. Belt tension is critical: a slipping belt means inadequate charging, low voltage, and eventual battery drain. Test charging voltage at the battery terminals with the engine running at 2,000 RPM — a 0.5V drop versus alternator output terminals indicates a high-resistance connection or faulty earth.",
        visualCue:
          "Picture a multimeter on a battery: engine off reads 12.6V, engine running at idle shows 14.2V — confirming the alternator is charging correctly.",
      },
      {
        id: "ae1s3",
        title: "Earth Paths & Why They Matter",
        body: "Every electrical circuit needs a complete loop: current leaves the positive terminal, flows through the load, and must return via the negative (earth) path. In a vehicle the body, chassis, and engine block form the earth return path — reducing the weight of copper needed. Poor earth connections cause more faults than almost any other single issue: dim lights, intermittent starting, ECU errors, and corrosion-related failures. Critical earth points include: battery negative to body, battery negative to engine block, engine block to body (engine earth strap). These straps carry hundreds of amps during cranking — a corroded strap creates enough resistance to drop several volts and prevent starting. Clean earth connection points to bare metal.",
        visualCue:
          "Imagine current flowing from the battery positive, through the headlight bulb, and searching for a path back. Without a solid metal connection to the chassis, the path has resistance and the light glows dimly — like water trying to flow through a partially blocked pipe.",
      },
      {
        id: "ae1s4",
        title: "Using a Multimeter for Electrical Diagnosis",
        body: "A digital multimeter (DMM) is the auto electrician's core tool. Voltage measurement: set to DC volts (20V range), red probe to positive, black to earth — measures potential difference. Always test with the circuit live. Resistance measurement: set to ohms (Ω), circuit must be de-energised. Continuity test: buzzer mode; confirms whether a wire has a complete path. Current measurement: ammeter must be wired in series — break the circuit and insert the meter. Voltage drop testing is the key diagnostic technique: measure the voltage loss across a connection (switch, relay, earth strap) with the circuit loaded. More than 0.1–0.3V drop across a connection indicates resistance that needs repair.",
        visualCue:
          "See a multimeter display showing 0.8V while probed across a corroded earth strap connection during cranking — far above the 0.1V acceptable maximum. This single high-resistance joint is why the engine won't start reliably.",
      },
      {
        id: "ae1s5",
        title: "Fuses, Relays & Circuit Protection",
        body: "Fuses protect wire by melting before the wire insulation can overheat. Fuse rating must match the wire size — not the load. A 10A wire protected by a 30A fuse will burn before the fuse blows. Blade fuses (ATO/ATC) are the most common vehicle type; maxi fuses and fusible links protect main supply cables. Relays allow a low-current circuit (switch, ECU output) to control a high-current circuit (fan motor, headlights). A relay has four or five terminals: 85/86 are the coil (control circuit, typically 200 mA), 30 is supply, 87 is load output, 87a is normally-closed output. Fitting a relay for aftermarket accessories protects switch contacts and eliminates long high-current cable runs to the dash.",
        visualCue:
          "Imagine a wiring diagram with a thin blue wire from the dashboard switch going to relay terminals 85/86, and a heavy red cable from the battery directly to terminal 30 — only the short heavy cable to the load (terminal 87) needs to be routed to the accessory. The dash switch carries milliamps, not amps.",
      },
    ],
    quiz: [
      {
        id: "aeq1",
        question:
          "What open-circuit voltage indicates a 12V battery is fully charged?",
        options: ["11.8V", "12.0V", "12.6V", "13.2V"],
        correctIndex: 2,
        explanation:
          "12.6V open-circuit means all six cells are at approximately 2.1V each — the fully charged state for a lead-acid battery.",
      },
      {
        id: "aeq2",
        question:
          "What is the correct charging voltage range from a healthy alternator?",
        options: ["12.0–12.6V", "13.8–14.7V", "15.0–16.0V", "11.5–12.5V"],
        correctIndex: 1,
        explanation:
          "13.8–14.7V at the battery terminals with the engine running confirms the alternator is charging. Below 13.8V the battery will discharge; above 14.7V can damage the battery.",
      },
      {
        id: "aeq3",
        question: "Why must vehicle earth straps be connected to bare metal?",
        options: [
          "For aesthetic reasons",
          "To reduce resistance and ensure a complete circuit return path",
          "Bare metal prevents corrosion on the strap itself",
          "It is only required for audio systems",
        ],
        correctIndex: 1,
        explanation:
          "Paint and corrosion add resistance. Earth straps carry hundreds of amps during cranking — even a fraction of an ohm of added resistance causes significant voltage drop.",
      },
      {
        id: "aeq4",
        question:
          "When testing voltage drop across a connection, what is the maximum acceptable reading?",
        options: ["2.0V", "1.0V", "0.5V", "0.1–0.3V"],
        correctIndex: 3,
        explanation:
          "A good connection should show no more than 0.1–0.3V drop under load. Higher readings indicate resistance from corrosion, loose connections, or inadequate wire sizing.",
      },
      {
        id: "aeq5",
        question:
          "A relay coil (terminals 85/86) draws approximately how much current?",
        options: ["10–20A", "2–5A", "200mA", "50mA"],
        correctIndex: 2,
        explanation:
          "Relay coils draw about 200mA — allowing a small dashboard switch contact to safely control a relay that switches heavy loads of 20–30A or more.",
      },
    ],
  },
  {
    id: "ae-lighting-accessories",
    tradeId: "auto-electrical",
    title: "Lighting & Accessory Wiring",
    level: 2,
    durationMinutes: 22,
    summary:
      "Wire headlights, spotlights, bull bars, and aftermarket accessories correctly — including correct fusing, relay use, and cable sizing.",
    keyConcepts: [
      "Headlight circuits",
      "Accessory wiring",
      "Cable sizing",
      "Relay wiring",
      "Heat-shrink and connectors",
    ],
    steps: [
      {
        id: "ae2s1",
        title: "Headlight Circuit Architecture",
        body: "Modern halogen headlights draw 4–5A per globe; HID (High Intensity Discharge) xenon systems draw up to 10A each during ignition. LEDs draw 1–2A but require a matched driver module — swapping halogen for LED requires compatible electronics or the ECU reports a bulb-out fault. The headlight circuit runs from the main fusebox, through a relay (on most vehicles) to the globe. The BCM (Body Control Module) on modern vehicles manages all lighting via CAN bus — the physical switch sends a signal to the BCM, not a direct circuit command. This changes diagnostics: instead of testing switch continuity, you interrogate BCM output commands.",
        visualCue:
          "Picture a modern dashboard switch sending a 5V logic signal to the BCM, which in turn energises a solid-state relay integrated into the smart fusebox — no relay coil click, no direct 12V through the switch.",
      },
      {
        id: "ae2s2",
        title: "Fitting Driving Lights Correctly",
        body: "Aftermarket driving lights (spotlights) typically draw 5–10A each and must be wired with a dedicated relay and correctly rated cable. Cable sizing: a 10A circuit over 4m of cable requires minimum 1.5mm² twin-core. Use the vehicle's ignition or headlight signal to trigger the relay coil — so lights cannot be left on accidentally with the engine off. Mount the relay close to the power source (battery or fusebox) to minimise the heavy supply cable length. Use quality weatherproof connectors (Deutsch or similar) for all external wiring — spade connectors corrode and fail quickly in wheel-arch environments. Inline fuse the positive supply cable within 300mm of the battery — protect the supply wire, not just the load.",
        visualCue:
          "Imagine a clean under-bonnet relay mounted on the firewall: heavy red cable from battery to relay terminal 30 (with inline fuse within 300mm), thin blue trigger cable from headlight circuit to terminals 85/86, and medium red cable from terminal 87 running to both spotlights.",
      },
      {
        id: "ae2s3",
        title: "Cable Sizing for Automotive Applications",
        body: "Automotive cable sizing is governed by both current capacity and voltage drop over the run length. Common guidelines: 1.0mm² handles up to 8A for short runs; 1.5mm² up to 15A; 2.5mm² up to 20A; 4.0mm² up to 30A; 6.0mm² up to 40A. These ratings assume the cable is not bundled with other cables in a loom — bundled cables must be derated. For a 4m round-trip run (8m total conductor length) carrying 15A, voltage drop = 15 × 8 × (resistivity factor for 1.5mm² ≈ 12mΩ/m) = 1.44V — acceptable. Wiring that gets warm under load is undersized. Always use automotive-grade cable (PVC insulated, stranded, oil and heat resistant) — household twin-core is not acceptable.",
        visualCue:
          "Picture a wiring chart on a workshop wall: rows of cable sizes from 1mm² to 25mm², columns for run lengths from 2m to 10m, cells showing the maximum safe current — like a lookup table for correct cable selection.",
      },
      {
        id: "ae2s4",
        title: "Connectors, Terminals & Joining Cable",
        body: "The quality of any wiring job lives or dies in the connectors. Insulation displacement connectors (Scotchloks) are widely used but notorious for high-resistance joints and moisture ingress — avoid on permanent installations. Crimped ring or spade terminals with an appropriate ratchet crimp tool provide a cold-welded, gas-tight joint. For waterproof applications, use adhesive-lined heat-shrink solder connectors or sealed crimp terminals. All heat-shrink should be dual-wall with adhesive liner — plain heat-shrink without adhesive allows moisture tracking. Solder alone is acceptable only if the joint is subsequently supported against vibration; vibration cracks solder, leading to intermittent failures. The best approach: crimp first, then solder, then heat-shrink.",
        visualCue:
          "Line up three connector samples: a Scotchlok showing green corrosion inside; a bare wire-nut showing strands fraying; and a correctly crimped ring terminal with adhesive heat-shrink, showing a clean, sealed, professional joint.",
      },
      {
        id: "ae2s5",
        title: "Diagnosing Intermittent Electrical Faults",
        body: "Intermittent faults are the most time-consuming to diagnose. The key is to reproduce the fault first — does it happen hot, cold, over bumps, or at a specific RPM? Wiggle testing (physically flexing looms while monitoring the circuit with a multimeter or test light) locates chafed wires and loose connectors. Freeze spray identifies thermal issues. A waveform oscilloscope can capture brief voltage glitches invisible to a standard multimeter. Check the most likely causes in order: connector pins backed out, chafed wire shorting to body, corroded earth, fuse holder corrosion, and relay contact pitting. Document every test and result — memory shortcuts lead to re-testing the same components.",
        visualCue:
          "Picture a technician with a multimeter in 'MIN/MAX' capture mode clipped to a circuit, while methodically wiggling each connector in the relevant loom. When the reading spikes to 14.2V briefly before dropping back — that's the intermittent open-circuit located.",
      },
    ],
    quiz: [
      {
        id: "ae2q1",
        question:
          "Where must an inline fuse be fitted on a battery supply cable for aftermarket accessories?",
        options: [
          "At the load end",
          "In the middle of the run",
          "Within 300mm of the battery",
          "At the relay",
        ],
        correctIndex: 2,
        explanation:
          "The fuse protects the supply cable. If fitted at the far end, the full length of unfused cable can overheat and start a fire if shorted. Fit within 300mm of the battery.",
      },
      {
        id: "ae2q2",
        question:
          "Why should Scotchlok connectors be avoided for permanent vehicle wiring?",
        options: [
          "They are too expensive",
          "They are difficult to remove",
          "They create high-resistance joints and allow moisture ingress",
          "They only work on thin cable",
        ],
        correctIndex: 2,
        explanation:
          "Scotchloks pierce insulation without sealing it, allowing moisture in and creating resistance over time as corrosion builds inside the connector.",
      },
      {
        id: "ae2q3",
        question:
          "A 15A circuit runs 4 metres to the load. What minimum cable size is appropriate?",
        options: ["0.5mm²", "1.0mm²", "1.5mm²", "4.0mm²"],
        correctIndex: 2,
        explanation:
          "1.5mm² handles up to 15A for short to medium runs and keeps voltage drop within acceptable limits for a 4m run at 15A.",
      },
      {
        id: "ae2q4",
        question:
          "What triggers the relay coil in a correctly wired driving light circuit?",
        options: [
          "Direct battery connection",
          "The headlight circuit signal or ignition feed",
          "The vehicle horn circuit",
          "A manual timer switch",
        ],
        correctIndex: 1,
        explanation:
          "Using the headlight or ignition signal ensures the driving lights cannot be left on with the engine off, preventing flat batteries.",
      },
      {
        id: "ae2q5",
        question:
          "Which connector type provides the most reliable sealed automotive connection?",
        options: [
          "Scotchlok",
          "Insulation displacement connector",
          "Crimped terminal with adhesive heat-shrink",
          "Wire nut",
        ],
        correctIndex: 2,
        explanation:
          "A quality crimp provides a cold-welded gas-tight joint; the adhesive-lined heat-shrink seals against moisture. This combination outlasts all other common automotive joining methods.",
      },
    ],
  },
  {
    id: "ae-starting-charging",
    tradeId: "auto-electrical",
    title: "Starting & Charging System Diagnosis",
    level: 3,
    durationMinutes: 25,
    summary:
      "Diagnose starting and charging faults using load testing, voltage drop testing, and alternator output analysis.",
    keyConcepts: [
      "Battery load testing",
      "Starter motor diagnosis",
      "Alternator output testing",
      "Parasitic drain",
      "Charging faults",
    ],
    steps: [
      {
        id: "ae3s1",
        title: "Battery Load Testing",
        body: "Open-circuit voltage is not a reliable indicator of battery condition — a surface charge can mask a dead cell. A conductance tester (such as a Midtronics or CTEK) applies a controlled AC signal and measures internal resistance to assess true capacity without discharging the battery. Results show Cold Cranking Amps (CCA) available versus rated CCA. A battery showing 60% or less of rated CCA should be replaced before failure. The traditional carbon pile load tester applies half the CCA rating for 15 seconds — voltage should not fall below 9.6V. Battery age is also a guide: 3–5 years for standard flooded; 4–7 years for AGM. Never condemn a battery on a single test; charge it first, then retest.",
        visualCue:
          "Picture a conductance tester connected to a battery: the display shows '480 CCA available / 600 CCA rated — 80% Good'. A pass. Another battery shows '280 CCA / 550 CCA rated — 51% Replace' — clearly past its service life despite normal open-circuit voltage.",
      },
      {
        id: "ae3s2",
        title: "Starter Motor Fault Diagnosis",
        body: "Starting faults divide into: no-crank (starter does not turn), slow-crank (starter turns sluggishly), and crank-no-start (starter spins but engine doesn't fire — this is not an electrical fault). For no-crank: check battery voltage under load, check starter solenoid signal voltage, check main earth strap continuity. For slow-crank: voltage drop test the main supply and earth cables during cranking. Voltage drop > 0.5V on either side indicates a high-resistance connection. The starter motor itself: remove and bench test on a known-good battery — a starter drawing much more than its specified no-load current suggests internal short; drawing much less suggests open-circuit brushes. Starter motor brush and commutator service is practical on most units.",
        visualCue:
          "Imagine a voltage drop test in progress: one multimeter lead on the battery positive, the other on the starter solenoid B+ terminal — the 0.8V reading during cranking exposes the faulty battery connection causing hard starting.",
      },
      {
        id: "ae3s3",
        title: "Alternator Output & Ripple Testing",
        body: "A failing alternator may produce low voltage, no voltage, or AC ripple in its DC output (indicating failed diodes in the rectifier). Test charging voltage first: 13.8–14.7V at 2,000 RPM confirms normal operation. Test alternator current output using a clamp meter on the B+ output cable: should reach its rated output (e.g., 80A on a 100A alternator) when loads are applied. AC ripple test: connect an AC voltmeter across the battery — a healthy alternator shows < 0.5V AC ripple. A reading above 0.5V AC indicates diode failure. Note: modern ECU-controlled alternators vary their output based on system demand and may show lower than expected voltage at idle — this is normal behaviour, not a fault.",
        visualCue:
          "Picture a multimeter set to AC volts, clipped to the battery terminals with the engine running: a reading of 0.1V AC shows clean DC output. Another vehicle shows 1.8V AC ripple — a diode pack failure causing battery drain and ECU interference.",
      },
      {
        id: "ae3s4",
        title: "Parasitic Battery Drain Testing",
        body: "A healthy vehicle should draw less than 50mA in sleep mode (after all systems have powered down, typically 10–20 minutes after ignition off). Measure by connecting an ammeter in series with the negative battery cable (remove fuse or isolator first to avoid meter damage). Normal sleep-mode draw: 20–50mA. Above 50mA indicates a component failing to sleep. To locate the drain: pull fuses one at a time while monitoring ammeter. When drain drops significantly, that circuit contains the fault. Common culprits: interior light left on, glove box light switch fault, aftermarket accessories not wired to ignition, faulty BCM not entering sleep mode. Trunk lid, hood, or door switches that remain closed to earth can prevent BCM sleep.",
        visualCue:
          "Picture an ammeter in the negative cable path reading 240mA. As fuses are pulled from the fusebox one at a time, the reading stays high until the 'Interior/BCM' fuse is pulled — the reading drops to 35mA, confirming the BCM circuit contains the fault.",
      },
      {
        id: "ae3s5",
        title: "Common Charging System Faults & Solutions",
        body: "Undercharging (< 13.8V): worn alternator brushes, slipping belt, faulty voltage regulator, high-resistance connection. Overcharging (> 14.7V): faulty voltage regulator. Intermittent charging: worn slip rings, brush length at limit, loose alternator mounting causing belt slip, corroded B+ terminal. Battery drain (flat battery in 2–3 days with no parasitic current detected): internal battery self-discharge from a shorted cell — replace battery. Alternator whine in audio system: poor alternator earth or alternator B+ cable routed near audio wiring — reroute and ensure dedicated audio earth from battery. All alternator repairs require re-testing the full charging circuit after completion.",
        visualCue:
          "Imagine a fault diagnosis flowchart on the workshop wall: 'Complaint: flat battery' at the top, branching into 'Check parasitic drain' and 'Test charging voltage' — each branch leading to specific pass/fail tests before arriving at a confirmed repair action.",
      },
    ],
    quiz: [
      {
        id: "ae3q1",
        question:
          "A battery conductance test shows 51% of rated CCA. What action should be taken?",
        options: [
          "Continue using — it is within tolerance",
          "Charge and retest in a week",
          "Replace the battery",
          "Load test with a carbon pile to confirm",
        ],
        correctIndex: 2,
        explanation:
          "60% or less of rated CCA indicates the battery is near the end of its service life and should be replaced proactively before it fails in service.",
      },
      {
        id: "ae3q2",
        question:
          "What does AC ripple above 0.5V on a running vehicle indicate?",
        options: [
          "Normal alternator operation",
          "Belt slipping",
          "Failed diodes in the alternator rectifier",
          "Overcharging",
        ],
        correctIndex: 2,
        explanation:
          "The diode pack converts AC to DC. Failed diodes allow AC to pass into the charging circuit, creating ripple that can interfere with ECUs and drain the battery.",
      },
      {
        id: "ae3q3",
        question:
          "How long should you wait after ignition off before measuring parasitic current drain?",
        options: ["Immediately", "2–3 minutes", "10–20 minutes", "1 hour"],
        correctIndex: 2,
        explanation:
          "Many systems (BCM, ECU, infotainment) take 10–20 minutes to enter sleep mode. Measuring too early captures normal post-ignition activity, not true parasitic drain.",
      },
      {
        id: "ae3q4",
        question:
          "Voltage drop greater than 0.5V on the main cranking supply cable indicates:",
        options: [
          "Normal heavy cable resistance",
          "A high-resistance connection needing repair",
          "The battery is discharged",
          "The starter motor is faulty",
        ],
        correctIndex: 1,
        explanation:
          "0.5V drop across a main cable or terminal under cranking current indicates a corroded terminal, loose connection, or undersized cable that is creating resistance.",
      },
      {
        id: "ae3q5",
        question:
          "Which test definitively identifies the circuit causing parasitic battery drain?",
        options: [
          "Voltage drop testing each circuit",
          "Pulling fuses one at a time while monitoring ammeter",
          "Clamp meter on the battery negative",
          "Scan tool live data",
        ],
        correctIndex: 1,
        explanation:
          "Pulling fuses in turn while monitoring the ammeter in the battery circuit is the systematic method to isolate the draining circuit.",
      },
    ],
  },
  {
    id: "ae-sensors-actuators",
    tradeId: "auto-electrical",
    title: "Sensors & Actuators",
    level: 4,
    durationMinutes: 28,
    summary:
      "Understand how engine and chassis sensors work electrically — and how to test them with a multimeter and oscilloscope without causing damage.",
    keyConcepts: [
      "Sensor types",
      "Reference voltage",
      "NTC thermistors",
      "Hall effect sensors",
      "Actuator testing",
    ],
    steps: [
      {
        id: "ae4s1",
        title: "The 5V Reference Voltage System",
        body: "Most engine sensors operate on a 5V reference circuit supplied by the ECU. The ECU sends 5V out on the signal reference wire; the sensor modifies this voltage (by varying resistance) and returns a lower voltage on the signal wire. The ECU reads the returned voltage and converts it to a measurement (temperature, pressure, position). The signal voltage always sits between 0.5V and 4.5V — 0V indicates a short to earth (circuit failure); 5V indicates an open-circuit reference. These boundaries are how the ECU detects sensor faults and sets Diagnostic Trouble Codes (DTCs). The sensor common/earth must be connected to the ECU's dedicated sensor earth, not the chassis earth — a floating sensor earth creates incorrect readings.",
        visualCue:
          "Picture an ECU with three wires going to a MAP sensor: 5V reference (red), signal return (yellow), and sensor earth (black). When the sensor varies, the yellow wire returns a voltage between 0.5V and 4.5V — the ECU reads this proportional voltage to calculate manifold pressure.",
      },
      {
        id: "ae4s2",
        title: "Temperature Sensors: NTC Thermistors",
        body: "Coolant Temperature Sensors (CTS) and Intake Air Temperature (IAT) sensors use NTC (Negative Temperature Coefficient) thermistors — resistance decreases as temperature increases. Cold engine (20°C): approximately 2,000–3,000Ω; fully warm (90°C): approximately 200–300Ω. Test with an ohmmeter: compare measured resistance against the manufacturer's temperature-resistance chart. A sensor reading far outside spec causes rich running when cold (ECU thinks engine is very cold) or lean running when warm (ECU thinks engine is already hot). Also test the full circuit in-vehicle: signal voltage should fall smoothly from about 3.5–4V cold to 0.5–1V fully warm as the ECU's 5V reference is dropped across the changing sensor resistance.",
        visualCue:
          "See a workshop data chart with two columns: 'Temperature (°C)' on the left, 'Resistance (Ω)' on the right. The resistance column shows large numbers (2,500Ω at 20°C) reducing to small numbers (200Ω at 90°C) — confirming the NTC behaviour.",
      },
      {
        id: "ae4s3",
        title: "Position Sensors: Throttle Position & MAF",
        body: "The Throttle Position Sensor (TPS) is a potentiometer — a three-wire resistive track. Reference (5V), earth, and signal output vary linearly from approximately 0.5V (closed throttle) to 4.5V (wide open throttle). Test at idle: approximately 0.5–0.7V. Snap the throttle open and watch for any glitches in the signal on an oscilloscope — a worn track causes brief dropouts that trigger hesitation and stall faults. The Mass Air Flow (MAF) sensor uses a heated wire: air flowing past cools the wire; increased current is needed to maintain temperature, and this current correlates to airflow. MAF sensors fail from contamination (oil blow-by) — cleaning with MAF cleaner is a first step before replacement.",
        visualCue:
          "Picture an oscilloscope trace showing TPS voltage: a smooth ramp from 0.5V to 4.5V as the throttle opens slowly. On a worn sensor the same sweep shows a brief 0V dropout at 2.5V — the ECU interprets this as closed throttle mid-acceleration and cuts fuel.",
      },
      {
        id: "ae4s4",
        title: "Wheel Speed & Hall Effect Sensors",
        body: "ABS and traction control systems rely on wheel speed sensors to measure individual wheel rotation. The two main types: Variable Reluctance (VR/passive) — generates its own AC sine wave as a toothed ring spins past. Output is frequency-based; amplitude increases with speed. Hall effect (active) — requires a supply voltage (typically 12V or 5V), produces a clean digital square wave at any speed, including near-zero. Diagnostic difference: VR sensors can be tested with an AC voltmeter or oscilloscope while spinning the wheel by hand. Hall effect sensors require supply voltage to be checked first. A faulty wheel speed sensor typically causes an ABS warning light, traction control deactivation, or speedometer dropout.",
        visualCue:
          "Imagine oscilloscope traces side by side: VR sensor shows a sine wave whose frequency and amplitude increase as wheel speed increases; Hall effect sensor shows a clean square wave at constant amplitude regardless of speed — demonstrating the key diagnostic difference.",
      },
      {
        id: "ae4s5",
        title: "Testing & Replacing Actuators",
        body: "Actuators convert electrical signals into physical action: fuel injectors, idle control valves, EGR valves, solenoids, and motors. Injectors are tested by measuring coil resistance (typically 12–16Ω for high-impedance injectors; 2–5Ω for low-impedance) and listening for audible click when activated. A noid light inserted in the injector harness connector shows whether the ECU is commanding injection. For solenoids and motors: verify supply voltage at the actuator, then earth continuity to ECU/chassis. Motors can be bench-tested by applying 12V directly. If the actuator receives correct signals but does not operate — replace the actuator. If signals are absent — trace back to the controlling relay, ECU output, or fuse.",
        visualCue:
          "Picture a noid light plugged into an injector harness: it flashes with every injection event visible through the transparent housing. No flash means no ECU command — the fault is upstream of the injector. A non-flashing noid on one cylinder with correct coil resistance confirms the ECU is not firing that injector.",
      },
    ],
    quiz: [
      {
        id: "ae4q1",
        question:
          "A 5V reference circuit sensor signal reads 5.0V at the ECU. What does this indicate?",
        options: [
          "Full sensor output — normal",
          "Sensor at maximum reading",
          "Open-circuit in the signal wire or sensor",
          "Sensor earth fault",
        ],
        correctIndex: 2,
        explanation:
          "5V means the full reference voltage is returning — the sensor or its signal wire is open-circuit. Normal sensor operation keeps the signal between 0.5V and 4.5V.",
      },
      {
        id: "ae4q2",
        question:
          "What happens to an NTC thermistor's resistance as temperature increases?",
        options: [
          "Resistance increases proportionally",
          "Resistance stays constant",
          "Resistance decreases",
          "Resistance increases then decreases",
        ],
        correctIndex: 2,
        explanation:
          "NTC (Negative Temperature Coefficient) means resistance decreases as temperature rises — this is the defining characteristic of all NTC temperature sensors.",
      },
      {
        id: "ae4q3",
        question:
          "What is the key advantage of a Hall effect wheel speed sensor over a variable reluctance sensor?",
        options: [
          "Lower cost",
          "No supply voltage needed",
          "Produces a clean digital signal at any speed including near-zero",
          "Higher accuracy at high speed only",
        ],
        correctIndex: 2,
        explanation:
          "Hall effect sensors produce a square wave at any speed, enabling accurate ABS operation even at very low speeds. VR sensors produce weak signals at low speed that can be misread.",
      },
      {
        id: "ae4q4",
        question:
          "A TPS signal shows a brief dropout to 0V mid-sweep on an oscilloscope. What is the likely cause?",
        options: [
          "Normal TPS behaviour at mid-range",
          "Worn resistive track causing an open-circuit at that position",
          "5V reference failure",
          "Earth fault",
        ],
        correctIndex: 1,
        explanation:
          "A worn potentiometer track has a physical gap at the worn point — as the wiper crosses it, the signal briefly drops to 0V, which the ECU reads as closed throttle, causing a hesitation.",
      },
      {
        id: "ae4q5",
        question:
          "A noid light plugged into an injector harness does not flash during cranking. Where is the fault most likely located?",
        options: [
          "The injector coil is open-circuit",
          "The ECU is not commanding that injector — fault is upstream",
          "The injector is mechanically stuck",
          "Fuel pressure is too low",
        ],
        correctIndex: 1,
        explanation:
          "The noid light tests whether the ECU is sending a signal. No flash means no ECU command — the fault is in the wiring, fuse, relay, or ECU output, not the injector itself.",
      },
    ],
  },
  {
    id: "ae-can-bus-diagnostics",
    tradeId: "auto-electrical",
    title: "CAN Bus & Scan Tool Diagnostics",
    level: 5,
    durationMinutes: 30,
    summary:
      "Understand how modern vehicle networks communicate and how to use scan tools to read fault codes, live data, and perform bi-directional tests.",
    keyConcepts: [
      "CAN bus architecture",
      "OBD-II protocols",
      "Fault code reading",
      "Live data analysis",
      "Bi-directional control",
    ],
    steps: [
      {
        id: "ae5s1",
        title: "How CAN Bus Works",
        body: "Controller Area Network (CAN bus) allows all ECUs in a vehicle to communicate over just two wires — CAN High and CAN Low — rather than point-to-point wiring. Messages are broadcast as differential signals: CAN High rises to approximately 3.5V while CAN Low drops to 1.5V when transmitting a logic 1 (dominant state). All modules on the bus receive every message; each filters the messages addressed to it. Typical CAN bus speed: 500 kbps for high-speed powertrain networks; 125 kbps for lower-speed body systems. A CAN bus with just one wire shorted or open causes all connected modules to set communication faults and may disable the entire vehicle. Terminating resistors (120Ω at each end of the bus) are critical — correct total resistance = 60Ω.",
        visualCue:
          "Picture two twisted wires running through the engine bay, connecting the ECU, ABS module, TCM, instrument cluster, and BCM in a daisy-chain. Each module is an equal participant on the network — more like a conference call than separate phone lines.",
      },
      {
        id: "ae5s2",
        title: "OBD-II and the Diagnostic Port",
        body: "OBD-II (On Board Diagnostics, second generation) has been mandatory on all petrol vehicles sold in Australia since 2006 and diesel from 2010. The 16-pin Data Link Connector (DLC) is located within reach of the driver, usually under the dash. Pins 4 and 5 are chassis and signal earth; pin 16 is battery positive (always live). Different protocols use different pins: CAN bus uses pins 6 (CAN High) and 14 (CAN Low). A scan tool connects here and communicates with all accessible modules. Generic OBD-II access covers emissions-related engine and transmission codes. Enhanced or manufacturer-specific access (requiring a professional scan tool) allows access to ABS, airbag, BCM, climate, and all other modules.",
        visualCue:
          "Imagine a 16-pin trapezoid connector under the dash: a professional scan tool is plugged in, and the display shows a list of all communicating modules — ECU, TCM, ABS, Airbag, BCM, Instrument Cluster — each one responding to the scan tool's request to identify itself.",
      },
      {
        id: "ae5s3",
        title: "Reading and Interpreting Fault Codes",
        body: "Diagnostic Trouble Codes (DTCs) follow the SAE J2012 format: P (Powertrain), B (Body), C (Chassis), U (Network). The second digit is 0 (generic) or 1 (manufacturer-specific). The remaining three digits identify the system and specific fault. P0300 = random misfire; P0171 = system lean bank 1; P0420 = catalyst efficiency low bank 1. A DTC is a starting point, not a diagnosis — P0335 (crankshaft position sensor circuit) means there is a fault in the circuit, not necessarily that the sensor is bad. Check supply voltage, earth continuity, and wiring first. Freeze frame data captured when the DTC set is invaluable — it records RPM, load, temperature, and fuel trim at the moment of fault.",
        visualCue:
          "See a scan tool screen showing: 'P0171 — System Lean Bank 1 — Status: Current'. Freeze frame data below shows: Engine RPM 2,500, Load 65%, ECT 90°C, Short-Term Fuel Trim +18%, Long-Term Fuel Trim +22% — all pointing to insufficient fuel delivery at cruise.",
      },
      {
        id: "ae5s4",
        title: "Live Data Analysis",
        body: "Live data (also called data stream or PIDs) lets you watch sensor and actuator values in real time as the engine runs. Key parameters to monitor: Short-Term Fuel Trim (STFT) and Long-Term Fuel Trim (LTFT) — values beyond ±10% indicate the ECU is compensating for a lean or rich condition. MAF reading in g/s — should match expected values for RPM and load. O2 sensor switching — should toggle rapidly between 0.1V and 0.9V on a closed-loop engine. Coolant temperature — should reach 90°C and stabilise. Any sensor reading that is stuck, implausible, or fails to correlate with other parameters is suspicious. Live data separates genuine faults from false codes much faster than replacing parts.",
        visualCue:
          "Picture a graph view with four live traces: O2 sensor sweeping rapidly between 0.1V and 0.9V (normal); fuel trim at +5% (acceptable); MAF reading increasing linearly with RPM; coolant temperature holding steady at 91°C. All four traces painting a picture of a healthy, correctly fuelling engine.",
      },
      {
        id: "ae5s5",
        title: "Bi-Directional Testing & Component Activation",
        body: "Professional scan tools allow bi-directional control — commanding the ECU to activate individual components for diagnostic purposes. Examples: activate the fuel pump relay to check prime pressure without starting the engine; command the EGR valve open and monitor MAF drop; cycle the ABS modulator solenoids to bleed ABS-equipped brakes; activate EVAP purge valve and watch fuel trim response. This technique confirms whether a component is mechanically functional (responds to a command) independently of the electrical circuit. Bi-directional tests significantly reduce unnecessary part replacement — if the component responds correctly when commanded directly, the fault is in the control logic, wiring, or trigger signal, not the component.",
        visualCue:
          "Imagine a scan tool screen with a 'Actuator Tests' menu: 'Fuel Injector 3 — Activate'. After selecting it, the engine drops RPM noticeably as injector 3 cuts — confirming it is operational. An injector that shows no RPM change when cut is a confirmed dead injector.",
      },
    ],
    quiz: [
      {
        id: "ae5q1",
        question:
          "What is the total termination resistance measured across a healthy CAN bus?",
        options: ["240Ω", "120Ω", "60Ω", "12Ω"],
        correctIndex: 2,
        explanation:
          "Two 120Ω termination resistors, one at each end of the bus, in parallel give 60Ω. This is the standard value confirming both terminators are present and intact.",
      },
      {
        id: "ae5q2",
        question:
          "DTC P0171 indicates 'System Lean Bank 1'. What is the correct first diagnostic step?",
        options: [
          "Replace the oxygen sensor",
          "Check fuel trim freeze frame data and investigate the cause of lean condition",
          "Replace the fuel injectors",
          "Replace the MAF sensor",
        ],
        correctIndex: 1,
        explanation:
          "A DTC is a starting point. Review freeze frame data to understand operating conditions when the fault occurred, then systematically test the circuit — don't replace parts without diagnosis.",
      },
      {
        id: "ae5q3",
        question:
          "Long-Term Fuel Trim (LTFT) reads +22%. What does this indicate?",
        options: [
          "Engine is running rich — ECU is reducing fuel",
          "Engine is running lean — ECU is adding significant fuel to compensate",
          "Normal fuelling",
          "Ignition timing is retarded",
        ],
        correctIndex: 1,
        explanation:
          "+22% LTFT means the ECU is adding 22% more fuel than the base map — it's learning that the engine runs lean. Values beyond ±10% warrant investigation for air leaks, fuel delivery faults, or sensor issues.",
      },
      {
        id: "ae5q4",
        question:
          "What does a bi-directional component activation test confirm?",
        options: [
          "Whether the ECU has the correct software",
          "Whether the component responds correctly to a direct command, independent of its control circuit",
          "Whether the wiring between the ECU and component is correct",
          "Whether the OBD-II port is functioning",
        ],
        correctIndex: 1,
        explanation:
          "Bi-directional testing proves the component itself works when commanded directly. If it responds, the fault is upstream in the control logic or trigger circuit.",
      },
      {
        id: "ae5q5",
        question:
          "Why is freeze frame data important when diagnosing an intermittent DTC?",
        options: [
          "It shows the current sensor values",
          "It records conditions at the moment the fault occurred, helping reproduce and diagnose intermittent faults",
          "It prevents the DTC from clearing",
          "It activates the relevant actuator for testing",
        ],
        correctIndex: 1,
        explanation:
          "Freeze frame captures a snapshot of all key parameters at the instant the DTC was set — RPM, load, temperature, fuel trim — giving vital clues about when and why the fault occurred.",
      },
    ],
  },
];

// ---- BRAKES & SUSPENSION ----
export const brakesModules: TradeModule[] = [
  {
    id: "bs-brake-fundamentals",
    tradeId: "brakes-suspension",
    title: "Brake System Fundamentals",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand how hydraulic disc and drum brake systems generate stopping force and the maintenance intervals that keep them safe.",
    keyConcepts: [
      "Hydraulic principles",
      "Disc brakes",
      "Drum brakes",
      "Brake fluid",
      "Brake fade",
    ],
    steps: [
      {
        id: "bs1s1",
        title: "Pascal's Law & Hydraulic Braking",
        body: "Hydraulic brakes exploit Pascal's Law: pressure applied to an enclosed fluid is transmitted equally in all directions. When the driver presses the brake pedal, a master cylinder converts mechanical force into hydraulic pressure. This pressure travels through brake lines to each wheel, where a caliper (disc) or wheel cylinder (drum) multiplies the force against the friction material. The mechanical advantage is also increased by having a larger slave cylinder area than the master cylinder — a master cylinder piston of 25mm² can create significant force at a caliper piston of 50mm². This is why a 70kg driver applying modest pedal force can stop a 1,500kg vehicle. Any air in the hydraulic circuit is compressible — unlike fluid — causing a spongy pedal and drastically reduced braking force.",
        visualCue:
          "Imagine a brake pedal lever: the push force travels down to a master cylinder, through fluid-filled lines (shown as arrows of equal pressure radiating outward), to four wheel cylinders that push outward with amplified force against the friction surfaces.",
      },
      {
        id: "bs1s2",
        title: "Disc Brake Operation",
        body: "A disc brake caliper clamps brake pads against a rotating disc (rotor) when hydraulic pressure is applied. The caliper slides on pins, allowing the outer pad to self-apply as the caliper body moves. Disc thickness must exceed the manufacturer's minimum specification — a disc worn below minimum cannot absorb enough heat and will warp or crack under hard braking. Check disc runout with a dial indicator: maximum 0.05mm on most vehicles. Disc surface finish matters: parallel machining marks (cross-hatched) help bed new pads. Deeply grooved discs accelerate pad wear and reduce contact area. Rust formation on parked vehicles is normal and clears after a few brake applications — heavy pitting or deep corrosion grooves require disc replacement.",
        visualCue:
          "See a cutaway disc caliper: the hydraulic piston pushes the inner pad directly; the caliper body slides inward, pulling the outer pad against the disc simultaneously. Both pads contact the disc faces from opposite sides — the disc is squeezed, not pushed.",
      },
      {
        id: "bs1s3",
        title: "Drum Brake Operation & Adjustment",
        body: "Drum brakes use a wheel cylinder to push curved brake shoes outward against the inside of a spinning drum. The primary (leading) shoe is self-energising on a forward-rotating drum — friction pulls it tighter against the drum, multiplying braking force. The secondary (trailing) shoe works against friction. This means uneven wear is normal. Drums must be within manufacturer's maximum diameter specification — an oversized drum flexes and reduces braking efficiency. Self-adjusters on most modern drum brakes advance the shoe position as lining wears; if the handbrake needs excessive travel, check the adjuster is functioning. Inspect for dust (friction dust, not asbestos in vehicles post-1984 in Australia) and clean with a brake cleaner spray.",
        visualCue:
          "Picture the inside of an open drum brake: wheel cylinder at the top, two curved shoes spreading outward, return springs pulling them back off the drum when pressure releases, and a star-wheel adjuster at the bottom maintaining correct shoe-to-drum clearance.",
      },
      {
        id: "bs1s4",
        title: "Brake Fluid: Properties, Grades & Replacement",
        body: "Brake fluid is hygroscopic — it absorbs moisture from the atmosphere over time. As moisture content rises, the fluid's boiling point drops. Standard DOT 3 fluid: dry boiling point 205°C, wet (3.7% water) boiling point 140°C. DOT 4: dry 230°C, wet 155°C. DOT 5.1: dry 260°C, wet 180°C. DOT 5 (silicone) is NOT compatible with ABS systems — never use it as a replacement. Fluid boiling in the caliper creates vapour (compressible) — the pedal goes to the floor under sustained braking (brake fade from boiling fluid). Replace brake fluid every 2 years regardless of appearance. Use a brake fluid tester (refractometer or electronic) to measure moisture content before any brake job — contaminated fluid should always be flushed.",
        visualCue:
          "See two test strip comparisons: fresh DOT 4 fluid showing a low moisture reading (green indicator); 4-year-old fluid from the same vehicle showing high moisture content (red indicator) — same colour fluid, vastly different safety margin before vapour lock.",
      },
      {
        id: "bs1s5",
        title: "Brake Fade: Causes & Prevention",
        body: "Brake fade is a temporary reduction in braking performance caused by heat. Two types: pad fade — pads overheat, the friction material outgasses, and a layer of gas between pad and disc reduces friction coefficient. This occurs when organic pads are pushed beyond their temperature range; performance pads (semi-metallic, carbon) operate at higher temperatures. Fluid fade — brake fluid boils from absorbed heat in the caliper, creating compressible vapour. Prevention: correct pad compound for application, fresh fluid, correctly bedded pads, and adequate brake cooling airflow. On track or mountain driving, deliberately avoid riding the brakes — apply firmly and release to allow heat to dissipate, rather than constant light application that builds heat without cooling cycles.",
        visualCue:
          "Picture a mountain descent: a driver riding the brakes continuously generates sustained heat. Thermal camera overlay shows the brake disc glowing orange, pad surface outgassing visible as wisps of smoke, fluid temperature approaching 150°C — all adding up to a failing brake system before the bottom of the hill.",
      },
    ],
    quiz: [
      {
        id: "bsq1",
        question: "What causes a spongy brake pedal?",
        options: [
          "Worn brake pads",
          "Air in the hydraulic circuit",
          "Incorrect brake fluid grade",
          "Overtightened caliper bolts",
        ],
        correctIndex: 1,
        explanation:
          "Air is compressible, unlike brake fluid. Even a small air bubble in the system allows the pedal to compress the air rather than transmit full hydraulic pressure to the calipers.",
      },
      {
        id: "bsq2",
        question:
          "What is the maximum acceptable disc runout on most passenger vehicles?",
        options: ["0.5mm", "0.25mm", "0.1mm", "0.05mm"],
        correctIndex: 3,
        explanation:
          "Maximum disc runout is typically 0.05mm. Runout beyond this causes pedal pulsation as the disc wobbles and alternately pushes the pads back through the caliper.",
      },
      {
        id: "bsq3",
        question:
          "Why should DOT 5 silicone brake fluid NOT be used in ABS systems?",
        options: [
          "It has a lower boiling point",
          "It is incompatible with ABS modulator seals and can cause ABS malfunction",
          "It absorbs moisture too quickly",
          "It costs too much",
        ],
        correctIndex: 1,
        explanation:
          "DOT 5 silicone fluid is chemically incompatible with the seal materials and internal components used in ABS modulators and can cause serious ABS system damage.",
      },
      {
        id: "bsq4",
        question:
          "How often should brake fluid be replaced regardless of appearance?",
        options: [
          "Every 6 months",
          "Every year",
          "Every 2 years",
          "Only when it looks dark",
        ],
        correctIndex: 2,
        explanation:
          "Brake fluid absorbs moisture continuously from the atmosphere. A 2-year replacement interval maintains adequate boiling point regardless of colour, which is not a reliable quality indicator.",
      },
      {
        id: "bsq5",
        question:
          "What is the most effective driving technique to prevent brake fade on long mountain descents?",
        options: [
          "Ride the brakes lightly throughout",
          "Apply firmly and release repeatedly to allow cooling cycles",
          "Use the handbrake alternately",
          "Drive in a higher gear and avoid braking",
        ],
        correctIndex: 1,
        explanation:
          "Firm application followed by release allows the disc to shed heat to the air. Constant light application builds heat continuously with no cooling opportunity, leading to both pad and fluid fade.",
      },
    ],
  },
  {
    id: "bs-suspension-principles",
    tradeId: "brakes-suspension",
    title: "Suspension Principles & Geometry",
    level: 2,
    durationMinutes: 22,
    summary:
      "Learn how suspension systems control wheel movement, maintain tyre contact with the road, and how alignment geometry affects tyre wear and handling.",
    keyConcepts: [
      "Suspension types",
      "Spring & damper function",
      "Camber, caster & toe",
      "Wheel alignment",
      "Tyre wear patterns",
    ],
    steps: [
      {
        id: "bs2s1",
        title: "What Suspension Must Do",
        body: "A suspension system must simultaneously: allow wheels to move vertically over bumps without transmitting shock to the body (comfort); maintain maximum tyre contact with the road through corners and over bumps (grip); allow steering inputs to change direction (steering geometry); and isolate the body from noise and vibration. These goals are in tension — stiffer springs improve handling but reduce comfort. The spring supports the vehicle's weight. The damper (shock absorber) controls how quickly the spring compresses and rebounds — without a damper, a spring-sprung car would oscillate continuously. The damper converts kinetic energy (bouncing) into heat via hydraulic fluid. Worn dampers allow the wheel to bounce and lose tyre contact intermittently.",
        visualCue:
          "Imagine a wheel hitting a pothole in slow motion: the spring compresses, absorbing the impact and storing energy; the damper resists rapid compression, slowing the movement; on rebound, the damper slows the return, preventing the wheel from bouncing back sharply.",
      },
      {
        id: "bs2s2",
        title: "Suspension Types: MacPherson, Double Wishbone & Multi-link",
        body: "MacPherson Strut (most common front suspension): combines the damper and steering pivot in a single strut. Simple, cheap, and compact — ideal for FWD vehicles where packaging is tight. Limited camber change through travel. Double Wishbone: upper and lower control arms allow independent wheel movement with more control over camber change. Used in performance and most rear-wheel-drive vehicles. More complex and expensive but offers superior handling. Multi-link (most modern rear suspension): multiple links control wheel position in multiple axes, allowing optimised compliance for ride comfort while maintaining handling geometry. Solid axle (live axle): both wheels connected to a common beam — simple, robust, and cheap. Used in heavy commercial vehicles. Axle moves with one wheel affects the other.",
        visualCue:
          "Picture three suspension cutaway diagrams side by side: MacPherson showing one long strut with the coil spring wrapped around it; Double Wishbone showing two triangular arms above and below the hub; Multi-link showing five separate links controlling a single hub.",
      },
      {
        id: "bs2s3",
        title: "Wheel Alignment: Camber, Caster & Toe",
        body: "Camber: the vertical tilt of the wheel when viewed from the front. Negative camber (top tilted in) increases contact patch during cornering. Positive camber (top tilted out) creates inside edge tyre wear. Zero camber is ideal for straight-line driving. Caster: the forward or rearward tilt of the steering axis when viewed from the side. Positive caster (top tilted rearward) creates self-centring and straight-line stability. Toe: the direction the front of the tyre points relative to straight ahead. Toe-in (front edges pointing inward) stabilises straight-line tracking. Toe-out (front edges pointing outward) causes feathering wear and instability. Toe is the most sensitive alignment setting — even 1mm of toe error over the width of a front axle significantly affects straight-line pull.",
        visualCue:
          "See three diagrams: Camber viewed from the front showing the wheel tilted; Caster viewed from the side showing the kingpin axis angle; Toe viewed from above showing both front tyres angled inward or outward relative to the centreline.",
      },
      {
        id: "bs2s4",
        title: "Reading Tyre Wear Patterns",
        body: "Tyre wear patterns are a diagnostic roadmap: Centre wear (across the middle): overinflated tyres. The centre contact patch bulges and carries all the load. Edge wear (both edges worn): underinflated tyres. The tyre flexes excessively and wears on its edges. One-edge wear: incorrect camber. The tyre is tilted and runs on one shoulder. Feathering (tread blocks have sharp edge on one side, tapered on the other): incorrect toe. The tyre is dragging sideways. Cupping (diagonal high-low spots): worn dampers allowing wheel hop. Flat spots: emergency braking on non-ABS vehicle causing lock-up. A complete tyre wear inspection tells you the alignment history of the vehicle without an alignment machine.",
        visualCue:
          "Imagine a row of tyre cross-sections on a workshop poster: 'Centre wear = too much pressure'; 'Both edges worn = too little pressure'; 'Inside edge worn = too much negative camber'; 'Outside edge worn = too much positive camber'; 'Feathering = toe error'.",
      },
      {
        id: "bs2s5",
        title: "Steering Geometry: Ackermann & Scrub Radius",
        body: "Ackermann geometry ensures that in a corner, the inner wheel turns tighter than the outer wheel (both wheels point at the same centre of rotation). Without Ackermann, one tyre would scrub sideways through every corner — wearing tyres and creating steering fight. Modern vehicles use approximately 80% Ackermann. Scrub radius is the distance between the steering axis (kingpin) and the centre of the tyre contact patch at the road. A small positive scrub radius provides feel and self-centring. Negative scrub radius (used on many FWD vehicles) causes braking forces to steer the front wheels straight — beneficial if one front tyre has lower grip during braking. Incorrect wheel spacers, aftermarket wheels with wrong offset, or accident damage can change scrub radius and cause pulling under braking.",
        visualCue:
          "Picture a vehicle cornering from above: the inner front wheel is turned sharper than the outer wheel, both pointing to a common centre point on the rear axle line. This is Ackermann geometry preventing tyre scrub.",
      },
    ],
    quiz: [
      {
        id: "bs2q1",
        question:
          "What is the purpose of a damper (shock absorber) in a suspension system?",
        options: [
          "To support the vehicle's weight",
          "To control the rate of spring compression and rebound, preventing continuous oscillation",
          "To maintain wheel alignment geometry",
          "To reduce road noise",
        ],
        correctIndex: 1,
        explanation:
          "The spring stores energy; the damper dissipates it as heat, preventing the spring from oscillating continuously after a bump. Without dampers, the car would bounce on every road irregularity.",
      },
      {
        id: "bs2q2",
        question: "Tyre wear on both edges with a good centre indicates:",
        options: [
          "Overinflation",
          "Correct inflation",
          "Underinflation",
          "Negative camber",
        ],
        correctIndex: 2,
        explanation:
          "Underinflated tyres flex excessively, causing the edges of the tread to carry disproportionate load while the centre lifts slightly — creating the characteristic double-edge wear pattern.",
      },
      {
        id: "bs2q3",
        question:
          "Which alignment angle most affects straight-line stability and self-centring of the steering?",
        options: ["Camber", "Toe", "Caster", "Ackermann"],
        correctIndex: 2,
        explanation:
          "Positive caster places the steering axis ahead of the contact patch, creating a self-centring moment similar to a shopping trolley castor — the more positive the caster, the stronger the self-centring effect.",
      },
      {
        id: "bs2q4",
        question: "Cupping (scalloping) of the tyre tread indicates:",
        options: [
          "Overinflation",
          "Incorrect toe setting",
          "Worn shock absorbers causing wheel hop",
          "Inside camber wear",
        ],
        correctIndex: 2,
        explanation:
          "Cupping is caused by the wheel bouncing on the road surface — each time the wheel lands it wears a spot. Worn dampers allow this bouncing, which also causes intermittent loss of tyre contact during cornering.",
      },
      {
        id: "bs2q5",
        question:
          "What is the primary benefit of negative scrub radius on a FWD vehicle under hard braking?",
        options: [
          "Reduces brake fade",
          "Causes braking forces to steer the front wheels straight, improving stability if one front tyre has less grip",
          "Increases steering feel",
          "Reduces tyre wear",
        ],
        correctIndex: 1,
        explanation:
          "With negative scrub radius, the geometry causes each wheel's braking force to pull the wheel straight — if one front tyre locks or has less grip, it tends to steer the car straight rather than pulling to one side.",
      },
    ],
  },
  {
    id: "bs-inspection-service",
    tradeId: "brakes-suspension",
    title: "Brake & Suspension Inspection",
    level: 3,
    durationMinutes: 25,
    summary:
      "Conduct a systematic brake and suspension inspection to roadworthiness standard — measuring, testing, and documenting every wear item.",
    keyConcepts: [
      "Pad thickness measurement",
      "Disc measurement",
      "Ball joint testing",
      "Tie rod inspection",
      "Roadworthiness criteria",
    ],
    steps: [
      {
        id: "bs3s1",
        title: "Brake Pad & Disc Measurement",
        body: "Brake pad minimum thickness is typically 2mm (most manufacturers specify 3mm as service limit). Measure remaining friction material thickness at the thinnest point, excluding the backing plate. Use a brake pad depth gauge or vernier calipers. Check all four corners — front pads typically wear faster than rears on most vehicles; this reverses on vehicles with electronic brake force distribution that biases rearward. Disc minimum thickness is stamped on the disc hub face or casting — for example '22 MIN' means replace at 22mm or less. Measure at the thinnest point using a disc micrometer. Also measure disc runout with a dial indicator clipped to the hub. Document every measurement — liability follows your recorded inspection.",
        visualCue:
          "Picture a brake inspection sheet with four rows (LF, RF, LR, RR) and columns for pad thickness (mm), disc thickness (mm), disc runout (mm), and condition notes. Every cell filled in — this is the standard of a professional brake inspection.",
      },
      {
        id: "bs3s2",
        title: "Wheel Bearing Inspection",
        body: "Wheel bearings support the entire vehicle weight through the hub while allowing rotation. Worn bearings create humming noise (changes pitch with steering input), vibration, and ultimately catastrophic failure. Test method: with the vehicle on a hoist, grasp the tyre at 12 and 6 o'clock and rock — any play indicates a worn hub bearing or, on solid-axle vehicles, a tapered roller bearing needing adjustment. Grasp at 9 and 3 o'clock for inner/outer bearing check on independent suspension (this checks loose wheel bearings and ball joints simultaneously). Spin the wheel by hand — roughness, grinding, or clicking confirm worn bearing races. Modern sealed hub bearings are non-adjustable — replace as a unit. Tapered roller bearings in some trucks and older vehicles can be adjusted for preload.",
        visualCue:
          "Imagine a technician grasping a wheel at 12 and 6 o'clock, applying alternating push-pull force: a correctly functioning hub bearing shows zero movement. Any perceptible rock — even 1mm — indicates a worn hub bearing needing replacement.",
      },
      {
        id: "bs3s3",
        title: "Ball Joint & Control Arm Inspection",
        body: "Ball joints are pivoting connections between the control arm and steering knuckle (hub carrier). They allow wheel movement in all directions while transmitting steering and braking loads. Wear creates play (loose), or seizure (stiff — tyres wear on inside edge, steering is heavy). Axial play (up-down) and radial play (in-out) both indicate wear. Test method: support the vehicle under the lower control arm (not the axle or subframe), removing weight from the ball joint. Grasp the wheel at 12 and 6 o'clock and rock — movement here indicates ball joint play. Tapered stud ball joints self-tighten in their tapered seat — a loose taper requires immediate replacement as the stud can pull out suddenly. Inspect rubber boots — a split boot allows grease to escape and contamination to enter, dramatically shortening bearing life.",
        visualCue:
          "Picture a workshop manual diagram showing the correct jack placement under the lower control arm — relieving spring load from the lower ball joint so rocking the wheel tests only ball joint play without spring preload masking movement.",
      },
      {
        id: "bs3s4",
        title: "Steering Component Inspection",
        body: "Steering linkage translates steering wheel rotation into wheel direction change. Key components: tie rods (inner and outer) connect the steering rack to the steering knuckle. Inspect for looseness by grasping the tie rod and attempting to move it while a helper turns the steering wheel slightly — play in the joint while the rack moves indicates a worn tie rod end. Inspect the rack bellows (rubber boots) for splits — loss of grease and rack contamination follows quickly. Check power steering hoses for chafing, weeping, or deteriorated sections. Rack-and-pinion rack housing: grasp the rack and check for movement in the rack mounts — loose rack causes wandering steering and inconsistent alignment. All steering play must be traced to source and repaired; guessing is not acceptable.",
        visualCue:
          "See a hands-on inspection: technician grips the tie rod with one hand while watching for movement; an assistant rocks the steering wheel 5° either side — any jerky movement or looseness felt in the tie rod joint before the wheel moves confirms a worn tie rod end.",
      },
      {
        id: "bs3s5",
        title: "Roadworthiness Standards & Documentation",
        body: "Roadworthiness (RWC) criteria for brakes and suspension vary by state but consistently require: brake pads above minimum thickness, discs above minimum thickness and free of deep grooving, brake fluid lines free of corrosion and leaks, handbrake achieves specified stroke, no wheel bearing play, no ball joint or tie rod play beyond specification, and no fluid leaks from dampers. Documentation is critical: every inspection must generate a written record with measurements, not just a pass/fail. In the event of a subsequent accident, your inspection record is your legal defence. Never sign off on a vehicle you haven't personally inspected. If a customer declines recommended repairs, note it in writing — get the customer to sign the declined repair record.",
        visualCue:
          "Picture a completed RWC inspection form: each system has a dedicated box with measured values, inspector's initials, and the final pass/fail status. The form has a date, vehicle details, and the inspector's licence number — a legal document, not a worksheet.",
      },
    ],
    quiz: [
      {
        id: "bs3q1",
        question:
          "Where is the minimum disc thickness specification typically found?",
        options: [
          "In the workshop manual only",
          "On the disc hub face or casting",
          "Stamped on the caliper",
          "In the vehicle owner's handbook",
        ],
        correctIndex: 1,
        explanation:
          "The minimum disc thickness is cast or stamped directly onto the disc — for example 'MIN 22mm'. This allows the measurement to be verified against the disc itself during inspection.",
      },
      {
        id: "bs3q2",
        question:
          "When testing for wheel bearing play, where must the jack be positioned?",
        options: [
          "Under the axle",
          "Under the lower control arm to remove spring load",
          "Under the subframe",
          "Under the vehicle sill",
        ],
        correctIndex: 1,
        explanation:
          "Jacking under the lower control arm compresses the spring and removes load from the ball joint — allowing wheel rocking to test bearing play without spring preload masking ball joint movement.",
      },
      {
        id: "bs3q3",
        question:
          "How is a worn outer tie rod end typically identified during inspection?",
        options: [
          "Measuring toe angle change",
          "Attempting to move the tie rod by hand while an assistant turns the steering wheel slightly",
          "Listening for clicking over bumps",
          "Checking for grease leakage only",
        ],
        correctIndex: 1,
        explanation:
          "Any movement felt in the tie rod joint before the steering rack moves indicates play in the joint. This direct physical test is the definitive method for detecting worn tie rod ends.",
      },
      {
        id: "bs3q4",
        question:
          "Why is it essential to document measurements during a brake inspection?",
        options: [
          "To generate a longer invoice",
          "As a legal record that demonstrates due diligence if the vehicle is involved in a subsequent accident",
          "To satisfy insurance requirements only",
          "Measurements are optional — pass/fail is sufficient",
        ],
        correctIndex: 1,
        explanation:
          "Recorded measurements create a defensible legal record of the vehicle's condition at the time of inspection. Without measurements, a pass/fail is not professionally defensible.",
      },
      {
        id: "bs3q5",
        question:
          "A split ball joint rubber boot is discovered during inspection. What is the appropriate action?",
        options: [
          "Clean and re-grease the joint — the boot damage is cosmetic",
          "Replace the boot only",
          "Recommend immediate ball joint replacement — the joint is contaminated and grease-depleted",
          "Monitor and re-inspect in 10,000km",
        ],
        correctIndex: 2,
        explanation:
          "A split boot means the joint has lost its grease and been exposed to road contamination. The joint is already compromised — boot replacement alone does not restore the lost lubrication or remove contamination already inside.",
      },
    ],
  },
  {
    id: "bs-abs-esc",
    tradeId: "brakes-suspension",
    title: "ABS, ESC & Advanced Systems",
    level: 4,
    durationMinutes: 28,
    summary:
      "Understand how Anti-lock Braking and Electronic Stability Control work, their maintenance requirements, and how to diagnose common faults.",
    keyConcepts: [
      "ABS operation",
      "ESC function",
      "Hydraulic modulator",
      "Wheel speed sensor faults",
      "Brake bleeding ABS systems",
    ],
    steps: [
      {
        id: "bs4s1",
        title: "How ABS Works",
        body: "Anti-lock Braking System (ABS) prevents wheel lockup during hard braking by modulating hydraulic pressure to each wheel independently. The ABS ECU monitors all four wheel speed sensors. When one wheel decelerates faster than the others (indicating impending lockup), the ABS modulator valve closes the supply circuit (holding pressure), then briefly opens a return circuit (reducing pressure) until the wheel spins up again. This cycle repeats 10–15 times per second — faster than any driver can pump the brakes. ABS allows the driver to maintain steering control during maximum braking. On loose surfaces (gravel, snow) a locked wheel can sometimes stop a vehicle in a shorter distance — this is why off-road vehicles may have an ABS off-road mode.",
        visualCue:
          "Imagine an ABS operation graph: wheel speed on the y-axis, time on the x-axis. During ABS operation, wheel speed oscillates rapidly above zero rather than dropping to zero — the wheel is constantly on the verge of lockup but never fully locks, maintaining steering geometry.",
      },
      {
        id: "bs4s2",
        title: "Electronic Stability Control (ESC)",
        body: "ESC prevents skids by comparing the driver's steering input with the actual vehicle direction (yaw rate sensor) and applying individual wheel brakes and/or reducing engine torque to correct understeer or oversteer. An understeer correction (front wheels pushing wide) typically reduces engine torque and applies rear braking on the inside rear wheel. An oversteer correction (rear sliding out) applies braking on the front outside wheel. The yaw rate sensor, lateral accelerometer, and steering angle sensor all feed the ESC ECU. ESC has been mandatory on new vehicles sold in Australia since 2011. ESC is activated when the vehicle is in danger of going out of control — false activations indicate worn tyres, mismatched tyre sizes, or a faulty sensor.",
        visualCue:
          "Picture a vehicle cornering from above: the rear begins to slide right (oversteer). ESC detects the yaw rate exceeds the calculated safe value and instantly applies the right front brake — creating a moment that corrects the slide before the driver reacts.",
      },
      {
        id: "bs4s3",
        title: "ABS Modulator & Maintenance",
        body: "The ABS hydraulic modulator contains solenoid valves and a small pump for each channel (typically four on a passenger vehicle). The modulator is generally reliable and rarely requires replacement — most ABS faults are wheel speed sensor, wiring, or tone ring issues. Brake bleeding on ABS-equipped vehicles requires a specific sequence: the modulator solenoids must be cycled to expel air trapped within. On many modern vehicles this requires a scan tool with bi-directional capability to activate the ABS modulator bleed function. Using the conventional gravity or pressure bleed without cycling the modulator leaves air in the modulator valves, resulting in a sponginess that cannot be resolved without scan tool assistance.",
        visualCue:
          "Imagine a scan tool screen showing an 'ABS Bleed Sequence' menu: the technician initiates the sequence, the scan tool commands each modulator valve open in sequence, and air bubbles are heard through each bleed nipple as the scan tool purges each circuit of the modulator.",
      },
      {
        id: "bs4s4",
        title: "Diagnosing ABS & ESC Faults",
        body: "Most ABS and ESC faults relate to wheel speed sensors, wiring, and tone rings (reluctor rings). Common DTCs: C0031–C0040 series (wheel speed sensor faults). Diagnosis sequence: Read DTCs and note which wheel is flagged. Inspect the sensor wiring harness for chafing, especially at wheel arch points where it flexes. Check sensor air gap (variable reluctance types): typically 0.2–1.0mm. Inspect the tone ring on the hub or CV joint for missing or damaged teeth. Test sensor resistance (VR type): typically 900–2,000Ω. Test Hall effect sensor supply voltage and signal with a scope. Compare wheel speed readings on live data — a faulty sensor may read 0 km/h or a fixed value while others correctly show vehicle speed.",
        visualCue:
          "See a scan tool live data screen with four wheel speed values: LF 48 km/h, RF 48 km/h, LR 48 km/h, RR 0 km/h — while the vehicle is clearly moving. The RR sensor fault is immediately obvious from the live data comparison.",
      },
      {
        id: "bs4s5",
        title: "Brake Bias & EBD",
        body: "Electronic Brake-force Distribution (EBD) is a function of ABS that replaces the mechanical brake proportioning valve on most modern vehicles. It adjusts rear brake pressure dynamically based on vehicle load, deceleration rate, and lateral acceleration. A heavily loaded rear (passengers and cargo) can absorb more rear braking force; EBD applies this automatically. The rear brake bias valve — previously a fixed mechanical device — is now software-defined and adaptive. Loss of EBD function (often because a rear ABS sensor is faulty) causes the ABS ECU to default to limiting rear brake pressure conservatively, reducing overall stopping distance. This is why an ABS warning light should never be ignored — it may also mean EBD is inactive.",
        visualCue:
          "Imagine two stops from 100km/h with a fully loaded station wagon: without EBD the rear brakes are soft (fixed valve limits pressure) and the front bears the full load; with EBD the rear brakes contribute meaningfully, shortening the stop — the difference is visible on the brake temperature infrared display.",
      },
    ],
    quiz: [
      {
        id: "bs4q1",
        question: "How many times per second can ABS modulate brake pressure?",
        options: [
          "2–3 times",
          "5–8 times",
          "10–15 times",
          "Once — then releases",
        ],
        correctIndex: 2,
        explanation:
          "ABS cycles at 10–15 times per second — far faster than manual pumping. This keeps the wheel on the verge of lockup throughout the stop, maintaining maximum friction and steering control.",
      },
      {
        id: "bs4q2",
        question:
          "Which sensor detects whether the vehicle is actually rotating (yawing) as expected during a corner?",
        options: [
          "Wheel speed sensor",
          "Lateral accelerometer",
          "Yaw rate sensor",
          "Steering angle sensor",
        ],
        correctIndex: 2,
        explanation:
          "The yaw rate sensor measures the vehicle's actual rotational rate around its vertical axis. ESC compares this to the expected rate from the steering angle sensor — any difference triggers a correction.",
      },
      {
        id: "bs4q3",
        question:
          "Why does bleeding ABS-equipped brakes often require a scan tool?",
        options: [
          "To reset the ABS warning light",
          "To cycle the modulator solenoids and expel air trapped inside the modulator",
          "The scan tool controls fluid flow rate",
          "To disable ABS during the bleed process",
        ],
        correctIndex: 1,
        explanation:
          "Air trapped in the modulator valves cannot be expelled by gravity or pressure bleeding alone. The scan tool activates each solenoid in sequence, cycling the modulator and forcing air out through the bleed nipples.",
      },
      {
        id: "bs4q4",
        question:
          "Live data shows one wheel speed sensor reading 0 km/h while the vehicle is moving. What should be checked first?",
        options: [
          "Replace the ABS modulator",
          "Replace all four sensors",
          "Inspect the sensor wiring harness for chafing and check the tone ring for missing teeth",
          "Bleed the brakes",
        ],
        correctIndex: 2,
        explanation:
          "0 km/h while moving is a classic wheel speed sensor symptom. Before replacing the sensor, always check wiring (flexible wiring chafes at wheel arches) and the tone ring for damage.",
      },
      {
        id: "bs4q5",
        question:
          "What happens to EBD function when a rear wheel speed sensor fails?",
        options: [
          "EBD increases rear bias to compensate",
          "EBD is unaffected",
          "EBD defaults to conservative rear pressure limiting, reducing stopping performance",
          "EBD transfers function to the front sensors",
        ],
        correctIndex: 2,
        explanation:
          "Without accurate rear wheel speed data, the EBD logic cannot calculate safe rear brake pressure, so it defaults to conservative (low) rear pressure. This increases stopping distances and is why ABS faults should not be ignored.",
      },
    ],
  },
  {
    id: "bs-advanced-suspension",
    tradeId: "brakes-suspension",
    title: "Advanced Suspension & Alignment",
    level: 5,
    durationMinutes: 30,
    summary:
      "Perform 4-wheel alignment, diagnose handling problems, and understand how aftermarket suspension modifications affect safety and geometry.",
    keyConcepts: [
      "4-wheel alignment",
      "Thrust angle",
      "Ride height measurement",
      "Aftermarket modifications",
      "Diagnostic road testing",
    ],
    steps: [
      {
        id: "bs5s1",
        title: "4-Wheel Alignment: The Complete Picture",
        body: "4-wheel alignment measures and adjusts: front camber, front caster, front toe, rear camber, rear toe, and thrust angle. The thrust angle is the direction the rear axle is pushing the vehicle relative to the centreline of the body — if the rear is not centred, the front has to be steered slightly off-centre to drive straight. A non-zero thrust angle causes dog-tracking (vehicle appears to drive sideways) and uneven tyre wear across both axles. Front alignment can only be set correctly after rear alignment is confirmed. Always inspect suspension components before alignment — aligning a car with worn ball joints or tie rods is a waste of time and money; parts move and geometry changes as soon as the vehicle is driven.",
        visualCue:
          "See an alignment machine printout with six readings: front camber L/R, front caster L/R, front toe, rear camber L/R, rear toe, and thrust angle. Green values are within spec; red values need adjustment. Thrust angle is highlighted in red — this is the first issue to address.",
      },
      {
        id: "bs5s2",
        title: "Ride Height & Its Effect on Geometry",
        body: "Ride height affects every suspension geometry measurement. A vehicle sitting low (worn springs, aftermarket lowering) has negative camber increase at the front (toe also changes) and altered caster. Springs that have sagged cause the suspension to sit at a different arc position — moving ball joints away from their designed geometry. Always measure ride height before alignment and compare to specification. Ride height is measured from a specified point on the vehicle's underbody to the ground. If ride height is out of specification, springs must be investigated before alignment. On vehicles with adjustable suspension (air, hydraulic, coilovers), calibrate to the correct ride height for each mode before aligning.",
        visualCue:
          "Imagine a graph showing camber versus ride height: at factory ride height, camber is -0.5° (correct). At 40mm lower (aftermarket lowering), camber is -2.5° (well outside spec). The suspension geometry was designed for one ride height — moving it changes everything.",
      },
      {
        id: "bs5s3",
        title: "Handling Diagnoses: Pull, Wander & Shimmy",
        body: "Pulling to one side: most commonly unequal front camber or caster side-to-side (vehicle pulls to the side with less positive caster or more negative camber), or unequal brake drag. Swap front tyres side to side — if pull changes direction, the fault is in the tyre. If pull stays, the fault is in the vehicle. Wander (vehicle requires constant small steering corrections): worn or loose steering components, excessively worn tyres, incorrect toe, or insufficient positive caster. Shimmy (steering wheel oscillates): unbalanced wheels, bent wheel, loose wheel bearing, worn tie rod ends, worn ball joints, or damaged tyre (ply separation). Shimmy often appears at a specific speed — the resonant frequency of the worn component. Systematically test each possibility rather than guessing.",
        visualCue:
          "Picture a tyre swap procedure: original position — car pulls right. After swapping front tyres — car now pulls left. Conclusion: one front tyre has a manufacturing defect causing it to pull toward itself regardless of which side it is on.",
      },
      {
        id: "bs5s4",
        title: "Aftermarket Suspension Modifications",
        body: "Lowering kits, coilovers, lifted suspension, and aftermarket wheels all affect suspension geometry, legal compliance, and safety. Lowering: reduces ride height, often negatively affects camber and caster beyond adjustability range. May require camber correction bolts or plates. Lifts: raises ride height, alters driveshaft angles, may require brake line and steering extension. Legal: most states require engineer approval for modifications beyond 50mm lift or specified lowering limits. Wheels with incorrect offset change scrub radius, bearing load, and may cause tyre fouling. Aftermarket coilovers vary enormously in quality — poor damping causes wheel bounce that unloads tyres in corners. Always confirm legal compliance and re-align after any suspension modification.",
        visualCue:
          "Picture two vehicles side by side: a car lowered 60mm with no alignment correction showing extreme negative camber (tyres wearing on inside edges), and a correctly set-up coilover vehicle with adjustable plates providing correct camber — same modification, vastly different outcomes.",
      },
      {
        id: "bs5s5",
        title: "Diagnostic Road Testing",
        body: "A road test should be systematic, not subjective. Standard test sequence: straight-line pull test (straight road, hands off wheel at 60 km/h — note pull direction and amount). Braking test (firm straight-line stop from 60 km/h — note pull, shudder, or sponginess). Cornering test (smooth right and left sweeping corner at 60 km/h — note body roll, tyre noise, stability). Rough surface test (a known rough section — note excessive harshness, rattles, clunks over bumps). High-speed stability (highway speed — note shimmy, wander, vibration). Document every finding with vehicle speed, conditions, and a description. On return, cross-reference findings against inspection measurements. A complete diagnostic road test takes 20–30 minutes and must not be rushed.",
        visualCue:
          "Imagine a road test report form with five sections matching the test sequence above: each section has a column for 'Condition', 'Speed', 'Notes', and 'Action Required'. A professional road test generates a written record, not just a memory.",
      },
    ],
    quiz: [
      {
        id: "bs5q1",
        question: "What is thrust angle in wheel alignment?",
        options: [
          "The angle of the steering wheel when driving straight",
          "The direction the rear axle pushes the vehicle relative to the vehicle's centreline",
          "The camber difference between left and right rear wheels",
          "The angle of the rear wishbones",
        ],
        correctIndex: 1,
        explanation:
          "Thrust angle measures how the rear axle's thrust direction relates to the car's centreline. A non-zero thrust angle causes dog-tracking and means front alignment cannot correct straight-line driving.",
      },
      {
        id: "bs5q2",
        question:
          "If a vehicle pulls right and the pull reverses direction after swapping front tyres side-to-side, what is the cause?",
        options: [
          "Incorrect front toe",
          "Brake drag on the right front",
          "A tyre with a manufacturing defect pulling toward itself",
          "Unequal front caster",
        ],
        correctIndex: 2,
        explanation:
          "When pull follows the tyre rather than staying at the same corner, the tyre itself is causing the pull — a known phenomenon called 'tyre pull' caused by manufacturing variations in the belt structure.",
      },
      {
        id: "bs5q3",
        question:
          "Why must rear alignment always be confirmed before setting front alignment?",
        options: [
          "Rear alignment affects front camber directly",
          "Front alignment cannot be correctly set if the rear axle has a thrust angle offset from the vehicle centreline",
          "Rear toe affects front toe via the steering linkage",
          "The alignment machine requires rear calibration first",
        ],
        correctIndex: 1,
        explanation:
          "The front steering is set relative to where the rear is pushing the vehicle. If the rear has a thrust angle error, the front alignment reference is wrong — the front will be steered off-centre even after 'correct' adjustment.",
      },
      {
        id: "bs5q4",
        question:
          "A shimmy (steering oscillation) appears only at 90 km/h. What should be investigated first?",
        options: [
          "Wheel alignment",
          "Ball joint play",
          "Wheel balance and tyre condition",
          "Brake adjustment",
        ],
        correctIndex: 2,
        explanation:
          "Speed-specific shimmy is the hallmark of wheel balance issues or a damaged tyre. The oscillation appears at the resonant frequency of the unbalanced rotating mass — check wheel balance and tyre integrity first.",
      },
      {
        id: "bs5q5",
        question:
          "Why does lowering a vehicle often require camber correction bolts in addition to the lowering kit?",
        options: [
          "Lowering kits always include incorrect springs",
          "The factory suspension geometry was designed for factory ride height — lowering moves the suspension arc and increases negative camber beyond the standard adjustment range",
          "Camber correction is only required on performance vehicles",
          "Lower vehicles have more caster, requiring camber compensation",
        ],
        correctIndex: 1,
        explanation:
          "As the suspension drops below its designed ride height, the geometry arc changes and camber increases negatively. Factory camber adjustment bolts may not have enough range to correct this — camber correction plates or bolts provide extra adjustment range.",
      },
    ],
  },
];

// Re-export combined array including new trades
export const automotiveAllModules: TradeModule[] = [
  ...automotiveModules,
  ...autoElectricalModules,
  ...brakesModules,
];
