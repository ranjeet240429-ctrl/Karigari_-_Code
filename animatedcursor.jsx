import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const over = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select, .cursor-hover')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mouseleave', leave);
    };
  }, [visible]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary"
        animate={{
          x: pos.x - (hovering ? 20 : 5),
          y: pos.y - (hovering ? 20 : 5),
          width: hovering ? 40 : 10,
          height: hovering ? 40 : 10,
          opacity: visible ? (hovering ? 0.2 : 0.9) : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-secondary"
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: 40,
          height: 40,
          opacity: visible ? 0.5 : 0,
          scale: hovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
}