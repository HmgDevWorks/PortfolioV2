'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/personal';

interface AboutSectionProps {
    language: 'es' | 'en';
}

export default function AboutSection({ language }: AboutSectionProps) {
    const content = {
        es: {
            title: 'Sobre Mí',
            subtitle: 'Mi enfoque en el desarrollo',
            description: personalInfo.about,
            approach: {
                title: 'Mi Enfoque',
                items: [
                    'Uso inteligente de IA para acelerar el desarrollo',
                    'Enfoque en la calidad y funcionalidad del código',
                    'Comprensión profunda de las tecnologías que uso',
                    'Capacidad de adaptación y aprendizaje rápido',
                    'Trabajo en equipo y comunicación efectiva'
                ]
            },
            strengths: {
                title: 'Mis Fortalezas',
                items: [
                    'Desarrollo fullstack con múltiples tecnologías',
                    'Integración de IA en flujos de trabajo',
                    'Optimización y mejora de código existente',
                    'Resolución de problemas y debugging',
                    'Desarrollo de videojuegos con Unity'
                ]
            }
        },
        en: {
            title: 'About Me',
            subtitle: 'My development approach',
            description: personalInfo.aboutEn,
            approach: {
                title: 'My Approach',
                items: [
                    'Smart use of AI to accelerate development',
                    'Focus on code quality and functionality',
                    'Deep understanding of technologies I use',
                    'Adaptability and fast learning',
                    'Teamwork and effective communication'
                ]
            },
            strengths: {
                title: 'My Strengths',
                items: [
                    'Fullstack development with multiple technologies',
                    'AI integration in workflows',
                    'Code optimization and improvement',
                    'Problem solving and debugging',
                    'Game development with Unity'
                ]
            }
        }
    };

    return (
        <section id="about" className="py-20 bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">
                            {content[language].title}
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        {content[language].subtitle}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            {content[language].description}
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold text-emerald-400 mb-4">
                                    {content[language].approach.title}
                                </h4>
                                <ul className="space-y-3">
                                    {content[language].approach.items.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-start space-x-3"
                                        >
                                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-slate-300">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Strengths */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-lg font-semibold text-emerald-400 mb-4">
                                {content[language].strengths.title}
                            </h4>
                            <div className="grid gap-4">
                                {content[language].strengths.items.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-700 rounded-lg p-4 border border-slate-600"
                                    >
                                        <span className="text-slate-300">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-slate-700 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-white mb-6">
                                {language === 'es' ? 'Estadísticas' : 'Statistics'}
                            </h4>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                                        {personalInfo.yearsOfExperience}+
                                    </div>
                                    <div className="text-slate-400">
                                        {language === 'es' ? 'Años de experiencia' : 'Years of experience'}
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">
                                        {personalInfo.languages.length}
                                    </div>
                                    <div className="text-slate-400">
                                        {language === 'es' ? 'Idiomas' : 'Languages'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 