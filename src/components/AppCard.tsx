'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import { AppData } from '@/data/apps-data';

interface AppCardProps {
    app: AppData;
    index: number;
}

export default function AppCard({ app, index }: AppCardProps) {
    // 3D Tilt effect values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

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
                            <linearGradient id={`half-${app.id}`}>
                                <stop offset="50%" stopColor="currentColor" />
                                <stop offset="50%" stopColor="#4B5563" />
                            </linearGradient>
                        </defs>
                        <path fill={`url(#half-${app.id})`} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                );
            }
        }
        return stars;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative group"
        >
            <div
                className="relative bg-surface border border-border rounded-2xl p-6 transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-lg group-hover:shadow-accent/10"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Shine effect on hover */}
                <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, transparent 50%)',
                        transform: 'translateZ(1px)',
                    }}
                />

                {/* App Icon */}
                <div className="flex items-start gap-4 mb-4" style={{ transform: 'translateZ(20px)' }}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-accent border border-accent/20">
                        {app.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-text-primary truncate">
                            {app.name}
                        </h3>
                        {app.nameNative && (
                            <p className="text-sm text-text-muted truncate">{app.nameNative}</p>
                        )}
                        <span className="inline-block mt-1 px-2 py-0.5 bg-surface-elevated rounded text-xs text-text-muted">
                            {app.category}
                        </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm mb-4 line-clamp-2" style={{ transform: 'translateZ(10px)' }}>
                    {app.shortDescription}
                </p>

                {/* Rating & Downloads */}
                <div className="flex items-center gap-4 mb-4" style={{ transform: 'translateZ(10px)' }}>
                    <div className="flex items-center gap-1">
                        {renderStars(app.rating)}
                        <span className="text-text-secondary text-sm ml-1">{app.rating}</span>
                    </div>
                    {app.downloads && (
                        <span className="text-text-muted text-sm">{app.downloads} downloads</span>
                    )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3" style={{ transform: 'translateZ(20px)' }}>
                    <a
                        href={app.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium rounded-lg transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                        </svg>
                        Get it
                    </a>
                    <Link
                        href={`/privacy-policy/${app.slug}`}
                        className="py-2.5 px-4 bg-surface-elevated hover:bg-border text-text-secondary text-sm font-medium rounded-lg transition-colors"
                    >
                        Privacy
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
