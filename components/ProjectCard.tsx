'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    language: 'es' | 'en';
}

export default function ProjectCard({ project, language }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={language === 'es' ? project.title : project.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                        }}
                    />
                ) : null}

                {/* Fallback placeholder */}
                <div className={`w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center ${project.image ? 'hidden' : ''}`}>
                    <Code size={48} className="text-emerald-400" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                    {language === 'es' ? project.title : project.titleEn}
                </h3>
                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {language === 'es' ? project.description : project.descriptionEn}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 bg-slate-700 text-emerald-400 text-xs rounded"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700 text-slate-400 text-xs rounded">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Project Links */}
                <div className="flex items-center justify-between">
                    <span className="text-emerald-400 text-sm font-medium">
                        {project.year}
                    </span>

                    <div className="flex items-center space-x-2">
                        {project.github && (
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-slate-600 transition-colors"
                            >
                                <Github size={16} />
                            </motion.a>
                        )}

                        {project.live && (
                            <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                            >
                                <ExternalLink size={16} />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 