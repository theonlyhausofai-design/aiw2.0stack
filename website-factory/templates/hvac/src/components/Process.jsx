import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function Process() {
  const { copy, process_steps } = brandDNA;
  const sec = copy.process;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
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

        {/* Step cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(process_steps || []).map((step, i) => (
            <motion.div
              key={i}
              className="relative bg-gray-50 border border-gray-200 rounded-xl p-6 text-center"
              variants={fadeUp}
            >
              {/* Number circle */}
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {i + 1}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>

              {/* Connector line (hidden on mobile and last item) */}
              {i < (process_steps || []).length - 1 && (
                <div
                  className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-primary/30"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Badge element */}
        {sec.badge && (
          <motion.div
            className="mt-10 flex justify-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-full px-6 py-3">
              <span className="text-2xl font-extrabold text-primary">{sec.badge.value}</span>
              <span className="text-sm font-medium text-gray-700">{sec.badge.label}</span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
