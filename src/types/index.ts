export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Freelance' | 'Remote';
  salary: string;
  postedAt: string;
  description: string;
  tags: string[];
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar?: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  school: string;
  degree: string;
  year: string;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  size: string;
  website: string;
  description: string;
}
