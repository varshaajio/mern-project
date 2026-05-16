import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 z-50">
            <img 
              src="/images/w3appdevelopers-logo.jpg" 
              alt="W3AppDevelopers Logo" 
              className="h-12 w-12 object-contain rounded-lg"
            />
            <span className={`text-lg font-black tracking-tight hidden sm:block ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              W3App<span className="text-brand">Developers</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-semibold transition-colors hover:text-brand ${
                  location === link.path ? 'text-brand' : isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-brand hover:bg-orange-600 text-white rounded-full px-6 font-semibold shadow-md orange-glow transition-all">
                Get a Quote
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden z-50 p-2 ${isScrolled || mobileMenuOpen ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <div 
          className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-xl font-bold ${
                  location === link.path ? 'text-brand' : 'text-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="mt-4">
              <Button className="w-full bg-brand hover:bg-orange-600 text-white rounded-full py-6 text-lg font-bold">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1 */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <img 
                  src="/images/w3appdevelopers-logo.jpg" 
                  alt="W3AppDevelopers Logo" 
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <span className="text-xl font-black text-white">
                  W3App<span className="text-brand">Developers</span>
                </span>
              </Link>
              <p className="text-slate-400 mb-6 leading-relaxed">
                We are a premium web development, app creation, and digital marketing agency serving businesses of all sizes globally.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-3 inline-block">Company</h3>
              <ul className="flex flex-col gap-3">
                {navLinks.slice(0, 6).map(link => (
                  <li key={link.name}>
                    <Link href={link.path} className="text-slate-400 hover:text-brand transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-3 inline-block">Services</h3>
              <ul className="flex flex-col gap-3 text-slate-400">
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Web Development</li>
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Mobile App Development</li>
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Ecommerce Solutions</li>
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> Digital Marketing</li>
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> SEO Services</li>
                <li className="hover:text-brand transition-colors cursor-pointer flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"></span> AI Agent Development</li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-xl font-bold mb-6 border-b border-slate-700 pb-3 inline-block">Contact Info</h3>
              <ul className="flex flex-col gap-4 text-slate-400">
                <li>
                  <strong className="text-white block mb-1">Address:</strong>
                  No 721/2, Venky complex, Second floor, cross-cut road, Seth Narang Das Layout, Coimbatore – 641 012
                </li>
                <li>
                  <strong className="text-white block mb-1">Phone:</strong>
                  +91 97865 57739<br/>
                  +91 63800 72252
                </li>
                <li>
                  <strong className="text-white block mb-1">Email:</strong>
                  contact@w3appdevelopers.com<br/>
                  sales@w3appdevelopers.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2026 W3AppDevelopers. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
