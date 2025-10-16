'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
    language: 'es' | 'en';
}

export default function CVModal({ isOpen, onClose, language }: CVModalProps) {
    const content = {
        es: {
            title: 'Curriculum Vitae',
            download: 'Descargar PDF',
            viewCV: 'Ver CV',
            close: 'Cerrar'
        },
        en: {
            title: 'Curriculum Vitae',
            download: 'Download PDF',
            viewCV: 'View CV',
            close: 'Close'
        }
    };

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
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="p-2 text-slate-500 hover:text-slate-700 transition-colors"
                            >
                                <X size={24} />
                            </motion.button>
                        </div>

                        {/* Content - Two buttons */}
                        <div className="p-12 bg-white flex flex-col items-center justify-center space-y-6">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                                    {language === 'es' ? '¿Qué te gustaría hacer?' : 'What would you like to do?'}
                                </h3>
                                <p className="text-slate-600">
                                    {language === 'es'
                                        ? 'Puedes ver el CV en pantalla completa o descargarlo directamente en PDF.'
                                        : 'You can view the CV in full screen or download it directly as PDF.'}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`/cv?lang=${language}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 text-slate-800 rounded-lg font-semibold hover:bg-slate-200 transition-colors border border-slate-300"
                                >
                                    <span>👁️</span>
                                    <span>{content[language].viewCV}</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={`/cvs/CV_Hector_Martin_${language.toUpperCase()}.pdf`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                                >
                                    <Download size={16} />
                                    <span>{content[language].download}</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 