'use client';

import { motion } from 'framer-motion';
import { appsData } from '@/data/apps-data';
import AppCard from './AppCard';

export default function AppGrid() {
    return (
        <section id="apps" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                        Our Apps
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Explore our collection of apps designed to help you learn, communicate, and stay connected with Assamese language and culture.
                    </p>
                </motion.div>

                {/* App Grid - Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {appsData.map((app, index) => (
                        <AppCard key={app.id} app={app} index={index} />
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    <div className="bg-surface border border-border rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">{appsData.length}</div>
                        <div className="text-text-muted text-sm">Published Apps</div>
                    </div>
                    <div className="bg-surface border border-border rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">200K+</div>
                        <div className="text-text-muted text-sm">Total Downloads</div>
                    </div>
                    <div className="bg-surface border border-border rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">4.1</div>
                        <div className="text-text-muted text-sm">Average Rating</div>
                    </div>
                    <div className="bg-surface border border-border rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-gradient mb-1">3K+</div>
                        <div className="text-text-muted text-sm">Happy Users</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
