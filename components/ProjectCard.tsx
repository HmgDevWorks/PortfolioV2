'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '@/types';

interface ProjectCardProps {
    project: Project;
    language: 'es' | 'en';
    index?: number;
}

export default function ProjectCard({ project, language, index = 0 }: ProjectCardProps) {
    const techColors: { [key: string]: string } = {
        'React': 'bg-blue-100 text-blue-800',
        'Next.js': 'bg-slate-100 text-slate-800',
        'Node.js': 'bg-green-100 text-green-800',
        'TypeScript': 'bg-blue-100 text-blue-800',
        'Python': 'bg-yellow-100 text-yellow-800',
        'MongoDB': 'bg-green-100 text-green-800',
        'PostgreSQL': 'bg-indigo-100 text-indigo-800',
        'Tailwind': 'bg-cyan-100 text-cyan-800',
        'Tailwind CSS': 'bg-cyan-100 text-cyan-800',
        'Laravel': 'bg-red-100 text-red-800',
        'PHP': 'bg-purple-100 text-purple-800',
        'MySQL': 'bg-orange-100 text-orange-800',
        'Unity': 'bg-gray-100 text-gray-800',
        'C#': 'bg-purple-100 text-purple-800',
        'Expo': 'bg-blue-100 text-blue-800',
        'React Native': 'bg-cyan-100 text-cyan-800',
        'JavaScript': 'bg-yellow-100 text-yellow-800',
        'HTML': 'bg-orange-100 text-orange-800',
        'CSS': 'bg-blue-100 text-blue-800',
        'DomPDF': 'bg-red-100 text-red-800',
        'Android': 'bg-green-100 text-green-800',
        'WebSockets': 'bg-pink-100 text-pink-800',
        'Laravel Reverb': 'bg-orange-100 text-orange-800',
        'Spatie': 'bg-indigo-100 text-indigo-800',
        'Vite': 'bg-amber-100 text-amber-800',
        'Stripe': 'bg-violet-100 text-violet-800',
        'Prisma': 'bg-teal-100 text-teal-800',
        'Redis': 'bg-red-100 text-red-800',
    };

    // Función para determinar si usar placeholder
    const shouldUsePlaceholder = (imageUrl: string) => {
        return !imageUrl ||
            imageUrl.includes('placeholder.com') ||
            imageUrl.includes('via.placeholder') ||
            !imageUrl.startsWith('http');
    };

    // Función para obtener icono según categoría
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'web':
                return '🌐';
            case 'mobile':
                return '📱';
            case 'fullstack':
                return '⚡';
            case 'game':
                return '🎮';
            default:
                return '💻';
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
        >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10">
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                    {project.image && !shouldUsePlaceholder(project.image) ? (
                        <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            src={project.image}
                            alt={language === 'es' ? project.title : project.titleEn}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}

                    {/* Custom Placeholder - Always shown when no real image */}
                    <div className={`w-full h-full bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex flex-col items-center justify-center p-4 ${project.image && !shouldUsePlaceholder(project.image) ? 'hidden' : ''}`}>
                        <div className="text-4xl mb-3">
                            {getCategoryIcon(project.category)}
                        </div>
                        <span className="text-emerald-300 text-sm font-medium text-center px-2 leading-tight">
                            {language === 'es' ? project.title : project.titleEn}
                        </span>
                        <span className="text-emerald-400/60 text-xs mt-2 uppercase tracking-wide">
                            {project.category}
                        </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Overlay Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.live && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-emerald-500"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        )}
                        {project.github && (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-slate-700"
                            >
                                <Github className="w-4 h-4" />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {language === 'es' ? project.title : project.titleEn}
                        </h3>
                        {project.featured && (
                            <span className="px-2 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs rounded-full">
                                Destacado
                            </span>
                        )}
                    </div>

                    <p className="text-slate-400 mb-4 line-clamp-3">
                        {language === 'es' ? project.description : project.descriptionEn}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies?.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className={`px-3 py-1 rounded-full text-xs font-medium ${techColors[tech] || 'bg-slate-700 text-slate-300'}`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500 capitalize">
                            {project.category}
                        </span>
                        {project.live ? (
                            <motion.a
                                whileHover={{ x: 5 }}
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-emerald-400 text-sm font-medium cursor-pointer hover:text-emerald-300 transition-colors"
                            >
                                Ver más
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </motion.a>
                        ) : (
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center text-slate-500 text-sm font-medium cursor-not-allowed"
                            >
                                Ver más
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
} 