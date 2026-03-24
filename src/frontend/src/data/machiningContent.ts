import type { TradeModule } from "./woodworkingContent";

export const machiningModules: TradeModule[] = [
  {
    id: "machining-safety-measurement",
    tradeId: "machining",
    title: "Workshop Safety & Measurement",
    level: 1,
    durationMinutes: 20,
    summary:
      "Establish safe working practices in a machining workshop and master precision measurement tools including vernier calipers, micrometers, and dial indicators.",
    keyConcepts: [
      "Machine Shop Safety",
      "Vernier Caliper",
      "Micrometer",
      "Dial Indicator",
      "Tolerance and Fit",
    ],
    steps: [
      {
        id: "s1",
        title: "Machine Shop Safety Rules",
        body: "Rotating machinery is unforgiving — a lathe spindle at 500 RPM can snatch a loose sleeve or long hair and drag a limb into the machine before a person can react. The three absolutes: never wear loose clothing or jewellery near rotating machines, never leave a chuck key in the chuck, and never reach over a rotating workpiece. All machine guards must be in place before starting. Chips and swarf are razor-sharp — never brush them by hand; use a hook or brush tool. Keep the floor around machines dry and clear of swarf — slip hazards are common in machine shops.",
        visualCue:
          "Picture a lathe with a rotating chuck at the left: a red zone surrounds the chuck face extending 300 mm — no hands, no tools, no loose material in this zone while running. A chuck key left in the chuck is highlighted with a red X; beside it, a key safely hanging on its dedicated hook shows a green tick.",
      },
      {
        id: "s2",
        title: "Vernier Calipers",
        body: "The vernier caliper measures outside dimensions, inside dimensions, and depth to a resolution of 0.02 mm. The main scale gives the whole millimetre reading; the vernier scale subdivides the last millimetre into 50 equal divisions of 0.02 mm each. To read the measurement, find where the zero of the vernier scale falls on the main scale, then find which vernier line aligns exactly with a main scale line. Digital calipers display the reading directly and eliminate reading errors, but understanding the vernier principle teaches precision thinking.",
        visualCue:
          "Imagine a close-up of vernier caliper scales: the main scale reads 23 mm at the vernier zero. The 7th vernier line (0.14 mm) aligns exactly with a main scale line. Total reading: 23.14 mm. A digital caliper beside it displays 23.14 on an LCD screen.",
      },
      {
        id: "s3",
        title: "Micrometers",
        body: "A micrometer measures to 0.01 mm using a precisely ground screw with a 0.5 mm thread pitch. One full rotation of the thimble advances the spindle 0.5 mm; the thimble's circumference is divided into 50 graduations of 0.01 mm each. Read the sleeve scale (whole and half millimetres), then add the thimble scale. The ratchet stop ensures consistent measuring force — always use the ratchet to close the micrometer on the workpiece, never the thimble directly, or inconsistent pressure will change the reading.",
        visualCue:
          "Visualise a micrometer measuring a round bar: the sleeve shows 12.5 mm. The thimble edge stops at the 37th graduation (0.37 mm). Total reading: 12.87 mm. An exploded view labels the anvil, spindle, sleeve, thimble, and ratchet stop.",
      },
      {
        id: "s4",
        title: "Tolerance and Fit",
        body: "No machined part can be made to an exact dimension — every part is made to a tolerance, a permitted range of variation around the nominal size. A tolerance of ±0.05 mm on a 25 mm diameter shaft means any diameter between 24.95 and 25.05 mm is acceptable. Clearance fit leaves a gap (shaft smaller than hole — for free rotation). Interference fit has the shaft larger than the hole (requiring press or shrink fitting — for permanent assembly). Transition fit may be either, depending on where within tolerance each part falls.",
        visualCue:
          "Picture three shaft-in-hole cross-sections side by side: left shows clearance fit with a visible gap. Centre shows transition fit — shaft and hole nearly the same size. Right shows interference fit — shaft fractionally larger than the hole, shown by overlapping outlines and a press arrow.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the most dangerous hazard of leaving a chuck key in the lathe chuck?",
        options: [
          "It may damage the chuck jaws",
          "It will fly out and become a projectile when the spindle starts, causing serious injury",
          "It prevents accurate workpiece location",
          "It causes the chuck to become unbalanced",
        ],
        correctIndex: 1,
        explanation:
          "A chuck key left in the chuck will be thrown out at high speed when the spindle starts, becoming a dangerous projectile. Always remove the chuck key immediately after use.",
      },
      {
        id: "q2",
        question:
          "On a vernier caliper with 0.02 mm resolution, if the 7th vernier line aligns and the main scale reads 15 mm, what is the measurement?",
        options: ["15.07 mm", "15.14 mm", "15.70 mm", "15.02 mm"],
        correctIndex: 1,
        explanation:
          "The 7th vernier line represents 7 × 0.02 mm = 0.14 mm. Added to 15 mm from the main scale, the total reading is 15.14 mm.",
      },
      {
        id: "q3",
        question:
          "Why must you use the ratchet stop when closing a micrometer on a workpiece?",
        options: [
          "To prevent the micrometer frame from flexing",
          "To ensure consistent measuring force and prevent false readings from over-tightening",
          "To zero the micrometer before measuring",
          "To lock the reading for later recording",
        ],
        correctIndex: 1,
        explanation:
          "The ratchet stop applies a consistent, pre-set measuring force each time. Using the thimble directly allows variable clamping pressure that changes the reading.",
      },
      {
        id: "q4",
        question:
          "What type of fit is required when a shaft must rotate freely inside a bearing?",
        options: [
          "Interference fit",
          "Transition fit",
          "Clearance fit",
          "Press fit",
        ],
        correctIndex: 2,
        explanation:
          "A clearance fit ensures the shaft is always smaller than the bearing bore, leaving a small gap for lubrication and allowing free rotation without binding.",
      },
    ],
  },
  {
    id: "machining-lathe-operations",
    tradeId: "machining",
    title: "Lathe Operations",
    level: 2,
    durationMinutes: 25,
    summary:
      "Learn the fundamentals of lathe turning including workholding, facing, parallel turning, step turning, taper turning, and parting off.",
    keyConcepts: [
      "Workholding",
      "Facing",
      "Parallel Turning",
      "Step Turning",
      "Parting Off",
    ],
    steps: [
      {
        id: "s1",
        title: "Lathe Anatomy and Workholding",
        body: "The centre lathe consists of a headstock (containing the spindle and gearbox), a bed (the precision-ground guideway), a carriage (which carries the cutting tool), and a tailstock (which supports the far end of long workpieces). The three-jaw self-centring chuck automatically grips round or hexagonal bar to within 0.1–0.3 mm of centre. The four-jaw independent chuck can be dialled to under 0.01 mm concentricity using a dial indicator, making it essential for off-centre work. Between-centres turning uses dead or live centres in both headstock and tailstock for accurate shafts.",
        visualCue:
          "Picture a centre lathe from the side: headstock on the left with a three-jaw chuck gripping a round bar, the carriage and tool post in the middle with a tool cutting the bar surface, and the tailstock on the right with a live centre supporting the bar end. Labels point to each major component.",
      },
      {
        id: "s2",
        title: "Facing and Parallel Turning",
        body: "Facing produces a flat, square end on a workpiece by traversing the tool across the face from outer diameter toward the centre. Parallel turning reduces the diameter by traversing the tool along the bed with the cross-slide locked. Take rough cuts of 2–3 mm depth with high feed rates, then finish with a 0.1–0.3 mm depth cut and slow feed to achieve the target diameter and surface finish. Always use the correct spindle speed for the material and tool type.",
        visualCue:
          "Visualise two operations on the same bar: top diagram shows a facing tool moving across the end face, producing a flat surface. Bottom diagram shows a turning tool traversing along the length, peeling a 2 mm layer from the outside diameter.",
      },
      {
        id: "s3",
        title: "Step Turning and Shoulders",
        body: "Step turning produces a shaft with two or more different diameters — a common requirement for shafts that fit bearings at one diameter and gears at another. Turn the larger diameter section first, then reposition the carriage stop and turn the smaller section. The shoulder must be square to the axis — use a facing cut to achieve this. Undercuts — a small groove at the base of the shoulder — provide clearance for a mating part to seat fully without riding on the corner radius of the turning tool.",
        visualCue:
          "Picture a stepped shaft from the side: a large diameter on the left transitions to a smaller diameter on the right at a crisp square shoulder. At the base of the shoulder, a narrow undercut groove is visible — the diagram shows a mating collar seated flush against the shoulder because the undercut removes the corner.",
      },
      {
        id: "s4",
        title: "Taper Turning and Parting Off",
        body: "Tapers are turned by offsetting the tailstock laterally for gentle tapers on long workpieces, or by swivelling the compound slide for short steep tapers like Morse tapers. Parting off uses a narrow parting tool fed straight into the workpiece at the required length. Use slow spindle speed and high cutting fluid flow — the tool digs a deep narrow slot and is prone to chatter or breakage if spindle speed is too high or the tool is not perfectly on centre height.",
        visualCue:
          "Visualise two operations: left shows a tailstock shifted 3 mm to one side creating a long gentle taper. Right shows a narrow parting blade cutting straight into a bar from above, nearly through — the finished part about to drop free.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the advantage of a four-jaw independent chuck over a three-jaw self-centring chuck?",
        options: [
          "It is faster to use for round bar",
          "It can achieve much greater concentricity and grip non-round workpieces",
          "It holds larger diameter workpieces",
          "It does not require a chuck key",
        ],
        correctIndex: 1,
        explanation:
          "Each jaw of a four-jaw chuck moves independently, allowing the workpiece to be precisely dialled to centre using a dial indicator. It can also grip square, rectangular, and irregular workpieces.",
      },
      {
        id: "q2",
        question:
          "What is the purpose of an undercut at the base of a lathe-turned shoulder?",
        options: [
          "To reduce the stress concentration at the corner",
          "To allow a mating part to seat fully against the shoulder without riding on the corner radius",
          "To indicate the shoulder position during inspection",
          "To increase the surface area for welding",
        ],
        correctIndex: 1,
        explanation:
          "The turning tool always leaves a small radius at an inside corner. An undercut removes this radius, allowing a mating part with a sharp corner to seat perfectly flush against the shoulder.",
      },
      {
        id: "q3",
        question:
          "How is a long gentle taper produced on a lathe without a taper attachment?",
        options: [
          "By swivelling the compound slide",
          "By offsetting the tailstock laterally so the workpiece axis is no longer parallel to the bed",
          "By using a chamfering tool",
          "By programming the CNC controller",
        ],
        correctIndex: 1,
        explanation:
          "Offsetting the tailstock moves the far end of the workpiece off-axis. As the carriage traverses the bed, the tool cuts more deeply at one end than the other, producing a gentle taper.",
      },
      {
        id: "q4",
        question: "Why is slow spindle speed important when parting off?",
        options: [
          "High speed causes the parting tool to weld to the workpiece",
          "High speed causes chatter and parting tool breakage in the narrow slot",
          "Slow speed improves surface finish on the parted face",
          "High speed causes the chuck to loosen",
        ],
        correctIndex: 1,
        explanation:
          "The parting tool works in a narrow deep slot with limited chip clearance. High spindle speed causes vibration (chatter) that can break the thin parting tool or seize it in the groove.",
      },
    ],
  },
  {
    id: "machining-milling-fundamentals",
    tradeId: "machining",
    title: "Milling Machine Fundamentals",
    level: 3,
    durationMinutes: 30,
    summary:
      "Learn vertical milling machine operation including workholding, face milling, end milling, slotting, and the essential concepts of climb versus conventional milling.",
    keyConcepts: [
      "Milling Vise",
      "Face Milling",
      "End Milling",
      "Climb vs Conventional Milling",
      "Cutting Speed and Feed",
    ],
    steps: [
      {
        id: "s1",
        title: "Milling Machine Setup and Workholding",
        body: "The vertical milling machine has a vertical spindle that drives rotating cutters. The workpiece is clamped in a precision milling vise bolted to the table, which moves in X, Y, and Z axes. Before clamping, clean all mating surfaces — a single chip under the vise introduces tilt that ruins the job. Use a dial indicator on the spindle to check the fixed jaw is parallel to the X-axis within 0.02 mm. Clamp the workpiece against the fixed jaw and tap it firmly down onto the vise parallels with a soft mallet while tightening to eliminate any lift.",
        visualCue:
          "Picture a milling vise on the machine table viewed from above: a dial indicator on the spindle sweeps along the fixed jaw face as the table traverses, reading +0.01 to -0.01 over 200 mm — within tolerance. A workpiece is shown seated on yellow parallels inside the vise jaw.",
      },
      {
        id: "s2",
        title: "Face Milling",
        body: "Face milling uses a face mill cutter (a disc with multiple indexable carbide inserts) to produce a flat surface across the top of a workpiece. The cutter diameter should be 20–30% larger than the workpiece width so each pass covers the full width without creating a centre step. Set depth of cut (typically 0.5–2 mm for roughing, 0.1–0.3 mm for finishing), select the correct spindle speed for the cutter diameter and material, and feed the table at a consistent rate.",
        visualCue:
          "Visualise a face mill cutter from above: its four carbide inserts orbit the spindle axis in a circle wider than the steel workpiece below. As the table feeds, the cutter sweeps overlapping circular arcs across the surface, leaving a fine cross-hatched finish.",
      },
      {
        id: "s3",
        title: "End Milling — Slots, Pockets, and Profiles",
        body: "An end mill cuts slots, pockets, and profiles using teeth on both its end face and sides. When cutting a full-width slot, the end mill diameter should match the slot width — run a roughing pass 0.5 mm undersize on each wall then a finishing pass. Ramp into a pocket rather than plunging straight down — end mills have limited centre-cutting ability and a straight plunge generates extreme heat and dulls the centre teeth rapidly. Ramp at 2–5° into the pocket floor.",
        visualCue:
          "Picture an end mill entering a rectangular pocket in a steel block: instead of plunging straight down, the cutter spirals downward at a shallow ramp angle, moving in an ever-tightening rectangle as it descends — heat and chip load distributed over many teeth simultaneously.",
      },
      {
        id: "s4",
        title: "Climb vs Conventional Milling",
        body: "In conventional milling, the cutter rotates against the direction of table feed — each tooth starts with zero chip thickness and exits with maximum. In climb milling, the cutter rotates with the feed direction — each tooth bites at maximum chip thickness and exits with zero. Climb milling produces better surface finish and longer tool life, but requires a rigid machine without leadscrew backlash. On older manual machines, use conventional milling; use climb milling on CNC machines with ballscrew drives.",
        visualCue:
          "Imagine two diagrams side by side: left (conventional) shows cutter rotating counterclockwise, table feeding left — tooth chips grow thin to thick, lifting force arrow pointing up. Right (climb) shows cutter rotating counterclockwise, table feeding right — chips grow thick to thin, downward force pressing workpiece into the table.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "When setting up a milling vise, against which jaw should the workpiece be clamped?",
        options: [
          "The moving jaw, to maximise clamping force",
          "The fixed jaw, to ensure the workpiece is located accurately",
          "Either jaw — it makes no difference",
          "Neither — the workpiece should be centred between them",
        ],
        correctIndex: 1,
        explanation:
          "Clamping against the fixed jaw ensures the workpiece is registered to the jaw that was indicated parallel to the machine axis. The moving jaw can introduce slight misalignment as it tightens.",
      },
      {
        id: "q2",
        question:
          "Why should a face mill cutter diameter be 20–30% larger than the workpiece width?",
        options: [
          "To reduce the number of passes required",
          "To ensure each pass covers the full width without leaving a step at the centre",
          "To reduce spindle speed requirements",
          "To prevent cutter vibration",
        ],
        correctIndex: 1,
        explanation:
          "If the cutter is exactly the same width as the workpiece, the centreline aligns with the workpiece edge and leaves a raised step. Oversizing ensures the full width is covered in a single clean pass.",
      },
      {
        id: "q3",
        question:
          "Why should you ramp into a pocket rather than plunge straight down with an end mill?",
        options: [
          "To achieve a cleaner pocket floor finish",
          "End mills have limited centre-cutting ability and straight plunging concentrates heat and load on the centre teeth",
          "To reduce the required spindle speed",
          "To prevent the end mill from pulling out of the collet",
        ],
        correctIndex: 1,
        explanation:
          "Most end mills are not centre-cutting. The teeth at the very centre have zero cutting velocity. Ramping distributes the chip load across peripheral teeth where cutting speed is highest.",
      },
      {
        id: "q4",
        question:
          "Why is climb milling risky on older manual milling machines?",
        options: [
          "Climb milling produces excessive heat in older machines",
          "Leadscrew backlash allows the table to self-feed forward unpredictably, causing dig-in",
          "Older machines cannot run at the speeds required",
          "Climb milling reverses the spindle direction",
        ],
        correctIndex: 1,
        explanation:
          "Climb milling pulls the workpiece in the feed direction. If the leadscrew has backlash, this pull closes the gap and the table lurches forward uncontrollably, digging the cutter deep into the workpiece.",
      },
    ],
  },
  {
    id: "machining-drilling-boring",
    tradeId: "machining",
    title: "Drilling & Boring Operations",
    level: 4,
    durationMinutes: 30,
    summary:
      "Master precision hole-making including centre drilling, twist drilling, reaming, countersinking, counterboring, and single-point boring for accurate hole location and size.",
    keyConcepts: [
      "Centre Drilling",
      "Twist Drill Geometry",
      "Reaming",
      "Boring",
      "Hole Tolerances",
    ],
    steps: [
      {
        id: "s1",
        title: "Centre Drilling and Drill Point Geometry",
        body: "A twist drill wanders at the start of a cut because its chisel edge — the non-cutting centre section at the drill tip — cannot locate itself against a flat surface. A centre drill is used first: its short rigid body creates a conical seat that guides the following drill accurately on location. The drill point angle is 118° for general-purpose HSS drills on steel; 135° split-point geometry reduces thrust and wander on hard materials. The flute helix angle controls chip evacuation — low helix for brass (prevents snatching), high helix for aluminium (rapid chip removal).",
        visualCue:
          "Picture a drill tip cross-section: the central chisel edge is labelled as the non-cutting zone. A centre drill creates a conical dimple first; the twist drill's point sits perfectly in the dimple — no wander possible. Drill point angles of 118° and 135° are shown side by side.",
      },
      {
        id: "s2",
        title: "Drilling Speeds, Feeds, and Coolant",
        body: "Cutting speed is the primary parameter — a 10 mm HSS drill in mild steel should run at about 30 m/min surface speed, equating to roughly 1000 RPM. A 20 mm drill in the same material runs at 500 RPM for the same surface speed. Too fast causes the drill to overheat and fail quickly. Too slow work-hardens the material. Feed rate determines chip thickness — too light a feed causes the drill to rub rather than cut. Apply cutting fluid continuously when drilling steel, especially during peck drilling to clear chips from deep holes.",
        visualCue:
          "Visualise two steel blocks: left shows a correctly set drill — bright curled chips flowing up the flutes, clean hole entry. Right shows an overheated drill — discoloured blue chips, smoke, and a rough hole surface indicating too fast with insufficient coolant.",
      },
      {
        id: "s3",
        title: "Reaming for Precision Holes",
        body: "A reamer enlarges and finishes a drilled hole to a precise size and surface finish. Drilled holes are consistently undersize and rough — a 10 mm drill produces a hole closer to 10.1–10.2 mm. To ream accurately, drill 0.2–0.3 mm undersize then ream to final size. Use slow speed (half the drilling speed) and high feed — reamers work best when pushed firmly. Never rotate a reamer backward — reverse rotation rolls the cutting edges over chips and blunts them instantly. Reamers produce holes within H7 tolerance class (approximately ±0.02 mm on 10 mm diameter).",
        visualCue:
          "Imagine a cross-section comparison of drilled and reamed holes at 20× magnification: the drilled hole surface is rough with spiral marks at 9.85 mm; the reamed hole is smooth and parallel at exactly 10.00 mm.",
      },
      {
        id: "s4",
        title: "Single-Point Boring",
        body: "Boring uses a single-point cutting tool mounted in a boring bar to enlarge an existing hole to a precise diameter. Unlike drilling and reaming, boring corrects hole location errors: the boring bar follows the machine spindle axis regardless of where the drilled hole landed. This makes boring the only reliable method to achieve both accurate size and accurate position. The boring bar is set to the required radius using a micrometer adjustment on the boring head, and the hole is opened in successive passes.",
        visualCue:
          "Picture a boring head mounted in a milling machine spindle: a single carbide insert extends to one side of the boring bar axis, tracing a precise circle as the spindle rotates. A micrometer dial on the boring head adjusts the insert radially in 0.01 mm increments.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why is a centre drill or spot drill used before twist drilling?",
        options: [
          "To create a countersink for screw heads",
          "To create a conical seat that guides the twist drill and prevents wandering",
          "To remove surface scale before drilling",
          "To test the material hardness",
        ],
        correctIndex: 1,
        explanation:
          "The twist drill's chisel edge cannot self-locate on a flat surface and causes hole wander. A centre drill creates a precise conical recess that guides the drill point exactly on location.",
      },
      {
        id: "q2",
        question:
          "For a 20 mm HSS drill in mild steel at 30 m/min cutting speed, what spindle speed is required?",
        options: ["250 RPM", "500 RPM", "1000 RPM", "1500 RPM"],
        correctIndex: 1,
        explanation:
          "RPM = (1000 × cutting speed) / (π × diameter) = (1000 × 30) / (3.14 × 20) ≈ 477 RPM, rounded to 500 RPM in practice.",
      },
      {
        id: "q3",
        question: "Why should a reamer never be rotated backwards?",
        options: [
          "Reverse rotation causes the reamer to unscrew from the arbor",
          "Reverse rotation rolls cutting edges over chips, instantly blunting the teeth",
          "Reverse rotation creates out-of-round holes",
          "Reverse rotation introduces chatter marks",
        ],
        correctIndex: 1,
        explanation:
          "Rotating a reamer backward drags its cutting edges over chips left in the flutes. This rolls the sharp edges over and blunts them immediately, ruining the tool.",
      },
      {
        id: "q4",
        question:
          "What is the unique advantage of boring over reaming for finishing a hole?",
        options: [
          "Boring is faster than reaming",
          "Boring corrects hole location errors because the boring bar follows the spindle axis",
          "Boring produces a better surface finish than reaming",
          "Boring can be done without pre-drilling",
        ],
        correctIndex: 1,
        explanation:
          "Boring follows the machine spindle axis regardless of where the original drilled hole landed. This corrects positional errors that reaming cannot fix — a reamer follows the existing hole centre.",
      },
    ],
  },
  {
    id: "machining-cnc-basics",
    tradeId: "machining",
    title: "CNC Programming Basics",
    level: 5,
    durationMinutes: 35,
    summary:
      "Understand how CNC machines work, how G-code programs are structured, coordinate systems, tool offsets, and canned cycles for turning and milling operations.",
    keyConcepts: [
      "G-Code Structure",
      "Coordinate Systems",
      "Tool Offsets",
      "Canned Cycles",
      "Program Verification",
    ],
    steps: [
      {
        id: "s1",
        title: "How CNC Machines Work",
        body: "A CNC machine follows a program of numerical instructions — G-code — to move cutting tools along precise paths. Servomotors drive each axis via precision ballscrews, and encoders report actual axis position to the control unit thousands of times per second. Modern CNC controls can interpolate simultaneous motion on 3, 4, or 5 axes, allowing complex 3D surfaces to be machined in a single setup. Positioning accuracy is typically ±0.005 mm or better. CNC machines are programmed by writing G-code directly or using CAM software that generates G-code automatically from a 3D model.",
        visualCue:
          "Visualise a CNC machining centre from above: three axes — X, Y, and Z — are labelled with arrows. A ballscrew is highlighted on the X-axis with a servomotor at one end and an encoder at the other. The control screen displays axis position readouts updating in real time.",
      },
      {
        id: "s2",
        title: "G-Code Structure and Key Commands",
        body: "G-code programs consist of blocks (lines), each containing address letters followed by numbers. G00 is rapid positioning (no cutting); G01 is linear cutting feed; G02 and G03 are clockwise and counterclockwise circular interpolation. F specifies feed rate (mm/min), S specifies spindle speed (RPM), and T selects the tool. A simple turning pass: G01 X25.0 Z-50.0 F0.15 — move linearly to X25.0 mm diameter at Z-50.0 mm with feed 0.15 mm/rev. M-codes: M03 starts the spindle clockwise, M08 turns coolant on, M30 ends the program.",
        visualCue:
          "Picture a G-code block on a screen: 'N0050 G01 X25.000 Z-50.000 F0.150' with each element labelled — block number, linear feed command, target diameter, axial position, and feed rate. A tool path preview below shows the corresponding cut on a turning simulation.",
      },
      {
        id: "s3",
        title: "Coordinate Systems and Work Offsets",
        body: "Every CNC program references a work coordinate system (WCS) — a datum point on the workpiece from which all program dimensions are measured. On a CNC lathe, Z-axis zero is typically at the finished workpiece face; on a CNC mill, X0 Y0 is usually a corner of the part. The work offset (G54–G59) stores the WCS position relative to machine home. An error of 1 mm in the Z offset means every feature is cut 1 mm in the wrong position. Tool length offsets store each tool's length so the control knows where the tool tip is.",
        visualCue:
          "Imagine a CNC milling machine table with a rectangular workpiece in the vise: a 3D axis symbol sits at the front-left corner (work zero). Dimension lines extend to machined features exactly as on the engineering drawing. The machine home is shown in the table corner, far from the part, with the offset distance labelled.",
      },
      {
        id: "s4",
        title: "Canned Cycles and Program Verification",
        body: "Canned cycles are pre-programmed subroutines for repetitive operations. G81 is a simple drilling cycle; G83 is peck drilling (incremental depth retraction to clear chips); G84 is tapping. Instead of programming each move individually, a canned cycle is called once with the required parameters and repeated across multiple positions automatically. Before running any new program at full speed, verify it using dry run (no coolant, spindle off) and single-block modes to step through each line. Never trust a new program to run unattended until it has been verified cutting correctly.",
        visualCue:
          "Picture a CNC control screen with a hole pattern display: six equally-spaced holes on a bolt circle shown in the tool path preview. A single G83 peck drilling canned cycle call appears in the code with hole coordinates listed beneath — six holes programmed in six lines instead of thirty.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What does the G-code command G00 specify?",
        options: [
          "Linear cutting feed",
          "Rapid positioning at maximum speed (non-cutting move)",
          "Clockwise circular interpolation",
          "End of program",
        ],
        correctIndex: 1,
        explanation:
          "G00 commands rapid positioning — the fastest available axis movement used for non-cutting traverses between features. It should never be used for cutting moves.",
      },
      {
        id: "q2",
        question: "What is a work offset (G54–G59) used for?",
        options: [
          "To store each tool's length relative to the spindle nose",
          "To store the position of the workpiece datum relative to machine home",
          "To specify the cutting feed rate",
          "To select the correct spindle speed",
        ],
        correctIndex: 1,
        explanation:
          "Work offsets store the X, Y, Z coordinates of the program zero point (work datum) relative to the machine's home position. The control adds this offset to all program coordinates.",
      },
      {
        id: "q3",
        question:
          "What G-code canned cycle is used for peck drilling deep holes?",
        options: ["G81", "G83", "G84", "G85"],
        correctIndex: 1,
        explanation:
          "G83 is the peck drilling cycle: it drills to a set depth increment, retracts fully to clear chips, then re-enters and drills the next increment, preventing chip packing in deep holes.",
      },
      {
        id: "q4",
        question:
          "What should you do before running a new CNC program at full speed?",
        options: [
          "Run the program at full speed but with coolant off",
          "Verify the program using dry run and single-block modes, watching each move carefully",
          "Check only the first and last blocks for errors",
          "Run the program on a different material first",
        ],
        correctIndex: 1,
        explanation:
          "Dry run combined with single-block mode lets you step through each line and verify tool paths before any cutting occurs, preventing costly crashes and scrap.",
      },
    ],
  },
];
