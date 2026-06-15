import { Search, MapPin, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockJobs = [
  { id: 1, title: 'Senior Frontend Developer', company: 'TechFlow', location: 'Remote', salary: '$120k - $150k', type: 'Full-time', tags: ['React', 'TypeScript', 'Tailwind'] },
  { id: 2, title: 'Product Manager', company: 'InnovateInc', location: 'New York, NY', salary: '$130k - $160k', type: 'Hybrid', tags: ['Product', 'Agile', 'B2B'] },
  { id: 3, title: 'Backend Engineer', company: 'Acme Corp', location: 'San Francisco, CA', salary: '$140k - $170k', type: 'On-site', tags: ['Node.js', 'PostgreSQL', 'AWS'] },
  { id: 4, title: 'UX Designer', company: 'Quantum Leap', location: 'Remote', salary: '$100k - $130k', type: 'Full-time', tags: ['Figma', 'Prototyping', 'Research'] },
];

export default function JobSearchPage() {
  return (
    <div className="min-h-screen bg-muted/20 py-8">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="bg-background border rounded-2xl p-4 shadow-sm mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input placeholder="Job title, keywords, or company" className="pl-10 h-12 border-0 bg-muted/50" />
          </div>
          <div className="hidden md:block w-px bg-border"></div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input placeholder="City, state, or 'Remote'" className="pl-10 h-12 border-0 bg-muted/50" />
          </div>
          <Button size="lg" className="h-12 px-8">Search Jobs</Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Filter className="w-5 h-5" /> Filters
              </h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground">Clear all</Button>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Job Type</h4>
              <div className="space-y-2">
                {['Full-time', 'Part-time', 'Contract', 'Freelance'].map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <span className="text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium text-sm">Work Model</h4>
              <div className="space-y-2">
                {['Remote', 'Hybrid', 'On-site'].map(model => (
                  <label key={model} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                    <span className="text-sm">{model}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Job Listings */}
          <main className="flex-1 space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended Jobs <span className="text-muted-foreground text-base font-normal">(245 found)</span></h2>
              <select className="bg-background border rounded-md px-3 py-1.5 text-sm outline-none">
                <option>Most Relevant</option>
                <option>Most Recent</option>
                <option>Highest Paid</option>
              </select>
            </div>

            {mockJobs.map(job => (
              <Card key={job.id} className="hover:border-indigo-500/50 hover:shadow-md transition-all cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-xl">
                        {job.company[0]}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company} • {job.location}</p>
                        
                        <div className="flex gap-2 mt-4">
                          <Badge variant="secondary">{job.type}</Badge>
                          <Badge variant="outline">{job.salary}</Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline">Apply Now</Button>
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                    {job.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
