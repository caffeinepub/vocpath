import type { TradeModule } from "./woodworkingContent";

export const hvacModules: TradeModule[] = [
  {
    id: "hvac-refrigeration-fundamentals",
    tradeId: "hvac",
    title: "Refrigeration Cycle Fundamentals",
    level: 1,
    durationMinutes: 25,
    summary:
      "Understand the vapour compression refrigeration cycle, key refrigerants, thermodynamic principles, and the safe handling regulations governing refrigerant work.",
    keyConcepts: [
      "Vapour Compression Cycle",
      "Refrigerants",
      "Superheat & Subcooling",
      "ARC Licence",
      "Pressure-Enthalpy Diagram",
    ],
    steps: [
      {
        id: "s1",
        title: "The Four-Component Refrigeration Cycle",
        body: "Every vapour compression refrigeration system contains four essential components: compressor, condenser, expansion device, and evaporator. The compressor draws in low-pressure refrigerant vapour and compresses it to a high-pressure, high-temperature gas. The condenser (usually outdoors) rejects this heat to the outside air and the refrigerant condenses to a warm liquid. The expansion device (a capillary tube, thermal expansion valve, or electronic expansion valve) drops the pressure suddenly, causing the liquid to partially flash to vapour and cool dramatically. The cold mixture enters the evaporator (usually indoors), where it absorbs heat from the room air and vaporises before returning to the compressor.",
        visualCue:
          "Picture a simple loop diagram with four boxes connected by arrows: Compressor (bottom left) → Condenser (top left) → Expansion Valve (top right) → Evaporator (bottom right) → back to Compressor. Temperature icons show hot near the condenser and cold near the evaporator.",
      },
      {
        id: "s2",
        title: "Refrigerants — Types and Environmental Impact",
        body: "Refrigerants are classified by their chemical family. CFCs (R-11, R-12) were phased out under the Montreal Protocol because they deplete stratospheric ozone. HCFCs (R-22) are being phased down in Australia and are now only available for servicing existing equipment. HFCs (R-410A, R-32, R-134a) contain no chlorine so do not deplete ozone, but have high Global Warming Potential (GWP). Natural refrigerants (R-744 CO₂, R-717 ammonia, R-290 propane) have very low GWP but require special handling due to toxicity or flammability. R-32 is now the dominant refrigerant in residential split systems in Australia, chosen for lower GWP than R-410A and good efficiency.",
        visualCue:
          "Visualise a timeline from 1980 to today: CFC molecules shown as blue circles disappearing from a graph in the 1990s, HCFC green circles declining from 2010, HFC orange circles dominant today, with a green natural refrigerant arrow pointing upward toward the future.",
      },
      {
        id: "s3",
        title: "Superheat and Subcooling",
        body: "Superheat is the number of degrees a vapour is above its saturation temperature at a given pressure. Measuring superheat at the evaporator outlet confirms the refrigerant has fully vaporised before entering the compressor — liquid entering a compressor causes catastrophic mechanical damage (liquid slugging). Target evaporator superheat for most split systems is 5–10°C. Subcooling is the number of degrees a liquid is below its saturation temperature at a given pressure, measured at the condenser outlet. Subcooling of 5–10°C confirms the refrigerant has fully condensed, maximising system efficiency and preventing flash gas in the liquid line.",
        visualCue:
          "Picture two thermometers side by side: the left one at the suction line shows a temperature 7°C above the saturation line (superheat zone shaded orange). The right one at the liquid line shows a temperature 8°C below the saturation line (subcooling zone shaded blue).",
      },
      {
        id: "s4",
        title: "Refrigerant Handling Regulations",
        body: "In Australia, handling refrigerants (adding, removing, or recovering) is restricted to persons holding an ARCtick licence issued under the Ozone Protection and Synthetic Greenhouse Gas Management Act. Releasing refrigerant to atmosphere is illegal and attracts significant penalties. Recovered refrigerant must be stored in approved cylinders and returned to a reclaim facility — never vent to atmosphere, even for small quantities. Different licence classes cover different refrigerant types and equipment categories. Always check your licence class covers the refrigerant and system you are working on before beginning work.",
        visualCue:
          "Imagine a refrigerant recovery machine connected by hoses to a split system outdoor unit, drawing refrigerant into a certified recovery cylinder. A large red X appears over any depiction of venting refrigerant directly to the sky.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What happens to refrigerant in the expansion device?",
        options: [
          "It is compressed to a high pressure",
          "Its pressure drops suddenly, causing it to cool dramatically",
          "It condenses from vapour to liquid",
          "It absorbs heat from the room",
        ],
        correctIndex: 1,
        explanation:
          "The expansion device drops the refrigerant's pressure suddenly, which causes partial flash evaporation and a dramatic temperature drop, preparing the cold mixture for the evaporator.",
      },
      {
        id: "q2",
        question: "Why were CFCs phased out under the Montreal Protocol?",
        options: [
          "They are too expensive to manufacture",
          "They cause global warming",
          "They deplete the stratospheric ozone layer",
          "They are flammable",
        ],
        correctIndex: 2,
        explanation:
          "CFCs contain chlorine atoms that, when released to the atmosphere, catalytically destroy stratospheric ozone molecules that protect life on earth from UV radiation.",
      },
      {
        id: "q3",
        question:
          "What is the consequence of liquid refrigerant entering a compressor?",
        options: [
          "Improved cooling efficiency",
          "Liquid slugging, which causes catastrophic mechanical damage",
          "The system enters defrost mode",
          "The expansion valve closes automatically",
        ],
        correctIndex: 1,
        explanation:
          "Compressors are designed to compress gas, not liquid. Liquid refrigerant entering the compressor (liquid slugging) is incompressible and damages or destroys pistons, valves, and connecting rods.",
      },
      {
        id: "q4",
        question:
          "In Australia, who is legally permitted to handle (add, remove, or recover) refrigerants?",
        options: [
          "Any licenced electrician",
          "Any plumber or gas fitter",
          "Persons holding an ARCtick refrigerant handling licence",
          "Any HVAC apprentice under supervision",
        ],
        correctIndex: 2,
        explanation:
          "Australian law restricts refrigerant handling to ARCtick licence holders. Releasing refrigerant to atmosphere is illegal regardless of quantity.",
      },
    ],
  },
  {
    id: "hvac-ductwork",
    tradeId: "hvac",
    title: "Ductwork & Air Distribution",
    level: 2,
    durationMinutes: 25,
    summary:
      "Learn to size, fabricate, and install sheet metal and flexible ductwork, select diffusers and grilles, and balance an air distribution system for comfort and efficiency.",
    keyConcepts: [
      "Duct Sizing",
      "Sheet Metal Fabrication",
      "Flexible Duct",
      "Diffusers & Grilles",
      "Air Balancing",
    ],
    steps: [
      {
        id: "s1",
        title: "Duct Sizing Principles",
        body: "Ducts must be sized to deliver the correct airflow to each room without excessive velocity (which causes noise) or excessive pressure drop (which reduces system capacity and efficiency). The equal friction method is the most common sizing approach: select a target friction rate (usually 0.8–1.0 Pa per metre of duct length) and use friction charts or software to find the duct diameter that delivers the required airflow at that friction rate. Larger ducts move the same air more quietly but cost more to fabricate and install. In residential systems, round flexible duct sized at 100–200 mm diameter handles most branch runs; rectangular sheet metal suits large main trunks.",
        visualCue:
          "Imagine a duct friction chart: the X-axis shows airflow in L/s, the Y-axis shows friction rate in Pa/m, and diagonal lines represent duct diameters. A dot is placed at the intersection of a 50 L/s airflow and 0.8 Pa/m friction — the nearest diagonal line (150 mm duct) is circled.",
      },
      {
        id: "s2",
        title: "Sheet Metal Fabrication",
        body: "Rectangular sheet metal ductwork is fabricated from galvanised steel sheet, typically 0.55–0.8 mm gauge for residential and light commercial applications. Sheets are cut with a guillotine or tin snips, formed on a folder (sheet metal brake), and locked together using Pittsburgh lock, snap lock, or TDC/TDF flange connections. Longitudinal seams must be sealed with mastic sealant or foil tape to prevent air leakage — unsealed duct systems routinely lose 20–30% of airflow before reaching the room, dramatically reducing system efficiency. All ductwork inside building spaces must be insulated to minimise heat gain/loss.",
        visualCue:
          "Visualise a flat galvanised steel sheet being bent at 90° on a sheet metal brake: the first bend forms the bottom of the duct, subsequent bends form the sides and top, and the two edges are locked together at the Pittsburgh seam.",
      },
      {
        id: "s3",
        title: "Flexible Duct Installation",
        body: "Flexible duct consists of a wire helix covered by an inner plastic liner and an outer fibreglass insulation blanket with a foil vapour barrier. It is quick to install and bends around obstacles, but its corrugated inner surface creates 3–5 times more friction than smooth sheet metal. Never compress or kink flexible duct — a kinked or compressed section can cut airflow by 50% or more. Support flexible duct every 1.5 m maximum to prevent sagging, which increases flow resistance. Extend duct to its full length before connecting (never leave it bunched up) and use proper clamps at every joint, sealed with mastic.",
        visualCue:
          "Picture two identical flexible duct runs side by side: the left one is fully extended, gently curving around a joist — arrows show smooth airflow inside. The right one is compressed and kinked at two points — arrows show turbulent, restricted flow with a large red arrow labelled 50% flow loss.",
      },
      {
        id: "s4",
        title: "Diffusers, Grilles, and Air Balancing",
        body: "Diffusers (supply outlets) spread conditioned air across a room; grilles (return inlets) collect room air back to the air handler. Diffuser selection affects throw (how far air travels), spread pattern (linear, square, circular), and noise level. After installation, the system must be balanced: measure actual airflow at each outlet with a balometer or rotating vane anemometer and compare to design airflow. Adjust volume control dampers (manually set flaps inside the ductwork) at each branch until each room receives its design airflow within ±10%. An unbalanced system delivers too much air to nearby rooms and too little to distant ones.",
        visualCue:
          "Imagine a floor plan with six rooms connected to a central air handler. A balometer reading at each diffuser shows: rooms 1–3 (near the unit) reading 20% above design, rooms 4–6 (far from the unit) reading 25% below design. Damper adjustments bring all readings within the ±10% target band.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What does the equal friction method use as a design parameter for duct sizing?",
        options: [
          "A constant air velocity through all ducts",
          "A constant friction rate (Pa per metre) throughout the duct system",
          "Equal duct lengths in every branch",
          "Equal static pressure at every outlet",
        ],
        correctIndex: 1,
        explanation:
          "The equal friction method selects duct sizes to maintain a constant friction rate (typically 0.8–1.0 Pa/m) throughout the system, balancing noise, cost, and efficiency.",
      },
      {
        id: "q2",
        question:
          "What percentage of airflow can an unsealed duct system typically lose?",
        options: ["2–5%", "5–10%", "20–30%", "50–60%"],
        correctIndex: 2,
        explanation:
          "Unsealed duct systems routinely lose 20–30% of supply airflow through leaks before it reaches the rooms, dramatically reducing system capacity and efficiency.",
      },
      {
        id: "q3",
        question:
          "How much more friction does flexible duct create compared to smooth sheet metal?",
        options: [
          "The same",
          "Slightly more (1.2×)",
          "Twice as much",
          "3–5 times more",
        ],
        correctIndex: 3,
        explanation:
          "The corrugated inner liner of flexible duct creates 3–5 times more friction than smooth sheet metal, which is why it is used only for short branch runs, not long trunk runs.",
      },
      {
        id: "q4",
        question:
          "What instrument is used to measure actual airflow at a supply diffuser during air balancing?",
        options: [
          "Manometer",
          "Balometer (flow hood)",
          "Sling psychrometer",
          "Anemometer thermometer",
        ],
        correctIndex: 1,
        explanation:
          "A balometer (flow hood) is placed over a supply or return grille to directly measure total airflow in L/s, allowing the technician to compare actual vs design airflow and adjust dampers accordingly.",
      },
    ],
  },
  {
    id: "hvac-split-systems",
    tradeId: "hvac",
    title: "Split System Installation & Commissioning",
    level: 3,
    durationMinutes: 30,
    summary:
      "Learn to correctly install a residential split system air conditioner — from selecting locations and mounting equipment to connecting refrigerant lines, performing a leak test, and commissioning the system.",
    keyConcepts: [
      "Indoor Unit Location",
      "Outdoor Unit Placement",
      "Refrigerant Line Sets",
      "Vacuum Procedure",
      "Gas Charging",
    ],
    steps: [
      {
        id: "s1",
        title: "Selecting Indoor and Outdoor Unit Locations",
        body: "Indoor unit location affects comfort, airflow distribution, and drainage. Mount the indoor unit on a solid wall at least 200 mm from the ceiling for adequate airflow recirculation. Avoid positioning it where it will blow air directly onto occupants or into corners where air cannot circulate. The outdoor unit must be in a ventilated location with at least 300 mm clearance on the sides and rear and 600 mm at the front discharge. Avoid positioning the outdoor unit where it will recirculate its own hot discharge air (a common mistake in enclosed courtyards) or where it is exposed to direct saltwater spray. Check the manufacturer's maximum piping length and height difference between indoor and outdoor units before finalising locations — exceeding these limits requires additional oil charge or special refrigerant.",
        visualCue:
          "Picture a house cross-section: the indoor unit is mounted high on a lounge room wall, blowing air diagonally across the room. Outside, the outdoor unit sits on a concrete pad 400 mm from the wall, with open space on three sides for condenser airflow. A dotted line shows the refrigerant pipe route through the wall.",
      },
      {
        id: "s2",
        title: "Refrigerant Pipework and Flaring",
        body: "Refrigerant piping uses annealed copper tube in two sizes: the smaller liquid line (typically 6.35 mm OD) and the larger suction line (typically 9.52 or 12.7 mm OD). Pipe must be insulated separately — do not bundle liquid and suction lines in the same insulation or the warm liquid line will superheat the suction line. Connections at both ends are flared using a flaring tool that expands the tube end into a 45° cone. A perfect flare is smooth, shiny, and concentric — any split, wrinkle, or off-centre flare will leak. Tighten flare nuts to the torque value in the manufacturer's installation manual; over-tightening cracks the flare, under-tightening allows leaks.",
        visualCue:
          "Visualise a cut-away of a flare nut connection: the copper tube end is expanded into a smooth 45° cone, seating perfectly against the machined seat in the service valve. A torque wrench is shown applying the correct specified torque.",
      },
      {
        id: "s3",
        title: "Evacuation (Vacuuming) Procedure",
        body: "Before releasing refrigerant from the outdoor unit, the entire refrigerant circuit (indoor unit and interconnecting pipework) must be evacuated using a vacuum pump to remove air and moisture. Air in the refrigerant circuit dilutes the refrigerant and raises condensing pressure; moisture causes ice formation at the expansion valve and forms acidic compounds that corrode the copper tubing and contaminate the compressor oil. Connect the vacuum pump to both the high and low side service ports simultaneously. Pull vacuum to a minimum of 500 microns (measured with an electronic micron gauge — not a compound gauge, which lacks the resolution). Hold vacuum for at least 30 minutes with the pump isolated to confirm the system is leak-free before charging.",
        visualCue:
          "Picture a manifold gauge set connected to the outdoor unit service ports, with a vacuum pump running on the other side. A digital micron gauge displays the vacuum level dropping from 760,000 microns (atmospheric) toward 500 microns. A clock shows the 30-minute hold period after pump isolation.",
      },
      {
        id: "s4",
        title: "Commissioning and Performance Check",
        body: "After releasing refrigerant (opening the service valves on the outdoor unit), start the system and allow it to stabilise for 15 minutes in cooling mode before taking measurements. Check superheat at the suction service port: target is 5–10°C (as specified by the manufacturer). Check subcooling at the liquid line: target is 5–10°C. Measure indoor and outdoor dry bulb temperatures and compare to published performance data. Record all measurements on a commissioning sheet and attach it to the equipment. Log the system's refrigerant charge on an ARCtick Refrigerant Trading Authorisation (RTA) record if you added or removed refrigerant.",
        visualCue:
          "Imagine a commissioning sheet filled with handwritten measurements: suction pressure, discharge pressure, superheat (8°C), subcooling (7°C), indoor temperature (24°C return, 13°C supply), outdoor temperature (32°C). A tick marks each value within the acceptable range.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why must liquid and suction refrigerant lines be insulated separately?",
        options: [
          "To make pipe identification easier",
          "The warm liquid line will superheat the suction line if bundled together, reducing efficiency",
          "Bundled insulation creates a fire hazard",
          "Regulations prohibit shared insulation",
        ],
        correctIndex: 1,
        explanation:
          "If the warm liquid line shares insulation with the cold suction line, heat from the liquid line transfers to the suction line, increasing superheat and reducing system capacity and efficiency.",
      },
      {
        id: "q2",
        question:
          "What is the target vacuum level before releasing refrigerant into the system?",
        options: ["5000 microns", "2000 microns", "500 microns", "50 microns"],
        correctIndex: 2,
        explanation:
          "500 microns is the standard target for residential split system evacuation, deep enough to remove moisture and non-condensables. It must be held for 30 minutes to confirm the system is leak-free.",
      },
      {
        id: "q3",
        question:
          "What tool is required to accurately measure vacuum level during evacuation?",
        options: [
          "Standard compound gauge manifold",
          "Electronic micron gauge",
          "Clamp meter",
          "Sling psychrometer",
        ],
        correctIndex: 1,
        explanation:
          "Compound gauges lack the resolution to measure deep vacuum accurately. An electronic micron gauge (vacuum gauge) is required to confirm the system has reached and holds 500 microns or better.",
      },
      {
        id: "q4",
        question:
          "What is the recommended target superheat at the suction service port during commissioning?",
        options: ["0–2°C", "5–10°C", "15–20°C", "25–30°C"],
        correctIndex: 1,
        explanation:
          "5–10°C superheat confirms the refrigerant has fully vaporised before entering the compressor, preventing liquid slugging while maximising evaporator efficiency.",
      },
    ],
  },
  {
    id: "hvac-commercial-chillers",
    tradeId: "hvac",
    title: "Commercial Chillers & Air Handling Units",
    level: 4,
    durationMinutes: 35,
    summary:
      "Understand chilled water system design, air handling unit configuration, variable air volume systems, and BMS integration in large commercial buildings.",
    keyConcepts: [
      "Chilled Water Plant",
      "AHU Components",
      "Variable Air Volume",
      "Cooling Towers",
      "BMS Integration",
    ],
    steps: [
      {
        id: "s1",
        title: "Chilled Water Plant Overview",
        body: "In commercial buildings, refrigeration is centralised in a chiller plant. The chiller contains a large refrigeration machine (centrifugal, screw, or scroll compressor) that cools water to 6–10°C in the evaporator. This chilled water is pumped through insulated pipes to air handling units (AHUs) throughout the building, where it cools supply air. Return water comes back to the chiller at 12–14°C (the typical design ΔT is 6°C). The chiller rejects heat to a cooling tower via condenser water. Separating the refrigeration plant from the air-side equipment allows the chiller to serve dozens of AHUs from a single, centrally maintained machine.",
        visualCue:
          "Imagine a building cross-section with a rooftop cooling tower, a basement chiller plant, and five AHUs on different floors. Blue arrows show cold chilled water flowing up to each AHU; red arrows show warm return water flowing back down to the chiller.",
      },
      {
        id: "s2",
        title: "Air Handling Unit Components",
        body: "A built-up AHU contains: return air damper (mixes return and outside air), pre-filter section (G4 or F5 panel filters removing coarse dust), cooling coil (chilled water or DX coil), heating coil (hot water or electric), supply fan (centrifugal or plug type), and supply air filter section (F7 or higher for sensitive applications). The mixed air (return plus outside air) passes through filters, across the cooling coil (which dehumidifies air as moisture condenses on the cold coil surface), and is delivered to the building via ductwork. Drain pans under cooling coils collect condensate and must be cleaned regularly to prevent Legionella growth.",
        visualCue:
          "Picture an AHU opened up from the side: arrows show airflow moving left to right through the pre-filter panel, across the cooling coil (water droplets forming on its surface), past the supply fan impeller, and out the supply duct on the right.",
      },
      {
        id: "s3",
        title: "Variable Air Volume Systems",
        body: "In a constant air volume (CAV) system, airflow is fixed and temperature control varies the cooling coil output. In a variable air volume (VAV) system, each zone has a VAV box — a motorised damper that modulates airflow to the zone based on the zone's thermostat. The AHU supply fan slows down as VAV boxes close (via a variable speed drive), saving significant fan energy. The AHU maintains a constant duct static pressure setpoint by modulating fan speed. VAV systems are more energy-efficient in part-load conditions (which is most of the time) but require more sophisticated BMS controls and maintenance than CAV systems.",
        visualCue:
          "Imagine a floor plan with six VAV boxes: on a cool day, four boxes are 30% open and two are 60% open. The supply fan runs at 55% speed. On a hot day, all boxes open to 90% and the fan ramps up to 95% speed — arrows show increased duct pressure and airflow.",
      },
      {
        id: "s4",
        title: "Cooling Towers and BMS Integration",
        body: "Cooling towers reject heat from the chilled water plant to the atmosphere by evaporating a small amount of water. Evaporation is highly efficient at heat rejection, allowing cooling towers to cool condenser water to within a few degrees of the wet bulb temperature. Cooling tower water must be treated with biocides (controlled by automated dosing systems) to prevent Legionella proliferation. The Building Management System (BMS) monitors and controls all HVAC equipment — chiller starts/stops, AHU schedules, VAV positions, cooling tower fan speeds, and alarm management. BMS data trends allow maintenance teams to identify efficiency losses and developing faults before they become breakdowns.",
        visualCue:
          "Picture a BMS screen showing real-time data: chilled water supply/return temperatures as trend lines, condenser water temperatures, chiller kW consumption, and three AHU supply air temperatures. An alarm icon flashes next to one AHU's filter pressure differential — the filter needs replacement.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the typical chilled water design delta T (supply to return temperature difference) in a commercial system?",
        options: ["2°C", "4°C", "6°C", "10°C"],
        correctIndex: 2,
        explanation:
          "A 6°C ΔT (e.g., 6°C supply, 12°C return) is the typical design for commercial chilled water systems, balancing pump energy with chiller efficiency.",
      },
      {
        id: "q2",
        question: "In a VAV system, what controls the supply fan speed?",
        options: [
          "Zone thermostats directly",
          "A static pressure setpoint in the supply duct via a variable speed drive",
          "The chiller's discharge pressure",
          "A manual dial on the AHU",
        ],
        correctIndex: 1,
        explanation:
          "The BMS maintains a constant duct static pressure setpoint by modulating the supply fan's variable speed drive — the fan slows as VAV boxes close and speeds up as they open.",
      },
      {
        id: "q3",
        question: "Why is cooling tower water treated with biocides?",
        options: [
          "To prevent corrosion of copper pipework",
          "To prevent Legionella bacteria from proliferating in the warm water",
          "To improve heat transfer efficiency",
          "To reduce water scaling on the heat exchanger",
        ],
        correctIndex: 1,
        explanation:
          "Cooling tower water is warm and nutrient-rich, creating ideal conditions for Legionella growth. Biocide dosing is legally required to prevent Legionnaires' disease outbreaks.",
      },
      {
        id: "q4",
        question:
          "What component in an AHU must be cleaned regularly to prevent Legionella growth?",
        options: [
          "Supply fan impeller",
          "Pre-filter media",
          "Cooling coil drain pan",
          "Mixing damper blades",
        ],
        correctIndex: 2,
        explanation:
          "Condensate collects in the drain pan under the cooling coil. If not regularly cleaned and drained, stagnant warm water in the pan becomes a Legionella breeding ground.",
      },
    ],
  },
  {
    id: "hvac-energy-optimisation",
    tradeId: "hvac",
    title: "Energy Optimisation & Mechanical Design",
    level: 5,
    durationMinutes: 35,
    summary:
      "Apply building energy modelling concepts, design heat recovery systems, interpret mechanical services drawings, and understand HVAC compliance reporting under the National Construction Code.",
    keyConcepts: [
      "Energy Modelling",
      "Heat Recovery",
      "Psychrometrics",
      "NCC Section J",
      "Commissioning Reports",
    ],
    steps: [
      {
        id: "s1",
        title: "Building Energy Modelling Concepts",
        body: "Building energy modelling (BEM) uses simulation software (EnergyPlus, IES-VE, DesignBuilder) to predict a building's annual energy consumption based on its construction, orientation, occupancy patterns, lighting, plug loads, and HVAC systems. The model runs through thousands of hours of weather data to calculate hourly heating and cooling loads throughout the year. Designers use BEM to compare system options, quantify energy savings from efficiency upgrades, and demonstrate NCC compliance. A well-calibrated model can predict annual HVAC energy consumption within 10–15% of actual metered data. As an HVAC technician, you may be asked to supply system specifications (COP, capacity, control sequences) as inputs to the building energy model.",
        visualCue:
          "Picture a software screen showing a 3D building model with colour-coded facades indicating solar heat gain — dark red on the north and west walls receiving the most sun, light blue on the south facade receiving the least. An annual energy breakdown bar chart beside it shows cooling at 42%, heating at 18%, fans at 22%, and other at 18%.",
      },
      {
        id: "s2",
        title: "Heat Recovery Ventilation",
        body: "Heat recovery ventilation (HRV) extracts stale indoor air while simultaneously supplying fresh outside air. A heat exchanger core (plate, rotary wheel, or run-around coil) transfers 70–85% of the thermal energy from the exhaust air stream to the incoming fresh air stream, dramatically reducing the heating or cooling energy needed to condition ventilation air. In cold climates, HRV prevents the energy penalty of ventilating with cold outside air. In hot climates, energy recovery ventilators (ERVs) also transfer moisture, reducing the latent cooling load. HRV/ERV systems are mandatory in airtight, energy-efficient buildings where controlled ventilation replaces uncontrolled air infiltration.",
        visualCue:
          "Imagine two parallel duct streams in cross-section: the left stream (red, warm, stale indoor air) passes across a plate heat exchanger core. The right stream (blue, cold, fresh outdoor air) picks up heat through the core walls and enters the building at a warm temperature. Efficiency arrows show 80% heat transfer.",
      },
      {
        id: "s3",
        title: "Psychrometrics for HVAC Engineers",
        body: "Psychrometrics is the study of moist air properties. A psychrometric chart plots dry bulb temperature on the X-axis and humidity ratio (kg of water per kg of dry air) on the Y-axis. Each point on the chart represents a unique combination of dry bulb temperature, wet bulb temperature, relative humidity, dew point, and enthalpy. HVAC engineers use the chart to trace air state changes through an AHU: from outdoor conditions through the cooling coil (moving left and down as temperature and humidity drop) to the supply air condition. The sensible heat ratio (SHR) of the coil determines whether cooling is primarily sensible (temperature reduction) or latent (dehumidification). Designing to the correct SHR prevents over-cooling or over-humidifying occupied spaces.",
        visualCue:
          "Picture a psychrometric chart with a plotted process line: a point labelled OA (outdoor air, hot and humid) moves diagonally left-and-downward to a point labelled SA (supply air, cool and less humid) as it passes through the cooling coil. The line's slope represents the sensible heat ratio.",
      },
      {
        id: "s4",
        title: "NCC Compliance and Commissioning Reports",
        body: "The National Construction Code (NCC) Section J sets minimum energy efficiency requirements for commercial buildings, including HVAC system efficiency (minimum EER/COP values for chillers and split systems), duct insulation levels, fan power limits, and control requirements (time scheduling, setback temperatures, demand control ventilation). Compliance is demonstrated through a Section J report prepared by a mechanical engineer or accredited energy assessor. Commissioning documentation — air balance reports, water balance reports, chiller start-up sheets, and controls verification — is required before a building's occupation certificate is issued. Keep commissioning records for the life of the building; they are the baseline for future troubleshooting and maintenance.",
        visualCue:
          "Imagine a commissioning folder on a desk: inside are tabbed sections for air balance reports (airflow readings at every grille), water balance reports (flow rates at each coil), chiller commissioning sheets, and BMS controls verification checklists. A stamp on the front cover reads 'Compliant — NCC Section J'.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What does a building energy model use to predict annual energy consumption?",
        options: [
          "A simple rule of thumb based on floor area",
          "Thousands of hours of weather data combined with building and systems specifications",
          "The engineer's experience with similar buildings",
          "Metered data from comparable buildings",
        ],
        correctIndex: 1,
        explanation:
          "BEM simulates the building's energy use hour by hour throughout a full year using actual weather data, accounting for solar gains, occupancy, systems efficiency, and control strategies.",
      },
      {
        id: "q2",
        question:
          "What percentage of heat does a typical HRV core transfer from exhaust to supply air?",
        options: ["20–30%", "40–50%", "70–85%", "95–99%"],
        correctIndex: 2,
        explanation:
          "Modern HRV plate and rotary wheel heat exchangers transfer 70–85% of the thermal energy from the exhaust stream to the incoming fresh air stream, dramatically reducing conditioning energy.",
      },
      {
        id: "q3",
        question:
          "On a psychrometric chart, which direction does the air state point move as it passes through a cooling coil?",
        options: [
          "Right and upward (hotter and more humid)",
          "Straight down (same temperature, less humidity)",
          "Left and downward (cooler and less humid)",
          "Straight left (same humidity, cooler)",
        ],
        correctIndex: 2,
        explanation:
          "Cooling coils simultaneously reduce dry bulb temperature (horizontal left movement) and remove moisture through condensation (downward movement), moving the state point diagonally left and down.",
      },
      {
        id: "q4",
        question:
          "Which section of the National Construction Code covers HVAC energy efficiency requirements for commercial buildings?",
        options: ["Section A", "Section C", "Section J", "Section H"],
        correctIndex: 2,
        explanation:
          "NCC Section J sets minimum energy efficiency requirements for commercial building services including HVAC, lighting, and hot water systems in Class 3–9 buildings.",
      },
    ],
  },
];
