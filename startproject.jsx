import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import Navbar from '../components/Navbar';
import AnimatedCursor from '../components/AnimatedCursor';
import FormStepContact from '../components/form/FormStepContact';
import FormStepProject from '../components/form/FormStepProject';
import FormStepBudget from '../components/form/FormStepBudget';
import SuccessAnimation from '../components/form/SuccessAnimation';
import confetti from 'canvas-confetti';

const stepFields = [
  ['full_name', 'email'],
  ['project_type', 'description'],
  ['budget'],
];

export default function StartProject() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      project_type: '',
      description: '',
      budget: '',
      timeline: '',
    },
  });

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid) setStep((s) => Math.min(s + 1, 2));
  };

  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const WEB3FORMS_ACCESS_KEY = 'd49b7182-db3d-4657-b6ab-88fb1321135a';

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Save to database
    await base44.entities.ProjectRequest.create(data);

    // Send email via Web3Forms
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Project Request from ${data.full_name}`,
        from_name: 'Karigari & Code Website',
        to: 'ranjeet.240429@andc.du.ac.in',
        name: data.full_name,
        email: data.email,
        phone: data.phone || 'Not provided',
        project_type: data.project_type,
        description: data.description,
        budget: data.budget,
        timeline: data.timeline || 'Not specified',
      }),
    });

    setIsSubmitting(false);
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d9953e', '#3b82f6', '#ffffff'],
    });
  };



  return (
    <div className="min-h-screen bg-background font-inter">
      <AnimatedCursor />
      <Navbar />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-xl mx-auto">
          {!submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-inter font-medium text-primary tracking-widest uppercase">
                Start a Project
              </span>
              <h1 className="font-space text-4xl md:text-5xl font-bold mt-4">
                Let's Build <span className="text-secondary">Together</span>
              </h1>
              <p className="text-muted-foreground font-inter mt-4">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </motion.div>
          )}

          {/* Step indicator */}
          {!submitted && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {[0, 1, 2].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    s === step
                      ? 'w-10 bg-primary'
                      : s < step
                      ? 'w-6 bg-primary/40'
                      : 'w-6 bg-muted'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Form card */}
          <div className="relative rounded-2xl bg-card/50 border border-border/30 backdrop-blur-sm p-8 md:p-10">
            {submitted ? (
              <SuccessAnimation />
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <FormStepContact
                      key="step-0"
                      register={register}
                      errors={errors}
                      onNext={goNext}
                    />
                  )}
                  {step === 1 && (
                    <FormStepProject
                      key="step-1"
                      register={register}
                      errors={errors}
                      setValue={setValue}
                      watch={watch}
                      onNext={goNext}
                      onBack={goBack}
                    />
                  )}
                  {step === 2 && (
                    <FormStepBudget
                      key="step-2"
                      errors={errors}
                      setValue={setValue}
                      watch={watch}
                      onBack={goBack}
                      isSubmitting={isSubmitting}
                    />
                  )}
                </AnimatePresence>
              </form>
            )}
          </div>

          {/* Token Payment Section */}
          {!submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 text-center"
            >
              <div className="rounded-2xl bg-card/30 border border-border/20 backdrop-blur-sm p-8">
                <p className="text-sm text-muted-foreground font-inter mb-4">
                  Want to lock in our availability? Pay a refundable token amount.
                </p>
                <a
                  href="https://razorpay.me/@ranjeetkumar5824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-hover inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-inter font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-300"
                >
                  💰 Pay ₹999 Token Amount
                </a>
                <p className="text-xs text-muted-foreground/60 font-inter mt-3">
                  Secured by Razorpay. 100% refundable if project doesn't start.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}