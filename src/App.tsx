import { useState, useEffect } from "react";
import { 
  BookOpen, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Search, 
  Map, 
  HelpCircle, 
  Layers, 
  Cpu, 
  Sparkles, 
  ArrowRight, 
  RefreshCw, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Award, 
  DollarSign, 
  Play, 
  RotateCcw
} from "lucide-react";
import { 
  lessons as course1Lessons, 
  flashcards as course1Flashcards, 
  quizQuestions as course1QuizQuestions, 
  course2Lessons,
  course2Flashcards,
  course2QuizQuestions,
  glossary
} from "./lessonsData";
import {
  course3Lessons,
  course3Flashcards,
  course3QuizQuestions
} from "./lessonsData3";
import {
  course4Lessons,
  course4Flashcards,
  course4QuizQuestions
} from "./lessonsData4";

export default function App() {
  // Course State: 1 = Ecosystem Concept, 2 = Paid FDE Roadmap, 3 = Four Layers, 4 = Loop Engineering
  const [activeCourse, setActiveCourse] = useState<1 | 2 | 3 | 4>(() => {
    const saved = localStorage.getItem("ai_factory_active_course");
    return saved ? (parseInt(saved) as 1 | 2 | 3 | 4) : 1;
  });

  const [currentTab, setCurrentTab] = useState<"dashboard" | "lesson" | "coursemap" | "glossary" | "quiz" | "scenario">("dashboard");
  const [activeLessonId, setActiveLessonId] = useState<number>(1);
  
  // Progress tracking in localStorage
  const [completedLessonsC1, setCompletedLessonsC1] = useState<number[]>(() => {
    const saved = localStorage.getItem("completed_lessons_c1");
    return saved ? JSON.parse(saved) : [];
  });
  
  const [completedLessonsC2, setCompletedLessonsC2] = useState<number[]>(() => {
    const saved = localStorage.getItem("completed_lessons_c2");
    return saved ? JSON.parse(saved) : [];
  });

  const [completedLessonsC3, setCompletedLessonsC3] = useState<number[]>(() => {
    const saved = localStorage.getItem("completed_lessons_c3");
    return saved ? JSON.parse(saved) : [];
  });

  const [completedLessonsC4, setCompletedLessonsC4] = useState<number[]>(() => {
    const saved = localStorage.getItem("completed_lessons_c4");
    return saved ? JSON.parse(saved) : [];
  });
  
  // Lesson mini-question answers status
  const [miniAnswersC1, setMiniAnswersC1] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("mini_answers_c1");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [miniAnswersC2, setMiniAnswersC2] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("mini_answers_c2");
    return saved ? JSON.parse(saved) : {};
  });

  const [miniAnswersC3, setMiniAnswersC3] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("mini_answers_c3");
    return saved ? JSON.parse(saved) : {};
  });

  const [miniAnswersC4, setMiniAnswersC4] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("mini_answers_c4");
    return saved ? JSON.parse(saved) : {};
  });
  
  // Quiz progress states
  const [quizAnswersC1, setQuizAnswersC1] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("quiz_answers_c1");
    return saved ? JSON.parse(saved) : {};
  });
  
  const [quizAnswersC2, setQuizAnswersC2] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("quiz_answers_c2");
    return saved ? JSON.parse(saved) : {};
  });

  const [quizAnswersC3, setQuizAnswersC3] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("quiz_answers_c3");
    return saved ? JSON.parse(saved) : {};
  });

  const [quizAnswersC4, setQuizAnswersC4] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem("quiz_answers_c4");
    return saved ? JSON.parse(saved) : {};
  });

  const [quizActiveQuestion, setQuizActiveQuestion] = useState<number>(0);
  
  const [quizSubmittedC1, setQuizSubmittedC1] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_submitted_c1");
    return saved === "true";
  });
  
  const [quizSubmittedC2, setQuizSubmittedC2] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_submitted_c2");
    return saved === "true";
  });

  const [quizSubmittedC3, setQuizSubmittedC3] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_submitted_c3");
    return saved === "true";
  });

  const [quizSubmittedC4, setQuizSubmittedC4] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_submitted_c4");
    return saved === "true";
  });

  const [reviewWrongOnly, setReviewWrongOnly] = useState<boolean>(false);

  // UI styling states
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Interactive lessons states
  const [activeRung, setActiveRung] = useState<number>(1);
  const [customizationRatio, setCustomizationRatio] = useState<number>(20);
  const [c2EarningRoute, setC2EarningRoute] = useState<"job" | "freelance" | "startup" | null>(null);

  // Before/after slider state (Lesson 2 / Course 2)
  const [sliderPosition, setSliderPosition] = useState<"before" | "after">("before");
  const [invoiceAnswer, setInvoiceAnswer] = useState<string | null>(null);

  // 5 Vertical Questions State (Lesson 6 / Course 2)
  const [vertQuestions, setVertQuestions] = useState<Record<number, boolean>>({});
  const [verticalCalculated, setVerticalCalculated] = useState<boolean>(false);
  // Course 3 Dashboard states
  const [heroQuizAns, setHeroQuizAns] = useState<string | null>(null);
  const [c3ContainerTab, setC3ContainerTab] = useState<"container" | "ladder">("container");

  // Course 4 Simulator states
  const [c4SimulatorRun, setC4SimulatorRun] = useState<number>(0);
  const [c4SimulatorActive, setC4SimulatorActive] = useState<boolean>(false);
  const [c4SimulatorLogs, setC4SimulatorLogs] = useState<string[]>([]);
  // Success Contract calculator (Lesson 14 / Course 2)
  const [contractBase, setContractBase] = useState<string>("4 hours");
  const [contractTarget, setContractTarget] = useState<string>("20 minutes");
  const [contractMeasure, setContractMeasure] = useState<string>("Audit log logs processing time automatically");
  const [contractGenerated, setContractGenerated] = useState<string>("");

  // Business simulation (Lesson 19 / Course 2)
  const [scenarioStep, setScenarioStep] = useState<number>(1);
  const [scenarioAnswers, setScenarioAnswers] = useState<Record<number, string>>({});
  const [scenarioFinished, setScenarioFinished] = useState<boolean>(false);

  // Sync active course to localStorage
  useEffect(() => {
    localStorage.setItem("ai_factory_active_course", String(activeCourse));
  }, [activeCourse]);

  // Sync completion states
  useEffect(() => {
    localStorage.setItem("completed_lessons_c1", JSON.stringify(completedLessonsC1));
  }, [completedLessonsC1]);

  useEffect(() => {
    localStorage.setItem("completed_lessons_c2", JSON.stringify(completedLessonsC2));
  }, [completedLessonsC2]);

  useEffect(() => {
    localStorage.setItem("completed_lessons_c3", JSON.stringify(completedLessonsC3));
  }, [completedLessonsC3]);

  useEffect(() => {
    localStorage.setItem("completed_lessons_c4", JSON.stringify(completedLessonsC4));
  }, [completedLessonsC4]);

  useEffect(() => {
    localStorage.setItem("mini_answers_c1", JSON.stringify(miniAnswersC1));
  }, [miniAnswersC1]);

  useEffect(() => {
    localStorage.setItem("mini_answers_c2", JSON.stringify(miniAnswersC2));
  }, [miniAnswersC2]);

  useEffect(() => {
    localStorage.setItem("mini_answers_c3", JSON.stringify(miniAnswersC3));
  }, [miniAnswersC3]);

  useEffect(() => {
    localStorage.setItem("mini_answers_c4", JSON.stringify(miniAnswersC4));
  }, [miniAnswersC4]);

  useEffect(() => {
    localStorage.setItem("quiz_answers_c1", JSON.stringify(quizAnswersC1));
  }, [quizAnswersC1]);

  useEffect(() => {
    localStorage.setItem("quiz_answers_c2", JSON.stringify(quizAnswersC2));
  }, [quizAnswersC2]);

  useEffect(() => {
    localStorage.setItem("quiz_answers_c3", JSON.stringify(quizAnswersC3));
  }, [quizAnswersC3]);

  useEffect(() => {
    localStorage.setItem("quiz_answers_c4", JSON.stringify(quizAnswersC4));
  }, [quizAnswersC4]);

  useEffect(() => {
    localStorage.setItem("quiz_submitted_c1", String(quizSubmittedC1));
  }, [quizSubmittedC1]);

  useEffect(() => {
    localStorage.setItem("quiz_submitted_c2", String(quizSubmittedC2));
  }, [quizSubmittedC2]);

  useEffect(() => {
    localStorage.setItem("quiz_submitted_c3", String(quizSubmittedC3));
  }, [quizSubmittedC3]);

  useEffect(() => {
    localStorage.setItem("quiz_submitted_c4", String(quizSubmittedC4));
  }, [quizSubmittedC4]);

  // Switch Course helper
  const handleCourseSwitch = (courseId: 1 | 2 | 3 | 4) => {
    setActiveCourse(courseId);
    setCurrentTab("dashboard");
    setActiveLessonId(1);
    setFlippedCards({});
    setQuizActiveQuestion(0);
    setReviewWrongOnly(false);
  };

  const currentLessonsList = 
    (activeCourse === 1 ? course1Lessons : 
    activeCourse === 2 ? course2Lessons : 
    activeCourse === 3 ? course3Lessons : 
    course4Lessons) || [];

  const currentFlashcards = 
    (activeCourse === 1 ? course1Flashcards : 
    activeCourse === 2 ? course2Flashcards : 
    activeCourse === 3 ? course3Flashcards : 
    course4Flashcards) || [];

  const currentQuizQuestions = 
    (activeCourse === 1 ? course1QuizQuestions : 
    activeCourse === 2 ? course2QuizQuestions : 
    activeCourse === 3 ? course3QuizQuestions : 
    course4QuizQuestions) || [];
  
  const completedLessons = 
    activeCourse === 1 ? completedLessonsC1 : 
    activeCourse === 2 ? completedLessonsC2 : 
    activeCourse === 3 ? completedLessonsC3 : 
    completedLessonsC4;

  const miniAnswers = 
    activeCourse === 1 ? miniAnswersC1 : 
    activeCourse === 2 ? miniAnswersC2 : 
    activeCourse === 3 ? miniAnswersC3 : 
    miniAnswersC4;

  const quizAnswers = 
    activeCourse === 1 ? quizAnswersC1 : 
    activeCourse === 2 ? quizAnswersC2 : 
    activeCourse === 3 ? quizAnswersC3 : 
    quizAnswersC4;

  const quizSubmitted = 
    activeCourse === 1 ? quizSubmittedC1 : 
    activeCourse === 2 ? quizSubmittedC2 : 
    activeCourse === 3 ? quizSubmittedC3 : 
    quizSubmittedC4;

  const navigateToLesson = (id: number) => {
    if (id >= 1 && id <= currentLessonsList.length) {
      setActiveLessonId(id);
      setCurrentTab("lesson");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === currentLessonsList.length + 1) {
      setCurrentTab("lesson");
      setActiveLessonId(currentLessonsList.length + 1); // Flashcards
    } else if (id === currentLessonsList.length + 2) {
      setCurrentTab("quiz");
    }
  };

  const markLessonComplete = (id: number) => {
    if (activeCourse === 1) {
      if (!completedLessonsC1.includes(id)) {
        setCompletedLessonsC1((prev) => [...prev, id]);
      }
    } else if (activeCourse === 2) {
      if (!completedLessonsC2.includes(id)) {
        setCompletedLessonsC2((prev) => [...prev, id]);
      }
    } else if (activeCourse === 3) {
      if (!completedLessonsC3.includes(id)) {
        setCompletedLessonsC3((prev) => [...prev, id]);
      }
    } else {
      if (!completedLessonsC4.includes(id)) {
        setCompletedLessonsC4((prev) => [...prev, id]);
      }
    }
  };

  const handleMiniAnswer = (lessonId: number, optionIdx: number, correctIdx: number) => {
    if (activeCourse === 1) {
      setMiniAnswersC1((prev) => ({ ...prev, [lessonId]: optionIdx }));
    } else if (activeCourse === 2) {
      setMiniAnswersC2((prev) => ({ ...prev, [lessonId]: optionIdx }));
    } else if (activeCourse === 3) {
      setMiniAnswersC3((prev) => ({ ...prev, [lessonId]: optionIdx }));
    } else {
      setMiniAnswersC4((prev) => ({ ...prev, [lessonId]: optionIdx }));
    }
    if (optionIdx === correctIdx) {
      markLessonComplete(lessonId);
    }
  };

  const handleQuizAnswer = (qIdx: number, optionIdx: number) => {
    if (quizSubmitted) return;
    if (activeCourse === 1) {
      setQuizAnswersC1((prev) => ({ ...prev, [qIdx]: optionIdx }));
    } else if (activeCourse === 2) {
      setQuizAnswersC2((prev) => ({ ...prev, [qIdx]: optionIdx }));
    } else if (activeCourse === 3) {
      setQuizAnswersC3((prev) => ({ ...prev, [qIdx]: optionIdx }));
    } else {
      setQuizAnswersC4((prev) => ({ ...prev, [qIdx]: optionIdx }));
    }
  };

  const calculateProgressPercent = () => {
    const totalCount = currentLessonsList.length;
    if (totalCount === 0) return 0;
    return Math.min(Math.round((completedLessons.length / totalCount) * 100), 100);
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset all course progress?")) {
      if (activeCourse === 1) {
        setCompletedLessonsC1([]);
        setMiniAnswersC1({});
        setQuizAnswersC1({});
        setQuizSubmittedC1(false);
      } else if (activeCourse === 2) {
        setCompletedLessonsC2([]);
        setMiniAnswersC2({});
        setQuizAnswersC2({});
        setQuizSubmittedC2(false);
        setScenarioAnswers({});
        setScenarioFinished(false);
        setScenarioStep(1);
        setVerticalCalculated(false);
        setVertQuestions({});
      } else if (activeCourse === 3) {
        setCompletedLessonsC3([]);
        setMiniAnswersC3({});
        setQuizAnswersC3({});
        setQuizSubmittedC3(false);
      } else {
        setCompletedLessonsC4([]);
        setMiniAnswersC4({});
        setQuizAnswersC4({});
        setQuizSubmittedC4(false);
      }
      setQuizActiveQuestion(0);
      setCurrentTab("dashboard");
    }
  };

  const toggleCardFlip = (idx: number) => {
    setFlippedCards((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Quiz calculations
  const totalQuestions = currentQuizQuestions.length;
  const correctQuizAnswersCount = currentQuizQuestions.reduce((acc: number, q: any, idx: number) => {
    return acc + (quizAnswers[idx] === q.correct ? 1 : 0);
  }, 0);
  const quizScorePercent = totalQuestions > 0 ? Math.round((correctQuizAnswersCount / totalQuestions) * 100) : 0;

  const getQuizRank = (percent: number) => {
    if (activeCourse === 1) {
      if (percent >= 90) return { title: "Ecosystem Master", color: "text-purple-400 border-purple-500", desc: "Fantastic! You perfectly grasp AI agent architectures." };
      if (percent >= 75) return { title: "Strong Understanding", color: "text-blue-400 border-blue-500", desc: "Great job! You have a solid grasp of the concepts." };
      if (percent >= 50) return { title: "Keep Practicing", color: "text-yellow-400 border-yellow-500", desc: "You are doing well, but review a few lessons to strengthen your concepts." };
      return { title: "Review the Lessons", color: "text-red-400 border-red-500", desc: "Go through the lessons again." };
    } else if (activeCourse === 2) {
      if (percent >= 90) return { title: "FDE Roadmap Master", color: "text-purple-400 border-purple-500", desc: "Superb! You fully command the vertical deployment roadmap." };
      if (percent >= 75) return { title: "Strong Understanding", color: "text-blue-400 border-blue-500", desc: "Excellent understanding of client context, SoR, and metrics." };
      if (percent >= 50) return { title: "Keep Practicing", color: "text-yellow-400 border-yellow-500", desc: "Good start. Brush up on outcome-selling and System of Context." };
      return { title: "Review the Roadmap", color: "text-red-400 border-red-500", desc: "Go back and master the 9 stations." };
    } else if (activeCourse === 3) {
      if (percent >= 90) return { title: "Four Layers Master", color: "text-purple-400 border-purple-500", desc: "Superb! You perfectly diagnose prompt, context, harness, and loop issues." };
      if (percent >= 75) return { title: "Strong Inspector", color: "text-blue-400 border-blue-500", desc: "Great job! You understand the nested containers and units of work." };
      if (percent >= 50) return { title: "Keep Practicing", color: "text-yellow-400 border-yellow-500", desc: "You have a solid base, but brush up on sub-agents and curators." };
      return { title: "Review the Layers", color: "text-red-400 border-red-500", desc: "Go through the four layers again." };
    } else {
      if (percent >= 90) return { title: "Loop Engineering Master", color: "text-purple-400 border-purple-500", desc: "Phenomenal! You command heartbeats, worktrees, and external state persistence." };
      if (percent >= 75) return { title: "Strong Loop Designer", color: "text-blue-400 border-blue-500", desc: "Excellent! You understand maker-checkers and stopping conditions." };
      if (percent >= 50) return { title: "Keep Practicing", color: "text-yellow-400 border-yellow-500", desc: "A good foundation, but review safety budgets and no-progress checks." };
      return { title: "Review the Six Parts", color: "text-red-400 border-red-500", desc: "Brush up on loop rules." };
    }
  };

  const quizRank = getQuizRank(quizScorePercent);
  const activeLesson = currentLessonsList.find(l => l.id === activeLessonId) || currentLessonsList[0];

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === "dark" ? "bg-[#030712] text-gray-100" : "bg-slate-50 text-slate-800"}`}>
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        {theme === "dark" && (
          <>
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-purple-900/10 blur-[120px] animate-pulse-slow"></div>
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] animate-pulse-slow-reverse"></div>
          </>
        )}
      </div>

      {/* TOP NAVBAR */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white lg:hidden"
            >
              <Menu size={20} />
            </button>
            <div onClick={() => setCurrentTab("dashboard")} className="cursor-pointer flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                AF
              </div>
              <div className="hidden sm:block">
                <h1 className="text-base font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent m-0">
                  AI Agent Factory
                </h1>
                <p className="text-[10px] text-gray-400 leading-none">Learning Platform</p>
              </div>
            </div>
          </div>

          {/* COURSE SELECTOR DROPDOWN */}
          <div className="relative">
            <select
              value={activeCourse}
              onChange={(e) => handleCourseSwitch(parseInt(e.target.value) as 1 | 2 | 3 | 4)}
              className="appearance-none bg-slate-950/80 hover:bg-slate-900 border border-white/10 rounded-xl px-3 py-1.5 pr-8 text-xs font-bold text-gray-200 focus:outline-none focus:border-purple-500 cursor-pointer transition-all"
            >
              <option value={1}>01: Ecosystem Concept</option>
              <option value={2}>02: FDE Earning Roadmap</option>
              <option value={3}>03: The Four Layers</option>
              <option value={4}>04: Loop Engineering</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-400">
              <ChevronRight size={12} className="rotate-90" />
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setCurrentTab("coursemap")}
              className={`p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5 text-xs sm:text-sm ${currentTab === "coursemap" ? "text-purple-400 bg-purple-500/10" : "text-gray-400"}`}
              title="Course Map"
            >
              <Map size={16} />
              <span className="hidden md:inline">Map</span>
            </button>
            
            <button
              onClick={() => setCurrentTab("glossary")}
              className={`p-2 rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1.5 text-xs sm:text-sm ${currentTab === "glossary" ? "text-purple-400 bg-purple-500/10" : "text-gray-400"}`}
              title="Glossary"
            >
              <Search size={16} />
              <span className="hidden md:inline">Glossary</span>
            </button>

            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* CORE FRAMEWORK CONTAINER */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto relative z-10">
        
        {/* LEFT SIDEBAR */}
        <aside className={`
          fixed lg:sticky top-16 bottom-0 left-0 z-40 
          w-72 lg:w-80 glass-panel border-r border-white/5 
          flex flex-col transform transition-transform duration-300 lg:transform-none
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}>
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] text-purple-400 uppercase font-mono font-bold">Active Module</span>
              <h2 className="text-xs font-bold text-white truncate max-w-[200px]">
                {activeCourse === 1 ? "01 — Ecosystem Concept" : 
                 activeCourse === 2 ? "02 — FDE Paid Roadmap" : 
                 activeCourse === 3 ? "03 — The Four Layers" : 
                 "04 — Loop Engineering"}
              </h2>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/5 text-gray-400 lg:hidden"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-1">
            <button
              onClick={() => { setCurrentTab("dashboard"); setIsSidebarOpen(false); }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2.5 transition-all ${currentTab === "dashboard" ? "bg-purple-500/10 text-purple-300 border-l-2 border-purple-500" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
            >
              <Layers size={16} />
              <span>Welcome Dashboard</span>
            </button>

            <div className="h-px bg-white/5 my-2"></div>

            {currentLessonsList.map((les) => {
              const isCompleted = completedLessons.includes(les.id);
              const isActive = currentTab === "lesson" && activeLessonId === les.id;
              return (
                <button
                  key={les.id}
                  onClick={() => { navigateToLesson(les.id); setIsSidebarOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-between transition-all group ${isActive ? "bg-purple-500/15 text-purple-300 border-l-2 border-purple-500" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`font-mono text-[9px] px-1 py-0.5 rounded ${isActive ? "bg-purple-500/20 text-purple-300" : "bg-gray-800 text-gray-400"}`}>
                      {String(les.id).padStart(2, "0")}
                    </span>
                    <span className="truncate">{les.shortTitle}</span>
                  </div>
                  {isCompleted ? (
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 ml-1.5" />
                  ) : (
                    <Circle size={14} className="text-gray-600 group-hover:text-gray-400 shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}

            {/* Course 2 business simulation scenario link */}
            {activeCourse === 2 && (
              <button
                onClick={() => { setCurrentTab("scenario"); setIsSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-between transition-all group ${currentTab === "scenario" ? "bg-purple-500/15 text-purple-300 border-l-2 border-purple-500" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] px-1 py-0.5 rounded bg-gray-800 text-gray-400">19</span>
                  <span>Final Scenario Sim</span>
                </div>
                <Play size={14} className={scenarioFinished ? "text-emerald-400" : "text-gray-600"} />
              </button>
            )}

            {/* Revision Flashcards button */}
            <button
              onClick={() => { navigateToLesson(currentLessonsList.length + 1); setIsSidebarOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-between transition-all group ${currentTab === "lesson" && activeLessonId === currentLessonsList.length + 1 ? "bg-purple-500/15 text-purple-300 border-l-2 border-purple-500" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] px-1 py-0.5 rounded bg-gray-800 text-gray-400">
                  {String(currentLessonsList.length + 1).padStart(2, "0")}
                </span>
                <span>Revision Flashcards</span>
              </div>
              <Sparkles size={14} className="text-amber-400" />
            </button>

            {/* Quiz button */}
            <button
              onClick={() => { navigateToLesson(currentLessonsList.length + 2); setIsSidebarOpen(false); }}
              className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-between transition-all group ${currentTab === "quiz" ? "bg-purple-500/15 text-purple-300 border-l-2 border-purple-500" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] px-1 py-0.5 rounded bg-gray-800 text-gray-400">
                  {String(currentLessonsList.length + 2).padStart(2, "0")}
                </span>
                <span className="font-semibold">Final Quiz</span>
              </div>
              {quizSubmitted ? (
                <Award size={14} className="text-purple-400 shrink-0" />
              ) : (
                <HelpCircle size={14} className="text-gray-600 shrink-0" />
              )}
            </button>
          </div>

          <div className="p-4 border-t border-white/5">
            <button
              onClick={resetProgress}
              className="w-full py-2 px-3 rounded-lg text-xs font-semibold border border-red-500/20 hover:border-red-500/50 text-red-400 hover:bg-red-500/5 transition-all flex items-center justify-center gap-2"
            >
              <RefreshCw size={12} />
              Reset Module Progress
            </button>
          </div>
        </aside>

        {/* Backdrop for mobile */}
        {isSidebarOpen && (
          <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/60 z-30 lg:hidden"></div>
        )}

        {/* MAIN PANEL */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          
          {/* Welcome Dashboard */}
          {currentTab === "dashboard" && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* COURSE HERO */}
              {/* COURSE HERO SWITCH */}
              {activeCourse === 1 && (
                // Course 1 Hero
                <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/5 p-6 sm:p-8 lg:p-12 text-center space-y-6">
                  <div className="absolute top-0 right-0 p-4 text-purple-500/5">
                    <Cpu size={150} />
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold">
                    <Sparkles size={12} /> Course 1: Ecosystem Foundations
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight m-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                      The Ecosystem Concept
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
                      Understand AI Agent Factory from absolute zero. Learn how connecting textbooks, databases, tutors and workers builds a unified system.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => navigateToLesson(1)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      Start Learning
                      <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={() => setCurrentTab("coursemap")}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      <Map size={16} />
                      View Course Map
                    </button>
                  </div>
                </div>
              )}

              {activeCourse === 2 && (
                // Course 2 Hero
                <div className="space-y-8 animate-fadeIn">
                  <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/5 p-6 sm:p-8 lg:p-12 text-center space-y-6">
                    <div className="absolute top-0 right-0 p-4 text-emerald-500/5 animate-pulse">
                      <DollarSign size={150} />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                      <DollarSign size={12} /> Course 2: Paid FDE Roadmap
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight m-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-400 bg-clip-text text-transparent">
                        How to Get Paid in the Agentic AI Era
                      </h2>
                      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
                        Learn how to turn AI Agent engineering into real business value. Master the Vendor-Neutral Vertical FDE Roadmap.
                      </p>
                    </div>

                    {/* Animated Hero Gap visualization */}
                    <div className="max-w-md mx-auto py-6">
                      <div className="flex items-center justify-between border border-white/5 bg-slate-950/40 p-4 rounded-xl relative">
                        <div className="text-center">
                          <span className="text-[10px] text-pink-400 uppercase font-bold block">Capability</span>
                          <span className="text-xs text-white font-mono">Raw AI APIs</span>
                        </div>
                        
                        <div className="flex flex-col items-center flex-1 mx-4 border-t-2 border-dashed border-red-500/50 pt-2 relative">
                          <span className="text-[9px] font-bold text-red-400 absolute -top-3.5 px-2 bg-slate-900 rounded border border-red-500/25">DEPLOYMENT GAP</span>
                          <div className="h-4 w-4 bg-purple-500 rounded-full flex items-center justify-center text-[8px] font-bold text-white animate-bounce">
                            FDE
                          </div>
                        </div>

                        <div className="text-center">
                          <span className="text-[10px] text-emerald-400 uppercase font-bold block">Business</span>
                          <span className="text-xs text-white font-mono">Real Outcome</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-3 font-light leading-relaxed">
                        "AI is becoming cheaper to create. The valuable skill is making AI actually work inside a real business."
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <button
                        onClick={() => navigateToLesson(1)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        Start the Roadmap
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => setCurrentTab("coursemap")}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                      >
                        <Map size={16} />
                        View Course Map
                      </button>
                    </div>
                  </div>

                  {/* THREE EARNING ROUTES SECTION */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white text-center">Three Earning Routes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { 
                          id: "job", 
                          title: "JOB", 
                          subtitle: "Salary + Enterprise Experience", 
                          desc: "Enterprises need human FDEs to plug generic models into corporate compliance. Work as an internal expert with stable monthly salaries and exposure to massive data stacks.", 
                          color: "from-blue-500/20 to-transparent border-blue-500/30 text-blue-300" 
                        },
                        { 
                          id: "freelance", 
                          title: "FREELANCE", 
                          subtitle: "Projects + Monthly Retainers", 
                          desc: "Build automated worker pipelines for local businesses. Charge initial setup fees for the System of Record and ongoing monthly retainers for model monitoring and prompt updates.", 
                          color: "from-purple-500/20 to-transparent border-purple-500/30 text-purple-300" 
                        },
                        { 
                          id: "startup", 
                          title: "STARTUP", 
                          subtitle: "Own a Vertical + Domain Products", 
                          desc: "Package country-specific rules (like customs clearance or regional tax compliance) into a vertical SaaS and license worker agents directly to end-users.", 
                          color: "from-emerald-500/20 to-transparent border-emerald-500/30 text-emerald-300" 
                        }
                      ].map((route) => {
                        const isOpen = c2EarningRoute === route.id;
                        return (
                          <div 
                            key={route.id}
                            onClick={() => setC2EarningRoute(c2EarningRoute === route.id ? null : (route.id as any))}
                            className={`glass-panel border rounded-2xl p-6 cursor-pointer bg-gradient-to-br transition-all flex flex-col justify-between ${route.color} ${isOpen ? "ring-2 ring-purple-500" : "hover:border-white/20"}`}
                          >
                            <div className="space-y-2">
                              <span className="text-xs font-bold tracking-widest uppercase">Earning Path</span>
                              <h4 className="text-2xl font-black tracking-tight text-white">{route.title}</h4>
                              <p className="text-xs font-semibold text-gray-300 italic">{route.subtitle}</p>
                            </div>
                            
                            {isOpen ? (
                              <p className="text-xs text-gray-300 mt-4 leading-relaxed animate-fadeIn">
                                {route.desc}
                              </p>
                            ) : (
                              <span className="text-[10px] text-gray-500 mt-4 block">Click card to expand roadmap details</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeCourse === 3 && (
                // Course 3 Hero: The Four Layers
                <div className="space-y-8 animate-fadeIn">
                  <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/5 p-6 sm:p-8 lg:p-12 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold">
                      <Sparkles size={12} /> Course 3: Core Architecture
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight m-0 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
                        The Four Layers
                      </h2>
                      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
                        Learn how to diagnose and engineer AI agents using nested layers: Prompt, Context, Harness, and Loop.
                      </p>
                    </div>

                    {/* Nested Containers visualization */}
                    <div className="max-w-md mx-auto py-4 space-y-4">
                      <div className="flex justify-center gap-2 mb-2">
                        <button 
                          onClick={() => setC3ContainerTab("container")}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${c3ContainerTab === "container" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400"}`}
                        >
                          Container Model (Correct)
                        </button>
                        <button 
                          onClick={() => setC3ContainerTab("ladder")}
                          className={`px-3 py-1 rounded text-xs font-bold transition-all ${c3ContainerTab === "ladder" ? "bg-red-600/40 border border-red-500/30 text-gray-300" : "bg-white/5 text-gray-400"}`}
                        >
                          Ladder Model (Wrong)
                        </button>
                      </div>

                      {c3ContainerTab === "container" ? (
                        <div className="border border-purple-500/30 bg-purple-950/10 p-5 rounded-2xl space-y-3 text-left animate-fadeIn">
                          <div className="border border-purple-500/40 bg-purple-900/10 p-3.5 rounded-xl">
                            <span className="text-[10px] font-mono text-purple-400 uppercase font-bold block">LOOP (The Run)</span>
                            <div className="border border-blue-500/30 bg-blue-950/10 p-3 rounded-lg mt-2">
                              <span className="text-[10px] font-mono text-blue-400 uppercase font-bold block">HARNESS (The Beat)</span>
                              <div className="border border-cyan-500/30 bg-cyan-950/10 p-2.5 rounded mt-2">
                                <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block">CONTEXT (The Window)</span>
                                <div className="bg-slate-950/80 p-2 rounded border border-white/10 text-center text-xs text-gray-200 mt-2 font-mono">
                                  PROMPT (Single Call)
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="border border-red-500/30 bg-red-950/10 p-5 rounded-2xl space-y-2 text-center text-xs text-gray-300 animate-fadeIn font-mono">
                          <div className="p-2 border border-red-500/20 rounded bg-slate-900/80">Loop (Advanced)</div>
                          <div className="text-gray-500 font-bold">↓</div>
                          <div className="p-2 border border-red-500/20 rounded bg-slate-900/80">Harness (Intermediate)</div>
                          <div className="text-gray-500 font-bold">↓</div>
                          <div className="p-2 border border-red-500/20 rounded bg-slate-900/80">Context (Basic)</div>
                          <div className="text-gray-500 font-bold">↓</div>
                          <div className="p-2 border border-red-500/20 rounded bg-slate-900/80">Prompt (Beginner)</div>
                          <span className="block text-[10px] text-red-400 mt-3 italic font-sans font-light">"This model is wrong. You do not graduate from prompts. All loops still create prompts!"</span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <button
                        onClick={() => navigateToLesson(1)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        Start Learning
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => setCurrentTab("coursemap")}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                      >
                        <Map size={16} />
                        View Course Map
                      </button>
                    </div>
                  </div>

                  {/* HERO DRILL SECTION */}
                  <div className="glass-panel border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] text-purple-400 font-mono font-bold uppercase tracking-wider">Diagnostic Drill</span>
                      <h3 className="text-xl font-extrabold text-white m-0">Your Agent Is Broken. Which Layer Broke?</h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-light">
                        <strong>Scenario:</strong> You run an AI coder agent. It runs for 40 minutes, consumes API money, repeatedly tries the same 3 failing code adjustments, and compiles nothing working. What should you change?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { key: "A", text: "A. Rewrite the system prompt instructions", correct: false, reason: "Rewriting the prompt might change the words, but won't stop the repetitive cycle." },
                        { key: "B", text: "B. Add more context files in the window", correct: false, reason: "More files won't help the agent recognize it has failed the same command 5 times." },
                        { key: "C", text: "C. Adjust the harness tool bindings", correct: false, reason: "The harness runs tools fine; the issue is that it is being asked to run them on a loop." },
                        { key: "D", text: "D. Fix the Loop layer (add no-progress checks)", correct: true, reason: "Correct! The loop is missing attempt limits and duplicate checks to interrupt the cycle. Before changing code, isolate the layer." }
                      ].map((opt) => (
                        <button
                          key={opt.key}
                          onClick={() => setHeroQuizAns(opt.key)}
                          className={`p-3.5 rounded-xl border text-left text-xs font-semibold transition-all ${heroQuizAns === opt.key ? (opt.correct ? "bg-emerald-500/10 border-emerald-500 text-emerald-300" : "bg-red-500/10 border-red-500 text-red-300") : "bg-white/5 hover:bg-white/10 text-gray-200 border-white/5"}`}
                        >
                          {opt.text}
                        </button>
                      ))}
                    </div>

                    {heroQuizAns && (
                      <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-xs text-gray-300 leading-relaxed animate-fadeIn">
                        {(() => {
                          const matched = [
                            { key: "A", correct: false, reason: "Rewriting the prompt might change the words, but won't stop the repetitive cycle." },
                            { key: "B", correct: false, reason: "More files won't help the agent recognize it has failed the same command 5 times." },
                            { key: "C", correct: false, reason: "The harness runs tools fine; the issue is that it is being asked to run them on a loop." },
                            { key: "D", correct: true, reason: "Correct! The loop is missing attempt limits and duplicate checks to interrupt the cycle. Before changing code, isolate the layer." }
                          ].find(o => o.key === heroQuizAns);
                          return (
                            <>
                              <span className={`font-bold uppercase ${matched?.correct ? "text-emerald-400" : "text-red-400"}`}>{matched?.correct ? "✓ Correct Verdict" : "✗ Incorrect Verdict"}</span>
                              <p className="mt-1">{matched?.reason}</p>
                            </>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeCourse === 4 && (
                // Course 4 Hero: Loop Engineering
                <div className="space-y-8 animate-fadeIn">
                  <div className="relative rounded-2xl overflow-hidden glass-panel border border-white/5 p-6 sm:p-8 lg:p-12 text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold">
                      <Sparkles size={12} /> Course 4: Loop Engineering
                    </div>
                    <div className="space-y-3">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight m-0 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-400 bg-clip-text text-transparent">
                        Loop Engineering
                      </h2>
                      <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light">
                        Build AI systems that work, check, verify, save state, and continue operations by themselves without constant prompting.
                      </p>
                    </div>

                    {/* Prompting vs Looping Visualizer */}
                    <div className="max-w-md mx-auto p-4 border border-white/5 bg-slate-950/40 rounded-xl space-y-3 text-[11px] text-gray-300">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5 p-2 rounded bg-slate-900 border border-white/5">
                          <span className="text-pink-400 font-bold uppercase block text-[9px]">Prompting Mode</span>
                          <span className="text-gray-400 font-mono">Human ➔ Prompt ➔ AI ➔ Output ➔ Human checks ➔ Prompt again</span>
                        </div>
                        <div className="space-y-1.5 p-2 rounded bg-slate-900 border border-emerald-500/20">
                          <span className="text-emerald-400 font-bold uppercase block text-[9px]">Looping Mode</span>
                          <span className="text-gray-400 font-mono">Heartbeat ➔ Worker ➔ Checker ➔ State Save ➔ Next Beat</span>
                        </div>
                      </div>
                      <p className="text-[10px] text-gray-400 italic">
                        "Looping handles scheduling, checks, and state files. You move from pedaling the bike to designing the engine."
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <button
                        onClick={() => navigateToLesson(1)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm tracking-wide shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                      >
                        Start Course
                        <ArrowRight size={16} />
                      </button>
                      <button
                        onClick={() => setCurrentTab("coursemap")}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
                      >
                        <Map size={16} />
                        View Roadmap
                      </button>
                    </div>
                  </div>

                  {/* INTERACTIVE LOOP SIMULATOR WIDGET */}
                  <div className="glass-panel border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4 text-left">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-[10px] text-emerald-400 font-mono font-bold uppercase tracking-wider font-sans">Interactive simulator</span>
                        <h3 className="text-lg font-bold text-white m-0">Loop Execution Simulator</h3>
                      </div>
                      <button
                        onClick={() => {
                          if (c4SimulatorActive) return;
                          setC4SimulatorActive(true);
                          setC4SimulatorRun(1);
                          setC4SimulatorLogs(["[HEARTBEAT] Sunday 9:00 AM: Loop started.", "[DISCOVER] Found 1 task: Fix syntax bug inside index.ts"]);
                          
                          setTimeout(() => {
                            setC4SimulatorLogs(prev => [...prev, "[BEAT 1] Coder Agent edits index.ts. Running compiler checks..."]);
                          }, 1500);

                          setTimeout(() => {
                            setC4SimulatorLogs(prev => [...prev, "[CHECKER] Tests failed: line 14 unexpected semicolon.", "[SPINE] State updated: saved current file diff, attempt 1 logged to spine.json"]);
                            setC4SimulatorRun(2);
                          }, 3000);

                          setTimeout(() => {
                            setC4SimulatorLogs(prev => [...prev, "[BEAT 2] Resuming from state... Coder removes semicolon, compiles again..."]);
                          }, 4500);

                          setTimeout(() => {
                            setC4SimulatorLogs(prev => [...prev, "[CHECKER] Tests pass successfully. Success condition met.", "[STOP] Loop stopped safely. Success stored. Human notified."]);
                            setC4SimulatorRun(3);
                            setC4SimulatorActive(false);
                          }, 6000);
                        }}
                        disabled={c4SimulatorActive}
                        className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs disabled:opacity-50 transition-all flex items-center gap-1.5"
                      >
                        <Play size={12} />
                        {c4SimulatorActive ? "Running..." : "Run Simulator"}
                      </button>
                    </div>

                    <div className="grid grid-cols-5 gap-2 pt-2 text-center text-[10px] font-bold">
                      {[
                        { step: 1, label: "Heartbeat", desc: "Start trigger" },
                        { step: 1, label: "Worker/Maker", desc: "Draft code" },
                        { step: 2, label: "Checker", desc: "Verify tests" },
                        { step: 2, label: "State/Spine", desc: "Save progress" },
                        { step: 3, label: "Success Stop", desc: "Halt safely" }
                      ].map((item, idx) => (
                        <div key={idx} className={`p-2 rounded border ${c4SimulatorRun >= item.step ? "bg-emerald-500/10 border-emerald-500 text-emerald-300" : "bg-white/5 border-white/5 text-gray-500"}`}>
                          <span>{item.label}</span>
                          <span className="block text-[8px] font-normal text-gray-400 mt-1">{item.desc}</span>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-950 rounded-xl p-4 border border-white/10 font-mono text-xs text-gray-300 min-h-[140px] space-y-1.5 overflow-y-auto">
                      {c4SimulatorLogs.length === 0 ? (
                        <span className="text-gray-500 italic">Click 'Run Simulator' to start loop logs demo...</span>
                      ) : (
                        c4SimulatorLogs.map((log, idx) => (
                          <div key={idx} className="animate-fadeIn">{log}</div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* COURSE PROGRESS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="gradient-border-card p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Lessons Progress</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-4xl font-extrabold text-white">{completedLessons.length}</span>
                      <span className="text-gray-500">/ {currentLessonsList.length}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-500" 
                        style={{ width: `${calculateProgressPercent()}%` }}
                      ></div>
                    </div>
                    <p className="text-[10px] text-gray-400">Complete all lessons to unlock the Final Exam.</p>
                  </div>
                </div>

                {/* Dashboard Stats 2: Stations Completed */}
                <div className="glass-panel border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                      {activeCourse === 1 ? "Ecosystem Progress" : 
                       activeCourse === 2 ? "Stations Completed" : 
                       activeCourse === 3 ? "Concepts Completed" : 
                       "Parts Completed"}
                    </h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      {activeCourse === 1 ? (
                        <>
                          <span className="text-4xl font-extrabold text-white">{completedLessons.length}</span>
                          <span className="text-gray-500">/ 20</span>
                        </>
                      ) : activeCourse === 2 ? (
                        <>
                          <span className="text-4xl font-extrabold text-emerald-400">
                            {completedLessons.filter(id => id <= 9).length}
                          </span>
                          <span className="text-gray-500">/ 9 Stations</span>
                        </>
                      ) : activeCourse === 3 ? (
                        <>
                          <span className="text-4xl font-extrabold text-purple-400">
                            {completedLessons.length}
                          </span>
                          <span className="text-gray-500">/ 12 Concepts</span>
                        </>
                      ) : (
                        <>
                          <span className="text-4xl font-extrabold text-cyan-400">
                            {completedLessons.length}
                          </span>
                          <span className="text-gray-500">/ 20 Modules</span>
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentTab("coursemap")}
                    className="w-full py-2.5 rounded-xl border border-white/5 hover:bg-white/5 text-gray-300 font-semibold text-xs tracking-wider uppercase transition-all"
                  >
                    View Modules Map
                  </button>
                </div>

                <div className="glass-panel border border-white/5 rounded-2xl p-6 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider">Final Quiz Status</h3>
                    <div className="flex items-baseline gap-2 mt-2">
                      {quizSubmitted ? (
                        <>
                          <span className="text-4xl font-extrabold text-purple-400">{quizScorePercent}%</span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/25 text-purple-300 truncate">{quizRank.title}</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-gray-300 mt-2">Not Attempted Yet</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setCurrentTab("quiz")}
                    className={`w-full py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase transition-all ${quizSubmitted ? "bg-purple-500/10 border border-purple-500/25 text-purple-300 hover:bg-purple-500/20" : "bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-500/10"}`}
                  >
                    {quizSubmitted ? "Review Score card" : "Take Final Quiz"}
                  </button>
                </div>

              </div>

              {/* COURSE LESSONS TILES LIST */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Course Syllabus</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentLessonsList.map((les) => {
                    const isDone = completedLessons.includes(les.id);
                    return (
                      <div 
                        key={les.id}
                        onClick={() => navigateToLesson(les.id)}
                        className="glass-panel glass-panel-hover border border-white/5 rounded-xl p-4 flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold px-2 py-1 bg-gray-800/80 rounded group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                            {String(les.id).padStart(2, "0")}
                          </span>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">{les.title}</h4>
                            <p className="text-xs text-gray-400 truncate max-w-[200px] sm:max-w-[300px]">{les.example}</p>
                          </div>
                        </div>
                        {isDone ? (
                          <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
                        ) : (
                          <Circle size={18} className="text-gray-700 group-hover:text-gray-500 shrink-0" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* Lesson Content Tab */}
          {currentTab === "lesson" && (
            <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
              
              {activeLessonId <= currentLessonsList.length ? (
                <>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                        Lesson {String(activeLessonId).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">
                        {activeLesson.title}
                      </h2>
                    </div>
                    {completedLessons.includes(activeLessonId) && (
                      <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                        <CheckCircle2 size={12} />
                        Completed
                      </span>
                    )}
                  </div>

                  {/* INTERACTIVE COMPONENT CANVAS */}
                  <div className="glass-panel border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center relative overflow-hidden bg-slate-950/40 min-h-[220px]">
                    <div className="absolute top-2 left-3 text-[10px] uppercase font-bold tracking-wider text-gray-500">Interactive Canvas Element</div>
                    <div className="w-full py-4 flex items-center justify-center">
                      {activeCourse === 1 
                        ? renderLessonDiagram(activeLessonId, activeRung, setActiveRung, customizationRatio, setCustomizationRatio, sliderPosition, setSliderPosition, vertQuestions, setVertQuestions, verticalCalculated, setVerticalCalculated)
                        : activeCourse === 2
                        ? renderCourse2Diagram(activeLessonId, sliderPosition, setSliderPosition, invoiceAnswer, setInvoiceAnswer, vertQuestions, setVertQuestions, verticalCalculated, setVerticalCalculated, contractBase, setContractBase, contractTarget, setContractTarget, contractMeasure, setContractMeasure, contractGenerated, setContractGenerated, customizationRatio, setCustomizationRatio)
                        : activeCourse === 3
                        ? renderCourse3Diagram(activeLessonId, c3ContainerTab, setC3ContainerTab)
                        : renderCourse4Diagram(activeLessonId, c4SimulatorRun, c4SimulatorActive, c4SimulatorLogs, setC4SimulatorActive, setC4SimulatorRun, setC4SimulatorLogs)
                      }
                    </div>
                  </div>

                  {/* Bilingual Explanations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3">
                      <h3 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                        <BookOpen size={16} />
                        Simple Explanation
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light font-sans whitespace-pre-line">
                        {activeLesson.explanation}
                      </p>
                    </div>
                    
                    <div className="glass-panel border border-white/5 rounded-2xl p-6 bg-purple-950/5 border-purple-500/10 space-y-3">
                      <h3 className="text-sm font-bold text-purple-400 flex items-center gap-2">
                        <Sparkles size={16} />
                        Roman Urdu / English
                      </h3>
                      <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-light whitespace-pre-line">
                        {activeLesson.explanationUrdu}
                      </p>
                    </div>
                  </div>

                  {/* Analogy & Example Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-2.5">
                      <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider">💡 Real-Life Analogy</h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeLesson.analogy}</p>
                    </div>
                    <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-2.5">
                      <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">🚀 Beginner Example</h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeLesson.example}</p>
                    </div>
                  </div>

                  {/* Summaries Blocks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent border border-indigo-500/20 space-y-2">
                      <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">📌 Remember This</h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeLesson.remember}</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 space-y-2">
                      <h4 className="text-xs font-bold text-pink-300 uppercase tracking-wider">🌟 Why It Matters</h4>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{activeLesson.whyMatters}</p>
                    </div>
                  </div>

                  {/* MINI KNOWLEDGE CHECK */}
                  <div className="glass-panel border border-purple-500/20 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <h3 className="text-sm font-bold text-white tracking-wider uppercase">Mini Knowledge Check</h3>
                    </div>
                    
                    <p className="text-sm font-semibold text-gray-200">
                      {activeLesson.miniQuestion.question}
                    </p>

                    <div className="grid grid-cols-1 gap-2.5">
                      {activeLesson.miniQuestion.options.map((opt, oIdx) => {
                        const hasAnswered = miniAnswers[activeLessonId] !== undefined;
                        const isSelected = miniAnswers[activeLessonId] === oIdx;
                        const isCorrect = oIdx === activeLesson.miniQuestion.correct;
                        
                        let btnStyle = "bg-white/5 hover:bg-white/10 text-gray-300 border-white/5";
                        if (hasAnswered) {
                          if (isSelected) {
                            btnStyle = isCorrect 
                              ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" 
                              : "bg-red-500/10 border-red-500 text-red-400";
                          } else if (isCorrect) {
                            btnStyle = "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            disabled={hasAnswered}
                            onClick={() => handleMiniAnswer(activeLessonId, oIdx, activeLesson.miniQuestion.correct)}
                            className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && isCorrect && <CheckCircle2 size={16} className="text-emerald-500 shrink-0 ml-2" />}
                          </button>
                        );
                      })}
                    </div>

                    {miniAnswers[activeLessonId] !== undefined && (
                      <div className={`p-4 rounded-xl border text-xs sm:text-sm ${miniAnswers[activeLessonId] === activeLesson.miniQuestion.correct ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-400" : "bg-red-500/5 border-red-500/20 text-red-400"}`}>
                        <p className="font-semibold">{miniAnswers[activeLessonId] === activeLesson.miniQuestion.correct ? "Correct Answer!" : "Incorrect Answer, try again."}</p>
                        <p className="mt-1 text-gray-300">{activeLesson.miniQuestion.explanation}</p>
                      </div>
                    )}
                  </div>
                </>
              ) : activeLessonId === currentLessonsList.length + 1 ? (
                /* FLASHCARD REVISION VIEW */
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">
                      Lesson {String(currentLessonsList.length + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">Key Terms Revision</h2>
                    <p className="text-sm text-gray-400 font-light">
                      Flip the interactive flashcards below to quickly revise essential terms and prepare for the final quiz.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
                    {currentFlashcards.map((card: any, idx: number) => {
                      const isFlipped = flippedCards[idx];
                      return (
                        <div 
                          key={idx}
                          onClick={() => toggleCardFlip(idx)}
                          className="h-48 cursor-pointer relative"
                          style={{ perspective: "1000px" }}
                        >
                          <div className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}>
                            
                            {/* Front Side */}
                            <div className="absolute inset-0 bg-slate-900 border border-white/10 rounded-2xl p-6 flex flex-col justify-between backface-hidden shadow-lg hover:border-purple-500/40 transition-colors">
                              <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Flashcard</span>
                              <h3 className="text-lg font-bold text-white text-glow-purple">{card.term}</h3>
                              <p className="text-[11px] text-gray-500">Click card to reveal definition</p>
                            </div>

                            {/* Back Side */}
                            <div className="absolute inset-0 bg-purple-950/40 border border-purple-500/20 rounded-2xl p-5 flex flex-col justify-between rotate-y-180 backface-hidden shadow-lg">
                              <div>
                                <span className="text-[9px] text-pink-400 font-bold uppercase tracking-widest">Definition</span>
                                <p className="text-xs text-gray-200 leading-relaxed font-semibold mt-1">{card.definition}</p>
                              </div>
                              <div className="border-t border-white/5 pt-2">
                                <span className="text-[8px] text-cyan-400 font-bold uppercase tracking-widest">Example</span>
                                <p className="text-[10px] text-gray-400 mt-0.5 italic">{card.example}</p>
                              </div>
                            </div>

                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              {/* NAVIGATION FOOTER */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-8">
                <button
                  disabled={activeLessonId === 1}
                  onClick={() => navigateToLesson(activeLessonId - 1)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-white/5 text-xs sm:text-sm font-semibold flex items-center gap-2 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>

                <button
                  onClick={() => {
                    if (activeLessonId < currentLessonsList.length) {
                      const hasChecked = miniAnswers[activeLessonId] !== undefined;
                      if (!hasChecked) {
                        alert("Please attempt the Mini Knowledge Check to unlock the next lesson!");
                        return;
                      }
                      navigateToLesson(activeLessonId + 1);
                    } else if (activeLessonId === currentLessonsList.length) {
                      const hasChecked = miniAnswers[currentLessonsList.length] !== undefined;
                      if (!hasChecked) {
                        alert("Please attempt the Mini Knowledge Check to unlock Revision!");
                        return;
                      }
                      navigateToLesson(currentLessonsList.length + 1); // Flashcards
                    } else if (activeLessonId === currentLessonsList.length + 1) {
                      setCurrentTab("quiz"); // Quiz
                    }
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md shadow-purple-500/15"
                >
                  Continue
                  <ChevronRight size={16} />
                </button>
              </div>

            </div>
          )}

          {/* Business Simulation (Lesson 19 Course 2) */}
          {currentTab === "scenario" && (
            <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">Lesson 19 Simulation</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">Final Business Scenario</h2>
                <p className="text-sm text-gray-400 font-light">
                  A small accounting firm asks you to improve their invoice processing workflows. Act as an FDE and choose the correct step.
                </p>
              </div>

              {!scenarioFinished ? (
                <div className="glass-panel border border-white/5 rounded-2xl p-6 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">Step {scenarioStep} of 5</span>
                    <h3 className="text-lg font-bold text-white">
                      {scenarioStep === 1 && "Stage 1: The client asks you to build a system. What is your first action?"}
                      {scenarioStep === 2 && "Stage 2: How do you scope the product solution?"}
                      {scenarioStep === 3 && "Stage 3: Where should the AI worker fetch rules and tax codes?"}
                      {scenarioStep === 4 && "Stage 4: How do you structure the client contract and payment terms?"}
                      {scenarioStep === 5 && "Stage 5: The demo is ready and works on test cases. What do you do next?"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {[
                      {
                        step: 1,
                        options: [
                          { label: "Immediately write code and build a huge ERP connection", value: "A" },
                          { label: "Understand and map the current manual workflow and rules first", value: "B" },
                          { label: "Send them a link to generic ChatGPT subscription", value: "C" }
                        ]
                      },
                      {
                        step: 2,
                        options: [
                          { label: "Build a massive accounting platform with 50 features", value: "A" },
                          { label: "Build one thin working slice first, like invoice verification", value: "B" },
                          { label: "Design 5 empty screens with mock buttons", value: "C" }
                        ]
                      },
                      {
                        step: 3,
                        options: [
                          { label: "Tell the AI to search Google for invoice laws on the fly", value: "A" },
                          { label: "Structure governed knowledge into a Vertical System of Record", value: "B" },
                          { label: "Write a 100-page custom instructions prompt block", value: "C" }
                        ]
                      },
                      {
                        step: 4,
                        options: [
                          { label: "Charge them standard hourly developer rates", value: "A" },
                          { label: "Define baseline, target metrics, and verification acceptance criteria", value: "B" },
                          { label: "Build the tool for free and ask for donations later", value: "C" }
                        ]
                      },
                      {
                        step: 5,
                        options: [
                          { label: "Send the code files and immediately disconnect", value: "A" },
                          { label: "Manage deployment, monitor errors, and charge a monthly retainer", value: "B" },
                          { label: "Delete the code repositories", value: "C" }
                        ]
                      }
                    ].find(s => s.step === scenarioStep)?.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          const updated = { ...scenarioAnswers, [scenarioStep]: opt.value };
                          setScenarioAnswers(updated);
                          if (scenarioStep < 5) {
                            setScenarioStep(scenarioStep + 1);
                          } else {
                            setScenarioFinished(true);
                          }
                        }}
                        className="w-full text-left p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 text-xs sm:text-sm text-gray-200 font-semibold transition-all"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="glass-panel border border-emerald-500/20 bg-emerald-500/5 rounded-2xl p-6 sm:p-8 space-y-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">Congratulations!</h3>
                    <p className="text-sm text-gray-300 max-w-md mx-auto">
                      You just successfully followed the complete FDE roadmap to deploy real value and secure monthly retainers!
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-6 text-left max-w-md mx-auto space-y-3">
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Mapped Workflow:</span>
                      <span className="text-emerald-400 font-bold">Passed</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Thin Slice Selection:</span>
                      <span className="text-emerald-400 font-bold">Passed</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Governed Vertical SoR:</span>
                      <span className="text-emerald-400 font-bold">Passed</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>Metrics Verification:</span>
                      <span className="text-emerald-400 font-bold">Passed</span>
                    </div>
                  </div>

                  <div className="pt-4 flex gap-4 justify-center">
                    <button
                      onClick={() => {
                        setScenarioStep(1);
                        setScenarioAnswers({});
                        setScenarioFinished(false);
                      }}
                      className="px-5 py-2.5 rounded-xl border border-white/5 hover:bg-white/5 text-gray-300 text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <RotateCcw size={14} />
                      Restart Sim
                    </button>
                    <button
                      onClick={() => {
                        if (!completedLessonsC2.includes(19)) {
                          setCompletedLessonsC2(prev => [...prev, 19]);
                        }
                        navigateToLesson(20);
                      }}
                      className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md shadow-purple-500/15"
                    >
                      Go to Revision
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Course Map Tab */}
          {currentTab === "coursemap" && (
            <div className="space-y-6 animate-fadeIn">
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-glow-purple text-white m-0">Course Roadmap</h2>
                <p className="text-sm text-gray-400 max-w-lg mx-auto font-light">
                  Follow this complete connected path to see how concepts integrate together in the AI Agent ecosystem.
                </p>
              </div>

              <div className="glass-panel border border-white/5 rounded-2xl p-6 overflow-x-auto min-w-[700px] py-10 relative">
                <div className="absolute top-2 left-3 text-[10px] text-purple-400 font-bold uppercase tracking-widest">Interactive Nodes Network</div>
                
                <div className="grid grid-cols-4 gap-y-12 gap-x-6 justify-items-center relative py-6">
                  {currentLessonsList.map((les) => {
                    const isDone = completedLessons.includes(les.id);
                    return (
                      <div 
                        key={les.id}
                        onClick={() => navigateToLesson(les.id)}
                        className={`w-40 p-4 rounded-xl border text-center cursor-pointer transition-all flex flex-col justify-between h-32 relative group ${isDone ? "bg-emerald-500/10 border-emerald-500/30 hover:border-emerald-400" : "bg-slate-900 border-white/5 hover:border-purple-500/40"}`}
                      >
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">
                            Node {String(les.id).padStart(2, "0")}
                          </span>
                          <h4 className="text-xs font-bold text-gray-100 group-hover:text-purple-300 transition-colors line-clamp-2 mt-1 font-sans">
                            {les.title}
                          </h4>
                        </div>
                        
                        <div className="flex items-center justify-center gap-1 mt-2">
                          {isDone ? (
                            <span className="text-[9px] font-bold text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 size={10} /> Completed
                            </span>
                          ) : (
                            <span className="text-[9px] text-gray-500 group-hover:text-gray-400">Click to Study</span>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Revision Node */}
                  <div 
                    onClick={() => navigateToLesson(currentLessonsList.length + 1)}
                    className="w-40 p-4 rounded-xl border text-center cursor-pointer bg-slate-900 border-white/5 hover:border-amber-400/40 transition-all flex flex-col justify-between h-32"
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Node {currentLessonsList.length + 1}</span>
                      <h4 className="text-xs font-bold text-amber-300 line-clamp-2 mt-1">Revision Flashcards</h4>
                    </div>
                    <span className="text-[9px] text-amber-400 font-semibold">Study Flashcards</span>
                  </div>

                  {/* Quiz Node */}
                  <div 
                    onClick={() => navigateToLesson(currentLessonsList.length + 2)}
                    className={`w-40 p-4 rounded-xl border text-center cursor-pointer transition-all flex flex-col justify-between h-32 ${quizSubmitted ? "bg-purple-950/20 border-purple-500/40 hover:border-purple-400" : "bg-slate-900 border-white/5 hover:border-purple-500/40"}`}
                  >
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-gray-800 text-gray-400">Node {currentLessonsList.length + 2}</span>
                      <h4 className="text-xs font-bold text-purple-400 line-clamp-2 mt-1">Final Exam</h4>
                    </div>
                    <span className="text-[9px] text-purple-400 font-bold">{quizSubmitted ? `Finished: ${quizScorePercent}%` : "Attempt Exam"}</span>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Glossary Tab */}
          {currentTab === "glossary" && (
            <div className="space-y-6 max-w-3xl mx-auto animate-fadeIn">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white m-0">Ecosystem Glossary</h2>
                <p className="text-sm text-gray-400 font-light">
                  Search and explore all important technical terms used in the course. Easy lookup with Roman Urdu meanings.
                </p>
              </div>

              <div className="relative">
                <Search className="absolute top-3.5 left-4 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search terms... (e.g. canonical, MCP, FTE, Deployment Gap)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>

              <div className="space-y-4 pt-2">
                {glossary
                  .filter((item) => item.term.toLowerCase().includes(searchQuery.toLowerCase()) || item.definition.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((item, idx) => (
                    <div key={idx} className="glass-panel border border-white/5 rounded-2xl p-6 space-y-3">
                      <h3 className="text-lg font-bold text-white tracking-wide text-glow-purple">{item.term}</h3>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">{item.definition}</p>
                      
                      <div className="border-t border-white/5 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <span className="text-gray-400">
                          <strong>Example:</strong> <span className="italic text-gray-300">"{item.example}"</span>
                        </span>
                        
                        <div className="flex items-center gap-1.5 font-sans">
                          <span className="text-purple-400 font-bold uppercase tracking-widest text-[9px]">Related:</span>
                          {item.related.map((rel, rIdx) => (
                            <span 
                              key={rIdx}
                              onClick={() => setSearchQuery(rel)} 
                              className="cursor-pointer text-blue-400 hover:underline px-1.5 py-0.5 rounded bg-blue-500/5 border border-blue-500/10 text-[10px]"
                            >
                              {rel}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}

                {glossary.filter((item) => item.term.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                  <div className="text-center text-gray-500 py-12">
                    No terms matched your search query. Try searching for "canonical", "MCP", "SoR", or "Deployment".
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Quiz Tab */}
          {currentTab === "quiz" && (
            <div className="space-y-8 animate-fadeIn max-w-3xl mx-auto font-sans">
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold tracking-widest text-purple-400 uppercase">Final Exam</span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">Ecosystem Final Quiz</h2>
                </div>
                {quizSubmitted && (
                  <button
                    onClick={() => {
                      if (window.confirm("Retake the quiz? This will reset your current score!")) {
                        if (activeCourse === 1) {
                          setQuizAnswersC1({});
                          setQuizSubmittedC1(false);
                        } else {
                          setQuizAnswersC2({});
                          setQuizSubmittedC2(false);
                        }
                        setQuizActiveQuestion(0);
                        setReviewWrongOnly(false);
                      }
                    }}
                    className="py-2 px-3 rounded-lg border border-purple-500/20 hover:border-purple-500/50 text-purple-400 text-xs font-semibold flex items-center gap-1.5 transition-all bg-purple-500/5"
                  >
                    <RefreshCw size={14} />
                    Retake Quiz
                  </button>
                )}
              </div>

              {!quizSubmitted && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-gray-400">
                    <span>Question {quizActiveQuestion + 1} of {totalQuestions}</span>
                    <span>{Math.round(((quizActiveQuestion) / totalQuestions) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-purple-500 rounded-full transition-all duration-300"
                      style={{ width: `${((quizActiveQuestion) / totalQuestions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {quizSubmitted ? (
                <div className="space-y-6">
                  
                  <div className={`p-8 border rounded-2xl text-center space-y-4 bg-gradient-to-br from-purple-500/10 to-transparent ${quizRank.color}`}>
                    <span className="text-xs font-bold uppercase tracking-widest">Quiz Completed!</span>
                    <h3 className="text-5xl font-black text-white">{quizScorePercent}%</h3>
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-glow-purple">{quizRank.title}</p>
                      <p className="text-sm text-gray-300 font-light max-w-sm mx-auto">{quizRank.desc}</p>
                    </div>
                  </div>

                  {activeCourse === 2 && quizScorePercent === 100 && (
                    <div className="p-6 rounded-2xl border border-emerald-500 bg-emerald-500/5 text-center space-y-4 animate-bounce">
                      <h4 className="text-lg font-extrabold text-emerald-400">🔥 YOU COMPLETED THE FDE ROADMAP!</h4>
                      <p className="text-xs text-gray-300">Lessons Completed: 18 | Exam Score: 100% | Key Concepts Mastered</p>
                      <div className="pt-2 border-t border-white/5 space-y-2">
                        <span className="text-[10px] text-gray-400 block uppercase font-bold">Your Next Step:</span>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {["VALIDATE A VERTICAL", "BUILD A THIN SLICE", "START FDE PORTFOLIO", "BUILD A CLIENT WORKER"].map((step, sIdx) => (
                            <span key={sIdx} className="px-3 py-1 rounded bg-purple-600 text-white font-bold text-[10px] shadow-sm">
                              {step}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">Review Answers</h3>
                    <div className="flex items-center gap-2">
                      <label className="text-xs text-gray-400 cursor-pointer flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          checked={reviewWrongOnly}
                          onChange={(e) => setReviewWrongOnly(e.target.checked)}
                          className="rounded bg-slate-900 border-white/10 text-purple-600 focus:ring-0 focus:ring-offset-0"
                        />
                        Show Incorrect Only
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {currentQuizQuestions.map((q: any, idx: number) => {
                      const isCorrect = quizAnswers[idx] === q.correct;
                      if (reviewWrongOnly && isCorrect) return null;

                      return (
                        <div key={idx} className={`glass-panel border rounded-2xl p-5 space-y-3 ${isCorrect ? "border-emerald-500/20 bg-emerald-500/5" : "border-red-500/20 bg-red-500/5"}`}>
                          <div className="flex items-start justify-between gap-3">
                            <span className="font-mono text-xs text-gray-400 shrink-0">Q{idx + 1}.</span>
                            <p className="text-sm font-semibold text-gray-200 flex-1">{q.question}</p>
                            {isCorrect ? (
                              <span className="text-xs font-bold text-emerald-400">Correct</span>
                            ) : (
                              <span className="text-xs font-bold text-red-400">Incorrect</span>
                            )}
                          </div>

                          <div className="grid grid-cols-1 gap-1.5 pl-7">
                            {q.options.map((opt: string, oIdx: number) => {
                              const isSelected = quizAnswers[idx] === oIdx;
                              const isAnsCorrect = q.correct === oIdx;
                              let optStyle = "text-gray-400";
                              if (isSelected) {
                                optStyle = isAnsCorrect ? "text-emerald-400 font-bold" : "text-red-400 font-bold line-through";
                              } else if (isAnsCorrect) {
                                optStyle = "text-emerald-400 font-semibold";
                              }

                              return (
                                <div key={oIdx} className={`text-xs ${optStyle} flex items-center gap-1.5`}>
                                  <div className={`h-1.5 w-1.5 rounded-full ${isSelected ? (isAnsCorrect ? "bg-emerald-500" : "bg-red-500") : (isAnsCorrect ? "bg-emerald-500" : "bg-transparent border border-gray-600")}`}></div>
                                  <span>{opt}</span>
                                </div>
                              );
                            })}
                          </div>

                          <p className="text-xs text-gray-300 italic pl-7 border-l border-white/5 mt-2">
                            <strong>Explanation (Urdu):</strong> {q.explanation}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                </div>
              ) : (
                /* Question View */
                <div className="glass-panel border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
                  
                  <div className="space-y-4">
                    <span className="text-[10px] text-purple-400 font-mono font-bold tracking-widest uppercase">Question {quizActiveQuestion + 1} of {totalQuestions}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                      {currentQuizQuestions[quizActiveQuestion].question}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {currentQuizQuestions[quizActiveQuestion].options.map((opt: string, oIdx: number) => {
                      const isSelected = quizAnswers[quizActiveQuestion] === oIdx;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleQuizAnswer(quizActiveQuestion, oIdx)}
                          className={`w-full text-left p-4 rounded-xl border border-white/5 text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${isSelected ? "bg-purple-500/10 border-purple-500 text-purple-300 font-sans" : "bg-white/5 hover:bg-white/10 text-gray-300 border-white/5"}`}
                        >
                          <span>{opt}</span>
                          <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${isSelected ? "border-purple-500 bg-purple-500" : "border-gray-500"}`}>
                            {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white"></div>}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigator buttons */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <button
                      disabled={quizActiveQuestion === 0}
                      onClick={() => setQuizActiveQuestion(quizActiveQuestion - 1)}
                      className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs text-gray-300 font-semibold transition-all disabled:opacity-30 disabled:pointer-events-none"
                    >
                      Back
                    </button>

                    {quizActiveQuestion < totalQuestions - 1 ? (
                      <button
                        disabled={quizAnswers[quizActiveQuestion] === undefined}
                        onClick={() => setQuizActiveQuestion(quizActiveQuestion + 1)}
                        className="px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-purple-500/15"
                      >
                        Next Question
                      </button>
                    ) : (
                      <button
                        disabled={Object.keys(quizAnswers).length < totalQuestions}
                        onClick={() => {
                          if (window.confirm("Submit your answers?")) {
                            if (activeCourse === 1) {
                              setQuizSubmittedC1(true);
                            } else if (activeCourse === 2) {
                              setQuizSubmittedC2(true);
                            } else if (activeCourse === 3) {
                              setQuizSubmittedC3(true);
                            } else {
                              setQuizSubmittedC4(true);
                            }
                          }
                        }}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all disabled:opacity-50 disabled:pointer-events-none shadow-md shadow-emerald-500/15"
                      >
                        Submit Quiz
                      </button>
                    )}
                  </div>

                </div>
              )}

            </div>
          )}

        </main>
      </div>

      {/* FOOTER */}
      <footer className="mt-auto border-t border-white/5 py-6 text-center text-xs text-gray-500 z-10 glass-panel">
        <p>© 2026 AI Agent Factory — Built for complete beginners. All Rights Reserved.</p>
        <p className="mt-1">Concept structured with Roman Urdu / English. Simple explanations to help you master AI agents architecture.</p>
      </footer>
    </div>
  );
}

// Function to render custom diagrams for Ecosystem Concept (Course 1)
function renderLessonDiagram(
  id: number,
  _activeRung: number,
  _setActiveRung: (n: number) => void,
  _customizationRatio: number,
  _setCustomizationRatio: (n: number) => void,
  _sliderPosition: "before" | "after",
  _setSliderPosition: (pos: "before" | "after") => void,
  vertQuestions: Record<number, boolean>,
  setVertQuestions: (q: Record<number, boolean>) => void,
  verticalCalculated: boolean,
  setVerticalCalculated: (b: boolean) => void
) {
  switch (id) {
    case 1:
      // Topic 1: The Ecosystem Concept (Ecosystem intro diagram)
      return (
        <svg className="w-full max-w-lg h-44" viewBox="0 0 500 160">
          <g>
            <path d="M 50,80 L 150,80" stroke="rgba(168,85,247,0.4)" strokeWidth="2" className="animate-dash" />
            <path d="M 150,80 L 250,40" stroke="rgba(59,130,246,0.4)" strokeWidth="2" className="animate-dash" />
            <path d="M 150,80 L 250,120" stroke="rgba(59,130,246,0.4)" strokeWidth="2" className="animate-dash" />
            <path d="M 250,40 L 370,80" stroke="rgba(6,182,212,0.4)" strokeWidth="2" className="animate-dash" />
            <path d="M 250,120 L 370,80" stroke="rgba(6,182,212,0.4)" strokeWidth="2" className="animate-dash" />

            <circle cx="50" cy="80" r="28" fill="#1e1b4b" stroke="#a855f7" strokeWidth="2" />
            <text x="50" y="83" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Book</text>

            <circle cx="150" cy="80" r="28" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
            <text x="150" y="83" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">SoR Database</text>

            <circle cx="250" cy="40" r="28" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
            <text x="250" y="43" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">AI Tutor</text>

            <circle cx="250" cy="120" r="28" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
            <text x="250" y="123" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">AI Developer</text>

            <circle cx="370" cy="80" r="28" fill="#111827" stroke="#06b6d4" strokeWidth="2" />
            <text x="370" y="83" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">Vertical Worker</text>
          </g>
        </svg>
      );

    case 2:
      // Topic 2: System of Record
      return (
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-md justify-between">
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900 w-full text-center space-y-2">
            <span className="text-[10px] text-red-400 font-bold uppercase">❌ Phone A, B, C</span>
            <p className="text-xs text-gray-400 leading-tight font-mono">Uncle Bob = 0300-111<br />Uncle Bob = 0333-222<br />Uncle Bob = 0312-333</p>
            <p className="text-[10px] text-gray-500 italic">Conflict / Confusion</p>
          </div>
          <div className="text-gray-500 font-bold">➔</div>
          <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 w-full text-center space-y-2">
            <span className="text-[10px] text-emerald-400 font-bold uppercase">✅ Official Notepad (SoR)</span>
            <p className="text-xs text-white font-mono leading-tight font-bold">Bob Number = 0333-222</p>
            <p className="text-[10px] text-purple-300">Single Source of Truth</p>
          </div>
        </div>
      );

    case 3:
      // Topic 3: Zia Tutor AI (Personal tutor records)
      return (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-xs">
          {["Knowledge Record", "Identity Record", "Learner Record", "Personal Profile"].map((rec, rIdx) => (
            <div key={rIdx} className="p-2.5 rounded-lg border border-white/5 bg-slate-900 w-full text-center text-xs font-semibold text-gray-300">
              {rec}
            </div>
          ))}
          <div className="text-gray-500 my-1">↓ Combined feeds</div>
          <div className="p-3 rounded-lg border border-purple-500 bg-purple-500/10 text-xs font-bold text-purple-300 w-full text-center">
            Zia Personalized Tutor
          </div>
        </div>
      );

    case 4:
      // Topic 4: Zia Developer AI (Software lifecycle steps)
      return (
        <div className="grid grid-cols-3 gap-2 w-full max-w-xs justify-items-center">
          {["Requirement", "Architecture", "Specification", "Build", "Test", "Install"].map((step, idx) => (
            <div key={idx} className="p-2 rounded-lg border border-white/5 bg-slate-900 w-20 text-center text-[10px] font-mono text-cyan-400">
              {idx + 1}. {step}
            </div>
          ))}
        </div>
      );

    case 5:
      // Topic 5: The FDE AF Model (Five layers structure)
      return (
        <div className="w-full space-y-2 max-w-md">
          {[
            { title: "Layer 4: Customer Instances", color: "border-purple-500 text-purple-300" },
            { title: "Layer 3: Vertical Ecosystems", color: "border-pink-500 text-pink-300" },
            { title: "Layer 2: Teaching & Development Ecosystem", color: "border-blue-500 text-blue-300" },
            { title: "Layer 1: Content System of Record Component", color: "border-cyan-500 text-cyan-300" },
            { title: "Layer 0: The Foundation Framework", color: "border-teal-500 text-teal-300" }
          ].map((node, idx) => (
            <div key={idx} className={`p-2.5 rounded-lg border-l-4 bg-slate-900 text-xs font-semibold ${node.color} flex items-center gap-2 pl-3`}>
              <span className="font-mono bg-gray-800 px-1.5 py-0.5 rounded text-[10px]">{idx}</span>
              <span>{node.title}</span>
            </div>
          ))}
        </div>
      );

    case 6:
      // Topic 6: Choosing Your Vertical (5 Vertical questions readiness check)
      return (
        <div className="w-full max-w-sm space-y-3 text-left">
          {!verticalCalculated ? (
            <>
              {[
                { id: 1, text: "Do you have a senior domain practitioner to work with you?" },
                { id: 2, text: "Is the vertical governed by public laws?" },
                { id: 3, text: "Do you have 6–9 months of savings/funding?" },
                { id: 4, text: "Are rules poorly documented in standard English online?" },
                { id: 5, text: "Can you legally receive cross-border payments?" }
              ].map((q) => (
                <div key={q.id} className="flex items-center justify-between gap-3 p-1.5 rounded bg-slate-900/60 border border-white/5 text-[10px]">
                  <span className="text-gray-300 font-semibold">{q.text}</span>
                  <div className="flex gap-1 shrink-0">
                    <button 
                      onClick={() => setVertQuestions({ ...vertQuestions, [q.id]: true })}
                      className={`px-2 py-0.5 rounded text-[9px] ${vertQuestions[q.id] === true ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400"}`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setVertQuestions({ ...vertQuestions, [q.id]: false })}
                      className={`px-2 py-0.5 rounded text-[9px] ${vertQuestions[q.id] === false ? "bg-red-600 text-white" : "bg-white/5 text-gray-400"}`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setVerticalCalculated(true)}
                className="w-full py-2 rounded bg-purple-600 text-white font-bold text-xs shadow-md"
              >
                Calculate Readiness
              </button>
            </>
          ) : (
            <div className="p-4 rounded-xl border border-purple-500 bg-purple-500/5 space-y-3 text-center">
              <h4 className="text-xs font-bold text-white uppercase">Readiness Result:</h4>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                {vertQuestions[1] === true
                  ? "✅ VERTICAL READY: You have expert access. Start designing your Vertical SoR database."
                  : "⚠️ SERVICE LADDER RECOMMENDED: Missing expert access. Start with basic service configurations to gain trust and meet experts first."}
              </p>
              <button 
                onClick={() => { setVerticalCalculated(false); setVertQuestions({}); }}
                className="text-[10px] text-purple-400 underline"
              >
                Re-calculate
              </button>
            </div>
          )}
        </div>
      );

    case 7:
      // Topic 7: Designing the Vertical SoR (KEEP/REDESIGN/DELETE cards)
      return (
        <div className="flex gap-2.5 w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-1">
            <span>KEEP</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Regulatory rules & trust factors</span>
          </div>
          <div className="p-3.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 flex-1">
            <span>REDESIGN</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Manual data entries with AI</span>
          </div>
          <div className="p-3.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 flex-1">
            <span>DELETE</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Obsolete routing paperwork</span>
          </div>
        </div>
      );

    case 8:
      // Topic 8: System of Context (System of Context vs SoR diagram)
      return (
        <div className="flex flex-col items-stretch gap-3 w-full max-w-xs text-xs">
          <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-950/20 text-center font-semibold text-purple-300">
            System of Record (SoR)
            <span className="block text-[10px] text-gray-400 font-normal mt-1">Permanent Law / Rules database</span>
          </div>
          <div className="text-gray-500 text-center">➕</div>
          <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-950/20 text-center font-semibold text-blue-300">
            System of Context
            <span className="block text-[10px] text-gray-400 font-normal mt-1">Temporary Invoice PDF + Client PO file</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Function to render custom interactive diagrams for Paid FDE Roadmap (Course 2)
function renderCourse2Diagram(
  id: number,
  sliderPosition: "before" | "after",
  setSliderPosition: (pos: "before" | "after") => void,
  invoiceAnswer: string | null,
  setInvoiceAnswer: (ans: string) => void,
  vertQuestions: Record<number, boolean>,
  setVertQuestions: (q: Record<number, boolean>) => void,
  verticalCalculated: boolean,
  setVerticalCalculated: (b: boolean) => void,
  contractBase: string,
  setContractBase: (s: string) => void,
  contractTarget: string,
  setContractTarget: (s: string) => void,
  contractMeasure: string,
  setContractMeasure: (s: string) => void,
  contractGenerated: string,
  setContractGenerated: (s: string) => void,
  customizationRatio: number,
  setCustomizationRatio: (n: number) => void
) {
  switch (id) {
    case 1:
      // Two Problems
      return (
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-between items-stretch">
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/5 text-center flex-1 flex flex-col justify-between">
            <span className="text-[10px] text-red-400 font-bold uppercase">Problem A: Developer</span>
            <p className="text-xs text-gray-300 mt-2 font-mono">Routine code gets automated. Coder rates fall.</p>
          </div>
          <div className="flex items-center justify-center text-gray-500">➕</div>
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-950/5 text-center flex-1 flex flex-col justify-between">
            <span className="text-[10px] text-red-400 font-bold uppercase">Problem B: Corporate</span>
            <p className="text-xs text-gray-300 mt-2 font-mono">AI Pilot is bought but not integrated into operations.</p>
          </div>
        </div>
      );

    case 2:
      // Deployment Gap before/after slider + scenario
      return (
        <div className="w-full max-w-sm space-y-4 text-center">
          <div className="flex gap-2 justify-center">
            <button 
              onClick={() => setSliderPosition("before")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${sliderPosition === "before" ? "bg-red-500 text-white" : "bg-white/5 text-gray-400"}`}
            >
              Before: AI Pilot
            </button>
            <button 
              onClick={() => setSliderPosition("after")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${sliderPosition === "after" ? "bg-emerald-500 text-white" : "bg-white/5 text-gray-400"}`}
            >
              After: Workflow Integration
            </button>
          </div>
          
          <div className="p-4 rounded-xl border border-white/5 bg-slate-900/60 text-xs">
            {sliderPosition === "before" ? (
              <span className="text-red-400">❌ "AI answers billing questions but doesn't log them in ERP database automatically. Zero value."</span>
            ) : (
              <span className="text-emerald-400">✅ "AI verifies values, validates compliance rules, and logs outputs directly into ERP. Measurable result!"</span>
            )}
          </div>

          <div className="border-t border-white/5 pt-4 text-left space-y-2">
            <span className="text-[10px] text-gray-400 font-bold uppercase">Scenario Question:</span>
            <p className="text-[11px] text-gray-200">A client says "We want AI to process invoices." What is missing?</p>
            <div className="grid grid-cols-2 gap-2">
              {["Workflow context", "Company Data", "Approval rules", "All of the above"].map((item) => (
                <button
                  key={item}
                  onClick={() => setInvoiceAnswer(item)}
                  className={`p-2 rounded text-[10px] border text-left ${invoiceAnswer === item ? (item === "All of the above" ? "border-emerald-500 text-emerald-400 bg-emerald-500/5" : "border-red-500 text-red-400 bg-red-500/5") : "border-white/5 bg-slate-900"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      );

    case 3:
      // FDE Comparison Table
      return (
        <div className="w-full max-w-sm overflow-x-auto">
          <table className="w-full text-left text-[10px] border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-400 font-bold uppercase">
                <th className="py-2">Standard Developer</th>
                <th className="py-2 pl-4">FDE Role</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-white/5">
                <td className="py-2">Writes isolated code files</td>
                <td className="py-2 pl-4 text-purple-400 font-semibold">Integrates AI to live data</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">Focuses on technical specifications</td>
                <td className="py-2 pl-4 text-purple-400 font-semibold">Focuses on business metrics</td>
              </tr>
              <tr>
                <td className="py-2">Leaves after code compilation</td>
                <td className="py-2 pl-4 text-purple-400 font-semibold">Stays for workflow metrics</td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case 4:
      // Vendor-Neutral Vertical FDE funnel
      return (
        <div className="flex flex-col items-center gap-2 w-full max-w-xs text-center text-xs">
          <div className="p-2 rounded border border-white/10 bg-slate-900 w-full">
            <span className="text-[10px] text-gray-400 block uppercase font-bold">Architect</span>
            <span>Vendor-Neutral (Claude, Gemini, OpenAI)</span>
          </div>
          <div className="text-gray-500">➕</div>
          <div className="p-2 rounded border border-purple-500/30 bg-purple-950/20 w-full text-purple-300 font-semibold">
            <span className="text-[10px] text-purple-400 block uppercase font-bold">Niche</span>
            <span>Pakistan Tax Customs (Vertical)</span>
          </div>
        </div>
      );

    case 5:
      // What you own cards
      return (
        <div className="grid grid-cols-2 gap-3 w-full max-w-sm text-center text-[10px]">
          <div className="p-2.5 rounded border border-white/5 bg-slate-900 opacity-60">
            <span className="block text-gray-500">AI Compute model</span>
            <span className="font-bold text-white">Rented API</span>
          </div>
          <div className="p-2.5 rounded border border-white/5 bg-slate-900 opacity-60">
            <span className="block text-gray-500">Cloud servers</span>
            <span className="font-bold text-white">Rented hosting</span>
          </div>
          <div className="p-2.5 rounded border border-purple-500 bg-purple-500/10 grid-span-2 col-span-2">
            <span className="block text-purple-300 font-bold uppercase">Governed Professional Knowledge</span>
            <span className="font-bold text-white">Your Ownable Intellectual Asset</span>
          </div>
        </div>
      );

    case 6:
      // 5 Vertical questions decision test
      return (
        <div className="w-full max-w-sm space-y-3 text-left">
          {!verticalCalculated ? (
            <>
              {[
                { id: 1, text: "Do you have a senior domain practitioner to work with you?" },
                { id: 2, text: "Is the vertical governed by public laws?" },
                { id: 3, text: "Do you have 6–9 months of savings/funding?" },
                { id: 4, text: "Are rules poorly documented in standard English online?" },
                { id: 5, text: "Can you legally receive cross-border payments?" }
              ].map((q) => (
                <div key={q.id} className="flex items-center justify-between gap-3 p-1.5 rounded bg-slate-900/60 border border-white/5 text-[10px]">
                  <span className="text-gray-300 font-semibold">{q.text}</span>
                  <div className="flex gap-1 shrink-0">
                    <button 
                      onClick={() => setVertQuestions({ ...vertQuestions, [q.id]: true })}
                      className={`px-2 py-0.5 rounded text-[9px] ${vertQuestions[q.id] === true ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400"}`}
                    >
                      Yes
                    </button>
                    <button 
                      onClick={() => setVertQuestions({ ...vertQuestions, [q.id]: false })}
                      className={`px-2 py-0.5 rounded text-[9px] ${vertQuestions[q.id] === false ? "bg-red-600 text-white" : "bg-white/5 text-gray-400"}`}
                    >
                      No
                    </button>
                  </div>
                </div>
              ))}
              <button
                onClick={() => setVerticalCalculated(true)}
                className="w-full py-2 rounded bg-purple-600 text-white font-bold text-xs shadow-md"
              >
                Calculate Readiness
              </button>
            </>
          ) : (
            <div className="p-4 rounded-xl border border-purple-500 bg-purple-500/5 space-y-3 text-center">
              <h4 className="text-xs font-bold text-white uppercase">Readiness Result:</h4>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                {vertQuestions[1] === true
                  ? "✅ VERTICAL READY: You have expert access. Start designing your Vertical SoR database."
                  : "⚠️ SERVICE LADDER RECOMMENDED: Missing expert access. Start with basic service configurations to gain trust and meet experts first."}
              </p>
              <button 
                onClick={() => { setVerticalCalculated(false); setVertQuestions({}); }}
                className="text-[10px] text-purple-400 underline"
              >
                Re-calculate
              </button>
            </div>
          )}
        </div>
      );

    case 7:
      // Design & Build SoR diagram (KEEP/REDESIGN/DELETE)
      return (
        <div className="flex gap-2.5 w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-3.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-1">
            <span>KEEP</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Regulatory rules & trust factors</span>
          </div>
          <div className="p-3.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-400 flex-1">
            <span>REDESIGN</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Manual data entries with AI</span>
          </div>
          <div className="p-3.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 flex-1">
            <span>DELETE</span>
            <span className="block text-[8px] text-gray-400 font-normal mt-1">Obsolete routing paperwork</span>
          </div>
        </div>
      );

    case 8:
      // System of Context vs SoR diagram
      return (
        <div className="flex flex-col items-stretch gap-3 w-full max-w-xs text-xs">
          <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-950/20 text-center font-semibold text-purple-300">
            System of Record (SoR)
            <span className="block text-[10px] text-gray-400 font-normal mt-1">Permanent Law / Rules database</span>
          </div>
          <div className="text-gray-500 text-center">➕</div>
          <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-950/20 text-center font-semibold text-blue-300">
            System of Context
            <span className="block text-[10px] text-gray-400 font-normal mt-1">Temporary Invoice PDF + Client PO file</span>
          </div>
        </div>
      );

    case 9:
      // Go to work doors
      return (
        <div className="flex gap-3 w-full max-w-sm text-center text-xs font-bold justify-between">
          <div className="p-3.5 rounded-xl border border-white/5 bg-slate-900 flex-1">
            <span className="text-blue-400 block text-[9px] uppercase tracking-wider">Door 1</span>
            <span>JOB</span>
          </div>
          <div className="p-3.5 rounded-xl border border-white/5 bg-slate-900 flex-1">
            <span className="text-purple-400 block text-[9px] uppercase tracking-wider">Door 2</span>
            <span>FREELANCE</span>
          </div>
          <div className="p-3.5 rounded-xl border border-white/5 bg-slate-900 flex-1">
            <span className="text-emerald-400 block text-[9px] uppercase tracking-wider">Door 3</span>
            <span>STARTUP</span>
          </div>
        </div>
      );

    case 10:
      // Service Ladder steps
      return (
        <div className="flex flex-col items-stretch gap-1.5 w-full max-w-xs text-center text-[10px] font-semibold">
          {["1. Clean & Index Client PDFs", "2. Map Workflow Rules", "3. Build Connector API (MCP)", "4. Secure Monthly Retainer"].map((step, idx) => (
            <div key={idx} className="p-2 rounded bg-slate-900 border border-white/5 text-gray-300">
              {step}
            </div>
          ))}
        </div>
      );

    case 11:
      // Vertical Ladder steps
      return (
        <div className="flex flex-col items-stretch gap-1.5 w-full max-w-xs text-center text-[10px] font-semibold">
          {["1. Secure Expert Partner", "2. Map Country Laws (SoR)", "3. Build Custom Vertical Bot", "4. Package as SaaS / Startup"].map((step, idx) => (
            <div key={idx} className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">
              {step}
            </div>
          ))}
        </div>
      );

    case 12:
      // 80/20 Customization Slider
      return (
        <div className="w-full max-w-sm space-y-4">
          <div className="flex h-10 rounded-xl overflow-hidden border border-white/10 font-bold text-[10px]">
            <div 
              className="bg-purple-600 flex items-center justify-center text-white transition-all duration-300"
              style={{ width: `${100 - customizationRatio}%` }}
            >
              Core Code ({100 - customizationRatio}%)
            </div>
            <div 
              className="bg-pink-500 flex items-center justify-center text-white transition-all duration-300"
              style={{ width: `${customizationRatio}%` }}
            >
              Custom ({customizationRatio}%)
            </div>
          </div>
          <div className="space-y-1">
            <input 
              type="range" 
              min="5" 
              max="50" 
              value={customizationRatio}
              onChange={(e) => setCustomizationRatio(Number(e.target.value))}
              className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-pink-500" 
            />
          </div>
        </div>
      );

    case 13:
      // 10-80-10 Workflow
      return (
        <div className="flex items-center justify-center gap-2.5 w-full max-w-sm text-center text-xs">
          <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-950/20 flex-1">
            <span className="text-[9px] text-blue-400 block font-bold">Specs</span>
            <span>Human 10%</span>
          </div>
          <span className="text-gray-600 font-bold">➔</span>
          <div className="p-3 rounded-lg border border-purple-500 bg-purple-500/10 flex-1">
            <span className="text-[9px] text-purple-300 block font-bold">Code</span>
            <span>AI 80%</span>
          </div>
          <span className="text-gray-600 font-bold">➔</span>
          <div className="p-3 rounded-lg border border-blue-500/30 bg-blue-950/20 flex-1">
            <span className="text-[9px] text-blue-400 block font-bold">Review</span>
            <span>Human 10%</span>
          </div>
        </div>
      );

    case 14:
      // Contract of success calculator
      return (
        <div className="w-full max-w-sm space-y-3 text-left text-[10px]">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-gray-400 font-bold uppercase block mb-1">Baseline Status:</label>
              <input 
                type="text" 
                value={contractBase}
                onChange={(e) => setContractBase(e.target.value)}
                className="w-full bg-slate-900 border border-white/5 p-2 rounded text-white" 
              />
            </div>
            <div>
              <label className="text-gray-400 font-bold uppercase block mb-1">Target Speed/Outcome:</label>
              <input 
                type="text" 
                value={contractTarget}
                onChange={(e) => setContractTarget(e.target.value)}
                className="w-full bg-slate-900 border border-white/5 p-2 rounded text-white" 
              />
            </div>
          </div>
          <div>
            <label className="text-gray-400 font-bold uppercase block mb-1">Acceptance Verification:</label>
            <input 
              type="text" 
              value={contractMeasure}
              onChange={(e) => setContractMeasure(e.target.value)}
              className="w-full bg-slate-900 border border-white/5 p-2 rounded text-white" 
            />
          </div>
          <button
            onClick={() => {
              setContractGenerated(`"The system must automate invoice processing. Baseline time of ${contractBase} must be reduced to a target of ${contractTarget}, verified using: ${contractMeasure}."`);
            }}
            className="w-full py-2 rounded bg-emerald-600 text-white font-bold text-xs shadow-md"
          >
            Generate Contract Clause
          </button>
          
          {contractGenerated && (
            <div className="p-2.5 rounded bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 font-mono text-[9px] leading-relaxed">
              {contractGenerated}
            </div>
          )}
        </div>
      );

    case 15:
      // Retainer lifecycle
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">Build & Setup</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">Continuous Audit</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/25 text-emerald-300">Monthly Pay</div>
        </div>
      );

    case 16:
      // Build first sell second comparison
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-red-500/20 bg-red-950/5 flex-1 space-y-1 opacity-60">
            <span className="block text-red-400 font-bold">A. Generic pitch</span>
            <span>"I know AI. Trust me."</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400 font-bold">B. Build Slice First</span>
            <span>"Here is the video of it filing invoice taxes."</span>
          </div>
        </div>
      );

    case 17:
      // Slice concept diagram
      return (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-xs text-center text-xs">
          <div className="p-2 rounded border border-purple-500 bg-purple-500/10 w-full text-purple-300 font-bold">
            Thin Slice: Bank Reconciliation bot (Complete)
          </div>
          <div className="text-gray-500">vs</div>
          <div className="p-2 rounded border border-white/5 bg-slate-900 w-full text-gray-500">
            Giant Scope: CFO Suite (Incomplete skeleton)
          </div>
        </div>
      );

    case 18:
      // Failure modes interactive grid
      return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm text-[9px] text-left">
          {[
            { title: "1. Endless CV design", desc: "No code built" },
            { title: "2. Missing Expert", desc: "Hallucinating agent" },
            { title: "3. Selling Hours", desc: "Tiny developer wages" },
            { title: "4. Massive Scope", desc: "Unfinished project" }
          ].map((item, idx) => (
            <div key={idx} className="p-2 rounded border border-red-500/20 bg-red-950/5">
              <span className="font-bold text-red-400 block">{item.title}</span>
              <span className="text-gray-400">{item.desc}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// Function to render custom interactive diagrams for The Four Layers (Course 3)
function renderCourse3Diagram(
  id: number,
  c3ContainerTab: "container" | "ladder",
  setC3ContainerTab: (tab: "container" | "ladder") => void
) {
  switch (id) {
    case 1:
      // Containers, Not Steps
      return (
        <div className="w-full max-w-sm space-y-3">
          <div className="flex justify-center gap-2 mb-2">
            <button 
              onClick={() => setC3ContainerTab("container")}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${c3ContainerTab === "container" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-400"}`}
            >
              Container View
            </button>
            <button 
              onClick={() => setC3ContainerTab("ladder")}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${c3ContainerTab === "ladder" ? "bg-red-600/40 text-gray-300" : "bg-white/5 text-gray-400"}`}
            >
              Ladder View
            </button>
          </div>
          {c3ContainerTab === "container" ? (
            <div className="border border-purple-500/30 bg-purple-950/10 p-4 rounded-xl text-left text-[11px] animate-fadeIn space-y-2">
              <div className="border border-purple-500/40 p-3 rounded-lg">
                <span className="text-purple-400 font-bold block">LOOP</span>
                <div className="border border-blue-500/30 p-2.5 rounded mt-2">
                  <span className="text-blue-400 font-bold block">HARNESS</span>
                  <div className="border border-cyan-500/30 p-2 rounded mt-2">
                    <span className="text-cyan-400 font-bold block">CONTEXT</span>
                    <div className="bg-slate-900 p-1.5 rounded border border-white/5 text-center text-xs text-gray-200 mt-2 font-mono">
                      PROMPT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-red-500/30 bg-red-950/5 p-4 rounded-xl text-center text-xs text-gray-400 font-mono animate-fadeIn space-y-1">
              <div>Loop (Expert only)</div>
              <div>▲</div>
              <div>Harness (Advanced)</div>
              <div>▲</div>
              <div>Context (Intermediate)</div>
              <div>▲</div>
              <div>Prompt (Beginner)</div>
            </div>
          )}
        </div>
      );

    case 2:
      // Unit of Work Test comparison
      return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm text-[9px] text-left">
          <div className="p-2 rounded bg-slate-900 border border-white/5">
            <span className="text-purple-400 font-bold block font-sans">Prompt Unit</span>
            <span className="text-gray-300 font-mono">One model call</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">
            <span className="text-cyan-400 font-bold block font-sans">Context Unit</span>
            <span className="text-gray-300 font-mono">Active window</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">
            <span className="text-blue-400 font-bold block font-sans">Harness Unit</span>
            <span className="text-gray-300 font-mono">One beat (tools run)</span>
          </div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">
            <span className="text-emerald-400 font-bold block font-sans">Loop Unit</span>
            <span className="text-gray-300 font-mono">The whole run</span>
          </div>
        </div>
      );

    case 3:
      // Prompt weakest ingredient
      return (
        <div className="w-full max-w-sm space-y-3 text-left text-xs">
          <span className="font-bold text-gray-300">Prompt: "Explain databases to a child."</span>
          <div className="p-2.5 rounded bg-slate-900 border border-white/5 space-y-2">
            <span className="block text-[10px] text-yellow-400 font-bold">Weakness Diagnostic:</span>
            <div className="flex gap-2">
              <button 
                onClick={() => alert("Fix layout check: use lists/markdown rules!")}
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 text-[10px]"
              >
                Wrong Output Format
              </button>
              <button 
                onClick={() => alert("Fix tone check: use Urdu analogies instruction!")}
                className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-gray-300 text-[10px]"
              >
                Wrong Audience Tone
              </button>
            </div>
          </div>
        </div>
      );

    case 4:
      // Context Limits
      return (
        <div className="flex flex-col items-center gap-2 w-full max-w-xs text-[10px] text-left">
          <div className="p-2 bg-slate-900 border border-white/5 rounded w-full">
            <span className="text-cyan-400 font-bold block">Loaded Context:</span>
            <span>- User message: 'Process invoicing'<br/>- Pricing rules sheet v3</span>
          </div>
          <div className="p-2 bg-red-950/20 border border-red-500/20 rounded w-full">
            <span className="text-red-400 font-bold block">Missing Context (Hallucination risk):</span>
            <span>- Historical client contract validation notes</span>
          </div>
        </div>
      );

    case 5:
      // Curator
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">100-page Documents</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300 animate-pulse">Curator Selection</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/25 text-emerald-300">5-page Model window</div>
        </div>
      );

    case 6:
      // Lost in the Middle U curve
      return (
        <div className="w-full max-w-sm space-y-2 text-center text-[9px] font-mono">
          <div className="flex justify-between text-emerald-400 font-bold px-4">
            <span>High Recall (Start)</span>
            <span>High Recall (End)</span>
          </div>
          <div className="h-10 border-x border-b border-purple-500/30 rounded-b-xl flex items-center justify-center relative">
            <span className="text-red-400 font-bold absolute bottom-2">Low Attention / Forgotten (Middle)</span>
          </div>
        </div>
      );

    case 7:
      // Harness One Beat
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-[9px] text-center font-bold font-mono">
          <div className="p-1 rounded bg-slate-900 border border-white/5">Setup Context</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">Call Model</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">Run Tools</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">Catch Errors</div>
        </div>
      );

    case 8:
      // Sub-agents Summary
      return (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-xs text-center text-[10px]">
          <div className="p-2 rounded border border-purple-500 bg-purple-500/10 w-full text-purple-300 font-bold">
            Main Agent Context
          </div>
          <div className="text-gray-600 font-bold">⬇ Summary logs</div>
          <div className="p-1.5 rounded border border-white/5 bg-slate-900 w-full text-gray-400">
            Sub-agent output: "Task matched" (Ignoring tiny detail matching failures)
          </div>
        </div>
      );

    case 9:
      // Harness limit vs Verification (Maker-Checker)
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-blue-500/20 bg-blue-950/5 flex-1 space-y-1">
            <span className="block text-blue-400 font-bold">Maker Sub-agent</span>
            <span>Edits index.js logic</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400 font-bold">Checker Sub-agent</span>
            <span>Runs npm test compiler checks</span>
          </div>
        </div>
      );

    case 10:
      // Loop Layer (heartbeat, spine, stops)
      return (
        <div className="w-full max-w-sm p-3 border border-white/5 bg-slate-950/60 rounded-xl text-left text-[9px] space-y-2">
          <div className="flex justify-between items-center bg-slate-900 p-1.5 rounded">
            <span className="text-purple-400 font-bold">1. HEARTBEAT</span>
            <span className="text-gray-400">Starts run (daily schedule)</span>
          </div>
          <div className="flex justify-between items-center bg-slate-900 p-1.5 rounded">
            <span className="text-blue-400 font-bold">2. SPINE</span>
            <span className="text-gray-400">Saves progress to state.json</span>
          </div>
          <div className="flex justify-between items-center bg-slate-900 p-1.5 rounded">
            <span className="text-emerald-400 font-bold">3. SAFETY STOPS</span>
            <span className="text-gray-400">Max 10 attempt checks limit</span>
          </div>
        </div>
      );

    case 11:
      // Human Gate Triggers
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-red-500/20 bg-red-950/5 flex-1 space-y-1 opacity-70">
            <span className="block text-red-400 font-bold">A. Guess Silently</span>
            <span>Choose customer record bob1 randomly</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400 font-bold">B. Human Gate</span>
            <span>Pause run, post Slack verification form</span>
          </div>
        </div>
      );

    case 12:
      // Diagnostic Drill / Which layer broke?
      return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm text-[8px] text-left">
          <div className="p-1.5 rounded border border-purple-500/30 bg-purple-950/10">
            <strong className="text-purple-400">PROMPT:</strong> wrong format or text tone
          </div>
          <div className="p-1.5 rounded border border-cyan-500/30 bg-cyan-950/10">
            <strong className="text-cyan-400">CONTEXT:</strong> confident but incorrect facts
          </div>
          <div className="p-1.5 rounded border border-blue-500/30 bg-blue-950/10">
            <strong className="text-blue-400">HARNESS:</strong> tool failures or un-caught error logs
          </div>
          <div className="p-1.5 rounded border border-emerald-500/30 bg-emerald-950/10">
            <strong className="text-emerald-400">LOOP:</strong> infinite attempts stuck in cycle
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Function to render custom interactive diagrams for Loop Engineering (Course 4)
function renderCourse4Diagram(
  id: number,
  _c4SimulatorRun: number,
  _c4SimulatorActive: boolean,
  _c4SimulatorLogs: string[],
  _setC4SimulatorActive: (b: boolean) => void,
  _setC4SimulatorRun: (n: number) => void,
  _setC4SimulatorLogs: (logs: string[]) => void
) {
  switch (id) {
    case 1:
      // Mindset Shift
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-white/5 bg-slate-900 flex-1 space-y-1">
            <span className="block text-purple-400 font-bold uppercase text-[8px]">Prompting (Before)</span>
            <span>You prompt ➔ Read result ➔ Prompt again manually</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1 animate-pulse">
            <span className="block text-emerald-400 font-bold uppercase text-[8px]">Looping (After)</span>
            <span>Heartbeat runs ➔ Checker validates ➔ State saves</span>
          </div>
        </div>
      );

    case 2:
      // What is a loop? (Kitchen Analogy)
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">Order (Heartbeat)</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">Cook (Worker)</div>
          <span className="text-gray-600">➔</span>
          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/25 text-emerald-300">Inspector (Checker)</div>
        </div>
      );

    case 3:
      // Loop vs Prompting
      return (
        <div className="w-full max-w-xs space-y-2 text-center text-xs">
          <span className="font-bold text-gray-300">Control spectrum slider</span>
          <div className="flex justify-between text-[9px] text-gray-500 px-2 font-mono">
            <span>Manual Prompting</span>
            <span>Autonomous Loop</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="10" 
            defaultValue="5"
            className="w-full accent-emerald-500" 
          />
        </div>
      );

    case 4:
      // Four Layers Connection
      return (
        <div className="border border-emerald-500/30 bg-slate-900/60 p-4 rounded-xl text-left text-[10px] max-w-sm w-full font-mono space-y-1">
          <div className="border border-emerald-500/40 p-1.5 rounded">
            <span className="text-emerald-400 font-bold">LOOP (Outer Container)</span>
            <div className="border border-white/10 p-1.5 rounded mt-1.5">
              <span>Harness ➔ Context ➔ Prompt</span>
            </div>
          </div>
        </div>
      );

    case 5:
      // Big loop vs Small loop
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-white/5 bg-slate-900 flex-1 space-y-1">
            <span className="block text-pink-400 font-bold">Small Inner Loop</span>
            <span>LLM Tool Calls (1 step)</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400 font-bold">Big Outer Loop</span>
            <span>Runs, State, and Schedule (Whole process)</span>
          </div>
        </div>
      );

    case 6:
      // Six Parts
      return (
        <div className="grid grid-cols-3 gap-2 w-full max-w-sm text-[8px] text-center font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">1. Heartbeat</div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">2. Worktree</div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">3. Skill</div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">4. Subagents</div>
          <div className="p-2 rounded bg-slate-900 border border-white/5">5. Connectors</div>
          <div className="p-2 rounded bg-slate-900 border border-white/5 font-sans text-emerald-400">6. Spine State</div>
        </div>
      );

    case 7:
      // Heartbeats
      return (
        <div className="flex flex-wrap gap-2 justify-center w-full max-w-sm text-[10px]">
          <span className="px-2 py-1 rounded bg-slate-900 border border-white/5 text-gray-300">In-Session</span>
          <span className="px-2 py-1 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">Scheduled</span>
          <span className="px-2 py-1 rounded bg-blue-950/20 border border-blue-500/20 text-blue-300">Event-driven</span>
          <span className="px-2 py-1 rounded bg-emerald-950/20 border border-emerald-500/25 text-emerald-300">Conditional</span>
        </div>
      );

    case 8:
      // Worktree Isolation
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-2 rounded border border-red-500/20 bg-red-950/5 flex-1 space-y-1 opacity-70">
            <span className="block text-red-400">Shared workspace</span>
            <span>Conflict overwrites!</span>
          </div>
          <div className="p-2 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400">Isolated worktrees</span>
            <span>Safe branches checkout</span>
          </div>
        </div>
      );

    case 9:
      // Skill rules
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">skills/ts-rules</div>
          <span className="text-gray-600">➔ Loaded ➔</span>
          <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">Agent Context</div>
        </div>
      );

    case 10:
      // Subagents maker checker
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-blue-500/20 bg-blue-950/5 flex-1 space-y-1">
            <span className="block text-blue-400 font-bold">Maker Sub-agent</span>
            <span>Edits index.js logic</span>
          </div>
          <div className="p-3 rounded border border-emerald-500 bg-emerald-500/10 flex-1 space-y-1">
            <span className="block text-emerald-400 font-bold">Checker Sub-agent</span>
            <span>Runs compiler tests</span>
          </div>
        </div>
      );

    case 11:
      // Connectors / MCP
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[10px] font-bold">
          <div className="p-2 rounded bg-slate-900 border border-white/5">LLM reasoning</div>
          <span className="text-gray-600">➔ MCP Connector ➔</span>
          <div className="p-2 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">Write real files</div>
        </div>
      );

    case 12:
      // State / Spine
      return (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-xs text-center text-[10px]">
          <div className="p-2 rounded border border-emerald-500 bg-emerald-500/10 w-full text-emerald-300 font-bold">
            Spine File: state.json
          </div>
          <div className="text-gray-600 font-bold">⬇ Saved values</div>
          <div className="p-1.5 rounded border border-white/5 bg-slate-900 w-full text-gray-400">
            current_step: 4, attempts: 2
          </div>
        </div>
      );

    case 13:
      // Lifecycle
      return (
        <div className="flex items-center justify-between w-full max-w-sm text-center text-[9px] font-bold font-mono">
          <div className="p-1 rounded bg-slate-900 border border-white/5">1. Discover</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">2. Maker</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">3. Checker</div>
          <span className="text-gray-600">➔</span>
          <div className="p-1 rounded bg-slate-900 border border-white/5">4. Spine</div>
        </div>
      );

    case 14:
      // Stopping conditions
      return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm text-[9px] text-left">
          <div className="p-2 rounded border border-emerald-500/30 bg-emerald-950/10">
            <span className="text-emerald-400 font-bold block">1. Success trigger</span>
            <span>All tests return pass status</span>
          </div>
          <div className="p-2 rounded border border-red-500/30 bg-red-950/10">
            <span className="text-red-400 font-bold block">2. Attempt limit</span>
            <span>Halt if beats count reaches 10</span>
          </div>
        </div>
      );

    case 15:
      // No-Progress checks
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-2 rounded border border-white/5 bg-slate-900 flex-1 space-y-1">
            <span className="block text-gray-400 font-bold">Attempt 1 error:</span>
            <span>SyntaxError: unexpected comma</span>
          </div>
          <div className="p-2 rounded border border-red-500/40 bg-red-950/20 flex-1 space-y-1 animate-pulse">
            <span className="block text-red-400 font-bold">Attempt 2 error:</span>
            <span>SyntaxError: unexpected comma (Halt!)</span>
          </div>
        </div>
      );

    case 16:
      // Cost control
      return (
        <div className="w-full max-w-xs space-y-2 text-center text-xs">
          <span className="font-bold text-gray-300">Spent: $12.00 / Limit: $15.00</span>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border border-white/5 relative">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-yellow-500 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
      );

    case 17:
      // Human Gates
      return (
        <div className="flex flex-col items-center gap-1.5 w-full max-w-xs text-center text-[10px]">
          <div className="p-2 rounded border border-yellow-500 bg-yellow-500/10 w-full text-yellow-300 font-bold">
            Halted: Match ambiguity score 0.52
          </div>
          <div className="flex gap-2 w-full">
            <button onClick={() => alert("Approved!")} className="flex-1 py-1 rounded bg-emerald-600 text-white font-bold text-[9px]">Approve match</button>
            <button onClick={() => alert("Rejected!")} className="flex-1 py-1 rounded bg-red-600 text-white font-bold text-[9px]">Reject match</button>
          </div>
        </div>
      );

    case 18:
      // Claude Code vs OpenCode
      return (
        <div className="flex gap-4 w-full max-w-sm text-center text-[10px] font-semibold">
          <div className="p-3 rounded border border-white/5 bg-slate-900 flex-1 space-y-1">
            <span className="block text-purple-400 font-bold">Claude Code</span>
            <span>Packaged loop executor tool</span>
          </div>
          <div className="p-3 rounded border border-white/5 bg-slate-900 flex-1 space-y-1">
            <span className="block text-blue-400 font-bold">OpenCode System</span>
            <span>Agent worker + Custom Scheduler wrapper</span>
          </div>
        </div>
      );

    case 19:
      // Projects
      return (
        <div className="flex flex-wrap gap-2 justify-center w-full max-w-sm text-[10px]">
          <span className="px-2 py-1 rounded bg-slate-900 border border-white/5 text-gray-300">ISS Position Tracker</span>
          <span className="px-2 py-1 rounded bg-purple-950/20 border border-purple-500/20 text-purple-300">CV Portfolio builder</span>
          <span className="px-2 py-1 rounded bg-blue-950/20 border border-blue-500/20 text-blue-300">GitHub review doorbell</span>
        </div>
      );

    case 20:
      // Failure lab
      return (
        <div className="grid grid-cols-2 gap-2 w-full max-w-sm text-[9px] text-left">
          <div className="p-2 rounded border border-red-500/20 bg-red-950/5">
            <span className="font-bold text-red-400 block">No heartbeat</span>
            <span className="text-gray-400">Agent runs only once</span>
          </div>
          <div className="p-2 rounded border border-red-500/20 bg-red-950/5">
            <span className="font-bold text-red-400 block">No Spine state</span>
            <span className="text-gray-400">Forgets task status on crash</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
