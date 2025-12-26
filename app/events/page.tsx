import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { format } from 'date-fns';
import EventsClient from './EventsClient';

export const dynamic = 'force-dynamic';

export default async function EventsPage() {
    // Fetch upcoming tournaments (or all tournaments sorted by date descending/ascending)
    // We'll show all future tournaments ascending, or maybe recent past + future?
    // User image implied a list of future events. Let's fetch all Rounds marked as tournaments.

    const tournaments = await prisma.round.findMany({
        where: {
            is_tournament: true,
            // Optionally filter for future dates:
            // date: { gte: new Date().toISOString().split('T')[0] } 
        },
        orderBy: {
            date: 'asc'
        }
    });

    // Transform to Event format expected by Client
    const events = tournaments.map(t => ({
        id: t.id,
        name: t.name || 'Unnamed Tournament',
        date: format(new Date(t.date), 'EEEE, MMMM d, yyyy'),
        rawDate: t.date,
        location: 'City Park Golf Course' // Default for now
    }));

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50 px-3 py-3">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                    <div className="flex justify-start">
                        <Link href="/" className="px-4 py-2 bg-black text-white rounded-full text-[18pt] font-bold hover:bg-gray-800 transition-colors shadow-sm whitespace-nowrap">
                            Back
                        </Link>
                    </div>

                    <div className="flex justify-center">
                        <h1 className="text-[18pt] font-bold text-green-600 tracking-tight text-center">Events</h1>
                    </div>

                    <div className="flex justify-end">
                        {/* Passed to Client Component via children or props? 
                             Actually, the Header "Add Button" needs to open a Modal. 
                             So the Main Page should probably just wrap the Client Component 
                             which handles the Header + Main Content interaction.
                          */}
                    </div>
                </div>
            </header>

            {/* We delegate the interactive list and modal to the Client Component */}
            <EventsClient initialEvents={events} />
        </div>
    );
}
