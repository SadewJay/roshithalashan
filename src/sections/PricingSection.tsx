import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useState } from 'react';
import type { ComponentType } from 'react';

interface PricingCardProps {
  name: string;
  price: string;
  duration: string;
  features: string[];
  buttonLabel: string;
  popular?: boolean;
  gradient: string;
  delay: number;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

function PricingCard({
  name,
  price,
  duration,
  features,
  buttonLabel,
  popular,
  gradient,
  delay,
  icon: Icon,
}: PricingCardProps) {
  const [clicked, setClicked] = useState(false);
  const email = 'roshithalashan@gmail.com';
  const subject = encodeURIComponent(`Purchase Inquiry - ${name}`);

  // Custom pre-filled body messages
  const isStandard = name.toLowerCase().includes('standard');
  const messageBody = isStandard
    ? 'Hi i want to purchase standerd package'
    : `Hi, I want to purchase the ${name.toLowerCase()}.`;

  const body = encodeURIComponent(messageBody);

  // Gmail compose link
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="relative flex flex-col justify-start items-start w-full max-w-[300px] group mx-auto"
    >
      {/* Most Popular Badge */}
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <span
            className="px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap"
            style={{ background: gradient }}
          >
            Most Popular
          </span>
        </div>
      )}

      {/* Glow Background */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50 rounded-[40px] pointer-events-none"
        style={{
          background: gradient,
          filter: 'blur(50px)',
          willChange: 'transform',
        }}
      />

      {/* Foreground Card with Gradient Border */}
      <div
        className="relative self-stretch rounded-[40px] z-10 overflow-hidden w-full"
        style={{
          border: '8px solid transparent',
          background: `linear-gradient(#0d0e3d, #0d0e3d) padding-box, ${gradient} border-box`,
        }}
      >
        {/* Card Content */}
        <div className="w-full h-full p-7 flex flex-col gap-5 text-left">
          {/* Icon + Name */}
          <div>
            <div className="text-white/80 mb-3 inline-block">
              <Icon size={30} strokeWidth={2.5} />
            </div>
            <h3 className="text-white font-bold text-xl leading-tight">{name}</h3>
          </div>

          {/* Price */}
          <div>
            <p
              className="font-black text-3xl md:text-4xl leading-none"
              style={{
                background: gradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {price}
            </p>
            <p className="text-[#D7E2EA]/50 text-sm mt-1 font-medium">{duration}</p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10" />

          {/* Feature List */}
          <ul className="flex flex-col gap-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="mt-[3px] shrink-0 text-white/60"
                />
                <span className="text-[#D7E2EA]/70 text-sm leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={gmailLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="w-full py-3 rounded-2xl font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 mt-2 block text-center select-none"
            style={
              popular
                ? {
                  background: gradient,
                  boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                }
                : {
                  background: 'rgba(255,255,255,0.07)',
                  border: '1.5px solid rgba(255,255,255,0.1)',
                }
            }
          >
            {clicked ? 'Opening Gmail...' : buttonLabel}
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// Minimal icon components matching the three gradients
function CutIcon({ size = 24, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}
function PaletteIcon({ size = 24, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
function FilmIcon({ size = 24, strokeWidth = 2.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
}

export default function PricingSection() {
  const plans: PricingCardProps[] = [
    {
      name: 'Basic Package',
      price: '$10 – $20',
      duration: '5–10 min video',
      features: [
        'Simple clean cuts',
        'Audio balancing',
        'Light color correction',
        'Basic transitions',
      ],
      buttonLabel: 'Choose Basic',
      popular: false,
      gradient: 'linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)',
      delay: 0.1,
      icon: CutIcon,
    },
    {
      name: 'Standard Package',
      price: '$35 – $55',
      duration: '10–20 min video',
      features: [
        'Smooth cuts + pacing',
        'Color grading',
        'Voice enhancement + SFX',
        'Motion graphics basics',
      ],
      buttonLabel: 'Choose Standard',
      popular: true,
      gradient: 'linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)',
      delay: 0.2,
      icon: PaletteIcon,
    },
    {
      name: 'Premium Cinematic',
      price: '$70 – $120+',
      duration: '20–40 min video',
      features: [
        'Full cinematic color grade',
        'Sound design (SFX + ambience)',
        'Motion graphics / VFX',
        '4K export',
      ],
      buttonLabel: 'Choose Premium',
      popular: false,
      gradient: 'linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)',
      delay: 0.3,
      icon: FilmIcon,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative w-full bg-transparent flex flex-col items-center py-24 px-6 md:px-10"
      style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2
          className="hero-heading font-black uppercase leading-none select-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
        >
          Pricing
        </h2>
        <p className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm font-medium mt-3">
          Flexible plans for every project
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-5 w-full max-w-[960px] items-start pt-4">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
}
