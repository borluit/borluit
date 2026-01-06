'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { appsData, AppData } from '@/data/apps-data';

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!shouldStart) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, shouldStart]);

    return count;
}

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const count = useCountUp(value, 2000, isInView);

    return <span ref={ref}>{count}{suffix}</span>;
}

// App Grid Card with auto-rotating screenshots
function AppGridCard({ app, index }: { app: AppData; index: number }) {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-rotate screenshots
    useEffect(() => {
        if (!app.screenshots?.length) return;

        const interval = setInterval(() => {
            setCurrentScreenshot((prev) => (prev + 1) % (app.screenshots?.length || 1));
        }, 3000 + index * 500); // Stagger timing for visual interest

        return () => clearInterval(interval);
    }, [app.screenshots?.length, index]);

    const gradients = [
        'from-blue-500 to-cyan-400',
        'from-purple-500 to-pink-400',
        'from-orange-500 to-yellow-400',
        'from-green-500 to-emerald-400',
        'from-rose-500 to-red-400',
        'from-indigo-500 to-violet-400',
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
        >
            {/* Screenshot Carousel */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                {app.screenshots && app.screenshots.length > 0 ? (
                    <>
                        {app.screenshots.map((screenshot, idx) => (
                            <motion.div
                                key={idx}
                                className="absolute inset-0 flex items-center justify-center"
                                initial={false}
                                animate={{
                                    opacity: idx === currentScreenshot ? 1 : 0,
                                    scale: idx === currentScreenshot ? 1 : 1.1,
                                    rotateY: idx === currentScreenshot ? 0 : -10,
                                }}
                                transition={{
                                    opacity: { duration: 0.5 },
                                    scale: { duration: 0.7, ease: "easeOut" },
                                    rotateY: { duration: 0.5 },
                                }}
                            >
                                <div className="relative w-32 h-56 sm:w-36 sm:h-64 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={screenshot}
                                        alt={`${app.name} screenshot ${idx + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 150px, 180px"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {/* Screenshot Indicators */}
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {app.screenshots.map((_, idx) => (
                                <motion.div
                                    key={idx}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentScreenshot
                                            ? 'w-4 bg-accent'
                                            : 'w-1.5 bg-gray-300'
                                        }`}
                                    animate={{ scale: idx === currentScreenshot ? 1 : 0.8 }}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                            {app.name.charAt(0)}
                        </div>
                    </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
            </div>

            {/* App Info */}
            <div className="p-5">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0`}>
                        {app.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 truncate">{app.name}</h3>
                        {app.nameNative && (
                            <p className="text-xs text-gray-500 truncate">{app.nameNative}</p>
                        )}
                    </div>
                </div>

                {/* Rating & Category */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{app.rating}</span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">{app.category}</span>
                    {app.downloads && (
                        <>
                            <span className="text-gray-300">•</span>
                            <span className="text-xs text-gray-500">{app.downloads}</span>
                        </>
                    )}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{app.shortDescription}</p>

                {/* Action Button */}
                <motion.a
                    href={app.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-xl transition-all relative overflow-hidden group/btn"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Get on Play Store
                </motion.a>

                {/* Privacy Link */}
                <Link
                    href={`/privacy-policy/${app.slug}`}
                    className="block text-center text-xs text-gray-400 hover:text-accent mt-2 transition-colors"
                >
                    Privacy Policy
                </Link>
            </div>

            {/* Hover Glow Effect */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
            />
        </motion.div>
    );
}

export default function AppShowcase() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Education', 'Tools', 'Books & Reference', 'News & Magazines'];

    const filteredApps = activeCategory === 'All'
        ? appsData
        : appsData.filter(app => app.category === activeCategory);

    return (
        <section id="apps" className="py-20 lg:py-32 px-4 relative overflow-hidden bg-surface">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white/40 rounded-full blur-3xl -translate-y-1/2"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl translate-y-1/2"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 bg-white border border-gray-200 rounded-full text-accent text-sm font-semibold mb-6 shadow-sm"
                    >
                        Our Collection
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-heading">
                        Explore Our <span className="text-gradient">Premium Apps</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
                        Crafted with care for the Assamese community. Each app is designed to help you
                        learn, communicate, and stay connected with your language and culture.
                    </p>
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category) => {
                        const count = category === 'All'
                            ? appsData.length
                            : appsData.filter(a => a.category === category).length;

                        return (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-accent text-white shadow-lg shadow-accent/25'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 shadow-sm'
                                    }`}
                            >
                                {category}
                                {activeCategory === category && count > 0 && (
                                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white/20 rounded-full">
                                        {count}
                                    </span>
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Apps Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredApps.map((app, index) => (
                        <AppGridCard key={app.id} app={app} index={index} />
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredApps.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No apps found</h3>
                        <p className="text-gray-500">No apps in the &quot;{activeCategory}&quot; category yet.</p>
                    </motion.div>
                )}

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { value: appsData.length, label: 'Published Apps', icon: '📱', suffix: '' },
                        { value: 200, label: 'Total Downloads', icon: '⬇️', suffix: 'K+' },
                        { value: 4.5, label: 'Average Rating', icon: '⭐', suffix: '', isDecimal: true },
                        { value: 50, label: 'Active Users', icon: '👥', suffix: 'K+' },
                    ].map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center transition-all duration-300"
                        >
                            <motion.span
                                className="text-3xl mb-3 block"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                            >
                                {stat.icon}
                            </motion.span>
                            <div className="text-3xl font-bold text-gray-900 mb-1 font-heading">
                                {stat.isDecimal ? (
                                    <>{stat.value}</>
                                ) : (
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                )}
                            </div>
                            <div className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Wave SVG Bottom */}
            <div className="absolute bottom-0 left-0 right-0 translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1440,208L1440,320L1344,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320L96,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
