import { useEffect, useRef } from 'react';

const IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Split images
  const row1Images = IMAGES.slice(0, 11);
  const row2Images = IMAGES.slice(11);

  // Triple for seamless effect
  const tripledRow1 = [...row1Images, ...row1Images, ...row1Images];
  const tripledRow2 = [...row2Images, ...row2Images, ...row2Images];

  useEffect(() => {
    let rAFId = 0;

    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      // Row 1: moves RIGHT
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;

      // Row 2: moves LEFT
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(rAFId);
      rAFId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run once on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rAFId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#04052b] pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
    >
      {/* Row 1 Wrapper */}
      <div className="w-full overflow-hidden flex">
        <div
          ref={row1Ref}
          className="flex gap-3 will-change-transform"
          style={{ willChange: 'transform' }}
        >
          {tripledRow1.map((url, index) => (
            <div
              key={`r1-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden"
            >
              <img
                src={url}
                alt={`Slide R1-${index % row1Images.length}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Wrapper */}
      <div className="w-full overflow-hidden flex">
        <div
          ref={row2Ref}
          className="flex gap-3 will-change-transform"
          style={{ willChange: 'transform' }}
        >
          {tripledRow2.map((url, index) => (
            <div
              key={`r2-${index}`}
              className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden"
            >
              <img
                src={url}
                alt={`Slide R2-${index % row2Images.length}`}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
