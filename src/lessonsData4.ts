import type { Lesson } from "./lessonsData3";

export const course4Lessons: Lesson[] = [
  {
    id: 1,
    title: "Overview & The Mindset Shift",
    shortTitle: "01 — Mindset Shift",
    explanation: "Loop Engineering is the ultimate transition: moving from writing every single prompt manually to designing the system that decides what happens next. Prompting places the human in the cycle at every turn to check and prompt again. Looping automates the schedule, tool runs, verification checks, state management, and next steps.",
    explanationUrdu: "Loop Engineering ka matlab hai mind ka shift: har step par manual prompt likhne ke bajaye aap aik aisi system design karte hain jo khud agla faisla karti hai. Prompting mein insaan ko har bar khud check kar ke doosra prompt likhna parta hai. Looping mein schedule, tool connections, checker tests, aur state management automatic hote hain.",
    analogy: "Riding a bicycle where you have to manually push the pedals for every single yard (Prompting) vs. driving an automated car that maintains speed, maps the route, and checks sensors by itself (Looping).",
    example: "Instead of you reading the output of an AI invoice reader, finding an error, and pasting a new prompt to fix it, a Loop checker automatically runs regex checks, detects matching mismatches, and triggers an editing beat.",
    remember: "Move from writing prompts to designing the system that controls the turns.",
    whyMatters: "Human time is limited. To scale AI, systems must run autonomously while humans provide high-level intent.",
    diagramType: "looping_vs_prompting",
    miniQuestion: {
      question: "What is the core transition in Loop Engineering?",
      options: [
        "Writing longer prompts with more examples",
        "Moving from manual step-by-step prompts to designing systems that control the execution cycle",
        "Using only open-source model files",
        "Removing all databases from the architecture"
      ],
      correct: 1,
      explanation: "Exactly! It shifts the focus from writing individual prompts to engineering the system flow."
    }
  },
  {
    id: 2,
    title: "What Is a Loop?",
    shortTitle: "02 — What Is a Loop?",
    explanation: "A Loop is a system that starts work, performs the task, checks the result, remembers progress, and repeats the execution run until a stopping condition is met. A professional loop is not just an agent running repeatedly; it requires a heartbeat, a worker, a checker, a state manager, and boundary controls.",
    explanationUrdu: "Loop aik aisi system hai jo kaam shuru karti hai, usey perform karti hai, validation check karti hai, progress save rakhti hai, aur tab tak chalti rehti hai jab tak success condition satisfy na ho. Ek safe loop mein hamesha heartbeat, worker, checker, aur safety rules hote hain.",
    analogy: "A restaurant kitchen: A new order arrives (Heartbeat). The cook prepares the meal (Worker). The head chef inspects the presentation and temperature (Checker). If it fails, the cook adjusts it. If it passes, it is served (Stopping Condition).",
    example: "A database clean-up system: Triggered every Sunday. It reads 100 rows, cleans text fields, runs schema verification, logs progress in `spine.json`, and schedules the next row batch.",
    remember: "A loop needs a heartbeat, a worker, a checker, and a spine (saved state).",
    whyMatters: "Running AI without validation checks leads to out-of-control API costs and incorrect data entries.",
    diagramType: "loop_kitchen_analogy",
    miniQuestion: {
      question: "Which of the following represents a true autonomous loop?",
      options: [
        "An AI model that replies to a single user message",
        "A system that runs on a schedule, performs a task, runs tests, saves progress, and decides when to stop",
        "A script that prints 'Hello World' infinitely without databases",
        "A PDF document explaining loop commands"
      ],
      correct: 1,
      explanation: "Yes! A true loop includes heartbeats, workers, checkers, state, and stopping rules."
    }
  },
  {
    id: 3,
    title: "Loop vs Prompting",
    shortTitle: "03 — Loop vs Prompting",
    explanation: "In Prompting, you are the controller: you start every turn, read every output, guess the next command, and work stops when you leave your computer. In Looping, the system is the controller: a schedule or event triggers the run, an independent checker verifies the work, and the spine decides the next action. Autonomy does not remove human ownership of intent and accountability.",
    explanationUrdu: "Prompting mein aap supervisor hain: har message aap likhte hain, output parhte hain, aur agla instruction sochte hain. Looping mein system khud schedule se chalta hai, rules evaluate karta hai, aur next beat trigger karta hai. Autonomy se human responsibility khatam nahi hoti, insaan target (intent) aur final checks (accountability) own karta hai.",
    analogy: "Watering a garden manually with a hand hose (Prompting) vs. installing an automated drip sprinkler system with timer clocks and moisture sensors (Looping).",
    example: "A support agent reads customer emails automatically at night, queries databases via connectors, structures answers, verifies correctness against company policy, and posts a draft reply, waiting only for your final review gate in the morning.",
    remember: "Prompting is manual control. Looping is system control governed by human intent.",
    whyMatters: "Looping allows you to deploy workers that process hundreds of client tickets while you are asleep.",
    diagramType: "prompting_vs_looping_table",
    miniQuestion: {
      question: "What does the human retain even in a highly autonomous loop?",
      options: [
        "The need to write every prompt manually",
        "Intent and final accountability for the system's outcomes",
        "The server hardware ownership",
        "The task of running the script on every turn"
      ],
      correct: 1,
      explanation: "Yes! Humans always own the initial intent (the target) and the final accountability of what ships."
    }
  },
  {
    id: 4,
    title: "Four Layers Connection",
    shortTitle: "04 — Layers Connection",
    explanation: "Loop Engineering is the outermost container of our agentic framework. Inside the Loop resides the Harness, which executes a single beat. Inside the Harness is the Context window. Inside the Context is the Prompt instructions. Swapping prompts won't fix a looping bug (like retrying the same bad tool command); that must be resolved at the Loop layer using stopping conditions.",
    explanationUrdu: "Loop Engineering humaray framework ki sab se baahir wali layer hai. Loop ke andar Harness chalta hai (one beat). Harness ke andar Context hota hai, aur Context ke andar Prompt. Agar AI system bar bar ghalat tool try kar ke paise waste kar raha hai, to prompt badalne se farq nahi parega; ye loop-level limit ki problem hai.",
    analogy: "A watch case: The Loop is the outer waterproof casing. The Harness is the gear assembly. The Context is the dial face. The Prompt is the minute hand. Polishing the minute hand won't fix a broken casing.",
    example: "An agent is stuck in an infinite cycle attempting to install a library. The prompt says 'Do not repeat'. The agent ignores it because it's a loop state problem. The loop layer must notice the duplicate attempt and halt.",
    remember: "Always diagnose the container layer before changing the prompt details.",
    whyMatters: "Saves hours of futile prompt adjustments when the bug is actually a missing database state variable.",
    diagramType: "nested_layers_c4",
    miniQuestion: {
      question: "If an agent repeatedly attempts the same failing code edit 10 times, where should the fix be applied?",
      options: [
        "Prompt Layer (rewrite the prompt instructions to say 'please do not fail')",
        "Loop Layer (implement a no-progress check or maximum beat limit)",
        "Context Layer (delete all files)",
        "Harness Layer (change API credentials)"
      ],
      correct: 1,
      explanation: "Correct! Repetitive attempts require Loop-level controls like no-progress checks."
    }
  },
  {
    id: 5,
    title: "Big Loop vs Small Loop",
    shortTitle: "05 — Big vs Small Loop",
    explanation: "We must distinguish between: 1) Small Loop (Inner Loop): The prompt-response cycle inside a single model tool invocation (e.g. LLM calls a file-read tool and receives text). 2) Big Loop (Outer Loop): The orchestrator that manages multiple beats over time, tracks persistent state in files, handles cron schedules, and evaluates final success rules.",
    explanationUrdu: "Humein do loops ka farq pata hona chahiye: 1. Small Loop (Inner Loop): Aik single model call ke andar ka flow (jaise model call ➔ tool use ➔ result ➔ next action). 2. Big Loop (Outer Loop): Poore run ka manager jo different beats ko manage karta hai, memory file save karta hai, aur final limits check karta hai.",
    analogy: "A worker digging a hole: Small loop is the muscle movement of taking one shovel of dirt, throwing it, and checking the hole depth. Big loop is the manager who decides to start digging at 9 AM, tracks daily targets, and stops the job when the pipe is installed.",
    example: "The Small Loop reads a line of code. The Big Loop runs the nightly test suite, checks if all repository issues are fixed, and sends the final deployment status email.",
    remember: "Small loop = Inner task steps. Big loop = Outer run orchestration.",
    whyMatters: "Small loops are often managed directly by the model (e.g. tool calling). Big loops require explicit software code around the agent.",
    diagramType: "big_vs_small_loop",
    miniQuestion: {
      question: "Which loop is responsible for managing persistent state across different days and running code tests?",
      options: [
        "The Inner Small Loop",
        "The outer Big Loop",
        "The database compiler",
        "The prompt template"
      ],
      correct: 1,
      explanation: "Spot on! The outer Big Loop manages scheduling, persistent state, and high-level verification."
    }
  },
  {
    id: 6,
    title: "Six Parts of a Loop",
    shortTitle: "06 — Six Parts",
    explanation: "A production-ready Big Loop has six essential components working in sync: 1) Heartbeat (what starts the run), 2) Worktree (isolated working folder), 3) Skill (saved rulebooks and guidelines), 4) Subagents (specialized maker and checker roles), 5) Connector/MCP (interfaces with real systems like GitHub or Slack), and 6) State/Spine (durable memory stored outside model inputs).",
    explanationUrdu: "Aik complete loop ke 6 main parts hote hain: 1. Heartbeat (kab shuru hona hai), 2. Worktree (alag space taake files conflict na ho), 3. Skill (save kiye gaye rules), 4. Subagents (maker aur checker roles), 5. Connector/MCP (tools se connect karna), aur 6. State/Spine (persistent memory file).",
    analogy: "A mobile repair shop: Heartbeat is the incoming customer ticket. Worktree is the isolated repair desk. Skill is the manual. Subagents are the solder technician and the tester. Connector is the tools set. Spine is the job sheet tracking status.",
    example: "A pull request auditor: 1) Heartbeat fires on PR. 2) Worktree checks out branch. 3) Skill loads lint guidelines. 4) Coder subagent edits code. 5) GitHub connector posts comment. 6) State saves matching status logs.",
    remember: "Heartbeat ➔ Worktree ➔ Skill ➔ Subagents ➔ Connector ➔ Spine.",
    whyMatters: "Missing any of these parts makes your AI worker unstable or prone to overwriting human files.",
    diagramType: "six_parts_overview",
    miniQuestion: {
      question: "What is the purpose of the 'Worktree' component in the six parts diagram?",
      options: [
        "To translate prompts to Urdu",
        "To provide an isolated, clean workspace so parallel agent actions don't cause file conflicts",
        "To schedule daily runs",
        "To act as the main model API key"
      ],
      correct: 1,
      explanation: "Yes! Worktree provides file isolation to prevent code collisions between agents."
    }
  },
  {
    id: 7,
    title: "Part 1 — Heartbeat & Triggers",
    shortTitle: "07 — Heartbeat",
    explanation: "The Heartbeat is the mechanism that starts a beat or run. Without it, the agent sits idle. There are four primary heartbeat types: 1) In-Session (user starts it manually), 2) Conditional (runs continuously until a specific test passes), 3) Scheduled (runs on a cron schedule, e.g., 9 AM daily), and 4) Event-Driven (triggered by external webhooks, like a new Git commit).",
    explanationUrdu: "Heartbeat wo trigger hai jo loop ko shuru karta hai. Agar heartbeat na ho, to system band parha rehta hai. 4 main heartbeats hain: 1. In-Session (aap khud manually run karein), 2. Conditional (chalta rahe jab tak kaam done na ho), 3. Scheduled (har Monday ya specific time par chalaayein), 4. Event-Driven (jaise new email aane par automatic start ho).",
    analogy: "An automated home alarm system: It can be armed manually (In-Session), fire at 10 PM daily (Scheduled), or trigger when a sensor detects motion (Event-Driven).",
    example: "Setting up a GitHub Action to run an AI review loop whenever a developer opens a Pull Request is an Event-Driven Heartbeat.",
    remember: "Without an automated Heartbeat, you are the heartbeat.",
    whyMatters: "To build a truly hands-off digital worker, you must automate the heartbeat trigger.",
    diagramType: "heartbeat_types",
    miniQuestion: {
      question: "If an AI review system starts automatically every night at 2:00 AM, what heartbeat type is it using?",
      options: [
        "In-Session",
        "Event-Driven",
        "Scheduled",
        "Conditional"
      ],
      correct: 2,
      explanation: "Correct! Runs triggered by time intervals are Scheduled Heartbeats."
    }
  },
  {
    id: 8,
    title: "Part 2 — Worktree Isolation",
    shortTitle: "08 — Worktree Isolation",
    explanation: "When agents modify files, they must work in isolated areas (Worktrees). If multiple parallel agent loops run on the same folder, they will overwrite each other's files, read half-written code, or cause compile blocks. Best practice: 'One task, one clean checkout'.",
    explanationUrdu: "Jab multiple AI workers files par kaam karein, to unhein alag-alag areas (Worktrees) dene chahiye. Agar sab aik hi folder ko use karenge, to files crash ho jayengi ya code overwrite ho jayega. Rule: Har single task ke liye alag clean checkout branch banana.",
    analogy: "Two painters working on the same canvas at the same time without talking. They will paint over each other's strokes, ruining the picture. Giving them separate canvases (Worktrees) to merge later fixes this.",
    example: "An AI support loop creates a new git branch `agent-issue-44` and checkouts to a temporary directory. It performs coding and testing there. Only when passes, it creates a Pull Request to merge.",
    remember: "Isolate workspaces to prevent agents from colliding.",
    whyMatters: "Crucial for running concurrent agents on server environments without corrupting codebase files.",
    diagramType: "worktree_conflict",
    miniQuestion: {
      question: "What is the primary risk of not using isolated worktrees for parallel agents?",
      options: [
        "The model will run out of tokens",
        "Agents will clash and overwrite each other's files, causing broken code states",
        "The script will only compile in python",
        "API calls will double in cost"
      ],
      correct: 1,
      explanation: "Yes! Workspace isolation prevents parallel files corruption."
    }
  },
  {
    id: 9,
    title: "Part 3 — Skill (Saved Rules)",
    shortTitle: "09 — Skill",
    explanation: "A Skill is a saved directory of instructions, scripts, and guidelines loaded by the agent at the start of every run. Instead of pasting 100 lines of coding guidelines into every prompt, the loop reads the Skill directory, keeping prompts clean and ensuring the agent knows the project rules from the first beat.",
    explanationUrdu: "Skill aik save kiya gaya rulebook folder hota hai jo har new run ke shuru mein read kiya jata hai. Har prompt mein guidelines likhne ke bajaye, loop is skill directory ko access karta hai. Is se instructions consistently follow hoti hain aur prompt space clean rehti hai.",
    analogy: "A company's employee handbook. Instead of telling the new hire the dress code and database password every morning, you give them the handbook on day one.",
    example: "Having a folder `skills/code-review` containing check lists and lint commands. When the reviewer agent starts, the loop automatically loads these files into the context.",
    remember: "Skill directory = persistent project rules and execution guidelines.",
    whyMatters: "Enforces codebase consistency without bloating the prompt window with duplicate text.",
    diagramType: "skill_loader",
    miniQuestion: {
      question: "Why should we use a Skill directory instead of copy-pasting rules into every prompt?",
      options: [
        "It speeds up compilation",
        "It keeps prompts clean and ensures project rules are loaded consistently at every run",
        "It allows models to run offline",
        "It is a requirement for using HTML"
      ],
      correct: 1,
      explanation: "Exactly! It maintains consistency and keeps your core prompts concise."
    }
  },
  {
    id: 10,
    title: "Part 4 — Subagents & Maker-Checker",
    shortTitle: "10 — Maker-Checker",
    explanation: "Do not let the model that creates the code be the only judge of its success. Maker-Checker architectures split work: the Maker Subagent builds/writes, and the Checker Subagent evaluates the output against explicit tests or guidelines. If the Checker fails, the Loop triggers another correction beat.",
    explanationUrdu: "Jis AI model ne code likha hai, usey akele khud success decide nahi karni chahiye. 'Maker-Checker' system mein kaam aik model/prompt karta hai (Maker), aur doosra model ya test checks usey verify karta hai (Checker). Agar check fail ho, to loop new correction cycle start karta hai.",
    analogy: "A magazine: The author writes the article (Maker). The editor reads it for spelling, layout, and legal compliance (Checker). The writer doesn't publish without the editor's check.",
    example: "Zia Developer writes a SQL script. Zia Checker runs a schema validator tool and reports: 'Warning: missing foreign keys.' Zia Developer reads the report and rewrites the script.",
    remember: "Maker creates. Checker verifies. Loop coordinates.",
    whyMatters: "Prevents hallucinations where agents report code works perfectly while it actually has bugs.",
    diagramType: "maker_checker_loop",
    miniQuestion: {
      question: "Under the Maker-Checker architecture, who decides if a task is successfully complete?",
      options: [
        "The Maker agent only",
        "The Checker agent/validation test results",
        "The API billing portal",
        "The user on every single beat"
      ],
      correct: 1,
      explanation: "Yes! The Checker evaluates and approves the Maker's work."
    }
  },
  {
    id: 11,
    title: "Part 5 — Connectors & MCP",
    shortTitle: "11 — Connectors & MCP",
    explanation: "Connectors bridge the gap between AI reasoning and real systems execution. Model Context Protocol (MCP) provides a standard socket to connect models to local systems, file paths, databases, Slack, or GitHub. Suggesting changes is just dialogue; executing them requires secure connectors.",
    explanationUrdu: "Connectors AI reasoning aur real system actions ko connect karte hain. MCP aik standard connector port hai jo model ko Slack, databases ya files read/write karne ki capability deta hai. Sirf batana kafi nahi hota, write/execute karne ke liye connectors zaroori hain.",
    analogy: "A person's brain (AI Model) wanting to write a letter. The arm and pen are the connectors that translate thoughts into real ink on paper.",
    example: "The loop uses a GitHub connector to post a code comment, and a Slack connector to notify the developer that the build passed successfully.",
    remember: "Connectors turn AI suggestions into actual execution actions.",
    whyMatters: "Without secure connectors, AI can only talk and cannot execute changes inside company databases.",
    diagramType: "mcp_socket",
    miniQuestion: {
      question: "What role do Connectors and MCP play in Loop architectures?",
      options: [
        "They translate prompts into different fonts",
        "They allow AI models to connect to and execute actions inside databases, Slack, or file systems",
        "They check the internet connection speed",
        "They host the dashboard CSS styling"
      ],
      correct: 1,
      explanation: "Correct! Connectors and MCP provide the ports for actual system integration."
    }
  },
  {
    id: 12,
    title: "Part 6 — State / Memory (Spine)",
    shortTitle: "12 — Spine & State",
    explanation: "Models are stateless; they forget everything when a call session ends. The 'Spine' is the persistent state file (like `state.json` or `progress.md`) stored on disk. The Loop reads the Spine at the start of every beat to know what tasks are done, what is next, and how much budget is left.",
    explanationUrdu: "AI models stateless hote hain; call session band hotay hi sab bhool jate hain. 'Spine' ek file hoti hai (jaise state.json) jo computer par save rehti hai. Loop har beat ke shuru mein is file ko read karta hai taake usey pata ho ke kya ho chuka hai aur aage kya karna hai.",
    analogy: "A nurse's shift chart. When a new shift begins, they don't guess what medicine was given; they read the chart to continue patient care safely.",
    example: "If task 3 fails, the loop logs `status: failed, attempt: 2` in the Spine. When restarted, it resumes task 3 rather than executing task 1 and 2 again.",
    remember: "No Spine = no memory between runs. Always persist progress to disk.",
    whyMatters: "Enables agents to recover from network disconnects or API errors and resume work seamlessly.",
    diagramType: "spine_flow",
    miniQuestion: {
      question: "What is the Spine in Loop Engineering?",
      options: [
        "A physical hardware cable connecting server racks",
        "A persistent state database/file stored on disk that connects progress between runs",
        "The instruction template text",
        "The model's internal neural layer weights"
      ],
      correct: 1,
      explanation: "Yes! The Spine is the external state tracker that saves progress across different beats."
    }
  },
  {
    id: 13,
    title: "One Complete Loop Lifecycle",
    shortTitle: "13 — Loop Lifecycle",
    explanation: "The lifecycle of a single loop run proceeds sequentially: Heartbeat triggers ➔ Discover (scan issues/tasks queue) ➔ Worktree isolation ➔ Skill loading ➔ Maker execution ➔ Checker validation ➔ Human Gate (if risky) ➔ Spine State save ➔ Next beat schedule.",
    explanationUrdu: "Aik complete loop ka execution lifecycle ye hai: Heartbeat active ➔ Discover (kaam search karna) ➔ Worktree setup ➔ Skill read ➔ Maker run ➔ Checker test ➔ Human Gate (agar approval chahiye) ➔ Spine save ➔ Schedule next run.",
    analogy: "A mail carrier's day: Clock in (Heartbeat) ➔ Load bag (Discover) ➔ Sort by street (Worktree) ➔ Check guide (Skill) ➔ Deliver (Maker) ➔ Log receipts (Checker) ➔ Return undelivered mail (State/Next beat).",
    example: "A database auditor: Heartbeat detects a change ➔ Discover scans modified rows ➔ Coder fixes formatting ➔ Compiler tests matches ➔ State saves audited index ➔ Stops.",
    remember: "Understand the lifecycle to isolate failures in the workflow pipeline.",
    whyMatters: "Helps you pinpoint exactly where a bottleneck exists in automated processes.",
    diagramType: "lifecycle_pipeline_c4",
    miniQuestion: {
      question: "At which phase of the lifecycle does the loop scan for available tasks or issues?",
      options: [
        "Maker execution",
        "Discover phase",
        "Human Gate approval",
        "Heartbeat shutdown"
      ],
      correct: 1,
      explanation: "Exactly! The Discover phase scans and loads tasks into the queue."
    }
  },
  {
    id: 14,
    title: "Stopping Conditions & Safety",
    shortTitle: "14 — Stopping Conditions",
    explanation: "A Stopping Condition is a testable rule that tells the loop when execution must terminate. Loops must have: 1) Success Condition (all tasks pass checker), 2) Attempt Limits (max 10 beats), and 3) Cost/Token Limits. Without explicit stopping rules, agents will loop infinitely, wasting money on recurring errors.",
    explanationUrdu: "Stopping Condition aik rule hota hai jo loop ko roakta hai. Loop mein 3 checks zaroori hain: 1. Success condition (checker pass karey), 2. Attempt limit (max 10 attempts), 3. Cost limit. Agar ye safety rules na hoon, to error aane par system infinite calls karta rahega.",
    analogy: "A washing machine: It stops when the timer runs out (Limit), when the water sensors say it is clean (Success), or when the door is opened (Safety halt).",
    example: "Setting `max_attempts: 5` in the loop configuration. If the code compiler fails 5 times, the loop stops, saves status as 'manual_review_needed', and alerts the developer.",
    remember: "Never deploy a loop without max attempt limits and budget caps.",
    whyMatters: "Prevents massive API bill shocks when agents get stuck in recursive error logic.",
    diagramType: "stopping_conditions_grid",
    miniQuestion: {
      question: "Why should we enforce maximum attempt limits in loops?",
      options: [
        "To make the code compile faster",
        "To prevent infinite execution loops and billing shocks when tools fail repeatedly",
        "Because models cannot process more than 2 calls",
        "To format the output as JSON tables"
      ],
      correct: 1,
      explanation: "Yes! Attempt limits act as safety breaks when tools fail repeatedly."
    }
  },
  {
    id: 15,
    title: "No-Progress Checks",
    shortTitle: "15 — No-Progress Checks",
    explanation: "A loop must evaluate if it is making progress. If Attempt 1, Attempt 2, and Attempt 3 all produce the exact same error, the agent is stuck in a loop. A No-Progress check compares the error state of the current beat with the previous beat. If identical, the loop must STOP and request human intervention.",
    explanationUrdu: "No-Progress check ye dekhta hai ke kya system koi progress kar raha hai. Agar Attempt 1, 2, aur 3 par same error code ya file text aa raha hai, to system phasa hua hai. Loop ko current aur past error compare karna chahiye; agar same hai to system STOP ho jaye.",
    analogy: "A driver stuck in a muddy ditch. Spinning the tires faster and faster (Attempts) does not help. They must stop and seek help (No-Progress check).",
    example: "The compiler reports `SyntaxError: Unexpected token` at line 12. In the next beat, the agent edits the file but compilation returns the exact same line 12 error. The loop halts because the state is unchanged.",
    remember: "Repeating the same attempt is not progress. Halt and alert.",
    whyMatters: "Saves tokens and prevents compounding code issues in code automation pipelines.",
    diagramType: "no_progress_check_flow",
    miniQuestion: {
      question: "What does a No-Progress check do in loop execution?",
      options: [
        "It speeds up database search indexing",
        "It checks if attempts are producing the exact same errors or states, and halts the loop to prevent waste",
        "It writes prompt rules automatically",
        "It measures internet connection latency"
      ],
      correct: 1,
      explanation: "Exactly! It stops the run if attempts are producing identical errors without improvement."
    }
  },
  {
    id: 16,
    title: "Token & Cost Control",
    shortTitle: "16 — Token Control",
    explanation: "Autonomous loops can consume massive amounts of tokens, API calls, and compute bandwidth in short periods. FDEs must implement budget meters. Real costs depend on the model provider, the size of files in the context window, and the number of beats. Budget trackers log current cost and halt before thresholds are exceeded.",
    explanationUrdu: "Autonomous loops boht tezi se API calls, tokens, aur compute resources consume kar sakte hain. FDEs ko hamesha 'budget meters' lagane chahiye. Real cost context window ke size aur model queries par depend karti hai. Budget logging cost cross hote hi process block karti hai.",
    analogy: "A prepaid electricity meter. You load $20. Once the AC consumes $20 worth of power, the meter shuts down the electricity automatically, preventing an unexpected bill.",
    example: "A loop tracks token consumption. Beat 1 consumes 15 units. Beat 2 consumes 25 units. Threshold is 50. The loop logs total 40, notices beat 3 would exceed 50, and halts.",
    remember: "Always track token consumption and place a hard cost cap in your outer loop code.",
    whyMatters: "Protects your client and yourself from massive credit billing charges.",
    diagramType: "cost_budget_meter",
    miniQuestion: {
      question: "Which factor primarily drives the token cost in an autonomous loop?",
      options: [
        "The background grid animation stylesheet size",
        "The context window density (files size) and the total number of model calls (beats)",
        "The username string length",
        "The computer's operating system version"
      ],
      correct: 1,
      explanation: "Yes! Context window size and the frequency of model calls drive the majority of API costs."
    }
  },
  {
    id: 17,
    title: "Human Gates & boundary Controls",
    shortTitle: "17 — Human Gates",
    explanation: "A Human Gate is a boundary control. It does not mean humans do the work; it means humans approve risky or ambiguous actions. High-risk actions (deploying to production, writing money transactions, editing core master data) must pass a manual gate. Guessing during ambiguous states leads to severe operational errors.",
    explanationUrdu: "Human Gate boundary control hai. Iska matlab ye nahi ke human sara kaam karega, balkay risky ya high-ambiguity actions ko approve karega. Safe architecture mein automatic code run hota hai par final execution (money transfer, production merge) human approval ke baad hoti hai.",
    analogy: "A automated bank vault: The system verifies the fingerprint and credentials, but requires the security officer to turn the physical key (Human Gate) before unlocking.",
    example: "An AI system proposes matching two different invoices to the same client record. The match confidence is 0.51. Instead of guessing, the loop sends a Slack approval form. The run pauses until the user clicks 'Approve'.",
    remember: "Automation goal = human judgment only where human decisions are needed.",
    whyMatters: "Protects production environments from destructive agent decisions.",
    diagramType: "human_gate_boundary",
    miniQuestion: {
      question: "What is the primary objective of using Human Gates in loop architectures?",
      options: [
        "To make the model run slower",
        "To keep humans in control of high-risk or ambiguous actions while automating repetitive steps",
        "To replace the need for writing validation tests",
        "To enforce developers to use Python only"
      ],
      correct: 1,
      explanation: "Correct! Human Gates balance automation speed with human oversight and safety."
    }
  },
  {
    id: 18,
    title: "Claude Code vs OpenCode",
    shortTitle: "18 — Claude vs OpenCode",
    explanation: "Different tools implement loops in different ways. Some tools (like Claude Code) have loop execution, context curators, and tool handlers built directly into the packaged product. OpenCode approaches separate the agent worker from an external scheduler (like Node.js or Python). The architecture of loops (heartbeat, checker, spine) is durable across any tool.",
    explanationUrdu: "Har system loop different tarah se implement karta hai. Kuch systems (e.g. Claude Code) ke andar tool run, context curator, aur loops pehle se built-in hote hain. OpenCode system mein agent worker separate hota hai aur outer scheduler (jaise Python script) usey control karta hai. Core rules sab ke liye same hain.",
    analogy: "An all-in-one smart home hub (Claude Code) vs. building your own automation using Raspberry Pi, sensors, and custom scripts (OpenCode). Both perform the same task.",
    example: "Instead of hard-coding Claude Code flags, you write a standard node.js wrapper that monitors database events and calls Claude API, managing the heartbeat outside the model.",
    remember: "Focus on the loop architecture, not the specific CLI tool version.",
    whyMatters: "Tools change constantly. Understanding loop patterns ensures your skills remain vendor-neutral.",
    diagramType: "tool_neutrality_comparison",
    miniQuestion: {
      question: "Why should an FDE focus on loop patterns instead of specific tool CLI flags?",
      options: [
        "CLI flags are illegal to customize",
        "Tool specifications change frequently, but the core loop architecture patterns are durable and vendor-neutral",
        "Models do not understand command line flags",
        "All cloud hosting systems use the same command script"
      ],
      correct: 1,
      explanation: "Yes! Understanding underlying patterns makes you a flexible and vendor-neutral architect."
    }
  },
  {
    id: 19,
    title: "Real Projects Walkthrough",
    shortTitle: "19 — Real Projects",
    explanation: "Let's review three real-world loops: 1) ISS Position Tracker: An in-session loop fetching space station coordinates every 10 seconds. 2) Portfolio Builder: A conditional loop that reads CV text, drafts page components, runs validation checks, edits errors, and stops when HTML compile passes. 3) Doorbell reviewer: An event-driven PR scanner posting reviewer logs.",
    explanationUrdu: "Teen real-world loops dekhein: 1. ISS Tracker: Manual input se start hone wala loop jo space station coordinates har 10 seconds par fetch karta hai. 2. CV Portfolio Builder: Conditional loop jo CV read karta hai, HTML page banata hai, tests run karta hai aur tab stop hota hai jab design check pass ho jaye. 3. PR reviewer doorbell.",
    analogy: "A student practicing driving: inside an empty lot (ISS tracker), on the highway (Portfolio builder), and delivering package routes autonomously (PR doorbell).",
    example: "The CV portfolio builder reads a doc, generates `index.html`, runs a browser parser checker, finds a missing CSS import, edits the file, and runs checker again.",
    remember: "Real projects validate your loop design constraints.",
    whyMatters: "Shows you how theoretical components (heartbeat, checker, spine) operate in production files.",
    diagramType: "real_projects_walkthrough",
    miniQuestion: {
      question: "Which loop type is demonstrated by an automated GitHub review system that triggers only when a new PR is opened?",
      options: [
        "In-Session Loop",
        "Event-Driven Loop",
        "Scheduled Loop",
        "Manual prompt session"
      ],
      correct: 1,
      explanation: "Exactly! Webhook triggers (like PR events) utilize Event-Driven heartbeats."
    }
  },
  {
    id: 20,
    title: "Practice Projects & Failure Lab",
    shortTitle: "20 — Practice & Failures",
    explanation: "To master loops, practice across 8 levels (file organizers, PR reviewers, customer support triage). Study the Failure Lab to recognize diagnostic signatures: 1) No heartbeat ➔ One run only. 2) No spine ➔ Agent forgets task status on crash. 3) No checker ➔ Silent hallucination. 4) No stops ➔ Infinite billing. 5) Shared worktree ➔ Overwritten files.",
    explanationUrdu: "Loops seekhney ke liye 8 levels par practice karein (file managers, ticket routers). Failure Lab ko study karein taake problems pehchan sakein: 1. Heartbeat nahi ➔ single run. 2. Spine nahi ➔ crash par data bhool jana. 3. Checker nahi ➔ ghalat code ko pass bolna. 4. Stops nahi ➔ infinite bills. 5. Shared workspace ➔ code conflict.",
    analogy: "A flight simulator: testing what happens when the engine shuts down, the landing gear jams, or the maps fail, preparing you for real-world flights.",
    example: "An agent is deployed without a Spine. It completes 99 database matching records. On record 100, the network disconnects. When restarted, the agent processes all 100 records again, wasting API costs.",
    remember: "Identify loop failures by mapping symptoms back to the missing component.",
    whyMatters: "Debugging loops requires checking the state logs and safety limits before changing the model configuration.",
    diagramType: "failure_lab_matrix",
    miniQuestion: {
      question: "If an agent completes 50 steps, crashes due to network, and has to restart from step 1, what is missing?",
      options: [
        "A stronger model reasoning temperature",
        "A persistent Spine (saved state) to resume from step 50",
        "A new formatting prompt",
        "A faster database query index"
      ],
      correct: 1,
      explanation: "Yes! A persistent Spine lets the loop resume progress after crashes."
    }
  }
];

export const course4Flashcards = [
  {
    term: "Loop",
    definition: "System that starts, executes, verifies, and schedules beats until safety limits or success checks pass.",
    example: "Nightly accounting reconciliation pipeline running files audits."
  },
  {
    term: "Beat",
    definition: "One single execution step governed by the harness (model call + tool run).",
    example: "Reading a file, applying edits, and compiling the result."
  },
  {
    term: "Heartbeat",
    definition: "The trigger (schedule, event, webhook, manual) that starts a loop.",
    example: "Every morning at 8:00 AM cron starts the code reviewer."
  },
  {
    term: "Worktree",
    definition: "Isolated file workspace to prevent parallel agents from corrupting repository files.",
    example: "Checking out branch `agent-bug-fix-4` to a separate temp folder."
  },
  {
    term: "Skill",
    definition: "A directory of rules, styles, and command guidelines loaded at every run.",
    example: "Enforcing coding lint standards from `skills/ts-rules` without prompt bloat."
  },
  {
    term: "Subagent",
    definition: "A nested helper agent stack with its own loop, context, and prompts.",
    example: "A coder subagent writing code while a tester subagent validates it."
  },
  {
    term: "Maker",
    definition: "The agent role that creates the draft code, document, or matching proposal.",
    example: "Zia Developer generating a full React component."
  },
  {
    term: "Checker",
    definition: "The independent agent or test function validating the Maker's work quality.",
    example: "Running `jest` tests to verify component outputs."
  },
  {
    term: "Connector",
    definition: "Interface/protocol linking reasoning to execution actions in external software.",
    example: "GitHub API keys allowing the agent to merge code branches."
  },
  {
    term: "MCP",
    definition: "Model Context Protocol. Standard plug socket for model-system communication.",
    example: "Connecting local database logs directly to Claude API."
  },
  {
    term: "State",
    definition: "Progress and variables data saved on disk outside model sessions.",
    example: "Writing `status: matches_verified, records: 400` to disk."
  },
  {
    term: "Spine",
    definition: "The durable state tracker connecting different beats and runs.",
    example: "A JSON file allowing the agent to resume task 4 after a power failure."
  },
  {
    term: "Stopping Condition",
    definition: "Rules-based logic defining when a loop must terminate.",
    example: "Halt if attempts exceed 10 or checker returns TRUE."
  },
  {
    term: "No-Progress Check",
    definition: "Comparing sequential attempts to halt if identical errors repeat.",
    example: "Stopping the run if the same compiler warning occurs twice in a row."
  },
  {
    term: "Human Gate",
    definition: "Manual check boundary for dangerous operations or low confidence metrics.",
    example: "A Slack button asking approval before deploying the server live."
  },
  {
    term: "Intent",
    definition: "The high-level target and instructions defined by the human operator.",
    example: "Specifying: 'Audit this week's billing sheets for tax compliance.'"
  },
  {
    term: "Accountability",
    definition: "Human ownership of the final code, metrics, and outcomes that deploy.",
    example: "Signing off on the AI-proposed shipping ledger changes."
  },
  {
    term: "Scheduled Loop",
    definition: "Runs started at specific cron-time intervals.",
    example: "Auditing database entries every Friday at midnight."
  },
  {
    term: "Event-Driven Loop",
    definition: "Runs started by external alerts or webhooks.",
    example: "Starting a code test loop when a developer pushes a branch."
  },
  {
    term: "In-Session Loop",
    definition: "Interactive session started manually by the developer.",
    example: "Running `npx claude-code` from the local workspace terminal."
  }
];

export const course4QuizQuestions = [
  {
    question: "What is the primary definition of a Loop in Loop Engineering?",
    options: [
      "A fast code execution pipeline for graphics cards",
      "A system that starts work, performs it, checks it, remembers state, and runs again when needed",
      "A prompting pattern for writing longer sentences",
      "A database backup table copy"
    ],
    correct: 1,
    explanation: "Loop ka matlab hai trigger ➔ run ➔ check ➔ save state ➔ repeat ka automated cycle."
  },
  {
    question: "What is the mindset shift that Loop Engineering represents?",
    options: [
      "Learning more programming languages",
      "Moving from manual prompts on every turn to designing systems that control the execution cycle",
      "Avoiding using agents in business files",
      "Charging hourly rates instead of outcome contracts"
    ],
    correct: 1,
    explanation: "Manual prompt likhne ke bajaye aap aik autonomous state machine (loop) design karte hain."
  },
  {
    question: "Which component acts as the 'Spine' in loop design?",
    options: [
      "The cloud server hosting company",
      "Durable state file stored on disk that connects progress between runs",
      "The first line of the prompt template",
      "The compiler script"
    ],
    correct: 1,
    explanation: "Spine external JSON/progress tracker hota hai jo data crash ke baad bhi tasks continue rakhne mein madad deta hai."
  },
  {
    question: "Why do we require 'Worktree Isolation' for parallel agents?",
    options: [
      "To save API billing costs",
      "To prevent agents from overwriting each other's files and causing code clashes",
      "Because models cannot read nested directories",
      "To enforce strict HTML validation"
    ],
    correct: 1,
    explanation: "Workspace isolation parallel branches par chalne wale agents ke collision ko prevent karta hai."
  },
  {
    question: "What is the responsibility of the Checker in Maker-Checker architectures?",
    options: [
      "Writing the first draft of the code",
      "Independently validating the Maker's work using tests, validations, or rules",
      "Managing the server login credentials",
      "Formatting the prompts layout"
    ],
    correct: 1,
    explanation: "Checker kaam check karta hai, taake validation aur quality control independent rahein."
  },
  {
    question: "What defines a Scheduled Heartbeat?",
    options: [
      "A user clicking a button manually",
      "Triggering loop runs at specific cron time intervals (e.g. every Sunday night)",
      "An external webhook alert",
      "A compile error halt"
    ],
    correct: 1,
    explanation: "Time-based scheduler (cron) se start hone wala trigger Scheduled Heartbeat hai."
  },
  {
    question: "What is the purpose of the 'Skill' directory?",
    options: [
      "To measure developer typing speed",
      "To store reusable project rules and code guidelines loaded automatically at start",
      "To host the database catalog files",
      "To increase API model temperature"
    ],
    correct: 1,
    explanation: "Skill folder reusable parameters, styling checks, aur directives ko hold karta hai without prompt bloat."
  },
  {
    question: "What does Model Context Protocol (MCP) provide?",
    options: [
      "A new formatting language",
      "A standardized connector bridge to link models to files, databases, and local systems",
      "A code compiler for python scripts",
      "An internet hosting package"
    ],
    correct: 1,
    explanation: "MCP standardized port standard hai jo models ko safely local files aur connections access karne deta hai."
  },
  {
    question: "If an agent has no Stopping Conditions, what can occur?",
    options: [
      "The program runs faster",
      "The agent will repeat attempts infinitely in case of errors, consuming massive API tokens",
      "The local storage gets deleted",
      "The model switches to Urdu language automatically"
    ],
    correct: 1,
    explanation: "Stopping rules (safeguards) na hone se system recursive tools call mein phas kar bills inflate karta hai."
  },
  {
    question: "What is the function of a No-Progress check?",
    options: [
      "To log human login sessions",
      "To halt the loop if attempts return identical errors or states without improvement",
      "To update database indices",
      "To test CSS styling components"
    ],
    correct: 1,
    explanation: "No-Progress check current aur past errors compare karta hai, match hone par repeat cycles roakta hai."
  },
  {
    question: "When is a 'Human Gate' boundary control triggered?",
    options: [
      "Only during cloud service shutdowns",
      "At predefined checkpoints of ambiguity, risky execution, or high budget steps",
      "After every single word is parsed",
      "Never, because it breaks autonomous rules"
    ],
    correct: 1,
    explanation: "High risk actions (production deployment, transactions) ya ambiguity par human approval (Human Gate) trigger hota hai."
  },
  {
    question: "What role does the Human keep in Loop Engineering?",
    options: [
      "Running commands on every beat manually",
      "Defining target intent and maintaining final accountability for what compiles and deploys",
      "Replacing all model layers with manually written loops",
      "Writing all text files in Urdu"
    ],
    correct: 1,
    explanation: "System autonomous ho sakta hai but final intent (goal) aur output check ki accountability insaan ki rehti hai."
  },
  {
    question: "In the Big Loop vs Small Loop distinction, what does the Small Loop manage?",
    options: [
      "Daily cron schedules",
      "The prompt-response execution inside a single beat or model call",
      "The database backup files",
      "The budget limits tracking"
    ],
    correct: 1,
    explanation: "Small loop single beat/call ke tools aur model responses ko handle karta hai."
  },
  {
    question: "Why should we avoid hard-coding tool flags in FDE loop systems?",
    options: [
      "Flags are illegal to edit",
      "Tool designs and CLIs change constantly, but loop architecture logic is vendor-neutral and durable",
      "Flags slow down compiler checks",
      "Models cannot parse flags correctly"
    ],
    correct: 1,
    explanation: "Tools update hote rehte hain par design pattern (heartbeat, checker, spine) neutral aur constant rehte hain."
  },
  {
    question: "If an agent runs successfully, edits files, but fails the compiler check, what should the loop do?",
    options: [
      "Shut down the database",
      "Log the failure, save current state to the Spine, and run a new correction beat using error logs",
      "Deploy the broken files to production anyway",
      "Ask the model to rewrite the prompt role"
    ],
    correct: 1,
    explanation: "Compiler check fail hone par Loop error logs compile karke corrections ke liye doosra beat request karta hai."
  },
  {
    question: "What is 'Dogfooding' in software engineering?",
    options: [
      "Buying pet food on online stores",
      "Using the created software product internally on your own workflows to discover flaws",
      "Running tests on dummy databases only",
      "Generating random text codes"
    ],
    correct: 1,
    explanation: "Apna system khud ke projects ya maintenance par chalana taake weaknesses explore ho saken."
  },
  {
    question: "If a loop has no Heartbeat, what happens?",
    options: [
      "The agent runs faster",
      "The system can only execute once manually and will not fire automatically again",
      "The local files get corrupted",
      "The API billing is free"
    ],
    correct: 1,
    explanation: "Bina automated heartbeat trigger ke system automated recurring executions perform nahi kar sakta."
  },
  {
    question: "What represents a Connector?",
    options: [
      "A database indexing tool",
      "An interface/code library that translates AI outputs into actions on real systems (like GitHub APIs)",
      "The browser window grid layout",
      "The server power cables"
    ],
    correct: 1,
    explanation: "Connectors AI ideas/reasoning ko physical actions (write, commit, api post) mein execute karte hain."
  },
  {
    question: "What is an Event-Driven trigger?",
    options: [
      "A weekly timer firing at 9 AM",
      "An alert webhook from systems (e.g. PR opened or support ticket filed) that starts the loop",
      "A code compilation success alert",
      "A manual command run"
    ],
    correct: 1,
    explanation: "External actions (webhook alert) se dynamic trigger hone wala loop execution flow."
  },
  {
    question: "What is the danger of a Shared Workspace directory among parallel agents?",
    options: [
      "Token limit errors",
      "Agents overwriting each other's files, causing logic errors and compilation failures",
      "The models run out of cache storage",
      "The database rows get deleted"
    ],
    correct: 1,
    explanation: "Shared folder conflicts create karte hain kyunki agents parallel edits se file templates crash kar dete hain."
  },
  {
    question: "How does the outer Big Loop track how much budget is remaining?",
    options: [
      "By querying OpenAI website logs",
      "By recording spent token metrics to the Spine state file on every beat and checking it against maximum thresholds",
      "By checking server temperatures",
      "By asking the user for credit details on every step"
    ],
    correct: 1,
    explanation: "Spine file ke andar beats count aur token logs add kar ke check and stop limits apply ki jati hain."
  },
  {
    question: "What defines the Success Condition in a conditional loop?",
    options: [
      "The agent outputs any response text",
      "All verification tests pass, requirements check returns true, and the Checker signs off",
      "The database matches the initial index",
      "The budget is fully consumed"
    ],
    correct: 1,
    explanation: "Tests matching, compile passing, aur checker verification complete hone par Success verify hoti hai."
  },
  {
    question: "Which of the following is a failure of not having a Spine?",
    options: [
      "The models return HTML formatted tables",
      "If the agent halts, it cannot resume from the last completed task and must start over from step 1",
      "The system runs out of database memory",
      "The prompt characters are limited to 10"
    ],
    correct: 1,
    explanation: "Spine na hone se memory loss hota hai aur crashes ke baad execution bilkul step 1 se restart karni parti hai."
  },
  {
    question: "What is the primary role of the Coder Maker in a maker-checker team?",
    options: [
      "To review security compliance logs",
      "To produce the actual code edits, matches, or tasks based on input requirements",
      "To click the manual approval buttons",
      "To set the scheduled loop timers"
    ],
    correct: 1,
    explanation: "Maker ka focus raw output, logic generation, ya initial matches complete karne par hota hai."
  },
  {
    question: "What is the benefit of using sub-agents for reading bulk PDF data?",
    options: [
      "It completely avoids tool connections",
      "It reads files in isolated context windows, preventing the main agent's context from getting bloated",
      "It runs 100% offline",
      "It translates files to Urdu"
    ],
    correct: 1,
    explanation: "Subagents main context window ko limit mein rakhte hain by processing files in nested branches."
  },
  {
    question: "In the Loop Design Canvas, what does defining 'Risky Actions' help determine?",
    options: [
      "The model temperature values",
      "The placement triggers for Human Gates",
      "The index sorting of databases",
      "The UI background color"
    ],
    correct: 1,
    explanation: "Risky actions pre-planned location signals hote hain jahan system human control boundaries verify karta hai."
  },
  {
    question: "Which loop fires continuously until a test criteria returns true?",
    options: [
      "Scheduled Loop",
      "Conditional Loop (Run Until Done)",
      "In-Session Loop",
      "Event-Driven Loop"
    ],
    correct: 1,
    explanation: "Conditional loop (run until done) success verify hone tak steps continuously execute karta hai."
  },
  {
    question: "Can an agent modify files outside its worktree branch?",
    options: [
      "Yes, agents always scan all system files",
      "No, safe design limits the agent's file system queries strictly to its isolated worktree directory",
      "Yes, but only in scheduled loops",
      "No, because directories are compiled offline"
    ],
    correct: 1,
    explanation: "Safety structures check constraints apply karti hain jo agents ko isolated worktree folders tak restrict karti hain."
  },
  {
    question: "What represents the 'Intent' in a loop?",
    options: [
      "The model token calculations",
      "The initial instructions, targets, and criteria outlined by the human operator",
      "The system state database backup",
      "The CLI commands flags list"
    ],
    correct: 1,
    explanation: "Intent wo goal aur guideline parameters hain jo human rules list mein feed karta hai."
  },
  {
    question: "Why does the FDE roadmap recommend outcome-based contracts for loop engineering services?",
    options: [
      "To charge based on model speeds",
      "Because loops run autonomously, making hourly billing inefficient and unrepresentative of the massive automation value delivered",
      "Because it is required by databases",
      "To write less typescript files"
    ],
    correct: 1,
    explanation: "Loops background execution automate karte hain, so manual hours billing is scaling value ko match nahi karti."
  },
  {
    question: "What is the final status of a loop run if attempt limits are reached without success checks passing?",
    options: [
      "Success is printed to dashboard anyway",
      "Halt with failure status logged to the Spine, alerting the human operator",
      "The system deletes all code directories",
      "The schedule is permanently deleted"
    ],
    correct: 1,
    explanation: "Attempts finish hone par loop fail status state save kar ke human alerts trigger karta hai."
  },
  {
    question: "If a loop experiences prompt degradation over time, what service maintains it?",
    options: [
      "A new project setup",
      "Ongoing retainer maintenance (prompt tuning, context auditing, and rule adjustments)",
      "Swapping the database server",
      "Running compilation tests"
    ],
    correct: 1,
    explanation: "Ongoing checks aur models updates maintenance retainers ke under resolve hote hain."
  },
  {
    question: "Which component is a standardize connection plug for LLMs?",
    options: [
      "HTML forms",
      "Model Context Protocol (MCP)",
      "CSS stylesheets",
      "SQL query joins"
    ],
    correct: 1,
    explanation: "MCP standardized port plug hai jo AI ko custom system interfaces enable karta hai."
  },
  {
    question: "What represents the 'One checkout per task' rule?",
    options: [
      "Each user has one account login session",
      "Each loop worker runs its processing task inside a separate, clean workspace branch",
      "Only one prompt is allowed per file",
      "Only one database table can be parsed"
    ],
    correct: 1,
    explanation: "Kaam start hone par task ke liye dedicated, clean folders allocate karne ka rule checkout isolation hai."
  },
  {
    question: "What is the ultimate takeaway of Loop Engineering?",
    options: [
      "Always rely on manuals prompts to debug systems",
      "Shift from writing code prompts to designing reliable, self-checking, state-tracking loops governed by human intent",
      "Ensure all AI applications are written in Python only",
      "Deploy systems without checkers to save token costs"
    ],
    correct: 1,
    explanation: "Loop engineering ka core goal manual coding prompting ko persistent, self-checking systems se replace karna hai."
  }
];
