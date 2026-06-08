import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Calendar, Layers, Smile } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

interface CountUpProps {
  value: string;
}

function CountUp({ value }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  const numericString = value.replace(/[^0-9]/g, '');
  const target = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isInView) return;

    const end = target;
    const duration = 1500;
    const startTime = performance.now();

    const animateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      
      const current = Math.floor(easeProgress * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center bg-transparent px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* --- Corner 3D Decorative Images --- */}

      {/* Top Left: Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top Right: Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* --- Main Content Container --- */}
      <div className="flex flex-col items-center justify-center text-center max-w-[80vw] sm:max-w-2xl z-20">

        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.7} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* About Text */}
        <div className="mb-12 sm:mb-16 flex justify-center">
          <p
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-center"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            Hey, I'm Roshitha — a video editor with 5+ years of experience turning ideas into captivating visual stories. I specialize in creating high-retention content through cinematic editing, smooth transitions, professional color grading, and impactful sound design.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl mb-16 sm:mb-20">
          {[
            {
              icon: Calendar,
              value: '5+',
              label: 'Years Experience',
              iconColor: 'text-[#42d3e8]',
              numColor: 'text-[#38bdf8]',
            },
            {
              icon: Layers,
              value: '150+',
              label: 'Projects Done',
              iconColor: 'text-[#42d3e8]',
              numColor: 'text-[#38bdf8]',
            },
            {
              icon: Smile,
              value: '100%',
              label: 'Satisfaction',
              iconColor: 'text-[#42d3e8]',
              numColor: 'text-[#38bdf8]',
            },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={idx} delay={0.2 + idx * 0.1} y={20} duration={0.6} className="w-full">
                <div className="bg-[#0d0e3d]/25 backdrop-blur-sm border border-[#38bdf8]/20 rounded-[24px] py-9 px-6 flex flex-col items-center justify-center gap-4 shadow-[0_0_18px_rgba(56,189,248,0.15)] hover:shadow-[0_0_32px_rgba(56,189,248,0.35)] hover:border-[#38bdf8]/60 hover:bg-[#0d0e3d]/45 hover:scale-105 transition-all duration-300 select-none w-full">
                  <div className={`${stat.iconColor} opacity-90`}>
                    <Icon size={30} strokeWidth={2.2} />
                  </div>
                  <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${stat.numColor}`}>
                    <CountUp value={stat.value} />
                  </span>
                  <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/50 text-center">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Bottom Contact Pill */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton onClick={scrollToContact} />
        </FadeIn>

      </div>
    </section>
  );
}
