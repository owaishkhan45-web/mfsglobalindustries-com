import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const message = encodeURIComponent(
  "Hello MFS Global Industries, I am interested in importing your products. Please share your catalogue and quotation. Thank you."
);
const waUrl = `https://wa.me/916266316279?text=${message}`;

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-6 right-6 z-[60]"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="hover"
        className="relative grid place-items-center h-14 w-14 rounded-full glass-strong shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)] transition-transform hover:scale-110"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full animate-pulse-ring" />
        <WhatsappLogo weight="fill" size={26} className="text-[oklch(0.85_0.18_150)]" />
      </a>
    </motion.div>
  );
}
