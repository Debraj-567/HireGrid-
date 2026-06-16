import { motion } from 'framer-motion';
import { BrainCircuit, Workflow, Activity, Users, ChevronRight } from 'lucide-react';

const capabilities = [
  {
    icon: BrainCircuit,
    title: "AI Talent Engine",
    desc: "Our neural graph maps candidate potential against technical requirements, culture fit, and historical success data.",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20"
  },
  {
    icon: Workflow,
    title: "Hiring Automation",
    desc: "Visual workflow builder. Trigger actions based on candidate stage, test scores, or AI predictions without writing code.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/20"
  },
  {
    icon: Activity,
    title: "Real-Time Insights",
    desc: "Live analytics on hiring velocity, offer acceptance rates, and pipeline bottlenecks across your entire organization.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  },
  {
    icon: Users,
    title: "Intelligence Map",
    desc: "Interactive global visualization of talent clusters, helping you decide where to open your next hub or target remote workers.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 relative border-t border-white/5 bg-[#08090D]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-20">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-4">The Operating System</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Everything you need to scale elite engineering teams.</h3>
          <p className="text-xl text-muted-foreground">
            We stripped away the noise of traditional job boards and built a unified, AI-native infrastructure for the entire hiring lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:bg-white/[0.02] transition-colors relative overflow-hidden"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 ${cap.bg} ${cap.border}`}>
                <cap.icon className={`w-6 h-6 ${cap.color}`} />
              </div>
              
              <h4 className="text-2xl font-bold text-white mb-3">{cap.title}</h4>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {cap.desc}
              </p>
              
              <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors cursor-pointer">
                Explore capability <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
