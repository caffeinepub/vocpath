import type { TradeModule } from "./woodworkingContent";

export const metalworkingModules: TradeModule[] = [
  {
    id: "metalworking-properties-safety",
    tradeId: "metalworking",
    title: "Metal Properties & Safety",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn the fundamental properties of common metals, how to identify them, and the PPE and workshop safety practices required when working with metal.",
    keyConcepts: [
      "Ferrous vs Non-Ferrous Metals",
      "Hardness and Ductility",
      "PPE for Metal Work",
      "Fire and Grinder Safety",
      "Metal Identification",
    ],
    steps: [
      {
        id: "s1",
        title: "Ferrous vs Non-Ferrous Metals",
        body: "Ferrous metals contain iron and include mild steel, stainless steel, cast iron, and tool steel. They are generally magnetic, strong, and prone to rust when exposed to moisture without protective coatings. Non-ferrous metals — aluminium, copper, brass, bronze, and titanium — contain no iron, resist corrosion naturally, and are chosen where weight or conductivity matters. Understanding the difference helps you select the right cutting tools, welding process, and finishing treatment for each job. A simple magnet test separates ferrous from non-ferrous on the workshop floor in seconds.",
        visualCue:
          "Picture a workshop bench with two rows of metal offcuts: the left row (ferrous) shows dull grey mild steel, bright stainless, and dark cast iron — a magnet clings to each. The right row (non-ferrous) shows silver aluminium, orange copper, and yellow brass — the magnet slides off every one.",
      },
      {
        id: "s2",
        title: "Key Mechanical Properties",
        body: "Hardness describes a metal's resistance to scratching and indentation — tool steel is hard, aluminium is soft. Ductility describes how much a metal can be stretched or bent before fracturing — copper is highly ductile, cast iron is brittle. Tensile strength is the maximum pulling force a material can withstand before breaking. Toughness combines strength and ductility — a tough metal absorbs impact without cracking. Knowing these properties guides your choice of metal: a bracket needs toughness, a cutting blade needs hardness, and a deep-drawn bowl needs ductility.",
        visualCue:
          "Imagine four small metal bars in a testing display: the first stretches long and thin before snapping (ductile); the second shatters suddenly under load (brittle); the third resists a sharp indenter leaving barely a mark (hard); the fourth bends almost double without cracking (tough).",
      },
      {
        id: "s3",
        title: "Personal Protective Equipment",
        body: "Eye protection is the highest priority in a metalworking shop — grinding sparks, cutting chips, and coolant splashes all threaten eyesight. Wear safety glasses at all times on the shop floor, and a full-face shield when grinding. Hearing protection (earplugs or earmuffs rated above 25 dB) is mandatory near angle grinders, air compressors, and power hammers. Leather gloves protect against sharp edges and hot metal, but must never be worn near rotating machinery where they can catch and drag a hand in. Steel-capped boots, long cotton sleeves (not synthetic — synthetics melt), and no loose clothing complete the essential PPE set.",
        visualCue:
          "Picture a metalworker from head to toe: full-face shield flipped up to show safety glasses underneath, hearing protection around the neck, leather gloves tucked into the belt, steel-capped boots, and a close-fitting cotton work shirt with no loose cuffs.",
      },
      {
        id: "s4",
        title: "Fire Prevention and Grinder Safety",
        body: "Grinding and cutting produce showers of incandescent sparks that travel up to 3 metres and ignite flammable materials. Before grinding, clear the area of rags, oil, timber, and anything combustible. Keep a fire extinguisher — CO2 or dry powder — within 5 metres. Never use a cutting disc for grinding or a grinding disc for cutting — the wrong application causes catastrophic disc failure. Inspect every disc for cracks before mounting; a cracked disc can explode at operating speed. Always use the tool guard.",
        visualCue:
          "Visualise a danger zone diagram around an angle grinder: a 3-metre semicircle shaded red marks the spark trajectory zone. A CO2 extinguisher sits on its bracket inside the safe zone. A cracked cutting disc is shown with a red X compared to an intact disc with a green tick.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Which of the following is a ferrous metal?",
        options: ["Aluminium", "Copper", "Mild steel", "Brass"],
        correctIndex: 2,
        explanation:
          "Mild steel contains iron and is therefore ferrous. Aluminium, copper, and brass are all non-ferrous metals that contain no iron.",
      },
      {
        id: "q2",
        question:
          "What property describes how much a metal can be bent or stretched before fracturing?",
        options: ["Hardness", "Ductility", "Tensile strength", "Brittleness"],
        correctIndex: 1,
        explanation:
          "Ductility is the ability of a metal to deform plastically without fracturing. Highly ductile metals like copper can be drawn into wire or deep-pressed into shapes.",
      },
      {
        id: "q3",
        question:
          "Why should leather gloves NOT be worn near rotating machinery?",
        options: [
          "They reduce grip on the workpiece",
          "They can catch on rotating parts and drag the hand into the machine",
          "They are too thick for fine work",
          "They conduct electricity",
        ],
        correctIndex: 1,
        explanation:
          "Loose gloves can snag on rotating spindles, chucks, or drill bits and drag a hand into the machine before it can be released, causing severe injury.",
      },
      {
        id: "q4",
        question:
          "What should you check before mounting an angle grinder disc?",
        options: [
          "The disc RPM rating and inspect for cracks",
          "The disc colour",
          "The disc weight",
          "Whether the disc is magnetic",
        ],
        correctIndex: 0,
        explanation:
          "Always verify the disc's maximum RPM rating exceeds the tool's speed, and visually inspect for cracks. A cracked disc can explode at operating speed, causing serious injury.",
      },
    ],
  },
  {
    id: "metalworking-cutting-grinding",
    tradeId: "metalworking",
    title: "Cutting & Grinding Techniques",
    level: 2,
    durationMinutes: 25,
    summary:
      "Master the key methods for cutting and shaping metal including hacksaw, angle grinder, plasma cutter, and bench grinder, and understand when to use each.",
    keyConcepts: [
      "Hacksaw Technique",
      "Angle Grinder",
      "Plasma Cutting",
      "Bench Grinding",
      "Cutting Fluid",
    ],
    steps: [
      {
        id: "s1",
        title: "Hacksaw and Cold Saw",
        body: "The hacksaw remains the fundamental hand tool for cutting metal. Blade selection is critical: use 18 TPI (teeth per inch) for thick stock above 6 mm, 24 TPI for general work, and 32 TPI for thin-walled tube and sheet where fewer teeth would straddle the material and strip the cut. Apply cutting fluid to reduce heat and prolong blade life. The cold saw is a powered alternative using a circular blade rotating slowly with flood coolant — it produces a clean, burr-free cut with no heat discolouration and is faster and safer than angle grinder cutting for precision work.",
        visualCue:
          "Picture three hacksaw blades side by side labelled 18, 24, and 32 TPI. Below each, a cross-section of metal shows how many teeth span the material — the 18 TPI blade spans thick bar correctly; the 32 TPI blade spans thin tube wall with multiple teeth engaged.",
      },
      {
        id: "s2",
        title: "Angle Grinder — Cutting and Grinding",
        body: "The angle grinder is the most versatile and most dangerous tool in the metalworking shop. Cutting discs (thin, 1–1.6 mm) slice through steel quickly; grinding discs (thick, 6–8 mm) remove material and dress weld beads. Always use the correct disc for the task and never remove the guard. When cutting, let the disc do the work — applying excessive side pressure can cause the disc to bind and shatter. Flap discs (layered sandpaper segments) blend and finish welds and are safer than grinding discs for surface work because they cannot burst catastrophically.",
        visualCue:
          "Visualise three angle grinder disc types side by side: a thin cutting disc (1.2 mm, 'cutting only'), a thick grinding disc (6 mm, 'grinding only'), and a flap disc (layered sandpaper segments, 'finishing'). A red X marks using the cutting disc for sideways grinding.",
      },
      {
        id: "s3",
        title: "Plasma Cutting",
        body: "A plasma cutter passes an electrical arc through a gas (compressed air, nitrogen, or argon) which superheats it into plasma — a fourth state of matter above 20,000°C. The plasma jet melts through metal and the gas stream blows the molten material away, leaving a clean kerf. Plasma cutters cut any electrically conductive metal regardless of composition, making them ideal for stainless steel, aluminium, and mild steel without blade changes. The standoff distance (gap between nozzle and metal) is critical — too close and the nozzle contacts the arc; too far and the cut loses focus.",
        visualCue:
          "Picture a cross-section diagram of a plasma cutter nozzle: compressed air enters at the top, the electrical arc ionises it into a blue-white plasma column, and the jet exits at the bottom, melting cleanly through a steel plate — molten metal droplets spraying to the side.",
      },
      {
        id: "s4",
        title: "Bench Grinder and Cutting Fluid",
        body: "The pedestal bench grinder has two wheels: a coarse wheel (36–60 grit) for rapid material removal and a fine wheel (80–120 grit) for sharpening tools and finishing edges. Keep a water quench bucket beside the grinder — grinding heats small workpieces quickly, and repeated dipping prevents overheating and loss of hardness. This is especially important when sharpening tool steel drill bits. Cutting fluid dramatically extends tool life and improves cut quality across all metal cutting operations.",
        visualCue:
          "Imagine a bench grinder with two wheels: the left coarse wheel removing material from a rough bar, sparks flying. The right fine wheel sharpening a chisel edge. Beside the grinder, a small water bucket sits ready — the glowing chisel tip is plunged in, producing a hiss of steam.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which TPI hacksaw blade is best for cutting thin-walled tube?",
        options: ["18 TPI", "24 TPI", "32 TPI", "10 TPI"],
        correctIndex: 2,
        explanation:
          "32 TPI blades ensure multiple teeth engage thin-walled tube simultaneously. A coarser blade would straddle the thin wall with only one tooth, stripping the cut.",
      },
      {
        id: "q2",
        question:
          "What happens if you use a cutting disc for sideways grinding?",
        options: [
          "The disc wears faster than normal",
          "The disc can bind and shatter catastrophically",
          "The cut becomes less accurate",
          "The motor overheats",
        ],
        correctIndex: 1,
        explanation:
          "Thin cutting discs are not designed to handle lateral loads. Side pressure can cause the disc to crack and explode at high speed, causing serious injury.",
      },
      {
        id: "q3",
        question: "What is plasma in the context of plasma cutting?",
        options: [
          "A special cutting gas mixture",
          "Superheated gas ionised into a fourth state of matter above 20,000°C",
          "A flux compound that melts the metal surface",
          "A lubricant applied before cutting",
        ],
        correctIndex: 1,
        explanation:
          "Plasma is gas superheated by an electrical arc into a fourth state of matter. The intense temperature (above 20,000°C) melts any conductive metal instantly.",
      },
      {
        id: "q4",
        question:
          "Why should you quench a workpiece in water during bench grinding?",
        options: [
          "To clean metal filings from the surface",
          "To prevent overheating that can destroy the metal's hardness",
          "To test for surface cracks",
          "To remove grinding wheel residue",
        ],
        correctIndex: 1,
        explanation:
          "Grinding generates heat quickly in small workpieces. Overheating tool steel above its tempering temperature permanently reduces its hardness, ruining cutting edges.",
      },
    ],
  },
  {
    id: "metalworking-welding-fundamentals",
    tradeId: "metalworking",
    title: "Welding Fundamentals",
    level: 3,
    durationMinutes: 30,
    summary:
      "Understand the three main welding processes — MIG, TIG, and stick (SMAW) — how each works, when to use them, and the fundamentals of joint preparation and weld quality.",
    keyConcepts: [
      "MIG Welding",
      "TIG Welding",
      "Stick Welding",
      "Joint Preparation",
      "Weld Quality Assessment",
    ],
    steps: [
      {
        id: "s1",
        title: "MIG Welding (GMAW)",
        body: "Metal Inert Gas (MIG) welding feeds a continuous consumable wire electrode through the torch while a shielding gas (argon, CO2, or a mix) protects the molten weld pool from atmospheric contamination. MIG is fast, produces minimal slag, and is easy to learn, making it the dominant process for production welding of mild steel and aluminium. Wire diameter, voltage, wire feed speed, and travel speed all interact — changing one parameter requires adjusting the others to maintain a stable arc. The characteristic 'frying bacon' sound of a well-tuned MIG indicates correct voltage and wire speed balance.",
        visualCue:
          "Imagine a cutaway of a MIG torch: a copper tip feeds continuous wire down the centre, shielding gas flows around the outside from a diffuser ring, and the arc at the tip melts both the wire and the base metal into a shared pool that solidifies behind the moving torch.",
      },
      {
        id: "s2",
        title: "TIG Welding (GTAW)",
        body: "Tungsten Inert Gas (TIG) welding uses a non-consumable tungsten electrode to create the arc while filler wire is fed into the pool manually with the other hand. TIG produces the highest quality, most precise welds with excellent control over heat input — it is the process of choice for stainless steel, aluminium, titanium, and thin-gauge materials where MIG's heat input would cause distortion. The learning curve is steep: the welder must coordinate both hands plus a foot pedal controlling amperage while maintaining constant electrode-to-work distance. TIG welds are characterised by their stacked-dime appearance.",
        visualCue:
          "Picture two hands at work over a stainless steel joint: the right hand holds the TIG torch steady with the tungsten electrode 3 mm from the puddle, the left hand dips filler wire rhythmically into the leading edge of the pool. Behind the torch, a neat row of overlapping circles — the stacked-dime pattern — forms.",
      },
      {
        id: "s3",
        title: "Stick Welding (SMAW)",
        body: "Shielded Metal Arc Welding (SMAW), known as stick welding, uses a flux-coated consumable electrode. As the electrode melts, the flux coating vaporises to form shielding gas and a slag layer that covers and protects the cooling weld. Stick welding requires no external gas supply and works outdoors in windy conditions — it is the process of choice for structural and site welding. The electrode must be kept at a consistent travel angle (10–15° from vertical) and arc length approximately equal to the electrode diameter. Slag must be chipped and wire-brushed from each pass before laying the next bead.",
        visualCue:
          "Visualise a site welder in the field, no gas bottle in sight, striking an arc with a flux-coated electrode against a heavy steel beam. A grey slag shell forms over the glowing weld bead as it cools. The welder chips the brittle slag away with a chipping hammer to reveal the bright weld metal underneath.",
      },
      {
        id: "s4",
        title: "Joint Preparation and Weld Quality",
        body: "Clean metal is essential — grease, paint, rust, and mill scale all introduce hydrogen into the weld, causing porosity (small voids) and cracking. Grind or brush the weld zone to bright metal before starting. A consistent root gap allows full penetration; an inconsistent gap produces an intermittently fused weld that may look complete on the surface but lacks strength. Bevel the edges of material thicker than 6 mm to create a V-groove that allows the weld to penetrate fully. Visual inspection after welding checks for undercut, porosity, overlap, and incomplete fusion.",
        visualCue:
          "Imagine a cross-section through three weld joints: top shows a clean V-groove with full penetration — a good weld. Middle shows a butt joint with incomplete fusion halfway through — a dangerous hidden defect. Bottom shows undercut along the weld toes — a surface defect visible on inspection.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is the shielding gas used in TIG welding?",
        options: [
          "CO2",
          "Pure argon or argon-helium mix",
          "Oxygen",
          "Nitrogen",
        ],
        correctIndex: 1,
        explanation:
          "TIG welding uses pure argon or an argon-helium mix for shielding. These inert gases protect the weld pool without reacting with the molten metal.",
      },
      {
        id: "q2",
        question:
          "Why is stick (SMAW) welding preferred for outdoor site work?",
        options: [
          "It produces cleaner welds than MIG",
          "It requires no external shielding gas that wind can blow away",
          "It is faster than MIG welding",
          "It creates less spatter than other processes",
        ],
        correctIndex: 1,
        explanation:
          "Stick welding uses a flux-coated electrode that generates its own shielding gas as it burns, making it effective outdoors where wind disperses external gas supplies used by MIG.",
      },
      {
        id: "q3",
        question: "What is porosity in a weld?",
        options: [
          "A rough surface texture",
          "Small voids or gas pockets trapped in the weld metal",
          "Excess weld material on the surface",
          "A crack running along the weld centreline",
        ],
        correctIndex: 1,
        explanation:
          "Porosity is small gas pockets trapped in the solidifying weld metal, caused by contamination or incorrect shielding gas coverage. It reduces weld strength.",
      },
      {
        id: "q4",
        question:
          "Why are edges bevelled before welding material thicker than 6 mm?",
        options: [
          "To reduce the weight of the joint",
          "To create a V-groove that allows full weld penetration through the thickness",
          "To make cleaning easier",
          "To reduce weld spatter",
        ],
        correctIndex: 1,
        explanation:
          "Bevelling creates a V-groove joint that allows the welder to build up successive passes reaching the full thickness. Without bevelling, the root of a thick joint may not fuse.",
      },
    ],
  },
  {
    id: "metalworking-sheet-metal",
    tradeId: "metalworking",
    title: "Sheet Metal Fabrication",
    level: 4,
    durationMinutes: 30,
    summary:
      "Learn how to lay out, cut, and form sheet metal using hand tools and machines including folders, rolls, and press brakes, and understand bend allowance and flat pattern development.",
    keyConcepts: [
      "Flat Pattern Development",
      "Bend Allowance",
      "Folder and Press Brake",
      "Rolls and Rolling",
      "Riveting and Fastening",
    ],
    steps: [
      {
        id: "s1",
        title: "Flat Pattern Development and Layout",
        body: "Before cutting, every sheet metal component is planned as a flat pattern — the 2D shape that, when bent, produces the finished 3D form. Layout begins with scribing the flat pattern onto the sheet with a steel scriber and combination square. The flat pattern must account for the material thickness and radius at each bend — this additional length consumed at each bend is called the bend allowance. Failing to include bend allowance means the bent part will be undersized. Use chalk or marking blue (layout dye) on polished surfaces so scribe lines are clearly visible before cutting.",
        visualCue:
          "Picture a flat steel sheet with a flat pattern scribed on it in blue layout dye: dashed lines mark bend positions, solid lines mark cut edges. Arrows show which sections fold up to form the sides of a box — the flat pattern unfolds in your mind into the 3D shape it will become.",
      },
      {
        id: "s2",
        title: "Bending with a Folder and Press Brake",
        body: "A box and pan folder bends sheet metal by clamping the sheet under a top beam and lifting the apron to create the bend. The individual fingers of the top beam can be removed to allow bends near existing flanges. A press brake uses a V-shaped die below and a matching punch above — the punch presses the sheet into the die to a set depth creating a precise angle. Springback — the tendency of metal to partially return toward flat after bending — must be compensated for by over-bending slightly. The springback angle varies with material type and thickness.",
        visualCue:
          "Visualise a press brake in cross-section: a V-die sits in the bed, a pointed punch descends from above, a sheet of steel sits on the die. Arrows show the punch pressing the sheet into the V, bending it to 90°. A dotted outline shows the sheet's position before and after — offset by the springback compensation angle.",
      },
      {
        id: "s3",
        title: "Rolling Cylinders and Cones",
        body: "Three-roll and four-roll machines form sheet metal into curved shapes — cylinders, cones, and partial curves. Adjusting the position of the lower or side rolls changes the curve radius. Rolling requires multiple passes, gradually increasing the roll pressure on each pass until the desired radius is achieved. Starting with the edge of the sheet in the centre of the rolls produces a flat spot (pinch point) — prebend the leading edge using the press brake first to avoid this. Rolling cone sections requires angling the sheet progressively across the roll width.",
        visualCue:
          "Picture a three-roll bending machine: a sheet feeds in flat on the left and exits as a curved cylinder on the right. Arrows show the adjustable bottom roll pressing upward to increase curvature. A small flat spot at the sheet's leading edge is highlighted with a red circle — the result of not pre-bending the edge.",
      },
      {
        id: "s4",
        title: "Fastening Sheet Metal",
        body: "Sheet metal assemblies are joined by welding, riveting, screws, or adhesive bonding depending on the application. Pop rivets (blind rivets) are used where access to only one side of the joint is possible — the mandrel is pulled through the rivet body, expanding it and then snapping off flush. Solid rivets require bucking bar access from the rear and are used in aircraft and high-strength structural work. Self-tapping screws cut their own thread in sheet metal and are quick but less strong. Seam welding creates the strongest and most airtight joints for ductwork and enclosures.",
        visualCue:
          "Imagine a cross-section of a pop rivet being set: the rivet body sits in a pre-drilled hole through two sheets; the rivet tool pulls the mandrel upward, expanding the rivet tail into a mushroom shape that clamps the sheets together; the mandrel snaps off and falls away.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is bend allowance in sheet metal fabrication?",
        options: [
          "The minimum bend radius before cracking occurs",
          "The extra flat length consumed at each bend that must be included in the flat pattern",
          "The springback angle after releasing the bending force",
          "The thickness tolerance of the sheet",
        ],
        correctIndex: 1,
        explanation:
          "Bend allowance is the additional flat length of material consumed as it bends around the radius. Omitting it from the flat pattern calculation results in parts that are undersized after bending.",
      },
      {
        id: "q2",
        question: "What is springback in sheet metal bending?",
        options: [
          "The vibration of the sheet after releasing the bending force",
          "The tendency of metal to partially return toward flat after the bending force is removed",
          "The expansion of the sheet across its width during bending",
          "The noise produced by the press brake",
        ],
        correctIndex: 1,
        explanation:
          "Springback occurs because metal is elastic as well as plastic. After the bending force is released, the elastic portion of the deformation recovers, opening the angle slightly.",
      },
      {
        id: "q3",
        question:
          "How do you avoid a flat spot when rolling sheet metal into a cylinder?",
        options: [
          "Roll at maximum pressure in a single pass",
          "Prebend the leading edge with a press brake before rolling",
          "Start rolling from the centre of the sheet",
          "Use only a four-roll machine",
        ],
        correctIndex: 1,
        explanation:
          "Pre-bending the leading edge before placing it in the rolls prevents a flat pinch point at the start of the cylinder — the prebent edge already has the correct curvature when it enters the rolls.",
      },
      {
        id: "q4",
        question: "When would you use a pop (blind) rivet instead of welding?",
        options: [
          "When maximum joint strength is required",
          "When access to only one side of the joint is possible",
          "When joining thick plate above 10 mm",
          "When the joint must be airtight",
        ],
        correctIndex: 1,
        explanation:
          "Pop rivets are blind fasteners that can be set from one side only. They are ideal when the back of a joint is inaccessible — common in enclosed assemblies, panels, and ductwork.",
      },
    ],
  },
  {
    id: "metalworking-heat-treatment",
    tradeId: "metalworking",
    title: "Heat Treatment & Surface Finishing",
    level: 5,
    durationMinutes: 35,
    summary:
      "Understand how heat treatment processes — hardening, tempering, annealing, and case hardening — alter metal properties, and master protective coatings including painting, galvanising, and powder coating.",
    keyConcepts: [
      "Hardening and Quenching",
      "Tempering",
      "Annealing",
      "Case Hardening",
      "Protective Coatings",
    ],
    steps: [
      {
        id: "s1",
        title: "Hardening and Quenching",
        body: "Steel is hardened by heating it above its critical temperature (typically 760–900°C for common tool steels) until it glows a consistent bright cherry-orange, then rapidly quenching it in water, oil, or air depending on the steel grade. Rapid cooling locks iron carbides in a hard, brittle crystal structure called martensite. Water quench produces the most rapid cooling and highest hardness but risks cracking complex shapes. Oil quench is slower and safer for most tool steels. After hardening, steel is too brittle for most uses and must be tempered immediately.",
        visualCue:
          "Picture a tool steel bar glowing bright orange-red in a forge. It is withdrawn and plunged into an oil bath — wisps of smoke rise and the metal darkens rapidly. A cross-section diagram shows the atomic crystal structure transforming from austenite (open lattice) into tight martensite needles as the temperature drops.",
      },
      {
        id: "s2",
        title: "Tempering",
        body: "Fully hardened steel is extremely hard but brittle — it will shatter under impact. Tempering reheats the hardened steel to a lower temperature (150–350°C) to relieve internal stresses and convert some martensite back to tougher structures, trading hardness for toughness. Cutting tools (chisels, lathe tools) are tempered at 200–220°C. Springs and punches are tempered at 300–350°C for maximum toughness. Oxide colours visible on polished steel surface are a traditional guide: pale yellow (200°C) for cutting tools, blue (300°C) for springs.",
        visualCue:
          "Imagine a polished chisel laid on a hot plate: as temperature rises, a rainbow of oxide colours travels from the edge toward the spine — straw yellow at the edge (200°C), then brown, then purple, then blue (300°C). The chisel is quenched the moment the straw colour reaches the cutting edge.",
      },
      {
        id: "s3",
        title: "Annealing and Case Hardening",
        body: "Annealing is the reverse of hardening: heat the metal to its critical temperature, then cool it very slowly to produce a soft, stress-free structure ideal for machining and further forming. Case hardening creates a hard outer surface on an otherwise soft, tough core — ideal for gears, shafts, and cams that need surface hardness to resist wear but core toughness to resist impact. Carburising (packing the part in carbon-rich compound and heating for several hours) diffuses carbon into the surface layer; the part is then hardened and tempered normally.",
        visualCue:
          "Visualise a gear tooth cross-section: a thin dark outer shell (the hard case, approximately 0.5–1 mm deep) surrounds a lighter, tougher core. An arrow points to a surface crack stopping at the case-core boundary — the tough core absorbing the impact that would shatter a fully hardened tooth.",
      },
      {
        id: "s4",
        title: "Protective Surface Coatings",
        body: "Bare steel corrodes rapidly in moist environments. Paint systems — a zinc-phosphate primer followed by an enamel or polyurethane topcoat — provide economical protection for most structural metalwork. Hot-dip galvanising immerses the prepared steel in molten zinc at 450°C, forming a metallurgically bonded zinc-iron alloy coating that protects by both barrier and sacrificial (cathodic) action — zinc corrodes preferentially, protecting the underlying steel even where the coating is scratched. Powder coating applies a thermosetting polymer electrostatically then cures it in an oven at 180–200°C, producing a harder and more durable finish than liquid paint.",
        visualCue:
          "Picture three identical steel brackets side by side after 12 months outdoors: the unpainted bracket is orange with rust. The painted bracket shows rust creeping from a scratch. The hot-dip galvanised bracket is unchanged — dull grey, with no rust even at an edge nick — demonstrating the sacrificial protection of zinc.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What crystal structure forms when steel is rapidly quenched from its critical temperature?",
        options: ["Austenite", "Ferrite", "Martensite", "Cementite"],
        correctIndex: 2,
        explanation:
          "Rapid quenching traps carbon in a distorted crystal structure called martensite, which is very hard and brittle. This is the desired structure for cutting tools and wear-resistant surfaces.",
      },
      {
        id: "q2",
        question:
          "A spring requires maximum toughness. At what temperature is it typically tempered?",
        options: ["150°C", "200°C", "250°C", "300–350°C"],
        correctIndex: 3,
        explanation:
          "Springs and punches are tempered at 300–350°C (shown by a blue oxide colour) to maximise toughness. Cutting tools need higher hardness and are tempered at lower temperatures.",
      },
      {
        id: "q3",
        question: "What is the purpose of annealing metal?",
        options: [
          "To increase surface hardness",
          "To maximise tensile strength",
          "To soften and relieve internal stresses for machining or further forming",
          "To create a hard outer case on a tough core",
        ],
        correctIndex: 2,
        explanation:
          "Annealing uses slow cooling from the critical temperature to produce a soft, stress-free structure. It restores ductility to work-hardened metal and prepares steel for machining.",
      },
      {
        id: "q4",
        question:
          "How does hot-dip galvanising protect steel even when the coating is scratched?",
        options: [
          "The zinc melts and reflows to cover the scratch",
          "Zinc corrodes sacrificially, protecting the surrounding steel cathodically",
          "The zinc-iron alloy layer is too hard to scratch",
          "The thick coating prevents moisture reaching the scratch",
        ],
        correctIndex: 1,
        explanation:
          "Zinc is more electrochemically active than iron. When both are exposed at a scratch, zinc corrodes preferentially (sacrificially), protecting the steel nearby — this is cathodic protection.",
      },
    ],
  },
];
