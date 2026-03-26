import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, IndianRupee, Clock, Send } from 'lucide-react';

const slideIn = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

const budgets = [
  { value: 'under_10k', label: 'Under ₹10,000' },
  { value: '10k_20k', label: '₹10,000 - ₹20,000' },
  { value: '20k_35k', label: '₹20,000 - ₹35,000' },
  { value: '35k_50k', label: '₹35,000 - ₹50,000' },
  { value: 'above_50k', label: '₹50,000+' },
];

const timelines = [
  { value: 'asap', label: 'ASAP' },
  { value: '1_2_weeks', label: '1-2 Weeks' },
  { value: '2_4_weeks', label: '2-4 Weeks' },
  { value: '1_2_months', label: '1-2 Months' },
  { value: 'flexible', label: 'Flexible' },
];

export default function FormStepBudget({ errors, setValue, watch, onBack, isSubmitting }) {
  const budget = watch('budget');
  const timeline = watch('timeline');

  return (
    <motion.div {...slideIn} className="space-y-6">
      <div className="mb-8">
        <h3 className="font-space text-2xl font-bold">Budget & Timeline</h3>
        <p className="text-muted-foreground font-inter text-sm mt-2">Help us understand your constraints.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <IndianRupee size={14} className="text-primary" /> Budget Range
          </Label>
          <Select
            value={budget || ''}
            onValueChange={(val) => setValue('budget', val, { shouldValidate: true })}
          >
            <SelectTrigger className="bg-muted/30 border-border/30 h-12 font-inter">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b.value} value={b.value} className="font-inter">
                  {b.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.budget && (
            <p className="text-destructive text-xs mt-1 font-inter">{errors.budget.message}</p>
          )}
        </div>

        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <Clock size={14} className="text-primary" /> Expected Timeline
          </Label>
          <Select
            value={timeline || ''}
            onValueChange={(val) => setValue('timeline', val)}
          >
            <SelectTrigger className="bg-muted/30 border-border/30 h-12 font-inter">
              <SelectValue placeholder="Select timeline" />
            </SelectTrigger>
            <SelectContent>
              {timelines.map((t) => (
                <SelectItem key={t.value} value={t.value} className="font-inter">
                  {t.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          type="button"
          onClick={onBack}
          variant="outline"
          className="flex-1 h-12 font-inter rounded-xl border-border/30 hover:bg-muted/30 cursor-hover"
        >
          <ArrowLeft size={16} className="mr-2" /> Back
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 h-12 bg-primary text-primary-foreground font-inter font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all group cursor-hover disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
          ) : (
            <>
              Submit Request
              <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </motion.div>
  );
}