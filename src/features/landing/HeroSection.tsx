import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Network, Command, User, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const fullText = "Find Senior React Engineers in Bangalore";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="aurora-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>HireGrid AI Engine v2.0 is live</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
              Build Elite Teams <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Using AI.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              The operating system for modern recruiting. Predict hiring success, automate workflows, and rank talent with military precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="h-14 px-8 text-base bg-white text-black hover:bg-white/90 rounded-full font-semibold">
                Start Building Now
              </Button>
              <Button variant="outline" className="h-14 px-8 text-base border-white/20 hover:bg-white/5 rounded-full text-white glass-panel group">
                Watch Demo <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right: Interactive UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] w-full"
          >
            {/* Main Mockup Window */}
            <div className="absolute inset-0 glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
              {/* Header */}
              <div className="h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-black/40 border border-white/10 rounded-md px-4 py-1 text-xs text-muted-foreground flex items-center gap-2 w-2/3 max-w-sm">
                    <Command className="w-3 h-3" />
                    <span>{typingText}</span>
                    <span className="w-1 h-3 bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>
              
              {/* Body */}
              <div className="flex-1 p-6 bg-gradient-to-b from-transparent to-black/40 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-medium flex items-center gap-2">
                    <Network className="w-4 h-4 text-secondary" /> AI Talent Match
                  </h3>
                  <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">12 Candidates Found</span>
                </div>

                {/* Simulated Results */}
                {[
                  { name: "Rahul S.", role: "Sr. React Engineer", score: 98, skills: ["React", "TypeScript", "Node"] },
                  { name: "Priya M.", role: "Frontend Lead", score: 94, skills: ["React", "System Design", "AWS"] }
                ].map((c, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 + (i * 0.2) }}
                    className="p-4 rounded-xl border border-white/5 bg-white/5 flex items-center gap-4 group hover:bg-white/10 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-white">{c.name}</span>
                        <span className="text-xs font-mono text-green-400 bg-green-400/10 px-2 py-0.5 rounded">{c.score}% Match</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-2">{c.role}</div>
                      <div className="flex gap-2">
                        {c.skills.map(s => <span key={s} className="text-[10px] border border-white/10 px-1.5 rounded text-white/60">{s}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-8 top-16 glass-panel p-4 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl"
            >
              <Cpu className="w-8 h-8 text-secondary" />
              <div>
                <div className="text-xs text-muted-foreground">Prediction</div>
                <div className="text-sm font-bold text-white">92% Success Rate</div>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </div>
  );
}
