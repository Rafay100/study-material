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

export const course3Lessons: Lesson[] = [
  {
    id: 1,
    title: "Containers, Not Steps",
    shortTitle: "01 — Containers, Not Steps",
    explanation: "Many beginners think Prompt, Context, Harness, and Loop are sequential steps that happen one after the other. This is wrong. They are nested containers. The Prompt is inside the Context. The Context exists inside a Harness. The Harness exists inside a Loop. You do not graduate from writing prompts; even the most advanced loops generate prompts at every model call.",
    explanationUrdu: "Boht se log samajhte hain ke Prompt, Context, Harness, aur Loop sequential steps hain (jaise seedhiyan). Ye ghalat hai. Ye nested containers hain (aik ke andar doosra container). Prompt hamesha Context ke andar hota hai, Context Harness ke andar, aur Harness Loop ke andar hota hai. Aap prompt se 'graduate' nahi hote; sab se advanced autonomous system bhi har step par prompts hi banata hai.",
    analogy: "A nested doll (Matryoshka). The smallest doll is the Prompt. It sits inside the Context doll. That sits inside the Harness doll. All of them sit inside the largest doll, the Loop.",
    example: "An AI coder agent running for 10 beats to write a program is in a Loop. In beat 3, it queries the model using a tool harness. That harness builds a context window (files + tool errors) and runs a specific prompt instructions template.",
    remember: "Loop ➔ Harness ➔ Context ➔ Prompt. They are nested, not sequential.",
    whyMatters: "If you think they are steps, you will try to replace prompts with loops. Instead, you must design loops that build better prompts.",
    diagramType: "nested_containers_c3",
    miniQuestion: {
      question: "Which model represents the correct relationship between the four layers?",
      options: [
        "Prompt → Context → Harness → Loop (sequential steps)",
        "Loop contains Harness, which contains Context, which contains Prompt (nested containers)",
        "Prompt is for beginners, Loop is for experts, and they never overlap",
        "They are four separate files that do not communicate"
      ],
      correct: 1,
      explanation: "Yes! They are nested containers: Loop > Harness > Context > Prompt."
    }
  },
  {
    id: 2,
    title: "Unit of Work Test",
    shortTitle: "02 — Unit of Work",
    explanation: "To understand any AI system or terminology, ask: 'What unit of work are they talking about?' 1) Prompt: Unit of work is one single model call. 2) Context: Unit of work is the model's active window during that call. 3) Harness: Unit of work is one beat (calling model, running tools, handling errors). 4) Loop: Unit of work is the whole run from start to completion.",
    explanationUrdu: "AI systems ko samajhne ke liye hamesha poochien: 'Kam ki unit (Unit of work) kya hai?' 1. Prompt: Aik single model call. 2. Context: Us call ke waqt active window ki limit. 3. Harness: Aik beat (model call + tool run + error catch). 4. Loop: Poora run shuru se khatam hone tak.",
    analogy: "A book writing process: A prompt is writing one sentence. Context is the notebook pages open in front of you. Harness is writing one chapter (outline, draft, grammar check). Loop is the entire process of finishing the book.",
    example: "If someone says 'the harness failed', they mean something broke during a single tool call or beat execution, not that the entire multi-run loop shut down.",
    remember: "Prompt = Call, Context = Window, Harness = Beat, Loop = Whole Run.",
    whyMatters: "Terminology varies across vendors. The Unit of Work test helps you bypass vendor jargon and see what actually changed.",
    diagramType: "unit_of_work_cards",
    miniQuestion: {
      question: "What is the unit of work for the Harness layer?",
      options: [
        "A single sentence prompt",
        "The entire database state",
        "One beat (running tools, handling errors, assembling data for one model action)",
        "The whole autonomous execution run"
      ],
      correct: 2,
      explanation: "Spot on! The Harness governs one beat of execution."
    }
  },
  {
    id: 3,
    title: "The Prompt Layer & Weakest Ingredient",
    shortTitle: "03 — Prompt Layer",
    explanation: "The Prompt is the specific message sent to the model. It contains roles, instructions, examples, and output formats. The 'weakest ingredient' principle states that you should diagnose what exactly is wrong before editing: if output shape is wrong, fix format rules; if tone is wrong, adjust audience instructions. Do not rewrite the whole prompt at once.",
    explanationUrdu: "Prompt wo message hai jo model ko bheja jata hai. Isme instructions, examples, aur formats hote hain. 'Weakest Ingredient' rule kehta hai ke jo cheez kharab hai sirf usey thik karein: agar format kharab hai to rules/examples update karein, agar tone kharab hai to instruction badlein. Poora prompt shuru se naya mat likhein.",
    analogy: "Cooking soup: If the soup is too sweet, you don't throw it all away and restart. You identify the extra sweet ingredient and balance it.",
    example: "Instead of changing a prompt from 'Analyze files' to 'You are an expert coder. Read these inputs and make a summary table.', just add a specific instruction: 'Output must be a 5-column markdown table.'",
    remember: "Identify the weakest ingredient in your prompt first.",
    whyMatters: "Prompts are easily overused because they are simple to edit, but overwriting them often breaks other working instructions.",
    diagramType: "weakest_ingredient_flow",
    miniQuestion: {
      question: "If an agent outputs correct data but in the wrong text format, what should you adjust?",
      options: [
        "Rewrite the entire agent instructions from scratch",
        "Add more files to the context window",
        "Target the specific formatting rules/examples in the prompt",
        "Change the loop heartbeat interval"
      ],
      correct: 2,
      explanation: "Correct! Target the format instruction in the prompt rather than changing everything."
    }
  },
  {
    id: 4,
    title: "The Context Layer & Limits",
    shortTitle: "04 — Context Layer",
    explanation: "Context is everything the model can see during one single generation call (e.g. system instructions, files, chat history, tool results). If data is not inside this active window, the model cannot use it as a fact. It might try to answer from training data, leading to hallucinations.",
    explanationUrdu: "Context wo sab cheezain hain jo model aik call ke waqt dekh sakta hai (chat history, rules, files, tool results). Agar koi detail is context window ke andar nahi hai, to model use sach ki tarah verify nahi kar sakta. Woh apni training memory se guess karega jo ke confident aur ghalat ho sakta hai.",
    analogy: "An open-book exam. You can only write answers using the pages currently open on your desk. If a page is missing, you have to guess from memory.",
    example: "An agent tries to verify customer pricing but the current catalog file is missing from the context. The model replies with last year's pricing because it was trained on older data.",
    remember: "No context = Guessing/hallucinating.",
    whyMatters: "Confident but incorrect answers are almost always context failures, not prompt errors.",
    diagramType: "context_window_anatomy",
    miniQuestion: {
      question: "If a model gives a confident but outdated answer about a client record, what is the most likely cause?",
      options: [
        "The model is too slow",
        "The correct current client record was not loaded into the context window",
        "The prompt role instructions were too friendly",
        "The loop encountered a network error"
      ],
      correct: 1,
      explanation: "Exactly! The information must be in the context window for the model to use it as a fact."
    }
  },
  {
    id: 5,
    title: "Context Curator: Order, Compress, Drop",
    shortTitle: "05 — Context Curator",
    explanation: "A 'Curator' is the code mechanism that decides what information enters the context window, in what order, and what gets compressed or removed. Since model context windows are limited and expensive, the curator has three critical jobs: Order (place key items at start/end), Compress (shorten logs), and Drop (discard irrelevant files).",
    explanationUrdu: "Curator wo code hota hai jo decide karta hai ke context window mein kya data jayega, kis sequence mein jayega, aur kya drop/delete hoga. Chunkay context space limited aur expensive hoti hai, isliye curator information ko (1) Order, (2) Compress, aur (3) Drop karta hai.",
    analogy: "A busy CEO's personal assistant. Out of 100 emails, they select the 5 most critical ones, highlight the key sentences, and place them on the CEO's desk in order of priority.",
    example: "Instead of feeding 50 full database tables to the model, the curator queries relevant tables, extracts matching columns, and passes only 10 rows to the context.",
    remember: "Every compression or drop decision runs the risk of losing important information.",
    whyMatters: "Too much context degrades model speed and accuracy. Good curators ensure models only process high-value facts.",
    diagramType: "curator_pipeline",
    miniQuestion: {
      question: "What is the primary role of the Context Curator?",
      options: [
        "To compile the typescript files into javascript",
        "To decide what enters the context window, in what order, and what gets dropped",
        "To translate prompts into multiple languages",
        "To store API keys securely"
      ],
      correct: 1,
      explanation: "Correct! The curator controls the entry, order, and density of context window data."
    }
  },
  {
    id: 6,
    title: "Lost in the Middle",
    shortTitle: "06 — Lost in Middle",
    explanation: "Research shows that language models often perform worse when relevant information is buried in the middle of long context inputs. They have high visibility and recall for details located at the absolute beginning or the absolute end. Curators must place key rules and query targets at these high-retrieval spots.",
    explanationUrdu: "Research kehti hai ke agar important information lambay inputs ke bilkul beech (middle) mein chup jaye, to models use ignore kar dete hain. Models start aur end ki details ko sab se acchi tarah retrieve aur read karte hain. Curator ko rules hamesha shuru ya aakhir mein rakhne chahiye.",
    analogy: "Reading a massive 100-page document in a hurry. You remember the first page and the conclusion clearly, but the details on page 53 get blurred in your memory.",
    example: "Putting the instruction 'CRITICAL: Output must ONLY be JSON' in the middle of 20,000 lines of files often results in a text output. Moving it to the end fixes the issue.",
    remember: "Burying info in the middle degrades attention. Move rules to the end.",
    whyMatters: "Knowing this prevents you from blaming model capability when the real issue is context ordering.",
    diagramType: "lost_in_middle_u",
    miniQuestion: {
      question: "Where should critical instructions or query targets be placed in a long context window?",
      options: [
        "In the exact middle of the files",
        "Spread randomly across all lines",
        "At the absolute beginning or the absolute end of the input context",
        "In a separate background task only"
      ],
      correct: 2,
      explanation: "Yes! High-visibility spots are the absolute beginning and end."
    }
  },
  {
    id: 7,
    title: "The Harness Layer & One Beat",
    shortTitle: "07 — Harness Layer",
    explanation: "The Harness is the wrapper code that executes 'one beat'. A beat represents one action step: assembling the context, calling the model, receiving a response, executing tools (like reading files or running a compiler), catching errors, and feeding results back. The harness manages the tools and validates single-step compliance.",
    explanationUrdu: "Harness wo software code hota hai jo AI ke 'aik beat' (step) ko chalata hai. Aik beat ka matlab hai: data ikatha karna, model call karna, model ka action verify karna (jaise file edit karna ya command chalana), tool errors catch karna, aur result wapas model ko dena.",
    analogy: "A laboratory safety glovebox. The researcher (AI Model) wants to mix chemicals. The glovebox (Harness) provides the tools, monitors oxygen, stops leaks, and logs the chemical reactions safely.",
    example: "When Claude Code edits a file, the harness reads the file slice, sends it to Claude, receives the edit diff block, applies the edits to the disk, runs compilation checks, and feeds compilation errors back to the context.",
    remember: "Harness controls the tools and execution environment of one beat.",
    whyMatters: "If tools fail to run or errors are not sent back to the context, the AI gets stuck. A robust harness prevents this.",
    diagramType: "harness_beat_flow",
    miniQuestion: {
      question: "Which of the following is a responsibility of the Harness layer?",
      options: [
        "Defining daily project schedules",
        "Managing tool execution, error handling, and context assembly for one beat",
        "Paying for API subscription keys",
        "Storing the permanent system of records database"
      ],
      correct: 1,
      explanation: "Yes! The harness operates tools, errors, and context assembly for a single beat."
    }
  },
  {
    id: 8,
    title: "Sub-agents & Summary Risks",
    shortTitle: "08 — Sub-agents",
    explanation: "A sub-agent is a nested stack of Prompt-Context-Harness-Loop created to handle a sub-task. While they allow processing massive documents in parallel without bloating the main context window, they introduce summary risks: if a sub-agent summarizes details confidently but incorrectly, the main agent will act on false summaries.",
    explanationUrdu: "Sub-agent ek chota, nested agent stack hota hai jo kisi sub-task ko solve karta hai. Iska faida ye hai ke 50 tables ko aapas mein read karne ke liye main context bloat nahi hota. Lekin risk ye hai ke agar sub-agent ne ghalat summary banayi, to main agent use sach samajh kar ghalat decision le lega.",
    analogy: "A CEO (Main Agent) asking an intern (Sub-agent) to summarize a 500-page report. If the intern misses a critical financial debt detail but writes a beautiful summary, the CEO will sign the contract blindly.",
    example: "An auditing agent asks a sub-agent to summarize bank logs. The sub-agent outputs: 'All checks match.' But it ignored minor decimal differences. The main agent reports success, hiding the error.",
    remember: "Never trust summaries blindly. Force sub-agents to return direct quotes or source IDs.",
    whyMatters: "To design safe systems, check the sub-agent's validation criteria and evidence requirements.",
    diagramType: "subagent_hierarchy",
    miniQuestion: {
      question: "What is the primary risk of relying on summaries returned by sub-agents?",
      options: [
        "Sub-agents run too fast for cloud databases",
        "The main agent might accept a confident but incorrect summary without verifying actual evidence",
        "Sub-agents only compile python files",
        "Sub-agents require human passwords at every call"
      ],
      correct: 1,
      explanation: "Correct! Summary risks mean error details can get swallowed in simple summary text."
    }
  },
  {
    id: 9,
    title: "Harness Limit vs. Verification",
    shortTitle: "09 — Limit & Verify",
    explanation: "A beat can terminate for many reasons: token limits, time limits, tool errors, or model signals. However, 'beat ended' does not mean 'work succeeded'. Harness verification forces test runs, schema checks, and logic audits before concluding. The Maker-Checker principle states that the agent creating the code should not be the sole judge of its validity.",
    explanationUrdu: "Harness beat khatam hone ke kai reasons hote hain (e.g. error, timeout). Lekin 'beat ended' ka matlab ye nahi ke kaam complete ho gaya. Harness verification (tests, schema audits) checks apply karti hai. 'Maker-Checker' rule kehta hai ke jo AI code likhe, usey khud pass/fail ka final decider nahi hona chahiye.",
    analogy: "An automated factory: A robot welds a car door (Maker). A separate sensor scanner checks if the welds are aligned (Checker). The welding robot doesn't approve its own work.",
    example: "The coder agent updates a server route. The harness automatically runs integration tests. If tests fail, it forces a reject loop, preventing the code from merging.",
    remember: "Beat ended != Work succeeded. Validate work via independent checkers.",
    whyMatters: "Unverified agents frequently hallucinate success, reporting 'Done!' while leaving broken code.",
    diagramType: "maker_checker_c3",
    miniQuestion: {
      question: "What does the Maker-Checker principle advocate?",
      options: [
        "The same model should compile and write documentation",
        "An independent checker (tests/separate agent) should evaluate the work produced by the maker",
        "The user must write all tests manually before starting",
        "The system should skip checks if the model is confident"
      ],
      correct: 1,
      explanation: "Spot on! The maker writes the work, while a separate checker verifies it."
    }
  },
  {
    id: 10,
    title: "The Loop Layer",
    shortTitle: "10 — The Loop",
    explanation: "The Loop is the outer layer governing the entire run. It starts beats, monitors state, handles recovery, and decides what happens next. The Loop comprises three key parts: 1) Heartbeat (starts work), 2) Spine (saves state outside the model so next beats can resume), and 3) Outside Stops (success criteria, max budget, no-progress rules).",
    explanationUrdu: "Loop sab se outer container hai jo poore execution flow ko chalata hai. Ye beats ko call karta hai, progress save karta hai, aur next steps decide karta hai. Iske 3 parts hote hain: 1. Heartbeat (kaam start karna), 2. Spine (state ko memory mein save karna taake restart na karna pare), 3. Outside Stops (limits aur success rules).",
    analogy: "A shipping business: Heartbeat is the dispatch schedule. Spine is the shipping ledger tracking delivery status. Outside Stops are safety policies like budget logs and damage limits.",
    example: "If an agent is stopped at beat 4 due to a rate limit, the Loop saves progress to `state.json`. When the rate limit cools down, it fires beat 5 resuming from that exact step rather than starting over.",
    remember: "Without a Spine (saved state), your agent has no memory between runs.",
    whyMatters: "Understanding the Loop layer allows you to build agents that can run unattended for hours safely.",
    diagramType: "loop_spine_stops",
    miniQuestion: {
      question: "Why is the 'Spine' (state saved outside the model) crucial in Loop Engineering?",
      options: [
        "It increases the model's speed",
        "It allows subsequent beats to resume from the last known state instead of starting from scratch",
        "It replaces the need for any prompts",
        "It is a type of cloud database server"
      ],
      correct: 1,
      explanation: "Yes! The spine connects the progress records across different runs and beats."
    }
  },
  {
    id: 11,
    title: "Human Gates & Triggers",
    shortTitle: "11 — Human Gates",
    explanation: "A Human Gate is a predefined checkpoint in the Loop where the execution pauses and awaits human decision. Triggers must be coded in advance: e.g., ambiguity (two equal database matches), risky actions (deleting files, executing payments), or low confidence levels. Guessing in high-ambiguity situations leads to silent failures.",
    explanationUrdu: "Human Gate ek pre-defined point hota hai jahan system ruk kar human approval ya input ka wait karta hai. Triggers pehle se code hone chahiye: jaise high risk actions (payment transfer), ya low confidence matching (do similar files). AI ko guess karne ke bajaye human se poochhna chahiye.",
    analogy: "A junior clerk in a bank. If a check is for $50, they sign it automatically. If it's for $500,000, bank policy forces them to get the manager's signature (Human Gate).",
    example: "The match agent finds two records for 'Bob Smith' (match scores 0.72 vs 0.72). Guessing is risky. The loop halts, sends a Slack notification to the operator, and resumes after approval.",
    remember: "Guessing looks like success but creates silent bugs. Trigger human gates for ambiguity.",
    whyMatters: "Safe automation requires defining boundary limits where systems yield control back to humans.",
    diagramType: "human_gate_flow",
    miniQuestion: {
      question: "When is it appropriate to trigger a Human Gate in an autonomous agent run?",
      options: [
        "Only when the model runs out of subscription tokens",
        "At predefined points of ambiguity, high cost, or risky actions that are hard to undo",
        "After every single word output",
        "Never, because loops must be 100% autonomous"
      ],
      correct: 1,
      explanation: "Correct! Predefined checkpoints for risk and ambiguity keep autonomous loops safe."
    }
  },
  {
    id: 12,
    title: "Which Layer Broke?",
    shortTitle: "12 — Which Layer?",
    explanation: "When an agent fails, you must diagnose before you act. Look for the layer symptom signature: 1) Output is in the wrong format or tone ➔ Prompt. 2) Confident but factually wrong, or misses clear guidelines ➔ Context. 3) Tool fails to run, error is ignored, tests don't run ➔ Harness. 4) Loops indefinitely, stops too early, guesses silently ➔ Loop.",
    explanationUrdu: "Jab AI agent kharab ho jaye, to change karne se pehle diagnose karein: 1. Format ya tone kharab hai ➔ Prompt check karein. 2. Confident hai par factually wrong hai ➔ Context check karein (data load nahi hua). 3. Tool nahi chala ya validation test fail hua ➔ Harness check karein. 4. Infinite loop chal raha hai ya bina validation close ho gaya ➔ Loop check karein.",
    analogy: "Car troubleshooting: If the lights don't turn on, you don't replace the engine (Loop). You check the fuse (Prompt/Harness).",
    example: "An agent runs for 40 minutes repeating the same command. Do not edit the system prompt to say 'don't loop'. Add a no-progress checking condition in the Loop layer.",
    remember: "First isolate the failing layer, then apply the fix.",
    whyMatters: "Most developers blame prompts when the actual solution requires adding validation checks or loop safety caps.",
    diagramType: "diagnosis_table_visual",
    miniQuestion: {
      question: "An agent runs for 2 hours, executing the same command over and over, spending money. Which layer needs fixing?",
      options: [
        "The Prompt (make it ask more politely)",
        "The Loop (add a no-progress check and attempt limits)",
        "The Context (add more files)",
        "The Harness (rewrite the compilation rules)"
      ],
      correct: 1,
      explanation: "Yes! Retrying the same command indefinitely is a Loop-level failure (missing no-progress checks)."
    }
  }
];

export const course3Flashcards = [
  {
    term: "Prompt",
    definition: "The specific message, role instructions, and formatting examples sent to the model.",
    example: "Writing: 'Create a 5-column table with custom headers.'"
  },
  {
    term: "Context",
    definition: "Everything the model can see during a call (files, history, tool outputs).",
    example: "The active window containing current price lists + user logs."
  },
  {
    term: "Harness",
    definition: "The wrapper code executing one beat of tools, compilation checks, and error logs.",
    example: "A Python wrapper that runs a database query and catches SQL errors."
  },
  {
    term: "Loop",
    definition: "The outer manager that starts beats, monitors state, and enforces boundaries.",
    example: "A cron system running code reviews every morning and checking progress logs."
  },
  {
    term: "Curator",
    definition: "Mechanism that orders, compresses, and drops data inside the context window.",
    example: "A search query selecting the top 5 most relevant documents from a database."
  },
  {
    term: "Weakest Ingredient",
    definition: "The prompt debugging rule of editing only the instruction that is failing.",
    example: "Fixing only the output table rule when the data summary is correct."
  },
  {
    term: "Spine",
    definition: "State variables saved outside the model so runs can resume after interruptions.",
    example: "Storing `progress.json` containing current loop step = 3."
  },
  {
    term: "Maker-Checker",
    definition: "Separating work creation (maker agent) from work verification (checker agent).",
    example: "Developer agent writes code, Tester agent runs tests and signs off."
  },
  {
    term: "Lost in the Middle",
    definition: "Language models performing worse when relevant details are located in the center of long inputs.",
    example: "Ignoring a rule hidden on page 50 of a 100-page context stream."
  },
  {
    term: "Human Gate",
    definition: "Predefined manual checkpoint for approvals on risky actions or high ambiguity.",
    example: "Pausing the run to ask the manager before sending an invoice payment."
  },
  {
    term: "Execution Graph",
    definition: "Diagram of logic steps and state transitions between nodes (not layers).",
    example: "Pull data ➔ Route ➔ Match ➔ Gate ➔ Post."
  },
  {
    term: "Summary Risk",
    definition: "The risk that sub-agent summaries omit critical details or errors.",
    example: "Accepting 'Files cleared' summary when one database failed to clean."
  }
];

export const course3QuizQuestions = [
  {
    question: "How are Prompt, Context, Harness, and Loop related?",
    options: [
      "They are sequential steps in an AI database search pipeline",
      "They are nested containers, where Prompt sits inside Context, inside Harness, inside Loop",
      "They are different versions of AI models",
      "They are code flags used to speed up compile tasks"
    ],
    correct: 1,
    explanation: "Four layers nested containers hain: Loop > Harness > Context > Prompt. Aik layer doosri ke andar hoti hai."
  },
  {
    question: "If an agent produces confident but factually wrong answers, which layer should you investigate first?",
    options: [
      "The Loop",
      "The Prompt",
      "The Context",
      "The Graph node structure"
    ],
    correct: 2,
    explanation: "Confident but factually wrong answers tab ate hain jab correct details context window mein load na hoon. So investigate Context first."
  },
  {
    question: "What does the 'Weakest Ingredient' principle advise?",
    options: [
      "Use the cheapest model possible",
      "Isolate the specific part of the prompt that failed (format, tone, details) and fix only that",
      "Let the AI write all instructions",
      "Delete all formatting rules"
    ],
    correct: 1,
    explanation: "Poora prompt badalney ke bajaye sirf us specific instruction ko thik karein jo fail ho rahi hai."
  },
  {
    question: "What unit of work defines the Harness layer?",
    options: [
      "One model call",
      "One beat (running tools, handling errors, assembling data for a single step)",
      "The entire database lifecycle",
      "The final product output"
    ],
    correct: 1,
    explanation: "Harness aik call, tool execution, aur validation errors catch karne ki unit (One beat) ko manage karta hai."
  },
  {
    question: "What does the 'Context Curator' do?",
    options: [
      "It displays graphics on the screen",
      "It decides what information gets placed into the context window, in what order, and what is dropped",
      "It writes prompt templates automatically",
      "It counts the number of developer commits"
    ],
    correct: 1,
    explanation: "Curator ka kaam context limit ke mutabiq best data select karna, order karna, aur non-essential details drop karna hai."
  },
  {
    question: "What does the research finding 'Lost in the Middle' mean?",
    options: [
      "Agents get stuck in loops in the middle of execution",
      "Models often perform worse when relevant details are hidden in the middle of long context inputs",
      "Developers lose track of project files",
      "Databases slow down during middle hours of the day"
    ],
    correct: 1,
    explanation: "Models long inputs ke shuru aur aakhir ko zyada focus dete hain, aur darmiyani details miss kar sakte hain."
  },
  {
    question: "Which component represents the 'Spine' in Loop Engineering?",
    options: [
      "The CPU hardware",
      "State variables saved outside the model to connect one beat's progress to the next",
      "The prompt prefix block",
      "The test script files"
    ],
    correct: 1,
    explanation: "Spine external state saving ko kehte hain jo multiple beats ke darmiyan memory banati hai."
  },
  {
    question: "Under the Maker-Checker principle, who should check the work?",
    options: [
      "The same model process that wrote the work",
      "An independent process, test, or separate validation checker",
      "The client management only",
      "No one, since AI code is always correct"
    ],
    correct: 1,
    explanation: "Kaam check karne wala (Checker) hamesha kaam karne wale (Maker) se independent hona chahiye."
  },
  {
    question: "What is a 'Human Gate' in loop design?",
    options: [
      "A login security page",
      "A predefined stop point where execution pauses for human approval or feedback",
      "A prompt that asks for the user's name",
      "An error page displayed during compilation failures"
    ],
    correct: 1,
    explanation: "Human Gate pre-planned checkpoint hota hai jahan system dangerous ya ambiguous action se pehle insaan se approval leta hai."
  },
  {
    question: "What represents a typical Loop-level failure symptom?",
    options: [
      "Wrong output text font",
      "The agent runs forever, repeats the same action, or spends the entire budget without progress",
      "A single SQL tool syntax error",
      "Confident answers from outdated documents"
    ],
    correct: 1,
    explanation: "Bina kisi progress ke bar bar repeat karna ya limit reach na karna Loop level (missing stop checks) failure hai."
  },
  {
    question: "Does the Model Context Protocol (MCP) live at the Prompt layer?",
    options: [
      "Yes, MCP is a prompting technique",
      "No, MCP is a standard connector bridge managed at the Harness level to talk to external systems",
      "Yes, but only in python scripts",
      "No, because MCP is a database query language"
    ],
    correct: 1,
    explanation: "MCP Harness level par tools aur systems connect karne ka standardized bridge hai."
  },
  {
    question: "If sub-agents are returning incorrect information, what risk are you facing?",
    options: [
      "Token limit warning errors",
      "Summary Risk (acting on confident but faulty sub-agent summaries)",
      "Database connection timeouts",
      "Graph execution failure"
    ],
    correct: 1,
    explanation: "Summary risk tab hota hai jab detail errors sub-agent ki neat summary text ke piche chup jate hain."
  },
  {
    question: "What is the difference between a Graph and a Loop?",
    options: [
      "A Graph is a fifth layer inside a single execution node",
      "A Graph describes data flows between nodes; a Loop describes the execution cycle inside a node",
      "They are the same component",
      "Graphs are only used for visual chart components"
    ],
    correct: 1,
    explanation: "Graph multiple nodes ke darmiyan connections dikhata hai, jabke Loop single agent node ki execution manage karta hai."
  },
  {
    question: "In 'Mode 2' (building your own worker), what parts of the four layers do you own?",
    options: [
      "Only the prompt instructions",
      "All four layers (Prompt, Context Curator, Harness tools, and Loop state controls)",
      "None, they are rented from AI vendors",
      "Only the database tables"
    ],
    correct: 1,
    explanation: "Mode 2 mein aap complete stack own karte hain, including curator rules, harness checks, aur loop variables."
  },
  {
    question: "What is the primary danger of letting a model 'guess' during high-ambiguity matching tasks?",
    options: [
      "It consumes too much bandwidth",
      "Silent Failure (producing wrong records that look correct on the dashboard)",
      "It stops the execution immediately",
      "It violates local tax codes"
    ],
    correct: 1,
    explanation: "Guessing se silent failure hota hai: data save ho jata hai aur user ko error ka pata bhi nahi chalta."
  },
  {
    question: "Where should you write down the safety and budget attempt limits?",
    options: [
      "In the system prompt text template",
      "In the Loop level stopping conditions",
      "In the database table descriptions",
      "In the user chat dashboard stylesheet"
    ],
    correct: 1,
    explanation: "Safety limits aur budget rules hamesha Loop layer stopping rules mein define kiye jate hain."
  },
  {
    question: "What happens if a Harness does not feed compilation errors back to the context window?",
    options: [
      "The program compiles faster",
      "The model does not know its code broke and will repeat the wrong script or get stuck",
      "The budget is automatically cleared",
      "A human gate is triggered"
    ],
    correct: 1,
    explanation: "Agar errors context mein na jayen, to model ko pata nahi chalta ke kya kharab hua aur woh bar bar same error generate karega."
  },
  {
    question: "Which layer holds the files, logs, and retriever tools output?",
    options: [
      "Prompt",
      "Context",
      "Harness",
      "Loop"
    ],
    correct: 1,
    explanation: "Files, history, and retrieved records are stored in the Context layer (inside the active window)."
  },
  {
    question: "If a developer changes the AI agent provider API, which layer handles swapping the base models?",
    options: [
      "Prompt",
      "Harness (by adjusting model connector wrappers)",
      "Context",
      "Graph"
    ],
    correct: 1,
    explanation: "Harness code layer model connectors aur API wraps govern karti hai, so changes yahan hoti hain."
  },
  {
    question: "What represents the 'weakest ingredient' in a prompt when the model outputs correct summaries but includes friendly conversational chatter that breaks database parsing?",
    options: [
      "The model's reasoning capabilities",
      "Missing formatting examples or a strict output constraint instruction",
      "The size of the context window files",
      "The rate limit rules"
    ],
    correct: 1,
    explanation: "Conversational chatter ko stop karne ke liye output constraints ya format validation instruction thik karna (Prompt layer) weakest ingredient hai."
  },
  {
    question: "How does the Context Curator compress context?",
    options: [
      "By changing model temperatures",
      "By summarizing history, filtering tables, or extracting only matching segments",
      "By running tests asynchronously",
      "By clearing local storage files"
    ],
    correct: 1,
    explanation: "Curator history summary aur relevant segments filter karke size compress karta hai."
  },
  {
    question: "Can an agent verify its work successfully without running tests in the Harness?",
    options: [
      "Yes, models can compile code in memory perfectly",
      "No, actual validation tests or schema checks must run to guarantee success",
      "Yes, but only in small script tasks",
      "No, because the prompt controls compilation"
    ],
    correct: 1,
    explanation: "Models memory match to kar sakte hain par compile error codes verify karne ke liye tests run karna zaroori hai."
  },
  {
    question: "If a loop has no attempts limits, what is the worst-case scenario?",
    options: [
      "The database indexes break",
      "Infinite model calls consuming massive API budget on a simple error loop",
      "The model returns Urdu text",
      "The local storage gets deleted"
    ],
    correct: 1,
    explanation: "Limit na hone se agent infinite calls karega aur poora API budget clean ho jayega."
  },
  {
    question: "What does an Execution Graph define?",
    options: [
      "The speed comparison chart of base models",
      "The sequence of steps, routing rules, and states between different nodes",
      "The memory usage on AWS servers",
      "The relationship between prompt structures"
    ],
    correct: 1,
    explanation: "Execution Graph define karta hai ke data kis sequence se multiple processing nodes ke darmiyan flow karega."
  },
  {
    question: "What is a 'Spine' in terms of the Loop layer?",
    options: [
      "A structural framework for holding server units",
      "The durable state ledger preserved outside model memory to link multiple beats",
      "The first instruction in the system template",
      "The database backup mirror path"
    ],
    correct: 1,
    explanation: "Spine loop state memory sheet hoti hai jo external storage par save rehti hai."
  },
  {
    question: "If a tool changes its response parameters, which layer needs updates to parse it?",
    options: [
      "Prompt",
      "Harness (which wraps the tool calls)",
      "Context",
      "Loop"
    ],
    correct: 1,
    explanation: "Tool response parse aur compile karna Harness code ki responsibility hoti hai."
  },
  {
    question: "What is an indicator of 'Lost in the Middle' in document searches?",
    options: [
      "The search returns zero results",
      "The model answers questions about page 1 and page 99 correctly, but ignores a clear fact on page 48",
      "The model stops execution at page 50",
      "The file upload crashes mid-run"
    ],
    correct: 1,
    explanation: "Lost in the Middle ka sign ye hai ke model shuru aur aakhir ki details to pick kar leta hai par darmiyani page ki facts ignore kar deta hai."
  },
  {
    question: "Why should sub-agents return IDs and direct source quotes?",
    options: [
      "To increase model speed",
      "To allow the main agent (or human gate) to verify assertions back to the raw source data",
      "To satisfy tax audits",
      "To avoid writing prompts"
    ],
    correct: 1,
    explanation: "Ids aur quotes se source trace karna possible ho jata hai jo summary errors catch karne mein help karta."
  },
  {
    question: "When terminology changes across tools, what question resolves the ambiguity?",
    options: [
      "What is the model speed?",
      "What is the unit of work for this component?",
      "Which developer wrote this script?",
      "How much does it cost?"
    ],
    correct: 1,
    explanation: "Unit of work clarify karne se har technical term ka scale aur functionality foran samajh aa jati hai."
  },
  {
    question: "What is the core takeaway of 'The Four Layers' framework?",
    options: [
      "All problems can be solved by writing better prompts",
      "Before applying a fix to a broken agent, diagnose which nested container layer actually failed",
      "Avoid using loops and harnesses in production systems",
      "Let the AI self-engineer all layers without checks"
    ],
    correct: 1,
    explanation: "Is core lesson ka maqsad ye hai ke agent kharab hone par correct container diagnostic apply karein, na ke blindly prompt badalte rehna."
  }
];
