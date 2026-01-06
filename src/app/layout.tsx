import type { Metadata } from 'next';
import { publisherInfo } from '@/data/apps-data';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://borluit.dev'),
    title: {
        default: `${publisherInfo.name} - Android Apps`,
        template: `%s | ${publisherInfo.name}`,
    },
    description: `${publisherInfo.tagline}. ${publisherInfo.description}`,
    keywords: [
        'Assamese apps',
        'Android apps',
        'Assamese keyboard',
        'Assamese dictionary',
        'Assamese translator',
        'Assam news',
        'Assam TET',
        publisherInfo.name,
    ],
    authors: [{ name: publisherInfo.name }],
    creator: publisherInfo.name,
    publisher: publisherInfo.name,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: publisherInfo.website,
        siteName: publisherInfo.name,
        title: `${publisherInfo.name} - Android Apps`,
        description: publisherInfo.description,
    },
    twitter: {
        card: 'summary_large_image',
        title: `${publisherInfo.name} - Android Apps`,
        description: publisherInfo.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="bg-background text-text-primary min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-grow pt-16">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
