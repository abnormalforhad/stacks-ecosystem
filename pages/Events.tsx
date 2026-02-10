import React from 'react';
import { CommunityEvent } from '../types';
import { Calendar, MapPin, ExternalLink, Clock } from 'lucide-react';

const Events: React.FC = () => {
    const events: CommunityEvent[] = [
        {
            id: '1',
            title: 'Bitcoin Unleashed: London',
            date: 'March 15, 2024',
            location: 'London, UK',
            type: 'In-Person',
            description: 'The premier Bitcoin builder conference returns to London. Join top developers and investors.'
        },
        {
            id: '2',
            title: 'Stacks Nakamoto Release Party',
            date: 'April 20, 2024',
            location: 'Global (Online)',
            type: 'Online',
            description: 'Celebrating the activation of the Nakamoto upgrade with the global community.'
        },
        {
            id: '3',
            title: 'BTC NYC Hackathon',
            date: 'May 10-12, 2024',
            location: 'New York, USA',
            type: 'In-Person',
            description: 'A 48-hour hackathon focused on building the next generation of Bitcoin DeFi apps.'
        },
        {
            id: '4',
            title: 'Developer Office Hours',
            date: 'Every Wednesday',
            location: 'Discord',
            type: 'Online',
            description: 'Join the Hiro engineering team for weekly office hours to get help with your Clarity code.'
        }
    ];

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
                    <div>
                        <div className="inline-block bg-orange-100 text-brand-orange font-bold px-3 py-1 rounded text-sm mb-4">COMMUNITY</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Events</h1>
                        <p className="text-lg text-slate-600 max-w-2xl">
                            Connect with Stacks builders and enthusiasts at events around the world.
                        </p>
                    </div>
                    <button className="mt-6 md:mt-0 bg-slate-900 text-white px-6 py-3 rounded-md font-bold hover:bg-slate-800 transition-colors">
                        Submit an Event
                    </button>
                </div>

                <div className="space-y-6">
                    {events.map(event => (
                        <div key={event.id} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="flex-shrink-0 w-full md:w-24 h-24 bg-slate-100 rounded-xl flex flex-col items-center justify-center border border-slate-200 group-hover:border-brand-orange transition-colors">
                                <span className="text-slate-500 text-xs uppercase font-bold">{event.date.split(' ')[0]}</span>
                                <span className="text-2xl font-bold text-slate-900">{event.date.split(' ')[1].replace(',','')}</span>
                            </div>
                            
                            <div className="flex-grow">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${event.type === 'Online' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                                        {event.type}
                                    </span>
                                    <div className="flex items-center text-slate-500 text-sm">
                                        <MapPin size={14} className="mr-1" />
                                        {event.location}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                                <p className="text-slate-600">{event.description}</p>
                            </div>

                            <div className="flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                                <button className="w-full md:w-auto border border-slate-300 text-slate-700 px-6 py-3 rounded-md font-bold hover:bg-slate-50 hover:text-brand-orange transition-colors flex items-center justify-center">
                                    RSVP <ExternalLink size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
};

export default Events;