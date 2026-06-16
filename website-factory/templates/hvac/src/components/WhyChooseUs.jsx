import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function WhyChooseUs() {
  const { copy, why_choose_us } = brandDNA;
  const sec = copy.whyChoose;

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

        {/* Feature cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(why_choose_us || []).map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow"
              variants={fadeUp}
            >
              {/* Icon placeholder */}
              <div
                className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4"
                aria-hidden="true"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
