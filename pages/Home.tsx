import React from 'react';
import { ArrowRight, ChevronRight, Zap, ShieldCheck, Leaf, Lock, Users, Briefcase, Coins, LayoutGrid, TrendingUp, Activity, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';

const FeaturedNewsCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-lg mb-4">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-2">
       <span className="text-brand-orange px-2 py-0.5 rounded bg-orange-100">{post.category}</span>
       <span className="text-slate-500">{post.date}</span>
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
      {post.title}
    </h3>
    <p className="text-slate-600 text-sm line-clamp-3">
      {post.excerpt}
    </p>
  </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
    <div className="text-brand-orange mb-4 bg-white p-3 inline-block rounded-lg shadow-sm border border-slate-100">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {description}
    </p>
  </div>
);

const ProjectCard: React.FC<{ title: string; desc: string; image: string }> = ({ title, desc, image }) => (
    <div className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-750 border border-slate-700 transition-colors group">
        <div className="h-32 overflow-hidden relative">
            <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="p-4">
            <h4 className="font-bold text-white mb-1">{title}</h4>
            <p className="text-xs text-slate-400">{desc}</p>
        </div>
    </div>
);

const CommunityCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; linkText: string; linkUrl: string }> = ({ icon, title, desc, linkText, linkUrl }) => (
    <a href={linkUrl} className="block p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-shadow bg-white">
        <div className="w-12 h-12 flex items-center justify-center bg-orange-50 rounded-lg text-brand-orange mb-6">
            {icon}
        </div>
        <p className="text-slate-500 text-sm mb-2">{desc}</p>
        <h3 className="text-xl font-bold text-slate-900 flex items-center">
            {linkText} <ArrowRight className="ml-2 w-4 h-4" />
        </h3>
    </a>
)

const StatItem: React.FC<{ icon: React.ReactNode; label: string; value: string; change?: string }> = ({ icon, label, value, change }) => (
    <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 backdrop-blur-md">
        <div className="text-brand-orange">{icon}</div>
        <div>
            <div className="text-xs text-slate-400 font-medium uppercase">{label}</div>
            <div className="text-white font-bold flex items-center">
                {value}
                {change && <span className="ml-2 text-green-400 text-xs">{change}</span>}
            </div>
        </div>
    </div>
);

const Home: React.FC = () => {
  const newsPosts: BlogPost[] = [
    {
      id: '1',
      title: 'USDCx Live on Apps: Bringing Stablecoin Utility to Bitcoin',
      excerpt: 'USDCx is now live across multiple Stacks applications, enabling seamless stablecoin transactions secured by Bitcoin finality.',
      date: 'January 20, 2024',
      category: 'Ecosystem',
      imageUrl: 'https://picsum.photos/seed/stacks1/800/600',
    },
    {
      id: '2',
      title: 'Governance Tooling: Introducing the "SIP" Tracker',
      excerpt: 'New governance tools make it easier than ever to track and participate in Stacks Improvement Proposals (SIPs).',
      date: 'January 28, 2024',
      category: 'Governance',
      imageUrl: 'https://picsum.photos/seed/stacks2/800/600',
    },
    {
      id: '3',
      title: 'Stacks Devs: New Ways to Earn & Build in 2024',
      excerpt: 'Discover the latest opportunities for developers to earn while building on the Bitcoin ecosystem.',
      date: 'January 16, 2024',
      category: 'Community',
      imageUrl: 'https://picsum.photos/seed/stacks3/800/600',
    },
    {
       id: '4',
       title: 'Fireblocks Support Coming to Stacks: Institutional Bitcoin DeFi',
       excerpt: 'Major institutional infrastructure provider Fireblocks announces support for Stacks, bringing institutional capital to Bitcoin DeFi.',
       date: 'February 4, 2024',
       category: 'Partnership',
       imageUrl: 'https://picsum.photos/seed/stacks4/800/600',
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-slate-900"></div>
            {/* Abstract Background pattern simulation */}
            <svg className="absolute top-0 right-0 w-2/3 h-full opacity-30 text-brand-orange" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 0 L100 0 L100 100 Z" fill="url(#grad1)" />
                 <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'rgb(240,93,35)', stopOpacity:0.2}} />
                    <stop offset="100%" style={{stopColor:'rgb(76,29,149)', stopOpacity:0}} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col items-center justify-center min-h-[40vh] text-center mb-12">
               <div className="mb-8 p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-pulse">
                  <Coins className="w-16 h-16 text-brand-orange" />
               </div>
               <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 text-center max-w-4xl">
                 Unleash Bitcoin's Full Potential
               </h1>
               <p className="text-xl text-slate-300 text-center max-w-2xl mb-10 leading-relaxed">
                 Stacks is a Bitcoin Layer 2 that enables smart contracts and decentralized applications to use Bitcoin as a secure base layer.
               </p>
               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/docs" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-md font-bold hover:bg-white transition-colors">
                    BUILD APPS
                  </Link>
                  <Link to="/ecosystem" className="bg-transparent border border-slate-500 text-white px-8 py-4 rounded-md font-bold hover:bg-slate-800 transition-colors flex items-center justify-center">
                    EXPLORE APPS <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
               </div>
           </div>

           {/* Network Stats Ticker */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                <StatItem icon={<TrendingUp size={20}/>} label="STX Price" value="$1.85" change="+4.2%" />
                <StatItem icon={<Activity size={20}/>} label="Total Value Locked" value="$154.2M" />
                <StatItem icon={<Database size={20}/>} label="Block Height" value="#142,503" />
                <StatItem icon={<Zap size={20}/>} label="Nakamoto Status" value="Active" />
           </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Latest news</h2>
            <Link to="/blog" className="text-brand-orange font-bold hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsPosts.map((post) => (
              <FeaturedNewsCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Meet Satoshi Upgrades - Feature Highlight */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white mb-10 relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full filter blur-[128px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="relative z-10 max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the 'Satoshi Upgrades'</h2>
                <p className="text-lg text-slate-300 mb-8">
                    A major milestone unlocking fast blocks and Bitcoin finality.
                </p>
                <Link to="/docs/nakamoto-upgrade" className="bg-brand-orange hover:bg-orange-600 text-white px-6 py-3 rounded-md font-bold inline-flex items-center transition-colors">
                    Deep dive <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenefitCard 
                icon={<Zap size={24}/>}
                title="Beautiful Bitcoin DeFi" 
                description="More flexibility, more composability, more security; major upgrades ahead for Bitcoin DeFi on the leading Bitcoin L2."
            />
            <BenefitCard 
                icon={<ShieldCheck size={24}/>}
                title="Self-custodial on-ramps" 
                description="Take a look ahead at designs that will eliminate sBTC custody risk by enabling users further control over the underlying BTC."
            />
            <BenefitCard 
                icon={<Leaf size={24}/>}
                title="Sustainable Bitcoin Yields" 
                description="Dust Stacking, Vaults, PoX power-ups and more. Learn what's ahead for those that want real Bitcoin yield."
            />
          </div>
        </div>
      </section>

      {/* Why Bitcoin? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row md:items-start md:space-x-12">
               <div className="md:w-1/3 mb-10 md:mb-0">
                   <h2 className="text-4xl font-bold text-slate-900 sticky top-24">Why Bitcoin?</h2>
               </div>
               <div className="md:w-2/3 space-y-12">
                   <div className="flex space-x-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange font-bold text-xl">1</div>
                       <div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-3">Secure</h3>
                           <p className="text-slate-600 leading-relaxed">Bitcoin is the most battle-tested and decentralized blockchain. With Stacks as a base layer, users and developers also benefit from the properties that make Bitcoin so powerful and secure.</p>
                       </div>
                   </div>
                   <div className="flex space-x-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange font-bold text-xl">2</div>
                       <div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-3">Adopted</h3>
                           <p className="text-slate-600 leading-relaxed">Bitcoin is the most familiar, adopted crypto asset, giving builders access to an enormous user base and untapped capital.</p>
                       </div>
                   </div>
                   <div className="flex space-x-6">
                       <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-brand-orange font-bold text-xl">3</div>
                       <div>
                           <h3 className="text-2xl font-bold text-slate-900 mb-3">Untapped</h3>
                           <p className="text-slate-600 leading-relaxed">Over $1 Trillion in latent capital is waiting for builders, founders, and creators to activate it.</p>
                       </div>
                   </div>
               </div>
           </div>
        </div>
      </section>

      {/* Build on Bitcoin */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/2">
                      <div className="inline-block bg-slate-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-6 text-slate-400">Developers</div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Build on Bitcoin, the most secure base layer</h2>
                      
                      <ul className="space-y-6 mb-10">
                          <li className="flex items-start">
                              <Lock className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                              <div>
                                  <h4 className="font-bold text-lg">SECURED BY BITCOIN</h4>
                                  <p className="text-slate-400 text-sm">Transactions on Stacks will be as irreversible as Bitcoin's.</p>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <Users className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                              <div>
                                  <h4 className="font-bold text-lg">BITCOIN NETWORK EFFECTS</h4>
                                  <p className="text-slate-400 text-sm">Build experiences for a massive, largely untapped audience.</p>
                              </div>
                          </li>
                          <li className="flex items-start">
                              <Briefcase className="text-brand-orange mt-1 mr-4 flex-shrink-0" size={20} />
                              <div>
                                  <h4 className="font-bold text-lg">SMART CONTRACTS WITH CLARITY</h4>
                                  <p className="text-slate-400 text-sm">A security-first programming language with visibility on Bitcoin state.</p>
                              </div>
                          </li>
                      </ul>

                      <Link to="/docs" className="inline-block bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold transition-colors">
                          Start Building
                      </Link>
                  </div>

                  <div className="lg:w-1/2">
                      <div className="grid grid-cols-2 gap-4">
                          <ProjectCard 
                            title="Zest Protocol" 
                            desc="Zest Protocol is a lending protocol, built for Bitcoin." 
                            image="https://picsum.photos/seed/zest/400/300" 
                          />
                          <ProjectCard 
                            title="STX20" 
                            desc="The STX20 protocol introduces a novel approach to creating..." 
                            image="https://picsum.photos/seed/stx20/400/300" 
                          />
                          <ProjectCard 
                            title="Stacking DAO" 
                            desc="Liquidity for stacked tokens on Stacks" 
                            image="https://picsum.photos/seed/dao/400/300" 
                          />
                          <ProjectCard 
                            title="Hermetica" 
                            desc="A Bitcoin-backed, yield-bearing synthetic dollar protocol." 
                            image="https://picsum.photos/seed/hermetica/400/300" 
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* sBTC Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-500 to-purple-600 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row items-center">
                 <div className="md:w-1/2 h-64 md:h-96 relative bg-black/20">
                    <img src="https://picsum.photos/seed/btc/800/600" alt="Bitcoin" className="w-full h-full object-cover mix-blend-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-white/30 flex items-center justify-center">
                            <span className="text-6xl text-white font-bold">₿</span>
                        </div>
                    </div>
                 </div>
                 <div className="md:w-1/2 p-10 md:p-16 text-white">
                     <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded mb-4 inline-block">sBTC</span>
                     <h2 className="text-4xl font-bold mb-6">Programmable Bitcoin for Builders</h2>
                     <p className="mb-8 text-white/90 leading-relaxed">
                         Welcome sBTC — a 1:1 Bitcoin-backed asset that fully unlocks BTC's capital. A decentralized way to move BTC from Bitcoin L1 to L2 and back. Now Live on Stacks.
                     </p>
                     <div className="flex space-x-4">
                         <button className="bg-white text-slate-900 px-6 py-3 rounded font-bold hover:bg-slate-100 transition-colors">
                             sBTC -&gt;
                         </button>
                         <Link to="/docs/sbtc" className="bg-transparent border border-white text-white px-6 py-3 rounded font-bold hover:bg-white/10 transition-colors">
                             DOCS -&gt;
                         </Link>
                     </div>
                 </div>
            </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-12">Join the community</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <CommunityCard 
                    icon={<LayoutGrid className="w-6 h-6"/>} // Placeholder icon for telegram
                    title="TELEGRAM"
                    desc="News and updates."
                    linkText="TELEGRAM"
                    linkUrl="#"
                />
                 <CommunityCard 
                    icon={<ChevronRight className="w-6 h-6"/>} // Placeholder for X
                    title="X.COM"
                    desc="Follow the conversation."
                    linkText="X.COM"
                    linkUrl="#"
                />
                 <CommunityCard 
                    icon={<ChevronRight className="w-6 h-6"/>} // Placeholder for Discord
                    title="DISCORD"
                    desc="Chat in real time."
                    linkText="DISCORD"
                    linkUrl="#"
                />
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;