"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { Users, Shield, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: <Users className="text-neon w-6 h-6" />,
    target: 500,
    suffix: "+",
    label: "Active Members",
    desc: "Achieving their fitness goals daily",
  },
  {
    icon: <Shield className="text-neon w-6 h-6" />,
    target: 12,
    suffix: "",
    label: "Elite Trainers",
    desc: "Certified professionals guiding you",
  },
  {
    icon: <Clock className="text-neon w-6 h-6" />,
    target: 24,
    suffix: "/7",
    label: "Access Hours",
    desc: "Train whenever your schedule allows",
  },
  {
    icon: <Award className="text-neon w-6 h-6" />,
    target: 5,
    suffix: "+",
    label: "Years Experience",
    desc: "Helping communities stay premium healthy",
  },
];

export default function Stats() {
  return (
    <section className="relative z-10 py-16 bg-black border-y border-dark-border overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, borderColor: "rgba(0, 255, 133, 0.4)" }}
              key={stat.label}
              className="glass border border-dark-border p-6 rounded-2xl relative group overflow-hidden transition-all duration-300"
            >
              {/* Top card hover glow indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/0 to-transparent group-hover:via-neon transition-all duration-500" />
              
              {/* Ambient neon backdrop glow on hover */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neon/5 rounded-full filter blur-xl group-hover:bg-neon/10 transition-all duration-500 pointer-events-none" />

              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-dark-border/40 border border-dark-border flex items-center justify-center group-hover:bg-neon/10 group-hover:border-neon/30 transition-all duration-300">
                  {stat.icon}
                </div>
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 flex items-baseline gap-1">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </div>

              <div className="text-sm font-bold uppercase tracking-wider text-neon mb-1 group-hover:text-glow-strong transition-all duration-300">
                {stat.label}
              </div>

              <div className="text-xs text-gray-400 font-light">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
