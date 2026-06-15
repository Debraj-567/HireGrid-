import { motion } from 'framer-motion';

export function StatisticsSection() {
  const stats = [
    { label: 'Active Candidates', value: '2M+' },
    { label: 'Companies Hiring', value: '15,000+' },
    { label: 'Jobs Filled', value: '500k+' },
    { label: 'Avg. Time to Hire', value: '14 Days' },
  ];

  return (
    <section className="py-24 bg-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-5xl font-bold">{stat.value}</h3>
              <p className="text-indigo-100 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
