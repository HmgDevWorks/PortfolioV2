'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
    language: 'es' | 'en';
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const content = {
        es: {
            title: 'Proyectos',
            subtitle: 'Una muestra de mi trabajo y experiencia',
            all: 'Todos',
            web: 'Web',
            mobile: 'Mobile',
            fullstack: 'Fullstack',
            game: 'Juegos',
            featured: 'Destacados'
        },
        en: {
            title: 'Projects',
            subtitle: 'A showcase of my work and experience',
            all: 'All',
            web: 'Web',
            mobile: 'Mobile',
            fullstack: 'Fullstack',
            game: 'Games',
            featured: 'Featured'
        }
    };

    // Categorías disponibles basadas en tags únicos
    const categories = [
        { id: 'all', name: content[language].all },
        { id: 'web', name: content[language].web },
        { id: 'mobile', name: content[language].mobile },
        { id: 'fullstack', name: content[language].fullstack },
        { id: 'game', name: content[language].game },
        { id: 'featured', name: content[language].featured }
    ];

    // Filtrar proyectos basado en la categoría activa
    const filteredProjects = projects.filter(project => {
        if (activeCategory === 'all') return true;
        if (activeCategory === 'featured') return project.featured;
        // Un proyecto aparece en una categoría si tiene ese tag O si su categoría principal coincide
        return project.tags.includes(activeCategory) || project.category === activeCategory;
    });

    return (
        <section id="projects" className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {content[language].title}
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {content[language].subtitle}
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${activeCategory === category.id
                                ? 'bg-emerald-500 text-white shadow-lg'
                                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                        >
                            {category.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} language={language} index={index} />
                    ))}
                </motion.div>

                {/* No Projects Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-slate-400 text-lg">
                            {language === 'es'
                                ? 'No hay proyectos en esta categoría.'
                                : 'No projects in this category.'
                            }
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
} 