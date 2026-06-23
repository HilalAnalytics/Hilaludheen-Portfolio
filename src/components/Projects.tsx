import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const categories = ["All", "Power BI Projects", "SQL Projects", "Market Research"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-container bg-slate-50">
      <h2 className="section-title">Technical Projects</h2>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === cat 
                ? 'bg-primary text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="card flex flex-col h-full"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.demoUrl} className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.githubUrl} className="w-10 h-10 bg-white text-slate-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform" aria-label="GitHub Repo">
                    <Github size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
