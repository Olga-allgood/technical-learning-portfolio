// src/data/projects.js

import sqlFoundationsImage from "../assets/projects/sql-foundations.png";
import satVocabularyImage from "../assets/projects/sat-vocabulary.png";
import customerServiceImage from "../assets/projects/customer-service.png";
import hospitalSafetyImage from "../assets/projects/hospital-safety.png";
import apiFundamentalsImage from "../assets/api-fundamentals/weather-api-lab.png";

export const projects = [
  {
    id: "sql-foundations",

    title: "SQL Foundations Lab",

    category: "Data-Informed Technical Learning",

    description:
      "A scaffolded SQL learning system that combines interactive practice, mastery tracking, learning analytics, and adaptive recommendations to help beginners progress from syntax recognition to independent problem solving.",

    skills: [
      "React",
      "SQL",
      "Learning Analytics",
      "Adaptive Practice",
      "Gamification",
    ],

    image: sqlFoundationsImage,

    liveUrl:
      "https://sql-foundations-lab.vercel.app/",

    demoUrl: "",

    caseStudyPath:
      "/projects/sql-foundations",
  },

  {
    id: "sat-vocabulary",

    title: "SAT Vocabulary Builder",

    category: "AI-Powered Learning System",

    description:
      "A full-stack vocabulary learning application that uses learner performance data and Gemini AI to turn missed words into personalized contextual reading practice.",

    skills: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Personalized Learning",
    ],

    image: satVocabularyImage,

    liveUrl:
      "https://new-sat-builder-hw4o.vercel.app/",

    demoUrl: "",

    caseStudyPath:
      "/projects/sat-vocabulary",
  },

  {
    id: "api-fundamentals",

    title: "API Fundamentals",

    category: "Interactive Technical eLearning",

    description:
      "A Rise 360 technical learning experience that teaches API requests, HTTP methods, responses, and troubleshooting through progressive practice, interactive simulation, and scenario-based diagnosis.",

    skills: [
      "Rise 360",
      "JavaScript",
      "API Fundamentals",
      "Scenario-Based Learning",
      "Troubleshooting",
    ],

    image: apiFundamentalsImage,

    liveUrl:
      "/api-fundamentals/index.html",

    demoUrl: "",

    caseStudyPath:
      "/projects/api-fundamentals",
  },

  {
    id: "customer-service",

    title: "Customer Service Training",

    category: "Scenario-Based eLearning",

    description:
      "A scenario-based Storyline experience that translates workplace behaviors into branching decisions, realistic consequences, coaching feedback, and opportunities to retry.",

    skills: [
      "Articulate Storyline",
      "Action Mapping",
      "Branching",
      "Scenario Design",
      "Feedback Design",
    ],

    image: customerServiceImage,

    liveUrl:
      "https://storage.googleapis.com/olgaorlovainstructionaldesign/UPDATED%20Coffee%20shop%20-%20Storyline%20output/story.html",

    demoUrl: "",

    caseStudyPath:
      "/projects/customer-service",
  },

  {
    id: "hospital-safety",

    title: "Hospital Safety Training",

    category: "Procedural eLearning & Assessment",

    description:
      "An Adobe Captivate module that teaches PPE donning through structured instruction, visual sequencing, video demonstration, and summative assessment.",

    skills: [
      "Adobe Captivate",
      "Procedural Learning",
      "Multimedia Learning",
      "Assessment Design",
    ],

    image: hospitalSafetyImage,

    liveUrl:
      "https://storage.googleapis.com/olgaorlovainstructionaldesign/Hospital%20Safety%20Training%20May.cpt/Hospital%20Safety%20Training%20May.cpt/index.html",

    demoUrl: "",

    caseStudyPath:
      "/projects/hospital-safety",
  },
];