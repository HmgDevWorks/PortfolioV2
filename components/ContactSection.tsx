'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '@/data/personal';

// Información de contacto adicional
const contactInfo = {
    phone: '+34 654 91 75 04',
    email: 'HmgDevWorks@gmail.com',
    location: 'España',
    locationEn: 'Spain',
    drivingLicense: 'Carnet de conducir B1'
};

interface ContactSectionProps {
    language: 'es' | 'en';
}

export default function ContactSection({ language }: ContactSectionProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const content = {
        es: {
            title: 'Contacto',
            subtitle: '¿Tienes un proyecto en mente? ¡Hablemos!',
            form: {
                name: 'Nombre',
                email: 'Email',
                subject: 'Asunto',
                message: 'Mensaje',
                send: 'Enviar Mensaje',
                sending: 'Enviando...',
                success: '¡Mensaje enviado con éxito!',
                error: 'Error al enviar el mensaje. Inténtalo de nuevo.',
                required: 'Este campo es requerido',
                invalidEmail: 'Email inválido'
            },
            contactInfo: {
                title: 'Información de Contacto',
                available: 'Disponible para proyectos',
                response: 'Respuesta en 24h'
            }
        },
        en: {
            title: 'Contact',
            subtitle: 'Have a project in mind? Let\'s talk!',
            form: {
                name: 'Name',
                email: 'Email',
                subject: 'Subject',
                message: 'Message',
                send: 'Send Message',
                sending: 'Sending...',
                success: 'Message sent successfully!',
                error: 'Error sending message. Please try again.',
                required: 'This field is required',
                invalidEmail: 'Invalid email'
            },
            contactInfo: {
                title: 'Contact Information',
                available: 'Available for projects',
                response: 'Response in 24h'
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (!formData.name.trim()) return false;
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) return false;
        if (!formData.message.trim()) return false;
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setSubmitStatus('error');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Aquí implementarías la lógica de envío del formulario
            // Por ejemplo, usando una API route de Next.js
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-900">
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

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-white font-medium mb-2">
                                        {content[language].form.name} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                                        placeholder={content[language].form.name}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-white font-medium mb-2">
                                        {content[language].form.email} *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                                        placeholder={content[language].form.email}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-white font-medium mb-2">
                                    {content[language].form.subject}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                                    placeholder={content[language].form.subject}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    {content[language].form.message} *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                                    placeholder={content[language].form.message}
                                />
                            </div>

                            {/* Submit Status */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center space-x-2 text-emerald-400"
                                >
                                    <CheckCircle size={20} />
                                    <span>{content[language].form.success}</span>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center space-x-2 text-red-400"
                                >
                                    <AlertCircle size={20} />
                                    <span>{content[language].form.error}</span>
                                </motion.div>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg py-4 font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                <Send size={20} />
                                <span>
                                    {isSubmitting ? content[language].form.sending : content[language].form.send}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">
                                {content[language].contactInfo.title}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <Mail size={24} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">Email</p>
                                        <a
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <Phone size={24} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">
                                            {language === 'es' ? 'Teléfono' : 'Phone'}
                                        </p>
                                        <a
                                            href={`tel:${contactInfo.phone}`}
                                            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
                                        >
                                            {contactInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                                        <MapPin size={24} className="text-emerald-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">
                                            {language === 'es' ? 'Ubicación' : 'Location'}
                                        </p>
                                        <p className="text-slate-400">
                                            {language === 'es' ? contactInfo.location : contactInfo.locationEn}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-slate-800 rounded-lg p-6">
                            <h4 className="text-lg font-semibold text-white mb-4">
                                {content[language].contactInfo.available}
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-slate-300">
                                        {content[language].contactInfo.response}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-slate-300">
                                        {language === 'es' ? 'Proyectos freelance' : 'Freelance projects'}
                                    </span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                                    <span className="text-slate-300">
                                        {language === 'es' ? 'Colaboraciones' : 'Collaborations'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">
                                {language === 'es' ? 'Sígueme' : 'Follow me'}
                            </h4>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 