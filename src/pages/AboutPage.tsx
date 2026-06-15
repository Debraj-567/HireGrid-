import { motion } from 'framer-motion';
import { Target, Users, Heart, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  const values = [
    { title: 'Innovation', description: 'Pushing boundaries in AI-driven recruitment.', icon: Lightbulb },
    { title: 'Transparency', description: 'Building trust through clear communication.', icon: Target },
    { title: 'Empowerment', description: 'Giving talent the tools they need to succeed.', icon: Heart },
    { title: 'Collaboration', description: 'Fostering strong partnerships between teams.', icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-indigo-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our Mission is to Connect <br/> Exceptional Talent with Opportunity
          </motion.h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            We believe that the right job can transform a life, and the right hire can transform a company.
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The HireGrid Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2024, HireGrid started with a simple observation: the traditional recruitment process was broken. Job seekers were lost in a sea of generic postings, and recruiters were overwhelmed by irrelevant applications.
                </p>
                <p>
                  We saw an opportunity to use advanced AI to bring precision and human-centric design to hiring. Our platform was built from the ground up to prioritize quality over quantity, matching candidates not just on keywords, but on potential, culture, and shared values.
                </p>
                <p>
                  Today, HireGrid is the fastest-growing recruitment platform for modern tech teams, trusted by thousands of companies worldwide.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-3xl h-96 flex items-center justify-center font-bold text-muted-foreground italic">
              [Image: Team working together]
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-background p-8 rounded-2xl shadow-sm border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
