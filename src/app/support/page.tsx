'use client';

import { useState } from 'react';
import Link from 'next/link';
import { publisherInfo, appsData } from '@/data/apps-data';

export default function SupportPage() {
    const [selectedApp, setSelectedApp] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const appName = selectedApp ? appsData.find(app => app.id === selectedApp)?.name || '' : 'General';
        const emailSubject = encodeURIComponent(`[${appName}] ${subject}`);
        const emailBody = encodeURIComponent(`App: ${appName}\n\n${message}`);

        window.location.href = `mailto:${publisherInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary text-sm mb-6 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>

                    <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
                        Support
                    </h1>
                    <p className="text-text-secondary mt-2">
                        Need help? We&apos;re here for you.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-surface border border-border rounded-xl p-6">
                        <h2 className="text-xl font-semibold text-text-primary mb-6">Send us a message</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-text-secondary text-sm mb-2">
                                    Select App (Optional)
                                </label>
                                <select
                                    value={selectedApp}
                                    onChange={(e) => setSelectedApp(e.target.value)}
                                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent transition-colors"
                                >
                                    <option value="">General Inquiry</option>
                                    {appsData.map((app) => (
                                        <option key={app.id} value={app.id}>
                                            {app.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-text-secondary text-sm mb-2">
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    placeholder="Brief description of your issue"
                                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-text-secondary text-sm mb-2">
                                    Message *
                                </label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows={5}
                                    placeholder="Describe your issue or feedback in detail..."
                                    className="w-full px-4 py-3 bg-surface-elevated border border-border rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors"
                            >
                                Send via Email
                            </button>
                        </form>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        {/* Direct Email */}
                        <div className="bg-surface border border-border rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-text-primary mb-3">Direct Email</h3>
                            <p className="text-text-secondary text-sm mb-4">
                                Prefer to email us directly? Reach out anytime.
                            </p>
                            <a
                                href={`mailto:${publisherInfo.email}`}
                                className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {publisherInfo.email}
                            </a>
                        </div>

                        {/* FAQ */}
                        <div className="bg-surface border border-border rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-text-primary mb-4">Common Questions</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-text-primary font-medium mb-1">App not working properly?</h4>
                                    <p className="text-text-secondary text-sm">
                                        Try clearing the app cache, updating to the latest version, or reinstalling the app.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-medium mb-1">Want a feature added?</h4>
                                    <p className="text-text-secondary text-sm">
                                        We love hearing your ideas! Send us your feature requests via the form.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-text-primary font-medium mb-1">Found a bug?</h4>
                                    <p className="text-text-secondary text-sm">
                                        Please include your device model and Android version when reporting bugs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Play */}
                        <div className="bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-text-primary mb-3">Rate Our Apps</h3>
                            <p className="text-text-secondary text-sm mb-4">
                                Love our apps? Leave a review on Google Play to help others discover them!
                            </p>
                            <a
                                href={publisherInfo.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                View on Google Play
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
