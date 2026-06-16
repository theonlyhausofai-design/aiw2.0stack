import { motion } from 'framer-motion';
import { brandDNA } from '../config/brand-dna';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export function Footer() {
  const { company, contact, hours, services, copy, social } = brandDNA;

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-white" role="contentinfo">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12 md:py-16"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Logo + description */}
          <div>
            <p className="text-xl font-bold mb-3">{company.name}</p>
            {company.description && (
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                {company.description}
              </p>
            )}
            {/* Social icons */}
            {social && (
              <div className="flex gap-3 mt-4">
                {social.facebook && (
                  <a
                    href={social.facebook}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-bold" aria-hidden="true">f</span>
                  </a>
                )}
                {social.instagram && (
                  <a
                    href={social.instagram}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-bold" aria-hidden="true">ig</span>
                  </a>
                )}
                {social.google && (
                  <a
                    href={social.google}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Google"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-bold" aria-hidden="true">G</span>
                  </a>
                )}
                {social.yelp && (
                  <a
                    href={social.yelp}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label="Yelp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-sm font-bold" aria-hidden="true">Y</span>
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              Services
            </h3>
            <ul className="space-y-2">
              {(services || []).slice(0, 6).map((svc, i) => (
                <li key={i}>
                  <a
                    href={svc.href || '#services'}
                    className="text-sm text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {svc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + hours */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-accent">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              {contact.phone && (
                <li>
                  <a
                    href={contact.phoneTelLink}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.address && <li>{contact.address}</li>}
              {hours.display && (
                <li className="pt-2 border-t border-white/10">{hours.display}</li>
              )}
            </ul>

            {copy.footerCta && (
              <a
                href="#contact"
                className="inline-block mt-4 bg-accent hover:bg-accent/90 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {copy.footerCta}
              </a>
            )}
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/50">
            {copy.copyright || `\u00A9 ${new Date().getFullYear()} ${company.name}. All rights reserved.`}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
