import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="timeline" className="section-container bg-white">
      <h2 className="section-title">Experience & Education</h2>
      
      <div className="max-w-4xl mx-auto mt-16 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b befor[...]
        
        {portfolioData.timeline && portfolioData.timeline.map((item, index) => {
          const isEducation = item.type === 'education';
          return (
            <div key={`timeline-${index}`} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:trans[...]
                {isEducation ? <GraduationCap size={20} /> : <Award size={20} />}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`${isEducation ? 'text-primary' : 'text-amber-600'} font-bold`}>{item.subtitle}</span>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                    <Calendar size={12} /> {item.period}
                  </span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{item.details}</p>
                
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {item.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          );
        })}

        {/* Certifications Nodes */}
        {portfolioData.certifications.map((cert, index) => (
          <div key={`cert-${index}`} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-12">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-[...]
              <Award size={20} />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-amber-600 font-bold">{cert.issuer}</span>
                <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded-full border border-slate-200 flex items-center gap-1">
                  <Calendar size={12} /> {cert.date}
                </span>
              </div>
              <h3 className="font-bold text-slate-800 text-lg">{cert.name}</h3>
            </motion.div>
          </div>
        ))}
        
      </div>
    </section>
  );
}