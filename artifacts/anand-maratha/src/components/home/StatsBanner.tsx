import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ end, label, suffix = "" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center p-6 border border-secondary/20 rounded-xl bg-primary/50 backdrop-blur">
      <div className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/80 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  );
}

export function StatsBanner() {
  return (
    <section className="bg-primary py-16 relative">
      {/* Top and bottom subtle borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter end={27} suffix="+" label="Years of Trusted Service" />
          <Counter end={16000} suffix="+" label="New Registrations Every Year" />
          <Counter end={30000} suffix="+" label="Happy Marriages Settled" />
        </div>
      </div>
    </section>
  );
}
