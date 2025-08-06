'use client';

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection language="es" />
      <AboutSection language="es" />
      <ProjectsSection language="es" />
      <ExperienceSection language="es" />
      <CVSection language="es" />
      <ContactSection language="es" />
      <Footer language="es" />
    </main>
  );
} 