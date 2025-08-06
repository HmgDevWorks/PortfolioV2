'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/personal';

interface FooterProps {
    language: 'es' | 'en';
}

export default function Footer({ language }: FooterProps) {
    const content = {
        es: {
            madeWith: 'Hecho con',
            by: 'por',
            rights: 'Todos los derechos reservados.',
            backToTop: 'Volver arriba',
        },
        en: {
            madeWith: 'Made with',
            by: 'by',
            rights: 'All rights reserved.',
            backToTop: 'Back to top',
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo and Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <div className="text-2xl font-bold gradient-text mb-2">
                            {personalInfo.name}
                        </div>
                        <p className="text-slate-400 text-sm">
                            {language === 'es' ? personalInfo.title : personalInfo.titleEn}
                        </p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex justify-center space-x-6"
                    >
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                        >
                            <Github size={24} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                        >
                            <Linkedin size={24} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href={`mailto:${personalInfo.email}`}
                            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>

                    {/* Back to Top */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center md:text-right"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={scrollToTop}
                            className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm flex items-center justify-center md:justify-end space-x-2"
                        >
                            <span>{content[language].backToTop}</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="border-t border-slate-800 mt-8 pt-8 text-center"
                >
                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} {personalInfo.name}. {content[language].rights}
                    </p>
                    <p className="text-slate-500 text-xs mt-2 flex items-center justify-center space-x-1">
                        <span>{content[language].madeWith}</span>
                        <Heart size={12} className="text-red-500 animate-pulse" />
                        <span>{content[language].by}</span>
                        <span className="text-emerald-400">{personalInfo.name}</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
} 