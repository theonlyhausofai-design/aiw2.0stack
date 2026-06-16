import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function AccordionItem({ question, answer, isOpen, onToggle, id }) {
  return (
    <div className="border-b border-gray-200">
      <h3>
        <button
          type="button"
          className="w-full flex items-center justify-between py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${id}`}
          id={`faq-question-${id}`}
        >
          <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
            {question}
          </span>
          <svg
            className={`w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${id}`}
            role="region"
            aria-labelledby={`faq-question-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm sm:text-base text-gray-600 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const { copy, faq } = brandDNA;
  const sec = copy.faq;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
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
            <p className="text-base sm:text-lg text-gray-600">{sec.body}</p>
          )}
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="border-t border-gray-200"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {(faq || []).map((item, i) => (
            <AccordionItem
              key={i}
              id={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
