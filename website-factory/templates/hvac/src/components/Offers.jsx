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

export function Offers() {
  const { copy, special_offers } = brandDNA;
  const sec = copy.offers;

  return (
    <section className="py-16 md:py-24 px-4 bg-accent/5">
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

        {/* Offer cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {(special_offers || []).map((offer, i) => (
            <motion.div
              key={i}
              className="relative bg-white border-2 border-accent/20 rounded-xl p-6 hover:border-accent/50 hover:shadow-lg transition-all"
              variants={fadeUp}
            >
              {offer.badge && (
                <span className="absolute -top-3 left-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                  {offer.badge}
                </span>
              )}

              <h3 className="text-lg font-bold text-gray-900 mb-2 mt-1">{offer.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{offer.description}</p>

              {offer.value && (
                <p className="text-2xl font-extrabold text-accent mb-4">{offer.value}</p>
              )}

              {offer.terms && (
                <p className="text-xs text-gray-400">{offer.terms}</p>
              )}

              <a
                href={offer.href || '#contact'}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                {offer.ctaText || 'Claim this offer'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Financing note */}
        {sec.financingNote && (
          <motion.p
            className="text-center text-sm text-gray-500 mt-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {sec.financingNote}
          </motion.p>
        )}
      </div>
    </section>
  );
}
