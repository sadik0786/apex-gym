"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Trophy, Calendar } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function TransformationSection() {
  const { transformations } = siteConfig;

  if (!transformations || transformations.length === 0) return null;

  return (
    <section id="transformations" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-black overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-15%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[350px] h-[350px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

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
            Transformation Gallery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Proven Results. <span className="text-neon text-glow">Real Reprogramming</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            Witness the physical evolutions achieved by our dedicated members under the tailored guidance of Apex trainers.
          </motion.p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              key={item.id}
              className="glass-premium border border-dark-border rounded-3xl overflow-hidden group hover:border-neon/30 transition-colors duration-500"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-dark-border">
                <Image
                  src={item.afterImage}
                  alt={`${item.clientName} Transformation`}
                  fill
                  sizes="(max-w-7xl) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                
                {/* Labels overlay */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                  <span className="bg-black/85 backdrop-blur-md text-[10px] text-white font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/5">
                    Before
                  </span>
                  <span className="bg-neon text-black font-extrabold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-[0_0_12px_rgba(0,255,133,0.4)] border border-neon/20">
                    After
                  </span>
                </div>
              </div>

              {/* Data & Metrics Frame */}
              <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                      {item.clientName}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-bg border border-dark-border shrink-0 self-start sm:self-auto">
                    <Calendar size={14} className="text-neon" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neon">
                      {item.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-neon/[0.03] border border-neon/15">
                  <Trophy size={18} className="text-neon shrink-0" />
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    Mentored closely under Apex custom structural routine and nutrition planning. Complete body recomposition accomplished with zero plateaus.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
