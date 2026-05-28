import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Search, FileText, HeartHandshake, Users, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Enroll",
    description: "Create your profile and share your details with us. Pay a one-time fee of just ₹2,000.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Find Your Match",
    description: "Use our smart search filters — age, education, native place, and more — to discover compatible profiles.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Get Profile Information",
    description: "Submit a response form to receive the contact details of profiles you like.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Send Interest",
    description: "An automatic interest notification is sent to your match — they respond with Yes or No.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Start Meetups",
    description: "Families meet and get to know each other in person.",
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: "Getting Married",
    description: "Celebrate your union and join our 30,000+ success stories!",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">How It Works — Your Journey to Marriage</h2>
          <p className="text-foreground/70 text-lg">We've made the process simple, transparent, and respectful of your family's values.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line connecting steps (desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-1 bg-secondary/30 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content half */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} mb-8 md:mb-0`}>
                    <div className={`bg-background border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative
                                    ${isEven ? 'md:after:content-[""] md:after:absolute md:after:top-1/2 md:after:-left-3 md:after:w-3 md:after:h-3 md:after:bg-background md:after:border-l md:after:border-b md:after:border-border md:after:-translate-y-1/2 md:after:rotate-45' 
                                             : 'md:after:content-[""] md:after:absolute md:after:top-1/2 md:after:-right-3 md:after:w-3 md:after:h-3 md:after:bg-background md:after:border-r md:after:border-t md:after:border-border md:after:-translate-y-1/2 md:after:rotate-45'}
                    `}>
                      <span className="inline-block px-3 py-1 bg-secondary/20 text-accent font-bold rounded-full text-xs mb-3">STEP 0{index + 1}</span>
                      <h3 className="text-xl font-bold text-primary mb-2 font-serif">{step.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Center circle (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white border-4 border-secondary rounded-full items-center justify-center shadow-lg z-10 text-primary">
                    {step.icon}
                  </div>

                  {/* Empty half for spacing */}
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
