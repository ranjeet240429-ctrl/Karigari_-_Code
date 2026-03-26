import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Mail, Phone } from 'lucide-react';

const slideIn = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

export default function FormStepContact({ register, errors, onNext }) {
  return (
    <motion.div {...slideIn} className="space-y-6">
      <div className="mb-8">
        <h3 className="font-space text-2xl font-bold">Contact Information</h3>
        <p className="text-muted-foreground font-inter text-sm mt-2">Let's start with the basics.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <User size={14} className="text-primary" /> Full Name
          </Label>
          <Input
            {...register('full_name', { required: 'Name is required' })}
            placeholder="John Doe"
            className="bg-muted/30 border-border/30 h-12 font-inter focus:border-primary/50 transition-colors"
          />
          {errors.full_name && (
            <p className="text-destructive text-xs mt-1 font-inter">{errors.full_name.message}</p>
          )}
        </div>

        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <Mail size={14} className="text-primary" /> Email
          </Label>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' },
            })}
            type="email"
            placeholder="john@example.com"
            className="bg-muted/30 border-border/30 h-12 font-inter focus:border-primary/50 transition-colors"
          />
          {errors.email && (
            <p className="text-destructive text-xs mt-1 font-inter">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <Phone size={14} className="text-primary" /> Phone (Optional)
          </Label>
          <Input
            {...register('phone')}
            placeholder="+91 98765 43210"
            className="bg-muted/30 border-border/30 h-12 font-inter focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      <Button
        type="button"
        onClick={onNext}
        className="w-full h-12 bg-primary text-primary-foreground font-inter font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all group cursor-hover"
      >
        Next Step
        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>
  );
}