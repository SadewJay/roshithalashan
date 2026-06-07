import HeroSection from './sections/HeroSection';
// import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import PricingSection from './sections/PricingSection';
import ContactSection from './sections/ContactSection';
import TwinkleStars from './components/TwinkleStars';
import './App.css';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#04052b] overflow-x-clip selection:bg-[#D7E2EA] selection:text-[#0C0C0C]">
      {/* Background Star Animation */}
      <TwinkleStars />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      {/* <MarqueeSection /> */}

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Pricing Section */}
      <PricingSection />

      {/* 7. Footer / Contact Section */}
      <ContactSection />
    </div>
  );
}
