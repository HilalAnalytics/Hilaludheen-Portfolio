import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-2xl text-white tracking-tight">
                {portfolioData.hero.name.split(' ')[0]}<span className="text-primary">.ba</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm">
              An aspiring Business Analyst creating data-driven solutions and optimizing processes. Open for internships and entry-level roles.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills & Tools</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="mailto:alex@example.com" className="hover:text-primary transition-colors">Email Me</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
