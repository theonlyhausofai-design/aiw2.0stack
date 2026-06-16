import { useRef } from 'react';
import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

function StarRow({ count, size = 'w-4 h-4' }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${size} ${i < Math.round(count) ? 'text-yellow-400' : 'text-gray-300'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export function Reviews() {
  const { copy, reviews } = brandDNA;
  const sec = copy.reviews;
  const scrollRef = useRef(null);

  function scroll(direction) {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  }

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10"
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {sec.heading}
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <StarRow count={reviews.rating} size="w-5 h-5" />
            <span className="text-lg font-bold text-gray-900">{reviews.rating}</span>
          </div>
          <p className="text-sm text-gray-500">
            Based on {reviews.totalReviewCount} reviews
          </p>
        </motion.div>

        {/* Carousel controls */}
        <div className="flex justify-end gap-2 mb-4">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-gray-300 hover:border-primary text-gray-600 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Scroll reviews left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-gray-300 hover:border-primary text-gray-600 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Scroll reviews right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Horizontal carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide"
          role="list"
          aria-label="Customer reviews"
        >
          {(reviews.items || []).map((review, i) => (
            <motion.article
              key={i}
              className="flex-shrink-0 w-[300px] sm:w-[340px] snap-start bg-gray-50 border border-gray-200 rounded-xl p-6"
              role="listitem"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
            >
              <StarRow count={review.rating || reviews.rating} />
              <p className="text-sm text-gray-700 mt-3 mb-4 leading-relaxed line-clamp-5">
                {review.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">{review.author}</span>
                {review.source && (
                  <span className="text-xs font-medium text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                    {review.source}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
