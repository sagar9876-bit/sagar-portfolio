import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// ---------------------------------------------------------------------------
// Lightweight inline icons (replaces lucide-react — no extra dependency needed)
// ---------------------------------------------------------------------------
const iconProps = (size) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

const Github = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const Linkedin = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className} fill="currentColor" stroke="none">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Mail = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ExternalLink = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

const Menu = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M4 12h16M4 6h16M4 18h16" />
  </svg>
);

const X = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const ArrowUpRight = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

const GraduationCap = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
  </svg>
);

const Code2 = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
  </svg>
);

const Award = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
  </svg>
);

const Briefcase = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const FileCheck = ({ size = 20, className = "" }) => (
  <svg {...iconProps(size)} className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

// ---------------------------------------------------------------------------
// EDIT ME: all your personal content lives in this block.
// ---------------------------------------------------------------------------
const PROFILE = {
  name: "SAGAR MEWADA",
  roles: ["Frontend Developer", "Full-Stack Enthusiast", "Artificial Intelligence and Data science" , "Problem Solver", "Lifelong Learner" , "Python Developer"],
  tagline:
    "Building intelligent solutions through Artificial Intelligence, Data Science, and modern web technologies. Innovative Full-Stack Developer creating cross-platform mobile apps with Flutter .",
  email: "sagarmewada900@gmail.com",
  github: "https://github.com/sagar9876-bit",
  linkedin: "https://www.linkedin.com/in/sagar-mewada987",
  location: "India",
};

const SKILLS = [
  {
    group: "Languages",
    items: [
      { name: "Java", detail: "Core OOP concepts, DSA practice, and small console/GUI apps." },
      { name: "Python", detail: "Strong foundation in programming and data analysis. Hands-on experience with libraries like Flask and matplotlib and etc. " },
      { name: "JavaScript", detail: "ES6+, DOM manipulation, async/await, and fetch-based API calls." },
      { name: "SQL", detail: "Writing queries, joins, and schema design for small projects." },
      { name: "NoSQL", detail: "Working with document-based databases like MongoDB. Hands-on experience with CRUD operations. Working in Project Menction blow . " },
    ],
  },
  {
    group: "AI & ML",
    items: [
      { name: "Generative AI", detail: "Experience with large language models and their applications" },
      { name: "Machine Learning", detail: "Understanding of core ML concepts and implementation with libraries like scikit-learn." },
      { name: "LangChain", detail: "Experience with the LangChain framework for building language model applications." },
      { name: "OpenAI API", detail: "Hands-on experience with OpenAI's API for building AI-powered applications." },
      { name: "RAG-Pipeline", detail: "Experience with Retrieval-Augmented Generation pipelines for building intelligent applications." },
      { name: "LLMs", detail: "Understanding of large language models and their applications in various domains." },
    ],
  },
  {
    group: "Frameworks & Libraries",
    items: [
      { name: "Flask", detail: "Building REST APIs and handling routing in Python." },
      { name: "FastAPI", detail: "Building fast, modern, and asynchronous APIs with Python." },
      { name: "Tailwindcss", detail: "Utility-first styling for fast, consistent UI without leaving markup." },
      { name: "React.js", detail: "Component-based architecture, hooks, and state management." },
      { name: "Next.js", detail: "Server-side rendering, static site generation, and API routes." },
      { name: "Flutter", detail: "Cross-platform mobile app development with Dart." },
    ],
  },
  {
    group: "Cloud & Deployment",
    items: [
      { name: "Google Cloud Platform", detail: "Experience with deploying and managing applications on GCP." },
      { name: "MS Azure", detail: "Experience with deploying and managing applications on MS Azure." },
      { name: "Git & GitHub", detail: "Version control, branching, and collaborating through GitHub." },
      { name: "Docker", detail: "Containerization for consistent development and deployment environments." },
      { name: "CI/CD", detail: "Continuous integration and deployment pipelines for automated testing and deployment." },
      { name: "Google Colab", detail: "Experience with Google's cloud-based Jupyter notebook environment for machine learning and data science." },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", detail: "Version control, branching, and collaborating through GitHub." },
      { name: "VS Code", detail: "Daily driver editor, extensions for linting and formatting." },
      { name: "Postman", detail: "Testing and debugging API endpoints during development." },
      { name: "Figma", detail: "Reading designs and occasionally sketching quick UI mockups." },
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Technex'25 IIT (BHU)-Varanasi (Internship) with Robokwik",
    role: "Full-Stack & AI Developer",
    duration: "April 2025 - June 2025 (Duration: 3 months)",
    summary:
      "Designing and shipping end-to-end applications that combine web development with practical AI integrations.",
    highlights: [
      "Built a full-stack Student Management System with webcam-based data capture using React, Flask, and MongoDB",
      "Developed an AI-powered stock analysis mobile app with Flutter, integrating the OpenAI API for predictive insights",
      "Designed a Zero-Trust Authentication API using behavioral biometrics and a dynamic risk engine",
    ],
    tech: ["React", "Flask", "MongoDB", "Flutter", "OpenAI API", "Python"],
    certificate: "https://drive.google.com/file/d/1zuVxxxR1DAn7fGB90XhQwE-3mB3DgaE9/view?usp=drivesdk",
  },
  {
    company: "Edunet Foundation || Collaboration with IBM SkillsBuild",
    role: "AI/ML Explorer",
    duration: "June 2025 - August 2025 (Duration: 2 months)",
    summary:
      "Continuously building hands-on familiarity with modern AI tooling through personal projects and coursework.",
    highlights: [
      "Experimented with RAG pipelines and LangChain for applied LLM projects",
      "Practiced core machine learning workflows using scikit-learn in Google Colab",
      "Studied cloud deployment basics across GCP and Azure for personal projects",
    ],
    tech: ["LangChain", "scikit-learn", "Google Colab", "GCP", "Azure"],
    certificate: "https://drive.google.com/file/d/1UTt0xVE_QuBjVf3ZH9v1aPJ1KYFTHaEP/view?usp=drivesdk",
  },
  {
    company: "JobSense With MIT (Internship)",
    role: "Full-Stack Developer",
    duration: "July 2024 - August 2024 (Duration: 1 month)",
    summary:
      "Developed and deployed web applications, focusing on both frontend and backend integration.",
    highlights: [
      "Built a responsive web application for job seekers using React and Node.js",
      "Implemented RESTful APIs and integrated with a MongoDB database for dynamic content",
      "Deployed the application on a cloud platform, ensuring scalability and performance",
    ],
    tech: ["React", "Node.js", "MongoDB", "Tailwindcss", "Cloud Deployment"],
    certificate: "https://drive.google.com/file/d/1zwUnjOTkKqPQZb6B9qrh1hzrWrFuC-zK/view?usp=drivesdk",
  },
];

const PROJECTS = [
  {
    title: "Smart Student Management System",
    description:
      "A web application that uses AI (Use web-cam to capture card and retrieve information) to manage student data, track performance, and provide insights for educators. Built with React for the frontend, Flask for the backend, and MongoDB for the database.",
    tags: ["React", "Flask", "MongoDB"],
    link: "https://s-a-s.onrender.com/",
  },
  {
    title: "AI-based Mobile App for Stock Market Analysis",
    description:
      "A mobile application for analyzing stock market trends and providing investment insights and also predicting stock prices using AI and machine learning algorithms. Built with Flutter for cross-platform development and integrated with OpenAI API for natural language processing.",
    tags: ["Flutter", "Dart" , "OpenAI API" , "Machine Learning" , "Python server"],
    link: "https://www.linkedin.com/posts/sagar-mewada987_artificialintelligence-flutter-python-ugcPost-7467411991263907840-y2Pg/?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEZtuFIBvYduCgX4bfPTQf7Mmn15stRtZNI&utm_campaign=copy_link",
  },
  {
    title: "Zero Trust Authentication System",
    description:
      "Zero-Trust Authentication is an advanced API project that applies behavioral biometrics and a dynamic risk engine to deliver continuous, context-aware authentication. By analyzing keystroke and mouse movement patterns, monitoring user sessions, and leveraging modular Python services, this platform enforces strong security and adaptive access control for enterprise applications.",
    tags: ["Python", "Flask", "Security", "Behavioral Biometrics", "Dynamic Risk Engine"],
    link: "https://github.com/sagar9876-bit/Zero-Trust-Authentication-",
  },
];

const EDUCATION = [
  {
    year: "2022 — 2026",
    title: "B.Tech, Artificial Intelligence & Data Science (Computer Science)",
    place: "Mahakal Institute of Technology (affiliated by RGPV)",
    score: "8.40 CGPA",
    scoreLabel: "Current CGPA",
    description:
      "Coursework spanning machine learning, data structures, algorithms, and applied AI, alongside hands-on project work in full-stack development.",
    highlights: [
      "Core subjects: AI-ML, DSA, DBMS, Computer Networks and Cybersecurity",
      "Built multiple AI-integrated full-stack projects",
      "Active in coding practice and hackathons",
    ],
  },
  {
    year: "2021 — 2022",
    title: "Higher Secondary (PCM) -- 12th",
    place: "Karmdeep Public H. Sc. School, Dewas (MP Board)",
    score: "75%",
    scoreLabel: "Percentage",
    description:
      "Physics, Chemistry, and Mathematics — the foundation that led into engineering.",
    highlights: [
      "Strong foundation in core science subjects and mathematics",
      "Bord exams preparation and competitive exam readiness . MP Board Class 12th Exams",
    ],
  },
  {
    year: "2019 — 2020",
    title: "Secondary Education (All Subjects) -- 10th",
    place: "Karmdeep Public H. Sc. School, Dewas (MP Board)",
    score: "77%",
    scoreLabel: "Percentage",
    description:
      "Comprehensive education covering all subjects, preparing for higher secondary education.",
    highlights: [
      "Strong foundation in core subjects and mathematics",
      "Bord exams preparation and competitive exam readiness . MP Board Class 10th Exams",
    ],
  },
];
// ---------------------------------------------------------------------------

function useTypewriter(words, speed = 65, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

function Section({ id, className = "", children }) {
  return (
    <motion.section
      id={id}
      className={`px-6 md:px-12 lg:px-24 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </motion.section>
  );
}

// Works on hover (desktop) AND tap (mobile) — click toggles the tooltip
function SkillChip({ name, detail }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <motion.span
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.97 }}
        onHoverStart={() => setOpen(true)}
        onHoverEnd={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        className="inline-block text-sm px-3 py-1 rounded-full bg-[#E8EDFC] text-[#2451E0] font-medium cursor-pointer select-none"
      >
        {name}
      </motion.span>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 z-20 p-3 rounded-xl bg-[#14171A] text-white text-xs leading-relaxed shadow-lg"
          >
            {detail}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#14171A] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Works on hover (desktop) AND tap (mobile) — tapping the title toggles the card
function EducationCard({ entry, index, isLast }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="flex gap-5 relative"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-9 h-9 rounded-full bg-white border border-[#E4E7EB] flex items-center justify-center shrink-0"
        >
          <GraduationCap size={16} className="text-[#2451E0]" />
        </motion.div>
        {!isLast && <div className="w-px flex-1 bg-[#E4E7EB] mt-2" />}
      </div>

      <div className="pb-2 flex-1 relative">
        <p className="font-mono text-xs text-[#5B6472] mb-1">{entry.year}</p>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen((v) => !v)}
        >
          <h3 className="font-display font-semibold text-base">{entry.title}</h3>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#E8EDFC] text-[#2451E0]">
            tap for details
          </span>
        </div>
        <p className="text-sm text-[#5B6472]">{entry.place}</p>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.97 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 top-full mt-3 w-full max-w-sm z-30 p-5 rounded-2xl bg-white border border-[#E4E7EB] shadow-[0_12px_32px_-8px_rgba(20,23,26,0.18)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-[#2451E0]">
                  <Award size={18} />
                  <span className="font-mono text-xs uppercase tracking-widest">
                    {entry.scoreLabel}
                  </span>
                </div>
                <span className="font-display font-semibold text-lg text-[#14171A]">
                  {entry.score}
                </span>
              </div>

              <p className="text-sm text-[#5B6472] leading-relaxed mb-4">
                {entry.description}
              </p>

              <ul className="space-y-2">
                {entry.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2 text-sm text-[#14171A]">
                    <span className="text-[#2451E0] mt-1">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// Experience — interactive tabbed panel. Click a role to reveal its details.
function ExperienceSection() {
  const [active, setActive] = useState(0);
  const current = EXPERIENCE[active];

  return (
    <div className="grid md:grid-cols-[minmax(0,240px)_1fr] gap-6 md:gap-10">
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
        {EXPERIENCE.map((exp, i) => (
          <button
            key={exp.company}
            onClick={() => setActive(i)}
            className={`relative text-left px-4 py-3 rounded-xl whitespace-nowrap md:whitespace-normal shrink-0 transition-colors ${
              active === i
                ? "bg-[#14171A] text-white"
                : "bg-white text-[#5B6472] border border-[#E4E7EB] hover:border-[#2451E0]"
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="exp-active-pill"
                className="absolute inset-0 rounded-xl bg-[#14171A]"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-70 mb-0.5">
              {exp.duration}
            </p>
            <p className="font-display font-semibold text-sm">{exp.company}</p>
          </button>
        ))}
      </div>

      <div className="relative min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="p-6 md:p-8 rounded-2xl bg-white border border-[#E4E7EB]"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-full bg-[#E8EDFC] flex items-center justify-center shrink-0">
                <Briefcase size={16} className="text-[#2451E0]" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg leading-tight">
                  {current.role}
                </h3>
                <p className="text-sm text-[#5B6472]">{current.company}</p>
              </div>
            </div>

            <p className="text-sm text-[#5B6472] leading-relaxed mt-4 mb-4">
              {current.summary}
            </p>

            <ul className="space-y-2 mb-5">
              {current.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                  className="flex gap-2 text-sm text-[#14171A]"
                >
                  <span className="text-[#2451E0] mt-1">•</span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {current.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded bg-[#F6F7F9] text-[#5B6472]"
                >
                  {t}
                </span>
              ))}
            </div>

            {current.certificate && (
              <motion.a
                href={current.certificate}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full bg-[#E8EDFC] text-[#2451E0] text-sm font-medium hover:bg-[#dbe3fb] transition-colors"
              >
                <FileCheck size={16} /> View Certificate
              </motion.a>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function useTerminalTyper(lines, speed = 16, lineDelay = 260) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    const currentLine = lines[lineIdx];
    if (charIdx < currentLine.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      }, lineDelay);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx, lines, speed, lineDelay]);

  const displayed = lines.map((line, i) => {
    if (i < lineIdx) return line;
    if (i === lineIdx) return line.slice(0, charIdx);
    return "";
  });

  return { displayed, done: lineIdx >= lines.length };
}

function TerminalContactModal({ profile, onClose }) {
  const [copied, setCopied] = useState(false);

  const lines = useState(() => [
    "$ contact --sagar",
    "> resolving contact channels...",
    `> email    : ${profile.email}`,
    `> github    : ${profile.github.replace("https://", "")}`,
    `> linkedin  : ${profile.linkedin.replace("https://www.", "").replace("https://", "")}`,
    "> connection established. say hello 👋",
  ])[0];

  const { displayed, done } = useTerminalTyper(lines);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl border border-[#2a2f36]"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1c1f24]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-mono text-xs text-[#8b949e]">sagar@portfolio: ~/contact</span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="ml-auto text-[#8b949e] hover:text-white transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        <div className="bg-[#0d1117] px-5 py-5 font-mono text-[13px] leading-relaxed min-h-[220px]">
          {displayed.map((line, i) => (
            <p
              key={i}
              className={line.startsWith("$") ? "text-[#58a6ff]" : "text-[#c9d1d9]"}
            >
              {line}
              {!done && i === displayed.findIndex((l, idx) => l.length < lines[idx].length) && (
                <span className="inline-block w-[7px] h-[14px] bg-[#c9d1d9] ml-0.5 align-middle animate-pulse" />
              )}
            </p>
          ))}

          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-wrap gap-2 mt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] text-xs hover:bg-[#30363d] transition-colors"
                >
                  <Mail size={13} /> {copied ? "Copied!" : "Copy email"}
                </motion.button>
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] text-xs hover:bg-[#30363d] transition-colors"
                >
                  <Github size={13} /> GitHub
                </motion.a>
                <motion.a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#21262d] text-[#c9d1d9] text-xs hover:bg-[#30363d] transition-colors"
                >
                  <Linkedin size={13} /> LinkedIn
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="font-mono text-xs tracking-widest uppercase text-[#2451E0] mb-3">
      {children}
    </p>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const typed = useTypewriter(PROFILE.roles);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className="min-h-screen bg-[#FBFBFA] text-[#14171A]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur border-b border-[#E4E7EB]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold text-lg tracking-tight">
            {PROFILE.name.split(" ")[0]}
            <span className="text-[#2451E0]">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#5B6472] hover:text-[#14171A] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm font-medium px-4 py-2 rounded-full bg-[#14171A] text-white hover:bg-[#2451E0] transition-colors"
            >
              Get in touch
            </button>
          </nav>

          <button
            className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2451E0] rounded"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-[#E4E7EB] bg-[#FBFBFA] px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#5B6472]"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                setContactOpen(true);
              }}
              className="text-sm font-medium text-left text-[#2451E0]"
            >
              Get in touch
            </button>
          </div>
        )}
      </header>

      <AnimatePresence>
        {contactOpen && (
          <TerminalContactModal profile={PROFILE} onClose={() => setContactOpen(false)} />
        )}
      </AnimatePresence>

      {/* Hero */}
      <Section id="top" className="pt-20 pb-24 md:pt-28 md:pb-32">
        <Eyebrow>Portfolio · {PROFILE.location}</Eyebrow>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl"
        >
          Hi, I'm {PROFILE.name}.
        </motion.h1>
        <p className="font-mono text-[#2451E0] text-lg md:text-xl mt-4 h-8">
          {typed}
          <span className="inline-block w-[2px] h-5 bg-[#2451E0] ml-1 align-middle animate-pulse" />
        </p>
        <p className="text-[#5B6472] text-base md:text-lg mt-5 max-w-xl leading-relaxed">
          {PROFILE.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-8">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2451E0] text-white text-sm font-medium hover:bg-[#1c3fb8] transition-colors"
          >
            View my work <ArrowUpRight size={16} />
          </motion.a>
          <motion.a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E4E7EB] text-sm font-medium hover:border-[#14171A] transition-colors"
          >
            <Github size={16} /> GitHub
          </motion.a>
          <motion.a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#E4E7EB] text-sm font-medium hover:border-[#14171A] transition-colors"
          >
            <Linkedin size={16} /> LinkedIn
          </motion.a>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="py-20 border-t border-[#E4E7EB]">
        <Eyebrow>About</Eyebrow>
        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-5">
          Still early, already building.
        </h2>
        <p className="text-[#5B6472] leading-relaxed max-w-2xl">
          I'm a student who learns best by shipping things — small tools, class
          projects, weekend experiments. This portfolio itself is one of them.
          I'm looking for opportunities where I can keep learning fast, work
          with people better than me, and turn that learning into things that
          actually get used. Replace this paragraph with your real story: what
          got you into tech, what you're curious about, what kind of role
          you're looking for.
        </p>
      </Section>

      {/* Skills */}
      <Section id="skills" className="py-20 border-t border-[#E4E7EB] bg-[#F6F7F9]">
        <Eyebrow>Skills</Eyebrow>
        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-2">
          What I work with
        </h2>
        <p className="text-xs text-[#5B6472] mb-8">Tap or hover a skill for details.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-[#5B6472] mb-3">
                {s.group}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <SkillChip key={item.name} name={item.name} detail={item.detail} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" className="py-20 border-t border-[#E4E7EB]">
        <Eyebrow>Experience</Eyebrow>
        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-8">
          What I've been doing
        </h2>
        <ExperienceSection />
      </Section>

      {/* Projects */}
      <Section id="projects" className="py-20 border-t border-[#E4E7EB] bg-[#F6F7F9]">
        <Eyebrow>Projects</Eyebrow>
        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-8">
          Things I've built
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              className="group block p-6 rounded-2xl border border-[#E4E7EB] bg-white active:border-[#2451E0] hover:border-[#2451E0] hover:shadow-[0_4px_20px_-4px_rgba(36,81,224,0.15)] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <Code2 className="text-[#2451E0]" size={20} />
                <ExternalLink
                  size={16}
                  className="text-[#5B6472] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-[#5B6472] leading-relaxed mb-4">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-1 rounded bg-[#F6F7F9] text-[#5B6472]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" className="py-20 border-t border-[#E4E7EB]">
        <Eyebrow>Education</Eyebrow>
        <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight mb-8">
          Where I've studied
        </h2>
        <div className="space-y-10">
          {EDUCATION.map((e, i) => (
            <EducationCard
              key={i}
              entry={e}
              index={i}
              isLast={i === EDUCATION.length - 1}
            />
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="py-24 border-t border-[#E4E7EB] bg-[#F6F7F9]">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight mb-4 max-w-lg">
          Let's talk about an opportunity.
        </h2>
        <p className="text-[#5B6472] mb-8 max-w-md">
          Open to internships, entry-level roles, and interesting projects.
          The fastest way to reach me is email.
        </p>
        <motion.a
          href={`mailto:${PROFILE.email}`}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14171A] text-white font-medium hover:bg-[#2451E0] transition-colors"
        >
          <Mail size={16} /> {PROFILE.email}
        </motion.a>
      </Section>

      <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-[#E4E7EB]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5B6472]">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React.</p>
          <div className="flex gap-4">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-[#14171A]">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#14171A]">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
