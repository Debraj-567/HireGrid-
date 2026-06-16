import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Search, Command, Users, Building2, Plus, 
  MoreHorizontal, BrainCircuit, Activity, Settings, AlignLeft 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RecruiterDashboard() {
  const [activeTab, setActiveTab] = useState('pipeline');

  return (
    <div className="flex h-full min-h-[calc(100vh-4rem)] bg-[#08090D] overflow-hidden rounded-xl border border-white/10 m-4">
      
      {/* Sidebar - Linear Style */}
      <aside className="w-64 bg-[#0F1117] border-r border-white/5 flex flex-col shrink-0">
        <div className="p-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center border border-primary/30">
              <Building2 className="w-3 h-3 text-primary" />
            </div>
            <span className="font-semibold text-sm text-white">Acme Corp</span>
          </div>
          <Button variant="ghost" size="icon" className="h-6 w-6 rounded text-muted-foreground hover:text-white">
            <AlignLeft className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-6 no-scrollbar">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">Workspace</div>
            <button onClick={() => setActiveTab('pipeline')} className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${activeTab === 'pipeline' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white hover:bg-white/5'}`}>
              <Activity className="w-4 h-4" /> Active Pipelines
            </button>
            <button onClick={() => setActiveTab('candidates')} className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm transition-colors ${activeTab === 'candidates' ? 'bg-white/10 text-white' : 'text-muted-foreground hover:text-white hover:bg-white/5'}`}>
              <Users className="w-4 h-4" /> Talent Pool
            </button>
            <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
              <Terminal className="w-4 h-4" /> Workflows
            </button>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Open Roles</div>
              <Plus className="w-3 h-3 text-muted-foreground hover:text-white cursor-pointer" />
            </div>
            {['Senior React Eng', 'Product Designer', 'Data Scientist'].map((role, i) => (
              <div key={i} className="flex items-center justify-between px-2 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors cursor-pointer group">
                <span className="truncate">{role}</span>
                <span className="text-[10px] bg-white/5 px-1.5 rounded text-white/50 group-hover:text-white/80">{Math.floor(Math.random() * 20) + 1}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-3 border-t border-white/5">
          <button className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-colors">
            <Settings className="w-4 h-4" /> Settings
          </button>
        </div>
      </aside>

      {/* Main Work Area - Kanban / Data Grid */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#08090D]">
        {/* Topbar */}
        <header className="h-14 border-b border-white/5 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="font-semibold text-white">Senior React Engineer</h1>
            <span className="px-2 py-0.5 rounded text-xs bg-green-500/10 text-green-400 border border-green-500/20">Active</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-1.5 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Filter..." className="bg-white/5 border border-white/10 rounded-md pl-8 pr-3 py-1 text-sm text-white focus:outline-none focus:border-primary transition-colors w-48" />
            </div>
            <Button size="sm" className="bg-white text-black hover:bg-white/90 h-8">Add Candidate</Button>
          </div>
        </header>

        {/* Board */}
        <div className="flex-1 overflow-x-auto p-6 flex gap-6 no-scrollbar">
          {['Sourced', 'AI Screened', 'Technical', 'Offer'].map((stage, i) => (
            <div key={i} className="w-80 shrink-0 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-white/90">{stage}</span>
                <span className="text-muted-foreground">{Math.floor(Math.random() * 5) + 1}</span>
              </div>
              
              {/* Cards */}
              <div className="space-y-3">
                {[1, 2].map((_, j) => (
                  <motion.div 
                    layoutId={`card-${i}-${j}`}
                    key={j} 
                    className="bg-[#0F1117] p-4 rounded-xl border border-white/5 shadow-sm hover:border-white/20 transition-colors cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/10 text-xs font-bold text-white">
                          {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'][Math.floor(Math.random() * 26)]}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">Candidate Name</div>
                          <div className="text-xs text-muted-foreground">Ex-Google, 5yrs</div>
                        </div>
                      </div>
                      <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">AI Match: {Math.floor(Math.random() * 20) + 80}%</span>
                      <span className="text-[10px] bg-white/5 text-muted-foreground px-1.5 py-0.5 rounded border border-white/10">React</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Sidebar - AI Copilot (Cursor Style) */}
      <aside className="w-80 bg-[#0F1117] border-l border-white/5 flex flex-col shrink-0">
        <div className="p-4 border-b border-white/5 flex items-center gap-2">
          <BrainCircuit className="w-4 h-4 text-secondary" />
          <span className="font-semibold text-sm text-white">Recruiter Copilot</span>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto no-scrollbar flex flex-col gap-4">
          <div className="bg-black/40 border border-white/5 p-3 rounded-xl text-sm text-muted-foreground">
            I've analyzed the pipeline for <span className="text-white">Senior React Engineer</span>. You have 2 candidates waiting in Technical Review for over 48 hours.
          </div>
          <div className="flex flex-col items-end">
            <div className="bg-primary/20 border border-primary/30 text-white p-3 rounded-xl text-sm max-w-[90%]">
              Schedule technical interviews for the top 2 matches.
            </div>
          </div>
          <div className="bg-black/40 border border-white/5 p-3 rounded-xl text-sm text-muted-foreground">
            Drafting email invites for Sarah and Michael based on your calendar availability...
            <div className="mt-3 p-2 bg-white/5 rounded border border-white/10 text-xs text-white space-y-1">
              <div className="font-medium text-primary">Draft created.</div>
              <div>Subject: Interview with Acme Corp</div>
            </div>
            <button className="mt-2 text-xs text-secondary hover:underline">Review & Send</button>
          </div>
        </div>

        <div className="p-4 border-t border-white/5 bg-black/20">
          <div className="relative">
            <Command className="absolute left-2.5 top-2.5 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Ask Copilot..." 
              className="w-full bg-[#0F1117] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-secondary transition-colors" 
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
