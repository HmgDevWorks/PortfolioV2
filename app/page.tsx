'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
      <ExperienceSection language={language} />
      <CVSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
      <BackToTop />
    </main>
  );
} 