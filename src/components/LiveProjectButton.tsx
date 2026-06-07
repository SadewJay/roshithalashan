import { motion } from 'framer-motion';

interface LiveProjectButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function LiveProjectButton({ className = '', onClick }: LiveProjectButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05, backgroundColor: 'rgba(215, 226, 234, 0.1)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest
        px-8 py-3 sm:px-10 sm:py-3.5
        text-sm sm:text-base
        transition-colors ${className}`}
    >
      Live Project
    </motion.button>
  );
}
