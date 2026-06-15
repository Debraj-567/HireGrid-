import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, HelpCircle } from 'lucide-react';

export default function ContactPage() {
  const faqs = [
    { q: "How does AI matching work?", a: "Our AI analyzes skills, experience, and job requirements to calculate a compatibility score for every candidate." },
    { q: "Is HireGrid free for candidates?", a: "Yes! Job seekers can search, apply, and use our AI profile tools completely free of charge." },
    { q: "Can I cancel my recruiter subscription?", a: "Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your dashboard." },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <section className="py-24 text-center container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Have questions about our platform? Our team is here to help you find the perfect match.
        </p>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-sm text-muted-foreground mt-1">support@hiregrid.io</p>
                  <p className="text-sm text-muted-foreground">sales@hiregrid.io</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-sm text-muted-foreground mt-1">+1 (555) 000-0000</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-bold">Visit Us</h4>
                  <p className="text-sm text-muted-foreground mt-1">123 Tech Plaza, Suite 456</p>
                  <p className="text-sm text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>

            <Card className="bg-indigo-600 text-white border-0 overflow-hidden relative">
              <CardContent className="p-8 space-y-4 relative z-10">
                <MessageSquare className="w-8 h-8 opacity-50" />
                <h3 className="text-xl font-bold">Live Chat</h3>
                <p className="text-indigo-100 text-sm">Need immediate help? Chat with our support team in real-time.</p>
                <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 border-0">Start Chat</Button>
              </CardContent>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <Button className="w-full h-12 bg-indigo-600 text-lg">Send Message</Button>
              </CardContent>
            </Card>

            {/* FAQs */}
            <div className="mt-16 space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600" /> Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold">{faq.q}</h4>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
