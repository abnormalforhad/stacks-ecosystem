import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, FileText, Code, Layers, Server, Box, AlertTriangle, Calculator, RefreshCw, Terminal } from 'lucide-react';
import { DocSection } from '../types';

// Components
const GettingStartedContent = () => (
    <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Getting Started</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            Welcome to Stacks documentation. Stacks is a Bitcoin layer that enables smart contracts and decentralized applications to use Bitcoin as a secure base layer.
        </p>
        
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What is Stacks?</h3>
            <p className="text-slate-600 mb-4">
                Stacks is a Bitcoin L2 that brings smart contracts and decentralized applications to Bitcoin without modifying Bitcoin itself. It uses a unique consensus mechanism called Proof of Transfer (PoX) that anchors to Bitcoin.
            </p>
            <ul className="space-y-2">
                <li className="flex items-center text-slate-700"><ChevronRight size={16} className="text-brand-orange mr-2"/> Smart contracts that settle on Bitcoin</li>
                <li className="flex items-center text-slate-700"><ChevronRight size={16} className="text-brand-orange mr-2"/> Decentralized applications with Bitcoin security</li>
                <li className="flex items-center text-slate-700"><ChevronRight size={16} className="text-brand-orange mr-2"/> Native Bitcoin integration through sBTC</li>
                <li className="flex items-center text-slate-700"><ChevronRight size={16} className="text-brand-orange mr-2"/> Earn Bitcoin through Stacking</li>
            </ul>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-start">
             <AlertTriangle className="text-brand-orange mr-3 flex-shrink-0 mt-1" />
             <p className="text-orange-800 text-sm">
                 Stacks transactions are as irreversible as Bitcoin transactions, inheriting Bitcoin's security and finality.
             </p>
        </div>
    </div>
);

const ClarityContent = () => (
    <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Clarity Language</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            Clarity is a decidable smart contract language that optimizes for predictability and security. It is designed to be more safe and secure than other smart contract languages.
        </p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Key Features</h2>
        <ul className="space-y-4 mb-6">
            <li className="border-l-4 border-brand-orange pl-4">
                <strong className="block text-slate-900">Decidable</strong>
                <span className="text-slate-600">You can know what a program will do before executing it.</span>
            </li>
            <li className="border-l-4 border-brand-orange pl-4">
                <strong className="block text-slate-900">Interpreted</strong>
                <span className="text-slate-600">No compiler bugs. What you write is what gets executed on the blockchain.</span>
            </li>
        </ul>
        
        <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm text-slate-300 overflow-x-auto">
            <p className="text-slate-500 mb-2">// A simple Clarity contract example</p>
            <p><span className="text-purple-400">define-public</span> (transfer (amount <span className="text-yellow-400">uint</span>) (recipient <span className="text-yellow-400">principal</span>))</p>
            <p className="pl-4">  (<span className="text-blue-400">stx-transfer?</span> amount <span className="text-purple-400">tx-sender</span> recipient)</p>
            <p>)</p>
        </div>
    </div>
);

// Stacking Calculator Component
const StackingCalculator = () => {
    const [amount, setAmount] = useState(1000);
    const [btcPrice, setBtcPrice] = useState(65000);
    const [apy, setApy] = useState(7.5);
    const [earnings, setEarnings] = useState({ btc: 0, usd: 0 });

    useEffect(() => {
        // Simple formula: Amount * (APY/100) / 365 * 15 (cycle length approx 15 days)
        // Then convert value to BTC
        const stxPrice = 1.85;
        const annualUsdEarnings = amount * stxPrice * (apy / 100);
        const cycleUsdEarnings = annualUsdEarnings / 24; // Approx 24 cycles a year
        const cycleBtcEarnings = cycleUsdEarnings / btcPrice;
        
        setEarnings({
            btc: cycleBtcEarnings,
            usd: cycleUsdEarnings
        });
    }, [amount, btcPrice, apy]);

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mt-8">
            <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-4">
                <Calculator className="text-brand-orange" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Stacking Rewards Calculator</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">STX Amount</label>
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none"
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Est. APY (%)</label>
                        <input 
                            type="number" 
                            value={apy}
                            onChange={(e) => setApy(Number(e.target.value))}
                            className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-brand-orange outline-none"
                        />
                    </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 flex flex-col justify-center">
                    <span className="text-xs text-slate-500 uppercase font-bold mb-1">Est. Earnings per Cycle (15 Days)</span>
                    <div className="text-3xl font-bold text-slate-900 mb-1">
                        {earnings.btc.toFixed(6)} BTC
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                        ≈ ${earnings.usd.toFixed(2)} USD
                    </div>
                </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 italic">
                *Estimates only based on current network parameters. Actual rewards vary.
            </p>
        </div>
    );
};

const StackingContent = () => (
    <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Stacking</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            Stacking is Stacks' consensus mechanism that rewards STX holders to earn Bitcoin rewards by participating in network security.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-4">How to Stack</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
            <li>Lock your STX tokens for a specified period</li>
            <li>Support network security and consensus</li>
            <li>Earn Bitcoin rewards paid out every cycle</li>
            <li>Participate directly or through a stacking pool</li>
        </ul>
        
        {/* Interactive Calculator */}
        <StackingCalculator />

         <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 my-6">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Dual Stacking</h3>
            <p className="text-slate-600">
                Dual Stacking is an innovative feature that allows you to earn both Bitcoin and additional STX rewards while stacking.
            </p>
         </div>

         <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-start">
             <AlertTriangle className="text-brand-orange mr-3 flex-shrink-0 mt-1" />
             <p className="text-orange-800 text-sm">
                 Stacking rewards are paid in Bitcoin, making it one of the few ways to earn native Bitcoin yield.
             </p>
        </div>
    </div>
);

const SbtcContent = () => (
    <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">sBTC: Programmable Bitcoin</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            sBTC is a 1:1 Bitcoin-backed asset that enables a trust-minimized way to move BTC in and out of the Stacks layer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-800 text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">Deposit (Peg-in)</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                    <li>Send BTC to network address</li>
                    <li>Wait for confirmation</li>
                    <li>Receive sBTC on Stacks layer</li>
                    <li>Use in Smart Contracts</li>
                </ol>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2 text-slate-900">Withdraw (Peg-out)</h3>
                <ol className="list-decimal list-inside space-y-2 text-slate-600 text-sm">
                    <li>Burn sBTC on Stacks</li>
                    <li>Stackers sign the transaction</li>
                    <li>BTC sent to your address on Bitcoin L1</li>
                    <li>Complete finality</li>
                </ol>
            </div>
        </div>

        <p className="text-slate-600">
            Unlike other wrapped Bitcoin assets, sBTC operates in a decentralized manner using the open membership group of Stackers.
        </p>
    </div>
);

const BuildingContent = () => (
    <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Building on Stacks</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            Start your journey building secured-by-Bitcoin applications.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Development Environment</h3>
        <p className="text-slate-600 mb-4">The primary tool for Stacks development is <code className="bg-slate-100 px-2 py-1 rounded text-red-500 font-mono">Clarinet</code>.</p>
        
        <div className="bg-slate-900 rounded-lg p-6 font-mono text-sm text-slate-300 mb-6">
            <div className="flex justify-between items-center border-b border-slate-700 pb-2 mb-4">
                <span className="text-slate-400">Terminal</span>
                <Terminal size={14} />
            </div>
            <p className="mb-2"><span className="text-green-400">$</span> brew install clarinet</p>
            <p className="mb-2"><span className="text-green-400">$</span> clarinet new my-btc-app</p>
            <p className="mb-2"><span className="text-green-400">$</span> cd my-btc-app</p>
            <p><span className="text-green-400">$</span> clarinet console</p>
        </div>

        <Link to="#" className="inline-flex items-center text-brand-orange font-bold hover:underline">
            View full tutorial <ChevronRight size={16} />
        </Link>
    </div>
);


const NakamotoContent = () => (
     <div className="space-y-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Nakamoto Upgrade</h1>
        <p className="text-lg text-slate-600 leading-relaxed">
            The Nakamoto upgrade has begun rolling out, bringing vast improvements to the Stacks network.
        </p>
        
        <p className="text-slate-600">
            This upgrade represents a significant step forward in making Stacks the premier Bitcoin L2 for smart contracts and DeFi.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-6 mb-4">Key Improvements</h3>
        <ul className="space-y-4">
            <li className="flex items-start">
                 <div className="bg-green-100 p-1 rounded-full mr-3 text-green-600"><ChevronRight size={16}/></div>
                 <div>
                     <strong className="text-slate-900 block">Faster block times</strong>
                     <span className="text-slate-600 text-sm">Transactions confirm in seconds</span>
                 </div>
            </li>
            <li className="flex items-start">
                 <div className="bg-green-100 p-1 rounded-full mr-3 text-green-600"><ChevronRight size={16}/></div>
                 <div>
                     <strong className="text-slate-900 block">Bitcoin finality</strong>
                     <span className="text-slate-600 text-sm">Transactions are as final as Bitcoin</span>
                 </div>
            </li>
             <li className="flex items-start">
                 <div className="bg-green-100 p-1 rounded-full mr-3 text-green-600"><ChevronRight size={16}/></div>
                 <div>
                     <strong className="text-slate-900 block">Improved MEV resistance</strong>
                     <span className="text-slate-600 text-sm">Better protection against manipulation</span>
                 </div>
            </li>
            <li className="flex items-start">
                 <div className="bg-green-100 p-1 rounded-full mr-3 text-green-600"><ChevronRight size={16}/></div>
                 <div>
                     <strong className="text-slate-900 block">Enhanced security</strong>
                     <span className="text-slate-600 text-sm">Stronger connection to Bitcoin</span>
                 </div>
            </li>
        </ul>

         <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 flex items-start mt-6">
             <AlertTriangle className="text-brand-orange mr-3 flex-shrink-0 mt-1" />
             <p className="text-orange-800 text-sm">
                 The Nakamoto upgrade has begun rolling out, bringing these improvements to the Stacks network.
             </p>
        </div>
    </div>
);


const Documentation: React.FC = () => {
    const { slug } = useParams<{ slug?: string }>();
    const currentSlug = slug || 'getting-started';

    const menuItems = [
        { label: 'Getting Started', slug: 'getting-started', icon: <FileText size={18}/> },
        { label: 'Clarity Language', slug: 'clarity-language', icon: <Code size={18}/> },
        { label: 'sBTC', slug: 'sbtc', icon: <Box size={18}/> },
        { label: 'Stacking', slug: 'stacking', icon: <Layers size={18}/> },
        { label: 'Building on Stacks', slug: 'building-on-stacks', icon: <Server size={18}/> },
        { label: 'Nakamoto Upgrade', slug: 'nakamoto-upgrade', icon: <RefreshCw size={18}/> },
    ];

    const renderContent = () => {
        switch(currentSlug) {
            case 'getting-started': return <GettingStartedContent />;
            case 'clarity-language': return <ClarityContent />;
            case 'sbtc': return <SbtcContent />;
            case 'stacking': return <StackingContent />;
            case 'building-on-stacks': return <BuildingContent />;
            case 'nakamoto-upgrade': return <NakamotoContent />;
            default: return <GettingStartedContent />;
        }
    }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
            
            {/* Sidebar */}
            <aside className="md:w-64 flex-shrink-0 hidden md:block">
                <div className="sticky top-28">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6 px-2">Documentation</h2>
                    <nav className="space-y-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.slug}
                                to={`/docs/${item.slug}`}
                                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                    currentSlug === item.slug
                                    ? 'bg-orange-50 text-brand-orange'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                <span className={`mr-3 ${currentSlug === item.slug ? 'text-brand-orange' : 'text-slate-400'}`}>
                                    {item.icon}
                                </span>
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Mobile Menu (simplified) */}
            <div className="md:hidden mb-6">
                <select 
                    className="w-full p-3 border border-slate-300 rounded-md bg-white text-slate-700 font-medium"
                    value={currentSlug}
                    onChange={(e) => window.location.hash = `#/docs/${e.target.value}`}
                >
                    {menuItems.map(item => (
                        <option key={item.slug} value={item.slug}>{item.label}</option>
                    ))}
                </select>
            </div>

            {/* Main Content */}
            <article className="flex-grow max-w-3xl">
                {renderContent()}
            </article>

        </div>
      </div>
    </div>
  );
};

export default Documentation;