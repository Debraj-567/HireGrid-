import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Search, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  return (
    <div className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-950/20 dark:via-background dark:to-background"></div>
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background glass mb-4">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
            AI-Powered Recruitment Platform
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 dark:from-white dark:via-indigo-400 dark:to-white pb-2">
            Connecting Exceptional Talent <br className="hidden lg:block"/> With Exceptional Opportunities
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            HireGrid uses advanced AI matching to pair top-tier candidates with the most innovative companies. Find your next role or hire your next star.
          </p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-10 p-2 rounded-2xl glass shadow-xl flex flex-col md:flex-row gap-2"
          >
            <div className="relative flex-1 flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Job title, keywords, or company" 
                className="pl-12 border-0 bg-transparent focus-visible:ring-0 h-14 text-lg"
              />
            </div>
            <div className="hidden md:block w-px bg-border my-2"></div>
            <div className="relative flex-1 flex items-center">
              <MapPin className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="City, state, or 'Remote'" 
                className="pl-12 border-0 bg-transparent focus-visible:ring-0 h-14 text-lg"
              />
            </div>
            <Button size="lg" className="h-14 px-8 text-lg rounded-xl">
              Find Jobs
            </Button>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-muted-foreground">
            <span>Popular:</span>
            <span className="px-3 py-1 rounded-full border bg-background/50 cursor-pointer hover:bg-accent transition-colors">Frontend Developer</span>
            <span className="px-3 py-1 rounded-full border bg-background/50 cursor-pointer hover:bg-accent transition-colors">Product Manager</span>
            <span className="px-3 py-1 rounded-full border bg-background/50 cursor-pointer hover:bg-accent transition-colors">Data Scientist</span>
            <span className="px-3 py-1 rounded-full border bg-background/50 cursor-pointer hover:bg-accent transition-colors">Remote</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
