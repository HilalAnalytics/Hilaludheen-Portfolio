import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Search, Lightbulb, Activity, CheckCircle2 } from 'lucide-react';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title mb-4">Business Case Studies</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Deep-dives into specific business problems, my analytical approach, and the recommended solutions.
        </p>
      </div>

      <div className="space-y-16">
        {portfolioData.caseStudies.map((study, index) => (
          <motion.div 
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col lg:flex-row gap-8 items-stretch ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image side */}
            <div className="w-full lg:w-2/5 relative rounded-2xl overflow-hidden shadow-lg group">
              <img 
                src={study.image} 
                alt={study.title} 
                className="w-full h-full object-cover min-h-[300px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase rounded-full tracking-wider mb-2 inline-block">
                  {study.category}
                </span>
                <h3 className="text-2xl font-bold text-white">{study.title}</h3>
              </div>
            </div>

            {/* Content side */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-red-500 font-semibold">
                  <Search size={20} /> Problem
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{study.problem}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-blue-500 font-semibold">
                  <Activity size={20} /> Analysis
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{study.analysis}</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-amber-500 font-semibold">
                  <Lightbulb size={20} /> Recommendation
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">{study.recommendation}</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3 text-green-600 font-semibold">
                  <CheckCircle2 size={20} /> Business Impact
                </div>
                <p className="text-slate-800 font-medium text-sm leading-relaxed">{study.impact}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
