import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary/80 text-white">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-secondary/40 bg-primary/40 backdrop-blur-sm text-secondary text-sm font-medium tracking-wide">
              Established 1998 • 26+ Years of Trust
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-md">
              Find Your Perfect <br/>
              <span className="text-secondary">Maratha Life Partner</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Maharashtra's No. 1 & Most Trusted Maratha Matrimony Platform. Join 30,000+ families who found their happiness with us.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all transform hover:-translate-y-1">
                Register Now
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Search Profiles
              </button>
            </div>
          </motion.div>

          {/* Quick Search Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-4 md:p-6 shadow-2xl max-w-5xl mx-auto"
          >
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-primary/70 uppercase tracking-wider mb-2 text-left">Looking For</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all">
                  <option>Bride</option>
                  <option>Groom</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary/70 uppercase tracking-wider mb-2 text-left">Age Range</label>
                <div className="flex items-center space-x-2">
                  <select className="w-full bg-background border border-border rounded-lg px-2 py-3 text-foreground focus:ring-2 focus:ring-accent outline-none">
                    <option>18</option>
                    <option>20</option>
                    <option>22</option>
                    <option>25</option>
                    <option>28</option>
                  </select>
                  <span className="text-foreground/50">to</span>
                  <select className="w-full bg-background border border-border rounded-lg px-2 py-3 text-foreground focus:ring-2 focus:ring-accent outline-none">
                    <option>25</option>
                    <option>30</option>
                    <option>35</option>
                    <option>40</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-primary/70 uppercase tracking-wider mb-2 text-left">Education</label>
                <select className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:ring-2 focus:ring-accent outline-none">
                  <option>Doesn't Matter</option>
                  <option>Engineering</option>
                  <option>Medical</option>
                  <option>Arts/Science/Commerce</option>
                  <option>Management</option>
                  <option>Post Graduate</option>
                </select>
              </div>
              <div className="flex items-end">
                <button type="submit" className="w-full h-12 bg-primary text-secondary font-bold rounded-lg hover:bg-accent hover:text-white transition-colors shadow-md flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                  Find Matches
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
