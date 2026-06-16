import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export function Founder() {
  const { copy, team } = brandDNA;
  const sec = copy.founder;
  const founder = team?.founder;

  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {founder?.image ? (
            <img
              src={founder.image}
              alt={founder.name || 'Company founder'}
              className="w-full rounded-2xl shadow-lg object-cover aspect-[4/5] max-h-[600px]"
              loading="lazy"
            />
          ) : (
            <div
              className="w-full rounded-2xl bg-gray-100 flex items-center justify-center aspect-[4/5] max-h-[600px]"
              aria-hidden="true"
            >
              <span className="text-gray-400 text-sm">Founder photo</span>
            </div>
          )}
        </motion.div>

        {/* Text */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {sec.label && (
            <span className="inline-block text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
              {sec.label}
            </span>
          )}

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {sec.heading}
          </h2>

          {sec.body && (
            <div className="space-y-4 text-base text-gray-600 leading-relaxed mb-6">
              {Array.isArray(sec.body)
                ? sec.body.map((para, i) => <p key={i}>{para}</p>)
                : <p>{sec.body}</p>
              }
            </div>
          )}

          {founder?.name && (
            <div className="border-t border-gray-200 pt-4">
              <p className="text-lg font-bold text-gray-900">{founder.name}</p>
              {founder.title && (
                <p className="text-sm text-gray-500">{founder.title}</p>
              )}
              {founder.credentials && (
                <p className="text-xs text-gray-400 mt-1">{founder.credentials}</p>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
