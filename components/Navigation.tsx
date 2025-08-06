'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

interface NavigationProps {
    language: 'es' | 'en';
    setLanguage: (lang: 'es' | 'en') => void;
}

export default function Navigation({ language, setLanguage }: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#about', label: { es: 'Sobre mí', en: 'About' } },
        { href: '#projects', label: { es: 'Proyectos', en: 'Projects' } },
        { href: '#experience', label: { es: 'Experiencia', en: 'Experience' } },
        { href: '#cv', label: { es: 'CV', en: 'CV' } },
        { href: '#contact', label: { es: 'Contacto', en: 'Contact' } },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold gradient-text"
                    >
                        HM
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.href}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.href)}
                                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                            >
                                {item.label[language]}
                            </motion.button>
                        ))}

                        {/* Language Switcher */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                            className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                        >
                            <Globe size={16} />
                            <span>{language.toUpperCase()}</span>
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden py-4 border-t border-slate-800"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.href}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
                                >
                                    {item.label[language]}
                                </motion.button>
                            ))}

                            {/* Mobile Language Switcher */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                                className="flex items-center space-x-2 text-slate-300 hover:text-emerald-400 transition-colors duration-300"
                            >
                                <Globe size={16} />
                                <span>{language === 'es' ? 'English' : 'Español'}</span>
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
} 