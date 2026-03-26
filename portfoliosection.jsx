import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Luxe Interiors',
    category: 'E-Commerce',
    desc: 'A premium furniture brand with immersive 3D product views and seamless checkout.',
    gradient: 'from-amber-900/80 to-orange-900/80',
    bg: 'bg-gradient-to-br from-amber-950 to-orange-950',
  },
  {
    title: 'FinFlow Dashboard',
    category: 'SaaS Application',
    desc: 'Real-time financial analytics dashboard with interactive charts and AI insights.',
    gradient: 'from-blue-900/80 to-indigo-900/80',
    bg: 'bg-gradient-to-br from-blue-950 to-indigo-950',
  },
  {
    title: 'Artisan Cafe',
    category: 'Restaurant',
    desc: 'Online ordering platform with table reservations and menu management system.',
    gradient: 'from-emerald-900/80 to-teal-900/80',
    bg: 'bg-gradient-to-br from-emerald-950 to-teal-950',
  },
  {
    title: 'TechHub Academy',
    category: 'EdTech Platform',
    desc: 'Learning management system with video streaming, quizzes, and certifications.',
    gradient: 'from-violet-900/80 to-purple-900/80',
    bg: 'bg-gradient-to-br from-violet-950 to-purple-950',
  },
  {
    title: 'Wanderlust Travel',
    category: 'Travel & Booking',
    desc: 'Travel booking platform with AI-powered itinerary planning and virtual tours.',
    gradient: 'from-rose-900/80 to-pink-900/80',
    bg: 'bg-gradient-to-br from-rose-950 to-pink-950',
  },
  {
    title: 'CryptoVault',
    category: 'FinTech',
    desc: 'Cryptocurrency portfolio tracker with real-time market data and trading features.',
    gradient: 'from-cyan-900/80 to-sky-900/80',
    bg: 'bg-gradient-to-br from-cyan-950 to-sky-950',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-inter font-medium text-secondary tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4">
            Our <span className="text-secondary">Latest</span> Work
          </h2>
          <p className="text-muted-foreground font-inter mt-4 max-w-xl mx-auto">
            Each project is a unique blend of strategy, design, and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="cursor-hover group relative rounded-2xl overflow-hidden aspect-[4/3] border border-border/20"
            >
              {/* Background pattern */}
              <div className={`absolute inset-0 ${project.bg}`}>
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }} />
                <div className="absolute top-8 left-8 font-space text-6xl font-bold opacity-[0.06] text-white">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-xs font-inter font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h3 className="font-space text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="inline-flex items-center gap-2 text-sm text-primary font-medium">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}