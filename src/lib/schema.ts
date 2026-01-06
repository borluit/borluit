import { AppData, publisherInfo } from '@/data/apps-data';

/**
 * Generate Schema.org JSON-LD for SoftwareApplication
 * This helps AI search engines (Perplexity, Google SGE) discover your apps
 */
export function generateAppSchema(app: AppData) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: app.name,
        description: app.fullDescription,
        applicationCategory: app.category,
        operatingSystem: 'Android',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: app.rating,
            ratingCount: app.ratingCount || '100',
            bestRating: '5',
            worstRating: '1',
        },
        author: {
            '@type': 'Organization',
            name: publisherInfo.name,
            url: publisherInfo.website,
        },
        downloadUrl: app.playStoreUrl,
        softwareVersion: app.version,
        dateModified: app.lastUpdated,
        image: app.iconUrl,
    };
}

/**
 * Generate Schema.org JSON-LD for the Publisher/Organization
 */
export function generatePublisherSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: publisherInfo.name,
        url: publisherInfo.website,
        description: publisherInfo.description,
        email: publisherInfo.email,
        sameAs: [publisherInfo.playStoreUrl],
    };
}

/**
 * Generate Schema.org JSON-LD for WebPage
 */
export function generateWebPageSchema(title: string, description: string, url: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description: description,
        url: url,
        publisher: {
            '@type': 'Organization',
            name: publisherInfo.name,
        },
    };
}
