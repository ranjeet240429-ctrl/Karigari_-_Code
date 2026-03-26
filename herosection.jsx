import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FloatingShape from './FloatingShape';

const words = ['Handcrafted', 'Websites.', 'Pixel-Perfect', 'Code.'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
};

const wordAnim = {
  hidden: { opacity: 0, y: 40, rotateX: -45 },
  visible: {
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <FloatingShape />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-muted/30 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm font-inter text-muted-foreground">Available for new projects</span>
        </motion.div>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-space text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
          style={{ perspective: '1000px' }}
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              variants={wordAnim}
              className={`inline-block mr-4 ${
                i < 2 ? 'text-primary' : 'text-secondary'
              }`}
              style={{ display: 'inline-block' }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed"
        >
          We blend artisan design sensibility with cutting-edge engineering to craft
          digital experiences that leave a lasting impression.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/start-project"
            className="cursor-hover group relative px-8 py-4 rounded-2xl bg-secondary text-secondary-foreground font-inter font-semibold text-lg animate-pulse-glow hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            Start a Project
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#portfolio"
            onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="cursor-hover px-8 py-4 rounded-2xl border border-border/50 text-foreground font-inter font-medium hover:bg-muted/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            View Our Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-20 flex items-center justify-center gap-12 text-muted-foreground"
        >
          {[
            { num: '50+', label: 'Projects' },
            { num: '30+', label: 'Clients' },
            { num: '4.9', label: 'Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-space text-2xl md:text-3xl font-bold text-foreground">{stat.num}</div>
              <div className="text-sm font-inter mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}