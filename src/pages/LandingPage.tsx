import { HeroSection } from '@/features/landing/HeroSection';
import { FeaturesSection } from '@/features/landing/FeaturesSection';

function CopilotSection() {
  return (
    <section className="py-32 border-t border-white/5 bg-[#0F1117] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary mb-8">
              Recruiter Copilot
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Your AI hiring assistant, built right in.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Stop writing generic JDs or manually parsing resumes. Just tell the Copilot what you need, and watch it orchestrate the entire top-of-funnel process.
            </p>
            
            <div className="space-y-4">
              {['"Draft a Senior Rust Developer JD"', '"Find candidates with fintech experience"', '"Schedule interviews for top 3 matches"'].map((cmd, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-black/20 text-white/80 font-mono text-sm">
                  <span className="text-primary">{'>'}</span> {cmd}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 blur-3xl -z-10 rounded-full"></div>
            <div className="glass-panel p-6 rounded-2xl border border-white/10 shadow-2xl">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-white/10 flex-shrink-0"></div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none text-sm text-white/80 w-full">
                    Can you analyze Sarah's resume against our current Lead Data Scientist requirements?
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
                    <span className="text-primary text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-primary/5 border border-primary/10 p-4 rounded-2xl rounded-tl-none text-sm text-white/90 w-full space-y-3">
                    <p>I've analyzed Sarah's profile. Here is the breakdown:</p>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span>Python/PyTorch</span>
                        <span className="text-green-400">Strong Match (98%)</span>
                      </div>
                      <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden"><div className="h-full bg-green-400 w-[98%]"></div></div>
                      
                      <div className="flex justify-between items-center text-xs pt-2">
                        <span>Team Leadership</span>
                        <span className="text-yellow-400">Moderate Match (75%)</span>
                      </div>
                      <div className="w-full h-1 bg-black/40 rounded-full overflow-hidden"><div className="h-full bg-yellow-400 w-[75%]"></div></div>
                    </div>
                    <p className="pt-2 text-primary font-medium cursor-pointer hover:underline">Proceed to schedule technical round?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full bg-[#08090D]">
      <HeroSection />
      <FeaturesSection />
      <CopilotSection />
      {/* Remove old sections that look like a generic job board */}
    </div>
  );
}
