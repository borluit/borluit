import { Metadata } from 'next';
import DataDeletionForm from '@/components/DataDeletionForm';

export const metadata: Metadata = {
    title: 'Data Deletion Request - Borluit',
    description: 'Submit a request to delete your account and associated data from our apps.',
};

export default function DataDeletionPage() {
    return (
        <div className="min-h-screen pt-20 pb-20 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4 font-heading">
                            Data Deletion Request
                        </h1>
                        <p className="text-lg text-gray-600">
                            We value your privacy. If you wish to delete your account and all associated data from our servers, please fill out the form below.
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="relative z-10">
                            <DataDeletionForm />
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">What data is deleted?</h3>
                            <p className="text-gray-600 text-sm">
                                All personal information, account details, activity logs, and user-generated content associated with your account will be permanently removed.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Retention Period</h3>
                            <p className="text-gray-600 text-sm">
                                Once the request is verified, your data is immediately queued for deletion and will be completely removed from all our active systems within 30 days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
