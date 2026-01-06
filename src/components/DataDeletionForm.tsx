'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function DataDeletionForm() {
    const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        // Construct mailto link
        const subject = `Data Deletion Request: ${data.appName}`;
        const body = `Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0AApp: ${data.appName}%0D%0AReason: ${data.reason}`;

        window.location.href = `mailto:contact@borluit.dev?subject=${encodeURIComponent(subject)}&body=${body}`;
        setStatus('submitted');
    };

    if (status === 'submitted') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-8 bg-green-50 rounded-2xl border border-green-100"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Request Started</h3>
                <p className="text-gray-600">
                    Your email client should have opened with the deletion request details. Please send the email to complete the request.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-accent hover:text-accent-hover font-medium underline"
                >
                    Submit another request
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-2">App Name</label>
                <select
                    id="appName"
                    name="appName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                >
                    <option value="">Select an app</option>
                    <option value="Assam GK">Assam GK</option>
                    <option value="Assamese Keyboard">Assamese Keyboard</option>
                    <option value="Assamese Dictionary">Assamese Dictionary</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason for Deletion (Optional)</label>
                <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all bg-white/50 backdrop-blur-sm"
                    placeholder="Why do you want to delete your data?"
                ></textarea>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-accent text-white rounded-xl font-semibold shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Request Data Deletion
            </motion.button>

            <p className="text-xs text-center text-gray-500 mt-4">
                By submitting this form, you will be redirected to your email client to send the formal request.
                We process all deletion requests within 30 days.
            </p>
        </form>
    );
}
