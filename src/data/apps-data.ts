/**
 * Apps Data Configuration
 * ========================
 * This is the central data source for all your apps.
 * Update this file with your real app information.
 * 
 * To add a new app:
 * 1. Copy an existing app object
 * 2. Update all fields with your app's data
 * 3. Ensure the 'slug' is unique (used for URL routing)
 * 4. Add your privacy policy text in the 'privacyPolicy' field
 */

export interface AppData {
    id: string;
    slug: string;  // URL-friendly identifier (e.g., 'assamese-translator')
    name: string;
    nameNative?: string;  // Native script name if applicable
    packageId: string;  // com.example.app
    playStoreUrl: string;
    iconUrl: string;  // Path to icon in /public/icons/ or external URL
    rating: number;  // e.g., 4.3
    ratingCount?: string;  // e.g., "1.2K"
    downloads?: string;  // e.g., "10K+"
    category: string;
    shortDescription: string;
    fullDescription: string;
    features: string[];
    screenshots?: string[];  // Array of screenshot URLs/paths for carousel
    lastUpdated: string;  // ISO date string
    version: string;
    developerEmail: string;
    privacyPolicy: PrivacyPolicyData;
}

export interface PrivacyPolicyData {
    lastUpdated: string;
    sections: PrivacySection[];
}

export interface PrivacySection {
    title: string;
    content: string;
}

// Publisher Information
export const publisherInfo = {
    name: 'Borluit.dev',
    tagline: 'Cool, Excellent, Easy apps, websites, social media pages',
    description: 'Helping you establish your digital identity.',
    website: 'https://borluit.dev/',
    email: 'kazirangaapps@gmail.com',
    playStoreUrl: 'https://play.google.com/store/apps/dev?id=5030574576905203036',
    socialLinks: {
        twitter: '',
        github: '',
        linkedin: '',
    },
};

// Default Privacy Policy Template
const defaultPrivacyPolicy: PrivacyPolicyData = {
    lastUpdated: '2026-01-01',
    sections: [
        {
            title: 'Introduction',
            content: `Welcome to our application. We are committed to protecting your privacy and ensuring you have a positive experience using our app. This Privacy Policy explains how we collect, use, and safeguard your information.`,
        },
        {
            title: 'Information We Collect',
            content: `We may collect the following types of information:
      
• **Device Information**: Device type, operating system version, unique device identifiers for analytics and crash reporting.
• **Usage Data**: App interactions, features used, and session duration to improve our services.
• **Crash Reports**: Technical data when the app crashes to help us fix bugs and improve stability.

We do NOT collect personally identifiable information unless you explicitly provide it (e.g., through a contact form).`,
        },
        {
            title: 'How We Use Information',
            content: `The information we collect is used to:

• Provide and maintain our service
• Improve and optimize app performance
• Understand how users interact with our app
• Detect and prevent technical issues
• Communicate with you about updates (if opted in)`,
        },
        {
            title: 'Third-Party Services',
            content: `Our app may use third-party services that collect information:

• **Google Play Services**: For app updates and licensing
• **Firebase Analytics**: For anonymous usage statistics
• **Firebase Crashlytics**: For crash reporting and stability monitoring
• **Google AdMob**: For displaying advertisements (if applicable)

These services have their own privacy policies governing the use of your information.`,
        },
        {
            title: 'Data Security',
            content: `We value your trust and strive to use commercially acceptable means of protecting your information. All data transmitted between your device and our servers is encrypted using HTTPS/TLS. However, no method of electronic transmission or storage is 100% secure.`,
        },
        {
            title: 'Children\'s Privacy',
            content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.`,
        },
        {
            title: 'Your Rights',
            content: `You have the right to:

• Request access to your data
• Request deletion of your data
• Opt-out of analytics (through device settings)
• Uninstall the app at any time to stop all data collection`,
        },
        {
            title: 'Changes to This Policy',
            content: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this page. You are advised to review this Privacy Policy periodically.`,
        },
        {
            title: 'Contact Us',
            content: `If you have any questions about this Privacy Policy, please contact us at: kazirangaapps@gmail.com`,
        },
    ],
};

// Your Apps Data
export const appsData: AppData[] = [
    {
        id: 'anubadok',
        slug: 'assamese-translator',
        name: 'Assamese English Translator',
        nameNative: 'অনুবাদক',
        packageId: 'com.kazirangaapps.anubadok',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazirangaapps.anubadok',
        iconUrl: '/icons/translator.png',
        rating: 4.2,
        ratingCount: '500+',
        downloads: '10K+',
        category: 'Education',
        shortDescription: 'Translate between Assamese and English with ease. Fast, accurate, and works offline.',
        fullDescription: 'Anubadok is your go-to Assamese-English translator app. Translate text, learn new words, and bridge the language gap effortlessly. Perfect for students, travelers, and anyone looking to communicate across languages.',
        features: [
            'Instant Assamese to English translation',
            'English to Assamese translation',
            'Offline mode support',
            'Copy and share translations',
            'Clean, easy-to-use interface',
        ],
        screenshots: [
            '/screenshots/translator-1.png',
            '/screenshots/translator-2.png',
            '/screenshots/translator-3.png',
        ],
        lastUpdated: '2025-12-15',
        version: '2.1.0',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: defaultPrivacyPolicy,
    },
    {
        id: 'dictionary',
        slug: 'assamese-dictionary',
        name: 'Assamese Dictionary',
        nameNative: 'শব্দকোষ',
        packageId: 'com.kazirangaapps.assamesedictionary',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazirangaapps.assamesedictionary',
        iconUrl: '/icons/dictionary.png',
        rating: 4.3,
        ratingCount: '1K+',
        downloads: '50K+',
        category: 'Education',
        shortDescription: 'Comprehensive Assamese dictionary with meanings, examples, and pronunciation.',
        fullDescription: 'A complete Assamese dictionary (শব্দকোষ) at your fingertips. Look up words, understand meanings, see usage examples, and expand your vocabulary. Essential for Assamese language learners and native speakers alike.',
        features: [
            'Extensive word database',
            'Detailed word meanings',
            'Usage examples',
            'Search history',
            'Bookmark favorite words',
            'Offline access',
        ],
        screenshots: [
            '/screenshots/dictionary-1.png',
            '/screenshots/dictionary-2.png',
            '/screenshots/dictionary-3.png',
            '/screenshots/dictionary-4.png',
            '/screenshots/dictionary-5.png',
            '/screenshots/dictionary-6.png',
        ],
        lastUpdated: '2025-11-20',
        version: '3.0.0',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: defaultPrivacyPolicy,
    },
    {
        id: 'keyboard',
        slug: 'barna-keyboard',
        name: 'Barna Assamese Keyboard',
        nameNative: 'বৰ্ণ',
        packageId: 'com.sltdassam.rodalikeyboard',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sltdassam.rodalikeyboard',
        iconUrl: '/icons/keyboard.png',
        rating: 3.8,
        ratingCount: '800+',
        downloads: '100K+',
        category: 'Tools',
        shortDescription: 'Type in Assamese (অসমীয়া) easily with our intuitive keyboard.',
        fullDescription: 'Barna (বৰ্ণ) is the easiest way to type in Assamese on your Android device. With a thoughtfully designed layout and predictive text, writing in your mother tongue has never been simpler.',
        features: [
            'Native Assamese keyboard layout',
            'Predictive text suggestions',
            'Customizable themes',
            'Emoji support',
            'Swipe typing',
            'Voice input support',
        ],
        screenshots: [
            '/screenshots/keyboard-1.png',
            '/screenshots/keyboard-2.png',
            '/screenshots/keyboard-3.png',
        ],
        lastUpdated: '2025-10-08',
        version: '4.2.1',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: {
            lastUpdated: '2026-01-01',
            sections: [
                {
                    title: 'Introduction',
                    content: `Barna Assamese Keyboard ("we", "us", or "our") is committed to protecting your privacy. This policy explains how our keyboard app handles your data.`,
                },
                {
                    title: 'Important: We Do NOT Collect Your Keystrokes',
                    content: `**Your privacy is paramount.** Unlike some keyboard apps, Barna Keyboard does NOT:
          
• Record or transmit your keystrokes
• Store your passwords or sensitive information
• Send your typed content to any server
• Track what you type in any application

All text processing happens locally on your device.`,
                },
                {
                    title: 'Information We Collect',
                    content: `We collect minimal, anonymous data:

• **Usage Statistics**: Aggregate data on keyboard usage (e.g., which themes are popular) - no personal content.
• **Crash Reports**: Technical information when the app crashes to help us improve stability.
• **Device Information**: Basic device type and OS version for compatibility.`,
                },
                {
                    title: 'Permissions Explained',
                    content: `Keyboard apps require certain permissions to function. Here's what each means:

• **Input Method**: Required for the keyboard to work system-wide.
• **Vibration**: For haptic feedback when typing.
• **Internet**: For downloading themes and sending crash reports (NOT for keystroke logging).`,
                },
                ...defaultPrivacyPolicy.sections.slice(4),
            ],
        },
    },
    {
        id: 'xadhu',
        slug: 'burhi-aair-xadhu',
        name: 'Burhi Aair Xadhu',
        nameNative: 'বুঢ়ী আইৰ সাধু',
        packageId: 'com.kazirangaapps.xadhukotha',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazirangaapps.xadhukotha',
        iconUrl: '/icons/xadhu.png',
        rating: 4.3,
        ratingCount: '300+',
        downloads: '5K+',
        category: 'Books & Reference',
        shortDescription: 'Classic Assamese folklore and stories from "Burhi Aair Xadhu" by Lakshminath Bezbaroa.',
        fullDescription: 'Relive the magic of Assamese folklore with "Burhi Aair Xadhu" (বুঢ়ী আইৰ সাধু) - timeless stories collected by Sahityarathi Lakshminath Bezbaroa. Perfect for children and adults who cherish Assamese culture and literature.',
        features: [
            'Complete collection of classic stories',
            'Beautiful, readable text',
            'Offline reading',
            'Bookmark your favorite tales',
            'Night mode for comfortable reading',
        ],
        screenshots: [
            '/screenshots/xadhu-1.png',
            '/screenshots/xadhu-2.png',
            '/screenshots/xadhu-3.png',
            '/screenshots/xadhu-4.png',
            '/screenshots/xadhu-5.png',
        ],
        lastUpdated: '2025-09-01',
        version: '1.5.0',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: defaultPrivacyPolicy,
    },
    {
        id: 'news',
        slug: 'assam-news',
        name: 'Assam News',
        nameNative: 'অসম বাতৰি',
        packageId: 'com.kazirangalabs.assamnews',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazirangalabs.assamnews',
        iconUrl: '/icons/news.png',
        rating: 3.9,
        ratingCount: '200+',
        downloads: '10K+',
        category: 'News & Magazines',
        shortDescription: 'Stay updated with live TV and news from Assam. All major channels in one app.',
        fullDescription: 'Your one-stop destination for Assam news. Watch live TV channels, read the latest headlines, and stay informed about everything happening in Assam and Northeast India.',
        features: [
            'Live TV streaming',
            'Multiple news channels',
            'Breaking news alerts',
            'Categories: Politics, Sports, Entertainment',
            'Share news with friends',
        ],
        screenshots: [
            '/screenshots/news-1.png',
            '/screenshots/news-2.png',
            '/screenshots/news-3.png',
        ],
        lastUpdated: '2025-08-15',
        version: '2.0.0',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: defaultPrivacyPolicy,
    },
    {
        id: 'tet',
        slug: 'assam-tet-guide',
        name: 'Assam TET Guide',
        nameNative: 'অসম টেট',
        packageId: 'com.kazirangaapps.assamtetguide',
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.kazirangaapps.assamtetguide',
        iconUrl: '/icons/tet.png',
        rating: 3.9,
        ratingCount: '400+',
        downloads: '50K+',
        category: 'Education',
        shortDescription: 'Complete preparation guide for Assam TET (Teacher Eligibility Test).',
        fullDescription: 'Ace the Assam TET exam with our comprehensive guide. Study materials, practice quizzes, previous year papers, and more - everything you need to become a qualified teacher in Assam.',
        features: [
            'Complete syllabus coverage',
            'Practice quizzes',
            'Previous year question papers',
            'Study notes',
            'Exam tips and strategies',
            'Offline access',
        ],
        screenshots: [
            '/screenshots/tet-1.png',
            '/screenshots/tet-2.png',
            '/screenshots/tet-3.png',
            '/screenshots/tet-4.png',
        ],
        lastUpdated: '2025-12-20',
        version: '2.5.0',
        developerEmail: 'kazirangaapps@gmail.com',
        privacyPolicy: defaultPrivacyPolicy,
    },
];

// Helper function to get app by slug
export function getAppBySlug(slug: string): AppData | undefined {
    return appsData.find((app) => app.slug === slug);
}

// Helper function to get all slugs for static generation
export function getAllAppSlugs(): string[] {
    return appsData.map((app) => app.slug);
}
