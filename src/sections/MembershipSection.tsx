"use client";

import { motion } from "framer-motion";
import { Check, Flame, Star, Crown } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function MembershipSection() {
  const { pricing } = siteConfig;

  return (
    <section id="membership" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-dark-bg overflow-hidden">
      {/* Decorative neon spots */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />

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
            Membership Plans
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Choose Your <span className="text-neon text-glow">Intensity Level</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            Select a plan that matches your commitment. No hidden fees, cancel anytime, 100% focused on your results.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricing.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              key={plan.id}
              className={`relative rounded-3xl p-6 md:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-dark-card-hover to-black border-2 border-neon/50 shadow-[0_20px_50px_rgba(0,255,133,0.1)] lg:scale-105 z-20"
                  : "bg-dark-card border border-dark-border hover:border-dark-border-hover shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
              }`}
            >
              {/* Highlight Badge */}
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neon text-black font-extrabold text-[10px] tracking-widest uppercase px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,255,133,0.4)]">
                  MOST POPULAR
                </div>
              )}

              {/* Card Top */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                    {plan.name}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${plan.isPopular ? "bg-neon/10" : "bg-white/5"}`}>
                    {plan.isPopular ? <Star className="w-5 h-5 text-neon" /> : index === 0 ? <Flame className="w-5 h-5 text-gray-400" /> : <Crown className="w-5 h-5 text-neon" />}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-gray-400 text-2xl font-bold">$</span>
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm font-light">
                    /{plan.duration}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-white/5 mb-4 mt-6" />

                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-5">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 text-xs">
                      <div className={`w-4 h-4 shrink-0 rounded-full flex items-center justify-center mt-0.5 ${plan.isPopular ? "bg-neon/10 text-neon" : "bg-white/5 text-gray-400"}`}>
                        <Check size={10} className="stroke-[3]" />
                      </div>
                      <span className="text-gray-300 font-light leading-snug">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <div>
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center font-bold uppercase text-xs tracking-wider py-3 rounded-2xl transition-all duration-300 active:scale-98 text-center cursor-pointer ${
                    plan.isPopular
                      ? "glow-btn bg-neon text-black shadow-[0_0_20px_rgba(0,255,133,0.2)] hover:bg-white"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.isPopular ? "Join Pro Elite" : "Select Plan"}
                </a>
                <p className="text-[10px] text-gray-500 text-center mt-3 font-light">
                  * 7-day money-back guarantee. No questions asked.
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
