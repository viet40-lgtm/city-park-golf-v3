import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 px-3 py-3">
                <div className="flex items-center justify-between">
                    <Link href="/" className="px-4 py-2 bg-black text-white rounded-full text-[18pt] font-bold hover:bg-gray-800 transition-colors shadow-sm">
                        Back
                    </Link>
                    <div className="flex flex-col items-end">
                        <h1 className="text-[18pt] font-bold text-green-600 tracking-tight">Events</h1>
                        <button className="bg-black text-white text-[10pt] font-bold px-3 py-1 rounded-full hover:bg-gray-800 transition-colors">
                            Add Tournament
                        </button>
                    </div>
                </div>
            </header>

            <main className="px-3 py-6 space-y-4">
                {[
                    { name: '1st Tournament of 2026', date: 'Sunday, March 1, 2026' },
                    { name: 'Ray Ferran Memorial 2026', date: 'Saturday, October 3, 2026' },
                    { name: 'Mickey Hurley Memorial 2026', date: 'Saturday, October 17, 2026' },
                    { name: 'All Saints Day 2026', date: 'Saturday, October 31, 2026' },
                    { name: 'Turkey 2026', date: 'Saturday, November 14, 2026' },
                    { name: 'Good Cheer 2026', date: 'Saturday, November 28, 2026' },
                    { name: 'CPGC Year End Party', date: 'Friday, December 4, 2026', location: 'Location TBD' }
                ].map((event, index) => (
                    <div key={index} className="bg-white border-2 border-gray-400 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
                        <div className="space-y-1">
                            <h3 className="font-bold text-[15pt] text-black">{event.name}</h3>
                            <div className="flex items-center gap-2 text-gray-600 text-[12pt]">
                                <span className="text-gray-400">📅</span>
                                <span>{event.date}</span>
                                {event.location && <span className="text-gray-400 text-sm ml-2">📍 {event.location}</span>}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                            <button className="flex-1 md:flex-none bg-[#22c55e] text-white px-4 py-1.5 rounded-full font-bold text-[12pt] flex items-center justify-center gap-1 hover:bg-green-600 transition-colors shadow-sm whitespace-nowrap">
                                <span className="text-sm bg-white text-green-600 rounded-full w-4 h-4 flex items-center justify-center">▶</span>
                                Start Tournament
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>
                            </button>
                            <button className="p-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
