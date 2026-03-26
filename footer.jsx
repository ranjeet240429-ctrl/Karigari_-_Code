import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8 px-6 border-t border-border/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-[80px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <span className="font-space text-2xl font-bold">
              <span className="text-primary">Karigari</span>
              <span className="text-muted-foreground mx-1">&</span>
              <span className="text-secondary">Code</span>
            </span>
            <p className="text-sm text-muted-foreground font-inter mt-4 leading-relaxed">
              Handcrafted websites and pixel-perfect code. We turn your vision into a digital reality.
            </p>
          </div>

          <div>
            <h4 className="font-space font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'Portfolio', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/#${link.toLowerCase()}`} className="cursor-hover text-sm text-muted-foreground hover:text-foreground transition-colors font-inter">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-space font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-inter">
                <Mail size={16} className="text-primary" /> hello@karigariandcode.com
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-inter">
                <Phone size={16} className="text-primary flex-shrink-0" /> +91 9266720268
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground font-inter">
                <MapPin size={16} className="text-primary flex-shrink-0" /> Delhi, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-inter">
            © 2026 Karigari & Code. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((link) => (
              <a key={link} href="#" className="cursor-hover text-xs text-muted-foreground hover:text-foreground transition-colors font-inter">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}