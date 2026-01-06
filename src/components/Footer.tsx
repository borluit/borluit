'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { publisherInfo, appsData } from '@/data/apps-data';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <footer className="bg-white pt-16 pb-12 relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <motion.div
                className="max-w-7xl mx-auto px-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-accent/20"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                B
                            </motion.div>
                            <span className="font-bold text-xl text-gray-900 group-hover:text-accent transition-colors">
                                {publisherInfo.name}
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            {publisherInfo.tagline}. {publisherInfo.description}
                            <br />
                            Building standard apps for the Assamese community.
                        </p>
                        <motion.a
                            href={`mailto:${publisherInfo.email}`}
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm transition-colors group"
                            whileHover={{ x: 5 }}
                        >
                            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            <span>{publisherInfo.email}</span>
                            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <motion.a
                                href={publisherInfo.playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white flex items-center justify-center text-gray-600 transition-all"
                                aria-label="Google Play Store"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                href={`mailto:${publisherInfo.email}`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white flex items-center justify-center text-gray-600 transition-all"
                                aria-label="Email"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Apps */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </span>
                            Apps
                        </h3>
                        <ul className="space-y-3">
                            {appsData.slice(0, 5).map((app, idx) => (
                                <motion.li
                                    key={app.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <a
                                        href={app.playStoreUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-accent transition-colors"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">{app.name}</span>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-gray-900 font-bold mb-6 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-md bg-accent/10 flex items-center justify-center">
                                <svg className="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </span>
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {appsData.slice(0, 4).map((app, idx) => (
                                <motion.li
                                    key={app.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                >
                                    <Link
                                        href={`/privacy-policy/${app.slug}`}
                                        className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-accent transition-colors"></span>
                                        <span className="group-hover:translate-x-1 transition-transform">{app.name} Privacy</span>
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Link
                                    href="/data-deletion"
                                    className="text-gray-500 hover:text-accent text-sm transition-colors flex items-center gap-2 group"
                                >
                                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-accent transition-colors"></span>
                                    <span className="group-hover:translate-x-1 transition-transform">Data Deletion</span>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={itemVariants}
                    className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                        © {currentYear} {publisherInfo.name}. Made with
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-red-500"
                        >
                            ❤️
                        </motion.span>
                        in Assam
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/contact"
                            className="text-sm text-gray-500 hover:text-accent transition-colors hover-underline"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/privacy-policy"
                            className="text-sm text-gray-500 hover:text-accent transition-colors hover-underline"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-sm text-gray-500 hover:text-accent transition-colors hover-underline"
                        >
                            Terms of Use
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
