"use client";

import { motion } from "framer-motion";
import { Award, Clock } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function TrainersSection() {
  const { trainers } = siteConfig;

  return (
    <section id="trainers" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-black overflow-hidden">
      {/* Decorative neon ambient gradients */}
      <div className="absolute top-[10%] right-[-15%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-[5%] left-[-15%] w-[350px] h-[350px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-neon text-xs font-extrabold uppercase tracking-widest mb-3 bg-neon/10 px-3 py-1 rounded-full inline-block"
          >
            Elite Coaches
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Meet Your <span className="text-neon text-glow">Championship Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            Our certified coaches hold national credentials and specialize in physical reprogramming, body restructuring, and elite athletic performance.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              key={trainer.id}
              className="group relative rounded-3xl overflow-hidden glass border border-dark-border aspect-[3/4] flex flex-col justify-end p-6 md:p-8"
            >
              {/* Trainer Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-w-7xl) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-hover:filter group-hover:brightness-90"
                  priority={index === 0}
                />
                {/* Default Bottom Shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-1" />
                {/* Hover Green Accent Shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />
              </div>

              {/* Card Contents */}
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                
                {/* Certificates badge (Fade-in on Hover) */}
                <span className="inline-block text-[10px] text-neon border border-neon/30 bg-neon/10 font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Certified Pro
                </span>

                {/* Trainer Name */}
                <h3 className="text-2xl font-black uppercase tracking-wide text-white mb-1 group-hover:text-neon transition-colors duration-300">
                  {trainer.name}
                </h3>

                {/* Specialty */}
                <p className="text-gray-300 text-sm font-medium mb-3 group-hover:text-white transition-colors duration-300">
                  {trainer.role}
                </p>

                {/* Additional Stats Container (Slides up on Hover) */}
                <div className="flex gap-4 mb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock size={12} className="text-neon" />
                    <span>Experience</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Award size={12} className="text-neon" />
                    <span>Elite</span>
                  </div>
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {trainer.instagram && (
                    <a
                      href={trainer.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-neon hover:text-black flex items-center justify-center text-white transition-all duration-300"
                      aria-label={`${trainer.name} Instagram`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  )}
                  {trainer.twitter && (
                    <a
                      href={trainer.twitter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-neon hover:text-black flex items-center justify-center text-white transition-all duration-300"
                      aria-label={`${trainer.name} Twitter`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                  )}
                </div>

              </div>

              {/* Glowing Card Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon/30 rounded-3xl pointer-events-none transition-colors duration-500 z-20" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
