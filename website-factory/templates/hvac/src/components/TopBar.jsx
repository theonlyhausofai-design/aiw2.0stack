import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeIn = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function TopBar() {
  const { hours, contact, copy } = brandDNA;

  return (
    <motion.div
      className="bg-primary w-full py-2 px-4 text-white text-sm"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Emergency badge */}
        <span className="inline-flex items-center gap-1.5 font-semibold text-xs sm:text-sm">
          <span
            className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"
            aria-hidden="true"
          />
          {hours.emergencyBadge}
        </span>

        {/* Phone - always visible */}
        <a
          href={contact.phoneTelLink}
          className="font-bold text-sm sm:text-base tracking-wide hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label={`Call us at ${contact.phone}`}
        >
          {contact.phone}
        </a>

        {/* Hours + CTA - hidden on mobile */}
        <span className="hidden md:inline-flex items-center gap-3 text-xs sm:text-sm">
          <span className="opacity-80">{hours.display}</span>
          {copy.topBar?.cta && (
            <span className="font-semibold text-accent">{copy.topBar.cta}</span>
          )}
        </span>
      </div>
    </motion.div>
  );
}
