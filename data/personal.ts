import { PersonalInfo, Experience, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Héctor Martín García",
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
    "https://www.linkedin.com/in/h%C3%A9ctormg/",
  avatar: "https://via.placeholder.com/200x200/1f2937/ffffff?text=HM",
  yearsOfExperience: 3,
  languages: ["Español", "English"],
};

export const experience: Experience[] = [
  {
    id: "interacso-current",
    company: "Interacso",
    position: "Desarrollador Fullstack",
    positionEn: "Fullstack Developer",
    startDate: "2026-01",
    current: true,
    description:
      "Desarrollo fullstack con IA aplicada a producto: pipeline de edición de vídeo asistida por IA en sector banca (transcripción, subtítulos multiidioma, detección de highlights y exportación multiformato) y editor de creatividades sobre canvas con generación de texto por IA en sector electrodomésticos. Herramientas internas del equipo: kit CMS, automatización de propuestas con agentes de IA y estandarización de despliegues a Google Cloud. SEO técnico en un proyecto de automoción.",
    descriptionEn:
      "Fullstack development with AI applied to product: AI-assisted video editing pipeline in the banking sector (transcription, multi-language subtitles, highlight detection and multiformat export) and canvas-based creative editor with AI text generation in the home appliances sector. Internal team tooling: CMS kit, proposal automation with AI agents and standardised Google Cloud deployments. Technical SEO on an automotive project.",
    descriptionLong:
      "Desarrollo fullstack de producto en agencia digital, con foco en integrar IA generativa en herramientas reales de negocio.\n\n" +
      "Plataforma de edición de vídeo con IA (sector banca). Monorepo de microservicios orquestados con RabbitMQ. Trabajé el pipeline completo —transcripción, generación automática de fichas de sesión, subtítulos multiidioma con control de dialecto, detección de highlights, edición y exportación multiformato— y el editor de timeline del front: aguja de reproducción, recorte de segmentos, regla de marcas y editor de subtítulos. También la robustez del sistema: resolución de un deadlock por carrera entre eventos del pipeline, recuperación automática de pasos atascados, graceful shutdown de los workers y autoescalado con KEDA. Añadí SSO corporativo con Entra ID, permisos de visibilidad por rol y país, y una suite E2E con Playwright y Gherkin (playwright-bdd).\n\n" +
      "Editor de creatividades (sector electrodomésticos). Desarrollador principal de una aplicación para generar variaciones de contenido creativo sobre canvas (Konva) con Payload CMS. Implementé el sistema de capas —reordenamiento, agrupación y escalado proporcional—, la regeneración de textos con IA generativa ajustando el prompting, la localización multiidioma y el modelo de permisos por rol. Aislé las credenciales de IA en servidor con autenticación, CORS y rate limiting, y refactoricé la base del proyecto a módulos con tests.\n\n" +
      "Herramientas internas. Mejoré el kit CMS del equipo (Payload), que después sirvió de base para el editor de creatividades, y construí dos herramientas nuevas: una para automatizar la elaboración de propuestas técnicas con agentes de IA, incluida la generación de presentaciones vía Google Slides, y otra para estandarizar el flujo de despliegue de los proyectos desde GitHub a Google Cloud.\n\n" +
      "Otros. Cierre de una plataforma de gestión clínica (NestJS + Next.js + Prisma con design system propio): tablas de datos configurables, persistencia de formularios al navegar entre pestañas y limpieza de registros huérfanos. Y una tarea de SEO técnico en un proyecto de automoción —datos estructurados, breadcrumbs, metadata en SSR y verificación en Search Console— que consiguió que el sitio muestre sitelinks en los resultados de Google.",
    descriptionLongEn:
      "Fullstack product development at a digital agency, focused on bringing generative AI into real business tools.\n\n" +
      "AI video editing platform (banking sector). Microservices monorepo orchestrated with RabbitMQ. I worked across the full pipeline —transcription, automatic session summary generation, multi-language subtitles with dialect control, highlight detection, editing and multiformat export— and on the front-end timeline editor: playhead, segment trimming, tick ruler and subtitle editor. Also on system robustness: fixing a pipeline deadlock caused by an event race, automatic recovery of stuck steps, graceful worker shutdown and KEDA autoscaling. I added corporate SSO with Entra ID, role- and country-based visibility permissions, and an E2E suite with Playwright and Gherkin (playwright-bdd).\n\n" +
      "Creative editor (home appliances sector). Lead developer of an application to generate creative content variations on canvas (Konva) with Payload CMS. I built the layer system —reordering, grouping and proportional scaling—, AI-powered text regeneration with prompt tuning, multi-language localisation and the role-based permission model. I isolated AI credentials server-side behind authentication, CORS and rate limiting, and refactored the codebase into tested modules.\n\n" +
      "Internal tooling. I improved the team's CMS kit (Payload), which later became the foundation for the creative editor, and built two new tools: one to automate technical proposal writing with AI agents, including slide generation via Google Slides, and another to standardise the deployment flow for projects from GitHub to Google Cloud.\n\n" +
      "Other work. Wrapping up a clinical management platform (NestJS + Next.js + Prisma with its own design system): configurable data tables, form state persistence when navigating between tabs and orphan record cleanup. Plus a technical SEO task on an automotive project —structured data, breadcrumbs, SSR metadata and Search Console verification— which got the site showing sitelinks in Google results.",
    technologies: [
      "Gemini AI",
      "Next.js",
      "NestJS",
      "Payload CMS",
      "TypeScript",
      "RabbitMQ",
      "FFmpeg",
      "Konva",
      "Prisma",
      "PostgreSQL",
      "Playwright",
      "Docker",
      "Google Cloud",
      "Langfuse",
      "Tailwind CSS",
      "React",
    ],
  },
  {
    id: "colon-current",
    company: "Colon",
    position: "Desarrollador Fullstack",
    positionEn: "Fullstack Developer",
    startDate: "2025-05",
    endDate: "2026-01",
    current: false,
    description:
      "Desarrollo del portal de recursos humanos con gestión de archivos y nóminas (frontend), creación de widget reutilizable para inyección en otros proyectos, refactorización de errores en sistema legacy (PHP), gestor de tareas con React + Laravel, generación de PDFs (DomPDF), contenedores Docker para el portal.",
    descriptionEn:
      "Development of human resources portal with file and payroll management (frontend), creation of reusable widget for injection into other projects, refactoring errors in legacy system (PHP), task manager with React + Laravel, PDF generation (DomPDF), Docker containers for the portal.",
    technologies: [
      "React",
      "Laravel",
      "PHP",
      "DomPDF",
      "Docker",
      "JavaScript",
      "HTML/CSS",
      "PostgreSQL",
      "Vite",
      "Tailwind CSS",
      "Google OAuth",
      "Redis",
    ],
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
      "MariaDB",
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
