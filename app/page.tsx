'use client';

import { useEffect, useState } from 'react';
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

  // Deep links from the PDF CV carry ?lang=. It is read here instead of with
  // useSearchParams because that hook would opt the whole page out of prerendering.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('lang') === 'en') {
      setLanguage('en');
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation language={language} setLanguage={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ExperienceSection language={language} />
      <ProjectsSection language={language} />
      <CVSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
      <BackToTop />
    </main>
  );
}
