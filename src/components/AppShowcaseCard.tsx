'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AppData } from '@/data/apps-data';

interface AppShowcaseCardProps {
    app: AppData;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
}

export default function AppShowcaseCard({ app, index, isExpanded, onToggle }: AppShowcaseCardProps) {
    const [currentScreenshot, setCurrentScreenshot] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [imageLoading, setImageLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    // Auto-rotate screenshots when expanded
    useEffect(() => {
        if (!isExpanded || !isAutoPlaying || !app.screenshots?.length) return;

        const interval = setInterval(() => {
            setCurrentScreenshot((prev) => (prev + 1) % (app.screenshots?.length || 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [isExpanded, isAutoPlaying, app.screenshots?.length]);

    // Reset screenshot index when collapsing
    useEffect(() => {
        if (!isExpanded) {
            setCurrentScreenshot(0);
        }
    }, [isExpanded]);

    // Star rating component
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const stars = [];

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            } else if (i === fullStars && hasHalfStar) {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <defs>
                            <linearGradient id={`half-${app.id}-${i}`}>
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#d1d5db" />
                            </linearGradient>
                        </defs>
                        <path fill={`url(#half-${app.id}-${i})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    // Gradient colors based on app index
    const gradients = [
        'from-blue-500/20 to-cyan-500/20',
        'from-purple-500/20 to-pink-500/20',
        'from-orange-500/20 to-yellow-500/20',
        'from-green-500/20 to-emerald-500/20',
        'from-rose-500/20 to-red-500/20',
        'from-indigo-500/20 to-violet-500/20',
    ];

    const solidGradients = [
        'from-blue-500 to-cyan-500',
        'from-purple-500 to-pink-500',
        'from-orange-500 to-yellow-500',
        'from-green-500 to-emerald-500',
        'from-rose-500 to-red-500',
        'from-indigo-500 to-violet-500',
    ];

    const accentColors = [
        'border-blue-500/50 shadow-blue-500/20',
        'border-purple-500/50 shadow-purple-500/20',
        'border-orange-500/50 shadow-orange-500/20',
        'border-green-500/50 shadow-green-500/20',
        'border-rose-500/50 shadow-rose-500/20',
        'border-indigo-500/50 shadow-indigo-500/20',
    ];

    return (
        <motion.div
            layout
            className={`relative overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-500 ${isExpanded ? `${accentColors[index % accentColors.length]} shadow-2xl` : 'hover:border-border/80 hover:shadow-lg'
                }`}
        >
            {/* Background Gradient */}
            <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`}
                animate={{ opacity: isExpanded ? 0.7 : 0.5 }}
                transition={{ duration: 0.3 }}
            />

            <div className="relative z-10">
                {/* Collapsed State - Compact Card */}
                <motion.div
                    className={`p-5 sm:p-6 cursor-pointer ${isExpanded ? 'pb-4' : ''}`}
                    onClick={onToggle}
                >
                    <div className="flex items-start gap-3 sm:gap-4">
                        {/* App Icon */}
                        <motion.div
                            layout="position"
                            className={`flex-shrink-0 rounded-2xl bg-gradient-to-br ${solidGradients[index % solidGradients.length]} flex items-center justify-center border border-white/20 shadow-lg ${isExpanded ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-14 h-14 sm:w-16 sm:h-16'
                                }`}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                            <span className={`font-bold text-white drop-shadow-md ${isExpanded ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                                {app.name.charAt(0)}
                            </span>
                        </motion.div>

                        {/* App Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <motion.h3 layout="position" className="text-lg sm:text-xl font-semibold text-text-primary">
                                        {app.name}
                                    </motion.h3>
                                    {app.nameNative && (
                                        <p className="text-xs sm:text-sm text-text-muted mt-0.5">{app.nameNative}</p>
                                    )}
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-1.5 sm:p-2 rounded-full bg-surface-elevated hover:bg-border transition-colors"
                                >
                                    <motion.svg
                                        animate={{ rotate: isExpanded ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-5 h-5 text-text-secondary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </motion.button>
                            </div>

                            {/* Rating & Category */}
                            <div className="flex items-center gap-2 sm:gap-3 mt-2 flex-wrap">
                                <div className="flex items-center gap-1">
                                    {renderStars(app.rating)}
                                    <span className="text-text-secondary text-sm ml-1">{app.rating}</span>
                                </div>
                                <motion.span
                                    className="px-2 py-0.5 bg-surface-elevated rounded-full text-[10px] sm:text-xs text-text-muted"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {app.category}
                                </motion.span>
                                {app.downloads && (
                                    <span className="text-text-muted text-[10px] sm:text-xs flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        {app.downloads}
                                    </span>
                                )}
                            </div>

                            {!isExpanded && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-text-secondary text-sm mt-3 line-clamp-2"
                                >
                                    {app.shortDescription}
                                </motion.p>
                            )}
                        </div>
                    </div>
                </motion.div>

                {/* Expanded State - Full Details */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <div className="px-5 pb-5 sm:px-6 sm:pb-6 space-y-6">
                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-text-secondary leading-relaxed"
                                >
                                    {app.fullDescription}
                                </motion.p>

                                {/* Screenshots Carousel - Now with actual images */}
                                {app.screenshots && app.screenshots.length > 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="relative"
                                        onMouseEnter={() => setIsAutoPlaying(false)}
                                        onMouseLeave={() => setIsAutoPlaying(true)}
                                    >
                                        <div className="relative aspect-[9/16] max-h-[500px] w-auto mx-auto rounded-xl overflow-hidden bg-surface-elevated border border-border shadow-xl">
                                            <AnimatePresence mode="wait">
                                                <motion.div
                                                    key={currentScreenshot}
                                                    initial={{ opacity: 0, x: 100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -100 }}
                                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    {/* Shimmer loading effect */}
                                                    {imageLoading && !imageError && (
                                                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer" />
                                                    )}

                                                    {/* Actual screenshot image */}
                                                    <Image
                                                        src={app.screenshots[currentScreenshot]}
                                                        alt={`${app.name} screenshot ${currentScreenshot + 1}`}
                                                        fill
                                                        className={`object-contain transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
                                                        onLoad={() => setImageLoading(false)}
                                                        onError={() => {
                                                            setImageError(true);
                                                            setImageLoading(false);
                                                        }}
                                                        sizes="(max-width: 768px) 100vw, 400px"
                                                    />

                                                    {/* Error fallback */}
                                                    {imageError && (
                                                        <div className="w-full h-full bg-gradient-to-br from-surface-elevated to-border flex items-center justify-center">
                                                            <div className="text-center p-4">
                                                                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-surface flex items-center justify-center">
                                                                    <span className="text-2xl">📱</span>
                                                                </div>
                                                                <p className="text-text-muted text-sm">
                                                                    Screenshot {currentScreenshot + 1}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            </AnimatePresence>

                                            {/* Navigation Arrows */}
                                            <motion.button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setImageLoading(true);
                                                    setImageError(false);
                                                    setCurrentScreenshot((prev) =>
                                                        prev === 0 ? (app.screenshots?.length || 1) - 1 : prev - 1
                                                    );
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                                </svg>
                                            </motion.button>
                                            <motion.button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setImageLoading(true);
                                                    setImageError(false);
                                                    setCurrentScreenshot((prev) => (prev + 1) % (app.screenshots?.length || 1));
                                                }}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                                            >
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </motion.button>

                                            {/* Screenshot counter */}
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
                                                {currentScreenshot + 1} / {app.screenshots.length}
                                            </div>
                                        </div>

                                        {/* Dots Indicator */}
                                        <div className="flex justify-center gap-2 mt-4">
                                            {app.screenshots.map((_, idx) => (
                                                <motion.button
                                                    key={idx}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setImageLoading(true);
                                                        setImageError(false);
                                                        setCurrentScreenshot(idx);
                                                    }}
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentScreenshot
                                                        ? 'w-8 bg-accent'
                                                        : 'w-2 bg-border hover:bg-text-muted'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}

                                {/* Features List */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {app.features.slice(0, 6).map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.05 }}
                                                className="flex items-center gap-2 text-sm text-text-secondary p-2 rounded-lg hover:bg-white/50 transition-colors"
                                            >
                                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex flex-wrap gap-3 pt-2"
                                >
                                    <motion.a
                                        href={app.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 min-w-[200px] flex items-center justify-center gap-2 py-3 px-6 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/25 relative overflow-hidden group"
                                    >
                                        {/* Shimmer effect */}
                                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                        <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                        </svg>
                                        <span className="relative z-10">Get it on Google Play</span>
                                    </motion.a>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Link
                                            href={`/privacy-policy/${app.slug}`}
                                            onClick={(e) => e.stopPropagation()}
                                            className="py-3 px-6 bg-surface-elevated hover:bg-border text-text-secondary font-medium rounded-xl border border-border transition-colors inline-flex items-center gap-2"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Privacy Policy
                                        </Link>
                                    </motion.div>
                                </motion.div>

                                {/* Version Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-4 text-xs text-text-muted pt-2"
                                >
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        v{app.version}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {new Date(app.lastUpdated).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
