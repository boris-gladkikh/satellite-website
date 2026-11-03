'use client';

import { useEffect, useRef } from 'react';

const STAR_COUNT = 240;
const SPEED = 1;

// Slowly drifting parallax starfield behind every page (site-redesign/pages/00-global.md).
export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let last = performance.now();

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() ** 2.2,
      p: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
    };

    const draw = (now) => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#f3f2f2';
      for (const s of stars) {
        const twinkle = motion.matches ? 1 : 0.65 + 0.35 * Math.sin(now / 1600 + s.p);
        ctx.globalAlpha = (0.15 + s.z * 0.7) * twinkle;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, 0.35 + s.z * 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now) => {
      const dt = Math.min(50, now - last) / 1000;
      last = now;
      const v = 0.005 * SPEED;
      for (const s of stars) {
        s.x -= v * (0.15 + s.z) * dt;
        s.y += v * 0.3 * (0.15 + s.z) * dt;
        if (s.x < 0) s.x += 1;
        if (s.y > 1) s.y -= 1;
      }
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (motion.matches) {
        draw(0); // static stars
      } else {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      resize();
      if (motion.matches) draw(0);
    };

    resize();
    start();
    window.addEventListener('resize', onResize);
    motion.addEventListener('change', start);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      motion.removeEventListener('change', start);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
