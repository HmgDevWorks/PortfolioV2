import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "drink-party",
    title: "Drink Party",
    titleEn: "Drink Party",
    description:
      "E-commerce de bebidas alcohólicas con sistema de pedidos, carrito de compra y gestión de productos.",
    descriptionEn:
      "Alcoholic beverages e-commerce with order system, shopping cart and product management.",
    image: "/images/projects/drink-party.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: undefined,
    live: "https://drinkparty.games",
    year: "2024",
    category: "web",
    featured: true,
    tags: ["web", "ecommerce", "php"],
  },
  {
    id: "dxgt1",
    title: "DXGT1",
    titleEn: "DXGT1",
    description:
      "App móvil de F1 con datos de horarios, circuitos y standings. Desarrollada con Expo y backend en Node.js.",
    descriptionEn:
      "F1 mobile app with schedule data, circuits and standings. Developed with Expo and Node.js backend.",
    image: "/images/projects/dxgt1.jpg",
    technologies: ["React Native", "Expo", "Node.js", "JavaScript"],
    github: undefined,
    live: "https://dxgt1.vercel.app",
    year: "2024",
    category: "mobile",
    featured: true,
    tags: ["mobile", "fullstack", "expo", "react-native"],
  },
  {
    id: "bruma-kappa",
    title: "Bruma Kappa",
    titleEn: "Bruma Kappa",
    description:
      "Red social para eventos y fiestas con creación de eventos, ticketing y compartir testimonios.",
    descriptionEn:
      "Social network for events and parties with event creation, ticketing and sharing testimonials.",
    image: "/images/projects/bruma-kappa.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: undefined,
    live: "https://bruma-kappa.vercel.app",
    year: "2024",
    category: "fullstack",
    featured: true,
    tags: ["fullstack", "web", "nextjs", "social"],
  },
  {
    id: "day-party",
    title: "Day Party",
    titleEn: "Day Party",
    description:
      "Gestor de tareas personal desarrollado con un amigo. Aplicación funcional para organización personal.",
    descriptionEn:
      "Personal task manager developed with a friend. Functional application for personal organization.",
    image: "/images/projects/day-party.jpg",
    technologies: ["React", "JavaScript", "CSS"],
    github: undefined,
    live: "https://day-party.vercel.app",
    year: "2024",
    category: "web",
    featured: false,
    tags: ["web", "react", "personal"],
  },
  {
    id: "unity-game",
    title: "Juego Unity",
    titleEn: "Unity Game",
    description:
      "App de juegos para Android desarrollada en Unity con C#. Backend en PHP con monetización IronSource.",
    descriptionEn:
      "Android games app developed in Unity with C#. PHP backend with IronSource monetization.",
    image: "/images/projects/unity-game.jpg",
    technologies: ["Unity", "C#", "PHP", "MySQL", "Android"],
    github: undefined,
    live: "https://drinkparty.games/html/apps/taisai/appTaisai.html",
    year: "2022-2024",
    category: "game",
    featured: true,
    tags: ["game", "mobile", "unity", "csharp"],
  },
  {
    id: "colon-tasks",
    title: "Gestor Tareas Colon",
    titleEn: "Colon Task Manager",
    description:
      "Gestor de tareas empresarial desarrollado en la empresa Colon. React + Laravel con generación de PDFs.",
    descriptionEn:
      "Enterprise task manager developed at Colon company. React + Laravel with PDF generation.",
    image: "/images/projects/colon-tasks.jpg",
    technologies: ["React", "Laravel", "PHP", "DomPDF", "MySQL"],
    github: undefined,
    live: undefined,
    year: "2025",
    category: "fullstack",
    featured: true,
    tags: ["fullstack", "enterprise", "laravel", "react"],
  },
  {
    id: "portfolio",
    title: "Mi portfolio 😎",
    titleEn: "My portfolio 😎",
    description:
      "Mi portfolio personal desarrollado con Next.js y Tailwind CSS.",
    descriptionEn:
      "My personal portfolio developed with Next.js and Tailwind CSS.",
    image: "/images/projects/portfolio.jpg",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/HmgDevWorks/portfoliov2",
    live: "https://hmgdevworks.vercel.app",
    year: "2025",
    category: "web",
    featured: true,
    tags: ["frontend", "web", "nextjs", "tailwind"],
  },
];
