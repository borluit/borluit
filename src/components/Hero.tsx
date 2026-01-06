'use client';

import { motion } from 'framer-motion';
import { publisherInfo } from '@/data/apps-data';
import { useEffect, useState } from 'react';

// Floating particle component
function FloatingParticle({ delay, duration, size, left, top }: {
    delay: number;
    duration: number;
    size: number;
    left: string;
    top: string;
}) {
    return (
        <motion.div
            className="absolute rounded-full bg-gradient-to-br from-accent/30 to-secondary/30"
            style={{ width: size, height: size, left, top }}
            animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate particles only on client side
    const particles = mounted ? [
        { delay: 0, duration: 6, size: 8, left: '10%', top: '20%' },
        { delay: 1, duration: 8, size: 12, left: '80%', top: '15%' },
        { delay: 2, duration: 7, size: 6, left: '70%', top: '60%' },
        { delay: 0.5, duration: 9, size: 10, left: '20%', top: '70%' },
        { delay: 1.5, duration: 6, size: 14, left: '90%', top: '40%' },
        { delay: 2.5, duration: 8, size: 8, left: '5%', top: '50%' },
        { delay: 3, duration: 7, size: 16, left: '50%', top: '10%' },
        { delay: 0.8, duration: 10, size: 6, left: '35%', top: '85%' },
    ] : [];

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Animated Background Gradient */}
            <motion.div
                className="absolute inset-0 -z-10"
                animate={{
                    background: [
                        'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(79, 70, 229, 0.05) 100%)',
                        'linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, rgba(79, 70, 229, 0.08) 50%, rgba(236, 72, 153, 0.05) 100%)',
                        'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(236, 72, 153, 0.08) 50%, rgba(79, 70, 229, 0.05) 100%)',
                    ],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle, idx) => (
                <FloatingParticle key={idx} {...particle} />
            ))}

            {/* Organic Shapes Background */}
            <motion.div
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8"
                        >
                            <motion.span
                                className="w-2 h-2 bg-accent rounded-full"
                                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                            <span className="text-sm font-medium text-accent">#1 Educational Apps in Assam</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-6 font-heading">
                            Best Apps for <br />
                            <motion.span
                                className="text-gradient inline-block"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    backgroundSize: '200% 200%',
                                    background: 'linear-gradient(135deg, #4f46e5, #ec4899, #4f46e5)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                Assamese People
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            {publisherInfo.tagline}. {publisherInfo.description}
                            Experience the best of Assamese culture, language, and utility tools right on your smartphone.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <motion.a
                                href={publisherInfo.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-semibold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                {/* Shimmer effect */}
                                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                                <span className="relative z-10">Download on Play Store</span>
                            </motion.a>
                            <motion.a
                                href="#apps"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-semibold transition-all border border-gray-200 hover:border-accent/30 flex items-center justify-center gap-2 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                View All Apps
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image/Mockup Content - Fixed animation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Phone Container - Uses transform on inner content only */}
                        <div className="relative w-[300px] h-[600px] mx-auto">
                            {/* Phone Frame - Static, no animation on this */}
                            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-800 overflow-hidden">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-2xl z-20"></div>

                                {/* Screen Content - Animation only on gradient, not container */}
                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                                    {/* Animated Gradient Background */}
                                    <motion.div
                                        className="absolute inset-0"
                                        animate={{
                                            background: [
                                                'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
                                                'linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #4f46e5 100%)',
                                                'linear-gradient(135deg, #ec4899 0%, #4f46e5 50%, #7c3aed 100%)',
                                                'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
                                            ],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />

                                    {/* Pattern Overlay */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-10"></div>

                                    {/* Content */}
                                    <div className="relative z-20 flex flex-col items-center">
                                        <motion.div
                                            className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-6 flex items-center justify-center shadow-lg"
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px rgba(255,255,255,0.2)',
                                                    '0 0 40px rgba(255,255,255,0.4)',
                                                    '0 0 20px rgba(255,255,255,0.2)',
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <span className="text-4xl font-bold">B</span>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold mb-2 text-center">Borluit.dev</h3>
                                        <div className="w-full h-2 bg-white/20 rounded-full mb-2"></div>
                                        <div className="w-2/3 h-2 bg-white/20 rounded-full"></div>

                                        {/* Fake UI Elements */}
                                        <div className="mt-8 w-full grid grid-cols-2 gap-3">
                                            {[0, 1, 2, 3].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="h-24 bg-white/10 rounded-xl backdrop-blur-sm"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.5 + i * 0.1 }}
                                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Cards behind phone with glass effect */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-20 right-10 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 z-30"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </motion.div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800">Verified</div>
                                    <div className="text-xs text-gray-500">Play Store</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-32 left-0 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 z-30"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </motion.div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800">4.5+ Rating</div>
                                    <div className="text-xs text-gray-500">User Reviews</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Downloads floating card */}
                        <motion.div
                            animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            className="absolute top-1/2 -left-8 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 z-30"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
                                    animate={{ scale: [1, 1.15, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </motion.div>
                                <div>
                                    <div className="text-sm font-bold text-gray-800">200K+</div>
                                    <div className="text-xs text-gray-500">Downloads</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Wave SVG Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
                    <path fill="#f8f9fa" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1440,112L1440,320L1344,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320L96,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
}
