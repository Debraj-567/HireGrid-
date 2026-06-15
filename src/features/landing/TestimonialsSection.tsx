import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering at TechFlow",
    content: "HireGrid transformed our hiring process. The AI matching is uncannily accurate, and we've cut our time-to-hire by 40%. It's the best platform I've used in my 15-year career.",
    avatar: "S"
  },
  {
    name: "David Chen",
    role: "Senior Frontend Developer",
    content: "Within two weeks of joining HireGrid, I had three interviews with top-tier companies. The transparency and ease of use for candidates is unparalleled.",
    avatar: "D"
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Talent at Innovate",
    content: "The analytics and pipeline tools are enterprise-grade. It's beautiful to look at, but more importantly, it actually delivers on its promises.",
    avatar: "E"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Teams & Talent</h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our users have to say about their experience on HireGrid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg italic text-muted-foreground">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
