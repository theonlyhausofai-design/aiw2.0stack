import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Services() {
  const { copy, services } = brandDNA;
  const sec = copy.services;

  return (
    <section id="services" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {sec.label && (
            <motion.span
              className="inline-block text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2"
              variants={fadeUp}
            >
              {sec.label}
            </motion.span>
          )}
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4"
            variants={fadeUp}
          >
            {sec.heading}
          </motion.h2>
          {sec.body && (
            <motion.p className="text-base sm:text-lg text-gray-600" variants={fadeUp}>
              {sec.body}
            </motion.p>
          )}
        </motion.div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(services || []).map((svc, i) => (
            <motion.article
              key={i}
              className="group bg-gray-50 hover:bg-white border border-gray-200 hover:border-primary/30 rounded-xl p-6 transition-colors focus-within:ring-2 focus-within:ring-primary"
              variants={fadeUp}
            >
              {/* Icon placeholder */}
              <div
                className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4"
                aria-hidden="true"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.22-3.01a1.5 1.5 0 010-2.6l9.9-5.71a1.5 1.5 0 011.5 0l.35.2M16 3.13a2.5 2.5 0 013 0l.35.2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.name}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{svc.shortBody}</p>

              <a
                href={svc.href || '#contact'}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-deep transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
