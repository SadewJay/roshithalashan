import Navbar from '../components/Navbar';
import ContactButton from '../components/ContactButton';
import FadeIn from '../components/FadeIn';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-transparent">
      {/* 1. Navbar */}
      <FadeIn delay={0} y={-20} duration={0.7}>
        <Navbar onLinkClick={scrollToSection} />
      </FadeIn>

      {/* 3. Hero Heading */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 md:px-10 z-0">
        <div className="w-full overflow-hidden text-center sm:text-left">
          <FadeIn delay={0.15} y={40} duration={0.8}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.8] w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none">
              Hi, i&apos;m<br />roshitha
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        {/* Left Descriptive Text */}
        <FadeIn delay={0.35} y={20} duration={0.7} className="text-left">
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] select-none"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a video editor driven by crafting cinematic and unforgettable stories
          </p>
        </FadeIn>

        {/* Right Contact Button */}
        <FadeIn delay={0.5} y={20} duration={0.7}>
          <ContactButton onClick={() => scrollToSection('contact')} />
        </FadeIn>
      </div>
    </section>
  );
}
