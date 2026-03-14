import { Instagram, Linkedin, MessageCircle, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/alavancaia",
    icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alavancaia",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511997529072",
    icon: MessageCircle,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@alavancaia",
    icon: Youtube,
  },
];

export default function SocialCards() {
  return (
    <motion.div
      className="inline-flex items-center gap-3 bg-primary/90 backdrop-blur-sm border border-white/10 rounded-[2px] px-5 py-3 mt-6"
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 30px hsla(22, 90%, 48%, 0.4)" }}
    >
      <span className="font-mono font-bold text-primary-foreground text-sm tracking-widest mr-2 select-none">
        Redes
      </span>

      {socials.map((s) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex items-center justify-center w-9 h-9 rounded-[2px] text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/15 transition-colors duration-200"
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <s.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
}
