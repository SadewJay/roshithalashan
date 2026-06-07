import { motion } from 'framer-motion';
import type { ReactNode, ComponentType } from 'react';

interface FadeInProps {
  children: ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadeIn({
  children,
  tag = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style,
}: FadeInProps) {
  // Dynamically create a motion component for the given tag
  // In framer-motion, motion.create(tag) creates a motion component from a string tag
  const MotionComponent = motion.create(tag as string) as unknown as ComponentType<any>;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
