import type { TradeModule } from "./woodworkingContent";

export const electricalModules: TradeModule[] = [
  {
    id: "electrical-safety-theory",
    tradeId: "electrical",
    title: "Electrical Safety & Theory",
    level: 1,
    durationMinutes: 20,
    summary:
      "Master the foundational principles of electricity — Ohm's Law, circuit theory, and the safety practices that keep electricians alive and compliant.",
    keyConcepts: [
      "Ohm's Law",
      "Voltage, Current & Resistance",
      "PPE Requirements",
      "Safe Isolation Procedures",
      "AS/NZS 3000 Wiring Rules",
    ],
    steps: [
      {
        id: "es1",
        title: "Ohm's Law & the Relationship Between V, I & R",
        body: "Ohm's Law states that Voltage (V) = Current (I) × Resistance (R). This single equation underpins every calculation you will make as an electrician. Voltage is the electrical pressure driving current through a circuit — measured in volts (V). Current is the flow of electrons — measured in amps (A). Resistance opposes that flow — measured in ohms (Ω). If you double the resistance in a circuit, the current halves (assuming voltage stays constant). In a 230 V domestic circuit with a 46 Ω heater element, current = 230 ÷ 46 = 5 A. Power (watts) = V × I, so that heater draws 230 × 5 = 1 150 W. Commit this triangle to memory: cover the value you need and the remaining two show the operation.",
        visualCue:
          "Picture a triangle divided into three sections: V on top, I and R on the bottom-left and bottom-right. Covering V reveals I × R; covering I reveals V ÷ R; covering R reveals V ÷ I.",
      },
      {
        id: "es2",
        title: "Series vs Parallel Circuits",
        body: "In a series circuit all components share one path — break any link and the whole circuit goes dead. Resistance adds directly: R_total = R1 + R2 + R3. In a parallel circuit each component has its own path back to the source. Total resistance falls below the smallest branch: 1/R_total = 1/R1 + 1/R2. Domestic wiring is almost exclusively parallel so that switching off one light doesn't kill the whole house. Understanding which topology you're working with determines how you calculate fault currents, fuse ratings, and voltage drops across long cable runs.",
        visualCue:
          "Imagine a hallway with two light fittings: wired in series the switch for one kills both; wired in parallel each fitting has its own independent path, so turning off one leaves the other on.",
      },
      {
        id: "es3",
        title: "Personal Protective Equipment for Electrical Work",
        body: "Electricity kills at currents as low as 50 mA through the chest — well below what causes pain. Your first line of defence is PPE. Insulated gloves rated to the working voltage must be worn when probing live circuits; check gloves for pinholes before every use by trapping air inside and squeezing. Safety glasses protect against arc flash — a sudden explosion of ionised plasma that can ignite clothing and cause third-degree burns across a room. Arc-rated FR (flame-resistant) clothing is mandatory when working on live switchboards. Insulated tools are marked with the IEC 1 000 V symbol (the orange double-triangle). Non-insulated tools near live parts are a career-ending mistake.",
        visualCue:
          "Visualise an electrician at an open switchboard: insulated gloves on, face shield lowered, FR shirt buttoned, and a voltage tester pressed to the busbar before any hand contact — this is the minimum safe picture.",
      },
      {
        id: "es4",
        title: "Safe Isolation: Lock-Out / Tag-Out",
        body: "Safe isolation is the process of proving a circuit is dead before working on it — it is not optional. Step 1: Identify the correct circuit breaker or fuse. Step 2: Switch off the supply. Step 3: Apply your personal padlock to the isolator — nobody else can re-energise it while your lock is on. Step 4: Attach a tag stating your name, date, and the work being done. Step 5: Test the circuit with a calibrated voltage indicator — test on a known live source first, test the circuit, test on the live source again (the 'prove-test-prove' sequence). Never rely on a circuit breaker label alone; labels can be wrong. AS/NZS 4836 governs safe working on or near low-voltage electrical installations.",
        visualCue:
          "Picture a switchboard with a row of breakers: one breaker has a red padlock through its handle and a yellow tag reading 'OUT OF SERVICE — Smith J — 15/03/2026 — Rewiring kitchen circuits. DO NOT SWITCH ON.'",
      },
    ],
    quiz: [
      {
        id: "eq1",
        question:
          "A 230 V circuit has a load resistance of 23 Ω. What current flows?",
        options: ["5 A", "10 A", "23 A", "2.3 A"],
        correctIndex: 1,
        explanation:
          "I = V ÷ R = 230 ÷ 23 = 10 A. Ohm's Law is the foundation of all electrical calculations.",
      },
      {
        id: "eq2",
        question:
          "Why are domestic circuits wired in parallel rather than series?",
        options: [
          "Parallel wiring uses less cable",
          "Each load operates independently; one failure doesn't kill the whole circuit",
          "Parallel circuits have higher total resistance",
          "Series wiring is only legal in commercial buildings",
        ],
        correctIndex: 1,
        explanation:
          "Parallel wiring gives each load its own independent path, so switching off or losing one load has no effect on the others.",
      },
      {
        id: "eq3",
        question:
          "What does the 'prove-test-prove' sequence mean during safe isolation?",
        options: [
          "Test the circuit three times to be sure it is dead",
          "Test on a known live source, then the circuit, then the live source again to confirm the tester works",
          "Prove your identity, test the voltage, prove the earth",
          "Switch off, lock out, then test — in that order",
        ],
        correctIndex: 1,
        explanation:
          "Testing on a known live source before and after confirms your voltage indicator is functioning correctly, eliminating a false 'dead' reading from a faulty tester.",
      },
      {
        id: "eq4",
        question:
          "At what approximate current through the heart does ventricular fibrillation typically occur?",
        options: ["500 mA", "200 mA", "50 mA", "10 mA"],
        correctIndex: 2,
        explanation:
          "As little as 50 mA through the chest can cause ventricular fibrillation. This is why treating electricity with extreme caution, even at 'low' voltages, is critical.",
      },
    ],
  },
  {
    id: "domestic-wiring-circuits",
    tradeId: "electrical",
    title: "Domestic Wiring Circuits",
    level: 2,
    durationMinutes: 25,
    summary:
      "Learn how residential power circuits, lighting circuits, and socket outlets are designed, cabled, and terminated to AS/NZS 3000 standards.",
    keyConcepts: [
      "Ring & Radial Circuits",
      "Lighting Circuits",
      "Socket Outlet Wiring",
      "Cable Sizing & Voltage Drop",
      "Circuit Protection",
    ],
    steps: [
      {
        id: "dw1",
        title: "Power Circuits: Radial vs Ring",
        body: "In Australia and New Zealand, domestic power circuits are almost exclusively radial — the circuit cable leaves the switchboard, passes through each socket outlet in turn, and terminates at the last outlet. A ring circuit (common in the UK) loops back to the board, allowing current to flow from both directions. Radial circuits are simpler to fault-find but deliver all load current through a single cable run; you must therefore size cable correctly for the total load and the cable length to keep voltage drop within the 5% limit specified by AS/NZS 3000. A standard 20 A radial circuit serving general power outlets (GPOs) in a kitchen requires 2.5 mm² TPS (twin-plus-earth) cable.",
        visualCue:
          "Imagine a switchboard at the left: a cable leaves the 20 A breaker, passes through outlet 1, continues to outlet 2, continues to outlet 3, and ends there. The return active and neutral travel back to the board inside the one TPS sheath.",
      },
      {
        id: "dw2",
        title: "Lighting Circuits: Switches & Two-Way Switching",
        body: "A basic lighting circuit runs from the board through a single-pole switch to the light fitting and back via the neutral. The switch always interrupts the active (line) conductor — never the neutral — because a 'switched neutral' leaves the fitting live at the lampholder even when the switch appears off, creating a shock hazard. Two-way switching (staircase switching) uses two switches connected by a 'strapper' cable and allows a light to be controlled from two locations. The two switch positions create a toggle: both switches up = on, switches in opposite positions = off (or vice versa). For three or more switch points, an intermediate switch is inserted between the two two-way switches.",
        visualCue:
          "Picture a staircase: a switch at the bottom and a switch at the top, each connected by two 'strappers' running between them. The light at the top of the stairs turns on and off from either switch independently.",
      },
      {
        id: "dw3",
        title: "Terminating Socket Outlets Correctly",
        body: "The standard Australian/NZ socket outlet (AS/NZS 3112) has three flat pins arranged in a triangular pattern. Inside the socket: Active (brown or red) → L terminal; Neutral (blue or black) → N terminal; Earth (green/yellow) → E terminal. Cable terminations must be made with an appropriate stripping tool — nick the conductor insulation and the connection will fail prematurely. Ferrules are recommended on stranded conductors. All unused conductor ends must be insulated. Polarity must be maintained throughout; a reversed active/neutral creates a 'dead switch' fault where turning off the switch leaves the socket live. Test polarity with a socket tester after every installation.",
        visualCue:
          "Visualise an open GPO: three clearly coloured wires — brown active going to the L terminal at the top, blue neutral to the N terminal, green/yellow earth to the E terminal at the bottom, each wire firmly clamped with no conductor strands showing outside the terminal.",
      },
      {
        id: "dw4",
        title: "Cable Sizing & Voltage Drop Calculations",
        body: "Undersized cable overheats, degrades insulation, and can start fires. AS/NZS 3000 specifies current-carrying capacity (ampacity) tables based on cable size, installation method (clipped to surface, in conduit, buried), and grouping with other cables. A 2.5 mm² TPS cable clipped to a surface carries 27 A; the same cable in conduit with two other loaded circuits might be derated to 18 A. Voltage drop is calculated as: VD (V) = (mV/A/m value from table) × current (A) × length (m) ÷ 1000. For example, 2.5 mm² cable carrying 16 A over 25 m: VD = 18 × 16 × 25 ÷ 1000 = 7.2 V — that's 3.1% of 230 V, within the 5% limit. Always check both ampacity and voltage drop before finalising cable size.",
        visualCue:
          "Imagine a table with cable sizes on the left (1.5 mm², 2.5 mm², 4 mm², 6 mm²) and installation methods across the top. Arrows show how ampacity decreases as installation method changes from surface-clipped to bundled-in-conduit.",
      },
    ],
    quiz: [
      {
        id: "dq1",
        question:
          "Why must a light switch interrupt the active conductor, not the neutral?",
        options: [
          "Neutral conductors carry more current",
          "A switched neutral leaves the fitting live at the lampholder even when switched off",
          "It is a colour-coding convention only",
          "Active conductors are thicker and easier to terminate",
        ],
        correctIndex: 1,
        explanation:
          "Switching the neutral disconnects the return path but leaves the fitting energised — anyone changing a globe would contact a live lampholder. Always switch the active.",
      },
      {
        id: "dq2",
        question:
          "In an Australian socket outlet, which terminal does the active (brown/red) conductor connect to?",
        options: ["E", "N", "L", "A"],
        correctIndex: 2,
        explanation:
          "L (Line/Active) is the correct terminal. N is neutral, E is earth. Reversing active and neutral creates a polarity fault.",
      },
      {
        id: "dq3",
        question:
          "A 2.5 mm² cable has a voltage-drop value of 18 mV/A/m. It carries 16 A over 30 m. What is the voltage drop?",
        options: ["6.24 V", "8.64 V", "7.2 V", "10.8 V"],
        correctIndex: 1,
        explanation:
          "VD = 18 × 16 × 30 ÷ 1000 = 8.64 V — that's 3.75% of 230 V, still within the 5% limit.",
      },
      {
        id: "dq4",
        question:
          "How many intermediate switches are required to control one light from four locations?",
        options: ["None", "One", "Two", "Four"],
        correctIndex: 2,
        explanation:
          "Four-location control uses two two-way switches (at each end) and two intermediate switches in the middle — one intermediate switch per extra location beyond two.",
      },
    ],
  },
  {
    id: "switchboard-protection",
    tradeId: "electrical",
    title: "Switchboard & Protection Devices",
    level: 3,
    durationMinutes: 25,
    summary:
      "Understand miniature circuit breakers, residual current devices, and how to select, install, and verify protection devices in a domestic switchboard.",
    keyConcepts: [
      "MCB Trip Characteristics",
      "RCD Operation",
      "Switchboard Layout",
      "Load Calculations",
      "Discrimination",
    ],
    steps: [
      {
        id: "sb1",
        title: "Miniature Circuit Breakers: Curves & Ratings",
        body: "An MCB (miniature circuit breaker) provides two protection functions: thermal (overload) and magnetic (short circuit). The thermal bimetal strip bends when heated by sustained overcurrent and trips after a time inversely proportional to the overload level. The magnetic solenoid trips instantaneously for a fault current many times the rated current. Trip curves define the magnetic trip threshold: Type B trips at 3–5× rated current (lighting, resistive loads); Type C at 5–10× (motor starting, fluorescent lighting with ballasts); Type D at 10–20× (transformers, large motor in-rush). Selecting the wrong curve causes nuisance tripping or — worse — a failure to trip on fault. Always match the MCB type to the load characteristics.",
        visualCue:
          "Imagine three overlapping trip-time curves on a graph: B-curve trips earliest at lower multiples of rated current; C-curve shifts right; D-curve sits furthest right, allowing the largest in-rush before tripping.",
      },
      {
        id: "sb2",
        title: "How Residual Current Devices Work",
        body: "An RCD (residual current device) compares the current flowing out on the active with the current returning on the neutral. In a healthy circuit these are equal and their magnetic fields cancel in the toroidal core — no trip. If current leaks to earth (through a fault or a person), the returning neutral current is smaller. The resulting residual flux induces a voltage in a sensing coil, triggering the trip mechanism. Domestic RCDs trip at 30 mA in ≤ 30 ms — fast enough to prevent a fatal shock in most circumstances. Every circuit serving socket outlets and all bathroom circuits must be RCD-protected under AS/NZS 3000 Clause 2.6.",
        visualCue:
          "Picture a toroid (donut-shaped core) with the active and neutral conductors passing through it: in a healthy circuit the arrows go in opposite directions and cancel; when fault current escapes, the arrows are unequal and the resulting net flux trips the device.",
      },
      {
        id: "sb3",
        title: "Switchboard Layout & Labelling",
        body: "A well-designed switchboard groups circuits logically: the main switch at the top, RCDs and RCBO banks next, then sub-circuit MCBs in a consistent order (lighting, power, stove, air conditioning, hot water). Busbar connections must be torqued to the manufacturer's specification — under-torqued lugs arc and burn; over-torqued lugs crack the insulation. Every circuit must be permanently labelled in plain English on the board directory and on each breaker. Handwritten sticky labels are not acceptable for final installation — engraved or printed labels only. Leave at least two spare ways in every new switchboard to allow for future circuits without rewiring the board.",
        visualCue:
          "Visualise a neat DIN-rail switchboard: main isolator top-left, two RCDs beneath it, rows of labelled MCBs beneath those, a clear printed directory inside the door lid, and two blank breaker spaces at the bottom right.",
      },
      {
        id: "sb4",
        title: "Load Calculations & Diversity",
        body: "Before designing a switchboard, calculate the total connected load. Sum the wattage of every fixed appliance (stove 8 kW, hot water 3.6 kW, air con 3 kW, oven 2 kW). For general power circuits, AS/NZS 3000 allows a diversity factor: the first 10 A at 100%, the next 10 A at 50%, remaining load at 25% — because not every outlet is simultaneously at full load. The resulting 'demand load' determines the mains cable size and the main switch rating. Undersizing the mains on a large home is a common and costly mistake discovered when the owner later adds an EV charger or second air conditioner. Always calculate to the full connected load first, then apply diversity.",
        visualCue:
          "Imagine a spreadsheet with appliances listed, wattages in one column, diversity-adjusted figures in another, and a running total at the bottom converting to amps by dividing by 230 V — that final number determines your main switch rating.",
      },
    ],
    quiz: [
      {
        id: "sbq1",
        question:
          "A large induction motor has a high in-rush current on start-up. Which MCB curve is most appropriate?",
        options: ["Type A", "Type B", "Type C", "Type D"],
        correctIndex: 3,
        explanation:
          "Type D MCBs trip at 10–20× rated current, accommodating large motor in-rush without nuisance tripping, while still protecting against genuine faults.",
      },
      {
        id: "sbq2",
        question: "At what residual current does a standard domestic RCD trip?",
        options: ["10 mA", "30 mA", "100 mA", "300 mA"],
        correctIndex: 1,
        explanation:
          "Domestic RCDs are rated at 30 mA trip threshold, responding within 30 ms — fast enough to prevent a lethal shock in most circumstances.",
      },
      {
        id: "sbq3",
        question:
          "Why must every circuit in a switchboard be permanently labelled?",
        options: [
          "It is an aesthetic requirement only",
          "It allows the owner to add extra circuits themselves",
          "It enables safe isolation of the correct circuit during maintenance or emergency",
          "Labels are only required on RCDs, not MCBs",
        ],
        correctIndex: 2,
        explanation:
          "Clear, permanent circuit labelling is a safety requirement. Isolating the wrong circuit during live work is a serious hazard.",
      },
      {
        id: "sbq4",
        question:
          "When applying AS/NZS 3000 diversity to a general-power circuit bank, what percentage applies to load beyond the first 20 A?",
        options: ["100%", "75%", "50%", "25%"],
        correctIndex: 3,
        explanation:
          "The diversity factor allows: first 10 A at 100%, next 10 A at 50%, all remaining load at 25% — reflecting the statistical reality that not every GPO is loaded simultaneously.",
      },
    ],
  },
  {
    id: "commercial-industrial-wiring",
    tradeId: "electrical",
    title: "Commercial & Industrial Wiring",
    level: 4,
    durationMinutes: 30,
    summary:
      "Move beyond domestic installations to three-phase systems, motor circuits, industrial cable management, and the higher safety demands of commercial environments.",
    keyConcepts: [
      "Three-Phase Power",
      "Motor Starting Methods",
      "Cable Management Systems",
      "Industrial Switchgear",
      "Power Factor Correction",
    ],
    steps: [
      {
        id: "ci1",
        title: "Understanding Three-Phase Power",
        body: "Single-phase supplies deliver power in one sinusoidal wave. Three-phase supplies deliver three sine waves offset by 120°, providing smoother power delivery, higher efficiency over long distances, and the ability to run motors without starting capacitors. Line voltage (between any two phases) in a 400 V three-phase system is 400 V; phase voltage (between any phase and neutral) is 400 ÷ √3 = 231 V — essentially single-phase voltage. Three-phase motors are far more efficient than single-phase equivalents, which is why virtually all commercial and industrial equipment above 2.2 kW is three-phase. Phase rotation (RYB or RST sequence) must be confirmed before energising any motor — reversed rotation can destroy pumps, compressors, and fans in seconds.",
        visualCue:
          "Visualise a sine wave graph showing three coloured waves (red, yellow, blue) each offset by 120°. The peak-to-peak between two phases is noticeably larger than the peak-to-neutral measurement — illustrating the relationship between line and phase voltage.",
      },
      {
        id: "ci2",
        title: "Motor Starting Methods",
        body: "Direct-on-line (DOL) starting connects the motor directly to supply — simplest but draws 6–8× full-load current on start-up, stressing the supply and mechanically hammering the connected load. Star-delta starting first connects the motor windings in star (lower voltage per winding), then switches to delta (full voltage) once running — reducing in-rush to around 33% of DOL. A Variable Speed Drive (VSD / VFD) ramps voltage and frequency up gradually, dramatically reducing mechanical stress and providing precise speed control. VSDs also allow soft stopping, energy saving at part load, and integration with building management systems. Modern commercial buildings almost exclusively use VSDs for pumps, fans, and conveyors.",
        visualCue:
          "Picture three starting method graphs side by side: DOL shows a huge current spike at t=0; star-delta shows a smaller spike then a second smaller spike at changeover; VSD shows a smooth ramp from zero — like easing a car away from traffic lights versus flooring the accelerator.",
      },
      {
        id: "ci3",
        title: "Industrial Cable Management",
        body: "Commercial and industrial buildings require cable management systems that are robust, serviceable, and compliant. Perforated cable tray is used for large power and data bundles — the perforations allow airflow for cooling and drainage. Solid-bottom cable tray is used where mechanical protection from drips is needed. Cable ladder is used in heavy industrial environments for large cables. Conduit (metal or PVC) provides physical protection in exposed areas and through fire-rated walls. Cable cleating (every 300–400 mm for single-core cables) prevents cables from whipping under short-circuit forces. All metal cable management must be bonded to the main earthing system and painted or galvanised to resist corrosion in the intended environment.",
        visualCue:
          "Imagine a factory ceiling: perforated tray runs along the main spine, smaller conduits branch off to individual machines, cables are neatly cleated and labelled every metre, and the entire steel tray is bonded to a green earth conductor running to the main switchboard.",
      },
      {
        id: "ci4",
        title: "Power Factor & Its Correction",
        body: "Power factor (PF) is the ratio of real power (kW, doing useful work) to apparent power (kVA, drawn from the supply). Inductive loads — motors, transformers, fluorescent ballasts — draw lagging reactive current that does no useful work but increases supply current and therefore cable and transformer losses. A PF of 0.7 means 70% of the drawn current is productive; 30% is wasted heating cables. Utilities charge large commercial sites for low power factor. Power factor correction (PFC) capacitor banks inject leading reactive current to cancel the lagging reactive component, bringing PF closer to unity. Correcting a factory from PF 0.7 to 0.95 can reduce apparent power by over 25%, cutting supply cable size, transformer rating, and electricity bills.",
        visualCue:
          "Picture a right-angle triangle: the horizontal leg is real power (kW), the vertical leg is reactive power (kVAR), and the hypotenuse is apparent power (kVA). The angle between the horizontal and hypotenuse is the power factor angle — a larger angle (lower PF) means a longer hypotenuse for the same real power.",
      },
    ],
    quiz: [
      {
        id: "ciq1",
        question:
          "In a 400 V three-phase system, what is the approximate phase-to-neutral voltage?",
        options: ["400 V", "346 V", "231 V", "115 V"],
        correctIndex: 2,
        explanation:
          "Phase voltage = Line voltage ÷ √3 = 400 ÷ 1.732 ≈ 231 V — essentially the same as single-phase domestic supply.",
      },
      {
        id: "ciq2",
        question:
          "What is the main advantage of a Variable Speed Drive over star-delta starting?",
        options: [
          "VSDs are cheaper to install",
          "VSDs provide smooth ramping, precise speed control, and the lowest possible starting current",
          "VSDs eliminate the need for motor overload protection",
          "VSDs can only be used with three-phase motors",
        ],
        correctIndex: 1,
        explanation:
          "VSDs ramp voltage and frequency from zero, minimising in-rush and mechanical stress, while also enabling speed control for energy savings — advantages star-delta cannot provide.",
      },
      {
        id: "ciq3",
        question:
          "Why must single-core cables be cleated at regular intervals?",
        options: [
          "To improve airflow around the cables",
          "To prevent cables from whipping under short-circuit electromagnetic forces",
          "To keep cables below the maximum operating temperature",
          "Cleating is aesthetic only",
        ],
        correctIndex: 1,
        explanation:
          "Under short-circuit conditions, the large current creates enormous electromagnetic forces that can violently move unsupported cables, damaging insulation and causing further faults.",
      },
      {
        id: "ciq4",
        question:
          "A factory has a real power demand of 100 kW and a power factor of 0.5. What is its apparent power?",
        options: ["50 kVA", "100 kVA", "150 kVA", "200 kVA"],
        correctIndex: 3,
        explanation:
          "Apparent power (kVA) = Real power (kW) ÷ PF = 100 ÷ 0.5 = 200 kVA. This is why low power factor doubles the apparent demand on the supply.",
      },
    ],
  },
  {
    id: "testing-commissioning",
    tradeId: "electrical",
    title: "Testing & Commissioning",
    level: 5,
    durationMinutes: 30,
    summary:
      "Apply the full AS/NZS 3000 verification test sequence — insulation resistance, continuity, earth fault loop impedance, and RCD testing — before signing off any new installation.",
    keyConcepts: [
      "Insulation Resistance Testing",
      "Continuity of Protective Conductors",
      "Earth Fault Loop Impedance",
      "RCD Ramp & Trip Time Tests",
      "Certificates of Compliance",
    ],
    steps: [
      {
        id: "tc1",
        title: "Insulation Resistance Testing",
        body: "Insulation resistance (IR) testing applies a DC test voltage (typically 500 V DC for 230/400 V systems) between live conductors and earth — and between active and neutral — to verify insulation integrity. A healthy insulation system should read ≥ 1 MΩ; AS/NZS 3000 requires ≥ 1 MΩ for the entire installation. Disconnect all equipment (especially surge protection devices and electronic equipment that will be damaged by the 500 V test voltage) before testing. Apply the test voltage for a minimum of one minute. Record the results on the test schedule. Readings below 1 MΩ indicate damaged, wet, or contaminated insulation that must be located and repaired before energisation.",
        visualCue:
          "Picture a digital insulation tester connected between the active bus and earth: the reading shows 1 542 MΩ — well above the 1 MΩ minimum. A sticky note reminds the technician to disconnect the surge protector before pressing the test button.",
      },
      {
        id: "tc2",
        title: "Continuity of Protective Conductors & Bonding",
        body: "Every protective earth (PE) conductor in the installation must be continuous from the main earthing terminal to every piece of equipment it serves. A break in the earth path means a fault to the metal casing of an appliance cannot trip the protection device — the casing remains live until someone touches it. Test with a low-resistance ohmmeter (not a multimeter, which may not detect a high-resistance joint). The acceptable maximum resistance for a final-circuit PE conductor is determined by the fault-loop impedance calculation, but as a practical guide: any PE connection reading above 1 Ω warrants investigation. Also test supplementary bonding in bathrooms and equipotential bonding of gas/water pipes.",
        visualCue:
          "Imagine an ohmmeter with leads placed at two ends of an earth conductor: a reading of 0.32 Ω shows a solid, low-resistance connection. The same test on a corroded lug returns 4.8 Ω — well above acceptable — flagging a joint that must be remade.",
      },
      {
        id: "tc3",
        title: "Earth Fault Loop Impedance (Zs) Testing",
        body: "When a live-to-earth fault occurs, current must flow through the 'earth fault loop' — from the source, along the active, through the fault, back along the protective conductor to the transformer neutral. The loop impedance (Zs) determines the fault current: I_fault = 230 ÷ Zs. This fault current must be large enough to trip the protection device within the time limits specified in AS/NZS 3000 (0.4 s for socket outlet circuits, 5 s for distribution circuits). A high Zs = low fault current = slow or no trip. The maximum permitted Zs for a 20 A Type C MCB protecting a socket circuit is about 2.3 Ω. Test using a loop impedance tester at the furthest point of each circuit.",
        visualCue:
          "Visualise the fault loop as a circuit diagram: mains transformer on the left, active cable running to the right, fault point at the end, earth conductor returning left to the transformer star point. The total resistance of this loop determines how much current flows — and therefore how fast the MCB trips.",
      },
      {
        id: "tc4",
        title: "RCD Testing & Certificates of Compliance",
        body: "RCDs must be tested at three levels: the test button on the device (functional check only — does not verify trip time or current); a ramp test, which slowly increases the test current until the RCD trips, confirming it operates at or below 30 mA; and a timed trip test at 150% of rated trip current (45 mA for a 30 mA device), which must result in a trip in ≤ 40 ms. Record results on the switchboard test schedule. On completion of all tests a Certificate of Compliance (CoC) or equivalent regulatory document must be completed, signed by the licensed electrician, and provided to the owner and the relevant electrical authority. The CoC is a legal document — errors or omissions can result in licence suspension.",
        visualCue:
          "Picture a completed test schedule clipped inside the switchboard door: columns for circuit ID, IR result, continuity result, Zs result, RCD trip current, RCD trip time — all filled in with pen, signed and dated by the installing electrician at the bottom.",
      },
    ],
    quiz: [
      {
        id: "tq1",
        question:
          "What minimum insulation resistance is required by AS/NZS 3000 for a completed installation?",
        options: ["100 kΩ", "500 kΩ", "1 MΩ", "10 MΩ"],
        correctIndex: 2,
        explanation:
          "AS/NZS 3000 requires ≥ 1 MΩ for the completed installation. Values below this indicate insulation degradation that must be investigated.",
      },
      {
        id: "tq2",
        question:
          "Why should surge protection devices (SPDs) be disconnected before insulation resistance testing?",
        options: [
          "SPDs affect the accuracy of the reading",
          "The 500 V DC test voltage will damage SPD components designed for 230 V AC",
          "SPDs must be tested separately with a higher voltage",
          "SPDs increase the insulation resistance reading artificially",
        ],
        correctIndex: 1,
        explanation:
          "SPD metal-oxide varistors clamp voltages above their operating threshold — the 500 V DC test voltage will conduct through them and/or destroy them if left connected.",
      },
      {
        id: "tq3",
        question:
          "A circuit has an earth fault loop impedance of 1.15 Ω. What fault current will flow on a live-to-earth fault?",
        options: ["100 A", "200 A", "230 A", "115 A"],
        correctIndex: 1,
        explanation:
          "I_fault = V ÷ Zs = 230 ÷ 1.15 = 200 A — more than enough to trip a 20 A MCB very quickly.",
      },
      {
        id: "tq4",
        question:
          "During an RCD timed-trip test at 150% rated trip current (45 mA), what is the maximum acceptable trip time?",
        options: ["300 ms", "100 ms", "40 ms", "10 ms"],
        correctIndex: 2,
        explanation:
          "AS/NZS 61008 requires a 30 mA RCD to trip in ≤ 40 ms when tested at 150% of rated trip current (45 mA).",
      },
    ],
  },
];
