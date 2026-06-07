import { Github, Linkedin, Twitter, ArrowUp, ArrowUpRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function ContactSection() {
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
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/40 text-[#D7E2EA] hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
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
