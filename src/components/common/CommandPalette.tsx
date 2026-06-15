import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, X, Briefcase, Users, Building2 } from 'lucide-react';
import { Input } from '../ui/input';

export function CommandPalette({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        isOpen ? onClose() : null; // Handled by parent but good to have
      }
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', down);
    return () => window.removeEventListener('keydown', down);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm" 
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="relative w-full max-w-2xl bg-card border shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="p-4 border-b flex items-center gap-3">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input 
            autoFocus
            placeholder="Search jobs, candidates, companies..." 
            className="border-0 focus-visible:ring-0 text-lg h-10 p-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 hover:bg-muted rounded-md transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.length > 0 ? (
            <div className="space-y-4 p-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Results for "{query}"</div>
              <div className="space-y-1">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted cursor-pointer transition-colors">
                  <Briefcase className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">Senior Frontend Developer at TechFlow</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted cursor-pointer transition-colors">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">Alex Rivera (Senior UI Engineer)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted cursor-pointer transition-colors">
                  <Building2 className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-medium">Acme Corp (Enterprise Software)</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center space-y-2">
              <p className="text-muted-foreground">Search for anything on HireGrid...</p>
              <p className="text-xs text-muted-foreground/60">Tip: Use <kbd className="px-1.5 py-0.5 rounded border bg-muted font-sans">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 rounded border bg-muted font-sans">K</kbd> to open this from anywhere.</p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
