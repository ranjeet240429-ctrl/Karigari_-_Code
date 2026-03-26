import { useEffect, useRef } from 'react';

export default function FloatingShape() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      time += 0.005;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const size = Math.min(w, h) * 0.3;

      // Draw code snippet shapes
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 / 6) * i + time;
        const x = cx + Math.cos(angle) * size;
        const y = cy + Math.sin(angle) * size * 0.6;
        const alpha = 0.08 + Math.sin(time * 2 + i) * 0.04;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + time);

        // Brackets < />
        ctx.font = `${16 + i * 3}px "Space Grotesk", monospace`;
        ctx.fillStyle = i % 2 === 0
          ? `rgba(217, 149, 62, ${alpha})`
          : `rgba(59, 130, 246, ${alpha})`;
        const texts = ['</', '/>', '{...}', '( )', '[ ]', '=> {'];
        ctx.fillText(texts[i], 0, 0);
        ctx.restore();
      }

      // Central rotating hexagon
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(time * 0.3);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 / 6) * i;
        const r = size * 0.5 + Math.sin(time * 2) * 10;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.06)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner hexagon
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 / 6) * i + Math.PI / 6;
        const r = size * 0.3 + Math.cos(time * 1.5) * 8;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = 'rgba(217, 149, 62, 0.06)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none animate-float"
      style={{ opacity: 0.9 }}
    />
  );
}