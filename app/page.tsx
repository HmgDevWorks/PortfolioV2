'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CVSection from '@/components/CVSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

function HomeContent() {
  const params = useSearchParams();
  const [language, setLanguage] = useState<'es' | 'en'>(
    params.get('lang') === 'en' ? 'en' : 'es'
  );

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

export default function Home() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-slate-950" />}>
      <HomeContent />
    </Suspense>
  );
}
