import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 px-1 py-3">
                <div className="relative flex items-center justify-center p-1">
                    <div className="absolute left-0">
                        <Link href="/" className="px-4 py-2 bg-black text-white rounded-full text-[18pt] font-bold hover:bg-gray-800 transition-colors shadow-sm">
                            Back
                        </Link>
                    </div>
                    <h1 className="text-[18pt] font-bold text-green-700 tracking-tight">Events</h1>
                </div>
            </header>

            <main className="px-3 py-6 space-y-6 text-center">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-lg mx-auto mt-10">
                    <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">📅</span>
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Events Coming Soon</h2>
                    <p className="text-gray-500 text-lg">
                        We are currently working on the events calendar. Check back later for upcoming tournament dates and club activities.
                    </p>
                    <Link href="/" className="inline-block mt-6 text-green-600 font-bold hover:underline">
                        Return Home
                    </Link>
                </div>
            </main>
        </div>
    );
}
