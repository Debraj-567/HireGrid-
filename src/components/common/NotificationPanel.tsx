import { motion } from 'framer-motion';
import { Briefcase, MessageSquare, Star } from 'lucide-react';
import { cn } from '@/utils/utils';

export function NotificationPanel({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const notifications = [
    { icon: Briefcase, title: 'New Job Match', desc: 'A Senior Frontend Role matches your profile.', time: '2m ago', color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { icon: MessageSquare, title: 'New Message', desc: 'TechFlow recruiter sent you a message.', time: '1h ago', color: 'text-green-600', bg: 'bg-green-100' },
    { icon: Star, title: 'Profile View', desc: 'Acme Corp viewed your profile today.', time: '3h ago', color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[90]" onClick={onClose} />
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.95 }}
        className="absolute top-16 right-0 w-80 bg-card border shadow-xl rounded-2xl overflow-hidden z-[100] mt-2"
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-bold">Notifications</h3>
          <span className="text-xs text-indigo-600 hover:underline cursor-pointer">Mark all read</span>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {notifications.map((n, i) => (
            <div key={i} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer border-b last:border-0 flex gap-4">
              <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", n.bg)}>
                <n.icon className={cn("w-5 h-5", n.color)} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold">{n.title}</p>
                <p className="text-xs text-muted-foreground leading-snug">{n.desc}</p>
                <p className="text-[10px] text-muted-foreground/60">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-3 text-center bg-muted/30">
          <button className="text-xs font-semibold text-muted-foreground hover:text-indigo-600 transition-colors">View All Notifications</button>
        </div>
      </motion.div>
    </>
  );
}
