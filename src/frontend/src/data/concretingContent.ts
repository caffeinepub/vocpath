import type { TradeModule } from "./woodworkingContent";

export const concretingModules: TradeModule[] = [
  {
    id: "concreting-properties-safety",
    tradeId: "concreting",
    title: "Concrete Properties & Safety",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand concrete mix components, how water-cement ratio affects strength, slump testing for workability, and safe handling practices on site.",
    keyConcepts: [
      "Concrete Mix Design",
      "Water-Cement Ratio",
      "Slump Test",
      "Curing",
      "PPE for Concrete Work",
    ],
    steps: [
      {
        id: "s1",
        title: "What Concrete Is Made Of",
        body: "Concrete is a composite material made from Portland cement, coarse aggregate (crushed rock or gravel), fine aggregate (sand), and water. Cement is the binder — when mixed with water it undergoes hydration, a chemical reaction that produces calcium silicate hydrate crystals that bond the aggregates together into a dense, hard mass. Admixtures such as plasticisers, accelerators, and retarders are added to modify workability or setting time. The proportions of each ingredient — the mix design — directly control the concrete's final strength, workability, and durability.",
        visualCue:
          "Picture four piles side by side on a workbench: grey cement powder, a heap of coarse aggregate (20 mm crushed rock), a heap of washed sand, and a bucket of water. An arrow from each pile points into a rotating mixer drum. The output shown is a smooth, wet grey mix.",
      },
      {
        id: "s2",
        title: "Water-Cement Ratio and Strength",
        body: "The water-cement (w/c) ratio is the single most important factor controlling concrete strength. A low w/c ratio (0.35–0.45) produces high-strength, dense concrete with low permeability. A high w/c ratio (0.6+) makes concrete easier to place but significantly weaker and more porous. The minimum water needed to hydrate cement is about 0.25 by weight of cement — any additional water improves workability but dilutes the paste. For residential slabs, a w/c ratio of 0.45–0.50 is typical, targeting 25–32 MPa 28-day strength.",
        visualCue:
          "Visualise a graph with w/c ratio on the horizontal axis (0.35 to 0.70) and 28-day compressive strength on the vertical axis (15 to 50 MPa). A descending curve shows strength dropping sharply as the ratio increases. Highlighted zones mark typical residential, commercial, and structural specification ranges.",
      },
      {
        id: "s3",
        title: "Slump Test for Workability",
        body: "The slump test measures concrete workability — how easily it flows and is compacted. A 300 mm tall slump cone is filled in three layers, each rodded 25 times, then the cone is lifted vertically. The distance the concrete falls from the original cone height is the slump. A slump of 60–80 mm is typical for slabs; 80–120 mm for columns and walls. Low slump concrete is stiff and hard to place around reinforcement; high slump is easy to pour but may segregate and bleed, causing surface weakness. Slump is measured on site at the truck to verify the delivery meets specification.",
        visualCue:
          "Imagine a sequence of three images: first, a slump cone filled and tamped on a flat plate. Second, the cone being lifted straight up. Third, the cone sitting beside the slumped concrete — the ruler shows 75 mm of slump from the top of the cone height to the top of the settled concrete.",
      },
      {
        id: "s4",
        title: "Curing and Safe Handling",
        body: "Curing keeps concrete moist after placing to ensure the hydration reaction continues, developing full strength over 28 days. Without curing, surface moisture evaporates too quickly, halting hydration and causing shrinkage cracks and surface dusting. Curing methods: wet hessian covered with plastic sheeting, curing compound sprayed on immediately after finishing, or ponding water on flat slabs. Freshly placed concrete is highly alkaline — prolonged skin contact causes chemical burns. Always wear gloves, long sleeves, and rubber boots when handling concrete. Wash skin immediately if wet concrete contacts it.",
        visualCue:
          "Picture a freshly screeded slab: one section is covered in wet hessian under clear plastic (properly cured); another section left uncovered shows a network of fine shrinkage cracks at the surface (inadequate curing). A inset shows a hand in a nitrile glove next to an unhappy bare hand with reddened skin.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the primary effect of increasing the water-cement ratio in a concrete mix?",
        options: [
          "It increases the compressive strength",
          "It decreases the compressive strength and increases porosity",
          "It accelerates the setting time",
          "It reduces shrinkage cracking",
        ],
        correctIndex: 1,
        explanation:
          "Adding excess water dilutes the cement paste, producing a weaker, more porous matrix. Concrete strength is inversely related to the water-cement ratio.",
      },
      {
        id: "q2",
        question:
          "A slump of 75 mm is measured on site. What type of pour is this workability suitable for?",
        options: [
          "Stiff paving concrete",
          "Typical residential slab",
          "Shotcrete",
          "Self-compacting concrete",
        ],
        correctIndex: 1,
        explanation:
          "60–80 mm slump is the normal range for residential and commercial slabs — workable enough to place and float, but stiff enough not to bleed excessively.",
      },
      {
        id: "q3",
        question:
          "Why is curing critical in the days after concrete is placed?",
        options: [
          "To prevent the surface from staining",
          "To retain moisture for continued hydration, preventing shrinkage cracks and ensuring full strength gain",
          "To accelerate the setting reaction",
          "To keep the surface cool enough to walk on",
        ],
        correctIndex: 1,
        explanation:
          "Concrete gains strength through hydration, which requires water. Without curing, surface water evaporates, stopping the reaction and causing shrinkage cracking.",
      },
      {
        id: "q4",
        question:
          "What is the primary skin hazard when handling fresh concrete?",
        options: [
          "Abrasion from aggregate particles",
          "Chemical burns from the high alkalinity of Portland cement",
          "Allergic reaction to sand",
          "Heat burns from the hydration reaction",
        ],
        correctIndex: 1,
        explanation:
          "Fresh concrete has a pH of 12–13. Extended skin contact causes alkali burns that may not be immediately painful but develop into serious wounds. Always wear gloves and rinse skin immediately.",
      },
    ],
  },
  {
    id: "concreting-formwork",
    tradeId: "concreting",
    title: "Formwork Construction",
    level: 2,
    durationMinutes: 25,
    summary:
      "Design and build timber formwork for footings, slabs, and walls; understand form pressure, tie systems, and safe stripping procedures.",
    keyConcepts: [
      "Formwork Design",
      "Concrete Pressure",
      "Form Oil",
      "Tie Systems",
      "Stripping Sequence",
    ],
    steps: [
      {
        id: "s1",
        title: "Formwork Loads and Pressure",
        body: "Fresh concrete behaves as a fluid and exerts hydrostatic pressure on formwork. The pressure depends on the pour height and rate of rise: a wall poured quickly at a high rate generates enormous pressure at the base. At a pour rate of 1 m/hour in a 3 m wall, the pressure at the base can reach 25 kN/m² — equivalent to 2.5 tonnes per square metre. Formwork must be designed to resist this load with adequate plywood thickness, stud spacing, and walers. Overloaded formwork blowouts are dangerous and expensive — concrete spills uncontrollably and the pour is ruined.",
        visualCue:
          "Imagine a cross-section of a wall form: pressure arrows on the plywood face increase in size from top to bottom, illustrating hydrostatic pressure growing with depth. Labels show stud spacing at 400 mm, walers at 600 mm intervals, and tie rods passing through the form holding both faces together.",
      },
      {
        id: "s2",
        title: "Timber Formwork Construction",
        body: "Residential slab edge formwork uses 25 mm or 50 mm timber boards set to the slab thickness, held by timber stakes driven into the ground at 600–900 mm centres. The inside face is oiled before the pour — form oil prevents concrete bonding to the timber, allowing clean stripping. For walls, 17 mm form-ply is the standard face material, backed by 70 × 35 mm timber studs and double walers. All corners must be square and braced; a long straight edge and level are used to align the form to grade and plan. Any form oil on the reinforcement must be removed before pouring — oil contaminates the steel-concrete bond.",
        visualCue:
          "Picture an edge form for a residential slab: 50 × 150 mm boards form the edge height, held by pointed timber pegs at 750 mm spacing. A level is shown against the board face confirming plumb. A paintbrush applies yellow form oil to the inner face of the boards.",
      },
      {
        id: "s3",
        title: "Tie Systems for Wall Forms",
        body: "Wall forms require tie systems to hold both faces apart and together simultaneously — preventing the faces from spreading under concrete pressure or collapsing inward during pour. Common systems include through-tie rods with cone spreaders (the cone creates a standard recess, and the threaded rod is removed after stripping), and proprietary form ties with plastic cones. Tie spacing is determined by form design calculations. After stripping, cone recesses are filled with dry-pack mortar or patching compound. Wall tie spacing typically ranges from 400 to 600 mm both ways depending on wall height and pour rate.",
        visualCue:
          "Visualise a wall form cross-section (top view): two sheets of form-ply face each other with a 200 mm gap (wall thickness). A tie rod passes through both sheets with a plastic cone spreader in the centre. Wing nuts bear on steel washers at each face. An arrow shows the force each face exerts outward.",
      },
      {
        id: "s4",
        title: "Stripping Sequence and Re-use",
        body: "Formwork must not be stripped until concrete has reached sufficient strength to be self-supporting. For slab soffits (the underside), this is typically 7 days for normally-cured concrete, or as specified by the engineer. Sides of beams can be stripped after 24–36 hours; wall forms can typically be stripped after 12–24 hours once concrete is firm to the touch. Strip formwork in reverse order of assembly: remove bracing first, then walers, then face panels. Avoid dropping panels — they damage plywood faces. Clean and re-oil all form faces before re-use to extend their life.",
        visualCue:
          "Picture a concrete wall after stripping: the form-ply face has been removed, revealing a smooth grey wall surface with the regular cone recesses visible in a grid pattern. Beside it, a worker cleans residual concrete from the plywood sheet with a scraper and applies fresh oil for the next use.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why does concrete pressure on formwork increase with pour depth?",
        options: [
          "Deeper concrete is heavier and more dense",
          "Fresh concrete behaves as a fluid — hydrostatic pressure increases with depth",
          "Deeper pours have a higher water-cement ratio",
          "Air pockets reduce pressure near the surface",
        ],
        correctIndex: 1,
        explanation:
          "Like any fluid, fresh concrete exerts pressure proportional to the head of material above it. The deeper the pour, the higher the lateral pressure at the base of the form.",
      },
      {
        id: "q2",
        question:
          "What is the purpose of applying form oil to the face of formwork before a pour?",
        options: [
          "To lubricate the formwork for easier assembly",
          "To prevent concrete bonding to the form face, allowing clean stripping without damage",
          "To waterproof the timber against moisture",
          "To accelerate concrete setting near the form face",
        ],
        correctIndex: 1,
        explanation:
          "Form oil creates a release layer between concrete and timber. Without it, concrete adheres to the form, causing surface tearing and damage to both the concrete and the formwork.",
      },
      {
        id: "q3",
        question:
          "Why must form oil on reinforcement be removed before pouring concrete?",
        options: [
          "Oil makes the reinforcement rust faster",
          "Oil contaminates the steel-concrete bond, reducing the reinforcement's effectiveness",
          "Oil reacts chemically with the concrete mix",
          "Oil prevents the bars from being positioned correctly",
        ],
        correctIndex: 1,
        explanation:
          "Reinforcement works by bonding to the concrete matrix. Any oil on the bar surface reduces this bond, creating a slip plane that severely compromises structural performance.",
      },
      {
        id: "q4",
        question:
          "When can soffit formwork (the underside of a slab) typically be stripped?",
        options: [
          "After 3 days",
          "After 7 days for normally-cured concrete, or as specified by the engineer",
          "As soon as the concrete surface is firm to touch",
          "Only after 28 days when full design strength is reached",
        ],
        correctIndex: 1,
        explanation:
          "The slab soffit carries the self-weight of the concrete. Seven days allows adequate strength for self-support, but the engineer may specify a different period depending on the design strength and loading.",
      },
    ],
  },
  {
    id: "concreting-slabs-footings",
    tradeId: "concreting",
    title: "Slabs & Footings",
    level: 3,
    durationMinutes: 30,
    summary:
      "Pour, vibrate, screed, and finish a reinforced slab on ground; understand strip footing construction, starter bars, and surface finishing techniques.",
    keyConcepts: [
      "Reinforcement Cover",
      "Concrete Vibration",
      "Screeding",
      "Bull Floating",
      "Construction Joints",
    ],
    steps: [
      {
        id: "s1",
        title: "Reinforcement Placement and Cover",
        body: "Reinforcement steel (rebar) must be positioned with correct concrete cover — the distance from the rebar surface to the concrete face. Cover protects steel from moisture and carbonation, which cause corrosion. For a slab on ground: 40 mm bottom cover; for external exposure: 40–50 mm; for aggressive environments: 65 mm. Rebar is positioned on plastic bar chairs or concrete blocks to hold it at the correct height during the pour. Bars must not move during concrete placement — tie wire at intersections secures a stable mesh. Chair spacing is typically 600–800 mm each way.",
        visualCue:
          "Visualise a slab reinforcement layout from above: a grid of N12 bars at 200 mm centres tied with wire at each intersection. Along the edges, vertical spacer chairs hold the mesh 40 mm above the subgrade. A ruler shows the 40 mm clear cover from the bar surface to the bottom of the slab.",
      },
      {
        id: "s2",
        title: "Placing and Vibrating Concrete",
        body: "Concrete is placed as close as possible to its final position — do not move it long distances with vibrators or it will segregate (aggregate separating from paste). Concrete trucks discharge via chute directly into the form or into a pump hopper. An internal vibrator (poker vibrator) is inserted into the concrete every 300–450 mm, held for 5–15 seconds until air bubbles stop rising, then withdrawn slowly. Vibration liquefies the mix temporarily, allowing it to flow around reinforcement and release entrapped air voids. Under-vibration leaves honeycombing; over-vibration causes aggregate to sink and paste to rise, creating a weak surface layer.",
        visualCue:
          "Picture a slab pour from the side: a concrete pump hose discharges near the back of the pour. A worker follows with a poker vibrator, inserting it into the wet concrete every 400 mm in a systematic grid pattern. Air bubbles rise and burst around the vibrator tip.",
      },
      {
        id: "s3",
        title: "Screeding and Bull Floating",
        body: "Screeding levels concrete to the required height by dragging a straight timber or aluminium screed across the top of the forms or screed rails in a sawing motion. Two or three passes remove high spots and fill low spots. After screeding, a bull float (a wide, flat aluminium blade on a long handle) is pushed and pulled across the surface to flatten bleed water and aggregate, embedding large particles just below the surface. Bull floating is done before bleed water appears on the surface — working bleed water back into the surface weakens it significantly.",
        visualCue:
          "Imagine a slab surface at three stages: first, rough concrete immediately after vibration. Second, a screed being dragged across two guide rails, levelling the surface. Third, a bull float being pushed forward across the screeded surface, leaving a smooth flat finish behind it.",
      },
      {
        id: "s4",
        title: "Finishing and Construction Joints",
        body: "Final finishing begins when bleed water has evaporated and the concrete can support a person on kneeboards without leaving deep impressions. A steel trowel produces a dense, smooth finish for interior floors. A broom finish drags a stiff broom across the surface to create a textured, non-slip finish for driveways and paths. Sawcut control joints at 3–4 m centres are cut within 4–12 hours of pour to control shrinkage cracking — they provide a pre-formed plane of weakness where cracks develop invisibly below the surface. Construction joints are planned stop-pour locations with dowel bars to transfer load.",
        visualCue:
          "Visualise a slab surface divided into panels by sawcut joints. One panel shows a trowelled mirror finish; the adjacent panel shows a broom-textured surface for slip resistance. A cross-section at a sawcut joint shows the cut 25–30% through the slab depth, with a hairline crack forming directly below it.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is concrete cover and why is it important?",
        options: [
          "The top coat of curing compound applied to the surface",
          "The distance from the reinforcement surface to the concrete face, which protects steel from corrosion",
          "The plastic sheeting used during curing",
          "The layer of sand blinding beneath the slab",
        ],
        correctIndex: 1,
        explanation:
          "Cover protects steel from moisture and atmospheric carbon dioxide (carbonation), which cause corrosion. Insufficient cover leads to reinforcement corrosion, spalling, and structural failure.",
      },
      {
        id: "q2",
        question: "How far apart should poker vibrator insertions be spaced?",
        options: [
          "100–150 mm apart",
          "300–450 mm apart",
          "600–900 mm apart",
          "1.0–1.5 m apart",
        ],
        correctIndex: 1,
        explanation:
          "Poker vibrators affect a radius of about 150–225 mm from the tip. Inserting every 300–450 mm ensures the zones of influence overlap and the entire pour is fully consolidated.",
      },
      {
        id: "q3",
        question:
          "Why should bull floating be done before bleed water appears?",
        options: [
          "The bull float cannot slide over wet surface water",
          "Working bleed water back into the surface increases the water-cement ratio of the surface layer, weakening it",
          "Bleed water causes the bull float to rust",
          "Bull floating after bleed water disrupts the aggregate distribution",
        ],
        correctIndex: 1,
        explanation:
          "Bleed water at the surface represents excess water rising through the concrete. Working it back in raises the w/c ratio of the top layer, producing a weak, dusty surface prone to scaling.",
      },
      {
        id: "q4",
        question:
          "Why are sawcut control joints made 25–30% of the slab depth?",
        options: [
          "To allow drainage through the slab",
          "To create a plane of weakness where shrinkage cracks form invisibly below the cut",
          "To expose aggregate for decorative purposes",
          "To reduce the slab weight",
        ],
        correctIndex: 1,
        explanation:
          "Concrete shrinks as it dries. Sawcuts create a pre-formed weak plane — the slab cracks beneath the cut, where it is hidden, rather than randomly across the surface.",
      },
    ],
  },
  {
    id: "concreting-elevated-slabs",
    tradeId: "concreting",
    title: "Elevated Slabs & Formwork Systems",
    level: 4,
    durationMinutes: 30,
    summary:
      "Understand propped formwork for suspended slabs, falsework design principles, pour sequencing, and the critical safety requirements for elevated concrete work.",
    keyConcepts: [
      "Falsework",
      "Propping Systems",
      "Pour Sequencing",
      "Re-propping",
      "Load Calculation",
    ],
    steps: [
      {
        id: "s1",
        title: "Falsework Design Principles",
        body: "Falsework supports the weight of the formwork, fresh concrete, construction loads, and dynamic impact during the pour. A 200 mm suspended slab weighs approximately 4.8 kN/m² (concrete alone); with live construction loads and dynamic impact factors, the design load may reach 6–8 kN/m². Falsework must be designed by a competent person and erected to specification — undersized or improperly braced falsework is one of the most serious hazards in construction. All supporting frames and shores must be plumb, on adequate base plates, and diagonally braced to prevent racking and progressive collapse.",
        visualCue:
          "Visualise a cross-section of a suspended slab under construction: form-ply on top, timber joists spanning between steel ledgers, steel ledgers on adjustable props at 900 mm centres, props sitting on base plates on the floor below. Load arrows from the wet slab transfer down through the system to the ground.",
      },
      {
        id: "s2",
        title: "Propping and Adjustable Shores",
        body: "Adjustable steel props (acrow props) are the most common shoring for residential suspended slabs. They consist of a lower outer tube, an inner tube that slides and locks with a pin, and a screw adjustment at the top. Props must be set plumb — a prop 100 mm out of plumb at 3 m height loses 10% of its load capacity. Heads and base plates distribute load to timber bearers above and the floor below. Props cannot simply rest on a ground floor slab without checking that slab's load capacity — otherwise, loads cascade through multiple floors to the ground.",
        visualCue:
          "Picture two acrow props side by side: left shows a prop correctly plumb under a bearer with a flat head plate evenly loaded. Right shows a prop tilted 5° out of plumb — an arrow shows the eccentric load path and a red warning highlights increased risk of buckling.",
      },
      {
        id: "s3",
        title: "Pour Sequencing",
        body: "Large elevated slabs are divided into pour areas to manage concrete volume, truck scheduling, and the available finishing crew. Each pour area is bounded by a construction joint. Pour sequence should avoid differential settlement or uneven loading on the falsework — do not load one side of a falsework bay heavily before the other side. Pumping concrete places it quickly; the crew must stay ahead of the concrete front with vibrators and screeding. Brief each worker on their role before the pour — once concrete begins, there is no time to discuss assignments.",
        visualCue:
          "Imagine a floor plate divided into four pour zones with dashed construction joint lines. Numbers 1–4 show the pour sequence: alternating zones rather than a continuous sequence, so load is distributed evenly across the falsework. Pump position and boom radius is shown for each pour.",
      },
      {
        id: "s4",
        title: "Re-propping and Back-propping",
        body: "After stripping, some load from the newly stripped slab is transferred back to the floor below via re-propping (also called back-propping). This is required when the stripped slab is too young to carry full construction loads from the floor above without cracking. Engineers specify re-propping requirements in the shoring drawings. Props are placed directly below the newly stripped slab to transfer loads to the hardened slab below. Re-propping must be positioned in the same grid as the original propping to align load paths properly through the structure.",
        visualCue:
          "Visualise a three-storey structure in progress: Level 3 slab just stripped with re-props below passing load to Level 2. Level 2 has its original props still in place passing to Level 1. Level 1 slab rests on the ground. Numbered arrows trace the load path downward through the re-propping chain.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the approximate self-weight of a 200 mm concrete suspended slab?",
        options: ["1.2 kN/m²", "4.8 kN/m²", "8.5 kN/m²", "12.0 kN/m²"],
        correctIndex: 1,
        explanation:
          "Concrete density is approximately 24 kN/m³. A 200 mm (0.2 m) slab weighs 24 × 0.2 = 4.8 kN/m². Design loads add construction and dynamic factors on top of this.",
      },
      {
        id: "q2",
        question: "Why must adjustable props be set plumb?",
        options: [
          "Plumb props are easier to adjust and remove",
          "An out-of-plumb prop carries eccentric load, reducing its capacity and increasing buckling risk",
          "Plumb props resist lateral wind loads better",
          "Regulations require plumb props for aesthetic reasons",
        ],
        correctIndex: 1,
        explanation:
          "A prop designed for axial compression can fail at lower loads if misaligned. The eccentricity introduces bending, which dramatically reduces the prop's buckling load capacity.",
      },
      {
        id: "q3",
        question: "What is the purpose of re-propping a newly stripped slab?",
        options: [
          "To level the slab surface before finishing",
          "To transfer construction loads from the young stripped slab to the floor below, preventing cracking",
          "To hold the slab in position while shrinkage cracks develop",
          "To provide access for waterproofing works",
        ],
        correctIndex: 1,
        explanation:
          "A freshly stripped slab has not yet reached design strength. Re-propping transfers applied construction loads downward, preventing the young concrete from being overloaded.",
      },
      {
        id: "q4",
        question:
          "Why should large elevated slabs be poured in alternating zones rather than continuously?",
        options: [
          "To allow each zone to be finished independently",
          "To distribute loads evenly across the falsework and avoid overloading one side",
          "To reduce total concrete volume required",
          "To allow different mix designs for each zone",
        ],
        correctIndex: 1,
        explanation:
          "Pouring one side of a falsework bay before the other creates an asymmetric load that can rack or overturn the prop system. Alternating zones balance the load as the pour progresses.",
      },
    ],
  },
  {
    id: "concreting-specialist",
    tradeId: "concreting",
    title: "Specialist Concrete",
    level: 5,
    durationMinutes: 35,
    summary:
      "Explore post-tensioned slabs, polished concrete, decorative finishes, and high-performance industrial flooring — advanced techniques that define the modern concreting trade.",
    keyConcepts: [
      "Post-Tensioning",
      "Polished Concrete",
      "Decorative Finishes",
      "Industrial Flooring",
      "Quality Assurance",
    ],
    steps: [
      {
        id: "s1",
        title: "Post-Tensioned Slabs",
        body: "Post-tensioned (PT) slabs use high-strength steel tendons sheathed in plastic ducts that are cast into the slab and stressed after concrete has gained sufficient strength (typically 20–25 MPa). Hydraulic jacks at the slab edge tension the tendons to 140–160 kN each, placing the slab in compression. Compression counteracts the tensile forces from bending, allowing PT slabs to be significantly thinner, span further, and crack less than conventional reinforced slabs. PT is common in multi-storey carparks and residential apartments. Great care is needed during construction — severing a live tendon releases enormous stored energy.",
        visualCue:
          "Imagine a slab cross-section with a PT tendon running through the mid-depth in a shallow 'S' shape (the tendon profile raises at supports and dips at midspan). At the slab edge, a stressing jack grips the tendon anchor and pulls it outward, with a force gauge showing 145 kN. A wedge anchor locks the tendon after stressing.",
      },
      {
        id: "s2",
        title: "Polished Concrete Floors",
        body: "Polished concrete is achieved by progressively grinding the cured slab surface with diamond tooling from coarse (30–40 grit) through fine (400–800 grit) to burnishing (1500–3000 grit), with densifier applied at intermediate steps. Densifier (sodium or lithium silicate) reacts with free lime in the concrete to produce additional silicate crystals, hardening the surface and increasing polish quality. The level of aggregate exposure is controlled by the depth of the first cut: a cream finish exposes only the paste; a full aggregate finish grinds 3–5 mm deep to reveal the stone. Polished concrete is durable, hygienic, and requires no coatings.",
        visualCue:
          "Visualise three slab surface cross-sections at 5× magnification: left shows a cream finish — only the grey paste surface is visible, aggregate hidden below. Centre shows a salt-and-pepper finish — small aggregate tops just breaking through. Right shows full aggregate exposure — 20 mm stones clearly visible, highly polished.",
      },
      {
        id: "s3",
        title: "Decorative Concrete Techniques",
        body: "Exposed aggregate finishes are achieved by broadcasting a selected aggregate (crushed quartz, pebbles, coloured stone) onto the fresh slab surface, pressing it in with a roller, then washing off the surface mortar 4–6 hours later with a dilute retarder solution. Coloured concrete uses integral pigments added at the mixing plant — consistent colour requires the same w/c ratio, cement content, and curing on every pour. Stamped concrete uses patterned rubber stamps pressed into the fresh concrete to mimic stone, slate, or brick, combined with release agents and integral colour for a convincing finish.",
        visualCue:
          "Picture a driveway surface divided into three sections: left shows exposed aggregate with visible coloured pebbles; centre shows integral-coloured concrete in terracotta red; right shows stamped concrete with a cobblestone pattern, different stone colour highlighted with a thin line between 'joints'.",
      },
      {
        id: "s4",
        title: "Industrial Flooring and Quality Assurance",
        body: "Industrial concrete floors in warehouses and factories must meet strict flatness (F-number) and levelness tolerances. Random traffic floors are specified by Floor Flatness (FF) and Floor Levelness (FL) numbers measured with a profilograph. Laser-guided screeds achieve FF50–FF100 on large pours. Fibre-reinforced concrete (polypropylene or steel fibres) replaces traditional mesh reinforcement in many industrial floors, improving toughness and crack resistance. Quality assurance includes cylinder sampling (one set per 50 m³), test cylinder crushing at 7 and 28 days, and concrete delivery docket verification for every truck.",
        visualCue:
          "Imagine a warehouse floor under construction: a laser-guided truss screed straddles the pour, automatically levelling the surface in a single pass. Beside it, a technician fills a 100 × 200 mm test cylinder from a sample bucket — two cylinders per sample set, later cured and crushed to verify design strength.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the primary structural advantage of post-tensioning a concrete slab?",
        options: [
          "It speeds up the concrete setting time",
          "It places the slab in compression, counteracting tensile bending forces and allowing thinner, longer-spanning slabs",
          "It eliminates the need for concrete vibration",
          "It increases the slab weight for stability",
        ],
        correctIndex: 1,
        explanation:
          "Post-tensioning applies pre-compression to the slab. Bending loads from gravity must overcome this compression before tensile stress develops, so the slab can span further with less depth and less cracking.",
      },
      {
        id: "q2",
        question:
          "What does concrete densifier do when applied during polishing?",
        options: [
          "It fills surface voids with a polymer coating",
          "It reacts with free lime to produce additional silicate crystals, hardening the surface for a better polish",
          "It stains the concrete for a decorative colour",
          "It seals the surface against water penetration",
        ],
        correctIndex: 1,
        explanation:
          "Sodium or lithium silicate densifiers chemically react with calcium hydroxide (free lime) in the concrete, forming additional calcium silicate hydrate — the same product as cement hydration — hardening the surface matrix.",
      },
      {
        id: "q3",
        question:
          "How is exposed aggregate finish achieved on a concrete slab?",
        options: [
          "By grinding the surface after curing to reveal aggregate",
          "By broadcasting aggregate onto the fresh surface, pressing it in, then washing off surface mortar with a retarder solution",
          "By placing aggregate in the base before pouring",
          "By mixing more aggregate into the concrete at the plant",
        ],
        correctIndex: 1,
        explanation:
          "Selected decorative aggregate is seeded onto the fresh surface, rolled in, and the surface mortar is later removed with a dilute retarder (surface retarder) that delays set at the surface while the body of the slab hardens.",
      },
      {
        id: "q4",
        question:
          "At what frequency should concrete cylinder samples be taken on a large pour?",
        options: [
          "One set per truck",
          "One set per 50 m³, plus one per structural element",
          "One set per day of pouring",
          "Only at the start and end of the pour",
        ],
        correctIndex: 1,
        explanation:
          "Standard practice is one cylinder sample set per 50 m³ or per structural element, whichever is more frequent. Cylinders are cured and crushed at 7 and 28 days to confirm the concrete meets the design strength.",
      },
    ],
  },
];
