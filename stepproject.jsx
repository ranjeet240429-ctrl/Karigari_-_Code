import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, ArrowRight, Briefcase, FileText } from 'lucide-react';

const slideIn = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
};

const projectTypes = [
  { value: 'business_website', label: 'Business Website' },
  { value: 'e_commerce', label: 'E-Commerce Store' },
  { value: 'landing_page', label: 'Landing Page' },
  { value: 'web_application', label: 'Web Application' },
  { value: 'portfolio', label: 'Portfolio / Blog' },
  { value: 'other', label: 'Other' },
];

export default function FormStepProject({ register, errors, setValue, watch, onNext, onBack }) {
  const projectType = watch('project_type');

  return (
    <motion.div {...slideIn} className="space-y-6">
      <div className="mb-8">
        <h3 className="font-space text-2xl font-bold">Project Details</h3>
        <p className="text-muted-foreground font-inter text-sm mt-2">Tell us about your vision.</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <Briefcase size={14} className="text-secondary" /> Project Type
          </Label>
          <Select
            value={projectType || ''}
            onValueChange={(val) => setValue('project_type', val, { shouldValidate: true })}
          >
            <SelectTrigger className="bg-muted/30 border-border/30 h-12 font-inter">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((pt) => (
                <SelectItem key={pt.value} value={pt.value} className="font-inter">
                  {pt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.project_type && (
            <p className="text-destructive text-xs mt-1 font-inter">{errors.project_type.message}</p>
          )}
        </div>

        <div>
          <Label className="font-inter text-sm mb-2 flex items-center gap-2">
            <FileText size={14} className="text-secondary" /> Project Description
          </Label>
          <Textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Describe your project, target audience, features needed, design inspiration..."
            className="bg-muted/30 border-border/30 min-h-[140px] font-inter focus:border-secondary/50 transition-colors resize-none"
          />
          {errors.description && (
            <p className="text-destructive text-xs mt-1 font-inter">{errors.description.message}</p>
          )}
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
          type="button"
          onClick={onNext}
          className="flex-1 h-12 bg-secondary text-secondary-foreground font-inter font-semibold rounded-xl hover:shadow-lg hover:shadow-secondary/20 transition-all group cursor-hover"
        >
          Next Step
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}