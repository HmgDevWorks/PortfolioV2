'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { projects } from '@/data/projects';
import { technologies } from '@/data/technologies';
import CVModal from './CVModal';

interface CVSectionProps {
    language: 'es' | 'en';
}

export default function CVSection({ language }: CVSectionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const content = {
        es: {
            title: 'Curriculum Vitae',
            subtitle: 'Descarga mi CV completo o visualízalo online',
            view: 'Ver CV',
            download: 'Descargar CV',
            personalInfo: 'Información Personal',
            skills: 'Habilidades',
            languages: 'Idiomas',
            contact: 'Contacto',
            phone: 'Teléfono',
            email: 'Email',
            location: 'Ubicación',
            years: 'años',
            featured: 'Destacado',
            technologies: 'Tecnologías'
        },
        en: {
            title: 'Curriculum Vitae',
            subtitle: 'Download my complete CV or view it online',
            view: 'View CV',
            download: 'Download CV',
            personalInfo: 'Personal Information',
            skills: 'Skills',
            languages: 'Languages',
            contact: 'Contact',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            years: 'years',
            featured: 'Featured',
            technologies: 'Technologies'
        }
    };

    return (
        <>
            <section id="cv" className="py-20 bg-slate-900">
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

                    {/* CV Preview */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-800 rounded-lg p-8 mb-12"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Personal Info */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    {content[language].personalInfo}
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-xl font-semibold text-emerald-400 mb-2">
                                            {personalInfo.name}
                                        </h4>
                                        <p className="text-slate-300">
                                            {language === 'es' ? personalInfo.title : personalInfo.titleEn}
                                        </p>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-slate-400">
                                            <strong>{content[language].email}:</strong> {personalInfo.email}
                                        </p>
                                        <p className="text-slate-400">
                                            <strong>{content[language].phone}:</strong> +34 654 91 75 04
                                        </p>
                                        <p className="text-slate-400">
                                            <strong>{content[language].location}:</strong> {language === 'es' ? personalInfo.location : personalInfo.locationEn}
                                        </p>
                                        <p className="text-slate-400">
                                            <strong>{content[language].languages}:</strong> {personalInfo.languages.join(', ')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    {content[language].skills}
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-slate-700 rounded-lg p-4">
                                        <div className="text-2xl font-bold text-emerald-400 mb-1">
                                            {personalInfo.yearsOfExperience}+ {content[language].years}
                                        </div>
                                        <div className="text-slate-400">
                                            {language === 'es' ? 'de experiencia' : 'of experience'}
                                        </div>
                                    </div>
                                    <div className="bg-slate-700 rounded-lg p-4">
                                        <div className="text-2xl font-bold text-emerald-400 mb-1">
                                            {projects.filter(p => p.featured).length}
                                        </div>
                                        <div className="text-slate-400">
                                            {content[language].featured} {language === 'es' ? 'proyectos' : 'projects'}
                                        </div>
                                    </div>
                                    <div className="bg-slate-700 rounded-lg p-4">
                                        <div className="text-2xl font-bold text-emerald-400 mb-1">
                                            {technologies.length}
                                        </div>
                                        <div className="text-slate-400">
                                            {content[language].technologies}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300"
                        >
                            <Eye size={20} />
                            <span>{content[language].view}</span>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center justify-center space-x-2 px-8 py-4 border border-slate-700 text-slate-300 rounded-lg font-semibold hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
                        >
                            <Download size={20} />
                            <span>{content[language].download}</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* CV Modal */}
            <CVModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                language={language}
            />
        </>
    );
} 