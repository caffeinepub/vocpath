import type { BuildingZone } from "./buildingZones";

export const itZones: BuildingZone[] = [
  {
    id: "pc-hardware",
    tradeName: "PC Hardware",
    shortName: "PC Hardware",
    description:
      "Identify, assemble, and troubleshoot desktop and laptop components including CPU, RAM, storage, and power systems.",
    color: "oklch(52% 0.18 250)",
    svgX: 50,
    svgY: 50,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "pc-hardware-l1",
        level: 1,
        name: "Component Identification",
        description:
          "Identify motherboard, CPU, RAM, GPU, PSU, and storage devices.",
      },
      {
        id: "pc-hardware-l2",
        level: 2,
        name: "Assembly & POST",
        description:
          "Assemble a PC, understand the POST sequence, and clear BIOS errors.",
      },
      {
        id: "pc-hardware-l3",
        level: 3,
        name: "Storage Systems",
        description: "HDDs, SSDs, NVMe, RAID levels, and partition management.",
      },
      {
        id: "pc-hardware-l4",
        level: 4,
        name: "Power & Cooling",
        description:
          "PSU ratings, cable management, thermal paste, and cooling solutions.",
      },
      {
        id: "pc-hardware-l5",
        level: 5,
        name: "Hardware Diagnostics",
        description:
          "Systematic fault diagnosis, POST codes, and component swap methodology.",
      },
    ],
  },
  {
    id: "networking",
    tradeName: "Networking Fundamentals",
    shortName: "Networking",
    description:
      "Understand OSI model, IP addressing, subnetting, switches, routers, and basic network configuration.",
    color: "oklch(55% 0.16 200)",
    svgX: 250,
    svgY: 50,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "networking-l1",
        level: 1,
        name: "OSI Model & Protocols",
        description:
          "Seven layers of the OSI model and core protocols at each layer.",
      },
      {
        id: "networking-l2",
        level: 2,
        name: "IP Addressing",
        description:
          "IPv4, IPv6, subnetting, CIDR notation, and address classes.",
      },
      {
        id: "networking-l3",
        level: 3,
        name: "Switches & VLANs",
        description:
          "Layer 2 switching, MAC address tables, VLANs, and trunking.",
      },
      {
        id: "networking-l4",
        level: 4,
        name: "Routing",
        description:
          "Static and dynamic routing, default gateway, RIP, OSPF basics.",
      },
      {
        id: "networking-l5",
        level: 5,
        name: "Network Troubleshooting",
        description:
          "ping, traceroute, nslookup, Wireshark captures, and systematic fault isolation.",
      },
    ],
  },
  {
    id: "cybersecurity",
    tradeName: "Cybersecurity Basics",
    shortName: "Cybersecurity",
    description:
      "Threats, vulnerabilities, encryption, firewalls, and security best practices.",
    color: "oklch(48% 0.14 15)",
    svgX: 450,
    svgY: 50,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "cybersecurity-l1",
        level: 1,
        name: "Threat Landscape",
        description:
          "Malware types, social engineering, phishing, and common attack vectors.",
      },
      {
        id: "cybersecurity-l2",
        level: 2,
        name: "Encryption & PKI",
        description:
          "Symmetric vs asymmetric encryption, TLS, certificates, and key management.",
      },
      {
        id: "cybersecurity-l3",
        level: 3,
        name: "Firewalls & Access Control",
        description:
          "Firewall rules, ACLs, DMZ, and principle of least privilege.",
      },
      {
        id: "cybersecurity-l4",
        level: 4,
        name: "Incident Response",
        description:
          "Detection, containment, eradication, recovery, and post-incident review.",
      },
      {
        id: "cybersecurity-l5",
        level: 5,
        name: "Security Hardening",
        description:
          "OS hardening, patch management, vulnerability scanning, and secure configuration.",
      },
    ],
  },
  {
    id: "help-desk",
    tradeName: "IT Help Desk",
    shortName: "Help Desk",
    description:
      "End-user support, ticketing systems, remote desktop, OS troubleshooting, and professional communication.",
    color: "oklch(60% 0.12 120)",
    svgX: 50,
    svgY: 220,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "help-desk-l1",
        level: 1,
        name: "Support Fundamentals",
        description:
          "Ticketing workflows, SLAs, escalation paths, and professional communication.",
      },
      {
        id: "help-desk-l2",
        level: 2,
        name: "Windows OS Support",
        description:
          "Common Windows issues, user account management, and Group Policy basics.",
      },
      {
        id: "help-desk-l3",
        level: 3,
        name: "Remote Support Tools",
        description:
          "Remote desktop, remote assist, screen sharing, and session logging.",
      },
      {
        id: "help-desk-l4",
        level: 4,
        name: "Network Connectivity Issues",
        description:
          "Diagnosing Wi-Fi, VPN, proxy, and DNS problems for end users.",
      },
      {
        id: "help-desk-l5",
        level: 5,
        name: "Documentation & Knowledge Base",
        description:
          "Writing runbooks, knowledge base articles, and process documentation.",
      },
    ],
  },
  {
    id: "web-dev-basics",
    tradeName: "Web Dev Basics",
    shortName: "Web Dev",
    description:
      "HTML, CSS, JavaScript fundamentals, responsive design, and deploying a simple web page.",
    color: "oklch(62% 0.18 290)",
    svgX: 250,
    svgY: 220,
    svgWidth: 180,
    svgHeight: 130,
    capabilities: [
      {
        id: "web-dev-basics-l1",
        level: 1,
        name: "HTML Structure",
        description:
          "Document structure, semantic elements, forms, and accessibility basics.",
      },
      {
        id: "web-dev-basics-l2",
        level: 2,
        name: "CSS Styling",
        description:
          "Selectors, box model, flexbox, grid, and responsive breakpoints.",
      },
      {
        id: "web-dev-basics-l3",
        level: 3,
        name: "JavaScript Basics",
        description:
          "Variables, functions, DOM manipulation, events, and fetch API.",
      },
      {
        id: "web-dev-basics-l4",
        level: 4,
        name: "Version Control with Git",
        description:
          "Init, add, commit, branches, merge, and GitHub push workflow.",
      },
      {
        id: "web-dev-basics-l5",
        level: 5,
        name: "Deployment",
        description:
          "Static hosting, domain basics, HTTPS, and deployment pipeline fundamentals.",
      },
    ],
  },
];
