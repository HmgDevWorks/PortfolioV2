export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  year: string;
  category: "web" | "mobile" | "fullstack" | "game";
  featured: boolean;
  tags: string[]; // Nuevo campo para tags múltiples
}

export interface Contact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Technology {
  name: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools" | "cloud";
  icon?: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  positionEn: string;
  startDate: string;
  endDate?: string;
  description: string;
  descriptionEn: string;
  technologies: string[];
  current: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  degreeEn: string;
  startDate: string;
  endDate: string;
  description?: string;
  descriptionEn?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  titleEn: string;
  email: string;
  location: string;
  locationEn: string;
  about: string;
  aboutEn: string;
  github: string;
  linkedin: string;
  twitter?: string;
  avatar: string;
  yearsOfExperience: number;
  languages: string[];
}
