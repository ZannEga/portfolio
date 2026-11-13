import React, { useState, useEffect } from 'react';
import {
  Settings, Plus, Trash2, Edit3, ArrowUp, ArrowDown, ChevronsUp,
  Code2, Cpu, Sparkles, Wrench, FolderGit2, ExternalLink, Github, Linkedin,
  Mail, MapPin, Terminal, Download, Upload, CheckCircle2,
  AlertTriangle, X, Zap, Image as ImageIcon, Lock, Unlock, KeyRound,
  Eye, EyeOff, Dices, Pin, Award, ZoomIn, ZoomOut, Maximize2, Gift, Layers, RotateCcw, ArrowRight
} from 'lucide-react';

const INITIAL_DATA = {
  "profile": {
    "name": "FAUZAN EGA RASENDRIYA",
    "title": "TECH PRODUCT MANAGER & BACKEND ARCHITECT",
    "level": 21,
    "classType": "IS UNDERGRAD @ UNAIR",
    "bio": "Information Systems undergraduate at Universitas Airlangga passionate about bridging complex software engineering and strategic product management. Experienced in architecting scalable backend systems, leading cross-functional technical teams, and driving B2B partnership strategies.",
    "location": "Surabaya, East Java, ID",
    "status": "OPEN FOR QUESTS (PRODUCT / BACKEND / MOBILE / DATA)",
    "avatarUrl": "https://avatars.githubusercontent.com/u/100182102?v=4",
    "email": "fauzanegar@gmail.com",
    "github": "https://github.com/ZannEga",
    "linkedin": "https://linkedin.com/in/fauzanega",
    "cvLink": "#download-cv"
  },
  "theme": {
    "bgMain": "#FDFBF7",
    "primary": "#FFDE00",
    "secondary": "#FF5252",
    "accent": "#00E5FF",
    "cardBg": "#FFFFFF"
  },
  "projects": [
    {
      "id": "proj-tedx",
      "title": "TEDx UNAIR — WEB & REGISTRATION SYSTEM",
      "category": "BACKEND INFRASTRUCTURE & LEADERSHIP",
      "rank": "S-RANK",
      "year": "2026",
      "description": "Served as Co-Manager of Backend Development for a high-performance event platform and registration system engineered to handle massive traffic spikes. Led the backend infrastructure team and aligned technical execution with event stakeholders to achieve zero downtime during peak registration.",
      "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "Golang",
        "PHP",
        "Laravel",
        "MySQL",
        "REST API"
      ],
      "liveUrl": "https://github.com/ZannEga",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-medcampus",
      "title": "MEDCAMPUS — HEALTH CLINIC BOOKING",
      "category": "FULL-STACK WEB APPLICATION",
      "rank": "S-RANK",
      "year": "2026",
      "description": "Engineered a comprehensive clinic management platform supporting high-traffic patient registrations, real-time queue tracking, appointment scheduling, and digital medical records. Architected relational database schemas (CDM & PDM) using Laravel and MySQL integrated with a responsive Tailwind CSS interface.",
      "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "PHP",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "HTML5",
        "JavaScript"
      ],
      "liveUrl": "https://github.com/ZannEga",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-emosync",
      "title": "EMOSYNC — EMOTIONAL WELL-BEING APP",
      "category": "CROSS-PLATFORM MOBILE & PRODUCT",
      "rank": "S-RANK",
      "year": "2026",
      "description": "Spearheaded product ideation, end-to-end project management, and foundational database architecture for a cross-platform Flutter mobile application that empowers users to track daily mood check-ins and synchronize their emotional well-being.",
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "Flutter",
        "Dart",
        "MySQL",
        "Figma"
      ],
      "liveUrl": "https://github.com/ZannEga",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-isac",
      "title": "ISAC 2026 — B2B SPONSORSHIP & CRM",
      "category": "STRATEGIC PARTNERSHIP & FUNDRAISING",
      "rank": "A-RANK",
      "year": "2026",
      "description": "Directed end-to-end B2B corporate partnership and fundraising operations as Head of Partnership for the Information Systems Airlangga Competition (ISAC). Managed a 20+ corporate prospect pipeline using CRM analytics to secure vital event funding and maximize partner ROI.",
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "SQL",
        "Python",
        "CRM Analytics"
      ],
      "liveUrl": "https://linkedin.com/in/fauzanega",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-dakara",
      "title": "DAKARA HARAPAN WEBSITE",
      "category": "RESPONSIVE WEB PLATFORM",
      "rank": "A-RANK",
      "year": "2024",
      "description": "Developed a responsive, accessible web platform utilizing HTML5, CSS3, JavaScript, and PHP, translating UI/UX design concepts into intuitive, cross-device user experiences.",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "PHP",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap"
      ],
      "liveUrl": "https://github.com/ZannEga",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-sipeka",
      "title": "SIPEKA GUIDEBOOK & PLATFORM UX",
      "category": "TECHNICAL DOCUMENTATION & UX",
      "rank": "A-RANK",
      "year": "2024",
      "description": "Authored the comprehensive 'SIPeka Guidebook' during an internship at PT. Sentra Solusi Indonesia to streamline user onboarding and simplify complex technical workflows, while collaborating on platform UX refinements.",
      "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "Figma",
        "UML",
        "BPMN"
      ],
      "liveUrl": "https://linkedin.com/in/fauzanega",
      "repoUrl": "https://github.com/ZannEga"
    },
    {
      "id": "proj-neobrutal",
      "title": "NEOBRUTAL PIXEL RPG PORTFOLIO CMS",
      "category": "FULL-STACK WEB & LIVE CMS",
      "rank": "S-RANK",
      "year": "2026",
      "description": "Architected an interactive full-stack portfolio web application blending Neobrutalism and 8-Bit RPG aesthetics, featuring 3D TCG Booster Pack card flips, automated language usage analytics, and a Live Visual CMS powered by a Golang REST API.",
      "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      "techStack": [
        "React",
        "Golang",
        "JavaScript",
        "Tailwind CSS",
        "HTML5"
      ],
      "liveUrl": "https://github.com/ZannEga",
      "repoUrl": "https://github.com/ZannEga"
    }
  ],
  "codingLanguages": [
    {
      "id": "lang-1",
      "name": "PHP / Laravel",
      "level": 92,
      "badge": "BACKEND CORE",
      "color": "#FF2D20"
    },
    {
      "id": "lang-2",
      "name": "Golang (Go)",
      "level": 88,
      "badge": "API ENGINE",
      "color": "#00ADD8"
    },
    {
      "id": "lang-3",
      "name": "SQL / MySQL",
      "level": 95,
      "badge": "DATA ARCHITECT",
      "color": "#00758F"
    },
    {
      "id": "lang-4",
      "name": "Dart / Flutter",
      "level": 86,
      "badge": "MOBILE CRAFT",
      "color": "#02569B"
    },
    {
      "id": "lang-5",
      "name": "JavaScript / React",
      "level": 88,
      "badge": "FRONTEND RUNE",
      "color": "#F7DF1E"
    },
    {
      "id": "lang-6",
      "name": "HTML5 / CSS3 / Tailwind CSS / Bootstrap",
      "level": 95,
      "badge": "UI STYLING",
      "color": "#38B2AC"
    },
    {
      "id": "lang-7",
      "name": "Python / Flask",
      "level": 85,
      "badge": "DATA & ML",
      "color": "#3776AB"
    },
    {
      "id": "lang-8",
      "name": "Kotlin / Java",
      "level": 84,
      "badge": "CERTIFIED DEV",
      "color": "#7F52FF"
    }
  ],
  "hardSkills": [
    {
      "id": "hs-1",
      "name": "Backend Architecture & REST/GraphQL APIs",
      "category": "Software Engineering",
      "mastery": "MASTER"
    },
    {
      "id": "hs-2",
      "name": "Relational Database Design (CDM, PDM & MySQL)",
      "category": "Data Architecture",
      "mastery": "MASTER"
    },
    {
      "id": "hs-3",
      "name": "System Modeling (UML, BPMN & PlantUML)",
      "category": "System Architecture",
      "mastery": "MASTER"
    },
    {
      "id": "hs-4",
      "name": "Data Analysis, Visualization & Machine Learning",
      "category": "Data Science",
      "mastery": "ADVANCED"
    },
    {
      "id": "hs-5",
      "name": "Cross-Platform Mobile & Responsive Web Dev",
      "category": "Full-Stack Dev",
      "mastery": "ADVANCED"
    },
    {
      "id": "hs-6",
      "name": "Talent Analytics & Performance Evaluation",
      "category": "HR & People Analytics",
      "mastery": "MASTER"
    }
  ],
  "softSkills": [
    {
      "id": "ss-1",
      "name": "Tech Product & Project Management",
      "buff": "+40% Milestone Execution",
      "description": "Translating abstract business concepts into structured technical workflows and spearheading end-to-end product development lifecycles."
    },
    {
      "id": "ss-2",
      "name": "Cross-Functional Team Leadership",
      "buff": "+35% Party Synergy",
      "description": "Bridging communication between software engineers, UI/UX designers, and non-technical stakeholders under high-pressure deadlines."
    },
    {
      "id": "ss-3",
      "name": "B2B Negotiation & Sponsorship Acquisition",
      "buff": "+30% Funding ROI",
      "description": "Managing conversion-driven corporate partnership pipelines and structuring mutually beneficial sponsorship proposals."
    },
    {
      "id": "ss-4",
      "name": "Critical Thinking & Conflict Resolution",
      "buff": "-25% Crisis Cooldown",
      "description": "Applying analytical problem-solving to operational bottlenecks while mediating team dynamics to sustain a high-performing culture."
    }
  ],
  "softwareCapabilities": [
    {
      "id": "sw-1",
      "name": "Laravel",
      "role": "Backend Framework",
      "rarity": "LEGENDARY",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
    },
    {
      "id": "sw-2",
      "name": "Flutter",
      "role": "Mobile SDK",
      "rarity": "LEGENDARY",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    },
    {
      "id": "sw-3",
      "name": "MySQL",
      "role": "Relational DB",
      "rarity": "LEGENDARY",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
      "id": "sw-4",
      "name": "Figma",
      "role": "UI/UX Prototyping",
      "rarity": "LEGENDARY",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    {
      "id": "sw-5",
      "name": "Golang",
      "role": "Microservice Engine",
      "rarity": "EPIC",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
    },
    {
      "id": "sw-6",
      "name": "Git & GitHub",
      "role": "25+ Repos (Pull Shark)",
      "rarity": "LEGENDARY",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
    },
    {
      "id": "sw-7",
      "name": "Adobe Photoshop & AI",
      "role": "Visual Design",
      "rarity": "EPIC",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
    },
    {
      "id": "sw-8",
      "name": "Adobe Premiere Pro",
      "role": "Video Production",
      "rarity": "EPIC",
      "logoUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg"
    }
  ],
  "certifications": [
    {
      "id": "cert-1",
      "title": "JUNIOR WEB PROGRAMMER COMPETENCY",
      "issuer": "BNSP — LSP Universitas Airlangga",
      "year": "2026",
      "credentialId": "BNSP-JWP-2026",
      "credentialUrl": "https://linkedin.com/in/fauzanega",
      "description": "National professional competency certification validating full-stack web programming, structured coding standards, and database integration.",
      "image": "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85"
    },
    {
      "id": "cert-2",
      "title": "GENERATIVE AI & PROMPT ENGINEERING",
      "issuer": "Hacktiv8 Indonesia",
      "year": "2025",
      "credentialId": "H8-GENAI-2025",
      "credentialUrl": "https://linkedin.com/in/fauzanega",
      "description": "Intensive training covering Large Language Models (LLMs), AI workflow integration, and modern generative AI application development.",
      "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=85"
    },
    {
      "id": "cert-3",
      "title": "CAPITAL MARKET SCHOOL (SPM BASIC)",
      "issuer": "Indonesia Stock Exchange (IDX)",
      "year": "2026",
      "credentialId": "IDX-SPM-2026",
      "credentialUrl": "https://linkedin.com/in/fauzanega",
      "description": "Foundational certification in capital market analysis, equity valuation, and financial investment instruments.",
      "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85"
    }
  ]
};

const STORAGE_KEY = 'neobrutal_pixel_portfolio_fauzan_v8_en';
const API_URL_KEY = 'neobrutal_golang_api_url';
const ADMIN_TOKEN_KEY = 'neobrutal_golang_admin_token';
const ADMIN_SESSION_KEY = 'neobrutal_admin_unlocked';
const STARTER_PACK_SESSION_KEY = 'neobrutal_starter_pack_seen_v1';

const getDefaultApiUrl = () => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) {
      return import.meta.env.VITE_API_URL;
    }
    if (
      typeof window !== 'undefined' &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1'
    ) {
      return '/api/portfolio';
    }
  } catch (e) {
    // ignore
  }
  return 'http://localhost:8080/api/portfolio';
};

// Automatically calculate how many projects use a given Coding Language
const getLanguageUsageInfo = (langName, projects) => {
  if (!langName || !Array.isArray(projects)) return { count: 0, matchedProjects: [] };
  const cleanLang = String(langName).toLowerCase().trim();

  const aliases = cleanLang
    .split(/[\/(),]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  const matchedProjects = [];

  projects.forEach((proj) => {
    const stack = Array.isArray(proj.techStack)
      ? proj.techStack
      : String(proj.techStack || '').split(',');

    const normalizedStack = stack
      .map((s) => String(s).toLowerCase().trim())
      .filter(Boolean);

    const isUsed = normalizedStack.some((tech) => {
      if (tech === cleanLang) return true;
      return aliases.some((alias) => {
        if (tech === alias) return true;
        if (alias.length >= 3 && (tech.startsWith(alias) || alias.startsWith(tech))) {
          return true;
        }
        return false;
      });
    });

    if (isUsed) {
      matchedProjects.push(proj.title);
    }
  });

  return {
    count: matchedProjects.length,
    matchedProjects
  };
};

export default function App() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.certifications) parsed.certifications = INITIAL_DATA.certifications;
        return parsed;
      }
      return INITIAL_DATA;
    } catch {
      return INITIAL_DATA;
    }
  });

  // Admin Gate State (Default: false -> Public Read-Only View)
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true';
    } catch {
      return false;
    }
  });
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [tokenInput, setTokenInput] = useState('');
  const [lvlClickCount, setLvlClickCount] = useState(0);

  // Pokemon Booster Pack / 3D Card Flip State
  const [boosterMode, setBoosterMode] = useState(true);
  const [unsealedCards, setUnsealedCards] = useState({});
  const [gachaHighlightId, setGachaHighlightId] = useState(null);

  // Certificate Detail Lightbox Modal State
  const [selectedCert, setSelectedCert] = useState(null);
  const [certZoom, setCertZoom] = useState(1);

  // First-Session Fullscreen TCG Booster Pack Cover State
  const [starterModalOpen, setStarterModalOpen] = useState(() => {
    try {
      return sessionStorage.getItem(STARTER_PACK_SESSION_KEY) !== 'true';
    } catch {
      return true;
    }
  });
  const [isUnsealingPack, setIsUnsealingPack] = useState(false);

  const handleCloseStarterModal = (scrollToId = null) => {
    if (isUnsealingPack) return;
    setIsUnsealingPack(true);
    try {
      sessionStorage.setItem(STARTER_PACK_SESSION_KEY, 'true');
    } catch {
      // ignore
    }
    setTimeout(() => {
      setStarterModalOpen(false);
      setIsUnsealingPack(false);
      if (scrollToId) {
        setTimeout(() => {
          const el = document.getElementById(scrollToId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 80);
      }
    }, 520);
  };

  const handleReopenStarterModal = () => {
    setIsUnsealingPack(false);
    setStarterModalOpen(true);
  };

  // Lock background page scroll while Fullscreen TCG Cover is active
  useEffect(() => {
    if (starterModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [starterModalOpen]);

  const [cmsOpen, setCmsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [apiUrl, setApiUrl] = useState(() => {
    const saved = localStorage.getItem(API_URL_KEY);
    if (
      typeof window !== 'undefined' &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== '127.0.0.1' &&
      saved &&
      saved.includes('localhost')
    ) {
      return getDefaultApiUrl();
    }
    return saved || getDefaultApiUrl();
  });
  const [adminToken, setAdminToken] = useState(() => localStorage.getItem(ADMIN_TOKEN_KEY) || 'rahasia-fauzan-99');
  const [syncStatus, setSyncStatus] = useState({ state: 'local', message: 'LOCAL STORAGE' });
  const [toast, setToast] = useState(null);
  const [jsonText, setJsonText] = useState('');

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  // Listen for URL parameter (?admin=true) or keyboard shortcut (Ctrl + Shift + A) or ESC for modals
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || params.get('cms') === 'true') {
      if (!isAdmin) {
        setLoginModalOpen(true);
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        handleCloseStarterModal();
      }
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        if (isAdmin) {
          setCmsOpen((prev) => !prev);
        } else {
          setLoginModalOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmin]);

  // Secret 5x click on LVL badge in top-left navbar to open Admin Gate
  const handleSecretLvlClick = () => {
    if (isAdmin) return;
    setLvlClickCount((prev) => {
      const next = prev + 1;
      if (next >= 5) {
        setLoginModalOpen(true);
        return 0;
      }
      return next;
    });
  };

  const handleAdminUnlock = async (e) => {
    e.preventDefault();
    const entered = tokenInput.trim();
    if (!entered) return;

    const verifyEndpoint = apiUrl.replace(/\/api\/portfolio\/?$/, '/api/verify');
    try {
      const res = await fetch(verifyEndpoint, {
        method: 'POST',
        headers: { 'X-Admin-Token': entered }
      });
      if (res.ok) {
        setAdminToken(entered);
        setIsAdmin(true);
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
        setLoginModalOpen(false);
        setTokenInput('');
        showToast('Admin Mode Unlocked! CMS & Quick Edit controls enabled.');
        return;
      } else if (res.status === 401) {
        showToast('Invalid Admin Token! Access denied by Server.', 'error');
        return;
      }
    } catch {
      if (entered === adminToken) {
        setIsAdmin(true);
        sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
        setLoginModalOpen(false);
        setTokenInput('');
        showToast('Local Admin Mode Unlocked!');
        return;
      } else {
        showToast('Invalid Admin Token!', 'error');
        return;
      }
    }
  };

  const handleLockAdmin = () => {
    setIsAdmin(false);
    setEditMode(false);
    setCmsOpen(false);
    sessionStorage.removeItem(ADMIN_SESSION_KEY);
    if (window.location.search.includes('admin=')) {
      window.history.replaceState({}, '', window.location.pathname);
    }
    showToast('Admin Mode locked. Switched to Visitor (Read-Only) view.');
  };

  // Toggle Pin/Unseal on a project card
  const toggleCardPin = (projId) => {
    setUnsealedCards((prev) => ({
      ...prev,
      [projId]: !prev[projId]
    }));
  };

  // Gacha / Unseal a random Booster Pack
  const handleRandomPackPull = () => {
    if (!data.projects.length) return;
    const randomProj = data.projects[Math.floor(Math.random() * data.projects.length)];
    setBoosterMode(true);
    setUnsealedCards((prev) => ({
      ...prev,
      [randomProj.id]: true
    }));
    setGachaHighlightId(randomProj.id);
    showToast(`✨ BOOSTER PULL! You unsealed [${randomProj.rank}] ${randomProj.title}!`);
    setTimeout(() => setGachaHighlightId(null), 3000);
  };

  const openCertDetail = (cert) => {
    setSelectedCert(cert);
    setCertZoom(1);
  };

  // Smart Email Compose Handler:
  // - On Mobile: opens native Mail / Gmail app via mailto:
  // - On Desktop: opens Gmail Web Compose in a new tab (since Windows/Chrome often ignores mailto: if no desktop mail app is set)
  const cleanEmailAddress = String(data.profile.email || '')
    .replace(/^mailto:/i, '')
    .trim();
  const emailSubject = `Portfolio Inquiry — ${data.profile.name || 'Fauzan Ega'}`;
  const mailtoHref = `mailto:${cleanEmailAddress}?subject=${encodeURIComponent(emailSubject)}`;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    cleanEmailAddress
  )}&su=${encodeURIComponent(emailSubject)}`;

  const handleEmailClick = (e) => {
    e.stopPropagation();
    if (!cleanEmailAddress) return;

    // Copy email to clipboard as a helpful backup
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(cleanEmailAddress).catch(() => {});
    }

    const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(
      navigator.userAgent || ''
    );

    if (isMobileDevice) {
      // Let native mobile mailto: open the phone's Gmail/Mail app
      window.location.href = mailtoHref;
    } else {
      // On desktop browsers where mailto: often does nothing, open Gmail Web Compose directly in a new tab
      e.preventDefault();
      window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
      showToast(`Opening email composer to ${cleanEmailAddress} (Address also copied!)`);
    }
  };

  // Auto-save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setJsonText(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('Failed saving to localStorage:', err);
    }
  }, [data]);

  useEffect(() => {
    localStorage.setItem(API_URL_KEY, apiUrl);
  }, [apiUrl]);

  useEffect(() => {
    localStorage.setItem(ADMIN_TOKEN_KEY, adminToken);
  }, [adminToken]);

  // Auto-fetch from server on initial load
  useEffect(() => {
    pullFromGolang(true);
  }, []);

  const pullFromGolang = async (silent = false) => {
    setSyncStatus({ state: 'syncing', message: 'FETCHING DATA...' });
    try {
      const separator = apiUrl.includes('?') ? '&' : '?';
      const res = await fetch(`${apiUrl}${separator}t=${Date.now()}`, {
        method: 'GET',
        cache: 'no-store'
      });
      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `HTTP ${res.status}`);
      }
      const remoteData = await res.json();
      if (remoteData && remoteData.profile) {
        if (!remoteData.certifications) remoteData.certifications = INITIAL_DATA.certifications;
        setData(remoteData);
        setSyncStatus({ state: 'synced', message: 'CLOUD SYNCED' });
        if (!silent) showToast('Successfully pulled latest portfolio data from Cloud!', 'success');
      }
    } catch (err) {
      setSyncStatus({ state: 'local', message: 'LOCAL MODE (OFFLINE)' });
      if (!silent) {
        showToast(`Failed to fetch from server: ${err.message}`, 'error');
      }
    }
  };

  const pushToGolang = async () => {
    setSyncStatus({ state: 'syncing', message: 'SAVING TO CLOUD...' });
    try {
      const res = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Admin-Token': adminToken
        },
        body: JSON.stringify(data, null, 2)
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(result.error || `HTTP ${res.status}`);
      }
      setSyncStatus({ state: 'synced', message: 'CLOUD SYNCED' });
      showToast('Success! Portfolio order & content saved permanently!', 'success');
    } catch (err) {
      setSyncStatus({ state: 'error', message: 'PUSH FAILED' });
      showToast(`Failed to PUSH: ${err.message}`, 'error');
    }
  };

  // State update helpers
  const updateProfile = (field, value) => {
    setData((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value }
    }));
  };

  const updateTheme = (field, value) => {
    setData((prev) => ({
      ...prev,
      theme: { ...prev.theme, [field]: value }
    }));
  };

  const addItem = (section, defaultItem) => {
    const newItem = { id: `${section}-${Date.now()}`, ...defaultItem };
    setData((prev) => ({
      ...prev,
      [section]: [...(prev[section] || []), newItem]
    }));
    showToast('New item added!');
  };

  const updateItem = (section, id, field, value) => {
    setData((prev) => ({
      ...prev,
      [section]: (prev[section] || []).map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  const deleteItem = (section, id) => {
    setData((prev) => ({
      ...prev,
      [section]: (prev[section] || []).filter((item) => item.id !== id)
    }));
    showToast('Item deleted!', 'info');
  };

  // Move item 1 step up/left (-1) or down/right (+1)
  const moveItem = (section, index, direction) => {
    setData((prev) => {
      const list = [...(prev[section] || [])];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= list.length) return prev;
      const [moved] = list.splice(index, 1);
      list.splice(targetIndex, 0, moved);
      return { ...prev, [section]: list };
    });
  };

  // Move item directly to a specific position index (e.g., move C to #1 in front of A)
  const moveItemToPosition = (section, fromIndex, toIndex) => {
    setData((prev) => {
      const list = [...(prev[section] || [])];
      if (
        fromIndex < 0 ||
        fromIndex >= list.length ||
        toIndex < 0 ||
        toIndex >= list.length ||
        fromIndex === toIndex
      ) {
        return prev;
      }
      const [moved] = list.splice(fromIndex, 1);
      list.splice(toIndex, 0, moved);
      return { ...prev, [section]: list };
    });
    showToast(`Moved item to position #${toIndex + 1}!`);
  };

  // Universal local image file uploader with automatic Canvas compression (keeps Cloud JSON fast & under Vercel 4.5MB limit)
  const handleFileUploadToDataUrl = (file, onSuccess, label = 'Image') => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      showToast('Maximum image size is 10 MB!', 'error');
      return;
    }

    // Keep SVG or tiny images (< 150 KB) as-is
    if (file.type === 'image/svg+xml' || file.size < 150 * 1024) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          onSuccess(String(e.target.result));
          showToast(`${label} uploaded successfully!`);
        }
      };
      reader.readAsDataURL(file);
      return;
    }

    // Compress larger PNG/JPG images via HTML5 Canvas so Gist & Vercel sync fast on mobile
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        const maxDim = label.toLowerCase().includes('certificate') ? 1400 : 900;
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
        onSuccess(compressedDataUrl);
        showToast(`${label} optimized & uploaded!`);
      };
      img.src = String(e.target?.result || '');
    };
    reader.readAsDataURL(file);
  };

  const resetToDefault = () => {
    if (window.confirm('Reset all portfolio content to default data?')) {
      setData(INITIAL_DATA);
      showToast('Portfolio data restored to factory defaults.');
    }
  };

  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed.profile || !parsed.projects) {
        throw new Error('Incomplete JSON structure');
      }
      setData(parsed);
      showToast('JSON imported successfully!');
    } catch (e) {
      showToast(`Invalid JSON format: ${e.message}`, 'error');
    }
  };

  // Reusable Sorting Toolbar Component (Move to #1/Top, Up, Down, or Jump to Position #X)
  const renderSortControls = (section, idx, total) => (
    <div className="flex items-center gap-1 flex-wrap">
      {/* Direct Position Selector Dropdown (#1, #2, #3...) */}
      <select
        value={idx}
        onChange={(e) => moveItemToPosition(section, idx, Number(e.target.value))}
        title="Jump directly to position"
        className="px-1.5 py-0.5 bg-[#FFDE00] border border-black font-mono-code text-[11px] font-extrabold cursor-pointer"
      >
        {Array.from({ length: total }).map((_, i) => (
          <option key={i} value={i}>
            #{i + 1}
          </option>
        ))}
      </select>

      {/* Move to #1 (Front / Top) Button */}
      <button
        type="button"
        disabled={idx === 0}
        onClick={() => moveItemToPosition(section, idx, 0)}
        title="Move to #1 (First Position)"
        className={`px-1.5 py-0.5 border border-black text-[10px] font-mono-code font-extrabold flex items-center gap-0.5 ${
          idx === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-[#00E5FF] text-black hover:bg-cyan-300 cursor-pointer'
        }`}
      >
        <ChevronsUp size={12} /> TOP
      </button>

      {/* Step Up / Previous */}
      <button
        type="button"
        disabled={idx === 0}
        onClick={() => moveItem(section, idx, -1)}
        title="Move Up / Earlier"
        className={`px-1.5 py-0.5 border border-black text-xs font-bold ${
          idx === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white hover:bg-yellow-200 cursor-pointer'
        }`}
      >
        <ArrowUp size={12} />
      </button>

      {/* Step Down / Next */}
      <button
        type="button"
        disabled={idx === total - 1}
        onClick={() => moveItem(section, idx, 1)}
        title="Move Down / Later"
        className={`px-1.5 py-0.5 border border-black text-xs font-bold ${
          idx === total - 1
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-white hover:bg-yellow-200 cursor-pointer'
        }`}
      >
        <ArrowDown size={12} />
      </button>
    </div>
  );

  const certifications = data.certifications || [];

  return (
    <div
      style={{ backgroundColor: data.theme.bgMain }}
      className="min-h-screen text-black pb-24 relative transition-colors duration-200"
    >
      {/* Subtle Pixel Grid Overlay */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06] z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 border-4 border-black px-5 py-3 neo-shadow flex items-center gap-3 font-bold ${
            toast.type === 'error'
              ? 'bg-[#FF5252] text-white'
              : 'bg-[#FFDE00] text-black'
          }`}
        >
          {toast.type === 'error' ? <AlertTriangle size={20} /> : <CheckCircle2 size={20} />}
          <span>{toast.msg}</span>
        </div>
      )}

      {/* =====================================================================
          FIRST-VISIT FULLSCREEN TCG BOOSTER PACK COVER (EXACT 100dvh VIEWPORT FIT)
         ===================================================================== */}
      {starterModalOpen && (
        <div className="fixed inset-0 z-50 w-screen h-dvh max-h-dvh overflow-hidden flex flex-col justify-between holo-foil-bg select-none">
          {/* TOP FOIL CRIMP & INTERACTIVE TEAR STRIP (Rips off when unwrapping) */}
          <div className={`w-full shrink-0 z-20 ${isUnsealingPack ? 'animate-rip-top' : ''}`}>
            {/* Metallic Foil Crimp Seal */}
            <div className="h-3.5 sm:h-5 w-full booster-crimp border-b-3 border-black" />

            {/* Clickable Booster Pack Tear Strip Header */}
            <div
              onClick={() => handleCloseStarterModal()}
              title="Click to Tear & Unwrap Portfolio"
              className="bg-black text-white border-b-4 border-dashed border-[#FFDE00] px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2 cursor-pointer group hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="px-2 py-0.5 bg-[#FFDE00] text-black font-pixel text-[8px] sm:text-[9px] shrink-0">
                  1ST EDITION // BOOSTER PACK
                </span>
                <span className="truncate font-mono-code text-[11px] sm:text-xs text-[#00E5FF] font-extrabold group-hover:underline">
                   CLICK HERE TO TEAR SEAL & UNWRAP FULL PORTFOLIO
                </span>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCloseStarterModal();
                }}
                className="px-2.5 sm:px-3.5 py-1 bg-[#FF5252] text-white border-2 border-white font-pixel text-[8px] sm:text-[9px] group-hover:bg-[#00E5FF] group-hover:text-black transition-colors cursor-pointer shrink-0"
              >
                SKIP / NEXT ➔
              </button>
            </div>
          </div>

          {/* CENTER PACK BODY (Strictly fitted to viewport height so no page scrolling is needed) */}
          <div
            className={`relative flex-1 min-h-0 flex items-center justify-center px-3 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 z-10 overflow-hidden ${
              isUnsealingPack ? 'animate-unseal-body' : ''
            }`}
          >
            {/* Subtle Holographic Glare Overlay */}
            <div className="absolute inset-0 holo-glare opacity-45" />

            {/* Inner Booster Pack Frame — Auto-scales to fit viewport height */}
            <div className="relative z-10 w-full max-w-5xl max-h-full bg-[#FDFBF7] border-4 border-black neo-shadow-lg p-3 sm:p-5 md:p-6 flex flex-col justify-between gap-2.5 sm:gap-3.5 overflow-y-auto md:overflow-hidden">
              {/* 1. Compact Pack Series Metadata Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-3 border-black pb-2 shrink-0">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="px-2.5 py-0.5 bg-black text-[#FFDE00] font-pixel text-[9px] sm:text-[10px]">
                    STARTER PACK #001
                  </span>
                  <span className="px-2.5 py-0.5 bg-[#00E5FF] text-black border-2 border-black font-mono-code text-[11px] font-extrabold">
                    {data.profile.classType}
                  </span>
                  <span className="hidden md:inline-block px-2.5 py-0.5 bg-yellow-200 text-black border-2 border-black font-mono-code text-[11px] font-extrabold">
                     {data.profile.status}
                  </span>
                </div>

                <span className="px-2.5 py-0.5 bg-[#FF5252] text-white border-2 border-black font-pixel text-[9px] sm:text-[10px] neo-shadow-sm">
                  LVL.{data.profile.level} • S-RANK
                </span>
              </div>

              {/* 2. Character Summary Section (Avatar + Name + Title + Bio + Socials) */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 bg-white border-3 border-black p-3 sm:p-4 neo-shadow-sm shrink-0">
                {/* Foil Avatar Frame */}
                <div className="relative shrink-0 group">
                  <div
                    style={{ backgroundColor: data.theme.primary }}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 border-3 border-black neo-shadow-sm overflow-hidden flex items-center justify-center rotate-1 group-hover:rotate-0 transition-transform"
                  >
                    <img
                      src={data.profile.avatarUrl}
                      alt={data.profile.name}
                      className="w-full h-full object-cover pixelated"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-black text-[#FFDE00] border-2 border-white px-1.5 py-0.5 font-pixel text-[8px] animate-float-pixel">
                    ★ FOIL HERO
                  </div>
                </div>

                {/* Profile Info & Social Links */}
                <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="text-[10px] font-mono-code font-extrabold uppercase tracking-wider text-gray-500">
                      PLAYER CHARACTER SUMMARY //
                    </span>
                  </div>

                  <h1 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none truncate">
                    {data.profile.name}
                  </h1>

                  <div className="font-pixel text-[9px] sm:text-[10px] bg-[#FFDE00] inline-block px-2.5 py-1 border-2 border-black">
                    {data.profile.title}
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-gray-800 leading-snug line-clamp-2 md:line-clamp-3">
                    {data.profile.bio}
                  </p>

                  {/* Location & Social Buttons */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 pt-0.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 border-2 border-black bg-gray-100 font-mono-code text-[11px] font-bold">
                      <MapPin size={12} /> {data.profile.location}
                    </span>
                    <a
                      href={mailtoHref}
                      onClick={handleEmailClick}
                      title={`Send email to ${cleanEmailAddress}`}
                      className="neo-btn px-2.5 py-1 bg-white hover:bg-[#FFDE00] font-mono-code text-[11px] font-extrabold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Mail size={12} /> {cleanEmailAddress || 'EMAIL'}
                    </a>
                    <a
                      href={data.profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="neo-btn px-2.5 py-1 bg-black text-white font-mono-code text-[11px] font-extrabold inline-flex items-center gap-1"
                    >
                      <Github size={12} /> GITHUB
                    </a>
                    {data.profile.linkedin && (
                      <a
                        href={data.profile.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="neo-btn px-2.5 py-1 bg-[#0077B5] text-white font-mono-code text-[11px] font-extrabold inline-flex items-center gap-1"
                      >
                        <Linkedin size={12} /> LINKEDIN
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Portfolio Quick Recap (4 Interactive Cards) */}
              <div className="space-y-1.5 sm:space-y-2 shrink-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h2 className="font-pixel text-[10px] sm:text-xs uppercase flex items-center gap-1.5">
                    <Layers size={15} /> PACK CONTENTS // QUICK PORTFOLIO RECAP
                  </h2>
                  <span className="font-mono-code text-[11px] font-bold text-gray-600 hidden sm:inline">
                    Click any card to unwrap & jump directly to section
                  </span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => handleCloseStarterModal('quests')}
                    className="border-3 border-black bg-[#FFDE00] p-2.5 sm:p-3 text-left neo-item-pop cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <FolderGit2 size={18} />
                      <span className="font-pixel text-[8px] bg-black text-white px-1.5 py-0.5">
                        QUEST LOG
                      </span>
                    </div>
                    <div className="my-1">
                      <div className="text-2xl sm:text-3xl font-black leading-none">
                        {data.projects.length}
                      </div>
                      <div className="text-[11px] font-mono-code font-extrabold uppercase mt-0.5">
                        Featured Projects
                      </div>
                    </div>
                    <div className="text-[10px] font-mono-code font-bold text-black/80 truncate w-full border-t border-black/20 pt-1">
                      {data.projects.length > 0
                        ? data.projects.map((p) => (p.title || '').split('—')[0].trim()).filter(Boolean).join(', ')
                        : 'No projects yet'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCloseStarterModal('skills')}
                    className="border-3 border-black bg-[#00E5FF] p-2.5 sm:p-3 text-left neo-item-pop cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Code2 size={18} />
                      <span className="font-pixel text-[8px] bg-black text-white px-1.5 py-0.5">
                        TECH STACK
                      </span>
                    </div>
                    <div className="my-1">
                      <div className="text-2xl sm:text-3xl font-black leading-none">
                        {data.codingLanguages.length}
                      </div>
                      <div className="text-[11px] font-mono-code font-extrabold uppercase mt-0.5">
                        Coding Languages
                      </div>
                    </div>
                    <div className="text-[10px] font-mono-code font-bold text-black/80 truncate w-full border-t border-black/20 pt-1">
                      {data.codingLanguages.length > 0
                        ? data.codingLanguages.map((l) => (l.name || '').split('/')[0].trim()).filter(Boolean).join(', ')
                        : 'No languages yet'}
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCloseStarterModal('inventory')}
                    className="border-3 border-black bg-emerald-300 p-2.5 sm:p-3 text-left neo-item-pop cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Wrench size={18} />
                      <span className="font-pixel text-[8px] bg-black text-white px-1.5 py-0.5">
                        INVENTORY
                      </span>
                    </div>
                    <div className="my-1">
                      <div className="text-2xl sm:text-3xl font-black leading-none">
                        {data.hardSkills.length +
                          data.softSkills.length +
                          data.softwareCapabilities.length}
                      </div>
                      <div className="text-[11px] font-mono-code font-extrabold uppercase mt-0.5">
                        Skills & Software
                      </div>
                    </div>
                    <div className="text-[10px] font-mono-code font-bold text-black/80 truncate w-full border-t border-black/20 pt-1">
                      {data.hardSkills.length} Hard • {data.softSkills.length} Soft • {data.softwareCapabilities.length} Tools
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCloseStarterModal('certifications')}
                    className="border-3 border-black bg-[#FF5252] text-white p-2.5 sm:p-3 text-left neo-item-pop cursor-pointer flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between w-full">
                      <Award size={18} />
                      <span className="font-pixel text-[8px] bg-black text-[#FFDE00] px-1.5 py-0.5">
                        VERIFIED
                      </span>
                    </div>
                    <div className="my-1">
                      <div className="text-2xl sm:text-3xl font-black leading-none">
                        {certifications.length}
                      </div>
                      <div className="text-[11px] font-mono-code font-extrabold uppercase mt-0.5">
                        Certifications
                      </div>
                    </div>
                    <div className="text-[10px] font-mono-code font-bold text-white/90 truncate w-full border-t border-white/30 pt-1">
                      {certifications.length > 0
                        ? certifications.map((c) => (c.title || c.issuer || '').split('—')[0].trim()).filter(Boolean).join(', ')
                        : 'No certifications yet'}
                    </div>
                  </button>
                </div>
              </div>

              {/* 4. Prominent Unwrap / Next Action Callout Footer */}
              <div className="pt-2.5 border-t-3 border-black flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
                <div className="flex items-center gap-2 text-xs font-mono-code font-extrabold text-black bg-yellow-100 border-2 border-black px-3 py-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5252] animate-ping shrink-0" />
                  <span>SEALED STARTER PACK — UNWRAP OR CLICK NEXT TO OPEN FULL PORTFOLIO</span>
                </div>

                <button
                  type="button"
                  onClick={() => handleCloseStarterModal()}
                  style={{ backgroundColor: data.theme.primary }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFDE00] hover:bg-[#00E5FF] text-black border-3 border-black font-pixel text-[10px] sm:text-xs font-extrabold inline-flex items-center justify-center gap-2.5 cursor-pointer animate-unwrap-cta shrink-0"
                >
                  <Sparkles size={16} /> UNWRAP PACK // NEXT <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM FOIL CRIMP SEAL */}
          <div
            className={`h-3.5 sm:h-5 w-full booster-crimp border-t-3 border-black shrink-0 z-20 ${
              isUnsealingPack ? 'animate-unseal-body' : ''
            }`}
          />
        </div>
      )}

      {/* =====================================================================
          CERTIFICATE HIGH-RES DETAIL & ZOOM LIGHTBOX MODAL
         ===================================================================== */}
      {selectedCert && (
        <div
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[#FDFBF7] border-4 border-black neo-shadow-lg overflow-hidden my-auto"
          >
            {/* Modal Header */}
            <div
              style={{ backgroundColor: data.theme.primary }}
              className="p-4 border-b-4 border-black flex flex-wrap items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5">
                <Award size={22} />
                <div>
                  <h3 className="font-pixel text-xs md:text-sm uppercase">{selectedCert.title}</h3>
                  <p className="text-xs font-mono-code font-bold text-gray-800">
                    {selectedCert.issuer} • {selectedCert.year}
                  </p>
                </div>
              </div>

              {/* Zoom & Close Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setCertZoom((z) => Math.max(0.75, +(z - 0.25).toFixed(2)))}
                  title="Zoom Out"
                  className="neo-btn px-2.5 py-1 bg-white text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                >
                  <ZoomOut size={15} />
                </button>
                <span className="px-2.5 py-1 border-2 border-black bg-white font-mono-code text-xs font-extrabold">
                  {Math.round(certZoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setCertZoom((z) => Math.min(2.5, +(z + 0.25).toFixed(2)))}
                  title="Zoom In"
                  className="neo-btn px-2.5 py-1 bg-white text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                >
                  <ZoomIn size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setCertZoom(1)}
                  className="neo-btn px-2.5 py-1 bg-[#00E5FF] text-xs font-mono-code font-extrabold cursor-pointer"
                >
                  RESET
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="neo-btn px-2.5 py-1 bg-[#FF5252] text-white text-xs font-extrabold cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Interactive Zoomable Image Viewport */}
            <div className="bg-[#18181b] border-b-4 border-black p-4 md:p-6 max-h-[62vh] overflow-auto flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                style={{
                  transform: `scale(${certZoom})`,
                  transformOrigin: 'center center'
                }}
                className="max-w-full max-h-[54vh] object-contain border-4 border-white shadow-2xl transition-transform duration-150"
              />
            </div>

            {/* Certificate Metadata Footer */}
            <div className="p-5 bg-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-black text-[#FFDE00] font-pixel text-[10px]">
                    ISSUED {selectedCert.year}
                  </span>
                  {selectedCert.credentialId && (
                    <span className="px-2.5 py-0.5 border-2 border-black bg-gray-100 font-mono-code text-xs font-bold">
                      ID: {selectedCert.credentialId}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-800 leading-relaxed">{selectedCert.description}</p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ backgroundColor: data.theme.primary }}
                    className="neo-btn px-4 py-2 font-mono-code text-xs font-extrabold inline-flex items-center gap-1.5"
                  >
                    <ExternalLink size={14} /> VERIFY CREDENTIAL
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="neo-btn px-4 py-2 bg-gray-200 font-mono-code text-xs font-extrabold cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ADMIN GATE AUTH MODAL */}
      {loginModalOpen && !isAdmin && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <form
            onSubmit={handleAdminUnlock}
            className="w-full max-w-md bg-[#FDFBF7] border-4 border-black neo-shadow-lg p-6 space-y-4"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3">
              <div className="flex items-center gap-2">
                <KeyRound size={20} />
                <h3 className="font-pixel text-xs md:text-sm uppercase">ADMIN GATE // AUTH</h3>
              </div>
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="neo-btn px-2 py-1 bg-white text-xs font-bold cursor-pointer"
              >
                <X size={15} />
              </button>
            </div>

            <p className="text-xs font-mono-code text-gray-700 leading-relaxed">
              Enter your <strong>Admin Security Token</strong> to unlock{' '}
              <strong>CUSTOMIZE CMS</strong> and <strong>QUICK EDIT</strong> controls.
            </p>

            <div>
              <label className="text-xs font-bold block mb-1">Admin Security Token</label>
              <input
                type="password"
                autoFocus
                placeholder="Enter secret admin token..."
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                className="w-full border-3 border-black p-2.5 bg-white font-mono-code text-sm"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setLoginModalOpen(false)}
                className="neo-btn px-4 py-2 bg-gray-200 text-xs font-extrabold cursor-pointer"
              >
                CANCEL
              </button>
              <button
                type="submit"
                style={{ backgroundColor: data.theme.primary }}
                className="neo-btn px-5 py-2 text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                <Unlock size={15} /> UNLOCK CMS ACCESS
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TOP HUD NAVBAR */}
      <header className="sticky top-0 z-40 bg-white border-b-4 border-black px-4 md:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              onClick={handleSecretLvlClick}
              title="Character Level"
              style={{ backgroundColor: data.theme.primary }}
              className="px-3 py-1.5 border-3 border-black neo-shadow-sm font-pixel text-xs md:text-sm select-none cursor-default hover:scale-105 transition-transform"
            >
              LVL.{data.profile.level}
            </div>
            <span className="font-extrabold tracking-tight text-lg md:text-xl">
              {data.profile.name}
            </span>

            {isAdmin && (
              <span
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-mono-code font-bold px-2.5 py-1 border-2 border-black ${
                  syncStatus.state === 'synced'
                    ? 'bg-emerald-300'
                    : syncStatus.state === 'syncing'
                    ? 'bg-amber-300'
                    : 'bg-gray-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                {syncStatus.message}
              </span>
            )}
          </div>

          {isAdmin ? (
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <button
                type="button"
                onClick={handleReopenStarterModal}
                title="Preview First-Visit Starter Pack"
                className="neo-btn px-2.5 py-1.5 bg-white text-xs font-extrabold flex items-center gap-1 cursor-pointer"
              >
                <Gift size={14} /> PACK INTRO
              </button>
              <button
                onClick={() => setEditMode(!editMode)}
                className={`neo-btn px-3 py-1.5 text-xs md:text-sm font-bold flex items-center gap-1.5 cursor-pointer ${
                  editMode ? 'bg-[#00E5FF]' : 'bg-white'
                }`}
              >
                <Edit3 size={15} />
                {editMode ? 'QUICK EDIT: ON' : 'QUICK EDIT: OFF'}
              </button>

              <button
                onClick={() => setCmsOpen(true)}
                style={{ backgroundColor: data.theme.primary }}
                className="neo-btn px-3.5 py-1.5 text-xs md:text-sm font-extrabold flex items-center gap-2 cursor-pointer"
              >
                <Settings size={16} />
                CUSTOMIZE CMS
              </button>

              <button
                onClick={handleLockAdmin}
                title="Lock Admin Mode (Return to Read-Only)"
                className="neo-btn px-2.5 py-1.5 bg-[#FF5252] text-white text-xs font-extrabold flex items-center gap-1 cursor-pointer"
              >
                <Lock size={15} />
                <span className="hidden md:inline">LOCK</span>
              </button>
            </div>
          ) : (
            <nav className="flex flex-wrap items-center gap-2 md:gap-3 font-mono-code text-xs font-extrabold">
              <a href="#quests" className="neo-btn px-2.5 py-1 bg-[#FDFBF7] hover:bg-[#FFDE00]">
                QUEST PACKS
              </a>
              <a href="#skills" className="neo-btn px-2.5 py-1 bg-[#FDFBF7] hover:bg-[#00E5FF]">
                SKILLS
              </a>
              <a href="#inventory" className="neo-btn px-2.5 py-1 bg-[#FDFBF7] hover:bg-[#FF5252] hover:text-white">
                INVENTORY
              </a>
              <a href="#certifications" className="neo-btn px-2.5 py-1 bg-[#FDFBF7] hover:bg-emerald-300">
                CERTIFICATES
              </a>
              <button
                type="button"
                onClick={handleReopenStarterModal}
                title="Open TCG Starter Pack & Portfolio Recap"
                className="neo-btn px-2.5 py-1 bg-[#FFDE00] hover:bg-[#00E5FF] font-mono-code text-xs font-extrabold inline-flex items-center gap-1 cursor-pointer"
              >
                <Gift size={13} /> STARTER PACK
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 space-y-16">
        {/* HERO / RPG CHARACTER SHEET */}
        <section
          style={{ backgroundColor: data.theme.cardBg }}
          className="border-4 border-black neo-section-pop p-6 md:p-10 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Avatar Box */}
            <div className="relative shrink-0 group">
              <div
                style={{ backgroundColor: data.theme.primary }}
                className="w-44 h-44 md:w-52 md:h-52 border-4 border-black neo-shadow overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-2"
              >
                <img
                  src={data.profile.avatarUrl}
                  alt={data.profile.name}
                  className="w-full h-full object-cover pixelated"
                />
              </div>
              <div
                style={{ backgroundColor: data.theme.secondary }}
                className="absolute -bottom-3 -right-3 text-white border-3 border-black px-3 py-1 font-pixel text-[10px] neo-shadow-sm animate-float-pixel"
              >
                {data.profile.classType}
              </div>
            </div>

            {/* Bio & Stats */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black bg-[#00E5FF] font-mono-code text-xs font-extrabold">
                <Sparkles size={14} /> {data.profile.status}
              </div>

              <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase leading-none">
                {data.profile.name}
              </h1>

              <p className="font-pixel text-xs md:text-sm text-gray-800 bg-yellow-200 inline-block px-3 py-1.5 border-2 border-black">
                {data.profile.title}
              </p>

              <p className="text-base md:text-lg font-medium text-gray-800 max-w-3xl leading-relaxed">
                {data.profile.bio}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-black bg-gray-100 font-mono-code text-xs font-bold">
                  <MapPin size={14} /> {data.profile.location}
                </span>
                <a
                  href={mailtoHref}
                  onClick={handleEmailClick}
                  title={`Compose email to ${cleanEmailAddress}`}
                  className="neo-btn px-4 py-1.5 bg-white hover:bg-[#FFDE00] font-mono-code text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Mail size={14} /> {cleanEmailAddress}
                </a>
                <a
                  href={data.profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-btn px-4 py-1.5 bg-black text-white font-mono-code text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Github size={14} /> GITHUB
                </a>
                {data.profile.linkedin && (
                  <a
                    href={data.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn px-4 py-1.5 bg-[#0077B5] text-white font-mono-code text-xs font-bold inline-flex items-center gap-1.5"
                  >
                    <Linkedin size={14} /> LINKEDIN
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: QUEST LOG // POKEMON BOOSTER PACK CARDS */}
        <section id="quests" className="space-y-6 scroll-mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: data.theme.secondary }}
                className="p-2.5 border-3 border-black text-white neo-shadow-sm"
              >
                <FolderGit2 size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-pixel text-lg md:text-xl uppercase">QUEST BOOSTER PACKS</h2>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-pixel bg-black text-[#FFDE00] border border-black">
                    TCG FLIP EDITION
                  </span>
                </div>
                <p className="text-xs font-mono-code text-gray-700">
                  Hover to flip any Booster Pack in 3D, or click a card to pin it open!
                </p>
              </div>
            </div>

            {/* Booster Pack Interactive Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleRandomPackPull}
                className="neo-btn px-3.5 py-2 bg-[#00E5FF] font-mono-code text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                <Dices size={15} /> GACHA PULL PACK
              </button>

              <button
                onClick={() => {
                  if (boosterMode) {
                    setBoosterMode(false);
                    showToast('All Booster Packs unsealed!');
                  } else {
                    setBoosterMode(true);
                    setUnsealedCards({});
                    showToast('All Projects resealed into Booster Pack mode!');
                  }
                }}
                style={{ backgroundColor: boosterMode ? data.theme.primary : '#FFFFFF' }}
                className="neo-btn px-3.5 py-2 font-mono-code text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                {boosterMode ? <Eye size={15} /> : <EyeOff size={15} />}
                {boosterMode ? 'UNSEAL ALL PACKS' : 'SEAL ALL PACKS'}
              </button>

              {isAdmin && editMode && (
                <button
                  onClick={() =>
                    addItem('projects', {
                      title: 'NEW PROJECT QUEST',
                      category: 'WEB APPLICATION',
                      rank: 'S-RANK',
                      year: '2026',
                      description: 'Brief overview of the architecture, impact, and key deliverables of this project.',
                      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
                      techStack: ['React', 'Golang'],
                      liveUrl: 'https://github.com/ZannEga',
                      repoUrl: 'https://github.com/ZannEga'
                    })
                  }
                  className="neo-btn px-3.5 py-2 bg-emerald-300 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <Plus size={16} /> + ADD PROJECT
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((proj, idx) => {
              const isPinned = !!unsealedCards[proj.id];
              const isFlipped = !boosterMode || isPinned || (isAdmin && editMode);
              const isSrank = String(proj.rank).toUpperCase().includes('S');

              return (
                <div
                  key={proj.id}
                  className={`tcg-pack-perspective h-[480px] select-none ${
                    gachaHighlightId === proj.id ? 'ring-8 ring-[#00E5FF] animate-bounce' : ''
                  }`}
                >
                  <div className={`tcg-pack-inner ${isFlipped ? 'is-flipped' : ''}`}>
                    {/* FACE 1 (DEFAULT BACK): SEALED POKEMON TCG BOOSTER PACK */}
                    <div
                      onClick={() => toggleCardPin(proj.id)}
                      className="tcg-pack-face border-4 border-black neo-shadow flex flex-col justify-between overflow-hidden cursor-pointer holo-foil-bg"
                    >
                      <div className="h-5 w-full booster-crimp border-b-4 border-black" />
                      <div className="absolute inset-0 holo-glare opacity-50" />

                      <div className="relative z-10 flex-1 m-4 border-4 border-black bg-[#121212] text-white p-5 flex flex-col items-center justify-between text-center neo-shadow-sm">
                        <div className="w-full flex items-center justify-between border-b-2 border-dashed border-white/30 pb-2">
                          <span className="font-pixel text-[10px] text-[#FFDE00]">
                            PACK #{String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="font-mono-code text-xs font-extrabold px-2 py-0.5 bg-white text-black">
                            {proj.year} SERIES
                          </span>
                        </div>

                        <div className="my-auto space-y-3 py-2">
                          <div
                            className={`w-24 h-24 mx-auto border-4 border-black flex flex-col items-center justify-center rotate-3 transition-transform animate-float-pixel ${
                              isSrank ? 'bg-[#FFDE00] text-black' : 'bg-[#00E5FF] text-black'
                            }`}
                            style={{ boxShadow: '5px 5px 0px 0px #FF5252' }}
                          >
                            <Sparkles size={32} className="mb-1" />
                            <span className="font-pixel text-[10px] font-bold">{proj.rank}</span>
                          </div>

                          <div className="space-y-1">
                            <div className="text-[10px] font-pixel text-[#00E5FF] tracking-widest uppercase">
                              MYSTERY QUEST CARD
                            </div>
                            <h3 className="font-black text-xl uppercase tracking-tight text-white">
                              {proj.category}
                            </h3>
                          </div>

                          <div className="flex items-center justify-center gap-1 text-[#FFDE00] font-pixel text-xs">
                            {Array.from({ length: isSrank ? 5 : 4 }).map((_, sIdx) => (
                              <span key={sIdx}>★</span>
                            ))}
                          </div>
                        </div>

                        <div className="w-full pt-2 border-t-2 border-dashed border-white/30">
                          <div className="w-full py-2 px-3 bg-[#FFDE00] text-black border-2 border-black font-pixel text-[9px] uppercase tracking-wider">
                            ✨ HOVER / TAP TO OPEN PACK
                          </div>
                        </div>
                      </div>

                      <div className="h-5 w-full booster-crimp border-t-4 border-black" />
                    </div>

                    {/* FACE 2 (REVEALED FRONT): FULL PROJECT QUEST CARD */}
                    <article
                      style={{ backgroundColor: data.theme.cardBg }}
                      className="tcg-pack-face tcg-pack-front border-4 border-black neo-shadow-lg flex flex-col justify-between overflow-hidden"
                    >
                      <div>
                        <div className="relative h-44 border-b-4 border-black bg-gray-900 overflow-hidden">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-3 left-3 bg-black text-[#FFDE00] border-2 border-white px-2.5 py-1 font-pixel text-[10px] flex items-center gap-1">
                            <Sparkles size={11} /> {proj.rank}
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleCardPin(proj.id)}
                            title={isPinned ? 'Unpin card' : 'Pin card to stay open'}
                            className={`absolute top-3 right-3 border-2 border-black px-2 py-1 font-mono-code text-[11px] font-extrabold flex items-center gap-1 cursor-pointer ${
                              isPinned ? 'bg-[#00E5FF] text-black' : 'bg-white/90 text-black hover:bg-[#FFDE00]'
                            }`}
                          >
                            <Pin size={12} />
                            {isPinned ? 'PINNED' : proj.year}
                          </button>
                        </div>

                        <div className="p-4 space-y-2">
                          <div className="text-xs font-mono-code font-bold uppercase text-gray-500">
                            {proj.category}
                          </div>
                          <h3 className="text-lg font-black uppercase leading-snug line-clamp-1">
                            {proj.title}
                          </h3>
                          <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                            {proj.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {(Array.isArray(proj.techStack)
                              ? proj.techStack
                              : String(proj.techStack).split(',')
                            ).map((t, i) => (
                              <span
                                key={i}
                                className="px-2 py-0.5 text-[11px] font-mono-code font-bold border-2 border-black bg-[#00E5FF]/30"
                              >
                                {String(t).trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-4 pt-0 space-y-2">
                        <div className="flex items-center gap-2.5 pt-2.5 border-t-2 border-dashed border-black">
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            style={{ backgroundColor: data.theme.primary }}
                            className="neo-btn flex-1 py-2 text-center font-mono-code text-xs font-extrabold inline-flex items-center justify-center gap-1.5"
                          >
                            <ExternalLink size={14} /> LIVE DEMO
                          </a>
                          <a
                            href={proj.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="neo-btn px-3 py-2 bg-white font-mono-code text-xs font-extrabold inline-flex items-center justify-center gap-1"
                          >
                            <Github size={14} /> CODE
                          </a>
                        </div>

                        {isAdmin && editMode && (
                          <div className="flex items-center justify-between bg-gray-100 p-1.5 border-2 border-black gap-1">
                            {renderSortControls('projects', idx, data.projects.length)}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => {
                                  setActiveTab('projects');
                                  setCmsOpen(true);
                                }}
                                className="px-2 py-0.5 bg-amber-300 border border-black text-xs font-bold cursor-pointer"
                              >
                                EDIT
                              </button>
                              <button
                                onClick={() => deleteItem('projects', proj.id)}
                                className="px-2 py-0.5 bg-red-500 text-white border border-black text-xs font-bold cursor-pointer"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: CODING LANGUAGES & HARD SKILLS */}
        <div id="skills" className="grid grid-cols-1 lg:grid-cols-2 gap-10 scroll-mt-20">
          {/* Coding Languages */}
          <section
            style={{ backgroundColor: data.theme.cardBg }}
            className="border-4 border-black neo-section-pop p-6 space-y-5"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: data.theme.primary }}
                  className="p-2 border-3 border-black neo-shadow-sm"
                >
                  <Code2 size={22} />
                </div>
                <div>
                  <h2 className="font-pixel text-sm md:text-base uppercase">CODING LANGUAGES</h2>
                  <p className="text-[11px] font-mono-code text-gray-600">
                    EXP proficiency stats & automated usage frequency across Quest Projects
                  </p>
                </div>
              </div>
              {isAdmin && editMode && (
                <button
                  onClick={() =>
                    addItem('codingLanguages', {
                      name: 'New Language',
                      level: 80,
                      badge: 'SKILL RUNE',
                      color: '#FF5252'
                    })
                  }
                  className="neo-btn px-2.5 py-1 bg-[#00E5FF] text-xs font-extrabold cursor-pointer"
                >
                  + ADD
                </button>
              )}
            </div>

            <div className="space-y-4">
              {data.codingLanguages.map((lang, idx) => {
                const usage = getLanguageUsageInfo(lang.name, data.projects);
                return (
                  <div
                    key={lang.id}
                    className="space-y-2 border-3 border-black p-3.5 bg-[#FDFBF7] neo-item-pop"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-extrabold text-sm md:text-base">{lang.name}</span>
                        <span className="text-[10px] font-pixel px-2 py-0.5 bg-black text-white">
                          {lang.badge}
                        </span>
                        <span
                          title={
                            usage.matchedProjects.length > 0
                              ? `Used in: ${usage.matchedProjects.join(', ')}`
                              : 'Not yet listed in any project tech stack'
                          }
                          className={`text-[11px] font-mono-code font-extrabold px-2 py-0.5 border-2 border-black ${
                            usage.count > 0 ? 'bg-[#00E5FF] text-black' : 'bg-gray-200 text-gray-600'
                          }`}
                        >
                          USED IN {usage.count} {usage.count === 1 ? 'PROJECT' : 'PROJECTS'}
                        </span>
                      </div>
                      <span className="font-pixel text-xs">{lang.level} EXP</span>
                    </div>

                    <div className="w-full h-5 border-2 border-black bg-white p-0.5 flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const active = (i + 1) * 10 <= lang.level;
                        return (
                          <div
                            key={i}
                            style={{ backgroundColor: active ? lang.color || '#FFDE00' : 'transparent' }}
                            className="flex-1 h-full border border-black/20 transition-all"
                          />
                        );
                      })}
                    </div>

                    {usage.matchedProjects.length > 0 && (
                      <div className="text-[11px] font-mono-code text-gray-600">
                        Linked Quests:{' '}
                        <span className="font-bold text-black">{usage.matchedProjects.join(' • ')}</span>
                      </div>
                    )}

                    {isAdmin && editMode && (
                      <div className="flex items-center justify-between pt-2 border-t border-black/20">
                        {renderSortControls('codingLanguages', idx, data.codingLanguages.length)}
                        <button
                          onClick={() => deleteItem('codingLanguages', lang.id)}
                          className="text-xs text-red-600 font-bold underline cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Hard Skills */}
          <section
            style={{ backgroundColor: data.theme.cardBg }}
            className="border-4 border-black neo-section-pop p-6 space-y-5"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: data.theme.accent }}
                  className="p-2 border-3 border-black neo-shadow-sm"
                >
                  <Cpu size={22} />
                </div>
                <h2 className="font-pixel text-sm md:text-base uppercase">HARD SKILLS</h2>
              </div>
              {isAdmin && editMode && (
                <button
                  onClick={() =>
                    addItem('hardSkills', {
                      name: 'New Hard Skill',
                      category: 'Engineering',
                      mastery: 'ADVANCED'
                    })
                  }
                  className="neo-btn px-2.5 py-1 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                >
                  + ADD
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {data.hardSkills.map((skill, idx) => (
                <div
                  key={skill.id}
                  className="border-3 border-black p-3.5 bg-[#FDFBF7] neo-item-pop space-y-2"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-mono-code font-bold text-gray-500 uppercase">
                        {skill.category}
                      </div>
                      <div className="font-black text-base">{skill.name}</div>
                    </div>
                    <span
                      style={{ backgroundColor: data.theme.primary }}
                      className="px-2.5 py-1 border-2 border-black font-pixel text-[10px] shrink-0"
                    >
                      {skill.mastery}
                    </span>
                  </div>

                  {isAdmin && editMode && (
                    <div className="flex items-center justify-between pt-2 border-t border-black/20">
                      {renderSortControls('hardSkills', idx, data.hardSkills.length)}
                      <button
                        onClick={() => deleteItem('hardSkills', skill.id)}
                        className="p-1 bg-red-500 text-white border border-black cursor-pointer"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SECTION 3: SOFT SKILLS & SOFTWARE CAPABILITIES */}
        <div id="inventory" className="grid grid-cols-1 lg:grid-cols-2 gap-10 scroll-mt-20">
          {/* Soft Skills */}
          <section
            style={{ backgroundColor: data.theme.cardBg }}
            className="border-4 border-black neo-section-pop p-6 space-y-5"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: data.theme.secondary }}
                  className="p-2 border-3 border-black text-white neo-shadow-sm"
                >
                  <Zap size={22} />
                </div>
                <h2 className="font-pixel text-sm md:text-base uppercase">SOFT SKILLS // BUFFS</h2>
              </div>
              {isAdmin && editMode && (
                <button
                  onClick={() =>
                    addItem('softSkills', {
                      name: 'New Soft Skill',
                      buff: '+20% Team Synergy',
                      description: 'Brief explanation of how this soft skill elevates team performance.'
                    })
                  }
                  className="neo-btn px-2.5 py-1 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                >
                  + ADD
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4">
              {data.softSkills.map((ss, idx) => (
                <div
                  key={ss.id}
                  className="border-3 border-black p-4 bg-[#FDFBF7] neo-item-pop space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-black text-base uppercase">{ss.name}</h3>
                    <span className="px-2 py-0.5 bg-emerald-300 border-2 border-black font-mono-code text-xs font-extrabold">
                      {ss.buff}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{ss.description}</p>
                  {isAdmin && editMode && (
                    <div className="flex items-center justify-between pt-2 border-t border-black/20">
                      {renderSortControls('softSkills', idx, data.softSkills.length)}
                      <button
                        onClick={() => deleteItem('softSkills', ss.id)}
                        className="text-xs text-red-600 font-bold underline cursor-pointer"
                      >
                        Delete Buff
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Software Capabilities */}
          <section
            style={{ backgroundColor: data.theme.cardBg }}
            className="border-4 border-black neo-section-pop p-6 space-y-5"
          >
            <div className="flex items-center justify-between border-b-4 border-black pb-3">
              <div className="flex items-center gap-3">
                <div
                  style={{ backgroundColor: data.theme.primary }}
                  className="p-2 border-3 border-black neo-shadow-sm"
                >
                  <Wrench size={22} />
                </div>
                <h2 className="font-pixel text-sm md:text-base uppercase">SOFTWARE INVENTORY</h2>
              </div>
              {isAdmin && editMode && (
                <button
                  onClick={() =>
                    addItem('softwareCapabilities', {
                      name: 'New Software',
                      role: 'Dev Gear',
                      rarity: 'EPIC',
                      logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
                    })
                  }
                  className="neo-btn px-2.5 py-1 bg-[#00E5FF] text-xs font-extrabold cursor-pointer"
                >
                  + ADD
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {data.softwareCapabilities.map((sw, idx) => (
                <div
                  key={sw.id}
                  className="border-3 border-black p-3.5 bg-[#FDFBF7] neo-item-pop flex flex-col justify-between gap-2 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 border-3 border-black bg-white neo-shadow-sm p-2 flex items-center justify-center shrink-0 overflow-hidden transition-transform group-hover:rotate-6 group-hover:scale-110">
                      {sw.logoUrl ? (
                        <img
                          src={sw.logoUrl}
                          alt={sw.name}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <ImageIcon size={24} className="text-gray-400" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-pixel px-1.5 py-0.5 bg-black text-white inline-block">
                        {sw.rarity}
                      </span>
                      <h4 className="font-black text-base mt-1 truncate">{sw.name}</h4>
                      <p className="text-xs font-mono-code text-gray-600 truncate">{sw.role}</p>
                    </div>
                  </div>
                  {isAdmin && editMode && (
                    <div className="flex items-center justify-between pt-2 border-t border-black/20">
                      {renderSortControls('softwareCapabilities', idx, data.softwareCapabilities.length)}
                      <button
                        onClick={() => deleteItem('softwareCapabilities', sw.id)}
                        className="text-xs text-red-600 font-bold underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* =====================================================================
            SECTION 4: CERTIFICATIONS & LICENSES (WITH HIGH-RES DETAIL LIGHTBOX)
           ===================================================================== */}
        <section id="certifications" className="space-y-6 scroll-mt-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4">
            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: data.theme.primary }}
                className="p-2.5 border-3 border-black neo-shadow-sm"
              >
                <Award size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-pixel text-lg md:text-xl uppercase">
                    CERTIFICATIONS // LICENSES
                  </h2>
                  <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-pixel bg-black text-[#00E5FF] border border-black">
                    CLICK TO INSPECT & ZOOM
                  </span>
                </div>
                <p className="text-xs font-mono-code text-gray-700">
                  Click any certificate image or button below to inspect the full-resolution document in detail.
                </p>
              </div>
            </div>

            {isAdmin && editMode && (
              <button
                onClick={() =>
                  addItem('certifications', {
                    title: 'NEW CERTIFICATION',
                    issuer: 'Issuing Organization',
                    year: '2026',
                    credentialId: 'CERT-ID-2026',
                    credentialUrl: 'https://linkedin.com/in/fauzanega',
                    description: 'Brief summary of competencies validated by this certification.',
                    image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85'
                  })
                }
                className="neo-btn px-3.5 py-2 bg-emerald-300 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Plus size={16} /> + ADD CERTIFICATE
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, idx) => (
              <article
                key={cert.id}
                style={{ backgroundColor: data.theme.cardBg }}
                className="border-4 border-black neo-section-pop flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Certificate Image Preview (Click to Open Lightbox) */}
                  <div
                    onClick={() => openCertDetail(cert)}
                    className="relative h-52 border-b-4 border-black bg-gray-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity px-3 py-1.5 bg-[#FFDE00] text-black border-2 border-black font-pixel text-[10px] neo-shadow-sm flex items-center gap-1.5">
                        <Maximize2 size={13} /> INSPECT DETAIL
                      </span>
                    </div>

                    <div className="absolute top-3 left-3 bg-black text-white border-2 border-white px-2.5 py-1 font-pixel text-[10px]">
                      {cert.year}
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-5 space-y-2.5">
                    <div className="text-xs font-mono-code font-extrabold uppercase text-gray-600">
                      {cert.issuer}
                    </div>
                    <h3 className="text-lg font-black uppercase leading-snug">{cert.title}</h3>
                    {cert.credentialId && (
                      <div className="inline-block px-2 py-0.5 border-2 border-black bg-[#00E5FF]/30 font-mono-code text-[11px] font-bold">
                        ID: {cert.credentialId}
                      </div>
                    )}
                    <p className="text-xs text-gray-700 leading-relaxed">{cert.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 space-y-2.5">
                  <div className="flex items-center gap-2.5 pt-3 border-t-2 border-dashed border-black">
                    <button
                      type="button"
                      onClick={() => openCertDetail(cert)}
                      style={{ backgroundColor: data.theme.primary }}
                      className="neo-btn flex-1 py-2 text-center font-mono-code text-xs font-extrabold inline-flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <ZoomIn size={14} /> VIEW FULL DETAIL
                    </button>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        title="Verify Credential Link"
                        className="neo-btn px-3 py-2 bg-white font-mono-code text-xs font-extrabold inline-flex items-center justify-center gap-1"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  {isAdmin && editMode && (
                    <div className="flex items-center justify-between bg-gray-100 p-1.5 border-2 border-black gap-1">
                      {renderSortControls('certifications', idx, certifications.length)}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            setActiveTab('certifications');
                            setCmsOpen(true);
                          }}
                          className="px-2 py-0.5 bg-amber-300 border border-black text-xs font-bold cursor-pointer"
                        >
                          EDIT
                        </button>
                        <button
                          onClick={() => deleteItem('certifications', cert.id)}
                          className="px-2 py-0.5 bg-red-500 text-white border border-black text-xs font-bold cursor-pointer"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* LIVE VISUAL CMS DRAWER (Rendered only when isAdmin === true) */}
      {isAdmin && cmsOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end">
          <div className="w-full max-w-2xl bg-[#FDFBF7] border-l-4 border-black h-full flex flex-col overflow-hidden">
            {/* CMS Header */}
            <div
              style={{ backgroundColor: data.theme.primary }}
              className="p-4 border-b-4 border-black flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Settings size={20} />
                <h2 className="font-pixel text-xs md:text-sm">LIVE VISUAL CMS & CLOUD SYNC</h2>
              </div>
              <button
                onClick={() => setCmsOpen(false)}
                className="neo-btn px-2.5 py-1 bg-white font-bold text-xs cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* CMS Tabs */}
            <div className="flex flex-wrap gap-1.5 p-3 bg-white border-b-4 border-black">
              {[
                { id: 'profile', label: '1. PROFILE & THEME' },
                { id: 'projects', label: '2. PROJECTS' },
                { id: 'languages', label: '3. LANGUAGES' },
                { id: 'hardskills', label: '4. HARD SKILLS' },
                { id: 'softskills', label: '5. SOFT SKILLS' },
                { id: 'software', label: '6. SOFTWARE' },
                { id: 'certifications', label: '7. CERTIFICATIONS' },
                { id: 'golang', label: '8. CLOUD SYNC & JSON' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2.5 py-1.5 text-xs font-mono-code font-extrabold border-2 border-black cursor-pointer ${
                    activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-100 hover:bg-yellow-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CMS Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h3 className="font-black text-lg uppercase border-b-2 border-black pb-1">
                    Character Identity & Profile Avatar
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold block mb-1">Display Name</label>
                      <input
                        value={data.profile.name}
                        onChange={(e) => updateProfile('name', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">Title / Role</label>
                      <input
                        value={data.profile.title}
                        onChange={(e) => updateProfile('title', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">RPG Level</label>
                      <input
                        type="number"
                        value={data.profile.level}
                        onChange={(e) => updateProfile('level', Number(e.target.value))}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">Class Type</label>
                      <input
                        value={data.profile.classType}
                        onChange={(e) => updateProfile('classType', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-bold"
                      />
                    </div>
                  </div>

                  {/* Upload Profile Avatar from Device or URL */}
                  <div className="border-2 border-black p-3 bg-white space-y-2">
                    <label className="text-xs font-bold block">
                      Profile Avatar (Paste Image URL or Upload File from Device)
                    </label>
                    <div className="flex items-center gap-3">
                      <img
                        src={data.profile.avatarUrl}
                        alt="Avatar Preview"
                        className="w-14 h-14 border-2 border-black object-cover bg-yellow-200 shrink-0"
                      />
                      <div className="flex-1 space-y-2">
                        <input
                          placeholder="https://... or upload an image file below"
                          value={data.profile.avatarUrl}
                          onChange={(e) => updateProfile('avatarUrl', e.target.value)}
                          className="w-full border-2 border-black p-1.5 bg-gray-50 text-xs font-mono-code"
                        />
                        <label className="neo-btn px-3 py-1.5 bg-[#00E5FF] text-xs font-extrabold inline-flex items-center gap-1.5 cursor-pointer">
                          <Upload size={14} /> UPLOAD AVATAR FROM DEVICE
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileUploadToDataUrl(
                                e.target.files?.[0],
                                (dataUrl) => updateProfile('avatarUrl', dataUrl),
                                'Profile Avatar'
                              )
                            }
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold block mb-1">Bio Description</label>
                    <textarea
                      rows={3}
                      value={data.profile.bio}
                      onChange={(e) => updateProfile('bio', e.target.value)}
                      className="w-full border-2 border-black p-2 bg-white text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold block mb-1">Location</label>
                      <input
                        value={data.profile.location}
                        onChange={(e) => updateProfile('location', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">Email</label>
                      <input
                        value={data.profile.email}
                        onChange={(e) => updateProfile('email', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">GitHub URL</label>
                      <input
                        value={data.profile.github}
                        onChange={(e) => updateProfile('github', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-mono-code"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">LinkedIn URL</label>
                      <input
                        placeholder="https://linkedin.com/in/username"
                        value={data.profile.linkedin || ''}
                        onChange={(e) => updateProfile('linkedin', e.target.value)}
                        className="w-full border-2 border-black p-2 bg-white text-sm font-mono-code"
                      />
                    </div>
                  </div>

                  <h3 className="font-black text-lg uppercase border-b-2 border-black pb-1 pt-4">
                    Neobrutalism Theme Palette
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: 'bgMain', label: 'Background' },
                      { key: 'primary', label: 'Primary' },
                      { key: 'secondary', label: 'Secondary' },
                      { key: 'accent', label: 'Accent' }
                    ].map((c) => (
                      <div key={c.key} className="border-2 border-black p-2 bg-white">
                        <label className="text-xs font-bold block mb-1">{c.label}</label>
                        <input
                          type="color"
                          value={data.theme[c.key]}
                          onChange={(e) => updateTheme(c.key, e.target.value)}
                          className="w-full h-8 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-lg uppercase">Manage & Sort Projects ({data.projects.length})</h3>
                      <p className="text-xs font-mono-code text-gray-600">
                        Use #Position, TOP, or ▲/▼ to reorder projects (e.g., move Project C in front of A).
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addItem('projects', {
                          title: 'NEW PROJECT',
                          category: 'WEB DEVELOPMENT',
                          rank: 'S-RANK',
                          year: '2026',
                          description: 'Brief project description.',
                          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
                          techStack: ['React', 'Golang'],
                          liveUrl: 'https://github.com/ZannEga',
                          repoUrl: 'https://github.com/ZannEga'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD PROJECT
                    </button>
                  </div>

                  {data.projects.map((proj, idx) => (
                    <div key={proj.id} className="border-3 border-black p-4 bg-white space-y-3">
                      <div className="flex flex-wrap justify-between items-center gap-2 bg-gray-100 p-2 border-2 border-black">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-xs font-extrabold bg-black text-[#FFDE00] px-2 py-0.5">
                            POS #{idx + 1}
                          </span>
                          {renderSortControls('projects', idx, data.projects.length)}
                        </div>
                        <button
                          onClick={() => deleteItem('projects', proj.id)}
                          className="text-xs text-red-600 font-extrabold cursor-pointer"
                        >
                          DELETE PROJECT
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          placeholder="Project Title"
                          value={proj.title}
                          onChange={(e) => updateItem('projects', proj.id, 'title', e.target.value)}
                          className="border-2 border-black p-2 text-sm font-bold"
                        />
                        <input
                          placeholder="Category"
                          value={proj.category}
                          onChange={(e) => updateItem('projects', proj.id, 'category', e.target.value)}
                          className="border-2 border-black p-2 text-sm"
                        />
                        <input
                          placeholder="Rank (S-RANK / A-RANK)"
                          value={proj.rank}
                          onChange={(e) => updateItem('projects', proj.id, 'rank', e.target.value)}
                          className="border-2 border-black p-2 text-sm"
                        />
                        <input
                          placeholder="Year"
                          value={proj.year}
                          onChange={(e) => updateItem('projects', proj.id, 'year', e.target.value)}
                          className="border-2 border-black p-2 text-sm"
                        />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="Project Description"
                        value={proj.description}
                        onChange={(e) => updateItem('projects', proj.id, 'description', e.target.value)}
                        className="w-full border-2 border-black p-2 text-sm"
                      />

                      <div className="border-2 border-black p-2.5 bg-gray-50 space-y-2">
                        <label className="text-xs font-bold block">Project Cover Image</label>
                        <div className="flex items-center gap-3">
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-20 h-14 object-cover border-2 border-black bg-white shrink-0"
                          />
                          <div className="flex-1 space-y-1.5">
                            <input
                              placeholder="Cover Image URL (https://...)"
                              value={proj.image}
                              onChange={(e) => updateItem('projects', proj.id, 'image', e.target.value)}
                              className="w-full border-2 border-black p-1.5 text-xs font-mono-code bg-white"
                            />
                            <label className="neo-btn px-3 py-1 bg-[#00E5FF] text-xs font-extrabold inline-flex items-center gap-1.5 cursor-pointer">
                              <Upload size={13} /> UPLOAD COVER FROM DEVICE
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  handleFileUploadToDataUrl(
                                    e.target.files?.[0],
                                    (dataUrl) => updateItem('projects', proj.id, 'image', dataUrl),
                                    `Cover (${proj.title})`
                                  )
                                }
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold block mb-1">
                          Coding Languages & Tech Stack (comma-separated)
                        </label>
                        <input
                          placeholder="e.g., React, JavaScript, Golang, PostgreSQL"
                          value={Array.isArray(proj.techStack) ? proj.techStack.join(', ') : proj.techStack}
                          onChange={(e) =>
                            updateItem(
                              'projects',
                              proj.id,
                              'techStack',
                              e.target.value.split(',').map((s) => s.trim())
                            )
                          }
                          className="w-full border-2 border-black p-2 text-xs font-mono-code bg-yellow-50"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          placeholder="Live Demo URL"
                          value={proj.liveUrl}
                          onChange={(e) => updateItem('projects', proj.id, 'liveUrl', e.target.value)}
                          className="border-2 border-black p-2 text-xs font-mono-code"
                        />
                        <input
                          placeholder="GitHub Repo URL"
                          value={proj.repoUrl}
                          onChange={(e) => updateItem('projects', proj.id, 'repoUrl', e.target.value)}
                          className="border-2 border-black p-2 text-xs font-mono-code"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'languages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-lg uppercase">Manage & Sort Coding Languages</h3>
                      <p className="text-xs font-mono-code text-gray-600">
                        Reorder languages or adjust EXP proficiency levels.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addItem('codingLanguages', {
                          name: 'New Language',
                          level: 85,
                          badge: 'CORE RUNE',
                          color: '#00E5FF'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD LANGUAGE
                    </button>
                  </div>
                  {data.codingLanguages.map((lang, idx) => {
                    const usage = getLanguageUsageInfo(lang.name, data.projects);
                    return (
                      <div key={lang.id} className="border-2 border-black p-3 bg-white space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2 bg-gray-100 p-1.5 border border-black">
                          <div className="flex items-center gap-2">
                            {renderSortControls('codingLanguages', idx, data.codingLanguages.length)}
                            <span className="text-xs font-mono-code font-extrabold px-2 py-0.5 border border-black bg-[#00E5FF]">
                              Detected in {usage.count} {usage.count === 1 ? 'Project' : 'Projects'}
                            </span>
                          </div>
                          <button
                            onClick={() => deleteItem('codingLanguages', lang.id)}
                            className="text-xs text-red-600 font-extrabold cursor-pointer"
                          >
                            DELETE
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                          <input
                            placeholder="Language Name"
                            value={lang.name}
                            onChange={(e) => updateItem('codingLanguages', lang.id, 'name', e.target.value)}
                            className="border-2 border-black p-1.5 text-sm font-bold sm:col-span-2"
                          />
                          <input
                            type="number"
                            min="10"
                            max="100"
                            value={lang.level}
                            onChange={(e) =>
                              updateItem('codingLanguages', lang.id, 'level', Number(e.target.value))
                            }
                            className="border-2 border-black p-1.5 text-sm"
                          />
                          <input
                            placeholder="Badge"
                            value={lang.badge}
                            onChange={(e) => updateItem('codingLanguages', lang.id, 'badge', e.target.value)}
                            className="border-2 border-black p-1.5 text-xs font-mono-code"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeTab === 'hardskills' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-lg uppercase">Manage & Sort Hard Skills</h3>
                    <button
                      onClick={() =>
                        addItem('hardSkills', {
                          name: 'New Hard Skill',
                          category: 'Engineering',
                          mastery: 'MASTER'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD HARD SKILL
                    </button>
                  </div>
                  {data.hardSkills.map((hs, idx) => (
                    <div key={hs.id} className="border-2 border-black p-3 bg-white space-y-2">
                      <div className="flex items-center justify-between bg-gray-100 p-1.5 border border-black">
                        {renderSortControls('hardSkills', idx, data.hardSkills.length)}
                        <button
                          onClick={() => deleteItem('hardSkills', hs.id)}
                          className="bg-red-500 text-white px-2 py-0.5 border border-black text-xs font-bold cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 size={12} /> DELETE
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                        <input
                          value={hs.name}
                          onChange={(e) => updateItem('hardSkills', hs.id, 'name', e.target.value)}
                          className="border-2 border-black p-1.5 text-sm font-bold sm:col-span-2"
                        />
                        <input
                          value={hs.category}
                          onChange={(e) => updateItem('hardSkills', hs.id, 'category', e.target.value)}
                          className="border-2 border-black p-1.5 text-xs"
                        />
                        <input
                          value={hs.mastery}
                          onChange={(e) => updateItem('hardSkills', hs.id, 'mastery', e.target.value)}
                          className="border-2 border-black p-1.5 text-xs w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'softskills' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-black text-lg uppercase">Manage & Sort Soft Skills</h3>
                    <button
                      onClick={() =>
                        addItem('softSkills', {
                          name: 'New Soft Skill',
                          buff: '+30% Synergy',
                          description: 'Brief impact description.'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD SOFT SKILL
                    </button>
                  </div>
                  {data.softSkills.map((ss, idx) => (
                    <div key={ss.id} className="border-2 border-black p-3 bg-white space-y-2">
                      <div className="flex items-center justify-between bg-gray-100 p-1.5 border border-black">
                        {renderSortControls('softSkills', idx, data.softSkills.length)}
                        <button
                          onClick={() => deleteItem('softSkills', ss.id)}
                          className="text-xs text-red-600 font-extrabold cursor-pointer"
                        >
                          DELETE
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          value={ss.name}
                          onChange={(e) => updateItem('softSkills', ss.id, 'name', e.target.value)}
                          className="border-2 border-black p-1.5 text-sm font-bold"
                        />
                        <input
                          value={ss.buff}
                          onChange={(e) => updateItem('softSkills', ss.id, 'buff', e.target.value)}
                          className="border-2 border-black p-1.5 text-xs font-mono-code"
                        />
                      </div>
                      <textarea
                        rows={2}
                        value={ss.description}
                        onChange={(e) => updateItem('softSkills', ss.id, 'description', e.target.value)}
                        className="w-full border-2 border-black p-1.5 text-sm"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'software' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-lg uppercase">Manage & Sort Software Inventory</h3>
                      <p className="text-xs font-mono-code text-gray-600">
                        Reorder tools or upload software logo images from your device.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addItem('softwareCapabilities', {
                          name: 'New Software',
                          role: 'Dev Tool',
                          rarity: 'EPIC',
                          logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD SOFTWARE
                    </button>
                  </div>
                  {data.softwareCapabilities.map((sw, idx) => (
                    <div key={sw.id} className="border-2 border-black p-3 bg-white space-y-3">
                      <div className="flex items-center justify-between bg-gray-100 p-1.5 border border-black">
                        {renderSortControls('softwareCapabilities', idx, data.softwareCapabilities.length)}
                        <button
                          onClick={() => deleteItem('softwareCapabilities', sw.id)}
                          className="bg-red-500 text-white px-2 py-0.5 border border-black text-xs font-bold cursor-pointer flex items-center gap-1"
                        >
                          <Trash2 size={12} /> DELETE
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 border-2 border-black bg-gray-50 p-1.5 flex items-center justify-center shrink-0">
                          {sw.logoUrl ? (
                            <img src={sw.logoUrl} alt={sw.name} className="w-full h-full object-contain" />
                          ) : (
                            <ImageIcon size={20} className="text-gray-400" />
                          )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                          <input
                            placeholder="Software Name"
                            value={sw.name}
                            onChange={(e) => updateItem('softwareCapabilities', sw.id, 'name', e.target.value)}
                            className="border-2 border-black p-1.5 text-sm font-bold"
                          />
                          <input
                            placeholder="Role / Function"
                            value={sw.role}
                            onChange={(e) => updateItem('softwareCapabilities', sw.id, 'role', e.target.value)}
                            className="border-2 border-black p-1.5 text-xs"
                          />
                          <input
                            placeholder="Rarity (LEGENDARY/EPIC)"
                            value={sw.rarity}
                            onChange={(e) => updateItem('softwareCapabilities', sw.id, 'rarity', e.target.value)}
                            className="border-2 border-black p-1.5 text-xs font-mono-code w-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                        <input
                          placeholder="Software Logo Image URL (https://...)"
                          value={sw.logoUrl || ''}
                          onChange={(e) =>
                            updateItem('softwareCapabilities', sw.id, 'logoUrl', e.target.value)
                          }
                          className="border-2 border-black p-1.5 text-xs font-mono-code sm:col-span-2 bg-gray-50"
                        />
                        <label className="neo-btn px-3 py-1.5 bg-[#00E5FF] text-xs font-extrabold text-center cursor-pointer block">
                          UPLOAD LOGO
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                              handleFileUploadToDataUrl(
                                e.target.files?.[0],
                                (dataUrl) => updateItem('softwareCapabilities', sw.id, 'logoUrl', dataUrl),
                                `Logo (${sw.name})`
                              )
                            }
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'certifications' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-black text-lg uppercase">
                        Manage & Sort Certifications ({certifications.length})
                      </h3>
                      <p className="text-xs font-mono-code text-gray-600">
                        Reorder certificates or upload high-resolution certificate images.
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        addItem('certifications', {
                          title: 'NEW CERTIFICATION',
                          issuer: 'Issuing Organization',
                          year: '2026',
                          credentialId: 'CERT-ID-2026',
                          credentialUrl: 'https://linkedin.com/in/fauzanega',
                          description: 'Brief summary of competencies validated by this certification.',
                          image: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=1200&q=85'
                        })
                      }
                      className="neo-btn px-3 py-1.5 bg-[#FFDE00] text-xs font-extrabold cursor-pointer"
                    >
                      + ADD CERTIFICATE
                    </button>
                  </div>

                  {certifications.map((cert, idx) => (
                    <div key={cert.id} className="border-3 border-black p-4 bg-white space-y-3">
                      <div className="flex flex-wrap justify-between items-center gap-2 bg-gray-100 p-2 border-2 border-black">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-xs font-extrabold bg-black text-[#FFDE00] px-2 py-0.5">
                            POS #{idx + 1}
                          </span>
                          {renderSortControls('certifications', idx, certifications.length)}
                        </div>
                        <button
                          onClick={() => deleteItem('certifications', cert.id)}
                          className="text-xs text-red-600 font-extrabold cursor-pointer"
                        >
                          DELETE CERTIFICATE
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <input
                          placeholder="Certificate Title"
                          value={cert.title}
                          onChange={(e) => updateItem('certifications', cert.id, 'title', e.target.value)}
                          className="border-2 border-black p-2 text-sm font-bold"
                        />
                        <input
                          placeholder="Issuing Organization (e.g. BNSP / Hacktiv8)"
                          value={cert.issuer}
                          onChange={(e) => updateItem('certifications', cert.id, 'issuer', e.target.value)}
                          className="border-2 border-black p-2 text-sm"
                        />
                        <input
                          placeholder="Year (e.g. 2026)"
                          value={cert.year}
                          onChange={(e) => updateItem('certifications', cert.id, 'year', e.target.value)}
                          className="border-2 border-black p-2 text-sm"
                        />
                        <input
                          placeholder="Credential ID (optional)"
                          value={cert.credentialId || ''}
                          onChange={(e) =>
                            updateItem('certifications', cert.id, 'credentialId', e.target.value)
                          }
                          className="border-2 border-black p-2 text-xs font-mono-code"
                        />
                      </div>

                      <textarea
                        rows={2}
                        placeholder="Certificate Description"
                        value={cert.description}
                        onChange={(e) =>
                          updateItem('certifications', cert.id, 'description', e.target.value)
                        }
                        className="w-full border-2 border-black p-2 text-sm"
                      />

                      {/* Upload High-Res Certificate Image */}
                      <div className="border-2 border-black p-2.5 bg-gray-50 space-y-2">
                        <label className="text-xs font-bold block">
                          Certificate Image (High-Resolution for Detail Zoom Modal)
                        </label>
                        <div className="flex items-center gap-3">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-20 h-14 object-cover border-2 border-black bg-white shrink-0"
                          />
                          <div className="flex-1 space-y-1.5">
                            <input
                              placeholder="Certificate Image URL (https://...)"
                              value={cert.image}
                              onChange={(e) =>
                                updateItem('certifications', cert.id, 'image', e.target.value)
                              }
                              className="w-full border-2 border-black p-1.5 text-xs font-mono-code bg-white"
                            />
                            <label className="neo-btn px-3 py-1 bg-[#00E5FF] text-xs font-extrabold inline-flex items-center gap-1.5 cursor-pointer">
                              <Upload size={13} /> UPLOAD CERTIFICATE IMAGE
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) =>
                                  handleFileUploadToDataUrl(
                                    e.target.files?.[0],
                                    (dataUrl) =>
                                      updateItem('certifications', cert.id, 'image', dataUrl),
                                    `Certificate (${cert.title})`
                                  )
                                }
                                className="hidden"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <input
                        placeholder="Credential Verification URL (https://...)"
                        value={cert.credentialUrl || ''}
                        onChange={(e) =>
                          updateItem('certifications', cert.id, 'credentialUrl', e.target.value)
                        }
                        className="w-full border-2 border-black p-2 text-xs font-mono-code"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'golang' && (
                <div className="space-y-5">
                  <div className="border-3 border-black p-4 bg-white space-y-3">
                    <h3 className="font-black text-base uppercase flex items-center gap-2">
                      <Terminal size={18} /> Cloud API / Golang Backend Connection
                    </h3>
                    <div>
                      <label className="text-xs font-bold block mb-1">API Endpoint URL</label>
                      <input
                        value={apiUrl}
                        onChange={(e) => setApiUrl(e.target.value)}
                        className="w-full border-2 border-black p-2 text-xs font-mono-code bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold block mb-1">
                        Admin Security Token (X-Admin-Token Header)
                      </label>
                      <input
                        value={adminToken}
                        onChange={(e) => setAdminToken(e.target.value)}
                        className="w-full border-2 border-black p-2 text-xs font-mono-code bg-gray-50"
                      />
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => pullFromGolang(false)}
                        className="neo-btn px-4 py-2 bg-[#00E5FF] font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download size={15} /> PULL (GET LATEST DATA)
                      </button>
                      <button
                        onClick={pushToGolang}
                        style={{ backgroundColor: data.theme.primary }}
                        className="neo-btn px-4 py-2 font-extrabold text-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <Upload size={15} /> PUSH (SAVE TO CLOUD)
                      </button>
                    </div>
                  </div>

                  <div className="border-3 border-black p-4 bg-white space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black text-base uppercase">Raw JSON Data (Import / Export)</h3>
                      <button
                        onClick={resetToDefault}
                        className="text-xs text-red-600 font-bold underline cursor-pointer"
                      >
                        Reset to Default
                      </button>
                    </div>
                    <textarea
                      rows={8}
                      value={jsonText}
                      onChange={(e) => setJsonText(e.target.value)}
                      className="w-full border-2 border-black p-2 font-mono-code text-xs bg-gray-50"
                    />
                    <button
                      onClick={handleImportJson}
                      className="neo-btn px-4 py-2 bg-black text-white font-bold text-xs cursor-pointer"
                    >
                      APPLY JSON ABOVE
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
