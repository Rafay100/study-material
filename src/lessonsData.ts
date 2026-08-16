export interface Lesson {
  id: number;
  title: string;
  shortTitle: string;
  explanation: string;
  explanationUrdu: string;
  analogy: string;
  example: string;
  remember: string;
  whyMatters: string;
  diagramType: string;
  miniQuestion: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  };
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "The Ecosystem Concept",
    shortTitle: "Ecosystem Concept",
    explanation: `What is it?
An AI Ecosystem is a unified network of connected parts—including textbooks, Systems of Record (SoR), AI Tutors, AI Developers, and Vertical Workers—working together around one shared source of truth.

Why does it matter?
Without an ecosystem, AI tools are isolated. They don't share knowledge, leading to contradictions, learning gaps, and duplicate work. An ecosystem aligns both humans and AI on the same definitions.

How does it work?
We stop treating textbooks as static files. We turn them into active, governed Systems of Record. One single source serves human learners (as a web page) and AI agents (via standard connectors), enabling tutors to teach and developer agents to build.

Simple Example
Instead of asking Claude to write code from its generic memory (which might include outdated standards), it queries the official System of Record (textbook) first to read the exact, approved architecture guidelines.

Key Takeaway
Ecosystem = multiple connected subsystems interacting as a single machine around a single source of truth.`,
    explanationUrdu: `Yeh Kya Hai?
AI Ecosystem aik aisi connected parts ki body hai jo aik standard Source of Truth ke gird mil kar kaam karti hai—jaise textbook, Systems of Record (SoR), AI Tutor, aur AI Developer.

Yeh Kyun Zaroori Hai?
Ecosystem ke bina AI tools akele kaam karte hain, jis se woh ghalat information (hallucinations) dete hain aur human progress track nahi kar paate.

Yeh Kaise Kaam Karta Hai?
Hum books ko static text ke bajaye dynamic System of Record banate hain. Is se humans aur AI agents dono same data read karte hain, jis se training-data guesses khatam ho jate hain.

Sada Misaal
Kisi chatbot ko manually copy-paste karne ke bajaye, AI Tutor direct system se connected hota hai. Woh aap ki progress check kar ke wahan se start karta hai jahan aap ne chorra tha.

Aham Nuqta
Ecosystem ka matlab hai sab parts ka aik hi source of truth ke gird aapas mein connect ho kar kaam karna.`,
    analogy: "Think of a school. A school is not just a building. It is a connected ecosystem of books, student gradebooks, private teachers, and final exam certificates.",
    example: "Instead of copy-pasting code into Claude, the system automatically checks your Zia Tutor progress, retrieves the textbook chapters, and writes the code using those exact specs.",
    remember: "Ecosystem = connected parts working together on a single source of truth.",
    whyMatters: "Without an ecosystem, AI tools are isolated and cannot share context.",
    diagramType: "ecosystem_intro",
    miniQuestion: {
      question: "What is the core decision that defines the Agent Factory ecosystem?",
      options: [
        "Treating the textbook as a governed System of Record for both humans and AI",
        "Using only physical textbooks and offline classrooms",
        "Replacing all databases with simple text files",
        "Running AI models entirely on local mobile screens"
      ],
      correct: 0,
      explanation: "Correct! Treating the textbook as an active System of Record is the foundation of the ecosystem."
    }
  },
  {
    id: 2,
    title: "System of Record",
    shortTitle: "System of Record",
    explanation: `What is it?
A System of Record (SoR) is the single, official, and authoritative database where the correct and verified version of information is stored.

Why does it matter?
If AI agents and humans query different sources, they will contradict each other. An SoR ensures consistency, accuracy, and stops AI models from making training-data guesses.

How does it work?
The textbook content is broken down into structured chunks, indexed, and served over Model Context Protocol (MCP). Any AI agent or web client can query this MCP server to fetch grounded facts.

Simple Example
If a client and an AI spreadsheet disagree on tax rates, they query the tax department's System of Record. The SoR data always wins.

Key Takeaway
System of Record = the official, single source of truth served to humans and AI.`,
    explanationUrdu: `Yeh Kya Hai?
System of Record (SoR) ek aisi official aur authoritative jagah hoti hai jahan correct version of data store hota hai.

Yeh Kyun Zaroori Hai?
Agar AI agents generic training data se answers den ge to woh ghalat information generate karein ge. SoR hone se unhein exact aur authentic facts milte hain.

Yeh Kaise Kaam Karta Hai?
Book ke content ko index kar ke Model Context Protocol (MCP) server ke zariye expose kiya jata hai, taake standard interfaces se query kiya ja sake.

Sada Misaal
Agar aik customer lists ke multiple versions hain, to hum database (System of Record) check karte hain. Jo database mein likha hai, wohi sach mana jata hai.

Aham Nuqta
SoR = Official single source of truth jise humans aur AI dono query karte hain.`,
    analogy: "Think of the official constitution of a country. There are many blogs explaining the law, but the original signed constitution document is the System of Record.",
    example: "Connecting the Agent Factory SoR to Claude via its custom connector settings using the URL https://sor.panaversity.org/mcp, allowing Claude to cite exact book sections.",
    remember: "System of Record = the official, single source of truth served to humans and AI.",
    whyMatters: "Without an SoR, AI tools hallucinate and contradict each other.",
    diagramType: "system_of_record",
    miniQuestion: {
      question: "How do AI agents access the Agent Factory System of Record?",
      options: [
        "By scraping public search engine pages",
        "Through a standardized Model Context Protocol (MCP) server connection",
        "Via physical USB drives sent to the labs",
        "By reading static PDF files copy-pasted manually every time"
      ],
      correct: 1,
      explanation: "Correct! MCP provides a standardized bridge for agents to query the System of Record."
    }
  },
  {
    id: 3,
    title: "Zia Tutor AI",
    shortTitle: "Zia Tutor AI",
    explanation: `What is it?
Zia Tutor AI is a personalized learning agent built as a digital twin of Zia Khan. It guides the student's progress by combining four key records.

Why does it matter?
Generic AI chatbots have amnesia: they lack lesson sequence, memory of your past struggles, and structured teaching methods. Zia Tutor personalizes learning at scale.

How does it work?
It combines: 1) Knowledge Record (textbook SoR), 2) Identity Record (voice & methodology), 3) Learner Record (completed lessons & scores), and 4) Personal Profile (learner background).

Simple Example
When you log in, Zia Tutor greets you by name, recalls that you completed Lesson 2 yesterday, and asks a custom review question before starting Lesson 3.

Key Takeaway
Zia Tutor = Knowledge + Identity + Learner Record + Personal Profile.`,
    explanationUrdu: `Yeh Kya Hai?
Zia Tutor AI aik personalized learning agent hai jo Zia Khan ka digital twin hai aur students ko customized parhai karwata hai.

Yeh Kyun Zaroori Hai?
Aam AI bots ko parhane ka tareeqa nahi pata hota aur woh sequence bhool jate hain. Zia Tutor har student ka alag record maintain karta hai.

Yeh Kaise Kaam Karta Hai?
Yeh char records ko use karta hai: Knowledge (syllabus), Identity (style), Learner Record (progress), aur Personal Profile (background).

Sada Misaal
Zia Tutor aap ko SQL parhane se pehle check kare ga ke kya aap tables ke basics jante hain ya nahi, taake sahi sequence bani rahe.

Aham Nuqta
Zia Tutor AI learning ko structured, sequential, aur personalized banata hai.`,
    analogy: "A private home tutor who keeps a diary containing the textbook chapters, their behavioral rules, your past grades, and your personal study preferences.",
    example: "When you log back into Claude and run /zia-tutor-ai, Zia Tutor greets you by name, recalls that you completed Lesson 2, and prompts you to start Lesson 3.",
    remember: "Zia Tutor = Knowledge + Identity + Learner Record + Personal Profile.",
    whyMatters: "Without Zia Tutor, learners get overwhelmed by raw information without a logical path.",
    diagramType: "zia_tutor",
    miniQuestion: {
      question: "Which record helps Zia Tutor remember what a student has already mastered?",
      options: [
        "Identity Record",
        "Learner Record",
        "Knowledge Record",
        "External Internet Record"
      ],
      correct: 1,
      explanation: "Correct! The Learner Record saves student progress so the tutor knows what is completed."
    }
  },
  {
    id: 4,
    title: "Zia Developer AI",
    shortTitle: "Zia Developer AI",
    explanation: `What is it?
Zia Developer AI is an AI engineering assistant designed to automate the software development lifecycle from specifications to deployment.

Why does it matter?
Writing manual boilerplate code is slow and prone to human memory gaps. Zia Developer automates coding steps while keeping humans in control.

How does it work?
Running inside Claude Code or OpenCode, it reads the same System of Record. It executes the lifecycle: Requirement → Architecture → Specification → Build → Test → Install.

Simple Example
You write a brief prompt; Zia Developer builds a loop framework, automatically creates the validation tests, runs compile checks, and installs the files.

Key Takeaway
Zia Developer AI handles code execution, following the 10-80-10 rhythm.`,
    explanationUrdu: `Yeh Kya Hai?
Zia Developer AI aik AI software builder hai jo requirements se lekar actual deployment tak pure software lifecycle ko automate karta hai.

Yeh Kyun Zaroori Hai?
Manual boilerplate code likhna boht slow hota hai. Zia Developer coding tasks ko standard architecture templates ke zariye boht fast kar deta hai.

Yeh Kaise Kaam Karta Hai?
Yeh pure development flow ko follow karta hai: Requirement ➔ Architecture ➔ Specs ➔ Build ➔ Test ➔ Install.

Sada Misaal
Aap CLI command /vsor run karte hain, aur Zia Developer vector search aur database pipelines ke sath complete repository frame ready kar deta hai.

Aham Nuqta
Zia Developer AI system building ko speed up aur automate karta hai.`,
    analogy: "A construction manager who takes your blueprint, manages the automated bricklayers, runs stability checks, and hands you the keys for final inspection.",
    example: "Using the command /vsor in Claude Code to let Zia Developer scaffold a complete vertical System of Record using pre-tested repository templates.",
    remember: "Zia Tutor teaches humans. Zia Developer builds software.",
    whyMatters: "Automating coding lifecycles frees developers to focus on high-level architecture.",
    diagramType: "zia_developer",
    miniQuestion: {
      question: "What is the workflow rhythm enforced by Zia Developer AI?",
      options: [
        "10% Human specs ➔ 80% AI creation ➔ 10% Human approval",
        "80% Human specs ➔ 20% AI creation",
        "100% autonomous AI execution without humans",
        "50% Human coding ➔ 50% AI testing"
      ],
      correct: 0,
      explanation: "Correct! The 10-80-10 rule ensures speed via AI while keeping humans in control for quality."
    }
  },
  {
    id: 5,
    title: "The FDE AF Model",
    shortTitle: "The FDE AF Model",
    explanation: `What is it?
The Forward Deployed Engineer Agent Factory (FDE AF) Model is an architectural framework composed of five shared layers.

Why does it matter?
Rebuilding custom systems from scratch is slow and expensive. The FDE AF model provides a reusable platform architecture to deploy AI systems rapidly.

How does it work?
It scales through 5 layers: Layer 0 (foundation framework), Layer 1 (SoR kernel), Layer 2 (teaching/dev tools), Layer 3 (vertical ecosystems), and Layer 4 (custom client instances).

Simple Example
Panaversity maintains the core Layer 0-2 stack. You build a Layer 3 tax vertical, and customize the API keys (Layer 4) for a client.

Key Takeaway
FDE AF Model enables rapid scaling using the One Law: repeated customization moves down to core layers.`,
    explanationUrdu: `Yeh Kya Hai?
FDE AF Model aik architectural aur business framework hai jo 5 layers par mushtamil hai (Layer 0 se Layer 4).

Yeh Kyun Zaroori Hai?
Custom software har baar zero se banana expensive aur slow hota hai. Is model ke zariye base code reusable rehta hai.

Yeh Kaise Kaam Karta Hai?
Yeh 5 levels use karta hai. Iska 'One Law' kehta hai ke jab koi feature repeat ho to use core vertical stack (Layer 3) mein push kar dein.

Sada Misaal
Ayesha standard accounting bot (80% core) leti hai aur client ke SAP credentials (20%) connect kar ke product install kar deti hai.

Aham Nuqta
One Law: Bar bar repeat hone wale customization features ko shared core layer mein promote kar dena chahiye.`,
    analogy: "A car manufacturing system: design standard parts at the factory (80% core), then send local mechanics (FDEs) to assemble and add custom colors and accessories for each car buyer (20% customization).",
    example: "Ayesha builds a core vertical accounting builder (Layer 3), then works as an FDE to customize the integration keys (20%) for a Chicago logistics client (Layer 4).",
    remember: "FDE AF Model = 5 layers + One Law of Promotion.",
    whyMatters: "The FDE AF Model prevents software companies from becoming simple, non-scalable custom dev shops.",
    diagramType: "fde_af_model",
    miniQuestion: {
      question: "What does the One Law of the FDE AF Model state?",
      options: [
        "All code must be deleted after the project ends",
        "Any customization pattern that repeats across multiple clients must be promoted to the lower, shared layer",
        "Every AI worker must run offline on physical desktops",
        "Developers must charge hourly rates instead of outcome rates"
      ],
      correct: 1,
      explanation: "Correct! The One Law prevents a platform from collapsing into a custom dev shop by promoting repeated work."
    }
  },
  {
    id: 6,
    title: "Choosing Your Vertical",
    shortTitle: "Choose Vertical",
    explanation: `What is it?
Choosing Your Vertical is the discipline of selecting a highly specific profession combined with a local jurisdiction to build an AI domain startup.

Why does it matter?
Broad AI apps (like "Legal AI") are too competitive. Highly focused verticals face low competition and can deliver high-value outcomes.

How does it work?
We filter opportunities using the 8 tests, including: expert partner access, public laws governance, poorly documented English rules, and client willingness to pay.

Simple Example
Selecting "Karachi customs clearance rules" is a solid vertical because the rules are complex, public, and require local clearing expert validation.

Key Takeaway
No expert practitioner partner = Do NOT build a Vertical. Start with service work.`,
    explanationUrdu: `Yeh Kya Hai?
Vertical chunne ka matlab hai kisi specific profession aur local jurisdiction (shehar ya mulk) ko select kar ke us par deep AI tool banana.

Yeh Kyun Zaroori Hai?
Generic apps har jagah hain aur un mein margins kam hain. Focused verticals mein competition boht kam aur profitability zyada hoti hai.

Yeh Kaise Kaam Karta Hai?
FDEs 8 readiness tests apply karte hain, jaise expert partner ka hona aur rules ka public law ke mutabiq hona.

Sada Misaal
'Pakistan Tax compliance' aik strong vertical hai kyunke is ke rules complex hain aur unhein verify karne ke liye local expert partner ka access zaroori hai.

Aham Nuqta
Senior domain expert ke bina vertical design nahi karna chahiye.`,
    analogy: "Choosing a crop to plant: checking if you have water supply, suitable soil, local weather data, and a farmer who knows how to grow it.",
    example: "Selecting 'Import/Export customs compliance rules in Karachi' is a strong vertical because rules are complex, public, and require local clearing agent expertise.",
    remember: "No expert access = Do NOT build a Vertical. Start with Service work.",
    whyMatters: "Focused verticals solve real, complex pain points that generic AI cannot handle without rules.",
    diagramType: "vertical_selection",
    miniQuestion: {
      question: "Which of the following is a key requirement for choosing a vertical?",
      options: [
        "Access to a senior domain practitioner to govern the rules",
        "Selecting the broadest possible industry niche",
        "Ignoring local jurisdiction laws",
        "Avoiding any database connections"
      ],
      correct: 0,
      explanation: "Correct! Partnering with a senior practitioner is vital to ensure rules are accurate and compliant."
    }
  },
  {
    id: 7,
    title: "Designing the Vertical SoR",
    shortTitle: "Design SoR",
    explanation: `What is it?
Designing a Vertical SoR is structuring a profession's rules, terminologies, and workflows into an authoritative database.

Why does it matter?
Without a designed Vertical SoR, AI workers will generate generic, non-compliant outputs that violate industry regulations.

How does it work?
We structure knowledge into three components: 1) The Corpus (evidence), 2) The Map (rules and limits), and 3) The Reflexes (procedural checker skills). FDEs use the KEEP, REDESIGN, DELETE framework.

Simple Example
In auditing, we KEEP the legal double-entry standards, REDESIGN manual invoice entries with OCR bots, and DELETE obsolete paper route steps.

Key Takeaway
Design Vertical SoR as a single source of truth read by both humans (web app) and AI workers (MCP connection).`,
    explanationUrdu: `Yeh Kya Hai?
Vertical SoR design karne ka matlab hai kisi peshay (profession) ke rules, terminologies, aur workflows ko indexing database mein convert karna.

Yeh Kyun Zaroori Hai?
Is ke bina AI workers correct industry calculations ya rules follow nahi kar sakein ge aur ghalat recommendations dein ge.

Yeh Kaise Kaam Karta Hai?
Knowledge ko teen hisson mein split kiya jata hai: Corpus (data files), Map (rules), aur Reflexes (code checkers). Is flow mein KEEP, REDESIGN, aur DELETE apply hota hai.

Sada Misaal
Auditing rules ko JSON files mein structure karna aur automatically check-in balances match karne ke liye rules index code likhna.

Aham Nuqta
Legacy manual workflows ko index karte waqt fuzool steps ko delete aur regulatory steps ko keep kiya jata hai.`,
    analogy: "Updating a family recipe binder: keeping core ingredients (KEEP), using an electric mixer instead of hand mixing (REDESIGN), and removing the step to fetch water from a well (DELETE).",
    example: "Structuring Pakistan Tax Ordinance rules into JSON files (Corpus) and writing a validation checker script for tax filings (Reflex).",
    remember: "One database source of truth, two readers: Human (Web GUI) + AI (MCP connection).",
    whyMatters: "Regulatory compliance requires precise vertical rules that generic LLMs don't understand.",
    diagramType: "build_sor_pipeline",
    miniQuestion: {
      question: "Which framework is used to analyze legacy workflows when designing a Vertical SoR?",
      options: [
        "KEEP, REDESIGN, DELETE",
        "COPY, PASTE, RUN",
        "VIBE, CODE, DEPLOY",
        "INPUT, OUTPUT, REPEAT"
      ],
      correct: 0,
      explanation: "Correct! KEEP, REDESIGN, DELETE helps streamline and automate workflows for AI."
    }
  },
  {
    id: 8,
    title: "System of Context",
    shortTitle: "System of Context",
    explanation: `What is it?
The System of Context is a temporary collection of live data, history, and files required to execute a single task right now.

Why does it matter?
While the System of Record contains permanent rules, the System of Context supplies current task details. AI needs both to perform work correctly.

How does it work?
The executing agent pulls live client files (e.g. invoice PDFs, email chains, logs) to form the System of Context, while referencing the System of Record for permanent compliance standards.

Simple Example
When an AI accountant audits a transaction: the tax rules database is the SoR, while the invoice file and vendor contract form the System of Context.

Key Takeaway
System of Record = official permanent rules. System of Context = temporary current case details.`,
    explanationUrdu: `Yeh Kya Hai?
System of Context temporary aur live files/data ka collection hota hai jo kisi single task ko complete karne ke liye chahiye hota hai.

Yeh Kyun Zaroori Hai?
Permanent rules (SoR) ke sath live execution data (Context) zaroori hai, taake AI current client details ko process kar sake.

Yeh Kaise Kaam Karta Hai?
AI Agent job run karte waqt local PDF, transaction logs, aur user message ko gather karta hai aur SoR rules ko compare karta hai.

Sada Misaal
Court room mein 'Law Book' System of Record hai (hamesha same), jabke specific case file 'System of Context' hai (sirf is case ke liye).

Aham Nuqta
SoR rules supply karta hai aur System of Context current details supply karta hai.`,
    analogy: "A judge's court: The law book is the System of Record (permanent rules). The active case file with evidence and suspect history is the System of Context (temporary details).",
    example: "An AI Accountant queries the SoR for tax rates, and gathers the invoice PDF and purchase contract (System of Context) to check for a pricing match.",
    remember: "System of Record = What is officially true. System of Context = What this task needs right now.",
    whyMatters: "Without context, AI cannot execute specific client transactions accurately.",
    diagramType: "system_of_context",
    miniQuestion: {
      question: "What is the relationship between the System of Context and the System of Record?",
      options: [
        "They work together: SoR contains official rules, while System of Context supplies current task details",
        "The System of Context completely replaces the System of Record",
        "They are two different names for the same LLM model",
        "System of Context is only used for offline storage"
      ],
      correct: 0,
      explanation: "Correct! The SoR handles the permanent rules, and the Context handles the current case data."
    }
  }
];

export const flashcards = [
  {
    term: "Ecosystem Concept",
    definition: "A collection of connected subsystems (SoR, AI Tutor, AI Developer, Vertical Workers) interacting as a single unified machine.",
    example: "The Agent Factory platform where your progress syncs with both Zia Tutor and the database."
  },
  {
    term: "System of Record (SoR)",
    definition: "The single, official database repository containing the absolute, authoritative truth of data.",
    example: "A database storing student grades or IRS tax brackets which cannot be modified without official permission."
  },
  {
    term: "Model Context Protocol (MCP)",
    definition: "An open, standardized protocol allowing LLMs to securely communicate with file systems, APIs, and databases.",
    example: "A standard USB port for AI models to connect to external records and tool servers."
  },
  {
    term: "Zia Tutor AI",
    definition: "A structured AI teacher that personalizes learning using learner, profile, identity, and knowledge records.",
    example: "Our tutor tracking your progress card and asking custom quiz checks in Zia Khan's voice."
  },
  {
    term: "Zia Developer AI",
    definition: "An AI software development assistant managing the coding lifecycle from requirements to installation.",
    example: "A developer bot compiling and testing code modules automatically in Claude Code."
  },
  {
    term: "FDE AF Model",
    definition: "The Forward-Deployed Engineer Agent Factory architectural and business model consisting of 5 layers.",
    example: "Panaversity runs the foundation platform; graduates build client SoRs and vertical startups on top."
  },
  {
    term: "Forward-Deployed Engineer (FDE)",
    definition: "A human engineer who works directly with customers to install, customize, and configure AI software.",
    example: "An engineer integrating standard core modules with client's customized SAP backend."
  },
  {
    term: "Vertical",
    definition: "A specific profession combined with a specific country/jurisdiction.",
    example: "Import/Export customs compliance rules and corporate filing inside Pakistan."
  },
  {
    term: "Vertical SoR",
    definition: "A System of Record containing domain-specific rules, terminologies, and maps for a specific industry.",
    example: "A database containing all IRS tax regulations for tax accounting AI workers."
  },
  {
    term: "System of Context",
    definition: "A temporary collection of live data, history, and records required to execute a single task.",
    example: "The active case file containing current invoice PDF and purchase contract loaded to verify a payment."
  },
  {
    term: "10-80-10 Rule",
    definition: "Human-AI work structure where human sets specs (10%), AI builds (80%), and human reviews/approves (10%).",
    example: "You outline a code file layout, AI drafts all components, and you review/test it."
  },
  {
    term: "80/20 Customization Split",
    definition: "Product structure where 80% is the reusable generic core and 20% is client-custom rules.",
    example: "Sales bot core (80%) + custom pricing list of the client (20%) configured by an FDE."
  }
];

export const quizQuestions = [
  {
    question: "What is an Ecosystem in the context of the AI Agent Factory?",
    options: [
      "A set of plants and animals in the server room",
      "Multiple connected parts (Book, SoR, AI Tutor, AI Developer, Vertical Workers) working together as one system",
      "A specific framework for programming AI agents",
      "A standard database backup tool"
    ],
    correct: 1,
    explanation: "Ecosystem ka matlab hai jab multiple connected parts mil kar ek larger system banate hain. AI Agent Factory mein Books, SoRs, Tutors, and Workers sab connect hokar kaam karte hain."
  },
  {
    question: "What is a System of Record (SoR)?",
    options: [
      "A tape recorder that logs AI chats",
      "The official, authoritative source of truth for information",
      "A document containing a list of employees",
      "A generic database for temporary files"
    ],
    correct: 1,
    explanation: "System of Record (SoR) official jagah hoti hai jahan trusted aur authoritative data store kiya jata hai, taake AI aur humans dono isko use kar saken."
  },
  {
    question: "What is the Model Context Protocol (MCP) in simple terms?",
    options: [
      "A security policy for AI agent logins",
      "A standard way for AI systems to connect to external databases, files, and tools",
      "A type of code compilation algorithm",
      "An internet connection protocol like HTTP"
    ],
    correct: 1,
    explanation: "MCP ek standard bridge hai jo AI agents ko system of records ya tool sets ke saath connect karne mein madad deta hai."
  },
  {
    question: "Which record in Zia Tutor AI keeps track of what the student has already mastered?",
    options: [
      "Knowledge Record",
      "Learner Record",
      "Identity Record",
      "Personal Profile"
    ],
    correct: 1,
    explanation: "Learner Record track karta hai ke student ne kitne lessons parh liye hain aur kis level ka check pass kiya hai."
  },
  {
    question: "What is the primary difference between Zia Tutor AI and Zia Developer AI?",
    options: [
      "Zia Tutor helps humans learn, whereas Zia Developer helps build software and systems",
      "Zia Developer works offline while Zia Tutor works online",
      "Zia Developer only speaks Urdu",
      "Zia Developer is for managers while Zia Tutor is for engineers"
    ],
    correct: 0,
    explanation: "Zia Tutor ka focus human learning par hai (teaching), jabke Zia Developer ka focus actual product build aur execute karne par hai."
  },
  {
    question: "How many layers comprise the Forward Deployed Engineer Agent Factory (FDE AF) Model?",
    options: [
      "3 layers",
      "5 layers (Layer 0 to Layer 4)",
      "10 layers",
      "8 layers"
    ],
    correct: 1,
    explanation: "FDE AF Model mein total 5 layers hoti hain: Layer 0 (foundation) se lekar Layer 4 (customer instances) tak."
  },
  {
    question: "Under the One Law of the FDE AF Model, what happens to repeated customization work?",
    options: [
      "It is deleted after the project is complete",
      "It must be promoted to the lower, shared vertical layer so it can be reused",
      "It is patented and kept hidden from other clients",
      "It is sent to public AI models to train their weights"
    ],
    correct: 1,
    explanation: "One Law kehta hai ke jo customization repeat ho rahi ho, use core platform layer mein promote kiya jata hai taake development cost kam ho sake."
  },
  {
    question: "Why should you choose a specific Vertical (e.g. Tax practice in Pakistan) instead of offering general AI consulting?",
    options: [
      "General AI consulting is illegal",
      "Specific verticals have less competition, clear public laws, and client pain points that generic AI cannot solve without customization",
      "All AI models are blocked in general consulting",
      "Specific verticals do not require databases"
    ],
    correct: 1,
    explanation: "Specific vertical domain chun'ne se competition kam hota hai aur client ki exact pain point standard rules database (SoR) se solve hoti hai."
  },
  {
    question: "When designing a Vertical SoR, which framework is used to evaluate legacy manual steps?",
    options: [
      "VIBE, CODE, DEPLOY",
      "KEEP, REDESIGN, DELETE",
      "COPY, PASTE, RUN",
      "INPUT, OUTPUT, REPEAT"
    ],
    correct: 1,
    explanation: "KEEP (sahi files), REDESIGN (improve steps), aur DELETE (fuzool steps) framework use kar ke legacy workflows ko evaluate kiya jata hai."
  },
  {
    question: "What does the 'System of Context' contain?",
    options: [
      "The official, permanent legal tax rules and rules-books",
      "A temporary collection of live data, history, and files required to execute a specific task right now",
      "The history of the developer's git commits",
      "The training weights of the large language model"
    ],
    correct: 1,
    explanation: "System of Context temporary task files ko hold karta hai jo current execution ke liye chahiye, jab ke permanent standards SoR mein rehte hain."
  }
];

export const glossary = [
  {
    term: "Canonical Knowledge",
    definition: "The official, approved, and authoritative version of course content or reference material.",
    example: "The standard textbook declared by the system as the final authority on a subject.",
    related: ["System of Record", "Zia Tutor AI"]
  },
  {
    term: "Ecosystem",
    definition: "A collection of connected subsystems (books, database records, AI tutors, AI developers, vertical workers) interacting as a single unified machine.",
    example: "Our complete learning platform where your progress syncs with both Zia Tutor and the database.",
    related: ["Platform as a Plugin", "AI Workers"]
  },
  {
    term: "Model Context Protocol (MCP)",
    definition: "An open, standardized protocol allowing LLMs to securely communicate with file systems, APIs, and databases.",
    example: "Standardizing how Zia Developer reads your local file system, similar to a USB port.",
    related: ["System of Record", "AI Workers"]
  },
  {
    term: "System of Record (SoR)",
    definition: "The single, official database repository containing the absolute truth of data.",
    example: "A database storing student grades which cannot be modified without official permission.",
    related: ["Canonical Knowledge", "Vertical SoR"]
  },
  {
    term: "Digital FTE (Full-Time Equivalent)",
    definition: "A group of AI workers configured to perform the tasks of a full human job role within a business.",
    example: "An AI system doing all parts of customer lead scoring, CRM tracking, and emailing.",
    related: ["AI Workers", "Vertical AI"]
  },
  {
    term: "Forward-Deployed Engineer (FDE)",
    definition: "A human engineer who works on-site or directly with customers to install, customize, and configure AI software.",
    example: "An engineer integrating standard core modules with client's customized SAP backend.",
    related: ["80/20 Rule", "10-80-10 Rule"]
  },
  {
    term: "80/20 Rule",
    definition: "The architecture standard where 80% is general reusable core code and 20% is client-custom rules.",
    example: "A chatbot's conversation model is 80% standard, but customized with 20% customer catalog files.",
    related: ["FDE", "Platform as a Plugin"]
  },
  {
    term: "10-80-10 Rule",
    definition: "Work structure where human sets specs (10%), AI builds (80%), and human reviews/approves (10%).",
    example: "You outline a code file layout, AI drafts all components, and you review/test it.",
    related: ["Zia Developer AI", "AI Workers"]
  },
  {
    term: "Zia Tutor AI",
    definition: "A structured AI teacher that personalizes learning using learner, profile, identity, and knowledge records.",
    example: "Our tutor tracking your progress card and asking custom quiz checks.",
    related: ["Zia Developer AI", "Canonical Knowledge"]
  },
  {
    term: "Zia Developer AI",
    definition: "An AI software development assistant managing the coding lifecycle from requirements to installation.",
    example: "A developer bot compiling and testing code modules automatically.",
    related: ["Zia Tutor AI", "10-80-10 Rule"]
  },
  {
    term: "Deployment Gap",
    definition: "The distance between a raw AI capability/API and a fully integrated, working business outcome in a workflow.",
    example: "Having an OpenAI key vs. having an automated invoicing agent that checks rules and logs outputs in ERP.",
    related: ["FDE", "System of Context"]
  },
  {
    term: "Vendor-Neutral",
    definition: "An architectural approach that is not locked into one AI API vendor (like OpenAI) and supports switching models easily.",
    example: "Building system connectors that work with Gemini, Claude, or local Llama via MCP.",
    related: ["MCP", "80/20 Rule"]
  },
  {
    term: "Slice",
    definition: "One thin, complete professional outcome handled from end-to-end instead of building a giant unfinished product.",
    example: "Building an 'Invoice Verification Bot' instead of writing a 'Complete Accounting Platform' at once.",
    related: ["Service Ladder", "Contract of Success"]
  },
  {
    term: "Service Ladder",
    definition: "Earning workflow starting with service tasks (SoR setups, worker scripting) and scaling to retainer models.",
    example: "Building standard AI worker pipelines for client data workflows to secure immediate payment.",
    related: ["Vertical Ladder", "Retainers"]
  },
  {
    term: "System of Context",
    definition: "A dynamic layout of information, data records, and history required to complete a single task (unlike the permanent SoR).",
    example: "Gathering current invoice, contract, customer transaction history, and buyer credit logs to approve a payment.",
    related: ["System of Record", "AI Workers"]
  }
];

// ==========================================
// COURSE 2: PAID ERA FDE ROADMAP
// ==========================================

export const course2Lessons: Lesson[] = [
  {
    id: 1,
    title: "Station 01 — The New Opportunity",
    shortTitle: "01 — The Opportunity",
    explanation: `What is it?
Agentic AI represents a shift from simple chat prompting to autonomous agents that execute complete multi-step tasks. This shift creates a new engineering category: the Forward-Deployed Engineer.

Why does it matter?
Traditional coding is getting commoditized, making basic development services cheaper and crowded. The real opportunity is deploying autonomous agents that integrate into actual business workflows to save human time.

Simple Example
Instead of writing an automated script that a developer must trigger, you build an agent that sits in Slack, monitors incoming emails, and processes client invoices autonomously.

Key Takeaway
The opportunity is no longer in just writing code, but in orchestrating autonomous agentic workflows that solve real business bottlenecks.`,
    explanationUrdu: `Yeh Kya Hai?
Agentic AI aam chatbot prompts se barh kar autonomous agents ki tarah kaam karne ka name hai jo multi-step tasks khud complete karte hain. Is se FDE ki ek new career opportunity banti hai.

Yeh Kyun Zaroori Hai?
Simple coding ab standard hoti ja rahi hai aur generic programmers ki value kam ho rahi hai. Real profit is baat mein hai ke AI agents ko real business workflows ke sath connect kiya jaye.

Sada Misaal
Aik simple script likhne ke bajaye jo manually run ho, aap aik aisa agent banate hain jo emails monitor kare aur invoices ko autonomously process kare.

Aham Nuqta
Asal opportunity code likhne mein nahi, balkay client ke problems solve karne wale autonomous agents set up karne mein hai.`,
    analogy: "Think of the electricity grid. Finding coal (AI raw API) is cheap, but laying the power transmission wires directly to houses (deployment) is where the value lies.",
    example: "Building an automated client lead processor that automatically qualifies leads and updates the CRM, instead of just using ChatGPT to draft emails.",
    remember: "Value lies in the automation of workflows, not raw LLM APIs.",
    whyMatters: "Commoditization of coding means developers must move up the value chain.",
    diagramType: "two_problems",
    miniQuestion: {
      question: "Why is Agentic AI a major new opportunity for engineers?",
      options: [
        "Because it makes code editing completely illegal",
        "Because it allows engineers to focus on workflow deployment and outcomes rather than raw code writing",
        "Because it reduces cloud database speed",
        "Because it works without internet connections"
      ],
      correct: 1,
      explanation: "Exactly! Deploying agentic workflows directly resolves the deployment bottlenecks businesses face today."
    }
  },
  {
    id: 2,
    title: "Station 02 — The Deployment Gap",
    shortTitle: "02 — Deployment Gap",
    explanation: `What is it?
The Deployment Gap is the distance between raw AI capabilities (like API keys or generic chatbots) and actual business value.

Why does it matter?
Most corporate AI pilots fail because raw LLMs cannot interact with database records, local laws, approval systems, and existing corporate software out of the box.

Simple Example
Having a raw Claude API key is a capability. Having an agent that reads vendor invoice PDFs, checks them against purchase orders in SAP, and updates the ledger is a business outcome.

Key Takeaway
To deliver business outcomes, raw AI models must be bridged with company data, workflows, and regulatory compliance rules.`,
    explanationUrdu: `Yeh Kya Hai?
Deployment Gap raw AI capabilities (APIs) aur actual business value ke darmiyan ka faasla hai.

Yeh Kyun Zaroori Hai?
Boht se AI pilots isliye fail ho jate hain kyunke AI model direct databases, company rules, aur security checks ke sath connect nahi hota.

Yeh Kaise Kaam Karta Hai?
FDE is gap ko bridge karta hai: AI ko custom context, tool access, databases, aur human approval gates ke sath combine kar ke actual result deliver karta hai.

Sada Misaal
Aap ke paas GPT key hai (capability), lekin client ko aisi invoice check machine chahiye jo purchase orders read kare aur ledger write kare (outcome).

Aham Nuqta
FDE ka primary kaam raw AI power ko direct business value se link karna hai.`,
    analogy: "A high-speed car engine sitting on a wooden stand. The engine is powerful (AI API), but without wheels, steering, and a driver (workflows & data), it goes nowhere.",
    example: "Connecting raw OpenAI APIs with local company SQL tables via MCP server setups to audit files automatically.",
    remember: "API + Context + Rules = Outcome.",
    whyMatters: "Bridging the gap is how you get paid in the agentic era.",
    diagramType: "deployment_gap",
    miniQuestion: {
      question: "What does the Deployment Gap represent?",
      options: [
        "The download time of large language models",
        "The gap between raw AI capability and actual integrated business outcomes",
        "The cost differences between OpenAI and Claude",
        "The physical distance between server rooms"
      ],
      correct: 1,
      explanation: "Correct! Bridging this gap is the primary mission of a Forward-Deployed Engineer."
    }
  },
  {
    id: 3,
    title: "Station 03 — The Forward Deployed Engineer",
    shortTitle: "03 — What is an FDE",
    explanation: `What is it?
A Forward Deployed Engineer (FDE) is a highly technical professional who works directly with clients to customize, integrate, and deploy AI core solutions into their live operations.

Why does it matter?
Enterprises will not trust raw AI agents with their live files and databases. A human engineer is required to handle context setup, security permissions, and workflow checks.

Simple Example
Instead of selling software online, you work closely with a logistics company's IT team to safely connect an AI dispatcher bot to their fleet database.

Key Takeaway
FDE is the human bridge that safely connects standardized AI cores to unique customer environments.`,
    explanationUrdu: `Yeh Kya Hai?
Forward Deployed Engineer (FDE) ek technical expert hota hai jo client ke sath close mil kar standard AI platforms ko customized settings ke mutabiq deploy karta hai.

Yeh Kyun Zaroori Hai?
Enterprises direct automated AI ko apne secret records ka access nahi dete. FDE setup aur security check manage karne ke liye zaroori hai.

Sada Misaal
Bank managers ke sath bath kar, secure local network par AI ledger validation model link karna taake accounting bots live ho sakein.

Aham Nuqta
FDE technical capability aur business context ke overlap par kaam karta hai.`,
    analogy: "A high-end kitchen installer. The factory builds standard cabinets (80% core), but the installer comes to your kitchen, measures, and fits them perfectly (20% customization).",
    example: "Configuring a local MCP server that allows Claude Code to safely query a client's private inventory database.",
    remember: "FDE = Technical builder + Client-facing integrator.",
    whyMatters: "Without FDEs, enterprise AI systems cannot be safely installed.",
    diagramType: "fde_role",
    miniQuestion: {
      question: "What is the primary function of a Forward Deployed Engineer (FDE)?",
      options: [
        "To write marketing articles about AI trends",
        "To work directly with client systems and customize the standard AI core for their workflow",
        "To run Facebook ads for database software",
        "To configure physical hardware inside servers"
      ],
      correct: 1,
      explanation: "Correct! FDEs specialize in connecting core systems to the client's actual live environments."
    }
  },
  {
    id: 4,
    title: "Station 04 — Vendor-Neutral Vertical FDE",
    shortTitle: "04 — Vendor-Neutral",
    explanation: `What is it?
A Vendor-Neutral Vertical FDE is an engineer specialized in a single industry vertical whose designs are not locked into any single AI model vendor.

Why does it matter?
Binding a business to one provider (like OpenAI or Anthropic) creates extreme vendor lock-in. If pricing increases or models degrade, the business is stuck. Vendor-neutral designs keep client options open.

Simple Example
Instead of writing hardcoded OpenAI API bindings, you use Model Context Protocol (MCP) and model gateways. If you need to switch to Claude, you change one config line.

Key Takeaway
Open standards (like MCP) protect clients from vendor lock-in and make systems future-proof.`,
    explanationUrdu: `Yeh Kya Hai?
Vendor-Neutral FDE ka matlab hai aisi architecture design karna jo kisi aik AI provider (jaise OpenAI ya Google) par locked na ho.

Yeh Kyun Zaroori Hai?
Proprietary systems lock-in create karte hain. Agar pricing change ho ya servers down hon, to business hang ho jata hai.

Yeh Kaise Kaam Karta Hai?
Hum standard protocols (jaise MCP) aur abstraction layers use karte hain taake background models easily switch ho sakein.

Sada Misaal
Aap aisi tool configuration design karte hain jise client bina core code change kiye OpenAI se Claude par shift kar sake.

Aham Nuqta
Open standards ko use karna client ko vendor dependency se bachata hai.`,
    analogy: "A multi-plug travel adapter. It doesn't matter if the socket is British, American, or European; your adapter plugs in and powers your device.",
    example: "Structuring database calls through standardized MCP endpoints that work with Claude, Gemini, or Llama models.",
    remember: "Vendor lock-in is a business risk. Neutrality is an asset.",
    whyMatters: "Clients value independence and portability of their AI systems.",
    diagramType: "vendor_neutral",
    miniQuestion: {
      question: "Why should an FDE practice vendor neutrality?",
      options: [
        "To avoid paying for model subscriptions",
        "To protect clients from vendor lock-in and enable easy model switching",
        "To ensure code runs only on local hardware",
        "To restrict the client from using databases"
      ],
      correct: 1,
      explanation: "Correct! Neutrality protects clients from cost hikes and single-point-of-failure API dependency."
    }
  },
  {
    id: 5,
    title: "Station 05 — What an FDE Owns",
    shortTitle: "05 — What FDE Owns",
    explanation: `What is it?
In the agentic era, an FDE does not sell simple hours. An FDE owns and carries their own ownable intellectual assets: the "suitcase" containing governed vertical knowledge.

Why does it matter?
If you only sell hourly services, you have no leverage. If you own the System of Record and the specialized templates, you scale your earnings through licensing and repeatable setups.

Simple Example
You build and own a highly optimized, pre-tested Pakistan Customs Import Duty SoR kernel. When hiring clients, you carry this suitcase in, customize it, and license it.

Key Takeaway
Owning the governed domain knowledge (SoR) and templates gives you the ultimate leverage.`,
    explanationUrdu: `Yeh Kya Hai?
FDE hourly rates ke liye kaam nahi karta. Woh proprietary assets aur templates (apna "suitcase") khud own karta hai.

Yeh Kyun Zaroori Hai?
Simple hourly work mein scale nahi hota. Jab aap core rules database aur templates own karte hain, to aap multiple clients ko license kar sakte hain.

Sada Misaal
Aap ne tax verification checklist ka solid template framework banaya aur own kiya. Aap isay different companies ko setup kar ke retainers charge karte hain.

Aham Nuqta
Apne templates aur System of Record assets khud own karein taake repeat values generate ho sakein.`,
    analogy: "A master mechanic who travels with their own premium toolbox containing custom-made tools that nobody else owns.",
    example: "Developing a proprietary schema template for tax compliance rules that you deploy for multiple clients.",
    remember: "Own the rules database and the workflow template to retain market leverage.",
    whyMatters: "Selling raw hours is a race to the bottom; selling outcome assets is scalable.",
    diagramType: "what_you_own",
    miniQuestion: {
      question: "What is the primary asset a Vertical FDE should own and carry?",
      options: [
        "A physical server rack",
        "The 'suitcase' of governed domain knowledge, templates, and System of Record schemas",
        "A general marketing presentation deck",
        "An exclusive contract with OpenAI"
      ],
      correct: 1,
      explanation: "Correct! Owning your schemas and domain rules database is your source of leverage."
    }
  },
  {
    id: 6,
    title: "Station 06 — What is a Vertical",
    shortTitle: "06 — What is a Vertical",
    explanation: `What is it?
A Vertical is a highly focused market niche consisting of a specific profession combined with a specific country or local jurisdiction.

Why does it matter?
Broad fields like "Accounting AI" are too massive, complex, and highly competitive. "Sales tax accounting compliance in Pakistan" is a viable vertical because the rules are clear and bounded.

Simple Example
Building a bot for general tax filing is too broad. Building a bot for real estate transfer registry filings in Karachi is a vertical.

Key Takeaway
Narrow your focus to a specific profession and jurisdiction to capture low competition and clear rules.`,
    explanationUrdu: `Yeh Kya Hai?
Vertical ka matlab hai aik specific domain/profession ke sath kisi specific country ya local jurisdiction ka combination.

Yeh Kyun Zaroori Hai?
'Accounting' ya 'Law' boht bare subjects hain. 'Sales tax registry in Lahore' aik clear, specific aur bounded vertical hai.

Sada Misaal
General invoice generation ke bajaye, custom clearance agents ke excise duty forms handle karna aik clear vertical hai.

Aham Nuqta
Domain ko narrow down kar ke local jurisdiction rules ke sath map karein.`,
    analogy: "A general physician vs. a pediatric cardiologist specialized in a single rare valve condition. The specialist surgeon has zero competition and high fees.",
    example: "Selecting 'Punjab Revenue Authority tax compliance rules' as your build target.",
    remember: "Vertical = Specific Profession + Specific Jurisdiction.",
    whyMatters: "Narrow verticals have well-defined bounds that are easy to model into a System of Record.",
    diagramType: "niche_tax_customs",
    miniQuestion: {
      question: "Which of the following is the best example of a specialized Vertical?",
      options: [
        "General artificial intelligence consulting",
        "Corporate legal filing compliance rules under Pakistan SECP guidelines",
        "Writing code for mobile applications",
        "A generic chatbot website"
      ],
      correct: 1,
      explanation: "Correct! The SECP corporate filing vertical combines a specific profession (corporate law) with a local jurisdiction (Pakistan)."
    }
  },
  {
    id: 7,
    title: "Station 07 — Choosing Your Vertical",
    shortTitle: "07 — Selection Rules",
    explanation: `What is it?
Choosing Your Vertical is the selection discipline used to validate a domain startup idea before writing any code.

Why does it matter?
If you select a vertical with no expert access or where the rules are hidden company secrets, your AI will fail because you cannot build a reliable System of Record.

How does it work?
We use the selection rules: 1) Verify access to a senior practitioner partner. 2) Ensure rules are public laws. 3) Select poorly documented English niches. 4) Validate client willingness to pay.

Simple Example
You partner with a senior customs officer in Karachi. The customs rules are public but poorly documented in English. This is a validated vertical.

Key Takeaway
No domain expert partner = No vertical. Start with basic service tasks.`,
    explanationUrdu: `Yeh Kya Hai?
Vertical selection ka matlab hai product code likhne se pehle specific industry aur rules ko select aur test karna.

Yeh Kyun Zaroori Hai?
Agar aap aisi domain select karein ge jahan rules copy-protected ya secret hon, to aap accurate System of Record database nahi bana sakein ge.

Sada Misaal
Aap local tax expert ke sath mil kar corporate tax filing rules select karte hain jahan public tax directories accessible hain.

Aham Nuqta
Pehle expert partner aur public rules verify karein, phir building shuru karein.`,
    analogy: "A prospector scouting for gold: checking if there is a land registry, public survey records, and a local guide before buying excavation equipment.",
    example: "Checking if a vertical passes the 8 tests, particularly verifying if a local senior expert has agreed to review the rule schemas.",
    remember: "Expert access is the prerequisite to accuracy.",
    whyMatters: "Validating your vertical prevents wasted development cycles on unbuildable niches.",
    diagramType: "vertical_selection",
    miniQuestion: {
      question: "What is the most critical validation check when choosing a vertical?",
      options: [
        "Ensuring the project has zero human involvement",
        "Ensuring access to a senior domain practitioner to validate rules",
        "Selecting the absolute largest industry possible",
        "Running the app only on local databases"
      ],
      correct: 1,
      explanation: "Correct! Without expert validation, your rules database will likely contain bugs or legal compliance gaps."
    }
  },
  {
    id: 8,
    title: "Station 08 — The FDE Workflow: SoR and SoC",
    shortTitle: "08 — SoR vs SoC",
    explanation: `What is it?
In the FDE workflow, we divide data into the permanent System of Record (SoR) and the temporary System of Context (SoC).

Why does it matter?
AI agents fail when they mix permanent rules with temporary task files. Keeping them separate ensures high reliability and compliance.

How does it work?
The System of Record holds the official tax codes or company rules database. The System of Context holds the temporary client invoice file. The worker agent reads both to complete the check.

Simple Example
To verify an shipping excise duty: the excise duty rates (SoR) are static, while the shipping manifest PDF (SoC) is temporary.

Key Takeaway
FDE Workflow = Permanent SoR rules + Temporary SoC details = Verified Outcome.`,
    explanationUrdu: `Yeh Kya Hai?
FDE workflow mein hum permanent rules (System of Record) aur temporary files (System of Context) ko alag rakhte hain.

Yeh Kyun Zaroori Hai?
Agar AI dono ko mix kare ga to hallucination ho gi. Dono layers ko split rakhne se checks accurate rehte hain.

Sada Misaal
Aap ke tax rate tables SoR mein save hain, aur check hone wali current client bank statement System of Context mein aati hai.

Aham Nuqta
SoR = Permanent rules database. SoC = Temporary task details.`,
    analogy: "A laboratory test: The standard medical reference range is the SoR (fixed guidelines). The patient's blood sample report is the System of Context (temporary info).",
    example: "The AI agent queries the SoR for regulatory guidelines, and matches them with the uploaded client PDF invoice (System of Context).",
    remember: "Rules go to SoR; task files go to Context.",
    whyMatters: "Separation of concerns keeps the prompt sizes small and execution costs low.",
    diagramType: "system_of_context",
    miniQuestion: {
      question: "In the FDE workflow, how do System of Record and System of Context interact?",
      options: [
        "The System of Context replaces the System of Record",
        "The SoR provides permanent rules, while the SoC supplies current task details to evaluate",
        "They are two separate database backends that never run at the same time",
        "They are only used in offline text files"
      ],
      correct: 1,
      explanation: "Correct! The SoR handles the permanent standard rules, while the SoC contains the temporary live details for the specific run."
    }
  },
  {
    id: 9,
    title: "Station 09 — Three Ways to Earn",
    shortTitle: "09 — Ways to Earn",
    explanation: `What is it?
An FDE can monetize their skills through three distinct business paths: 1) Job, 2) Freelance / Retainers, and 3) Startup.

Why does it matter?
Different developers prefer different lifestyles. Understanding these paths helps you match your technical execution with your income goals.

How does it work?
- Job: Work as an in-house FDE customizing the employer's core templates.
- Freelance: Set up custom client connections and charge monthly retainers.
- Startup: Build, own, and license a Vertical SoR and AI Worker ecosystem.

Simple Example
You start with immediate freelance service tasks (SoR setups) to fund and validate your vertical accounting startup templates.

Key Takeaway
Leverage your templates across all three routes to maximize value.`,
    explanationUrdu: `Yeh Kya Hai?
FDE ke paas earn karne ke teen primary options hain: Job, Freelancing (Monthly Retainer), aur SaaS Startup.

Yeh Kyun Zaroori Hai?
Aap ko apni preference aur setup ke mutabiq sahi route select karna chahiye jo aap ke targets ko match kare.

Sada Misaal
Aap local companies ke liye database MCP setup karte hain (Freelance), aur bad mein isi custom stack ko license kar ke Startup bana dete hain.

Aham Nuqta
Teeno options mein base FDE components and templates standard rehte hain.`,
    analogy: "A baker: working in a hotel kitchen (Job), catering local weekend parties (Freelance), or opening a specialized automated bakery franchise (Startup).",
    example: "Using freelance retainers to secure immediate cash flow while coding your Layer 3 SaaS startup.",
    remember: "Job = Stability. Freelance = Cashflow. Startup = Scale.",
    whyMatters: "Aligning your business model with your technical execution ensures success.",
    diagramType: "go_to_work_doors",
    miniQuestion: {
      question: "Which monetization path offers recurring, scalable product licensing?",
      options: [
        "Hourly job contracts",
        "A SaaS Vertical Startup licensing the SoR and AI Worker templates",
        "A one-off freelance prompt-writing task",
        "Offline document printing services"
      ],
      correct: 1,
      explanation: "Correct! Licensing proprietary vertical templates as a startup scales far better than renting hourly services."
    }
  },
  {
    id: 10,
    title: "Station 10 — Service Ladder",
    shortTitle: "10 — Service Ladder",
    explanation: `What is it?
The Service Ladder is an FDE earning progression where you start with low-risk setup services and scale to monthly retainer agreements.

Why does it matter?
Clients will not pay for complex vertical startups immediately. You must build trust first through immediate, simple tasks that deliver fast value.

How does it work?
- Step 1: Clean and index client PDFs into a database.
- Step 2: Map legacy workflow rules.
- Step 3: Connect standard models (MCP setup).
- Step 4: Secure a monthly retainer to monitor and maintain the system.

Simple Example
You charge a client $500 to clean and index their PDF policy sheets into Postgres. Once done, you offer to maintain it for a monthly retainer.

Key Takeaway
Use simple service steps to build trust and fund your research.`,
    explanationUrdu: `Yeh Kya Hai?
Service Ladder aik step-by-step career growth tareeqa hai jahan aap shuru mein simple tasks se start kar ke monthly retainers tak jate hain.

Yeh Kyun Zaroori Hai?
Naye clients aap par heavy projects ke liye foran trust nahi karte. Pehle clean aur index tasks kar ke unka trust jeetna hota hai.

Sada Misaal
Pehle client ke rough documents and rules list ko set up karein (Step 1), phir MCP link configure karein (Step 2), aur phir continuous maintenance retainer charge karein.

Aham Nuqta
Trust aur cashflow build karne ke liye pehle lower-risk services provide karein.`,
    analogy: "A mechanic cleaning your spark plugs for cheap first, proving their honesty, and eventually getting the contract to manage your entire logistics fleet.",
    example: "Charging a small fee to clean a client's folder of disorganized regulatory PDFs and indexing them.",
    remember: "Proving immediate thin slice value is the best sales technique.",
    whyMatters: "The Service Ladder provides immediate cash flow for FDEs starting out.",
    diagramType: "service_ladder_steps",
    miniQuestion: {
      question: "What is the primary benefit of starting on the Service Ladder?",
      options: [
        "It removes the need to use coding agents",
        "It secures immediate cash flow and builds client trust through low-risk setups",
        "It guarantees that AI models will never change",
        "It is only applicable to offline physical businesses"
      ],
      correct: 1,
      explanation: "Correct! Starting with simpler tasks validates you to the client and funds your domain research."
    }
  },
  {
    id: 11,
    title: "Station 11 — Vertical Ladder",
    shortTitle: "11 — Vertical Ladder",
    explanation: `What is it?
The Vertical Ladder is the startup pathway where you secure an expert partner, map public laws into a Vertical SoR, build custom vertical workers, and scale as a SaaS business.

Why does it matter?
Scaling services is limited by human time. A vertical startup licenses software, allowing you to scale to thousands of clients without hiring more engineers.

How does it work?
1) Secure Domain Expert. 2) Map Jurisdiction Laws. 3) Build Vertical Workers. 4) Package as SaaS.

Simple Example
You partner with a Karachi exporter. You build a specialized import/export customs clearance bot, package it as a subscription site, and sell it to 50 clearing agencies.

Key Takeaway
Convert services into product assets (Vertical SoR) to achieve scalability.`,
    explanationUrdu: `Yeh Kya Hai?
Vertical Ladder startup aur SaaS product banane ka path hai jahan FDE domain experts ke sath mil kar standard industry rules database aur workers banata hai.

Yeh Kyun Zaroori Hai?
Services mein scale limited hota hai. SaaS product bana kar licensing karne se scale fast aur cost low ho jati hai.

Sada Misaal
Excise and custom clearing agents ke liye complete excise tax AI system design karna aur isay licensing base subscription banana.

Aham Nuqta
Services ko standard platform components mein convert karein taake product scale mil sake.`,
    analogy: "Instead of driving a taxi yourself (Service), you manufacture standard taximeters and license them to all taxi fleets in the city (Vertical SaaS).",
    example: "Packaging your mapped tax database files and verification code into a subscription portal for tax advisors.",
    remember: "Productize your services by building a reusable Vertical SoR.",
    whyMatters: "Building a SaaS vertical creates equity and scalable, hands-off income.",
    diagramType: "vertical_ladder_steps",
    miniQuestion: {
      question: "What is the final stage of the Vertical Ladder?",
      options: [
        "Doing manual data cleaning forever",
        "Packaging the vertical rules database and workers as a scalable SaaS product",
        "Working hourly job shifts at a local company",
        "Shutting down the database server"
      ],
      correct: 1,
      explanation: "Correct! Scaling as a SaaS product is the ultimate goal of the Vertical Ladder."
    }
  },
  {
    id: 12,
    title: "Station 12 — The 80/20 Customization Split",
    shortTitle: "12 — 80/20 Customization",
    explanation: `What is it?
The 80/20 rule states that 80% of an AI worker is a reusable, common core (the industry vertical rules), and only 20% is client-specific customization.

Why does it matter?
Fully custom software is too expensive to maintain. Standardized SaaS is hard to customize. The 80/20 split gives clients the best of both: hand-built customization that inherits core platform updates.

How does it work?
The FDE maintains the core System of Record (80%). When a client buys, the FDE configures the remaining 20% (private API keys, database URLs, custom validation rules).

Simple Example
A sales bot core is 80% standard. The shoe store pricing and catalog (20%) is configured by the FDE.

Key Takeaway
Maintain a standard core to scale, and configure the custom 20% to capture high-margin implementation fees.`,
    explanationUrdu: `Yeh Kya Hai?
80/20 Customization ka matlab hai AI Worker ka 80% core standard aur reusable hota hai, jabke 20% specific client ke liye customize kiya jata hai.

Yeh Kyun Zaroori Hai?
Is split ke bina aap ko har client ke liye zero se program likhna pare ga. Core 80% same rakhne se development boht fast ho jati hai.

Sada Misaal
Accounting bot ka core tax engine 80% same hai. FDE har client ki specific database credentials (20%) connect kar deta hai.

Aham Nuqta
Core engine common rakhein aur customization 20% ko implementation fee ke liye use karein.`,
    analogy: "A prefabricated house. The factory constructs 80% of the walls and structure. The local workers install the house and let you pick the paint color and kitchen tiles (20%).",
    example: "Adjusting the customization ratio slider to see the balance between shared core rules and custom database endpoints.",
    remember: "80% shared core + 20% client customization = High speed, high compliance.",
    whyMatters: "This split keeps implementation fast while delivering custom, tailored value to clients.",
    diagramType: "eighty_twenty",
    miniQuestion: {
      question: "Under the 80/20 customization rule, what does the 20% represent?",
      options: [
        "The error tolerance of the model",
        "The customer-specific configuration, credentials, and custom constraints",
        "The time spent training LLM weights",
        "The percentage of code written without specifications"
      ],
      correct: 1,
      explanation: "Correct! The 20% represents the client's custom database keys, permissions, and specific local rules."
    }
  },
  {
    id: 13,
    title: "Station 13 — Takeaways & Common Mistakes",
    shortTitle: "13 — Common Mistakes",
    explanation: `What is it?
This station summarizes the critical practical guidelines and common implementation traps FDEs face in the market.

Why does it matter?
Most beginner FDEs fail because they build massive systems without expert validation, lock themselves into single vendors, or sell hourly instead of outcome-based services.

How does it work?
Follow the rules: 1) Build First, Sell Second (demo working slice). 2) Secure expert access before coding. 3) Enforce the 10-80-10 collaboration rules. 4) Use outcome-based retainer contracts.

Simple Example
Instead of sending a PDF pitch, you show a prospect client a live, working 5-minute demo of their own messy data parsed by your local MCP server.

Key Takeaway
Focus on validated outcome slices rather than selling abstract promises.`,
    explanationUrdu: `Yeh Kya Hai?
FDEs ke liye aham practical guidelines aur common mistakes ka summary.

Yeh Kyun Zaroori Hai?
Aksar developers isliye fail ho jate hain kyunke woh direct code likhte hain bina expert validation ke, ya phir hourly rate par negotiate karte hain jo scalable nahi.

Sada Misaal
Bina rules verification ke product build karne ke bajaye, pehle domain expert partner dhundna aur outcomes check karna.

Aham Nuqta
Hamesha working demo (thin slice) pehle build karein, aur hourly ke bajaye outcome-based price set karein.`,
    analogy: "A pilot checking the pre-flight checklist. Missing one verification step (like expert access) is the difference between a smooth flight and a crash.",
    example: "Evaluating common mistakes: pitch presentation instead of showing a working prototype.",
    remember: "Working proof replaces the sales pitch.",
    whyMatters: "Adhering to these takeaways ensures long-term viability and recurring retainer contracts.",
    diagramType: "mistakes_checklist",
    miniQuestion: {
      question: "Which of the following is a critical mistake for an FDE?",
      options: [
        "Building a working slice first",
        "Pitching abstract slides instead of showing a working demo with client data",
        "Charging monthly retainers for maintenance",
        "Using open standards like MCP"
      ],
      correct: 1,
      explanation: "Correct! Showing working proof (thin slice) is always superior to pitching abstract concepts or slides."
    }
  }
];

export const course2Flashcards = [
  {
    term: "FDE (Forward-Deployed Engineer)",
    definition: "An engineer who works closely with the client's live data, systems, and teams to deploy AI solutions.",
    example: "A developer working inside a logistics office to wire an automated customs clearing bot."
  },
  {
    term: "Deployment Gap",
    definition: "The distance between a raw AI capability (API) and a working business outcome.",
    example: "An API key that can read PDFs vs. an active system that files taxes and logs them in ERP."
  },
  {
    term: "Vendor-Neutral",
    definition: "An architecture not bound to a single AI vendor, supporting Claude, OpenAI, Gemini, or local models.",
    example: "Building a bridge schema so your AI workers can switch models if API prices change."
  },
  {
    term: "Vertical",
    definition: "A specific profession combined with a specific country/jurisdiction.",
    example: "Tax law compliance and corporate filing inside Pakistan."
  },
  {
    term: "System of Record",
    definition: "The official database source of truth containing authoritative rules and guidelines.",
    example: "A database containing all government import duty rates for shipping cargo."
  },
  {
    term: "System of Context",
    definition: "A temporary packet of case files, history, and records required to perform one specific task.",
    example: "Current buyer invoice, purchase contract, and shipping manifest loaded for validation."
  },
  {
    term: "Slice",
    definition: "A thin, complete end-to-end operational outcome instead of a massive unfinished system.",
    example: "Building a 'Bank Statement Reconciliation Worker' first instead of 'Entire CFO AI Suite'."
  },
  {
    term: "Service Ladder",
    definition: "Starting with consulting and manual data configurations (services) to fund product building.",
    example: "Indexing PDFs for a client to earn immediate trust and cashflow."
  },
  {
    term: "Vertical Ladder",
    definition: "The scaling path where you secure an expert, map laws, build workers, and package as a SaaS startup.",
    example: "Partnering with a tax lawyer to build and license a nationwide tax filing SaaS."
  },
  {
    term: "80/20 Customization Split",
    definition: "Product model where 80% is the reusable generic core and 20% is client-custom rules.",
    example: "Core sales bot (80%) + specific company product catalog (20%)."
  },
  {
    term: "10-80-10 Rule",
    definition: "Work structure where human sets specs (10%), AI builds (80%), and human reviews/approves (10%).",
    example: "You outline a code file layout, AI drafts all components, and you review/test it."
  },
  {
    term: "Monthly Retainer",
    definition: "Ongoing monthly fee charged to monitor, evaluate, and update deployed AI workers against degradation.",
    example: "Charging $1,000/month to keep a client's invoice auditing loop aligned with new API updates."
  }
];

export const course2QuizQuestions = [
  {
    question: "Under the 80/20 rule of AI deployment, what does the 80% stand for?",
    options: [
      "The client's private database customization",
      "The reusable core functionalities of the AI agent system",
      "The failure rate of new AI startups",
      "The time spent writing docstrings"
    ],
    correct: 1,
    explanation: "80% stands for the reusable standard engine and code core, which stays consistent across customers."
  },
  {
    question: "What is the 10-80-10 rule about?",
    options: [
      "The cost division of database hosting",
      "The division of execution: 10% Human requirements, 80% AI execution, 10% Human review/approval",
      "The speed optimization rates for SQL indexing",
      "The division of profits between co-founders"
    ],
    correct: 1,
    explanation: "10-80-10 represents human-AI collaboration where human handles specs at start and checks output at end."
  },
  {
    question: "What does a Monthly Retainer represent in FDE freelance contracts?",
    options: [
      "A security deposit that is returned to the client",
      "An ongoing monthly fee to maintain, evaluate, monitor, and optimize deployed AI workers",
      "A fine paid for delayed deliverables",
      "The cost of renting base cloud hosting nodes"
    ],
    correct: 1,
    explanation: "Retainer is the recurring monthly fee paid by the client to maintain the AI workers against prompt degradation."
  },
  {
    question: "Why is 'Build First, Sell Second' crucial for beginner FDEs?",
    options: [
      "Because clients only buy from developers with 20 years of experience",
      "Because showing a working slice (proof) is far more persuasive than talking about generic AI capabilities",
      "Because building AI is free for the first year",
      "Because clients do not allow meetings without product codes"
    ],
    correct: 1,
    explanation: "Client demo aur working proof (thin slice) dekhna chahta hai, na ke sirf abstract promise."
  },
  {
    question: "What is a common failure mode when choosing a vertical?",
    options: [
      "Choosing a vertical that is too narrow and specific",
      "Choosing a vertical that is too broad (e.g. general 'Accounting' instead of 'Tax practice in Pakistan')",
      "Avoiding using OpenAI models",
      "Charging retainers instead of project fees"
    ],
    correct: 1,
    explanation: "Boht broad niche choose karne se systems complicated ho jate hain aur implementation fail ho jati hai."
  },
  {
    question: "What is the role of the Service Ladder in FDE career growth?",
    options: [
      "A ladder used by server maintenance workers",
      "Starting with immediate cashflow tasks like SoR setups to fund and research vertical systems",
      "A coding pattern for nesting loops",
      "The marketing framework for buying Facebook ads"
    ],
    correct: 1,
    explanation: "Service Ladder se shuru mein quick projects milte hain jis se research fund hoti hai."
  },
  {
    question: "What is a 'Vertical System of Record'?",
    options: [
      "A server racks rack layout database",
      "The authoritative database rules, legal standards, and workflows for a specific industry + country",
      "A document listing all employee names",
      "A temporary cache file for API prompts"
    ],
    correct: 1,
    explanation: "Vertical SoR specialized rules aur industry codes save karta hai (jaise local audit checklist)."
  },
  {
    question: "What does the 'Deployment Gap' prevent?",
    options: [
      "AI models from running on Linux systems",
      "Raw AI models from producing immediate measurable business results without configuration",
      "Internet connection setups",
      "The user from editing prompt files"
    ],
    correct: 1,
    explanation: "Deployment gap ki waja se bare models use karne ke bawajood business outcomes improve nahi hote."
  },
  {
    question: "Why should you build a 'Slice' instead of a large generic product first?",
    options: [
      "Slices are cheaper to host on AWS nodes",
      "Slices are focused, faster to validate, and prove direct value without massive development risks",
      "Large products are illegal to build in Pakistan",
      "Slices do not require any TypeScript variables"
    ],
    correct: 1,
    explanation: "Slices manageable aur fast outcomes deliver karte hain, jis se client and model validate ho jate hain."
  },
  {
    question: "In the final FDE money roadmap, what is the 'Startup' route based on?",
    options: [
      "Selling random domain names on auctions",
      "Owning a Vertical SoR, Expert Twin, and licensing domain products/FDE engagements",
      "Writing research articles for universities",
      "Running physical delivery trucks"
    ],
    correct: 1,
    explanation: "Startup path proprietary vertical assets (SoR + workers) build aur license karne par focus karta hai."
  }
];
