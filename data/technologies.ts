import { Technology } from "@/types";

export const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "intermediate" },
  { name: "TypeScript", category: "frontend", level: "intermediate" },
  { name: "JavaScript", category: "frontend", level: "advanced" },
  { name: "HTML", category: "frontend", level: "expert" },
  { name: "CSS", category: "frontend", level: "advanced" },
  { name: "Tailwind", category: "frontend", level: "intermediate" },
  { name: "Bootstrap", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", level: "intermediate" },
  { name: "PHP", category: "backend", level: "advanced" },
  { name: "Laravel", category: "backend", level: "intermediate" },
  { name: "C#", category: "backend", level: "intermediate" },

  // Mobile & Games
  { name: "Unity", category: "mobile", level: "advanced" },
  { name: "Android", category: "mobile", level: "intermediate" },

  // Database
  { name: "MySQL", category: "database", level: "intermediate" },
  { name: "MongoDB", category: "database", level: "intermediate" },
  { name: "SQL", category: "database", level: "intermediate" },

  // Tools & Services
  { name: "IronSource", category: "cloud", level: "intermediate" },
  { name: "DomPDF", category: "tools", level: "intermediate" },
  { name: "WordPress", category: "tools", level: "intermediate" },
];
