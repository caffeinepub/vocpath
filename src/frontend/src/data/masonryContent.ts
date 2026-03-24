import type { TradeModule } from "./woodworkingContent";

export const masonryModules: TradeModule[] = [
  {
    id: "masonry-mortar-prep",
    tradeId: "masonry",
    title: "Mortar, Materials & Safety",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn the components of mortar mixes, how to identify brick and block types, and the personal protective equipment required on a masonry site.",
    keyConcepts: [
      "Mortar Mix Ratios",
      "Cement Types",
      "Brick Grades",
      "PPE Requirements",
      "Tool Identification",
    ],
    steps: [
      {
        id: "s1",
        title: "What Is Mortar Made Of?",
        body: "Mortar is a bonding paste made from cement, sand, and water mixed in specific ratios. A standard bricklaying mortar is typically 1 part cement to 4 or 5 parts bricklaying sand (by volume). Lime is often added — usually 1 part lime to 1 part cement — to improve workability and allow slight movement in the wall without cracking. Too much cement makes the mortar brittle and stronger than the bricks, which causes the bricks themselves to crack rather than the joints when the wall moves. Too little cement produces weak joints that wash out in rain.",
        visualCue:
          "Picture three buckets side by side on a mixing board: the first labelled Portland Cement (grey, fine powder), the second labelled Bricklaying Sand (yellow-brown, coarse), the third labelled Hydrated Lime (white, chalky). A fourth bucket shows the combined mix after blending.",
      },
      {
        id: "s2",
        title: "Brick Grades and Their Uses",
        body: "Bricks are classified by exposure rating. General Purpose (GP) bricks suit interior walls and protected exterior walls. Moderate Exposure (ME) bricks are used in external walls in mild climates, above damp-proof course level. Severe Exposure (SE) bricks handle coastal and high-rainfall environments. Masonry engineers specify the grade based on site exposure, and using a lower grade than specified leads to spalling and moisture penetration over time. Pavers are denser still and rated separately for foot traffic loads.",
        visualCue:
          "Imagine a coastal house cross-section: the basement walls below ground use dense engineering bricks, the ground floor external walls use SE-rated bricks, and the internal partition walls use inexpensive GP bricks — each zone labelled with its exposure rating.",
      },
      {
        id: "s3",
        title: "Mixing Mortar by Hand",
        body: "Start by dry-blending cement and sand on a clean mixing board or in a drum mixer until the colour is uniform — no grey streaks from unmixed cement or pale patches of sand. Make a well in the centre and add clean water gradually; too much water at once makes the mix sloppy and weak. Fold the dry material from the edges into the centre, turning the mix end-over-end rather than simply stirring. Finished mortar should hold a clean peak when patted with a trowel but slide off the trowel slowly when tilted — not drip off.",
        visualCue:
          "Visualise a circular mixing board from above: a ring of dry sand-cement surrounds a central puddle of water; arrows show the trowel dragging dry mix inward from the edges until the colour becomes a consistent warm grey.",
      },
      {
        id: "s4",
        title: "PPE and Site Safety",
        body: "Cement is highly alkaline — prolonged skin contact causes chemical burns known as cement dermatitis. Always wear nitrile gloves rated for alkaline chemicals, not fabric or latex gloves that absorb moisture. Safety glasses protect against chipped brick fragments and lime dust. Steel-capped boots protect toes from dropped bricks and tools. Dust masks (minimum P2 rating) prevent silica inhalation when cutting or grinding bricks — silica dust causes silicosis, an irreversible lung disease. On scaffolding above 2 m, a safety harness and guardrail system is legally required.",
        visualCue:
          "Picture a bricklayer from head to toe: hard hat on top, safety glasses over the eyes, P2 dust mask covering nose and mouth, high-vis vest, nitrile gloves on the hands, and steel-capped work boots at the bottom — each item labelled.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the standard cement-to-sand ratio for a basic bricklaying mortar?",
        options: ["1:2", "1:4", "1:8", "2:1"],
        correctIndex: 1,
        explanation:
          "A 1:4 ratio (1 part cement to 4 parts bricklaying sand) is the standard for most structural brickwork, giving a balance of strength and workability.",
      },
      {
        id: "q2",
        question: "Why is lime added to mortar?",
        options: [
          "To make it set faster",
          "To increase compressive strength",
          "To improve workability and allow slight wall movement",
          "To waterproof the joint",
        ],
        correctIndex: 2,
        explanation:
          "Lime improves workability on the trowel and introduces a small degree of flexibility that prevents cracking when walls experience minor thermal movement.",
      },
      {
        id: "q3",
        question:
          "Which brick grade is specified for a wall in a coastal, high-rainfall environment?",
        options: [
          "General Purpose (GP)",
          "Moderate Exposure (ME)",
          "Severe Exposure (SE)",
          "Engineering grade",
        ],
        correctIndex: 2,
        explanation:
          "Severe Exposure (SE) bricks are denser and more resistant to moisture penetration, making them the correct choice for coastal and high-rainfall sites.",
      },
      {
        id: "q4",
        question:
          "What disease can result from inhaling silica dust when cutting bricks?",
        options: ["Asbestosis", "Silicosis", "Mesothelioma", "Byssinosis"],
        correctIndex: 1,
        explanation:
          "Silicosis is an irreversible, progressive lung disease caused by inhaling crystalline silica dust released when cutting, grinding, or drilling masonry products.",
      },
    ],
  },
  {
    id: "masonry-bonding-patterns",
    tradeId: "masonry",
    title: "Brick Bonding Patterns",
    level: 2,
    durationMinutes: 25,
    summary:
      "Master the three primary brick bonding patterns — stretcher, header, and Flemish — and understand how corners, reveals, and plumb control are achieved.",
    keyConcepts: [
      "Stretcher Bond",
      "Header Bond",
      "Flemish Bond",
      "Plumb and Level",
      "Perpend Alignment",
    ],
    steps: [
      {
        id: "s1",
        title: "Stretcher Bond — The Modern Standard",
        body: "In stretcher bond, every brick is laid with its long face (the stretcher face) visible, and each course is offset by half a brick from the course below. This is the most common pattern in modern single-skin cavity wall construction because it minimises brick cutting and provides adequate overlap (bond) between courses. The half-brick offset means no vertical joint aligns directly above another, distributing loads across the wall. Stretcher bond is quick to set out, easy to maintain consistent joint widths, and ideal for learning the fundamentals of bricklaying.",
        visualCue:
          "Imagine looking straight at a brick wall: every brick shows its long face, and the vertical joints in alternate courses line up in a staggered zipper pattern — no two joints sit directly above each other.",
      },
      {
        id: "s2",
        title: "Header Bond and English Bond",
        body: "In header bond, bricks are rotated 90° so only the short end (the header face) is visible. A full course of headers bonds two leaves of brickwork together, or produces a solid one-brick-wide wall. English bond alternates a full course of stretchers with a full course of headers, creating one of the strongest bonds for solid walls. The header course locks the stretcher courses together at regular intervals, preventing delamination. English bond was the dominant pattern in Victorian-era construction and you'll encounter it frequently on heritage restoration sites.",
        visualCue:
          "Picture a wall with alternating rows: one row shows all long bricks (stretchers), the next shows all short ends (headers) protruding. The header row appears to interlock the wall like stitches in fabric.",
      },
      {
        id: "s3",
        title: "Flemish Bond",
        body: "Flemish bond alternates a header and a stretcher within every course. The result is a visually attractive, even pattern used for decorative facades. Every header sits centred over the stretcher below, creating a strong diagonal lock through the wall's thickness. Setting out Flemish bond correctly requires careful planning at corners and reveals to maintain the alternating pattern without awkward cuts. Queen closers — bricks cut to three-quarter length — are inserted at corners to begin and end each course correctly.",
        visualCue:
          "Visualise a wall where each horizontal row shows a rhythmic alternation: long brick, short end, long brick, short end. Looking down the diagonal, headers line up in neat diagonal rows.",
      },
      {
        id: "s4",
        title: "Plumb, Level, and Perpends",
        body: "Three checks govern every course of brickwork. Level: the top of each course must be perfectly horizontal — use a spirit level on every 4th brick minimum. Plumb: the face of the wall must be perfectly vertical — check with a spirit level or plumb bob at corners and at every 1.2 m interval. Perpends: vertical joints between bricks should align vertically every two courses in stretcher bond — use a gauge rod (a straight piece of timber marked at each course height including joint) to maintain consistent joint thickness throughout the lift. Walls that drift out of plumb are structurally compromised and visually obvious.",
        visualCue:
          "Picture a bricklayer holding a spirit level against the wall face: the bubble sits centred in the level's vial, and a plumb bob hanging from the corner confirms the corner is truly vertical — both checks applied simultaneously.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "In stretcher bond, by how much is each course offset from the one below?",
        options: [
          "One quarter brick",
          "One third brick",
          "Half a brick",
          "One full brick",
        ],
        correctIndex: 2,
        explanation:
          "Stretcher bond offsets each course by half a brick, ensuring no vertical joint aligns directly above another and loads are distributed across the wall.",
      },
      {
        id: "q2",
        question: "What is a queen closer?",
        options: [
          "A metal wall tie",
          "A brick cut to three-quarter length used at corners",
          "A type of mortar joint finish",
          "A header brick laid flat",
        ],
        correctIndex: 1,
        explanation:
          "Queen closers are bricks cut to three-quarter length that are inserted at corners when laying Flemish or other bonds to maintain the correct pattern without odd joints.",
      },
      {
        id: "q3",
        question: "English bond alternates which two types of courses?",
        options: [
          "Stretcher and Flemish courses",
          "Header and Flemish courses",
          "Stretcher and header courses",
          "Soldier and sailor courses",
        ],
        correctIndex: 2,
        explanation:
          "English bond alternates a full course of stretchers with a full course of headers, creating one of the strongest bonding patterns for solid walls.",
      },
      {
        id: "q4",
        question: "What is a gauge rod used for in bricklaying?",
        options: [
          "Measuring wall thickness",
          "Checking mortar pH",
          "Maintaining consistent course heights and joint thickness",
          "Marking out brick bond patterns",
        ],
        correctIndex: 2,
        explanation:
          "A gauge rod is a straight timber strip marked at each course height (brick + joint) that allows bricklayers to maintain identical joint thickness throughout a wall lift.",
      },
    ],
  },
  {
    id: "masonry-cavity-walls",
    tradeId: "masonry",
    title: "Cavity Walls & Blockwork",
    level: 3,
    durationMinutes: 30,
    summary:
      "Understand how cavity wall construction works, how to install wall ties correctly, how to lay concrete blockwork efficiently, and how to integrate insulation in modern external walls.",
    keyConcepts: [
      "Cavity Wall Principle",
      "Wall Ties",
      "Concrete Blockwork",
      "Insulation Batts",
      "Damp-Proof Course",
    ],
    steps: [
      {
        id: "s1",
        title: "Why Build a Cavity Wall?",
        body: "A cavity wall consists of two parallel leaves of masonry separated by an air gap (the cavity), typically 50–100 mm wide. The outer leaf handles weather and provides the facade; the cavity breaks the capillary path so water cannot travel directly from outside to inside. The inner leaf carries structural loads and provides thermal mass. Before cavity construction became standard in the 1920s, solid brick walls relied on thickness alone to keep out moisture — with mixed results in wet climates. Cavity construction dramatically reduced damp penetration in dwellings and is now the standard for all external brick veneer and full-brick construction in Australia.",
        visualCue:
          "Imagine a cutaway cross-section of a wall: two brick leaves stand parallel with a 75 mm air gap between them. A raindrop hits the outer leaf, travels partway through the brick, and stops at the cavity — unable to jump the gap to the inner leaf.",
      },
      {
        id: "s2",
        title: "Wall Ties — Types and Placement",
        body: "Wall ties mechanically link the two masonry leaves, transferring lateral loads (wind pressure) across the cavity while allowing independent vertical movement. Ties are typically galvanised steel or stainless steel, 3 mm wire bent into a figure-of-eight or double triangle shape. Stainless steel is mandatory in coastal locations where salt spray degrades galvanising over time. Standard spacing is 600 mm horizontally and 450 mm vertically (every third course of standard bricks). Within 225 mm of openings, provide additional ties every alternate course to stiffen the edge.",
        visualCue:
          "Picture the cavity wall from the top: a steel tie spans the gap, each end embedded 50 mm into its respective leaf of mortar. A slight downward drip — a small V-bend in the middle of the tie — prevents water running along the tie from reaching the inner leaf.",
      },
      {
        id: "s3",
        title: "Laying Concrete Blockwork",
        body: "Concrete blocks (hollow or solid) are larger than bricks, typically 390 mm × 190 mm face with various widths (90, 140, 190 mm). Their larger size means fewer joints per square metre and faster construction for large internal walls and structural cores. Always lay blocks with the thicker shell face up — this provides the larger bedding surface for mortar. Hollow blocks can be reinforced: vertical steel bars are threaded through the cores and the cores are filled with grout, converting a hollow masonry wall into a reinforced masonry wall capable of resisting significant lateral loads.",
        visualCue:
          "Visualise a cross-section of a hollow concrete block from above: two hollow rectangular cores sit inside the block's outer shell. A vertical steel bar threads down through the cores, surrounded by grey grout fill — the combined unit acts like a slender reinforced concrete column.",
      },
      {
        id: "s4",
        title: "Insulation and Damp-Proof Courses",
        body: "Rigid insulation batts or boards are installed in the cavity to improve thermal performance — this is now required under the National Construction Code energy provisions. Insulation must not bridge the cavity in a way that carries moisture; mineral wool batts (not fibreglass) are preferred as they remain effective when damp. The damp-proof course (DPC) is a continuous impermeable layer — usually 200-micron polyethylene or lead — installed at the base of the cavity wall just above ground level. It prevents ground moisture wicking up through the masonry. Weep holes (open perpend joints at the DPC level) allow any water that enters the cavity to drain out rather than accumulate.",
        visualCue:
          "Picture the base of a cavity wall: a bright yellow DPC membrane sits at floor slab level, lapping up behind the outer leaf and down under it. Weep holes appear every third perpend joint at the DPC level, allowing trapped water to exit at the bottom of the wall.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is the primary purpose of the cavity in a cavity wall?",
        options: [
          "To reduce the amount of brick needed",
          "To break the capillary path and prevent moisture crossing to the inner leaf",
          "To allow electrical cables to run inside the wall",
          "To reduce wall weight for foundation design",
        ],
        correctIndex: 1,
        explanation:
          "The cavity breaks the capillary pathway so moisture absorbed by the outer leaf cannot travel directly to the inner leaf, keeping the interior dry.",
      },
      {
        id: "q2",
        question: "Why must wall ties in coastal locations be stainless steel?",
        options: [
          "Stainless steel is cheaper than galvanised",
          "Salt spray corrodes galvanising over time, causing tie failure and wall delamination",
          "Stainless steel provides better thermal bridging",
          "Building codes require stainless steel everywhere",
        ],
        correctIndex: 1,
        explanation:
          "Salt-laden air in coastal environments attacks galvanised coatings, eventually corroding the steel tie and causing the two masonry leaves to delaminate from the wall.",
      },
      {
        id: "q3",
        question: "What function do weep holes serve at DPC level?",
        options: [
          "They ventilate the cavity to control condensation",
          "They allow water that enters the cavity to drain out",
          "They indicate the correct height for the damp-proof course",
          "They reduce wind pressure on the outer leaf",
        ],
        correctIndex: 1,
        explanation:
          "Weep holes are open perpend joints at the DPC level that allow any water accumulating at the cavity base to escape rather than build up and saturate the inner leaf.",
      },
      {
        id: "q4",
        question:
          "When laying hollow concrete blocks, which way should the thicker shell face?",
        options: ["Down", "Up", "Toward the cavity", "Away from the cavity"],
        correctIndex: 1,
        explanation:
          "Laying hollow blocks with the thicker shell face up provides a larger bedding area for mortar, giving a stronger and more consistent bond between courses.",
      },
    ],
  },
  {
    id: "masonry-arches-feature",
    tradeId: "masonry",
    title: "Arches, Soldier Courses & Feature Work",
    level: 4,
    durationMinutes: 30,
    summary:
      "Learn to construct brick arches using temporary formwork, lay soldier and sailor courses, build corbelled projections, and execute decorative stonework details.",
    keyConcepts: [
      "Arch Geometry",
      "Formwork (Centering)",
      "Soldier Course",
      "Corbelling",
      "Keystone",
    ],
    steps: [
      {
        id: "s1",
        title: "How an Arch Works",
        body: "An arch transfers the weight above an opening outward and downward into the supporting masonry on each side (the abutments), rather than straight down through a lintel. The curved shape means every brick is in compression — masonry's strongest mode. The topmost brick, the keystone, locks the arch together; until it is placed, the arch is unstable and relies entirely on the timber centering (formwork) for support. Once the keystone is mortared in and the mortar cures, the centering is removed (struck) and the arch becomes self-supporting. Flat arches (jack arches) use tapered bricks or wedge-shaped mortar joints to achieve the same load transfer in a horizontal arrangement.",
        visualCue:
          "Picture a semicircular arch over a doorway: arrows show forces flowing from the load above, curving down the arc of the arch, and pushing outward into the thick masonry piers on each side. The keystone at the top is highlighted in red.",
      },
      {
        id: "s2",
        title: "Setting Out and Building the Centering",
        body: "Centering is a temporary timber frame cut to the exact curvature of the arch soffit. Set out the arch on a plywood sheet: mark the span (opening width), rise (height above springing line), and centre point. Use a trammel rod (a batten with a pencil at one end and a pivot nail at the other) to scribe the curve. Cut two matching profiles from 12 mm ply and nail spacers between them so the formwork sits flush with the face of the wall. Wedge the centering firmly on props so it cannot move during bricklaying — any movement shifts the joint pattern and locks the bricks in the wrong position.",
        visualCue:
          "Visualise a plywood semicircle supported on timber props inside a doorway opening. The arch bricks are positioned on top of it in a fan pattern, each brick leaning slightly toward the centre — waiting for the keystone.",
      },
      {
        id: "s3",
        title: "Soldier and Sailor Courses",
        body: "A soldier course stands bricks upright on their end with the stretcher face visible — the bricks stand like soldiers at attention. Soldiers are commonly used above windows as a decorative header detail or to form a feature band around a building. A sailor course also stands bricks on end but with the bed face visible (rotated 90° from the soldier). Both require a structural steel angle lintel behind them to carry the load — neither a soldier nor a sailor course is structurally self-supporting over an opening without hidden steel support. Mark out soldier courses carefully so perpend joints divide the opening evenly without awkward cuts at the ends.",
        visualCue:
          "Picture a window opening: above the glass, a row of bricks stands upright, tall and narrow. Their long faces point outward in a neat vertical parade — the soldier course. Behind them, invisible to the viewer, a galvanised steel angle lintel carries the load.",
      },
      {
        id: "s4",
        title: "Corbelling",
        body: "Corbelling is the stepped projection of masonry courses outward from the plane of a wall. Each course projects no more than one-third of a brick's length beyond the one below — project further and the cantilevering brick will tip and crack the mortar bed. Multiple corbelled courses create chimney caps, bay window sills, decorative friezes, and structural overhangs. The same principle is used in reverse to step a wall inward (racking back) during construction to allow the wall to be extended later. Mark each projection with a chalk line on the face of the wall before laying to ensure consistent, uniform stepping.",
        visualCue:
          "Imagine the top of a chimney stack: the last four courses each step outward progressively, forming a pyramidal cap that overhangs the stack below. A ruler shows each step is exactly 25 mm — one-third of a standard brick's 75 mm length.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is the keystone in a brick arch?",
        options: [
          "The first brick laid at the springing line",
          "The central topmost brick that locks the arch together",
          "A decorative stone at the base of the arch",
          "A steel plate embedded in the arch",
        ],
        correctIndex: 1,
        explanation:
          "The keystone is the topmost central brick. Once mortared into place, it locks both halves of the arch together and allows the centering formwork to be removed.",
      },
      {
        id: "q2",
        question: "Why is centering (formwork) required when building an arch?",
        options: [
          "To keep mortar from falling out",
          "To maintain the correct curvature and support the arch until the mortar cures",
          "To ensure equal spacing between bricks",
          "To prevent the bricks from absorbing moisture",
        ],
        correctIndex: 1,
        explanation:
          "Until the keystone is placed and the mortar cures, the arch is unstable. Centering holds every brick in its correct curved position until the arch becomes self-supporting.",
      },
      {
        id: "q3",
        question:
          "What is the maximum safe projection of each corbelled course?",
        options: [
          "Half a brick length",
          "One quarter of a brick length",
          "One third of a brick length",
          "Two thirds of a brick length",
        ],
        correctIndex: 2,
        explanation:
          "Each corbelled course should project no more than one-third of the brick's length beyond the course below, or the cantilevered brick will tip and crack the mortar bed.",
      },
      {
        id: "q4",
        question:
          "A soldier course over a window opening requires what hidden structural element?",
        options: [
          "A concrete lintel",
          "A steel angle lintel",
          "A timber header",
          "No support — soldiers are self-supporting",
        ],
        correctIndex: 1,
        explanation:
          "Soldier courses cannot carry loads on their own over an opening. A steel angle lintel fixed behind the soldiers carries the masonry load above the opening.",
      },
    ],
  },
  {
    id: "masonry-heritage-restoration",
    tradeId: "masonry",
    title: "Heritage & Restoration Masonry",
    level: 5,
    durationMinutes: 35,
    summary:
      "Develop skills in lime mortar repointing, heritage brick matching, structural crack repair, and conservation principles that preserve the fabric and character of historic buildings.",
    keyConcepts: [
      "Lime Mortar",
      "Repointing",
      "Brick Matching",
      "Structural Repair",
      "Conservation Ethics",
    ],
    steps: [
      {
        id: "s1",
        title: "Why Lime Mortar in Heritage Buildings?",
        body: "Pre-20th century buildings were built with lime mortar, not Portland cement mortar. Lime mortar is softer and more permeable than the bricks it holds — this is intentional. When a masonry wall moves due to thermal expansion, settlement, or moisture, the soft mortar cracks and absorbs the movement rather than the bricks. Repointing a heritage wall with hard Portland cement traps moisture inside the wall, prevents the wall from breathing, and forces cracking through the much more expensive and irreplaceable handmade bricks. Always match the original mortar's composition and hardness on heritage work — a spectrometer analysis or laboratory test of original mortar samples should guide the mix.",
        visualCue:
          "Picture a close-up of two brick walls side by side: the left wall (lime mortar) shows fine hairline cracks along the mortar joints — flexible, repairable. The right wall (wrong hard cement repoint) shows brick faces spalled and crumbling — the rigid mortar forced movement into the softer bricks.",
      },
      {
        id: "s2",
        title: "Repointing Technique",
        body: "Repointing is the removal of deteriorated mortar from joints and replacement with new mortar. Use an angle grinder with a mortar-raking disc or a plug chisel and hammer to remove the old mortar to a minimum depth of 20 mm — shallow repointing fails within a few years. Blow out dust with compressed air. Dampen the joint and adjacent bricks before applying fresh mortar; dry masonry draws moisture from the mortar too quickly, preventing full hydration and causing early joint failure. Pack mortar in layers no deeper than 10 mm at a time, waiting for each layer to stiffen before adding the next. Tool the joint surface to match the original profile once the mortar is thumb-print firm.",
        visualCue:
          "Visualise a cross-section of a brick joint: old mortar sits shallow and crumbly, only 8 mm deep. An arrow indicates the minimum 20 mm raking depth required. Below that, the new lime mortar fill is shown in three packed layers, each 8–10 mm, building up to flush with the brick face.",
      },
      {
        id: "s3",
        title: "Matching Heritage Bricks",
        body: "When bricks are damaged beyond repair, matching replacements must be found. Original handmade bricks vary significantly in size, colour, and texture compared to modern pressed bricks. Factors to assess: fired colour (which depends on clay source and kiln temperature — brick colour cannot be painted reliably), dimensions (old imperial bricks are often 75 mm thick, not the modern 76 mm), texture (wire-cut, sand-faced, or handmade), and frog depth. Specialist brick suppliers and demolition salvage yards are the primary sources. If an exact match is impossible, use salvaged bricks from a demolished structure of the same era and region.",
        visualCue:
          "Imagine placing a new machine-made brick next to an original 1890s handmade brick: the new brick is perfectly uniform in colour and smooth; the old brick is mottled with orange, grey, and dark patches, slightly larger, with a rough texture. The difference is immediately obvious — visible at 10 metres.",
      },
      {
        id: "s4",
        title: "Conservation Ethics",
        body: "The Burra Charter (Australia ICOMOS) guides heritage conservation practice. Its core principle is minimum intervention: do as much as necessary but as little as possible to stabilise and preserve the fabric. Reversibility is equally important — any repair or treatment should be capable of being undone in the future without damaging original fabric. Document everything: photograph the building before, during, and after works, and record every material and technique used. Consult a heritage architect or conservation engineer before undertaking significant structural interventions. Heritage buildings hold cultural significance beyond their material value, and an irreversible mistake cannot be undone.",
        visualCue:
          "Picture a weathered sandstone building facade: a conservation mason carefully removes only the surface crust of spalled stone with a soft chisel, leaving the sound stone beneath intact. A camera and notebook beside them record every detail — minimum intervention, maximum documentation.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why should you NOT repoint a heritage building with hard Portland cement mortar?",
        options: [
          "Portland cement takes too long to set",
          "Hard cement traps moisture and forces wall movement into the softer heritage bricks, causing them to crack and spall",
          "Portland cement is too expensive for heritage work",
          "Heritage regulations prohibit all cement use",
        ],
        correctIndex: 1,
        explanation:
          "Lime mortar is designed to be softer than the bricks. Using hard Portland cement reverses this relationship, making bricks — not mortar — absorb movement stresses, leading to irreparable brick damage.",
      },
      {
        id: "q2",
        question:
          "What is the minimum depth for removing old mortar when repointing?",
        options: ["5 mm", "10 mm", "20 mm", "35 mm"],
        correctIndex: 2,
        explanation:
          "Raking to at least 20 mm ensures the new mortar has sufficient depth to bond properly and resist weathering. Shallow repointing fails quickly.",
      },
      {
        id: "q3",
        question:
          "What document guides heritage conservation practice in Australia?",
        options: [
          "The National Construction Code",
          "The Burra Charter",
          "AS 3700 Masonry Structures",
          "The Heritage Overlay",
        ],
        correctIndex: 1,
        explanation:
          "The Burra Charter, published by Australia ICOMOS, is the primary ethical and practical guide for heritage conservation in Australia, based on principles of minimum intervention and reversibility.",
      },
      {
        id: "q4",
        question: "What does 'reversibility' mean in heritage conservation?",
        options: [
          "The ability to return to the original design intent",
          "Using only materials that can be recycled",
          "Any repair or treatment should be removable in the future without damaging original fabric",
          "Documenting changes so they can be explained",
        ],
        correctIndex: 2,
        explanation:
          "Reversibility means future conservators should be able to undo your work without harming original material — this preserves options for future generations with better technology or knowledge.",
      },
    ],
  },
];
