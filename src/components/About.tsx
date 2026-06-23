import { motion } from 'framer-motion';
import { Target, TrendingUp, PieChart, Users, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to actual Lucide components
const iconMap: Record<string, any> = {
  Target,
  TrendingUp,
  PieChart,
  Users
};

export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm mb-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {portfolioData.about.summary}
          </p>
          <div className="p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg">
            <h4 className="font-semibold text-slate-800 mb-1">Career Goal</h4>
            <p className="text-slate-600 italic">
              "{portfolioData.about.goals}"
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Competencies</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.about.strengths.map((strength, index) => {
            const Icon = iconMap[strength.icon] || CheckCircle2;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 flex flex-col items-center text-center hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h4 className="font-semibold text-slate-800">{strength.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
