"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Membership", href: "#membership" },
  { name: "Transformations", href: "#transformations" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Split business name into two parts for styling
  const nameParts = siteConfig.business.name.split(" ");
  const firstName = nameParts[0] || "APEX";
  const lastName = nameParts.slice(1).join(" ") || "GYM";

  // Track scroll position for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section on scroll
      const sections = navLinks.map((link) => link.href.substring(1));
      let currentSection = "home";

      if (window.scrollY < 50) {
        currentSection = "home";
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Match scroll-mt-24 offset perfectly
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
              break;
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 border-b backdrop-blur-md ${
        scrolled
          ? "bg-dark-bg/85 border-dark-border py-4 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]"
          : "bg-black/30 border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="flex items-center gap-2 group">
          <span className="font-black text-2xl tracking-wider uppercase text-white transition-all duration-300">
            {firstName}<span className="text-neon text-glow transition-all duration-300 group-hover:text-white">{lastName}</span>
          </span>
          <div className="w-2 h-2 rounded-full bg-neon animate-pulse-glow" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:text-white py-1 ${
                  isActive ? "text-neon font-semibold text-glow" : "text-gray-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-neon shadow-[0_0_10px_#00FF85]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#membership"
            onClick={(e) => handleScrollTo(e, "#membership")}
            className="glow-btn inline-flex items-center gap-2 bg-neon text-black font-bold uppercase text-xs tracking-wider px-6 py-3 rounded-full hover:bg-white transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(0,255,133,0.3)] hover:shadow-[0_0_30px_rgba(0,255,133,0.6)]"
          >
            Get Started <ArrowRight size={14} className="stroke-[3]" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-neon p-2 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden w-full bg-dark-bg/95 backdrop-blur-xl border-b border-dark-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link, idx) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      className={`text-lg font-bold tracking-wider uppercase py-2 border-b border-dark-border/40 flex justify-between items-center ${
                        isActive ? "text-neon text-glow" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-neon animate-ping" />}
                    </motion.a>
                  );
                })}
              </nav>

              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href="#membership"
                onClick={(e) => handleScrollTo(e, "#membership")}
                className="w-full text-center glow-btn bg-neon text-black font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2"
              >
                Join Now <ArrowRight size={16} className="stroke-[3]" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
