import { motion } from 'framer-motion';
import { Sparkles, Target, Zap, Shield, LineChart, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'AI-Powered Matching',
    description: 'Our proprietary algorithm connects candidates with roles that perfectly fit their skills, experience, and culture preferences.',
    icon: Sparkles,
  },
  {
    title: 'Precision Targeting',
    description: 'Recruiters can pinpoint the exact talent they need with advanced filters and automated pre-screening tools.',
    icon: Target,
  },
  {
    title: 'Lightning Fast Hiring',
    description: 'Reduce time-to-hire by up to 50% with automated interview scheduling and streamlined communication.',
    icon: Zap,
  },
  {
    title: 'Verified Profiles',
    description: 'Every candidate profile is thoroughly vetted and verified, ensuring high-quality talent pools for employers.',
    icon: Shield,
  },
  {
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your hiring pipeline with comprehensive dashboards and predictive analytics.',
    icon: LineChart,
  },
  {
    title: 'Collaborative Hiring',
    description: 'Built-in tools for teams to share feedback, review candidates together, and make better hiring decisions.',
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose HireGrid?</h2>
          <p className="text-muted-foreground text-lg">
            We provide the most advanced tools for both job seekers and employers, making the hiring process seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full bg-background border-border/50 hover:border-indigo-500/50 transition-colors duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
