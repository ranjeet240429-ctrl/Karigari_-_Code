import { motion } from 'framer-motion';
import { Palette, Code2, Rocket, Shield, Sparkles, HeartHandshake } from 'lucide-react';

const reasons = [
  { icon: Palette, title: 'Artisan Design', desc: 'Every pixel is placed with intention. We craft interfaces that are both beautiful and intuitive.', color: 'text-primary' },
  { icon: Code2, title: 'Clean Code', desc: 'Semantic, accessible, and performance-optimized code that scales with your business.', color: 'text-secondary' },
  { icon: Rocket, title: 'Lightning Fast', desc: 'Sub-second load times with optimized assets, lazy loading, and modern frameworks.', color: 'text-primary' },
  { icon: Shield, title: 'Battle-Tested', desc: 'Enterprise-grade security practices and thorough testing at every stage.', color: 'text-secondary' },
  { icon: Sparkles, title: 'Micro-Interactions', desc: 'Delightful animations and transitions that make your site feel alive and premium.', color: 'text-primary' },
  { icon: HeartHandshake, title: 'Dedicated Support', desc: '30 days of free post-launch support and maintenance included with every project.', color: 'text-secondary' },
];

export default function WhyChooseUs() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-border to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-inter font-medium text-primary tracking-widest uppercase">
            Why Choose Us
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4">
            Crafted with <span className="text-primary">Precision</span>
          </h2>
          <p className="text-muted-foreground font-inter mt-4 max-w-xl mx-auto">
            We don't just build websites — we engineer digital experiences that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="cursor-hover group relative p-8 rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm hover:border-primary/30 transition-colors duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-5 ${reason.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-space text-lg font-semibold mb-3">{reason.title}</h3>
                  <p className="font-inter text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}