import React from "react";
import { CheckCircle2, ShieldCheck, Gem, IndianRupee, Database, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: <Gem className="w-8 h-8" />,
    title: "Exclusively Maratha",
    description: "Only verified Maratha profiles. All subcastes welcome: 96 Kuli, Deshmukh, Kunbi, and more."
  },
  {
    icon: <CheckCircle2 className="w-8 h-8" />,
    title: "Trusted for 26+ Years",
    description: "Founded in Pune, serving Maharashtra and NRI Maratha families worldwide since 1998."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Safe & Verified",
    description: "All profiles are manually verified for authenticity. Your privacy is fully protected."
  },
  {
    icon: <IndianRupee className="w-8 h-8" />,
    title: "Affordable",
    description: "Just ₹2,000/year. Quality, trustworthy matchmaking that's accessible for everyone."
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Large Database",
    description: "16,000+ new profiles every year. Browse Grooms, Brides, and Divorcee profiles easily."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Expert Support",
    description: "Our office in Pune is open Tuesday–Sunday 11 AM – 7 PM to assist your family."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Why Choose Anand Maratha?</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">We understand the importance of choosing the right family. Our platform is built on trust, respect, and tradition.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="bg-card border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3 font-serif">{feature.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
