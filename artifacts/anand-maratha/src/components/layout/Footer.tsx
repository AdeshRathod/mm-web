import React from "react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-primary text-secondary/90 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-secondary flex items-center gap-2">
              <div className="bg-secondary/20 p-1.5 rounded-full text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              Anand Maratha
            </h3>
            <p className="text-sm leading-relaxed text-secondary/80">Maharashtra's No. 1 & Most Trusted Maratha Matrimony Platform — Serving the Community for 26+ Years.</p>
            
            <div className="pt-2 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <p>207, 2nd Floor, Atharva Plaza, Opp. Shankar Math, Satara Road, Dhankawadi, Pune 411043</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+919822214005" className="hover:text-white transition-colors">+91 98222 14005</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:contact@anandmaratha.com" className="hover:text-white transition-colors">contact@anandmaratha.com</a>
              </div>
              <div className="flex items-start gap-3 text-secondary/70">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <p>Tue-Sun 11AM–7PM<br/>Monday Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Home</Link></li>
              <li><Link href="/rules" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Rules</Link></li>
              <li><Link href="/enroll" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Enroll</Link></li>
              <li><Link href="/renew" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Renew</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Search Profiles</h4>
            <ul className="space-y-3">
              <li><Link href="/profiles/grooms" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Maratha Grooms</Link></li>
              <li><Link href="/profiles/brides" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Maratha Brides</Link></li>
              <li><Link href="/profiles/divorcee-grooms" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Divorcee Grooms</Link></li>
              <li><Link href="/profiles/divorcee-brides" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Divorcee Brides</Link></li>
              <li><Link href="/search/id" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Single ID Search</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">Legal & Support</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Refund Policy</Link></li>
              <li><Link href="/safety" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-secondary/50">›</span> Member Safety Guidelines</Link></li>
            </ul>
            
            <div className="mt-8">
              <h5 className="font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-secondary/20 mt-12 pt-8 text-center text-sm text-secondary/60">
          <p>© {new Date().getFullYear()} Anand Maratha Marriage Bureau. All rights reserved. | Designed by Suhas Shirke</p>
        </div>
      </div>
    </footer>
  );
}
