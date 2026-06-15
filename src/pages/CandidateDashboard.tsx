import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  Briefcase,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function CandidateDashboard() {
  const stats = [
    { label: 'Total Applications', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Active Interviews', value: '3', icon: Clock, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Offers Received', value: '1', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-100' },
    { label: 'Profile Views', value: '45', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const recentApplications = [
    { company: 'TechFlow', role: 'Senior Frontend Developer', date: '2 days ago', status: 'In Review', statusColor: 'text-blue-600 bg-blue-100' },
    { company: 'InnovateInc', role: 'Product Manager', date: '5 days ago', status: 'Interview', statusColor: 'text-indigo-600 bg-indigo-100' },
    { company: 'Acme Corp', role: 'Backend Engineer', date: '1 week ago', status: 'Rejected', statusColor: 'text-red-600 bg-red-100' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, John! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your job applications.</p>
        </div>
        <Button>
          Search New Jobs
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={cn("p-2 rounded-lg", stat.bg)}>
                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Applications */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Recent Applications</h2>
            <Button variant="ghost" size="sm" className="text-indigo-600">View All</Button>
          </div>
          <div className="space-y-3">
            {recentApplications.map((app, i) => (
              <Card key={i} className="hover:border-indigo-500/50 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                      {app.company[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{app.role}</h4>
                      <p className="text-xs text-muted-foreground">{app.company} • Applied {app.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge className={cn("px-2 py-0.5 text-[10px]", app.statusColor)}>
                      {app.status}
                    </Badge>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI Recommendations & Profile Score */}
        <div className="space-y-8">
          <Card className="bg-gradient-to-br from-indigo-600 to-violet-600 text-white border-0">
            <CardHeader>
              <CardTitle className="text-lg">AI Profile Score</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32">
                  <circle className="text-indigo-400/30" strokeWidth="8" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64" />
                  <circle className="text-white" strokeWidth="8" strokeDasharray="364.4" strokeDashoffset="54.6" strokeLinecap="round" stroke="currentColor" fill="transparent" r="58" cx="64" cy="64" />
                </svg>
                <span className="absolute text-3xl font-bold">85%</span>
              </div>
              <p className="text-sm text-indigo-100">
                Your profile is looking great! Add your portfolio to reach 100%.
              </p>
              <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-0 font-bold">
                Improve Score
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((_, i) => (
                <div key={i} className="group cursor-pointer">
                  <h4 className="font-semibold text-sm group-hover:text-indigo-600 transition-colors">Frontend Lead</h4>
                  <p className="text-xs text-muted-foreground mb-2">GlobalTech • Remote</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-indigo-600">$140k - $180k</span>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-indigo-600" />
                  </div>
                  {i === 0 && <div className="h-px bg-border my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper for cn (reuse from utils)
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
