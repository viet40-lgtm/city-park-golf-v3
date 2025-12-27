'use client';

import { format } from 'date-fns';
import { X } from 'lucide-react';

interface StatsHistoryItem {
    date: string;
    roundName?: string;
    amount: number;
    isTournament?: boolean;
}

interface StatsHistoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    playerName: string;
    type: 'points' | 'money';
    history: StatsHistoryItem[];
}

export function StatsHistoryModal({ isOpen, onClose, playerName, type, history }: StatsHistoryModalProps) {
    if (!isOpen) return null;

    // Sort history by date descending
    const sortedHistory = [...history].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const total = sortedHistory.reduce((sum, item) => sum + item.amount, 0);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white animate-in fade-in slide-in-from-bottom-10 duration-200">
            {/* Header */}
            <div className="bg-slate-50 border-b border-gray-100 p-4 flex justify-between items-center shrink-0 safe-top">
                <div className="flex flex-col">
                    <h2 className="text-xl font-black text-gray-900 leading-tight">
                        {type === 'points' ? 'Points History' : 'Winnings History'}
                    </h2>
                    <p className="text-sm text-blue-600 font-bold">{playerName}</p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4">
                {sortedHistory.length === 0 ? (
                    <div className="text-center py-12 text-gray-400 text-lg">
                        No recorded {type === 'points' ? 'points' : 'winnings'}.
                    </div>
                ) : (
                    <table className="w-full text-base">
                        <thead className="text-xs text-gray-500 uppercase bg-white sticky top-0 border-b border-gray-100">
                            <tr>
                                <th className="px-2 py-3 text-left">Date</th>
                                <th className="px-2 py-3 text-left">Round</th>
                                <th className="px-2 py-3 text-right">{type === 'points' ? 'Pts' : 'Amt'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {sortedHistory.map((item, idx) => {
                                const dateStr = format(new Date(item.date), 'MM/dd/yy');
                                let label = item.roundName || 'Regular Round';
                                if (item.isTournament && !item.roundName) label = 'Tournament';
                                if (item.isTournament && item.roundName) label = `${item.roundName} (T)`;

                                return (
                                    <tr key={idx} className="hover:bg-slate-50">
                                        <td className="px-2 py-4 font-medium text-gray-600">{dateStr}</td>
                                        <td className="px-2 py-4 text-gray-900 font-medium">{label}</td>
                                        <td className={`px-2 py-4 text-right font-black text-lg ${type === 'money' ? 'text-green-600' : 'text-blue-600'}`}>
                                            {type === 'money' ? `$${item.amount.toFixed(2)}` : item.amount}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Footer Total */}
            <div className="border-t border-gray-100 p-6 bg-slate-50 flex justify-between items-center shrink-0 safe-bottom">
                <span className="font-bold text-gray-500 uppercase tracking-wider">Total</span>
                <span className={`text-3xl font-black ${type === 'money' ? 'text-green-600' : 'text-blue-600'}`}>
                    {type === 'money' ? `$${total.toFixed(2)}` : total}
                </span>
            </div>
        </div>
    );
}
