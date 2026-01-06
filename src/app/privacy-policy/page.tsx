import { Metadata } from 'next';
import Link from 'next/link';
import { publisherInfo, appsData } from '@/data/apps-data';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: `Privacy Policy for ${publisherInfo.name} and all our Android applications.`,
};

export default function PrivacyPolicyPage() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="min-h-screen bg-surface py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-heading">
                        Privacy Policy
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Last updated: {currentDate}
                    </p>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-12">
                    <div className="prose prose-lg max-w-none">
                        {/* Introduction */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Welcome to {publisherInfo.name}. We are committed to protecting your privacy
                                and ensuring you have a positive experience using our applications. This
                                Privacy Policy explains how we collect, use, disclose, and safeguard your
                                information when you use any of our mobile applications.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Please read this privacy policy carefully. If you do not agree with the
                                terms of this privacy policy, please do not access our applications.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information Automatically Collected</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When you use our applications, we may automatically collect certain information, including:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                                <li><strong>Device Information:</strong> Device type, operating system version, unique device identifiers, and mobile network information.</li>
                                <li><strong>Usage Data:</strong> Information about how you use our applications, including features accessed, time spent, and interaction patterns.</li>
                                <li><strong>Log Data:</strong> When our applications encounter errors, we collect log data that may include your device&apos;s IP address, device name, operating system version, app configuration, time and date of use, and other statistics.</li>
                                <li><strong>Crash Reports:</strong> Technical data about crashes and errors to help us improve app stability.</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Information You Provide</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We may collect information you voluntarily provide, such as:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 mt-2">
                                <li>Contact information when you reach out for support</li>
                                <li>Feedback and reviews you submit</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </section>

                        {/* How We Use Information */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Provide, maintain, and improve our applications</li>
                                <li>Understand how users interact with our applications</li>
                                <li>Detect, prevent, and address technical issues</li>
                                <li>Respond to your comments, questions, and support requests</li>
                                <li>Send you technical notices and security alerts</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        {/* Third-Party Services */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our applications may use third-party services that collect information.
                                These services include:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Google Play Services:</strong> For app updates, licensing verification, and core functionality.</li>
                                <li><strong>Firebase Analytics:</strong> For anonymous usage statistics and app performance monitoring.</li>
                                <li><strong>Firebase Crashlytics:</strong> For crash reporting and stability monitoring.</li>
                                <li><strong>Google AdMob:</strong> For displaying advertisements (where applicable). AdMob may collect device information for ad personalization.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Each of these services has their own privacy policies governing the use of your information.
                                We encourage you to review their privacy policies.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We take reasonable measures to help protect information about you from loss,
                                theft, misuse, unauthorized access, disclosure, alteration, and destruction.
                                All data transmitted between your device and our servers is encrypted using
                                industry-standard HTTPS/TLS protocols.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                However, no method of transmission over the Internet or method of electronic
                                storage is completely secure. While we strive to use commercially acceptable
                                means to protect your personal information, we cannot guarantee its absolute security.
                            </p>
                        </section>

                        {/* Data Retention */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We retain the information we collect for as long as necessary to provide our
                                services and fulfill the purposes outlined in this Privacy Policy, unless a
                                longer retention period is required or permitted by law.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our services are not directed to individuals under the age of 13. We do not
                                knowingly collect personal information from children under 13. If you are a
                                parent or guardian and you are aware that your child has provided us with
                                personal information, please contact us so that we can take necessary actions.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Depending on your location, you may have certain rights regarding your personal information:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li><strong>Access:</strong> You can request access to the personal information we hold about you.</li>
                                <li><strong>Correction:</strong> You can request that we correct any inaccurate information.</li>
                                <li><strong>Deletion:</strong> You can request that we delete your personal information.</li>
                                <li><strong>Opt-out:</strong> You can opt-out of analytics through your device settings.</li>
                                <li><strong>Uninstall:</strong> You can uninstall our applications at any time to stop all data collection.</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                To exercise these rights, please contact us using the information below or visit our{' '}
                                <Link href="/data-deletion" className="text-accent hover:underline">
                                    Data Deletion Request
                                </Link>{' '}
                                page.
                            </p>
                        </section>

                        {/* Changes to This Policy */}
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the
                                &quot;Last updated&quot; date at the top of this Privacy Policy. You are advised to
                                review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                                <p className="text-gray-700">
                                    <strong>Email:</strong>{' '}
                                    <a href={`mailto:${publisherInfo.email}`} className="text-accent hover:underline">
                                        {publisherInfo.email}
                                    </a>
                                </p>
                                <p className="text-gray-700 mt-2">
                                    <strong>Website:</strong>{' '}
                                    <a href={publisherInfo.website} className="text-accent hover:underline">
                                        {publisherInfo.website}
                                    </a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>

                {/* App-Specific Policies */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        App-Specific Privacy Policies
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {appsData.map((app) => (
                            <Link
                                key={app.id}
                                href={`/privacy-policy/${app.slug}`}
                                className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:border-accent/30 group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-white font-bold">
                                        {app.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900 group-hover:text-accent transition-colors">
                                            {app.name}
                                        </p>
                                        <p className="text-xs text-gray-500">View Privacy Policy</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
