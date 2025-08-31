'use client';

import { useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import { personalInfo, experience, education } from '@/data/personal';
import { projects } from '@/data/projects';
import { technologies } from '@/data/technologies';


function CVContent() {
    const containerRef = useRef<HTMLDivElement>(null);
    const params = useSearchParams();
    const language = (params.get('lang') as 'es' | 'en') || 'es';

    const featuredProjects = projects.filter(p => p.featured);

    const content = {
        es: {
            title: 'Curriculum Vitae',
            experience: 'Experiencia Laboral',
            education: 'Educación',
            projects: 'Proyectos Destacados',
            technologies: 'Tecnologías',
            skills: 'Habilidades',
            languages: 'Idiomas',
            personalInfo: 'Información Personal',
            years: 'años',
            current: 'Actual',
        },
        en: {
            title: 'Curriculum Vitae',
            experience: 'Work Experience',
            education: 'Education',
            projects: 'Featured Projects',
            technologies: 'Technologies',
            skills: 'Skills',
            languages: 'Languages',
            personalInfo: 'Personal Information',
            years: 'years',
            current: 'Current',
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
        <div className="min-h-screen bg-slate-900 py-6 print:bg-white print:py-0">
            <div className="max-w-5xl mx-auto mb-4 px-4 flex items-center justify-between text-slate-200 print:hidden">
                <h1 className="text-xl font-semibold">{content[language].title}</h1>
                <a
                    href={`/api/cv-pdf?lang=${language}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600"
                >
                    {language === 'es' ? 'Descargar PDF' : 'Download PDF'}
                </a>
            </div>

            {/* A4 canvas - 210mm x 297mm */}
            <div className="bg-white shadow-2xl mx-auto print:shadow-none print:mx-0 print:w-full" style={{ width: '210mm' }}>
                <div ref={containerRef} className="p-6 print:p-4" style={{ width: '210mm', minHeight: '297mm' }}>
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-slate-800 mb-1">{personalInfo.name}</h2>
                        <p className="text-slate-600">{language === 'es' ? personalInfo.title : personalInfo.titleEn}</p>
                        <div className="mt-3 flex justify-center space-x-6 text-sm text-slate-500">
                            <span className="flex items-baseline">
                                <span className="mr-1">✉</span>
                                <span>{personalInfo.email}</span>
                            </span>
                            <span className="flex items-baseline">
                                <span className="mr-1">📞</span>
                                <span>+34 654 91 75 04</span>
                            </span>
                            <span className="flex items-baseline">
                                <span className="mr-1">📍</span>
                                <span>{language === 'es' ? personalInfo.location : personalInfo.locationEn}</span>
                            </span>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-10 gap-4">
                        {/* Left 7/10 */}
                        <div className="col-span-7 space-y-4">
                            {/* About */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-2 border-b-2 border-emerald-500 pb-1 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">ℹ</span>
                                    {language === 'es' ? 'Sobre mí' : 'About me'}
                                </h3>
                                <p className="text-xs text-slate-700 leading-tight">{language === 'es' ? personalInfo.about : personalInfo.aboutEn}</p>
                            </div>

                            {/* Experience */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-2 border-b-2 border-emerald-500 pb-1 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">💼</span>
                                    {content[language].experience}
                                </h3>
                                <div className="space-y-2">
                                    {experience.map((exp) => (
                                        <div key={exp.id} className="border-l-2 border-emerald-500 pl-2">
                                            <div className="text-[13px] font-semibold text-slate-800 leading-none">{language === 'es' ? exp.position : exp.positionEn}</div>
                                            <div className="text-[11px] text-emerald-600">{exp.company} | {formatDate(exp.startDate)} - {exp.current ? content[language].current : formatDate(exp.endDate || '')}</div>
                                            <div className="text-[11px] text-slate-700 leading-tight">{language === 'es' ? exp.description : exp.descriptionEn}</div>
                                            <div className="mt-1 flex flex-wrap gap-1">
                                                {exp.technologies.slice(0, 4).map(t => (
                                                    <span key={t} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-[3px] rounded border border-slate-200 font-medium inline-block">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Projects */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800 mb-2 border-b-2 border-emerald-500 pb-1 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">⚡</span>
                                    {content[language].projects}
                                </h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {featuredProjects.slice(0, 6).map((project) => (
                                        <div key={project.id} className="border border-slate-200 rounded p-2">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <div className="text-xs font-semibold text-slate-800 leading-none">{language === 'es' ? project.title : project.titleEn}</div>
                                                {project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:text-blue-800 text-[10px] ml-1"
                                                        title={language === 'es' ? 'Ver proyecto' : 'View project'}
                                                    >
                                                        🔗
                                                    </a>
                                                )}
                                            </div>
                                            <div className="text-[10px] text-emerald-600 mb-0.5">{project.year} | {project.category}</div>
                                            <div className="text-[10px] text-slate-700 leading-tight mb-1">{language === 'es' ? project.description : project.descriptionEn}</div>
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologies.slice(0, 3).map(tech => (
                                                    <span key={tech} className="bg-slate-100 text-slate-700 text-[9px] px-1.5 py-[2px] rounded border border-slate-200 font-medium inline-block">{tech}</span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="bg-slate-200 text-slate-600 text-[9px] px-1.5 py-[2px] rounded font-medium inline-block">+{project.technologies.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right 3/10 */}
                        <div className="col-span-3 space-y-4">
                            {/* Personal Info */}
                            <div className="bg-slate-50 rounded p-3">
                                <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">👤</span>
                                    {content[language].personalInfo}
                                </h4>
                                <div className="space-y-1 text-[11px] text-slate-700">
                                    <div className="flex items-baseline">
                                        <span className="mr-2 text-emerald-600 w-4 text-center">✉</span>
                                        <span>{personalInfo.email}</span>
                                    </div>
                                    <div className="flex items-baseline">
                                        <span className="mr-2 text-emerald-600 w-4 text-center">📞</span>
                                        <span>+34 654 91 75 04</span>
                                    </div>
                                    <div className="flex items-baseline">
                                        <span className="mr-2 text-emerald-600 w-4 text-center">📍</span>
                                        <span>{language === 'es' ? personalInfo.location : personalInfo.locationEn}</span>
                                    </div>
                                    <div className="flex items-baseline">
                                        <span className="mr-2 text-emerald-600 w-4 text-center">📅</span>
                                        <span>{personalInfo.yearsOfExperience}+ {content[language].years}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 mb-2 border-b border-emerald-500 pb-1 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">🎓</span>
                                    {content[language].education}
                                </h4>
                                <div className="space-y-2">
                                    {education.slice(0, 2).map(edu => (
                                        <div key={edu.id} className="border-l-2 border-emerald-500 pl-2">
                                            <div className="text-[11px] font-semibold text-slate-800 leading-none">{language === 'es' ? edu.degree : edu.degreeEn}</div>
                                            <div className="text-[10px] text-emerald-600">{edu.institution}</div>
                                            <div className="text-[10px] text-slate-500">{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div>
                                <h4 className="text-sm font-bold text-slate-800 mb-2 border-b border-emerald-500 pb-1 flex items-center gap-2">
                                    <span className="w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">⚙️</span>
                                    {content[language].technologies}
                                </h4>
                                <div className="space-y-2">
                                    {['frontend', 'backend', 'mobile', 'database', 'tools', 'cloud'].map(category => {
                                        const categoryTechs = technologies.filter(t => t.category === category);
                                        if (categoryTechs.length === 0) return null;
                                        const names = {
                                            es: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Bases de Datos', tools: 'Herramientas', cloud: 'Servicios Cloud' },
                                            en: { frontend: 'Frontend', backend: 'Backend', mobile: 'Mobile & Games', database: 'Databases', tools: 'Tools', cloud: 'Cloud Services' }
                                        };
                                        return (
                                            <div key={category} className="border border-slate-200 rounded p-2">
                                                <div className="text-[11px] font-semibold text-slate-800 mb-1">{names[language][category as keyof typeof names.es]}</div>
                                                <div className="flex flex-wrap gap-1">
                                                    {categoryTechs.slice(0, 6).map(tech => (
                                                        <span key={tech.name} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-[3px] rounded border border-slate-200 font-medium inline-block">{tech.name}</span>
                                                    ))}
                                                    {categoryTechs.length > 6 && (
                                                        <span className="bg-slate-200 text-slate-600 text-[10px] px-2 py-[3px] rounded font-medium inline-block">+{categoryTechs.length - 6}</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CVPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-white text-lg">Cargando CV...</div>
            </div>
        }>
            <CVContent />
        </Suspense>
    );
}


