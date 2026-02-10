import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, Twitter, MessageCircle, Send, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Dive deeper into Stacks</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/docs" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-md font-semibold transition-colors">
              DOCS
            </Link>
            <Link to="/ecosystem" className="bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-md font-semibold transition-colors">
              Explore the ecosystem
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
             <Link to="/" className="flex items-center space-x-2 mb-6">
                <Hexagon className="text-slate-300 w-8 h-8" />
            </Link>
          </div>
          
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Explore</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/ecosystem" className="hover:text-brand-orange">Wallets</Link></li>
              <li><Link to="/docs/stacking" className="hover:text-brand-orange">Stacking</Link></li>
              <li><Link to="/blog" className="hover:text-brand-orange">Blog</Link></li>
              <li><Link to="/events" className="hover:text-brand-orange">Events</Link></li>
              <li><Link to="/ecosystem" className="hover:text-brand-orange">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Learn</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/docs/sbtc" className="hover:text-brand-orange">sBTC</Link></li>
              <li><Link to="/docs/clarity-language" className="hover:text-brand-orange">Clarity</Link></li>
              <li><Link to="/docs/stacking" className="hover:text-brand-orange">Proof of Transfer</Link></li>
              <li><Link to="/docs/nakamoto-upgrade" className="hover:text-brand-orange">Nakamoto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Build</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/docs/getting-started" className="hover:text-brand-orange">Guide</Link></li>
              <li><Link to="/docs/building-on-stacks" className="hover:text-brand-orange">Tools</Link></li>
              <li><a href="#" className="hover:text-brand-orange">Whitepaper</a></li>
              <li><a href="#" className="hover:text-brand-orange">Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 mb-4">Social</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-orange flex items-center"><Twitter size={14} className="mr-2"/> X.com</a></li>
              <li><a href="#" className="hover:text-brand-orange flex items-center"><MessageCircle size={14} className="mr-2"/> Discord</a></li>
              <li><a href="#" className="hover:text-brand-orange flex items-center"><Github size={14} className="mr-2"/> Reddit</a></li>
              <li><a href="#" className="hover:text-brand-orange flex items-center"><Youtube size={14} className="mr-2"/> YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-200 pt-8 text-sm text-slate-500">
          <p>© 2024 Stacks Open Internet Foundation</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-900"><Twitter size={20} /></a>
             <a href="#" className="hover:text-slate-900"><Github size={20} /></a>
             <a href="#" className="hover:text-slate-900"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;