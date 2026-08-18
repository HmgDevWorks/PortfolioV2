import { Technology } from "@/types";

export const technologies: Technology[] = [
  // IA — en CV: stack diario + producto
  { name: "Claude", category: "ai", level: "advanced", inCv: true },
  { name: "Cursor", category: "ai", level: "advanced", inCv: true },
  { name: "Gemini", category: "ai", level: "advanced", inCv: true },
  { name: "Langfuse", category: "ai", level: "intermediate", inCv: true },
  { name: "Ollama", category: "ai", level: "intermediate", inCv: true },
  { name: "Google Antigravity", category: "ai", level: "intermediate" },
  { name: "v0", category: "ai", level: "intermediate" },
  { name: "Google AI Studio", category: "ai", level: "intermediate" },
  { name: "GitHub Copilot", category: "ai", level: "intermediate" },
  { name: "Whisper", category: "ai", level: "intermediate" },
  { name: "Google Stitch", category: "ai", level: "intermediate" },
  { name: "Gemini Notebook", category: "ai", level: "intermediate" },

  // Frontend
  { name: "React", category: "frontend", level: "advanced", inCv: true },
  { name: "Next.js", category: "frontend", level: "advanced", inCv: true },
  { name: "TypeScript", category: "frontend", level: "advanced", inCv: true },
  { name: "Tailwind", category: "frontend", level: "advanced", inCv: true },
  { name: "JavaScript", category: "frontend", level: "advanced", inCv: true },
  { name: "HTML", category: "frontend", level: "expert" },
  { name: "CSS", category: "frontend", level: "advanced" },
  { name: "Vite", category: "frontend", level: "intermediate" },
  { name: "Konva", category: "frontend", level: "intermediate" },
  { name: "Bootstrap", category: "frontend", level: "intermediate" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced", inCv: true },
  { name: "NestJS", category: "backend", level: "intermediate", inCv: true },
  { name: "Prisma", category: "backend", level: "advanced", inCv: true },
  { name: "Laravel", category: "backend", level: "intermediate", inCv: true },
  { name: "Payload CMS", category: "backend", level: "intermediate", inCv: true },
  { name: "C#", category: "backend", level: "intermediate", inCv: true },
  { name: "PHP", category: "backend", level: "advanced" },
  { name: "RabbitMQ", category: "backend", level: "intermediate" },
  { name: "Laravel Reverb", category: "backend", level: "intermediate" },

  // Mobile & Games
  { name: "Unity", category: "mobile", level: "advanced", inCv: true },
  { name: "Expo", category: "mobile", level: "intermediate", inCv: true },
  { name: "React Native", category: "mobile", level: "intermediate", inCv: true },
  { name: "Android", category: "mobile", level: "intermediate", inCv: true },

  // Database
  { name: "PostgreSQL", category: "database", level: "advanced", inCv: true },
  { name: "Redis", category: "database", level: "intermediate", inCv: true },
  { name: "MySQL", category: "database", level: "intermediate" },
  { name: "SQLite", category: "database", level: "intermediate" },
  { name: "MariaDB", category: "database", level: "intermediate" },
  { name: "SQL", category: "database", level: "intermediate" },
  { name: "MongoDB", category: "database", level: "intermediate" },

  // Tools — no se listan en el CV; caben en +N de otros apartados o se asumen
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Playwright", category: "tools", level: "intermediate" },
  { name: "FFmpeg", category: "tools", level: "intermediate" },
  { name: "Tauri", category: "tools", level: "intermediate" },
  { name: "WordPress", category: "tools", level: "intermediate" },
  { name: "DomPDF", category: "tools", level: "intermediate" },

  // Cloud
  { name: "Google Cloud", category: "cloud", level: "intermediate", inCv: true },
  { name: "Docker", category: "cloud", level: "advanced", inCv: true },
  { name: "Stripe", category: "cloud", level: "intermediate", inCv: true },
  { name: "Vercel", category: "cloud", level: "intermediate", inCv: true },
  { name: "Entra ID", category: "cloud", level: "intermediate", inCv: true },
  { name: "Google OAuth", category: "cloud", level: "intermediate", inCv: true },
  { name: "Cloudflare", category: "cloud", level: "intermediate" },
  { name: "DigitalOcean", category: "cloud", level: "intermediate" },
  { name: "Resend", category: "cloud", level: "intermediate" },
  { name: "IronSource", category: "cloud", level: "intermediate" },
];
