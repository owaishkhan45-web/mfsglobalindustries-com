import { WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const message = encodeURIComponent(
  "Hello MFS Global Industries,\n\nI am interested in importing your products. Please share your product catalogue and quotation.\n\nThank you."
);
const url = `https://wa.me/916266316279?text=${message}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp"
      data-cursor="hover"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full glass-strong shadow-[0_10px_40px_-10px_rgba(212,175,55,0.4)] transition-transform group-hover:scale-110">
        <WhatsappLogo weight="fill" size={26} className="text-[oklch(0.85_0.18_150)]" />
      </span>
    </motion.a>
  );
}
