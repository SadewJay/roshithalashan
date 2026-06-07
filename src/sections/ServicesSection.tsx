import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    num: '01',
    name: 'Video Editing',
    desc: 'Seamless cuts, pacing, and transitions that keep viewers hooked from the first frame to the last — whether it\'s a short-form reel or a long-form documentary.',
  },
  {
    num: '02',
    name: 'Color Grading',
    desc: 'Cinematic color correction and grading that sets the mood, enhances storytelling, and gives every project a polished, professional look.',
  },
  {
    num: '03',
    name: 'Sound Design',
    desc: 'Balanced audio mixing, voice enhancement, SFX layering, and ambient sound that make every scene feel immersive and complete.',
  },
  {
    num: '04',
    name: 'Motion Graphics',
    desc: 'Animated titles, lower thirds, transitions, and VFX elements that bring energy and visual clarity to any video production.',
  },
  {
    num: '05',
    name: 'Reels & Short Form',
    desc: 'Scroll-stopping content optimized for Instagram, TikTok, and YouTube Shorts — fast cuts, trending styles, and maximum impact in minimal time.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Title */}
        <FadeIn delay={0} y={40} duration={0.7} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="font-black uppercase leading-none select-none text-[#0C0C0C]"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* List of Services */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.num}
              delay={index * 0.1}
              y={30}
              duration={0.8}
              tag="div"
              className="flex flex-row items-center border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 gap-6 sm:gap-10 md:gap-16 w-full text-left"
            >
              {/* Left Column: Number */}
              <div className="flex-shrink-0 select-none">
                <span
                  className="font-black leading-none text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.num}
                </span>
              </div>

              {/* Right Column: Name + Description */}
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C] mb-2"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed text-[#0C0C0C] opacity-60 max-w-2xl"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
