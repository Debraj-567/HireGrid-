import { motion } from 'framer-motion';
import { 
  Activity, Target, Zap, ChevronRight, FileText, 
  BrainCircuit, TrendingUp, Compass, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CandidateDashboard() {
  return (
    <div className="flex h-full min-h-[calc(100vh-4rem)] bg-[#08090D] overflow-hidden rounded-xl border border-white/10 m-4">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F1117] border-r border-white/5 flex flex-col shrink-0">
        <div className="p-6 border-b border-white/5">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-3 text-white font-bold">
            JD
          </div>
          <h2 className="font-semibold text-white">John Doe</h2>
          <p className="text-xs text-muted-foreground">Frontend Engineer</p>
        </div>
        
        <div className="flex-1 p-3 space-y-1">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white/10 text-white transition-colors">
            <Activity className="w-4 h-4" /> Career Hub
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Target className="w-4 h-4" /> Active Applications
          </button>
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <BrainCircuit className="w-4 h-4" /> AI Skill Analysis
          </button>
        </div>

        <div className="p-3 border-t border-white/5">
          <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-4 h-4" /> Preferences
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto no-scrollbar">
        <header className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Welcome back, John.</h1>
            <p className="text-muted-foreground">Your AI profile score has increased by 5% this week.</p>
          </div>
          <Button className="bg-white text-black hover:bg-white/90 rounded-full font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Explore Opportunities
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Area: Pipeline & Insights */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Predictive Metric Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
              <div className="flex items-start justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                    <Zap className="w-4 h-4" /> High Probability Match
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">Senior React Engineer at Vercel</h3>
                  <p className="text-muted-foreground text-sm">Based on your recent GitHub activity, you have a 94% compatibility score.</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-black/40 border border-primary/30 flex items-center justify-center flex-col shadow-[0_0_15px_rgba(79,124,255,0.2)]">
                  <span className="text-xl font-bold text-white">94</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3 relative z-10">
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-lg">1-Click Apply</Button>
                <Button size="sm" variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-lg">View Analysis</Button>
              </div>
            </motion.div>

            {/* Application Tracker - Linear Style List */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Pipeline</h3>
              <div className="bg-[#0F1117] border border-white/5 rounded-xl overflow-hidden">
                {[
                  { role: "Frontend Lead", company: "Stripe", status: "Technical Interview", time: "in 2 days", dot: "bg-yellow-400" },
                  { role: "Software Engineer", company: "Linear", status: "Application Reviewed", time: "Updated 4h ago", dot: "bg-blue-400" },
                  { role: "Fullstack Dev", company: "Notion", status: "Offer Stage", time: "Pending Action", dot: "bg-green-400" }
                ].map((job, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${job.dot} shadow-[0_0_8px_currentColor]`}></div>
                      <div>
                        <div className="font-medium text-white/90 group-hover:text-white transition-colors">{job.role}</div>
                        <div className="text-xs text-muted-foreground">{job.company}</div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-4">
                      <div>
                        <div className="text-sm text-white/80">{job.status}</div>
                        <div className="text-xs text-muted-foreground">{job.time}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: AI Analytics */}
          <div className="space-y-6">
            
            {/* Resume Analysis */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-secondary" /> Resume Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold text-white">8.5<span className="text-sm text-muted-foreground font-normal">/10</span></span>
                  <span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded">Top 15%</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Impact Metrics</span>
                    <span className="text-white">Needs Work</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden"><div className="h-full bg-secondary w-[45%]"></div></div>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  AI Suggestion: Quantify your achievements in the TechFlow role to boost your score to 9.2.
                </p>
              </div>
            </div>

            {/* Growth Prediction */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-primary" /> Market Demand
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">TypeScript</div>
                    <div className="text-xs text-green-400">+12% demand this month</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center">
                    <Compass className="w-4 h-4 text-white/70" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Next.js</div>
                    <div className="text-xs text-green-400">+24% demand this month</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
