import { motion } from 'framer-motion';

interface ContactButtonProps {
  className?: string;
  onClick?: () => void;
}

export default function ContactButton({ className = '', onClick }: ContactButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`relative rounded-full font-medium uppercase tracking-widest text-white
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
        text-xs sm:text-sm md:text-base
        bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)]
        shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1]
        focus:outline-none active:outline-none ${className}`}
      style={{
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </motion.button>
  );
}
