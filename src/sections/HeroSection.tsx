"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  } as const;

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

  const { hero } = siteConfig;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Image with Dark & Neon Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('${hero.backgroundImage}')`,
        }}
      />
      {/* Dark Radial and Linear Overlays to blend with the rest of the dark site */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(3,3,3,0.95)_90%)]" />

      {/* Floating subtle glowing ambient lights */}
      <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-neon/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-neon/30 text-neon text-xs font-semibold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(0,255,133,0.1)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />
            {hero.badge}
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 max-w-4xl leading-[1.1]"
          >
            {hero.headingLine1}<br />
            {hero.headingLine2} <span className="text-neon text-glow-strong">{hero.highlightedWord}</span>.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-base lg:text-lg font-light max-w-xl mb-10 leading-relaxed"
          >
            {hero.subheading}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("membership")}
              className="glow-btn w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-neon text-black font-bold uppercase text-sm tracking-wider px-8 py-5 rounded-full transition-all duration-300 active:scale-95 shadow-[0_0_30px_rgba(0,255,133,0.3)] hover:shadow-[0_0_40px_rgba(0,255,133,0.6)] cursor-pointer"
            >
              {hero.primaryButtonText} <ArrowRight size={18} className="stroke-[3]" />
            </button>

            <button
              onClick={() => handleScrollTo("membership")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-white/5 border border-white/20 hover:border-neon text-white font-bold uppercase text-sm tracking-wider px-8 py-5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer"
            >
              {hero.secondaryButtonText}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => handleScrollTo("programs")}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-neon transition-colors">
          Scroll Down
        </span>
        <div className="w-[20px] h-[35px] border-2 border-gray-600 rounded-full flex justify-center p-[4px] hover:border-neon transition-colors">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-neon rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
