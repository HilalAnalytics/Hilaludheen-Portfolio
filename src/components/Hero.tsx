import { motion } from 'framer-motion';
import { ArrowRight, Download, BarChart2, TrendingUp, PieChart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
        <div className="absolute top-40 -left-40 w-72 h-72 rounded-full bg-indigo-100 opacity-50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 border border-blue-200">
              {portfolioData.hero.role}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Hi, I'm <span className="text-primary">{portfolioData.hero.name}</span> <br/>
              <span className="text-slate-700 text-3xl md:text-4xl lg:text-5xl">{portfolioData.hero.tagline}</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              {portfolioData.hero.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="/Hilaludheen_Resume.pdf" download className="btn-outline flex items-center gap-2">
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Mockup Graphic */}
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 relative z-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div>
                  <h3 className="font-bold text-slate-800">Business Analytics Overview</h3>
                  <p className="text-xs text-slate-500">Real-time mock data</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-slate-500 text-sm mb-1 flex items-center gap-2"><TrendingUp size={16} className="text-green-500"/> Conversion Rate</div>
                  <div className="text-2xl font-bold text-slate-800">12.4%</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="text-slate-500 text-sm mb-1 flex items-center gap-2"><PieChart size={16} className="text-blue-500"/> Market Share</div>
                  <div className="text-2xl font-bold text-slate-800">34.2%</div>
                </div>
              </div>

              {/* Mock Chart Area */}
              <div className="h-40 bg-blue-50/50 rounded-xl border border-blue-100 flex items-end px-4 pb-4 gap-2">
                {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
                  <div key={i} className="flex-1 bg-primary/80 rounded-t-sm hover:bg-primary transition-colors cursor-pointer" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <BarChart2 size={24} />
              </div>
              <div>
                <div className="font-bold text-slate-800">Excel / SQL</div>
                <div className="text-xs text-slate-500">Advanced Proficiency</div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
