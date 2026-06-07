import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalIndex = 0;

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const chars = word.split('');
        const wordSpans = chars.map((char, charIdx) => {
          const currentIndex = globalIndex++;
          const step = 0.2;
          const start = (currentIndex / totalChars) * (1 - step);
          const end = start + step;
          return (
            <Character
              key={charIdx}
              char={char}
              progress={scrollYProgress}
              range={[start, end]}
            />
          );
        });

        // Increment index for the space character
        if (wordIdx < words.length - 1) {
          globalIndex++;
        }

        return (
          <span key={wordIdx} className="inline-block">
            <span className="whitespace-nowrap">{wordSpans}</span>
            {wordIdx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Character({ char, progress, range }: CharacterProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    // Return space wrapper to maintain normal text flow and word wrapping
    return <span className="inline-block">&nbsp;</span>;
  }

  return (
    <span className="relative inline-block">
      {/* Invisible layout placeholder */}
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      {/* Absolute positioned character with animated opacity */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
}
