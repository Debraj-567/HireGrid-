import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, User, Briefcase, ShieldCheck } from 'lucide-react';
import { cn } from '@/utils/utils';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<'candidate' | 'recruiter' | null>(null);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { title: 'Account Type', icon: User },
    { title: 'Information', icon: Briefcase },
    { title: 'Verification', icon: ShieldCheck },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4 bg-muted/20">
      <div className="w-full max-w-xl space-y-8">
        {/* Stepper Header */}
        <div className="flex justify-between items-center px-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 relative">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                step > i + 1 ? "bg-indigo-600 border-indigo-600 text-white" : 
                step === i + 1 ? "border-indigo-600 text-indigo-600" : "border-muted text-muted-foreground"
              )}>
                {step > i + 1 ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
              </div>
              <span className={cn("text-xs font-medium", step === i + 1 ? "text-indigo-600" : "text-muted-foreground")}>
                {s.title}
              </span>
              {i < steps.length - 1 && (
                <div className="absolute w-[calc(100%-1rem)] h-0.5 bg-muted top-5 left-[calc(100%+0.5rem)] -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <Card className="shadow-2xl border-border/50 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">Join HireGrid</CardTitle>
                  <CardDescription>Choose how you'd like to use our platform</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div 
                    onClick={() => setRole('candidate')}
                    className={cn(
                      "p-6 border-2 rounded-2xl cursor-pointer transition-all hover:border-indigo-500",
                      role === 'candidate' ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/10" : "border-border"
                    )}
                  >
                    <User className="w-8 h-8 text-indigo-600 mb-4" />
                    <h3 className="font-bold">I'm a Candidate</h3>
                    <p className="text-sm text-muted-foreground mt-2">I want to find my next dream job.</p>
                  </div>
                  <div 
                    onClick={() => setRole('recruiter')}
                    className={cn(
                      "p-6 border-2 rounded-2xl cursor-pointer transition-all hover:border-indigo-500",
                      role === 'recruiter' ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/10" : "border-border"
                    )}
                  >
                    <Briefcase className="w-8 h-8 text-indigo-600 mb-4" />
                    <h3 className="font-bold">I'm a Recruiter</h3>
                    <p className="text-sm text-muted-foreground mt-2">I want to hire exceptional talent.</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button disabled={!role} onClick={nextStep} className="w-full h-11 bg-indigo-600">
                    Continue
                  </Button>
                </CardFooter>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Tell us a bit about yourself</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">Back</Button>
                  <Button onClick={nextStep} className="flex-1 bg-indigo-600">Continue</Button>
                </CardFooter>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle>Security Check</CardTitle>
                  <CardDescription>Please verify your identity to complete registration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    By clicking complete, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button variant="outline" onClick={prevStep} className="flex-1">Back</Button>
                  <Button className="flex-1 bg-indigo-600">Complete Registration</Button>
                </CardFooter>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
        
        <p className="text-center text-sm text-muted-foreground">
          Already have an account? <Link to="/login" className="text-indigo-600 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
