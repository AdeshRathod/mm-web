import React from "react";
import { SiGoogleplay, SiApple } from "react-icons/si";

export function AppDownloadBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/40 to-background border-y border-secondary/20 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white/60 backdrop-blur-sm border border-white/80 p-8 md:p-12 rounded-3xl shadow-xl">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Download the Anand Maratha App</h2>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              Browse profiles, respond to matches, and manage your account seamlessly — all from your phone. Stay connected to your search wherever you go.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a href="#" className="flex items-center gap-3 bg-primary text-white px-6 py-3.5 rounded-xl hover:bg-accent transition-colors shadow-md w-full sm:w-auto justify-center">
                <SiGoogleplay className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 font-medium">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">Google Play</div>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-primary text-white px-6 py-3.5 rounded-xl hover:bg-accent transition-colors shadow-md w-full sm:w-auto justify-center">
                <SiApple className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-80 font-medium">Download on the</div>
                  <div className="text-sm font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:block w-1/3">
            {/* Minimalist phone mockup representation */}
            <div className="relative mx-auto w-48 h-96 bg-primary rounded-[2.5rem] border-8 border-primary/90 shadow-2xl overflow-hidden flex items-center justify-center">
              <div className="absolute top-0 w-32 h-6 bg-primary/90 rounded-b-3xl z-20"></div>
              <div className="w-full h-full bg-background relative z-10 p-4 pt-10 flex flex-col gap-4">
                <div className="w-full h-32 bg-muted rounded-xl"></div>
                <div className="w-3/4 h-4 bg-muted rounded-full"></div>
                <div className="w-1/2 h-4 bg-muted rounded-full"></div>
                <div className="w-full h-24 bg-secondary/30 rounded-xl mt-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
