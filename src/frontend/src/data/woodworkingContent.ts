export interface StoryboardStep {
  id: string;
  title: string;
  body: string;
  visualCue: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
}

export interface TradeModule {
  id: string;
  tradeId: string;
  title: string;
  level: 1 | 2 | 3 | 4 | 5;
  durationMinutes: number;
  summary: string;
  keyConcepts: string[];
  steps: StoryboardStep[];
  quiz: QuizQuestion[];
}

export const woodworkingModules: TradeModule[] = [
  {
    id: "wood-species-properties",
    tradeId: "carpentry",
    title: "Wood Species & Properties",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand the fundamental differences between hardwoods and softwoods, how grain structure affects workability, and how to select the right species for your project.",
    keyConcepts: [
      "Hardwood vs Softwood",
      "Grain Direction",
      "Moisture Content",
      "Common Species",
      "Janka Hardness",
    ],
    steps: [
      {
        id: "s1",
        title: "What Makes a Wood Hard or Soft?",
        body: "The terms hardwood and softwood are botanical, not descriptive of actual hardness — balsa is technically a hardwood, yet it's softer than most pine. Hardwoods come from deciduous trees (oak, maple, ash) that shed their leaves annually and have a complex cellular structure. Softwoods come from coniferous trees (pine, spruce, cedar) that produce seed-bearing cones. Understanding this distinction guides your species selection before you even enter a timber yard.",
        visualCue:
          "Picture a cross-section of two tree trunks side by side: the left one (oak) shows dense, tightly packed rings with visible pores; the right one (pine) shows wider, more uniform rings with resin canals.",
      },
      {
        id: "s2",
        title: "Reading Grain Direction",
        body: "Grain refers to the alignment of wood fibres running through a board. With the grain means cutting or planing in the direction the fibres point; against the grain tears and lifts the surface. Straight grain is easiest to work; interlocked or wavy grain requires sharp tools and careful technique. Always sight down a board before cutting — a twist or bow tells you the grain is running at an angle to the face.",
        visualCue:
          "Imagine running your finger along a planed pine board: when moving with the grain you feel a smooth, slippery surface; when you reverse direction you feel a rough, prickling resistance where fibres catch.",
      },
      {
        id: "s3",
        title: "Moisture Content & Wood Movement",
        body: "Wood is hygroscopic — it absorbs and releases moisture from the surrounding air, expanding and contracting across the grain as it does. Freshly felled timber (green wood) may contain 50–100% moisture content (MC) by weight; kiln-dried timber used in furniture is typically 6–10%. Fitting a slightly wet board into a tight joint can result in the wood crushing itself when it dries and shrinks. Always check MC with a moisture meter and allow timber to acclimatise to your workshop for at least 48 hours.",
        visualCue:
          "Visualise a wide tabletop panel: the arrows indicating shrinkage point outward from the centre, always perpendicular to the growth rings — this is why wide panels cup when one face dries faster than the other.",
      },
      {
        id: "s4",
        title: "Pine — The Everyday Softwood",
        body: "Radiata pine (Pinus radiata) is the most widely used structural and joinery timber in Australia and New Zealand. It is inexpensive, widely available, easy to machine, and accepts paint and stain well. Its main weakness is softness — it dents and scratches easily, making it unsuitable for high-wear surfaces like workbench tops or flooring. Use it confidently for framing, shelving, boxes, and painted furniture where cost matters more than durability.",
        visualCue:
          "Picture a workshop shelf: the pine boards show a warm, pale cream colour with prominent dark knots and reddish-brown resin pockets scattered across the face.",
      },
      {
        id: "s5",
        title: "Oak — The Classic Hardwood",
        body: "English oak (Quercus robur) and American white oak (Quercus alba) are prized for their strength, durability, and striking medullary rays — the silvery flecks visible on quarter-sawn faces. Oak is ring-porous, with large open pores that require grain-filling before a smooth finish can be achieved. It machines and steam-bends beautifully, making it ideal for furniture frames, cabinets, and flooring. Be aware that tannins in oak react with iron to produce a blue-black stain — always use stainless or brass fixings.",
        visualCue:
          "On a quarter-sawn oak board, look for the silver rays flashing across the face like scattered mirrors — these are the medullary rays exposed by the radial cut.",
      },
      {
        id: "s6",
        title: "Merbau & Spotted Gum — Australian Hardwoods",
        body: "Merbau (Intsia bijuga) is a dense, interlocked-grain tropical hardwood popular for decking and flooring. Its deep reddish-brown colour is appealing, but it bleeds brown tannin-rich oils when first exposed to rain — seal cut ends immediately. Spotted gum (Corymbia citriodora) is a native Australian eucalypt with an attractive wavy grain and exceptional hardness (Janka 11 kN), making it one of the toughest structural timbers available. Both require carbide-tipped tools due to their hardness and occasional silica content.",
        visualCue:
          "Hold a spotted gum board at a raking angle: the interlocked grain creates a ribbon-like shimmer as the board is tilted, alternating between pale gold and deep brown stripes.",
      },
      {
        id: "s7",
        title: "Choosing the Right Species for Your Project",
        body: "Match species to application: use structural pine for framing and concealed carcases; use a medium hardwood like ash or hoop pine for benchtops under light use; reserve dense species like spotted gum or blackbutt for floors, workbench tops, and outdoor structures. Consider the finish — open-grained species like oak need a pore filler for a glassy surface; fine-grained species like cherry or maple finish smooth directly. Finally, consider sustainability: look for FSC-certified timber or reclaimed wood wherever the project allows.",
        visualCue:
          "Lay three boards side by side — pine (pale, knotty), oak (golden, ringed), and spotted gum (reddish-brown, ribboned) — and compare how light plays differently across each surface.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Why is balsa classified as a hardwood despite being soft?",
        options: [
          "It grows in tropical regions",
          "It comes from a deciduous (broadleaf) tree",
          "It has a high Janka hardness rating",
          "It contains a high resin content",
        ],
        correctIndex: 1,
        explanation:
          "Hardwood/softwood classification is botanical, not physical. Balsa comes from the deciduous tree Ochroma pyramidale, making it a hardwood regardless of its low density.",
      },
      {
        id: "q2",
        question:
          "What is the recommended moisture content for kiln-dried furniture timber?",
        options: ["20–30%", "50–100%", "6–10%", "0–2%"],
        correctIndex: 2,
        explanation:
          "Kiln-dried furniture-grade timber should be at 6–10% MC to match typical interior conditions and minimise movement after the piece is built.",
      },
      {
        id: "q3",
        question: "What causes the blue-black staining sometimes seen in oak?",
        options: [
          "Exposure to UV light",
          "Reaction of oak tannins with iron fixings or tools",
          "Fungal stain from high moisture content",
          "Oxidation of the natural oils in the wood",
        ],
        correctIndex: 1,
        explanation:
          "Oak contains high levels of tannic acid which reacts chemically with iron to produce a dark blue-black iron tannate compound. Always use stainless steel or brass hardware with oak.",
      },
      {
        id: "q4",
        question:
          "Which direction does wood shrink most as it dries after milling?",
        options: [
          "Along the length (longitudinal)",
          "Perpendicular to the growth rings (radial and tangential)",
          "Equally in all directions",
          "Only in the pith region",
        ],
        correctIndex: 1,
        explanation:
          "Wood movement is primarily across the grain — radially (perpendicular to rings) and tangentially (parallel to rings). Longitudinal shrinkage is negligible at less than 0.5%.",
      },
      {
        id: "q5",
        question:
          "What property makes spotted gum require carbide-tipped tooling?",
        options: [
          "High tannin content",
          "Extremely low density",
          "High Janka hardness and occasional silica content",
          "Interlocked grain that splinters",
        ],
        correctIndex: 2,
        explanation:
          "Spotted gum's Janka hardness of ~11 kN and silica deposits in the wood cells will quickly blunt high-speed-steel tools. Carbide tips stay sharp far longer on these dense eucalypts.",
      },
    ],
  },
  {
    id: "hand-tool-mastery",
    tradeId: "carpentry",
    title: "Hand Tool Mastery",
    level: 1,
    durationMinutes: 25,
    summary:
      "Master the essential hand tools of the trade: marking and measuring for precision, handsaws for controlled cuts, chisels for clean paring, and hand planes for flattening and smoothing surfaces.",
    keyConcepts: [
      "Marking & Measuring",
      "Saw Technique",
      "Chisel Work",
      "Hand Planes",
      "Tool Sharpening",
    ],
    steps: [
      {
        id: "s1",
        title: "Measure Twice, Cut Once",
        body: "Accurate marking is the foundation of precise joinery. Use a quality marking knife rather than a pencil wherever possible — the knife severs the surface fibres along the cut line, giving a cleaner edge and a physical reference groove for your chisel or saw. A marking gauge set to a fixed distance scribes parallel lines consistently across an entire batch of components. Always measure from the same datum (reference face and edge) throughout a project to prevent cumulative error.",
        visualCue:
          "Watch the marking knife score a fine, clean line across the face of an oak board — the severed fibres leave a crisp groove rather than the fuzzy, wide mark a pencil would make.",
      },
      {
        id: "s2",
        title: "Choosing and Using a Handsaw",
        body: "Handsaws are categorised by tooth count (TPI — teeth per inch): low TPI (5–7) for fast ripping along the grain; high TPI (10–14) for smooth crosscutting. A Japanese pull-saw cuts on the pull stroke using thin, hard steel, giving a fine kerf with minimal effort. A western-pattern tenon saw has a reinforced back spine to keep the blade stiff for joinery cuts. Start a crosscut with a few light pull strokes to create a kerf groove, then use full strokes while keeping the saw at 45° to the face.",
        visualCue:
          "Observe the tenon saw entering the wood: the back spine rides level as the blade bites, the kerf is straight, and sawdust falls in fine, even particles rather than coarse chips.",
      },
      {
        id: "s3",
        title: "Chisels — Paring and Chopping",
        body: "Chisels serve two main roles: chopping (driven with a mallet to sever across the grain) and paring (guided by hand to slice cleanly along the grain). For chopping, hold the chisel vertically with the bevel facing the waste side and strike the handle firmly with a wooden or rubber mallet. For paring, grip the blade close to the cutting edge to control depth and angle. Never push a chisel toward your body — always clamp the work and pare away from yourself.",
        visualCue:
          "Picture a mortise being chopped: the chisel stands vertical, bevel facing centre, mallet blow driving it squarely into the end grain, releasing a crisp plug of wood waste.",
      },
      {
        id: "s4",
        title: "Hand Planes — From Rough to Smooth",
        body: "Bench planes are named by their length: the No. 4 smoothing plane (245 mm) refines surfaces; the No. 5 jack plane (355 mm) removes high spots; the No. 7 jointer plane (560 mm) flattens long boards. Adjust the cap iron (chipbreaker) close to the cutting edge (0.5 mm) for difficult grain to prevent tearout. Take a shaving pass diagonally across wide boards first to flatten, then finish with straight, overlapping passes along the length.",
        visualCue:
          "A gossamer-thin ribbon of wood curls continuously from the mouth of a No. 4 plane as it glides over a pine board, leaving behind a polished, glassy surface that reflects the workshop lights.",
      },
      {
        id: "s5",
        title: "Sharpening — The Most Important Skill",
        body: "A dull edge requires more force, causes tearout, and is dangerous. Sharpen chisels and plane irons on a progression of whetstones: start on a 400-grit waterstone to establish a flat bevel; move to 1000-grit to refine it; finish on a 6000-grit stone to polish a mirror edge. Maintain a consistent bevel angle (25° for most bench chisels, 30° for tough work). The final step is stropping on leather charged with green compound to align the wire edge and produce a razor finish.",
        visualCue:
          "Hold a freshly sharpened chisel bevel-up at an angle to the light — the mirror-polished bevel reflects clearly and the cutting edge shows no white line of reflected light (a white line means the edge is still flat and dull).",
      },
      {
        id: "s6",
        title: "Marking Out Joinery with a Square",
        body: "A combination square verifies 90° and 45° angles and doubles as a depth gauge and height gauge. To check that a square is true, hold it against a factory-jointed board edge and scribe a line; flip the square and check if the line still aligns — any divergence reveals error in the square itself. Mark your shoulder lines with a square, then use a marking gauge to scribe the cheek lines for tenons or the depth lines for dadoes. Work methodically: mark all components at once so they're consistent.",
        visualCue:
          "The combination square's blade casts a precise shadow on the timber face; as you slide it to mark the shoulder line, the blade leaves a continuous reference that later lets you saw exactly to the line.",
      },
      {
        id: "s7",
        title: "Safe Workholding",
        body: "Your hands are safest when both are on the tool, which means the workpiece must be secured independently. A bench vise holds boards vertically for edge work; a bench hook clamps crosscut pieces and acts as a stop for saw cuts; a holdfast or F-clamp pins flat work to the bench top. For chisel work, clamp the work in a vise or to a board with a clamp — never hold small pieces in your hand while chopping or paring. Good workholding makes cuts more precise and prevents injuries.",
        visualCue:
          "The workpiece is locked in a vise with a sacrificial backing board behind it; both hands grip the saw, and the cut is made in a controlled, relaxed motion with no chance of the board shifting.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Why is a marking knife preferred over a pencil for joinery?",
        options: [
          "It makes a wider, more visible line",
          "It severs fibres for a clean edge and provides a physical reference groove",
          "It can be used as a chisel in an emergency",
          "Pencil graphite contaminates the wood surface",
        ],
        correctIndex: 1,
        explanation:
          "A knife severs the surface fibres cleanly, reducing tearout at the cut line. The physical groove also registers the chisel or saw exactly on the line.",
      },
      {
        id: "q2",
        question: "What TPI range is appropriate for ripping along the grain?",
        options: ["14–20 TPI", "10–14 TPI", "5–7 TPI", "1–3 TPI"],
        correctIndex: 2,
        explanation:
          "Low TPI (5–7) blades have large, aggressive teeth designed to clear the coarse sawdust produced when cutting along the grain quickly. High TPI is for fine crosscuts.",
      },
      {
        id: "q3",
        question:
          "When paring with a chisel, the cutting direction should always be:",
        options: [
          "Toward your body for better control",
          "Downward into the bench",
          "Away from your body",
          "Across the grain only",
        ],
        correctIndex: 2,
        explanation:
          "Always pare away from your body. If the chisel slips, it travels away from you rather than into your hand or wrist.",
      },
      {
        id: "q4",
        question:
          "What is the correct cap iron setting for planing difficult, reversing grain?",
        options: [
          "Set 2–3 mm back from the edge",
          "Remove the cap iron entirely",
          "Set 0.5 mm or less from the edge",
          "Set flush with the cutting edge",
        ],
        correctIndex: 2,
        explanation:
          "A close cap iron (0.5 mm) breaks the shaving immediately before the blade, preventing it from diving below the surface and tearing out fibres in difficult grain.",
      },
      {
        id: "q5",
        question:
          "On a freshly sharpened chisel, what does a white reflected line along the cutting edge indicate?",
        options: [
          "The edge is perfectly sharp",
          "The edge is still flat/dull and needs more sharpening",
          "The bevel angle is correct",
          "The chisel has been over-sharpened",
        ],
        correctIndex: 1,
        explanation:
          "A white line along the edge means light is reflecting off a flat (dull) surface. A truly sharp edge has no flat — it is a point — and reflects no line at all.",
      },
    ],
  },
  {
    id: "power-tool-safety",
    tradeId: "carpentry",
    title: "Power Tool Safety & Technique",
    level: 2,
    durationMinutes: 30,
    summary:
      "Develop safe, confident technique with the four most important portable power tools: circular saw, jigsaw, router, and drill/driver. Learn guard usage, kickback prevention, and correct workholding.",
    keyConcepts: [
      "Circular Saw Safety",
      "Kickback Prevention",
      "Router Technique",
      "Drill/Driver Control",
      "PPE & Guards",
    ],
    steps: [
      {
        id: "s1",
        title: "The Non-Negotiable PPE Checklist",
        body: "Before switching on any power tool, confirm: safety glasses or a full face shield (sawdust at 200 km/h causes permanent eye damage), hearing protection rated to the tool's dB output (circular saws exceed 100 dB), and a dust mask rated P2 or better for fine timber dust. Keep sleeves rolled up or secured — loose clothing near spinning blades is a tying hazard. Remove rings, watches, and lanyards. Tie back long hair. These five seconds of preparation separate professional practice from a dangerous one.",
        visualCue:
          "A workshop bench shows the three mandatory items laid out in order before the tools: safety glasses, ear defenders, and a P2 dust mask.",
      },
      {
        id: "s2",
        title: "Circular Saw — Setup and Blade Depth",
        body: "Set the blade to protrude 6–10 mm below the workpiece — just enough for the teeth to clear fully. A blade set too deep exposes unnecessary spinning steel below the cut and increases kickback energy. Check blade sharpness before every session: a dull blade requires more feed pressure and is the leading cause of burning and binding. Ensure the lower blade guard retracts freely and springs back fully after a cut — never pin it open. Always let the blade reach full speed before entering the timber.",
        visualCue:
          "Sight the circular saw from the front: the blade protrudes just 8 mm below the 18 mm board, with the lower guard snapped back to expose only the cutting portion.",
      },
      {
        id: "s3",
        title: "Understanding and Preventing Kickback",
        body: "Kickback occurs when the rear of the blade is pinched by a closing kerf, causing the saw to be thrown backward violently toward the operator. The two main causes are: the workpiece sagging and closing on the blade as the cut progresses, and the blade binding in twisted or case-hardened timber. Prevent it by supporting both sides of the cut with sawhorses so neither panel drops; never stand directly behind the saw's path; and use a riving knife (splitter) which keeps the kerf open behind the blade.",
        visualCue:
          "Two sawhorses support a sheet of plywood with the cut line running between them — as the saw passes through, neither panel drops, the kerf remains open, and the blade exits cleanly.",
      },
      {
        id: "s4",
        title: "Jigsaw — Curves, Plunges & Control",
        body: "The jigsaw excels at curved cuts and internal cutouts that a circular saw cannot achieve. For clean cuts, use the correct blade: fine-tooth blades (10–12 TPI) for thin timber and clean edges; coarser blades (6–8 TPI) for faster cuts through thick stock. Orbital action should be set to 0 for curves and plastics, and maximum for fast straight cuts in wood. For a plunge cut into a flat panel, tilt the saw onto the blade tip, start at low speed, and lower the base plate slowly into the surface — never let the blade contact the material before the motor is running.",
        visualCue:
          "The jigsaw navigates a smooth arc around a marked circle on a plywood panel; the base plate is flat against the surface, and a clamp secured well away from the cut line keeps the sheet from moving.",
      },
      {
        id: "s5",
        title: "Router — Direction, Depth & Climb Cutting",
        body: "A router must always be fed against the bit rotation — feeding with the rotation (climb cutting) causes the router to grab and lunge forward unpredictably. For external edges, feed left to right; for internal cutouts, feed clockwise. Take multiple shallow passes rather than one deep pass — 6 mm depth per pass maximum for most hardwoods. Always secure the workpiece with clamps before routing; the reaction forces are significant. Use a featherboard on a router table to maintain consistent pressure against the fence.",
        visualCue:
          "An arrow on the router base indicates the correct feed direction along a workpiece edge — the bit rotation arrow on the collet points opposite to the feed direction, confirming the climb-cutting rule.",
      },
      {
        id: "s6",
        title: "Drill/Driver — Clutch, Bit Selection & Pilot Holes",
        body: "A drill/driver has two modes: drill mode (no slip, full torque — for boring holes) and driver mode (adjustable clutch that slips at a set torque — for driving screws without snapping them or crushing the surface). Set the clutch to a low number when driving into soft pine and increase it for hardwoods. Always drill a pilot hole when driving screws near an end grain to prevent splitting — the pilot should be slightly smaller than the screw shank. For clean through-holes, place a sacrificial backing board behind the workpiece to prevent the drill bit from blowing out the exit face.",
        visualCue:
          "The clutch ring on the drill/driver shows numbers 1–20 and a drill symbol — for a No. 8 screw into pine, the setting sits at 6, allowing the driver to seat the screw flush without stripping the head.",
      },
      {
        id: "s7",
        title: "Workholding for Power Tools",
        body: "Every power tool operation requires the workpiece to be immovably secured before the trigger is pulled. For sheets and boards, two clamps at opposite corners onto a pair of sawhorses provides stability without restricting the cut path. For drill press or bench work, a vise or cam-action clamp prevents the piece spinning on the bit. When routing, a router mat under the workpiece adds friction, but clamps are still required. The rule is simple: if you need a hand free to control the tool, both hands should be on the tool — so the work must be held by something else.",
        visualCue:
          "A board to be drilled is clamped to the bench at both ends, with a sacrificial MDF backing board beneath it; the drill press column is centered over the marked hole location.",
      },
      {
        id: "s8",
        title: "Post-Use Safety and Maintenance",
        body: "After each use: disconnect from power before changing blades or bits; allow blades to stop fully before setting the tool down; check the power cord for cuts, kinks, or frayed insulation and remove damaged tools from service immediately. Store blades in their cases or on blade rolls — loose blades in a drawer are a cut hazard. Clean sawdust from motor vents with compressed air to prevent heat buildup. Inspect all guards monthly to ensure they move freely and spring back correctly.",
        visualCue:
          "After switching off, the circular saw rests flat on the bench with its guard fully closed; the power cord is wrapped loosely (no tight kinks) around the handle, and the blade is not touching the bench surface.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the correct blade protrusion depth for a circular saw cutting 18mm timber?",
        options: [
          "Flush with the timber surface",
          "Full blade depth — maximum extension",
          "6–10 mm below the workpiece face",
          "25–30 mm below the workpiece face",
        ],
        correctIndex: 2,
        explanation:
          "Setting the blade 6–10 mm below the material ensures the teeth clear the cut while minimising exposed spinning blade, which reduces kickback energy.",
      },
      {
        id: "q2",
        question: "What is the primary cause of circular saw kickback?",
        options: [
          "Feeding the saw too slowly",
          "Using a blade with too many teeth",
          "The blade being pinched by the closing kerf",
          "The guard being left in place",
        ],
        correctIndex: 2,
        explanation:
          "When the material sags and the kerf closes behind the blade, the blade is pinched and the saw is violently thrown backward. Always support both sides of the cut.",
      },
      {
        id: "q3",
        question:
          "In which direction should a router be fed along an external edge?",
        options: [
          "With the bit rotation (climb cutting)",
          "Against the bit rotation — left to right on the near edge",
          "In any direction at slow speed",
          "Always toward the operator",
        ],
        correctIndex: 1,
        explanation:
          "Feeding against the bit rotation keeps the bit cutting into the wood in a controlled manner. Feeding with the rotation (climb cutting) causes the router to grab and self-feed dangerously.",
      },
      {
        id: "q4",
        question:
          "When should you use the drill mode (not driver mode) on a drill/driver?",
        options: [
          "When driving screws into hardwood",
          "When boring holes",
          "When you want the clutch to slip",
          "When working at slow speed",
        ],
        correctIndex: 1,
        explanation:
          "Drill mode bypasses the clutch and delivers full continuous torque, which is needed to drive a drill bit cleanly through material. Driver mode with a clutch is for screws.",
      },
      {
        id: "q5",
        question: "What is the purpose of a jigsaw's orbital action setting?",
        options: [
          "It controls the blade depth",
          "It adds a forward elliptical motion to the blade for faster cutting in wood",
          "It switches between cutting modes for metal and wood",
          "It adjusts the speed of the motor",
        ],
        correctIndex: 1,
        explanation:
          "Orbital action moves the blade in a slight forward ellipse on each stroke, clearing sawdust more aggressively and cutting faster in wood. Set it to 0 for curves, plastics, and fine work.",
      },
    ],
  },
  {
    id: "joinery-fundamentals",
    tradeId: "carpentry",
    title: "Joinery Fundamentals",
    level: 2,
    durationMinutes: 35,
    summary:
      "Learn the four fundamental woodworking joints: butt, dado, mortise & tenon, and dovetail. Understand when to use each, the cutting sequence, and how to fit joints for strength.",
    keyConcepts: [
      "Butt Joint",
      "Dado & Rebate",
      "Mortise & Tenon",
      "Dovetail Joint",
      "Glue & Clamp Up",
    ],
    steps: [
      {
        id: "s1",
        title: "Why Joint Choice Matters",
        body: "Every woodworking joint is a trade-off between strength, visibility, complexity, and time. A poorly chosen joint — such as a butt joint where a mortise & tenon was needed — will fail prematurely under load. The key variables are: the direction of the load (shear, tension, compression, racking), whether the joint will be glued or mechanical, and whether it will be visible in the finished piece. Understanding these variables before picking up a chisel saves hours of rework.",
        visualCue:
          "A diagram shows four boxes arranged by two axes: strength on the vertical axis and time-to-cut on the horizontal. Butt joint sits bottom-left; dovetail sits top-right; mortise & tenon and dado sit in between.",
      },
      {
        id: "s2",
        title: "Butt Joint — The Simplest Connection",
        body: "A butt joint is formed by gluing or fastening two square-cut members end-to-face or edge-to-edge. It is quick to make and adequate for light framing and carcass construction when reinforced with pocket screws, biscuits, or dowels. End grain absorbs glue like a sponge and provides poor glue surface — sizing the end grain (applying a thin diluted glue coat and letting it tack before assembly) significantly improves the bond. Without reinforcement, a butt joint has no mechanical resistance to racking.",
        visualCue:
          "Two boards meet at a corner: one shows an unsupported butt joint that pivots freely; the second has a pocket screw bridging the corner, locking it against racking movement.",
      },
      {
        id: "s3",
        title: "Dado & Rebate — Shelf and Carcass Joints",
        body: "A dado (or housing) is a trench cut across the grain into a board to receive the end of a shelf or partition. It provides mechanical support against vertical loads and prevents racking in cabinet carcasses. Mark the dado width precisely using the actual mating piece as a template — nominal size timber is rarely exactly nominal. Cut the sides with a saw and clear the waste with a router or sharp chisel. A stopped dado (ending before the board edge) hides the joint entirely from the front of the carcass.",
        visualCue:
          "A bookcase side panel shows a stopped dado cut into its face: the routed channel stops 12 mm from the front edge, so the shelf slides in from the back and the joint is invisible from the front.",
      },
      {
        id: "s4",
        title: "Mortise & Tenon — The Workhouse of Furniture",
        body: "The mortise & tenon has been the primary joint in furniture and timber framing for thousands of years. The mortise is a rectangular pocket cut into one member; the tenon is a reduced rectangular tongue on the end of the mating member. The tenon should be one-third the thickness of the rail in width, and should fit the mortise snugly — sliding in with hand pressure only. Haunched tenons (with a small shoulder at the top) are used at the top of a frame to fill the groove for a panel without weakening the joint.",
        visualCue:
          "The tenon slides into the mortise with a smooth, firm resistance — no lateral play, but not so tight it requires a mallet; the shoulders of the tenon sit perfectly flush against the mortised face.",
      },
      {
        id: "s5",
        title: "Cutting a Mortise & Tenon — Sequence",
        body: "Always cut the mortise first — it is harder to adjust and sets the reference dimension. Mark and chop the mortise to depth using a mortise chisel, working from the centre outward. Then mark the tenon using a marking gauge set from the actual mortise width. Saw the tenon cheeks with a tenon saw, cut the shoulders, and test the fit. Pare the cheeks with a shoulder plane or wide chisel for the final snug fit. Label mating pieces with a triangle so they always re-align the same way.",
        visualCue:
          "A completed mortise sits open on the bench beside its matching rail: the mortise chisel marks in the base show the systematic chopping sequence from centre outward, and the tenon shows fine plane tracks on its cheeks.",
      },
      {
        id: "s6",
        title: "Dovetail — Strength Through Geometry",
        body: "Dovetail joints resist pulling apart in one direction through their angled tails and pins — making them ideal for drawer fronts and carcass corners that experience constant tension. The standard dovetail ratio is 1:8 for hardwood (gentler angle) and 1:6 for softwood (steeper angle). Cut the tails first using a dovetail saw, then use the tails to directly scribe the pins — this ensures a perfect match regardless of slight variations in the tails. The joint is split into two operations: sawing the outside face lines and chopping the waste between the tails and pins.",
        visualCue:
          "The assembled drawer corner shows the interlocking tails and pins: viewed from above, the angled geometry makes it impossible to pull the joint apart along the drawer's depth axis.",
      },
      {
        id: "s7",
        title: "Glue-Up and Clamping Strategy",
        body: "Glue-up is the most stressful stage of furniture making — all the precise fitting must come together before the glue sets. Dry-clamp the whole assembly first to identify any problems and confirm clamp positions. Use PVA or hide glue applied in a thin, even coat to both mating surfaces. Position clamps perpendicular to the joint line and check for square using diagonal measurements — equal diagonals means the frame is square. Remove squeeze-out with a damp cloth immediately; dried glue prevents stain from penetrating evenly.",
        visualCue:
          "A chair frame sits in three bar clamps: one clamp per rail, each positioned directly over the mortise & tenon joint, with clamping cauls (wooden pads) protecting the surface from the metal jaws.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Why is end grain a poor glue surface in a butt joint?",
        options: [
          "End grain contains more resin that repels glue",
          "End grain fibres absorb glue like a sponge, starving the joint",
          "End grain surfaces are too smooth for glue adhesion",
          "Glue only bonds well with long-grain surfaces at angles",
        ],
        correctIndex: 1,
        explanation:
          "The open cells of end grain absorb glue before it can form a film bond, producing a glue-starved joint. Sizing (a diluted coat applied first and allowed to tack) solves this.",
      },
      {
        id: "q2",
        question:
          "What is the recommended tenon width relative to the rail thickness?",
        options: [
          "Half the rail thickness",
          "Two-thirds the rail thickness",
          "One-third the rail thickness",
          "Equal to the rail thickness",
        ],
        correctIndex: 2,
        explanation:
          "A tenon one-third the thickness of the rail leaves adequate shoulder material on both faces to resist racking, while keeping the mortise wall thick enough not to split.",
      },
      {
        id: "q3",
        question:
          "When cutting a mortise & tenon, which piece should you cut first?",
        options: [
          "The tenon — it sets the reference dimensions",
          "The mortise — it is harder to adjust and sets the reference",
          "Both simultaneously using a template",
          "It doesn't matter as long as both fit",
        ],
        correctIndex: 1,
        explanation:
          "Cut the mortise first. It is harder to adjust once cut. The tenon is then fitted to the mortise with a shoulder plane, making it easy to achieve a perfect snug fit.",
      },
      {
        id: "q4",
        question: "What dovetail ratio is standard for hardwood?",
        options: ["1:4", "1:6", "1:8", "1:12"],
        correctIndex: 2,
        explanation:
          "A 1:8 ratio (gentle slope) is standard for hardwood because the tight grain provides plenty of mechanical resistance with a shallower angle. Softwood uses a steeper 1:6 to compensate for its lower shear strength.",
      },
      {
        id: "q5",
        question:
          "How do you check a glued-up frame for square during clamping?",
        options: [
          "Use a combination square on each corner",
          "Sight down the frame from one end",
          "Measure diagonal distances — equal diagonals means square",
          "Check that all clamps are equally tight",
        ],
        correctIndex: 2,
        explanation:
          "Equal diagonal measurements (corner to corner) guarantee a square frame. A 90° square only checks one corner at a time and won't catch a parallelogram error.",
      },
    ],
  },
  {
    id: "project-planning-finishing",
    tradeId: "carpentry",
    title: "Project Planning & Finishing",
    level: 3,
    durationMinutes: 40,
    summary:
      "Turn a design idea into a finished piece: create accurate cutting lists, calculate material quantities, prepare surfaces through sanding, and apply professional stains, fillers, and topcoats.",
    keyConcepts: [
      "Cutting Lists",
      "Material Takeoffs",
      "Sanding Sequence",
      "Stains & Dyes",
      "Topcoat Application",
    ],
    steps: [
      {
        id: "s1",
        title: "Starting with a Dimensioned Drawing",
        body: "Every project begins on paper — or screen — before a single cut is made. A dimensioned drawing shows every component with three dimensions (length × width × thickness) and annotates the joinery at each connection. Even a rough hand sketch with accurate dimensions prevents costly mistakes. Draw the piece in two or three orthographic views (front, side, top) and mark the overall dimensions. Add a section view through any complex joinery area to show how the pieces nest together.",
        visualCue:
          "A workshop table shows an A3 sheet with three orthographic views of a small cabinet, each dimension marked in millimetres, with a circled section detail showing the dovetail corner joint.",
      },
      {
        id: "s2",
        title: "Building a Cutting List",
        body: "A cutting list is a spreadsheet or table that itemises every component: part name, quantity, finished length, finished width, finished thickness, and the material. Start with the finished sizes, then add material for machining allowance — typically 3 mm on each planed face and 5 mm on cut ends. Sort the list by material type and thickness to batch similar cuts together on the tablesaw. A well-built cutting list means you can walk through the entire project before buying a single board.",
        visualCue:
          "A cutting list spreadsheet shows columns for Part, Qty, L, W, T, Material, with each row colour-coded by timber species — all pine components yellow, all oak components brown.",
      },
      {
        id: "s3",
        title: "Material Takeoff — Buying the Right Amount",
        body: "A material takeoff calculates the total volume of timber required. Convert your cutting list to board-feet or lineal metres and add a 20% waste allowance for defects, miscuts, and optimisation losses. Sketch each component onto a scaled representation of a standard board to visualise yield — this reveals whether it's worth buying a wider board or a longer one. Remember that rough-sawn timber must be milled (jointed, thickened, ripped) before it reaches finished size, so add 6 mm to thickness for milling allowance.",
        visualCue:
          "A scaled board diagram shows component outlines nested like a puzzle — 8 components fit from one 2400 × 300 board with 18% waste; a less efficient layout of the same components shows 35% waste.",
      },
      {
        id: "s4",
        title: "Surface Preparation — The Sanding Sequence",
        body: "Finishing quality is determined entirely by surface preparation. Sand with the grain, never across it. Start at 80-grit if the surface has mill marks or tearout; begin at 120-grit on already-smooth surfaces. Progress through 120, 150, 180, and 220-grit, removing the scratches of the previous grit before moving on. Vacuum between grits and wipe with a tack cloth before the last grit. After 220-grit, raise the grain with a damp cloth, allow to dry, then sand lightly with 220-grit again before applying any water-based finish.",
        visualCue:
          "Four small test panels show the surface quality at 80, 120, 180, and 220 grit under raking light: coarse scratches visible at 80 give way to progressively finer scratches until the 220-grit panel reflects light uniformly.",
      },
      {
        id: "s5",
        title: "Stains and Dyes — Colour Before Topcoat",
        body: "Stains and dyes change the colour of timber before the clear topcoat is applied. Oil-based pigment stains penetrate and colour uniformly, ideal for pine which stains unevenly due to soft grain absorbing more than dense grain. Gel stains sit on the surface rather than penetrating — excellent for blotch-prone woods. Water-based dyes offer vivid colours and dry fast, but raise the grain. Always test on a scrap of the same timber from the same board — colour varies dramatically between species and even between boards of the same species. Apply with a lint-free rag and wipe off the excess within 3–5 minutes.",
        visualCue:
          "A pine test board shows three different stains side by side: the oil-based stain shows uneven colour following the grain; the gel stain shows even, consistent colour; the water-based dye shows vivid colour but raised grain texture.",
      },
      {
        id: "s6",
        title: "Topcoats — Protection and Sheen",
        body: "The topcoat seals, protects, and sets the final sheen of the piece. Polyurethane is the most durable option for heavy-wear surfaces (floors, tabletops) — oil-based versions are self-levelling and amber-toning; water-based versions dry clear and fast. Hardwax oil penetrates rather than sitting on the surface, giving a natural feel with good moisture resistance — it's ideal for furniture and is easy to spot-repair. Danish oil and tung oil are penetrating oils that produce a low-sheen, tactile finish with moderate protection. Apply thin coats, sand lightly between coats with 400-grit, and wipe dust before the final coat.",
        visualCue:
          "A cross-section diagram of a finished board shows three layers: the timber with stain penetrated into the surface fibres, a first topcoat layer filling the pores, and a second topcoat layer sitting above, creating a smooth continuous film.",
      },
      {
        id: "s7",
        title: "Application Technique and Common Mistakes",
        body: "Brush-apply topcoats with a good-quality synthetic bristle brush using long, even strokes — short strokes leave brush marks in the wet film. Maintain a wet edge by always blending into the previous stroke before it tacks. Work in a dust-free environment and keep a heat gun or hair dryer nearby to pop any bubbles in water-based finishes. Never shake a topcoat tin — roll it to avoid introducing bubbles. Common finishing failures: applying too thick (runs and sags), not sanding between coats (poor adhesion), and finishing in cold or humid conditions (slow dry, blush, fish-eye).",
        visualCue:
          "A flat tabletop receives a coat of water-based polyurethane with a 75 mm synthetic brush: the brush strokes run along the length of the table, each stroke overlapping the previous by 30%, maintaining a continuous wet edge.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why should you add a 20% waste allowance to your material takeoff?",
        options: [
          "To account for price increases at the timber yard",
          "For defects, miscuts, and optimisation losses during milling and cutting",
          "Because 20% of all timber is structurally unsound",
          "To have extra material for practice cuts",
        ],
        correctIndex: 1,
        explanation:
          "Defects (knots, splits, sapwood), short end offcuts that can't be used, and the inevitable miscut combine to consume 15–25% of purchased material in a typical project.",
      },
      {
        id: "q2",
        question:
          "What extra step is required before applying a water-based finish?",
        options: [
          "Apply a shellac barrier coat first",
          "Raise the grain with a damp cloth, let dry, and re-sand with 220-grit",
          "Heat the surface with a heat gun to open the pores",
          "Apply a coat of oil to seal the grain first",
        ],
        correctIndex: 1,
        explanation:
          "Water-based finishes raise the grain on first application. Pre-raising the grain with water and sanding it flat means the finish coat doesn't create a rough, pilled surface.",
      },
      {
        id: "q3",
        question:
          "Which topcoat is best suited for a high-wear dining table surface?",
        options: [
          "Danish oil — penetrating and tactile",
          "Shellac — fast-drying and repairable",
          "Oil-based polyurethane — hardest and most durable film",
          "Beeswax polish — food-safe and natural",
        ],
        correctIndex: 2,
        explanation:
          "Oil-based polyurethane forms the hardest and most abrasion-resistant film of the common wood finishes, making it the top choice for surfaces subject to daily use, heat, and moisture.",
      },
      {
        id: "q4",
        question:
          "What is the purpose of a gel stain on blotch-prone woods like pine?",
        options: [
          "It penetrates deeply to even out colour",
          "It sits on the surface rather than penetrating, producing even colour",
          "It seals the grain before a topcoat",
          "It raises the grain to improve adhesion",
        ],
        correctIndex: 1,
        explanation:
          "Because gel stain sits on the surface rather than penetrating unevenly into soft and hard grain zones, it produces a uniform colour on blotch-prone species like pine and cherry.",
      },
      {
        id: "q5",
        question:
          "In the sanding sequence, what should you do between changing grits?",
        options: [
          "Wet the surface to raise the grain",
          "Apply a thin coat of sealer",
          "Vacuum and wipe with a tack cloth to remove all sanding dust",
          "Sand in the opposite direction to the grain",
        ],
        correctIndex: 2,
        explanation:
          "Sanding dust from the previous grit acts as abrasive contamination. Vacuuming and using a tack cloth ensures you start each grit on a clean surface and can accurately assess whether the previous scratches have been removed.",
      },
    ],
  },
];
