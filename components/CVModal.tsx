'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, Code, Globe } from 'lucide-react';
import { personalInfo, experience, education } from '@/data/personal';
import { projects } from '@/data/projects';
import { technologies } from '@/data/technologies';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
    language: 'es' | 'en';
}

export default function CVModal({ isOpen, onClose, language }: CVModalProps) {
    const [isGenerating, setIsGenerating] = useState(false);
    const cvRef = useRef<HTMLDivElement>(null);

    const content = {
        es: {
            title: 'Curriculum Vitae',
            download: 'Descargar PDF',
            generating: 'Generando PDF...',
            close: 'Cerrar',
            experience: 'Experiencia Laboral',
            education: 'Educación',
            projects: 'Proyectos Destacados',
            technologies: 'Tecnologías',
            skills: 'Habilidades',
            languages: 'Idiomas',
            contact: 'Contacto',
            phone: 'Teléfono',
            email: 'Email',
            location: 'Ubicación',
            years: 'años',
            current: 'Actualidad',
            featured: 'Destacado',
            about: 'Sobre mí',
            personalInfo: 'Información Personal'
        },
        en: {
            title: 'Curriculum Vitae',
            download: 'Download PDF',
            generating: 'Generating PDF...',
            close: 'Close',
            experience: 'Work Experience',
            education: 'Education',
            projects: 'Featured Projects',
            technologies: 'Technologies',
            skills: 'Skills',
            languages: 'Languages',
            contact: 'Contact',
            phone: 'Phone',
            email: 'Email',
            location: 'Location',
            years: 'years',
            current: 'Present',
            featured: 'Featured',
            about: 'About me',
            personalInfo: 'Personal Information'
        }
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'short'
        });
    };

    const getLevelText = (level: string) => {
        const levels = {
            es: {
                beginner: 'Principiante',
                intermediate: 'Intermedio',
                advanced: 'Avanzado',
                expert: 'Experto'
            },
            en: {
                beginner: 'Beginner',
                intermediate: 'Intermediate',
                advanced: 'Advanced',
                expert: 'Expert'
            }
        };
        return levels[language][level as keyof typeof levels.es] || level;
    };

    const handleDownloadPDF = async () => {
        if (!cvRef.current) return;

        setIsGenerating(true);

        try {
            // Crear PDF profesional de una sola página
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pageWidth = 210;
            const pageHeight = 297;
            const margin = 20;
            const contentWidth = pageWidth - (margin * 2);
            let yPosition = margin;

            // Header con nombre y título
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(24);
            pdf.setTextColor(16, 185, 129); // emerald-500
            pdf.text(personalInfo.name, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 12;

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(14);
            pdf.setTextColor(100, 116, 139); // slate-500
            pdf.text(language === 'es' ? personalInfo.title : personalInfo.titleEn, pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 10;

            // Información de contacto
            pdf.setFontSize(10);
            pdf.setTextColor(71, 85, 105); // slate-600
            const contactInfo = [
                personalInfo.email,
                '+34 654 91 75 04',
                language === 'es' ? personalInfo.location : personalInfo.locationEn
            ];
            pdf.text(contactInfo.join(' | '), pageWidth / 2, yPosition, { align: 'center' });
            yPosition += 15;

            // Línea divisoria
            pdf.setDrawColor(16, 185, 129);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 8;

            // Sobre mí
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(16, 185, 129);
            pdf.text(content[language].about, margin, yPosition);
            yPosition += 6;

            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            pdf.setTextColor(30, 41, 59); // slate-800
            const aboutText = language === 'es' ? personalInfo.about : personalInfo.aboutEn;
            if (aboutText) {
                const lines = pdf.splitTextToSize(aboutText, contentWidth);
                pdf.text(lines, margin, yPosition);
                yPosition += (lines.length * 4) + 8;
            }

            // Experiencia Laboral
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(12);
            pdf.setTextColor(16, 185, 129);
            pdf.text(content[language].experience, margin, yPosition);
            yPosition += 6;

            pdf.setDrawColor(16, 185, 129);
            pdf.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 6;

            // Experiencias
            pdf.setFont('helvetica', 'normal');
            pdf.setFontSize(10);
            experience.slice(0, 3).forEach((exp, index) => {
                if (yPosition > pageHeight - 80) return;

                pdf.setFont('helvetica', 'bold');
                pdf.setTextColor(30, 41, 59);
                const positionText = language === 'es' ? exp.position : exp.positionEn;
                if (positionText) {
                    pdf.text(positionText, margin, yPosition);
                    yPosition += 4;
                }

                pdf.setFont('helvetica', 'normal');
                pdf.setTextColor(16, 185, 129);
                const dateRange = `${exp.company || ''} | ${formatDate(exp.startDate)} - ${exp.current ? content[language].current : formatDate(exp.endDate || '')}`;
                pdf.text(dateRange, margin, yPosition);
                yPosition += 4;

                pdf.setTextColor(71, 85, 105);
                const description = language === 'es' ? exp.description : exp.descriptionEn;
                if (description) {
                    const lines = pdf.splitTextToSize(description, contentWidth);
                    pdf.text(lines, margin, yPosition);
                    yPosition += (lines.length * 3.5) + 3;
                }

                pdf.setFontSize(9);
                pdf.text(`${content[language].technologies}: ${exp.technologies.join(', ')}`, margin, yPosition);
                yPosition += 6;
                pdf.setFontSize(10);
            });

            // Proyectos destacados
            if (yPosition < pageHeight - 60) {
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(16, 185, 129);
                pdf.text(content[language].projects, margin, yPosition);
                yPosition += 6;

                pdf.setDrawColor(16, 185, 129);
                pdf.line(margin, yPosition, pageWidth - margin, yPosition);
                yPosition += 6;

                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(10);
                featuredProjects.slice(0, 4).forEach((project) => {
                    if (yPosition > pageHeight - 40) return;

                    pdf.setFont('helvetica', 'bold');
                    pdf.setTextColor(30, 41, 59);
                    const projectTitle = language === 'es' ? project.title : project.titleEn;
                    if (projectTitle) {
                        pdf.text(projectTitle, margin, yPosition);
                        yPosition += 4;
                    }

                    pdf.setFont('helvetica', 'normal');
                    pdf.setTextColor(16, 185, 129);
                    pdf.text(`${project.year} | ${project.category}`, margin, yPosition);
                    yPosition += 5;
                });
            }

            // Tecnologías
            if (yPosition < pageHeight - 50) {
                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(12);
                pdf.setTextColor(16, 185, 129);
                pdf.text(content[language].technologies, margin, yPosition);
                yPosition += 6;

                pdf.setDrawColor(16, 185, 129);
                pdf.line(margin, yPosition, pageWidth - margin, yPosition);
                yPosition += 6;

                pdf.setFont('helvetica', 'normal');
                pdf.setFontSize(9);
                pdf.setTextColor(71, 85, 105);

                // Agrupar por categoría
                const techByCategory = technologies.reduce((acc, tech) => {
                    if (!acc[tech.category]) acc[tech.category] = [];
                    acc[tech.category].push(tech.name);
                    return acc;
                }, {} as Record<string, string[]>);

                Object.entries(techByCategory).forEach(([category, techs]) => {
                    if (yPosition > pageHeight - 20) return;

                    const categoryNames = {
                        es: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Bases de Datos', tools: 'Herramientas', cloud: 'Servicios Cloud' },
                        en: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Databases', tools: 'Tools', cloud: 'Cloud Services' }
                    };

                    const categoryName = categoryNames[language][category as keyof typeof categoryNames.es];
                    if (!categoryName) return;

                    pdf.setFont('helvetica', 'bold');
                    pdf.text(`${categoryName}:`, margin, yPosition);
                    yPosition += 3;

                    pdf.setFont('helvetica', 'normal');
                    pdf.text(techs.join(', '), margin + 5, yPosition);
                    yPosition += 4;
                });
            }

            // Footer con estadísticas
            if (yPosition < pageHeight - 15) {
                pdf.setDrawColor(241, 245, 249); // slate-100
                pdf.setFillColor(241, 245, 249);
                pdf.rect(margin, pageHeight - 20, contentWidth, 15, 'F');

                pdf.setFont('helvetica', 'bold');
                pdf.setFontSize(10);
                pdf.setTextColor(16, 185, 129);

                const stats = [
                    `${personalInfo.yearsOfExperience}+ ${content[language].years}`,
                    `${featuredProjects.length} ${content[language].featured}`,
                    `${technologies.length} ${content[language].technologies}`,
                    `${personalInfo.languages.length} ${content[language].languages}`
                ];

                const statWidth = contentWidth / 4;
                stats.forEach((stat, index) => {
                    const x = margin + (statWidth * index) + (statWidth / 2);
                    pdf.text(stat, x, pageHeight - 13, { align: 'center' });
                });
            }

            pdf.save(`CV_Hector_Martin_${language.toUpperCase()}.pdf`);
        } catch (error) {
            console.error('Error generating PDF:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const featuredProjects = projects.filter(p => p.featured);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 bg-slate-50 border-b">
                            <h2 className="text-2xl font-bold text-slate-800">
                                {content[language].title}
                            </h2>
                            <div className="flex items-center space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleDownloadPDF}
                                    disabled={isGenerating}
                                    className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors disabled:opacity-50"
                                >
                                    <Download size={16} />
                                    <span>
                                        {isGenerating ? content[language].generating : content[language].download}
                                    </span>
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>
                        </div>

                        {/* CV Content */}
                        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                            <div ref={cvRef} className="p-6 bg-white" style={{ maxWidth: '210mm', margin: '0 auto' }}>
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h1 className="text-3xl font-bold text-slate-800 mb-1">
                                        {personalInfo.name}
                                    </h1>
                                    <p className="text-lg text-slate-600 mb-3">
                                        {language === 'es' ? personalInfo.title : personalInfo.titleEn}
                                    </p>
                                    <div className="flex justify-center space-x-6 text-sm text-slate-500">
                                        <span className="flex items-center space-x-1">
                                            <Mail size={12} />
                                            <span>{personalInfo.email}</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <Phone size={12} />
                                            <span>+34 654 91 75 04</span>
                                        </span>
                                        <span className="flex items-center space-x-1">
                                            <MapPin size={12} />
                                            <span>{language === 'es' ? personalInfo.location : personalInfo.locationEn}</span>
                                        </span>
                                    </div>
                                </div>

                                {/* Main Content - 2 Column Layout */}
                                <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
                                    {/* Left Column - 70% */}
                                    <div className="lg:col-span-7 space-y-6">
                                        {/* About */}
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-800 mb-3 border-b-2 border-emerald-500 pb-1 flex items-center">
                                                <Globe size={16} className="mr-2" />
                                                {content[language].about}
                                            </h2>
                                            <p className="text-slate-700 leading-relaxed text-sm">
                                                {language === 'es' ? personalInfo.about : personalInfo.aboutEn}
                                            </p>
                                        </div>

                                        {/* Experience */}
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-800 mb-3 border-b-2 border-emerald-500 pb-1 flex items-center">
                                                <Briefcase size={16} className="mr-2" />
                                                {content[language].experience}
                                            </h2>
                                            <div className="space-y-4">
                                                {experience.slice(0, 2).map((exp, index) => (
                                                    <div key={index} className="border-l-3 border-emerald-500 pl-3">
                                                        <h3 className="text-base font-semibold text-slate-800">
                                                            {language === 'es' ? exp.position || '' : exp.positionEn || ''}
                                                        </h3>
                                                        <p className="text-emerald-600 font-medium text-sm">
                                                            {exp.company || ''} | {formatDate(exp.startDate)} - {exp.current ? content[language].current : formatDate(exp.endDate || '')}
                                                        </p>
                                                        <p className="text-slate-700 mt-1 text-sm">
                                                            {language === 'es' ? exp.description : exp.descriptionEn}
                                                        </p>
                                                        <p className="text-xs text-slate-500 mt-1">
                                                            <strong>{content[language].technologies}:</strong> {exp.technologies.join(', ')}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Projects */}
                                        <div>
                                            <h2 className="text-xl font-bold text-slate-800 mb-3 border-b-2 border-emerald-500 pb-1 flex items-center">
                                                <Code size={16} className="mr-2" />
                                                {content[language].projects}
                                            </h2>
                                            <div className="grid md:grid-cols-2 gap-3">
                                                {featuredProjects.slice(0, 4).map((project, index) => (
                                                    <div key={index} className="border border-slate-200 rounded-lg p-3">
                                                        <h3 className="text-sm font-semibold text-slate-800">
                                                            {language === 'es' ? project.title || '' : project.titleEn || ''}
                                                        </h3>
                                                        <p className="text-emerald-600 text-xs mb-1">
                                                            {project.year} | {project.category}
                                                        </p>
                                                        <p className="text-slate-700 text-xs mb-1">
                                                            {language === 'es' ? project.description : project.descriptionEn}
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            <strong>{content[language].technologies}:</strong> {project.technologies.slice(0, 3).join(', ')}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column - 30% */}
                                    <div className="lg:col-span-3 space-y-6">
                                        {/* Personal Info */}
                                        <div className="bg-slate-50 rounded-lg p-4">
                                            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                                                <Globe size={16} className="mr-2" />
                                                {content[language].personalInfo}
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center space-x-2 text-xs">
                                                    <Mail size={12} className="text-emerald-600" />
                                                    <span className="text-slate-700">{personalInfo.email}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs">
                                                    <Phone size={12} className="text-emerald-600" />
                                                    <span className="text-slate-700">+34 654 91 75 04</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs">
                                                    <MapPin size={12} className="text-emerald-600" />
                                                    <span className="text-slate-700">{language === 'es' ? personalInfo.location : personalInfo.locationEn}</span>
                                                </div>
                                                <div className="flex items-center space-x-2 text-xs">
                                                    <Calendar size={12} className="text-emerald-600" />
                                                    <span className="text-slate-700">{personalInfo.yearsOfExperience}+ {content[language].years}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Education */}
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-emerald-500 pb-1 flex items-center">
                                                <GraduationCap size={16} className="mr-2" />
                                                {content[language].education}
                                            </h3>
                                            <div className="space-y-3">
                                                {education.slice(0, 2).map((edu, index) => (
                                                    <div key={index} className="border-l-2 border-emerald-500 pl-2">
                                                        <h4 className="text-xs font-semibold text-slate-800">
                                                            {language === 'es' ? edu.degree || '' : edu.degreeEn || ''}
                                                        </h4>
                                                        <p className="text-xs text-emerald-600">
                                                            {edu.institution}
                                                        </p>
                                                        <p className="text-xs text-slate-500">
                                                            {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-emerald-500 pb-1 flex items-center">
                                                <Code size={16} className="mr-2" />
                                                {content[language].technologies}
                                            </h3>
                                            <div className="space-y-3">
                                                {['frontend', 'backend', 'mobile', 'database', 'tools', 'cloud'].map(category => {
                                                    const categoryTechs = technologies.filter(tech => tech.category === category);
                                                    if (categoryTechs.length === 0) return null;

                                                    const categoryNames = {
                                                        es: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Bases de Datos', tools: 'Herramientas', cloud: 'Servicios Cloud' },
                                                        en: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Databases', tools: 'Tools', cloud: 'Cloud Services' }
                                                    };

                                                    return (
                                                        <div key={category} className="border border-slate-200 rounded-lg p-2">
                                                            <h4 className="font-semibold text-slate-800 mb-1 text-xs">
                                                                {categoryNames[language][category as keyof typeof categoryNames.es]}
                                                            </h4>
                                                            <div className="space-y-0.5">
                                                                {categoryTechs.slice(0, 4).map(tech => (
                                                                    <div key={tech.name} className="text-xs text-slate-700">
                                                                        {tech.name} <span className="text-emerald-600">({getLevelText(tech.level)})</span>
                                                                    </div>
                                                                ))}
                                                                {categoryTechs.length > 4 && (
                                                                    <div className="text-xs text-slate-500">
                                                                        +{categoryTechs.length - 4} más
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Skills Summary */}
                                        <div className="bg-emerald-50 rounded-lg p-3">
                                            <h3 className="text-base font-bold text-slate-800 mb-2 text-center">
                                                {content[language].skills}
                                            </h3>
                                            <div className="grid grid-cols-2 gap-2 text-center">
                                                <div>
                                                    <div className="text-lg font-bold text-emerald-600">
                                                        {personalInfo.yearsOfExperience}+
                                                    </div>
                                                    <div className="text-xs text-slate-600">
                                                        {content[language].years}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-emerald-600">
                                                        {featuredProjects.length}
                                                    </div>
                                                    <div className="text-xs text-slate-600">
                                                        {content[language].featured}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-emerald-600">
                                                        {technologies.length}
                                                    </div>
                                                    <div className="text-xs text-slate-600">
                                                        {content[language].technologies}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-lg font-bold text-emerald-600">
                                                        {personalInfo.languages.length}
                                                    </div>
                                                    <div className="text-xs text-slate-600">
                                                        {content[language].languages}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 