'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { publisherInfo } from '@/data/apps-data';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        appName: '',
        message: '',
    });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        try {
            // Create mailto link as fallback (works without backend)
            const subject = encodeURIComponent(
                `[${formData.subject || 'General Inquiry'}]${formData.appName ? ` - ${formData.appName}` : ''}: ${formData.name}`
            );
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject || 'General Inquiry'}\n${formData.appName ? `App: ${formData.appName}\n` : ''}\n\nMessage:\n${formData.message}`
            );

            // Open mailto link
            window.location.href = `mailto:${publisherInfo.email}?subject=${subject}&body=${body}`;

            // Show success after a brief delay
            setTimeout(() => {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', appName: '', message: '' });
            }, 500);
        } catch {
            setStatus('error');
            setErrorMessage('Something went wrong. Please try again or email us directly.');
        }
    };

    const resetForm = () => {
        setStatus('idle');
        setFormData({ name: '', email: '', subject: '', appName: '', message: '' });
        setErrorMessage('');
    };

    const subjects = [
        'General Inquiry',
        'App Support',
        'Bug Report',
        'Feature Request',
        'Business Inquiry',
        'Privacy Concern',
        'Other',
    ];

    const apps = [
        'Assamese English Translator',
        'Assamese Dictionary',
        'Barna Assamese Keyboard',
        'Burhi Aair Xadhu',
        'Assam News',
        'Assam TET Guide',
    ];

    return (
        <div className="min-h-screen bg-surface py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-heading">
                        Contact Us
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Have a question, feedback, or need support? We&apos;d love to hear from you.
                        Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-1 space-y-4"
                    >
                        {/* Email Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                            <a
                                href={`mailto:${publisherInfo.email}`}
                                className="text-accent hover:underline text-sm"
                            >
                                {publisherInfo.email}
                            </a>
                        </div>

                        {/* Play Store Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">Google Play</h3>
                            <a
                                href={publisherInfo.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 hover:underline text-sm"
                            >
                                View our apps →
                            </a>
                        </div>

                        {/* Response Time Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                            <p className="text-gray-500 text-sm">
                                We typically respond within 24-48 hours.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", delay: 0.2 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Ready!</h3>
                                        <p className="text-gray-600 mb-6">
                                            Your email client should have opened with your message.
                                            If not, please email us directly at {publisherInfo.email}
                                        </p>
                                        <button
                                            onClick={resetForm}
                                            className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-colors"
                                        >
                                            Send Another Message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {/* Name & Email */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Your Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                                    placeholder="John Doe"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                                                    placeholder="john@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        {/* Subject & App */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Subject
                                                </label>
                                                <select
                                                    id="subject"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                                                >
                                                    <option value="">Select a subject</option>
                                                    {subjects.map((subject) => (
                                                        <option key={subject} value={subject}>
                                                            {subject}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Related App
                                                </label>
                                                <select
                                                    id="appName"
                                                    name="appName"
                                                    value={formData.appName}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white"
                                                >
                                                    <option value="">Select an app (optional)</option>
                                                    {apps.map((app) => (
                                                        <option key={app} value={app}>
                                                            {app}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={5}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                                                placeholder="How can we help you?"
                                                required
                                            />
                                        </div>

                                        {/* Error Message */}
                                        <AnimatePresence>
                                            {status === 'error' && errorMessage && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                                                >
                                                    {errorMessage}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Submit Button */}
                                        <motion.button
                                            type="submit"
                                            disabled={status === 'submitting'}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
                                        >
                                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                            {status === 'submitting' ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    <span>Opening Email...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    <span>Send Message</span>
                                                </>
                                            )}
                                        </motion.button>

                                        <p className="text-xs text-gray-500 text-center">
                                            By clicking Send Message, your default email client will open with your message pre-filled.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
