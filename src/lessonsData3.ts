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
    explanation: `What is it?
Prompt, Context, Harness, and Loop are nested containers, not sequential steps. The Prompt is inside Context, Context is inside Harness, and Harness is inside Loop.

Why does it matter?
Understanding nesting stops you from trying to replace prompts with loops. Advanced loops don't bypass prompting; they dynamically construct and send prompts at every step.

Simple Example
A coding loop runs for 10 beats. In beat 3, it calls the model (Harness). The harness builds a context window (files + errors) containing a prompt instruction.

Key Takeaway
Loop contains Harness, which contains Context, which contains Prompt. They are nested.`,
    explanationUrdu: `Yeh Kya Hai?
Prompt, Context, Harness, aur Loop sequential steps nahi hain balkay nested containers hain (aik ke andar doosra container).

Yeh Kyun Zaroori Hai?
Is concept ko samjhe bina aap prompt ko loop se replace karne ki ghalat koshish karein ge. Advanced loops bhi har step par prompts generate karte hain.

Sada Misaal
Aik autonomous coding agent loop run kar raha hai. Beat 3 par, woh model call (Harness) karta hai jise target context files aur check specifications (Prompt) di jati hain.

Aham Nuqta
Nesting Model: Loop ➔ Harness ➔ Context ➔ Prompt.`,
    analogy: "A nested Russian Matryoshka doll. The smallest doll is the Prompt. It sits inside the Context. That sits inside the Harness. All of them sit inside the largest doll, the Loop.",
    example: "An AI coding loop running for 10 beats. In beat 3, it calls the model, utilizing a tool harness that packages open files (Context) and guidelines (Prompt).",
    remember: "Loop contains Harness, which contains Context, which contains Prompt.",
    whyMatters: "If you think they are steps, you will make architectural mistakes in loop design.",
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
    explanation: `What is it?
The Unit of Work is the specific scope of execution for each layer: Prompt (one model call), Context (active model window), Harness (one beat/tool run), and Loop (entire task run).

Why does it matter?
AI vendors use different terms for similar features. Asking 'what unit of work is this?' helps you bypass marketing jargon and identify what layer is executing.

Simple Example
If a developer says 'the agent harness failed', they mean a tool call broke during a single beat, not that the entire multi-run loop crashed.

Key Takeaway
Define your execution boundary: Call (Prompt), Window (Context), Beat (Harness), and Lifecycle (Loop).`,
    explanationUrdu: `Yeh Kya Hai?
Unit of Work har layer ke kam ki hadd (execution boundary) ko define karta hai.

Yeh Kyun Zaroori Hai?
Vendor jargon aapas mein change hota rehta hai. Unit of work se aap identify kar sakte hain ke kis layer par error aaya hai.

Sada Misaal
Harness ka failure means aik specific tool call (beat) fail hui hai, jabke Loop failure ka matlab hai ke poora execution task fail ho gaya hai.

Aham Nuqta
Prompt = Call, Context = Window, Harness = Beat, Loop = Whole Run.`,
    analogy: "Writing a book: Prompt is writing one sentence. Context is pages open on your desk. Harness is writing one chapter (outline + draft + grammar check). Loop is finishing the book.",
    example: "Differentiating between 'Prompt limits' (character limit of one call) and 'Loop limits' (maximum runtime attempts permitted).",
    remember: "Always ask: What is the Unit of Work?",
    whyMatters: "Knowing execution boundaries stops you from debugging the wrong layer.",
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
    explanation: `What is it?
The Prompt Layer is the specific instructions, roles, examples, and rules sent to the model for a single call.

Why does it matter?
Editing a prompt blindly can break other working instructions. The 'weakest ingredient' principle requires diagnosing the exact prompt failure before editing.

Simple Example
If your agent outputs incorrect markdown tables, don't rewrite the system prompt instructions. Simply refine the output formatting rules.

Key Takeaway
Target the weakest prompt ingredient (instructions, format, examples, or style) rather than rewriting everything.`,
    explanationUrdu: `Yeh Kya Hai?
Prompt Layer specific instructions aur parameters ka set hai jo model ko raw input ke sath bheja jata hai.

Yeh Kyun Zaroori Hai?
Poora prompt bar-bar badalne se doosri working instructions break ho sakti hain. 'Weakest Ingredient' rule kehta hai ke sirf kharab hissay ko target karein.

Sada Misaal
Agar output table shape kharab hai, to pure prompt ko change karne ke bajaye formatting rule and markdown example text update karein.

Aham Nuqta
Weakest ingredient ko target karein, prompt bloat se bachein.`,
    analogy: "Cooking soup: If the soup is too salty, you don't throw it all away. You balance the salt or add water. You identify the weakest ingredient.",
    example: "Fixing a JSON parsing error by modifying only the schema template in the prompt rules.",
    remember: "Don't rewrite. Find the weakest ingredient.",
    whyMatters: "Prompt bloat wastes token space and confuses the model.",
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
    explanation: `What is it?
The Context Layer is the sum of all information (system prompt, files, chat logs, tool returns) the model can see during one execution call.

Why does it matter?
If key facts are missing from this active window, the model cannot utilize them. It will guess from its training memory, causing confident hallucinations.

Simple Example
If an invoicing agent is missing the vendor catalog file from its context, it will guess the item prices from generic training records.

Key Takeaway
No context = Guessing. Ensure all required facts reside inside the active window.`,
    explanationUrdu: `Yeh Kya Hai?
Context Layer wo active window hai jo model model call ke waqt dekh sakta hai.

Yeh Kyun Zaroori Hai?
Agar context mein facts aur files missing hon ge to model hallucinate kare ga aur confident ghalat answers de ga.

Sada Misaal
Client ledger verify karte waqt current transaction log load na hona. Model purani memory se guess kare ga jo ghalat ho gi.

Aham Nuqta
Hallucinations aksar weak prompts ki waja se nahi balkay context failures ki waja se hoti hain.`,
    analogy: "An open-book exam. You can only write answers using the pages currently open on your desk. If a page is missing, you have to guess.",
    example: "An invoicing bot failing to check pricing matches because the current price sheet PDF was not loaded into the context window.",
    remember: "Model can only compute what it can see in the active window.",
    whyMatters: "Context management prevents expensive hallucination risks in business software.",
    diagramType: "context_window_anatomy",
    miniQuestion: {
      question: "What is the primary cause of confident AI hallucinations?",
      options: [
        "Slow internet connections",
        "Unstyled UI screens",
        "Missing facts or reference files from the active context window",
        "Using loops instead of prompts"
      ],
      correct: 2,
      explanation: "Correct! If a fact is not in the context, the model guesses from training data, leading to hallucinations."
    }
  },
  {
    id: 5,
    title: "Context Curator: Order, Compress, Drop",
    shortTitle: "05 — Context Curator",
    explanation: `What is it?
The Context Curator is a programmatic component that filters, compresses, and structures raw data before sending it to the model context.

Why does it matter?
Pasting raw files blindly wastes tokens, increases cost, slows response times, and dilutes model focus.

How does it work?
The curator follows three rules: 1) Order (put important files first). 2) Compress (convert raw HTML/JSON to compact text). 3) Drop (delete irrelevant files).

Simple Example
Instead of sending 5MB of raw HTML pages, the curator parses out only the plain text tables, saving 95% of token space.

Key Takeaway
Curate context before sending it to the model. Do not dump raw data.`,
    explanationUrdu: `Yeh Kya Hai?
Context Curator aik code helper hai jo raw files ko compress aur filter kar ke model ko bhejta hai.

Yeh Kyun Zaroori Hai?
Dher saara raw data model ko bhejna tokens waste karta hai aur AI response ko slow aur ghalat banata hai.

Yeh Kaise Kaam Karta Kaam?
Curator teen rules follow karta hai: Order (zaroori data pehle), Compress (summarize/clean text), aur Drop (fuzool files delete karna).

Sada Misaal
5MB ka raw invoice directory model ko bhejne ke bajaye, curator parse kar ke sirf text summary bhejta hai.

Aham Nuqta
Data dump mat karein. Model ko clean, targeted information hi supply karein.`,
    analogy: "An executive assistant summarizing a 500-page market report into a 2-page bulleted brief for the CEO.",
    example: "A Python parser stripping HTML script tags and returning only raw table rows to reduce context footprint.",
    remember: "Curate data: Order, Compress, Drop.",
    whyMatters: "Good curation reduces API costs and improves model reasoning accuracy.",
    diagramType: "curator_ops_flow",
    miniQuestion: {
      question: "Which of the following describes the correct order of curator operations?",
      options: [
        "Ignore, expand, replicate",
        "Order (important first), Compress (clean text), Drop (remove noise)",
        "Re-write, double, publish",
        "Delete all prompts and files"
      ],
      correct: 1,
      explanation: "Exactly! Order, Compress, and Drop are the three steps to optimize context."
    }
  },
  {
    id: 6,
    title: "Lost in the Middle",
    shortTitle: "06 — Lost in the Middle",
    explanation: `What is it?
Lost in the Middle is a model retrieval phenomenon where LLMs ignore information placed in the middle of a long context window, focusing only on the start and end.

Why does it matter?
If you place your primary rule or query in the middle of a massive context, the model will likely miss it and fail the task.

Simple Example
In a 100,000-token document prompt, placing 'Rule: Always double-check pricing' at page 50 leads to the model ignoring the rule and auditing blindly.

Key Takeaway
Place critical instructions, queries, and target schemas at the absolute start or absolute end of the context layout.`,
    explanationUrdu: `Yeh Kya Hai?
Lost in the Middle aik phenomenon hai jahan LLM model context window ke beech mein likhi hui details ko ignore kar deta hai aur start/end par focus karta hai.

Yeh Kyun Zaroori Hai?
Agar aap ne complex database files ke beech mein main instruction chupa di, to AI use miss kar de ga aur error generate kare ga.

Sada Misaal
100 pages ke document text ke bilkul center (page 50) par 'Do not process invoices above $1000' likhna. AI model is rule ko bypass kar de ga.

Aham Nuqta
Main instructions ko hamesha context ke start ya end par place karein.`,
    analogy: "Reading a long laundry list: You easily remember the first three items and the last item, but forget the items in the middle.",
    example: "Placing the response schema template at the very end of the model prompt, after all data payloads.",
    remember: "Middle = dead zone. Put key details at the start or end.",
    whyMatters: "Failing to account for this leads to silent failures in long-context document processing.",
    diagramType: "lost_in_middle_u",
    miniQuestion: {
      question: "Where does an LLM pay the most attention in a large context window?",
      options: [
        "Exactly in the middle",
        "Only in the comments of the code",
        "At the absolute beginning and the absolute end of the window",
        "It distributes attention equally across all tokens"
      ],
      correct: 2,
      explanation: "Correct! Attention follows a U-shaped curve, dropping sharply in the middle."
    }
  },
  {
    id: 7,
    title: "The Harness Layer & One Beat",
    shortTitle: "07 — Harness Layer",
    explanation: `What is it?
The Harness Layer is the execution environment that runs one single 'beat' of the agent: making the model call, running tools, catching system errors, and returning results.

Why does it matter?
AI models cannot run tools or catch shell errors themselves. The harness acts as the wrapper that makes tools functional and parses system exceptions.

Simple Example
When Claude Code runs a shell command, the harness executes the script in PowerShell, catches the error code, and feeds it back to Claude's context.

Key Takeaway
Harness = the single-beat executor. It translates model intents into real-world actions.`,
    explanationUrdu: `Yeh Kya Hai?
Harness Layer wo environment hai jo agent ka 'one beat' run karta hai (model call + tool run + exception catch).

Yeh Kyun Zaroori Hai?
AI model direct commands run nahi kar sakta. Harness model ko system permissions, database connections, aur API tools safely execute karne ka bridge deta hai.

Sada Misaal
AI tool SQL database read karna chahta hai. Harness database query run karta hai, results context memory mein load karta hai, aur errors clean karta hai.

Aham Nuqta
Harness aik single execution beat ko manage aur secure karta hai.`,
    analogy: "A test pilot harness: It provides the flight controls, the seatbelts, the dial displays, and records flight telemetry for one single take-off run.",
    example: "An agent tool execution harness catching a 'File Not Found' terminal error and formatting it as a markdown context string.",
    remember: "Harness manages the beat: tool execution and exception handling.",
    whyMatters: "Without a robust harness, runtime code crashes will cause the whole AI application to freeze.",
    diagramType: "harness_bridge",
    miniQuestion: {
      question: "What is the primary role of the Harness Layer?",
      options: [
        "To write prompts automatically",
        "To manage the execution of a single beat (running tools, handling system errors, and returning results to context)",
        "To host the frontend HTML layouts",
        "To manage long-term user billing details"
      ],
      correct: 1,
      explanation: "Spot on! The Harness handles tool routing and safety boundaries during a single beat."
    }
  },
  {
    id: 8,
    title: "Sub-agents & Summary Risks",
    shortTitle: "08 — Sub-agents",
    explanation: `What is it?
Sub-agents are child agents spawned by the harness to execute specific, narrow subtasks (like file editing or parsing).

Why does it matter?
Running everything in one giant prompt accumulates massive context, confuses the model, and dilutes its reasoning. Sub-agents handle subtasks in clean, isolated context windows.

Simple Example
Instead of letting the main loop compile, test, and write code in one window, the harness spawns a temporary Sub-agent to compile the code and returns only the final pass/fail flag.

Key Takeaway
Delegate noisy subtasks to sub-agents to keep the parent context clean.`,
    explanationUrdu: `Yeh Kya Hai?
Sub-agents chote child agents hote hain jinhein harness specific tasks (jaise code testing ya syntax checks) complete karne ke liye spawn karta hai.

Yeh Kyun Zaroori Hai?
Aik hi windows mein saara kaam karne se context bahar chala jata hai aur model confuse hota hai. Sub-agents isolated limits mein clean kam karte hain.

Sada Misaal
Main controller agent file summarize karne ke liye aik sub-agent banata hai jo summary clear kar ke result wapas bhej deta hai.

Aham Nuqta
Gande aur noisy tasks ko sub-agents par delegate karein taake parent context clean rahe.`,
    analogy: "A corporate manager who hires a freelance graphic designer to design a single slide layout, rather than bringing them into every strategic board meeting.",
    example: "Spawning an independent validator sub-agent that verifies the JSON schema output of a data processor before saving.",
    remember: "Delegate to sub-agents to isolate context and cost.",
    whyMatters: "Sub-agents improve system reliability and prevent parent window overflow.",
    diagramType: "subagent_spawning",
    miniQuestion: {
      question: "Why should a harness spawn sub-agents?",
      options: [
        "To replace the need for database storage",
        "To isolate noisy subtasks and keep the main parent context clean and focused",
        "To run marketing campaigns autonomously",
        "To translate prompts into multiple languages"
      ],
      correct: 1,
      explanation: "Correct! Isolating task execution in sub-agents prevents context contamination in the main model run."
    }
  },
  {
    id: 9,
    title: "Harness Limit vs. Verification",
    shortTitle: "09 — Harness Limit",
    explanation: `What is it?
Harness Limit vs Verification is the design discipline of capping harness tool runtime and ensuring explicit verification checks before finishing a beat.

Why does it matter?
If an agent has infinite loop access without verification, it can query tools repeatedly, wasting hundreds of dollars on failing loops.

How does it work?
We enforce: 1) Hard boundaries on maximum tool calls per beat. 2) Strict test verification requirements (the build must pass lint checks) before tool execution closes.

Simple Example
A test running harness allows the coding bot up to 5 attempts to compile. If it still fails, it blocks further runs and alerts the operator.

Key Takeaway
Set hard call caps and require verification checks to prevent infinite runaway loops.`,
    explanationUrdu: `Yeh Kya Hai?
Harness Limit ka matlab hai tool calls aur API runs par hard bounds lagana, aur verification checks apply karna.

Yeh Kyun Zaroori Hai?
Bina limits ke AI agents infinite loops mein phans sakte hain aur bar-bar redundant tools call kar ke dollars waste kar sakte hain.

Sada Misaal
Code compilation check: harness ko max 5 attempts ki ijazat dena. Agar 5 baar mein code compile na ho to system run stop kar ke status update kare ga.

Aham Nuqta
Harness boundaries aur verification rules cost protection aur safety ensure karte hain.`,
    analogy: "A safety valve on a pressure cooker. If pressure builds up past a safe limit, the valve releases steam automatically to prevent an explosion.",
    example: "Implementing a strict maximum step counter inside the model tool executor hook.",
    remember: "Infinite loops cost money. Set harness caps.",
    whyMatters: "Verification safeguards system integrity and controls execution budget.",
    diagramType: "harness_limit_flow",
    miniQuestion: {
      question: "What is the primary danger of having no Harness execution limits?",
      options: [
        "The model will shut down permanently",
        "The agent can trigger infinite tool loops, leading to run-away API costs",
        "The server will run out of database memory",
        "The user interface will switch to light mode"
      ],
      correct: 1,
      explanation: "Correct! Without step limits, agent loops can enter infinite retry states, generating high API bills."
    }
  },
  {
    id: 10,
    title: "The Loop Layer",
    shortTitle: "10 — The Loop Layer",
    explanation: `What is it?
The Loop Layer is the outer container that coordinates the entire task lifecycle over multiple beats until a stopping condition is met.

Why does it matter?
Complex tasks cannot be solved in one step. The loop manages state, coordinates worker beats, and evaluates progress over time to ensure completion.

How does it work?
It runs a continuous lifecycle: Start Beat ➔ Execute Harness ➔ Observe Output ➔ Save State (Spine) ➔ Check Stopping Conditions ➔ Loop or Exit.

Simple Example
A file translation agent runs beat-by-beat, translating 10 pages at a time, saving progress to a manifest, and stopping once all pages are marked 'done'.

Key Takeaway
The Loop is the master supervisor that ensures multi-step tasks are carried through to the end.`,
    explanationUrdu: `Yeh Kya Hai?
Loop Layer sab se outer container hai jo complete task lifecycle ko manage aur synchronize karta hai jab tak task finish na ho jaye.

Yeh Kyun Zaroori Hai?
Complex tasks single call mein solve nahi ho sakte. Loop har run ka state save karta hai aur continuous execution track karta hai.

Yeh Kaise Kaam Karta Hai?
Yeh beat-by-beat cycle run karta hai: Beat shuru karna ➔ Harness chalana ➔ State (Spine) save karna ➔ Stop condition check karna ➔ Repeat ya Exit.

Sada Misaal
Aik coding task jo 4 steps mein files create karta hai. Har step ke baad loop state check karta hai ke kya doosra component ready hai.

Aham Nuqta
Loop = Master supervisor jo tasks ko end-to-end follow up karta hai.`,
    analogy: "A project manager supervising a construction crew. They check daily progress (beats), update the schedule chart, and close the project once the building passes inspection.",
    example: "An automated code migration loop running until all TypeScript compilation errors are cleared from the codebase.",
    remember: "Loop manages state and lifecycle across multiple beats.",
    whyMatters: "Without a loop, agentic systems cannot handle complex, long-running processes.",
    diagramType: "loop_lifecycle_c3",
    miniQuestion: {
      question: "Which component of the loop is responsible for holding the persistent state between execution beats?",
      options: [
        "The Prompt template",
        "The system context buffer",
        "The Spine (state file)",
        "The user browser cookies"
      ],
      correct: 2,
      explanation: "Correct! The Spine holds the state history so successive beats know what has already been done."
    }
  },
  {
    id: 11,
    title: "Human Gates & Triggers",
    shortTitle: "11 — Human Gates",
    explanation: `What is it?
Human Gates & Triggers are execution breakpoints where the loop pauses and requests human validation before running risky or expensive actions.

Why does it matter?
Autonomous AI can make errors, overwrite files, or send wrong invoices. Human gates keep humans accountable while utilizing AI speed.

Simple Example
An AI accounting loop verifies an invoice. If it is under $500, it auto-files. If it is above $500 (trigger), the loop pauses and requests human sign-off.

Key Takeaway
Automation does not remove accountability. Use Human Gates for high-risk actions.`,
    explanationUrdu: `Yeh Kya Hai?
Human Gates execution checkpoints hain jahan loop pause ho kar human operator se validation and permission maangta hai.

Yeh Kyun Zaroori Hai?
AI ghaltian kar sakta hai. Risky actions (jaise live payment send karna ya production push) par human gate lagana zaroori hai.

Sada Misaal
Accounting bot invoice check karta hai. Agar value 10,000 PKR se kam ho to auto-approve, agar zyada ho to pause kar ke expert ko notification send karna.

Aham Nuqta
Human verification risky tasks ko control mein rakhti hai jabke simple tasks auto-run hote hain.`,
    analogy: "A bank manager signing off on loans: Teller processes minor transactions automatically, but loan documents above a threshold require the manager's signature.",
    example: "Setting up a validation gate in your loop that requires a Slack slash-command approval to deploy a container.",
    remember: "Risky actions require a Human Gate. Human holds the accountability.",
    whyMatters: "Human gates ensure regulatory compliance and prevent operational accidents.",
    diagramType: "human_gate_box",
    miniQuestion: {
      question: "What is the primary purpose of a Human Gate inside a loop?",
      options: [
        "To shut down the server permanently",
        "To pause the loop and request manual verification/approval for high-risk actions",
        "To force the user to type python scripts",
        "To translate context files automatically"
      ],
      correct: 1,
      explanation: "Correct! Human Gates pause execution on risky tasks to get safety sign-offs from humans."
    }
  },
  {
    id: 12,
    title: "Which Layer Broke?",
    shortTitle: "12 — Which Layer Broke?",
    explanation: `What is it?
Which Layer Broke is the troubleshooting discipline used to isolate agentic failures into Prompt, Context, Harness, or Loop categories.

Why does it matter?
If you fix the wrong layer (e.g. rewriting instructions when files were missing from context), you will introduce new bugs and fail to resolve the error.

How does it work?
- Prompt Failure: Model got all data but disobeyed output formatting rules.
- Context Failure: Model guessed because key reference files were missing.
- Harness Failure: Runtime execution crashed due to unhandled database or script errors.
- Loop Failure: Beat ran repeatedly without making progress (runaway execution).

Simple Example
Your agent outputs correct text but in French instead of English. This is a Prompt Failure. Fix the instructions.

Key Takeaway
Isolate the error to its specific container level before editing any code.`,
    explanationUrdu: `Yeh Kya Hai?
Which Layer Broke debug-discipline hai jo failures ko Prompt, Context, Harness, ya Loop layers mein classify karti hai.

Yeh Kyun Zaroori Hai?
Ghalat layer ko fix karne se time waste hota hai aur new bugs create hote hain. Maslan, missing files ke liye prompt ko edit karna.

Yeh Kaise Kaam Karta Hai?
Check list: 1) Model format instructions bhool gaya? ➔ Prompt fix. 2) Facts missing the? ➔ Context fix. 3) Database tool crash hua? ➔ Harness fix. 4) Loop ruk nahi raha? ➔ Loop fix.

Sada Misaal
AI bot invoice parse karta hai par database update nahi hoti kyunke connection port wrong hai. Yeh Harness failure hai.

Aham Nuqta
Code edit karne se pehle error container level locate karein.`,
    analogy: "A car breakdown check: If the headlight doesn't turn on, you don't rebuild the car engine. You check the light bulb (Prompt) or the wiring harness (Harness).",
    example: "Diagnosing an API timeout limit as a Harness configuration error, and a hallucinated tax rate as a Context layer retrieval error.",
    remember: "Isolate error container: Prompt, Context, Harness, or Loop.",
    whyMatters: "Systematic diagnosis keeps codebase clean and saves debugging time.",
    diagramType: "diagnose_layers_table",
    miniQuestion: {
      question: "If an agent enters an infinite run cycle and never shuts down, which layer has failed?",
      options: [
        "Prompt Layer",
        "Context Layer",
        "Harness Layer",
        "Loop Layer"
      ],
      correct: 3,
      explanation: "Correct! Loop controls runtime lifecycles and stopping conditions. Infinite cycles represent Loop Failures."
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
