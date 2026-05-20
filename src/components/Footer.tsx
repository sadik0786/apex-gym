"use client";

import { Dumbbell, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="relative z-10 bg-black border-t border-dark-border overflow-hidden pt-20 pb-10">
      {/* Ambient background decoration */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-neon/[0.02] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, "#home")} className="flex items-center gap-2 self-start">
              <span className="font-black text-2xl tracking-wider uppercase text-white">
                APEX<span className="text-neon text-glow">GYM</span>
              </span>
              <div className="w-2 h-2 rounded-full bg-neon shadow-[0_0_10px_#00FF85]" />
            </a>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Apex Gym delivers a luxury fitness experience designed to break physical thresholds. Built for high-performance training with elite coaching and state-of-the-art machinery.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-neon hover:text-neon flex items-center justify-center text-gray-400 hover:scale-105 transition-all duration-300"
                aria-label="Instagram link"
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
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-neon hover:text-neon flex items-center justify-center text-gray-400 hover:scale-105 transition-all duration-300"
                aria-label="Twitter link"
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
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-neon hover:text-neon flex items-center justify-center text-gray-400 hover:scale-105 transition-all duration-300"
                aria-label="Facebook link"
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
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/5 hover:border-neon hover:text-neon flex items-center justify-center text-gray-400 hover:scale-105 transition-all duration-300"
                aria-label="Youtube link"
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
                  className="lucide lucide-youtube"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="text-white font-extrabold uppercase text-xs tracking-wider mb-6 pb-2 border-b border-white/5 inline-block">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home Base", href: "#home" },
                { name: "Programs & Coaching", href: "#programs" },
                { name: "Elite Trainers", href: "#trainers" },
                { name: "Membership Plans", href: "#membership" },
                { name: "Transformations", href: "#transformations" },
                { name: "Success Stories", href: "#testimonials" },
                { name: "Contact Support", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-gray-400 text-xs font-light hover:text-neon hover:translate-x-1 inline-block transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gym Timings */}
          <div>
            <h3 className="text-white font-extrabold uppercase text-xs tracking-wider mb-6 pb-2 border-b border-white/5 inline-block">
              Club Operating Hours
            </h3>
            <ul className="flex flex-col gap-4 text-xs font-light text-gray-400">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday - Sunday</span>
                <span className="text-white font-medium">7:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Staffed Hours</span>
                <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-col gap-1 text-[11px] text-neon/80 font-bold bg-neon/5 border border-neon/10 p-2.5 rounded-lg mt-2">
                <span>* Keycard Entry (Pro & Elite):</span>
                <span className="text-white font-light text-[10px]">Uncapped 24/7/365 secure facility access</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Timely Updates */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-extrabold uppercase text-xs tracking-wider mb-2 pb-2 border-b border-white/5 inline-block">
              Timely Updates
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed">
              Subscribe to the Apex athletic journal for science-backed workouts, meal guides, and early access VIP promotions.
            </p>
            <div className="relative flex">
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-dark-card border border-dark-border focus:border-neon focus:shadow-[0_0_10px_rgba(0,255,133,0.15)] rounded-xl py-3.5 pl-4 pr-12 text-xs text-white placeholder-gray-600 focus:outline-none w-full transition-all duration-300"
              />
              <button
                className="absolute right-1 top-1 bottom-1 bg-neon text-black text-[10px] font-bold px-3 rounded-lg hover:bg-white active:scale-95 transition-all duration-300 cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-dark-border mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-light">
          <p>&copy; {currentYear} Apex Gym. All rights reserved. Made for professional athletic performance.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-neon transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-neon transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-neon transition-colors">Club Policies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
