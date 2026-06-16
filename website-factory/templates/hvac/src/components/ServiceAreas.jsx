import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export function ServiceAreas() {
  const { copy, serviceAreas } = brandDNA;
  const sec = copy.serviceAreas;

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
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

        {/* City grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(serviceAreas || []).map((area, i) => (
            <motion.a
              key={i}
              href={area.href || `#${area.name?.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-gray-800 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              variants={fadeUp}
            >
              <svg
                className="w-4 h-4 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              {area.name || area}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
