import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  DollarSign, 
  Share2, 
  Bookmark, 
  ChevronLeft,
  Building2,
  Globe,
  Users
} from 'lucide-react';

export default function JobDetailsPage() {
  useParams();

  // In a real app, we'd fetch job data by ID
  const job = {
    title: 'Senior Frontend Developer',
    company: 'TechFlow',
    location: 'Remote',
    type: 'Full-time',
    salary: '$120k - $150k',
    posted: '2 days ago',
    description: `We are looking for a Senior Frontend Developer to join our core product team. You will be responsible for building and maintaining high-quality user interfaces for our recruitment platform.`,
    responsibilities: [
      'Lead the development of new features using React and TypeScript.',
      'Architect scalable and maintainable frontend solutions.',
      'Collaborate with designers to implement pixel-perfect UIs.',
      'Mentor junior developers and conduct code reviews.',
      'Optimize application performance for maximum speed and scalability.'
    ],
    requirements: [
      '5+ years of experience with React and modern JavaScript.',
      'Strong proficiency in TypeScript and Tailwind CSS.',
      'Experience with state management libraries (Redux, Zustand, etc.).',
      'Solid understanding of web performance and accessibility.',
      'Excellent communication and collaboration skills.'
    ],
    benefits: [
      'Competitive salary and equity package.',
      'Fully remote work environment.',
      'Flexible working hours.',
      'Health, dental, and vision insurance.',
      'Annual learning and development budget.'
    ],
    companyDetails: {
      description: 'TechFlow is a fast-growing SaaS company dedicated to revolutionizing the way teams collaborate on software development.',
      size: '50-100 employees',
      founded: '2018',
      website: 'www.techflow.io'
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link to="/jobs" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-indigo-600 mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-background border rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-2xl shrink-0">
                    {job.company[0]}
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> {job.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Posted {job.posted}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Bookmark className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="shrink-0">
                    <Share2 className="w-5 h-5" />
                  </Button>
                  <Button className="flex-1 md:flex-none px-8">Apply Now</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  <Briefcase className="w-4 h-4 mr-2" /> {job.type}
                </Badge>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  <DollarSign className="w-4 h-4 mr-1" /> {job.salary}
                </Badge>
              </div>

              <div className="prose prose-indigo dark:prose-invert max-w-none">
                <h3 className="text-xl font-bold mb-4">Job Description</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">{job.description}</p>

                <h3 className="text-xl font-bold mb-4">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  {job.requirements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  {job.benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-muted-foreground">{job.companyDetails.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>{job.companyDetails.size}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Globe className="w-4 h-4 text-muted-foreground" />
                    <a href="#" className="text-indigo-600 hover:underline">{job.companyDetails.website}</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Founded in {job.companyDetails.founded}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">View Company Profile</Button>
              </CardContent>
            </Card>

            {/* Quick Summary */}
            <Card className="bg-indigo-600 text-white border-0">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-bold text-xl">Don't miss this opportunity</h3>
                <p className="text-indigo-100 text-sm">
                  Apply today and our AI will prioritize your application if your skills match the requirements perfectly.
                </p>
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-0 font-bold">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
