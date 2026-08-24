// src/data/projects.js

import sqlFoundationsImage from "../assets/projects/sql-foundations.png";
import satVocabularyImage from "../assets/projects/sat-vocabulary.png";
import customerServiceImage from "../assets/projects/customer-service.png";
import hospitalSafetyImage from "../assets/projects/hospital-safety.png";

export const projects = [
  {
    id: "sql-foundations",

    title: "SQL Foundations Lab",

    category: "Data-Informed Technical Learning",

    description:
      "A scaffolded SQL learning system that combines interactive practice, mastery tracking, learning analytics, and targeted recommendations to help beginners progress toward independent problem solving.",

    skills: [
      "React",
      "SQL",
      "Learning Analytics",
      "Instructional Design",
      "Gamification",
      "Adaptive Recommendation",
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
      "An AI-powered vocabulary learning system that turns learner mistakes into personalized contextual practice using performance data and Gemini-generated reading.",

    skills: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini AI",
      "Learning Design",
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
    id: "customer-service",

    title: "Customer Service Training Module",

    category: "Scenario-Based eLearning",

    description:
      "A scenario-based customer service training experience that uses realistic workplace situations, branching decisions, and targeted feedback to build practical service skills.",

    skills: [
      "Articulate Storyline",
      "Scenario-Based Learning",
      "Branching",
      "Instructional Design",
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

    category: "Compliance & Safety eLearning",

    description:
      "An interactive hospital safety training module designed to reinforce safe workplace practices through visual instruction, interactive activities, and knowledge checks.",

    skills: [
      "Adobe Captivate",
      "Safety Training",
      "Knowledge Checks",
      "Instructional Design",
      "eLearning Development",
    ],

    image: hospitalSafetyImage,

    liveUrl:
      "https://storage.googleapis.com/olgaorlovainstructionaldesign/Hospital%20Safety%20Training%20May.cpt/Hospital%20Safety%20Training%20May.cpt/index.html",

    demoUrl: "",

    caseStudyPath:
      "/projects/hospital-safety",
  },
];