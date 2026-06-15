import { Link, Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/common/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  Bookmark, 
  MessageSquare, 
  Settings, 
  User,
  Bell,
  LogOut
} from 'lucide-react';
import { cn } from '@/utils/utils';

export function DashboardLayout() {
  const location = useLocation();
  const isRecruiter = location.pathname.includes('/dashboard/recruiter');

  const candidateItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard/candidate' },
    { icon: Briefcase, label: 'Applications', path: '/dashboard/candidate/applications' },
    { icon: Bookmark, label: 'Saved Jobs', path: '/dashboard/candidate/saved' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/candidate/messages' },
    { icon: User, label: 'Profile', path: '/dashboard/candidate/profile' },
    { icon: Settings, label: 'Settings', path: '/dashboard/candidate/settings' },
  ];

  const recruiterItems = [
    { icon: LayoutDashboard, label: 'Analytics', path: '/dashboard/recruiter' },
    { icon: Briefcase, label: 'Jobs', path: '/dashboard/recruiter/jobs' },
    { icon: User, label: 'Candidates', path: '/dashboard/recruiter/candidates' },
    { icon: MessageSquare, label: 'Interviews', path: '/dashboard/recruiter/interviews' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/recruiter/notifications' },
    { icon: Settings, label: 'Settings', path: '/dashboard/recruiter/settings' },
  ];

  const menuItems = isRecruiter ? recruiterItems : candidateItems;

  return (
    <div className="min-h-screen bg-muted/20 flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-background border rounded-2xl p-4 sticky top-24">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-indigo-600 text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
