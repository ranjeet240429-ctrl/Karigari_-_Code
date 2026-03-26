import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Pricing', href: '/#pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl transition-all duration-500 ${
        scrolled
          ? 'bg-background/70 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/5'
          : 'bg-background/30 backdrop-blur-md border border-border/20'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="cursor-hover">
          <span className="font-space text-xl font-bold">
            <span className="text-primary">Karigari</span>
            <span className="text-muted-foreground mx-1">&</span>
            <span className="text-secondary">Code</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="cursor-hover text-sm font-inter text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <Link
            to="/start-project"
            className="cursor-hover px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-inter text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Start a Project
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden cursor-hover text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden px-6 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/start-project"
            onClick={() => setOpen(false)}
            className="block text-center px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold"
          >
            Start a Project
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}