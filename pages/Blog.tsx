import React from 'react';
import { BlogPost } from '../types';

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="group cursor-pointer flex flex-col h-full">
      <div className="overflow-hidden rounded-lg mb-4 h-56">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider mb-2">
         <span className="text-brand-orange px-2 py-0.5 rounded bg-orange-100">{post.category}</span>
         <span className="text-slate-500">{post.date}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-orange transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow">
        {post.excerpt}
      </p>
    </div>
  );

const Blog: React.FC = () => {
    // Extended list of blog posts
    const posts: BlogPost[] = [
        {
          id: '1',
          title: 'Fireblocks Support Coming to Stacks: Institutional Bitcoin DeFi',
          excerpt: 'Major institutional infrastructure provider Fireblocks announces support for Stacks, bringing institutional capital to Bitcoin DeFi.',
          date: 'February 4, 2024',
          category: 'Partnership',
          imageUrl: 'https://picsum.photos/seed/blog1/800/600',
        },
        {
          id: '2',
          title: 'USDCx Live on Apps: Bringing Stablecoin Utility to Bitcoin',
          excerpt: 'USDCx is now live across multiple Stacks applications, enabling seamless stablecoin transactions secured by Bitcoin finality.',
          date: 'January 20, 2024',
          category: 'Ecosystem',
          imageUrl: 'https://picsum.photos/seed/blog2/800/600',
        },
        {
          id: '3',
          title: 'Introducing the SIP Tracker: Enhanced Governance Tooling',
          excerpt: 'New governance tools make it easier than ever to track and participate in Stacks Improvement Proposals (SIPs).',
          date: 'January 28, 2024',
          category: 'Governance',
          imageUrl: 'https://picsum.photos/seed/blog3/800/600',
        },
        {
          id: '4',
          title: 'Stacks Devs: New Ways to Earn & Build in 2024',
          excerpt: 'Discover the latest opportunities for developers to earn while building on the Bitcoin ecosystem.',
          date: 'January 16, 2024',
          category: 'Community',
          imageUrl: 'https://picsum.photos/seed/blog4/800/600',
        },
        {
            id: '5',
            title: 'Stacks RSB: Bitcoin Staking and Beyond',
            excerpt: 'A deep dive into the research and development efforts shaping the future of Bitcoin staking on Stacks.',
            date: 'December 18, 2023',
            category: 'Research',
            imageUrl: 'https://picsum.photos/seed/blog5/800/600',
        },
        {
            id: '6',
            title: 'Beautiful Bitcoin DeFi: The Nakamoto Upgrade',
            excerpt: 'Exploring how the Nakamoto upgrade brings unprecedented flexibility and security to Bitcoin DeFi.',
            date: 'December 15, 2023',
            category: 'Technology',
            imageUrl: 'https://picsum.photos/seed/blog6/800/600',
        },
        {
            id: '7',
            title: 'sBTC Launch: Programmable Bitcoin is Here',
            excerpt: 'The official launch of sBTC marks a new era for programmable Bitcoin and decentralized apps.',
            date: 'November 28, 2023',
            category: 'Launch',
            imageUrl: 'https://picsum.photos/seed/blog7/800/600',
        },
        {
            id: '8',
            title: 'Building on Bitcoin: A Developer\'s Guide',
            excerpt: 'Everything you need to know to start building decentralized applications on the Bitcoin network via Stacks.',
            date: 'November 20, 2023',
            category: 'Tutorial',
            imageUrl: 'https://picsum.photos/seed/blog8/800/600',
        },
        {
            id: '9',
            title: 'Community Spotlight: Top Stacks Projects of 2023',
            excerpt: 'Celebrating the most innovative and impactful projects built on Stacks this year.',
            date: 'November 5, 2023',
            category: 'Community',
            imageUrl: 'https://picsum.photos/seed/blog9/800/600',
        }
    ];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Stacks Blog</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                News, updates, and insights from the Stacks ecosystem
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>

        <div className="mt-16 text-center">
            <button className="border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-8 rounded-md transition-colors">
                Load More Articles
            </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;