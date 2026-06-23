import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const ProgressBar = ({ name, level }: { name: string, level: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-slate-700">{name}</span>
      <span className="text-sm font-medium text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2">
      <motion.div 
        className="bg-primary h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-slate-50">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Technical Skills */}
        <div className="space-y-8">
          <div className="card p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary flex items-center justify-center">💼</span>
              Business Analysis
            </h3>
            {portfolioData.skills.businessAnalysis.map((skill, i) => (
              <ProgressBar key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="card p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">📊</span>
              Data Analytics
            </h3>
            {portfolioData.skills.dataAnalytics.map((skill, i) => (
              <ProgressBar key={i} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Tools and Soft Skills */}
        <div className="space-y-8">
          <div className="card p-8 h-full">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">🛠️</span>
              Toolkit
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.tools.map((tool, i) => (
                <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default border border-slate-200">
                  {tool}
                </span>
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 mb-6 mt-12 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">🤝</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.softSkills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white border border-slate-200 shadow-sm text-slate-700 rounded-lg text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
