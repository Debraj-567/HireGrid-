import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Mail, 
  MapPin, 
  Link as LinkIcon, 
  Github, 
  Linkedin, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  ExternalLink,
  Download
} from 'lucide-react';

export default function CandidateProfilePage() {
  useParams();

  const candidate = {
    name: 'Alex Rivera',
    role: 'Senior UI/UX Engineer',
    location: 'San Francisco, CA',
    about: 'I am a passionate UI/UX Engineer with 8+ years of experience in building modern web applications. I specialize in React, TypeScript, and Framer Motion, with a strong focus on accessibility and performance.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Figma', 'UI/UX Design', 'Next.js'],
    experience: [
      {
        company: 'TechFlow',
        role: 'Senior Frontend Developer',
        period: '2021 - Present',
        description: 'Leading the frontend team in developing high-performance SaaS tools. Implemented a design system that reduced development time by 30%.'
      },
      {
        company: 'InnovateInc',
        role: 'UI Engineer',
        period: '2018 - 2021',
        description: 'Developed and maintained complex user interfaces for data visualization dashboards.'
      }
    ],
    education: [
      {
        school: 'Stanford University',
        degree: 'B.S. in Computer Science',
        year: '2018'
      }
    ],
    projects: [
      {
        name: 'HireGrid UI Kit',
        description: 'A comprehensive, accessible UI library for recruitment platforms.',
        link: '#'
      },
      {
        name: 'DevSync',
        description: 'Real-time collaboration tool for remote engineering teams.',
        link: '#'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-muted/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Profile Info */}
          <div className="space-y-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-600 text-4xl mx-auto mb-6 border-4 border-background shadow-xl">
                  {candidate.name[0]}
                </div>
                <h1 className="text-2xl font-bold">{candidate.name}</h1>
                <p className="text-muted-foreground font-medium mb-4">{candidate.role}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" /> {candidate.location}
                </div>
                <div className="flex justify-center gap-3 mb-8">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <LinkIcon className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button className="w-full gap-2">
                    <Mail className="w-4 h-4" /> Message Alex
                  </Button>
                  <Button variant="outline" className="w-full gap-2">
                    <Download className="w-4 h-4" /> Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Skills Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Experience, Projects, etc. */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {candidate.about}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-indigo-600" /> Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {candidate.experience.map((exp, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-muted last:border-0 pb-8 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-background"></div>
                    <div>
                      <h4 className="font-bold text-lg">{exp.role}</h4>
                      <p className="text-indigo-600 font-medium">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-indigo-600" /> Key Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {candidate.projects.map((project, i) => (
                  <div key={i} className="p-4 border rounded-xl hover:border-indigo-500/50 transition-colors group">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{project.name}</h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-indigo-600" />
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-indigo-600" /> Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {candidate.education.map((edu, i) => (
                  <div key={i}>
                    <h4 className="font-bold">{edu.school}</h4>
                    <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    <p className="text-xs text-muted-foreground mt-1">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
