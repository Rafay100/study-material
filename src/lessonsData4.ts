import type { Lesson } from "./lessonsData3";

export const course4Lessons: Lesson[] = [
  {
    id: 1,
    title: "Overview & The Mindset Shift",
    shortTitle: "01 — Mindset Shift",
    explanation: `What is it?
Loop Engineering is the transition from writing manual chat prompts (where humans control every turn) to designing systems that control the execution cycle autonomously.

Why does it matter?
Human time is limited. To scale AI, systems must run autonomously on schedule or triggers, handling database checks, tool runs, and error corrections without human supervision.

Simple Example
Instead of you pasting code into Claude and reviewing the error logs manually, a Loop checker automatically runs the tests, parses compiler warnings, and triggers repair beats until the code compiles.

Key Takeaway
Shift from writing prompts to designing the system that controls the turns.`,
    explanationUrdu: `Yeh Kya Hai?
Loop Engineering ka matlab hai manual prompt engineering se system design par shift hona jo execution flow ko khud manage karta hai.

Yeh Kyun Zaroori Hai?
Human time limited hai. Scaling ke liye AI systems ko schedule ya events par autonomous run hona chahiye aur errors ko khud repair karna chahiye.

Sada Misaal
Aap manually code check karne ke bajaye aik check loop run karte hain jo syntax tests run karta hai aur ghalat code ko automatically edit beat par bhejta hai.

Aham Nuqta
Prompts likhne ke bajaye aisi systems design karein jo execution decisions automatically control karein.`,
    analogy: "Riding a bicycle where you must push the pedals for every single yard (Prompting) vs. driving an automated car that maintains speed, maps the route, and checks sensors (Looping).",
    example: "A system triggering an automated file-sync script every hour, catching connection errors, and retrying up to 3 times before alerting humans.",
    remember: "Looping = system control. Prompting = manual control.",
    whyMatters: "Enables deploying background worker systems that scale without continuous human attention.",
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
    explanation: `What is it?
A Loop is a system that starts work, performs the task, checks the result, remembers progress, and repeats the execution beat until a stopping condition is met.

Why does it matter?
Running AI models repeatedly without boundaries leads to runaway token costs and incorrect data. A professional loop wraps AI with safety boundaries and persistent state.

How does it work?
It integrates the six core components: 1) Heartbeat (trigger), 2) Worktree (isolated sandbox), 3) Skill (saved rules), 4) Subagents (Maker-Checker execution), 5) Connector (MCP), and 6) State/Spine.

Simple Example
A database clean-up loop starts on a cron schedule, reads 10 customer records, cleans email fields, runs schema verification, saves status, and exits.

Key Takeaway
A true loop requires structured boundaries: heartbeat, workers, checkers, and a spine (saved state).`,
    explanationUrdu: `Yeh Kya Hai?
Loop aik aisi boundary-controlled system hai jo kaam shuru karti hai, perform karti hai, verify karti hai, state save karti hai, aur exit criteria check karti hai.

Yeh Kyun Zaroori Hai?
Bina checks ke repetitive models run runaway costs create karte hain. Safe loops mein hamesha verification checkers aur persistent states hone chahiye.

Sada Misaal
Weekly user audit loop: Cron trigger par system active hota hai, checks run karta hai, progress save karta hai, aur task complete hone par exit ho jata hai.

Aham Nuqta
Safe Loop = Heartbeat + Worker + Checker + Spine + Stopping Criteria.`,
    analogy: "A restaurant kitchen: New order arrives (Heartbeat). Cook prepares meal (Worker). Chef inspects presentation (Checker). If approved, it is served (Stopping criteria).",
    example: "Building a loop that monitors files, processes invoices, logs errors in a state file, and halts if attempts exceed 5 runs.",
    remember: "Always bind AI execution inside a structured loop container.",
    whyMatters: "Safety gates and checkers prevent automated code from corrupting production databases.",
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
    explanation: `What is it?
Loop vs Prompting separates manual interaction from automated system execution. In Prompting, the human is the controller. In Looping, the system is the controller.

Why does it matter?
If you remain in the prompting mindset, you cannot scale operations. Looping allows background tasks to run 24/7, keeping humans in a supervisor role.

Simple Example
Instead of you reading customer messages and copying them to Claude to draft replies, a loop reads emails, drafts responses, checks guidelines, and presents draft files for your morning review.

Key Takeaway
Prompting is manual control. Looping is system control governed by human intent.`,
    explanationUrdu: `Yeh Kya Hai?
Prompting aur Looping ke darmiyan supervisor roles ka difference. Prompting mein human controller hai, looping mein system controller hai.

Yeh Kyun Zaroori Hai?
Prompting model par scale possible nahi hai. Looping system 24/7 background tickets process kar sakta hai jabke human free rehta hai.

Sada Misaal
Subha office aakar support drafts check karna jo client tickets ke background check ke baad automatically save ho chuke hain.

Aham Nuqta
Insaan intent (target) aur final approval (accountability) own karta hai, system execution beats chalata hai.`,
    analogy: "Watering a lawn: holding a hand hose (Prompting) vs. setting up an automated sprinkler system with timer clocks (Looping).",
    example: "Transitioning a report drafting pipeline from manual copy-paste commands to a scheduled daily database compilation loop.",
    remember: "Let the system drive the beats. You set the destination.",
    whyMatters: "It enables scaling business workloads without hiring more operators.",
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
    explanation: `What is it?
Loop is the outermost container in our framework, holding the Harness, which contains the Context window, which contains the Prompt.

Why does it matter?
Debugging the wrong layer is useless. If your agent is stuck retrying the same bad command, changing the prompt to say "don't fail" won't work. The loop layer must handle the stop criteria.

Simple Example
An agent is stuck trying to access a missing file. The prompt says 'Retry if file error'. The harness loop must notice that the file is missing and halt execution after 3 attempts.

Key Takeaway
Always diagnose the failure container layer (Prompt, Context, Harness, or Loop) before editing instructions.`,
    explanationUrdu: `Yeh Kya Hai?
Loop sab se outer container layer hai jo internal layers (Harness, Context, Prompt) ki execution manage karti hai.

Yeh Kyun Zaroori Hai?
Repetitive failures (jaise bar-bar crash hona) loops ke states aur boundaries ki problems hain, prompts ki nahi.

Sada Misaal
AI coding agent bar bar broken link check kar raha hai. Prompt instructions ki jagah Loop execution counts par limit apply karna zaroori hai.

Aham Nuqta
Isolate failures to their nested container: Loop > Harness > Context > Prompt.`,
    analogy: "A waterproof watch case. The Loop is the outer casing. The Harness is the gear assembly. The Context is the dial face. The Prompt is the minute hand.",
    example: "Recognizing that a compilation retry limit belongs to the Loop stopping rules, not the compiler system prompt.",
    remember: "Prompt is the text. Loop is the engine.",
    whyMatters: "Prevents token waste and endless runaway agent execution.",
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
    explanation: `What is it?
A Small Loop runs inside a single model invocation (asking questions, calling tools). A Big Loop is the external orchestrator managing multiple beats, cron schedules, and persistent state files.

Why does it matter?
Small loops have no memory between restarts: when the model process ends, everything is lost. Big loops preserve state in a database or file (Spine), making runs durable.

Simple Example
A coding tool repeatedly listing files inside its prompt window is a Small Loop. A cron job that runs, saves progress to 'spine.json', shuts down, and resumes tomorrow is a Big Loop.

Key Takeaway
Use Small Loops for rapid tool interactions. Use Big Loops for long-running, durable tasks.`,
    explanationUrdu: `Yeh Kya Hai?
Small Loop (Inner Loop) aik single model call ke tools runs ko kehte hain. Big Loop (Outer Loop) overall multi-run lifecycle aur states manage karta hai.

Yeh Kyun Zaroori Hai?
Small loop ka data model call end hote hi delete ho jata hai. Big loop external storage (Spine) par state save rakhta hai.

Sada Misaal
Model chat tool run hona small loop hai. Server cron job jo daily files backup save kar ke database track kare, big loop hai.

Aham Nuqta
Durable and long-running AI workers requires Outer Big Loop management.`,
    analogy: "An active runner sprint (Small Loop - fast but tires quickly) vs. a multi-stage logistics shipping pipeline (Big Loop - tracks delivery states across cities).",
    example: "A database sync loop checking batch status files between cron triggers.",
    remember: "Inner Loop is fast. Outer Loop is durable.",
    whyMatters: "Enables agents to survive system crashes and server restarts.",
    diagramType: "big_vs_small_loop_diagram",
    miniQuestion: {
      question: "What is the primary characteristic of a Big Loop?",
      options: [
        "It runs entirely inside one single model token generation window",
        "It manages multiple execution beats over time and saves persistent state in external storage",
        "It runs only on desktop platforms",
        "It does not use any tools or APIs"
      ],
      correct: 1,
      explanation: "Correct! Big loops coordinate multiple beats and persist state in the Spine."
    }
  },
  {
    id: 6,
    title: "The Six Loop Components: Heartbeat to Spine",
    shortTitle: "06 — Six Components",
    explanation: `What is it?
The six components of a loop are: 1) Heartbeat (starts beats). 2) Worktree (isolated code sandbox). 3) Skill (saved rule templates). 4) Subagents/Maker-Checker (delegated tasks). 5) Connector (MCP databases). 6) Spine (persistent state file).

Why does it matter?
A loop missing any of these parts will fail: without a spine, it has amnesia; without sub-agents, its context gets cluttered; without a worktree, it risk corrupting live files.

Simple Example
When building an auditing loop: the cron trigger is the Heartbeat, the database link is the Connector, and the saved run status file is the Spine.

Key Takeaway
Ensure all six components are designed and integrated to build a robust, safe loop.`,
    explanationUrdu: `Yeh Kya Hai?
Loop ke 6 main components hain: Heartbeat (cron trigger), Worktree (isolated sandbox), Skill (rules), Subagents (Maker-Checker), Connector (MCP link), aur Spine (state storage).

Yeh Kyun Zaroori Hai?
In mein se koi bhi part missing ho to loop fail ho ga: bina Spine ke amnesia ho ga, bina Worktree ke files corrupt hone ka risk ho ga.

Sada Misaal
Tax filing engine: Trigger event (Heartbeat), test environment (Worktree), tax directories (Skill), verification check (Checker), secure connection (Connector), aur progress log (Spine).

Aham Nuqta
Har professional AI agent loop in 6 essential components se mil kar banta hai.`,
    analogy: "A spacecraft: engine ignition (Heartbeat), clean testing bay (Worktree), operations manual (Skill), automated landing sensors (Checker), radio comms (Connector), and flight computer logs (Spine).",
    example: "Setting up a config JSON file containing the database endpoints (Connector) and the current loop iteration count (Spine).",
    remember: "6 components: Heartbeat, Worktree, Skill, Sub-agents, Connector, Spine.",
    whyMatters: "Structuring your agent around these six elements guarantees safety and reliability.",
    diagramType: "six_components_circle",
    miniQuestion: {
      question: "Which component represents the isolated sandbox where the loop edits and tests code safely?",
      options: [
        "The Spine",
        "The Connector",
        "The Worktree",
        "The Heartbeat"
      ],
      correct: 2,
      explanation: "Correct! The Worktree isolates the files being modified so they don't corrupt the main branch."
    }
  },
  {
    id: 7,
    title: "Heartbeat Types",
    shortTitle: "07 — Heartbeats",
    explanation: `What is it?
A Heartbeat is the mechanism that triggers a new execution beat of the loop. There are four types: 1) In-Session, 2) Conditional, 3) Scheduled, and 4) Event-Driven.

Why does it matter?
Choosing the wrong trigger type wastes resources. Continuous loops waste server CPU, while slow scheduled cron jobs miss immediate client updates.

Simple Example
- In-Session: CLI waits for user input.
- Conditional: Loop runs until all tests pass.
- Scheduled: Weekly database audit at Sunday 12:00.
- Event-Driven: Code runs when a new email arrives.

Key Takeaway
Match your trigger heartbeat type with your business outcome speed requirements.`,
    explanationUrdu: `Yeh Kya Hai?
Heartbeat wo trigger hai jo loop ki naye beat (run) ko start karta hai. Iski 4 main types hain.

Yeh Kyun Zaroori Hai?
Ghalat trigger select karne se server cost aur resources waste hote hain.

Sada Misaal
Support bot ke liye Event-Driven trigger sab se behtar hai, taake jaise hi new ticket (event) aaye, bot foran activate ho.

Aham Nuqta
4 types: In-Session, Conditional (run-until-done), Scheduled (cron), aur Event-Driven.`,
    analogy: "Home heating: turning on the radiator manually (In-Session), running until temperature reaches 70F (Conditional), turning on at 6 PM daily (Scheduled), or turning on when window opens (Event-Driven).",
    example: "Setting up a webhook on GitHub to trigger a builder beat whenever a commit is pushed.",
    remember: "Choose the heartbeat: session, condition, schedule, or event.",
    whyMatters: "Optimizing heartbeats controls execution budget and response latency.",
    diagramType: "heartbeat_types_grid",
    miniQuestion: {
      question: "Which heartbeat type is best suited for an automated accounting audit run once a month?",
      options: [
        "In-Session",
        "Event-Driven",
        "Scheduled (Cron)",
        "Conditional (Run-until-done)"
      ],
      correct: 2,
      explanation: "Correct! Scheduled (Cron) triggers are ideal for periodic tasks like monthly reports."
    }
  },
  {
    id: 8,
    title: "End-to-End Loop Lifecycle",
    shortTitle: "08 — Loop Lifecycle",
    explanation: `What is it?
The Loop Lifecycle is the complete step-by-step sequence an autonomous loop executes from trigger start to stopping resolution.

Why does it matter?
Understanding the lifecycle allows you to build trace logs and locate where an agent gets stuck or fails its checks.

How does it work?
Trigger Heartbeat ➔ Check Spine State ➔ Spawn Maker Sub-agent ➔ Run Checker Verification ➔ If check fails, run Repair Beat ➔ Save updated Spine ➔ Exit or Loop.

Simple Example
In an automated invoice matching engine: Heartbeat starts ➔ reads state ➔ Maker reads PDF ➔ Checker checks PO match ➔ if mismatch (error) runs repair ➔ saves status ➔ stops.

Key Takeaway
A complete lifecycle loops back through checkers and state updates until final victory conditions are met.`,
    explanationUrdu: `Yeh Kya Hai?
Loop Lifecycle aik complete execution path ko dikhata hai jo system startup se stop state tak run karta hai.

Yeh Kyun Zaroori Hai?
Is lifecycle se aap log files check kar sakte hain aur identify kar sakte hain ke error Maker side par hai ya Checker validation side par.

Sada Misaal
Invoice processing loop trigger hota hai ➔ purana database progress read karta hai ➔ Maker invoice details draft karta hai ➔ Checker double check karta hai ➔ Spine save hota hai ➔ Loop stop.

Aham Nuqta
Lifecycle is: Heartbeat ➔ State Read ➔ Maker ➔ Checker ➔ Spine Save ➔ Repeat/Exit.`,
    analogy: "A manufacturing assembly line: Raw steel enters (start), robot welds (maker), camera scans alignment (checker), conveyor logs status (spine), and finished car rolls out (exit).",
    example: "Monitoring logs: 'Beat 1: Maker compiled. Beat 2: Checker test failed. Beat 3: Repair compiled. Beat 4: Checker passed. Saving State. Halted.'",
    remember: "Trigger ➔ Read State ➔ Make ➔ Check ➔ Save State ➔ Loop/Halt.",
    whyMatters: "Provides a clear architecture to trace and debug agent actions.",
    diagramType: "loop_lifecycle_flow",
    miniQuestion: {
      question: "What is the correct sequence in a loop beat lifecycle?",
      options: [
        "Start → Repeat → Crash → Delete",
        "Heartbeat Trigger → Read State → Maker Action → Checker Verification → Save State → Exit/Loop",
        "Delete State → Run Prompt → Ask User → Stop",
        "Only run prompts infinitely without checks"
      ],
      correct: 1,
      explanation: "Exactly! The structured flow goes: Trigger -> Read -> Make -> Check -> Save -> Exit/Loop."
    }
  },
  {
    id: 9,
    title: "Stopping Conditions & Cost Safety",
    shortTitle: "09 — Stopping & Safety",
    explanation: `What is it?
Stopping Conditions are explicit rules that halt the loop to protect API budgets and codebase integrity. They include success checks, maximum beat limits, and no-progress checks.

Why does it matter?
If an agent fails to check compilation but keeps retrying, it will execute endlessly, costing hundreds of dollars in hours.

How does it work?
We enforce safety rules: 1) Success Check (all tests pass). 2) Max Beat Limit (stop after 10 runs). 3) No-Progress Check (stop if file edit count doesn't change).

Simple Example
Your coding bot attempts to fix a type check. It has run 5 times without decreasing the compile error count. The No-Progress check halts the run automatically.

Key Takeaway
Always define hard limits on maximum attempts and enforce no-progress checks to safeguard your budget.`,
    explanationUrdu: `Yeh Kya Hai?
Stopping Conditions rules hain jo AI loops ko infinite run se rokte hain aur budget/resources ko protect karte hain.

Yeh Kyun Zaroori Hai?
Agar system compile issues clear nahi kar pa raha aur continuous runs kar raha hai, to infinite calls ho sakti hain aur high bills generate ho sakte hain.

Sada Misaal
No-Progress Check apply karna: agar teen baar code test errors ki count change na ho to system run ko stop kar de.

Aham Nuqta
Safety limits are: Max Attempts reached, Success criteria met, aur No-Progress detected.`,
    analogy: "A safety fuse in home wiring. If current increases past a safe threshold, the fuse breaks to prevent a fire.",
    example: "Capping a script execution hook: `if (beatsCount > 10) haltLoop('Max runs reached');`.",
    remember: "Never deploy a loop without a maximum budget cap and progress check.",
    whyMatters: "Prevents runaway loops from draining your API balance overnight.",
    diagramType: "safety_valve_graphic",
    miniQuestion: {
      question: "Which check halts the loop if the error count does not decrease after multiple runs?",
      options: [
        "The model temperature check",
        "The No-Progress Check",
        "The token length limit",
        "The SQL query optimizer"
      ],
      correct: 1,
      explanation: "Correct! The No-Progress Check detects if the system is stuck in an unproductive loop and halts execution."
    }
  },
  {
    id: 10,
    title: "Human Gate, Intent & Accountability",
    shortTitle: "10 — Human Gates",
    explanation: `What is it?
Human Gates, Intent, and Accountability define the boundaries of human control in autonomous systems. Intent is the target, Accountability is the liability, and Human Gate is the check.

Why does it matter?
AI agents execute fast but lack human context and final accountability. The human operator always remains responsible for what the agent deploys or ships.

Simple Example
Your AI agent drafts a client tax filing. The loop runs all checks, but pauses at a Human Gate. You review the draft table, verify the totals, and click 'File with FBR'.

Key Takeaway
Automation does not remove accountability. Use Human Gates on all high-risk actions.`,
    explanationUrdu: `Yeh Kya Hai?
Human Gates aur human controls: Insaan goal set karta hai (Intent) aur results ka responsible hota hai (Accountability), jabke AI execution support karta hai.

Yeh Kyun Zaroori Hai?
AI legally accountability face nahi kar sakta. Risky decisions par manual validation triggers aur approvals zaroori hain.

Sada Misaal
AI tool local folder update karta hai par live git release push karne se pehle human operator ka slack command authorization verification trigger karta hai.

Aham Nuqta
AI execution handle karta hai, insaan intent aur final verification checklist own karta hai.`,
    analogy: "A fighter jet pilot: autopilot handles stabilization and route tracking, but the pilot selects targets and authorizes weapon release.",
    example: "Integrating approval prompts like `/approve` inside the deployment terminal logs before launching code.",
    remember: "Autonomous execution requires human governance. You own what you ship.",
    whyMatters: "Protects businesses from regulatory compliance failures caused by unchecked AI actions.",
    diagramType: "human_gate_hierarchy",
    miniQuestion: {
      question: "Who holds the final accountability for actions executed by an AI loop?",
      options: [
        "The AI Model provider API",
        "The automated Cron scheduler",
        "The human operator/engineer who deployed the system",
        "The SQL database server"
      ],
      correct: 2,
      explanation: "Correct! The human operator always carries the final accountability of the system's outcomes."
    }
  },
  {
    id: 11,
    title: "Context Management in Long Loops",
    shortTitle: "11 — Long Run Context",
    explanation: `What is it?
Context Management in Long Loops is the practice of keeping the active window compact during long-running execution cycles.

Why does it matter?
As loops run for multiple beats, context accumulates (tool logs, error dumps, outputs). A giant context window slows model speeds, increases cost, and degrades model reasoning.

How does it work?
We use strategies: 1) Store large outputs in files, not chat logs. 2) Move noisy compiles to isolated sub-agents. 3) Maintain the state separately in the Spine.

Simple Example
Instead of feeding 100 pages of logs to the main prompt, write the logs to 'build.log' and feed the main prompt only a one-line summary: 'Lint passed' or 'Failed at line 50'.

Key Takeaway
Keep your context window lean. Move raw data payloads to files.`,
    explanationUrdu: `Yeh Kya Hai?
Long loops ke context window ko compact aur clean rakhne ka method.

Yeh Kyun Zaroori Hai?
Loop jaise chalte hain, context ganda hota jata hai (tool outputs and compiler errors memory build karte hain), jis se model reasoning confuse ho jati hai.

Sada Misaal
100 pages ke compilation errors prompts window mein append karne ke bajaye, file edit summary pass karna: 'Lint failed at index 2'.

Aham Nuqta
Raw data files mein save karein, main context memory ko hamesha compact rakhein.`,
    analogy: "Clearing your work desk: writing temporary drafts in notepad files and keeping only the active to-do list card directly in front of you.",
    example: "Using a parser to strip compile logs before feeding outputs to the LLM agent prompt window.",
    remember: "Context bloat degrades AI performance. Keep context clean.",
    whyMatters: "Lean context ensures fast responses and reduces token consumption.",
    diagramType: "lean_context_graphic",
    miniQuestion: {
      question: "How should you manage massive tool outputs in long-running loops?",
      options: [
        "Append all output logs directly to the chat context window",
        "Write raw outputs to files and pass only compact summaries to the active model window",
        "Delete all database connections",
        "Run the loops without checks"
      ],
      correct: 1,
      explanation: "Spot on! Writing outputs to files and passing summaries keeps the context lean and focused."
    }
  },
  {
    id: 12,
    title: "Troubleshooting & Failure Diagnosis",
    shortTitle: "12 — Loop Diagnosis",
    explanation: `What is it?
Troubleshooting and Failure Diagnosis is the systematic analysis of logs and states to locate loop failures.

Why does it matter?
When loops break (getting stuck, exceeding budgets, crashing), you must diagnose whether it's a Heartbeat, Maker, Checker, Connector, or Spine failure to apply the correct fix.

How does it work?
- Heartbeat Failure: System doesn't trigger runs.
- Maker Failure: System runs but outputs wrong edits.
- Checker Failure: Test rules are broken or pass invalid code.
- Spine Failure: State is lost or not updated between runs.

Simple Example
Your agent compiles code but does not save progress, restarting from scratch on every run. This is a Spine (state saving) failure.

Key Takeaway
Systematic troubleshooting isolates bugs into the specific loop components before altering code.`,
    explanationUrdu: `Yeh Kya Hai?
Systematic logging analysis jis se failures ko 6 loop components (Heartbeat, Maker, Checker, Spine) mein trace kiya jata hai.

Yeh Kyun Zaroori Hai?
Bina correct trace ke aap database issues thik karne ke liye main prompts update kar ke time waste kar dein ge.

Sada Misaal
AI code edit karta hai par compile check running failed alerts pass nahi hote. Yeh Checker tool script ka check failure hai.

Aham Nuqta
Error diagnostics ko specific loop components se map kar ke trace karein.`,
    analogy: "A dashboard diagnostic tool in a modern car. It displays exactly if the problem is fuel injection (Maker) or the exhaust sensor (Checker).",
    example: "Checking logs to see why an agent repeated the same shell command, identifying that the state file (Spine) failed to save the current step index.",
    remember: "Map errors to Loop components: Heartbeat, Maker, Checker, Connector, or Spine.",
    whyMatters: "Saves developer time and maintains system reliability.",
    diagramType: "diagnose_loop_flow",
    miniQuestion: {
      question: "If a loop repeats the exact same file edit because it forgets what it did in the previous beat, which component is broken?",
      options: [
        "The Heartbeat Trigger",
        "The Spine (state saving mechanism)",
        "The Connector MCP server",
        "The Prompt template"
      ],
      correct: 1,
      explanation: "Correct! The Spine is responsible for keeping persistent state history across multiple runs."
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
