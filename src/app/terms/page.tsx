import { Metadata } from 'next';
import Link from 'next/link';
import { publisherInfo } from '@/data/apps-data';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: `Terms of Service for apps published by ${publisherInfo.name}.`,
};

export default function TermsPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

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
                        Terms of Service
                    </h1>
                    <p className="text-text-secondary mt-2">
                        Last Updated: {currentDate}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="prose prose-invert max-w-none space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">1. Acceptance of Terms</h2>
                        <p className="text-text-secondary leading-relaxed">
                            By downloading, installing, or using any application published by {publisherInfo.name}
                            (collectively referred to as {"\"our apps\""}, {"\"the apps\""}), you agree to be bound by these
                            Terms of Service. If you do not agree to these terms, please do not use our apps.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">2. License Grant</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We grant you a limited, non-exclusive, non-transferable, revocable license to download,
                            install, and use our apps on your personal mobile device solely for your personal,
                            non-commercial purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">3. Restrictions</h2>
                        <p className="text-text-secondary leading-relaxed mb-4">You agree not to:</p>
                        <ul className="list-disc list-inside text-text-secondary space-y-2">
                            <li>Copy, modify, or distribute the apps or their content</li>
                            <li>Reverse engineer, decompile, or disassemble the apps</li>
                            <li>Remove any copyright or proprietary notices</li>
                            <li>Use the apps for any unlawful purpose</li>
                            <li>Attempt to gain unauthorized access to our systems</li>
                            <li>Use the apps in any way that could damage or impair them</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">4. Intellectual Property</h2>
                        <p className="text-text-secondary leading-relaxed">
                            All content, features, and functionality of our apps, including but not limited to text,
                            graphics, logos, icons, images, audio clips, and software, are the exclusive property of
                            {publisherInfo.name} or its licensors and are protected by copyright, trademark, and
                            other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">5. User Content</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Some of our apps may allow you to create, upload, or store content. You retain ownership
                            of your content, but grant us a non-exclusive, royalty-free license to use, store, and
                            display your content solely for the purpose of providing the app services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">6. Third-Party Services</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Our apps may contain links to or integrate with third-party services (e.g., Google Play
                            Services, Firebase, advertising networks). Your use of such services is governed by their
                            respective terms and privacy policies. We are not responsible for the content or practices
                            of any third-party services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">7. Disclaimers</h2>
                        <p className="text-text-secondary leading-relaxed">
                            Our apps are provided {"\"as is\""} and {"\"as available\""} without any warranties of any kind,
                            either express or implied. We do not warrant that the apps will be uninterrupted,
                            error-free, or secure. We are not responsible for any loss of data or damage to your
                            device resulting from the use of our apps.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">8. Limitation of Liability</h2>
                        <p className="text-text-secondary leading-relaxed">
                            To the maximum extent permitted by law, {publisherInfo.name} shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages, or any loss of profits
                            or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
                            or other intangible losses.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">9. Updates and Changes</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We reserve the right to modify, update, or discontinue our apps at any time without prior
                            notice. We may also update these Terms of Service from time to time. Continued use of our
                            apps after any changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">10. Termination</h2>
                        <p className="text-text-secondary leading-relaxed">
                            We may terminate or suspend your access to our apps immediately, without prior notice or
                            liability, for any reason, including if you breach these Terms of Service. Upon termination,
                            your right to use the apps will cease immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">11. Governing Law</h2>
                        <p className="text-text-secondary leading-relaxed">
                            These Terms of Service shall be governed by and construed in accordance with the laws of
                            India, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-text-primary mb-4">12. Contact Us</h2>
                        <p className="text-text-secondary leading-relaxed">
                            If you have any questions about these Terms of Service, please contact us at:
                        </p>
                        <div className="mt-4">
                            <a
                                href={`mailto:${publisherInfo.email}`}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-lg transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                {publisherInfo.email}
                            </a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
