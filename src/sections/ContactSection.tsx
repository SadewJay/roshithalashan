import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import FadeIn from '../components/FadeIn';

export default function ContactSection() {
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleDiscordClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('roshjitha');
    setCopiedDiscord(true);
    setTimeout(() => setCopiedDiscord(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-transparent text-[#D7E2EA] px-6 md:px-10 pt-20 pb-12 flex flex-col justify-between items-center overflow-hidden border-t border-[#D7E2EA]/10 z-30"
    >
      <div className="w-full max-w-5xl flex flex-col items-center text-center gap-12">
        {/* Call to Action */}
        <FadeIn delay={0} y={30} duration={0.8}>
          <h2 className="text-[#D7E2EA] uppercase font-black tracking-wider text-xs sm:text-sm md:text-base opacity-60 mb-2">
            Let&apos;s build the future together
          </h2>
          <p
            className="hero-heading font-black uppercase leading-tight select-none mb-6"
            style={{ fontSize: 'clamp(2rem, 8vw, 90px)' }}
          >
            Get In Touch
          </p>
        </FadeIn>

        {/* Email with Hover Underline Arrow Effect */}
        <FadeIn delay={0.15} y={20} duration={0.7} className="w-full">
          <a
            href="https://mail.google.com/mail/?view=cm&to=roshithalashan@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 sm:gap-4 font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl text-[#D7E2EA] hover:text-white transition-colors duration-300 uppercase tracking-wide"
          >
            <span>roshithalashan@gmail.com</span>
            <ArrowUpRight className="w-6 h-6 sm:w-10 sm:w-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 text-[#D7E2EA] opacity-60 group-hover:opacity-100" />
          </a>
        </FadeIn>

        {/* Social Icons and Copyright */}
        <div className="w-full flex flex-col md:grid md:grid-cols-3 items-center border-t border-[#D7E2EA]/10 pt-12 mt-8 gap-6 text-sm">
          {/* Copyright */}
          <FadeIn delay={0.3} y={15} duration={0.7} className="md:justify-self-start">
            <p className="opacity-40 uppercase tracking-widest text-[10px] sm:text-xs">
              &copy; {new Date().getFullYear()} Roshitha &bull; All rights reserved.
            </p>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.4} y={15} duration={0.7} className="flex gap-6 items-center md:justify-self-center">
            {/* Discord Username Copy Button */}
            <div className="relative">
              {copiedDiscord && (
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-[#0b0c24] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-xl border border-white/10 shadow-2xl whitespace-nowrap z-50">
                  roshjitha copied!
                </div>
              )}
              <a
                href="#discord"
                onClick={handleDiscordClick}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
                title="Copy Discord Username"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
                </svg>
              </a>
            </div>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/94778163482"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
              title="Chat on WhatsApp"
            >
              <svg className="w-5.5 h-5.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
              </svg>
            </a>

            {/* Fiverr Profile Button */}
            <a
              href="https://www.fiverr.com/s/2K3Wrj8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
              title="Order on Fiverr"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 10.999h-4.887c-.504 0-.962-.303-1.157-.768l-.872-2.08H23V5.52h-7.75l-1.488-3.55A3.487 3.487 0 0 0 10.56 0H1v5.52h1.614c.504 0 .963.303 1.157.768l.872 2.08H1v2.632h4.52l1.488 3.55A3.487 3.487 0 0 0 10.218 17H12.5v7h5.52v-7h4.98v-6zm-12.782 0H5.698l-.872-2.08h4.522l.872 2.08z"/>
              </svg>
            </a>
          </FadeIn>

          {/* Scroll to Top */}
          <FadeIn delay={0.5} y={15} duration={0.7} className="md:justify-self-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity font-medium focus:outline-none"
            >
              Back to top
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#D7E2EA]/20">
                <ArrowUp className="w-4.5 h-4.5" />
              </span>
            </button>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
