import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Briefcase, 
  BarChart3, 
  Clock, 
  Plus,
  ArrowUpRight,
  Search,
  MoreVertical
} from 'lucide-react';

export default function RecruiterDashboard() {
  const stats = [
    { label: 'Active Jobs', value: '8', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'Total Candidates', value: '1,240', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { label: 'Interviews Today', value: '5', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-100' },
    { label: 'Hiring Rate', value: '+12%', icon: BarChart3, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const activeJobs = [
    { title: 'Senior Frontend Developer', applicants: 45, status: 'Active', date: '2 days ago' },
    { title: 'Product Designer', applicants: 28, status: 'Active', date: '4 days ago' },
    { title: 'Full Stack Engineer', applicants: 62, status: 'Urgent', date: '1 day ago' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Recruiter Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your job postings and track candidate pipelines.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            Export Data
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" /> Post a Job
          </Button>
        </div>
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
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("p-2 rounded-lg", stat.bg)}>
                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                  </div>
                  <span className="text-green-600 text-xs font-medium flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" /> 2.5%
                  </span>
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
        {/* Active Jobs Pipeline */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Active Job Postings</h2>
            <div className="relative w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
              <input 
                placeholder="Search jobs..." 
                className="w-full bg-background border rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>
          
          <div className="bg-background border rounded-2xl overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="px-6 py-4 text-sm font-semibold">Job Title</th>
                  <th className="px-6 py-4 text-sm font-semibold">Applicants</th>
                  <th className="px-6 py-4 text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-sm font-semibold">Posted</th>
                  <th className="px-6 py-4 text-sm font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {activeJobs.map((job, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-6 py-4 font-medium text-sm">{job.title}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{job.applicants}</span>
                        <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                          <div className="bg-indigo-600 h-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={job.status === 'Urgent' ? 'destructive' : 'secondary'} className="text-[10px] px-2 py-0">
                        {job.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{job.date}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Talent Insights (AI Ranking) */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Talent Insights</h2>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Top AI-Ranked Candidates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-4">
              {[
                { name: 'Alex Rivera', role: 'UI Engineer', score: 98 },
                { name: 'Maya Gupta', role: 'Product Lead', score: 95 },
                { name: 'James Wilson', role: 'Full Stack', score: 92 },
              ].map((talent, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600">
                      {talent.name[0]}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm group-hover:text-indigo-600 transition-colors">{talent.name}</h4>
                      <p className="text-xs text-muted-foreground">{talent.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-indigo-600">{talent.score}%</p>
                    <p className="text-[10px] text-muted-foreground">Match</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 text-sm">View All Candidates</Button>
            </CardContent>
          </Card>

          <Card className="bg-muted/50 border-dashed">
            <CardContent className="p-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-background border flex items-center justify-center mx-auto">
                <Plus className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium">Add New Pipeline</p>
              <p className="text-xs text-muted-foreground">Customize your recruitment flow with AI-driven stages.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Helper for cn
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
