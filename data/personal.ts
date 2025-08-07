import { PersonalInfo, Experience, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Héctor Martín",
  title: "Desarrollador Fullstack y de videojuegos",
  titleEn: "Fullstack Developer and Game Developer",
  email: "HmgDevWorks@gmail.com",
  location: "España",
  locationEn: "Spain",
  about:
    "Apasionado por crear experiencias digitales, desde juegos hasta webs funcionales. Desarrollo completo de apps, con backend propio, monetización y publicación.",
  aboutEn:
    "Passionate about creating digital experiences, from games to functional websites. Complete app development with own backend, monetization and publication.",
  github: "https://github.com/HmgDevWorks",
  linkedin:
    "https://www.linkedin.com/in/h%C3%A9ctor-mart%C3%ADn-garc%C3%ADa-5497b1153/",
  avatar: "/images/avatar.jpg",
  yearsOfExperience: 3,
  languages: ["Español", "English"],
};

export const experience: Experience[] = [
  {
    id: "colon-current",
    company: "Colon",
    position: "Desarrollador Fullstack",
    positionEn: "Fullstack Developer",
    startDate: "2025-05",
    current: true,
    description:
      "Refactorización de errores en sistema legacy (PHP), gestor de tareas con React + Laravel, generación de PDFs (DomPDF).",
    descriptionEn:
      "Refactoring errors in legacy system (PHP), task manager with React + Laravel, PDF generation (DomPDF).",
    technologies: ["React", "Laravel", "PHP", "DomPDF"],
  },
  {
    id: "colon-practices",
    company: "Colon",
    position: "Prácticas",
    positionEn: "Internship",
    startDate: "2025-02",
    endDate: "2025-03",
    current: false,
    description:
      "Blog con React y Tailwind, página institucional con WordPress.",
    descriptionEn:
      "Blog with React and Tailwind, institutional page with WordPress.",
    technologies: ["React", "Tailwind CSS", "WordPress"],
  },
  {
    id: "taisai",
    company: "Taisai (Independiente)",
    position: "Desarrollador Fullstack y de videojuegos",
    positionEn: "Fullstack Developer and Game Developer",
    startDate: "2022-05",
    endDate: "2024-12",
    current: false,
    description:
      "App de juegos para Android (Unity + C#), backend en PHP + SQL, monetización con IronSource, desarrollo del sitio y tienda (HTML, JS, PHP).",
    descriptionEn:
      "Android game app (Unity + C#), PHP + SQL backend, IronSource monetization, website and store development (HTML, JS, PHP).",
    technologies: [
      "Unity",
      "C#",
      "PHP",
      "SQL",
      "IronSource",
      "HTML",
      "JavaScript",
    ],
  },
  {
    id: "practices-cfgs",
    company: "Prácticas del CFGS",
    position: "Desarrollador de videojuegos",
    positionEn: "Game Developer",
    startDate: "2020-04",
    endDate: "2020-06",
    current: false,
    description:
      "Simulación con 25.000 agentes en movimiento en Puerta del Sol (Unity – Lenovo), juego de matemáticas con preguntas visuales y cálculo interactivo (Fundación Querer), minijuegos educativos multiplataforma con lógica escalable (Great Little People).",
    descriptionEn:
      "Simulation with 25,000 moving agents in Puerta del Sol (Unity - Lenovo), math game with visual questions and interactive calculation (Fundación Querer), educational minigames multiplatform with scalable logic (Great Little People).",
    technologies: ["Unity", "C#", "Game Development"],
  },
];

export const education: Education[] = [
  {
    id: "certificado-web",
    institution: "Certificado Desarrollo de Aplicaciones con tecnologías web",
    degree: "Desarrollo de Aplicaciones Web",
    degreeEn: "Web Application Development",
    startDate: "2024-01",
    endDate: "2025-01",
    description: "Certificación en desarrollo de aplicaciones web.",
    descriptionEn: "Web application development certification.",
  },
  {
    id: "cfgs-estec",
    institution: "ESTEC",
    degree: "CFGS Animación, juegos y entornos interactivos",
    degreeEn: "CFGS Animation, games and interactive environments",
    startDate: "2018-09",
    endDate: "2020-06",
    description:
      "Formación en animación, desarrollo de videojuegos y entornos interactivos.",
    descriptionEn:
      "Training in animation, game development and interactive environments.",
  },
  {
    id: "hnd-estec",
    institution: "ESTEC",
    degree: "HND Creative Media Production",
    degreeEn: "HND Creative Media Production",
    startDate: "2017-09",
    endDate: "2019-06",
    description: "Formación en producción de medios creativos.",
    descriptionEn: "Creative media production training.",
  },
];
