import type { TradeModule } from "./woodworkingContent";

export const itModules: TradeModule[] = [
  // ─── PC Hardware ─────────────────────────────────────────────────────────
  {
    id: "pc-hardware-components",
    tradeId: "pc-hardware",
    title: "Component Identification",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn to identify every major component inside a modern desktop PC and understand the role each part plays in the system.",
    keyConcepts: ["Motherboard", "CPU", "RAM", "GPU", "PSU", "Storage"],
    steps: [
      {
        id: "s1",
        title: "The Motherboard",
        body: "The motherboard is the central printed circuit board that connects every other component. It provides the CPU socket, RAM slots (DIMM), PCIe expansion slots for the GPU, SATA connectors for storage, and the 24-pin ATX power connector. The chipset on the motherboard manages communication between the CPU and peripheral components.",
        visualCue:
          "Top-down diagram of an ATX motherboard with each major zone labelled: CPU socket, RAM slots, PCIe x16 slot, M.2 slot, SATA ports, 24-pin connector, I/O shield.",
      },
      {
        id: "s2",
        title: "CPU and RAM",
        body: "The Central Processing Unit (CPU) executes instructions. Key specs include core count, clock speed (GHz), cache size, and TDP (thermal design power). Random Access Memory (RAM) is volatile short-term storage that holds data the CPU is actively working with. Desktop systems commonly use DDR4 or DDR5 DIMMs. Matching RAM speed to the motherboard's supported frequency is important for stability.",
        visualCue:
          "Side-by-side labelled photos of an Intel LGA CPU and a DDR4 DIMM stick, highlighting pins/notch and key spec numbers.",
      },
      {
        id: "s3",
        title: "GPU and Expansion Slots",
        body: "The Graphics Processing Unit (GPU) renders video output and handles parallel computation tasks. Discrete GPUs connect via the PCIe x16 slot and require a supplementary power connector (6-pin or 8-pin). Integrated graphics are built into the CPU and share system RAM. PCIe x1 and x4 slots are used for add-in cards such as Wi-Fi cards, capture cards, and NVMe expansion cards.",
        visualCue:
          "Labelled diagram showing a discrete GPU installed in the PCIe x16 slot with power cable connected, and a smaller PCIe x1 Wi-Fi card for comparison.",
      },
      {
        id: "s4",
        title: "Storage Devices",
        body: "Storage devices retain data when the PC is powered off. HDDs (Hard Disk Drives) use spinning platters and are cheap per GB. SSDs (Solid State Drives) use NAND flash and connect via SATA or NVMe (M.2). NVMe SSDs communicate directly with the CPU via PCIe lanes, delivering far higher speeds than SATA. When identifying a storage device, check its form factor (2.5-inch, 3.5-inch, M.2), interface, and capacity.",
        visualCue:
          "Comparison image: 3.5-inch HDD, 2.5-inch SATA SSD, and M.2 NVMe SSD, each with form factor and connector type labelled.",
      },
      {
        id: "s5",
        title: "Power Supply Unit",
        body: "The Power Supply Unit (PSU) converts mains AC power to the DC voltages the PC needs: 12V, 5V, and 3.3V rails. PSU wattage must exceed total system power draw with a comfortable headroom. The 80 PLUS rating (Bronze, Gold, Platinum) indicates efficiency. Modular PSUs allow unused cables to be detached to improve airflow. Always match PSU connectors to motherboard and GPU requirements before assembly.",
        visualCue:
          "Labelled PSU showing 24-pin motherboard cable, 8-pin CPU cable, PCIe 8-pin, SATA power, and Molex connectors, plus the efficiency rating label.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which slot on the motherboard typically connects a discrete GPU?",
        options: ["PCIe x1", "PCIe x16", "M.2", "SATA"],
        correctIndex: 1,
        explanation:
          "Discrete GPUs use the PCIe x16 slot, which provides the highest bandwidth of all PCIe expansion slots on a consumer motherboard.",
      },
      {
        id: "q2",
        question: "What does TDP stand for in CPU specifications?",
        options: [
          "Total Data Processing",
          "Thermal Design Power",
          "Transfer Data Protocol",
          "Turbo Drive Performance",
        ],
        correctIndex: 1,
        explanation:
          "TDP (Thermal Design Power) is the maximum heat a CPU generates under sustained load, used to size cooling solutions.",
      },
      {
        id: "q3",
        question:
          "Which storage interface provides the fastest speeds for an SSD?",
        options: ["SATA III", "USB 3.0", "NVMe (PCIe)", "IDE"],
        correctIndex: 2,
        explanation:
          "NVMe SSDs communicate via PCIe lanes directly to the CPU, achieving speeds up to 7,000 MB/s vs ~600 MB/s for SATA.",
      },
      {
        id: "q4",
        question: "What does the 80 PLUS rating on a PSU indicate?",
        options: [
          "Wattage output",
          "Voltage stability",
          "Power conversion efficiency",
          "Cable length",
        ],
        correctIndex: 2,
        explanation:
          "80 PLUS certifies that the PSU operates at 80% or better efficiency, reducing heat and electricity costs.",
      },
    ],
  },
  {
    id: "pc-hardware-assembly",
    tradeId: "pc-hardware",
    title: "PC Assembly & POST",
    level: 2,
    durationMinutes: 25,
    summary:
      "Follow a safe assembly sequence to build a functional desktop PC and interpret POST indicators to confirm the system is operational.",
    keyConcepts: [
      "ESD safety",
      "CPU installation",
      "RAM seating",
      "POST sequence",
      "BIOS entry",
      "Beep codes",
    ],
    steps: [
      {
        id: "s1",
        title: "ESD Safety and Preparation",
        body: "Electrostatic discharge (ESD) can silently destroy components. Always work on a non-carpeted surface, wear an anti-static wrist strap connected to a grounded surface, and handle components by their edges. Keep components in their anti-static bags until needed. Clear a flat, well-lit workspace and gather tools: Phillips #2 screwdriver, zip ties, and thermal paste.",
        visualCue:
          "Technician wearing an anti-static wrist strap, holding a motherboard by its edges over a foam anti-static mat.",
      },
      {
        id: "s2",
        title: "Installing CPU and Cooler",
        body: "Lift the CPU socket lever, align the CPU orientation marker (triangle or notch) with the socket, and lower it without force. Lock the lever. Apply a pea-sized amount of thermal paste to the CPU IHS (Integrated Heat Spreader). Mount the cooler, securing it with even diagonal tightening to ensure uniform contact pressure. Plug the cooler fan header into the CPU_FAN header on the motherboard.",
        visualCue:
          "Step-by-step sequence: 1) Socket lever lifted, 2) CPU aligned and seated, 3) Thermal paste applied, 4) Cooler mounted and screwed down.",
      },
      {
        id: "s3",
        title: "Installing RAM and GPU",
        body: "Consult the motherboard manual to identify the correct DIMM slots for dual-channel configuration (usually slots 2 and 4). Press the DIMM into the slot until both retention clips click. For the GPU, remove the appropriate rear I/O slot covers from the case, seat the GPU firmly into the PCIe x16 slot until the retention tab clicks, and attach the PSU power cable.",
        visualCue:
          "Motherboard diagram highlighting dual-channel RAM slots (coloured differently from single-channel), and a GPU being pressed into the PCIe x16 slot.",
      },
      {
        id: "s4",
        title: "Connecting Power and Storage",
        body: "Attach the 24-pin ATX connector to the motherboard and the 8-pin (or 4+4 pin) CPU power connector near the top-left of the board. Connect SATA data cables from storage drives to the motherboard SATA ports, and SATA power cables from the PSU. For M.2 NVMe drives, insert them at an angle into the M.2 slot and secure with a single screw. Route cables neatly to maintain airflow.",
        visualCue:
          "Inside view of a mid-tower case with 24-pin and 8-pin connectors plugged in, M.2 drive installed, and cable management straps used.",
      },
      {
        id: "s5",
        title: "POST and BIOS Verification",
        body: "Power On Self Test (POST) is the firmware check that runs every time the PC starts. The system checks CPU, RAM, GPU, and storage before handing off to the OS bootloader. A successful POST produces a single beep (on boards with a speaker) and progresses to the BIOS screen. Enter the BIOS (usually Del or F2) to confirm components are detected, set the boot order, and enable XMP/EXPO for RAM speed.",
        visualCue:
          "BIOS/UEFI screen showing detected CPU model, RAM size and speed, and connected storage devices, with the XMP enable option highlighted.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the purpose of applying thermal paste when installing a CPU cooler?",
        options: [
          "To lubricate the cooler fan",
          "To fill microscopic gaps and improve heat transfer",
          "To prevent ESD damage",
          "To secure the cooler in place",
        ],
        correctIndex: 1,
        explanation:
          "Thermal paste fills microscopic surface imperfections between the CPU IHS and cooler base, maximising thermal conductivity.",
      },
      {
        id: "q2",
        question:
          "What key combination typically enters the BIOS/UEFI on most motherboards?",
        options: [
          "Ctrl + Alt + Del",
          "F10 or Escape",
          "Delete or F2",
          "Windows key + R",
        ],
        correctIndex: 2,
        explanation:
          "Delete and F2 are the most common BIOS entry keys. The exact key is shown briefly on-screen during POST.",
      },
      {
        id: "q3",
        question: "Why is ESD a concern during PC assembly?",
        options: [
          "It can overheat components",
          "It can silently damage circuits even without visible sparks",
          "It strips screw threads",
          "It causes BIOS corruption",
        ],
        correctIndex: 1,
        explanation:
          "ESD can discharge through sensitive integrated circuits without any visible spark, causing latent failures that appear later.",
      },
      {
        id: "q4",
        question: "What does XMP/EXPO enable in the BIOS?",
        options: [
          "Faster storage access",
          "GPU overclocking",
          "RAM running at its advertised rated speed",
          "Additional USB ports",
        ],
        correctIndex: 2,
        explanation:
          "XMP (Intel) and EXPO (AMD) are profiles that unlock RAM's rated speed above the JEDEC default, matching the frequency on the kit's label.",
      },
    ],
  },
  {
    id: "pc-hardware-storage",
    tradeId: "pc-hardware",
    title: "Storage Systems",
    level: 3,
    durationMinutes: 20,
    summary:
      "Compare HDD, SSD, and NVMe storage technologies and understand RAID levels, file systems, and partition management.",
    keyConcepts: [
      "HDD vs SSD",
      "NVMe",
      "RAID 0/1/5",
      "NTFS",
      "GPT partition",
      "Disk management",
    ],
    steps: [
      {
        id: "s1",
        title: "HDD Technology",
        body: "Hard Disk Drives store data on magnetically coated spinning platters. The read/write head floats nanometres above the platter surface. Rotational speed (5400 or 7200 RPM) affects performance. Access time is limited by physical head seek time (typically 5–12ms). HDDs offer the lowest cost per gigabyte and are suitable for bulk cold storage, but are vulnerable to physical shock and slower than SSDs.",
        visualCue:
          "Cutaway diagram of an HDD showing platters, actuator arm, read/write head, and spindle motor, with access time and sequential speed figures.",
      },
      {
        id: "s2",
        title: "SSD and NVMe Technology",
        body: "Solid State Drives use NAND flash memory cells with no moving parts, resulting in much lower access times (under 0.1ms) and higher shock resistance. SATA SSDs are limited to ~550 MB/s by the SATA III interface. NVMe SSDs connect via PCIe M.2 and achieve 3,000–7,000 MB/s sequential read speeds. TLC (3-bit) and QLC (4-bit) NAND are common in consumer drives; MLC and SLC offer higher endurance for enterprise use.",
        visualCue:
          "Speed comparison bar chart: 7200 RPM HDD (150 MB/s), SATA SSD (550 MB/s), PCIe 3.0 NVMe (3,500 MB/s), PCIe 4.0 NVMe (7,000 MB/s).",
      },
      {
        id: "s3",
        title: "RAID Levels",
        body: "RAID (Redundant Array of Independent Disks) combines multiple drives. RAID 0 stripes data across drives for speed but has no redundancy—any drive failure loses all data. RAID 1 mirrors data across two drives, providing full redundancy but no capacity gain. RAID 5 stripes data with distributed parity across three or more drives, tolerating one drive failure while improving read performance. RAID 10 mirrors then stripes for both speed and redundancy.",
        visualCue:
          "Diagram comparing RAID 0, 1, 5, and 10 with drive layouts, capacity efficiency percentages, and failure tolerance for each.",
      },
      {
        id: "s4",
        title: "File Systems",
        body: "A file system organises how data is stored and retrieved on a volume. NTFS is the standard Windows file system, supporting permissions, journaling, and large files. exFAT is used for removable drives compatible with both Windows and macOS. FAT32 is legacy and limited to 4 GB file size. Linux uses ext4 as its primary file system. When formatting a drive, choose the correct file system for the intended use and operating system.",
        visualCue:
          "Comparison table: NTFS, exFAT, FAT32, ext4 — showing OS compatibility, max file size, journaling, and encryption support.",
      },
      {
        id: "s5",
        title: "Partition Management",
        body: "A partition is a logical division of a physical drive. MBR (Master Boot Record) is the legacy partition scheme, limited to 2 TB and 4 primary partitions. GPT (GUID Partition Table) supports drives larger than 2 TB and up to 128 partitions. In Windows, Disk Management (diskmgmt.msc) allows creating, deleting, formatting, and extending partitions. When installing an OS, drives must be initialised as GPT for UEFI systems. Shrinking existing partitions allows dual-boot configurations.",
        visualCue:
          "Disk Management window showing an NVMe drive with an EFI System Partition, a Windows C: volume, and unallocated space, with partition operations menu visible.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which RAID level provides redundancy but uses 50% of total drive capacity for mirroring?",
        options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
        correctIndex: 1,
        explanation:
          "RAID 1 mirrors data across two identical drives. If one fails, the other contains a complete copy, but you only gain the capacity of one drive.",
      },
      {
        id: "q2",
        question: "What limits SATA SSDs to approximately 550 MB/s?",
        options: [
          "The NAND flash cells",
          "The M.2 form factor",
          "The SATA III interface bandwidth",
          "The controller firmware",
        ],
        correctIndex: 2,
        explanation:
          "SATA III has a theoretical bandwidth cap of 600 MB/s, limiting SATA SSDs regardless of NAND speed.",
      },
      {
        id: "q3",
        question:
          "Which partition scheme is required for drives larger than 2 TB and UEFI boot?",
        options: ["MBR", "FAT32", "GPT", "NTFS"],
        correctIndex: 2,
        explanation:
          "GPT (GUID Partition Table) removes the 2 TB MBR limitation and is required by UEFI firmware for bootable system drives.",
      },
      {
        id: "q4",
        question:
          "How many drive failures can RAID 5 tolerate before data loss?",
        options: ["Zero", "One", "Two", "Three"],
        correctIndex: 1,
        explanation:
          "RAID 5 uses parity data distributed across all drives, allowing it to reconstruct data if exactly one drive fails.",
      },
    ],
  },
  {
    id: "pc-hardware-power-cooling",
    tradeId: "pc-hardware",
    title: "Power & Cooling",
    level: 4,
    durationMinutes: 20,
    summary:
      "Calculate system power requirements, select an appropriate PSU, and implement effective cooling strategies for stable long-term operation.",
    keyConcepts: [
      "TDP calculation",
      "PSU selection",
      "Air cooling",
      "Liquid cooling",
      "Thermal throttling",
      "Case airflow",
    ],
    steps: [
      {
        id: "s1",
        title: "Calculating System Power Draw",
        body: "Total system power draw is the sum of all component TDPs plus overhead for efficiency loss. Typical breakdowns: CPU 65–250W, GPU 75–450W, RAM 3–5W per stick, SSD 3–10W, fans 2–5W each. Add 20–30% headroom above the calculated maximum. Use a PSU wattage calculator (e.g., OuterVision) for accuracy. An undersized PSU causes instability under load; an oversized one wastes power at low utilisation.",
        visualCue:
          "Example calculation table listing CPU (125W), GPU (320W), RAM (10W), storage (15W), fans (15W), total 485W, recommended PSU 650W.",
      },
      {
        id: "s2",
        title: "PSU Form Factors and Ratings",
        body: "ATX is the standard desktop PSU form factor. SFX and SFX-L are compact variants for small form factor cases. PSU efficiency ratings under the 80 PLUS programme: Bronze (82%), Silver (85%), Gold (87%), Platinum (90%), Titanium (92%+). A higher rating means less heat and lower electricity cost over time. Modular PSUs allow unused cables to be removed, improving airflow and cable management.",
        visualCue:
          "Side-by-side comparison of ATX full-size, SFX, and SFX-L PSUs with dimensions and a chart showing wasted heat at different efficiency tiers.",
      },
      {
        id: "s3",
        title: "Air Cooling",
        body: "Air cooling uses a heatsink (finned metal block) and fan to transfer CPU heat to the case air. Tower coolers (top-facing fan) outperform stock coolers for mid-to-high-TDP CPUs. Fin density and heat pipe count determine performance ceiling. Pushpull fan configurations improve flow-through efficiency. Case fan positioning matters: front and bottom fans intake cool air; rear and top fans exhaust hot air. Positive pressure cases (more intake than exhaust) reduce dust ingress.",
        visualCue:
          "Diagram of a mid-tower case showing correct airflow direction arrows: front/bottom intake, rear/top exhaust, with a CPU tower cooler and GPU fans contributing to the flow.",
      },
      {
        id: "s4",
        title: "Liquid Cooling",
        body: "All-In-One (AIO) liquid coolers circulate coolant between a CPU waterblock and a radiator with fans. Radiator size (120mm, 240mm, 360mm) determines heat dissipation capacity. Custom loops allow cooling both CPU and GPU but require maintenance. Liquid cooling provides quieter operation and better sustained thermal performance for high-TDP chips. When mounting a radiator, position it as an intake to feed cool air over the fins before it heats up from case components.",
        visualCue:
          "Exploded view of an AIO cooler: pump/waterblock, tubing, radiator, and fans, with flow direction labelled. Radiator mounted as front intake shown in a case diagram.",
      },
      {
        id: "s5",
        title: "Thermal Throttling and Monitoring",
        body: "Thermal throttling is a CPU/GPU self-protection mechanism that reduces clock speed when the die temperature exceeds a safe threshold (typically 95–105°C for CPUs). Sustained throttling indicates inadequate cooling. Monitor temperatures using HWiNFO64, HWMonitor, or MSI Afterburner. Stress test with Prime95 (CPU) and FurMark (GPU) to verify stability under peak load. If throttling occurs, reapply thermal paste, reseat the cooler, or upgrade the cooling solution.",
        visualCue:
          "HWiNFO64 screenshot showing CPU core temperatures, clock speeds dropping during a throttle event, and corresponding power limit indicators.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A system has a CPU drawing 125W and GPU drawing 300W. What is the minimum recommended PSU wattage with 25% headroom?",
        options: ["425W", "531W", "600W", "750W"],
        correctIndex: 1,
        explanation:
          "425W × 1.25 headroom = 531W. The nearest standard size would be a 550W or 600W PSU.",
      },
      {
        id: "q2",
        question: "What is thermal throttling?",
        options: [
          "A PSU protection circuit",
          "Reducing CPU/GPU speed when temperature is too high",
          "A fan speed control algorithm",
          "A BIOS power limit setting",
        ],
        correctIndex: 1,
        explanation:
          "Thermal throttling automatically reduces clock speed to lower heat output when the chip exceeds its safe temperature threshold.",
      },
      {
        id: "q3",
        question:
          "Which fan configuration helps prevent dust build-up inside the case?",
        options: [
          "Negative pressure (more exhaust)",
          "Equal intake and exhaust",
          "Positive pressure (more intake)",
          "Top-only exhaust",
        ],
        correctIndex: 2,
        explanation:
          "Positive pressure means more air is pushed in than expelled, forcing air to exit only through filtered intakes and reducing unfiltered gaps where dust can enter.",
      },
      {
        id: "q4",
        question: "What 80 PLUS tier indicates approximately 90% efficiency?",
        options: ["Bronze", "Gold", "Platinum", "Titanium"],
        correctIndex: 2,
        explanation:
          "80 PLUS Platinum certifies ~90% efficiency at 50% load, compared to ~87% for Gold and ~92% for Titanium.",
      },
    ],
  },
  {
    id: "pc-hardware-diagnostics",
    tradeId: "pc-hardware",
    title: "Hardware Diagnostics",
    level: 5,
    durationMinutes: 25,
    summary:
      "Apply a systematic six-step diagnostic methodology to identify and resolve hardware faults using POST codes, beep codes, and component swap techniques.",
    keyConcepts: [
      "Diagnostic methodology",
      "POST codes",
      "Beep codes",
      "Multimeter",
      "Component swap",
      "Memtest86",
    ],
    steps: [
      {
        id: "s1",
        title: "The Six-Step Diagnostic Process",
        body: "A systematic approach prevents wasted time. Step 1: Identify the problem (gather symptoms, reproduce the fault). Step 2: Establish a theory of probable cause. Step 3: Test the theory. Step 4: Establish a plan of action and implement it. Step 5: Verify full system functionality. Step 6: Document findings and resolution. Skipping steps leads to misdiagnosis. Always start with the simplest, most likely cause before disassembling components.",
        visualCue:
          "Flowchart of the six diagnostic steps arranged vertically with brief descriptions and feedback loops between steps 3 and 2 if the theory is disproved.",
      },
      {
        id: "s2",
        title: "POST Codes and Beep Codes",
        body: "During POST, the motherboard outputs status codes to a two-digit hex display (Q-Code or LED display) and/or beep codes through the motherboard speaker. Common beep codes: 1 short = POST passed; 3 short = RAM fault; 1 long + 2 short = GPU fault. POST hex codes are manufacturer-specific—consult the manual. Debug LEDs (BOOT, VGA, DRAM, CPU) on modern boards light up at the last failed component.",
        visualCue:
          "Motherboard corner showing a two-digit Q-Code display showing 'A2' (USB initialisation) and four debug LEDs labelled BOOT/VGA/DRAM/CPU, with the CPU LED illuminated red.",
      },
      {
        id: "s3",
        title: "Memory Diagnostics",
        body: "Faulty RAM causes random crashes, BSODs, and failed POST. Use Memtest86 (bootable USB) to run comprehensive memory tests—errors indicate bad RAM or incompatible XMP settings. Windows Memory Diagnostic is a quicker in-OS option. When troubleshooting, test one DIMM at a time in the correct primary slot. Try removing XMP to confirm whether the issue is speed-related. Verify DIMMs are fully seated (retention clips both locked).",
        visualCue:
          "Memtest86 screen showing a completed test pass with zero errors highlighted in green, and a failed test with error count and failing address range in red.",
      },
      {
        id: "s4",
        title: "Using a Multimeter for Hardware Tests",
        body: "A digital multimeter tests PSU voltages at the 24-pin connector: 12V rail (yellow), 5V rail (red), and 3.3V rail (orange), all measured against ground (black). Acceptable tolerance is ±5%. It also tests continuity of cables and detects short circuits. Set the multimeter to DC voltage mode for PSU testing. A paperclip can bridge the 24-pin connector PS_ON (green) to GND (black) to test the PSU outside the system.",
        visualCue:
          "Multimeter probes on a 24-pin ATX connector measuring the 12V rail, with the display showing 11.95V and annotations on the colour-coded pin reference.",
      },
      {
        id: "s5",
        title: "Component Swap Methodology",
        body: "When a specific component is suspected, swap it with a known-good equivalent to confirm or eliminate it as the fault. Start with the cheapest and easiest to swap: RAM, then GPU, then PSU, then CPU. Keep a documented baseline of working hardware. If swapping the suspect component resolves the issue, the fault is confirmed. If not, revert and investigate the next hypothesis. Never swap multiple components simultaneously as you won't know which change fixed the problem.",
        visualCue:
          "Decision tree showing component swap order: RAM first, then GPU, then PSU, then CPU, with 'fault resolved?' Y/N branches at each step.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the first step in the systematic six-step diagnostic process?",
        options: [
          "Replace components",
          "Identify the problem",
          "Run diagnostic software",
          "Check BIOS settings",
        ],
        correctIndex: 1,
        explanation:
          "The first step is to identify the problem by gathering symptoms and attempting to reproduce the fault before theorising or acting.",
      },
      {
        id: "q2",
        question:
          "What voltage should appear on the 12V rail of a healthy PSU (±5% tolerance)?",
        options: ["11.0V–11.4V", "11.4V–12.6V", "12.6V–13.0V", "10.0V–11.0V"],
        correctIndex: 1,
        explanation:
          "The acceptable range for the 12V rail is 11.4V to 12.6V (±5%). Readings outside this range indicate PSU problems.",
      },
      {
        id: "q3",
        question:
          "Why should you only swap one component at a time during hardware diagnosis?",
        options: [
          "To save time",
          "To avoid voiding warranties",
          "So you know which change resolved the problem",
          "Components can interfere with each other if swapped together",
        ],
        correctIndex: 2,
        explanation:
          "Swapping multiple components simultaneously means you cannot determine which replacement fixed the fault, compromising diagnostic accuracy.",
      },
      {
        id: "q4",
        question: "Which tool is specifically used to test RAM for errors?",
        options: ["HWiNFO64", "CrystalDiskInfo", "Memtest86", "FurMark"],
        correctIndex: 2,
        explanation:
          "Memtest86 is a bootable memory testing utility that runs outside the OS to perform comprehensive checks of all installed RAM.",
      },
    ],
  },

  // ─── Networking ──────────────────────────────────────────────────────────
  {
    id: "networking-osi-model",
    tradeId: "networking",
    title: "OSI Model & Protocols",
    level: 1,
    durationMinutes: 20,
    summary:
      "Understand the seven-layer OSI reference model and identify the protocols and devices that operate at each layer.",
    keyConcepts: [
      "OSI layers",
      "TCP/IP",
      "HTTP",
      "DNS",
      "Ethernet",
      "Encapsulation",
    ],
    steps: [
      {
        id: "s1",
        title: "Why a Layered Model?",
        body: "The OSI (Open Systems Interconnection) model was developed by the ISO to provide a conceptual framework for how different network protocols interact. By dividing networking into seven distinct layers, troubleshooting becomes systematic—you can isolate a problem to a specific layer rather than treating the network as a black box. Each layer only communicates with the layer directly above and below it, using well-defined interfaces.",
        visualCue:
          "Vertical stack of seven labelled boxes representing OSI layers (Physical → Data Link → Network → Transport → Session → Presentation → Application) with arrows between adjacent layers.",
      },
      {
        id: "s2",
        title: "Layers 1–3: Physical, Data Link, Network",
        body: "Layer 1 (Physical) handles raw bit transmission over cables and radio waves. Devices: cables, hubs, transceivers. Layer 2 (Data Link) manages frame delivery between devices on the same network segment using MAC addresses. Devices: switches, bridges. Protocols: Ethernet, Wi-Fi (802.11). Layer 3 (Network) handles logical addressing and routing between different networks using IP addresses. Devices: routers. Protocols: IPv4, IPv6, ICMP.",
        visualCue:
          "Table showing layers 1–3 with their PDU (bit, frame, packet), devices, and key protocols labelled in columns.",
      },
      {
        id: "s3",
        title: "Layers 4–5: Transport and Session",
        body: "Layer 4 (Transport) provides end-to-end communication, error checking, and flow control. TCP (Transmission Control Protocol) is connection-oriented with guaranteed delivery. UDP (User Datagram Protocol) is connectionless and faster, used where speed matters more than reliability (streaming, DNS, gaming). Layer 5 (Session) establishes, manages, and terminates communication sessions between applications. NetBIOS and RPC operate here.",
        visualCue:
          "Comparison of TCP three-way handshake (SYN → SYN-ACK → ACK) vs UDP datagram fire-and-forget diagram, with use cases listed for each.",
      },
      {
        id: "s4",
        title: "Layers 6–7: Presentation and Application",
        body: "Layer 6 (Presentation) handles data formatting, encryption, and compression so the application layer receives data in a usable format. SSL/TLS encryption operates here. Layer 7 (Application) is the layer end users interact with. Protocols: HTTP/HTTPS (web), DNS (name resolution), SMTP/IMAP (email), FTP (file transfer), SSH (secure shell). Most troubleshooting at this layer involves protocol-specific tools like a browser developer console or curl.",
        visualCue:
          "Annotated browser request diagram showing where SSL/TLS (Layer 6) wraps the HTTP request (Layer 7) before being passed down the stack.",
      },
      {
        id: "s5",
        title: "Encapsulation and Protocol Data Units",
        body: "As data travels down the OSI stack from the application layer, each layer wraps the payload with its own header (and sometimes a trailer)—this is called encapsulation. The resulting unit at each layer has a specific name: Data (Layer 7), Segment (Layer 4), Packet (Layer 3), Frame (Layer 2), Bits (Layer 1). On the receiving end, each layer strips its header (decapsulation). Understanding PDUs helps interpret protocol analysers like Wireshark.",
        visualCue:
          "Encapsulation diagram showing data being wrapped layer by layer as it travels from the Application down to Physical, with PDU names and headers/trailers labelled at each step.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which OSI layer is responsible for logical (IP) addressing and routing?",
        options: [
          "Layer 2 – Data Link",
          "Layer 3 – Network",
          "Layer 4 – Transport",
          "Layer 5 – Session",
        ],
        correctIndex: 1,
        explanation:
          "Layer 3 (Network) handles IP addressing and routing decisions. Routers are the primary Layer 3 device.",
      },
      {
        id: "q2",
        question:
          "TCP is described as connection-oriented. What does this mean?",
        options: [
          "It only works on physical wired connections",
          "It establishes a handshake and guarantees delivery with acknowledgements",
          "It is faster than UDP",
          "It operates at the Data Link layer",
        ],
        correctIndex: 1,
        explanation:
          "TCP's three-way handshake establishes a session and sequence numbers ensure all packets are received and retransmitted if lost.",
      },
      {
        id: "q3",
        question: "What is the name for data at Layer 3 of the OSI model?",
        options: ["Frame", "Segment", "Packet", "Datagram"],
        correctIndex: 2,
        explanation:
          "Layer 3 PDUs are called Packets. They contain an IP header with source and destination IP addresses.",
      },
      {
        id: "q4",
        question:
          "Which protocol resolves domain names (like www.example.com) to IP addresses?",
        options: ["SMTP", "FTP", "DHCP", "DNS"],
        correctIndex: 3,
        explanation:
          "DNS (Domain Name System) translates human-readable domain names into IP addresses so packets can be routed.",
      },
    ],
  },
  {
    id: "networking-ip-addressing",
    tradeId: "networking",
    title: "IP Addressing & Subnetting",
    level: 2,
    durationMinutes: 25,
    summary:
      "Master IPv4 address classes, CIDR notation, subnetting calculations, and the basics of IPv6 addressing.",
    keyConcepts: [
      "IPv4 classes",
      "CIDR",
      "Subnet mask",
      "Subnetting",
      "IPv6",
      "DHCP",
    ],
    steps: [
      {
        id: "s1",
        title: "IPv4 Address Structure",
        body: "An IPv4 address is a 32-bit number expressed as four decimal octets (0–255) separated by dots, for example 192.168.1.100. The address has two parts: the network portion (identifies the network) and the host portion (identifies the device on that network). The subnet mask indicates the boundary: 255.255.255.0 means the first 24 bits are the network and the last 8 bits are the host. Private ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16.",
        visualCue:
          "32-bit IPv4 address shown in binary with the first 24 bits shaded (network) and last 8 bits unshaded (host), with the dotted decimal notation below.",
      },
      {
        id: "s2",
        title: "CIDR Notation",
        body: "CIDR (Classless Inter-Domain Routing) uses a slash suffix to denote the number of network bits: 192.168.1.0/24 means 24 bits are the network prefix. A /24 network has 256 addresses (2^8), with 254 usable hosts (subtract network address and broadcast). A /25 splits the block in half: 128 addresses, 126 usable hosts. A /30 gives just 4 addresses and is commonly used for point-to-point router links. The CIDR prefix determines both the subnet mask and the number of hosts.",
        visualCue:
          "Reference table: /24 = 256 addresses/254 hosts, /25 = 128/126, /26 = 64/62, /27 = 32/30, /28 = 16/14, /30 = 4/2, with subnet mask equivalents.",
      },
      {
        id: "s3",
        title: "Subnetting a Network",
        body: "To subnet 192.168.10.0/24 into four equal subnets, borrow 2 bits from the host portion, giving a /26. Each /26 has 64 addresses, 62 usable. The four subnets are: .0/26 (range .1–.62, broadcast .63), .64/26 (.65–.126, bc .127), .128/26 (.129–.190, bc .191), .192/26 (.193–.254, bc .255). A structured subnetting approach: determine required subnets → borrow bits → calculate network/broadcast/host ranges.",
        visualCue:
          "A 192.168.10.0/24 address bar divided into four equal colour-coded /26 subnets, each labelled with network address, usable host range, and broadcast address.",
      },
      {
        id: "s4",
        title: "DHCP and Static Addressing",
        body: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to clients. The DORA process: Discover (client broadcasts), Offer (server offers an IP), Request (client accepts), Acknowledge (server confirms). DHCP leases expire after a configured period. Static IP addresses are manually configured and recommended for servers, printers, and network infrastructure to prevent address changes.",
        visualCue:
          "DORA sequence diagram showing broadcast Discover, unicast Offer with IP details, Request, and Acknowledge messages between client and DHCP server.",
      },
      {
        id: "s5",
        title: "IPv6 Addressing",
        body: "IPv6 uses 128-bit addresses expressed as eight groups of four hexadecimal digits: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Two simplification rules: leading zeros in a group can be omitted (0db8 → db8), and a single run of consecutive all-zero groups can be replaced with :: (once per address). IPv6 has no broadcast; instead it uses multicast and anycast. Link-local addresses (fe80::/10) are self-assigned on each interface. Global unicast addresses (2000::/3) are routable.",
        visualCue:
          "Full IPv6 address compressed step by step: remove leading zeros → replace longest zero run with :: → final compressed form, with address type annotations.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "How many usable host addresses are available in a /26 subnet?",
        options: ["62", "64", "126", "30"],
        correctIndex: 0,
        explanation:
          "A /26 has 2^6 = 64 total addresses. Subtract the network address and broadcast address, leaving 62 usable hosts.",
      },
      {
        id: "q2",
        question: "Which private IP range is defined by the 10.0.0.0/8 block?",
        options: [
          "Class A private",
          "Class B private",
          "Class C private",
          "APIPA",
        ],
        correctIndex: 0,
        explanation:
          "10.0.0.0/8 is a Class A private range. 172.16.0.0/12 is Class B private and 192.168.0.0/16 is Class C private.",
      },
      {
        id: "q3",
        question: "What does the 'A' in the DHCP DORA process stand for?",
        options: ["Address", "Acknowledge", "Assign", "Authenticate"],
        correctIndex: 1,
        explanation:
          "DORA = Discover, Offer, Request, Acknowledge. The server sends an Acknowledge to confirm the IP lease.",
      },
      {
        id: "q4",
        question: "In IPv6, what does :: represent?",
        options: [
          "The default gateway",
          "A broadcast address",
          "One or more consecutive groups of all-zero hextets",
          "The loopback address",
        ],
        correctIndex: 2,
        explanation:
          ":: is shorthand for one or more consecutive groups of all zeros. It can appear only once in an IPv6 address.",
      },
    ],
  },
  {
    id: "networking-switches-vlans",
    tradeId: "networking",
    title: "Switches & VLANs",
    level: 3,
    durationMinutes: 20,
    summary:
      "Understand how Layer 2 switches forward frames, configure VLANs to segment networks, and set up trunk links between switches.",
    keyConcepts: [
      "MAC address table",
      "Switching",
      "VLAN",
      "802.1Q tagging",
      "Trunk port",
      "Access port",
    ],
    steps: [
      {
        id: "s1",
        title: "How Switches Forward Frames",
        body: "A switch learns MAC addresses by inspecting the source MAC of every frame it receives and recording which port it arrived on in the MAC address table (CAM table). When a frame arrives, the switch looks up the destination MAC: if found, the frame is forwarded out the matching port (unicast); if not found, it is flooded out all ports except the source (unknown unicast flood). Broadcast frames (FF:FF:FF:FF:FF:FF) are always flooded. The table entries age out after a configurable timeout.",
        visualCue:
          "Diagram of a 4-port switch with a MAC address table showing Port 1 → A, Port 2 → B; an incoming frame with destination B being forwarded only to Port 2.",
      },
      {
        id: "s2",
        title: "What is a VLAN?",
        body: "A VLAN (Virtual Local Area Network) logically segments a physical switch into multiple isolated broadcast domains without requiring separate hardware. Devices in VLAN 10 cannot communicate with VLAN 20 at Layer 2—their traffic stays within the VLAN. VLANs are identified by a VLAN ID (1–4094). Common use cases: separating staff and guest Wi-Fi, isolating IoT devices, and segmenting voice from data traffic. VLAN 1 is the default native VLAN on most switches.",
        visualCue:
          "Single physical switch diagram divided into two colour-coded VLAN segments (VLAN 10: PCs, VLAN 20: VoIP phones), showing that broadcast traffic stays within each VLAN.",
      },
      {
        id: "s3",
        title: "Access Ports and Trunk Ports",
        body: "An access port carries traffic for exactly one VLAN and is typically connected to an end device (PC, IP phone, printer). The device does not know it is on a VLAN—the switch handles tagging internally. A trunk port carries traffic for multiple VLANs simultaneously and is used for switch-to-switch or switch-to-router links. Trunks use 802.1Q tagging: a 4-byte tag is inserted into the Ethernet frame header identifying the VLAN ID. Frames on the native VLAN are sent untagged on the trunk.",
        visualCue:
          "Diagram showing two switches connected by a trunk link; PCs on access ports; 802.1Q tagged frames on the trunk with VLAN ID 10 and 20 annotations.",
      },
      {
        id: "s4",
        title: "Spanning Tree Protocol",
        body: "In redundant switch topologies, loops cause broadcast storms that crash the network. Spanning Tree Protocol (STP, IEEE 802.1D) prevents loops by placing redundant ports into a blocking state. STP elects a root bridge and calculates the shortest path to it; non-optimal paths are blocked. Rapid STP (RSTP, 802.1w) converges much faster (seconds vs minutes). Modern networks often use RSTP as the baseline. Port states: Blocking → Listening → Learning → Forwarding.",
        visualCue:
          "Three-switch topology diagram showing a root bridge, one forwarding path highlighted in green, and a blocked redundant link shown in red with STP port state labels.",
      },
      {
        id: "s5",
        title: "Inter-VLAN Routing",
        body: "Because VLANs are separate Layer 2 segments, routing between them requires a Layer 3 device. Two approaches: a router on a stick (a single router interface with sub-interfaces for each VLAN, connected to a trunk port) or a Layer 3 switch with VLAN interfaces (SVIs). Each VLAN gets an SVI with an IP address that acts as the default gateway for hosts in that VLAN. Inter-VLAN routing enables controlled communication between segments while maintaining the security benefits of VLAN isolation.",
        visualCue:
          "Router-on-a-stick diagram: router with one trunk link to a switch, two sub-interfaces (10.0.10.1 for VLAN 10, 10.0.20.1 for VLAN 20) and PC hosts in each VLAN using the sub-interface as default gateway.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What happens when a switch receives a frame with an unknown destination MAC address?",
        options: [
          "It drops the frame",
          "It sends it back to the source",
          "It floods it out all ports except the source",
          "It stores it until the MAC is learned",
        ],
        correctIndex: 2,
        explanation:
          "Unknown unicast flood: the switch forwards the frame out every port except where it arrived, so the destination can respond and its MAC can be learned.",
      },
      {
        id: "q2",
        question: "What standard does 802.1Q refer to?",
        options: [
          "Wireless networking",
          "VLAN tagging on trunk links",
          "Spanning Tree Protocol",
          "Port security",
        ],
        correctIndex: 1,
        explanation:
          "IEEE 802.1Q defines VLAN tagging, inserting a 4-byte tag into Ethernet frames on trunk ports to carry VLAN ID information.",
      },
      {
        id: "q3",
        question: "What problem does Spanning Tree Protocol solve?",
        options: [
          "IP address conflicts",
          "Broadcast storms caused by switching loops",
          "VLAN misconfiguration",
          "Slow trunk negotiation",
        ],
        correctIndex: 1,
        explanation:
          "STP blocks redundant switch paths to prevent loops, which would otherwise cause broadcast frames to circulate indefinitely and crash the network.",
      },
      {
        id: "q4",
        question:
          "What device is needed to route traffic between two different VLANs?",
        options: [
          "An additional switch",
          "A hub",
          "A Layer 3 router or Layer 3 switch",
          "A repeater",
        ],
        correctIndex: 2,
        explanation:
          "VLANs are separate Layer 2 domains. A Layer 3 router or Layer 3 switch is needed to route packets between them.",
      },
    ],
  },
  {
    id: "networking-routing",
    tradeId: "networking",
    title: "Routing Fundamentals",
    level: 4,
    durationMinutes: 25,
    summary:
      "Configure static routes and understand how dynamic routing protocols like RIP and OSPF automatically populate routing tables.",
    keyConcepts: [
      "Routing table",
      "Static routes",
      "Default route",
      "RIP",
      "OSPF",
      "Administrative distance",
    ],
    steps: [
      {
        id: "s1",
        title: "The Routing Table",
        body: "A routing table is the decision list a router uses to forward packets. Each entry contains a destination network, subnet mask, next-hop IP address or exit interface, and a metric. When a packet arrives, the router performs a longest-prefix match—the most specific matching route wins. A host route (/32) is more specific than a network route (/24), which is more specific than the default route (0.0.0.0/0). Directly connected networks are automatically added with an AD of 0.",
        visualCue:
          "Router routing table output (show ip route) with connected (C), static (S), and OSPF (O) route types labelled, and the longest-prefix match process illustrated with a packet arriving for 10.1.1.5.",
      },
      {
        id: "s2",
        title: "Static and Default Routes",
        body: "A static route is manually configured: ip route <destination> <mask> <next-hop>. For example, ip route 192.168.2.0 255.255.255.0 10.0.0.2 tells the router to send traffic for the 192.168.2.0/24 network to the next-hop 10.0.0.2. A default route (ip route 0.0.0.0 0.0.0.0 <next-hop>) matches any destination not in the routing table and is used as a gateway of last resort. Static routes are appropriate for small, stable networks but require manual updates when topology changes.",
        visualCue:
          "Two-router topology with a static route configured on Router A pointing to the 192.168.2.0/24 network via Router B, with the routing table entry shown.",
      },
      {
        id: "s3",
        title: "Dynamic Routing and RIP",
        body: "Dynamic routing protocols allow routers to automatically discover and share network topology information. RIP (Routing Information Protocol) is a distance-vector protocol that uses hop count as its metric (max 15 hops). RIPv2 supports CIDR and authentication. Routers broadcast their full routing table every 30 seconds. RIP converges slowly and is unsuitable for large networks. Its simplicity makes it useful for learning routing concepts and small lab environments.",
        visualCue:
          "Diagram of three routers running RIP, showing periodic routing table update messages being exchanged and the hop count values each router learns for remote networks.",
      },
      {
        id: "s4",
        title: "OSPF Fundamentals",
        body: "OSPF (Open Shortest Path First) is a link-state routing protocol that builds a complete map of the network topology rather than exchanging routing tables. Each router runs the Dijkstra SPF algorithm on its Link State Database to calculate the shortest path to every destination. OSPF converges quickly and scales to large networks. Cost metric is based on interface bandwidth. Routers exchange hello packets to discover neighbours, then flood Link State Advertisements (LSAs) to synchronise the topology database.",
        visualCue:
          "OSPF neighbour adjacency diagram showing hello packets, then LSA flooding, then each router calculating its own SPF tree to determine optimal paths.",
      },
      {
        id: "s5",
        title: "Administrative Distance",
        body: "When a router learns about the same destination from multiple sources, it uses Administrative Distance (AD) to choose the most trustworthy route. Lower AD wins. Directly connected: AD 0. Static routes: AD 1. OSPF: AD 110. RIP: AD 120. A static route always beats an OSPF route for the same destination. AD allows the router to run multiple routing protocols simultaneously and select the best source. Floating static routes use a higher AD (e.g. 200) to act as a backup that only activates when the dynamic route is lost.",
        visualCue:
          "Table of routing sources with their administrative distance values, and a diagram showing a router choosing between a static route (AD 1) and an OSPF route (AD 110) for the same destination.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What is a default route used for?",
        options: [
          "To route between VLANs",
          "As a gateway of last resort for destinations not in the routing table",
          "To summarise multiple routes",
          "To establish dynamic neighbour adjacencies",
        ],
        correctIndex: 1,
        explanation:
          "The default route (0.0.0.0/0) matches any destination and acts as a last-resort exit, typically pointing toward an internet-facing router.",
      },
      {
        id: "q2",
        question:
          "What is the maximum hop count for RIP before a route is considered unreachable?",
        options: ["8", "15", "30", "255"],
        correctIndex: 1,
        explanation:
          "RIP uses hop count as its metric and considers a route unreachable at 16 hops, making 15 the maximum reachable distance.",
      },
      {
        id: "q3",
        question: "Which routing protocol uses the Dijkstra SPF algorithm?",
        options: ["RIP", "BGP", "OSPF", "EIGRP"],
        correctIndex: 2,
        explanation:
          "OSPF is a link-state protocol that runs the Dijkstra Shortest Path First algorithm on each router's Link State Database.",
      },
      {
        id: "q4",
        question:
          "A router has both a static route (AD 1) and an OSPF route (AD 110) to the same destination. Which is used?",
        options: [
          "The OSPF route, because it is dynamic",
          "The static route, because it has lower AD",
          "Both are used in a round-robin fashion",
          "The route with the higher metric",
        ],
        correctIndex: 1,
        explanation:
          "Lower Administrative Distance wins. AD 1 (static) beats AD 110 (OSPF), so the static route is installed in the forwarding table.",
      },
    ],
  },
  {
    id: "networking-troubleshooting",
    tradeId: "networking",
    title: "Network Troubleshooting",
    level: 5,
    durationMinutes: 25,
    summary:
      "Apply a top-down and bottom-up diagnostic approach using ping, traceroute, nslookup, and Wireshark to isolate and resolve common network faults.",
    keyConcepts: [
      "ping",
      "traceroute",
      "nslookup",
      "Wireshark",
      "Layer isolation",
      "Common faults",
    ],
    steps: [
      {
        id: "s1",
        title: "Diagnostic Approaches",
        body: "Two systematic approaches: bottom-up (start at Layer 1 Physical and work up) and top-down (start at Layer 7 Application and work down). Bottom-up is best when physical connectivity is in question—check cables, link lights, and switch port status before touching software. Top-down is best when the infrastructure seems fine but a specific service is broken. The divide-and-conquer method tests Layer 3 connectivity first (ping) to quickly narrow the fault domain.",
        visualCue:
          "OSI stack showing bottom-up arrows from Physical to Application on the left, top-down arrows on the right, with the divide-and-conquer Layer 3 ping test highlighted in the middle.",
      },
      {
        id: "s2",
        title: "Using ping and traceroute",
        body: "ping sends ICMP Echo Request packets to a target and reports round-trip time (RTT) and packet loss. A successful ping confirms Layer 3 connectivity. 'Request timed out' may indicate a firewall dropping ICMP rather than a true connectivity failure. traceroute (tracert on Windows) sends packets with incrementing TTL values to map each hop along the path to the destination. The first hop where responses stop identifies where the fault lies.",
        visualCue:
          "Terminal showing: ping 8.8.8.8 with 4 successful replies and RTT values, then tracert output listing each hop's IP and latency, with one hop showing * * * (no response) highlighted.",
      },
      {
        id: "s3",
        title: "DNS Troubleshooting with nslookup",
        body: "Many connectivity problems are DNS failures—the user sees 'site not found' but the network is working. nslookup queries DNS servers directly. nslookup www.example.com tests the default DNS server. nslookup www.example.com 8.8.8.8 tests against Google DNS. If nslookup succeeds but the browser fails, check proxy or firewall rules. If nslookup fails, check the client's DNS server configuration, test connectivity to the DNS server with ping, and verify the DNS server is responding.",
        visualCue:
          "nslookup terminal output showing a successful resolution (IP returned) and a failed resolution (SERVFAIL or NXDOMAIN), with the query type and server address annotated.",
      },
      {
        id: "s4",
        title: "Capturing Traffic with Wireshark",
        body: "Wireshark is a protocol analyser that captures and decodes every frame on an interface. Open Wireshark, select the interface, and start capture. Use display filters to reduce noise: ip.addr == 192.168.1.1 shows only traffic to or from that host; tcp.port == 80 filters HTTP. Coloured rows indicate protocol types. Examine the three-way handshake (SYN, SYN-ACK, ACK) to confirm TCP sessions establish. Look for TCP Retransmissions and RST flags as indicators of connection problems.",
        visualCue:
          "Wireshark screenshot with a captured TCP handshake highlighted, display filter bar showing 'tcp.flags.syn == 1', and the packet details pane showing source, destination, and flags.",
      },
      {
        id: "s5",
        title: "Common Faults and Fixes",
        body: "Wrong subnet mask: host cannot reach gateways outside its perceived subnet—verify with ipconfig/ifconfig and match to network design. Duplicate IP: ARP conflicts cause intermittent drops—check ARP table on the switch (show arp) and reassign static IPs. Wrong default gateway: host can reach local subnet but not remote networks. MTU mismatch: large packets are silently dropped—test with ping -l 1472 (Windows). VLAN misconfiguration: access port assigned to wrong VLAN, confirmed by checking switch port config.",
        visualCue:
          "Fault reference card with five common issues, their symptoms, diagnostic command, and resolution listed in a two-column format.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A user can ping 192.168.1.1 (default gateway) but cannot reach the internet. What is the most likely cause?",
        options: [
          "Faulty NIC",
          "Wrong subnet mask on the local PC",
          "Routing or NAT issue upstream of the gateway",
          "DNS server failure",
        ],
        correctIndex: 2,
        explanation:
          "If the local gateway responds but internet fails, the fault is beyond the local network—likely a routing, NAT, or ISP issue on the gateway or upstream device.",
      },
      {
        id: "q2",
        question:
          "What does traceroute use to map each hop along a network path?",
        options: [
          "Incrementing TTL values",
          "SNMP queries",
          "ARP requests",
          "TCP SYN packets",
        ],
        correctIndex: 0,
        explanation:
          "traceroute sends packets with TTL starting at 1, incrementing by 1 each probe. Each router that decrements TTL to zero returns an ICMP Time Exceeded, revealing its address.",
      },
      {
        id: "q3",
        question:
          "A website doesn't load but ping 8.8.8.8 succeeds. What should you check next?",
        options: [
          "Physical cables",
          "DNS resolution using nslookup",
          "VLAN configuration",
          "Routing table",
        ],
        correctIndex: 1,
        explanation:
          "Successful ping to a public IP means Layer 3 is working. A website failure likely indicates a DNS problem—use nslookup to test name resolution.",
      },
      {
        id: "q4",
        question: "In Wireshark, what does a TCP RST flag indicate?",
        options: [
          "Successful connection established",
          "Data transfer in progress",
          "Connection abruptly terminated by one side",
          "DNS query sent",
        ],
        correctIndex: 2,
        explanation:
          "A TCP RST (Reset) flag abruptly terminates a connection, often indicating a refused connection, firewall drop, or application crash.",
      },
    ],
  },
  // ─── Cybersecurity Basics ────────────────────────────────────────────────
  {
    id: "cyber-fundamentals",
    tradeId: "cybersecurity",
    title: "Security Fundamentals",
    level: 1,
    durationMinutes: 25,
    summary:
      "Understand the core principles of information security — the CIA triad — and how they apply to modern digital environments.",
    keyConcepts: [
      "CIA Triad",
      "Authentication",
      "Authorisation",
      "Non-repudiation",
      "Security policies",
    ],
    steps: [
      {
        id: "step1",
        title: "The CIA Triad",
        body: "The CIA Triad is the foundation of information security: Confidentiality ensures only authorised users access data; Integrity ensures data is accurate and unaltered; Availability ensures systems are accessible when needed. Every security control maps to one or more of these principles.",
        visualCue:
          "Three-point triangle labelled Confidentiality, Integrity, Availability with examples under each.",
      },
      {
        id: "step2",
        title: "Authentication vs Authorisation",
        body: "Authentication verifies who you are (password, biometric, MFA token). Authorisation determines what you are allowed to do once authenticated. Both are essential — authentication without authorisation would let anyone do anything after login.",
        visualCue:
          "Two-step flow: Login screen (Authentication) → Permission check (Authorisation) → Access granted or denied.",
      },
      {
        id: "step3",
        title: "Security Policies & Standards",
        body: "Security policies define acceptable use, incident response, and access control within an organisation. Industry standards like ISO/IEC 27001 and the NIST Cybersecurity Framework provide structured approaches to managing information security risk.",
        visualCue:
          "Stack of documents labelled ISO 27001, NIST CSF, Acceptable Use Policy.",
      },
      {
        id: "step4",
        title: "Defence in Depth",
        body: "Defence in depth layers multiple security controls so that if one fails, others still protect the asset. Layers include perimeter (firewall), network (IDS), endpoint (antivirus), application (WAF), and data (encryption). No single layer is relied upon alone.",
        visualCue:
          "Concentric rings labelled from outside in: Perimeter, Network, Endpoint, Application, Data.",
      },
      {
        id: "step5",
        title: "Security Roles",
        body: "Security teams include analysts (monitoring and responding to threats), penetration testers (ethically attacking systems to find weaknesses), and SOC (Security Operations Centre) operators who watch dashboards for active threats. Understanding these roles helps you plan a career in cybersecurity.",
        visualCue:
          "Three role cards: Security Analyst, Penetration Tester, SOC Operator — each with key responsibilities.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which CIA Triad principle ensures data has not been tampered with?",
        options: [
          "Confidentiality",
          "Availability",
          "Integrity",
          "Non-repudiation",
        ],
        correctIndex: 2,
        explanation:
          "Integrity ensures data remains accurate and unmodified. Controls like hashing and digital signatures verify data integrity.",
      },
      {
        id: "q2",
        question: "What does authentication verify?",
        options: [
          "What a user is allowed to do",
          "Who the user is",
          "Which network they're on",
          "When they last logged in",
        ],
        correctIndex: 1,
        explanation:
          "Authentication confirms the identity of a user before granting any access. Authorisation then determines permissions.",
      },
      {
        id: "q3",
        question: "ISO/IEC 27001 is best described as:",
        options: [
          "A programming language for security scripts",
          "A firewall configuration standard",
          "An international standard for information security management systems",
          "A penetration testing methodology",
        ],
        correctIndex: 2,
        explanation:
          "ISO/IEC 27001 is a globally recognised standard for establishing and maintaining an Information Security Management System (ISMS).",
      },
      {
        id: "q4",
        question: "Defence in depth means:",
        options: [
          "Using the strongest single firewall available",
          "Layering multiple independent security controls",
          "Encrypting all data at rest",
          "Requiring multi-factor authentication",
        ],
        correctIndex: 1,
        explanation:
          "Defence in depth layers controls so if one fails the others continue to protect. No single control is trusted alone.",
      },
      {
        id: "q5",
        question:
          "A Security Operations Centre (SOC) is primarily responsible for:",
        options: [
          "Writing security policies",
          "Purchasing security hardware",
          "Monitoring and responding to active security threats",
          "Conducting annual penetration tests",
        ],
        correctIndex: 2,
        explanation:
          "SOC operators continuously monitor systems and alerts, triaging and responding to threats in real time.",
      },
    ],
  },
  {
    id: "cyber-threats",
    tradeId: "cybersecurity",
    title: "Threats & Attacks",
    level: 2,
    durationMinutes: 30,
    summary:
      "Identify common cyber threats including malware types, social engineering attacks, and the tactics used by adversaries.",
    keyConcepts: [
      "Malware",
      "Phishing",
      "Ransomware",
      "Social engineering",
      "Zero-day",
    ],
    steps: [
      {
        id: "step1",
        title: "Malware Types",
        body: "Malware is malicious software. Key types: Virus (attaches to files and spreads), Worm (self-replicates across networks without a host file), Trojan (disguises itself as legitimate software), Ransomware (encrypts files and demands payment), Spyware (silently monitors and exfiltrates data).",
        visualCue:
          "Five malware icons in a grid with type name and one-line description each.",
      },
      {
        id: "step2",
        title: "Phishing & Spear-Phishing",
        body: "Phishing sends mass deceptive emails impersonating trusted brands to steal credentials. Spear-phishing targets specific individuals using personalised information (name, role, recent activity) to increase believability. Vishing uses phone calls; smishing uses SMS.",
        visualCue:
          "Email mockup with red warning indicators: suspicious sender, urgent language, mismatched link URL.",
      },
      {
        id: "step3",
        title: "Social Engineering Tactics",
        body: "Social engineering exploits human psychology rather than technical vulnerabilities. Common tactics: Pretexting (fabricating a scenario), Baiting (leaving infected USBs), Tailgating (physical access piggybacking), and Quid pro quo (offering something in exchange for information).",
        visualCue:
          "Four scenario panels showing each social engineering tactic with a brief example.",
      },
      {
        id: "step4",
        title: "Man-in-the-Middle Attacks",
        body: "A MitM attacker intercepts communication between two parties without either knowing. Methods include ARP spoofing on local networks, rogue Wi-Fi access points, and SSL stripping. Defence: use HTTPS everywhere, VPNs on public Wi-Fi, and certificate pinning.",
        visualCue:
          "Diagram: Client → [Attacker in middle] → Server, with attacker reading and optionally modifying data.",
      },
      {
        id: "step5",
        title: "Zero-Day Vulnerabilities",
        body: "A zero-day is a flaw unknown to the software vendor. Attackers exploit it before a patch exists. Zero-days are valuable on criminal markets. Defence relies on behaviour-based detection, patching quickly once disclosed, and minimising attack surface.",
        visualCue:
          "Timeline: Vulnerability discovered → Exploit in wild → Vendor notified → Patch released. Gap labelled 'Zero-day window'.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which malware type self-replicates across a network without needing a host file?",
        options: ["Virus", "Trojan", "Worm", "Spyware"],
        correctIndex: 2,
        explanation:
          "Worms propagate autonomously across networks. Unlike viruses, they don't need to attach to an existing file to spread.",
      },
      {
        id: "q2",
        question: "Spear-phishing differs from regular phishing because it:",
        options: [
          "Uses phone calls instead of email",
          "Targets specific individuals with personalised content",
          "Only attacks financial institutions",
          "Requires physical access to a device",
        ],
        correctIndex: 1,
        explanation:
          "Spear-phishing uses personal details about the target to make the attack more convincing and harder to detect.",
      },
      {
        id: "q3",
        question:
          "An attacker leaves USB drives in a car park hoping employees will plug them in. This is called:",
        options: ["Tailgating", "Pretexting", "Baiting", "Vishing"],
        correctIndex: 2,
        explanation:
          "Baiting uses physical objects or enticing digital offers to lure victims into executing malware or revealing information.",
      },
      {
        id: "q4",
        question:
          "Which attack intercepts communications between two parties without their knowledge?",
        options: [
          "Ransomware",
          "Man-in-the-Middle",
          "Denial of Service",
          "SQL Injection",
        ],
        correctIndex: 1,
        explanation:
          "A MitM attack positions the attacker between two communicating parties to eavesdrop or alter data in transit.",
      },
      {
        id: "q5",
        question: "A zero-day exploit is dangerous primarily because:",
        options: [
          "It always targets government systems",
          "No patch exists at the time of exploitation",
          "It uses sophisticated AI algorithms",
          "It requires physical access",
        ],
        correctIndex: 1,
        explanation:
          "Zero-days are exploited before the vendor is aware or has issued a fix, leaving defenders with no patch-based protection.",
      },
    ],
  },
  {
    id: "cyber-network-security",
    tradeId: "cybersecurity",
    title: "Network Security",
    level: 3,
    durationMinutes: 30,
    summary:
      "Apply network security controls including firewalls, VPNs, and IDS/IPS to protect organisational infrastructure.",
    keyConcepts: ["Firewall", "VPN", "IDS/IPS", "DMZ", "Network segmentation"],
    steps: [
      {
        id: "step1",
        title: "Firewall Types & Rules",
        body: "Firewalls control traffic based on rules. Packet-filtering firewalls examine headers (IP, port, protocol). Stateful firewalls track connection state. Next-generation firewalls (NGFW) add deep packet inspection, application awareness, and threat intelligence. Rules are evaluated top-down; default deny is best practice.",
        visualCue:
          "Firewall evolution diagram from basic packet filter to NGFW with expanding capability labels.",
      },
      {
        id: "step2",
        title: "VPN Protocols",
        body: "VPNs create encrypted tunnels over untrusted networks. IPsec operates at Layer 3 and is common for site-to-site VPNs. SSL/TLS VPNs (OpenVPN, WireGuard) operate at Layer 4/7 and are popular for remote access. Always enforce strong authentication alongside VPN use.",
        visualCue:
          "Diagram of encrypted tunnel between remote laptop and corporate network over public internet.",
      },
      {
        id: "step3",
        title: "IDS vs IPS",
        body: "An Intrusion Detection System (IDS) monitors traffic and alerts on suspicious patterns — it is passive. An Intrusion Prevention System (IPS) actively blocks detected threats. Both use signature-based detection (known attack patterns) and anomaly-based detection (deviations from normal behaviour).",
        visualCue:
          "Two side-by-side labels: IDS (eyeglasses, 'detects and alerts') vs IPS (stop sign, 'detects and blocks').",
      },
      {
        id: "step4",
        title: "DMZ Architecture",
        body: "A DMZ (Demilitarised Zone) is a network segment between the public internet and the internal network. Public-facing servers (web, email, DNS) sit in the DMZ — if compromised, attackers cannot directly reach internal systems. Two firewalls enforce the boundary.",
        visualCue:
          "Three-zone diagram: Internet → Outer Firewall → DMZ (web server) → Inner Firewall → Internal Network.",
      },
      {
        id: "step5",
        title: "Network Segmentation & VLANs",
        body: "Segmentation divides a network into zones limiting blast radius of a breach. VLANs create logical segments on shared physical infrastructure. Segments might separate: user workstations, servers, IoT devices, and guests. Inter-VLAN routing is controlled by the firewall.",
        visualCue:
          "Network diagram with four VLAN segments (Users, Servers, IoT, Guest) with firewall controlling inter-segment traffic.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Which firewall type tracks the state of active connections?",
        options: [
          "Packet-filtering firewall",
          "Stateful firewall",
          "Proxy firewall",
          "Application firewall",
        ],
        correctIndex: 1,
        explanation:
          "Stateful firewalls maintain a connection state table, allowing them to make smarter decisions than simple packet filters.",
      },
      {
        id: "q2",
        question: "IPsec VPNs operate at which OSI layer?",
        options: ["Layer 2", "Layer 3", "Layer 4", "Layer 7"],
        correctIndex: 1,
        explanation:
          "IPsec operates at OSI Layer 3 (Network), making it suitable for site-to-site VPNs that tunnel all IP traffic.",
      },
      {
        id: "q3",
        question: "An IPS differs from an IDS by:",
        options: [
          "Being cheaper to purchase",
          "Only monitoring wired connections",
          "Actively blocking threats rather than just alerting",
          "Using only signature-based detection",
        ],
        correctIndex: 2,
        explanation:
          "An IPS is inline with traffic and can actively drop or reject malicious packets. An IDS is passive and only generates alerts.",
      },
      {
        id: "q4",
        question: "What is the primary purpose of a DMZ?",
        options: [
          "To store backup data",
          "To host public-facing servers while isolating internal systems",
          "To speed up internet access",
          "To replace the need for a VPN",
        ],
        correctIndex: 1,
        explanation:
          "A DMZ isolates public-facing services from internal networks, limiting the damage if a public server is compromised.",
      },
      {
        id: "q5",
        question: "Network segmentation using VLANs primarily helps by:",
        options: [
          "Encrypting all traffic between segments",
          "Replacing firewalls in modern networks",
          "Limiting the spread of a breach to a single segment",
          "Increasing internet bandwidth",
        ],
        correctIndex: 2,
        explanation:
          "Segmentation contains threats within a zone. If one segment is breached, attackers cannot freely move to other segments.",
      },
    ],
  },
  {
    id: "cyber-cryptography",
    tradeId: "cybersecurity",
    title: "Cryptography & PKI",
    level: 4,
    durationMinutes: 35,
    summary:
      "Understand encryption algorithms, digital certificates, and Public Key Infrastructure used to secure communications.",
    keyConcepts: [
      "Symmetric encryption",
      "Asymmetric encryption",
      "PKI",
      "Digital certificates",
      "Hashing",
    ],
    steps: [
      {
        id: "step1",
        title: "Symmetric vs Asymmetric Encryption",
        body: "Symmetric encryption uses the same key to encrypt and decrypt (fast, suitable for bulk data). AES-256 is the standard. Asymmetric encryption uses a public/private key pair — data encrypted with the public key can only be decrypted with the private key. Asymmetric is slower but solves the key distribution problem.",
        visualCue:
          "Two diagrams side by side: symmetric (single key icon for both sides) vs asymmetric (lock/key pair icons).",
      },
      {
        id: "step2",
        title: "Common Algorithms",
        body: "AES (Advanced Encryption Standard) is the symmetric standard. RSA is the dominant asymmetric algorithm using large prime factorisation. ECC (Elliptic Curve Cryptography) provides equivalent security to RSA with much smaller key sizes — important for mobile and IoT. DES and 3DES are obsolete.",
        visualCue:
          "Comparison table: Algorithm, Type, Key Size, Status (Active/Deprecated).",
      },
      {
        id: "step3",
        title: "Hashing",
        body: "Hashing produces a fixed-length digest from any input. A tiny change in input produces a completely different hash (avalanche effect). SHA-256 is the current standard — MD5 and SHA-1 are broken (collision attacks exist). Hashes are used for password storage (with salt), file integrity verification, and digital signatures.",
        visualCue:
          "Input text → hash function → fixed-length digest. Side panel showing MD5 vs SHA-256 output lengths.",
      },
      {
        id: "step4",
        title: "Digital Signatures",
        body: "A digital signature uses asymmetric cryptography: the sender hashes the message, encrypts the hash with their private key. Recipients decrypt with the sender's public key and verify the hash matches the message. This provides authenticity (who signed it) and integrity (hasn't been altered).",
        visualCue:
          "Signing flow: Message → Hash → Encrypt with private key → Signature attached. Verification flow in reverse.",
      },
      {
        id: "step5",
        title: "PKI & Certificate Authorities",
        body: "Public Key Infrastructure (PKI) manages digital certificates that bind a public key to an identity. Certificate Authorities (CAs) issue and sign certificates. Your browser trusts a root CA store. TLS certificates on websites are signed by a CA chain. Certificate revocation uses CRL or OCSP when a cert is compromised.",
        visualCue:
          "Trust chain diagram: Root CA → Intermediate CA → Website certificate. Browser checking chain.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which encryption method uses the same key for both encryption and decryption?",
        options: [
          "Asymmetric encryption",
          "Public key encryption",
          "Symmetric encryption",
          "Hashing",
        ],
        correctIndex: 2,
        explanation:
          "Symmetric encryption uses a single shared key. AES is the standard symmetric algorithm.",
      },
      {
        id: "q2",
        question:
          "ECC is preferred over RSA on mobile devices primarily because:",
        options: [
          "It is easier to implement",
          "It provides equivalent security with smaller key sizes",
          "It is an open-source algorithm",
          "Mobile devices cannot run RSA",
        ],
        correctIndex: 1,
        explanation:
          "ECC achieves equivalent security to RSA with much smaller keys, reducing computational and storage overhead — critical for resource-constrained devices.",
      },
      {
        id: "q3",
        question: "Why is MD5 no longer recommended for security purposes?",
        options: [
          "It produces hashes that are too long",
          "It is too slow for modern hardware",
          "Collision attacks have been demonstrated against it",
          "It only works on text data",
        ],
        correctIndex: 2,
        explanation:
          "MD5 is cryptographically broken — attackers can craft two different inputs that produce the same hash (collision), undermining integrity guarantees.",
      },
      {
        id: "q4",
        question: "A digital signature on an email provides:",
        options: [
          "Confidentiality and speed",
          "Authenticity and integrity",
          "Availability and redundancy",
          "Compression and encryption",
        ],
        correctIndex: 1,
        explanation:
          "A digital signature proves who sent the message (authenticity) and that it was not altered in transit (integrity).",
      },
      {
        id: "q5",
        question: "A Certificate Authority (CA) primarily does what?",
        options: [
          "Encrypts website traffic directly",
          "Issues and vouches for the authenticity of digital certificates",
          "Stores private keys for users",
          "Generates symmetric keys for VPNs",
        ],
        correctIndex: 1,
        explanation:
          "A CA signs certificates binding a public key to an identity, allowing others to trust the certificate holder's identity.",
      },
    ],
  },
  {
    id: "cyber-incident-response",
    tradeId: "cybersecurity",
    title: "Incident Response",
    level: 5,
    durationMinutes: 35,
    summary:
      "Follow a structured incident response process to detect, contain, eradicate, and recover from security incidents.",
    keyConcepts: [
      "IR lifecycle",
      "Containment",
      "Forensics",
      "SIEM",
      "Post-incident review",
    ],
    steps: [
      {
        id: "step1",
        title: "IR Lifecycle Phases",
        body: "The NIST Incident Response lifecycle has six phases: Preparation (policies, tools, training), Detection & Analysis (identify and scope the incident), Containment (stop the spread), Eradication (remove root cause), Recovery (restore systems), and Post-Incident Activity (lessons learned, report).",
        visualCue:
          "Circular lifecycle diagram with six labelled phases and arrows showing flow.",
      },
      {
        id: "step2",
        title: "Digital Forensics Basics",
        body: "Forensics preserves and analyses evidence. Order of volatility: collect most-volatile data first (CPU registers, RAM, network connections) before less-volatile (disk, logs). Use write blockers when imaging drives. Maintain a hash of the evidence copy to prove it hasn't been altered.",
        visualCue:
          "Volatility pyramid: RAM at top (most volatile, collect first) down to archival tape at bottom.",
      },
      {
        id: "step3",
        title: "SIEM Tools",
        body: "A Security Information and Event Management (SIEM) system aggregates logs from across the environment and applies correlation rules to detect attacks. Common SIEMs include Splunk, Microsoft Sentinel, and IBM QRadar. Analysts triage alerts, investigate true positives, and dismiss false positives.",
        visualCue:
          "SIEM dashboard showing log sources feeding in, correlation engine, and alert queue.",
      },
      {
        id: "step4",
        title: "Chain of Custody",
        body: "Chain of custody is the documented record of everyone who handles digital evidence. It is critical if the incident leads to legal proceedings. Document: what was collected, when, by whom, how it was stored, and all subsequent access. Breaks in chain of custody can make evidence inadmissible.",
        visualCue:
          "Evidence handling log form with fields: Item, Collected By, Date/Time, Storage Location, Transfer Record.",
      },
      {
        id: "step5",
        title: "Writing Incident Reports",
        body: "Incident reports serve multiple audiences: technical teams (detailed timeline, indicators of compromise), management (impact, risk, remediation), and potentially legal/regulatory bodies. Include: executive summary, timeline, root cause, actions taken, and recommendations. Use objective, factual language.",
        visualCue:
          "Report structure: Executive Summary → Timeline → Root Cause → Actions Taken → Recommendations.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which IR phase involves removing the malware or attacker access from systems?",
        options: ["Containment", "Detection", "Eradication", "Recovery"],
        correctIndex: 2,
        explanation:
          "Eradication removes the root cause — malware, backdoors, compromised accounts — after containment has stopped the spread.",
      },
      {
        id: "q2",
        question:
          "When collecting digital forensic evidence, you should collect which data first?",
        options: [
          "Disk images",
          "Archived logs",
          "RAM and running processes",
          "Email archives",
        ],
        correctIndex: 2,
        explanation:
          "RAM is the most volatile data — it is lost when power is cut. Volatile data must be collected before disk imaging.",
      },
      {
        id: "q3",
        question: "A SIEM system primarily does what?",
        options: [
          "Blocks network attacks automatically",
          "Encrypts sensitive data at rest",
          "Aggregates logs and correlates them to detect threats",
          "Manages user passwords centrally",
        ],
        correctIndex: 2,
        explanation:
          "A SIEM collects logs from many sources and applies correlation rules to identify attack patterns across the environment.",
      },
      {
        id: "q4",
        question: "Chain of custody is most important when:",
        options: [
          "Restoring systems after an outage",
          "The incident may lead to legal action",
          "Patching vulnerabilities after a breach",
          "Writing the executive summary",
        ],
        correctIndex: 1,
        explanation:
          "Chain of custody ensures evidence is legally admissible by documenting all handling. A break in chain can invalidate evidence in court.",
      },
      {
        id: "q5",
        question: "An incident report's executive summary is written for:",
        options: [
          "Forensic investigators needing deep technical detail",
          "Management who need impact and risk overview without technical jargon",
          "The attacker to understand what was discovered",
          "Automated SIEM processing",
        ],
        correctIndex: 1,
        explanation:
          "The executive summary is for non-technical management stakeholders who need to understand business impact and decisions, not technical specifics.",
      },
    ],
  },
  // ─── IT Help Desk ──────────────────────────────────────────────────────────
  {
    id: "helpdesk-fundamentals",
    tradeId: "help-desk",
    title: "Help Desk Fundamentals",
    level: 1,
    durationMinutes: 20,
    summary:
      "Learn the role of IT support, ticketing systems, and service level agreements that underpin effective help desk operations.",
    keyConcepts: [
      "Ticketing systems",
      "SLA",
      "Escalation",
      "ITIL",
      "Priority levels",
    ],
    steps: [
      {
        id: "step1",
        title: "Role of Help Desk in IT",
        body: "The help desk is the first point of contact between end users and IT. It handles incidents (unplanned interruptions), service requests (planned actions like new user setup), and provides a single point of contact (SPOC). Frontline support resolves issues; escalates what it cannot.",
        visualCue:
          "Org chart showing users → Help Desk (L1) → L2 Support → L3 Engineering.",
      },
      {
        id: "step2",
        title: "Ticketing Systems",
        body: "Ticketing systems track every support request from creation to resolution. Common platforms: ServiceNow, Jira Service Management, Freshdesk, Zendesk. A ticket captures: reporter, issue description, priority, assignee, status, and resolution notes. Good ticket hygiene means clear notes and prompt updates.",
        visualCue:
          "Sample ticket form: Summary, Description, Priority dropdown, Status, Assignee, and Comment thread.",
      },
      {
        id: "step3",
        title: "SLAs & Response Times",
        body: "A Service Level Agreement (SLA) defines the expected response and resolution times for tickets by priority. Critical (P1) tickets may require a 15-minute response and 4-hour resolution. Low (P4) tickets may allow 8-hour response. SLA breaches are escalated automatically in most ticketing systems.",
        visualCue:
          "SLA table: Priority P1–P4 with response time, resolution time, and example scenarios for each.",
      },
      {
        id: "step4",
        title: "Escalation Tiers",
        body: "L1 support handles common, well-documented issues: password resets, basic connectivity, account access. L2 handles more complex issues requiring deeper technical knowledge: software configuration, driver issues, remote desktop. L3 involves engineers for infrastructure, code, or vendor-level problems.",
        visualCue:
          "Three-tier pyramid: L1 (broadest, most tickets), L2 (specialist), L3 (engineering/vendor).",
      },
      {
        id: "step5",
        title: "ITIL Service Management Basics",
        body: "ITIL (Information Technology Infrastructure Library) is the most widely adopted framework for IT service management. Key concepts: Incident Management (restore service), Problem Management (find root cause), Change Management (controlled changes), and Service Catalogue (what IT offers). ITIL 4 focuses on value co-creation.",
        visualCue:
          "Four ITIL process boxes: Incident → Problem → Change → Service Catalogue with brief descriptions.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the difference between an incident and a service request?",
        options: [
          "Incidents are hardware issues; service requests are software issues",
          "An incident is an unplanned interruption; a service request is a planned action",
          "Service requests are always higher priority than incidents",
          "There is no difference — both use the same process",
        ],
        correctIndex: 1,
        explanation:
          "An incident is an unplanned disruption (e.g. email down). A service request is a planned, pre-approved action (e.g. new laptop setup).",
      },
      {
        id: "q2",
        question:
          "Which ticketing platform is widely used in enterprise IT service management?",
        options: ["Slack", "ServiceNow", "Microsoft Word", "GitHub Issues"],
        correctIndex: 1,
        explanation:
          "ServiceNow is one of the most widely deployed enterprise ITSM platforms, used for ticketing, automation, and service catalogue management.",
      },
      {
        id: "q3",
        question: "A P1 ticket indicates:",
        options: [
          "A low-priority, non-urgent request",
          "A medium-complexity software issue",
          "A critical incident requiring immediate response",
          "A hardware purchase request",
        ],
        correctIndex: 2,
        explanation:
          "P1 is the highest priority — typically a critical outage or security incident with significant business impact requiring immediate attention.",
      },
      {
        id: "q4",
        question: "L3 support in an escalation tier is best described as:",
        options: [
          "Frontline staff handling password resets",
          "Specialist technicians handling complex configurations",
          "Engineers with deep infrastructure or vendor expertise",
          "The manager who approves IT purchases",
        ],
        correctIndex: 2,
        explanation:
          "L3 is the deepest technical tier, typically involving infrastructure engineers, developers, or vendor support for complex or systemic issues.",
      },
      {
        id: "q5",
        question: "In ITIL, Problem Management is responsible for:",
        options: [
          "Restoring service as quickly as possible",
          "Approving changes to production systems",
          "Identifying and eliminating the root cause of recurring incidents",
          "Managing the service catalogue",
        ],
        correctIndex: 2,
        explanation:
          "Problem Management digs into the underlying root cause of incidents to prevent recurrence, unlike Incident Management which focuses on quick restoration.",
      },
    ],
  },
  {
    id: "helpdesk-os-troubleshooting",
    tradeId: "help-desk",
    title: "OS Troubleshooting",
    level: 2,
    durationMinutes: 25,
    summary:
      "Diagnose and resolve common Windows and macOS operating system issues using built-in tools and systematic methodology.",
    keyConcepts: [
      "Event Viewer",
      "Task Manager",
      "Safe Mode",
      "Registry",
      "System Restore",
    ],
    steps: [
      {
        id: "step1",
        title: "Windows Event Viewer & Logs",
        body: "Event Viewer (eventvwr.msc) records system, security, and application events with timestamps. Critical and Error events are the first stop when diagnosing crashes or service failures. Filter by Event ID or date range to find relevant entries. Key logs: System, Application, Security.",
        visualCue:
          "Event Viewer screenshot with System log expanded showing Error event with Event ID callout.",
      },
      {
        id: "step2",
        title: "Task Manager & Resource Monitor",
        body: "Task Manager (Ctrl+Shift+Esc) shows running processes, CPU/memory/disk/network usage, and startup items. Resource Monitor provides deeper per-process drill-down. High CPU or memory usage pinpoints runaway processes. Disk activity tab reveals I/O-heavy applications causing slowdowns.",
        visualCue:
          "Task Manager Performance tab with CPU, Memory, Disk, and Network graphs side by side.",
      },
      {
        id: "step3",
        title: "Safe Mode & Startup Repair",
        body: "Safe Mode loads Windows with minimal drivers — useful for removing malware or diagnosing driver conflicts. Access via Shift+Restart → Troubleshoot → Advanced Options → Startup Settings. Startup Repair automatically fixes boot issues. Boot Logging (msconfig) records which drivers load.",
        visualCue:
          "Boot options screen showing Safe Mode variants and Startup Repair option.",
      },
      {
        id: "step4",
        title: "Registry Basics & Common Fixes",
        body: "The Windows Registry (regedit) stores OS and application configuration. Common help desk fixes: clearing startup entries (HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run), fixing file associations, and removing malware persistence keys. Always export a backup before editing the registry.",
        visualCue:
          "Registry editor showing HKLM hive tree with startup path expanded and export backup dialog.",
      },
      {
        id: "step5",
        title: "macOS Console, Activity Monitor & Recovery Mode",
        body: "macOS Console.app shows system logs similar to Event Viewer. Activity Monitor provides CPU/memory/disk/network stats. Recovery Mode (hold Cmd+R on Intel, hold Power on Apple Silicon) gives access to Disk Utility (First Aid), Terminal, and reinstall macOS — essential for boot failures.",
        visualCue:
          "macOS Recovery Mode boot screen with four options: Restore, Reinstall, Safari, Disk Utility.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "In Windows Event Viewer, which log would you check for a failed service startup?",
        options: ["Security log", "Application log", "System log", "Setup log"],
        correctIndex: 2,
        explanation:
          "The System log records OS-level events including service starts, stops, and failures. Application log is for application-specific errors.",
      },
      {
        id: "q2",
        question: "Task Manager's startup tab is useful for:",
        options: [
          "Viewing network packet captures",
          "Disabling programs that slow down boot time",
          "Changing user account permissions",
          "Checking disk health status",
        ],
        correctIndex: 1,
        explanation:
          "The Startup tab shows all programs that run at login and their startup impact. Disabling unnecessary entries speeds up boot time.",
      },
      {
        id: "q3",
        question: "When would you boot a Windows PC into Safe Mode?",
        options: [
          "To make the PC run faster day-to-day",
          "To access the internet more securely",
          "To diagnose driver conflicts or remove malware with minimal drivers loaded",
          "To update Windows without rebooting",
        ],
        correctIndex: 2,
        explanation:
          "Safe Mode loads only essential drivers. This isolates driver conflicts and prevents malware from loading, making diagnosis and removal easier.",
      },
      {
        id: "q4",
        question: "Before editing the Windows Registry you should always:",
        options: [
          "Disable antivirus software",
          "Export a backup of the affected key or hive",
          "Log in as a standard user",
          "Disconnect from the network",
        ],
        correctIndex: 1,
        explanation:
          "Registry errors can make Windows unbootable. Always export a backup before any edits so you can restore if something goes wrong.",
      },
      {
        id: "q5",
        question: "On Apple Silicon Macs, you enter Recovery Mode by:",
        options: [
          "Holding Cmd+R at startup",
          "Holding the Power button until startup options appear",
          "Pressing F8 during boot",
          "Holding Shift at login screen",
        ],
        correctIndex: 1,
        explanation:
          "Apple Silicon Macs enter Recovery by holding the Power button. Intel Macs use Cmd+R. The two methods differ by hardware generation.",
      },
    ],
  },
  {
    id: "helpdesk-hardware-faults",
    tradeId: "help-desk",
    title: "Hardware Fault Diagnosis",
    level: 3,
    durationMinutes: 25,
    summary:
      "Systematically identify and resolve common hardware failures including display issues, storage faults, and peripheral problems.",
    keyConcepts: [
      "POST codes",
      "Display faults",
      "HDD/SSD failure",
      "Peripheral troubleshooting",
      "Swap methodology",
    ],
    steps: [
      {
        id: "step1",
        title: "POST Codes & Beep Codes",
        body: "Power-On Self-Test (POST) runs every startup. If it fails, the system emits beep codes or shows POST codes on a debug LED display (common on server boards). One short beep = POST passed. Different beep patterns indicate RAM, GPU, or CPU faults. Consult the motherboard manual for code meanings.",
        visualCue:
          "Motherboard diagram with Q-Code LED display showing '00' (boot failure) and beep code reference table.",
      },
      {
        id: "step2",
        title: "Display Troubleshooting",
        body: "Common display issues: No signal (check cable, GPU seated, try known-good cable/monitor), Artifacts (corrupted GPU memory or overheating), Flickering (driver issue or failing backlight/inverter), Half-screen black (LCD panel damage). Always test with a known-good cable and monitor first.",
        visualCue:
          "Three display fault examples: blank screen, pixel artifacts, half-black screen with likely causes labeled.",
      },
      {
        id: "step3",
        title: "Storage Failure Signs & SMART",
        body: "HDD failure signs: clicking/grinding noises, slow file access, frequent freezes. SSD signs: sudden read-only mode, files disappearing, slow write speeds. SMART (Self-Monitoring Analysis and Reporting Technology) diagnostics reveal health data. Use CrystalDiskInfo (Windows) or Disk Utility (macOS) to check SMART status.",
        visualCue:
          "CrystalDiskInfo screenshot showing drive health status with key SMART attributes highlighted.",
      },
      {
        id: "step4",
        title: "Peripheral Issues",
        body: "USB devices: check Device Manager for error codes, try different port (USB 2.0 vs 3.0), update drivers. Bluetooth: ensure device is in pairing mode, check interference (2.4GHz congestion), reset Bluetooth module. Printers: check print spooler service, clear stuck jobs, reinstall drivers from manufacturer.",
        visualCue:
          "Troubleshooting flowchart: USB device not detected → Check Device Manager → Try different port → Update driver → Replace cable.",
      },
      {
        id: "step5",
        title: "Component Swap Methodology",
        body: "The most reliable hardware diagnostic is substitution: replace one component at a time with a known-good spare and test after each swap. Start with cables (cheapest, most common fault), then PSU (use a tester), then RAM (test one stick at a time), then GPU, then CPU. Document each step.",
        visualCue:
          "Swap sequence diagram: Cable → PSU → RAM → GPU → CPU with 'Test after each swap' reminder.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A PC powers on but emits three short beeps and shows no display. This most likely indicates:",
        options: [
          "A faulty power supply",
          "A RAM failure (beep code pattern)",
          "A corrupted Windows installation",
          "A failed hard drive",
        ],
        correctIndex: 1,
        explanation:
          "Three beeps on common BIOS versions (AMI, Award) typically indicates a RAM issue. Always check the specific motherboard manual for exact code meanings.",
      },
      {
        id: "q2",
        question:
          "A monitor shows visual artefacts (random coloured pixels, corrupted display). The most likely cause is:",
        options: [
          "Failing hard drive",
          "GPU overheating or faulty GPU memory",
          "RAM failure",
          "CPU thermal paste dried out",
        ],
        correctIndex: 1,
        explanation:
          "Visual artefacts are most commonly caused by faulty GPU VRAM, overheating GPU, or a failing display cable. Check GPU temps and reseat/replace as needed.",
      },
      {
        id: "q3",
        question: "SMART diagnostics are used to:",
        options: [
          "Test RAM stability under load",
          "Diagnose CPU temperature issues",
          "Check storage drive health and predict failure",
          "Identify malware infections",
        ],
        correctIndex: 2,
        explanation:
          "SMART (Self-Monitoring Analysis and Reporting Technology) is built into drives and exposes health metrics like reallocated sectors, pending sectors, and uncorrectable errors.",
      },
      {
        id: "q4",
        question:
          "When a USB device is not detected, your first troubleshooting step should be:",
        options: [
          "Reinstall the operating system",
          "Replace the USB device immediately",
          "Check Device Manager for error codes and try a different port",
          "Update the motherboard BIOS",
        ],
        correctIndex: 2,
        explanation:
          "Start with the simplest checks: Device Manager reveals if the device is detected but has an error, and a different port rules out a dead USB controller.",
      },
      {
        id: "q5",
        question:
          "When using swap methodology to diagnose hardware, you should:",
        options: [
          "Replace all components at once then test",
          "Start with the most expensive component first",
          "Replace one component at a time with a known-good spare and test after each swap",
          "Skip cables as they rarely fail",
        ],
        correctIndex: 2,
        explanation:
          "Swapping one component at a time isolates which component is faulty. Swapping multiple at once makes it impossible to identify the cause.",
      },
    ],
  },
  {
    id: "helpdesk-networking-issues",
    tradeId: "help-desk",
    title: "Networking Issues",
    level: 4,
    durationMinutes: 25,
    summary:
      "Troubleshoot common network connectivity problems using command-line tools and systematic isolation techniques.",
    keyConcepts: [
      "ipconfig/ifconfig",
      "ping",
      "traceroute",
      "DNS issues",
      "DHCP",
    ],
    steps: [
      {
        id: "step1",
        title: "ipconfig / ifconfig / ip Commands",
        body: "Run ipconfig (Windows) or ifconfig / ip addr (Linux/macOS) to view IP address, subnet mask, and default gateway. An address of 169.254.x.x indicates APIPA — the device didn't get a DHCP lease. Correct gateway confirms the device can reach the router.",
        visualCue:
          "Terminal window showing ipconfig /all output with IP, Subnet, Gateway, and DHCP server fields highlighted.",
      },
      {
        id: "step2",
        title: "ping & traceroute",
        body: "ping sends ICMP echo requests to test reachability. ping 127.0.0.1 tests the local stack; ping gateway tests LAN; ping 8.8.8.8 tests internet Layer 3. traceroute (tracert on Windows) shows each hop and latency — identifies where packets drop or slow down.",
        visualCue:
          "tracert output showing hops 1 (router, 1ms), 2–4 (ISP hops), 5 (destination) with a timeout at hop 3 circled.",
      },
      {
        id: "step3",
        title: "DNS Troubleshooting",
        body: "If ping 8.8.8.8 works but websites don't load, DNS is likely the problem. Use nslookup google.com to test resolution. Flush the DNS cache: ipconfig /flushdns (Windows), sudo dscacheutil -flushcache (macOS). Try changing DNS to 8.8.8.8 or 1.1.1.1 to bypass ISP DNS.",
        visualCue:
          "Decision tree: Can ping IP? Yes → Try nslookup → DNS fault. No → Layer 3 fault.",
      },
      {
        id: "step4",
        title: "DHCP Lease Problems",
        body: "DHCP assigns IPs automatically. Problems: IP conflict (two devices same IP — check ARP tables), exhausted DHCP pool (server has no more leases), rogue DHCP server. Release and renew: ipconfig /release then ipconfig /renew (Windows); dhclient -r then dhclient (Linux).",
        visualCue:
          "DHCP lease cycle diagram: Discover → Offer → Request → Acknowledge, with release/renew steps shown.",
      },
      {
        id: "step5",
        title: "Wi-Fi Troubleshooting",
        body: "Wi-Fi issues: Check signal strength and channel congestion (use inSSIDer or WiFi Analyzer — look for overlapping channels). Update or roll back Wi-Fi driver. Forget and rejoin the network. Check for interference from microwaves, Bluetooth, or neighbouring networks on 2.4GHz. 5GHz has less interference but shorter range.",
        visualCue:
          "Wi-Fi analyser screenshot showing channel congestion on 2.4GHz with recommendation to switch to less congested channel.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A Windows PC shows an IP address of 169.254.45.12. This means:",
        options: [
          "The IP was manually configured",
          "The device has a valid DHCP lease",
          "DHCP failed and the device assigned itself an APIPA address",
          "The device is connected to a VPN",
        ],
        correctIndex: 2,
        explanation:
          "169.254.x.x is an APIPA (Automatic Private IP Addressing) address — assigned by Windows when it cannot reach a DHCP server.",
      },
      {
        id: "q2",
        question:
          "ping 8.8.8.8 succeeds but websites fail to load. The most likely issue is:",
        options: [
          "Firewall blocking HTTP traffic",
          "DNS resolution failure",
          "Faulty network cable",
          "IP address conflict",
        ],
        correctIndex: 1,
        explanation:
          "Successful ping to a public IP confirms Layer 3 connectivity. Website failure points to DNS — the name cannot be resolved to an IP.",
      },
      {
        id: "q3",
        question: "Which command releases a DHCP lease on Windows?",
        options: [
          "ipconfig /flushdns",
          "ipconfig /release",
          "ipconfig /all",
          "netstat -r",
        ],
        correctIndex: 1,
        explanation:
          "ipconfig /release drops the current DHCP lease. Follow with ipconfig /renew to obtain a fresh lease from the DHCP server.",
      },
      {
        id: "q4",
        question: "traceroute (tracert) is most useful for:",
        options: [
          "Checking which DNS server is in use",
          "Displaying the current IP address",
          "Identifying where in the network path packets are dropping or experiencing high latency",
          "Releasing and renewing a DHCP address",
        ],
        correctIndex: 2,
        explanation:
          "traceroute shows each router hop between source and destination with round-trip times, pinpointing where a problem occurs in the network path.",
      },
      {
        id: "q5",
        question:
          "Two devices on the same network have been assigned the same IP address. This is called:",
        options: [
          "DNS poisoning",
          "ARP flooding",
          "IP address conflict",
          "DHCP starvation",
        ],
        correctIndex: 2,
        explanation:
          "An IP conflict occurs when two devices share the same IP. Both devices experience connectivity issues. Check the DHCP scope for duplicates or manually assigned addresses clashing with the DHCP range.",
      },
    ],
  },
  {
    id: "helpdesk-communication",
    tradeId: "help-desk",
    title: "Customer Communication",
    level: 5,
    durationMinutes: 20,
    summary:
      "Deliver professional, empathetic IT support through clear communication, expectation management, and effective documentation.",
    keyConcepts: [
      "Active listening",
      "Plain language",
      "Expectation setting",
      "Documentation",
      "Escalation etiquette",
    ],
    steps: [
      {
        id: "step1",
        title: "Active Listening & Empathy",
        body: "Active listening means letting the user fully describe their problem before responding. Acknowledge their frustration: 'I understand this is affecting your work — let's get it sorted.' Avoid interrupting. Repeat back what you've heard to confirm understanding. Empathy builds trust and makes users more cooperative.",
        visualCue:
          "Two-column comparison: 'Dismissive response' vs 'Empathetic response' for the same user complaint.",
      },
      {
        id: "step2",
        title: "Plain Language Explanations",
        body: "Avoid jargon when talking to non-technical users. Instead of 'Your DHCP lease is expired,' say 'Your computer lost its network address — I'll get it reconnected.' Use analogies. Check understanding by asking 'Does that make sense?' or 'Any questions?' Not by asking 'You understood that, right?'",
        visualCue:
          "Side-by-side: Technical jargon explanation vs plain language equivalent for three common issues.",
      },
      {
        id: "step3",
        title: "Setting Expectations & ETAs",
        body: "Always give users an ETA even if it's approximate: 'I need to escalate this — expect an update by 3pm today.' If the ETA changes, proactively notify the user before it expires — don't wait for them to chase you. Under-promise and over-deliver. Update the ticket at every step.",
        visualCue:
          "Timeline showing ticket raised → ETA given → proactive update → resolved, with user satisfaction score increasing.",
      },
      {
        id: "step4",
        title: "Writing Clear Resolution Notes",
        body: "Good resolution notes allow the next technician to understand what happened without asking. Include: root cause, steps taken, outcome, and any follow-up actions. Avoid vague notes like 'Fixed' or 'Restarted.' Write: 'DNS cache corruption caused website failures. Flushed DNS cache using ipconfig /flushdns. Issue resolved.'",
        visualCue:
          "Two ticket note examples: vague ('Sorted by IT') vs detailed (root cause, action, outcome).",
      },
      {
        id: "step5",
        title: "Handling Difficult Users",
        body: "Frustrated users need acknowledgement before solutions. Never argue or take criticism personally. Use 'I' language: 'I want to make sure this is fixed correctly.' If a user is abusive, calmly state boundaries: 'I want to help you, but I need our conversation to remain professional.' Escalate to a supervisor if conduct continues.",
        visualCue:
          "Flow chart: User frustrated → Acknowledge → Explain next steps → Resolve. Branch: User abusive → State boundary → Supervisor if continues.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "When a user calls in frustrated about a recurring issue, the first thing you should do is:",
        options: [
          "Immediately start troubleshooting without letting them explain",
          "Transfer them to a senior technician",
          "Acknowledge their frustration and listen to the full problem before responding",
          "Tell them the issue is outside your scope",
        ],
        correctIndex: 2,
        explanation:
          "Acknowledging frustration and listening builds trust. Jumping straight to solutions before fully understanding the problem often leads to misdiagnosis.",
      },
      {
        id: "q2",
        question: "How should you explain a DNS issue to a non-technical user?",
        options: [
          "The DNS resolver failed to translate the FQDN to an IP address",
          "Your computer's address book for websites needs to be refreshed — I'll fix that now",
          "DHCP lease expiry caused packet routing failure",
          "The TCP/IP stack's name resolution cache is corrupt",
        ],
        correctIndex: 1,
        explanation:
          "Plain language analogies (address book) make technical concepts accessible without jargon, keeping the user informed without overwhelming them.",
      },
      {
        id: "q3",
        question:
          "If a repair is taking longer than you initially told the user, you should:",
        options: [
          "Wait for the user to follow up",
          "Close the ticket to avoid SLA breach",
          "Proactively contact the user with an updated ETA before the original time expires",
          "Escalate immediately to avoid responsibility",
        ],
        correctIndex: 2,
        explanation:
          "Proactive communication prevents frustration. Users dislike chasing for updates far more than delays. Always notify before the deadline passes.",
      },
      {
        id: "q4",
        question: "A good ticket resolution note should include:",
        options: [
          "Only the outcome: 'Fixed'",
          "Root cause, steps taken, outcome, and any follow-up actions",
          "The user's personal contact details",
          "A rating of how difficult the user was",
        ],
        correctIndex: 1,
        explanation:
          "Detailed notes allow the next technician to understand what happened quickly without reinvestigating. Vague notes like 'Fixed' provide no context for recurrence or training.",
      },
      {
        id: "q5",
        question:
          "A user becomes verbally abusive during a support call. The correct response is:",
        options: [
          "Match their energy to show confidence",
          "Hang up immediately",
          "Calmly state the boundary and escalate to a supervisor if the behaviour continues",
          "Apologise repeatedly and accept the behaviour",
        ],
        correctIndex: 2,
        explanation:
          "Calmly stating professional boundaries is assertive without escalating conflict. If abuse continues, involve a supervisor — technicians should never tolerate abusive behaviour.",
      },
    ],
  },
  // ─── Web Dev Basics ───────────────────────────────────────────────────────
  {
    id: "webdev-html",
    tradeId: "web-dev",
    title: "HTML Fundamentals",
    level: 1,
    durationMinutes: 25,
    summary:
      "Build the structural foundation of web pages using HTML5 semantic elements, forms, and accessibility best practices.",
    keyConcepts: [
      "HTML5 semantics",
      "Document structure",
      "Forms",
      "Attributes",
      "Accessibility",
    ],
    steps: [
      {
        id: "step1",
        title: "Document Structure",
        body: "Every HTML5 document starts with <!DOCTYPE html>, followed by <html lang='en'>, <head> (metadata, title, CSS links), and <body> (visible content). The <head> contains <meta charset='UTF-8'>, <meta name='viewport' content='width=device-width, initial-scale=1'>, and <title>. These are not optional for correct rendering.",
        visualCue:
          "Annotated HTML document skeleton with each element labelled and purpose noted.",
      },
      {
        id: "step2",
        title: "Semantic Elements",
        body: "Semantic HTML uses elements that describe their meaning: <header> (page/section header), <nav> (navigation), <main> (primary content — only one per page), <section> (thematic grouping), <article> (standalone content), <aside> (sidebar content), <footer>. Using semantic elements improves accessibility and SEO.",
        visualCue:
          "Page wireframe with coloured zones labelled with their semantic HTML element names.",
      },
      {
        id: "step3",
        title: "Text & Inline Elements",
        body: "Heading hierarchy: <h1> (one per page, main topic) → <h6> (least important). Never skip heading levels — screen readers navigate by headings. <p> for paragraphs. <a href='url'> for links (always descriptive text, not 'click here'). <strong> for important text (bold semantic meaning), <em> for emphasis (italic).",
        visualCue:
          "Document outline showing h1→h2→h3 hierarchy with screen reader navigation mode shown alongside.",
      },
      {
        id: "step4",
        title: "Forms & Inputs",
        body: "<form> groups inputs. Each input needs a <label> linked via for/id attributes. Input types: text, email, password, checkbox, radio, select, textarea. Use <button type='submit'> or <input type='submit'> to submit. The action attribute sets where data is sent; method sets GET or POST.",
        visualCue:
          "Contact form structure: label/input pairs with form attributes labelled — action, method, type.",
      },
      {
        id: "step5",
        title: "Alt Text & ARIA Basics",
        body: "Alt text on <img> tags describes the image for screen readers and when images fail to load. Decorative images use alt=''. ARIA (Accessible Rich Internet Applications) adds semantic roles and labels to non-semantic elements: aria-label for unlabelled controls, role='button' for div-based buttons, aria-expanded for disclosure widgets.",
        visualCue:
          "Image tag with alt text examples: descriptive vs decorative vs missing. ARIA attribute examples below.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which HTML element should appear only once per page to wrap the primary content?",
        options: ["<section>", "<div>", "<main>", "<article>"],
        correctIndex: 2,
        explanation:
          "<main> is intended for the primary content of the document. Only one <main> element should exist per page to avoid confusing screen readers.",
      },
      {
        id: "q2",
        question:
          "Why should you not skip heading levels (e.g. jump from h1 to h3)?",
        options: [
          "It causes CSS to break",
          "Screen readers use heading hierarchy to navigate — skipping levels confuses the outline",
          "Search engines penalise websites with skipped headings",
          "Browsers don't support non-sequential headings",
        ],
        correctIndex: 1,
        explanation:
          "Screen reader users navigate by headings. A logical hierarchy (h1 → h2 → h3) creates a meaningful outline. Skipping levels fragments the document structure.",
      },
      {
        id: "q3",
        question: "The <label> element in a form is important because:",
        options: [
          "It adds bold styling to text",
          "It groups related form controls together",
          "It links a visible text description to its input, aiding screen reader users",
          "It prevents form submission until filled in",
        ],
        correctIndex: 2,
        explanation:
          "Associating a <label> with an input via for/id means screen readers announce the label when the input is focused, making forms accessible.",
      },
      {
        id: "q4",
        question:
          "An image that is purely decorative (adds no information) should have its alt attribute set to:",
        options: [
          "alt='decorative'",
          "alt='image'",
          "The filename",
          "alt='' (empty string)",
        ],
        correctIndex: 3,
        explanation:
          "An empty alt attribute (alt='') tells screen readers to skip the image entirely. This avoids reading out meaningless filenames for decorative visuals.",
      },
      {
        id: "q5",
        question: "In an HTML form, what does the method='POST' attribute do?",
        options: [
          "Sends form data appended to the URL",
          "Sends form data in the HTTP request body, not the URL",
          "Automatically encrypts the form data",
          "Posts the form to social media",
        ],
        correctIndex: 1,
        explanation:
          "POST sends data in the request body — safer for sensitive data (passwords, personal info) as it doesn't appear in the URL or browser history.",
      },
    ],
  },
  {
    id: "webdev-css",
    tradeId: "web-dev",
    title: "CSS Styling",
    level: 2,
    durationMinutes: 30,
    summary:
      "Style web pages using CSS selectors, the box model, Flexbox, and custom properties to create visually polished layouts.",
    keyConcepts: [
      "Selectors",
      "Box model",
      "Flexbox",
      "Custom properties",
      "Specificity",
    ],
    steps: [
      {
        id: "step1",
        title: "CSS Selectors & Specificity",
        body: "Selectors target elements: element (p), class (.card), ID (#header), attribute ([type='text']), and pseudo-classes (:hover, :focus). Specificity determines which rule wins: inline styles (1000) > ID (100) > class (10) > element (1). When specificity ties, the last rule wins (cascade).",
        visualCue:
          "Specificity score calculator diagram showing four columns: inline/ID/class/element with scores adding up.",
      },
      {
        id: "step2",
        title: "The Box Model",
        body: "Every HTML element is a box: content → padding → border → margin. box-sizing: border-box (use this always) makes width include padding and border, preventing unexpected overflow. Margin collapses vertically between adjacent elements. Use DevTools to visualise the box model for any element.",
        visualCue:
          "Box model diagram with concentric zones labelled content, padding, border, margin with pixel values.",
      },
      {
        id: "step3",
        title: "Flexbox for Layout",
        body: "Flexbox handles one-dimensional layouts (row or column). Parent: display:flex, flex-direction, justify-content (main axis alignment), align-items (cross axis alignment), gap. Children: flex-grow (expand to fill), flex-shrink (compress), flex-basis (base size). Use flex:1 for equal-width columns.",
        visualCue:
          "Flex container with three boxes demonstrating justify-content: space-between and align-items: center.",
      },
      {
        id: "step4",
        title: "CSS Custom Properties",
        body: "Custom properties (CSS variables) store reusable values: --primary-color: #1a56db; Usage: color: var(--primary-color). Define on :root for global scope. Variables cascade like other CSS — override locally in component selectors. Enables consistent theming and reduces repetition.",
        visualCue:
          ":root block defining three custom properties, then component styles using var() to reference them.",
      },
      {
        id: "step5",
        title: "Transitions & Basic Animations",
        body: "CSS transitions animate between states: transition: background-color 0.2s ease; Apply to the element (not :hover) so the reverse transition also animates. CSS animations use @keyframes for multi-step animation: @keyframes fadeIn { from {opacity:0} to {opacity:1} }. Prefer CSS transitions over JS for performance.",
        visualCue:
          "Button with hover state: before (grey) and after (blue) with arrow and 'transition: 0.2s ease' label.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Which CSS selector has the highest specificity?",
        options: [
          "p { color: red; }",
          ".text { color: red; }",
          "#header { color: red; }",
          "* { color: red; }",
        ],
        correctIndex: 2,
        explanation:
          "ID selectors (#header) have specificity of 100 — higher than class (10) or element (1) selectors. Inline styles score 1000.",
      },
      {
        id: "q2",
        question: "Setting box-sizing: border-box on an element means:",
        options: [
          "Margin is included in the width calculation",
          "Width and height include padding and border",
          "The element becomes a block-level container",
          "Overflow is hidden by default",
        ],
        correctIndex: 1,
        explanation:
          "border-box includes padding and border in the declared width/height, making layout sizing predictable. content-box (the default) excludes them, causing frequent overflow surprises.",
      },
      {
        id: "q3",
        question:
          "In Flexbox, justify-content controls alignment on which axis?",
        options: [
          "The cross axis (perpendicular to flex direction)",
          "The main axis (along flex direction)",
          "Both axes equally",
          "Only the vertical axis",
        ],
        correctIndex: 1,
        explanation:
          "justify-content aligns flex items along the main axis (horizontal for flex-direction:row). align-items handles the cross axis.",
      },
      {
        id: "q4",
        question: "CSS custom properties are defined using which syntax?",
        options: [
          "$primary: blue;",
          "@primary: blue;",
          "--primary: blue;",
          "var(primary): blue;",
        ],
        correctIndex: 2,
        explanation:
          "CSS custom properties use the -- prefix: --primary: blue. They are referenced with var(--primary). This is native CSS, not Sass.",
      },
      {
        id: "q5",
        question:
          "For a smooth hover transition on a button, the transition property should be placed on:",
        options: [
          "The :hover selector only",
          "A separate @keyframes rule",
          "The button element (not :hover) so both enter and exit transitions animate",
          "The parent container",
        ],
        correctIndex: 2,
        explanation:
          "Placing transition on the element (not :hover) ensures both the hover-in and hover-out transitions are animated. On :hover only, the exit transition would be instant.",
      },
    ],
  },
  {
    id: "webdev-javascript",
    tradeId: "web-dev",
    title: "JavaScript Basics",
    level: 3,
    durationMinutes: 35,
    summary:
      "Add interactivity to web pages using JavaScript variables, functions, DOM manipulation, and event handling.",
    keyConcepts: [
      "Variables",
      "Functions",
      "DOM",
      "Events",
      "Arrays & objects",
    ],
    steps: [
      {
        id: "step1",
        title: "Variables & Data Types",
        body: "const for values that won't be reassigned (prefer this by default). let for variables that will change. var is function-scoped and largely replaced by const/let. Data types: string ('hello'), number (42, 3.14), boolean (true/false), null (intentional empty), undefined (not yet assigned), object, array.",
        visualCue:
          "Three variable declarations: const, let, var — with scope and mutability comparison table.",
      },
      {
        id: "step2",
        title: "Functions & Arrow Functions",
        body: "Functions encapsulate reusable logic. Function declaration: function greet(name) { return 'Hello ' + name; }. Arrow function (ES6): const greet = (name) => 'Hello ' + name; Arrow functions are shorter and don't have their own 'this'. Use for callbacks and short utility functions.",
        visualCue:
          "Side-by-side: traditional function declaration vs arrow function equivalent for same logic.",
      },
      {
        id: "step3",
        title: "DOM Selection & Manipulation",
        body: "The DOM (Document Object Model) is a JavaScript representation of the HTML page. Select elements: document.querySelector('.card') (first match), document.querySelectorAll('li') (all matches). Modify: element.textContent = 'New text'; element.classList.add('active'); element.setAttribute('href', '/page').",
        visualCue:
          "HTML document on left, JavaScript queries targeting specific elements on right with results highlighted.",
      },
      {
        id: "step4",
        title: "Event Listeners",
        body: "Events trigger code when users interact: click, mouseover, keydown, submit, input. Add with addEventListener: button.addEventListener('click', () => { alert('Clicked!'); }). Always use addEventListener over onclick attributes — it allows multiple handlers and is easier to remove. Remove with removeEventListener.",
        visualCue:
          "Button → click event → event listener function → DOM update. Code snippet alongside.",
      },
      {
        id: "step5",
        title: "Arrays & Objects",
        body: "Arrays store ordered lists: const colours = ['red', 'green', 'blue']. Access by index (colours[0]). Common methods: push (add), pop (remove last), map (transform), filter (subset), forEach (iterate). Objects store key-value pairs: const user = { name: 'Alex', age: 28 }. Access: user.name or user['name'].",
        visualCue:
          "Array diagram with index labels, and object diagram with key-value pairs labelled. Common methods listed below.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which variable keyword should you use by default in modern JavaScript?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2,
        explanation:
          "const is the safest default — it prevents accidental reassignment. Use let only when the variable needs to change. Avoid var due to its function-scoping and hoisting behaviour.",
      },
      {
        id: "q2",
        question:
          "An arrow function differs from a traditional function primarily because it:",
        options: [
          "Cannot accept parameters",
          "Does not have its own 'this' binding",
          "Can only be used inside classes",
          "Returns undefined by default",
        ],
        correctIndex: 1,
        explanation:
          "Arrow functions inherit 'this' from their enclosing scope. This makes them ideal for callbacks and avoids common 'this' binding bugs in traditional functions.",
      },
      {
        id: "q3",
        question: "Which method selects ALL elements matching a CSS selector?",
        options: [
          "document.getElementById()",
          "document.querySelector()",
          "document.querySelectorAll()",
          "document.getElement()",
        ],
        correctIndex: 2,
        explanation:
          "querySelectorAll returns a NodeList of all matching elements. querySelector returns only the first match.",
      },
      {
        id: "q4",
        question:
          "Why is addEventListener preferred over the onclick HTML attribute?",
        options: [
          "It runs faster than onclick",
          "It allows multiple event handlers and is easier to remove programmatically",
          "onclick was removed in ES6",
          "addEventListener works on all browsers but onclick does not",
        ],
        correctIndex: 1,
        explanation:
          "addEventListener allows attaching multiple handlers to one event and can be removed with removeEventListener. Inline onclick attributes mix logic with structure and can only have one handler.",
      },
      {
        id: "q5",
        question: "The Array .filter() method:",
        options: [
          "Sorts the array alphabetically",
          "Returns a new array with elements that pass a test function",
          "Modifies each element in the original array",
          "Removes duplicate values from the array",
        ],
        correctIndex: 1,
        explanation:
          ".filter() takes a callback that returns true/false for each element. It returns a new array of only the elements where the callback returned true.",
      },
    ],
  },
  {
    id: "webdev-responsive",
    tradeId: "web-dev",
    title: "Responsive Design",
    level: 4,
    durationMinutes: 30,
    summary:
      "Build websites that adapt to any screen size using media queries, fluid layouts, and mobile-first design principles.",
    keyConcepts: [
      "Media queries",
      "Mobile-first",
      "Viewport",
      "CSS Grid",
      "Fluid units",
    ],
    steps: [
      {
        id: "step1",
        title: "Viewport Meta Tag",
        body: "Without <meta name='viewport' content='width=device-width, initial-scale=1'> in the <head>, mobile browsers zoom out to render the desktop layout at a small size. This single tag tells the browser to use the device's actual width and not scale down. It is required for any responsive design to work.",
        visualCue:
          "Side-by-side: page without viewport meta (zoomed out, tiny text) vs with viewport meta (full-width, readable).",
      },
      {
        id: "step2",
        title: "Mobile-First Approach",
        body: "Mobile-first means writing base CSS for small screens, then adding media queries to adjust for larger screens. This is more maintainable than desktop-first (writing for large screens then undoing styles for small). Start with a single-column layout, then use min-width media queries to add columns as viewport grows.",
        visualCue:
          "CSS snippet: base styles (single column) + @media (min-width: 768px) { two columns } + @media (min-width: 1200px) { three columns }.",
      },
      {
        id: "step3",
        title: "CSS Media Queries",
        body: "Media queries apply styles conditionally: @media (min-width: 768px) { ... } targets viewports 768px and above. Common breakpoints: 480px (large phone), 768px (tablet), 1024px (laptop), 1280px (desktop). Also use prefers-color-scheme: dark for dark mode and prefers-reduced-motion for accessibility.",
        visualCue:
          "Responsive breakpoints diagram showing device sizes mapped to media query values.",
      },
      {
        id: "step4",
        title: "CSS Grid for 2D Layouts",
        body: "CSS Grid handles two-dimensional layouts (rows AND columns). Parent: display:grid; grid-template-columns: repeat(3, 1fr); gap: 1rem. Children: use grid-column: span 2 to span multiple columns. Use auto-fill with minmax for responsive grids without media queries: grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)).",
        visualCue:
          "Three-column grid with one card spanning two columns, labelled with grid-column and gap properties.",
      },
      {
        id: "step5",
        title: "Fluid Units",
        body: "% is relative to parent element. vw/vh are viewport width/height (100vw = full viewport width). rem is relative to the root font size (1rem = 16px by default) — use for font sizes and spacing for accessibility. em is relative to the parent element's font size. Avoid px for font sizes — it ignores user browser font preferences.",
        visualCue:
          "Unit comparison table: px (fixed), % (relative to parent), rem (relative to root), vw (relative to viewport).",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "What does the viewport meta tag prevent on mobile browsers?",
        options: [
          "JavaScript execution",
          "The browser zooming out to render the desktop layout at a small size",
          "Images loading at full resolution",
          "Third-party cookies",
        ],
        correctIndex: 1,
        explanation:
          "Without the viewport meta tag, mobile browsers scale down the full desktop layout to fit the screen, making text tiny and unreadable. The tag enables true responsive behaviour.",
      },
      {
        id: "q2",
        question: "Mobile-first CSS means:",
        options: [
          "Designing only for mobile and ignoring desktops",
          "Writing base styles for small screens and adding min-width media queries for larger screens",
          "Using max-width media queries to remove features on mobile",
          "Building a separate mobile website",
        ],
        correctIndex: 1,
        explanation:
          "Mobile-first is more maintainable: start minimal, progressively enhance. Max-width (desktop-first) means writing and then overriding styles for smaller screens.",
      },
      {
        id: "q3",
        question:
          "Which CSS unit adjusts based on the root element's font size, making it ideal for accessibility?",
        options: ["px", "em", "rem", "vw"],
        correctIndex: 2,
        explanation:
          "rem (root em) is relative to the <html> font size. If a user sets a larger default font size in their browser, rem-based sizes scale accordingly. px ignores these preferences.",
      },
      {
        id: "q4",
        question:
          "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) creates:",
        options: [
          "A fixed 3-column grid",
          "A single-column grid",
          "A responsive grid that adds columns as space allows, each at least 250px wide",
          "A grid that only works on desktop",
        ],
        correctIndex: 2,
        explanation:
          "auto-fill + minmax creates a fluid responsive grid without media queries — the browser calculates how many columns fit and adjusts as the viewport changes.",
      },
      {
        id: "q5",
        question: "The CSS media feature prefers-reduced-motion is used to:",
        options: [
          "Speed up CSS animations on slow devices",
          "Disable all CSS transitions globally",
          "Respect users who have requested less animation in their OS accessibility settings",
          "Reduce the file size of animations",
        ],
        correctIndex: 2,
        explanation:
          "Some users have vestibular disorders or other conditions where motion causes discomfort. prefers-reduced-motion lets you provide a reduced-animation experience when users opt in via their OS settings.",
      },
    ],
  },
  {
    id: "webdev-devtools",
    tradeId: "web-dev",
    title: "Dev Tools & Deployment",
    level: 5,
    durationMinutes: 25,
    summary:
      "Use browser developer tools to inspect and debug web pages, then deploy a site using Git and a static hosting service.",
    keyConcepts: [
      "Browser DevTools",
      "Console",
      "Network tab",
      "Git basics",
      "Static hosting",
    ],
    steps: [
      {
        id: "step1",
        title: "Chrome DevTools Elements & Styles",
        body: "Open DevTools with F12 or Ctrl+Shift+I. The Elements panel shows the live DOM — hover to highlight elements on screen, click to inspect. The Styles pane shows computed and applied CSS rules with specificity. Edit values live to test changes before committing to code. Right-click any element on page → Inspect to jump directly to it.",
        visualCue:
          "DevTools Elements panel with DOM tree on left and Styles pane on right, a div element highlighted.",
      },
      {
        id: "step2",
        title: "Console for JS Debugging",
        body: "The Console runs JavaScript and shows errors, warnings, and console.log output. Use console.log(variable) to inspect values. console.error() for errors, console.table() for arrays/objects. Click error messages to jump to the source line. Use the Console's autocomplete to explore object properties. Clear with Ctrl+L.",
        visualCue:
          "Console panel showing a TypeError with line number link, console.log output, and a console.table for an array of objects.",
      },
      {
        id: "step3",
        title: "Network Tab & Performance",
        body: "The Network tab records every request made by the page. Filter by type (XHR, CSS, JS, Img). Check Status codes (200 OK, 404 Not Found, 500 Server Error). Click a request to see headers, preview, and timing. Waterfall view shows load sequence. Use Throttle dropdown to simulate slow connections.",
        visualCue:
          "Network tab waterfall view with HTML, CSS, JS, and image requests showing load timing and status codes.",
      },
      {
        id: "step4",
        title: "Git Init / Add / Commit / Push",
        body: "Git tracks changes to code. Workflow: git init (create repo), git add . (stage all changes), git commit -m 'message' (save snapshot), git push origin main (upload to remote). Create a remote on GitHub first, then git remote add origin <url>. git status shows current state; git log shows history.",
        visualCue:
          "Git workflow diagram: Working directory → git add → Staging area → git commit → Local repo → git push → Remote.",
      },
      {
        id: "step5",
        title: "Deploying to Netlify or GitHub Pages",
        body: "GitHub Pages: push your site to a repo, go to Settings → Pages → select branch → save. Your site is live at username.github.io/reponame. Netlify: drag the project folder onto netlify.com/drop for instant deploy, or connect a GitHub repo for auto-deploy on every push. Both are free for static sites.",
        visualCue:
          "Netlify drag-and-drop deploy screen and GitHub Pages settings panel side by side.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "To quickly inspect a specific element on a webpage, you should:",
        options: [
          "Search the entire source code for its class name",
          "Right-click the element on the page and select Inspect",
          "Open DevTools and manually scroll through the DOM",
          "Reload the page with DevTools already open",
        ],
        correctIndex: 1,
        explanation:
          "Right-click → Inspect jumps directly to that element in the Elements panel. This is far faster than manually navigating the DOM tree.",
      },
      {
        id: "q2",
        question: "In the DevTools Network tab, a status code of 404 means:",
        options: [
          "The request was successful",
          "The server had an internal error",
          "The requested resource was not found",
          "The request was redirected",
        ],
        correctIndex: 2,
        explanation:
          "404 Not Found indicates the server couldn't find the requested resource — typically a missing file, wrong URL, or broken link.",
      },
      {
        id: "q3",
        question: "git add . stages:",
        options: [
          "Only modified files",
          "Only new untracked files",
          "All changes in the current directory (new, modified, deleted)",
          "Files that were committed in the last push",
        ],
        correctIndex: 2,
        explanation:
          "git add . stages all changes in the working directory — new files, modifications, and deletions — preparing them for the next commit.",
      },
      {
        id: "q4",
        question: "console.table() in the DevTools Console is most useful for:",
        options: [
          "Generating HTML table elements",
          "Displaying arrays or objects in a formatted, sortable table",
          "Logging error messages with timestamps",
          "Measuring JavaScript execution time",
        ],
        correctIndex: 1,
        explanation:
          "console.table() renders arrays and objects as a formatted table in the Console — much easier to read than nested console.log output.",
      },
      {
        id: "q5",
        question: "Netlify and GitHub Pages are suitable for deploying:",
        options: [
          "Node.js server-side applications with a database",
          "Static websites (HTML, CSS, JS) with no server-side processing",
          "PHP applications requiring a web server",
          "Docker container deployments",
        ],
        correctIndex: 1,
        explanation:
          "Both Netlify and GitHub Pages serve static files only. For server-side logic, databases, or dynamic content, a platform like Heroku, Railway, or a VPS is needed.",
      },
    ],
  },
];
