'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { experience, education } from '@/data/personal';

interface ExperienceSectionProps {
    language: 'es' | 'en';
}

export default function ExperienceSection({ language }: ExperienceSectionProps) {
    const content = {
        es: {
            title: 'Experiencia',
            subtitle: 'Mi trayectoria profesional y formación académica.',
            experience: 'Experiencia Laboral',
            education: 'Educación',
            current: 'Actual',
            technologies: 'Tecnologías',
        },
        en: {
            title: 'Experience',
            subtitle: 'My professional career and academic background.',
            experience: 'Work Experience',
            education: 'Education',
            current: 'Current',
            technologies: 'Technologies',
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    return (
        <section id="experience" className="py-20 bg-slate-900">
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
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            {content[language].experience}
                        </h3>

                        <div className="space-y-8">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-emerald-500"
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-emerald-500 rounded-full" />

                                    <div className="bg-slate-800 rounded-lg p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-white">
                                                    {language === 'es' ? exp.position : exp.positionEn}
                                                </h4>
                                                <p className="text-emerald-400 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            {exp.current && (
                                                <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">
                                                    {content[language].current}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center text-slate-400 text-sm mb-4">
                                            <Calendar size={14} className="mr-2" />
                                            {formatDate(exp.startDate)} - {exp.current ? content[language].current : formatDate(exp.endDate!)}
                                        </div>

                                        <p className="text-slate-300 mb-4">
                                            {language === 'es' ? exp.description : exp.descriptionEn}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 bg-slate-700 text-emerald-400 text-xs rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-8">
                            {content[language].education}
                        </h3>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={edu.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-8 border-l-2 border-blue-500"
                                >
                                    <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

                                    <div className="bg-slate-800 rounded-lg p-6">
                                        <h4 className="text-xl font-bold text-white mb-2">
                                            {language === 'es' ? edu.degree : edu.degreeEn}
                                        </h4>
                                        <p className="text-blue-400 font-medium mb-4">
                                            {edu.institution}
                                        </p>

                                        <div className="flex items-center text-slate-400 text-sm mb-4">
                                            <Calendar size={14} className="mr-2" />
                                            {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                        </div>

                                        {edu.description && (
                                            <p className="text-slate-300">
                                                {language === 'es' ? edu.description : edu.descriptionEn}
                                            </p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 