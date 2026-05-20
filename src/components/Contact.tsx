"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "strength",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          program: "strength",
          message: "",
        });
      } else {
        alert(data.error || "Something went wrong. Please check your email configuration.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Unable to transmit request. Please verify internet connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="relative z-10 scroll-mt-24 py-20 md:py-28 bg-dark-bg overflow-hidden border-t border-dark-border">
      {/* Background decorations */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] bg-neon/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[350px] h-[350px] bg-neon/5 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-neon text-xs font-extrabold uppercase tracking-widest mb-3 bg-neon/10 px-3 py-1 rounded-full inline-block"
          >
            Contact Support
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4"
          >
            Start Your <span className="text-neon text-glow">Evolution Today</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light"
          >
            Have questions about plans, personal coaches, or corporate memberships? Send us a message and begin your training.
          </motion.p>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form Column - 5 Columns wide on desktop, spans full width on medium screens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 lg:col-span-5 glass-premium border-2 border-neon/30 shadow-[0_15px_45px_rgba(0,255,133,0.06)] hover:border-neon/60 p-6 md:p-8 rounded-3xl relative overflow-hidden transition-all duration-500"
          >
            {/* Corner ambient neon glow inside form */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-neon/10 rounded-full filter blur-[50px] pointer-events-none" />
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                        Full Name <span className="text-neon">*</span>
                      </label>
                      <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        className="bg-black/40 border border-dark-border hover:border-neon/30 focus:border-neon focus:shadow-[0_0_12px_rgba(0,255,133,0.2)] rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                      />
                    </div>
 
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                        Email Address <span className="text-neon">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@example.com"
                        className="bg-black/40 border border-dark-border hover:border-neon/30 focus:border-neon focus:shadow-[0_0_12px_rgba(0,255,133,0.2)] rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="bg-black/40 border border-dark-border hover:border-neon/30 focus:border-neon focus:shadow-[0_0_12px_rgba(0,255,133,0.2)] rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300"
                      />
                    </div>
 
                    {/* Program Option */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="program" className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                        Interested Program
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        className="bg-black border border-dark-border hover:border-neon/30 focus:border-neon focus:shadow-[0_0_12px_rgba(0,255,133,0.2)] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-all duration-300 cursor-pointer appearance-none"
                      >
                        <option value="strength">Strength Training</option>
                        <option value="fatloss">Fat Loss & HIIT</option>
                        <option value="cardio">Cardio & Endurance</option>
                        <option value="personal">1-on-1 Personal Coach</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs uppercase font-extrabold tracking-widest text-gray-400">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your fitness background and goals..."
                      className="bg-black/40 border border-dark-border hover:border-neon/30 focus:border-neon focus:shadow-[0_0_12px_rgba(0,255,133,0.2)] rounded-xl py-3 px-4 text-sm text-white placeholder-gray-600 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="glow-btn bg-neon text-black font-extrabold uppercase text-xs tracking-wider py-3.5 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,255,133,0.15)] cursor-pointer mt-1"
                  >
                    {isLoading ? (
                      <>
                        Processing Inquiry <Loader2 size={16} className="animate-spin stroke-[3]" />
                      </>
                    ) : (
                      <>
                        Send Message <Send size={14} className="stroke-[3]" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12 px-6"
                >
                  <div className="w-16 h-16 rounded-full bg-neon/15 border border-neon/30 flex items-center justify-center text-neon mb-6 animate-bounce shadow-[0_0_15px_rgba(0,255,133,0.2)]">
                    <CheckCircle2 size={32} className="stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-white tracking-wide mb-3">
                    Message Transmitted
                  </h3>
                  <p className="text-gray-300 text-sm font-light max-w-sm leading-relaxed mb-8">
                    Your details have been registered inside the Apex database. A certified trainer will contact you via email or phone within the next 12 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-white/5 hover:bg-white/10 text-white font-bold uppercase text-[10px] tracking-wider px-6 py-3.5 rounded-xl border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Details Column - 3 Columns wide on desktop, 1 column on medium screens */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="md:col-span-1 lg:col-span-3 glass-premium border border-dark-border p-6 rounded-3xl flex flex-col justify-between relative shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
          >
            <div className="flex flex-col gap-4 h-full justify-between">
              <h3 className="text-lg font-black uppercase tracking-wide text-white mb-1">
                Apex HQ Details
              </h3>
              
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neon">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-gray-500 mb-0.5">Location</p>
                  <p className="text-xs font-semibold text-white">742 Apex Way, Suite 100</p>
                  <p className="text-[10px] font-light text-gray-400">Los Angeles, CA 90025</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neon">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-gray-500 mb-0.5">Call Us</p>
                  <a href="tel:+18005552739" className="text-xs font-bold text-white hover:text-neon transition-colors">
                    +1 (800) 555-APEX
                  </a>
                  <p className="text-[10px] font-light text-gray-400">Toll-free, 24/7 hotline</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-neon">
                  <Mail size={15} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-gray-500 mb-0.5">Write Us</p>
                  <a href="mailto:join@apexgym.com" className="text-xs font-bold text-white hover:text-neon transition-colors">
                    join@apexgym.com
                  </a>
                  <p className="text-[10px] font-light text-gray-400">Corporate & general inquiry</p>
                </div>
              </div>

              {/* WhatsApp Live */}
              <div className="flex gap-3 items-start border-t border-white/5 pt-4 mt-1">
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#25D366]">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.026-5.115-2.892-6.983A9.824 9.824 0 0 0 12.008 1.09c-5.437 0-9.86 4.418-9.862 9.858-.001 1.768.468 3.49 1.357 5.021L2.458 21.96l6.189-1.623zM16.924 13.9c-.27-.135-1.597-.788-1.845-.878-.248-.09-.43-.135-.61.135-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.34-1.03-.92-1.72-2.06-1.922-2.4-.202-.34-.022-.523.148-.692.153-.153.34-.397.51-.595.17-.198.225-.34.34-.567.112-.228.056-.427-.028-.595-.084-.168-.61-1.472-.835-2.016-.22-.53-.44-.457-.604-.466-.157-.008-.337-.01-.518-.01a1.002 1.002 0 0 0-.724.337c-.25.27-.95.93-.95 2.27s.972 2.63 1.107 2.81c.135.18 1.916 2.926 4.64 4.103.648.28 1.153.448 1.547.573.65.207 1.242.177 1.708.107.52-.078 1.598-.653 1.823-1.284.225-.63.225-1.17.157-1.284-.067-.113-.247-.18-.517-.315z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-extrabold tracking-widest text-gray-500 mb-0.5">WhatsApp Chat</p>
                  <a
                    href="https://wa.me/18005552739?text=Hello%20Apex%20Gym!%20I%20am%20interested%20in%20joining."
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-[#25D366] hover:text-white transition-colors flex items-center gap-1"
                  >
                    +1 (800) 555-APEX <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  </a>
                  <p className="text-[10px] font-light text-gray-400">Instantly chat with a coach</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Column - 4 Columns wide on desktop, 1 column on medium screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="md:col-span-1 lg:col-span-4 glass border border-dark-border rounded-3xl overflow-hidden min-h-[320px] relative shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
          >
            <iframe
              title="Apex Gym Google Map Embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.738872016599!2d-118.44524858478496!3d34.05063078060591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc047e29b7df%3A0x915c6c06df9a1841!2sSanta%20Monica%20Blvd%2C%20Los%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale invert contrast-[1.25] opacity-75 rounded-3xl"
              allowFullScreen={false}
              loading="lazy"
            />
            {/* Map ambient glow outline */}
            <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none" />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
