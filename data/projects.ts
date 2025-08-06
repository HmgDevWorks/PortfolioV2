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
    github: "https://github.com/hector-martin/drink-party",
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
      "Aplicación móvil de F1 con información de horarios, circuitos y standings. Desarrollada con Expo.",
    descriptionEn:
      "F1 mobile app with schedule information, circuits and standings. Developed with Expo.",
    image: "/images/projects/dxgt1.jpg",
    technologies: ["React Native", "Expo", "Node.js", "JavaScript"],
    github: "https://github.com/hector-martin/dxgt1",
    live: "https://dxgt1.vercel.app",
    year: "2024",
    category: "fullstack",
    featured: true,
    tags: ["mobile", "fullstack", "react-native", "expo"],
  },
  {
    id: "bruma-kappa",
    title: "Bruma Kappa",
    titleEn: "Bruma Kappa",
    description:
      "Red social para eventos y fiestas con funcionalidades de ticketing y compartir contenido multimedia.",
    descriptionEn:
      "Social network for events and parties with ticketing features and multimedia content sharing.",
    image: "/images/projects/bruma-kappa.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "https://github.com/hector-martin/bruma-kappa",
    live: "https://bruma-kappa.vercel.app",
    year: "2024",
    category: "fullstack",
    featured: true,
    tags: ["fullstack", "web", "social-media", "nextjs"],
  },
  {
    id: "day-party",
    title: "Day Party",
    titleEn: "Day Party",
    description:
      "Gestor de tareas personal con interfaz intuitiva y funcionalidades de organización.",
    descriptionEn:
      "Personal task manager with intuitive interface and organization features.",
    image: "/images/projects/day-party.jpg",
    technologies: ["React", "JavaScript", "CSS", "LocalStorage"],
    github: "https://github.com/hector-martin/day-party",
    live: "https://day-party.vercel.app",
    year: "2024",
    category: "web",
    featured: false,
    tags: ["web", "productivity", "react"],
  },
  {
    id: "taisai-game",
    title: "Taisai Game",
    titleEn: "Taisai Game",
    description:
      "Juego móvil desarrollado en Unity con C#. Backend en PHP y monetización con IronSource.",
    descriptionEn:
      "Mobile game developed in Unity with C#. PHP backend and IronSource monetization.",
    image: "/images/projects/taisai-game.jpg",
    technologies: ["Unity", "C#", "PHP", "MySQL", "IronSource"],
    github: null,
    live: null,
    year: "2022-2024",
    category: "game",
    featured: true,
    tags: ["game", "mobile", "unity", "csharp"],
  },
];
