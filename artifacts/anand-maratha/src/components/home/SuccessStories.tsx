import React from "react";
import { Link } from "wouter";
import couple1 from "../../assets/images/couple-1.png";
import couple2 from "../../assets/images/couple-2.png";
import couple3 from "../../assets/images/couple-3.png";

const STORIES = [
  {
    image: couple1,
    names: "Rahul & Priya Chavan — Pune",
    quote: "We found each other through Anand Maratha and couldn't be happier. The verified profiles gave our families peace of mind.",
    year: "2023"
  },
  {
    image: couple2,
    names: "Amit & Sneha Deshmukh — Nashik",
    quote: "Thank you Anand Maratha for helping me find my soulmate. The search filters made finding someone from my native place easy.",
    year: "2022"
  },
  {
    image: couple3,
    names: "Sunil & Kavita More — Mumbai",
    quote: "A trustworthy platform with excellent service. Our families met and everything fell into place beautifully.",
    year: "2024"
  }
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-2 block">Real Stories, Real Happiness</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">28,000+ Couples Found Their Match Here</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {STORIES.map((story, index) => (
            <div key={index} className="bg-background rounded-2xl overflow-hidden shadow-md border border-border flex flex-col group hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                <img 
                  src={story.image} 
                  alt={story.names} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Married {story.year}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative">
                <div className="absolute -top-6 left-8 bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>
                <h3 className="font-serif font-bold text-xl text-primary mb-3 mt-4">{story.names}</h3>
                <p className="text-foreground/80 italic leading-relaxed text-sm mb-6 flex-1">"{story.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/success-stories" className="inline-block px-8 py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-accent hover:text-white transition-colors shadow-md">
            See All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
