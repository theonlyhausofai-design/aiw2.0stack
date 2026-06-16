import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function StarIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
    </svg>
  );
}

export function TrustStrip() {
  const { reviews, trust_badges, copy } = brandDNA;
  const trustClaims = copy.trustClaims || [];

  return (
    <motion.section
      className="bg-gray-50 border-y border-gray-200 py-6 px-4"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      aria-label="Trust indicators"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop: horizontal row */}
        <div className="hidden md:flex items-center justify-center gap-6 lg:gap-10 flex-wrap">
          {/* Google rating */}
          <div className="flex items-center gap-2">
            <div className="flex" aria-label={`${reviews.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(reviews.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">{reviews.rating}</span>
            <span className="text-sm text-gray-500">
              ({reviews.googleCount} {reviews.googleLabel})
            </span>
          </div>

          <span className="w-px h-6 bg-gray-300" aria-hidden="true" />

          {/* Trust badges */}
          {(trust_badges || []).map((badge, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700"
            >
              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold" aria-hidden="true">
                &#10003;
              </span>
              {badge}
            </span>
          ))}

          {trustClaims.length > 0 && (
            <span className="w-px h-6 bg-gray-300" aria-hidden="true" />
          )}

          {/* Trust claims */}
          {trustClaims.map((claim, i) => (
            <span key={i} className="text-sm font-medium text-gray-700">
              {claim}
            </span>
          ))}
        </div>

        {/* Mobile: 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {/* Google rating */}
          <div className="flex flex-col items-center gap-1 text-center">
            <div className="flex" aria-label={`${reviews.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.round(reviews.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">
              {reviews.googleCount} {reviews.googleLabel}
            </span>
          </div>

          {/* Show first badge */}
          {(trust_badges || []).slice(0, 1).map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold" aria-hidden="true">
                &#10003;
              </span>
              <span className="text-xs font-medium text-gray-700">{badge}</span>
            </div>
          ))}

          {/* Show first two trust claims */}
          {trustClaims.slice(0, 2).map((claim, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center">
              <span className="text-xs font-medium text-gray-700">{claim}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
