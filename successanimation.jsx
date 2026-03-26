import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const checkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 },
  },
};

const circleVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SuccessAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="relative w-32 h-32 mx-auto mb-8">
        {/* Glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute inset-0 bg-green-500 rounded-full blur-[40px]"
        />

        <svg viewBox="0 0 100 100" className="w-32 h-32 relative z-10">
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="3"
            variants={circleVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M30 52 L45 67 L72 37"
            fill="none"
            stroke="hsl(142, 71%, 45%)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={checkVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="font-space text-3xl font-bold mb-3"
      >
        Thank You!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="font-inter text-muted-foreground max-w-md mx-auto leading-relaxed"
      >
        Your project request has been received. We'll review your requirements and get back to you within 24 hours.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="cursor-hover inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/30 text-foreground font-inter font-medium hover:bg-muted/30 transition-all"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}