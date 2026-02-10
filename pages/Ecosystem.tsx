import React, { useState } from 'react';
import { EcosystemApp } from '../types';
import { Filter, ExternalLink, Search } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const apps: EcosystemApp[] = [
    {
      id: '1',
      name: 'Alex',
      description: 'Next Gen DeFi on Bitcoin. Lending, Borrowing, and DEX.',
      category: 'DeFi',
      imageUrl: 'https://picsum.photos/seed/alex/100/100',
      websiteUrl: '#'
    },
    {
      id: '2',
      name: 'Gamma',
      description: 'The leading marketplace for Bitcoin NFTs, powered by Stacks.',
      category: 'NFT',
      imageUrl: 'https://picsum.photos/seed/gamma/100/100',
      websiteUrl: '#'
    },
    {
      id: '3',
      name: 'Leather',
      description: 'The Bitcoin wallet for the rest of us. Manage BTC, STX, and Ordinals.',
      category: 'Wallet',
      imageUrl: 'https://picsum.photos/seed/leather/100/100',
      websiteUrl: '#'
    },
    {
      id: '4',
      name: 'Xverse',
      description: 'The most advanced Bitcoin wallet. Web3 ready.',
      category: 'Wallet',
      imageUrl: 'https://picsum.photos/seed/xverse/100/100',
      websiteUrl: '#'
    },
    {
      id: '5',
      name: 'Arkadiko',
      description: 'Self-repaying loans and stablecoin (USDA) on Bitcoin.',
      category: 'DeFi',
      imageUrl: 'https://picsum.photos/seed/arkadiko/100/100',
      websiteUrl: '#'
    },
    {
      id: '6',
      name: 'Stacking DAO',
      description: 'Liquid stacking for Stacks. Earn yield while keeping liquidity.',
      category: 'DeFi',
      imageUrl: 'https://picsum.photos/seed/stackingdao/100/100',
      websiteUrl: '#'
    },
    {
      id: '7',
      name: 'CityCoins',
      description: 'A protocol that enables people to support their favorite cities.',
      category: 'Social',
      imageUrl: 'https://picsum.photos/seed/citycoins/100/100',
      websiteUrl: '#'
    },
    {
      id: '8',
      name: 'Hiro Systems',
      description: 'Developer tools for building on Bitcoin.',
      category: 'Infrastructure',
      imageUrl: 'https://picsum.photos/seed/hiro/100/100',
      websiteUrl: '#'
    },
     {
      id: '9',
      name: 'Sigle',
      description: 'A decentralized writing platform for web3 writers.',
      category: 'Social',
      imageUrl: 'https://picsum.photos/seed/sigle/100/100',
      websiteUrl: '#'
    },
  ];

  const categories = ['All', 'DeFi', 'NFT', 'Wallet', 'Infrastructure', 'Social'];

  const filteredApps = apps.filter(app => {
      const matchesCategory = filter === 'All' || app.category === filter;
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20 mb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Stacks Ecosystem</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                  Discover {apps.length}+ applications building the future of Bitcoin finance, ownership, and identity.
              </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex overflow-x-auto hide-scrollbar pb-2 md:pb-0 gap-2 w-full md:w-auto">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                            filter === cat 
                            ? 'bg-brand-orange text-white' 
                            : 'bg-white text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                    type="text" 
                    placeholder="Find an app..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-brand-orange focus:outline-none"
                />
            </div>
        </div>

        {/* Grid */}
        {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map(app => (
                <div key={app.id} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-xl transition-all group flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                        <img src={app.imageUrl} alt={app.name} className="w-16 h-16 rounded-xl object-cover shadow-sm bg-slate-50" />
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded uppercase tracking-wide">
                            {app.category}
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{app.name}</h3>
                    <p className="text-slate-600 text-sm mb-6 flex-grow">{app.description}</p>
                    <a 
                        href={app.websiteUrl} 
                        className="inline-flex items-center text-brand-orange font-bold text-sm hover:underline mt-auto"
                    >
                        Visit Website <ExternalLink size={14} className="ml-1" />
                    </a>
                </div>
            ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No apps found matching your criteria.</p>
                <button 
                    onClick={() => { setFilter('All'); setSearchQuery(''); }}
                    className="mt-4 text-brand-orange font-bold hover:underline"
                >
                    Clear filters
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default Ecosystem;