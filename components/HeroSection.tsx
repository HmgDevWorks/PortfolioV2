'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface HeroSectionProps {
    language: 'es' | 'en';
}

export default function HeroSection({ language }: HeroSectionProps) {
    const content = {
        es: {
            greeting: '¡Hola! Soy',
            role: 'Desarrollador Fullstack y de Videojuegos',
            description: 'Apasionado por crear experiencias digitales únicas, combinando la creatividad humana con la eficiencia de la IA para desarrollar soluciones innovadoras.',
            cta: 'Ver Proyectos',
            download: 'Descargar CV',
            contact: 'Contactar',
            scroll: 'Desplázate para ver más'
        },
        en: {
            greeting: 'Hello! I\'m',
            role: 'Fullstack & Game Developer',
            description: 'Passionate about creating unique digital experiences, combining human creativity with AI efficiency to develop innovative solutions.',
            cta: 'View Projects',
            download: 'Download CV',
            contact: 'Contact',
            scroll: 'Scroll to see more'
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-emerald-400 text-lg md:text-xl font-medium mb-4"
                    >
                        {content[language].greeting}
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                    >
                        {personalInfo.name}
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-8"
                    >
                        {content[language].role}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        {content[language].description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-500/25"
                        >
                            <span>{content[language].cta}</span>
                        </motion.a>

                        <motion.a
                            href="#cv"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                            <Download size={20} />
                            <span>{content[language].download}</span>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                        >
                            <Mail size={20} />
                            <span>{content[language].contact}</span>
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-center space-x-6 mb-16"
                    >
                        <motion.a
                            href="https://github.com/hector-martin"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/hector-martin"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="p-3 bg-slate-800 text-slate-300 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300"
                        >
                            <Linkedin size={24} />
                        </motion.a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex flex-col items-center text-slate-400"
                        >
                            <span className="text-sm mb-2">{content[language].scroll}</span>
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 