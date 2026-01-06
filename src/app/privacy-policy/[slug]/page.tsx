import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { appsData, getAppBySlug, getAllAppSlugs, publisherInfo } from '@/data/apps-data';
import { generateAppSchema } from '@/lib/schema';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static paths for all apps
export async function generateStaticParams() {
    return getAllAppSlugs().map((slug) => ({
        slug: slug,
    }));
}

// Generate metadata for each app's privacy policy
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const app = getAppBySlug(slug);

    if (!app) {
        return {
            title: 'Privacy Policy Not Found',
        };
    }

    return {
        title: `Privacy Policy - ${app.name}`,
        description: `Privacy Policy for ${app.name} (${app.nameNative || ''}). Learn how we collect, use, and protect your data.`,
        openGraph: {
            title: `Privacy Policy - ${app.name}`,
            description: `Privacy Policy for ${app.name} by ${publisherInfo.name}`,
            type: 'website',
        },
    };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
    const { slug } = await params;
    const app = getAppBySlug(slug);

    if (!app) {
        notFound();
    }

    const appSchema = generateAppSchema(app);

    return (
        <>
            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(appSchema),
                }}
            />

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
                            Back to Apps
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center text-2xl font-bold text-accent border border-accent/20">
                                {app.name.charAt(0)}
                            </div>
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
                                    Privacy Policy
                                </h1>
                                <p className="text-text-secondary">
                                    {app.name} {app.nameNative && `(${app.nameNative})`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto px-4 py-12">
                    {/* Last Updated */}
                    <div className="mb-8 p-4 bg-surface-elevated rounded-xl border border-border">
                        <p className="text-text-muted text-sm">
                            <span className="font-medium text-text-secondary">Last Updated:</span>{' '}
                            {new Date(app.privacyPolicy.lastUpdated).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </p>
                    </div>

                    {/* App Info Card */}
                    <div className="mb-8 p-6 bg-surface rounded-xl border border-border">
                        <h2 className="text-lg font-semibold text-text-primary mb-3">About This App</h2>
                        <p className="text-text-secondary mb-4">{app.fullDescription}</p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-surface-elevated rounded-lg text-text-muted text-sm">
                                Version {app.version}
                            </span>
                            <span className="px-3 py-1 bg-surface-elevated rounded-lg text-text-muted text-sm">
                                {app.category}
                            </span>
                            <span className="px-3 py-1 bg-surface-elevated rounded-lg text-text-muted text-sm">
                                ⭐ {app.rating}
                            </span>
                        </div>
                    </div>

                    {/* Privacy Policy Sections */}
                    <div className="prose prose-invert max-w-none">
                        {app.privacyPolicy.sections.map((section, index) => (
                            <section key={index} className="mb-8">
                                <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-bold flex items-center justify-center">
                                        {index + 1}
                                    </span>
                                    {section.title}
                                </h2>
                                <div className="text-text-secondary leading-relaxed whitespace-pre-line pl-10">
                                    {section.content.split('\n').map((paragraph, pIndex) => (
                                        <p key={pIndex} className="mb-3">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Contact Card */}
                    <div className="mt-12 p-6 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-xl border border-accent/20">
                        <h3 className="text-lg font-semibold text-text-primary mb-2">Questions?</h3>
                        <p className="text-text-secondary mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <a
                            href={`mailto:${app.developerEmail}?subject=Privacy%20Policy%20Inquiry%20-%20${encodeURIComponent(app.name)}`}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {app.developerEmail}
                        </a>
                    </div>

                    {/* Play Store Link */}
                    <div className="mt-8 text-center">
                        <a
                            href={app.playStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                            </svg>
                            View {app.name} on Google Play
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
