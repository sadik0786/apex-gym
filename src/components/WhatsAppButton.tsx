"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { generateWhatsAppLink } from "@/utils/contact";

export default function WhatsAppButton() {
  const { whatsapp } = siteConfig.contact;
  const whatsappUrl = generateWhatsAppLink(
    whatsapp,
    `Hello ${siteConfig.business.name}! I am interested in joining.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold px-4.5 py-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.5)] transition-all duration-300 group"
      >
        {/* Pulsing indicator dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>

        {/* WhatsApp Brand SVG Icon */}
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="mr-0.5 shrink-0">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.747 1.451 5.436.002 9.858-4.419 9.86-9.86.001-2.636-1.026-5.115-2.892-6.983A9.824 9.824 0 0 0 12.008 1.09c-5.437 0-9.86 4.418-9.862 9.858-.001 1.768.468 3.49 1.357 5.021L2.458 21.96l6.189-1.623zM16.924 13.9c-.27-.135-1.597-.788-1.845-.878-.248-.09-.43-.135-.61.135-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.067-.27-.135-1.14-.42-2.172-1.34-1.03-.92-1.72-2.06-1.922-2.4-.202-.34-.022-.523.148-.692.153-.153.34-.397.51-.595.17-.198.225-.34.34-.567.112-.228.056-.427-.028-.595-.084-.168-.61-1.472-.835-2.016-.22-.53-.44-.457-.604-.466-.157-.008-.337-.01-.518-.01a1.002 1.002 0 0 0-.724.337c-.25.27-.95.93-.95 2.27s.972 2.63 1.107 2.81c.135.18 1.916 2.926 4.64 4.103.648.28 1.153.448 1.547.573.65.207 1.242.177 1.708.107.52-.078 1.598-.653 1.823-1.284.225-.63.225-1.17.157-1.284-.067-.113-.247-.18-.517-.315z"/>
        </svg>

        {/* Text Label - Expanding on hover */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-500 ease-out text-[10px] sm:text-xs uppercase tracking-wider font-bold whitespace-nowrap">
          WhatsApp Chat
        </span>
      </motion.a>
    </div>
  );
}
