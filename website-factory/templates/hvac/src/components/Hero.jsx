import { useState } from 'react';
import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const { copy, contact } = brandDNA;
  const hero = copy.hero;
  const trustChips = copy.heroTrustChips || [];

  const [formData, setFormData] = useState({ name: '', phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary via-primary-deep to-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
        {/* Left content - 60% on desktop */}
        <motion.div
          className="lg:col-span-3 text-white"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Eyebrow */}
          {hero.eyebrow && (
            <motion.span
              className="inline-block text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3"
              variants={fadeUp}
            >
              {hero.eyebrow}
            </motion.span>
          )}

          {/* Headline */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            variants={fadeUp}
          >
            {hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-xl mb-6"
            variants={fadeUp}
          >
            {hero.subheadline}
          </motion.p>

          {/* Trust chips */}
          {trustChips.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2 mb-8"
              variants={fadeUp}
            >
              {trustChips.map((chip, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full border border-white/20"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          )}

          {/* Dual CTA */}
          <motion.div className="flex flex-col sm:flex-row gap-3" variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold text-base px-8 py-3.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              {hero.ctaPrimary || copy.buttonText}
            </a>
            <a
              href={contact.phoneTelLink}
              className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label={`Call us at ${contact.phone}`}
            >
              {hero.ctaSecondary || contact.phone}
            </a>
          </motion.div>
        </motion.div>

        {/* Right form - 40% on desktop */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              {copy.formHeader}
            </h2>
            <p className="text-sm text-gray-500 mb-5">
              {copy.formSubtext}
            </p>

            {submitted ? (
              <div className="text-center py-8" role="status">
                <p className="text-primary font-semibold text-lg">Thank you!</p>
                <p className="text-gray-600 text-sm mt-1">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="sr-only" htmlFor="hero-name">
                  Your name
                </label>
                <input
                  id="hero-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />

                <label className="sr-only" htmlFor="hero-phone">
                  Phone number
                </label>
                <input
                  id="hero-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />

                <label className="sr-only" htmlFor="hero-service">
                  Select a service
                </label>
                <select
                  id="hero-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {(hero.serviceOptions || []).map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-3.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  {copy.submitButton}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
