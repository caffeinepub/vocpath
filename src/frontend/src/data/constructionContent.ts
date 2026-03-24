import type { TradeModule } from "./woodworkingContent";

export const constructionModules: TradeModule[] = [
  {
    id: "construction-site-safety",
    tradeId: "construction",
    title: "Site Safety & Planning",
    level: 1,
    durationMinutes: 20,
    summary:
      "Master WHS regulations, PPE requirements, hazard identification, site inductions, and safe work method statements — the foundation of every safe construction site.",
    keyConcepts: [
      "WHS Regulations",
      "PPE Requirements",
      "Hazard Identification",
      "Site Inductions",
      "Safe Work Method Statements",
    ],
    steps: [
      {
        id: "s1",
        title: "WHS Regulations on Construction Sites",
        body: "Work Health and Safety (WHS) legislation places duties on principal contractors, subcontractors, designers, and workers to ensure the health and safety of everyone on site. The principal contractor must prepare a site-specific WHS management plan before work begins on any project valued at $250,000 or more. This plan identifies site hazards, emergency procedures, incident reporting processes, and the roles of each duty holder. Regular toolbox talks keep all workers updated on changing site conditions and hazards. Failure to comply with WHS duties can result in significant fines, prosecution, or site closure.",
        visualCue:
          "Picture a site entrance with a large WHS management plan displayed in a weatherproof frame. A construction worker in full PPE stands at the sign-in board. Safety signs for mandatory PPE, speed limits, and emergency assembly points are mounted on the site hoarding.",
      },
      {
        id: "s2",
        title: "Personal Protective Equipment",
        body: "PPE is the last line of defence against workplace hazards and must be used alongside higher-order controls such as elimination and engineering solutions. Mandatory site PPE typically includes a hard hat, high-visibility vest, safety boots with steel toe cap and penetration-resistant sole, and safety glasses. Task-specific PPE includes hearing protection for loud equipment, P2 respirators for dust and silica, cut-resistant gloves for steel handling, and fall-arrest harnesses for elevated work. PPE must be inspected before each use and replaced when damaged — worn straps, cracked hard hats, or scuffed visors reduce protection significantly.",
        visualCue:
          "Visualise a silhouette of a construction worker with labeled callouts pointing to each PPE item: hard hat, safety glasses, hi-vis vest, gloves, steel-capped boots, and hearing protection. A second inset shows a cracked hard hat with a red cross indicating it must be replaced immediately.",
      },
      {
        id: "s3",
        title: "Hazard Identification and Site Inductions",
        body: "Every new worker must complete a site induction before commencing work — this covers site layout, emergency procedures, amenities, hazards, and site rules. Hazard identification is an ongoing process: workers must report new hazards using the site's hazard reporting system. A Job Safety Analysis (JSA) breaks each task into steps and identifies the hazard, risk, and control for each step before work begins. Common construction hazards include falling objects, unguarded excavations, overhead power lines, moving plant, silica dust from cutting masonry, and manual handling. All hazards must be documented and controlled before work proceeds.",
        visualCue:
          "Imagine a site induction being conducted: a site supervisor points at a large printed site map showing exclusion zones, emergency assembly points, first aid station, and vehicle routes. New workers hold induction booklets. A second image shows a worker filling in a JSA on a clipboard before starting concrete cutting.",
      },
      {
        id: "s4",
        title: "Safe Work Method Statements",
        body: "A Safe Work Method Statement (SWMS) is a legal requirement for all high-risk construction work (HRCW) as defined under WHS regulations. High-risk activities include work at heights above 2 m, near energised electrical services, in or adjacent to excavations deeper than 1.5 m, and involving asbestos or pressurised gas lines. The SWMS must identify each work step, the hazards associated with it, and the controls applied. Workers must read, sign, and follow the SWMS — and stop work if conditions change in a way not covered by the document. The principal contractor must keep copies of all SWMS on site and available for inspection.",
        visualCue:
          "Picture a SWMS document open on a clipboard: the table has three columns — 'Work Step,' 'Hazards,' and 'Controls.' Row one shows 'Working at height on scaffolding' with hazards listed as 'fall from height, falling tools' and controls listed as 'full scaffold with guardrails, toeboards, tool lanyards, and harness for work beyond scaffold.'",
      },
      {
        id: "s5",
        title: "Site Planning and Establishment",
        body: "Good site planning before work begins prevents costly delays and safety incidents. The site establishment plan defines where the site office, amenities, material laydown areas, concrete washout zones, waste bins, and vehicle access routes are located. Temporary fencing, hoarding, and signage protect the public from site hazards. Underground services must be located by a licensed utility locator before any excavation — striking a buried gas main or live power cable can be fatal. Traffic management plans control the interface between trucks, plant, and pedestrians. A well-planned site operates more efficiently and with far fewer incidents.",
        visualCue:
          "Imagine a bird's-eye view site plan: the office and amenities are near the entry; laydown zones are clearly marked; vehicle access loops in one direction; the building footprint sits in the centre; temporary fencing and hoarding surround the perimeter.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "When is a site-specific WHS management plan legally required for a construction project?",
        options: [
          "For every project regardless of value",
          "For projects valued at $250,000 or more",
          "Only for multi-storey buildings",
          "When more than 10 workers are on site",
        ],
        correctIndex: 1,
        explanation:
          "Under WHS regulations, a principal contractor must prepare a WHS management plan for construction work valued at $250,000 or more before work begins on the project.",
      },
      {
        id: "q2",
        question: "What is the purpose of a Safe Work Method Statement (SWMS)?",
        options: [
          "To estimate material costs for the project",
          "To identify work steps, hazards, and controls for high-risk construction work",
          "To schedule subcontractor arrival times",
          "To document quality inspection results",
        ],
        correctIndex: 1,
        explanation:
          "A SWMS is a legal requirement for all high-risk construction work. It documents each work step, the associated hazards, and the controls applied to reduce risk to an acceptable level.",
      },
      {
        id: "q3",
        question:
          "Why must workers stop work if site conditions change in a way not covered by the SWMS?",
        options: [
          "To update the project schedule",
          "Because the existing controls may no longer manage the risk — a revised SWMS must be prepared before work resumes",
          "To notify the client of the change",
          "Because SWMS documents expire daily",
        ],
        correctIndex: 1,
        explanation:
          "The SWMS controls are designed for the specific conditions described in the document. If conditions change, the risk profile changes and the existing controls may be inadequate — work must stop until the SWMS is updated.",
      },
    ],
  },
  {
    id: "construction-framing",
    tradeId: "construction",
    title: "Framing & Structural Work",
    level: 2,
    durationMinutes: 25,
    summary:
      "Understand timber wall framing, floor systems, load paths, bracing requirements, and structural connections — the skeleton of every timber-framed building.",
    keyConcepts: [
      "Timber Wall Framing",
      "Floor Systems",
      "Load Paths",
      "Bracing",
      "Structural Connections",
    ],
    steps: [
      {
        id: "s1",
        title: "Timber Wall Framing Principles",
        body: "Timber wall framing uses a system of bottom plates, top plates, studs, noggings, and lintels to form structural wall panels. Studs are typically 90 × 45 mm MGP10 or MGP12 at 450 or 600 mm centres. The bottom plate is fixed to the slab or floor system; the double top plate ties adjacent wall frames together and provides a nailing surface for roof or floor framing above. Noggings are horizontal blocking between studs at mid-height to prevent buckling and provide fixing for wall linings. All framing must be installed plumb, straight, and at the correct centres — deviations cause problems with every subsequent trade.",
        visualCue:
          "Visualise a section of timber wall frame laid flat before tilting up: bottom plate at the base, studs at 600 mm centres, noggings at mid-height, double top plate at the top. Corner studs are tripled. A lintel spans the window opening with jack studs below.",
      },
      {
        id: "s2",
        title: "Floor Systems",
        body: "Timber floor systems use bearers spanning between piers or stumps, joists spanning between bearers, and flooring sheet material (particleboard or plywood) fixed to the joists. Joist spacing is typically 450 mm for 19 mm particleboard or 600 mm for 22 mm sheet. Engineered lumber products — LVL and I-joists — allow longer spans with less depth and less movement than solid timber. Steel floor systems use universal beam sections for long spans in commercial construction. The floor system must be level within tolerance before wall framing begins — errors here compound through the entire structure.",
        visualCue:
          "Picture a timber subfloor system from below: concrete piers at 1800 mm centres support hardwood bearers; bearers support floor joists at 450 mm centres spanning perpendicular; particleboard flooring sheets are laid on the joists with staggered joints. Labels identify each component.",
      },
      {
        id: "s3",
        title: "Load Paths and Structural Logic",
        body: "Every load in a building must follow a continuous path from where it is applied to the foundation. Loads travel from roof sheeting to rafters, to wall plates, to studs, to floor systems, to bearers, to piers, to footings, and into the ground. If any element in this path is undersized, missing, or incorrectly connected, the load cannot transfer and structural failure results. Point loads from beams and posts require specific load-bearing studs below them, correctly sized lintels over openings, and adequate footings below. Understanding load paths allows a carpenter to identify which walls are load-bearing and which can be modified without structural risk.",
        visualCue:
          "Imagine a cutaway cross-section of a two-storey house: red arrows show the load path from roof loads down through rafters and ceiling joists, to the top of the wall frame, through load-bearing studs, to the floor, to the footing. Dotted lines show secondary load paths from non-structural elements.",
      },
      {
        id: "s4",
        title: "Bracing Systems",
        body: "Bracing resists the horizontal forces that wind and seismic loads impose on a building. Without adequate bracing, a structure will rack (deform sideways under load) and can collapse. Wall bracing takes the form of sheet bracing (structural plywood fixed to the frame), diagonal steel strap bracing, or prefabricated bracing panels. Bracing is only effective when correctly fixed at top and bottom — an under-nailed brace provides almost no resistance. Bracing plans specify the type, location, and fixing requirements of bracing in each wall line. Roof bracing transfers lateral loads to the bracing walls below.",
        visualCue:
          "Visualise a wall frame with two bracing panels: left shows a plywood sheet brace nailed at 75 mm centres at the perimeter. Right shows a steel strap brace running diagonally from top corner to bottom corner with a turnbuckle for tensioning. Horizontal wind force arrows push against the top of each frame.",
      },
      {
        id: "s5",
        title: "Structural Connections and Tie-Downs",
        body: "Structural connections transfer loads between members and prevent elements from separating under tension (uplift and racking). Cyclone tie-downs connect roof framing to wall frames to resist wind uplift; hold-down brackets connect wall frames to floor systems; and anchor bolts connect bottom plates to concrete slabs. All structural connectors must be the specified type, installed with the correct number and diameter of nails or bolts, and undamaged. Missing or incorrect connections are invisible once the building is lined — they must be inspected during framing before linings are installed. Framing inspections by a building certifier are a mandatory checkpoint.",
        visualCue:
          "Picture a framing connection detail at the top of an external wall: a metal hurricane strap wraps from the rafter over the top plate with nails on both faces. A callout shows the bottom plate anchor bolted to the slab at 1200 mm centres. A hold-down bracket connects the wall stud to the floor bearer.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is the purpose of noggings in a timber wall frame?",
        options: [
          "To carry roof loads down to the floor",
          "To prevent stud buckling and provide mid-height fixing for wall linings",
          "To form the window sill structure",
          "To replace the bottom plate in wet areas",
        ],
        correctIndex: 1,
        explanation:
          "Noggings are horizontal members between studs at mid-height. They prevent lateral buckling of the studs under load and provide a solid fixing point for wall lining sheets at their joints.",
      },
      {
        id: "q2",
        question:
          "Why is understanding load paths important for a construction worker?",
        options: [
          "It helps estimate material quantities",
          "It identifies which walls are structural and which cannot be removed without engineering assessment",
          "It determines the order of trades on site",
          "It is required for building permit applications",
        ],
        correctIndex: 1,
        explanation:
          "Load paths show how gravity and lateral loads travel through the structure to the foundation. Understanding load paths allows workers to identify load-bearing elements that must not be compromised without engineering approval.",
      },
      {
        id: "q3",
        question:
          "When must structural connections (tie-downs, brackets) be inspected?",
        options: [
          "After the building is fully lined and painted",
          "During framing, before wall and ceiling linings are installed",
          "Only during the final building inspection",
          "At the time of occupancy certificate",
        ],
        correctIndex: 1,
        explanation:
          "Structural connections are concealed once linings are installed. The mandatory framing inspection must occur before lining to verify that all connections are present, correct, and properly fixed.",
      },
    ],
  },
  {
    id: "construction-roofing",
    tradeId: "construction",
    title: "Roofing & Weatherproofing",
    level: 3,
    durationMinutes: 25,
    summary:
      "Learn roof framing geometry, sarking and underlay systems, tile and metal roofing installation, flashing detailing, and guttering — keeping the building watertight for life.",
    keyConcepts: [
      "Roof Framing",
      "Sarking",
      "Tile Roofing",
      "Metal Roofing",
      "Flashing & Guttering",
    ],
    steps: [
      {
        id: "s1",
        title: "Roof Framing Geometry",
        body: "Roof framing begins with setting out the ridge, hip rafters, common rafters, and jack rafters from the wall plate. Roof pitch is expressed in degrees or as a ratio (rise:run) and determines the length and angle of every rafter cut. Common pitches for residential roofs range from 15° to 35°. A rafter square and framing tables give the per-metre run length, plumb cut, and seat cut angles for any pitch. Hip roofs have a hip rafter running at 45° in plan from each corner; the hip rafter is longer than the common rafter by a factor related to the roof geometry. Accuracy at the set-out stage prevents cumulative errors that make roofing sheet layout impossible.",
        visualCue:
          "Visualise a hip roof framing plan from above: the ridge runs along the centre; common rafters are perpendicular to the walls; four hip rafters run diagonally from corners to ridge ends; jack rafters fill between the hips and common rafters. Labels show rafter spacing at 600 mm centres.",
      },
      {
        id: "s2",
        title: "Sarking and Roof Underlay",
        body: "Sarking is a reflective foil laminate or non-woven membrane installed directly to the roof framing under the roofing material. It provides a secondary line of defence against wind-driven rain penetrating under tiles or sheeting, reduces radiant heat transfer into the ceiling space, and acts as a moisture barrier. Sarking is fixed to rafters starting at the eave, with each row overlapping the row below by 150 mm — the low side of each sheet is always under the adjacent sheet. In bushfire attack level (BAL) rated areas, ember-resistant sarking is mandatory. Laps, penetrations, and joints must be correctly detailed and taped.",
        visualCue:
          "Picture a section of roof framing with sarking being laid: horizontal rows run across the rafters with 150 mm overlaps. The lower edge of each sheet overlaps the sheet below. At the ridge, both sides overlap and are taped together. Arrows indicate the direction of water flow over the laps.",
      },
      {
        id: "s3",
        title: "Tile and Metal Roofing Installation",
        body: "Concrete and terracotta tiles are fixed to timber battens nailed to the rafters. Batten spacing matches the tile gauge — the exposed length of each tile — which varies by tile profile and pitch. Tiles at every second course, perimeter tiles, and all tiles in high-wind zones must be mechanically clipped or screwed. Metal roofing (Colorbond steel) uses profiled sheets spanning rafter-to-rafter or on purlins at 900–1200 mm centres. Sheets are laid uphill with a minimum side lap of one corrugation and end lap of 150 mm. Screws fix into the rib for concealed fix systems or through the pan for standard exposed-fastener systems. Correct fastening density is critical in cyclone and high-wind regions.",
        visualCue:
          "Imagine a split-view roof: the left half shows concrete tiles on battens with clips visible on the second course. The right half shows Colorbond corrugated metal sheeting with exposed screws through the corrugation crowns, sheets overlapping by one corrugation at the side.",
      },
      {
        id: "s4",
        title: "Flashing Detailing",
        body: "Flashings seal the junctions between the roof covering and vertical surfaces — walls, chimneys, skylights, and penetrations. Without proper flashings, water tracks behind the roofing and into the wall or ceiling cavity. Step flashings are used at sloped wall-to-roof junctions: individual L-shaped pieces are woven between each tile course and fixed to the wall. Apron flashings seal the bottom of a wall-to-roof junction. Valley flashings are formed sheet metal that channel water from the valley between two roof slopes into the gutters. All flashings must be lapped by at least 150 mm, fixed with appropriate fasteners, and sealed at critical joints.",
        visualCue:
          "Picture three flashing details side by side: first, a step flashing woven between tile courses and turned up the wall face. Second, an apron flashing at the base of a chimney folded over the front tile course. Third, a metal valley flashing in a roof valley with tiles trimmed back, channelling water to the gutter.",
      },
      {
        id: "s5",
        title: "Guttering and Downpipes",
        body: "Gutters collect rainwater from the roof and direct it to downpipes and drainage. Gutter size is determined by roof area, rainfall intensity, and the number of outlets — an undersized gutter overflows in heavy rain, causing erosion and foundation saturation. Gutters must be installed with a continuous fall of 1:500 toward each outlet. Colorbond gutters are fixed to fascia brackets at 900 mm centres; expansion joints are required every 12 m to allow thermal movement. Downpipes must be sized to match gutter output and discharge into stormwater drains or rainwater tanks in compliance with local council requirements. Overflow outlets prevent gutter water entering the eave space if downpipes become blocked.",
        visualCue:
          "Visualise a fascia and gutter installation: quad gutters on brackets with a fall toward the downpipe outlet. A cutaway shows the gutter profile and an overflow outlet slot at the top edge. The downpipe connects at a 45° angle to the stormwater drain below.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the primary purpose of sarking installed under roof tiles or metal sheeting?",
        options: [
          "To support the tile weight between battens",
          "To provide a secondary weatherproof barrier against wind-driven rain and reduce radiant heat transfer",
          "To act as a vapour barrier in bathroom areas",
          "To prevent tiles from slipping down the rafter",
        ],
        correctIndex: 1,
        explanation:
          "Sarking sits directly on the roof framing under the roofing material. It stops wind-driven rain that penetrates under tiles and reflects radiant heat from entering the ceiling space, improving both weatherproofing and thermal performance.",
      },
      {
        id: "q2",
        question:
          "What is the correct fall specification for a gutter installation?",
        options: [
          "Level (no fall) to prevent overflow at low points",
          "A continuous fall of 1:500 toward each outlet",
          "A fall of 1:100 toward each outlet",
          "Fall is not required if outlet spacing is under 6 m",
        ],
        correctIndex: 1,
        explanation:
          "Gutters must fall at a minimum ratio of 1:500 toward outlets. A level gutter holds standing water, promoting corrosion and mosquito breeding. Too steep a fall causes overflow at the outlet end.",
      },
      {
        id: "q3",
        question:
          "Why are step flashings used at sloped wall-to-roof junctions rather than one continuous piece?",
        options: [
          "Step flashings are cheaper to manufacture",
          "Individual pieces woven between tile courses move independently and ensure each course sheds water over the one below",
          "A single piece cannot be bent to the correct angle",
          "Step flashings are only used for aesthetic reasons",
        ],
        correctIndex: 1,
        explanation:
          "Step flashings are individual L-shaped pieces, one per tile course, woven into the roofing. Each piece can move independently with thermal expansion and directs water at each course level over the tile below and into the gutter.",
      },
    ],
  },
  {
    id: "construction-fitout",
    tradeId: "construction",
    title: "Interior Fitout & Finishes",
    level: 4,
    durationMinutes: 30,
    summary:
      "Coordinate and deliver interior fitout: wall lining, insulation, plastering, painting, flooring, and joinery installation — transforming a structural shell into a finished building.",
    keyConcepts: [
      "Wall Lining",
      "Insulation",
      "Plastering",
      "Painting",
      "Flooring & Joinery",
    ],
    steps: [
      {
        id: "s1",
        title: "Insulation and Pre-Lining Inspections",
        body: "Before wall and ceiling linings are installed, all pre-lining inspections must be completed and signed off: framing, structural connections, plumbing rough-in, electrical rough-in, and gas rough-in. This is the last opportunity to inspect concealed work. Insulation is installed in wall cavities and ceiling spaces after services inspections — thermal insulation batts are friction-fit between studs with no gaps or compression, as gaps and compression both reduce effectiveness significantly. Vapour barriers may be required in cold climates on the warm side of insulation to prevent condensation within the wall cavity. R-value requirements are specified in the National Construction Code.",
        visualCue:
          "Picture a wall frame with all pre-lining trades complete: electrical conduit and outlet boxes are fixed, plumbing pipes stubbed out, insulation batts snugly fitted between studs. A building surveyor checks items off a pre-lining inspection form. One panel has a gap at the top of the batt — a red circle highlights the defect.",
      },
      {
        id: "s2",
        title: "Plasterboard Lining",
        body: "Plasterboard (Gyprock) is the standard wall and ceiling lining material in Australian residential construction. Standard sheets are 10 mm thick for walls (13 mm for wet areas) and 10 mm for ceilings, hung perpendicular to ceiling joists. Ceiling sheets are fixed first, then wall sheets. Sheets must be fixed to every stud and nogging with 30 mm corrosion-resistant screws at 300 mm centres. Fire-rated construction uses 13 mm or double 10 mm plasterboard with specific fixing and jointing details as specified. Sheets must be stored flat off the ground on timber packers — standing sheets on edge bows them, making installation and finishing much harder.",
        visualCue:
          "Visualise a room interior: ceiling plasterboard sheets are installed first, running perpendicular to joists. Wall sheets follow with the top sheet fixed to the ceiling. A screw pattern shows 300 mm centres at edges. An exploded view shows the sheet, stud, and screw penetrating 25 mm into the timber.",
      },
      {
        id: "s3",
        title: "Plastering and Jointing",
        body: "Plastering and jointing conceals the plasterboard sheet joints and screw heads, creating a flat, seamless surface ready for painting. The jointing process uses three coats of joint compound: a base coat to embed the paper tape over joints, a fill coat to build the joint width to 200–250 mm on each side, and a finishing coat feathered to 300 mm each side. Screw heads are filled in two coats. Each coat must dry completely before the next is applied — applying a new coat over a wet base causes adhesion failure and cracking. Sanding between coats and after the final coat removes ridges and trowel marks. Level 4 finish (standard residential) requires no surface defects visible in raking light.",
        visualCue:
          "Imagine a series of close-up sections of a plasterboard joint at each stage: first, the raw joint gap with paper tape being embedded in base compound. Second, the filled joint with tape buried. Third, the finished and sanded joint — completely flat. A raking light torch at the wall surface shows no shadow across the finished joint.",
      },
      {
        id: "s4",
        title: "Painting Systems",
        body: "Interior painting follows a system of preparation, priming, and top coats. Surfaces must be sanded, dust-cleaned, and any remaining defects filled and sanded before priming. Primer seals the surface and improves adhesion of the topcoats. New plasterboard requires a sealer coat before priming to prevent uneven sheen in the finish. Two topcoats of washable low-sheen or semi-gloss are standard for walls; semi-gloss or gloss for trims and joinery. Each coat must cure fully before the next. Cutting in (painting edges and corners by brush) before rolling the field reduces lap marks. Colour consistency requires using the same batch numbers for each room.",
        visualCue:
          "Picture a painter at work: the left side of the wall shows the primer coat (flat white, slightly rough); the centre shows the first topcoat being rolled on in a W pattern; the right shows the finished second topcoat with a smooth, uniform low-sheen surface. Trims are masked with blue tape.",
      },
      {
        id: "s5",
        title: "Flooring and Joinery Installation",
        body: "Hard flooring (tiles, engineered timber, laminate) and soft flooring (carpet) are installed after painting is complete but before joinery kick-boards and final trim. Tile substrate must be flat within 3 mm in 3 m — high spots are ground back and hollows filled before tiling. Engineered timber floating floors require a 10 mm expansion gap at all walls, doorways, and fixed objects — covered by skirting or trims. Kitchen and bathroom cabinetry is installed after flooring, scribed to walls, and levelled using adjustable legs. Bench tops are fitted last, after the cabinet installation is verified level and in plane. Splashbacks, appliance cutouts, and plumbing connections complete the kitchen fitout sequence.",
        visualCue:
          "Visualise a kitchen installation sequence: tile substrate checked with a long straight edge; tiles laid from the centre of the room; base cabinets installed and levelled; bench top templated and fabricated to the wall profile; splashback tiled and silicone jointed at bench and wall edges.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why must pre-lining inspections be completed and signed off before plasterboard is installed?",
        options: [
          "To allow the lining contractor to plan sheet layout",
          "It is the last opportunity to inspect concealed work — framing, services, and structural connections that will be permanently hidden",
          "To check the insulation R-value is correct",
          "To verify the paint colour selections",
        ],
        correctIndex: 1,
        explanation:
          "Once linings are in place, all the work behind them is permanently hidden. Pre-lining inspection is the mandatory checkpoint where framing, structural connections, and services rough-ins are verified before they are concealed.",
      },
      {
        id: "q2",
        question:
          "What causes flashing (uneven sheen) on newly plastered walls after painting?",
        options: [
          "Using water-based paint over oil-based primer",
          "Applying topcoat directly to new plasterboard without a sealer coat — the absorbency varies between the board face and the joints",
          "Applying two topcoats instead of one",
          "Painting in direct sunlight causing rapid drying",
        ],
        correctIndex: 1,
        explanation:
          "New plasterboard paper face and joint compound have different absorbency. Without a sealer coat, the topcoat soaks in unevenly, creating patches of different sheen. A sealer equalises the absorbency before painting.",
      },
      {
        id: "q3",
        question:
          "Why must a 10 mm expansion gap be left around engineered timber floating floors?",
        options: [
          "To allow for cleaning under the edges",
          "Timber expands and contracts with humidity changes — without a gap the floor will buckle and lift",
          "To allow the floor to be removed easily for future access",
          "It is an acoustic requirement to reduce impact noise",
        ],
        correctIndex: 1,
        explanation:
          "Engineered timber flooring expands across its width as humidity increases. The 10 mm gap at all fixed edges provides space for this movement. Without it, the floor panels buckle upward.",
      },
    ],
  },
  {
    id: "construction-management",
    tradeId: "construction",
    title: "Construction Management",
    level: 5,
    durationMinutes: 35,
    summary:
      "Master project scheduling, subcontractor coordination, quality control systems, defects management, and building handover — delivering projects on time, on budget, and to specification.",
    keyConcepts: [
      "Project Scheduling",
      "Subcontractor Coordination",
      "Quality Control",
      "Defects Management",
      "Building Handover",
    ],
    steps: [
      {
        id: "s1",
        title: "Project Scheduling",
        body: "A construction program is the backbone of project delivery. The critical path method (CPM) identifies the sequence of activities that determines the earliest possible completion date — any delay to a critical path activity delays the whole project. Programs are built in scheduling software as a Gantt chart, showing task duration, dependencies, float, and resource allocation. Construction programs must account for inspection hold points, lead times for long-supply items (windows, kitchen cabinetry, structural steel), weather contingencies, and subcontractor availability. The program is a living document — updated weekly against actual progress and used at site meetings to identify and resolve emerging delays before they compound.",
        visualCue:
          "Picture a Gantt chart for a residential build: rows show trade activities from site establishment through to landscaping. Bars show task duration; linking arrows show dependencies. The critical path is highlighted in red. Float activities are shown in blue. A vertical 'today' line shows current progress versus the original program.",
      },
      {
        id: "s2",
        title: "Subcontractor Coordination",
        body: "A construction project involves dozens of subcontractors whose work must be sequenced to avoid conflicts and delays. The site manager's core skill is coordinating this sequence: concrete slab → framing → roofing → plumbing/electrical rough-in → insulation → pre-lining inspection → lining → plastering → painting → flooring → joinery → fit-off → commissioning. Each trade must know exactly when they are needed and how long they have. Short-interval scheduling (2–4 week look-ahead programs) gives subcontractors enough notice to mobilise resources and order materials. Attendance at weekly site meetings, clear written instructions, and prompt payment keep subcontractors engaged and committed to the program.",
        visualCue:
          "Imagine a 2-week look-ahead schedule on the site office wall: a simple table with subcontractor names as rows and days of the fortnight as columns. Coloured blocks show when each trade is on site. Arrows between trades show the handover points — plumber finishes rough-in before the insulation contractor arrives.",
      },
      {
        id: "s3",
        title: "Quality Control Systems",
        body: "Quality control (QC) is the systematic process of verifying that work meets the specification before it is covered up or signed off. A QC plan identifies all inspection hold points, the inspection method, acceptance criteria, and who is responsible. Hold points require a formal inspection and sign-off before work can proceed — they cannot be bypassed. Witness points allow an inspector to be present but work can proceed without them if the inspector does not attend. Non-conformance reports (NCRs) document any work that does not meet specification, the corrective action required, and sign-off when rectified. A robust QC system protects both the builder and the client.",
        visualCue:
          "Visualise a QC register on a tablet: rows list inspection items (footing excavation, reinforcement placement, concrete pour, framing, pre-lining) with columns for hold/witness point type, inspection date, inspector name, pass/fail, and NCR reference. Two rows are highlighted in red — open NCRs requiring rectification.",
      },
      {
        id: "s4",
        title: "Defects Management",
        body: "Construction defects are deviations from the contract specification that must be identified and rectified before handover or during the defects liability period (DLP) — typically 12 months after practical completion. Defects are identified through the builder's practical completion inspection (PCI), the client's independent inspection, the building certifier's final inspection, and warranty claims during the DLP. A defects schedule lists each defect, its location, the required rectification, the responsible subcontractor, and the target completion date. Responding promptly to defects is critical for client satisfaction and avoidance of dispute. At the end of the DLP, a final inspection confirms all defects have been rectified and the retention amount is released.",
        visualCue:
          "Picture a builder conducting a practical completion inspection walkthrough using a tablet with a room-by-room defects checklist, photographing each defect. One room shows tagged defects: a paint scrape on a skirting board, a door that doesn't latch, and a tile with a hairline crack — each tagged with a numbered sticker matching the defects schedule.",
      },
      {
        id: "s5",
        title: "Building Handover",
        body: "Building handover is the formal transfer of the completed building from the builder to the client. Before handover, the builder must provide: an occupancy certificate from the building certifier; all warranties and product documentation for installed systems; operation manuals for mechanical equipment, security systems, and appliances; as-built drawings; and certificates from all relevant trades (waterproofing, electrical, gas, hydraulic). The client receives a walkthrough demonstration of all systems. Practical completion triggers payment of the final progress claim and release of any retention held. A professional handover sets the tone for the builder-client relationship through the defects liability period.",
        visualCue:
          "Imagine a formal handover meeting in the new building: the builder hands the client a branded folder containing the occupancy certificate, warranty documents, compliance certificates, and operation manuals. The site supervisor demonstrates how to operate the HVAC system and security panel. Keys and garage remotes are exchanged.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is the critical path in a construction program?",
        options: [
          "The route vehicles must take on site",
          "The sequence of activities that determines the earliest possible project completion date — any delay here delays the whole project",
          "The list of inspections required before handover",
          "The order in which subcontractors must be paid",
        ],
        correctIndex: 1,
        explanation:
          "The critical path is the longest sequence of dependent tasks from start to finish. It has zero float — any delay to a critical path task directly delays the project completion date by the same duration.",
      },
      {
        id: "q2",
        question:
          "What is the difference between a hold point and a witness point in a QC plan?",
        options: [
          "They are the same — both require a formal sign-off before work proceeds",
          "A hold point cannot be bypassed — work must stop until signed off. A witness point allows work to proceed if the inspector does not attend",
          "Hold points apply to structural work; witness points to fitout only",
          "A witness point requires a third-party inspector; a hold point is the builder's own inspection",
        ],
        correctIndex: 1,
        explanation:
          "Hold points are mandatory stop points — work cannot proceed without formal sign-off from the inspector. Witness points give the inspector the opportunity to attend but do not prevent work from proceeding if they choose not to attend.",
      },
      {
        id: "q3",
        question:
          "What documents must a builder provide to the client at building handover?",
        options: [
          "Only the occupancy certificate",
          "Occupancy certificate, warranties, product documentation, operation manuals, as-built drawings, and all trade compliance certificates",
          "The approved building plans and development consent only",
          "Insurance certificates and the construction contract only",
        ],
        correctIndex: 1,
        explanation:
          "A complete handover package includes the occupancy certificate, warranties for all installed products, operation manuals for systems and appliances, as-built drawings, and trade compliance certificates (waterproofing, electrical, gas, hydraulic).",
      },
    ],
  },
];
