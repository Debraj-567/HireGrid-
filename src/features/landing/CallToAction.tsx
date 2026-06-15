import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-900"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-indigo-100">
            Join thousands of professionals and companies already using HireGrid to find the perfect match.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold text-indigo-600">
              Find a Job
            </Button>
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-indigo-950 text-white hover:bg-indigo-900 border border-indigo-500">
              Hire Talent
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
