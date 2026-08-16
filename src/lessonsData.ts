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
    title: "What is an Ecosystem?",
    shortTitle: "What is an Ecosystem?",
    explanation: "An Ecosystem refers to a group of multiple connected parts that work together in harmony as one larger, unified system. In the AI world, we don't just use a single chatbot. We connect textbooks, databases, teachers, developers, and worker bots together. This collection of tools forms an AI Agent Factory Ecosystem.",
    explanationUrdu: "Ecosystem ka matlab hai aisi system jahan boht se chote chote parts aapas mein mil kar ek bara aur connected unit banate hain. AI Agent Factory mein hum sirf aik robot ya chatbot use nahi karte, balkay Books, Databases, AI Teachers, aur AI Workers sab ko aapas mein connect karte hain jo aik ecosystem banata hai.",
    analogy: "Think of a school. A school is not just a building or a teacher. A school is teacher + students + books + exams + records + departments. All these connected parts form an educational ecosystem.",
    example: "Instead of just asking ChatGPT to code a feature, your system reads the official textbook (Canonical Book), queries the database (System of Record), checks your study progress (AI Tutor), and lets another AI write the code (AI Developer). They all work as one team.",
    remember: "Ecosystem = connected parts working together as one team.",
    whyMatters: "Without an ecosystem, AI tools are isolated. They don't share knowledge, causing confusion and duplicate work.",
    diagramType: "ecosystem_intro",
    miniQuestion: {
      question: "Which of the following best describes an Ecosystem in AI Agent Factory?",
      options: [
        "A single standalone chatbot like ChatGPT",
        "A group of multiple connected parts (books, records, tutors, workers) working together",
        "A physical green garden near the servers",
        "A backup database copy"
      ],
      correct: 1,
      explanation: "Correct! Ecosystem stands for multiple connected parts working in sync."
    }
  },
  {
    id: 2,
    title: "System of Record",
    shortTitle: "System of Record",
    explanation: "A System of Record (SoR) is the single, official, and authoritative source of truth where correct information is stored. When different components or AI agents need to look up facts, they must query this specific system to ensure everyone uses the exact same data.",
    explanationUrdu: "System of Record (SoR) ek aisi official jagah hoti hai jise hum 'Source of Truth' (sach ka markaz) kehte hain. Agar system mein koi bhi data verify karna ho, to sab isi database ya document ko dekhte hain taake information mein koi farq na ho.",
    analogy: "Imagine a family where different members have different phone numbers saved for Uncle Bob. If they write the official, correct number on a yellow notepad stuck to the fridge, that notepad becomes the 'System of Record' for Uncle Bob's number.",
    example: "If an AI Agent Factory needs to know how many lessons a student completed, it doesn't estimate or guess; it queries the official SQL Database which is the System of Record for learner records.",
    remember: "System of Record = the official, single source of truth.",
    whyMatters: "If AI agents use different sources, they will contradict each other. A System of Record ensures consistency.",
    diagramType: "system_of_record",
    miniQuestion: {
      question: "What is a System of Record?",
      options: [
        "A device that records AI voices",
        "The official, authoritative source of truth for information",
        "A notebook where developers sketch ideas",
        "An AI chatbot that replies automatically"
      ],
      correct: 1,
      explanation: "Spot on! The System of Record is the single source of truth for authoritative information."
    }
  },
  {
    id: 3,
    title: "Canonical Knowledge",
    shortTitle: "Canonical Knowledge",
    explanation: "The word 'canonical' means official, original, authoritative, and trusted version. Canonical Knowledge is the core textbook or resource that contains approved information. If there are five different notes on a topic, the officially approved reference textbook is the canonical version.",
    explanationUrdu: "Canonical ka matlab hota hai official, authentic aur standard version. Canonical Knowledge wo basic book ya knowledge base hai jise final aur sahi maana jaye. Agar 5 alag-alag sources hain, to jo system ne official declare kiya hai, wo canonical knowledge hai.",
    analogy: "Think of the official constitution of a country. There are many blogs, books, and articles explaining the law, but the original signed constitution document is the 'canonical' source.",
    example: "In the AI Agent Factory, the core training manual or course book is stored as a 'Canonical Book' to ensure the AI Tutor does not teach outdated or incorrect procedures.",
    remember: "Canonical = the official, authorized standard version.",
    whyMatters: "AI hallucination (inventing fake facts) is reduced when the AI is restricted to teach or build software using ONLY the canonical source.",
    diagramType: "canonical_knowledge",
    miniQuestion: {
      question: "What does 'Canonical' mean in our learning journey?",
      options: [
        "A backup database code",
        "A fast computer processing method",
        "The officially approved, original, and trusted version",
        "An AI learning technique"
      ],
      correct: 2,
      explanation: "Yes! Canonical refers to the officially approved, trusted source."
    }
  },
  {
    id: 4,
    title: "Traditional Learning Model",
    shortTitle: "Traditional Learning",
    explanation: "In the traditional education and software development model, humans do all the knowledge digestion. A textbook is read by a student. The student practices, graduates, becomes a developer, and manually writes the software. The textbook has no direct link to the software itself.",
    explanationUrdu: "Traditional learning model mein sara kaam humans ko khud karna parta tha. Ek student textbook parhta hai, seekhta hai, developer banta hai, aur phir computer par jaa kar software code karta hai. Textbook ka aur program ka aapas mein koi direct computational link nahi hota.",
    analogy: "A recipe book sits on a shelf. A human reads the recipe, cooks the dish, and serves it. The book itself cannot mix the ingredients or turn on the stove.",
    example: "A student studies SQL database creation from a textbook, writes SQL code in an editor, debugs errors manually, and runs it on a server.",
    remember: "Traditional Model = Textbook → Student → Developer → Software.",
    whyMatters: "This flow is slow and depends heavily on human memory. If the developer forgets a rule, the software gets bugs.",
    diagramType: "traditional_learning",
    miniQuestion: {
      question: "In the traditional model, who digests the textbook and writes the code?",
      options: [
        "The AI Agent",
        "The automated build server",
        "The human student who becomes a developer",
        "The MCP network"
      ],
      correct: 2,
      explanation: "Correct! The human has to read, learn, and manually code everything."
    }
  },
  {
    id: 5,
    title: "AI Changes the Learning Model",
    shortTitle: "AI Changes Learning",
    explanation: "With Large Language Models (LLMs), AI can now digest textbooks, answer programming queries, write code fragments, and explain databases. This means the AI can act as the intermediary between knowledge and software creation. However, standard LLMs lack structured tracking, leading to learning gaps.",
    explanationUrdu: "Ab AI ke aane se ye model badal gaya hai. AI direct textbook ko read kar sakta hai, answers de sakta hai, code generate kar sakta hai. Lekin generic AI ke paas user ki sequential progress track karne ka koi system nahi hota, jis se study mein gaps reh jate hain.",
    analogy: "Imagine an expert who knows everything but has amnesia. Every time you ask a question, they reply, but they forget who you are, what you already know, and what they taught you 5 minutes ago.",
    example: "If you ask ChatGPT about databases, it will explain it. But if you return tomorrow, it won't remember that you already know SQL and will explain SQL basics all over again.",
    remember: "AI speeds up learning but lacks structure, sequence, and memory without an ecosystem.",
    whyMatters: "Without structure, learners get confused by advanced topics before learning the basics.",
    diagramType: "ai_changes_learning",
    miniQuestion: {
      question: "What is the primary drawback of using generic AI (like raw ChatGPT) for structured learning?",
      options: [
        "It is too slow to generate responses",
        "It lacks structured sequence, learner records, and teaching methodology",
        "It cannot write code syntax",
        "It does not support dark mode interfaces"
      ],
      correct: 1,
      explanation: "Yes! Raw AI does not track your course levels, progress, or structured learning path."
    }
  },
  {
    id: 6,
    title: "Problems with Generic AI Teaching",
    shortTitle: "Generic AI Problems",
    explanation: "When we use generic AI for education, we face four critical problems: 1) No guaranteed teaching sequence (it might teach advanced topics first), 2) No clear starting and ending points, 3) No structured learner record (it doesn't save what you mastered), and 4) No guaranteed teaching methodology (it just prints text instead of teaching step-by-step).",
    explanationUrdu: "Generic AI teaching mein 4 problems aate hain: 1) Parhanay ki koi fixed sequence nahi hoti, 2) Shuru aur aakhir ka nahi pata hota, 3) Student ka koi track record nahi save hota, aur 4) Koi proper teaching method ya system nahi hota (bas raw answers hote hain).",
    analogy: "A library contains all the books. But if a child enters, the library won't tell them where to start, which book is right for their age, or test them on page 5.",
    example: "A generic AI might show you complex SQL Joins before explaining what a Database Table is. This leads to information overload.",
    remember: "Generic AI = Question → Answer. Structured Tutor = Level Check → Lesson → Assessment → Progress.",
    whyMatters: "To convert a beginner to an expert, structured sequencing is essential.",
    diagramType: "generic_vs_structured",
    miniQuestion: {
      question: "Which of the following is NOT one of the 4 problems of generic AI teaching?",
      options: [
        "No guaranteed teaching sequence",
        "No structured learner record",
        "AI answers are always written in French",
        "No guaranteed teaching methodology"
      ],
      correct: 2,
      explanation: "Correct! AI language isn't limited to French. The actual problems are sequence, records, starting/ending, and methodology."
    }
  },
  {
    id: 7,
    title: "Textbook as System of Record",
    shortTitle: "Textbook as SoR",
    explanation: "To solve these problems, the AI Agent Factory makes the Canonical Book act as the System of Record. This means the textbook becomes a digital database that both the AI Tutor and human student consult. The book is not just static text, it is an active database.",
    explanationUrdu: "In problems ko solve karne ke liye hum textbook ko normal book nahi balkay 'System of Record' (SoR) bana dete hain. AI Tutor aur human student dono isi dynamic book ko check karte hain. Ye textbook data backend ban jati hai.",
    analogy: "A cook and a smart oven both refer to the exact same digital recipe file. If the cook updates the bake time, the oven reads the update automatically.",
    example: "The textbook chapters are indexed in a database. When a student progresses to Lesson 8, the database registers that state, and the AI Tutor knows exactly which canonical content from the textbook to fetch.",
    remember: "Canonical Book + System of Record = AI-accessible authoritative curriculum.",
    whyMatters: "It anchors the AI to a trusted text, stopping the AI from teaching wrong concepts.",
    diagramType: "textbook_as_sor",
    miniQuestion: {
      question: "Why do we treat the Canonical Book as a System of Record?",
      options: [
        "So it can be printed easily",
        "To serve as a single database source of truth that humans and AI both look at",
        "To make the AI write book reviews",
        "To replace databases with physical paper"
      ],
      correct: 1,
      explanation: "Correct! It provides a shared, authoritative knowledge source for both human learners and AI tools."
    }
  },
  {
    id: 8,
    title: "MCP Explained",
    shortTitle: "MCP Explained",
    explanation: "MCP stands for Model Context Protocol. It is an open standard that allows AI agents to securely connect to external data sources, files, and tools. Instead of writing custom connectors for every new database or app, MCP provides a standard plug-and-play socket for AI.",
    explanationUrdu: "Model Context Protocol (MCP) ek standard tareeqa hai jis se AI agents external sources ya tools ke saath plug-and-play connect ho sakte hain. Is se AI easily dynamic data, databases, ya systems of records ko safely read and write kar sakta hai.",
    analogy: "Think of a USB port. Before USB, every device (mouse, keyboard, printer) had its own unique plug. USB standardized the connection. MCP is the USB port for AI models.",
    example: "Your AI Tutor uses MCP to read the Canonical Book database, fetch your progress record, and save your quiz score into the Local System of Record.",
    remember: "MCP = The standard USB-like connection port between AI and external tools/records.",
    whyMatters: "Without MCP, connecting AI to your business database requires complex, proprietary custom coding.",
    diagramType: "mcp_visual",
    miniQuestion: {
      question: "What is the main purpose of the Model Context Protocol (MCP)?",
      options: [
        "To train large language models from scratch",
        "To act as a standardized bridge connecting AI models to external data and tools",
        "To translate code to Urdu",
        "To check the speed of the user's internet connection"
      ],
      correct: 1,
      explanation: "Spot on! MCP is a standardized connector linking AI models to tools and databases."
    }
  },
  {
    id: 9,
    title: "Four Rungs of AI Usage",
    shortTitle: "Four Rungs of AI",
    explanation: "AI adoption happens in four sequential rungs: 1) Paste the URL into AI (Simple chat, copy-paste), 2) Connect AI to the System of Record (AI accesses actual files automatically), 3) Use Zia Tutor AI (AI behaves as a structured teacher guiding the user), and 4) Use Zia Developer AI (AI acts as a software developer, building and updating actual code directly).",
    explanationUrdu: "AI use karne ke 4 levels (rungs) hain: Rung 1: Custom copy-paste (URL ya text dalna). Rung 2: AI ko SoR se connect karna (autofetch). Rung 3: Zia Tutor use karna (structured parhai). Rung 4: Zia Developer use karna (actual project generation aur software coding).",
    analogy: "Rung 1 is like carrying buckets of water. Rung 2 is laying a pipe to the well. Rung 3 is hiring a water manager. Rung 4 is building a fully automated water distribution factory.",
    example: "Instead of copy-pasting code into ChatGPT (Rung 1), connecting it to your GitHub repository is Rung 2. Having a tutor teach you coding rules is Rung 3, and letting the AI write the code on your repo is Rung 4.",
    remember: "Moving up the rungs reduces manual human effort and increases AI automation.",
    whyMatters: "Understanding the rungs helps businesses identify how mature their AI usage is.",
    diagramType: "four_rungs",
    miniQuestion: {
      question: "Which rung represents the highest level of AI maturity, where AI directly builds and modifies code?",
      options: [
        "Rung 1: Paste URL into AI",
        "Rung 2: Connect AI to SoR",
        "Rung 3: Use Zia Tutor AI",
        "Rung 4: Use Zia Developer AI"
      ],
      correct: 3,
      explanation: "Correct! Rung 4 (Zia Developer AI) executes code building and software generation automatically."
    }
  },
  {
    id: 10,
    title: "Zia Tutor AI",
    shortTitle: "Zia Tutor AI",
    explanation: "Zia Tutor is the specialized AI teacher. It operates using four key records: 1) Knowledge Record (what to teach), 2) Identity Record (how the AI behaves, e.g., friendly), 3) Learner Record (the student's current progress), and 4) Personal Profile (personal details of the learner). Zia Tutor uses these to create a customized lesson path.",
    explanationUrdu: "Zia Tutor ek AI Teacher hai jo 4 records use karta hai: Knowledge Record (curriculum kya hai), Identity Record (teacher ka behave kaisa hoga), Learner Record (kitna parh chuke ho), aur Personal Profile (apke baray mein basic details). Is se parhai personalized ho jati hai.",
    analogy: "A private home tutor who has a diary. The diary has the textbook (Knowledge), rules of behavior (Identity), your past quiz grades (Learner Record), and your hobby details (Personal Profile).",
    example: "If you log off for three days, when you return, Zia Tutor reads the Learner Record, greets you by name from your Personal Profile, and says, 'Let's resume from Lesson 10.'",
    remember: "Zia Tutor AI = Knowledge + Identity + Learner Record + Personal Profile → Personalized teaching.",
    whyMatters: "It ensures learners never repeat lessons and get material suited to their speed.",
    diagramType: "zia_tutor",
    miniQuestion: {
      question: "Which record helps Zia Tutor remember which lessons a student has already completed?",
      options: [
        "Identity Record",
        "Learner Record",
        "Knowledge Record",
        "External Internet Record"
      ],
      correct: 1,
      explanation: "Yes! The Learner Record saves student progress so the tutor knows what's completed."
    }
  },
  {
    id: 11,
    title: "Zia Developer AI",
    shortTitle: "Zia Developer AI",
    explanation: "Zia Developer is the AI engineering assistant. Unlike the Tutor (which teaches humans), the Developer acts on instructions to build systems. It follows a sequential lifecycle: Requirement → Architecture → Specification → Build → Test → Install.",
    explanationUrdu: "Zia Developer aik AI software builder hai. Tutor humein parhata hai, jabke Zia Developer software code banata hai. Ye requirements ko parhta hai, architecture sochta hai, specs banata hai, code likhta hai (build), tests run karta hai, aur deployment karta hai.",
    analogy: "A construction manager. You give them a plan. They design the blueprint, build the walls, test the stability, and hand over the keys.",
    example: "You tell Zia Developer: 'Create a login form.' The AI designs it, writes the TSX code, tests it for validation errors, and integrates it into the project files.",
    remember: "Zia Tutor teaches humans. Zia Developer builds software.",
    whyMatters: "Automating the software lifecycle allows human developers to focus on architecture and specifications.",
    diagramType: "zia_developer",
    miniQuestion: {
      question: "What is the primary difference between Zia Tutor and Zia Developer?",
      options: [
        "Zia Tutor helps humans learn; Zia Developer helps build software and systems",
        "Zia Tutor is free; Zia Developer is paid",
        "Zia Developer is an offline PDF document",
        "Zia Tutor only teaches grammar rules"
      ],
      correct: 0,
      explanation: "Correct! Tutor is for learning, Developer is for building."
    }
  },
  {
    id: 12,
    title: "Vertical AI",
    shortTitle: "Vertical AI",
    explanation: "Vertical AI refers to an AI system that is highly specialized in a single industry, profession, or domain (e.g. Sales AI, Accounting AI, Legal AI). Instead of trying to know everything about the world, it focuses deeply on one specific vertical workflow.",
    explanationUrdu: "Vertical AI ka matlab hai kisi specific industry ya domain (jaise Accounting, HR, ya Legal) ka expert AI. Generalized answers dene ke bajaye, ye sirf us specific field ke professional rules follow karta hai.",
    analogy: "A general physician vs. a heart surgeon. General AI is the GP (knows a little of everything), while Vertical AI is the specialist surgeon.",
    example: "An Accounting Vertical AI knows everything about GAAP accounting rules and spreadsheet tax formulas, but doesn't know how to write a movie script.",
    remember: "General AI = Broad knowledge. Vertical AI = Deep, industry-specific expertise.",
    whyMatters: "Generic AI often fails in specific industries because it lacks deep domain rules. Vertical AI solves this.",
    diagramType: "vertical_ai",
    miniQuestion: {
      question: "What does 'Vertical' mean in Vertical AI?",
      options: [
        "The screen alignment",
        "A specific industry, domain, or profession",
        "AI code that runs vertically in columns",
        "A fast database connection"
      ],
      correct: 1,
      explanation: "Yes! Vertical stands for a specific industry or domain (like HR, Sales, Legal)."
    }
  },
  {
    id: 13,
    title: "Vertical System of Record",
    shortTitle: "Vertical SoR",
    explanation: "A Vertical System of Record contains the authoritative, specialized database, rules, and rules-books for a specific industry. For example, an Accounting SoR houses the official financial guidelines, tax rules, and local accounting structures.",
    explanationUrdu: "Vertical SoR mein kisi specific industry (e.g., Accounting ya Healthcare) ke official rules aur databases hote hain. Is se domain-specific AI workers ko correct industry logic feed kiya jata hai.",
    analogy: "A law book library dedicated purely to maritime law. A maritime lawyer refers only to this library for cases.",
    example: "The 'Agent Factory SoR' plus the 'Accounting SoR' combine to feed correct tax rules directly to Accounting AI Workers.",
    remember: "Vertical SoR = The official database for a specific industry's rules and records.",
    whyMatters: "Without a Vertical SoR, AI workers might use generic information that violates local industry laws.",
    diagramType: "vertical_sor",
    miniQuestion: {
      question: "What does a Vertical System of Record store?",
      options: [
        "Generic search engine results",
        "Authoritative knowledge, rules, and workflows for a specific industry",
        "Daily developer chat logs",
        "Photos of the office team"
      ],
      correct: 1,
      explanation: "Spot on! It holds domain-specific authoritative guidelines and databases."
    }
  },
  {
    id: 14,
    title: "AI Workers",
    shortTitle: "AI Workers",
    explanation: "An AI Worker is an AI agent designed to perform an actual operational job, rather than just answering questions. While a chatbot chats, an AI Worker operates pipelines, checks forms, updates databases, and triggers APIs.",
    explanationUrdu: "AI Worker sirf sawaal-jawaab (chat) nahi karta, balkay actual kaam karta hai. Maslan, Lead dhundna, verify karna, CRM update karna, aur email send karna. Chatbot bas baat karta hai, Worker kaam karta hai.",
    analogy: "A visitor asking directions at a reception desk (Chatbot) vs. an employee who actively files documents and processes orders (AI Worker).",
    example: "A Sales AI Worker does: Lead identification → Lead qualification → CRM update → Automated follow-up email. It operates autonomously.",
    remember: "Chatbot answers questions. AI Worker performs actions and workflows.",
    whyMatters: "Real business value comes from getting work done, not just having conversations.",
    diagramType: "ai_worker",
    miniQuestion: {
      question: "What is the key difference between a Chatbot and an AI Worker?",
      options: [
        "Chatbots only run on desktop screens",
        "Chatbots answer questions; AI Workers execute actual tasks and workflows",
        "AI Workers cannot read text inputs",
        "Chatbots are automated but AI Workers are human developers"
      ],
      correct: 1,
      explanation: "Correct! AI Workers execute end-to-end task flows instead of just replying to chats."
    }
  },
  {
    id: 15,
    title: "Digital FTE",
    shortTitle: "Digital FTE",
    explanation: "FTE stands for Full-Time Equivalent (which means one human working full-time). A Digital FTE is an AI worker or a group of AI workers configured to perform the full responsibilities of a complete job role in a company.",
    explanationUrdu: "FTE (Full-Time Equivalent) ka matlab hai full-time employee. Digital FTE ka matlab hai aisa AI system jo pure human job role (jaise AI Accountant ya AI HR representative) ki responsibilities independently perform kar sake.",
    analogy: "Hiring a digital virtual assistant who logs into Slack, reads emails, files invoices, and reports status just like a human worker would do on their shift.",
    example: "Instead of just using AI to draft an email, a Digital HR FTE autonomously onboard employees: generates contracts, sets up emails, and creates records in the employee database.",
    remember: "Digital FTE = AI worker configured to handle a complete human job role.",
    whyMatters: "It helps companies scale their workforce digitally without facing physical office capacity limits.",
    diagramType: "digital_fte",
    miniQuestion: {
      question: "What does FTE stand for in the context of Digital FTE?",
      options: [
        "File Transfer Engine",
        "Full-Time Equivalent",
        "Free Training Edition",
        "Forward-Deployed Entity"
      ],
      correct: 1,
      explanation: "Yes! FTE stands for Full-Time Equivalent, representing a full job role."
    }
  },
  {
    id: 16,
    title: "Platform as a Plugin",
    shortTitle: "Platform as Plugin",
    explanation: "Instead of building a massive, closed software application, the 'Platform as a Plugin' model provides modular components and connectors. These components plug directly into existing business tools (like Slack, Teams, or SAP) to grant them immediate AI capabilities.",
    explanationUrdu: "Ek bara aur closed software product banane ke bajaye, hum reusable plugins aur connectors banate hain. Ye plugins existing platforms (Slack, Teams, Salesforce) ke andar lag kar unhein new AI powers dete hain.",
    analogy: "Instead of buying a new specialized cooking machine, you buy a food processor attachment that plugs into your existing home mixer.",
    example: "Adding an MCP connector directly to Slack so employees can query the company's Canonical System of Record inside their existing Slack chat channels.",
    remember: "Platform as a Plugin = Add AI features into existing tools rather than forcing users onto a new site.",
    whyMatters: "Employees hate switching apps. Placing AI where they already work boosts productivity.",
    diagramType: "platform_plugin",
    miniQuestion: {
      question: "What is the primary advantage of the 'Platform as a Plugin' approach?",
      options: [
        "It makes the AI run offline",
        "It integrates AI features directly into tools employees already use, like Slack or Teams",
        "It completely deletes existing databases",
        "It removes the need for any programming code"
      ],
      correct: 1,
      explanation: "Correct! It integrates AI into the tools people already use, saving time and friction."
    }
  },
  {
    id: 17,
    title: "80/20 Rule",
    shortTitle: "80/20 Rule",
    explanation: "In AI customization, the 80/20 Rule states that 80% of the AI agent is a common, reusable core (e.g. general sales methodologies or standard coding standards), and only 20% is client-specific customization (e.g. company pricing sheets or custom CRM connection rules).",
    explanationUrdu: "80/20 Rule ka matlab hai ke AI agent ka 80% structure standard aur common hota hai jo sab ke liye same hai (jaise sales qualification rules). Baaqi 20% har customer ke mutabiq change kiya jata hai (jaise pricing details).",
    analogy: "A smartphone. 80% is the stock phone and OS built in the factory. 20% is your personal apps, wallpapers, and accounts that make it unique to you.",
    example: "An AI Sales Worker has standard objection-handling logic (80%). When deployed for a shoe company, we add the shoe pricing and catalog database (20%).",
    remember: "80% = Standard Reusable Core. 20% = Customer Customization.",
    whyMatters: "Building AI from scratch is expensive. The 80/20 rule allows fast, affordable scaling.",
    diagramType: "eighty_twenty",
    miniQuestion: {
      question: "In the 80/20 AI customization rule, what does the 20% represent?",
      options: [
        "The errors the AI makes",
        "The client-specific database, pricing, and custom rules configuration",
        "The speed improvement of the system",
        "The time AI spends resting"
      ],
      correct: 1,
      explanation: "Exactly! The 20% is the customized portion tailored to the specific client's requirements."
    }
  },
  {
    id: 18,
    title: "10-80-10 Rule",
    shortTitle: "10-80-10 Rule",
    explanation: "The 10-80-10 Rule describes WHO does the work in a process: Humans do the first 10% (define requirements and specifications), the AI executes the middle 80% (builds the code, templates, or documents), and Humans do the final 10% (review, test, and approve).",
    explanationUrdu: "10-80-10 Rule kaam ki division batata hai: Shuru ka 10% kam human karta hai (requirements dena). Darmiyan ka 80% kam AI karta hai (heavy writing/coding). Aakhir ka 10% kam phir human karta hai (check aur approve karna).",
    analogy: "An architect designs the house sketch (10%). A crew of automated builders constructs the walls (80%). The architect returns to inspect and sign off on safety (10%).",
    example: "Writing a blog: Human outlines the topics (10%). AI drafts the 2000-word article (80%). Human edits, fact-checks, and publishes it (10%).",
    remember: "10% Human spec → 80% AI creation → 10% Human approval.",
    whyMatters: "It ensures high speed (via 80% AI work) while keeping humans in control (via start and end points) to maintain quality.",
    diagramType: "ten_eighty_ten",
    miniQuestion: {
      question: "Who performs the final 10% of the work in the 10-80-10 rule?",
      options: [
        "The AI Developer bot",
        "The external customer",
        "The human (for quality control and final approval)",
        "The MCP network server"
      ],
      correct: 2,
      explanation: "Spot on! The human handles the final 10% to verify, polish, and approve the output."
    }
  },
  {
    id: 19,
    title: "FDE",
    shortTitle: "FDE",
    explanation: "FDE stands for Forward-Deployed Engineer. An FDE is a technical human expert who works directly with the customer on-site or in close communication to customize, integrate, and deploy the 20% of the AI solution in their live environment.",
    explanationUrdu: "FDE (Forward-Deployed Engineer) ek technical human expert hota hai jo client ke sath mil kar kaam karta hai. Iska kaam AI ecosystem ke core standard templates ko customer ke database aur environment (20%) ke sath connect aur setup karna hota hai.",
    analogy: "A high-end kitchen system designer. The factory makes the cabinets (80%), but the designer comes to your house, measures your walls, and installs them perfectly (20%).",
    example: "An FDE from the AI Agent Factory visits a client bank, connects the AI Worker to their private database using MCP, and sets up custom security rules.",
    remember: "FDE = The human engineer who links the AI core to the customer's real systems.",
    whyMatters: "AI systems cannot self-install in secure enterprise environments. Humans are needed to bridge the gap safely.",
    diagramType: "fde_role",
    miniQuestion: {
      question: "What is the primary role of a Forward-Deployed Engineer (FDE)?",
      options: [
        "To write generic textbooks about AI history",
        "To work closely with clients, adapting and implementing AI solutions to their actual environments",
        "To replace databases with physical files",
        "To run marketing ads for the AI platform"
      ],
      correct: 1,
      explanation: "Exactly! FDEs bridge the gap by deploying the AI solutions directly into the customer's environment."
    }
  },
  {
    id: 20,
    title: "Complete Ecosystem",
    shortTitle: "Complete Ecosystem",
    explanation: "The Complete Ecosystem brings every single part together in one pipeline: Canonical Knowledge supplies the System of Record. Humans learn via the AI Tutor, and build systems via the AI Developer. The output integrates into the Vertical System of Record, driving Vertical AI Workers and Digital FTEs, which ultimately delivers automated business value to the Customer Business.",
    explanationUrdu: "Yahan poora ecosystem aapas mein connect hota hai: Canonical Book se data ata hai System of Record (SoR) mein. Insaan parhta hai AI Tutor se, software banata hai AI Developer se. Phir ye outputs Vertical SoR aur Vertical AI Workers ko chalate hain, jo Digital FTEs ban kar customer ke business ko chalaate hain.",
    analogy: "Think of an automated car assembly line. Design specifications flow down, robotic arms weld parts, computer testers verify, and ready-to-use cars roll out directly into the city streets.",
    example: "A complete AI Agent Factory setup where new hires learn company laws via Zia Tutor, build tools using Zia Developer, while AI Workers process daily client invoices automatically.",
    remember: "The ultimate goal is a fully aligned system from book to business.",
    whyMatters: "Building isolated parts creates bottlenecks. A complete ecosystem delivers end-to-end automation.",
    diagramType: "complete_ecosystem",
    miniQuestion: {
      question: "In the complete ecosystem flow, what resides at the absolute final stage receiving value?",
      options: [
        "The Model Context Protocol",
        "The generic AI chatbot API",
        "The Customer's actual Business",
        "The raw textbook PDF"
      ],
      correct: 2,
      explanation: "Perfect! The ultimate purpose of the entire ecosystem is to serve and optimize the Customer's Business."
    }
  }
];

export const flashcards = [
  {
    term: "Ecosystem",
    definition: "Multiple connected parts working together as one system.",
    example: "School = Teacher + Student + Book + Exam."
  },
  {
    term: "System of Record",
    definition: "The official place where authoritative, correct information is stored.",
    example: "A family's official phone numbers spreadsheet on the fridge."
  },
  {
    term: "Canonical",
    definition: "The officially approved, original, and trusted version of knowledge.",
    example: "The signed constitution document of a country vs. blogs explaining it."
  },
  {
    term: "MCP",
    definition: "Model Context Protocol. Standard bridge for AI to connect to external databases and tools.",
    example: "USB port standardizing connections for computer accessories."
  },
  {
    term: "AI Tutor",
    definition: "AI teacher that tracks learner record, identity, knowledge, and profile.",
    example: "Zia Tutor teaching SQL step-by-step and remembering what you learned."
  },
  {
    term: "AI Developer",
    definition: "AI engineering assistant that creates, edits, and tests actual code.",
    example: "Zia Developer generating a full React component and writing Jest tests."
  },
  {
    term: "Vertical",
    definition: "A specific industry, domain, or profession (e.g. Sales, Accounting).",
    example: "An AI specialized ONLY in healthcare workflow compliance."
  },
  {
    term: "Vertical SoR",
    definition: "A System of Record containing rules and terminology for a specific industry.",
    example: "A database containing all IRS tax brackets for tax accounting AI."
  },
  {
    term: "AI Worker",
    definition: "An AI agent designed to perform a specific job workflow (not just chat).",
    example: "An agent that qualifies leads, updates CRM, and sends emails automatically."
  },
  {
    term: "Digital FTE",
    definition: "AI workers designed around a complete full-time employee job role.",
    example: "An AI employee who manages all HR onboarding tasks autonomously."
  },
  {
    term: "FDE",
    definition: "Forward-Deployed Engineer. Technical human who implements AI at customer sites.",
    example: "A software engineer deploying AI bots and integrating client's private SQL server."
  },
  {
    term: "80/20",
    definition: "80% reusable generic AI core, 20% customer customization.",
    example: "Sales bot core (80%) + custom pricing list of the client (20%)."
  },
  {
    term: "10-80-10",
    definition: "10% Human requirements, 80% AI building, 10% Human approval.",
    example: "Human writes specification, AI writes the full code, Human tests and merges."
  },
  {
    term: "Vendor Lock-in",
    definition: "Being stuck with one vendor's proprietary system, unable to switch.",
    example: "Using open-source MCP prevents being locked into one AI vendor's tools."
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
    question: "What does the term 'Canonical' mean?",
    options: [
      "High speed processing",
      "The officially approved, original, and trusted version",
      "Information converted to database format",
      "A technique to secure AI connections"
    ],
    correct: 1,
    explanation: "Canonical ka matlab hai authoritative ya official version. Jab content ke multiple versions hoon, to official version hi Canonical Knowledge hota hai."
  },
  {
    question: "How does traditional learning model work for software developers?",
    options: [
      "Textbook → Student → Developer → Software",
      "Code → Teacher → Computer → Deployment",
      "AI → Code → Output → Database",
      "Textbook → AI → Compiler → Product"
    ],
    correct: 0,
    explanation: "Traditional model mein student pehle textbook se seekhta hai, seekh kar developer banta hai, aur aur phir manually code ya software build karta hai."
  },
  {
    question: "What is the main problem AI introduces into the traditional learning model?",
    options: [
      "AI doesn't know any programming language",
      "AI lacks structured sequencing, progress tracking, and teaching methodology",
      "AI takes too long to respond to coding questions",
      "AI cannot translate English to Urdu"
    ],
    correct: 1,
    explanation: "AI answers to de sakta hai but user ko systematically seekhney ke liye proper teaching sequence, progress levels, aur teaching framework ki zaroorat hoti hai jo generic AI ke paas nahi hoti."
  },
  {
    question: "If you ask a generic AI a question, it uses 'Question → Answer'. How does a Structured Tutor AI differ?",
    options: [
      "It doesn't answer the question at all",
      "It guides the student through level checks, custom lessons, practice, assessment, and trackable progress",
      "It only displays code without explanation",
      "It charges a fee per answer"
    ],
    correct: 1,
    explanation: "Structured Tutor AI learner records aur levels maintain karta hai aur step-by-step parhata hai, na ke sirf answers direct phenk dena."
  },
  {
    question: "Why do we treat a Textbook as a System of Record in this ecosystem?",
    options: [
      "Because textbooks are heavy and hard to modify",
      "To provide a single authoritative knowledge base that both the human and AI refer to",
      "Because it avoids using internet databases",
      "Because AI cannot understand documents other than textbooks"
    ],
    correct: 1,
    explanation: "Textbook ko SoR banana isliye zaroori hai taake human student aur AI Tutor dono same canonical source standard data check karein aur sync mein rahein."
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
    question: "If you are using Rung 2 of AI usage (System of Record integration), what is the main advantage over Rung 1 (URL pasting)?",
    options: [
      "The AI is cheaper to run",
      "The AI has direct access to the live authoritative source of truth instead of static copy-pasted files",
      "The AI can build software by itself",
      "The AI behaves like a patient teacher"
    ],
    correct: 1,
    explanation: "Rung 2 mein AI system direct authoritative record (SoR) se live connected hota hai, so copy-paste karne ki manually zaroorat nahi rehti."
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
    question: "How does Zia Developer AI differ from Zia Tutor AI?",
    options: [
      "Zia Developer helps humans build and test software, while Zia Tutor helps humans learn concepts",
      "Zia Developer works offline while Zia Tutor works online",
      "Zia Developer only speaks Urdu",
      "Zia Developer is for managers while Zia Tutor is for engineers"
    ],
    correct: 0,
    explanation: "Zia Tutor ka focus human learning par hai (teaching), jabke Zia Developer ka focus actual product build aur execute karne par hai."
  },
  {
    question: "What is 'Vertical AI'?",
    options: [
      "AI that stands upright on servers",
      "AI specialized for a specific industry or domain (like Accounting, HR, Sales)",
      "AI that has more parameters than general AI",
      "AI that only runs on mobile screens"
    ],
    correct: 1,
    explanation: "Vertical AI wo AI systems hote hain jo generalized answer dene ke bajaye kisi particular field (Accounting, Marketing, Healthcare) ke workflows par focus karte hain."
  },
  {
    question: "Why do we need a Vertical System of Record?",
    options: [
      "To store employee attendance sheets",
      "To provide domain-specific rules, terminologies, and workflows (e.g. Accounting policies) for Vertical AI workers",
      "To keep AI agents from shutting down",
      "To host the website's landing page"
    ],
    correct: 1,
    explanation: "Har industry (Vertical) ke specific rules aur rules book hote hain (Accounting standards, HR policies). Is unique knowledge ko hold karne ke liye Vertical SoR design kiya jata hai."
  },
  {
    question: "What is the difference between a traditional Chatbot and an AI Worker?",
    options: [
      "Chatbots write code while AI Workers only reply",
      "Chatbots only answer questions, whereas AI Workers perform complete workflows and execute tasks",
      "Chatbots are more expensive than AI Workers",
      "There is no difference"
    ],
    correct: 1,
    explanation: "Chatbot ka kaam sirf messages ka reply dena hai, jabke AI Worker complete operational steps (e.g. leads filter karna, CRM update karna, templates execute karna) perform karta hai."
  },
  {
    question: "What does a 'Digital FTE' represent?",
    options: [
      "A digital certificate for computer science graduates",
      "A complete AI Worker designed around an entire human job role (Full-Time Equivalent)",
      "An internet protocol for faster AI inference",
      "A standard database indexing schema"
    ],
    correct: 1,
    explanation: "Digital FTE (Full-Time Equivalent) ka matlab hai jab ek ya zyada AI workers pure job role (e.g., AI Accountant, AI HR assistant) ki tarah complete tasks manage karte hain."
  },
  {
    question: "What does the 'Platform as a Plugin' approach advocate?",
    options: [
      "Building huge self-contained software that doesn't allow external additions",
      "Providing reusable components and connectors that can be integrated into existing systems",
      "Compelling users to buy new computers",
      "Moving all data to public cloud hosts"
    ],
    correct: 1,
    explanation: "Platform as a Plugin ka matlab hai ke huge product banane ki bajaye component modules banayein jo existing platforms (like Microsoft Teams or Slack) mein directly integrate ho sakein."
  },
  {
    question: "In the 80/20 Rule of AI customization, what does the '80%' stand for?",
    options: [
      "The amount of time AI sits idle",
      "The reusable common core functionalities (like general sales methodologies)",
      "The client's custom database structures",
      "The percentage of errors expected"
    ],
    correct: 1,
    explanation: "80/20 Rule kehta hai ke 80% AI system common aur core features par based hota hai, jabke baqi 20% customer ki specific configuration hoti hai."
  },
  {
    question: "Under the 10-80-10 Rule, who does the middle 80% of the work?",
    options: [
      "Forward-Deployed Engineers",
      "The AI Agent system",
      "The Client management",
      "A QA Tester human team"
    ],
    correct: 1,
    explanation: "10-80-10 Rule mein Human start (10% requirements) aur final review (10% testing/approval) karta hai, aur AI middle 80% bulk heavy lifting execution karta hai."
  },
  {
    question: "What is the main responsibility of a Forward-Deployed Engineer (FDE)?",
    options: [
      "Writing generic textbooks about AI",
      "Working directly with customers to implement and customize the core AI solution to their live environments",
      "Deploying physical servers inside client datacenters",
      "Designing user logos for SaaS companies"
    ],
    correct: 1,
    explanation: "FDE actual client site par ya closely client ke saath milkar core AI templates aur modules ko adapt aur implement karta hai."
  },
  {
    question: "In the complete AI Agent Factory Ecosystem, what is at the absolute bottom layer that receives value from AI Workers?",
    options: [
      "The canonical book",
      "The customer's actual business",
      "The Zia Tutor AI interface",
      "The Model Context Protocol (MCP) server"
    ],
    correct: 2,
    explanation: "Ecosystem ki complete chain Canonical Book se start hokar pure operational stack ke baad end-user Business (Customer Business) ko support aur automated value provide karti hai."
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
    title: "Station 01 — The Two Problems",
    shortTitle: "01 — The Two Problems",
    explanation: "Two major challenges define the current AI landscape: Problem A - AI is automating routine coding, making standard developer services cheaper and highly crowded. Problem B - Companies invest heavily in generic AI pilots, but most projects fail to deliver measurable business returns because the AI isn't integrated into actual company workflows.",
    explanationUrdu: "Aaj ke AI dour mein do bare masle hain: Masla A: AI standard coding khud kar leta hai, jis se simple coders ki market value kam ho rahi hai. Masla B: Companies AI tools to khareedti hain par unka business workflows se direct link nahi hota, jis se koi measurable return nahi milta. In dono problems ke milaap se 'Deployment Gap' banta hai.",
    analogy: "Think of a factory. They purchased a highly advanced robotic arm (Problem B - Pilot tool), but it sits in the warehouse because none of the existing assembly lines fit its plug. Meanwhile, the manual welders are worried because the robot is fast (Problem A).",
    example: "A company gets a ChatGPT enterprise subscription, but employees only use it to draft letters instead of using it to automatically audit accounts. The company sees zero profit change.",
    remember: "Developer losing routine work + Company failing in AI pilots = The Deployment Gap.",
    whyMatters: "To earn money, you shouldn't just offer coding or generic prompts. You must solve the deployment problem for companies.",
    diagramType: "two_problems",
    miniQuestion: {
      question: "What is Problem B in the AI era?",
      options: [
        "Internet speeds are too slow for LLM models",
        "Companies invest in AI pilots but fail to produce measurable business results due to poor workflow integration",
        "All AI models are written in Python only",
        "Developers refuse to learn how to write prompt rules"
      ],
      correct: 1,
      explanation: "Exactly! Most corporate AI pilots fail because they are not connected to actual workflows and rules."
    }
  },
  {
    id: 2,
    title: "Station 02 — The Deployment Gap",
    shortTitle: "02 — Deployment Gap",
    explanation: "A raw AI model alone is not a business solution. The 'Deployment Gap' is the distance between AI capability (raw APIs) and actual business value. Value is unlocked only when the AI model connects directly with company data, compliance rules, approval systems, and existing software workflows.",
    explanationUrdu: "AI model khud se koi business value generate nahi karta. AI capability (jaise OpenAI API) aur actual business outcome ke beech jo faasla hota hai, use 'Deployment Gap' kehte hain. Jab tak AI company rules, databases aur approvals ke sath connect nahi hota, woh sirf ek demo rehta hai.",
    analogy: "A high-speed sports car engine sitting on a wooden stand. The engine is powerful (AI capability), but without wheels, a steering system, a fuel tank, and a driver (workflows & data), it cannot travel anywhere.",
    example: "A company wants to process incoming vendor invoices. The raw AI model can read the text, but the complete business outcome requires checking if the pricing matches the original purchase order and saving the status in the ERP system.",
    remember: "AI capability + Context + Rules + Existing Tools = Business Result.",
    whyMatters: "Bridge the gap, and you get paid. Ignore the gap, and you are just another developer offering generic code.",
    diagramType: "deployment_gap",
    miniQuestion: {
      question: "Which formula represents a complete business result in the FDE roadmap?",
      options: [
        "AI Model + Prompt = Business Result",
        "AI Model + Company Data + Company Rules + Real Workflow = Business Result",
        "AI model + High Subscription Fee = Business Result",
        "Developer + Chatbot = Business Result"
      ],
      correct: 1,
      explanation: "Yes! A true business solution requires data, rules, workflows, and integrations."
    }
  },
  {
    id: 3,
    title: "Station 03 — The FDE",
    shortTitle: "03 — The FDE",
    explanation: "A Forward-Deployed Engineer (FDE) is a technical expert who works directly inside the client's business environment. Their role is to observe real human workflows, map the data, integrate the system of records, and build AI workers that produce concrete, measurable business results.",
    explanationUrdu: "FDE (Forward-Deployed Engineer) wo expert hota hai jo client ki company ke andar jaa kar unka real workflow dekhta hai, data ko samajhta hai aur standard AI engines ko customer database ke sath safely connect karke outcomes deliver karta hai.",
    analogy: "A generic architect writes blueprints in an office (Traditional Developer). A site engineer stands in the muddy ground, checking the local bricks, water levels, and adjusting the structure to stand correctly on the customer's soil (FDE).",
    example: "A traditional coder writes an invoicing script on their own computer. An FDE joins the accounting firm's Slack channels, studies how their accountant validates PDFs manually, hooks the API to their local database via MCP, and runs checks live.",
    remember: "FDEs make software work inside the customer's actual environment.",
    whyMatters: "Companies do not want more software files. They want someone to implement and automate their workflows.",
    diagramType: "fde_comparison",
    miniQuestion: {
      question: "How does an FDE's goal differ from a traditional software developer?",
      options: [
        "FDEs only write code in Python, while developers use JavaScript",
        "Traditional developers focus on code deliverables; FDEs focus on deploying AI to achieve a real business outcome in the client's environment",
        "FDEs work for AI cloud hosts only",
        "Traditional developers work on-site, but FDEs always work remotely"
      ],
      correct: 1,
      explanation: "Perfect! FDEs focus on the actual, working business outcome in the client's operational environment."
    }
  },
  {
    id: 4,
    title: "Station 04 — Vendor-Neutral Vertical FDE",
    shortTitle: "04 — Vendor-Neutral",
    explanation: "This is the ultimate professional positioning: 'Vendor-Neutral' means you do not lock clients into one AI model (you build systems that can switch between OpenAI, Claude, Gemini, or open-source runtimes). 'Vertical' means specializing in a specific profession + jurisdiction (e.g. Tax practice in Pakistan).",
    explanationUrdu: "Vendor-Neutral Vertical FDE ka matlab hai do cheezein: 1. Vendor-Neutral: Apka system kisi ek AI provider (e.g. OpenAI) par bound na ho, balkay different model connections (Gemini, Claude, Llama) use kar sake. 2. Vertical: Ap kisi aik specific field + local country (jaise Pakistan Customs clearance) ke workflow expert hoon.",
    analogy: "A chef who can cook on any stove (gas, electric, firewood - Vendor-Neutral) specializing exclusively in baking premium wedding cakes in Lahore (Vertical).",
    example: "Instead of being a generic 'AI developer', you position yourself as a 'Vendor-Neutral AI Architect for Customs Brokerage firms in Karachi'.",
    remember: "Vendor-Neutral (flexible AI models) + Vertical (specific profession & country) = High Value.",
    whyMatters: "Broad niches like 'Accounting AI' are too crowded. Specific verticals have little competition and massive margins.",
    diagramType: "vendor_neutral_vertical",
    miniQuestion: {
      question: "Why should you choose a specific Vertical (e.g., Tax practice in a specific country) instead of general AI consulting?",
      options: [
        "General AI consulting is illegal",
        "Specific verticals have less competition, clear rules, and client pain points that generic AI cannot solve without customization",
        "All AI models are blocked in general consulting",
        "Specific verticals do not require databases"
      ],
      correct: 1,
      explanation: "Correct! Highly focused verticals allow you to build deep, irreplaceable domain systems."
    }
  },
  {
    id: 5,
    title: "Station 05 — What You Own",
    shortTitle: "05 — What You Own",
    explanation: "You cannot own the base AI models (they belong to tech giants). You cannot own cloud servers (rented from AWS/Azure). What you can actually own as an asset is 'Governed Professional Knowledge'—the structured, verified, rules-based vertical data (System of Record) that guides the AI on how to perform a specialized job in a specific country.",
    explanationUrdu: "Aap AI models (ChatGPT, Gemini) ke owner nahi ban sakte, na hi cloud servers apke hain. Ap jis asset ke owner ban sakte hain, wo hai 'Governed Professional Knowledge' (Rules, legal workflow databases, edge cases aur local policies) jo AI workers ko feed kiye jate hain.",
    analogy: "A lawyer owns their law library and deep knowledge of court procedures. The courtroom and physical chairs belong to the state, but the lawyer's knowledge is their ownable asset.",
    example: "By partnering with an accounting expert, you write down every local tax rule, exception, and approval template into a structured SQL/JSON schema. That schema is your ownable intellectual property.",
    remember: "You own the governed vertical rules database; you rent the AI compute models.",
    whyMatters: "Compute will become a commodity. Governed context and vertical rules will remain highly valuable assets.",
    diagramType: "what_you_own",
    miniQuestion: {
      question: "In the agentic AI era, what is an ownable asset for an AI Engineer?",
      options: [
        "The physical servers of OpenAI",
        "The core LLM model weights",
        "Governed Professional Knowledge (custom schemas, workflows, and rules)",
        "The web browser program"
      ],
      correct: 2,
      explanation: "Yes! Governed professional vertical knowledge is the key asset you can own."
    }
  },
  {
    id: 6,
    title: "Station 06 — Choose Your Vertical",
    shortTitle: "06 — Choose Vertical",
    explanation: "Selecting the right vertical requires validating it through five key questions: 1) Can you access a senior practitioner? 2) Is it governed by public law (not secret licenses)? 3) Can you fund 6-9 months of development? 4) Are the rules poorly documented in English? 5) Can you legally receive cross-border payments? If you lack a domain partner, start with service work (Service Ladder) first.",
    explanationUrdu: "Sahi vertical choose karne ke liye 5 sawaal validate karein: Kya apke paas senior practitioner access hai? Kya rules public law par hain? Kya 6-9 months ka back up hai? Kya rules english mein clear nahi hain? Aur payment validation. Agar expert nahi hai, to Service Ladder se start karein.",
    analogy: "Choosing a crop to plant. You don't just pick a seed because it sounds nice; you check if you have water supply, suitable soil, local weather data, and a farmer who knows how to grow it.",
    example: "Choosing 'Import/Export Customs compliance rules in Karachi' is a great vertical because the local rules are complicated, poorly documented in standard English online, and need a local clearing agent expert to check.",
    remember: "No expert access = Do NOT build a Vertical. Start with Service work.",
    whyMatters: "Building a vertical without domain experts leads to AI tools that hallucinate and fail industry compliance tests.",
    diagramType: "vertical_selection",
    miniQuestion: {
      question: "What is recommended if you do not have direct access to a Senior Domain Practitioner for a vertical?",
      options: [
        "Invent the rules using generic ChatGPT prompts",
        "Start with the Service Ladder (building direct client scripts/SoRs) to gain trust and access",
        "Quit the AI field entirely",
        "Deploy the AI immediately without testing"
      ],
      correct: 1,
      explanation: "Exactly! Starting with the Service Ladder builds client trust, funds your learning, and exposes you to experts."
    }
  },
  {
    id: 7,
    title: "Station 07 — Design & Build the Vertical SoR",
    shortTitle: "07 — Build SoR",
    explanation: "Designing the Vertical System of Record means indexing industry rules, terminology, and workflows into a clean, searchable format. You must analyze the old workflow and choose what to: KEEP (legally required files), REDESIGN (inefficient human steps), and DELETE (obsolete manual steps). This database serves humans via a web app and AI via MCP.",
    explanationUrdu: "Vertical SoR design karne ka matlab hai industry rules ko structured format (JSON/Database) mein index karna. Purane manual workflow ko analyse karke decide karein: Kya KEEP karna hai, kya REDESIGN karna hai aur kya DELETE karna hai. Ye SoR standard database banata hai jo humans aur AI dono read karte hain.",
    analogy: "Updating an old cooking recipe binder. You keep the core ingredients (KEEP), change manual mixing to electric blending (REDESIGN), and throw away the step where you had to fetch water from a well (DELETE).",
    example: "An accounting SoR holds GAAP standards. Humans view them through a clean web dashboard, while the AI Agent reads them automatically through an MCP connector.",
    remember: "One database source of truth, two readers: Human (Website) + AI (MCP connection).",
    whyMatters: "A structured SoR keeps the AI's output accurate, complying with legal guidelines.",
    diagramType: "build_sor_pipeline",
    miniQuestion: {
      question: "What does 'One source, two readers' refer to in the Vertical SoR architecture?",
      options: [
        "A database that supports two human admins simultaneously",
        "A structured database that serves humans via a Web Interface and AI Agents via Model Context Protocol (MCP)",
        "An AI model that can read both PDF and Excel formats",
        "A backup database mirror system"
      ],
      correct: 1,
      explanation: "Yes! The same canonical database serves humans through a GUI and AI agents via MCP."
    }
  },
  {
    id: 8,
    title: "Station 08 — System of Context",
    shortTitle: "08 — System of Context",
    explanation: "While the System of Record contains the permanent, official rules, the 'System of Context' is a temporary collection of live data needed to execute a specific task right now. For an invoice approval task, the System of Context pulls the invoice file, purchase order history, vendor details, and ERP status to guide the AI Worker.",
    explanationUrdu: "System of Record permanent rules/truth save karta hai, jabke 'System of Context' wo temporary data aur history hai jo kisi specific task ko run karne ke liye use hoti hai (jaise current invoice, client history, order forms). Context SoR ko replace nahi karta, use support karta hai.",
    analogy: "A judge's court: The law book is the System of Record (permanent truth). The active case file containing local witness testimonies, evidence, and suspect records is the System of Context (temporary task data).",
    example: "The AI Accountant needs to check an invoice. The System of Record provides the tax guidelines (17% tax rule). The System of Context provides the vendor's invoice PDF and the purchase order contract to check if they match.",
    remember: "System of Record = What is officially true. System of Context = What this task needs right now.",
    whyMatters: "Providing the correct context prevents AI from hallucinating or using old client data during tasks.",
    diagramType: "system_of_context",
    miniQuestion: {
      question: "Does the System of Context replace the System of Record?",
      options: [
        "Yes, context replaces all records",
        "No, they work together; SoR contains official rules, while System of Context supplies live task details",
        "Yes, but only in dark mode layouts",
        "No, because context is a type of base AI model"
      ],
      correct: 1,
      explanation: "Correct! They complement each other: SoR handles rules, Context handles current case data."
    }
  },
  {
    id: 9,
    title: "Station 09 — Go to Work & Get Paid",
    shortTitle: "09 — Go to Work",
    explanation: "Once you build working slices and vertical systems, you go to work via three routes: 1) Job: Join enterprises as an FDE with a premium salary. 2) Freelance: Build custom AI workers and systems for clients, securing upfront project fees and monthly retainers. 3) Startup: Package your vertical rules and AI workers into a subscription product (SaaS) and sell domain-specific licenses.",
    explanationUrdu: "Apna system complete karne ke baad earn karne ke 3 doors hain: Door 1 (Job): Enterprise companies mein high salary FDE lagna. Door 2 (Freelance): Clients ke liye SoR aur AI Workers banana aur monthly retainers lena. Door 3 (Startup): Apne specialized vertical tools ko recurring SaaS models me convert karna.",
    analogy: "You have built an automated crop harvesting machine. You can work as a machinery expert for a big farm (Job), rent the machine to local farms for daily fees (Freelance), or manufacture and sell the machines to the market (Startup).",
    example: "A freelancer builds a customs clearance bot for one logistics client, then charges them $500/month as a retainer to keep the connector updated with local port regulatory changes.",
    remember: "Deploy real value → Charge for outcomes → Establish monthly retainers.",
    whyMatters: "Building first and selling working proof (slices) is the only way to stand out in a noisy market.",
    diagramType: "go_to_work_doors",
    miniQuestion: {
      question: "Which of the following is NOT one of the three earning routes defined in the FDE roadmap?",
      options: [
        "Job: Salary + Enterprise experience",
        "Freelance: Projects + Monthly retainers",
        "Cryptocurrency trading and speculative coin flips",
        "Startup: Own a Vertical + Domain products"
      ],
      correct: 2,
      explanation: "Yes! Crypto speculation is not part of this professional FDE roadmap."
    }
  },
  {
    id: 10,
    title: "Service Ladder",
    shortTitle: "Service Ladder",
    explanation: "The Service Ladder is the easiest starting route. You do NOT need your own vertical or custom licensed expert data first. You begin by offering manual or script-based services (like configuring database schemas, cleaning legacy records, or building simple API workflows). You charge direct service fees and gradually upgrade the client to monthly retainer workers.",
    explanationUrdu: "Service Ladder earning ka pehla seedhi hai. Isme apko shuru me apna vertical ya expert nahi chahiye hota. Ap standard tasks perform karte hain jaise database set karna, clean rules coding aur connectors design karna, aur outcomes par retainers built karte hain.",
    analogy: "Instead of opening a high-end restaurant, you work as a private catering chef, preparing specific meals for clients while funding your future restaurant goals.",
    example: "You clean and structure 500 PDF manuals for a client into a JSON schema, saving them weeks of manual catalog indexing.",
    remember: "Service Ladder = Deliver fast value without needing complex custom verticals first.",
    whyMatters: "It funds your learning journey and builds client trust, giving you access to real-world experts.",
    diagramType: "service_ladder_flow",
    miniQuestion: {
      question: "What is a main advantage of starting with the Service Ladder?",
      options: [
        "It requires a highly expensive AI license key",
        "It lets you earn sooner and gain client trust without needing your own proprietary vertical first",
        "It removes the need for databases",
        "It guarantees that AI models will run 100% offline"
      ],
      correct: 1,
      explanation: "Exactly! The Service Ladder allows you to enter the market and earn immediate income with simpler integrations."
    }
  },
  {
    id: 11,
    title: "Vertical Ladder",
    shortTitle: "Vertical Ladder",
    explanation: "The Vertical Ladder is the long-term asset ownership path. You partner with a domain expert, define a highly specific profession + jurisdiction, structure a Vertical System of Record, build customized AI Workers, and package them as licensed software products (SaaS) or structured FDE consulting agreements.",
    explanationUrdu: "Vertical Ladder lamba par owned asset ka rasta hai. Ap senior domain expert ke sath milkar specialized vertical system design karte hain, custom worker bots customize karte hain aur software system deploy karke recurring license feed scale karte hain.",
    analogy: "Transitioning from renting out manual labor (Services) to owning the factory that sells automated manufacturing units globally (Product Ownership).",
    example: "Creating a dedicated compliance platform for dental clinics in Pakistan that handles automated medical filings and patient record audits.",
    remember: "Service Ladder = Earn money now. Vertical Ladder = Build owned assets for the future.",
    whyMatters: "True scale and leverage in the AI era come from owning the vertical systems and datasets, not just writing hours of code.",
    diagramType: "vertical_ladder_flow",
    miniQuestion: {
      question: "Which path focuses on building owned proprietary software assets rather than quick services?",
      options: [
        "The URL paste method",
        "The Service Ladder",
        "The Vertical Ladder",
        "The Generic prompting model"
      ],
      correct: 2,
      explanation: "Yes! The Vertical Ladder focuses on long-term ownership of vertical AI assets."
    }
  },
  {
    id: 12,
    title: "The 80/20 Customization Rule",
    shortTitle: "80/20 Customization",
    explanation: "When building FDE architectures, 80% of your AI Worker code is a common, reusable core framework (like database connectors, standard NLP parsers, and chat structures). Only 20% is customized for a specific customer (their pricing databases, custom approval pipelines, and local credentials).",
    explanationUrdu: "FDE system building mein 80/20 rule boht helpful hai. Apka system 80% reusable templates par base karta hai jo common hain. Baaqi 20% har customer ke mutabiq customise hota hai (pricing, CRM details). Is se product speed barh jati hai.",
    analogy: "A modular wardrobe. 80% is the standard frame built in the factory. 20% is the customized doors chosen by the homeowner.",
    example: "Your AI Invoice worker has standard PDF reading logic (80%). When implementing for a client, you hook it to their custom SAP database keys (20%).",
    remember: "Build once, customize slightly, deploy quickly.",
    whyMatters: "If you rebuild 100% of the AI from scratch for every customer, your business will scale too slowly to remain profitable.",
    diagramType: "eighty_twenty_paid",
    miniQuestion: {
      question: "Under the 80/20 rule, why is a reusable core important?",
      options: [
        "It is required by OpenAI's licensing terms",
        "It prevents you from writing code on your own computer",
        "It allows fast scaling and rapid custom client deployments without starting from scratch",
        "It ensures AI works in only one language"
      ],
      correct: 2,
      explanation: "Yes! It allows you to rapidly onboard and customize workflows for new clients."
    }
  },
  {
    id: 13,
    title: "The 10-80-10 Workflow Rule",
    shortTitle: "10-80-10 Workflow",
    explanation: "The 10-80-10 Rule defines human-AI collaboration: Humans perform the first 10% (outlining requirements, variables, and parameters). The AI Agent handles the middle 80% of bulk execution (generating code, writing text, sorting tables). The Human checks, tests, and signs off on the final 10% (quality review & deployment).",
    explanationUrdu: "10-80-10 rule responsibility ka division hai: Pehla 10% human specification likhta hai. Darmiyan ka 80% AI bulk coding ya execution karta hai. Aakhri 10% human tests aur feedback checks kar ke final approve karta hai. Ye 80/20 rule se bilkul alag hai.",
    analogy: "An editor giving a writer an outline (10%). The writer drafts the book (80%). The editor checks the grammar, refines the style, and prints the book (10%).",
    example: "You feed a database schema definition to Zia Developer (10%). The developer writes 500 lines of typescript backend logic (80%). You review and run compile tests (10%).",
    remember: "Humans specs 10% ➔ AI builds 80% ➔ Humans approve 10%.",
    whyMatters: "It gives you maximum scaling speed while maintaining 100% human quality control.",
    diagramType: "ten_eighty_ten_paid",
    miniQuestion: {
      question: "Which of the following is true about the 10-80-10 rule?",
      options: [
        "It is exactly the same as the 80/20 rule",
        "It defines human-AI work division: 10% specs, 80% AI execution, 10% human audit",
        "It applies only to cloud server network pricing",
        "It recommends that humans perform 100% of the software writing"
      ],
      correct: 1,
      explanation: "Exactly! It governs the work division between humans and AI."
    }
  },
  {
    id: 14,
    title: "Contract of Success",
    shortTitle: "Contract of Success",
    explanation: "Do not sell your AI services based on hours ('I will code for 30 hours'). Instead, sell measurable outcomes. The Contract of Success defines three things: 1) Baseline: Where the client is today (e.g. 5 hours to process forms). 2) Target: What success looks like (e.g. 30 minutes). 3) Acceptance: How it is verified (e.g. 98% accuracy log).",
    explanationUrdu: "Insaan ko hourly rate par code nahi bechna chahiye, balkay outcomes sell karne chahiye. Success contract 3 cheezon se banta hai: Baseline (aaj kidhar khare hain), Target (kahan pohanchna hai), aur Acceptance Criteria (validation kaise hogi).",
    analogy: "Hiring a weight loss coach. You don't pay them for the whistles they blow; you pay them because you drop from 90kg (Baseline) to 80kg (Target) using a scale (Acceptance).",
    example: "A client company pays you $2000 because invoice processing time drops from 4 hours to 10 minutes with zero data errors.",
    remember: "Define baseline, target, and measurement to avoid endless unpaid requirement changes.",
    whyMatters: "Outcome-based pricing protects your margins and aligns your code directly with client profit.",
    diagramType: "contract_of_success_visual",
    miniQuestion: {
      question: "What are the three pillars of a Contract of Success?",
      options: [
        "Code, Cloud, and Credentials",
        "Baseline, Target, and Acceptance Criteria",
        "Salary, Bonus, and Health insurance",
        "Prompt, Chat, and Result"
      ],
      correct: 1,
      explanation: "Yes! Baseline, Target, and Acceptance Criteria form the bedrock of outcome-based agreements."
    }
  },
  {
    id: 15,
    title: "Retainers",
    shortTitle: "Retainers",
    explanation: "Projects are one-off payments. Retainers are recurring monthly fees. Once an AI worker is deployed, it needs continuous monitoring, evaluation, context checks, and updates as API models change. Charge a monthly retainer to manage these operations.",
    explanationUrdu: "Project ek baar ki payment hoti hai jabke Retainer har month milne wali fee hai. AI system deploy hone ke baad rules updates, prompt fine-tuning aur logs checks mangta hai. In services ke liye ap client se monthly recurring fee lete hain.",
    analogy: "A home security system. You pay once to install the cameras (Project), but pay a monthly fee to the security team to monitor the feeds (Retainer).",
    example: "Charging a medical clinic $300/month to monitor their automated file sorting system and update prompt templates when national healthcare policies change.",
    remember: "A project ends; a retainer continues.",
    whyMatters: "Retainers create highly stable, predictable cashflow for FDE professionals.",
    diagramType: "retainer_lifecycle",
    miniQuestion: {
      question: "What service justifies charging a monthly retainer in AI deployments?",
      options: [
        "Simply hosting the website on a personal computer",
        "Continuous monitoring, prompt adjustments, compliance updates, and workflow maintenance",
        "Translating client texts manually",
        "Buying more API key credits on behalf of the client"
      ],
      correct: 1,
      explanation: "Spot on! Ongoing maintenance and optimization justify a recurring retainer."
    }
  },
  {
    id: 16,
    title: "Build First, Sell Second",
    shortTitle: "Build First",
    explanation: "Do not pitch generic promises ('I can build any AI'). Clients receive hundreds of spam messages. Instead, build a tiny working prototype (a slice), test it, document the results, and show concrete proof. Working proof stands out instantly.",
    explanationUrdu: "Sirf promises ya CV se clients convince nahi hote. Pehle ek choti, working prototype (working slice) khud se banayein, use check karein, aur client ko live result ya recording ke sath proof dikhayein. Working proof bechna aasan hai.",
    analogy: "A baker placing a small, delicious cake slice on the counter for you to taste rather than talking about their premium flour.",
    example: "Instead of emailing a shipping company saying 'I know AI agents', you build a mini-bot that reads a dummy bill of lading and extracts ports. You send a 60-second video of it working.",
    remember: "Proof of a working slice is stronger than any abstract promise.",
    whyMatters: "It lowers the client's risk perception, making them willing to pay you.",
    diagramType: "build_first_flow",
    miniQuestion: {
      question: "What is the core idea behind 'Build First, Sell Second'?",
      options: [
        "Charge the client before starting coding research",
        "Create working proof or a demo slice to show actual value before selling",
        "Buy server nodes in bulk to run multiple applications",
        "Force the client to learn programming languages"
      ],
      correct: 1,
      explanation: "Yes! Showing concrete working proof makes selling simple and low-friction."
    }
  },
  {
    id: 17,
    title: "The Slice Methodology",
    shortTitle: "Slice Methodology",
    explanation: "A 'Slice' is one single, complete professional outcome handled from end-to-end. Rather than promising a giant, unfinished 'Complete Accounting AI System', you build a tight, flawless 'Invoice Verification Worker'. A working slice beats 50 incomplete features.",
    explanationUrdu: "Slice ka matlab hai aik chota aur mukammal outcome jo end-to-end sahi kaam kare. Bare features ke daaway karne ke bajaye, aik niche task (jaise PDF data extraction worker) flawless design karein. Ek aam chatbot se slice behtar hai.",
    analogy: "A single complete cupcake that is delicious and ready to eat, versus a giant, underbaked, raw wedding cake skeleton.",
    example: "Instead of trying to automate the whole HR department, you build a single worker that does 'Generate onboarding contracts from candidate names'.",
    remember: "1 working slice >> 50 half-baked features.",
    whyMatters: "It reduces development risks, controls bugs, and delivers quick wins.",
    diagramType: "slice_concept",
    miniQuestion: {
      question: "What is a 'Slice'?",
      options: [
        "A database backup table copy",
        "One thin, complete professional outcome covered from end-to-end",
        "A custom python package",
        "An AI model prompt template"
      ],
      correct: 1,
      explanation: "Correct! A slice is a tight, complete, end-to-end automated outcome."
    }
  },
  {
    id: 18,
    title: "Common Failure Modes",
    shortTitle: "Common Failures",
    explanation: "FDEs must avoid 8 common traps: 1) Endless CV polishing (instead of building projects). 2) Picking a vertical without an expert practitioner. 3) Building before validating market demand. 4) Building a giant product instead of a slice. 5) Doing a demo without real data testing. 6) Selling hours instead of outcomes. 7) Choosing a vertical that is too broad. 8) Building context before establishing the System of Record.",
    explanationUrdu: "FDEs ko in 8 baray mistakes se bachna chahiye: 1. CV polish karte rehna, 2. Expert practitioner ke bagair kam shuru karna, 3. Market validate na karna, 4. Giant product banana, 5. Saste demos dikhana, 6. Hours sell karna, 7. Boht broad niche chun'na, aur 8. Context pehle banana SoR ke bagair.",
    analogy: "A sailor who spends all their time polishing the boat anchor, but leaves the dock without checking if they have maps, sails, or fresh water.",
    example: "An engineer builds a massive 'Corporate Legal AI tool' without talking to a single lawyer. When launched, lawyers refuse to buy it because the tool violates basic evidentiary rules.",
    remember: "Validate market, consult experts, start with slices, and sell outcomes.",
    whyMatters: "Knowing common pitfalls protects you from wasting months of time on code nobody will pay for.",
    diagramType: "failure_modes_grid",
    miniQuestion: {
      question: "Which of the following is a common failure mode in AI agent engineering?",
      options: [
        "Writing code in TypeScript instead of pure Python",
        "Building a massive, generic product without partnering with a domain expert or validating market demand",
        "Using local databases instead of cloud networks",
        "Charging a monthly retainer to manage rules"
      ],
      correct: 1,
      explanation: "Yes! Building massive, generic systems without validation is a major cause of project failures."
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
    example: "Structuring a client's old PDF documentation database before building their AI search bots."
  },
  {
    term: "Vertical Ladder",
    definition: "The path of building, scaling, and owning a highly specialized vertical AI software startup.",
    example: "Creating a specialized software asset for legal audit firms in your country."
  },
  {
    term: "Contract of Success",
    definition: "An outcome-based sales agreement defined by baseline, targets, and success measurements.",
    example: "Client pays once billing processing speed drops from 5 hours to 30 minutes with 98% accuracy."
  },
  {
    term: "Retainer",
    definition: "Ongoing monthly fee charged to monitor, update, evaluate, and maintain AI workers.",
    example: "Charging $400/month to keep checking and adapting AI prompts as local laws update."
  },
  {
    term: "Expert Twin",
    definition: "An AI worker trained on the governed knowledge and professional judgment of a senior human expert.",
    example: "An automated underwriting agent matching the exact guidelines of a senior risk officer."
  }
];

export const course2QuizQuestions = [
  {
    question: "What is the 'Deployment Gap' in the context of the Agentic Era?",
    options: [
      "The distance between two servers in a datacenter",
      "The distance between a raw AI capability (API) and an actual, working business result",
      "A bug in the local Git code commit system",
      "The price difference between OpenAI and Claude APIs"
    ],
    correct: 1,
    explanation: "Deployment Gap capability aur outcome ke darmiyan ka faasla hai. AI model hona kafi nahi, use company data aur rules ke sath setup karna parta hai."
  },
  {
    question: "What is the primary focus of a Forward-Deployed Engineer (FDE)?",
    options: [
      "Writing generic blogs about artificial intelligence history",
      "Deploying AI systems directly into the client's real data environment to achieve business results",
      "Selling cloud storage subscriptions to managers",
      "Designing corporate logos for startups"
    ],
    correct: 1,
    explanation: "FDE actual client system aur workflows ko study aur integrate karta hai taake real business problem solve ho."
  },
  {
    question: "What does 'Vendor-Neutral' mean in FDE architectures?",
    options: [
      "The developer does not charge any service fees",
      "The system is not locked to one AI provider and can swap models (OpenAI, Claude, Gemini, local) easily",
      "The client does not use any cloud servers",
      "The code is written without using variables"
    ],
    correct: 1,
    explanation: "Vendor neutrality ka matlab hai flexible client system design karna jo market dynamics ke mutabiq best LLM api par switch kar sake."
  },
  {
    question: "Which of the following is a specific 'Vertical'?",
    options: [
      "Writing python scripts for websites",
      "Generative AI consulting",
      "Customs clearance compliance brokerage in Pakistan",
      "Cloud hosting configurations"
    ],
    correct: 2,
    explanation: "Vertical hamesha aik specific profession + local country/jurisdiction ka milap hota hai (jaise customs clearing in Pakistan)."
  },
  {
    question: "What is the ownable intellectual asset in the agentic AI business model?",
    options: [
      "The raw public weights of LLM models",
      "The user's computer monitor hardware",
      "Governed Professional Knowledge (custom schemas, rules-books, and indexed workflows)",
      "The generic OpenAI developers documentation page"
    ],
    correct: 2,
    explanation: "Base model sab ke paas same hain. Original asset apka structured, authoritative vertical rules database hota hai."
  },
  {
    question: "What should you do if you do not have direct access to a Senior Domain Expert for a vertical?",
    options: [
      "Guess the professional rules and release the product",
      "Start with the Service Ladder to deliver basic services and build practitioner connections",
      "Wait for AI models to become 100% accurate",
      "Use generic search queries to draft tax codes"
    ],
    correct: 1,
    explanation: "Domain expert na hone ki surat mein Service Ladder (services build process) behtareen entry point hai."
  },
  {
    question: "What is a key difference between the System of Record (SoR) and the System of Context?",
    options: [
      "System of Record contains the static HTML templates only",
      "SoR holds the official, permanent rules of truth; System of Context supplies the temporary case data for a specific task",
      "System of Context is a database backup, while SoR is active",
      "There is no difference in architecture"
    ],
    correct: 1,
    explanation: "SoR rulebook hai jo permanent hai, jabke Context case file hai jo temporary hai."
  },
  {
    question: "What is a 'Slice' in FDE product methodology?",
    options: [
      "A part of a physical hard drive partitioning",
      "One complete, end-to-end professional outcome covered fully (e.g. Invoice verification worker)",
      "A quick presentation slide deck for client meetings",
      "A snippet of code copy-pasted from StackOverflow"
    ],
    correct: 1,
    explanation: "Slice ka matlab hai complete product ke bajaye ek specific problem/outcome (jaise statement checking) ko pehle fully handle karna."
  },
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
    question: "How is the Contract of Success defined?",
    options: [
      "By charging a high daily consulting hour rate",
      "By setting baseline metrics, target outcomes, and explicit verification criteria",
      "By signing a secret vendor agreement",
      "By guaranteeing that AI will never make mistakes"
    ],
    correct: 1,
    explanation: "Contract of Success outcome-based pricing ko check karta hai (Baseline status vs Target status vs verification method)."
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
    explanation: "Retainer continuous monitoring aur prompt updates/maintenance ke liye charge hone wali monthly fee hai."
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
    question: "Under the 10-80-10 rule, who is responsible for the final 10% review and approval?",
    options: [
      "The AI Agent system",
      "The human expert/operator",
      "The database manager server",
      "The MCP gateway host"
    ],
    correct: 1,
    explanation: "Final quality checks aur approval human expert (operator) manually perform karta hai."
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
    question: "What is the ultimate purpose of outcome-based selling?",
    options: [
      "To charge the client based on hours spent writing code lines",
      "To align compensation directly with the actual value/speed delivered (e.g. time saved)",
      "To hide the database structure from clients",
      "To avoid writing tests"
    ],
    correct: 1,
    explanation: "Outcome selling hourly model se behtar hai kaikyuki ye AI ki speed aur efficiency leverage karti hai."
  },
  {
    question: "What is a Monthly Retainer's primary business value?",
    options: [
      "It makes the client sign a long-term loan agreement",
      "It provides predictable, recurring revenue for maintaining and checking the AI worker",
      "It forces the client to use only your database",
      "It removes the need for FDEs on-site"
    ],
    correct: 1,
    explanation: "Retainers provide recurring revenue and keep the AI updated against prompt degradation."
  },
  {
    question: "Which of the following is a symptom of vendor lock-in?",
    options: [
      "Using local open-source models exclusively",
      "Being unable to switch away from one provider due to proprietary API bindings and custom configurations",
      "Writing documentation in Markdown files",
      "Paying tax on cross-border transactions"
    ],
    correct: 1,
    explanation: "Vendor lock-in means proprietary APIs bind you to one vendor's platform."
  },
  {
    question: "What does FDE stand for?",
    options: [
      "Front Database Engine",
      "Forward-Deployed Engineer",
      "Free Developer Edition",
      "File Deployment Environment"
    ],
    correct: 1,
    explanation: "FDE stands for Forward-Deployed Engineer."
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
  },
  {
    question: "What is 'Build First, Sell Second'?",
    options: [
      "Selling a product blueprint before writing any code",
      "Building and validating a working model (slice) before pitching to clients",
      "Buying server storage nodes before hiring coders",
      "Asking the client for funding before showing prototypes"
    ],
    correct: 1,
    explanation: "Pehle working slice build aur test karein, aur phir client ko live results dikha kar pitch karein."
  }
];
