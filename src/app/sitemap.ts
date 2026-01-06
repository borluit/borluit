import { MetadataRoute } from 'next';
import { appsData, publisherInfo } from '@/data/apps-data';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = publisherInfo.website || 'https://borluit.dev';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/support`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        },
    ];

    // Dynamic privacy policy pages for each app
    const privacyPolicyPages = appsData.map((app) => ({
        url: `${baseUrl}/privacy-policy/${app.slug}`,
        lastModified: new Date(app.privacyPolicy.lastUpdated),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...privacyPolicyPages];
}
