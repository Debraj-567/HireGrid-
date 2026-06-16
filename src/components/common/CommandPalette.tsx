import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, Terminal, Code, Users } from 'lucide-react';
import { Input } from '../ui/input';

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -10 }}
        className="relative w-full max-w-2xl bg-[#0F1117] border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="p-4 border-b border-white/5 flex items-center gap-3 bg-black/20">
          <Terminal className="w-5 h-5 text-primary" />
          <Input 
            autoFocus
            placeholder="Ask AI Copilot or search..." 
            className="border-0 focus-visible:ring-0 text-lg h-10 p-0 bg-transparent text-white placeholder:text-muted-foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="p-2">
          {query.length > 0 ? (
            <div className="space-y-1 p-2">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <Sparkles className="w-3 h-3" /> AI Actions
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                  <Search className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Find candidates matching "{query}"</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-colors group">
                <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20">
                  <Code className="w-4 h-4 text-secondary" />
                </div>
                <span className="text-sm font-medium">Generate job description for "{query}"</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 p-4">
               <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Suggested Actions</div>
               <div className="grid grid-cols-2 gap-2">
                 <div className="p-3 border border-white/5 rounded-xl hover:bg-white/5 cursor-pointer flex items-center gap-3 transition-colors">
                   <Users className="w-4 h-4 text-muted-foreground" />
                   <span className="text-sm">View Top React Talent</span>
                 </div>
                 <div className="p-3 border border-white/5 rounded-xl hover:bg-white/5 cursor-pointer flex items-center gap-3 transition-colors">
                   <Sparkles className="w-4 h-4 text-muted-foreground" />
                   <span className="text-sm">Analyze Pipeline Health</span>
                 </div>
               </div>
            </div>
          )}
        </div>
        <div className="border-t border-white/5 p-3 bg-black/20 flex justify-between items-center text-xs text-muted-foreground">
          <div className="flex gap-4">
            <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1 rounded">↑</kbd><kbd className="bg-white/10 px-1 rounded">↓</kbd> to navigate</span>
            <span className="flex items-center gap-1"><kbd className="bg-white/10 px-1 rounded">↵</kbd> to select</span>
          </div>
          <span>HireGrid AI Engine</span>
        </div>
      </motion.div>
    </div>
  );
}
