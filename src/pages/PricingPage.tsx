import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for individuals and small startups just getting started.',
    features: [
      { name: 'Up to 3 active job postings', included: true },
      { name: 'Basic AI candidate matching', included: true },
      { name: 'Candidate messaging', included: true },
      { name: 'Community support', included: true },
      { name: 'Advanced analytics', included: false },
      { name: 'Custom career page', included: false },
      { name: 'Priority support', included: false },
    ]
  },
  {
    name: 'Professional',
    price: { monthly: 99, yearly: 79 },
    popular: true,
    description: 'Ideal for growing companies with consistent hiring needs.',
    features: [
      { name: 'Up to 15 active job postings', included: true },
      { name: 'Advanced AI ranking & insights', included: true },
      { name: 'Priority candidate messaging', included: true },
      { name: 'Dedicated career page', included: true },
      { name: 'Team collaboration tools', included: true },
      { name: 'Basic analytics', included: true },
      { name: 'Priority email support', included: true },
    ]
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', yearly: 'Custom' },
    description: 'Full-featured solution for large organizations and agencies.',
    features: [
      { name: 'Unlimited job postings', included: true },
      { name: 'Premium AI matching & ranking', included: true },
      { name: 'White-labeling options', included: true },
      { name: 'Advanced API access', included: true },
      { name: 'Custom integrations', included: true },
      { name: 'Advanced predictive analytics', included: true },
      { name: '24/7 Priority phone support', included: true },
    ]
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your recruitment needs. No hidden fees, cancel anytime.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-8">
            <span className={cn("text-sm font-medium", !isYearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-7 rounded-full bg-indigo-600 p-1 flex items-center transition-all"
            >
              <motion.div 
                animate={{ x: isYearly ? 28 : 0 }}
                className="w-5 h-5 rounded-full bg-white shadow-sm"
              />
            </button>
            <span className={cn("text-sm font-medium", isYearly ? "text-foreground" : "text-muted-foreground")}>
              Yearly <span className="text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={cn(
                "h-full relative overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",
                plan.popular ? "border-indigo-600 border-2 shadow-xl" : "border-border"
              )}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold">
                      {typeof plan.price.monthly === 'number' ? `$${isYearly ? plan.price.yearly : plan.price.monthly}` : plan.price.monthly}
                    </span>
                    {typeof plan.price.monthly === 'number' && (
                      <span className="text-muted-foreground">/month</span>
                    )}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="h-px bg-border my-2" />
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground shrink-0 opacity-50" />
                        )}
                        <span className={cn(feature.included ? "text-foreground" : "text-muted-foreground line-through opacity-50")}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={cn("w-full h-12 text-lg font-semibold", plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : "")}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.price.monthly === 0 ? 'Get Started Free' : plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Helper for cn
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
