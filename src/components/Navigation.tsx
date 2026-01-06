'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { publisherInfo } from '@/data/apps-data';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Apps', href: '/#apps' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy', href: '/privacy-policy' },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: '100%',
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
            },
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const linkVariants = {
        closed: { opacity: 0, x: 20 },
        open: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.1 + i * 0.1,
                duration: 0.3,
            },
        }),
    };

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20"
                            >
                                B
                            </motion.div>
                            <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-text-primary' : 'text-text-primary'
                                }`}>
                                {publisherInfo.name}
                            </span>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-text-secondary hover:text-accent font-medium transition-colors group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}

                            <motion.a
                                href={publisherInfo.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40"
                            >
                                Download
                            </motion.a>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="md:hidden p-2 text-text-secondary hover:text-accent z-50 relative"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            <div className="w-6 h-5 relative flex flex-col justify-between">
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        y: isMobileMenuOpen ? 8 : 0
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                                />
                                <motion.span
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                        x: isMobileMenuOpen ? 20 : 0
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full transition-all"
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        y: isMobileMenuOpen ? -8 : 0
                                    }}
                                    className="w-full h-0.5 bg-current rounded-full origin-left transition-all"
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white shadow-2xl z-40 md:hidden"
                        >
                            <div className="flex flex-col h-full pt-24 px-6 pb-8">
                                {/* Navigation Links */}
                                <div className="flex-1 space-y-2">
                                    {navLinks.map((link, i) => (
                                        <motion.div
                                            key={link.name}
                                            custom={i}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-4 px-4 text-lg font-medium text-text-primary hover:text-accent hover:bg-surface rounded-xl transition-all"
                                            >
                                                {link.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <motion.div
                                    custom={navLinks.length}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                >
                                    <a
                                        href={publisherInfo.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-3 w-full py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all shadow-lg shadow-accent/25"
                                    >
                                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                        </svg>
                                        Download on Play Store
                                    </a>
                                </motion.div>

                                {/* Publisher Info */}
                                <motion.div
                                    custom={navLinks.length + 1}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    className="mt-8 pt-6 border-t border-border"
                                >
                                    <p className="text-sm text-text-muted text-center">
                                        {publisherInfo.tagline}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
