'use client';

import { motion } from 'framer-motion';
import { technologies } from '@/data/technologies';

interface TechnologiesSectionProps {
    language: 'es' | 'en';
}

export default function TechnologiesSection({ language }: TechnologiesSectionProps) {
    const categories = [
        { id: 'frontend', label: { es: 'Frontend', en: 'Frontend' } },
        { id: 'backend', label: { es: 'Backend', en: 'Backend' } },
        { id: 'mobile', label: { es: 'Mobile', en: 'Mobile' } },
        { id: 'database', label: { es: 'Bases de Datos', en: 'Databases' } },
        { id: 'tools', label: { es: 'Herramientas', en: 'Tools' } },
        { id: 'cloud', label: { es: 'Cloud & Servicios', en: 'Cloud & Services' } },
    ];

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'expert':
                return 'bg-emerald-500';
            case 'advanced':
                return 'bg-emerald-400';
            case 'intermediate':
                return 'bg-yellow-500';
            case 'beginner':
                return 'bg-blue-500';
            default:
                return 'bg-slate-500';
        }
    };

    const getLevelText = (level: string) => {
        const levelMap = {
            es: {
                expert: 'Experto',
                advanced: 'Avanzado',
                intermediate: 'Intermedio',
                beginner: 'Principiante'
            },
            en: {
                expert: 'Expert',
                advanced: 'Advanced',
                intermediate: 'Intermediate',
                beginner: 'Beginner'
            }
        };
        return levelMap[language][level as keyof typeof levelMap.es];
    };

    const content = {
        es: {
            title: 'Tecnologías',
            subtitle: 'Stack tecnológico que utilizo para crear aplicaciones modernas y escalables.',
        },
        en: {
            title: 'Technologies',
            subtitle: 'Technology stack I use to create modern and scalable applications.',
        }
    };

    return (
        <section id="technologies" className="py-20 bg-slate-800">
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

                {/* Technologies by Category */}
                <div className="space-y-12">
                    {categories.map((category, categoryIndex) => {
                        const categoryTechs = technologies.filter(tech => tech.category === category.id);

                        if (categoryTechs.length === 0) return null;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-white">
                                    {category.label[language]}
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {categoryTechs.map((tech, techIndex) => (
                                        <motion.div
                                            key={tech.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-slate-700 rounded-lg p-4 hover:bg-slate-600 transition-colors duration-300"
                                        >
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="font-medium text-white">{tech.name}</span>
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(tech.level)}`}>
                                                    {getLevelText(tech.level)}
                                                </span>
                                            </div>

                                            {/* Skill Bar */}
                                            <div className="w-full bg-slate-600 rounded-full h-2">
                                                <div
                                                    className={`h-2 rounded-full transition-all duration-1000 ${tech.level === 'expert' ? 'w-full bg-emerald-500' :
                                                            tech.level === 'advanced' ? 'w-3/4 bg-emerald-400' :
                                                                tech.level === 'intermediate' ? 'w-1/2 bg-yellow-500' :
                                                                    'w-1/4 bg-blue-500'
                                                        }`}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 p-6 bg-slate-700 rounded-lg"
                >
                    <h4 className="text-lg font-semibold text-white mb-4">
                        {language === 'es' ? 'Niveles de Experiencia' : 'Experience Levels'}
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['expert', 'advanced', 'intermediate', 'beginner'].map((level) => (
                            <div key={level} className="flex items-center space-x-2">
                                <div className={`w-3 h-3 rounded-full ${getLevelColor(level)}`} />
                                <span className="text-sm text-slate-300">
                                    {getLevelText(level)}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 