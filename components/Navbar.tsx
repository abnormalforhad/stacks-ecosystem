import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon, Search, Wallet, ChevronDown, ExternalLink, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Events', path: '/events' },
    { name: 'Blog', path: '/blog' },
    { name: 'Docs', path: '/docs' },
  ];

  const handleConnect = (wallet: string) => {
      // Mock connection delay
      setTimeout(() => {
          setWalletAddress('SP3...9J4');
          setIsWalletModalOpen(false);
      }, 500);
  };

  const handleDisconnect = () => {
      setWalletAddress(null);
  };

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group z-50">
            <div className="relative w-8 h-8 flex items-center justify-center">
               <Hexagon className="text-brand-orange w-full h-full fill-current" />
               <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-4 h-4 bg-white transform rotate-45"></div>
               </div>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-brand-orange transition-colors">Stacks</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-slate-500 hover:text-brand-orange transition-colors"
            >
                <Search size={20} />
            </button>

            {walletAddress ? (
                <div className="relative group">
                    <button className="flex items-center space-x-2 bg-slate-100 text-slate-900 px-4 py-2 rounded-md font-semibold text-sm hover:bg-slate-200 transition-colors">
                        <Wallet size={16} className="text-brand-orange" />
                        <span>{walletAddress}</span>
                        <ChevronDown size={14} />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                        <button 
                            onClick={handleDisconnect}
                            className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-slate-50 rounded-md"
                        >
                            <LogOut size={16} className="mr-2" /> Disconnect
                        </button>
                    </div>
                </div>
            ) : (
                <button 
                    onClick={() => setIsWalletModalOpen(true)}
                    className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors shadow-sm flex items-center"
                >
                    <Wallet size={16} className="mr-2" />
                    Connect Wallet
                </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-slate-500"
            >
                <Search size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      <div className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 overflow-hidden transition-all duration-300 ${isSearchOpen ? 'max-h-20 py-4 shadow-md' : 'max-h-0 py-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                  <input 
                    type="text" 
                    placeholder="Search documentation, blogs, and ecosystem..." 
                    className="w-full bg-slate-100 border-none rounded-md py-2 pl-10 pr-4 focus:ring-2 focus:ring-brand-orange focus:outline-none"
                  />
              </div>
          </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 h-screen">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium hover:bg-slate-50 ${
                  location.pathname === link.path ? 'text-brand-orange' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-4">
                 {walletAddress ? (
                    <button 
                        onClick={handleDisconnect}
                        className="w-full bg-slate-100 text-slate-900 px-5 py-3 rounded-md font-semibold text-base flex justify-center items-center"
                    >
                         <Wallet size={18} className="mr-2 text-brand-orange" />
                         {walletAddress} (Disconnect)
                    </button>
                 ) : (
                    <button 
                        onClick={() => { setIsOpen(false); setIsWalletModalOpen(true); }}
                        className="w-full bg-brand-orange text-white px-5 py-3 rounded-md font-semibold text-base flex justify-center items-center"
                    >
                        Connect Wallet
                    </button>
                 )}
            </div>
          </div>
        </div>
      )}
    </nav>

    {/* Wallet Modal */}
    {isWalletModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsWalletModalOpen(false)}></div>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-slate-900">Connect Wallet</h3>
                    <button onClick={() => setIsWalletModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 space-y-3">
                    <button onClick={() => handleConnect('leather')} className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-orange hover:bg-orange-50 transition-all group">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                            <span className="font-bold text-slate-900">Leather</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-brand-orange"></div>
                    </button>
                    <button onClick={() => handleConnect('xverse')} className="w-full flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-brand-orange hover:bg-orange-50 transition-all group">
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">X</div>
                            <span className="font-bold text-slate-900">Xverse</span>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-brand-orange"></div>
                    </button>
                </div>
                <div className="p-4 bg-slate-50 text-center text-xs text-slate-500">
                    By connecting a wallet, you agree to Stacks Terms of Service.
                </div>
            </div>
        </div>
    )}
    </>
  );
};

export default Navbar;