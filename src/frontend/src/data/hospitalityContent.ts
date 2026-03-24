import type { TradeModule } from "./woodworkingContent";

export const hospitalityModules: TradeModule[] = [
  // ─── Commercial Cookery ───────────────────────────────────────────────────
  {
    id: "cookery-m1",
    tradeId: "commercial-cookery",
    title: "Knife Skills & Mise en Place",
    level: 1,
    durationMinutes: 22,
    summary:
      "Learn the fundamental knife grips, blade types, and cutting techniques used in every professional kitchen. Discover how mise en place underpins speed, safety, and consistency before service.",
    keyConcepts: [
      "Chef's knife anatomy",
      "Pinch grip and claw technique",
      "Julienne, brunoise, chiffonade",
      "Cutting board hygiene",
      "Mise en place workflow",
    ],
    steps: [
      {
        id: "s1",
        title: "Knife Anatomy and Selection",
        body: "A chef's knife has three zones: the tip for delicate work, the belly for rocking cuts, and the heel for tough ingredients. The bolster — the thick junction between blade and handle — protects your fingers and adds balance. For most kitchen tasks a 20-25 cm chef's knife is the workhorse, supplemented by a paring knife for small prep and a bread knife for crusted items. Always select the right tool for the job: forcing a small paring knife through a butternut pumpkin risks injury and poor-quality cuts.",
        visualCue:
          "Labelled diagram of a chef's knife showing tip, belly, heel, bolster, spine, and tang extending through the handle.",
      },
      {
        id: "s2",
        title: "Grip and Posture",
        body: "The pinch grip — thumb and index finger pinching the blade just above the bolster — gives maximum control and reduces wrist fatigue over a long service. The non-knife hand forms the claw: fingertips curled under, knuckle guiding the blade. Keep your elbow slightly out, shoulder relaxed, and let the knife do the work with forward pressure rather than downward force. Poor posture leads to uneven cuts and repetitive strain injuries over time.",
        visualCue:
          "Side-by-side illustration of correct pinch grip and claw technique, with arrows indicating blade-to-knuckle contact.",
      },
      {
        id: "s3",
        title: "Classic Cutting Techniques",
        body: "Julienne produces matchstick strips roughly 3mm x 3mm x 6cm — ideal for stir-fries and garnishes. Brunoise is the small cube derived from julienne: once you have strips, rotate 90 degrees and cut across at 3mm intervals. Chiffonade is used for leafy herbs and greens: stack leaves, roll tightly, and slice across to produce fine ribbons. Each cut has a purpose: uniform size ensures even cooking, and precise knife work signals professional standards.",
        visualCue:
          "Step diagram showing progression from whole vegetable to large dice to julienne to brunoise, with millimetre measurements labelled.",
      },
      {
        id: "s4",
        title: "Sharpening and Blade Care",
        body: "A sharp knife is a safer knife: a blunt blade requires excess force and is more likely to slip. Use a honing steel before each shift to realign the edge without removing metal — hold the steel vertically, draw the blade from heel to tip at 15-20 degrees, alternating sides. Full sharpening on a whetstone is done every few months. Store knives in a knife roll or magnetic strip — never loose in a drawer where edges and fingers suffer.",
        visualCue:
          "Diagram showing correct angle (15-20 degrees) between knife blade and honing steel, with arrow indicating heel-to-tip drawing direction.",
      },
      {
        id: "s5",
        title: "Mise en Place Workflow",
        body: "Mise en place (French: 'everything in its place') is the philosophy of complete preparation before service begins. Read the menu, identify each dish's components, then systematically prep and label every ingredient in portion-sized containers. A standard workflow: collect recipe cards, pull dry and refrigerated stock, clean and prep vegetables, portion proteins, make stocks and sauces, arrange your station. Time spent on mise en place directly reduces ticket times and service errors.",
        visualCue:
          "Kitchen station layout showing labelled prep containers arranged by service order, with colour-coded cutting boards and knife roll.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the primary benefit of the pinch grip when holding a chef's knife?",
        options: [
          "It lets you apply more downward force",
          "It provides maximum blade control and reduces wrist fatigue",
          "It keeps the blade away from the fingers entirely",
          "It is only used for filleting fish",
        ],
        correctIndex: 1,
        explanation:
          "The pinch grip — thumb and forefinger on the blade — gives control and reduces strain over long prep sessions.",
      },
      {
        id: "q2",
        question: "Brunoise is best described as:",
        options: [
          "Thin ribbon cuts of leafy vegetables",
          "A large rough chop used for mirepoix",
          "Small 3mm cubes derived from julienne strips",
          "A diagonal cut used for Asian cuisine",
        ],
        correctIndex: 2,
        explanation:
          "Brunoise is achieved by first cutting julienne strips then rotating and slicing at 3mm intervals to produce tiny cubes.",
      },
      {
        id: "q3",
        question:
          "How often should you use a honing steel on your chef's knife?",
        options: [
          "Once a week",
          "Only when the knife feels completely blunt",
          "Before each shift to realign the edge",
          "After every single cut",
        ],
        correctIndex: 2,
        explanation:
          "Honing realigns the edge without removing metal and should be done before each shift to maintain sharpness.",
      },
      {
        id: "q4",
        question: "What does 'mise en place' literally mean in French?",
        options: [
          "Clean as you go",
          "Everything in its place",
          "First in, first out",
          "The brigade system",
        ],
        correctIndex: 1,
        explanation:
          "Mise en place means 'everything in its place' — fully prepping and organising your station before service begins.",
      },
      {
        id: "q5",
        question: "Why should knives NOT be stored loose in a drawer?",
        options: [
          "They take up too much space",
          "Drawers are not large enough for chef's knives",
          "The blades dull and fingers can be cut when reaching in",
          "Food safety regulations prohibit it",
        ],
        correctIndex: 2,
        explanation:
          "Loose knives in drawers damage blade edges and pose serious cut risks when reaching in blindly.",
      },
    ],
  },
  {
    id: "cookery-m2",
    tradeId: "commercial-cookery",
    title: "Moist & Dry Cooking Methods",
    level: 2,
    durationMinutes: 24,
    summary:
      "Master the distinction between moist-heat and dry-heat cooking and understand when to apply each technique. Correct method selection determines texture, flavour, and nutrient retention.",
    keyConcepts: [
      "Boiling vs simmering",
      "Steaming and poaching",
      "Roasting and baking",
      "Shallow and deep frying",
      "Braising and stewing",
    ],
    steps: [
      {
        id: "s1",
        title: "Moist Heat: Boiling and Simmering",
        body: "Boiling uses water at 100°C to cook food quickly and is best for pasta, vegetables, and blanching. Simmering (85-95°C) is gentler — small bubbles break the surface — and suits stocks, soups, and delicate proteins that would toughen at a full rolling boil. A common error is attempting to boil a stock: vigorous boiling emulsifies fat into the liquid producing a cloudy, greasy result. Always start cold water with proteins to draw out impurities; bring green vegetables to already-boiling salted water to preserve colour and texture.",
        visualCue:
          "Temperature scale from 60°C to 100°C marking poaching, simmering, and boiling points with food application icons at each level.",
      },
      {
        id: "s2",
        title: "Steaming and Poaching",
        body: "Steaming cooks food using vaporised water above a boiling liquid, preserving water-soluble vitamins and natural colour better than boiling. Commercial combi ovens use steam injection for large-scale production of fish, vegetables, and dumplings. Poaching submerges food in liquid held between 70-82°C — below a simmer. It is ideal for eggs, fish fillets, and chicken breast where gentle, even heat produces tender, moist results. The poaching liquid becomes a flavoured base for sauces.",
        visualCue:
          "Cross-section of a steamer basket above boiling water versus a poaching pan with temperature gauge showing 75°C.",
      },
      {
        id: "s3",
        title: "Dry Heat: Roasting and Baking",
        body: "Roasting uses dry oven heat (typically 160-230°C) with fat to cook meats and vegetables, producing the Maillard reaction — the browning of proteins and sugars that creates complex flavours and textures. Large joints are seared first to develop a crust, then finished at lower temperature for even cooking. Baking applies the same principle to dough and batter products. Resting roasted meats for 10-20% of cooking time allows juices to redistribute before carving.",
        visualCue:
          "Oven diagram with temperature zones marked, showing a roasting tray with arrows indicating hot air circulation around the food.",
      },
      {
        id: "s4",
        title: "Shallow and Deep Frying",
        body: "Shallow frying uses a small amount of oil in a pan (1-2 cm depth) at 160-190°C and is suited to cutlets, fish fillets, and eggs. Oil temperature is critical: too cool and food absorbs oil and becomes greasy; too hot and the exterior burns before the interior cooks through. Deep frying submerges food completely in oil, producing rapid crust formation. Correct oil temperature (175-180°C for most foods) is maintained by not overloading the fryer — cold food lowers temperature dramatically.",
        visualCue:
          "Side-by-side diagram of shallow fry pan (oil level marked) and commercial deep fryer basket, with temperature gauges at correct frying temps.",
      },
      {
        id: "s5",
        title: "Braising and Stewing",
        body: "Braising is a combination method: food is first seared at high heat to develop colour, then slow-cooked in a small amount of liquid in a covered pot at 150-160°C. It is best for tough, collagen-rich cuts — the long moist heat converts collagen to gelatine, creating a rich, glossy sauce. Stewing is similar but uses more liquid and smaller, more uniform pieces of food. Both methods are economical: cheaper cuts become more tender and flavourful than expensive cuts cooked quickly.",
        visualCue:
          "Cross-section of a braise pot showing seared meat half-submerged in aromatic liquid, with steam condensing on the lid and dripping back.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Why should stock be simmered rather than boiled?",
        options: [
          "Boiling kills beneficial bacteria in the stock",
          "Boiling emulsifies fat into the liquid, making it cloudy and greasy",
          "Simmering preserves the stock's colour better",
          "Boiling causes the stock to evaporate too quickly",
        ],
        correctIndex: 1,
        explanation:
          "Vigorous boiling emulsifies fats and impurities into the stock, producing a cloudy, greasy result. A gentle simmer keeps it clear.",
      },
      {
        id: "q2",
        question: "What temperature range is used for poaching?",
        options: [
          "100°C (full boil)",
          "50-65°C",
          "70-82°C",
          "90-99°C (near boil)",
        ],
        correctIndex: 2,
        explanation:
          "Poaching uses liquid at 70-82°C — below a simmer — to gently cook delicate proteins like fish and eggs.",
      },
      {
        id: "q3",
        question: "What is the Maillard reaction?",
        options: [
          "Caramelisation of sugars at high temperature",
          "Browning of proteins and sugars that creates complex flavours in roasted food",
          "The process by which collagen converts to gelatine in a braise",
          "Emulsification of fat in a sauce",
        ],
        correctIndex: 1,
        explanation:
          "The Maillard reaction is a chemical reaction between amino acids and reducing sugars that produces the brown colour and complex flavour of roasted and seared foods.",
      },
      {
        id: "q4",
        question: "What happens if a deep fryer is overloaded with cold food?",
        options: [
          "The food floats and does not cook evenly",
          "Oil temperature drops significantly, causing food to absorb excess oil",
          "The food cooks too quickly on the outside",
          "Nothing — fryers are designed to handle large loads",
        ],
        correctIndex: 1,
        explanation:
          "Cold food dramatically lowers oil temperature. Food then absorbs oil rather than sealing, producing greasy results.",
      },
      {
        id: "q5",
        question:
          "Why is braising particularly suited to tough, collagen-rich cuts?",
        options: [
          "High heat breaks down muscle fibres quickly",
          "Collagen converts to gelatine during long moist cooking, creating a rich sauce",
          "Tough cuts absorb more flavour from liquid than tender cuts",
          "Braising removes fat from the meat during cooking",
        ],
        correctIndex: 1,
        explanation:
          "Long, slow moist heat converts tough collagen in cheaper cuts into gelatine, tenderising the meat and enriching the sauce.",
      },
    ],
  },
  {
    id: "cookery-m3",
    tradeId: "commercial-cookery",
    title: "Stocks, Sauces & Soups",
    level: 3,
    durationMinutes: 25,
    summary:
      "Stocks are the foundation of classical and contemporary cuisine. Learn to produce the five mother sauces, understand reduction and seasoning, and build complex flavours from a clear, well-made stock.",
    keyConcepts: [
      "White and brown stocks",
      "Five mother sauces",
      "Roux types",
      "Reduction and nappe",
      "Seasoning and finishing",
    ],
    steps: [
      {
        id: "s1",
        title: "Stock Fundamentals",
        body: "A stock is a flavoured liquid produced by gently simmering bones, aromatics, and vegetables in water. White stocks use raw or blanched bones and produce a pale, delicate base for chicken veloute and bechamel. Brown stocks use roasted bones and caramelised vegetables — the Maillard reaction gives rich colour and deep flavour suitable for espagnole sauce and jus. Fish stock simmers for only 20 minutes; longer extracts bitter flavours from bones. Always start with cold water to allow albumin to rise as grey scum, which is skimmed off for clarity.",
        visualCue:
          "Timeline diagram comparing stock simmering times: fish fumet (20 min), chicken (3-4 hr), beef/veal (8-12 hr), with cloudiness levels illustrated.",
      },
      {
        id: "s2",
        title: "The Five Mother Sauces",
        body: "Auguste Escoffier codified five mother sauces that form the basis of French classical cooking: Bechamel (white roux + milk), Veloute (blonde roux + white stock), Espagnole (brown roux + brown stock + tomato), Sauce Tomat (tomato + stock + aromatics), and Hollandaise (emulsion of egg yolk and clarified butter with acid). Each mother sauce produces dozens of derivative sauces by adding ingredients: Mornay (bechamel + cheese), Supreme (veloute + cream), Bordelaise (espagnole + red wine + shallots).",
        visualCue:
          "Family tree diagram of the five mother sauces branching into six to eight well-known derivative sauces for each.",
      },
      {
        id: "s3",
        title: "Roux: The Thickening Agent",
        body: "A roux is equal parts butter (or other fat) and flour cooked together. White roux is cooked briefly (1-2 minutes) until the raw flour smell disappears — used for bechamel. Blonde roux cooks 3-5 minutes to a light golden colour for veloute. Brown roux cooks 8-10 minutes for a nutty flavour used in espagnole. As roux darkens, thickening power reduces: dark roux in a Cajun gumbo uses more roux for the same consistency. Always add hot liquid to hot roux or cold liquid to hot roux — cold to cold creates lumps.",
        visualCue:
          "Colour gradient from white to dark brown roux with minutes-cooked scale and corresponding sauce applications labelled at each stage.",
      },
      {
        id: "s4",
        title: "Reduction and Nappe",
        body: "Reduction concentrates flavour and thickens a liquid by evaporating water through continued simmering. A 50% reduction doubles flavour intensity and noticeably thickens consistency. Nappe — French for 'to coat' — describes the moment a sauce is thick enough to coat the back of a spoon and hold a line when you draw a finger across it. Over-reduction produces a sticky, overly salty sauce; under-reduction is watery and lacks body. Taste and adjust seasoning only after reducing to the final consistency.",
        visualCue:
          "Illustration of a wooden spoon coated in sauce, with a clear line drawn through showing the nappe test, alongside a liquid volume diagram showing before and after reduction.",
      },
      {
        id: "s5",
        title: "Seasoning and Finishing",
        body: "Salt is the single most important seasoning tool: it suppresses bitterness, enhances sweetness, and amplifies all other flavours. Season in layers throughout cooking, not just at the end. Acids — lemon juice, vinegar, wine — brighten and lift flavour; add a squeeze at the final moment to preserve freshness. Finishing butter (monter au beurre) whisked into a sauce off the heat adds gloss and richness. A well-seasoned sauce should taste balanced: no single note should dominate.",
        visualCue:
          "Flavour wheel diagram showing four quadrants (salt, acid, fat, heat) with arrows indicating how each enhances or counterbalances the others.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Why is fish stock (fumet) only simmered for 20 minutes?",
        options: [
          "Fish bones dissolve and become cloudy after 20 minutes",
          "Longer simmering extracts bitter flavours from fish bones",
          "The HACCP plan requires a 20-minute maximum",
          "Fish stock thickens too much with longer cooking",
        ],
        correctIndex: 1,
        explanation:
          "Fish bones release bitter compounds if simmered too long. Twenty minutes extracts flavour without bitterness.",
      },
      {
        id: "q2",
        question:
          "Which mother sauce is made from a brown roux and brown stock?",
        options: ["Bechamel", "Veloute", "Hollandaise", "Espagnole"],
        correctIndex: 3,
        explanation:
          "Espagnole is made from brown roux, brown stock, and tomato, and forms the base of many rich meat sauces.",
      },
      {
        id: "q3",
        question: "What happens to roux's thickening power as it darkens?",
        options: [
          "Thickening power increases significantly",
          "Thickening power remains constant regardless of colour",
          "Thickening power decreases as starch granules break down",
          "It thickens instantly rather than gradually",
        ],
        correctIndex: 2,
        explanation:
          "The longer a roux cooks and darkens, the more its starch breaks down, reducing thickening power but developing flavour.",
      },
      {
        id: "q4",
        question: "What does 'nappe' describe in sauce cookery?",
        options: [
          "The process of straining a sauce through a fine sieve",
          "A sauce thick enough to coat a spoon and hold a drawn line",
          "The addition of finishing butter to a sauce",
          "Reducing a sauce by 50% volume",
        ],
        correctIndex: 1,
        explanation:
          "Nappe is the test used to assess sauce consistency: it should coat a spoon and hold a clean line when wiped.",
      },
      {
        id: "q5",
        question: "When should you adjust seasoning in a sauce being reduced?",
        options: [
          "At the very start, before any heat is applied",
          "Continuously throughout, adding salt every few minutes",
          "Only after reducing to final consistency, as reduction concentrates salt",
          "Seasoning is added by the diner at the table only",
        ],
        correctIndex: 2,
        explanation:
          "Reduction concentrates salt, so over-seasoning early produces a salty, unbalanced sauce. Final adjustments should happen after reduction is complete.",
      },
    ],
  },
  {
    id: "cookery-m4",
    tradeId: "commercial-cookery",
    title: "Menu Planning & Costing",
    level: 4,
    durationMinutes: 22,
    summary:
      "Profitable kitchens require sound food costing and menu design. Learn how to calculate yield, set portion sizes, determine food cost percentage, and build seasonal menus that balance creativity with commercial viability.",
    keyConcepts: [
      "Yield testing",
      "Portion control",
      "Food cost percentage",
      "Seasonal menu design",
      "Menu engineering",
    ],
    steps: [
      {
        id: "s1",
        title: "Yield Testing",
        body: "Yield is the usable portion of a raw ingredient after trimming, peeling, and preparation. A whole chicken at 100% purchase weight might yield only 65% after butchering — the rest is carcass, skin, and fat. Yield percentage is calculated as: (usable weight / original weight) x 100. This figure is used to determine how much raw product to order: if a recipe calls for 500g of trimmed tenderloin and the yield is 75%, you must purchase 667g. Accurate yield data ensures recipes are costed correctly and food orders are precise.",
        visualCue:
          "Before/after diagram of a whole chicken broken into portions (breast, thigh, drumstick) and carcass with weight and yield percentage labelled for each component.",
      },
      {
        id: "s2",
        title: "Portion Control",
        body: "Consistent portion control is critical for food cost management and customer satisfaction. A 20g over-pour on protein across 200 covers per night adds 4kg of product cost daily. Tools include calibrated portioning scoops for grains and desserts, ladles for soups and sauces, and a portion scale for proteins. Standard recipe cards specify exact weights, not descriptions like 'a handful'. Variance reports comparing theoretical versus actual food costs identify whether over-portioning or waste is the primary cost driver.",
        visualCue:
          "Plate diagram showing a standard protein portion (180g), vegetable portion (120g), and starch portion (100g) with a scale alongside for comparison.",
      },
      {
        id: "s3",
        title: "Food Cost Percentage",
        body: "Food cost percentage (FCP) measures the cost of ingredients as a proportion of the dish's selling price: FCP = (ingredient cost / selling price) x 100. Most commercial kitchens target an overall FCP of 28-35%. A beef dish costing $8 in ingredients should sell for approximately $23-28 to hit this range. Menu items below 28% FCP are high-margin stars; those above 35% are loss-leaders needing revision or removal. Labour, overheads, and profit must all be covered by the selling price.",
        visualCue:
          "Pie chart showing how a $28 dish selling price is divided: 30% food cost ($8.40), 35% labour, 20% overheads, 15% profit.",
      },
      {
        id: "s4",
        title: "Seasonal Menu Design",
        body: "Seasonal menus leverage produce at peak flavour and lowest cost. In-season tomatoes in summer cost less per kilogram, taste better, and travel a shorter distance than hothouse tomatoes in winter. A seasonal menu cycle typically changes four times per year and features signature dishes that maximise the cluster's current hero ingredients. Designing menus around seasonal availability builds relationships with local suppliers, who provide better quality and flexible terms. Note allergens on all menus: Australia's Food Standards Code requires disclosure of the 14 major allergens.",
        visualCue:
          "Seasonal calendar wheel divided into four quarters showing peak fruit, vegetable, seafood, and meat availability with cost trend indicators.",
      },
      {
        id: "s5",
        title: "Menu Engineering",
        body: "Menu engineering analyses each item's popularity (sales volume) and profitability (contribution margin) to classify it into one of four categories: Stars (high popularity, high profit) — promote these; Plowhorses (high popularity, low profit) — reduce cost; Puzzles (low popularity, high profit) — reposition; Dogs (low popularity, low profit) — remove. Menu placement drives sales: items at the top-right of a menu page receive 30-40% more orders. Review and re-engineer menus quarterly.",
        visualCue:
          "2x2 matrix with axes 'Popularity' and 'Profit Margin' showing Stars, Plowhorses, Puzzles, and Dogs quadrants with example dish names in each.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A recipe requires 400g of usable carrot. The yield percentage for carrots is 80%. How much raw carrot should you order?",
        options: ["320g", "400g", "500g", "480g"],
        correctIndex: 2,
        explanation:
          "Divide the required usable weight by the yield percentage: 400g / 0.80 = 500g raw carrot needed.",
      },
      {
        id: "q2",
        question:
          "What is the target food cost percentage range for most commercial kitchens?",
        options: ["10-15%", "20-25%", "28-35%", "45-55%"],
        correctIndex: 2,
        explanation:
          "A food cost percentage of 28-35% is the industry standard, leaving room to cover labour, overheads, and profit.",
      },
      {
        id: "q3",
        question: "In menu engineering, what is a 'Plowhorse' dish?",
        options: [
          "High popularity, high profit",
          "High popularity, low profit",
          "Low popularity, high profit",
          "Low popularity, low profit",
        ],
        correctIndex: 1,
        explanation:
          "A Plowhorse sells well but has a low profit margin. The goal is to reduce its cost without impacting sales.",
      },
      {
        id: "q4",
        question: "Why do seasonal menus generally cost less to produce?",
        options: [
          "Seasonal produce requires less preparation time",
          "Seasonal menus use fewer ingredients overall",
          "In-season produce is at peak supply, so purchase prices are lower",
          "Suppliers discount seasonal items due to lower demand",
        ],
        correctIndex: 2,
        explanation:
          "Peak season means high supply and lower prices. Out-of-season produce is more expensive due to importation, controlled-environment growing, or long freight distances.",
      },
      {
        id: "q5",
        question:
          "A dish costs $9.50 to produce and sells for $28.00. What is the food cost percentage?",
        options: ["29.4%", "33.9%", "31.2%", "38.0%"],
        correctIndex: 1,
        explanation: "FCP = (9.50 / 28.00) x 100 = 33.9%.",
      },
    ],
  },
  {
    id: "cookery-m5",
    tradeId: "commercial-cookery",
    title: "Kitchen Operations & Team",
    level: 5,
    durationMinutes: 20,
    summary:
      "Running a professional kitchen requires clear team structure, disciplined communication, and systematic cleaning routines. Learn the brigade system, service communication protocols, and how to maintain a safe, efficient kitchen environment.",
    keyConcepts: [
      "Kitchen brigade system",
      "Service communication",
      "Cleaning schedules",
      "Food safety during service",
      "Shift handover",
    ],
    steps: [
      {
        id: "s1",
        title: "The Kitchen Brigade System",
        body: "Escoffier's brigade de cuisine created a hierarchical structure that remains the backbone of professional kitchens. The Executive Chef oversees all kitchen operations; the Head Chef manages day-to-day production; Sous Chefs supervise sections. Chef de Partie (station chefs) lead individual sections: Saucier (sauces and sauted items), Poissonier (fish), Entremetier (vegetables and soups), Rotisseur (roasted and grilled meats), Patissier (pastry). Commis chefs are trainees supporting each station. Understanding your role in the brigade reduces confusion during high-pressure service.",
        visualCue:
          "Organisational chart showing kitchen brigade hierarchy from Executive Chef down through Head Chef, Sous Chef, Chef de Partie, Commis, and Kitchen Hand.",
      },
      {
        id: "s2",
        title: "Service Communication",
        body: "Kitchen communication follows strict verbal protocols to avoid errors during service. When a diner's order prints, the Expeditor (often the Head Chef) calls the ticket aloud: 'Ordering: two salmon, one lamb, fire the risotto.' Each station chef acknowledges with 'Yes, Chef'. When a dish is ready, the station calls 'Pickup'. Cross-talk is prohibited during service. Voice commands must be clear, concise, and confirmed. A single miscommunication can send 20 covers behind on a busy night and result in food waste and customer complaints.",
        visualCue:
          "Kitchen layout diagram showing Expeditor position at the pass, with arrows indicating communication flow to each station (saucier, entremetier, rotisseur) during service.",
      },
      {
        id: "s3",
        title: "Cleaning Schedules",
        body: "Cleaning is divided into frequency categories: during-service (cleaning as you go — wiping surfaces, clearing cutting boards), end-of-service (deep cleaning benches, equipment, and floors), weekly (degreasing rangehoods, cleaning behind equipment), and periodic (descaling steamers, calibrating temperature probes). Each task is documented on a cleaning schedule signed off by the responsible team member. Sanitiser must follow cleaning: cleaning removes visible soiling; sanitiser reduces pathogens to safe levels. Failure to follow a cleaning schedule is one of the most common causes of failed health inspections.",
        visualCue:
          "Cleaning schedule grid with rows for each kitchen area and columns for daily, weekly, and periodic tasks, with example checkboxes and responsible team member columns.",
      },
      {
        id: "s4",
        title: "Food Safety During Service",
        body: "Hot food on the pass must be held above 60 degrees Celsius; cold food must remain below 5 degrees. Temperature excursions must be documented and corrective action taken. Batch cooking — producing food in smaller quantities throughout service — reduces the time food spends in the temperature danger zone. Label all prepared food with date and time of production; use FIFO (first in, first out) rotation to ensure older product is used before newer. Separate tongs for raw and cooked items, colour-coded service equipment, and staff trained on allergen management protect both customers and the business.",
        visualCue:
          "Service station diagram showing a hot holding unit (above 60 degrees) and cold bain-marie (below 5 degrees) with labelled temperature gauges and food batch labels.",
      },
      {
        id: "s5",
        title: "Shift Handover",
        body: "A structured handover prevents information gaps between shifts. The outgoing team communicates: current stock levels (what was used, what needs ordering), any temperature incidents, equipment faults, and upcoming reservations or dietary requirements for the next service. Some kitchens use a handover logbook; others use a verbal briefing with the incoming Sous Chef. The incoming team checks temperature logs, reviews the reservation sheet, and inspects mise en place completeness before accepting the shift. A poor handover is a leading cause of service failures and food safety incidents in high-volume venues.",
        visualCue:
          "Shift handover checklist template showing sections: stock levels, temperature records, equipment faults, upcoming bookings, and team notes with sign-off fields.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "In the kitchen brigade system, which chef role is responsible for sauces and sauted items?",
        options: ["Poissonier", "Saucier", "Entremetier", "Rotisseur"],
        correctIndex: 1,
        explanation:
          "The Saucier is one of the most senior station chefs, responsible for sauces, sauted dishes, and often hot appetisers.",
      },
      {
        id: "q2",
        question:
          "What is the correct response when a Head Chef calls an order during service?",
        options: [
          "Nod to indicate you heard",
          "Repeat the full order back verbatim",
          "Acknowledge with 'Yes, Chef'",
          "Begin cooking immediately without verbal response",
        ],
        correctIndex: 2,
        explanation:
          "'Yes, Chef' is the standard verbal acknowledgement confirming the order was heard and understood.",
      },
      {
        id: "q3",
        question: "What is the difference between cleaning and sanitising?",
        options: [
          "They are synonymous — both remove pathogens",
          "Cleaning removes visible soiling; sanitising reduces pathogens to safe levels",
          "Sanitising is only required for cutting boards, not benches",
          "Cleaning is for floors; sanitising is for equipment",
        ],
        correctIndex: 1,
        explanation:
          "Cleaning physically removes dirt and grease; sanitising uses a chemical agent to kill pathogens. Both steps are required for a safe surface.",
      },
      {
        id: "q4",
        question:
          "What temperature must hot food be held at on the service pass?",
        options: ["Above 40°C", "Above 50°C", "Above 60°C", "Above 75°C"],
        correctIndex: 2,
        explanation:
          "Hot food must be held above 60°C to remain outside the temperature danger zone (5-60°C) where bacteria multiply rapidly.",
      },
      {
        id: "q5",
        question: "What does FIFO stand for in kitchen stock rotation?",
        options: [
          "Food Integrity and Freshness Operations",
          "First In, First Out",
          "Freeze Immediately, Free Out",
          "Food Inspection Frequency Order",
        ],
        correctIndex: 1,
        explanation:
          "First In, First Out means older stock is used before newer deliveries, minimising waste and spoilage.",
      },
    ],
  },

  // ─── Food Safety & Hygiene ────────────────────────────────────────────────
  {
    id: "foodsafety-m1",
    tradeId: "food-safety",
    title: "Personal Hygiene in Food Service",
    level: 1,
    durationMinutes: 18,
    summary:
      "Personal hygiene is the first line of defence against foodborne illness. Learn the correct handwashing technique, uniform standards, illness reporting obligations, and jewellery restrictions that apply in all food service environments.",
    keyConcepts: [
      "Effective handwashing",
      "When to wash hands",
      "Uniform and PPE",
      "Illness reporting",
      "Jewellery and hair policies",
    ],
    steps: [
      {
        id: "s1",
        title: "Why Personal Hygiene Matters",
        body: "Foodborne illness affects an estimated 4.1 million Australians each year, causing 31,000 hospitalisations and 86 deaths. The majority of outbreaks are traced to infected food handlers or poor personal hygiene. A food handler is legally defined as anyone who handles food or surfaces that contact food. The Food Standards Code (Standard 3.2.2) places a legal obligation on food handlers to take all reasonable measures to ensure their hygiene does not compromise food safety. Ignorance is not a defence in food safety law.",
        visualCue:
          "Infographic showing the chain of contamination from food handler to consumer, with break points at each hygiene control measure.",
      },
      {
        id: "s2",
        title: "Effective Handwashing Technique",
        body: "Handwashing is the single most effective way to prevent contamination. The correct method: wet hands under warm running water, apply soap, lather all surfaces for at least 20 seconds (including backs of hands, between fingers, and under nails), rinse thoroughly, and dry with a single-use paper towel. Air dryers are less effective and may spread airborne contamination. Alcohol hand sanitiser is a supplement, not a substitute for soap and water — it is ineffective against some pathogens including Cryptosporidium. A dedicated handwash basin must be used — never the food preparation sink.",
        visualCue:
          "Step-by-step diagram of the six-step WHO handwashing technique with 20-second time indicator.",
      },
      {
        id: "s3",
        title: "When to Wash Hands",
        body: "Hands must be washed before handling food, after handling raw meat or poultry, after using the toilet, after touching your face or hair, after handling rubbish, after cleaning, and after handling chemicals. In a busy kitchen, hands should be washed every 20-30 minutes during service and immediately after any of the above triggers. Using gloves does not eliminate the need for handwashing — pathogens transfer between glove surfaces just as readily as skin. Gloves are required for handling ready-to-eat food by handlers with skin conditions or cuts.",
        visualCue:
          "Checklist diagram with trigger icons (raw meat, toilet, rubbish bin, phone) each connected to a handwash step with an arrow.",
      },
      {
        id: "s4",
        title: "Uniform and PPE Standards",
        body: "A clean uniform creates a physical barrier between the handler's clothing and food. Chef's whites or a food-service uniform must be changed daily or when visibly soiled. Hair must be fully contained with a cap, net, or hat to prevent physical contamination. Closed-toe, non-slip footwear protects against burns and spills. Aprons must be changed between tasks: an apron worn to handle raw chicken must not be worn near ready-to-eat salad preparation. PPE (disposable gloves, face shields for allergen handling) must be appropriate for the task and replaced when torn or contaminated.",
        visualCue:
          "Front and back illustration of a food handler in full uniform with labels pointing to hair covering, clean whites, apron, and closed-toe footwear.",
      },
      {
        id: "s5",
        title: "Illness Reporting and Jewellery Policies",
        body: "A food handler who is suffering or suspects they are suffering from a food-borne illness — including vomiting, diarrhoea, jaundice, sore throat with fever, or infected skin lesions — must immediately report to their supervisor and must not handle food. This is a legal requirement under Standard 3.2.2. Returning to work after diarrhoea requires 48 hours symptom-free. Jewellery harbours bacteria in crevices and can become a physical contaminant in food. Plain wedding bands are generally permitted; rings with stones, watches, bracelets, dangling earrings, and fingernail polish are prohibited.",
        visualCue:
          "Two-panel illustration: left shows prohibited jewellery items (stone ring, watch, bracelet) crossed out; right shows an illness symptom checklist with report-to-supervisor arrow.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "For how long should you lather your hands during the handwashing process?",
        options: [
          "5 seconds",
          "10 seconds",
          "At least 20 seconds",
          "At least 60 seconds",
        ],
        correctIndex: 2,
        explanation:
          "Twenty seconds of lathering all hand surfaces is the minimum time to effectively remove pathogens.",
      },
      {
        id: "q2",
        question:
          "Can alcohol hand sanitiser replace handwashing with soap and water?",
        options: [
          "Yes, if 70% alcohol concentration is used",
          "Yes, provided hands are not visibly soiled",
          "No — it is a supplement, not a substitute, and is ineffective against some pathogens",
          "Yes, but only for front-of-house staff",
        ],
        correctIndex: 2,
        explanation:
          "Sanitiser cannot replace soap and water — it is ineffective against certain pathogens and does not remove physical soiling.",
      },
      {
        id: "q3",
        question:
          "Under the Food Standards Code, when must a food handler report illness to their supervisor?",
        options: [
          "Only if they have been diagnosed by a doctor",
          "When they suffer or suspect they have a foodborne illness including vomiting or diarrhoea",
          "Only after 24 hours of symptoms",
          "When asked by a health inspector",
        ],
        correctIndex: 1,
        explanation:
          "Standard 3.2.2 requires immediate reporting of suspected or confirmed foodborne illness, including vomiting, diarrhoea, jaundice, or infected wounds.",
      },
      {
        id: "q4",
        question:
          "Why must a separate handwash basin be used rather than the food preparation sink?",
        options: [
          "Handwash basins have hotter water",
          "The Food Standards Code requires a dedicated basin to prevent cross-contamination of food and equipment",
          "Preparation sinks are too small for proper handwashing",
          "It is a preference, not a requirement",
        ],
        correctIndex: 1,
        explanation:
          "Using a food prep sink for handwashing contaminates the surface with skin flora; a dedicated handwash basin is legally required.",
      },
      {
        id: "q5",
        question: "Why is fingernail polish prohibited in food service?",
        options: [
          "It is difficult to clean under polished nails",
          "Nail polish flakes are a common cause of physical contamination in food",
          "It is only prohibited for pastry work",
          "Nail polish reacts chemically with cleaning products",
        ],
        correctIndex: 1,
        explanation:
          "Nail polish chips and flakes directly into food, constituting physical contamination and a complaint risk.",
      },
    ],
  },
  {
    id: "foodsafety-m2",
    tradeId: "food-safety",
    title: "Temperature Control & Cold Chain",
    level: 2,
    durationMinutes: 22,
    summary:
      "Temperature is the most powerful tool in food safety. Learn the temperature danger zone, safe storage temperatures, cold chain management, and how to correctly use and calibrate thermometers in a food service environment.",
    keyConcepts: [
      "Temperature danger zone 5-60 degrees",
      "Refrigeration and freezer temps",
      "Cold chain management",
      "Thermometer types and use",
      "Thermometer calibration",
    ],
    steps: [
      {
        id: "s1",
        title: "The Temperature Danger Zone",
        body: "Bacteria responsible for foodborne illness multiply most rapidly between 5 degrees and 60 degrees Celsius — the temperature danger zone. At 37 degrees (human body temperature) many pathogens can double in number every 20 minutes. Food held in this zone should not remain there for more than a cumulative 2 hours (4 hours is the legal maximum under Australian food law, beyond which food must be discarded). The 2-hour/4-hour rule: food in the danger zone for under 2 hours can be refrigerated and used; 2-4 hours must be used immediately; over 4 hours must be discarded.",
        visualCue:
          "Temperature scale from -18°C to 100°C with the danger zone (5-60°C) highlighted in red, and key temperatures labelled: freezing point, refrigerator temp, danger zone, pasteurisation, boiling.",
      },
      {
        id: "s2",
        title: "Safe Storage Temperatures",
        body: "Refrigerators must maintain 5 degrees or below; freezers must maintain -15 degrees or below (ideally -18 degrees). Raw meat should be stored on the lowest shelf to prevent drip contamination of ready-to-eat foods. Storage order from top to bottom: ready-to-eat foods (cooked, salads), whole cuts of beef and pork, minced and tenderised meat, poultry, and ground meat on the lowest shelf. This order is based on required minimum internal cooking temperatures. Temperature logs must be maintained for each refrigeration unit daily.",
        visualCue:
          "Cross-section illustration of a commercial refrigerator showing correct top-to-bottom storage order with temperature labels and colour-coded shelves by food type.",
      },
      {
        id: "s3",
        title: "Cold Chain Management",
        body: "The cold chain is the unbroken sequence of refrigerated production, storage, and delivery required to maintain food safety from farm to plate. Any break in the chain — a truck with a malfunctioning refrigeration unit, food left on a loading dock, or a walk-in cooler door left open — allows temperatures to rise into the danger zone. Receiving staff must check delivery temperatures using a calibrated probe thermometer: refrigerated deliveries must arrive at 5 degrees or below; frozen at -15 degrees or below. Once accepted, food must be put away within 15 minutes.",
        visualCue:
          "Cold chain diagram showing producer to processing to transport to delivery to storage to service with temperature monitoring checkpoints marked at each stage.",
      },
      {
        id: "s4",
        title: "Types of Thermometers",
        body: "Probe (thermocouple or thermistor) thermometers are inserted directly into food and provide accurate readings within seconds — essential for checking internal cooking temperatures and verifying cold storage. Infrared (laser) thermometers measure surface temperatures without contact, useful for checking surfaces but unreliable for measuring the internal temperature of food. Dial thermometers (bi-metal stem) are slower to respond and less accurate than digital probes. Use a separate colour-coded probe for each food type to avoid cross-contamination. Always record thermometer readings in the food safety log immediately after measurement.",
        visualCue:
          "Comparison table of three thermometer types showing response time, accuracy, cross-contamination risk, and best application for each.",
      },
      {
        id: "s5",
        title: "Thermometer Calibration",
        body: "An uncalibrated thermometer provides false security and can lead directly to a foodborne illness outbreak. Two calibration methods: the ice-water method — fully immerse the probe in a slurry of crushed ice and cold water (0°C plus or minus 1°C); adjust if necessary. The boiling-water method — immerse probe in boiling water (100°C at sea level); adjust if necessary. Thermometers must be calibrated when first received, after being dropped, after extreme temperature changes, and at minimum weekly in a production kitchen. Calibration records must be documented with date, method, reading before and after adjustment, and staff initials.",
        visualCue:
          "Two-panel diagram showing ice-water calibration (thermometer in ice slurry reading 0°C) and boiling-water calibration (thermometer in boiling water reading 100°C) with calibration log form below.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the temperature danger zone for bacterial growth in food?",
        options: ["0°C to 40°C", "5°C to 60°C", "10°C to 70°C", "2°C to 55°C"],
        correctIndex: 1,
        explanation:
          "The temperature danger zone is 5-60°C. Food held in this range allows most harmful bacteria to multiply rapidly.",
      },
      {
        id: "q2",
        question:
          "Under the 2-hour/4-hour rule, what must you do with food that has been in the danger zone for more than 4 hours?",
        options: [
          "Refrigerate it immediately and use within 24 hours",
          "Cook it to 75°C and then refrigerate",
          "Discard it — it is unsafe to use",
          "Continue using it during service but do not store it",
        ],
        correctIndex: 2,
        explanation:
          "Food in the danger zone for over 4 hours must be discarded under Australian food safety law.",
      },
      {
        id: "q3",
        question:
          "Why should raw poultry be stored on the lowest refrigerator shelf?",
        options: [
          "Poultry is heavier than other foods",
          "Cold air sinks, keeping the bottom shelf coldest",
          "Poultry requires the highest cooking temperature and poses the greatest drip contamination risk",
          "It is regulation, but there is no specific safety reason",
        ],
        correctIndex: 2,
        explanation:
          "Poultry requires a higher minimum internal cooking temperature (75°C) and if it drips onto ready-to-eat food below, it creates a significant contamination hazard.",
      },
      {
        id: "q4",
        question:
          "Which thermometer type is suitable for measuring the internal temperature of a chicken breast?",
        options: [
          "Infrared (laser) thermometer",
          "Dial thermometer only",
          "Probe (thermocouple or thermistor) thermometer",
          "Ambient air thermometer",
        ],
        correctIndex: 2,
        explanation:
          "A probe thermometer is inserted into the thickest part of the food to measure internal temperature accurately. Infrared thermometers only measure surface temperature.",
      },
      {
        id: "q5",
        question:
          "What is the correct reading when calibrating a thermometer using the ice-water method?",
        options: ["-5°C", "0°C plus or minus 1°C", "4°C", "5°C"],
        correctIndex: 1,
        explanation:
          "A correctly calibrated probe placed in a proper ice-water slurry should read 0°C plus or minus 1°C.",
      },
    ],
  },
  {
    id: "foodsafety-m3",
    tradeId: "food-safety",
    title: "Preventing Cross-Contamination",
    level: 3,
    durationMinutes: 20,
    summary:
      "Cross-contamination is one of the leading causes of foodborne illness outbreaks. Learn how colour-coded equipment systems, proper allergen management, and surface cleaning procedures prevent the transfer of pathogens between food types.",
    keyConcepts: [
      "Direct and indirect contamination",
      "Colour-coded cutting boards",
      "Allergen management",
      "Surface sanitisation",
      "Separation of raw and cooked",
    ],
    steps: [
      {
        id: "s1",
        title: "Understanding Cross-Contamination",
        body: "Cross-contamination occurs when pathogens or allergens are transferred from one food, surface, or person to another. Direct contamination: raw chicken placed on the same board as salad leaves. Indirect contamination: a chef touches raw beef, then without washing hands handles bread rolls. Equipment-mediated: using the same knife for raw fish and then ready-to-eat vegetables. Cross-contamination is particularly dangerous because it often occurs invisibly — contaminated food looks, smells, and tastes normal. The consequences range from a single customer illness to a multi-site outbreak with significant legal and reputational consequences.",
        visualCue:
          "Contamination pathway diagram showing arrows from raw chicken to cutting board to hands to salad bowl, with intervention points (handwash, board swap, knife wash) labelled in green.",
      },
      {
        id: "s2",
        title: "Colour-Coded Equipment Systems",
        body: "Colour-coded cutting boards, knives, and utensils prevent equipment from being used across incompatible food types. The Australian standard colour system: red for raw meat, yellow for raw poultry, blue for raw seafood, green for fruit and vegetables, white for dairy and bakery, brown for cooked meats. Each colour must have its own dedicated cleaning station and storage rack. Training all staff — including casuals and kitchen hands — on the system is a legal requirement. Colour-coded systems are assessed during council food safety inspections.",
        visualCue:
          "Colour-coded cutting board chart showing each colour with its designated food category, storage rack, and a red-cross symbol for prohibited cross-uses.",
      },
      {
        id: "s3",
        title: "Allergen Management",
        body: "Australia's Food Standards Code requires disclosure of 14 major allergens: peanuts, tree nuts, milk, eggs, wheat, sesame, fish, shellfish, soy, lupin, and others. Allergen cross-contact occurs when an allergen is unintentionally transferred — even traces of peanut protein can trigger anaphylaxis in a sensitised individual. Dedicated allergen-free preparation areas, utensils, and cookware are required for severe allergen orders. When a customer declares an allergy, the information must travel through the entire service chain: front-of-house to kitchen to plating.",
        visualCue:
          "Allergen communication flow diagram: customer declares allergy, server records and alerts kitchen, chef confirms allergen-free preparation, plate checked before service.",
      },
      {
        id: "s4",
        title: "Surface Sanitisation Procedures",
        body: "Sanitisation is a two-step process: first clean (remove all visible food debris and grease using detergent), then sanitise (apply an approved food-contact sanitiser at the correct concentration to kill pathogens). Sanitiser is ineffective on dirty surfaces because organic matter neutralises it. Food-contact sanitisers approved under the Food Standards Code include quaternary ammonium compounds and chlorine-based solutions at the correct dilution — always follow manufacturer's label for concentration and contact time. Surfaces must air-dry or be dried with a fresh single-use cloth.",
        visualCue:
          "Step-by-step diagram: 1) Remove debris, 2) Wash with detergent, 3) Rinse, 4) Apply sanitiser at correct dilution, 5) Allow contact time, 6) Air dry — each step illustrated with a pass/fail icon.",
      },
      {
        id: "s5",
        title: "Separating Raw and Cooked Food",
        body: "Raw animal products must always be physically separated from ready-to-eat foods in storage, preparation, and service. In the refrigerator: raw meat below cooked food. On the preparation bench: never prep raw proteins adjacent to salads or ready-to-eat items — use separate zones or time-separate the tasks with full cleaning between. During service: separate tongs and serving utensils for each food type; never use the same tongs for raw sausages and cooked ones on a grill. Physical barriers, signage, and staff supervision all contribute to effective separation.",
        visualCue:
          "Top-down bench layout diagram showing a designated raw protein zone (left) separated by a clean gap and colour change from a ready-to-eat zone (right), with equipment and labels.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What colour cutting board is designated for raw poultry in the Australian colour-coded system?",
        options: ["Red", "Yellow", "Blue", "Green"],
        correctIndex: 1,
        explanation:
          "Yellow is designated for raw poultry; red is for raw meat; blue for raw seafood; green for fruit and vegetables.",
      },
      {
        id: "q2",
        question:
          "Why is sanitiser ineffective if applied to a surface that has not been cleaned first?",
        options: [
          "Sanitiser requires high temperatures to activate",
          "Organic matter on the surface neutralises the sanitiser before it can kill pathogens",
          "The sanitiser only works on polished stainless steel",
          "Dirty surfaces require a stronger sanitiser concentration",
        ],
        correctIndex: 1,
        explanation:
          "Food residue and grease neutralise sanitiser chemically. Cleaning to remove organic matter must always precede sanitisation.",
      },
      {
        id: "q3",
        question: "What is allergen cross-contact?",
        options: [
          "A customer's allergic reaction to a menu description",
          "The unintentional transfer of an allergen to a food that should not contain it",
          "Using the wrong allergen disclosure language on a menu",
          "Cross-contamination between two different allergens",
        ],
        correctIndex: 1,
        explanation:
          "Cross-contact transfers allergen traces (e.g., peanut protein) to allergen-free food through shared equipment, surfaces, or hands.",
      },
      {
        id: "q4",
        question:
          "When should you use separate tongs for raw and cooked sausages on a commercial grill?",
        options: [
          "Only if a customer has a documented allergy",
          "Only when cooking for vulnerable populations such as aged care",
          "Always — separate tongs must be used throughout the entire cooking and service process",
          "Only if the grill cannot be cleaned between batches",
        ],
        correctIndex: 2,
        explanation:
          "Raw and cooked meats require separate utensils at all times to prevent cross-contamination, regardless of customer health status.",
      },
      {
        id: "q5",
        question:
          "How many major allergens must be disclosed under Australia's Food Standards Code?",
        options: ["8", "10", "12", "14"],
        correctIndex: 3,
        explanation:
          "The Food Standards Code requires disclosure of 14 major allergens, including peanuts, tree nuts, milk, eggs, wheat, sesame, fish, shellfish, soy, and others.",
      },
    ],
  },
  {
    id: "foodsafety-m4",
    tradeId: "food-safety",
    title: "HACCP Principles & Hazard Analysis",
    level: 4,
    durationMinutes: 24,
    summary:
      "Hazard Analysis and Critical Control Points (HACCP) is the internationally recognised system for identifying, evaluating, and controlling food safety hazards. Learn all seven HACCP principles and how to apply them in a commercial kitchen.",
    keyConcepts: [
      "Seven HACCP principles",
      "Hazard types (biological, chemical, physical)",
      "Critical Control Points",
      "Critical limits",
      "Corrective actions and records",
    ],
    steps: [
      {
        id: "s1",
        title: "Principles 1 & 2: Hazard Analysis and CCPs",
        body: "HACCP Principle 1 is the foundation: conduct a hazard analysis. Examine each step of the food process and identify potential biological (bacteria, viruses, parasites), chemical (cleaning agents, pesticides, allergens), and physical (glass, bone, metal) hazards. Principle 2: identify the Critical Control Points (CCPs) — steps in the process where a control measure can be applied to prevent, eliminate, or reduce a significant hazard to an acceptable level. Common CCPs include cooking (kills pathogens), chilling (prevents growth), and metal detection (physical hazard). Not every process step is a CCP.",
        visualCue:
          "Process flow diagram for a chicken dish from receiving to storage to prep to cooking to holding to service, with CCP symbols (triangle markers) at cooking and hot-holding steps.",
      },
      {
        id: "s2",
        title: "Principles 3 & 4: Critical Limits and Monitoring",
        body: "Principle 3: establish critical limits for each CCP — the maximum or minimum value to which a parameter must be controlled to prevent, eliminate, or reduce a food safety hazard. For the cooking CCP in a poultry dish, the critical limit is a minimum internal temperature of 75°C. Principle 4: establish a monitoring system to measure and document that each CCP is within its critical limit. Monitoring must define what is measured, how, who is responsible, and how frequently. Temperature logs completed by a designated staff member after each batch cook are an example of a monitoring record.",
        visualCue:
          "Monitoring log template showing date, batch, internal temperature reading, time, staff initials, and pass/fail column for a cooking CCP.",
      },
      {
        id: "s3",
        title: "Principle 5: Corrective Actions",
        body: "When monitoring indicates that a CCP is not under control — for example, a chicken breast reads only 68°C at the end of the scheduled cooking time — a corrective action must be immediately taken. Corrective actions for this scenario include continuing to cook until the critical limit is achieved, and investigating the cause (oven calibration, portion size). The food produced while the CCP was out of control must be evaluated: safe to continue cooking, or discard? Corrective actions must be documented: what happened, what food was affected, what was done, and what was done to prevent recurrence.",
        visualCue:
          "Decision flowchart: CCP out of control, assess affected product, is it salvageable? yes: reprocess; no: discard, document and investigate root cause.",
      },
      {
        id: "s4",
        title: "Principles 6 & 7: Verification and Record Keeping",
        body: "Principle 6 (verification) involves activities beyond routine monitoring — testing that the HACCP plan is actually working. Examples: microbiological testing of finished product, calibrating thermometers, and reviewing monitoring records for trends. Third-party audits and council inspections are forms of external verification. Principle 7 (record keeping) requires that all HACCP activities be documented and retained. Australian food safety standards require records to be kept for at least 3 months (or longer for long-shelf-life products). Digital food safety platforms increasingly automate monitoring and record keeping.",
        visualCue:
          "Filing system diagram showing seven HACCP document categories (hazard analysis, CCP list, critical limits, monitoring logs, corrective actions, verification records, training records) with retention period labels.",
      },
      {
        id: "s5",
        title: "Implementing HACCP in Practice",
        body: "A HACCP plan must be developed for the specific food business — no generic plan applies universally. The Food Standards Code (Standard 3.2.1) requires food businesses producing certain high-risk foods to have a documented food safety program. Implementation steps: assemble a HACCP team with relevant knowledge, describe the product and its intended use, construct a process flow diagram, confirm the diagram on-site, conduct the hazard analysis, determine CCPs, and then build the monitoring, corrective action, and verification systems. A well-implemented HACCP plan reduces reliance on end-product testing.",
        visualCue:
          "HACCP implementation roadmap showing 12 steps from team assembly through to ongoing review and revision, presented as a circular continuous improvement cycle.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What are the three types of food safety hazards identified in a HACCP hazard analysis?",
        options: [
          "Physical, thermal, and microbiological",
          "Biological, chemical, and physical",
          "Allergen, pest, and environmental",
          "Contamination, spoilage, and adulteration",
        ],
        correctIndex: 1,
        explanation:
          "HACCP hazard analysis addresses biological (pathogens), chemical (allergens, cleaning agents), and physical (glass, bone, metal) hazards.",
      },
      {
        id: "q2",
        question: "What is a Critical Control Point (CCP)?",
        options: [
          "Any step where a food safety procedure is performed",
          "A step where control can be applied to prevent, eliminate, or reduce a significant hazard",
          "The most dangerous step in a food production process",
          "A documented complaint from a customer about food safety",
        ],
        correctIndex: 1,
        explanation:
          "A CCP is a specific step where control measures can be applied to manage a significant food safety hazard — not every step qualifies.",
      },
      {
        id: "q3",
        question:
          "A chicken breast measures 68°C internal temperature at the end of the scheduled cooking time. What HACCP principle applies to the response?",
        options: [
          "Principle 1 — Hazard Analysis",
          "Principle 3 — Establishing Critical Limits",
          "Principle 5 — Corrective Actions",
          "Principle 6 — Verification",
        ],
        correctIndex: 2,
        explanation:
          "When a CCP falls outside its critical limit, Principle 5 (Corrective Actions) requires immediate response, assessment of affected food, and documentation.",
      },
      {
        id: "q4",
        question:
          "How long must HACCP records generally be retained under Australian food safety standards?",
        options: ["1 week", "1 month", "At least 3 months", "At least 5 years"],
        correctIndex: 2,
        explanation:
          "Australian food safety standards require HACCP records to be retained for at least 3 months (longer for long shelf-life products).",
      },
      {
        id: "q5",
        question:
          "What is the purpose of HACCP verification activities (Principle 6)?",
        options: [
          "To train staff on HACCP procedures",
          "To test that the HACCP plan is actually working as intended",
          "To document corrective actions",
          "To establish critical limits for each CCP",
        ],
        correctIndex: 1,
        explanation:
          "Verification goes beyond routine monitoring to confirm that the HACCP system as a whole is effectively controlling hazards, through testing, audits, and record review.",
      },
    ],
  },
  {
    id: "foodsafety-m5",
    tradeId: "food-safety",
    title: "Food Safety Legislation & Compliance",
    level: 5,
    durationMinutes: 22,
    summary:
      "Understanding Australia's food safety regulatory framework is essential for anyone operating in food service. Learn the Food Standards Code, council inspection processes, notification requirements, and the record keeping obligations that underpin a compliant food business.",
    keyConcepts: [
      "Food Standards Code",
      "Food Act requirements",
      "Council inspections",
      "Food business notification",
      "Record keeping obligations",
    ],
    steps: [
      {
        id: "s1",
        title: "Australia's Food Regulatory Framework",
        body: "Food safety in Australia is co-regulated by federal and state/territory governments. Food Standards Australia New Zealand (FSANZ) develops the Australia New Zealand Food Standards Code — the primary technical standard covering food composition, labelling, contaminants, and food safety practices (Standards 3.1.1, 3.2.1, 3.2.2, 3.2.3). State and territory governments enact their own Food Acts that adopt the Code and appoint authorised officers (council food safety officers) to enforce it. Specific requirements can vary slightly between jurisdictions.",
        visualCue:
          "Regulatory pyramid diagram: FSANZ Code at top, state/territory Food Acts in the middle, local council enforcement at the base, with arrows showing how rules flow downward.",
      },
      {
        id: "s2",
        title: "Food Business Notification",
        body: "Most food businesses in Australia must notify their local council before commencing food operations. Notification is required when a business handles food for sale and falls into a category covered by Standard 3.2.2A. Higher-risk businesses (manufacturing, catering) may require registration and a food safety program; lower-risk businesses may require notification only. Businesses must notify the council within 7 days of commencing food operations and when significant changes occur (change of owner, new food activities, premises changes). Operating without notification is a compliance offence with significant penalty exposure.",
        visualCue:
          "Risk categorisation chart showing four food business categories (1-4) with examples of each and the corresponding notification/registration/food safety program requirements.",
      },
      {
        id: "s3",
        title: "Council Food Safety Inspections",
        body: "Authorised officers conduct routine inspections of food businesses based on risk category — high-risk businesses such as catering companies may be inspected 2-4 times per year; lower-risk businesses less frequently. Inspectors assess: food handler hygiene and training, temperature control and record keeping, premises condition and cleaning, pest management, labelling and allergen management, and the food safety program. An inspection may produce an improvement notice (non-critical issues requiring correction within a set timeframe) or an infringement notice (penalty for serious non-compliance). Inspectors have the power to seize and destroy food they believe is unsafe.",
        visualCue:
          "Inspection checklist template covering five inspection categories, each with compliance criteria and a traffic-light (green/amber/red) rating scale.",
      },
      {
        id: "s4",
        title: "Mandatory Reporting and Food Recalls",
        body: "Under the Food Acts, a food business must immediately notify the local council and state health authority if it has reasonable grounds to believe it has produced or sold food that may cause or has caused a serious foodborne illness. This includes receiving a cluster of customer illness complaints, or discovering contamination in a batch after distribution. Food Standards Australia New Zealand manages the national food recall system. A food recall can be initiated voluntarily by the business or directed by a government authority. Recalls are publicly announced and listed on the FSANZ website.",
        visualCue:
          "Food recall decision flowchart: identify potential unsafe product, assess risk, notify local council and FSANZ, issue recall notice, retrieve product, document outcome.",
      },
      {
        id: "s5",
        title: "Record Keeping Obligations",
        body: "A food business with a food safety program is required to maintain records demonstrating that the program is being implemented. Mandatory records typically include: temperature monitoring logs (receiving, storage, cooking, cooling), cleaning and sanitising schedules with sign-off, staff food safety training records, thermometer calibration records, corrective action logs, and supplier records. Records must be legible, accurate, and available for inspection on request — digital or paper formats are both acceptable. Without records, there is no evidence that correct procedures were followed, even if they were.",
        visualCue:
          "Record keeping matrix listing each mandatory record type, required frequency (daily/weekly/per batch), responsible person, and retention period in a clear table format.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which organisation develops the Australia New Zealand Food Standards Code?",
        options: [
          "The Australian Department of Agriculture",
          "Food Standards Australia New Zealand (FSANZ)",
          "Local council food safety officers",
          "The state Department of Health",
        ],
        correctIndex: 1,
        explanation:
          "FSANZ develops and maintains the Australia New Zealand Food Standards Code, which is then adopted and enforced by state and territory legislation.",
      },
      {
        id: "q2",
        question:
          "When must a food business notify their local council of food operations?",
        options: [
          "Within 30 days of opening",
          "Only when applying for a trading licence",
          "Within 7 days of commencing food operations",
          "Only if the business employs more than five food handlers",
        ],
        correctIndex: 2,
        explanation:
          "Notification must be made to the local council within 7 days of commencing food operations under Standard 3.2.2A.",
      },
      {
        id: "q3",
        question:
          "What authority does a council food safety officer have if they find food they believe is unsafe?",
        options: [
          "They can only issue a verbal warning on the first offence",
          "They can seize and destroy the food",
          "They must refer the matter to FSANZ for a decision",
          "They can only issue an improvement notice, not seize food",
        ],
        correctIndex: 1,
        explanation:
          "Authorised officers have the power to seize and destroy food they believe is unsafe, without requiring a court order.",
      },
      {
        id: "q4",
        question:
          "What is the difference between an improvement notice and an infringement notice?",
        options: [
          "Both are the same — they both impose a financial penalty",
          "An improvement notice addresses non-critical issues with a correction timeframe; an infringement notice is a penalty for serious non-compliance",
          "An improvement notice is issued by the state government; an infringement notice by local council",
          "Improvement notices are for physical hazards; infringement notices for biological hazards only",
        ],
        correctIndex: 1,
        explanation:
          "An improvement notice requires a business to fix non-critical issues within a set period; an infringement notice is a financial penalty for serious non-compliance.",
      },
      {
        id: "q5",
        question:
          "Why is thorough record keeping critical in a food safety enforcement action?",
        options: [
          "Inspectors require records to complete their own government paperwork",
          "Records are only needed for businesses that have had previous complaints",
          "The burden of proof rests on the business to demonstrate compliance; without records there is no evidence of correct procedure",
          "Records are required for tax purposes, not food safety enforcement",
        ],
        correctIndex: 2,
        explanation:
          "In a food safety enforcement action, the business must prove it followed correct procedures. Without records, there is no evidence of compliance.",
      },
    ],
  },
  {
    id: "barista-m1",
    tradeId: "barista",
    title: "Coffee Origins & Roasting",
    level: 1,
    durationMinutes: 45,
    summary:
      "Understand where coffee comes from, how it is processed, and how roast profiles transform green beans into the flavours in your cup.",
    keyConcepts: [
      "Arabica vs Robusta",
      "Coffee-growing regions",
      "Washed and natural processing",
      "Light, medium, and dark roasts",
      "Maillard reaction and first crack",
      "Degassing and freshness",
    ],
    steps: [
      {
        id: "s1",
        title: "The Two Main Species",
        body: "Arabica (Coffea arabica) accounts for about 60% of world production. It grows at high altitudes (900–2,000 m), has a sweeter, more complex flavour, and lower caffeine content (~1.2%). Robusta (Coffea canephora) grows at lower altitudes, has higher caffeine (~2.7%), stronger bitter notes, and is more disease-resistant. Most espresso blends use both: Arabica for sweetness and clarity, Robusta for body and crema.",
        visualCue:
          "Two coffee plants side by side: a tall, slender Arabica with oval leaves growing on a misty hillside, and a shorter, denser Robusta with larger leaves on flat lowland terrain.",
      },
      {
        id: "s2",
        title: "Coffee-Growing Regions: The Bean Belt",
        body: "Coffee grows between the Tropics of Cancer and Capricorn — the 'Bean Belt'. Key origins include: Ethiopia (floral, fruity, the birthplace of coffee), Colombia (balanced, mild acidity), Brazil (nutty, chocolatey, low acidity), Guatemala (full body, spice), Kenya (bright, blackcurrant), and Indonesia/Sumatra (earthy, heavy body, low acidity). Origin dramatically influences flavour.",
        visualCue:
          "A world map with a highlighted band between the two tropics, with coffee-cup icons marking Ethiopia, Colombia, Brazil, Guatemala, Kenya, and Indonesia.",
      },
      {
        id: "s3",
        title: "Terroir: Why Place Matters",
        body: "Like wine, coffee is deeply affected by terroir — the combination of soil, altitude, rainfall, temperature, and shade. High-altitude beans develop more slowly, producing denser seeds with higher sugar and acid content. Volcanic soils in regions like Yirgacheffe (Ethiopia) or Huila (Colombia) impart distinct mineral qualities. Understanding terroir helps baristas describe coffee origins accurately to customers.",
        visualCue:
          "A cross-section diagram of a hillside showing altitude bands: 1,200 m label with Arabica icons, 600 m label with Robusta icons, with soil composition layers visible beneath.",
      },
      {
        id: "s4",
        title: "Washed (Wet) Processing",
        body: "In washed processing, the coffee cherry's skin and fruit are removed before drying. The beans are fermented in water tanks for 24–72 hours to break down the remaining mucilage, then washed clean and dried. Result: a clean, bright, high-acidity cup with clear origin character. Ethiopia Yirgacheffe washed is a classic example.",
        visualCue:
          "A row of concrete fermentation tanks filled with water and coffee beans, with workers raking the beans. A raised drying bed in the background shows clean beans spread in a thin layer.",
      },
      {
        id: "s5",
        title: "Natural (Dry) Processing",
        body: "In natural processing, whole cherries are dried in the sun on raised beds for 3–6 weeks, with the fruit left on the bean throughout. The bean absorbs sugars from the drying fruit. Result: heavy body, low acidity, fruity-sweet flavour (blueberry, strawberry, tropical fruit). Ethiopian natural and Brazilian natural coffees are common examples.",
        visualCue:
          "Raised bamboo drying beds covered with bright red coffee cherries drying under an open sky. Workers turn the cherries with rakes to ensure even drying.",
      },
      {
        id: "s6",
        title: "Roast Profiles: Light, Medium, Dark",
        body: "Roasting transforms green beans through heat. Light roasts (200–205°C) preserve origin flavours — floral, fruity, higher acidity, lighter body. Medium roasts (210–220°C) balance origin character with roast development — caramel, chocolate, balanced acidity. Dark roasts (225–240°C+) develop heavy body, low acidity, and roasty/bitter notes as origin character is overtaken by roast character. Espresso blends are typically medium to medium-dark.",
        visualCue:
          "Three coffee bean samples in order from left to right: pale tan (light roast), medium brown (medium roast), and dark oily brown (dark roast). A temperature scale runs beneath them.",
      },
      {
        id: "s7",
        title: "The Maillard Reaction & Caramelisation",
        body: "Two key chemical reactions drive coffee flavour during roasting. The Maillard reaction (amino acids + sugars at ~150°C+) creates hundreds of aromatic compounds responsible for roasted, nutty, and chocolatey notes. Caramelisation (sugar breakdown at ~170°C+) develops sweetness and brown colour. First crack (an audible pop at ~196°C) marks the transition from light to medium roast. Second crack (~224°C) marks entry into dark roast territory.",
        visualCue:
          "A roast graph plotting bean temperature (y-axis) against time (x-axis), with labelled markers at drying phase, Maillard phase, first crack, and development time ending at drop temperature.",
      },
      {
        id: "s8",
        title: "Degassing: Why Freshness Matters",
        body: "Immediately after roasting, beans release CO2 (degassing) for several days. Using very fresh-roasted beans in espresso traps CO2 in the puck, causing channelling and uneven extraction. The ideal rest period for espresso is 5–14 days post-roast. Filter coffee can be used from day 2–3. Bags with one-way valves allow degassing without oxygen entry. Always check the roast date, not just the best-before date.",
        visualCue:
          "A sealed coffee bag with a one-way valve on the front, with tiny arrow-tipped lines showing gas escaping outward through the valve but no arrows going inward.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Which species is known for higher caffeine content and more disease resistance?",
        options: ["Arabica", "Liberica", "Robusta", "Excelsa"],
        correctIndex: 2,
        explanation:
          "Robusta contains approximately 2.7% caffeine vs Arabica's 1.2%, and is significantly more resistant to pests and disease, making it easier to grow at lower altitudes.",
      },
      {
        id: "q2",
        question:
          "What distinguishes a washed-process coffee from a natural-process coffee?",
        options: [
          "Washed coffees are always lighter in roast profile",
          "Washed coffees have the fruit removed before drying, resulting in a cleaner, brighter cup",
          "Natural coffees are dried indoors; washed coffees are dried in the sun",
          "Washed coffees use Robusta beans; natural coffees use Arabica",
        ],
        correctIndex: 1,
        explanation:
          "In washed processing the skin and fruit are removed before drying, producing a clean, high-acidity profile. Natural processing leaves the whole cherry to dry, imparting heavy body and fruity sweetness.",
      },
      {
        id: "q3",
        question:
          "At approximately what temperature does 'first crack' occur during roasting?",
        options: ["160°C", "180°C", "196°C", "230°C"],
        correctIndex: 2,
        explanation:
          "First crack occurs around 196°C and marks the transition from light to medium roast. It is caused by water vapour and CO2 pressure building inside the bean until it cracks audibly.",
      },
      {
        id: "q4",
        question:
          "Why should freshly roasted espresso beans typically rest 5–14 days before use?",
        options: [
          "The beans need time to absorb moisture from the air",
          "Fresh beans release excessive CO2 which causes channelling and uneven extraction",
          "The roast flavour takes two weeks to fully develop in the bean",
          "Grinders cannot handle fresh beans without overheating",
        ],
        correctIndex: 1,
        explanation:
          "Freshly roasted beans off-gas CO2 rapidly. This trapped gas in the espresso puck disrupts even water flow (channelling), leading to under-extraction. Resting allows degassing to stabilise before brewing.",
      },
    ],
  },
  {
    id: "barista-m2",
    tradeId: "barista",
    title: "Espresso Fundamentals",
    level: 2,
    durationMinutes: 50,
    summary:
      "Master the espresso recipe, understand grinder mechanics, diagnose extraction problems, and produce consistent shots every time.",
    keyConcepts: [
      "Dose, yield, and brew ratio",
      "Grinder burrs and grind size",
      "Tamping technique",
      "Channelling",
      "Over and under extraction",
      "Dialling in",
    ],
    steps: [
      {
        id: "s1",
        title: "What Is an Espresso?",
        body: "Espresso is a concentrated coffee beverage brewed by forcing hot water (92–96°C) under pressure (9 bar) through a tightly packed bed of finely ground coffee. A standard double (the café standard) uses 18–21 g of coffee and produces 25–40 ml of liquid with intense flavour, significant dissolved solids, and a layer of crema on top.",
        visualCue:
          "A portafilter locked into a group head with two streams of espresso flowing into a small white demitasse cup below, the streams tiger-striped amber and dark brown.",
      },
      {
        id: "s2",
        title: "The Espresso Recipe: Dose, Yield, Time",
        body: "Every espresso shot is defined by three variables. Dose: the weight of dry coffee in the portafilter basket (e.g. 18 g). Yield: the weight of liquid espresso in the cup (e.g. 36 g). Time: how long extraction takes (e.g. 28 seconds). The ratio of dose to yield is the brew ratio — 1:2 is standard (18 g dose, 36 g yield). Changing any variable changes the shot's strength, sweetness, and acidity.",
        visualCue:
          "Three labelled scales side by side: the first shows a portafilter basket on a scale reading 18 g, the second shows a cup on a scale reading 36 g, the third shows a stopwatch at 28 seconds.",
      },
      {
        id: "s3",
        title: "Grinder Mechanics: Burrs",
        body: "Espresso grinders use flat or conical burrs to cut coffee into uniform particles. Flat burrs produce a more consistent particle size distribution, valued for clarity. Conical burrs are quieter and generate less heat. Worn burrs create more fines that clog and over-extract. Quality grinders allow micro-adjustment of burr distance — this is the primary grind size control.",
        visualCue:
          "An exploded diagram of a grinder showing the motor, upper flat burr carrier, lower flat burr, and grounds chute below. Red arrows indicate the direction of burr rotation.",
      },
      {
        id: "s4",
        title: "Grind Size and Its Effect",
        body: "Grind size is the most powerful variable in espresso. Finer grinds create more surface area and resistance, slowing water flow and increasing extraction. Coarser grinds reduce resistance and speed up flow. If your shot runs too fast (under 20 seconds), grind finer. If it runs too slow (over 35 seconds), grind coarser. Grind must be adjusted daily as temperature and humidity change.",
        visualCue:
          "Two portafilter cross-sections side by side: one labelled 'Fine grind' with densely packed grounds and a slow drip arrow, one labelled 'Coarse grind' with loose grounds and a fast flow arrow.",
      },
      {
        id: "s5",
        title: "Tamping: Technique and Pressure",
        body: "Tamping compresses loose coffee grounds into a firm, level puck. Place the portafilter on a stable surface. Apply 10–15 kg of downward pressure using a calibrated tamper that fits the basket precisely (typically 58 mm). The puck must be level — a tilted tamp creates channelling where water flows through the thinner side. Twist slightly to polish the surface. Consistent tamping is essential for reproducible shots.",
        visualCue:
          "A top-down view of a portafilter basket showing a perfectly level tamped coffee puck with a smooth, polished surface. A small spirit-level icon in the corner shows the bubble centred.",
      },
      {
        id: "s6",
        title: "Channelling: The Enemy of Espresso",
        body: "Channelling occurs when water forces a path through a weak point in the coffee puck rather than passing through evenly. Causes: uneven tamp, grind clumping, damaged basket, or inconsistent dose distribution. Signs: shot runs very fast, streams appear uneven from the spouts, crema is pale or has white holes. Prevention: distribute grounds evenly before tamping and ensure a level tamp.",
        visualCue:
          "A cross-section of a portafilter basket showing a coffee puck with a hairline crack on one side. A blue arrow shows water flooding through the crack while the rest of the puck is bypassed.",
      },
      {
        id: "s7",
        title: "Extraction Colour and Flow",
        body: "A good extraction begins with a slow dark-brown stream (tiger-striping), transitioning to a honey-brown flow. The stream should be continuous and consistent. A fast, pale extraction indicates under-extraction. A very slow, dark, syrupy flow indicates over-extraction. Ideal flow has a thick, caramel-coloured, consistent stream throughout the extraction.",
        visualCue:
          "A time-lapse sequence of a shot: dark tiger-striped start at 0–5 sec, thick honey-brown stream at 10–20 sec, then a slight lightening but still rich colour at 25–30 sec before the cup is removed.",
      },
      {
        id: "s8",
        title: "Diagnosing Over and Under Extraction",
        body: "Under-extraction (too short/fast): tastes sour, sharp, watery, lacks sweetness. Fix: grind finer, increase dose, or increase yield. Over-extraction (too long/slow): tastes bitter, dry, astringent, hollow. Fix: grind coarser, decrease dose, or decrease yield. A balanced extraction is sweet, complex, has balanced acidity, and lingers pleasantly. Always taste your shots — data without sensory feedback is incomplete.",
        visualCue:
          "A flavour dial showing three zones: left zone labelled 'Under-extracted' (sour, watery), centre zone labelled 'Balanced' (sweet, complex), right zone labelled 'Over-extracted' (bitter, dry). A needle points to centre.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "A standard double espresso uses a 1:2 brew ratio with an 18 g dose. What is the target yield?",
        options: ["18 g", "28 g", "36 g", "54 g"],
        correctIndex: 2,
        explanation:
          "A 1:2 brew ratio means the yield is twice the dose. 18 g dose × 2 = 36 g yield. This is the most common starting point for modern espresso recipes.",
      },
      {
        id: "q2",
        question:
          "Your shot runs in 18 seconds and tastes sour and sharp. What should you do?",
        options: [
          "Grind coarser to speed up the shot further",
          "Grind finer to slow down extraction and increase contact time",
          "Increase brew temperature to compensate for the speed",
          "Add more water to the final cup to dilute the sourness",
        ],
        correctIndex: 1,
        explanation:
          "A fast, sour shot is under-extracted. Grinding finer increases resistance and slows water flow, allowing more contact time for proper extraction and sweetness development.",
      },
      {
        id: "q3",
        question:
          "What is channelling in espresso, and what is its primary visual sign?",
        options: [
          "When milk channels into the espresso; crema turns white",
          "When water finds a weak path through the puck; shot runs very fast with an uneven, pale stream",
          "When temperature drops below 90°C; steam appears at the group head",
          "When grind is too coarse; grounds escape the portafilter",
        ],
        correctIndex: 1,
        explanation:
          "Channelling is when pressurised water finds the path of least resistance through a weak point in the puck rather than passing through evenly. The shot runs fast and the stream is pale, thin, or uneven.",
      },
      {
        id: "q4",
        question:
          "What is the primary function of a PID controller on an espresso machine?",
        options: [
          "It regulates pump pressure at 9 bar",
          "It controls grinder burr speed",
          "It maintains stable brew temperature",
          "It measures espresso yield by weight",
        ],
        correctIndex: 2,
        explanation:
          "A PID (proportional-integral-derivative) controller monitors and adjusts the boiler heating element to maintain a stable, precise brew temperature, reducing shot-to-shot variation.",
      },
      {
        id: "q5",
        question:
          "Why should you adjust grind size every day even if nothing else has changed?",
        options: [
          "Burrs wear down measurably overnight",
          "Ambient temperature and humidity affect coffee density and moisture, shifting the effective grind size",
          "Espresso machines run at different pressures depending on ambient conditions",
          "Coffee oils clog the burrs overnight and must be cleared by adjusting the setting",
        ],
        correctIndex: 1,
        explanation:
          "Temperature and humidity affect the physical properties of coffee grounds. Overnight changes shift how grounds pack and resist water flow, typically coarsening the effective grind and requiring daily recalibration.",
      },
    ],
  },
  {
    id: "barista-m3",
    tradeId: "barista",
    title: "Milk Texturing & Latte Art",
    level: 3,
    durationMinutes: 50,
    summary:
      "Develop the skills to texture milk correctly, hit the right temperature consistently, and pour basic latte art patterns.",
    keyConcepts: [
      "Aeration and rolling phases",
      "65°C temperature target",
      "Microfoam vs wet foam vs dry foam",
      "Milk chemistry",
      "Latte art: heart and rosette",
      "Milk alternatives",
    ],
    steps: [
      {
        id: "s1",
        title: "Why Milk Texture Matters",
        body: "The quality of textured milk determines the mouthfeel, sweetness, and visual presentation of every milk-based espresso drink. Properly textured milk has a glossy, silky consistency (microfoam) with no large bubbles. It integrates seamlessly with espresso to create a balanced, sweet drink and allows latte art to form. Incorrectly textured milk — too bubbly, too dry, or too flat — produces a harsh, watery, or overly thick result.",
        visualCue:
          "Two milk pitchers side by side: the left contains glossy, paint-like microfoam; the right contains large, airy bubbles. Below each, a coffee cup shows the visual difference in the poured drink.",
      },
      {
        id: "s2",
        title: "Milk Chemistry: Why Milk Textures",
        body: "Whole milk produces the best texture due to its balance of fat (~3.5%) and protein (~3.2%). Proteins (casein and whey) denature when heated, wrapping around air bubbles to create stable foam. Fat contributes richness and smoothness. The steam wand injects air and heat simultaneously. Full-fat milk gives the sweetest result as lactose becomes more soluble at higher temperatures.",
        visualCue:
          "A molecular diagram showing a fat globule and a protein strand in milk. Arrows show a steam wand tip introducing air bubbles, with protein strands wrapping around each bubble to stabilise it.",
      },
      {
        id: "s3",
        title: "Steam Wand Positioning: The Two Phases",
        body: "Phase 1 — Aeration: Position the steam wand tip just below the milk surface at a slight angle. Open the steam valve fully. The tip should hiss and the milk should rise slightly as air is incorporated. Phase 2 — Heating (rolling): Once enough air is added (milk has risen ~1–2 cm), lower the pitcher to submerge the wand tip deeper. This creates a rolling vortex that breaks down large bubbles into microfoam and heats the milk evenly.",
        visualCue:
          "Two side-by-side diagrams of a milk pitcher with the steam wand inserted. Diagram A (aeration): wand tip near the surface, arrows showing air entering. Diagram B (rolling): wand submerged, circular vortex arrows visible in the milk.",
      },
      {
        id: "s4",
        title: "The Temperature Target: 65°C",
        body: "Target milk temperature is 60–65°C. Below 55°C, the milk tastes thin and sweetness is underdeveloped. Above 70°C, proteins over-denature, creating a cooked flavour and breaking down foam structure. A useful tactile guide: 65°C feels uncomfortably hot to hold the pitcher side for more than 1–2 seconds. Never re-steam milk — once cooled, the protein and fat structure are damaged.",
        visualCue:
          "A thermometer showing a green zone from 60–65°C, a yellow caution zone below 55°C labelled 'Under-developed', and a red zone above 70°C labelled 'Scalded — do not use'.",
      },
      {
        id: "s5",
        title: "Microfoam vs Wet Foam vs Dry Foam",
        body: "Microfoam: tiny, integrated bubbles invisible to the naked eye. Surface looks like wet paint — used for flat whites, lattes, and latte art. Wet foam: slightly larger bubbles, sits on top of milk — used for traditional cappuccinos. Dry foam: large, stable, airy bubbles — used for macchiatos and some specialty drinks. The difference is controlled by how long you aerate and how fast you roll.",
        visualCue:
          "Three pitchers shown in cross-section: microfoam (smooth, uniform, no visible bubbles), wet foam (small visible bubbles with a loose layer on top), dry foam (large airy bubbles piled well above the milk line).",
      },
      {
        id: "s6",
        title: "Purging the Steam Wand",
        body: "Always purge the steam wand before and after use: open the valve briefly to expel condensed water before steaming, and again after to clear milk residue. Wipe the wand immediately after steaming with a damp cloth dedicated only to the steam wand. Never allow milk residue to dry on the wand — it blocks the tip and grows bacteria. Soak the tip in hot water if blocked.",
        visualCue:
          "A steam wand before and after wiping: the left side shows dried milk residue coating the wand; the right side shows a clean, shiny wand after wiping with a dedicated cloth.",
      },
      {
        id: "s7",
        title: "Pouring Technique: Setting Up for Latte Art",
        body: "Before pouring, tap the pitcher on the bench and swirl to combine any remaining large bubbles into a uniform, glossy texture. Start pouring from a height (8–10 cm) to let the milk sink under the crema. As the cup fills (approximately half full), lower the pitcher closer to the surface. This is when latte art forms — the microfoam rises to the surface and can be guided by pour direction.",
        visualCue:
          "A sequence of three images: (1) pitcher tapped on bench, (2) high pour from 10 cm height filling lower half of cup, (3) pitcher lowered close to surface with white foam beginning to appear on top.",
      },
      {
        id: "s8",
        title: "Pouring a Heart",
        body: "The heart is the foundational latte art pattern. Pour from height to fill the cup halfway. Lower the pitcher tip to near the surface and wiggle slightly left-right to create a white dot of foam. As the cup nears full, raise the pitcher slightly and cut through the dot with the stream to create the point of the heart. Practise on the same cup 20–30 times before moving to more complex patterns.",
        visualCue:
          "A top-down sequence of six cup images showing the heart formation: (1) dark espresso, (2) milk sinking under crema, (3) white dot forming, (4) dot widening, (5) cut-through beginning, (6) completed heart pattern.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What is the target milk temperature for a latte or flat white?",
        options: ["45–50°C", "55–60°C", "60–65°C", "70–75°C"],
        correctIndex: 2,
        explanation:
          "60–65°C is the target range. Below 55°C the milk is thin and under-sweetened. Above 70°C the proteins over-denature, producing a cooked taste and poor foam structure.",
      },
      {
        id: "q2",
        question:
          "In milk texturing, what is the purpose of the 'aeration phase'?",
        options: [
          "To heat the milk quickly to serving temperature",
          "To incorporate air into the milk to build foam volume",
          "To spin the milk in a vortex to break down large bubbles",
          "To sterilise the steam wand before use",
        ],
        correctIndex: 1,
        explanation:
          "The aeration phase involves positioning the wand tip just below the surface to inject air into the milk, increasing its volume. The rolling phase that follows heats and integrates the foam into microfoam.",
      },
      {
        id: "q3",
        question:
          "Why should you never re-steam milk that has already been heated?",
        options: [
          "The milk will over-fill the pitcher when steamed twice",
          "Milk proteins and fat structure are damaged by the first steam and will not texture correctly on re-steaming",
          "Re-steaming changes the colour of the crema in the espresso",
          "The steam wand cannot reach temperature twice in quick succession",
        ],
        correctIndex: 1,
        explanation:
          "Once milk has been heated, the protein structure is altered. Re-steaming causes the proteins to break down further, producing a flat, grainy texture with no ability to form stable microfoam.",
      },
      {
        id: "q4",
        question:
          "When pouring latte art, at what fill level should you lower the pitcher tip to the milk surface?",
        options: [
          "When the cup is about one-quarter full",
          "When the cup is about one-third full",
          "When the cup is about half full",
          "When the cup is about three-quarters full",
        ],
        correctIndex: 2,
        explanation:
          "Pour from height until the cup is approximately half full to allow the milk to sink under the crema. Lowering the pitcher at this point brings the microfoam to the surface where it can be shaped into a pattern.",
      },
    ],
  },
  {
    id: "barista-m4",
    tradeId: "barista",
    title: "Café Workflow & Equipment",
    level: 4,
    durationMinutes: 45,
    summary:
      "Understand bar layout, daily equipment maintenance, rush service techniques, and how to identify equipment faults before they become service failures.",
    keyConcepts: [
      "Bar layout and workflow",
      "Opening and closing procedures",
      "Group head cleaning",
      "Backflushing",
      "Portafilter and basket maintenance",
      "Equipment fault identification",
    ],
    steps: [
      {
        id: "s1",
        title: "Bar Layout and Workflow Principles",
        body: "A well-designed café bar is organised around minimising movement. The espresso machine, grinder, and knock box form the primary triangle. Milk pitchers, cups, and portafilters should be within arm's reach. The flow is: grind → dose → tamp → extract → steam → pour → present. Any layout requiring crossing movements between these steps slows service and increases error rate.",
        visualCue:
          "A top-down bar layout diagram with the espresso machine centred, grinder to the immediate left, knock box to the right, and milk fridge below. Dotted workflow arrows connect each station in the correct sequence.",
      },
      {
        id: "s2",
        title: "Opening Procedures",
        body: "Before service: 1. Turn on machine — allow 20–30 min warm-up. 2. Run water through group heads to clear overnight condensation. 3. Purge steam wands. 4. Check water supply. 5. Dial in the grinder — grind coarsens overnight. Pull a test shot, taste, adjust. 6. Confirm milk is cold (below 4°C). 7. Check cups are pre-warmed. Opening without dialling in produces poor shots all morning.",
        visualCue:
          "A morning barista checklist pinned to a wall with seven items, each with a tick box. The grinder calibration step is circled in red with an annotation: 'Never skip — grind changes overnight'.",
      },
      {
        id: "s3",
        title: "Group Head Cleaning",
        body: "Coffee oils accumulate on the group head gasket, screen, and body during service. After each use: flush the group head with water (run without the portafilter for 3–5 seconds). At end of shift: scrub the group head screen and gasket with a dedicated brush using circular motions. Rancid coffee oil is a primary cause of bitter espresso — even excellent coffee will taste bad through a dirty group head.",
        visualCue:
          "A close-up cross-section of a group head showing the shower screen, gasket, and group head body. Red arrows indicate coffee oil deposits on the screen; a brush icon shows the circular scrubbing direction.",
      },
      {
        id: "s4",
        title: "Backflushing: Cleaning the Group Head Internals",
        body: "Backflushing forces cleaning solution backwards through the group head solenoid valve to remove accumulated coffee oils from internal channels. Process: insert a blind basket into the portafilter, add espresso cleaner (e.g. Puly Caff), run a 10-second cycle, pause 10 seconds, repeat 5 times. Then run 5 cycles with clean water only. Backflush at end of each service day. Never use dish soap — it damages seals and leaves flavour residue.",
        visualCue:
          "A cutaway espresso machine diagram showing the solenoid valve and internal group head channels. Blue arrows show normal flow (forward), red arrows show backflush flow (reverse) clearing the channels.",
      },
      {
        id: "s5",
        title: "Portafilter and Basket Maintenance",
        body: "Portafilter baskets develop micro-corrosion and residue buildup that affects extraction evenness. Weekly: soak baskets in Puly Caff solution (1 litre hot water, 5 g cleaner) for 20–30 minutes, then scrub and rinse. Check baskets for damaged holes or warping. Inspect portafilter gaskets monthly for cracking or hardening — a worn gasket causes pressure loss and extraction inconsistency.",
        visualCue:
          "Three portafilter baskets: the first shows a new basket with clean, uniform holes; the second shows a used basket with scale and brown coffee residue; the third shows the same basket after soaking — clean and shiny.",
      },
      {
        id: "s6",
        title: "Rush Service: Managing the Queue",
        body: "During a rush: 1. Batch milk — steam multiple orders in sequence. 2. Sequential extraction — start the next shot while the previous milk is being textured. 3. Call drinks as they are made, not when ordered. 4. Identify bunching (e.g. three lattes) and batch them. 5. Never rush tamping or grind adjustment — consistency under pressure requires discipline. A 30-second wait per drink is better than 10 bad drinks.",
        visualCue:
          "A bird's-eye view of a busy bar with three simultaneous workflow threads shown as coloured arrows: red (extraction), blue (milk steaming), green (order calling), demonstrating how they interleave efficiently.",
      },
      {
        id: "s7",
        title: "Common Equipment Fault Signs",
        body: "Learn to recognise early fault indicators: Low steam pressure = boiler element failing or scale buildup. Slow or no group head flow = pump failing, blocked solenoid, or clogged shower screen. Shot pulls fast regardless of grind = worn or damaged basket. Machine trips safety thermostat = scale on thermostat probe. Steam wand blocked = disassemble and soak tip. Grinder running slow = burr wear or motor bearing issue. Report all faults immediately — operating a faulty machine worsens damage and risks injury.",
        visualCue:
          "A fault-finding table displayed as a poster: left column lists fault symptoms, right column lists likely causes. Key faults are highlighted in orange with immediate action notes.",
      },
      {
        id: "s8",
        title: "Descaling and Water Quality",
        body: "Scale (calcium carbonate from hard water) builds on boiler elements, group head screens, and solenoid valves. A scaled element uses more energy, heats unevenly, and eventually fails. Descale frequency depends on water hardness — every 1–3 months in hard water areas. Use a proprietary descaler (e.g. Urnex Dezcal) following the manufacturer's instructions. Filtered or softened water dramatically extends machine life.",
        visualCue:
          "A boiler element cross-section showing two states: left side clean metal surface; right side coated in white calcium carbonate scale 3 mm thick, with a heat arrow showing reduced thermal transfer through the scale layer.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "Why must you dial in the grinder at the start of every service?",
        options: [
          "Grinders reset to a default setting when powered off",
          "Grind size coarsens overnight as ambient humidity and temperature change",
          "Dialling in is a legal requirement under food safety regulations",
          "Espresso machines run at different pressure in the morning",
        ],
        correctIndex: 1,
        explanation:
          "Ambient temperature and humidity affect coffee grounds overnight, typically coarsening the effective grind. This means shots run faster and extract less without recalibration at the start of each service.",
      },
      {
        id: "q2",
        question:
          "What is the purpose of using a blind basket when backflushing?",
        options: [
          "To prevent water from damaging the pump during cleaning",
          "To force cleaning solution backwards through the solenoid valve and internal channels",
          "To protect the portafilter basket from chemical damage",
          "To reduce water pressure during the cleaning cycle",
        ],
        correctIndex: 1,
        explanation:
          "A blind basket (solid, no holes) seals the portafilter so pressure builds and forces water backwards through the group head solenoid, carrying coffee oil deposits out through the drain.",
      },
      {
        id: "q3",
        question:
          "What is the primary long-term cause of espresso machine failure in cafés?",
        options: [
          "Overuse of the steam wand",
          "Using dark-roast beans that clog the group screen",
          "Scale buildup from hard water on boiler elements and solenoid valves",
          "Running shots too frequently without allowing pressure recovery",
        ],
        correctIndex: 2,
        explanation:
          "Calcium carbonate scale from hard water accumulates on boiler elements, reducing efficiency and eventually causing element failure. Scale in solenoid valves causes flow restriction and machine errors.",
      },
      {
        id: "q4",
        question:
          "During a rush, why should you never rush the tamping or grind adjustment step?",
        options: [
          "Rushed tamping voids the machine warranty",
          "Consistency in tamping and grind is foundational — poor technique produces bad drinks that damage reputation more than a slight wait",
          "Tamping too fast overloads the portafilter spring",
          "Grind adjustment is restricted to the opening barista only",
        ],
        correctIndex: 1,
        explanation:
          "Every other step can be optimised under pressure, but inconsistent tamping and grind calibration are the primary causes of shot failure. A few extra seconds of quality control prevents multiple remakes and customer complaints.",
      },
    ],
  },
  {
    id: "barista-m5",
    tradeId: "barista",
    title: "Specialty Coffee & Customer Service",
    level: 5,
    durationMinutes: 50,
    summary:
      "Understand the specialty coffee grading system, apply sensory evaluation techniques, expand menu knowledge, and handle customer complaints professionally.",
    keyConcepts: [
      "SCA grading scale",
      "Cupping protocol",
      "Coffee flavour wheel",
      "Espresso-based drink recipes",
      "Ristretto vs lungo",
      "LAST complaint framework",
    ],
    steps: [
      {
        id: "s1",
        title: "What Is Specialty Coffee?",
        body: "Specialty coffee is defined by the Specialty Coffee Association (SCA) as coffee that scores 80 points or above on a 100-point cupping scale. Scores below 80 are classified as commodity or commercial grade. Specialty coffee is traceable to a specific farm, region, and lot; processed with care; and roasted to express the best qualities of the origin. It commands a premium because quality control is applied at every step — from farmer to roaster to barista.",
        visualCue:
          "A quality pyramid with three levels: top tier labelled 'Specialty 80+' in gold, middle tier 'Premium 75–79' in silver, bottom tier 'Commodity <75' in grey. An arrow on the side shows the price premium increases with the tier.",
      },
      {
        id: "s2",
        title: "The SCA Cupping Protocol",
        body: "Cupping is the standardised method for evaluating coffee quality. Protocol: (1) Weigh 8.25 g of coarsely ground coffee per 150 ml of water. (2) Pour water at 93°C and steep for 4 minutes. (3) Break the crust and inhale aroma — scored separately. (4) Remove floating grounds. (5) Slurp loudly from a cupping spoon (aeration enhances aroma perception). (6) Score: fragrance/aroma, flavour, aftertaste, acidity, body, balance, uniformity, clean cup, sweetness, overall.",
        visualCue:
          "A cupping table set up formally: six identical white cupping bowls with labelled samples, cupping spoons, a rinse cup, and a printed SCA cupping form beside each bowl. A barista leans over one bowl breaking the crust.",
      },
      {
        id: "s3",
        title: "The Coffee Flavour Wheel",
        body: "The SCA Flavour Wheel maps coffee descriptors from broad categories at the centre to specific descriptors at the outer edge. Broad categories: fruity, floral, sweet, nutty/cocoa, spices, roasted, other. Specific examples: fruity → berry → blackcurrant; floral → jasmine. Use the wheel when cupping or describing coffee to customers. Start broad (fruity, nutty) then refine. Accurate, specific language builds customer trust and raises perceived value.",
        visualCue:
          "The SCA coffee flavour wheel in full colour, with the innermost ring showing broad categories (Fruity, Floral, Sweet, Nutty/Cocoa, Spices, Roasted) and the outer rings progressively narrowing to specific descriptors.",
      },
      {
        id: "s4",
        title: "Sensory Evaluation: Training Your Palate",
        body: "Professional sensory evaluation is a trainable skill. Key dimensions: Aroma — inhale before and after brewing, identify floral/fruit/chocolate/roast. Acidity — a quality perception, not sourness; bright and lively. Sweetness — caramel, honey, or fruit in the finish. Body — the weight of the liquid on the palate. Aftertaste — how long the flavour lingers and whether it's pleasant. Regular cupping sessions and tasting notes build calibration over time.",
        visualCue:
          "Five flavour evaluation cards laid out like a hand of cards, each labelled with a sensory dimension: Aroma, Acidity, Sweetness, Body, Aftertaste. Each card includes example descriptors and a 1–5 rating scale.",
      },
      {
        id: "s5",
        title: "Menu Knowledge: Espresso-Based Drinks",
        body: "Know the exact recipe for every menu drink: Espresso (double): 18–21 g dose, 36–42 g yield, 27–32 sec. Americano: double espresso + hot water (1:4). Flat white: double ristretto + 130–150 ml microfoam in a 160 ml cup. Latte: double espresso + 180–200 ml microfoam in 220–250 ml cup. Cappuccino: equal thirds espresso, steamed milk, foam. Long black: hot water first, then double espresso poured on top. Macchiato: single or double espresso stained with a small amount of foam.",
        visualCue:
          "A drinks menu board showing each drink as a cross-section diagram inside a cup silhouette, with coloured layers indicating espresso (dark brown), steamed milk (light brown), and foam (white) in the correct proportions.",
      },
      {
        id: "s6",
        title: "Ristretto vs Lungo: Understanding Ratios",
        body: "A ristretto is a short, restricted espresso — same dose but half the yield (1:1 ratio, e.g. 18 g → 18 g). It is sweeter, more intense, and lower in caffeine. A lungo is a long espresso — extended yield (1:3 ratio, e.g. 18 g → 54 g). Higher caffeine, more bitter. Flat whites traditionally use a ristretto base for a sweeter, more integrated milk drink. Understanding ratios allows customisation for customer preferences.",
        visualCue:
          "Three espresso cups in a row showing yield volumes: ristretto (18 ml, dark and thick), standard espresso (36 ml), lungo (54 ml, lighter in colour). Dose weight is shown as equal for all three.",
      },
      {
        id: "s7",
        title: "Upselling Specialty Drinks",
        body: "Upselling in specialty coffee is about matching the customer to a better experience. Ask about preferences before recommending: 'Do you prefer something fruity and bright, or more chocolatey and smooth?' Describe origin character, not just roast level. Use accessible language — 'notes of caramel and hazelnut' resonates more than 'medium-dark profile'. Offer a sample when launching a new single origin. Customers who connect with a story buy premium products and return.",
        visualCue:
          "A conversation diagram: barista speech bubble asks 'Do you prefer something bright and fruity, or rich and chocolatey?' Customer speech bubble replies 'Rich and chocolatey.' Barista points to 'Colombian medium roast' on a menu board.",
      },
      {
        id: "s8",
        title: "Handling Complaints: The LAST Framework",
        body: "When a customer complains, use LAST: Listen — let them finish without interruption, body language open and not defensive. Apologise — sincerely and without excuses ('I'm sorry this wasn't right'). Solve — offer a remake, alternative, or refund. Thank — genuinely thank them for telling you; complaints are quality control data. Never argue or minimise. A well-handled complaint creates a loyal customer. A poorly handled one creates a vocal detractor.",
        visualCue:
          "Four connected boxes in a horizontal chain: L (Listen, icon: ear), A (Apologise, icon: speech bubble with sorry), S (Solve, icon: wrench), T (Thank, icon: handshake). Below each box, a short example statement.",
      },
    ],
    quiz: [
      {
        id: "q1",
        question:
          "What minimum score on the SCA cupping scale qualifies a coffee as 'specialty grade'?",
        options: ["70 points", "75 points", "80 points", "85 points"],
        correctIndex: 2,
        explanation:
          "The SCA defines specialty coffee as scoring 80 or above on a 100-point cupping scale. Scores below 80 are commercial grade. Scores of 90+ are considered exceptional or outstanding.",
      },
      {
        id: "q2",
        question:
          "In the SCA cupping protocol, what is the purpose of 'breaking the crust'?",
        options: [
          "It removes grounds from the surface before drinking",
          "It releases concentrated aromas for evaluation, which is scored as part of the aroma attribute",
          "It standardises the water temperature across all cups",
          "It signals to other cuppers that the tasting phase has begun",
        ],
        correctIndex: 1,
        explanation:
          "Breaking the crust releases a concentrated burst of aroma. The evaluator inhales immediately to assess fragrance/aroma, which is a separately scored attribute on the SCA cupping form.",
      },
      {
        id: "q3",
        question: "What is the key difference between a ristretto and a lungo?",
        options: [
          "A ristretto uses more coffee; a lungo uses less",
          "A ristretto has a shorter yield (1:1 ratio) and is sweeter; a lungo has a longer yield (1:3+) and is more bitter",
          "A ristretto uses Arabica; a lungo uses Robusta",
          "A lungo is served with hot water; a ristretto is served cold",
        ],
        correctIndex: 1,
        explanation:
          "Ristretto means 'restricted' — same dose but shorter yield, producing a sweeter, more concentrated shot. Lungo means 'long' — extended yield that increases bitterness and caffeine content.",
      },
      {
        id: "q4",
        question:
          "What does the 'S' in the LAST complaint handling framework stand for?",
        options: [
          "Sincerely (apologise sincerely)",
          "Speed (resolve the issue quickly)",
          "Solve (offer a solution)",
          "Smile (maintain positive body language)",
        ],
        correctIndex: 2,
        explanation:
          "LAST = Listen, Apologise, Solve, Thank. The 'Solve' step involves offering a concrete resolution — a remake, alternative, or refund — to address the customer's specific complaint.",
      },
      {
        id: "q5",
        question:
          "When describing a coffee origin to a customer, which approach is most effective?",
        options: [
          "Use technical terms like 'wet-processed Arabica at 1,800 m MASL' to demonstrate expertise",
          "Only describe the roast level (light, medium, dark) as customers understand this most easily",
          "Ask about flavour preferences first, then describe using accessible language like 'notes of caramel and hazelnut'",
          "Avoid describing coffee to customers as they rarely care about origin",
        ],
        correctIndex: 2,
        explanation:
          "Effective upselling starts by understanding the customer's preferences, then describing the coffee in accessible, sensory language. This builds connection, raises perceived value, and increases the chance of a successful recommendation.",
      },
    ],
  },
];
