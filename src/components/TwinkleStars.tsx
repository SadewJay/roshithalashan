import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  phase: number;
  driftSpeed: number;
}

export default function TwinkleStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      // Density of stars based on viewport area
      const area = canvas.width * canvas.height;
      const count = Math.min(Math.floor(area * 0.00008), 150); // Up to 150 stars

      stars = Array.from({ length: count }, () => {
        const size = Math.random() * 1.5 + 0.5; // 0.5px to 2px
        const baseAlpha = Math.random() * 0.5 + 0.15; // Subtle brightness: 0.15 to 0.65
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          baseAlpha,
          alpha: baseAlpha,
          speed: Math.random() * 0.015 + 0.005, // Twinkle oscillation speed
          phase: Math.random() * Math.PI * 2,
          driftSpeed: Math.random() * 0.04 + 0.01, // Super slow drift
        };
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update twinkling phase
        star.phase += star.speed;
        star.alpha = star.baseAlpha + Math.sin(star.phase) * (star.baseAlpha * 0.6);
        
        // Clamp opacity to avoid completely invisible or overly bright stars
        star.alpha = Math.max(0.05, Math.min(star.alpha, 0.8));

        // Slow upward drift
        star.y -= star.driftSpeed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(215, 226, 234, ${star.alpha})`; // #D7E2EA text color match
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
