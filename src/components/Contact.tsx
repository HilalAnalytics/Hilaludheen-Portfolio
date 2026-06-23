import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="section-container bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-primary text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-blue-100 mb-12 leading-relaxed">
                I am actively seeking internship and entry-level Business Analyst opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-blue-200"/>
                  </div>
                  <span>{portfolioData.contact.email}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-blue-200"/>
                  </div>
                  <span>{portfolioData.contact.phone}</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-blue-200"/>
                  </div>
                  <span>{portfolioData.contact.location}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <h4 className="text-sm text-blue-200 font-semibold uppercase tracking-wider mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3 p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none"
                  placeholder="Opportunity: Junior Business Analyst"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors outline-none resize-none"
                  placeholder="Hi Alex, we have an opening for..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
