export function TrustedCompanies() {
  // In a real app, these would be SVG logos
  const companies = ['Acme Corp', 'GlobalTech', 'InnovateInc', 'NextGen Solutions', 'Quantum Leap'];

  return (
    <section className="py-12 border-y bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8 tracking-wider uppercase">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {companies.map((company, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold text-foreground font-serif">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
