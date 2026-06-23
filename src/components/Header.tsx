import { useState } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Header({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <BarChart2 size={24} />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              {portfolioData.hero.name.split(' ')[0]}<span className="text-primary">.ba</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary bg-blue-50'
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Download Resume Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <a 
              href="/Hilaludheen_Resume.pdf" 
              download
              className="btn-outline text-sm px-4 py-2 ml-4 flex items-center gap-2"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary bg-blue-50'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
