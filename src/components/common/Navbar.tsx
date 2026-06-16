import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Command, Sparkles, Box } from 'lucide-react';
import { CommandPalette } from './CommandPalette';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass-panel border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors">
            <Box className="w-4 h-4 text-primary" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-white">
            HireGrid<span className="text-primary">.ai</span>
          </span>
        </Link>

        {/* Global Search / Command Center trigger */}
        <div 
          onClick={() => setIsCommandPaletteOpen(true)}
          className="hidden md:flex flex-1 max-w-md mx-8 items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all cursor-text text-sm text-muted-foreground"
        >
          <Command className="w-4 h-4" />
          <span>Ask AI or search anything...</span>
          <div className="ml-auto flex items-center gap-1">
            <kbd className="bg-background/50 rounded px-1.5 py-0.5 text-[10px] font-mono">Ctrl</kbd>
            <kbd className="bg-background/50 rounded px-1.5 py-0.5 text-[10px] font-mono">K</kbd>
          </div>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/product" className="hover:text-white transition-colors">Product</Link>
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>

          <div className="w-px h-4 bg-white/10 hidden md:block"></div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors hidden md:block">
              Log in
            </Link>
            <Link to="/register">
              <Button className="bg-white text-black hover:bg-white/90 h-9 px-4 text-sm font-medium rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Start Building <Sparkles className="w-3 h-3 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />
    </nav>
  );
}
