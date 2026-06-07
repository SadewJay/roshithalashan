import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

const VIDEOS = [
  { id: 'QUTEKDjeP2w', num: '01' },
  { id: '-b3cnHy5bcw', num: '02' },
  { id: 'TLB8pKQ20Zg', num: '03' },
];

interface VideoCardProps {
  video: (typeof VIDEOS)[0];
  index: number;
  totalCards: number;
}

function VideoCard({ video, index, totalCards }: VideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[85vh] flex justify-center items-start"
    >
      <motion.div
        style={{
          scale,
          top: `calc(var(--sticky-top) + ${index * 28}px)`,
        }}
        className="sticky w-full [--sticky-top:96px] md:[--sticky-top:128px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/20 bg-[#04052b] overflow-hidden"
      >
        {/* Number badge */}
        <div className="absolute top-5 left-6 z-10">
          <span
            className="font-black text-white/20 leading-none select-none"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 56px)' }}
          >
            {video.num}
          </span>
        </div>

        {/* YouTube Embed — fills the card */}
        <div className="w-full" style={{ paddingTop: '56.25%', position: 'relative' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&color=white`}
            title={`Project ${video.num}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '0',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#04052b] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32 z-30"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn delay={0} y={40} duration={0.7} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none select-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Video Cards */}
        <div className="w-full flex flex-col gap-10">
          {VIDEOS.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              index={index}
              totalCards={VIDEOS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
