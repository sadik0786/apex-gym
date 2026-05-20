"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, Target, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: <Dumbbell className="w-8 h-8 text-neon" />,
    title: "Strength Training",
    description: "Build robust muscle mass, density, and power with elite weightlifting routines and custom-tailored progressive overload plans.",
    features: ["Heavy lifting technique", "Powerlifting coaching", "Progressive overloading"],
  },
  {
    icon: <Flame className="w-8 h-8 text-neon" />,
    title: "Fat Loss",
    description: "Torch calories, spike your metabolic rate, and uncover a defined, shredded physique using advanced fat-burning protocols.",
    features: ["High-intensity HIIT", "Custom metabolic plans", "Caloric deficit tracking"],
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-neon" />,
    title: "Cardio & Endurance",
    description: "Supercharge your cardiovascular system, boost stamina, and scale your heart health using advanced aerobic training models.",
    features: ["Stamina building", "Athletic endurance drills", "V02 Max tracking"],
  },
  {
    icon: <Target className="w-8 h-8 text-neon" />,
    title: "Personal Training",
    description: "Accelerate your results with a highly customized 1-on-1 coaching program, tailored specific to your lifestyle, body type, and goals.",
    features: ["1-on-1 dedicated coach", "Personalized meal guides", "Weekly progress analysis"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-dark-bg overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[300px] h-[300px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none" />

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
            Our Programs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Push Your Limits. <span className="text-neon text-glow">Unlock Power</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            We offer premium, science-backed training protocols designed to break plateaus and maximize physical performance.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(0, 255, 133, 0.4)",
                boxShadow: "0 10px 30px rgba(0, 255, 133, 0.05)"
              }}
              key={program.title}
              className="glass-premium border border-dark-border p-6 rounded-3xl relative group overflow-hidden transition-all duration-300"
            >
              {/* Dynamic Glow Light on Hover */}
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-neon/5 rounded-full filter blur-[40px] group-hover:bg-neon/15 transition-all duration-500 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon Container */}
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-dark-bg border border-dark-border flex items-center justify-center group-hover:border-neon group-hover:bg-neon/10 transition-all duration-300 shadow-inner">
                  {program.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold uppercase tracking-wide text-white mb-3 group-hover:text-neon transition-colors duration-300 flex items-center gap-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_6px_#00FF85]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neon group-hover:text-white transition-colors duration-300"
                  >
                    Inquire Class <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
