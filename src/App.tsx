import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />

      {/* Floating Hire Me Button */}
      <a 
        href="#contact" 
        className="fixed bottom-8 right-8 z-50 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-105 flex items-center gap-2 font-medium"
      >
        <span>Hire Me</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}

export default App;
