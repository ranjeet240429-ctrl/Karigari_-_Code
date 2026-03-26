import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '₹9,999',
    desc: 'Perfect for personal brands and simple websites.',
    features: [
      'Up to 5 Pages',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO',
      '1 Revision Round',
      '7 Days Delivery',
    ],
    featured: false,
  },
  {
    name: 'Business',
    price: '₹19,999',
    desc: 'Ideal for growing businesses that need more power.',
    features: [
      'Up to 10 Pages',
      'CMS Integration',
      'Advanced Animations',
      'Full SEO Package',
      'Analytics Setup',
      '3 Revision Rounds',
      '14 Days Delivery',
      'Social Media Links',
    ],
    featured: true,
  },
  {
    name: 'E-Commerce',
    price: '₹34,999+',
    desc: 'Full-featured online store with payment gateway.',
    features: [
      'Unlimited Products',
      'Payment Gateway',
      'Inventory Management',
      'Order Tracking',
      'Email Notifications',
      'Admin Dashboard',
      '21 Days Delivery',
      'Priority Support',
    ],
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-inter font-medium text-primary tracking-widest uppercase">
            Pricing
          </span>
          <h2 className="font-space text-4xl md:text-5xl font-bold mt-4">
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground font-inter mt-4 max-w-xl mx-auto">
            No hidden fees. Choose a package that fits your needs, or reach out for a custom quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`cursor-hover relative rounded-2xl ${
                plan.featured ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Animated gradient border for featured */}
              {plan.featured && (
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-border opacity-80" />
              )}

              <div className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-card border-0'
                  : 'bg-card/50 border border-border/30'
              } backdrop-blur-sm`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold font-inter">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 pt-2">
                  <h3 className="font-space text-lg font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground font-inter mt-1">{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="font-space text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground font-inter text-sm ml-1">/project</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-inter">
                      <Check size={16} className={plan.featured ? 'text-secondary' : 'text-primary'} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://razorpay.me/@ranjeetkumar5824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`cursor-hover flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-inter font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.featured
                      ? 'bg-secondary text-secondary-foreground hover:shadow-lg hover:shadow-secondary/25'
                      : 'bg-muted/50 text-foreground hover:bg-muted border border-border/30'
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}