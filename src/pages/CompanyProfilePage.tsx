import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Users, 
  Globe, 
  Briefcase, 
  CheckCircle2,
  Heart
} from 'lucide-react';

export default function CompanyProfilePage() {
  useParams();

  const company = {
    name: 'TechFlow',
    industry: 'Enterprise Software',
    location: 'Remote / San Francisco',
    size: '50-100 employees',
    website: 'www.techflow.io',
    description: 'TechFlow is a fast-growing SaaS company dedicated to revolutionizing the way teams collaborate on software development. Our mission is to provide developers with the tools they need to build great things faster.',
    tagline: 'Streamlining development workflows with AI.',
    benefits: [
      'Competitive Equity',
      'Remote-first Culture',
      'Flexible PTO',
      'Learning Stipend',
      'Health & Wellness',
      'Home Office Setup'
    ],
    openPositions: [
      { title: 'Senior Frontend Developer', type: 'Full-time', location: 'Remote' },
      { title: 'Product Manager', type: 'Full-time', location: 'Hybrid' },
      { title: 'UX/UI Designer', type: 'Contract', location: 'Remote' }
    ]
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Company Banner */}
      <div className="h-64 bg-gradient-to-r from-indigo-600 to-violet-600 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 h-full relative">
          <div className="absolute -bottom-16 left-4 md:left-8">
            <div className="w-32 h-32 rounded-2xl bg-white shadow-xl flex items-center justify-center font-bold text-indigo-600 text-5xl border-4 border-background">
              {company.name[0]}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{company.name}</h1>
                  <p className="text-xl text-muted-foreground">{company.tagline}</p>
                </div>
                <Button variant="outline" className="gap-2">
                  <Heart className="w-4 h-4" /> Follow
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {company.industry}</span>
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {company.location}</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {company.size}</span>
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> <a href="#" className="text-indigo-600 hover:underline">{company.website}</a></span>
              </div>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">About {company.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {company.description}
              </p>
            </section>

            <section className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Open Positions</h2>
                <Badge variant="secondary" className="px-3 py-1">{company.openPositions.length} active roles</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {company.openPositions.map((job, i) => (
                  <Card key={i} className="hover:border-indigo-500/50 transition-colors cursor-pointer group">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg group-hover:text-indigo-600 transition-colors mb-2">{job.title}</h4>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full h-12">View All Jobs</Button>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Why Join Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {company.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-xl">Hiring Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">1</div>
                  <div>
                    <h4 className="font-bold text-sm">Initial Screen</h4>
                    <p className="text-xs text-muted-foreground mt-1">30-minute talk with our talent team.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">2</div>
                  <div>
                    <h4 className="font-bold text-sm">Technical Task</h4>
                    <p className="text-xs text-muted-foreground mt-1">Take-home project or live coding.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 text-sm">3</div>
                  <div>
                    <h4 className="font-bold text-sm">Final Rounds</h4>
                    <p className="text-xs text-muted-foreground mt-1">Meet the team and founders.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
