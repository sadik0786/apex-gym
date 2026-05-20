"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate luxury loader sequence
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-dark-bg z-[9999] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Brand Header */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              <span className="font-black text-4xl md:text-5xl tracking-widest uppercase text-white">
                APEX<span className="text-neon text-glow-strong">GYM</span>
              </span>
              <div className="w-3.5 h-3.5 rounded-full bg-neon animate-pulse-glow" />
            </motion.div>

            {/* Premium Progress Track */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-24 bg-neon shadow-[0_0_8px_#00FF85]"
              />
            </div>
            
            <span className="text-[10px] text-gray-500 uppercase tracking-widest font-extrabold mt-1">
              Initializing Experience
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
