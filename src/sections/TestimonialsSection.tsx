"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TestimonialsSection() {
  const { testimonials } = siteConfig;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-dark-bg overflow-hidden border-t border-dark-border">
      {/* Background neon glows */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-neon text-xs font-extrabold uppercase tracking-widest mb-3 bg-neon/10 px-3 py-1 rounded-full inline-block"
          >
            Client Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            What Our <span className="text-neon text-glow">Champions Say</span>
          </motion.h2>
        </div>

        {/* Carousel Outer Frame */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          
          {/* Main Slider Display Area */}
          <div className="w-full relative overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-premium border border-dark-border rounded-3xl p-8 md:p-12 relative flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Floating Big Quote Icon */}
                <div className="absolute right-8 top-8 text-white/5 pointer-events-none">
                  <Quote size={120} className="stroke-[1.5]" />
                </div>

                {/* Left Profile Frame */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-20 h-20 rounded-full bg-dark-bg border-2 border-neon flex items-center justify-center text-white font-extrabold text-2xl tracking-wider shadow-[0_0_15px_rgba(0,255,133,0.3)] mb-4">
                    {testimonials[current].name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-wide text-white text-center">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-400 text-xs font-light text-center mt-0.5">
                    {testimonials[current].role}
                  </p>
                </div>

                {/* Right Review Frame */}
                <div className="flex-1 text-center md:text-left">
                  {/* Star Rating */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-neon text-neon shadow-glow" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <blockquote className="text-gray-200 text-base md:text-lg font-light leading-relaxed italic mb-4">
                    &ldquo;{testimonials[current].content}&rdquo;
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-10px] md:left-[-25px] w-12 h-12 rounded-full border border-dark-border bg-dark-card hover:bg-neon hover:text-black flex items-center justify-center text-white transition-all duration-300 z-20 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-[-10px] md:right-[-25px] w-12 h-12 rounded-full border border-dark-border bg-dark-card hover:bg-neon hover:text-black flex items-center justify-center text-white transition-all duration-300 z-20 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center items-center gap-2.5 mt-8 z-10 relative">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`h-2 rounded-full transition-all duration-350 cursor-pointer ${
                index === current
                  ? "w-8 bg-neon shadow-[0_0_8px_#00FF85]"
                  : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
