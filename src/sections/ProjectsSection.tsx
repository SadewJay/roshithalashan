import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

interface VideoData {
  id: string;
  num: string;
  type: 'youtube' | 'vimeo';
}

const LANDSCAPE_VIDEOS: VideoData[] = [
  { id: '1199982166', num: '01', type: 'vimeo' },
  { id: '1199982159', num: '02', type: 'vimeo' },
  { id: '1199982147', num: '03', type: 'vimeo' },
];

const PORTRAIT_VIDEOS: VideoData[] = [
  { id: '1199537113', num: '01', type: 'vimeo' },
  { id: '1199537074', num: '02', type: 'vimeo' },
  { id: '1199537050', num: '03', type: 'vimeo' },
];

interface VideoCardProps {
  video: VideoData;
  index: number;
  totalCards: number;
  activeTab: 'landscape' | 'portrait';
}

function VideoCard({ video, index, totalCards, activeTab }: VideoCardProps) {
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
        className={`sticky rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA]/20 bg-[#04052b] overflow-hidden transition-all duration-500 ${
          activeTab === 'landscape'
            ? 'w-full max-w-5xl [--sticky-top:96px] md:[--sticky-top:128px]'
            : 'w-[90vw] max-w-[320px] xs:max-w-[350px] md:max-w-[380px] [--sticky-top:96px] md:[--sticky-top:110px] shadow-[0_20px_50px_rgba(0,114,255,0.15)]'
        }`}
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

        {/* Video Embed — fills the card */}
        <div 
          className="w-full transition-all duration-500" 
          style={{ 
            paddingTop: activeTab === 'landscape' ? '56.25%' : '177.78%', 
            position: 'relative' 
          }}
        >
          <iframe
            src={
              video.type === 'youtube'
                ? `https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&color=white`
                : `https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479`
            }
            title={`Roshitha Lashan Video Portfolio - ${activeTab} project ${video.num}`}
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
  const [activeTab, setActiveTab] = useState<'landscape' | 'portrait'>('landscape');
  const videosToRender = activeTab === 'landscape' ? LANDSCAPE_VIDEOS : PORTRAIT_VIDEOS;

  return (
    <section
      id="projects"
      className="relative w-full bg-[#04052b] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 pb-32 z-30"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Title */}
        <FadeIn delay={0} y={40} duration={0.7} className="mb-10 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none select-none text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Custom Segmented Switcher */}
        <FadeIn delay={0.1} y={20} duration={0.7} className="mb-16 sm:mb-20">
          <div className="flex justify-center">
            <div className="relative flex items-center p-1.5 bg-[#0b0c24]/90 backdrop-blur-md rounded-full border border-[#D7E2EA]/10 shadow-2xl">
              <button
                onClick={() => setActiveTab('landscape')}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  activeTab === 'landscape' ? 'text-[#04052b]' : 'text-[#8E9CAE] hover:text-white'
                }`}
              >
                {activeTab === 'landscape' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#0072ff] to-[#00f2fe] rounded-full -z-10 shadow-[0_0_20px_rgba(0,114,255,0.45)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                Landscape
              </button>
              <button
                onClick={() => setActiveTab('portrait')}
                className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${
                  activeTab === 'portrait' ? 'text-[#04052b]' : 'text-[#8E9CAE] hover:text-white'
                }`}
              >
                {activeTab === 'portrait' && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-[#0072ff] to-[#00f2fe] rounded-full -z-10 shadow-[0_0_20px_rgba(0,114,255,0.45)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                Portrait
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Sticky Video Cards with smooth fade switcher animation */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full flex flex-col gap-10"
        >
          {videosToRender.map((video, index) => (
            <VideoCard
              key={`${activeTab}-${video.id}-${index}`}
              video={video}
              index={index}
              totalCards={videosToRender.length}
              activeTab={activeTab}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

