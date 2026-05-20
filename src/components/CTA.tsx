"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";

export default function CTA() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const isMobile = window.innerWidth < 1024;
      const offset = isMobile ? 70 : 80; // exact height of sticky navbar
      
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative z-10 py-20 bg-black overflow-hidden border-t border-dark-border">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(0,0,0,0.85)_0%,rgba(10,10,10,0.95)_100%)] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Pulsing neon highlight at the center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-neon/10 rounded-full filter blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 60 }}
          className="glass-premium border border-neon/30 p-10 md:p-16 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,255,133,0.05)]"
        >
          {/* Top trophy icon */}
          <div className="w-14 h-14 rounded-full bg-neon/10 border border-neon/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_15px_rgba(0,255,133,0.15)]">
            <Trophy className="text-neon w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Start Your Fitness<br className="hidden sm:inline" />
            <span className="text-neon text-glow-strong">Journey Today</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-base font-light max-w-xl mx-auto mb-10 leading-relaxed">
            Stop waiting for &quot;tomorrow&quot;. Take command of your body, build championship physical endurance, and redefine what&apos;s possible with Apex.
          </p>

          <div className="flex justify-center">
            <button
              onClick={() => handleScrollTo("contact")}
              className="glow-btn inline-flex items-center gap-3 bg-neon text-black font-extrabold uppercase text-sm tracking-widest px-8 py-5 rounded-full hover:bg-white transition-all duration-300 active:scale-95 shadow-[0_0_25px_rgba(0,255,133,0.35)] cursor-pointer"
            >
              Join Apex Gym <ArrowRight size={18} className="stroke-[3]" />
            </button>
          </div>

          {/* Underlay glow bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-neon to-transparent shadow-[0_0_10px_#00FF85]" />
        </motion.div>
      </div>
    </section>
  );
}
