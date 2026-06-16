import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Gallery() {
  const { copy, previous_projects } = brandDNA;
  const sec = copy.gallery;
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
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

        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(previous_projects || []).map((project, i) => (
            <motion.button
              key={i}
              type="button"
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={() => setLightbox(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              aria-label={`View project: ${project.title || `Project ${i + 1}`}`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title || `Project ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                  Project photo
                </div>
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-4">
                {project.title && (
                  <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.title}
                  </span>
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image lightbox"
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute -top-12 right-0 text-white hover:text-accent p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {previous_projects[lightbox]?.image && (
                <img
                  src={previous_projects[lightbox].image}
                  alt={previous_projects[lightbox].title || 'Project detail'}
                  className="w-full rounded-xl shadow-2xl"
                />
              )}

              {previous_projects[lightbox]?.title && (
                <p className="text-white text-center mt-4 font-semibold">
                  {previous_projects[lightbox].title}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
